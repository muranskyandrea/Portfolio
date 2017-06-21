jQuery(document).ready(function() {



$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});


    // Set up the isotope grid



    jQuery(".iso_projects_item").on('click',function(){
        // Remove the large class from all
        jQuery(".isoItem").removeClass("iso_projects_detail");

        // Add the large class to the item clicked on
        jQuery(this).addClass("iso_projects_detail");

        // Update the layout
        jQuery(".iso_projects").isotope();

    });


});