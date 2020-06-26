
function testCheckNotesListReturnsNotesStored() {
    let noteList = new NotesList()
    assert.isTrue( noteList.returnList().length === 0)
  };
testCheckNotesListReturnsNotesStored();

function testCheckForNoteCreated() {
    let noteList = new NotesList()
    noteList.createNote("Hello")
    let noteListArray = noteList.returnList()
    assert.isTrue( noteListArray[noteListArray.length - 1].returnNote() === "Hello")
    }
testCheckForNoteCreated();
