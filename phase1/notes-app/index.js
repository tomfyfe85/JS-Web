const NotesModel = require('./NotesModel');
const NotesView = require('./NotesView');

const model = new NotesModel();
// console.log(model.getNotes())
model.addNotes('This is an example note');

const view = new NotesView(model);
view.displayNotes();
