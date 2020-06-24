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

    // if ( noteList.returnList()[0] !== "Hello" ) {
    //   throw new Error("Array doesnt contain hello")

    // }
    }
  testCheckForNoteCreated();

})(this);
