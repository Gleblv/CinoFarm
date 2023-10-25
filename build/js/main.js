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

ymaps.ready(function () {
   var myMap = new ymaps.Map(
         "map",
         {
            center: [55.751574, 37.573856],
            zoom: 9,
         },
         {
            searchControlProvider: "yandex#search",
         }
      ),
      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
         '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),
      myPlacemark = new ymaps.Placemark(
         myMap.getCenter(),
         {
            hintContent: "Собственный значок метки",
            balloonContent: "Это красивая метка",
         },
         {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: "default#image",
            // Своё изображение иконки метки.
            iconImageHref: "images/myIcon.gif",
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38],
         }
      ),
      myPlacemarkWithContent = new ymaps.Placemark(
         [55.661574, 37.573856],
         {
            hintContent: "Собственный значок метки с контентом",
            balloonContent: "А эта — новогодняя",
            iconContent: "12",
         },
         {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: "default#imageWithContent",
            // Своё изображение иконки метки.
            iconImageHref: "images/ball.png",
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout,
         }
      );

   myMap.geoObjects.add(myPlacemark).add(myPlacemarkWithContent);
});
