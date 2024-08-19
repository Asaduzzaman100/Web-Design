// $(".pani").ripples();

// $('.pani').ripples({

//     // Image Url
//     imageUrl: null,
  
//     // The width and height of the WebGL texture to render to. 
//     // The larger this value, the smoother the rendering and the slower the ripples will propagate.
//     resolution: 256,
  
//     // The size (in pixels) of the drop that results by clicking or moving the mouse over the canvas.
//     dropRadius: 20,
  
//     // Basically the amount of refraction caused by a ripple. 
//     // 0 means there is no refraction.
//     perturbance: 0.04,
  
//     // Whether mouse clicks and mouse movement triggers the effect.
//     interactive: true,
  
//     // The crossOrigin attribute to use for the affected image. 
//     crossOrigin: ''
    
//   });


// $('.pani').ripples({
//     resolution: 512,
//     dropRadius: 20,
//     perturbance: 0.04,
//   });


// $(document).ready(function() {
// 	try {
// 		$('body').ripples({
// 			resolution: 512,
// 			dropRadius: 20, //px
// 			perturbance: 0.04,
// 		});
// 		$('main').ripples({
// 			resolution: 128,
// 			dropRadius: 10, //px
// 			perturbance: 0.04,
// 			interactive: false
// 		});
// 	}
// 	catch (e) {
// 		$('.error').show().text(e);
// 	}

// 	$('.js-ripples-disable').on('click', function() {
// 		$('body, main').ripples('destroy');
// 		$(this).hide();
// 	});

// 	$('.js-ripples-play').on('click', function() {
// 		$('body, main').ripples('play');
// 	});

// 	$('.js-ripples-pause').on('click', function() {
// 		$('body, main').ripples('pause');
// 	});

// 	// Automatic drops
// 	setInterval(function() {
// 		var $el = $('main');
// 		var x = Math.random() * $el.outerWidth();
// 		var y = Math.random() * $el.outerHeight();
// 		var dropRadius = 20;
// 		var strength = 0.04 + Math.random() * 0.04;

// 		$el.ripples('drop', x, y, dropRadius, strength);
// 	}, 400);
// });




        // Water Effect
        var $waterEffect = $('.water-effect');
        if ($waterEffect.length > 0) {
            $waterEffect.ripples({
                resolution: 256,
                perturbance: 0.05,
                // dropRadius: 50
            });
        }
      





const destination = document.querySelector('#destination')

window.addEventListener('scroll',function(){
    const ami = document.querySelector('#destination').clientHeight;
    const h = document.querySelector('#destination').offsetTop;

    const img = this.document.querySelector('.ani')

    if(window.scrollY > h-100){
        img.style.left = `${ami/7}px`
    }
    else if(window.scrollY < h+200){
        img.style.left = `${-ami/7}px`
    }
})





        