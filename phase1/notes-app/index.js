const NotesClient = require('./NotesClient');
const NotesModel = require('./NotesModel');
const NotesView = require('./NotesView');

const client = new NotesClient();

const model = new NotesModel();
console.log(model.getNotes())
model.addNotes('This is an example note');

const view = new NotesView(model, client);
view.displayNotes();
