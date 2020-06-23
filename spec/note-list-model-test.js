(function(exports) {

  function checkForNotesList() {

    var list = new NotesList("hello")

    if (list.list !== ["hello"]) {
      throw new Error("This is not an array")
    }
  };

  checkForNotesList();

})(this);
