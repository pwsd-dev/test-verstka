const $jq = jQuery.noConflict();

$jq(document).ready(function () {
  $jq(".slider-freelance").slick({
    // mobileFirst: true,
    variableWidth: true,
    centerMode: true,
    arrows: true,
    dots: false,
    slidesToShow: 3,
    autoplay: false,
    infinite: true,
    speed: 1800,
    adaptiveHeight: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    easing: "ease",
    draggable: true,
    // swipe: true,
    touchTreshold: 20,
    touchMove: false,
    prevArrow: document.querySelector("#prevArrow"),
    nextArrow: document.querySelector("#nextArrow"),
  });
});

function openBlock() {
  const burgerBtn = document.getElementById("burgerBtn");
  const otherId = document.getElementById("other");
  burgerBtn.classList.toggle("active");

  otherId.classList.toggle("hidden");
  otherId.querySelector(".inner").classList.toggle("active");
}

$jq(document).ready(function () {
  $jq("#burgerBtn").click(function () {
    if ($jq("#other").hasClass("active")) {
      $jq("#other").fadeOut();
      $jq("body").removeClass("modal-open");
      $jq("#other").toggleClass("active");
    } else {
      $jq("#other").fadeIn();
      $jq("body").addClass("modal-open");
      $jq("#other").toggleClass("active");
    }
  });
});
