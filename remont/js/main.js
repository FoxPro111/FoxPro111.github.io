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


$('.repair__info').equalHeights();

$(".review__slider").slick({
  infinite: false,
  arrows: true,
  slidesToShow: 3,
  swipe: false,
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }},{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        swipe: true
      }
    }]
});

$(".work__slider").slick({
  infinite: false,
  arrows: true,
  slidesToShow: 4,
  swipe: false,
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }},{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        swipe: true
      }},{
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        swipe: true
      }
    }]
});

$('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('a[data-scroll]').click(function(event) {
    var target = '#' + $(this).data('target');
    var position = $(this).data('scroll');
    var scroll = $(target).scrollLeft();

    if (position == 'left') {
        scroll -= 150;
    } else if (position == 'right') {
        scroll += 150;
    }

    $(target).animate({
        scrollLeft: scroll
    }, 400);

    return false;
});

$(window).on("load resize",function(e){
    table_responsive();
});

$('.table-responsive').on("scroll",function(e){
    table_responsive();
});

function table_responsive() {
    $('.table-responsive').each(function(index, el) {
       var wrappWidth = $(this).width();
       var childWidth = $(this).children('.table').width();
       var getId = $(this).attr('id');
       var scroll = $(this).scrollLeft();

       var tableArrow = $('.table-arrow[data-target="' + getId + '"]');

       if (wrappWidth >= childWidth) {
        tableArrow.removeClass('overflow');
       } else {
        tableArrow.addClass('overflow');
       }

       if (scroll == 0) {
        tableArrow.addClass('left-full');
       } else {
        tableArrow.removeClass('left-full');
       }
    });
}

$('#tab_select').on('change', function (e) {
    var id = $(this).val();
    $('a[href="' + id + '"]').tab('show');
});

$('.tab__item a').click(function (e) {
  e.preventDefault();
  var id = $(this).attr('href');
  $('#tab_select').val(id);
})


$(document).ready(function() {
    $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
      }
    });
});

$('.nav__item--search a, .seacrh__close').click(function(event) {
  event.preventDefault();
  $('.nav__wrapp').toggleClass('search__active');
});

$(document).on('click', function(e) {
  if (!$(e.target).closest(".search__wrapp, .nav__item--search a").length) {
    $('.nav__wrapp').removeClass('search__active');
  }
  e.stopPropagation();
});