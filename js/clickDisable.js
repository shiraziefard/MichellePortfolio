// this will disable right-click on all images
window.oncontextmenu = function () {
    return false;     // cancel default menu
}

var client = {
    init: function() {
        var o=this;

        // this will disable dragging of all images
        $("img").mousedown(function(e){
            e.preventDefault()
        });

        
   }
};