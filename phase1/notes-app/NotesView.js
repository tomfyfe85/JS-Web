// const NotesModel = require('./NotesModel')

class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector("#main-container");

    document.querySelector("#add-note-button").addEventListener("click", () => {
      const newNote = document.querySelector("#add-note-input").value;
      this.addNewNote(newNote);
      document.querySelector("#add-note-input").value = "";
    });
  }

  addNewNote(newNote) {
    this.model.addNotes(newNote);
    this.displayNotes();
  }

  displayNotes() {
    document.querySelectorAll("div.note").forEach((element) => {
      element.remove();
    });

    const notes = this.model.getNotes();

    notes.forEach((element) => {
      const newEl = document.createElement("div");
      newEl.className = "note";
      newEl.textContent = element;
      this.mainContainerEl.append(newEl);
    });
  }
}
module.exports = NotesView;
