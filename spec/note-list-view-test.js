// import { NoteListView } from "../src/note-list-view";
(function () {

  function testNoteListViewHasNoteList() {
  var newList = new NotesList();
  newList.createNote("Hello")
  var noteListView = new NoteListView(newList);

    if(noteListView.returnString() === []) {
    throw new Error('CreateNote function has failed');
    }
  }

  testNoteListViewHasNoteList();
})();


(function () {

  function testReturnsHTMLString() {
    var newList = new NotesList();
    newList.createNote("Hello")
    var noteListView = new NoteListView(newList);

    if(noteListView.returnString() !== '<ul><li><div>Hello</div></li></ul>') {
      throw new Error('HTML String has not been returned');
    }
  }

  testReturnsHTMLString();
})();

(function () {

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
})();

(function () {

  function testReturnsHTMLStringFirstTwentyChar() {
    var newList = new NotesList();
    var noteListView = new NoteListView(newList);
    noteListView.list.createNote("a really long sentence");

    if(noteListView.returnString() !== '<ul><li><div>a really long senten</div></li></ul>') {
      throw new Error('Your HTML String has not been returned');
    }
  }

  testReturnsHTMLStringFirstTwentyChar();
})();