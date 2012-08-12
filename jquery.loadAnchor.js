/*
loadAnchor 
Version 1.0 
*/
(function( $ ){
  $.fn.loadAnchor = function(options) {
    for (var i=0; i<options.length; i++) {
      if($('.'+options[i].class).html()!=null) {
        $('html,body').animate({scrollTop: $('.'+options[i].class).offset().top},options[i].speed);
      }
    }
  };
})( jQuery );

