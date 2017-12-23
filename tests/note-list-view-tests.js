  function testNoteListViewDisplaysNote(){
    var note1 = {
      show: function(){ return "my first note"}
    };

    var note2 = {
      show: function(){ return "my second note"}
    };

    var notelist = {
      show: function(){ return [note1, note2]}
    };

    var notelistview = new NotelistView(notelist);
    testText = "<ul><li><div>my first note</div></li><li><div>my second note</div></li></ul>"
    assert.isTrue(notelistview.getHTML() === testText)
  }

  function testNoteListViewDisplaysNoNote(){

    var notelist = {
      show: function(){ return []}
    };

    var notelistview = new NotelistView(notelist);
    testText = "<ul></ul>"
    assert.isTrue(notelistview.getHTML() === testText)

  }

  function testNoteListViewDisplaysOneNote(){

    var note1 = {
      show: function(){ return "my first note"}
    };

    var notelist = {
      show: function(){ return [note1]}
    };

    var notelistview = new NotelistView(notelist);
    testText = "<ul><li><div>my first note</div></li></ul>"
    assert.isTrue(notelistview.getHTML() === testText)
  }

testNoteListViewDisplaysNote()
testNoteListViewDisplaysNoNote()
testNoteListViewDisplaysOneNote()
