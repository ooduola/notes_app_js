(function (exports) {

    function NoteListView(list) {
      this.list = list;
    }

    NoteListView.prototype.returnString = function() {
      var array = this.list.notes
      if(array.length < 1) {
        throw new Error ("Notes list empty")
      } else {
        return "<ul><li><div>" + array.join("</div></li><li><div>") + "</div></li></ul>"
      }
    };

  exports.NoteListView = NoteListView;

})(this);