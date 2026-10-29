/* helpers.js — Small helpers: DOM, escaping, formatting, chips, logging, toast. */

const $=s=>document.querySelector(s),E=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

const dist=f=>Math.hypot(f.x,f.y),cap=s=>s[0].toUpperCase()+s.slice(1),N=p=>FAC[p.f].n,I=d=>S.inc.find(x=>x.id==d.i),up=p=>p.up=Date.now();

const tm=t=>new Date(t).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'}),ago=t=>Math.max(0,Math.round((Date.now()-t)/6e4))+' min ago';

const chip=(s,k)=>`<span class="chip ${k}">${{ok:'✓',pe:'●',in:'◆',ur:'▲',nu:'–'}[k]} ${E(s)}</span>`;

const dk=s=>({'Acknowledged':'ok','Ambulance assigned':'ok','En route':'ok','Arrived':'ok','Unit assigned':'ok','Alert sent':'in','Dispatch pending':'pe','Backup requested':'pe','Unable to respond':'ur'}[s]||'nu');

const sch=i=>i.stage<3?chip('Awaiting acknowledgement','pe'):chip(ST[i.stage],i.stage==7?'nu':'ok');

const lg=(i,x,pub=0,t=Date.now())=>i.tl.push({t,x,pub}),bump=(i,s)=>{i.stage=Math.max(i.stage,s)},ask=(text,fn)=>{dlg={text,fn}};

function toast(m){msg=m;const e=$('#t');if(e)e.textContent=m;clearTimeout(tt);tt=setTimeout(()=>{msg='';const e=$('#t');if(e)e.textContent=''},3500)}
