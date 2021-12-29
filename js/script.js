jQuery(window).on('scroll', function() {
    if(jQuery(window).scrollTop() > 0) {
        jQuery('#header_frame').css('background-color', '#000000');
        jQuery('.headerSticky').css('padding-top', '10px');
        jQuery('.headerSticky').css('padding-bottom', '10px');
        jQuery('.headerSticky').css('transition', '0.6s');
    } else {
        jQuery('.headerSticky').css('padding-top', '30px');
       jQuery('#header_frame').css('background-color', 'transparent');
    }
});
// windows.addEventListener("scroll", function(){
//     var header = document.querySelector("header");
//     header.classList.toggle("sticky", window.scrollY > 0);
// })
