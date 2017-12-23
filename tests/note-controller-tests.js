function noteControllerDisplaysNote(){

   var testText = "<ul><li><div>my first note</div></li></ul>"

   var notelistview = {
     getHTML: function(){ return testText }
   }

   var controller = new NoteController()

   controller.list = notelistview

   controller.sendHTML()


   assert.isTrue(document.getElementById("app").innerHTML == testText)
  }


noteControllerDisplaysNote()
