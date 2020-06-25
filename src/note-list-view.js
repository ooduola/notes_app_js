(function (exports) {

    function NoteListView(list) {
      this.list = list;
    }

    NoteListView.prototype.returnString = function() {
      var noteListArray = this.list.returnList() // returns an array of [NoteApps]

      
      if(noteListArray.length < 1) {
        throw new Error ("Notes list empty")
      } else {
        var string = "<ul>"
        noteListArray.forEach(element => {
          string += "<li><div>" + element.returnNote().slice(0, 20) + "</div></li>"
        });
        return string += "</ul>"
      }
    };

  exports.NoteListView = NoteListView;

})(this);