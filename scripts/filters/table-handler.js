/*
 * hexo theme meow
 * table handler filter
 */

"use strict";

hexo.extend.filter.register('after_post_render', function (data) {
  if (data.layout === 'post' || data.layout === 'page') {
    data.content = data.content.replace(/(?<!<figure[^>]*>|<\/figcaption>)(<table[^>]*>(?:[\s\S])*?<\/table>)/g, `<div class="table-container">$1</div>`);
  }
  return data;
});