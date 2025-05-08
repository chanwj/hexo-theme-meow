import initScroll from "./theme/tools/scroll.js";

export function initMain() {
  const refresh = () => {
    initScroll();
  }

  refresh();
};

document.addEventListener("DOMContentLoaded", initMain);