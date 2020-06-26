function testForReturnNote() {
    let note1 = new NotesApp("My favourite language is JavaScript");
    assert.isTrue(note1.returnNote() === "My favourite language is JavaScript")
  };
  testForReturnNote();

function testCheckNoteIDReturnsNullWhenInstantiated() {
    let newNote = new NotesApp()
    assert.isTrue( newNote.returnId() === null)
    }
testCheckNoteIDReturnsNullWhenInstantiated();


function testCheckForNoteAssignsIdForFirstNote() {
    let noteList = new NotesList()
    noteList.createNote("Note 1")
    assert.isTrue( noteList.returnList()[0].returnId() === 0)
    }
testCheckForNoteAssignsIdForFirstNote();

function testCheckForNoteAssignsIdForSeveralNotes() {
  let noteList = new NotesList()
  noteList.createNote("Note 1")
  noteList.createNote("Note 2")
  assert.isTrue( noteList.returnList()[1].returnId() === 1)
  }
testCheckForNoteAssignsIdForFirstNote();
