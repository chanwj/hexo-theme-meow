/*
 * hexo theme meow
 * page data helper
 */

"use strict";

const { stripHTML, truncate } = require("hexo-util");

hexo.extend.helper.register('getPageDescription', function () {
  const { config, page } = this;
  let description = page.excerpt || page.content || config.description || "Hexo Theme MEOW";
  description = truncate(stripHTML(description), { length: 200 });
  return description;
})