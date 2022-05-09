/* eslint-disable no-undef */
class Findings {
  constructor() {
    this.host = "https://gitlab.lateralsecurity.net/api/v4/";
    this.token = "glpat-TyaY-aaAQ8afMwTz54Cm";
    this.fileData = [];
  }

  async makeApiRequest(endpoint) {
    const response = await fetch(this.host + endpoint, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        Authorization: `bearer ${this.token}`,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return response;
  }

  //function to get every issue
  async getAllRepositoryFiles() {
    let currentPage = 1;
    let repoData = await (await this.makeApiRequest("projects/7/repository/tree?recursive=true&per_page=500")).json();
    while (true) {
      currentPage++;
      let pageData = await (
        await this.makeApiRequest(`projects/7/repository/tree?recursive=true&per_page=500&page=${currentPage}`)
      ).json();
      if (pageData.length == 0) {
        break;
      }
      repoData = repoData.concat(pageData);
    }
    return repoData;
  }

  //stub for testing
  // async getAllRepositoryFiles() {
  //   let repoData = await (await this.makeApiRequest("projects/7/repository/tree?recursive=true&per_page=30")).json();
  //   return repoData;
  // }

  async getFile(path) {
    return await (
      await this.makeApiRequest(`projects/7/repository/files/${encodeURIComponent(path)}?ref=master`)
    ).json();
  }

  async getAllFileData() {
    let data = []
    if (localStorage.getItem("fileData")) {
      console.log("loading from local");
      data.push(...JSON.parse(localStorage.getItem("fileData")));
    } else {
      const fileArray = await this.getAllRepositoryFiles();
      let issueCount = 0;
      for (const fileObject of fileArray) {
        let fileDataObject = fileObject.type == "blob" && (await this.getFile(fileObject.path));
        issueCount++;
        console.log(issueCount);
        let fileContentsDecoded = fileDataObject.content && atob(fileDataObject.content);
        fileDataObject &&
          this.fileData.push({
            title: fileContentsDecoded.split("\r")?.[0].split("\n")?.[0],
            category: fileObject.path.split("/")?.[0],
            contents: atob(fileDataObject.content),
          });
      }

      localStorage.setItem("fileData", JSON.stringify(this.fileData));
      data.push(...this.fileData);
    }
    if (localStorage.getItem("customFileData")) {
      console.log(JSON.parse(localStorage.getItem("customFileData")));
      data.push(...JSON.parse(localStorage.getItem("customFileData")));
    } 
    return data;
  }
}

export default Findings;
