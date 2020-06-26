
(function testSingleNoteView() {

  let noteApp = new NotesApp("Hello");
  let singleNoteView = new SingleNoteView(noteApp)
  assert.isTrue(singleNoteView.returnHTML() === '<div>Hello</div>')

})();

(function testSingleNoteViewWithZeroNotes() {

  let singleNoteView = new SingleNoteView()
  assert.isTrue(singleNoteView.returnHTML() === null)

})();


