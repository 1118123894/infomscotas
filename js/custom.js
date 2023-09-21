// overlay menu
function openNav() {
  document.getElementById("myNav").classList.toggle("menu_width");
  document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
}

// display current year

function displayYear() {
  var d = new Date();
  var currentYear = d.getFullYear();

  // document.querySelector("#displayDate").innerHTML = currentYear;
}
displayYear();

// client section owl carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  navText: [],
  dots: false,
  autoplay: true,
  autoplayHoverPause: true,
  navText: [
    '<span class="fa fa-arrow-left "></span>',
    '<span class="fa fa-arrow-right"></span>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    991: {
      items: 2,
    },
  },
});

/** google_map js **/

function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(40.712775, -74.005973),
    zoom: 18,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

if (window.scrollY === 0) {
  this.document.querySelector(".navbar").classList.remove("fixed-navbar");
  this.document.querySelector(".navbar-brand span").classList.add("text-white");
} else {
  this.document.querySelector(".navbar").classList.add("fixed-navbar");
  this.document
  .querySelector(".navbar-brand span")
  .classList.remove("text-white");
}
window.addEventListener("scroll", function () {
  if (window.scrollY === 0) {
    this.document.querySelector(".navbar").classList.remove("fixed-navbar");
    this.document
      .querySelector(".navbar-brand span")
      .classList.add("text-white");
  } else {
    this.document.querySelector(".navbar").classList.add("fixed-navbar");
    this.document
      .querySelector(".navbar-brand span")
      .classList.remove("text-white");
  }
});
