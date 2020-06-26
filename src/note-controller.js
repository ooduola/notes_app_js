
(function (exports) {
  function Controller(notesList) {
    this.notesList = notesList;
    this.notesList.createNote("Favourite drink")
  }

  Controller.prototype.insertHTML = function() {
    noteListView = new NoteListView(this.notesList);
    let element = document.getElementById('app')
    element.innerHTML = noteListView.returnString();
  }

  exports.Controller = Controller;
})(this);
