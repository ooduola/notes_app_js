(function(exports) {
  
  function NotesList() {
    this.notes = []

  }

  NotesList.prototype.returnList = function() {
    return this.notes
  }

  NotesList.prototype.createNote = function(text) { 
    this.notes.push(text)
  }

  exports.NotesList = NotesList; 


})(this);