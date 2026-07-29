$(function () {
  $(".site-navbar .nav-link").on("click", function () {
    if (window.innerWidth < 992) {
      $(".site-navbar .navbar-collapse").collapse("hide");
    }
  });
});
