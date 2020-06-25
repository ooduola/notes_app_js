(function(exports) {

  function testCheckNotesListReturnsList() {
    var noteList = new NotesList()
    assert.isTrue( Array.isArray(noteList.returnList()) )
  };

  testCheckNotesListReturnsList();
})(this);

(function(exports) {

  function testCheckForNoteCreated() {

    var noteList = new NotesList()
    noteList.createNote("Hello")
    var noteListArray = noteList.returnList()
    assert.isTrue( noteListArray[noteListArray.length - 1].returnNote() === "Hello")
    }
  testCheckForNoteCreated();

})(this);

(function() {

  function testCheckForNoteAssignsId() {
    var noteList = new NotesList()
    noteList.createNote("Note 1")
    noteList.createNote("Note 2")
    assert.isTrue( noteList.returnList()[0].id === 0)
    assert.isTrue( noteList.returnList()[1].id === 1)
    }
  testCheckForNoteAssignsId();

})();
