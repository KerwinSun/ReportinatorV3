class Writer {
  async writeIssue(context, Word, issueJSON) {
    const issueArray = issueJSON?.contents.includes("\r\n")
      ? issueJSON?.contents.split("\r\n").filter((item) => item !== "")
      : issueJSON?.contents.split("\n").filter((item) => item !== "");
    console.log(issueArray)
    const IssuesMap = this.transformIssuesArray(issueArray);
    const docBody = context.document.body;

    for (let issue of IssuesMap) {
      const paragraph = docBody.insertParagraph(issue.text, Word.InsertLocation.end);
      paragraph[issue.style.type] = issue.style.name;
    }
    await context.sync();
  }

  getTitleIndexes(issueArray) {
    return issueArray
      .map((element, index) => {
        if (element.substring(0, 3) === "---") {
          return index - 1;
        }
      })
      .filter((element) => element >= 0);
  }

  transformIssuesArray(issueArray) {
    const issuesMap = [];
    issueArray.map((element, index) => {
      element = element.trimStart().replace("â\x80\x93", "-");
      if (element.substring(0, 3) === "===") {
        issuesMap[issuesMap.length - 1].style = { type: "styleBuiltIn", name: "Heading3" };
      } else if (element.substring(0, 3) === "---") {
        issuesMap[issuesMap.length - 1].style = { type: "styleBuiltIn", name: "Heading2" };
      } else if (element.substring(0, 1) === "*") {
        element = element.substring(1);
        issuesMap.push({ text: element, style: { type: "style", name: "Bullet" } });
      } else {
        issuesMap.push({ text: element, style: { type: "style", name: "Body Text for Report" } });
      }
    });
    return issuesMap;
  }
}

export default Writer;
