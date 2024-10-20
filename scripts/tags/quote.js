/* 
 * Tag for blockquote in different styles 不同风格的引用块标签
 *
 * Usage用法:
 * {% quote [style] %}
 * content
 * {% endquote %}
 * 
 * [style]: light | pink | red | blue | green
 * Optional 可选项
 */

'use strict'

const quote = (args, content) => {
  var className = args.length>0 ? (' class="' + args[0] + '"') : '';
  return '<blockquote' + className + '>' + content + '</blockquote>';
}

hexo.extend.tag.register('quote', quote, { ends: true })