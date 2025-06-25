/*
 * hexo theme meow
 * 404 page
 */

"use strict";

hexo.extend.generator.register('404', function (locals) {
  if (!hexo.theme.config.error_page) return
  return {
    path: '404.html',
    layout: 'page',
    data: {
      title: '404 Error',
      type: '404'
    }
  }
})