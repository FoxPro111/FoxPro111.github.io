// img to svg
$('img.svg').each(function(){
    var $img = $(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    $.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = $(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});

// nav menu mobile

$('.mobile__btn').click(function(event) {
    $('body').toggleClass('active');
    $("html, body").animate({scrollTop: 0 }, 200);
    $('.header').toggleClass('active');
    $('.mobile__btn').toggleClass('active');
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

$('.service__slider').slick({
  slidesToShow: 4,
  dots: false,
  swipe: false,
	responsive: [{
      breakpoint: 1230,
      settings: {
        slidesToShow: 1
      }
    },{
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

// news item height

function news__item () {
  var min_height = 0;
  var min_height__big = 0;

  $('.news__list__item').css('height', 'auto');

  $('.news__list__item').each(function(index, el) {
    if($(this).outerHeight() > min_height && !$(this).hasClass('news__list__item--long')) {
      min_height = $(this).outerHeight();
    }
  });
  
  $('.news__list__item').each(function(index, el) {
    if($(this).outerHeight() > min_height__big && $(this).hasClass('news__list__item--long')) {
      min_height__big = $(this).outerHeight();
    }
  });

  if (min_height__big > min_height * 2 - 30) {
    min_height = min_height__big/2;
  } else {
    min_height__big = min_height * 2 + 30;
  }

  $('.news__list__item').each(function(index, el) {
    if(!$(this).hasClass('news__list__item--long')) {
      $(this).outerHeight(min_height);
    }
  });

  $('.news__list__item').each(function(index, el) {
    if($(this).hasClass('news__list__item--long')) {
      $(this).outerHeight(min_height__big);
    }
  });
}

$(window).on("load resize",function(e){
  news__item();
})


// nav service

$('.btn-nav').click(function(event) {
  if ($(this).hasClass('btn-inverse')) {
    $('.btn-nav').addClass('btn-inverse');
    $(this).removeClass('btn-inverse');
  }

  return false;
});