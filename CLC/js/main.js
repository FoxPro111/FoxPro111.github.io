$(document).ready(function() {
    
    // initial video player
    $('.video_el').mediaelementplayer({
        features: ['progress', 'current', 'duration'],
        success: function(media) {
            media.addEventListener('play', function() {
                $('body').addClass('video_playing');          
            }, true);
            
           media.addEventListener('pause', function() {
                $('body').removeClass('video_playing');          
            }, true);
        }

    });

    var team_slider = $('.team_slider');
    if (team_slider.length) {
	    $('.team_slider').slick({
	        slidesToShow: 6,
	        responsive: [{
	            breakpoint: 1940,
	            settings: {
	                slidesToShow: 6,
	                swipe: false
	            }
	        },{
	            breakpoint: 1360,
	            settings: {
	                slidesToShow: 4,
	                swipe: false
	            }
	        },{
	            breakpoint: 1140,
	            settings: {
	                slidesToShow: 3,
	                swipe: false
	            }
	        },{
	            breakpoint: 991,
	            settings: {
	                slidesToShow: 2,
	                swipe: true
	            }
	        },{
	            breakpoint: 480,
	            settings: {
	                slidesToShow: 1,
	                swipe: true
	            }
	        }]
	    });
    }
   // initial fullpage plagin
    var fullpage = $('#fullpage'),
        fullpageInner = $('#fullpage-inner'),
        init;
    
    if (fullpage.length) {
        init = fullpage;
    } else if (fullpageInner.length) {
        init = fullpageInner;
    }
    
    $(init).fullpage({
        scrollOverflow: true,
        scrollOverflowReset: true,
        scrollOverflowResetKey: 'YWx2YXJvdHJpZ28uY29tXzlRaGMyTnliMnhzVDNabGNtWnNiM2RTWlhObGRBPT14Ykk=',
        normalScrollElements: '.no_scroll'
    });

    var personal_photo_slider = $('.personal_photo_slider');
    if (personal_photo_slider.length) {
	    $('.personal_photo_slider').slick({
	        sliderToShow: 1,
	        swipe: true,
	        asNavFor: '.personal_text_slider'
	    })
	}

    var personal_text_slider = $('.personal_photo_slider');
    if (personal_text_slider.length) {
	    $('.personal_text_slider').slick({
	        asNavFor: '.personal_photo_slider',
	        fade: true,
	        adaptiveHeight: true
	    })
	}
    
    $('.loader').addClass('hide');
});

// mobile menu open/close
if(jQuery('.hamburger')){
    jQuery('.hamburger, .mobile__bg, .mobile__menu .close').click(function(){
        jQuery('.mobile__menu').toggleClass('mobile__menu__open');
        jQuery('body').toggleClass('mobile__menu__open');
    })
}

var windowWidth = 0;
$( ".client_list a" ).hover(
    function() {
        windowWidth = $(window).width();
        if (windowWidth > 768) {
            var bgUrl = $(this).data('bg');
            var bgTarget = $('.client');
            $(bgTarget).addClass("hover");
            $('body').addClass("hover_client");
            $(bgTarget).css('background-image', 'url(' + bgUrl + ')');
        }
    }, function() {
        var bgTarget = $('.client');
        $(bgTarget).removeClass("hover");
        $('body').removeClass("hover_client");
    }
);



$(window).on('load resize', function () {
    var windowHeight = window.innerHeight;
    var tableCellHeight = $('.heightJS .fp-tableCell-wrapp').innerHeight();
    
    $('.heightJS .fp-tableCell-wrapp, .heightJS .fp-scroller, .team_item').css('height', windowHeight);
    $('.heightJS .fp-tableCell-wrapp, .heightJS .fp-scroller, .team_item').css('min-height', windowHeight);
    $('.heightJS .iScrollVerticalScrollbar').css("display","none");
});



//
//var url = '',
//    container = '.media-wrapper',
//    content_load = '.content_load',
//    parentBlock = '';
//    
//
//$('a[data-window]').click(function(e){
//    
//    e.preventDefault();
//    $('.load_window').addClass('open');
//    $('body').removeClass("hover_client").addClass('open_window');
//    
//    $('.close_window').addClass('close_video');
//    
//    parentBlock = $(this).closest(".section").addClass('active2');
//    
//    load_page(container, url = $(this).attr('href'), content_load);
//
//    setTimeout(function () {
//        $.fn.fullpage.destroy('all');
//        $('#fullpage-inner').fullpage({
//            scrollOverflow: true,
//            scrollOverflowReset: true,
//            scrollOverflowResetKey: 'YWx2YXJvdHJpZ28uY29tXzlRaGMyTnliMnhzVDNabGNtWnNiM2RTWlhObGRBPT14Ykk=',
//            normalScrollElements: '.no_scroll'
//        });
//
//        $('#mediaplayer').mediaelementplayer({
//            features: ['progress', 'current', 'duration'],
//            canplay: function () {
//                $('body').addClass('video_playing');
//            },
//            pause: function () {
//                $('body').addClass('video_playing');
//            }
//        });
//
//        $('.media-wrapper').addClass('loading');
//    }, 500); 
//    
//})
//
//$('.close_window').click(function(){
//    close_page();
//
//    if (url != '') {
//        history.go(-1);
//    }
//});
//
//if (window.history && window.history.pushState) {
//    $(window).on('popstate', function() {
//        close_page();
//    });
//}
//
//function load_page(container, link, content) {
//    $(container).load(link + ' ' + content);
//    history.pushState({foo: 'bar'}, 'Title', link);
//}
//
//function close_page(){
//    $('.load_window').removeClass('open');
//    $('body').removeClass('open_window');
//  
//    $('.media-wrapper').removeClass('loading');
//    $.fn.fullpage.destroy('all');
//  
//    parentBlock.addClass('active');
//      
//    $('#fullpage').fullpage({
//        scrollOverflow: true,
//        scrollOverflowReset: true,
//        scrollOverflowResetKey: 'YWx2YXJvdHJpZ28uY29tXzlRaGMyTnliMnhzVDNabGNtWnNiM2RTWlhObGRBPT14Ykk=',
//        normalScrollElements: '.no_scroll'
//    });
//    
//    if ($(this).hasClass('close_video')) {
//        var target = $('#mediaplayer');
//      
//        setTimeout(function () {
//            target.remove();
//            $('.media-wrapper').html('');
//        }, 500); 
//    }
//}
//
//