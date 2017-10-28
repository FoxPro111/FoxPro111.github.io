$('.nav__btn__wrapp').click(function(event) {
	$(this).closest('.nav__btn').find('.nav__mob__list').addClass('open');
});

$(document).on('click', function(e) {
  if (!$(e.target).closest(".nav__mob__list, .nav__btn__wrapp").length) {
    $('.nav__mob__list').removeClass('open');
  }
  e.stopPropagation();
});


// menu
$('.menu__btn').click(function(event) {
    $('body').toggleClass('active');
    $("html, body").animate({scrollTop: 0 }, 200);
    $('.header').toggleClass('active');
    $(this).toggleClass('active');
});

// slick main
$('.main__slider').slick({
	nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="fa fa-angle-right"></i></button>',
	prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="fa fa-angle-left"></i></button>',
	autoplaySpeed: 7000,
	autoplay: true,
	pauseOnHover: false,
	swipe: false,
	responsive: [{
		breakpoint: 768,
		settings: {
			arrows: false,
			swipe: true
		}
	}]
})

// review

$('.review__main__slider').slick({
	fade: true,
	arrows: false,
	swipe: false,
	asNavFor: '.review__nav__vertical',
	responsive: [{
		breakpoint: 768,
		settings: {
			swipe: true,
		  adaptiveHeight: true,
		}
	}]
})

$('.review__nav__vertical').slick({
	vertical: true,
  adaptiveHeight: true,
  focusOnSelect: true,
  slidesToShow: 5,
	centerMode: true,
	centerPadding: false,
	arrows: true,
	nextArrow: '<button type="button" class="review-next review-arrow"><img src="image/review-nav-arrow.png" alt="" /></button>',
	prevArrow: '<button type="button" class="review-prev review-arrow"><img src="image/review-nav-arrow.png" alt="" /></button>',
	asNavFor: '.review__main__slider'
})

$('.review__nav__horizont').slick({
  focusOnSelect: true,
  slidesToShow: 5,
	centerMode: true,
	centerPadding: false,
	arrows: true,
	swipe: true,
	nextArrow: '<button type="button" class="review-next review-arrow"><img src="image/review-nav-arrow.png" alt="" /></button>',
	prevArrow: '<button type="button" class="review-prev review-arrow"><img src="image/review-nav-arrow.png" alt="" /></button>',
	responsive: [{
		breakpoint: 480,
		settings: {
		  slidesToShow: 3,
			swipe: true
		}
	}],
	asNavFor: '.review__main__slider'
})

// gallery

$('.gallery__list').slick({
  slidesToShow: 5,
	arrows: true,
	swipe: false,
	nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="fa fa-angle-right"></i></button>',
	prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="fa fa-angle-left"></i></button>',
	responsive: [{
		breakpoint: 991,
		settings: {
		  slidesToShow: 4,
			swipe: true
		}
	},{
		breakpoint: 768,
		settings: {
		  slidesToShow: 2,
			swipe: true,
			arrows: false
		}
	},{
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
			swipe: true,
			arrows: false
		}
	}]
})