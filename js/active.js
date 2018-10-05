$(document).ready(function(){

  // search icon click
  $("#search").click(function(){
     $(".search").toggleClass("animate");
  });

  // acitvating owl slider
  $('.slider-active').owlCarousel({
    loop:true,
    nav:true,
    navText:['<div><i class="fas fa-angle-left"></i></div>','<div><i class="fas fa-angle-right"></i></div>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// activating project area slider
$('.slider-2').owlCarousel({
    loop:true,
    nav:true,
    navText:['<div><i class="fas fa-angle-left"></i></div>','<div><i class="fas fa-angle-right"></i></div>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        767:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

// activating blog area slider
$('.blog-active').owlCarousel({
    loop:true,
    nav:true,
    items:1,
    navText:['<div><i class="fas fa-angle-left"></i></div>','<div><i class="fas fa-angle-right"></i></div>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


// activating testimonial area slider
$('.testimonial-active').owlCarousel({
    loop:true,
    nav:true,
    navText:['<div><i class="fas fa-angle-left"></i></div>','<div><i class="fas fa-angle-right"></i></div>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// activating activating brand area slider
$('.brand-active').owlCarousel({
    loop:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        700:{
            items:3
        },
        992:{
            items:4
        },
        1000:{
            items:6
        }
    }
})


// video popup
$('.test-popup-link').magnificPopup({
    type: 'iframe'
    // other options
  });

  //mobile-menu
  jQuery('#mobile-menu').meanmenu({
      meanScreenWidth:'767',
      meanMenuContainer:'.mobile-menu'
  });

});