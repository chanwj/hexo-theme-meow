/* 
 * hexo theme meow
 * tag plugins: mask text
 */

'use strict'

const maskText = (args, content) => {
  const type = args.length > 1 ? args[1] : '0';
  const style = args.length > 2 ? args[2] : '';
  if (style == 'default') {
    style == '';
  }

  return `<span class="mask ${style}" type="${type}">${args[0]}</span>`;
};

hexo.extend.tag.register('mask', maskText);