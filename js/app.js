/* app.js — Render function, event listeners and start-up. Must load last. */

function render(){const c=role=='citizen',demo='<div class="demo"><b style="color:#E8A33D">DEMO MODE</b> – no real emergency services are contacted. In an emergency call <a href="tel:112">112</a>.</div>';let hd='<b>Rapid Action &amp; Rapid Response</b>',s;
 if(!auth)s=login();
 else{let b;
  if(c)b=nav=='home'?home():nav=='report'?report():nav=='mine'?mine():safety();
  else{const i=sel&&S.inc.find(x=>x.id==sel);b=nav=='ov'?ov():nav=='map'?lmap():nav=='inc'?(i?detail(i):list()):set()}
  hd+=`<span style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><span class="chip in">${E(auth.name)}</span><button class="sm" data-a="out">Sign out</button></span>`;
  if(c)hd+=`<nav class="hn" aria-label="Citizen">${[['home','Home'],['report','Report'],['mine','My reports'],['safety','Safety']].map(([k,l])=>`<button class="${nav==k?'on':''}" data-a="go" data-v="${k}" ${nav==k?'aria-current="page"':''}>${l}</button>`).join('')}</nav>`;
  s=c?`<main class="cw">${b}</main>`:`<div class="opw"><nav class="side" aria-label="Command">${[['ov','Command Overview'],['map','Live Incident Map'],['inc','Active Incidents'],['set','Settings']].map(([k,l])=>`<button class="${nav==k?'on':''}" data-a="go" data-v="${k}" ${nav==k?'aria-current="page"':''}>${l}</button>`).join('')}</nav><main class="om">${b}</main></div>`}
 const dg=dlg?`<div class="ov"><div class="dg" role="dialog" aria-modal="true" aria-labelledby="dt"><p id="dt" style="margin:0">${E(dlg.text)}</p><div class="g2" style="margin:0"><button data-a="no">Cancel</button><button class="pr" data-a="ok" autofocus>Confirm</button></div></div></div>`:'';
 $('#app').innerHTML=`${demo}<header class="bar">${hd}</header>${s}${dg}<div id="t" role="status" aria-live="polite">${E(msg)}</div>`;if(stream&&$('#vid'))$('#vid').srcObject=stream}

document.addEventListener('click',e=>{const b=e.target.closest('[data-a]');if(!b||b.disabled)return;const f=A[b.dataset.a];if(!f)return;f(b.dataset);save();render()});

document.addEventListener('change',e=>{const t=e.target;if(t.id=='fp'&&dr&&t.files[0]){const f=t.files[0];t.value='';if(!f.type.startsWith('image/')||f.size>10485760){dr.cam='Choose an image file under 10 MB.';return render()}const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const c=document.createElement('canvas'),w=Math.min(480,im.width);c.width=w;c.height=Math.round(im.height*w/im.width);c.getContext('2d').drawImage(im,0,0,c.width,c.height);dr.med.push({url:c.toDataURL('image/jpeg',.6),file:1});dr.cam='';render()};im.onerror=()=>{dr.cam='That image could not be read.';render()};im.src=r.result};r.readAsDataURL(f);return}if(t.id=='aa'){actAs=+t.value;render()}});

document.addEventListener('input',e=>{const t=e.target;if(t.id=='em')lem=t.value;if(t.id=='pw')lpw=t.value;if(!dr)return;if(t.dataset.m){dr[t.dataset.m]=t.type=='checkbox'?+t.checked:t.value;if(t.dataset.m=='consent')render()}if(t.dataset.h){dr.hz=dr.hz.filter(x=>x!=t.dataset.h);if(t.checked)dr.hz.push(t.dataset.h)}});

document.addEventListener('keydown',e=>{if(e.key=='Enter'&&(e.target.id=='em'||e.target.id=='pw')){A.login();render();return}if(e.key=='Escape'&&dlg){dlg=null;render()}});

addEventListener('storage',e=>{if(e.key==SK||e.key==IK){const n=S.inc.length;load();loadImg();if(auth&&role!='citizen'&&S.inc.length>n)toast('New demo report received.');render()}});

load();loadImg();if(auth&&RL[auth.role]){role=auth.role;nav=role=='citizen'?'home':'ov'}else auth=null;render();
