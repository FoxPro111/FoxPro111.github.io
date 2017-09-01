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
        thisHeight = $(this).outerHeight(); 
        if(thisHeight > tallest) { 
            tallest = thisHeight; 
        } 
    }); 
    group.outerHeight(tallest); 
}       

$(window).on('load resize', function () {
    equalHeight($(".bar__item--big .bar__item")); 
    equalHeight($(".bar__item--small .bar__item")); 
    equalHeight($(".team__item")); 
    equalHeight($(".service__item")); 
    equalHeight($(".service__item__wrapp")); 
    equalHeight($(".news__item")); 
});

var $gallery = $('.instructors__slider, .similar__slider');
var slideCount = null;

$( document ).ready(function() {
    $gallery.slick({
        infinite: true,
        slidesToShow: 4,
        appendArrows: '.instructors .arrow, .similar .arrow',
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

$(window).on('load resize scroll', function () {
    var article = $('.article');
    var article__soc = $('.article__soc');
    if ($(window).width() > 768 && article.lenght && article__soc.lenght) {
        var article_offset_top = $('.article').offset().top;
        var article_offset_bottom = $('.article').offset().top + $('.article').outerHeight() - $('.article__soc').outerHeight();
        var soc_offset = $('.article__soc').offset().top;
        var scrollPos = $(document).scrollTop();
        var dir;

        if (scrollPos > article_offset_top && scrollPos < article_offset_bottom) {
            dir = scrollPos - article_offset_top;
            $('.article__soc').css("top", dir + 'px');
        }
    }
});


// podskazka
jQuery(document).ready(function($) {
    $('[data-podskazka]').click(function(event) {
        var target = '#' + $(this).data('target');
        console.log(target);
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $('.podskazka').removeClass('active');
        } else {
            $('[data-podskazka]').removeClass('open');
            $('.podskazka').removeClass('active');
            $(this).addClass('open');
            $(target).addClass('active');
        }
    });
});

$(document).on('click', function(e) {
  if (!$(e.target).closest("[data-podskazka], .podskazka").length || $(e.target).closest(".podskazka__close").length) {
    $('[data-podskazka]').removeClass('open');
    $('.podskazka').removeClass('active');
  }
  e.stopPropagation();
});

// end podskazka

$('.rozpisanie .th[data-day-target]').click(function(event) {
    var day_target = '.' + $(this).data('day-target');
    $('.td-day').removeClass('active');
    $(day_target).addClass('active');
    $('.rozpisanie .th[data-day-target]').removeClass('active');
    $(this).addClass('active');
});