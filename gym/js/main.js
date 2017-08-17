$('.menu_open_btn').click(function() {
	$('.header').toggleClass('active');
	$('body').toggleClass('open_menu');
	$('.header__other').slideToggle(400);
});

$('.category__item button').click(function(e) {
	$('.category__item button').removeClass('active').addClass('btn-inverse');
	$(this).addClass('active').removeClass('btn-inverse');
});

function equalHeight(group) { 
    var tallest = 0; 
    group.each(function() { 
        thisHeight = $(this).height(); 
        if(thisHeight > tallest) { 
            tallest = thisHeight; 
        } 
    }); 
    group.height(tallest); 
}       

$(window).on('load resize', function () {
    equalHeight($(".bar__item--big .bar__item")); 
    equalHeight($(".bar__item--small .bar__item")); 
    equalHeight($(".team__item")); 
    equalHeight($(".service__item")); 
    equalHeight($(".service__item__wrapp")); 
});

var $gallery = $('.instructors__slider');
var slideCount = null;

$( document ).ready(function() {
    $gallery.slick({
        infinite: true,
        slidesToShow: 4,
        appendArrows: '.instructors .arrow',
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                infinite: true
                }
            }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                infinite: true,
                swipe: true
                }
            }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                infinite: true,
                swipe: true
            }
        }]
    });
});

$gallery.on('init', function(event, slick){
  slideCount = slick.slideCount;
  setSlideCount();
  setCurrentSlideNumber(slick.currentSlide);
});

$gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide){
  setCurrentSlideNumber(nextSlide);
});

function setSlideCount() {
  var $el = $('.slide-count-wrap').find('.total');
  $el.text(slideCount);
}

function setCurrentSlideNumber(currentSlide) {
  var $el = $('.slide-count-wrap').find('.current');
  $el.text(currentSlide + 1);
}

