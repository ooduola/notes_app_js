(function() {
  function checkForNote() {
    var note1 = new NotesApp("My favourite language is JavaScript");
    assert.isTrue(note1.note === "My favourite language is JavaScript")
  };
  checkForNote();
})();

(function() {
  function checkForId() {
    var note1 = new NotesApp("My favourite language is JavaScript", 99);
    assert.isTrue(note1.id === 99);
  };
  checkForId();
})();