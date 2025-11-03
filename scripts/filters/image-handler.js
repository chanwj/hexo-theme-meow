/*
 * hexo theme meow
 * image handler (caption, lazyload) filter
 */

"use strict";

hexo.extend.filter.register('after_post_render', function (data) {
  if (data.layout === 'post' || data.layout === 'page') {
    if (this.theme.config.image.image_caption) {
      const caption_class = 'img-caption';
      data.content = data.content.replace(/(<img(?=[^>]*alt="([^"]+)")(?![^>]*class="[^"]*\b(?:posticon|postcover)\b[^"]*")[^>]*>)/g, `<figure class="${caption_class}">$1<figcaption>$2</figcaption></figure>`);
    }
  }
  return data;
}, 10);

const url_for = hexo.extend.helper.get("url_for").bind(hexo);

hexo.extend.filter.register('after_post_render', function (data) {
  if (data.layout === 'post' || data.layout === 'page') {
    const loading_image = url_for(this.theme.config.image.loding_image);
    data.content = data.content.replace(/<img([^>]*)src="([^"]*)"([^>\/]*)\/?\s*>/gim,
      function (match, attr_before, src, attr_after) {
        if (!src) return match;
        return `<img ${attr_before} lazyload src="${loading_image}" data-lazy-src="${src}" ${attr_after}>`
      });
  }
  return data;
}, 3);