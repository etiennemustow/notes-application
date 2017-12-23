(function() {
  function testNoteModelShowsNote(){
    var note = new Note("some text");

    assert.isTrue(note.show() == "some text");
  }

(function(){
  function testNoteListModelStoresNotes(){
    var notelist = new Notelist()
    notelist.createAndStore("some text")

    assert.isTrue(notelist.show() == [Note])
  }
})
})()
