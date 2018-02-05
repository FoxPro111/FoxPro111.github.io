// init banner slider
$('.banner__slider').slick({
	autoplay: true,
	autoplaySpeed: 5000,
	dots: true,
	swipe: false,
	responsive: [{
      breakpoint: 600,
      settings: {
        arrows: false,
        dots: true,
        swipe: true
      }
    }]
})

// 
// 
// animantion desctop navigation
$('.header .nav__item--parent').hover(function() {
	$(this).children('.nav__sublist').slideDown('400');
}, function() {
	$(this).children('.nav__sublist').slideUp('400');
});

// 
// 
// animation mobile search openning
$('.search__mob').click(function(event) {
	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
		$('.search').slideUp(400);
	} else {
		$('.search').slideDown(400);
		$('.search__ipt').focus();
		$(this).addClass('active');
	}
});

$(document).on('click', function(e) {
  if (!$(e.target).closest(".search__mob, .search, .search__sbt").length && $(window).width() < 1024) {
		$('.search__mob').removeClass('active');
		$('.search').slideUp(400);
  }
  e.stopPropagation();
});

// 
// 
// 
// animation mobile navigation openning too
$('.nav__btn').click(function(event) {
	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
		$('.mob').removeClass('active');
	} else {
		$(this).addClass('active');
		$('.mob').addClass('active');
	}
});

$(document).on('click', function(e) {
  if (!$(e.target).closest(".nav__btn, .mob__wrapp").length && $(window).width() < 1024) {
		$('.nav__btn').removeClass('active');
		$('.mob').removeClass('active');
  }
  e.stopPropagation();
});

$('.mob .nav__item--parent > a').on('click', function(event) {
  event.preventDefault();
  $(this).next('.nav__sublist').slideToggle('400');
});

// 
// 
// 
// animation progress line
function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(document).ready( function() {
  $('.skill__line').each(function() {
    if (isScrolledIntoView(this) === true) {
      var line = $(this).data('line');
      $(this).children('.skill__line__inner').width(line + '%');
    } 
  });
});

$(document).bind('load scroll', function() {
  $('.skill__line').each(function() {
    if (isScrolledIntoView(this) === true) {
      var line = $(this).data('line');
      $(this).children('.skill__line__inner').width(line + '%');
    } 
  });
});