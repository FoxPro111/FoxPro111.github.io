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

$('a.scroll__link').on('click', function (e) {
  e.preventDefault();
  var href = $(this).attr('href');
  $('html, body').animate({
      scrollTop: $(href).offset().top - 50
  }, 'slow');
});

// $('.courses a').click(function (e) {
//   e.preventDefault()
//   $(this).tab('show');
//   $('.courses a').removeClass('active');
//   $(this).addClass('active');
// })

$('.courses a').on('click', function(event) {
    event.preventDefault();
    var href = $(this).attr('href');
    // $('html, body').animate({scrollTop: $(href).offset().top - 50}, 'fast'); 
    $(this).tab('show');  
  $('.courses a').removeClass('active');
  $(this).addClass('active');  
});