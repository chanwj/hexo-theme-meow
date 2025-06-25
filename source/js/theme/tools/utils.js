/* 
 * hexo theme meow
 * utils scripts
 */

const meow = {
  debounce: (func, delay) => {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, arguments), delay);
    };
  },

  scrollFn: (position) => {
    window.scrollTo(0, position);
  },

  getActualTop: (element) => {
    let actualTop = element.offsetTop;
    let current = element.offsetParent;

    while (current !== null) {
      actualTop += current.offsetTop;
      current = current.offsetParent;
    }

    return actualTop;
  },

  shuffleArray: (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  },

  snackbarFn: (text) => {
    if (GLOBALCONFIG.notify.enable) {
      Snackbar.show({
        text: text,
        pos: 'bottom-left',
        duration: 3000
      });
    }
  },

  getPageTitle: () => {
    let page_title = document.title;
    let sitename = document.querySelector('meta[property="og:site_name"]').getAttribute('content');
    let site_fragment = ' | ' + sitename;
    let title = page_title.endsWith(site_fragment) ? page_title.replace(site_fragment, "") : page_title;
    return title;
  },

  lazyloadFn: (dom, callback) => {
    if ("IntersectionObserver" in window) {
      const observerItem = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) {
            callback();
            observerItem.disconnect();
          }
        },
        { threshold: [0] }
      );
      observerItem.observe(dom);
    } else {
      callback();
    }
  },
};