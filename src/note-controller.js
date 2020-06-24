// import { NoteListView } from "./note-list-view";

// var element = document.getElementById('app')

// const content = element.innerHTML;

// element.innerHTML = "<ul><li><div>Hello</div></li></ul>"

(function (exports) {
  function Controller(notesList) {
    this.notesList = notesList;
    this.notesList.createNote("Note 2")
    
  }

  Controller.prototype.insertHTML = function() {
    noteListView = new NoteListView(this.notesList);
    var element = document.getElementById('app')
    element.innerHTML = noteListView.returnString();
  }

  exports.Controller = Controller;
})(this);
