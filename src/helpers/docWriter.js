class Writer {
    async writeIssue(context, Word, issueJSON) {
        const docBody = context.document.body;
        docBody.insertText(issueJSON.contents, Word.InsertLocation.end);
        await context.sync();
        console.log(context, issueJSON)
      }
}

export default Writer;
