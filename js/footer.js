document.querySelectorAll("[data-copyright-year]").forEach(function (el) {
  el.textContent = new Date().getFullYear();
});
