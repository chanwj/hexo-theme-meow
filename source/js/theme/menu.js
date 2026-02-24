/* 
 * hexo theme meow
 * menu (header) scripts
 */

const initMenu = () => {
  const headerElement = document.querySelector('header');
  const scroll_y = window.scrollY || window.pageYOffset || document.body.scrollTop;
  const bg_color = document.body.getAttribute('data-mode') == 'light' ? 'rgba(255,255,255,0.8)' : 'rgba(45, 45, 45, 0.85)';
  let new_color = 'transparent';
  if (scroll_y < (window.innerHeight * 0.6)) {
    headerElement.setAttribute('custom', '');
  } else {
    headerElement.removeAttribute('custom');
    new_color = bg_color;
  }
  requestAnimationFrame(() => {
    headerElement.style.background = new_color;
  });

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