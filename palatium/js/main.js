$('.photo_slider').slick({
    dots: false,
    infinite: false,
    asNavFor: '.cases_slider',
    fade: true,
    infinite: true,
     slidesToShow: 1, 
    slidesToScroll: 1,
    swipe: false,
  lazyLoad: 'ondemand',
    responsive: [{ 
        breakpoint: 768,
        settings: {
            swipe: true
        } 
    }]
})

$('.parallax-window-slider').parallax({
//        imageSrc: photo_current,
    zIndex: 1
});

$('.photo_slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    var photo_current = $(".photo_slider [data-slick-index='" +currentSlide+ "']").attr('src');

    $('.parallax-window-slider').parallax({
    //        imageSrc: photo_current,
        zIndex: 2
    });
})

$('.cases_slider').slick({
    asNavFor: '.photo_slider',
    arrows: false,
    fade: true,
    infinite: true,
    swipe: false
})

$(document).ready(function() {
    $('.objects_wrapp.mobile').mousewheel(function(e, delta) {
        // multiplying by 40 is the sensitivity, 
        // increase to scroll faster.
        this.scrollLeft -= (delta * 40);
        e.preventDefault();
    });
});

$(document).ready(function(){
    $(".home").click(function(){
        $('body,html').animate({scrollTop: 0}, 1500);
    }) 
});

$('.parallax-window-banner').parallax({
    zIndex: -1,
    positionY: 'bottom'
});

$('.parallax-window').parallax({
    zIndex: 9,
    speed: .6
});


var myLazyLoad = new LazyLoad();

 $(document).ready(function(){
    $(".nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});