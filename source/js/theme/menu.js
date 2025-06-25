/* 
 * hexo theme meow
 * menu (header) scripts
 */

const initMenu = () => {
  const menuAside = document.getElementById('menu-aside');
  document.getElementById('menu-btn').addEventListener('click', function () {
      menuAside.setAttribute("open", "");
    });

  menuAside.addEventListener('click', event => {
    if (event.target === menuAside) {
      menuAside.removeAttribute('open');
    }
  });
};

export default initMenu;