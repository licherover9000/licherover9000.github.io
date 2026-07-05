// Abhay Rawat — portfolio interactions.
// Vanilla JS only: mobile menu, footer year, scroll reveal, scrollspy.

(function () {
  "use strict";

  // ---- Mobile menu ----
  var header = document.querySelector(".site-header");
  var burger = document.getElementById("nav-burger");
  var navLinks = document.getElementById("nav-links");

  burger.addEventListener("click", function () {
    var open = header.classList.toggle("nav-open");
    burger.setAttribute("aria-expanded", String(open));
  });

  // Close the menu when a link inside it is clicked.
  navLinks.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      header.classList.remove("nav-open");
      burger.setAttribute("aria-expanded", "false");
    }
  });

  // ---- Footer year ----
  document.getElementById("year").textContent = new Date().getFullYear();

  // ---- Reveal on scroll ----
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    // Very old browser: just show everything.
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  // ---- Scrollspy: highlight the nav link for the section in view ----
  var sections = document.querySelectorAll("section[id]");
  var linkFor = {};
  document.querySelectorAll("[data-nav]").forEach(function (a) {
    linkFor[a.dataset.nav] = a;
  });

  if ("IntersectionObserver" in window) {
    var spyObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var link = linkFor[entry.target.id];
          if (!link) return;
          if (entry.isIntersecting) {
            Object.keys(linkFor).forEach(function (k) {
              linkFor[k].classList.remove("active");
            });
            link.classList.add("active");
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach(function (s) { spyObserver.observe(s); });
  }
})();
