/* 
 * hexo theme meow
 * tag plugins: inline text with style
 */

'use strict'

const text = (args) => {
  let color = args.length > 1 ? args[1] : "theme";
  let type = args.length > 2 ? args[2] : false;
  return `<span class="text-tag ${color}" ${type ? "type=" + type : ""}>${args[0]}</span>`;
};

hexo.extend.tag.register('text', text);