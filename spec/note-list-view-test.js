
function testReturnsErrorForZeroNotes() {
  let newList = new NotesList();
  let noteListView = new NoteListView(newList);

  assert.isTrue(noteListView.returnString() === "Notes list empty")
}
testReturnsErrorForZeroNotes();

function testReturnsHTMLStringForOneNote() {
  let newList = new NotesList();
  newList.createNote("Hello")
  let noteListView = new NoteListView(newList);

  assert.isTrue(noteListView.returnString() === "<ul><li><div>Hello</div></li></ul>")
}
testReturnsHTMLStringForOneNote();

// function testReturnsHTMLStringForOneNote() {
//   let newList = new NotesList();
//   newList.createNote("Hello")
//   let noteListView = new NoteListView(newList);

//   assert.isTrue(noteListView.returnString() === "<ul><li><a href='#hello'><div>Hello</div></a></li></ul>" )
// }
// testReturnsHTMLStringForOneNote();

function testReturnsHTMLStringForSeveralNotes() {
    let newList = new NotesList();
    newList.createNote("Hello");
    newList.createNote("Test");
    let noteListView = new NoteListView(newList);

    assert.isTrue(noteListView.returnString() === "<ul><li><div>Hello</div></li><li><div>Test</div></li></ul>")
}
testReturnsHTMLStringForSeveralNotes();


// function testReturnsHTMLStringForSeveralNotes() {
//     let newList = new NotesList();
//     newList.createNote("Hello");
//     newList.createNote("Test");
//     let noteListView = new NoteListView(newList);

//     assert.isTrue(noteListView.returnString() === "<ul><li><a href='#Hello'><div>Hello</div></a></li><li><div><a href='#test'>Test</a></div></li></ul>")
// }
// testReturnsHTMLStringForSeveralNotes();

function testReturnsHTMLStringFirstTwentyCharacters() {
    let newList = new NotesList();
    newList.createNote("a really long sentence");
    let noteListView = new NoteListView(newList);
 
    assert.isTrue(noteListView.returnString() === "<ul><li><div>a really long senten</div></li></ul>")
}
testReturnsHTMLStringFirstTwentyCharacters();
