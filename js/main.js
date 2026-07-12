/* Bright Light Electrical site interactions */
(function () {
  "use strict";

  /* ----- Sticky header shadow ----- */
  var header = document.querySelector(".header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ----- Mobile nav toggle ----- */
  var toggle = document.querySelector(".nav__toggle");
  var links = document.querySelector(".nav__links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ----- Scroll-reveal animations ----- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ----- Animated counters ----- */
  var counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window && counters.length) {
    var cio = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          cio.unobserve(el);
          var target = parseFloat(el.getAttribute("data-count"));
          var decimals = (el.getAttribute("data-count").split(".")[1] || "").length;
          var suffix = el.getAttribute("data-suffix") || "";
          var duration = 1400;
          var start = null;
          var step = function (ts) {
            if (!start) start = ts;
            var p = Math.min((ts - start) / duration, 1);
            var eased = 1 - Math.pow(1 - p, 3);
            el.textContent = (target * eased).toFixed(decimals) + suffix;
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach(function (el) { cio.observe(el); });
  }

  /* ----- Enquiry form → WhatsApp ----- */
  var form = document.getElementById("enquiry-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var get = function (name) {
        var f = form.elements[name];
        return f ? f.value.trim() : "";
      };
      var lines = [
        "New enquiry from the Bright Light Electrical website:",
        "",
        "Name: " + get("name"),
        "Phone: " + get("phone"),
        get("email") ? "Email: " + get("email") : "",
        get("area") ? "Area: " + get("area") : "",
        get("service") ? "Service needed: " + get("service") : "",
        get("urgency") ? "Urgency: " + get("urgency") : "",
        "",
        "Message: " + get("message")
      ].filter(function (l) { return l !== ""; });

      var url =
        "https://wa.me/27825101840?text=" +
        encodeURIComponent(lines.join("\n"));
      window.open(url, "_blank", "noopener");

      var success = document.getElementById("form-success");
      if (success) {
        success.classList.add("is-visible");
        success.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
      form.reset();
    });
  }

  /* ----- Photo slots: swap in real photos when the files exist ----- */
  document.querySelectorAll("[data-photo]").forEach(function (slot) {
    var src = slot.getAttribute("data-photo");
    if (!src) return;
    var probe = new Image();
    probe.onload = function () {
      var img = document.createElement("img");
      img.src = src;
      img.alt = slot.getAttribute("data-photo-alt") || "";
      img.className = "photo-fill";
      slot.appendChild(img);
    };
    probe.src = src;
  });

  /* ----- Footer year ----- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
