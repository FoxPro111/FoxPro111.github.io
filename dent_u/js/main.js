// nav menu mobile

$('.mobile__btn').click(function(event) {
    $('body').toggleClass('active');
    $("html, body").animate({scrollTop: 0 }, 200);
    $('.header').toggleClass('active');
    $(this).toggleClass('active');
});


// menu animation
jQuery(document).ready(function($) {
	$('.menu__action').hover(
	  function() {
	  	$(this).addClass('hover');
	  	$(this).find('.menu__link').css({
	  		height: '60px'
	  	});
	  	$(this).css('margin-top', '-30px');
	  }, function() {
	  	$(this).removeClass('hover');
	  	$(this).find('.menu__link').css({
	  		height: '0'
	  	});
	  	$(this).css('margin-top', '0');

	  }
	)
});