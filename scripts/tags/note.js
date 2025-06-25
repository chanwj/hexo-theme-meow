/* 
 * hexo theme meow
 * tag plugins: note
 */

'use strict'

const note = (args, content) => {
  let noteType = "";
  noteType = args.length > 0 ? args[0] : "light";

  let noteContent = hexo.render.renderSync({ text: content, engine: 'markdown' }).trim();

  return `<div class="note ${noteType}">${noteContent}</div>`;
};

hexo.extend.tag.register('note', note, { ends: true });