(function(exports) {

  function NotesApp(note, id = null) {
    this.note = note;
    this.id = id;
  }

  NotesApp.prototype.returnNote = function() {
    return this.note
  }

  exports.NotesApp = NotesApp;

})(this);
