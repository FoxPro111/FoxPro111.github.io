// img to svg
// $('img.svg').each(function(){
//     var $img = $(this);
//     var imgID = $img.attr('id');
//     var imgClass = $img.attr('class');
//     var imgURL = $img.attr('src');

//     $.get(imgURL, function(data) {
//         // Get the SVG tag, ignore the rest
//         var $svg = $(data).find('svg');

//         // Add replaced image's ID to the new SVG
//         if(typeof imgID !== 'undefined') {
//             $svg = $svg.attr('id', imgID);
//         }
//         // Add replaced image's classes to the new SVG
//         if(typeof imgClass !== 'undefined') {
//             $svg = $svg.attr('class', imgClass+' replaced-svg');
//         }

//         // Remove any invalid XML tags as per http://validator.w3.org
//         $svg = $svg.removeAttr('xmlns:a');

//         // Replace image with new SVG
//         $img.replaceWith($svg);

//     }, 'xml');

// });

// nav menu mobile

$('.nav__btn').click(function(event) {
    $('body').toggleClass('active');
    $("html, body").animate({scrollTop: 0 }, 200);
    $('.header').toggleClass('active');
    $(this).toggleClass('active');
});


// thanks div

$('.formBtn').click(function(event) {
	event.preventDefault();

	$('.form__slide').addClass('form-success');
});

// close form 

$('.btn-close-form').click(function(event) {
	event.preventDefault();
	
	$('.footer').removeClass('footer--margin').removeClass('footer-contact');
	$('.form__section').slideUp(500);

	$('.section-solution').addClass('no-form');
	$('.footer--solution').addClass('no-form');
});


// header search
$('.search a').click(function(event) {
	event.preventDefault();


	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
		$('.search__view').css('width', '35px').css('opacity', '0').css('visibility', 'hidden');
		$('.search__ipt').css('width', '0').css('visibility', 'hidden');
		$('.search__sbt').css('opacity', '0').css('visibility', 'hidden');

	} else {
		var width = $('.search__view__wrapp').outerWidth();
		$('.search__view').css('opacity', '1').css('width', width).css('visibility', 'visible');
		$('.search__sbt').css('opacity', '1').css('visibility', 'visible');
		$('.search__ipt').css('width', '235px').css('opacity', '1').css('visibility', 'visible');
		$(this).addClass('active');
		$('#search').focus();
	}

});

$(document).on('click', function(e) {
  if (!$(e.target).closest(".search a, .search__view").length) {
  	$('.search a').removeClass('active');
		$('.search__view').css('width', '35px').css('opacity', '0').css('visibility', 'hidden');
		$('.search__ipt').css('width', '0').css('visibility', 'hidden');
		$('.search__sbt').css('opacity', '0').css('visibility', 'hidden');
  }
  e.stopPropagation();
});

new WOW().init(	{
});


// menu animation

$(".nav__item-parent").hover(
  function() {
    var target = $(this).find('.subnav__view').addClass('open');
    var height = $(this).find('.subnav__list').outerHeight();
    target.css('height', height);

    target.find('.subnav__item').each(function(index, el) {
    	var delay = 0.3 + index*0.1;
			$(this).css('transition-delay', delay + 's');
			$(this).css('opacity', '1');;
    });
  }, function() {
    var target = $(this).find('.subnav__view');
    target.css('height', 0);;

    target.find('.subnav__item').each(function(index, el) {
			$(this).css('transition-delay', '.1s');
			$(this).css('opacity', '0');;
		});
    // $( this ).find( "span:last" ).remove();
  }
)