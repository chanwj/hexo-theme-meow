/* 
 * [Tag] blockquote in different styles [标签]不同风格的引用块
 *
 * @Usage 用法
 * {% quote [style] %}
 * content
 * {% endquote %}
 * 
 * @Parameter 参数
 * style[Optional 可选项]: light | pink | red | blue | green
 */

'use strict'

const quote = (args, content) => {
  var className = args.length>0 ? (' class="' + args[0] + '"') : '';
  return '<blockquote' + className + '>' + content + '</blockquote>';
}

hexo.extend.tag.register('quote', quote, { ends: true });