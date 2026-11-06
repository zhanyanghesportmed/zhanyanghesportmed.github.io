'use strict';
document.documentElement.classList.add('js');
const languageButton = document.getElementById('language');
const filterButtons = [...document.querySelectorAll('[data-filter]')];
const publications = [...document.querySelectorAll('.publication')];
let language = 'en';
function updateCount() {
  const count = publications.filter(item => !item.hidden).length;
  document.getElementById('publication-count').textContent = language === 'zh' ? `显示 ${count} 篇精选论文` : `${count} selected publications`;
}
function setLanguage(next) {
  language = next;
  document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-en][data-zh]').forEach(element => { element.textContent = element.dataset[next]; });
  languageButton.textContent = next === 'zh' ? 'EN' : '中文';
  languageButton.setAttribute('aria-label', next === 'zh' ? 'Switch to English' : '切换为中文');
  document.title = next === 'zh' ? 'Zhanyang He | 运动生物力学研究' : 'Zhanyang He | Sports Biomechanics Research';
  updateCount();
  try { localStorage.setItem('zh-research-language', next); } catch (_) {}
}
languageButton.addEventListener('click', () => setLanguage(language === 'en' ? 'zh' : 'en'));
filterButtons.forEach(button => button.addEventListener('click', () => {
  filterButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  publications.forEach(item => { item.hidden = button.dataset.filter !== 'all' && !item.dataset.topics.split(' ').includes(button.dataset.filter); });
  updateCount();
}));
try { if (localStorage.getItem('zh-research-language') === 'zh') setLanguage('zh'); } catch (_) {}
updateCount();
