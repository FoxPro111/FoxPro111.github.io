jQuery(document).ready(function() {
	// photo slider
	jQuery('.content__slide').slick({
		arrows: false,
		dots: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					swipe: true
				}
			}
		]
	});

	// work slider (two photos) 
	jQuery('.work__slider').slick({
		arrows: true,
		dots: false,
	    nextArrow: '<div class="slick-arrow slick-next"><i class="fa fa-arrow-right"></i></div>',
	    prevArrow: '<div class="slick-arrow slick-prev"><i class="fa fa-arrow-left"></i></div>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					dots: true,
					arrow: false
				}
			}
		]
	});

	// mobile menu open/close
	if(jQuery('.header__mobile__btn')){
	    jQuery('.header__mobile__btn, .mobile__bg').click(function(){
	        jQuery('.mobile__menu').toggleClass('mobile__menu__open');
	        jQuery('body').toggleClass('mobile__menu__open');
	    })
	}
});


// fixed menu
var tMenu = jQuery('.header--page');
jQuery(window).on('scroll', function() {
    var scrollPos = jQuery('body').scrollTop();
    if( (/Firefox/i.test(navigator.userAgent)) || (/MSIE/i.test(navigator.userAgent)) ) {
        scrollPos = jQuery('html').scrollTop();
    }

    var height = 0;
    
    if(tMenu.hasClass("header__static")) {
        if(scrollPos > height) {
            tMenu.removeClass("header__static");
        }
    }

    if(!tMenu.hasClass("header__static")) {
        if(scrollPos <= height) {
            tMenu.addClass("header__static");
        }
    }
});

//doctor info open/close
jQuery(document).ready(function () {
	var link2 = '';
	var time = 0;
	jQuery('.doctor__btn a').click(function () {
		var link = jQuery(this).data('link');
		var height = jQuery('.doctor__item' + link + ' .doctor__hidden').css('height');

		if (link == link2) {
			jQuery('.doctor__item').animate({ marginBottom: 0}, time);
			jQuery('.doctor__item' + link + ' .doctor__hidden').animate({ opacity: 1}, time).css( "visibility", "hidden" );
			jQuery('.doctor__item').removeClass('active');

			link2 = '';
		} else {
			jQuery('.doctor__item').removeClass('active');
			jQuery('.doctor__item' + link).addClass('active');
			jQuery('.doctor__item:not(' + link + ') .doctor__hidden').animate({ opacity: 0}, time).css( "visibility", "hidden" );
			jQuery('.doctor__item:not(' + link + ')').animate({ marginBottom: 0}, time);
			jQuery('.doctor__item' + link).animate({ marginBottom: height}, time);
			
			jQuery('.doctor__item' + link + ' .doctor__hidden').animate({ opacity: 1}, time).css( "visibility", "visible" );

			link2 = link;
		}

		return false;
	});

	jQuery('.doctor__close').click(function () {
		jQuery('.doctor__item').animate({ marginBottom: 0}, time);
		jQuery('.doctor__item' + link2 + ' .doctor__hidden').animate({ opacity: 1}, time).css( "visibility", "hidden" );
		jQuery('.doctor__item').removeClass('active');
		link2 = '';
	})
})

//modal window
$(document).ready(function(){
	$('[data-toggle="modal"]').click(function(){
	    $('body').addClass('modal-open');
	    var target = $(this).data('target');
	    $('.modal'+ target).addClass('in');
	    $(".modal-backdrop").addClass('in');
	});

    $('.modal').click(function(e) {
      if (!$(e.target).closest(".modal-dialog").length) {
        $('body').removeClass('modal-open');
        $('.modal').removeClass('in');
        $(".modal-backdrop").removeClass('in');
      }
      e.stopPropagation();
    });

	$('.modal .close').click(function(e) {
	    $('body').removeClass('modal-open');
	    $('.modal').removeClass('in');
	    $(".modal-backdrop").removeClass('in');
	});
});

//animation
new WOW().init();
