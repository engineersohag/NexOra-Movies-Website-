$(document).ready(function () {
  // Owl Carousel 01
  $("#indexPageCalOne").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 4 }
    }
  });

  // Owl Carousel 02
  $(".movie-poster-cal").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: ['<span>&#8249;</span>', '<span>&#8250;</span>'],
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      768: { items: 3 },
      992: { items: 5 }
    }
  });

  // Owl Carousel 03
  $(".movies-serice-cal").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: false,
    autoplayTimeout: 3000,
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      768: { items: 3 },
      992: { items: 5 }
    }
  });

});
