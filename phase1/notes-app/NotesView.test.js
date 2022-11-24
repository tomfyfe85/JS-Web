/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NotesModel = require("./NotesModel");
const NotesView = require("./NotesView");

describe("displayNotes", () => {
  it("displays the notes", () => {
    // Arrange
    document.body.innerHTML = fs.readFileSync("./index.html");
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNotes("Hi tom");
    model.addNotes("Hi Alastair");

    // Act
    view.displayNotes();

    // Assert
    expect(document.querySelectorAll("div.note").length).toEqual(2);
  });

  it("displays new note input with a button click", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new NotesModel();
    const view = new NotesView(model);

    const input = document.querySelector("#add-note-input");
    input.value = "HELLO!!!!";

    const button = document.querySelector("#add-note-button");
    button.click();

    expect(document.querySelectorAll("div.note").length).toEqual(1);
    expect(document.querySelectorAll("div.note")[0].textContent).toEqual(
      "HELLO!!!!"
    );
  });

  it("verifies that when displayNotes is called twice, the model has the correct no. of notes", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new NotesModel();
    const view = new NotesView(model);

    model.addNotes("hi");
    model.addNotes("sdfsdf");

    view.displayNotes();

    expect(document.querySelectorAll("div.note").length).toEqual(2);
  });
});
