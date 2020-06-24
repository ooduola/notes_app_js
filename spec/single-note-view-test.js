
(function testSingleNoteView() {

  var noteApp = new NotesApp("Hello");
  var singleNoteView = new SingleNoteView(noteApp)
  assert.isTrue(singleNoteView.returnHTML() === '<div>Hello</div>')

})();

(function testSingleNoteViewWithZeroNotes() {

  var singleNoteView = new SingleNoteView()
  assert.isTrue(singleNoteView.returnHTML() === null)

})();


