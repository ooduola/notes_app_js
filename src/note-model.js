(function(exports) {

  function NotesApp(text, id = null) {
    this.text = text;
    this.id = id;
  }

  NotesApp.prototype.returnNote = function() {
    return this.text
  }

  NotesApp.prototype.returnId = function() {
    return this.id
  }

  exports.NotesApp = NotesApp;

})(this);
