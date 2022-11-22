// const NotesModel = require('./NotesModel')

class NotesView {
  constructor (model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayNotes () {
    const notes = this.model.getNotes();

    notes.forEach(element => {
      const newEl = document.createElement('div');
      newEl.className = 'note';
      newEl.textContent = element;
      this.mainContainerEl.append(newEl);
    });
  }
}

module.exports = NotesView;