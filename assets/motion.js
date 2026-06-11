(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!("IntersectionObserver" in window)) return;
  var els = document.querySelectorAll("main .section, main .strip, main .notice-band, main .legal-group");
  var io = new IntersectionObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        entries[i].target.classList.add("is-visible");
        io.unobserve(entries[i].target);
      }
    }
  }, { rootMargin: "0px 0px -8% 0px" });
  for (var i = 0; i < els.length; i++) {
    els[i].classList.add("reveal");
    io.observe(els[i]);
  }
})();
