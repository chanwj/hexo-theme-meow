function openTopMenu() {
  'use strict';
  var hiddenMenu = document.getElementById('top-menu-hidden');
  if (hiddenMenu.getAttribute('menu-show')) {
    hiddenMenu.removeAttribute('menu-show')
    hiddenMenu.style.display = 'none';
  } else {
    hiddenMenu.setAttribute('menu-show', true);
    hiddenMenu.style.display = 'flex';
  }
}

function closeTopMenu() {
  'use strict';
  var hiddenMenu = document.getElementById('top-menu-hidden');
  if (hiddenMenu.getAttribute('menu-show')) {
    hiddenMenu.removeAttribute('menu-show')
    hiddenMenu.style.display = 'none';
  } else {
    hiddenMenu.setAttribute('menu-show', true);
    hiddenMenu.style.display = 'flex';
  }
}