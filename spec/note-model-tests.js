//
// function returnNoteTest() {
//   var note = new Note();
//   assert.isTrue(note.text === "My favourite language is JavaScript")
// }
//
// returnNoteTest();


(function(exports) {
 function testCircleRadiusDefaultsTo10() {
   var circle = new Circle();

   if (circle.radius !== 10) {
     throw new Error("Circle size is not 10");
   }
 };

 testCircleRadiusDefaultsTo10();
})(this);
