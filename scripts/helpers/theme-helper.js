/*
* hexo theme meow
* theme helper (js/css handler)
*/

"use strict";

hexo.extend.helper.register("importJS", function (jsname, version, path, options = {}) {
  const { module = false } = options;
  const { theme } = this;

  let scriptContent = "";
  if (theme.cdn.enable) {
    const path_cdnjs = path.replace(/^[lib|dist]*\/|browser\//g, "");
    const cdn_list = {
      npmmirror: `https://registry.npmmirror.com/${jsname}/${version}/files/${path}`,
      jsdelivr: `https://cdn.jsdelivr.net/npm/${jsname}@${version}/${path}`,
      cdnjs: `https://cdnjs.cloudflare.com/ajax/libs/${jsname}/${version}/${path_cdnjs}`,
      unpkg: `https://unpkg.com/${jsname}@${version}/${path}`,
      custom: theme.cdn.custom
    };
    const cdn_path = cdn_list[theme.cdn.provider] || cdn_list.npmmirror;

    if (theme.cdn.provider == "custom") {
      const custom_path = cdn_path.replace("${jsname}", jsname).replace("${version}", version).replace("${path}", path);
      scriptContent = this.js({ src: custom_path, type: module ? "module" : undefined });
    } else {
      scriptContent = this.js({ src: cdn_path, type: module ? "module" : undefined });
    }
  } else {
    scriptContent = this.js({ src: path, type: module ? "module" : undefined });
  }

  return scriptContent;
})