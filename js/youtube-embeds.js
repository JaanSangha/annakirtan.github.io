(function () {
  var origin = window.location.origin;

  if (!origin || origin === "null") {
    return;
  }

  document.querySelectorAll("[data-youtube-id]").forEach(function (iframe) {
    var id = iframe.getAttribute("data-youtube-id");
    iframe.src =
      "https://www.youtube.com/embed/" +
      encodeURIComponent(id) +
      "?origin=" +
      encodeURIComponent(origin);
  });
})();
