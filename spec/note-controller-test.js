(function(exports) {

  function testNoteControllerInsertsHTML() {
    var noteList = new NotesList()
    noteList.createNote("Hello")
    var controller = new Controller(noteList)
    controller.insertHTML()
    expectedResult = '<ul><li><div>Hello</div></li>'
    expectedResult += '<li><div>Favourite drink: seltzer</div></li></ul>'
    assert.isTrue(document.getElementById('app').innerHTML === expectedResult)
    }
    testNoteControllerInsertsHTML();

})(this);