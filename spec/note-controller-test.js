(function() {

  function testNoteControllerInsertsHTML() {
    var noteList = new NotesList()
    noteList.createNote("Hello")
    var controller = new Controller(noteList)
    controller.insertHTML()
    expectedResult = '<ul><li><div>Hello</div></li>'
    expectedResult += '<li><div>Note 2</div></li></ul>'
    assert.isTrue(document.getElementById('app').innerHTML === expectedResult)
    }
    
    testNoteControllerInsertsHTML();

})();