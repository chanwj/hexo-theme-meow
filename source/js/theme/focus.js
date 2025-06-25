/* 
 * hexo theme meow
 * page focus scripts
 */

const initPageFocus = () => {
  let origin_title = document.title;
  let timer;
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      document.title = GLOBALCONFIG.onblur_title;
      clearTimeout(timer);
      timer = setTimeout(() => {
        document.title = origin_title;
      }, 2000);
    } else {
      document.title = origin_title;
    }
  });
};

export default initPageFocus;