$('.banner_slider').slick({
    dots: true,
    arrows:false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });




  // ex part start
  new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});

new VenoBox({
    selector: '.my-video-links',
});
// ex part end






// img slider part start
// $('.img_slider').slick({
//   arrows:false,
//   dots: true,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 5,
//   slidesToScroll: 1,
// });
// img slider part end






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


  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
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





