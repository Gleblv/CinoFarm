"use strict";

$(".header__data-item").hover(
   function () {
      clearTimeout($.data(this, "timer"));

      $(".header__top-form-down-block", this).stop(true, true).slideDown(400);
   },
   function () {
      $.data(
         this,
         "timer",
         setTimeout(
            $.proxy(function () {
               $(".header__top-form-down-block", this).stop(true, true).slideUp(400);
            }, this),
            100
         )
      );
   }
);

$(".popular__scroll-top").on("click", function () {
   $("html, body").animate(
      {
         scrollTop: $("#focal").offset().top,
      },
      300
   );
});

$(".focal__scroll").on("click", function () {
   $("html, body").animate(
      {
         scrollTop: $("#popular").offset().top,
      },
      300
   );
});

$(".popular__scroll-bottom").on("click", function () {
   $("html, body").animate(
      {
         scrollTop: $("#news").offset().top,
      },
      300
   );
});

$(".news__scroll-top").on("click", function () {
   $("html, body").animate(
      {
         scrollTop: $("#popular").offset().top,
      },
      300
   );
});

$(".news__scroll-bottom").on("click", function () {
   $("html, body").animate(
      {
         scrollTop: $("#education").offset().top,
      },
      300
   );
});

$(".education__scroll-top").on("click", function () {
   $("html, body").animate(
      {
         scrollTop: $("#news").offset().top,
      },
      300
   );
});

$(".education__scroll-bottom").on("click", function () {
   $("html, body").animate(
      {
         scrollTop: $("#literature").offset().top,
      },
      300
   );
});

$(".literature__scroll-top").on("click", function () {
   $("html, body").animate(
      {
         scrollTop: $("#education").offset().top,
      },
      300
   );
});

$(".literature__scroll-bottom").on("click", function () {
   $("html, body").animate(
      {
         scrollTop: $("#partners").offset().top,
      },
      300
   );
});

$(".partners__scroll-top").on("click", function () {
   $("html, body").animate(
      {
         scrollTop: $("#literature").offset().top,
      },
      300
   );
});

$(".partners__scroll-bottom").on("click", function () {
   $("html, body").animate(
      {
         scrollTop: $("#projects").offset().top,
      },
      300
   );
});

$(".projects__scroll-top").on("click", function () {
   $("html, body").animate(
      {
         scrollTop: $("#partners").offset().top,
      },
      300
   );
});

$(".projects__scroll-bottom").on("click", function () {
   $("html, body").animate(
      {
         scrollTop: $("#invitation").offset().top,
      },
      300
   );
});

$(".footer__scroll").on("click", function () {
   $("html, body").animate(
      {
         scrollTop: $("#focal").offset().top,
      },
      300
   );
});

$(".popular-box__like").on("click", function () {
   $(this).toggleClass("active");
});

$(".literature-box__like").on("click", function () {
   $(this).toggleClass("active");
});

$(".like").on("click", function () {
   $(this).toggleClass("active");
});

$(".popular-box__basket").on("click", function () {
   $(this).toggleClass("active");
});

$(".literature-box__basket").on("click", function () {
   $(this).toggleClass("active");
});

$(".product__tab-item").click(function () {
   var id = $(this).attr("data-tab"),
      content = $('.product__tab-block[data-tab="' + id + '"]');

   $(".product__tab-item.active").removeClass("active"); // 1
   $(this).addClass("active"); // 2

   $(".product__tab-block.active").removeClass("active"); // 3
   content.addClass("active"); // 4
});
