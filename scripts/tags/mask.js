/* 
 * hexo theme meow
 * tag plugins: mask text
 */

'use strict'

const maskText = (args, content) => {
  const type = args.length > 1 ? args[1] : '0';
  return `<span class="mask" type="${type}">${args[0]}</span>`;
};

hexo.extend.tag.register('mask', maskText);