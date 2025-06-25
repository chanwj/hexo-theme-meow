/* 
 * hexo theme meow
 * tag plugins: fold
 */

'use strict'

const fold = (args, content) => {
  let foldTitle = args[0] ? args[0] : "Something was folded here...";
  let foldStyle = args.length > 1 ? args[1] : "light";
  let foldStatus = args.length > 2 ? args[2] : "";
  let foldContent = hexo.render.renderSync({ text: content, engine: 'markdown' }).trim();

  return `<details class="fold ${foldStyle}" ${foldStatus}><summary>${foldTitle}</summary><div class='fold-content'>${foldContent}</div></details>`;
};

hexo.extend.tag.register('fold', fold, { ends: true });