/* 
 * hexo theme meow
 * floating toolbar scripts
 */

const initToolbar = () => {
  const tool_setting = document.getElementById('tool-setting');
  if (tool_setting) {
    tool_setting.addEventListener('click', function () {
      const setting_container = document.getElementById('toolbar-setting-container')
      if (setting_container.hasAttribute("hide")) {
        setting_container.removeAttribute("hide");
      } else {
        setting_container.setAttribute("hide", "");
      }
    });
  }

  const toc = document.getElementById('toc-container');
  if (toc) {
    const toc_container = document.getElementById('post-sidebar')
    document.getElementById('tool-toc').addEventListener('click', function () {
      let toc_show = toc_container.getAttribute("status") == "show" ? "hide" : "show"
      toc_container.setAttribute("status", toc_show);
      if (toc_container.hasAttribute("active")) {
        toc_container.removeAttribute("active");
      } else {
        toc_container.setAttribute("active", "");
      }
    });

    toc_container.addEventListener('click', function () {
      toc_container.removeAttribute('active');
    });
  }

  const color_mode = document.getElementById('tool-color-mode');
  if (color_mode) {
    if (localStorage.getItem('color-mode') == 'light') {
      color_mode.innerHTML = '<img src="' + GLOBALCONFIG.root + 'assets/images/svg/ta/ta-moon.svg" class="icon noview" alt="Dark Mode">';
    } else {
      color_mode.innerHTML = '<img src="' + GLOBALCONFIG.root + 'assets/images/svg/ta/ta-sun.svg" class="icon noview" alt="Light Mode">';
    }

    color_mode.addEventListener('click', function () {
      let mode = localStorage.getItem('color-mode') == 'light' ? 'dark' : 'light';
      document.body.setAttribute('data-mode', mode);
      localStorage.setItem('color-mode', mode);
      if (mode == 'light') {
        color_mode.innerHTML = '<img src="' + GLOBALCONFIG.root + 'assets/images/svg/ta/ta-moon.svg" class="icon noview" alt="Dark Mode">';
      } else {
        color_mode.innerHTML = '<img src="' + GLOBALCONFIG.root + 'assets/images/svg/ta/ta-sun.svg" class="icon noview" alt="Light Mode">';
      }
    })
  }

  const font_size_plus = document.getElementById('tool-font-size-plus');
  if (font_size_plus) {
    font_size_plus.addEventListener('click', function () {
      const post_content = document.querySelector('.post');
      let font_size = 16;
      if (localStorage.getItem('font-size')) {
        font_size = parseInt(localStorage.getItem('font-size')) + 2;
      } else {
        let currentSize = window.getComputedStyle(post_content).getPropertyValue('font-size');
        font_size = parseInt(currentSize) + 2;
      }
      post_content.style.fontSize = font_size + 'px';
      localStorage.setItem('font-size', font_size);
    });
  }

  const font_size_minus = document.getElementById('tool-font-size-minus');
  if (font_size_minus) {
    font_size_minus.addEventListener('click', function () {
      const post_content = document.querySelector('.post');
      let font_size = 16;
      if (localStorage.getItem('font-size')) {
        font_size = parseInt(localStorage.getItem('font-size')) - 2;
      } else {
        let currentSize = window.getComputedStyle(post_content).getPropertyValue('font-size');
        font_size = parseInt(currentSize) - 2;
      }
      post_content.style.fontSize = font_size + 'px';
      localStorage.setItem('font-size', font_size);
    });
  }
};

export default initToolbar;