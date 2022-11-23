/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicking button shows msg', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
   
    const view = new MessageView();
    const buttonEl = document.querySelector('#show-message-button');
    const inputEl = document.querySelector('#message-input');

    inputEl.value = "Some text";
    
    buttonEl.click();
  
    expect(document.querySelector('#message')).not.toBeNull();
    expect(document.querySelector('#message').innerText).toEqual('Some text');
  });
 
  it('clicking button removes msg', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const view = new MessageView();
    
    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();
    const hideButtonEl = document.querySelector('#hide-message-button');
    hideButtonEl.click();
   
    expect(document.querySelector('div#message')).toBeNull();
  })
});