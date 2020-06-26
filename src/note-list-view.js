(function (exports) {

    function NoteListView(noteList) {
      this.list = noteList;
    }

    NoteListView.prototype.returnString = function() {
      let noteListArray = this.list.returnList() // returns an array of [NoteApps]

      if(noteListArray.length < 1) {
        return "Notes list empty"
      } else {
          let string = "<ul>"
          noteListArray.forEach(NotesApp => {
          string += "<li><div>"  + NotesApp.returnNote().slice(0, 20) + "</div></li>"
          });
        return string += "</ul>"
      }
    };

  exports.NoteListView = NoteListView;

})(this);