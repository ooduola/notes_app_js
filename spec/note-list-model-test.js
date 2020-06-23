(function(exports) {

  function testcheckForNotesList() {

    var noteList = new NotesList()

    assert.isTrue( noteList.returnList().length === 0 )


  //   if ( noteList.returnList().length !== 0 ) {
  //     throw new Error("This is not an empty  array")
  //   }
   };

  testcheckForNotesList();

})(this);

(function(exports) {

  function testcheckForNoteCreated() {

    var noteList = new NotesList()
    noteList.createNote("Hello")

    assert.isTrue( noteList.returnList()[0] === "Hello")
     
    // if ( noteList.returnList()[0] !== "Hello" ) {
    //   throw new Error("Array doesnt contain hello")

    // }
    }

  testcheckForNoteCreated();

})(this);
