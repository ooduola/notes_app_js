(function (exports) {

    function NoteListView(list) {
      this.list = list;
    }

    NoteListView.prototype.returnString = function() {
      var array = this.list.returnList() /// array of [NoteApps]

      
      if(array.length < 1) {
        throw new Error ("Notes list empty")
      } else {
        var string = "<ul>"
          array.forEach(element => {
          string += "<li><div>" + element.returnNote().slice(0, 20) + "</div></li>"
        });
        return string += "</ul>"
      }
    };

  exports.NoteListView = NoteListView;

})(this);