$('.img_slider').slick({
    arrows:false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
  });

  $('.details_slider').slick({
    arrows:false,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.imgg_slider',
    fade:true,
  });

  $('.imgg_slider').slick({
    asNavFor: '.details_slider',
    arrows:false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
  });

  $('.sidebar_btn').click(function(){
    $('.side_bar').toggleClass('berho')
    
  })


  $(document).ready(function(){
    $(window).bind('scroll', function() {
      // var lalalaHeight = $('.lalala').height();
      if ($(window).scrollTop() > 100) {
        $('#main_menu').addClass('rony');
        // $('.nav-1').addClass('toleft');
       }
      else {
        $('#main_menu').removeClass('rony');
        // $('.nav-1').removeClass('toleft');
       }
    });
  });


  