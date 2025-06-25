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

  tabsFn();
};

export default initTags;