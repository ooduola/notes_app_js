(function(exports) {
  function NotesList() {
    this.notes = [];
    this.id = 0;
  }

  NotesList.prototype.returnList = function() {
    return this.notes
  }

  NotesList.prototype.createNote = function(text) { 
    var noteapp = new NotesApp(text, this.id);
    this.notes.push(noteapp)
    this.id++;
  }

  exports.NotesList = NotesList; 
})(this);
