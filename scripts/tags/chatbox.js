/* 
 * hexo theme meow
 * tag plugins: chat box
 */

'use strict'

const url_for = hexo.extend.helper.get("url_for").bind(hexo);

const chat = (args, content) => {
  let title = args[0] ? args[0] : "";
  let status = args.length > 1 ? args[1] : "";
  let chatInfo = hexo.render.renderSync({ text: content, engine: 'yaml' });
  let authorInfo = chatInfo.author ? chatInfo.author : {};
  let result = "";

  !chatInfo.chat && (chatInfo.chat = []);

  for (const key in chatInfo.chat) {
    let item = chatInfo.chat[key];
    if (item.time) {
      result += `<div class="chatbox-time">- ${item.time} -</div>`;
      continue;
    }

    let avatar;
    if (item.from && authorInfo[item.from]) {
      avatar = `<img class="posticon" alt="Avatar" no-view src="${url_for(authorInfo[item.from])}" />`;
    } else {
      avatar = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" /><path d="M12 19l0 .01" /></svg>';
    }

    let images = "";
    if (item.image && item.image.length > 0) {
      images += "<div class='chatbox-img'>";
      item.image.forEach(img => {
        images += `<img class="posticon"  alt="Chat Image" src="${img}" />`;
      });
      images += "</div>";
    }

    let chatContent = "";
    if (item.content) {
      chatContent = hexo.render.renderSync({ text: item.content, engine: 'markdown' }).trim();
    }

    result += `<div class="chatbox-item" ${(item.right && item.right == "Y") ? "right" : ""}><div class="chatbox-avatar">${avatar}</div><div>${item.from ? '<div class="chatbox-name">' + item.from + '</div>' : ''}<div class="chatbox-content">${chatContent}${images ? images : ''}</div></div></div>`;
  }

  let toggleBox = "";
  if (!status) {
    toggleBox = `<div class="chatbox-toggle" title="Open/Fold"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg></div>`;
  }

  return `<div class="chatbox" ${status}><div class="chatbox-title">${title}</div><div class="chatbox-main">${result}</div>${toggleBox}</div>`;
};

hexo.extend.tag.register('chat', chat, { ends: true });