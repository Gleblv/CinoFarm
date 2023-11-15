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
   slidesPerView: 1,
   slidesPerGroup: 1,
   spaceBetween: 10,

   breakpoints: {
      768: {
         slidesPerView: 2,
         slidesPerGroup: 2,
         spaceBetween: 32,
      },
   },

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

// Поле поиска в хеадере

if (document.querySelector(".header") && window.screen.width > 768) {
   const header = document.querySelector(".header"),
      openSearchBtn = document.querySelector(".header__search"),
      closeSearchBtn = document.querySelector(".header__search-input__close"),
      headerSearchMenu = document.querySelector(".header__search-input__menu");

   openSearchBtn.addEventListener("click", () => {
      header.classList.add("search-active");
   });

   closeSearchBtn.addEventListener("click", () => {
      header.classList.remove("search-active");
      headerSearchMenu.classList.remove("active");
   });
} else if (document.querySelector(".header") && window.screen.width <= 768) {
   const header = document.querySelector(".header"),
      openSearchBtn = document.getElementById("openSearchMobile");

   openSearchBtn.addEventListener("click", () => {
      header.classList.add("search-active");
   });
}

// Меню при поиске в хеадере

if (document.querySelector(".header")) {
   const headerSearchInput = document.querySelector(".header__search-input input"),
      headerSearchMenu = document.querySelector(".header__search-input__menu");

   headerSearchInput.addEventListener("input", (e) => {
      e.target.value ? headerSearchMenu.classList.add("active") : headerSearchMenu.classList.remove("active");
   });
}

// Бургер меню в хеадере

if (document.querySelector(".header") && window.screen.width <= 768) {
   const openBurgerBtn = document.querySelector(".header__burger"),
      closeBurgerBtn = document.querySelector(".header__burger-close"),
      burgerMenu = document.querySelector(".header__burger-menu");

   openBurgerBtn.addEventListener("click", () => {
      burgerMenu.classList.add("active");
   });

   closeBurgerBtn.addEventListener("click", () => {
      const header = document.querySelector(".header"),
         headerSearchMenu = document.querySelector(".header__search-input__menu");

      if (!header.classList.contains("search-active")) {
         burgerMenu.classList.remove("active");
      } else {
         header.classList.remove("search-active");
         headerSearchMenu.classList.remove("active");
      }
   });
}

// Модалка на главной

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

// Модалка на странице оформления заказа

if (document.querySelector("#orderModal")) {
   const orderModal = document.querySelector("#orderModal"),
      openBtn = document.querySelector("#openOrderModal"),
      closeBtn = orderModal.querySelector(".modal-order__close");

   openBtn.addEventListener("click", (e) => {
      e.preventDefault();

      orderModal.classList.add("active");
   });

   closeBtn.addEventListener("click", () => {
      orderModal.classList.remove("active");
   });
}

// Закреп блока "Ваш заказ" в корзине при скроле

