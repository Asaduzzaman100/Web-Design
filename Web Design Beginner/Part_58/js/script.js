// let btn = document.getElementById('btn')
// let remove = document.getElementById('remove')
// btn.addEventListener('click', function(){
//     let item = document.getElementById('one')
//     item.classList.add('big')
// })

// remove.addEventListener('click', function(){
//     let item = document.getElementById('one')
//     item.classList.remove('big')
// })





// let btn = document.getElementById('btn')
// btn.addEventListener('click', function(){
//     let item = document.getElementById('one')
//     item.classList.toggle('big')
// })






// $(document).ready(function(){
//     $("#hide").click(function(){
//         $("#one").slideUp();
//       });

//     $("#show").click(function(){
//         $("#one").slideDown();
//     });
// })





// $(document).ready(function(){
//     $('#add').click(function(){
//         $('#one').addClass('big')
//     })
//     $('#remove').click(function(){
//         $('#one').removeClass('big')
//     })
//   });




// $(document).ready(function(){
//     $('#toggle').click(function(){
//         $('#one').toggleClass('big');
//     })
// })





$(document).ready(function(){
    $('.my_slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        // arrows: false,
        prevArrow:'<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
        nextArrow:'<i class="fa fa-angle-right next" aria-hidden="true"></i>',
        centerMode: true,
        centerPadding: '0px',
        asNavFor: '.my_slider_2'
      });
      $('.my_slider_2').slick({
        asNavFor: '.my_slider',
        dots: false,
        arrows:false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        // arrows: false,
        prevArrow:'<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
        nextArrow:'<i class="fa fa-angle-right next" aria-hidden="true"></i>',
        centerMode: true,
        centerPadding: '0px',
      });
})


