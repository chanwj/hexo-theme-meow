/* 
 * hexo theme meow
 * tag plugins: button
 */

'use strict'

const url_for = hexo.extend.helper.get("url_for").bind(hexo);

const button = (args, content) => {
  const link_list = hexo.render.renderSync({ text: content, engine: 'yaml' });
  let result = '';

  link_list.forEach(item => {
    let icon = item.icon ? `<img class="posticon" alt="Link Icon" no-view src="${url_for(item.icon)}" />` : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 22v-2" /><path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" /><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" /><path d="M20 17h2" /><path d="M2 7h2" /><path d="M7 2v2" /></svg>';
    let desc = item.desc ? `<div class="button-item-desc">${item.desc}</div>` : "";
    result += `
          <div class="button-item">
            <a href="${url_for(item.url)}" class="normal" alt=${item.name} target="_blank">
              <div class="button-item-icon">${icon}</div>
              <div class="button-item-info">
                <div class="button-item-name">${item.name}</div>
                ${desc}
              </div>
            </a>
          </div>`;
  })
  return `<div class="button-list">${result}</div>`;
};

hexo.extend.tag.register('button', button, { ends: true });