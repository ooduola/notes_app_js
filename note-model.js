(function(exports) {

  function NotesApp(note) {
    this.note = note
  }

  NotesApp.prototype.note = function() {
    return this.note
  }

  exports.NotesApp = NotesApp;

})(this);
