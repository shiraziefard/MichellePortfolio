var client = {
    init: function() {
         var o=this;

         // this will disable dragging of all images
         $("img").mousedown(function(e){
              e.preventDefault()
         });

         // this will disable right-click on all images
         $("body").on("contextmenu",function(e){
              return false;
         });
   }
};