$(document).ready(function () {
  AOS.init();

  updateNav();

  $(window).scroll(function () {
    updateNav();
  });

  function updateNav() {  
    if ($(window).scrollTop() > 40) {
      $("nav").addClass("scrolled");
    } 
    else {
      $("nav").removeClass("scrolled");
    }
  }

  $(".testimonial-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    items: 3,
    dots: true,
  });
});
