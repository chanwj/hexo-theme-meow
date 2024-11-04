/* 
 * [Tag] link card [标签]链接卡片
 *
 * @Usage 用法
 * {% linkcard %}
   - type:
     title:
     url:
     icon:
     desc:
   {% endlinkcard %}
 *
 * @Parameter 参数
 * type: page | post | file
 * icon: favicon's path, display paw by default. 网站图标路径，默认展示猫爪图案
 */

'use strict'

const url_for = hexo.extend.helper.get("url_for").bind(hexo);

const link_card = (args, content) => {
  const link_list = hexo.render.renderSync({ text: content, engine: 'yaml' });
  let result = '';

  link_list.forEach(item => {
    let icon_result = `<i class="fa-solid fa-paw"></i>`;
    switch (item.type) {
      case 'page':
        if (item.icon) {
          icon_result = `<img src="${item.icon}" />`;
        }
        result += `
          <div class="linkcard-item">
            <a href="${item.url}" target="_blank">
              <div class="linkcard-item-icon">${icon_result}</div>
              <div class="linkcard-item-title">${item.title}</div>
              <div class="linkcard-item-desc"><span>${item.desc}</span></div>
            </a>
          </div>`;
        break;
      case 'post':
        result += `
          <div class="linkcard-item">
            <a href="${url_for(item.url)}" target="_blank">
              <div class="linkcard-item-icon">${icon_result}</div>
              <div class="linkcard-item-title">${item.title}</div>
              <div class="linkcard-item-desc"><span>${item.desc}</span></div>
            </a>
          </div>`;
        break;
      case 'file':
        icon_result = `<i class="fa-solid fa-download"></i>`;
        result += `
          <div class="linkcard-item">
            <a href="${url_for(item.url)}" target="_blank">
              <div class="linkcard-item-icon">${icon_result}</div>
              <div class="linkcard-item-title">${item.title}</div>
              <div class="linkcard-item-desc"><span>${item.desc}</span></div>
            </a>
          </div>`;
        break;
      default:
        result += `
          <div class="linkcard-item">
            <a href="${item.url}" target="_blank">
              <div class="linkcard-item-icon">${icon_result}</div>
              <div class="linkcard-item-title">${item.title}</div>
              <div class="linkcard-item-desc"><span>${item.desc}</span></div>
            </a>
          </div>`;
    }
  })
  return `<div class="linkcard">${result}</div>`;
}

hexo.extend.tag.register('linkcard', link_card, { ends: true });