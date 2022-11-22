class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');
    
    console.log(this.mainContainerEl);
  }
  addParagraph(){
    const newP = document.createElement('p');
    newP.innerText = 'This paragraph was blahhh'
    this.mainContainerEl.append(newP);
  }
}

module.exports = View;