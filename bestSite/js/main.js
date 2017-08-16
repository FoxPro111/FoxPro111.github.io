$('.center_slider').slick({
    arrows: true,
    fade: true
})

$('#header_menu span').click(function(){
    $('.header_menu_items').toggle('active');
    $('#header_menu').toggleClass('active');
})

$(function(){
  $(document).click(function(event) {
    if ($('#header_menu').hasClass('active') && !$(event.target).closest('.header_menu').length) {
        $('.header_menu_items').toggle('active');
        $('#header_menu').toggleClass('active');
    };
    event.stopPropagation();
  });
});


$(document).ready(function() {
	$('.image1').toggleClass('animation-colors');
	var timerId = setInterval(function() {
  $('.image1').toggleClass('animation-colors');
}, 5000);
});

$(document).ready(function($){
    $(".phone").mask("+38(999) 999-9999");
});

$('.review_list.desctop').slick({
    rows: 2,
    slidesPerRow: 1,
    swipe: false,
    infinite: true
})

$('.review_list.mobile').slick({
    rows: 1,
    slidesPerRow: 1,
    swipe: false,
    infinite: true,
    swipe: true
})

 $(document).ready(function(){
    $("body").on("click","a.headerarrow", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$('[data-tab][data-target]').click(function(){
    var tab = $(this).data('tab');
    var target = $(this).data('target');
    var link = '[data-tab="'+ tab +'"][data-target]';
    $(link).removeClass('active');
    $(this).addClass('active');
    $('.example_list > div').hide('500');
    $(target).show('1000');
});

$(window).on('load resize', function () {
     var carousel = $("#carousel-1").waterwheelCarousel({
      // include options like this:
      flankingItems: 2,
      opacityMultiplier: 1

      // (use quotes only for string values, and no trailing comma after last option)
      // option: value,
      // option: value
    });
    
    $('#prev').bind('click', function () {
      carousel.prev();
      return false
    });

    $('#next').bind('click', function () {
      carousel.next();
      return false;
    });
});

