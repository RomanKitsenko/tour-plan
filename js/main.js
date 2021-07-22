var swiper = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button--next",
    prevEl: ".swiper-button--prev",
  },
});

var reviewsSwiper = new Swiper(".reviews-slider__container", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button-next",
    prevEl: ".reviews-slider__button-prev",
  },
});

var menuButton = document.querySelector(".hamburger");
menuButton.addEventListener("click", function () {
  document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom_visible");
});