if (document.querySelector(".basket-aside") && window.screen.width >= 768) {
   const orderBlock = document.querySelector(".basket-aside");
   let orderBlockOffset = offset(orderBlock).top;

   window.addEventListener("scroll", () => {
      if (window.scrollY >= orderBlockOffset - 50) {
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

// Переключение табов на странице ингредиента

if (document.querySelector(".ingredient-descr")) {
   const tabsContainer = document.querySelector(".ingredient-descr__tabs"),
      tabs = document.querySelectorAll(".ingredient-descr__tab"),
      blocks = document.querySelectorAll(".ingredient-descr__block");

   tabsContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("ingredient-descr__tab")) {
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

// Закрепление чека при скролле на мобилке

if (document.querySelector(".basket-aside") && window.screen.width < 768) {
   const check = document.querySelector(".basket-aside");
   let checkOffsetTop = offset(check).top;

   check.classList.add("popup");

   window.addEventListener("scroll", () => {
      let offsetTop = window.scrollY + document.documentElement.clientHeight;

      offsetTop < checkOffsetTop ? check.classList.add("popup") : check.classList.remove("popup");
   });
}

// Перключение контента на странице оформления заказа

if (document.querySelector(".order")) {
   const inputsType = document.querySelectorAll(".order__delivery-method");

   const deliveryTypeTitle = document.querySelector(".order__addres-title"),
      deliveryInputType = document.querySelector(".order__addres-addres label");

   inputsType.forEach((input) => {
      input.addEventListener("click", (e) => {
         let value = e.target.value;

         if (value == "courier-delivery") {
            deliveryTypeTitle.textContent = "Адрес доставки";
            deliveryInputType.textContent = "Адрес";
         } else {
            deliveryTypeTitle.textContent = "Адрес пункта выдачи";
            deliveryInputType.textContent = "Пункт выдачи";
         }
      });
   });
}

// Категории
if (document.querySelector(".categories")) {
   const categoryList = document.querySelector("#categoriesList");

   categoryList.addEventListener("click", (e) => {
      let target = e.target;

      if (target.tagName == "LI") {
         target.classList.toggle("active");
      }
   });
}

// rangeInput

if (document.querySelector(".categories")) {
   const inputsRange = document.querySelectorAll(".categories__range-inputs input");
   const inputsPrice = document.querySelectorAll(".categories__range-value input");
   const progres = document.querySelector(".categories__range-progres");
   const minGap = 1000;

   inputsPrice.forEach((input) => {
      input.addEventListener("input", (e) => {
         let minValue = +inputsPrice[0].value;
         let maxValue = +inputsPrice[1].value;

         if (maxValue - minValue >= minGap && maxValue <= 10000) {
            if (e.target.classList.contains("categories__price-input__min")) {
               inputsPrice[0].value = minValue;
               progres.style.left = `${(minValue / inputsRange[0].max) * 100}%`;
            } else {
               inputsPrice[1].value = maxValue;
               progres.style.right = `${100 - (maxValue / inputsRange[0].max) * 100}%`;
            }
         }
      });
   });

   inputsRange.forEach((input) => {
      input.addEventListener("input", (e) => {
         let minValue = +inputsRange[0].value;
         let maxValue = +inputsRange[1].value;

         if (maxValue - minValue < minGap) {
            if (e.target.classList.contains("categories__range-input__min")) {
               inputsRange[0].value = maxValue - minGap;
            } else {
               inputsRange[1].value = minValue + minGap;
            }
         } else {
            inputsPrice[0].value = minValue;
            inputsPrice[1].value = maxValue;
            progres.style.left = `${(minValue / inputsRange[0].max) * 100}%`;
            progres.style.right = `${100 - (maxValue / inputsRange[0].max) * 100}%`;
         }
      });
   });
}

// Перелючение карточек на странице Оплата, доставка и возврат

if (document.querySelector(".payment-info__delivery-dropdown")) {
   const dropdownContainer = document.querySelector(".payment-info__delivery-dropdown"),
      cardBoxes = document.querySelectorAll(".payment-info__delivery-box"),
      dropdownItems = document.querySelectorAll(".payment-info__delivery-dropdown__item"),
      dropdownInput = document.querySelector(".payment-info__delivery-dropdown__value");

   dropdownInput.addEventListener("click", () => {
      dropdownContainer.classList.toggle("active");
   });

   dropdownContainer.addEventListener("click", (e) => {
      let dataAttr;
      let target = e.target;

      if (target.classList.contains("payment-info__delivery-dropdown__item")) {
         dropdownInput.innerHTML = target.innerHTML;
         dataAttr = target.dataset.deliveryMethod;
         dropdownContainer.classList.remove("active");

         cardBoxes.forEach((box) => {
            box.classList.remove("active");

            if (box.classList.contains(dataAttr)) {
               box.classList.add("active");
            }
         });
      }
   });
}
