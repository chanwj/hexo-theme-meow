/* 
 * hexo theme meow
 * lazyload (image) scripts
 */

let lazyload_instance = null;

const initLazyLoad = () => {
  document.querySelectorAll(".home-article-cover img, .archive-post-cover img, .essay-content img").forEach((element) => {
    if (!element.hasAttribute("lazyload")) {
      element.setAttribute("data-lazy-src", element.getAttribute("src"));
      element.setAttribute("src", GLOBALCONFIG.lazyload_src);
      element.setAttribute("lazyload", "");
    }
  });
  if (lazyload_instance) return lazyload_instance.update();
  lazyload_instance = new LazyLoad({
    elements_selector: "img[lazyload]",
    threshold: 0,
    data_src: "lazy-src"
  });
};

export default initLazyLoad;