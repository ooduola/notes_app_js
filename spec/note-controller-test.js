
function testNoteControllerInsertsHTML() {
    let noteList = new NotesList()
    noteList.createNote("Hello")
    let controller = new Controller(noteList)
    controller.insertHTML()
    expectedResult = '<ul><li><div>Hello</div></li>'
    expectedResult += '<li><div>Favourite drink</div></li></ul>'
    assert.isTrue(document.getElementById('app').innerHTML === expectedResult)
    }
testNoteControllerInsertsHTML();