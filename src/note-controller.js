(function(exports){
  function NoteController(){
    this.notelist = new Notelist

    this.notelist.createAndStore("my first note")

    this.view = new NotelistView(this.notelist)
  }


  NoteController.prototype.sendHTML = function(){
    var noteHTML = this.view.getHTML();
    document.getElementById("app").innerHTML = noteHTML;
    }


  exports.NoteController = NoteController;
})(this)
