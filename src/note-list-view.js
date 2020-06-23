(function (exports) {

    function NoteListView() {
      this.list = new NotesList();
    }

    NoteListView.prototype.returnString = function() {
      var array = this.list.notes

      return "<ul><li><div>" + array.join("</div></li><li><div>") + "</div></li></ul>"
      // `<ul><li><div>${array[0]}</div></li></ul>`
    };

  exports.NoteListView = NoteListView;

})(this);


// var i;
// for (i = 0; i < cars.length; i++) {
//   text += cars[i] + "<br>";
// }