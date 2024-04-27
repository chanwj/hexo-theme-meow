# Hexo Theme Meow

Language: 简体中文 | [English](README-EN.md)

**Meow**是一款可爱明亮的Hexo主题，除了支持教程分享、日常记录等基础博客用途外，还尤其适用于发表文学作品，比如长篇小说、同人创作等等。

![Meow](https://chanwj.github.io/images/theme-preview.jpg)

## 😺 主题展示

- **[Meow展示站](https://chanwj.github.io/)**

## 💻️ 安装指南

在博客根目录下执行以下指令，获取最新版主题。

``` bash
git clone -b master https://github.com/chanwj/hexo-theme-meow.git themes/meow
```

修改博客根目录下的`_config.yml`配置文件，将主题更换为`meow`。

``` yml
theme: meow
```

本主题使用pug进行渲染，请提前安装pug渲染器。

``` bash
npm install hexo-renderer-pug --save
```

## 📚️ 配置文档

- **[Meow配置指南](https://chanwj.github.io/Meow-主题指南/#主题配置指南)**

## ⭐️ 特色功能

- 小说模板 ( **[Meow小说模板介绍](https://chanwj.github.io/Meow-主题指南/#小说模板)** )
- 响应式设计，优化小屏设备显示效果
- 支持i18n的“关于”页模板
- 按年份与月份归类的卡片式归档页面
- 可显示层级的分类目录页面
- 自动生成文章摘要
- 可自定义是否生成文章TOC目录
- 装配悬浮工具栏
- 可配置的赞赏栏目
- 集成多项功能开关，随心自定义配置
