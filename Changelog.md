# Changelog 更新日志

*Chinese Version & English Version*

## 🐱v2.1.0
Released at `2024-11-04`.

### 🆕新增功能
- 新增链接卡片标签，可用于链接外部页面、站内文章或文件下载，详见[链接卡片](https://chanwj.github.io/Meow-Theme-Guide/#链接卡片)介绍
- 新增悬浮工具栏功能：可以放大/缩小文章正文字体
- 新增功能：一键复制代码（使用clipboard.js）

### ✅️问题修复
- 修复切换深色模式时背景图片/渐变色不变的问题
- 修复切回浅色模式时背景颜色会变成默认黄色的问题

### ♾️优化项目
- 优化分类页面显示效果，可以更清晰地看到分类的层级结构，并且可以配置是否显示文章数量、显示几层分类
- 优化对APlayer的使用：改为在需要使用APlayer的页面Front-matter中配置开关，现在可以在“关于页”内引入音乐播放器了
- 置顶的文章会在首页显示相应的置顶标签，可在语言文件中配置标签显示值
- 优化资源引入，提升页面加载速度
- 优化了一些代码结构与页面展示效果，增加了一些动态特效

### 🆕New Features
- Added tag for link card, support to link external page, site post or file to be downloaded. Read more in [Link Card](https://chanwj.github.io/en/Meow-Theme-Guide/#Link-Card).
- Added function to toolbar: increase/decrease font size of post.
- Added function: copy codes with one click (with clipboard.js).

### ✅️Fixes
- Fixed the issue of background image/gradient color remaining unchanged when switching to darkmode.
- Fixed the issue of background color changing to yellow by default when switching back to lightmode.

### ♾️Improvements
- Improved the display effect of categories page, the hierarchies are more clear now. Configurable: show posts count, depth of categories to display.
- Improved the usage of APlayer: change to configuring switches in Front-matter of each page. You can also import music player in 'About' page now.
- Top posts will show top-tag on the homepage, the display value of top-tag can be configured in language files.
- Optimized the introductions of resources and improve page loading speed.
- Optimized some code structures and page display styles, added some dynamic effects.

<br/>

---

<br/>

## 🐱v2.0.0
Released at `2024-10-20`.

### ⭐提示
- 适配`Hexo v7.3.0`，建议同步更新Hexo
- 本次更新内容较多，建议提前对已自定义修改过的主题配置文件`_config.yml`进行备份。

### 🆕新增功能
- 新增评论功能（使用giscus），在文章和关于页加入评论区模块，可配置，详情可见[评论功能](https://chanwj.github.io/Meow-Theme-Guide/#评论功能)说明
- 新增加密功能（使用hexo-blog-encrypt），详情可见[加密功能](https://chanwj.github.io/Meow-Theme-Guide/#加密功能)说明
- 新增深色模式，可配置，详情可见[深色模式](https://chanwj.github.io/Meow-Theme-Guide/#深色模式)介绍。
- 新增引用块标签，支持使用多种颜色风格的引用块，详情可见[引用块](https://chanwj.github.io/Meow-Theme-Guide/#引用块)介绍
- 新增悬浮工具栏功能：
  - 当前页面为文章或关于页时可跳转至页尾评论区
  - 深色模式开关
- 在关于页新增致谢栏目，可配置开关、致谢词、致谢名单
- 新增配置：可自定义字体，详情可见[网站字体](https://chanwj.github.io/Meow-Theme-Guide/#网站字体)说明
- 新增配置：文章段落首行缩进两字符，可为每篇文章单独开关，详情可见[段首缩进](https://chanwj.github.io/Meow-Theme-Guide/#段首缩进)介绍
- 新增配置：可自定义网站背景，支持三种背景类型，详情可见[网站背景](https://chanwj.github.io/Meow-Theme-Guide/#网站背景)说明
- 新增对`APlayer`音乐播放器的支持，详情可见[音乐播放器](https://chanwj.github.io/Meow-Theme-Guide/#音乐播放器)介绍
- 新增TOC配置项`max_items`(`Hexo v7.3.0`更新内容)

### ♾️优化项目
- 在`<head>`中新增Open Graph信息以优化SEO，并且优化meta description的内容：文章页面为文章简介/摘要，其它页面为网站简介
- 简化小说模板中的完结状态配置项为Y/N：Y=完结，N=连载中，置空=不显示完结状态
  - 兼容v1.0.0中的完结状态选项，因此以前发布的文章无须进行修改
  - 建议将新版`fiction.md`复制到网站根目录下的scaffolds文件夹并覆盖旧版文件
- 优化404页面的显示效果，在主题指南中增加[404页面](https://chanwj.github.io/Meow-Theme-Guide/#404页面)说明
- 优化`<details>`折叠块显示效果，详情可见[折叠块](https://chanwj.github.io/Post-Style-Display/#折叠块)介绍
- 优化归档页面的文章预览内容，优先级：文章摘要>小说模板的简介>自动截取文章开头部分
- 优化滚动条显示效果
- 优化代码块标题显示效果
- 优化文章字数统计的显示，增加千和万的单位（保留一位小数），仅对中文文章生效。
- 优化表格在内容溢出时的显示效果，具体用法可见[表格](https://chanwj.github.io/Post-Style-Display/#表格)
- 使用小屏设备时字体减小，优化显示效果
- 去除主体背景纹理的灰点，使背景看起来更干净
- 执行Hexo指令后在控制台打印主题Meow的相关信息
- 增加更新日志

### ⭐Tips
- Compatible with `Hexo v7.3.0`, it is recommended to update Hexo in synchrony.
- Since there are many new updates in this version, it is recommended to backup the theme configuration file `_config.yml` (which has been modified) in advance.

### 🆕New Features
- Add comment function (using giscus), add comment module for posts and 'About' page, configurable. Read more in [Comment](https://chanwj.github.io/en/Meow-Theme-Guide/#Comment).
- Add encryption function (using hexo-blog-encrypt), read more in [Encryption](https://chanwj.github.io/en/Meow-Theme-Guide/#Encryption).
- Add darkmode, configurable, read more in [Darkmode](https://chanwj.github.io/en/Meow-Theme-Guide/#Darkmode).
- Add quote tag, support to use blockquote in various style, read more in [Quote](https://chanwj.github.io/en/Meow-Theme-Guide/#Quote).
- Add more functions to toolbar:
  - Go to comment module if it is post or 'About' page.
  - Switch to darkmode.
- Add credits module at 'About' page, configurable: switch, acknowledgements words, credits list.
- Add configuration: fonts customizable. Read more in [Fonts](https://chanwj.github.io/en/Meow-Theme-Guide/#Fonts).
- Add configuration: indent the first line of paragraph in post by 2em. You can also enable/disable it for specific posts. Read more in [Text Indent](https://chanwj.github.io/en/Meow-Theme-Guide/#Text-Indent).
- Add configuration: site background customizable, support 3 kinds of background. Read more in [Background](https://chanwj.github.io/en/Meow-Theme-Guide/#Background).
- Add support for `APlayer`, read more in [Music Player](https://chanwj.github.io/en/Meow-Theme-Guide/#Music-Player).
- Add TOC configuration: `max_items` (updated by `Hexo v7.3.0`).

### ♾️Improvements
- Add Open Graph message in `<head>` to improve SEO. Improve meta description: summary/excerpt(posts), site description(other pages).
- Simplify the configuration of status in fiction scaffold to Y/N: Y=complete, N=incomplete, stay blank=hide status.
  - Compatible with status options of v1.0.0. Therefore, those articles published previously do not need to be modified.
  - It is recommended to copy the new `fiction.md` to the scaffolds folder under the root directory and overwrite the old one.
- Improve the display style of 404 page, add configuration guide in [404 Page](https://chanwj.github.io/en/Meow-Theme-Guide/#404-Page).
- Improve the display style of `<details>`, read more in [Details](https://chanwj.github.io/Post-Style-Display/#折叠块).
- Improve preview content of post in archives page, priority: post's excerpt > summary of fiction scaffold > truncate the start of post automatically.
- Improve scrollbar style.
- Improve the style of code block title.
- Improve the display of post word count, add thousand/ten thousand unit (rounded to one decimal place), only work for languages: zh-XX.
- Improve the style of table when the content of table overflows. Read more in [Table](https://chanwj.github.io/Post-Style-Display/#表格).
- Decrease font size and optimize display effect when using small screen devices.
- Remove the gray dots from the background texture of the main container to make the background look cleaner.
- Print Theme Meow information on console after executing Hexo commands.
- Add change log.

<br/>

---

<br/>

## 🐱v1.0.0
Released at `2024-04-28`.

主题「Meow」正式发布。
「Meow」was released officially.