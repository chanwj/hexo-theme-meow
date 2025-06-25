/*
 * hexo theme meow
 * codeblock handler filter
 */

"use strict";

/* 
 * modified by chanwj from hexo-theme-redefine
*/
hexo.extend.filter.register("after_post_render", function (data) {
  if (data._codehandle) return data;

  const { config: themeCfg } = this.theme;

  const pattern = /<figure class="highlight ([^"]+)">([\s\S]*?)<\/figure>/g;
  data.content = data.content.replace(pattern, function (match, lang) {
    let language = lang || "code";
    let codeblock = "";

    if (themeCfg.code.func) {
      codeblock = '<div class="code-container" code-lang="' +
        language.charAt(0).toUpperCase() +
        language.slice(1) +
        '">' +
        '<div class="codebox">' +
        match +
        '<div class="code-fold" title="Fold/Open"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg></div>' +
        '<div class="code-copy" title="Copy"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"  stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /></svg></div>' +
        '</div></div>';
    } else {
      codeblock = '<div class="code-container" code-lang="' +
        language.charAt(0).toUpperCase() +
        language.slice(1) +
        '">' +
        match +
        '</div>';
    }

    return codeblock;
  });

  data._codehandle = true;
  return data;
});