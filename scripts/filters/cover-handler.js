/*
 * hexo theme meow
 * posts cover handler filter
 */

"use strict";

const url_for = hexo.extend.helper.get("url_for").bind(hexo);

hexo.extend.filter.register('after_post_render', function (data) {
  if (data.layout === 'post') {
    if (this.theme.config.post.cover && data.cover) {
      data.content = `<img class="postcover" alt="Post Cover" src="${url_for(data.cover)}">` + data.content;
    }
  }
  return data;
}, 2);