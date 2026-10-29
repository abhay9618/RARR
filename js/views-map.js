/* views-map.js — SVG map, facility filter chips, legend and facility list. */

function map(){const R=95,k=R/S.radius;let s=`<svg viewBox="0 0 320 240" role="img" aria-label="Map: incident pin, ${S.radius} km radius and nearby facilities (mock positions)"><rect width="320" height="240" fill="var(--map)"/><path d="M0 130H320M0 60L320 170M110 0V240M230 0L200 240" stroke="var(--sf)" stroke-width="7"/><circle cx="160" cy="120" r="${R}" fill="#B4161B" fill-opacity=".07" stroke="#B4161B" stroke-width="2" stroke-dasharray="6 4"/>`;
 const T=(c)=>`<text y="4" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">${c}</text>`;
 FAC.forEach(f=>{if(!flt[f.t])return;const x=160+f.x*k,y=120+f.y*k;if(x<10||x>310||y<10||y>230)return;
  const g={hospital:'<circle r="10" fill="#14703A"/><path d="M0-5v10M-5 0h10" stroke="#fff" stroke-width="3"/>',ambulance:'<circle r="10" fill="#0B1F3A"/>'+T('A'),police:'<rect x="-10" y="-10" width="20" height="20" rx="3" fill="#1D4ED8"/>'+T('P'),fire:'<path d="M0-11l11 19h-22z" fill="#8A4B00"/><text y="6" font-size="10" font-weight="700" fill="#fff" text-anchor="middle">F</text>'}[f.t];
  s+=`<g transform="translate(${x} ${y})"${dist(f)>S.radius?' opacity=".45"':''}><title>${E(f.n)}</title>${g}</g>`});
 return s+'<circle cx="160" cy="120" r="9" fill="#B4161B" stroke="#fff" stroke-width="3"><title>Incident</title></circle></svg>'}

const fchips=()=>'<div style="display:flex;gap:6px;flex-wrap:wrap;margin:8px 0">'+['hospital','ambulance','police','fire'].map(t=>`<button class="sm" aria-pressed="${!!flt[t]}" data-a="flt" data-k="${t}">${flt[t]?'✓ ':''}${cap(t)}</button>`).join('')+'</div>';

const legend=()=>`<small>● Incident · + Hospital · A Ambulance · ■ P Police · ▲ F Fire · dashed ring = ${S.radius} km. Mock facility positions; distances are straight-line, not travel time.</small>`;

const facList=()=>FAC.filter(f=>flt[f.t]).sort((a,b)=>dist(a)-dist(b)).map(f=>`<div class="row"><div><b>${E(f.n)}</b><br><small>${f.t} · ${dist(f).toFixed(1)} km straight-line${dist(f)>S.radius?' · outside radius':''}</small></div>${chip(f.av?'Available (demo)':'Busy (demo)',f.av?'ok':'pe')}</div>`).join('');
