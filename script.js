'use strict';
document.documentElement.classList.add('js');
const languageButton=document.getElementById('language');
const searchInput=document.getElementById('publication-search');
const yearSelect=document.getElementById('publication-year');
const papers=[...document.querySelectorAll('.publication')];
const groups=[...document.querySelectorAll('.year-group')];
let language='en';
function updatePublications(){
 const query=searchInput.value.toLocaleLowerCase().trim();
 const year=yearSelect.value;
 let visible=0;
 papers.forEach(p=>{p.hidden=!(p.dataset.search.includes(query)&&(year==='all'||p.dataset.year===year));if(!p.hidden)visible++;});
 groups.forEach(g=>{g.hidden=![...g.querySelectorAll('.publication')].some(p=>!p.hidden);});
 document.getElementById('publication-count').textContent=language==='zh'?`显示 ${visible} / ${papers.length} 项成果`:`Showing ${visible} of ${papers.length} works`;
 document.getElementById('empty-state').hidden=visible!==0;
}
function setLanguage(next){
 language=next;document.documentElement.lang=next==='zh'?'zh-CN':'en';
 document.querySelectorAll('[data-en][data-zh]').forEach(e=>{e.textContent=e.dataset[next];});
 languageButton.textContent=next==='zh'?'EN':'中文';
 languageButton.setAttribute('aria-label',next==='zh'?'Switch to English':'切换为中文');
 searchInput.placeholder=next==='zh'?'搜索标题、作者或期刊':'Search title, author or journal';
 document.title=next==='zh'?'Zhanyang He | 研究主页与全部成果':'Zhanyang He | Research & Publications';
 updatePublications();try{localStorage.setItem('zh-research-language',next);}catch(_){}
}
languageButton.addEventListener('click',()=>setLanguage(language==='en'?'zh':'en'));
searchInput.addEventListener('input',updatePublications);yearSelect.addEventListener('change',updatePublications);
document.getElementById('reset-filters').addEventListener('click',()=>{searchInput.value='';yearSelect.value='all';updatePublications();searchInput.focus();});
try{if(localStorage.getItem('zh-research-language')==='zh')setLanguage('zh');}catch(_){}
const navLinks=[...document.querySelectorAll('.nav-links a')];
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){navLinks.forEach(a=>a.classList.toggle('active',a.hash==='#'+e.target.id));}});},{rootMargin:'-15% 0px -70% 0px'});document.querySelectorAll('.content section').forEach(s=>observer.observe(s));}
updatePublications();
