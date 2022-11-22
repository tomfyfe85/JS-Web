/**
 * @jest-environment jsdom
 */

const fs = require('fs')
const NotesModel = require('./NotesModel');
const NotesView = require('./NotesView')


describe('displayNotes', () => {
  it('displays the notes', () => {
    // Arrange
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNotes('Hi tom')
    model.addNotes('Hi Alastair')

    // Act
    view.displayNotes();

    // Assert
    expect(document.querySelectorAll('div.note').length).toEqual(2);
  })
})