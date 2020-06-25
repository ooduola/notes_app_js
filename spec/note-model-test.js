(function() {
  function checkForNote() {
    var note1 = new NotesApp("My favourite language is JavaScript");
    assert.isTrue(note1.returnNote() === "My favourite language is JavaScript")
  };
  checkForNote();
})();

(function() {
  function checkForId() {
    var note1 = new NotesApp("My favourite language is JavaScript", 99);
    assert.isTrue(note1.returnId() === 99);
  };
  checkForId();
})();