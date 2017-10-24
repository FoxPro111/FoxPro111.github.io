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
	  	$(this).css('margin-top', '-30px').css('margin-bottom', '-30px');;
	  }, function() {
	  	$(this).removeClass('hover');

	  	$(this).find('.menu__link').css({
	  		height: '0'
	  	});
	  	$(this).css('margin-top', '0').css('margin-bottom', '0');
	  }
	)
});

// partners slider

$('.partner__slide').slick({
	slidesToShow: 4,
	slidesToScroll: 4,
	dots: true,
	arrows: false,
	swipe: false,
	responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
				slidesToScroll: 3,
        swipe: true
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
				slidesToScroll: 2,
				dots: false,
        swipe: true
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
        swipe: true
      }
    }]
})

// section slide

$('.section__slide__layout').slick({
	// arrows: false,
	dots: false,
	swipe: false,
	fade: true,
	responsive: [{
      breakpoint: 991,
      settings: {
        swipe: true
      }
    }]
})

// $('.slick-prev').click(function(event) {
// 	$(this).parent().find('.section__slide__layout').find('.slick-current').addClass('animate left');
// 	setTimeout(function () {
// 		// $('#slider-2').slick("slickPrev");
// 		// $(this).parent().find('.section__slide__layout').find('.slick-current').removeClass('animate left');
// 	}, 1000); 
// });

// $('.slick-next').click(function(event) {
// 	$(this).parent().find('.section__slide__layout').find('.slick-slide').addClass('animate right');
// 	setTimeout(function () {
// 		// $('#slider-2').slick("slickNext");
// 		// $(this).parent().find('.section__slide__layout').find('.slick-slide').removeClass('animate right');
// 	}, 1000); 
// });

$('.news__slider').slick({
  slidesToShow: 3,
  dots: false,
  swipe: false,
	responsive: [{
      breakpoint: 991,
      settings: {
			  slidesToShow: 2,
        swipe: true
      }
    },{
      breakpoint: 768,
      settings: {
			  slidesToShow: 1,
        swipe: true,
        arrows: true
      }
    }]
})

// footer list

$('.footer__header').click(function(event) {
	$(this).css('display', 'none');
	$(this).next().css('display', 'block');
	
	return false;
});

// wow initt
new WOW().init();