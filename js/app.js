var swiper = new Swiper(".s1", {
  navigation: {
    nextEl: ".arrows_ .swiper-button-next",
    prevEl: ".arrows_ .swiper-button-prev",
  },
});

var btn = $(".back-to-top");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

var swiper = new Swiper(".s2", {
  slidesPerView: 5,
  slidesPerGroup: 1,
  centeredSlides: false,
  loop: true,
  slideToClickedSlide: true,
  spaceBetween: 50,
  pagination: {
    el: ".s2 .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: false,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
      loop: false,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
