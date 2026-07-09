/**
 * C# Reference Kit — footer year. The resource-list entrance animation is
 * pure CSS (load-triggered, not scroll-triggered) so it needs no JS at all.
 */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById("current-year");
    if (el) el.textContent = new Date().getFullYear();
  });
})();
