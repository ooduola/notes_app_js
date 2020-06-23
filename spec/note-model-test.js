(function(exports) {

  function checkForNote() {
    var note1 = new NotesApp("My favourite language is JavaScript");

    assert.isTrue(note1.note === "My favourite language is JavaScript")

  };

//     if (note1.note !== "My favourite language is JavaScript") {
//       throw new Error("Note does not match My favourite language is JavaScript")
//     }
//   };
  checkForNote();
})(this);
