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
});