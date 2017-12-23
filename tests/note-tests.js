(function() {
  function testNoteModelShowsNote(){
    var note = new Note("some text");

    assert.isTrue(note.show() == "some text");
  }
})()
