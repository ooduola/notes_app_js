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