// status-bar.js developed by Bob Tianqi Wei
(function () {
  var statusNode = document.getElementById("sf-status");

  if (!statusNode) {
    return;
  }

  var formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  });

  function render() {
    statusNode.textContent = formatter.format(new Date());
  }

  render();
  window.setInterval(render, 30000);
})();
