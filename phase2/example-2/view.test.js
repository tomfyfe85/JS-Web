/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const View = require('./view');

beforeEach(() => {
  document.body.innerHTML = fs.readFileSync('./index.html');
})

describe('Page view', () => {
  it('displays 2 paragraphs', () => {
    const view = new View();
    expect(document.querySelectorAll('p').length).toBe(2);
  });

  it('adds a new paragraph',  () => {
    const view = new View();
    view.addParagraph();
    expect(document.querySelectorAll('p').length).toBe(3);
  });

  it('removes all paragraphs', () => {
    const view = new View();
    view.clearParagraphs();
    expect(document.querySelectorAll('p').length).toBe(0)
  } )
});