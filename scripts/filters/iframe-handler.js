/*
 * hexo theme meow
 * iframe handler filter
 */

"use strict";

hexo.extend.filter.register('after_post_render', function (data) {
  if (data.layout === 'post' || data.layout === 'page') {
    data.content = data.content.replace(/(<iframe[^>]*>.*?<\/iframe>)/g, `<div class="iframe-container">$1</div>`);
  }
  return data;
});