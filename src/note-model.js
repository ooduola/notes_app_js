(function(exports) {

  function NotesApp(note) {
    this.note = note
  }

  NotesApp.prototype.returnNote = function() {
    return this.note
  }

  exports.NotesApp = NotesApp;

})(this);
