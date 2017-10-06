$( ".select__item" ).selectmenu({
	icons: false,
    isRTL: true
});

$('.btn-form').click(function(e){
	// e.preventdefault()
	$('.main__content').addClass('active');
	return false;
})

$(window).on("load resize",function(e){
    table_responsive();
});

function table_responsive() {
    $('.table__wrapp').each(function(index, el) {
       var wrappWidth = $(this).width();
       var childWidth = $(this).children('.table__head').width() + $(this).children('.table__content').width();
       var scroll = $(this).scrollLeft();

       var tableArrow = $(this).find($('.table-arrow'));

       if (wrappWidth >= childWidth) {
        tableArrow.removeClass('overflow');
       } else {
        tableArrow.addClass('overflow');
       }
    });
}

$('a[data-scroll]').click(function(event) {
    var target = '#' + $(this).data('target');
    var position = $(this).data('scroll');
    var scroll = $(target).scrollLeft();

    if (position == 'left') {
        scroll -= 120;
    } else if (position == 'right') {
        scroll += 120;
    }

    $(target).animate({
        scrollLeft: scroll
    }, 400);

    return false;
});

(function ($) {
    $.toggleShowPassword = function (options) {
        var settings = $.extend({
            field: "#password",
            control: "#toggle_show_password",
        }, options);

        var control = $(settings.control);
        var field = $(settings.field)

        control.bind('click', function () {
            if (!control.hasClass('checked')) {
                field.attr('type', 'text');
                field.focus();
                control.addClass('checked');
            } else {
                field.attr('type', 'password');
                field.focus();
                control.removeClass('checked');
            }

            return false
        })

    };
}(jQuery));

//Here how to call above plugin from everywhere in your application document body
$.toggleShowPassword({
    field: '#password-1',
    control: '#password-see-1'
});

// $('.form__input__wrapp > .fa').click(function(event) {
//    $(this).parent('.form__input__wrapp').find('input').focus();
// });

$('.link__top').click(function(event) {
     $('html, body').animate({ scrollTop: 0 }, 500); // анимируем скроолинг к элементу scroll_el
    return false;
});

$('.checkbox--all').change(function() {
    if (this.checked) {
        $(this).closest('.placeholder__table').find('.checkbox').prop('checked', true);
    } else {
        $(this).closest('.placeholder__table').find('.checkbox').prop('checked', false);
    }
});

// grafic open

var myChart;
var chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "January", "February", "March", "April", "May", "June", "July"],
    datasets: [ {
        label: ["My First dataset"],
        backgroundColor: '#DFDFDF',
        borderColor: '#818181',
        data: [32, 10, 5, 2, 40, -30, 45, 32, -10, 5, 2, 20, 30, 45]
    }]
};


$('.information__item__wrapp').click(function(event) {
    if ($(this).closest('.information__item').hasClass('active')) {
        $('.information__item').removeClass('active');
        $(this).closest('.information__row').removeClass('opened');
        
        $('.information__item').animate({'margin-bottom': 0}, 500);

        var graf_target = $(this).closest('.information__item').data('graf');

        // destroy grafic and make new
        myChart.destroy();
    } else {
        var active = $('.information__item.active');
        var offset_old = 0;
        var margin_old = 0;

        if (active) {
            active.each(function(index, el) {
                offset_old =  $(this).offset().top;
                margin_old =  parseInt($(this).css("marginBottom"), 10);
            });
        }

        $('.information__item.active').animate({'margin-bottom': 0}, 500);
        $('.information__item').removeClass('active');

        $(this).closest('.information__item').addClass('active');
        $(this).closest('.information__row').addClass('opened');

        var offset = $(this).offset().top;
        if (offset > offset_old) {
            offset = offset - margin_old;
        }

        $('html, body').animate({ scrollTop: offset}, 500);

        var height_grafic = $($(this).closest('.information__item').data('target')).outerHeight();
        $(this).closest('.information__item').animate({'margin-bottom': height_grafic}, 500);

        var graf_target = $(this).closest('.information__item').data('graf');

        // make grafic
        var ctx = $(graf_target);
        myChart = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            responsive: true,
            options: {
                maintainAspectRatio: false
            }
        });
    }
});

// tab


$('.tab__link').click(function(event) {
    if (!$(this).hasClass('active')) {
        var graf__target = $(this).data('graf');
        var type = $(this).data('type');
        var graf__date = $(graf__target).data('graf-data');
        var graf__name = $(graf__target).data('name');
        // console.log(graf__name);

        myChart.destroy();
        myChart = new Chart($(graf__target), {
            type: type,
            data: chartData,
            responsive: true,
            options: {
                maintainAspectRatio: false
            }
        });

        $(this).closest('.grafic__tab__list').find('.tab__link').removeClass('active');
        $(this).addClass('active');
    }

    return false;
});

// height grafic

$(window).on("load resize",function(e){
    height_grafic();
});

function height_grafic() {
    item = $('.grafic__canvas');
    if (item) {
        item.each(function(index, el) {
            $(this).width('100%');
            var width = $(this).width();
            $(this).height(width*.35);
        });
    }
}

//height block


$(window).on("resize",function(e){
    height_block();
});

function height_block() {
    item = $('.information__item.active');
    if (item) {
        item.each(function(index, el) {
            var height_grafic = $($(this).data('target')).outerHeight();
            $(this).closest('.information__item').animate({'margin-bottom': height_grafic}, 500);
        });
    }
}

// search

$('.btn-search').click(function(){
    var time = 700;
    $('.payment').slideDown(time);
    $('.search__info').slideDown(time);
    $('html, body').animate({ scrollTop: $('.search__info').offset().top}, time);
    return false;
})