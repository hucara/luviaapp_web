(function () {
  function rev(s) {
    return s.split("").reverse().join("");
  }
  var nodes = document.querySelectorAll("a[data-eu][data-ed]");
  for (var i = 0; i < nodes.length; i++) {
    var el = nodes[i];
    var addr = rev(el.getAttribute("data-eu")) + "@" + rev(el.getAttribute("data-ed"));
    el.textContent = addr;
    el.setAttribute("href", "mailto:" + addr);
  }
})();
