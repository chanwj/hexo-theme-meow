/* 
 * hexo theme meow
 * tag plugins: title
 */

'use strict'

const titleFn = (args) => {
  let content = args[0];
  return `<div class="title-tag">${content}</div>`;
};

hexo.extend.tag.register('title', titleFn);