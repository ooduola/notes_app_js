// import { NoteListView } from "../src/note-list-view";

(function (exports) {

  function testNoteListViewHasNoteList() {
  var noteListView = new NoteListView();

    if(noteListView.list.notes.length !== 0) {
    throw new Error('Not working!');
    }
  }

  testNoteListViewHasNoteList();
})(this);

(function (exports) {

  function testReturnsHTMLString() {
    var noteListView = new NoteListView();
    noteListView.list.createNote("Hello");

    if(noteListView.returnString() !== '<ul><li><div>Hello</div></li></ul>') {
      throw new Error('Nah mate');
    }
  }

  testReturnsHTMLString();
})(this);

(function (exports) {

  function testReturnsHTMLStringWithSeveralNotes() {

    var noteListView = new NoteListView();
    noteListView.list.createNote("Hello");
    noteListView.list.createNote("Test");

    var array = noteListView.list.notes
  

    console.log("hello")
    console.log(array.join("</div></li><li><div>"))
    console.log(noteListView.returnString())

    if(noteListView.returnString() !== '<ul><li><div>Hello</div></li><li><div>Test</div></li></ul>') {
      throw new Error('Nah mateeee');
    }
  }

  testReturnsHTMLStringWithSeveralNotes();
})(this);