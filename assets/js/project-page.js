// project-page.js developed by Bob Tianqi Wei
(function () {
  function initSlider(root) {
    var slides = Array.prototype.slice.call(root.querySelectorAll(".classic-slide"));
    var dots = Array.prototype.slice.call(root.querySelectorAll(".classic-slider-dot"));
    var prev = root.querySelector("[data-classic-slider-prev]");
    var next = root.querySelector("[data-classic-slider-next]");
    var index = 0;
    var timer = null;

    if (slides.length <= 1) {
      if (prev) {
        prev.hidden = true;
      }

      if (next) {
        next.hidden = true;
      }

      return;
    }

    function render() {
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle("is-active", slideIndex === index);
      });

      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle("is-active", dotIndex === index);
      });
    }

    function show(nextIndex) {
      index = (nextIndex + slides.length) % slides.length;
      render();
    }

    function restartAutoPlay() {
      window.clearInterval(timer);
      timer = window.setInterval(function () {
        show(index + 1);
      }, 4000);
    }

    if (prev) {
      prev.addEventListener("click", function () {
        show(index - 1);
        restartAutoPlay();
      });
    }

    if (next) {
      next.addEventListener("click", function () {
        show(index + 1);
        restartAutoPlay();
      });
    }

    dots.forEach(function (dot, dotIndex) {
      dot.addEventListener("click", function () {
        show(dotIndex);
        restartAutoPlay();
      });
    });

    root.addEventListener("mouseenter", function () {
      window.clearInterval(timer);
    });

    root.addEventListener("mouseleave", function () {
      restartAutoPlay();
    });

    render();
    restartAutoPlay();
  }

  document.addEventListener("DOMContentLoaded", function () {
    Array.prototype.forEach.call(document.querySelectorAll("[data-classic-slider]"), initSlider);
  });
})();
