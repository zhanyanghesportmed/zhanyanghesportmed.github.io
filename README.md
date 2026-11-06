# Zhanyang He — Research website

Personal academic website: https://zhanyanghesportmed.github.io/

中英双语个人研究介绍网站，使用原生 HTML、CSS、JavaScript，可直接在 GitHub Pages 托管。无构建依赖、无第三方统计脚本、无登录功能。

## 更新内容

- `index.html`：简介、研究方向、精选论文、学术平台链接。`data-en` / `data-zh` 分别存放英文和中文文本；修改时请同时维护初始显示文字与对应属性。
- `styles.css`：配色、排版、响应式布局。照片通过 CSS 展示裁切，原图没有修改。
- `script.js`：中英文切换、主题筛选。语言选择保存在访客自己的浏览器中。
- `assets/zhanyang-he.jpg`：用户提供的个人照片。
- `publications.bib`：7 篇精选论文的 BibTeX；新增论文时同步更新。
- `research-sources.json`：论文元数据、核对来源和核对日期，仅用于维护。

内容依据作者提供的 ResearchGate、Google Scholar 链接及期刊 / PubMed 记录。Google Scholar 自动读取不可用，因此仅提供主页入口，未复制引用次数等动态指标。身份与研究兴趣依据 ResearchGate 自述。2026 年 IMU 论文采用在线发表年份，已标注 Online；列表不是完整成果目录。

## 本地预览

在本目录运行 `python -m http.server 4173 --bind 127.0.0.1`，访问 http://127.0.0.1:4173 。也可直接打开 `index.html`。

## GitHub Pages

仓库名：`zhanyanghesportmed.github.io`。在 Settings → Pages 中，选择 Deploy from a branch，分支 `main`，目录 `/ (root)`，保存。根目录的 `.nojekyll` 保证静态文件直接发布。后续提交到 `main` 会自动更新网站。

## 使用权

个人照片与简介由网站所有者提供，未授予第三方照片转载许可。论文权利归各自作者及出版社所有，网站仅提供书目信息和原文入口。
