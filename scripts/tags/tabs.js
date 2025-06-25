/* 
 * hexo theme meow
 * tag plugins: tabs
 * transplant from hexo-theme-butterfly
 * modified by chanwj
 */

'use strict'

const tabs = (args, content) => {
  const tabBlock = /<!--\s*tab (.*?)\s*-->\n([\w\W\s\S]*?)<!--\s*endtab\s*-->/g
  args = args.join(' ').split(',')
  const tabName = args[0]
  const tabActive = Number(args[1]) || 0
  const matches = []
  let match
  let tabId = 0
  let tabNav = ''
  let tabContent = ''
  let noDefault = true

  !tabName && hexo.log.warn('Tabs block must have unique name!')

  while ((match = tabBlock.exec(content)) !== null) {
    matches.push(match[1], match[2])
  }

  for (let i = 0; i < matches.length; i += 2) {
    let postContent = matches[i + 1]
    let tabCaption = matches[i] || ''
    let tabHref = ''

    postContent = hexo.render.renderSync({ text: postContent, engine: 'markdown' }).trim()

    tabId += 1
    tabHref = (tabName + ' ' + tabId).toLowerCase().split(' ').join('-');

    (tabCaption.length === 0) && (tabCaption = tabName + ' ' + tabId)

    let isActive = ''
    if ((tabActive > 0 && tabActive === tabId) || (tabActive === 0 && tabId === 1)) {
      isActive = ' active'
      noDefault = false
    }
    tabNav += `<button type="button" class="tab ${isActive}" data-href="${tabHref}">${tabCaption.trim()}</button>`
    tabContent += `<div class="tabs-item-content${isActive}" id="${tabHref}">${postContent}</div>`
  }

  const toTop = '<div class="tabs-to-top"><button type="button" aria-label="scroll to top"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 15l6 -6l6 6" /></svg></button></div>'

  tabNav = `<ul class="tabs-nav${noDefault ? ' no-default' : ''}">${tabNav}</ul>`
  tabContent = `<div class="tabs-content">${tabContent + toTop}</div>`

  return `<div class="tabs" id="${tabName.toLowerCase().split(' ').join('-')}">${tabNav + tabContent}</div>`
};

hexo.extend.tag.register('tabs', tabs, { ends: true });