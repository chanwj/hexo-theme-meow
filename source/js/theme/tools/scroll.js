const initScroll = () => {
  const debounce = (func, delay) => {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, arguments), delay);
    };
  };

  const scrollHeader = () => {
    const updateHeaderStyle = () => {
      const scroll_y = window.scrollY || window.pageYOffset || document.body.scrollTop;
      const bg_color = scroll_y >= (window.innerHeight * 0.6) ? 'rgba(255,255,255,0.8)' : 'transparent';
      requestAnimationFrame(() => {
        document.querySelector('header').style.background = bg_color;
      });
    };

    window.addEventListener('scroll', debounce(() => updateHeaderStyle(), 200));
  };

  const scrollToMain = () => {
    const scrollFn = () => {
      window.scrollTo(0, document.getElementById('home-container').offsetTop - 60);
    }

    const scroll_down = document.getElementById('scroll-to-main');
    if (scroll_down) {
      scroll_down.addEventListener('click', scrollFn);
    }
  };

  scrollHeader();
  scrollToMain();
};

export default initScroll;