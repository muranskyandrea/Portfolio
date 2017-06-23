jQuery(document).ready(function() {



$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav, .h1.logo, .header_container').addClass('shrink');
  } else {
    $('nav, .h1.logo, .header_container').removeClass('shrink');
  }
});

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

$('.hamburger').on('click', function( event ){
    event.preventDefault();
    $('.header_nav_list').slideToggle();
});
    // Set up the isotope grid



   // $('.fade').hover(
   //      function(){
   //          $(this).find('.caption').show();
   //      },
   //      function(){
   //          $(this).find('.caption').hide();
   //      }
   //  );

});