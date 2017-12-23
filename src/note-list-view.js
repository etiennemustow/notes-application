(function(exports){
  function NotelistView(notelist){
    this.notelist = notelist || new Notelist;
  }

  NotelistView.prototype.getHTML = function(){
    var startList = "<ul>";
    var notes = this.notelist.show()

    for (var index in notes) {
      var currentNote = notes[index];
      listElement = "<li><div>" + currentNote.show() + "</div></li>"

      startList = startList + listElement;
  }

  startList = startList + "</ul>";
  return startList;

}
  exports.NotelistView = NotelistView;
})(this)
