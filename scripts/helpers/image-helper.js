/*
 * hexo theme meow
 * image helper (image plugin, svg handler)
 */

"use strict";

hexo.extend.helper.register('getSvg', function (svg_file, options = {}) {
  const { theme } = this;
  var path = "";
  var prefix = "";

  if (svg_file.includes('-')) {
    prefix = svg_file.split('-')[0]
    if (prefix == 'custom') {
      path = '/assets/images/svg/custom/' + svg_file.split('-')[1] + '.svg';
    } else {
      path = `/assets/images/svg/${prefix}/${svg_file}.svg`;
    }
  } else {
    prefix = theme.global.icon.type || "uc";
    path = `/assets/images/svg/${prefix}/${prefix}-${svg_file}.svg`;
  }

  return this.image_tag(path, Object.assign({ class: 'icon noview', alt: 'Icon' }, options));
})
