/* 
 * hexo theme meow
 * image view scripts
 */

const initImageView = () => {
  document.querySelectorAll("details img[lazyload]").forEach((element) => {
    element.setAttribute("no-view", "");
  });

  window.ViewImage && ViewImage.init('.post img:not(.noview), .page-main img:not(.noview,.artitalk_avatar,.atemoji)');
};

export default initImageView;