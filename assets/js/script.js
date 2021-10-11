$(document).ready(function () {
  $('.carousel-one').owlCarousel({
    loop:false,
    margin:50,
    nav:false,
    dots: true,
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
  $('.carousel-two').owlCarousel({
    loop:false,
    margin:50,
    nav:false,
    dots: true,
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
});