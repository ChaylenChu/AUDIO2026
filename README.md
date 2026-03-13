# 作曲个人作品集

极简艺术风格的作曲/声音艺术个人作品集网站，黑白灰、留白、非衬线字体，高端设计杂志感。

## 技术栈

- **React 18** + **Vite 5**
- **Tailwind CSS 4**
- **Lucide React** 图标
- **React Router** 路由

## 页面结构

- **首页**：大标题 Slogan、极简背景、呼吸感排版
- **作品 (Works)**：Bento 非对称网格，点击封面可打开音/视频预览弹窗
- **关于 & 联系 (About & Contact)**：简介、邮箱、社交媒体链接

## 本地运行

```bash
npm install
npm run dev
```

浏览器打开 `http://localhost:5173`。

## 构建

```bash
npm run build
npm run preview   # 预览构建结果
```

## 自定义内容

- **首页文案**：编辑 `src/pages/Home.jsx` 中的标题与副标题。
- **作品列表**：在 `src/pages/Works.jsx` 的 `works` 数组中修改或新增项，可为每项设置 `mediaUrl`（音/视频链接）以在弹窗中播放。
- **关于与联系**：在 `src/pages/About.jsx` 中修改简介、邮箱和 `socials` 链接。

## 响应式

布局已针对手机、平板和桌面做了断点适配，导航在移动端为折叠菜单。
