class Writer {
  async writeIssue(context, Word, issueJSON) {
    const issueArray = issueJSON?.contents.includes("\r\n")
      ? issueJSON?.contents.split("\r\n").filter((item) => item !== "")
      : issueJSON?.contents.split("\n").filter((item) => item !== "");
    const IssuesMap = this.transformIssuesArray(issueArray);
    const selection = context.document.getSelection();

    for (let issue of IssuesMap) {
      const paragraph = await selection.insertParagraph(issue.text, Word.InsertLocation.before);
      paragraph[issue.style.type] = issue.style.name;
    }

    var searchResults = await context.document.body.search("\\*\\*\\*(*{1,})\\*\\*\\*", { matchWildcards: true });
    await searchResults.load();
    await context.sync();

    for (let result of searchResults.items) {
      result.insertHtml(result.text.replaceAll("***",""), "Replace")
      console.log(result)
      //result.font.bold = true;
      result.font.color = 'Red';
    }

    context.document.load();
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
    let coding = false;
    issueArray.map((element, index) => {
      element = element.trimStart().replace("â\x80\x93", "-");
      if (coding) {
        if (element.substring(0, 3) === "```") {
          coding = false;
        } else {
          issuesMap.push({ text: element, style: { type: "style", name: "Code" } });
        }
      } else {
        if (element.substring(0, 3) === "===") {
          issuesMap[issuesMap.length - 1].style = { type: "styleBuiltIn", name: "Heading3" };
        } else if (element.substring(0, 3) === "---") {
          issuesMap[issuesMap.length - 1].style = { type: "styleBuiltIn", name: "Heading2" };
        } else if (element.substring(0, 3) === "```") {
          coding = true;
        } else if (element.substring(0, 1) === "*" && element.substring(1, 3) != "**") {
          element = element.substring(1);
          issuesMap.push({ text: element, style: { type: "style", name: "Bullet" } });
        } else {
          issuesMap.push({ text: element, style: { type: "style", name: "Body Text for Report" } });
        }
      }
    });
    return issuesMap;
  }

  async applySpecialFonts(context, document) {
    const charRanges = paragraph.search("\\*\\*\\*(*{1,})\\*\\*\\*", { matchWildcards: true });
    charRanges.load();
    await context.sync();
    try {
      for (const range of charRanges.items) {
        await range.context.sync();
        await range.select();
      }
    } catch (e) {
      console.log(e);
    }
    return charRanges;
  }
}

export default Writer;
