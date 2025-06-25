/* 
 * hexo theme meow
 * keyboard events scripts
 */

const initKeyboard = () => {
  window.onkeydown = function (e) {
    if (123 === e.keyCode || 'F12' === e.key) {
      meow.snackbarFn(GLOBALCONFIG.notify.f12_info);
    }
  };
};

export default initKeyboard;