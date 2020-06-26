(function(exports) {
  function NotesList() {
    this.notes = [];
    this.id = 0;
  }

  NotesList.prototype.returnList = function() {
    return this.notes
  }

  NotesList.prototype.createNote = function(text) { 
    let noteText = new NotesApp(text, this.id);
    this.notes.push(noteText)
    this.id++;
  }
  exports.NotesList = NotesList; 
})(this);
