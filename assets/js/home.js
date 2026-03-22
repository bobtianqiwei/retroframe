// home.js developed by Bob Tianqi Wei
(function () {
  var ticker = document.getElementById("news-ticker");

  if (!ticker || !Array.isArray(window.retroframeNewsItems) || !window.retroframeNewsItems.length) {
    return;
  }

  var items = window.retroframeNewsItems;
  var index = 0;

  function render() {
    ticker.textContent = items[index];
    index = (index + 1) % items.length;
  }

  render();
  window.setInterval(render, 5000);
})();
