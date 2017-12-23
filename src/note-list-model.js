(function(exports){
  function Notelist(){
    this.notes = [];
  }

  Notelist.prototype = {
    show: function(){ return this.notes},
    createAndStore: function(text){
      var note = new Note(text)
      this.notes.push(note)
    }
  }

  exports.Notelist = Notelist;
})(this)
