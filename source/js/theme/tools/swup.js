/* 
 * hexo theme meow
 * swup scripts
 */

const initSwup = () => {
  const swup = new Swup({
    animationSelector: '[class*="meow-animation"]',
    containers: ['.page-container', '.post-container', 'header>navbar'],
    cache: true
  });
};

export default initSwup;