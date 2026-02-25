const qs=s=>document.querySelector(s),qsa=s=>[...document.querySelectorAll(s)];
const burger=qs('.burger'),drawer=qs('.mobile-drawer'),overlay=qs('.overlay'),close=qs('.drawer-close');
function openDrawer(){drawer.classList.add('open');overlay.classList.add('open');document.body.classList.add('lock');drawer.setAttribute('aria-hidden','false')}
function closeDrawer(){drawer.classList.remove('open');overlay.classList.remove('open');document.body.classList.remove('lock');drawer.setAttribute('aria-hidden','true')}
burger?.addEventListener('click',openDrawer);close?.addEventListener('click',closeDrawer);overlay?.addEventListener('click',()=>{closeDrawer();closeModal()});document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeDrawer();closeModal()}});
qsa('.lang-trigger').forEach(b=>b.addEventListener('click',()=>b.parentElement.classList.toggle('open')));
qsa('.faq details').forEach(d=>d.addEventListener('toggle',()=>{if(d.open)qsa('.faq details').forEach(o=>o!==d&&(o.open=false))}));
const modal=qs('.modal'),openP=qs('.privacy-link'),x=qs('.modal-x'),c=qs('.modal-close');let lastFocus=null;
function openModal(){lastFocus=document.activeElement;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('lock');x.focus()}
function closeModal(){modal?.classList.remove('open');modal?.setAttribute('aria-hidden','true');document.body.classList.remove('lock');lastFocus&&lastFocus.focus()}
openP?.addEventListener('click',openModal);x?.addEventListener('click',closeModal);c?.addEventListener('click',closeModal);
modal?.addEventListener('keydown',e=>{if(e.key!=='Tab')return;const f=qsa('.modal button,[href],input,[tabindex]:not([tabindex="-1"])');if(!f.length)return;const first=f[0],last=f[f.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}});
const months=qs('#months'),mv=qs('#monthsValue'),seg=qsa('.segmented button');let amount=10000;
const fmt=(n)=>new Intl.NumberFormat(document.body.dataset.locale,{style:'currency',currency:document.body.dataset.currency,maximumFractionDigits:0}).format(n);
function calc(){const m=+months.value;mv.textContent=m;const low=amount*Math.pow(1.08,m),base=amount*Math.pow(1.115,m),high=amount*Math.pow(1.15,m);qs('#lowVal').textContent=fmt(low);qs('#baseVal').textContent=fmt(base);qs('#highVal').textContent=fmt(high)}
months&&months.addEventListener('input',calc);seg.forEach(b=>b.addEventListener('click',()=>{seg.forEach(n=>n.classList.remove('active'));b.classList.add('active');amount=+b.dataset.amount;calc()}));calc();
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('show')), {threshold:.15});qsa('section').forEach(s=>{s.setAttribute('data-animate','');io.observe(s)});
