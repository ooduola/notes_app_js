// import { NoteListView } from "./note-list-view";

// var element = document.getElementById('app')

// const content = element.innerHTML;

// element.innerHTML = "<ul><li><div>Hello</div></li></ul>"

(function (exports) {
  function Controller(notesList) {
    this.notesList = notesList;
    this.notesList.createNote("Favourite drink: seltzer")
    this.noteListView = new NoteListView(notesList);
  }

  Controller.prototype.insertHTML = function() {
    var element = document.getElementById('app')

    element.innerHTML = this.noteListView.returnString();
  }

  exports.Controller = Controller;
})(this);
