(function($) {
  
  'use strict';

  // variables
  // var not__resp = 'body:not(.fp-responsive) ';
  var not__resp = '';
  var $opacity__anim = $(not__resp + '.opacity__anim'),
      $isAnimatedSecond = $(not__resp + '#section1 .advantages__picture img'),
      $isAnimatedSecond__sub = $(not__resp + '#section1 .advantages__picture i'),
      // $isAnimatedThird = $(not__resp + '#section2 .garantia__item'),
      $isAnimatedThirdSingle = $(not__resp + '#section2 .section2__wrapp--picture'),
      $isAnimated4thSingle = $(not__resp + '#section3 .popular__item'),
      $isAnimated5thSingle = $(not__resp + '#section4 .content__picture img, #section4 .content__picture i'),
      $isAnimated6thSingle = $(not__resp + '#section5 .content__slide__wrapp i, #section5 .content__slide'),
      $isAnimated7thSingle = $(not__resp + '#section6 .content__picture img, #section6 .content__picture i'),
      $isAnimated8thSingle = $(not__resp + '#section7 .content__picture img'),
      $isAnimated10thSingle = $(not__resp + '#section9 .content__picture img, #section9 .content__picture i');
      // $isAnimatedThirdSingle = $('.third .is-animated__single'),
      // $isAnimatedFourth = $('.fourth .is-animated'),
      // $isAnimatedFourthSingle = $('.fourth .is-animated__single');

  // initialize fullPage
  $('#fullpage').fullpage({
    lazyLoading: true,
    scrollOverflow: true,
    touchSensitivity: 0,
    responsiveHeight: 800,
    responsiveWidth: 1230,
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Главная', 'Преимущества', 'Гарантия', 'Услуги', 'Детская', 'Спец предложение', 'Деньги', 'Безопасность', 'Наши работы', 'Отзывы'],
    afterLoad: function(){
        $opacity__anim.addClass('opacity'); 
        $opacity__anim.eq(0).css('transition-delay', '0');
        $opacity__anim.eq(1).css('transition-delay', '.3s');
        $opacity__anim.eq(2).css('transition-delay', '.6s');
    },
    onLeave: function(index, nextIndex, direction) {
    
      /**
      * use the following condition: 
      *
      *   if( index == 1 && direction == 'down' ) {
      *
      * if you haven't enabled the dot navigation
      * or you aren't interested in the animations that occur 
      * when you jump (using the dot navigation) 
      * from the first section to another sections 
      */
      
      // first animation
      if( (index == 1 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 ) && nextIndex == 2 ) { 
        $isAnimatedSecond__sub.addClass('animated bounceInDown');
        $isAnimatedSecond.addClass('animated bounceInDown'); 
        $isAnimatedSecond.eq(0).css('animation-delay', '.2s');
        $isAnimatedSecond.eq(1).css('animation-delay', '.4s');
        $isAnimatedSecond.eq(2).css('animation-delay', '.6s');
        $isAnimatedSecond.eq(3).css('animation-delay', '.8s');
        // $isAnimatedSecondSingle.addClass('animated rollIn').css('animation-delay', '1.7s');
      }  
      // else if (!( (index == 1 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 ) && nextIndex == 2 )) {
      //   $isAnimatedSecond__sub.removeClass('animated bounceInDown');
      //   $isAnimatedSecond.removeClass('animated bounceInDown'); 
      // }

    // *
    //   * use the following condition: 
    //   *
    //   *   else if( index == 2 && direction == 'down' ) {
    //   *
    //   * if you haven't enabled the dot navigation
    //   * or you aren't interested in the animations that occur 
    //   * when you jump (using the dot navigation) from the first section to the third one 
      
      
      // 2nd animation
      else if( (index == 1 || index == 2 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 ) && nextIndex == 3 ) {
        // $isAnimatedThird.eq(0).addClass('animated fadeInLeftBig').css('animation-delay', '0');
        // $isAnimatedThird.eq(1).addClass('animated fadeInLeftBig').css('animation-delay', '.2s');
        // $isAnimatedThird.eq(2).addClass('animated fadeInLeftBig').css('animation-delay', '.3s');
        
        // $isAnimatedThirdSingle.addClass('animated bounceInDown').css('animation-delay', '1.2s');
        $isAnimatedThirdSingle.addClass('translate'); 
      }
      
      // 4th animation
      else if( (index == 1 || index == 2 || index == 3 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 ) && nextIndex == 4 ) {
        $isAnimated4thSingle.addClass('animated bounceInDown'); 
        $isAnimated4thSingle.eq(0).css('animation-delay', '0');
        $isAnimated4thSingle.eq(1).css('animation-delay', '.2s');
        $isAnimated4thSingle.eq(2).css('animation-delay', '.4s');
        $isAnimated4thSingle.eq(3).css('animation-delay', '0.1s');
        $isAnimated4thSingle.eq(4).css('animation-delay', '.3s');
        $isAnimated4thSingle.eq(5).css('animation-delay', '.5s');
        // $isAnimatedThirdSingle.addClass('animated bounceInDown').css('animation-delay', '1.2s');
      }

      // 5th animation
      else if( (index == 1 || index == 2 || index == 3 || index == 4 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 ) && nextIndex == 5 ) {
        $isAnimated5thSingle.addClass('translate'); 
      }

      // 6th animation
      else if( (index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 7 || index == 8 || index == 9 || index == 10 ) && nextIndex == 6 ) {
        $isAnimated6thSingle.addClass('translate'); 
      }

      // 7th animation
      else if( (index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 8 || index == 9 || index == 10 ) && nextIndex == 7 ) {
        $isAnimated7thSingle.addClass('translate'); 
      }

      // 8th animation
      else if( (index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 9 || index == 10 ) && nextIndex == 8 ) {
        $isAnimated8thSingle.addClass('translate'); 
      }

      // 10th animation
      else if( (index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 ) && nextIndex == 10 ) {
        $isAnimated10thSingle.addClass('translate'); 
      }

      
     /**
      * use the following condition:
      *
      *   else if( index == 3 && direction == 'down' ) {
      *
      * if you haven't enabled the dot navigation
      * or you aren't interested in the animations that occur 
      * when you jump (using the dot navigation) 
      * from the first or second section to the fourth one 
      */
      
      // third animation
      // else if( ( index == 1 || index == 2 || index == 3 ) && nextIndex == 4 ) {
      //   $isAnimatedFourth.addClass('animated zoomIn').css('animation-delay', '.6s');
      //   $isAnimatedFourthSingle.addClass('animated lightSpeedIn').css('animation-delay', '1.2s');
      //   $isAnimatedFourthSingle.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      //     $(this).removeClass('lightSpeedIn').addClass('zoomOutDown');
      //   });
      // }
    }

  });
  
})(jQuery);



