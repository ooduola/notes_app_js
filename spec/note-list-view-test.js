// import { NoteListView } from "../src/note-list-view";
(function (exports) {

  function testNoteListViewHasNoteList() {
  var newList = new NotesList();
  var noteListView = new NoteListView(newList);

    if(noteListView.list.returnList().length !== 0) {
    throw new Error('Not working!');
    }
  }

  testNoteListViewHasNoteList();
})(this);

(function (exports) {

  function testReturnsHTMLString() {
    var newList = new NotesList();
    var noteListView = new NoteListView(newList);
    noteListView.list.createNote("Hello");

    if(noteListView.returnString() !== '<ul><li><div>Hello</div></li></ul>') {
      throw new Error('Your HTML String has not been returned');
    }
  }

  testReturnsHTMLString();
})(this);

(function (exports) {

  function testReturnsHTMLStringWithSeveralNotes() {
    var newList = new NotesList();
    var noteListView = new NoteListView(newList);

    noteListView.list.createNote("Hello");
    noteListView.list.createNote("Test");
    
    if(noteListView.returnString() !== "<ul><li><div>Hello</div></li><li><div>Test</div></li></ul>") {
      throw new Error('Your HTML String has for multiple notes has not been returned');
    }
  }

  testReturnsHTMLStringWithSeveralNotes();
})(this);