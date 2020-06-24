(function(exports) {

  function testCheckForNotesList() {

    var noteList = new NotesList()

    assert.isTrue( Array.isArray(noteList.returnList()) )

  //   if ( noteList.returnList().length !== 0 ) {
  //     throw new Error("This is not an empty  array")
  //   }
  };

  testCheckForNotesList();

})(this);

(function(exports) {

  function testCheckForNoteCreated() {

    var noteList = new NotesList()
    noteList.createNote("Hello")
    assert.isTrue( noteList.returnList()[0].returnNote() === "Hello")
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
