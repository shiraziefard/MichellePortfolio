$(document).ready(function(){
    //OPEN GALLERY OF THUMBNAILS BASED ON ICON CLICK
    $('.portfolioBox').click(function(){
        var galleryBoxId = $(this).data('value');
        $('#gb' + galleryBoxId).css({opacity: 0, display: 'flex'}).animate({
            opacity: 1
        }, 'fast'); 
    });

    //HIDE GALLERY ON GALLERY BOX CLICK
    $(document.body).click(function(){
        $('.galleryBox').fadeOut('fast');
    });
    
});