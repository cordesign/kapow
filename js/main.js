var $fade_element = $(".fade");
var $window = $(window);

/*$(document).ready( function(){
	$(".fade").hide();
});*/

$(document).ready( function(){
	//add fancybox class
	$(".fancybox").fancybox();
	
	//onload explosion
	$("body").append( "<div id='splosion'><img id='splode' src='img/kapow_intro_gif/splode.gif'></div>" );
	$("#big_kapow_logo").append("<audio autoplay> <source src='sound/Bomb.mp3'></audio>");
});


$window.on('scroll', checkInView);

function checkInView() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($fade_element, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$(".video_box").on('hover', function(){
	$(this.h3).addClass('fade');
	console.log("boop");

});