/* 
 * hexo theme meow
 * main scripts
 */

import initScroll from "./theme/tools/scroll.js";
import initDatetime from "./theme/tools/datetime.js"

export function initMain() {
  const refresh = () => {
    initScroll();
    initDatetime();
  }

  refresh();
};

document.addEventListener("DOMContentLoaded", initMain);