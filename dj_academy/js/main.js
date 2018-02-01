// top banner gradient
var granimInstance = new Granim({
    element: '#canvas-basic',
    name: 'basic-gradient',
    direction: 'top-bottom', // 'diagonal', 'top-bottom', 'radial'
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    stateTransitionSpeed: 3000,
    states : {
        "default-state": {
            gradients: [
                ['#1b4fe0', '#fff'],
                ['#00CDAC', '#fff']
            ]
        }
    }
});

// scroll to element after click link
$('a.scroll__link').on('click', function (e) {
  e.preventDefault();
  var href = $(this).attr('href');
  $('html, body').animate({
      scrollTop: $(href).offset().top - 50
  }, 'slow');
});

// tabs courses
$('.courses a').on('click', function(event) {
    event.preventDefault();
    var href = $(this).attr('href');
    $(this).tab('show');  
    $('.courses a').removeClass('active');
    $(this).addClass('active');  
    function scrolling() {
      $('html, body').animate({scrollTop: $(href).offset().top - 49}, 400);
    } 
    setTimeout(scrolling, 200);
});

// review slider init
$('.review__slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  swipe: false,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      infinite: true,
      swipe: true
    }
  }]
})

// select courses
$('.btn--course').on('click', function(event) {
  event.preventDefault();
  var select = $(this).data('select');
  $('#form-select-1').val(select);
  $('#input-header-1').focus();
});

// mobile navigation
$('.nav__btn, .shadow, .nav__item a').on('click', function(event) {
  event.preventDefault();
  if ($(window).width() < 767) {
    $('.nav__list').slideToggle(500);
    $('body').toggleClass('open');
  }
});


// check form and send mail
$('#btn_submit').on('click', function(event) {
  event.preventDefault();
  /* Act on the event */
  var user_name    = $('#input-header-1').val();
  var user_phone   = $('#input-header-2').val();
  var course_select = $('#form-select-1').val();
    // отправляем данные
  $.ajax({
  url: "../action.php", // куда отправляем
  type: "post", // метод передачи
  dataType: "json", // тип передачи данных
  data: { // что отправляем
    "user_name":    user_name,
    "user_phone":   user_phone,
    "course_select": course_select
  },
  // после получения ответа сервера
  success: function(data){
      $('#messages-1').html(data.result); // выводим ответ сервера
    }
  });
});

$('#btn_submit--footer').on('click', function(event) {
  event.preventDefault();
  /* Act on the event */
  var user_name    = $('#input-footer-1').val();
  var user_phone   = $('#input-footer-2').val();
  var course_select = $('#form-select-2').val();
    // отправляем данные
  $.ajax({
  url: "../action.php", // куда отправляем
  type: "post", // метод передачи
  dataType: "json", // тип передачи данных
  data: { // что отправляем
    "user_name":    user_name,
    "user_phone":   user_phone,
    "course_select": course_select
  },
  // после получения ответа сервера
  success: function(data){
      $('#messages-2').html(data.result); // выводим ответ сервера
    }
  });
});