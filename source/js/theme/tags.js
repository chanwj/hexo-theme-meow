/* 
 * hexo theme meow
 * tag plugins scripts
 */

const initTags = () => {
  /*
   * transplant from hexo-theme-butterfly
   */
  const tabsFn = () => {
    const navTabsElement = document.querySelectorAll(".tabs");
    if (!navTabsElement.length) return;

    const removeAndAddActiveClass = (elements, detect) => {
      Array.from(elements).forEach(element => {
        element.classList.remove("active");
        if (element === detect || element.id === detect) {
          element.classList.add("active");
        }
      });
    };

    const addTabNavEventListener = (item) => {
      const navClickHandler = function (e) {
        const target = e.target.closest("button");
        if (target.classList.contains("active")) return;
        removeAndAddActiveClass(this.children, target);
        this.classList.remove("no-default");
        const tabId = target.getAttribute("data-href");
        const tabContent = item.querySelector(".tabs-content");
        removeAndAddActiveClass(tabContent.children, tabId);
      };
      item.firstElementChild.addEventListener("click", navClickHandler);
    };

    const addTabToTopEventListener = item => {
      const btnClickHandler = e => {
        const target = e.target.closest("button");
        if (!target) return;
        meow.debounce(meow.scrollFn(meow.getActualTop(item) - 80), 300);
      };
      item.querySelector(".tabs-to-top").addEventListener("click", btnClickHandler);
    };

    navTabsElement.forEach(item => {
      addTabNavEventListener(item);
      addTabToTopEventListener(item);
    });
  };

  const chatboxFn = () => {
    const chatboxElement = document.querySelectorAll(".chatbox");
    if (!chatboxElement.length) return;

    const addToggleEventListener = (item) => {
      const toggleBox = item.querySelector(".chatbox-toggle");
      if (!toggleBox) return;

      if (item.offsetHeight < 720) {
        toggleBox.style.display = 'none';
        return;
      }

      const toggleHandler = event => {
        const toggleBox = event.target.closest(".chatbox-toggle");
        let toggleFlag = item.toggleAttribute("open");
        if (toggleFlag) {
          toggleBox.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 15l6 -6l6 6" /></svg>';
        } else {
          toggleBox.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>';
          meow.debounce(meow.scrollFn(meow.getActualTop(item) - 80), 300);
        }
      };
      toggleBox.addEventListener("click", toggleHandler);
    };

    chatboxElement.forEach(item => {
      addToggleEventListener(item);
    });
  };

  const maskFn = () => {
    const maskTextElement = document.querySelector("span.mask[type='1']");
    if (!maskTextElement) return;

    document.querySelector(".post").addEventListener("click", e => {
      if (e.target.tagName != "SPAN" || !e.target.classList.contains("mask") || e.target.getAttribute("type") == "0") {
        return;
      }
      e.target.classList.toggle("visited");
    });
  };

  tabsFn();
  chatboxFn();
  maskFn();
};

const initMusicPlayer = () => {
  const playerTags = document.querySelectorAll(".music-tag");
  if (!playerTags.length) return;

  const activePlayer = (item) => {
    const playerId = item.firstElementChild.id;
    const playerFnName = "apFn_" + playerId.replace('music-player-', '');
    for (let i = 0; i < window.apFnList.length; i++) {
      if (playerFnName == window.apFnList[i].name) {
        window.apFnList[i]();
        break;
      }
    }
  };

  playerTags.forEach(item => {
    activePlayer(item);
  });
};

export { initTags, initMusicPlayer };