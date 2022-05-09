class TemplateHandler {
  async templateIssue(context) {
    const customIssues = JSON.parse(localStorage.getItem("customFileData")) || [];

    const selection = context.document.getSelection();

    let paragraph = await selection.paragraphs.getFirst().load();
    let markdownFormat = "";
    let customIssue = { title: "", category: "custom_issues", contents: "" };
    while (paragraph) {
      try {
        await context.sync();
        let style = paragraph.style || paragraph.styleBuiltIn;

        if (style === "Heading 3") {
          markdownFormat += paragraph.text + "\r\n" + "===========================" + "\r\n\r\n";
          customIssue.title = paragraph.text;
        }
        if (style === "Heading 2") {
          markdownFormat += paragraph.text + "\r\n" + "-----------" + "\r\n";
        } else if (style === "Body Text for Report") {
          markdownFormat += paragraph.text + "\r\n";
        } else if (style.includes("Bullet")) {
          markdownFormat += "*" + paragraph.text + "\r\n";
        }

        //do stuff here
        paragraph = paragraph.getNext().load();
      } catch (e) {
        break;
      }
    }
    customIssue.contents = markdownFormat;
    customIssues.push(customIssue)
    localStorage.setItem("customFileData", JSON.stringify(customIssues));

    await context.sync();
  }
}

export default TemplateHandler;
