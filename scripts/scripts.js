// FOR MOBILE MENU
let burgerMenuOpen = document.querySelector("#menuOpen");
let burgerMenuClose = document.querySelector("#menuClose");
let menu = document.querySelector("#menu");

burgerMenuOpen.addEventListener("click", () => {
  menu.classList.add("open");
});

burgerMenuClose.addEventListener("click", () => {
  menu.classList.remove("open");
});
// FOR MOBILE MENU

document.addEventListener('DOMContentLoaded', function () {
    
  const scrollBtn = document.querySelector(".scrollup");
  
  window.addEventListener('scroll', function() {
      let scroll = window.scrollY;
      
      if (scroll > 100) {
          scrollBtn.classList.add('is-visible');
      } else {
         scrollBtn.classList.remove('is-visible');
      }
  });
  
  scrollBtn.addEventListener("click", () => {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  });
});

// SWIPER CAROUSELS
var swiper1 = new Swiper(".roomsSwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 600,
  loop: true,
  navigation: {
    nextEl: ".roomsSwiper .swiper-button-next",
    prevEl: ".roomsSwiper .swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper2 = new Swiper(".roomPhotosSwiper1", {
  spaceBetween: 30,
  speed: 600,
  loop: true,
  navigation: {
    nextEl: ".roomPhotosSwiper1 .swiper-button-next",
    prevEl: ".roomPhotosSwiper1 .swiper-button-prev",
  },
});

var swiper3 = new Swiper(".roomPhotosSwiper2", {
  spaceBetween: 30,
  speed: 600,
  loop: true,
  navigation: {
    nextEl: ".roomPhotosSwiper2 .swiper-button-next",
    prevEl: ".roomPhotosSwiper2 .swiper-button-prev",
  },
});

var swiper4 = new Swiper(".roomPhotosSwiper3", {
  spaceBetween: 30,
  speed: 600,
  loop: true,
  navigation: {
    nextEl: ".roomPhotosSwiper3 .swiper-button-next",
    prevEl: ".roomPhotosSwiper3 .swiper-button-prev",
  },
});

// var swiper5 = new Swiper(".whySwiper .swiper", {
//   slidesPerView: 1,
//   spaceBetween: 0,
//   speed: 600,
//   loop: true,
//   navigation: {
//     nextEl: ".whySwiper .swiper-button-next",
//     prevEl: ".whySwiper .swiper-button-prev",
//   },
//   breakpoints: {
//     700: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     1199: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     1399: {
//       slidesPerView: 3,
//       spaceBetween: 20,
//     },
//   },
// });

var swiper6 = new Swiper(".experiencesSwiper .swiper", {
  spaceBetween: 20,
  speed: 600,
  loop: true,
  navigation: {
    nextEl: ".experiencesSwiper .swiper-button-next",
    prevEl: ".experiencesSwiper .swiper-button-prev",
  },
  breakpoints: {
    0: {
      loop: false,
      slidesPerView: 1.2,
      spaceBetween: 16,
      centeredSlides: true,
      centeredSlidesBounds: true,
      freeMode: true
    },
    650: {
      slidesPerView: 2.2
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1499: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

var swiper7 = new Swiper(".testimonialsSwiper .swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 600,
  loop: true,
  navigation: {
    nextEl: ".testimonialsSwiper .swiper-button-next",
    prevEl: ".testimonialsSwiper .swiper-button-prev",
  },
  breakpoints: {
    0: {
      loop: false,
      slidesPerView: 1.2,
      spaceBetween: 16,
      centeredSlides: true,
      centeredSlidesBounds: true,
      freeMode: true
    },
    650: {
      slidesPerView: 2.2
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1599: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

var swiper8 = new Swiper(".roomsInnerSwiper .swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 600,
  loop: true,
  navigation: {
    nextEl: ".roomsInnerSwiper .swiper-button-next",
    prevEl: ".roomsInnerSwiper .swiper-button-prev",
  },
  breakpoints: {
    0: {
      loop: false,
      slidesPerView: 1.2,
      spaceBetween: 16,
      centeredSlides: true,
      centeredSlidesBounds: true,
      freeMode: true
    },
    992: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 20,
    }
  },
});


var swiper9 = new Swiper(".instagramSwiper .swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 600,
  loop: false,
  breakpoints: {
    0: {
      loop: false,
      slidesPerView: 1.2,
      spaceBetween: 16,
      centeredSlides: true,
      centeredSlidesBounds: true,
      freeMode: true
    },
    650: {
      slidesPerView: 2.2
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    }
  },
});
// SWIPER CAROUSELS
