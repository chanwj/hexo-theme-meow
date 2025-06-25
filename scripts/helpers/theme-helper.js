/*
 * hexo theme meow
 * theme helper (js/css handler)
 */

"use strict";

hexo.extend.helper.register("getCDNPath", function (name, version, path) {
  const { theme } = this;

  if (!theme.cdn.enable) return path;

  // const path_cdnjs = path.replace(/^[lib|dist]*\/|browser\//g, "");
  const cdn_list = {
    npmmirror: `https://registry.npmmirror.com/${name}/${version}/files/${path}`,
    jsdelivr: `https://cdn.jsdelivr.net/npm/${name}@${version}/${path}`,
    // cdnjs: `https://cdnjs.cloudflare.com/ajax/libs/${name}/${version}/${path_cdnjs}`,
    unpkg: `https://unpkg.com/${name}@${version}/${path}`,
    custom: theme.cdn.custom
  };
  const cdn_path = cdn_list[theme.cdn.provider] || cdn_list.jsdelivr;

  if (theme.cdn.provider == "custom") {
    cdn_path = cdn_path.replace("${name}", name).replace("${version}", version).replace("${path}", path);
  }

  return cdn_path;
});

hexo.extend.helper.register("importJS", function (jsname, version, path, options = {}) {
  const { theme } = this;
  const { module = false, async = false } = options;

  let scriptContent = "";
  if (theme.cdn.enable) {
    const cdn_path = this.getCDNPath(jsname, version, path);
    scriptContent = this.js({ src: cdn_path, type: module ? "module" : undefined, async: async ? true : undefined });
  } else {
    scriptContent = this.js({ src: "js/plugins/" + path, type: module ? "module" : undefined, async: async ? true : undefined });
  }

  return scriptContent;
});

hexo.extend.helper.register("importCSS", function (cssname, version, path) {
  const { theme } = this;
  let cssContent = "";
  if (theme.cdn.enable) {
    const cdn_path = this.getCDNPath(cssname, version, path);
    cssContent = this.css(cdn_path);
  } else {
    cssContent = this.css("css/third-party/" + path);
  }

  return cssContent;
});