(function(exports) {
  
  function NotesList() {
    this.notes = []
  }

  NotesList.prototype.returnList = function() {
    return this.notes
  }

  NotesList.prototype.createNote = function(text) { 
    var noteapp = new NotesApp(text);
    this.notes.push(noteapp)
  }

  exports.NotesList = NotesList; 


})(this);