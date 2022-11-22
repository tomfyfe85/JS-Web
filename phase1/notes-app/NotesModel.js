class NotesModel {
  constructor(myArray = []){
    this.myArray = myArray;
  }
  addNotes(thing){
    this.myArray.push(thing)
  } 
  getNotes(){
    return this.myArray
  }
  reset(){
    this.myArray = []
    return this.myArray
  }
}

module.exports = NotesModel;