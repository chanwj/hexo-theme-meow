/* 
 * hexo theme meow
 * main scripts
 */

// import initSwup from "./theme/tools/swup.js";
import initMenu from "./theme/menu.js";
import initToolbar from "./theme/toolbar.js";
import initScroll from "./theme/tools/scroll.js";
import initDatetime from "./theme/tools/datetime.js";
import initLazyLoad from "./theme/tools/lazyload.js";
import initImageView from "./theme/tools/imageview.js";
import initFriendLink from "./theme/friendLink.js";
import initCopy from "./theme/tools/copy.js";
import initCodeBlock from "./theme/code.js";
import initTags from "./theme/tags.js";
import initKeyboard from "./theme/tools/keyboard.js";
import initPageFocus from "./theme/focus.js";
import initMouse from "./theme/tools/mouse.js";
import initSearch from "./theme/search.js";

const initMain = () => {
  const main = () => {
    // initSwup();
    initMenu();
    if (GLOBALCONFIG.toolbar) initToolbar();
    initScroll();
    initDatetime();
    initLazyLoad();
    initImageView();
    if (GLOBALCONFIG.friends) initFriendLink();
    initCopy();
    if (GLOBALCONFIG.codeblock) initCodeBlock();
    initTags();
    initKeyboard();
    if (GLOBALCONFIG.onblur_title && GLOBALCONFIG.onblur_title != 'false') initPageFocus();
    if (GLOBALCONFIG.mouse_click) initMouse();
    if (GLOBALCONFIG.search.enable) initSearch();

    console.log("%c🐱 Them：Meow | Author：小橘猫chanwj | GitHub：https://github.com/chanwj/hexo-theme-meow", "color:#fff; background:#ffc76c; padding: 8px 15px; border-radius: 8px");
  }

  main();
};

const refreshFn = () => {
  const refresh = () => {
    initLazyLoad();
    if (GLOBALCONFIG.codeblock) initCodeBlock();
    initTags();
  };

  refresh();
};

document.addEventListener("DOMContentLoaded", initMain);

if (GLOBALCONFIG.encrypt) {
  window.addEventListener("hexo-blog-decrypt", refreshFn);
}

export default initMain;