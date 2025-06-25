/* 
 * hexo theme meow
 * scroll scripts
 */

const initScroll = () => {
  const scrollHeader = () => {
    const updateHeaderStyle = () => {
      const scroll_y = window.scrollY || window.pageYOffset || document.body.scrollTop;
      const bg_color = document.body.getAttribute('data-mode') == 'light' ? 'rgba(255,255,255,0.8)' : 'rgba(45, 45, 45, 0.85)';
      const new_color = scroll_y >= (window.innerHeight * 0.6) ? bg_color : 'transparent';
      requestAnimationFrame(() => {
        document.querySelector('header').style.background = new_color;
      });
    };

    window.addEventListener('scroll', meow.debounce(() => updateHeaderStyle(), 200));
  };

  const scrollHomeBg = () => {
    const updateBgStyle = () => {
      if (document.body.getAttribute('bg-style') == 'fixed') {
        const scroll_y = window.scrollY || window.pageYOffset || document.body.scrollTop;
        if (scroll_y >= (window.innerHeight * 0.6)) {
          document.body.setAttribute('blur', '');
        } else {
          document.body.removeAttribute('blur');
        }
      }
    };
    window.addEventListener('scroll', meow.debounce(() => updateBgStyle(), 200));
  };

  const scrollToMain = () => {
    const scroll_down = document.getElementById('scroll-to-main');
    if (scroll_down) {
      scroll_down.addEventListener('click', function () { meow.scrollFn(document.getElementById('home-container').offsetTop - 59) });
    }
  };

  const scrollTOC = () => {
    const clickTOC = event => {
      const target = event.target.closest(".toc-list-link");
      if (!target) return;

      event.preventDefault();
      meow.debounce(meow.scrollFn(document.getElementById(decodeURI(target.getAttribute("href")).replace("#", "")).offsetTop - 76), 300);
    };

    const toc = document.getElementById('toc-container');
    if (toc) {
      toc.addEventListener('click', clickTOC);
    }
  };

  const scrollToTop = () => {
    const toolbar = document.getElementById('toolbar');
    if (toolbar) {
      document.getElementById('tool-gototop').addEventListener('click', function () { meow.scrollFn(0) });
    }
  };

  const scrollToolbar = () => {
    const changeToolbarStatus = () => {
      const scroll_y = window.scrollY || window.pageYOffset || document.body.scrollTop;
      if (scroll_y >= (window.innerHeight * 0.15) && scroll_y <= (document.documentElement.scrollHeight - window.innerHeight - 16)) {
        document.getElementById('toolbar').removeAttribute("hide");
      } else {
        document.getElementById('toolbar').setAttribute("hide", "");
      }
    };

    window.addEventListener('scroll', meow.debounce(() => changeToolbarStatus(), 150));
  };

  scrollHeader();
  scrollToMain();
  scrollHomeBg();
  scrollToolbar();
  scrollToTop();
  scrollTOC();
};

export default initScroll;