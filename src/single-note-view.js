(function(exports) {

  function SingleNoteView(notesApp) {
    this.notesApp = notesApp
  };


  SingleNoteView.prototype.returnHTML = function() {

    if ( !this.notesApp ) {
      return null
    }
    
    string = "<div>"
    string += this.notesApp.returnNote()
    return string += "</div>"
  }


exports.SingleNoteView = SingleNoteView;

})(this);