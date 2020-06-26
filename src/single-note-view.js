(function(exports) {

  function SingleNoteView(notesApp) {
    this.notesApp = notesApp
  };


  SingleNoteView.prototype.returnHTML = function() {

    if ( !this.notesApp ) {
      return null
    }
    return "<div>" + this.notesApp.returnNote() + "</div>"
      
  }


exports.SingleNoteView = SingleNoteView;

})(this);