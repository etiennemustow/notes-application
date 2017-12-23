(function(){
  function testNoteListModelStoresNotes(){
    var notelist = new Notelist()
    notelist.createAndStore("some text")

    assert.isTrue(notelist.show() == [Note])
  }
})()
