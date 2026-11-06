# Zhanyang He — Research & Publications

Personal academic website: https://zhanyanghesportmed.github.io/

中英双语个人研究主页，使用原生 HTML、CSS 和 JavaScript，部署于 GitHub Pages，无构建依赖。

## 内容与样式

- 参考 Stanford Profiles 的红白配色、个人资料侧栏和学术档案布局；网站属于 Zhanyang He，实际单位为北京体育大学。
- 收录作者在 2026 年 11 月 7 日提供的 Google Scholar 导出中的全部 25 项成果：22 篇期刊论文、2 项会议摘要、1 篇预印本，覆盖 2023–2026 年。
- 按年份倒序排列，支持标题 / 作者 / 期刊搜索、年份筛选、BibTeX 下载与中英文切换。
- 全部成果直接写入 HTML；JavaScript 不可用时仍可阅读完整目录。语言偏好仅存于访客浏览器。

## 文件与维护

- `index.html`：简介、研究方向、完整成果目录、联系入口；双语文字存于 `data-en` / `data-zh`。
- `styles.css`：响应式布局和打印样式。照片通过 CSS 展示裁切，原图未修改。
- `script.js`：语言切换和成果筛选。
- `assets/zhanyang-he.jpg`：作者提供的个人照片。
- `google-scholar-export.bib`：作者提供的原始书目字段，保留导出时的重复引用键等信息。
- `publications.bib`：规范化后的全部 25 条引用，引用键唯一，包含核对后的原文链接。
- `publications.json`：完整书目元数据。
- `research-sources.json`：出处、核对链接、规范化记录和设计参考。

新增成果时同步维护 HTML、BibTeX 和 JSON，并更新年份计数及总数。原导出的 `he2025effects` 重复键已区分为颈椎研究和疲劳研究；2023 年三级跳远论文重复的缩写作者按出版社记录修正。会议摘要与预印本保留并明确标注，在线发表论文保留导出的 2026 年。动态引用次数未收录。目录完整性以作者本次提供的导出为准。

## 预览与发布

在本目录运行 `python -m http.server 4174 --bind 127.0.0.1`，然后访问 http://127.0.0.1:4174 。

GitHub Pages 使用仓库 `zhanyanghesportmed.github.io` 的 `main` 分支根目录发布。`.nojekyll` 保证静态文件直接发布，提交后自动部署。

## 使用权

个人照片由网站所有者提供，未授予第三方照片转载许可。论文权利归各自作者及出版社所有，网站提供书目信息与原文入口。
