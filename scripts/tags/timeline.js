/* 
 * hexo theme meow
 * tag plugins: timeline
 * transplant from hexo-theme-butterfly
 * modified by chanwj
 */

'use strict'

const timeline = (args, content) => {
  const tlBlock = /<!--\s*timeline (.*?)\s*-->\n([\w\W\s\S]*?)<!--\s*endtimeline\s*-->/g

  let result = ''
  let style = ''
  if (args.length) {
    args = args.join(' ').split(',')
    style = args.length > 1 ? args[1] : ""
    const mdContent = hexo.render.renderSync({ text: args[0], engine: 'markdown' })
    result += `<div class='timeline-item timeline-head'><div class='timeline-item-title'><div class='timeline-icon'>${mdContent}</div></div></div>`
  }

  const matches = []
  let match

  while ((match = tlBlock.exec(content)) !== null) {
    matches.push(match[1])
    matches.push(match[2])
  }

  for (let i = 0; i < matches.length; i += 2) {
    const tlChildTitle = hexo.render.renderSync({ text: matches[i], engine: 'markdown' })
    const tlChildContent = hexo.render.renderSync({ text: matches[i + 1], engine: 'markdown' })

    const tlTitleHtml = `<div class='timeline-item-title'><div class='timeline-icon'>${tlChildTitle}</div></div>`
    const tlContentHtml = `<div class='timeline-item-content'>${tlChildContent}</div>`

    result += `<div class='timeline-item'>${tlTitleHtml + tlContentHtml}</div>`
  }

  return `<div class="timeline ${style}">${result}</div>`
};

hexo.extend.tag.register('timeline', timeline, { ends: true });