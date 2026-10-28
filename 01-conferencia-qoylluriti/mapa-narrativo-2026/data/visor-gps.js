(() => {
'use strict';
const stops=window.QR_STOPS||[], routes=window.QR_ROUTES||[];
const colors={aproximacion:'#497e78',altura:'#bf8546',retorno:'#ad5847'};
const safe=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const box=document.getElementById('stops');
let selected=-1,filter='todos',currentPhotos=[],photoIndex=0,zoomed=false;
box.innerHTML=stops.map((s,i)=>`<article class="story-card" id="card-${safe(s.id)}" data-phase="${safe(s.phase)}">
<button type="button" class="story-toggle" data-index="${i}" aria-expanded="false"><span class="num">${String(s.num).padStart(2,'0')}</span><span><span class="story-title">${safe(s.title)}</span><span class="story-sub">${safe(s.subtitle)}</span></span><span class="arrow">›</span></button>
<div class="story-detail"><p>${safe(s.context)}</p><p class="question">${safe(s.narrative)}</p>
<div class="photo-gallery">${(s.photos||[]).map((p,j)=>`<button type="button" class="photo-button" data-photo-stop="${i}" data-photo="${j}" aria-label="Ampliar foto ${j+1} de ${safe(s.title)}"><img loading="lazy" src="${safe(p.src)}" alt="${safe(p.alt)}"><small>Ver foto ↗</small></button>`).join('')}</div>
<p class="source"><b>Referencia:</b> ${safe(s.source)}</p><p class="notice"><b>Por confirmar:</b> ${safe(s.status)}</p></div></article>`).join('');

const svg=document.getElementById('gpsSvg'),grid=document.getElementById('gridLayer'),lines=document.getElementById('routeLayer'),pts=document.getElementById('pointLayer');
const svgNS='http://www.w3.org/2000/svg';
function element(tag, attrs={}, parent){const e=document.createElementNS(svgNS,tag);for(const [k,v] of Object.entries(attrs))e.setAttribute(k,v);if(parent)parent.appendChild(e);return e;}
const coords=routes.flatMap(r=>r.points||[]).concat(stops.map(s=>[s.lat,s.lon]));
let minLa=Math.min(...coords.map(p=>p[0])),maxLa=Math.max(...coords.map(p=>p[0])),minLo=Math.min(...coords.map(p=>p[1])),maxLo=Math.max(...coords.map(p=>p[1]));
const w=980,h=750, margin=85;
const k=Math.min((w-2*margin)/(maxLo-minLo||1),(h-2*margin)/(maxLa-minLa||1));
const xOffset=(w-(maxLo-minLo)*k)/2,yOffset=(h-(maxLa-minLa)*k)/2;
const xy=(lat,lon)=>[xOffset+(lon-minLo)*k,h-yOffset-(lat-minLa)*k];
for(let i=1;i<7;i++){
 element('line',{x1:i*w/7,y1:0,x2:i*w/7,y2:h,class:'gps-grid'},grid);
 element('line',{x1:0,y1:i*h/7,x2:w,y2:i*h/7,class:'gps-grid'},grid);
}
const routeElements=routes.map(r=>{
 const points=(r.points||[]).map(p=>xy(p[0],p[1]).map(t=>t.toFixed(1)).join(',')).join(' ');
 const e=element('polyline',{points,stroke:colors[r.phase]||'#527c72',class:'gps-routes','data-phase':r.phase||''},lines);
 const title=element('title',{},e);title.textContent=r.name||'Traza GPS';return {phase:r.phase,el:e};
});
const markerEls=stops.map((s,i)=>{
 const [x,y]=xy(s.lat,s.lon),g=element('g',{transform:`translate(${x},${y})`,class:'map-stop',role:'button',tabindex:'0','aria-label':`${s.num}. ${s.title}`},pts);
 element('circle',{r:'21',cx:'0',cy:'0'},g);const label=element('text',{x:'0',y:'1'},g);label.textContent=s.num;
 const title=element('title',{},g);title.textContent=s.title;
 g.addEventListener('click',()=>selectStop(i,true));g.addEventListener('keydown',ev=>{if(ev.key==='Enter'||ev.key===' '){ev.preventDefault();selectStop(i,true);}});
 return g;
});

const fullView='0 0 980 750';
function updateMap(i,focus){
 markerEls.forEach((m,k)=>m.classList.toggle('active',k===i));
 const phase=i>=0?stops[i].phase:null;
 routeElements.forEach(({phase:p,el})=>{el.classList.toggle('in-focus',Boolean(focus&&phase===p));el.classList.toggle('dimmed',Boolean(focus&&phase!==p));});
 const el=document.getElementById('mapStage');
 if(i>=0){const s=stops[i];el.innerHTML=`<small>Etapa ${String(s.num).padStart(2,'0')} de 08</small><strong>${safe(s.title)}</strong><span>Haz clic en «Ver recorrido completo» para alejar</span>`;}
 else el.innerHTML='<small>Vista general</small><strong>Rutas del recorrido</strong><span>12 trazas GPS · 8 etapas</span>';
 if(i>=0&&focus){
  const [cx,cy]=xy(stops[i].lat,stops[i].lon);
  const vw=430,vh=350;
  svg.setAttribute('viewBox',`${cx-vw/2} ${cy-vh/2} ${vw} ${vh}`);
  zoomed=true;
 } else if(!zoomed){svg.setAttribute('viewBox',fullView);}
}
function selectStop(i,scroll=true){
 if(i<0||i>=stops.length)return;
 selected=i;
 if(filter!=='todos'&&stops[i].phase!==filter)applyFilter('todos');
 document.querySelectorAll('.story-card').forEach((el,k)=>{
  const on=k===i;el.classList.toggle('active',on);el.querySelector('.story-toggle').setAttribute('aria-expanded',String(on));
 });
 updateMap(i,scroll);
 if(scroll){
 const card=document.getElementById('card-'+stops[i].id);card?.scrollIntoView({block:'nearest',behavior:'smooth'});
 if(matchMedia('(max-width:760px)').matches){document.querySelector('.maparea')?.scrollIntoView({block:'start',behavior:'smooth'});}
 }
}
function applyFilter(group){filter=group;document.querySelectorAll('.chip').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===group)));
 document.querySelectorAll('.story-card').forEach(c=>c.style.display=group==='todos'||c.dataset.phase===group?'':'none');
 document.getElementById('stageCounter').textContent=String(group==='todos'?stops.length:stops.filter(s=>s.phase===group).length).padStart(2,'0')+' paradas';
 routeElements.forEach(({phase:p,el})=>{const visible=group==='todos'||group===p;el.style.display=visible?'':'none';});
 markerEls.forEach((m,i)=>m.style.display=group==='todos'||stops[i].phase===group?'':'none');
 zoomed=false;svg.setAttribute('viewBox',fullView);updateMap(-1,false);
}
box.addEventListener('click',ev=>{const b=ev.target.closest('button');if(!b)return;if(b.matches('[data-photo-stop]')){openPhoto(Number(b.dataset.photoStop),Number(b.dataset.photo));return;}if(b.matches('.story-toggle'))selectStop(Number(b.dataset.index),true);});
document.querySelector('.toolbar').addEventListener('click',ev=>{const b=ev.target.closest('button[data-filter]');if(b)applyFilter(b.dataset.filter);});
document.getElementById('fitAll').addEventListener('click',()=>{zoomed=false;svg.setAttribute('viewBox',fullView);updateMap(selected,false);});
function step(d){let i=selected<0?(d>0?-1:0):selected;for(let j=0;j<stops.length;j++){i=(i+d+stops.length)%stops.length;if(filter==='todos'||stops[i].phase===filter){selectStop(i,true);return;}}}
document.getElementById('prevStop').addEventListener('click',()=>step(-1));document.getElementById('nextStop').addEventListener('click',()=>step(1));
const modal=document.getElementById('photoModal');
function openPhoto(si,pi){currentPhotos=stops[si].photos||[];photoIndex=pi;if(!currentPhotos.length)return;modal.classList.add('open');renderPhoto();document.getElementById('closeModal').focus();}
function renderPhoto(){const p=currentPhotos[photoIndex];document.getElementById('modalImage').src=p.src;document.getElementById('modalImage').alt=p.alt||'Foto de campo';document.getElementById('modalCaption').textContent=`Fotografía ${photoIndex+1} de ${currentPhotos.length} · Archivo de campo 2026 · localización de la imagen por confirmar`;}
function advance(d){if(!currentPhotos.length)return;photoIndex=(photoIndex+d+currentPhotos.length)%currentPhotos.length;renderPhoto();}
document.getElementById('photoPrev').addEventListener('click',()=>advance(-1));document.getElementById('photoNext').addEventListener('click',()=>advance(1));
document.getElementById('closeModal').addEventListener('click',()=>modal.classList.remove('open'));
modal.addEventListener('click',ev=>{if(ev.target===modal)modal.classList.remove('open');});
document.addEventListener('keydown',ev=>{if(ev.key==='Escape')modal.classList.remove('open');if(modal.classList.contains('open')&&ev.key==='ArrowRight')advance(1);if(modal.classList.contains('open')&&ev.key==='ArrowLeft')advance(-1);});
// Initial view shows the complete, real recorded trajectories; the first card is open for orientation.
zoomed=false;selectStop(0,false);updateMap(-1,false);
})();
