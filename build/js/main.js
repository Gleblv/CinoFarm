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

function toggleCategories(e) {
   let target = e.target;

   if (target.tagName == "LI") {
      target.classList.toggle("active");
   }

   if (target.classList.contains("categories__show-all")) {
      let listElements = target.closest("ul").children;

      for (let i = 0; i < listElements.length; i++) {
         if (listElements[i].tagName == "LI") {
            listElements[i].classList.add("active");
         }
      }
   }

   if (target.classList.contains("categories__collapse")) {
      target.closest("li").classList.remove("active");
   }
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

// Скролл на главной

if (document.querySelector(".main-home")) {
   const mainPageScroll = new fullpage("#fullpage");
}

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

// Модалки на детальной странице обучения

if (document.querySelector("#onlineModal")) {
   console.log("1");
   const onlineModal = document.querySelector("#onlineModal"),
      openBtn = document.querySelector("#openonlineModal"),
      closeBtn = onlineModal.querySelector(".modal-online__close");

   openBtn.addEventListener("click", (e) => {
      e.preventDefault();

      onlineModal.classList.add("active");
   });

   closeBtn.addEventListener("click", () => {
      onlineModal.classList.remove("active");
   });
}

if (document.querySelector("#offlineModal")) {
   const offlineModal = document.querySelector("#offlineModal"),
      openBtn = document.querySelector("#openofflineModal"),
      closeBtn = offlineModal.querySelector(".modal-offline__close");

   openBtn.addEventListener("click", (e) => {
      e.preventDefault();

      offlineModal.classList.add("active");
   });

   closeBtn.addEventListener("click", () => {
      offlineModal.classList.remove("active");
   });
}

// Модалка на странице регистрации

if (document.querySelector("#registrationModal")) {
   const registrationModal = document.querySelector("#registrationModal"),
      openBtn = document.querySelector("#openRegistrationModal"),
      closeBtn = registrationModal.querySelector(".modal-registration__close");

   openBtn.addEventListener("click", (e) => {
      e.preventDefault();

      registrationModal.classList.add("active");
   });

   closeBtn.addEventListener("click", () => {
      registrationModal.classList.remove("active");
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
      toggleCategories(e);
   });
}

// Список преподавателей

if (document.querySelector("#teachersList")) {
   const teachersList = document.querySelector("#teachersList");

   teachersList.addEventListener("click", (e) => {
      toggleCategories(e);
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

// Табы на странице иглы

if (document.querySelector(".needle-info")) {
   const diametrsContainer = document.querySelector("#needleDiametrs"),
      lengthsContainer = document.querySelector("#neddleLengths");

   const onClickTab = (parentContainer) => {
      parentContainer.addEventListener("click", (e) => {
         let target = e.target;

         if (target.classList.contains("needle-info__btn")) {
            let childrenArr = parentContainer.children;

            for (let i = 0; i < childrenArr.length; i++) {
               childrenArr[i].classList.remove("active");
            }

            target.classList.add("active");
         }
      });
   };

   onClickTab(diametrsContainer);
   onClickTab(lengthsContainer);
}

// popup сверху в каталогах

if (document.querySelector(".catalog-items__categories") && window.screen.width <= 768) {
   const popup = document.querySelector(".catalog-items__popup"),
      categoriesBtn = document.querySelector(".catalog-items__categories");

   let offsetTop = offset(categoriesBtn).top;

   window.addEventListener("scroll", () => {
      window.scrollY >= offsetTop ? popup.classList.add("active") : popup.classList.remove("active");
   });
}

// Открытие/закрытие категории на мобилке

if (document.querySelector(".catalog-items__categories") && window.screen.width <= 768) {
   const openCaregoriesBtn1 = document.querySelector(".catalog-items__categories"),
      openCaregoriesBtn2 = document.querySelector(".catalog-items__popup-column"),
      closeCategoriesBtn = document.querySelector(".categories__head-close"),
      categories = document.querySelector(".categories");

   function toggleCategories() {
      if (categories.classList.contains("active")) {
         categories.classList.remove("active");
         document.querySelector(".header").style.display = "block";
         document.querySelector(".footer").style.display = "block";
         document.querySelector("main").style.height = "";
         document.querySelector("main").style.overflow = "auto";
      } else {
         categories.classList.add("active");
         document.querySelector(".header").style.display = "none";
         document.querySelector(".footer").style.display = "none";
         document.querySelector("main").style.height = `${categories.scrollHeight}px`;
         document.querySelector("main").style.overflow = "hidden";
      }
   }

   openCaregoriesBtn1.addEventListener("click", toggleCategories);

   openCaregoriesBtn2.addEventListener("click", toggleCategories);

   closeCategoriesBtn.addEventListener("click", toggleCategories);
}

if (document.querySelector(".traditional-med") && window.screen.width > 768) {
   const toggleMenuBtn = document.querySelector(".traditional-med__left"),
      menu = document.querySelector(".categories");

   toggleMenuBtn.addEventListener("click", () => {
      menu.classList.toggle("active");
   });
}

if (document.querySelector(".traditional-med") && window.screen.width <= 768) {
   const openMenuBtn = document.querySelector(".traditional-med__left"),
      closeMenuBtn = document.querySelector(".categories__head-close"),
      menu = document.querySelector(".categories"),
      categories = document.querySelector(".categories");

   openMenuBtn.addEventListener("click", () => {
      menu.classList.add("active");
      document.querySelector(".header").style.display = "none";
      document.querySelector(".footer").style.display = "none";
      document.querySelector("main").style.height = `${categories.scrollHeight}px`;
      document.querySelector("main").style.overflow = "hidden";
   });

   closeMenuBtn.addEventListener("click", () => {
      menu.classList.remove("active");
      document.querySelector(".header").style.display = "block";
      document.querySelector(".footer").style.display = "block";
      document.querySelector("main").style.height = "";
      document.querySelector("main").style.overflow = "auto";
   });
}

// Календарь (десктоп)

if (document.querySelector("#catalogDatepicer") && window.screen.width > 768) {
   const calendar = new AirDatepicker("#catalogDatepicer", {
      position: "bottom right",
   });
}

// Календарь (моб)

if (document.querySelector("#mobileCatalogDatepicker") && window.screen.width <= 768) {
   const mobileCalendar = new AirDatepicker("#mobileCatalogDatepicker", {
      inline: true,
   });

   const openCalendarPopupBtn = document.querySelector(".catalog-items__date-mobile"),
      calendarPopup = document.querySelector(".catalog-items__popup-date"),
      openCalendarPopupBtn2 = document.querySelector(".catalog-items__popup-column.date"),
      closeCalendarPopupBtn = document.querySelector(".catalog-items__popup-date__close");

   openCalendarPopupBtn.addEventListener("click", () => {
      calendarPopup.classList.add("active");
      document.querySelector(".header").style.display = "none";
      document.querySelector(".footer").style.display = "none";
      document.querySelector("main").style.height = `${calendarPopup.scrollHeight}px`;
      document.querySelector("main").style.overflow = "hidden";
   });

   openCalendarPopupBtn2.addEventListener("click", () => {
      calendarPopup.classList.add("active");
      document.querySelector(".header").style.display = "none";
      document.querySelector(".footer").style.display = "none";
      document.querySelector("main").style.height = `${calendarPopup.scrollHeight}px`;
      document.querySelector("main").style.overflow = "hidden";
   });

   closeCalendarPopupBtn.addEventListener("click", () => {
      calendarPopup.classList.remove("active");
      document.querySelector(".header").style.display = "block";
      document.querySelector(".footer").style.display = "block";
      document.querySelector("main").style.height = "";
      document.querySelector("main").style.overflow = "auto";
   });
}

if (document.querySelector(".catalog-items__tabs")) {
   const tabsContainer = document.querySelector(".catalog-items__tabs"),
      tabs = document.querySelectorAll(".catalog-items__tab");

   tabsContainer.addEventListener("click", (e) => {
      let target = e.target;

      if (target.classList.contains("catalog-items__tab")) {
         tabs.forEach((tab) => {
            tab.classList.remove("active");
         });

         target.classList.add("active");
      }
   });
}

// Переключение инпута с паролем

if (document.querySelector(".input .unvisible")) {
   const passwordInputContainer = document.querySelector("#passwordInput"),
      visibleIcon = passwordInput.querySelector(".visible"),
      unvisibleIcon = passwordInput.querySelector(".unvisible");

   visibleIcon.addEventListener("click", () => {
      passwordInputContainer.classList.add("visible");
      passwordInputContainer.querySelector("input").setAttribute("type", "text");
   });

   unvisibleIcon.addEventListener("click", () => {
      passwordInputContainer.classList.remove("visible");
      passwordInputContainer.querySelector("input").setAttribute("type", "password");
   });
}

// Раскрытие/закрытие товаров в лк/мои заказы

if (document.querySelector(".orders__table-row__item-list")) {
   const toggleListBtn = document.querySelector(".orders__table-row__item-list__toggle-list"),
      list = document.querySelector(".orders__table-row__item-list"),
      listContainers = document.querySelectorAll(".orders__table-row__item");

   let initialHeight = 0;

   window.screen.width > 768 ? (initialHeight = 20.6) : (initialHeight = 41.6);

   listContainers.forEach((container) => {
      container.addEventListener("click", (e) => {
         let target = e.target;
         let list = container.querySelector(".orders__table-row__item-list");

         if (
            target.classList.contains("orders__table-row__item-list__toggle-list") &&
            list.classList.contains("active")
         ) {
            list.classList.remove("active");
            list.style.maxHeight = `${initialHeight}rem`;
            target.textContent = "Раскрыть";

            return;
         }

         if (
            target.classList.contains("orders__table-row__item-list__toggle-list") &&
            !list.classList.contains("active")
         ) {
            list.classList.add("active");
            list.style.maxHeight = `${list.scrollHeight}rem`;
            target.textContent = "Свернуть";
         }
      });
   });
}

// Раскрытие/закрытие товаров в лк/список

if (document.querySelector(".payments__table")) {
   const rows = document.querySelectorAll(".payments__table-row");

   let initialHeight = 0;

   window.screen.width > 768 ? (initialHeight = 8.6) : (initialHeight = 54);

   rows.forEach((row) => {
      row.addEventListener("click", (e) => {
         let target = e.target;

         if (
            target.classList.contains("payments__table-row__item-toggle") &&
            !row.classList.contains("active")
         ) {
            row.classList.add("active");
            row.style.maxHeight = `${row.scrollHeight}rem`;
            target.textContent = "Скрыть заказ";

            return;
         }

         if (
            target.classList.contains("payments__table-row__item-toggle") &&
            row.classList.contains("active")
         ) {
            row.classList.remove("active");
            row.style.maxHeight = `${initialHeight}rem`;
            target.textContent = "Показать заказ";
         }
      });
   });
}

// Переключение блоков в лк

if (document.querySelector(".account-lk") && window.screen.width > 768) {
   const tabsContainer = document.querySelector(".account-lk__menu"),
      tabs = document.querySelectorAll(".account-lk__menu-item"),
      blocks = document.querySelectorAll(".account-lk__block");

   tabsContainer.addEventListener("click", (e) => {
      let target = e.target;

      if (target.classList.contains("account-lk__menu-item")) {
         let activeBox = target.dataset.blockName;

         tabs.forEach((tab) => {
            tab.classList.remove("active");
         });

         target.classList.add("active");

         blocks.forEach((block) => {
            if (block.classList.contains(activeBox)) {
               block.classList.add("active");
               return;
            }

            block.classList.remove("active");
         });
      }
   });
}

if (document.querySelector(".account-lk") && window.screen.width <= 768) {
   const menu = document.querySelector(".account-lk__menu-mobile"),
      menuItems = document.querySelectorAll(".account-lk__menu-mobile__item"),
      blocks = document.querySelectorAll(".account-lk__block");

   let initialHeight = 14.4;

   menu.addEventListener("click", (e) => {
      let target = e.target;

      if (target.classList.contains("account-lk__menu-mobile__item") && target.classList.contains("active")) {
         menu.style.maxHeight = `${menu.scrollHeight / 5}rem`;
         return;
      }

      if (target.classList.contains("account-lk__menu-mobile__item")) {
         let activeBlock = target.dataset.blockName;

         menuItems.forEach((item) => {
            item.classList.remove("active");
         });

         blocks.forEach((block) => {
            if (block.classList.contains(activeBlock)) {
               block.classList.add("active");
               return;
            }

            block.classList.remove("active");
         });

         menu.prepend(target);
         menu.style.maxHeight = `${initialHeight}rem`;
         target.classList.add("active");
      }
   });
}

// Аккордион на странице фитопрепаратов

if (document.querySelector(".phytopreparations-body__tables")) {
   const items = document.querySelectorAll(".phytopreparations-body__tables-item");

   items.forEach((item) => {
      let itemHead = item.querySelector(".phytopreparations-body__tables-item__head");
      let itemHeadHeight = window.screen.width > 768 ? itemHead.scrollHeight / 10 : itemHead.scrollHeight / 5;

      item.style.maxHeight = `${itemHeadHeight}rem`;

      itemHead.addEventListener("click", () => {
         let itemHeight = window.screen.width > 768 ? item.scrollHeight / 10 : item.scrollHeight / 5;

         item.classList.toggle("active");

         item.classList.contains("active")
            ? (item.style.maxHeight = `${itemHeight}rem`)
            : (item.style.maxHeight = `${itemHeadHeight}rem`);
      });
   });
}
