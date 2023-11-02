"use strict";

const rem = function (rem) {
   if ($(window).width() > 768) {
      return 0.005208335 * $(window).width() * rem;
   } else {
      return (100 / 390) * (0.1 * $(window).width()) * rem;
   }
};

function offset(el) {
   var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
   return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

const popularSwiper = new Swiper(".popular__swiper", {
   slidesPerView: 1,
   spaceBetween: rem(3),
   speed: 500,
   navigation: {
      prevEl: ".popular__prev",
      nextEl: ".popular__next",
   },

   breakpoints: {
      769: {
         slidesPerView: 3,
      },
   },
});

const newsSwiper = new Swiper(".news__swiper", {
   slidesPerView: 1,
   speed: 500,
   breakpoints: {
      769: {
         slidesPerView: 1,
      },
   },
   navigation: {
      prevEl: ".news__prev",
      nextEl: ".news__next",
   },
});

const educationSwiper = new Swiper(".education__swiper", {
   slidesPerView: 1,
   spaceBetween: rem(3),
   speed: 500,
   breakpoints: {
      769: {
         slidesPerView: 2,
      },
   },
   navigation: {
      prevEl: ".education__prev",
      nextEl: ".education__next",
   },
});

const literatureSwiper = new Swiper(".literature__swiper", {
   slidesPerView: 1,
   spaceBetween: rem(3),
   speed: 500,
   navigation: {
      prevEl: ".literature__prev",
      nextEl: ".literature__next",
   },

   breakpoints: {
      769: {
         slidesPerView: 2,
      },
   },
});

const partnersSwiper = new Swiper(".partners__swiper", {
   slidesPerView: 1,
   spaceBetween: rem(3),
   speed: 500,
   navigation: {
      prevEl: ".partners__prev",
      nextEl: ".partners__next",
   },
   breakpoints: {
      769: {
         slidesPerView: 2,
      },
   },
});

const projectsSwiper = new Swiper(".projects__swiper", {
   slidesPerView: 1,
   spaceBetween: rem(3),
   speed: 500,
   navigation: {
      prevEl: ".projects__prev",
      nextEl: ".projects__next",
   },

   breakpoints: {
      769: {
         slidesPerView: 2,
      },
   },
});

const contactsSlider = new Swiper(".contacts-slider__swiper", {
   speed: 500,
   slidesPerView: 2,
   slidesPerGroup: 2,
   spaceBetween: 32,

   navigation: {
      prevEl: ".contacts__prev",
      nextEl: ".contacts__next",
   },
});

const teacherSlider = new Swiper(".teacher__swiper", {
   speed: 500,
   slidesPerView: 1,
   slidesPerGroup: 1,
   spaceBetween: 20,

   breakpoints: {
      768: {
         slidesPerView: 2,
         slidesPerGroup: 2,
         spaceBetween: 30,
      },
   },

   navigation: {
      prevEl: ".teacher__prev",
      nextEl: ".teacher__next",
   },
});

if (document.querySelector("#invitationModal")) {
   const invitationModal = document.querySelector("#invitationModal"),
      openBtn = document.querySelector("#openInvitationModal"),
      closeBtn = invitationModal.querySelector(".modal-invitation__close");

   openBtn.addEventListener("click", (e) => {
      e.preventDefault();

      invitationModal.classList.add("active");
   });

   closeBtn.addEventListener("click", () => {
      invitationModal.classList.remove("active");
   });
}

// Закреп блока "Ваш заказ" в корзине при скроле

if (document.querySelector(".basket-aside") && window.screen.width >= 768) {
   const orderBlock = document.querySelector(".basket-aside");
   let orderBlockOffset = offset(orderBlock).top;

   window.addEventListener("scroll", () => {
      if (window.scrollY >= orderBlockOffset) {
         orderBlock.classList.add("sticky");
      } else {
         orderBlock.classList.remove("sticky");
      }
   });
}

// Переключение городов на странице "Где купить"
if (document.querySelector(".buy-map")) {
   const tabs = document.querySelectorAll(".buy-map__tab-btn"),
      tabsContainer = document.querySelector(".buy-map__tabs");

   tabsContainer.addEventListener("click", (e) => {
      tabs.forEach((tab) => {
         tab.classList.remove("active");
      });

      if (e.target.classList.contains("buy-map__tab-btn")) {
         e.target.classList.add("active");
      }
   });
}

// Переключение табов на странице товара

if (document.querySelector(".item-description")) {
   const tabsContainer = document.querySelector(".item-description__tabs"),
      tabs = document.querySelectorAll(".item-description__tab"),
      blocks = document.querySelectorAll(".item-description__block");

   tabsContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("item-description__tab")) {
         let activeTab = e.target;
         let activeTabAttr = activeTab.dataset.blockName;

         tabs.forEach((tab) => {
            tab.classList.remove("active");
         });

         activeTab.classList.add("active");

         blocks.forEach((block) => {
            block.classList.contains(activeTabAttr)
               ? block.classList.add("active")
               : block.classList.remove("active");
         });
      }
   });
}
