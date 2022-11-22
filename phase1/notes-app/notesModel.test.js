const NotesModel = require('./NotesModel')

describe('notes Model class', () => {
  it ('has no notes to start', () => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([]);
  });

  it ('should return "buy milk"', () => {
    const model = new NotesModel();
    model.addNotes('buy milk')
    expect(model.getNotes()).toEqual(['buy milk'])
  });
  
  it ('should reset the array', () => {
    const model = new NotesModel();
    model.addNotes('by beer');
    model.reset();
    expect(model.reset()).toEqual([])
  });
});