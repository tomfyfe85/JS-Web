class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector('#hide-message-button');
    
    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });
    
    this.hideButtonEl.addEventListener('click', () => {
      this.hideMessage();
    });
  }

  displayMessage() {
    const newDiv = document.createElement('div');
    newDiv.id = 'message'
    newDiv.innerText = 'This message bahhhh'
    const mainContainerEl = document.querySelector('#main-container')
    mainContainerEl.append(newDiv)
    console.log('Thanks for clicking the add button!');
  }

  hideMessage() {
    const remover = document.querySelector('div#message');
    remover.remove();
    console.log('hide button clicked');
  }
}

module.exports = MessageView;