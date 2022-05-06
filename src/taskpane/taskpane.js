/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global document, Office, Word */
Office.onReady((info) => {
  if (info.host === Office.HostType.Word) {
    document.getElementById("sideload-msg").style.display = "none";
    document.getElementById("app-body").style.display = "flex";
    //document.getElementById("run").onclick = run;
    document.getElementById("search").oninput = search;
  }
});

const Findings = require("../helpers/findingsHandler").default;

const searchOptions = {
  charset: "latin:extra",
  preset: "match",
  tokenize: "forward",
  cache: false,
  document: {
    id: "id",
    index: ["contents", "title", "category"],
    store: true,
  },
};

const { Document } = require("flexsearch");
const documentSearch = new Document(searchOptions);

const Writer = require("../helpers/docWriter").default;
const writer = new Writer();

let id = 0;
let categories = {};

fetch("../../assets").then((response) => {
  console.log(response);
});

const findings = new Findings();
findings.getAllFileData().then((findings) => {
  findings.forEach((finding) => {
    finding["id"] = id++;
    if (categories[finding.category] === undefined) {
      categories[finding.category] = 1;
    } else {
      categories[finding.category] += 1;
    }

    documentSearch.add(finding);
  });
  loadCategories();
});

// load the findings
// fetch("../../assets/findings.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((findings) => {
//     findings.forEach((finding) => {
//       finding["id"] = id++;
//       if (categories[finding.category] === undefined) {
//         categories[finding.category] = 1;
//       } else {
//         categories[finding.category] += 1;
//       }

//       documentSearch.add(finding);
//     });
//     loadCategories();
//   });

function loadCategories() {
  for (const [key, value] of Object.entries(categories)) {
    addCategoryItem(key, key.replaceAll("_", " "), value + " findings");
  }
  document.getElementsByClassName();
}

function addCategoryItem(id, name, tagline) {
  if (name.length > 25) {
    name = name.substring(0, 22) + "...";
  }

  document.getElementById("resultlist").innerHTML += `\
      <li class="ms-ListItem" tabindex="0">\
        <span class="ms-ListItem-primaryText"><span class="wrap"> 
        ${name}
    </span></span>\
        <span class="ms-ListItem-secondaryText"> ${tagline}
    </span>\
        <div class="ms-ListItem-selectionTarget"></div>\
        <div class="ms-ListItem-actions">\
          <div id="${id}" class="ms-ListItem-action">\
            <i class="ms-Icon ms-Icon--CaretSolidRight"></i>\
          </div>\
        </div>\
      </li>`;

  document.getElementsByClassName("ms-ListItem-action").forEach((button) => {
    //event to handle the arrow thing
    button.onclick = createDropDown;
  });
}

async function createDropDown() {
  await Word.run(async (context) => {
    const categoryList = Object.entries(documentSearch?.store).filter((entry) => entry[1].category === this.id);
    document.getElementById("resultlist").innerHTML = "";
    for (let item of categoryList) {
      addListItem(item[1].id, item[1].title, item[1].title);
    }
    document.getElementsByClassName("ms-ListItem-action").forEach((button) => {
      //event to handle the arrow thing
      button.onclick = insertIssue;
    });
  }).catch(function (error) {
    console.log("Error: " + error);
    if (error instanceof OfficeExtension.Error) {
      console.log("Debug info: " + JSON.stringify(error.debugInfo));
    }
  });
}

export async function run() {
  return Word.run(async (context) => {
    /**
     * Insert your Word code here
     */

    // insert a paragraph at the end of the document.
    const paragraph = context.document.body.insertParagraph(JSON.stringify(categories), Word.InsertLocation.end);
    context.document.body.insertParagraph("hello", Word.InsertLocation.end);
    context.document.body.insertParagraph("hello", 0);

    // change the paragraph color to blue.
    paragraph.font.color = "blue";

    const ids = documentSearch.search("Windows", 5);

    // based on the ids returned by the index, look for the recipes for those ids
    /*const result = recipes.filter((recipe) => ids.includes(recipe.id));
    console.log(result);*/

    /*categories.forEach((count, name) => {
      //addCategory(name, count);
      document.getElementById("searchresults").innerHTML += "Test";
    });*/

    await context.sync();
  });
}

function addListItem(id, name, tagline) {
  if (name.length > 25) {
    name = name.substring(0, 22) + "...";
  }

  document.getElementById("resultlist").innerHTML +=
    '\
      <li class="ms-ListItem" tabindex="0">\
        <span class="ms-ListItem-primaryText"><span class="wrap">' +
    name +
    '</span></span>\
        <span class="ms-ListItem-secondaryText">' +
    tagline +
    '</span>\
        <div class="ms-ListItem-selectionTarget"></div>\
        <div class="ms-ListItem-actions">\
          <div id="' +
    id +
    '" class="ms-ListItem-action">\
            <i class="ms-Icon ms-Icon--CaretSolidRight"></i>\
          </div>\
        </div>\
      </li>';
}

async function insertIssue() {
  await Word.run(async (context) => {
    //code to write issues here
    console.log(documentSearch)
    let issueJSON = documentSearch.get(this.id);

    //use helper module to write issue

    writer.writeIssue(context, Word, issueJSON);
  }).catch(function (error) {
    console.log("Error: " + error);
    if (error instanceof OfficeExtension.Error) {
      console.log("Debug info: " + JSON.stringify(error.debugInfo));
    }
  });
}

export async function search() {
  return Word.run(async (context) => {
    document.getElementById("resultlist").innerHTML = "";
    let searchVal = document.getElementById("search").value;
    if (searchVal == "") {
      loadCategories();
      return;
    }

    const ids = documentSearch.search(searchVal, { enrich: true });

    //document.getElementById("searchresults").innerText = JSON.stringify(ids);

    let foundIds = [];

    ids.forEach((resultSet) => {
      resultSet.result.forEach((result) => {
        if (!foundIds.includes(result.id)) {
          let title = result.doc.title;
          let refLen = title.split(" ", 2)[0].length;
          title = title.substring(refLen + 1);
          addListItem(result.id, title, result.doc.category);
          foundIds.push(result.id);
        }
      });
    });

    document.getElementsByClassName("ms-ListItem-action").forEach((button) => {
      //event to handle the arrow thing
      button.onclick = insertIssue;
    });
    await context.sync();
  });
}
