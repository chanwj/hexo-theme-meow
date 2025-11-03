/*
 * hexo theme meow
 * posts cover handler filter
 */

"use strict";

hexo.extend.filter.register('after_post_render', function (data) {
  if (data.layout === 'post') {
    if (this.theme.config.post.cover && data.cover) {
      data.content = `<img class="postcover" alt="Post Cover" src="${data.cover}">` + data.content;
    }
  }
  return data;
}, 2);