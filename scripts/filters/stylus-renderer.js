/*
 * hexo theme meow
 * stylus renderer filter
 */

"use strict";

/* 
 * transplant from hexo-theme-redefine
*/
hexo.extend.filter.register('stylus:renderer', function (style) {
  style.define('url-for', function (data) {
    const urlRender = hexo.extend.helper.get('url_for').bind(hexo);
    const url = urlRender(data.val);
    return url;
  });
})