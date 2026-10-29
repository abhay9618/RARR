/* state.js — App state, persistence (localStorage), report creation and demo seed data. */

const IK='rarr.fe.img',empty='<div class="card">Nothing to show yet. Submit a report from the citizen portal.</div>';let IMG={},own=0;

const loadImg=()=>{try{IMG=JSON.parse(localStorage.getItem(IK))||{}}catch(e){IMG={}}},saveImg=()=>{Object.keys(IMG).slice(0,-8).forEach(k=>delete IMG[k]);try{localStorage.setItem(IK,JSON.stringify(IMG))}catch(e){toast('Photo preview is too large to store; it shows only in this tab.')}};

let S,role='citizen',nav='home',sel=null,dr=null,dlg=null,msg='',stream=null,actAs=null,tt,flt={hospital:1,ambulance:1,police:1,fire:1};

let auth=null,lt='user',lem='',lpw='',lerr='';try{auth=JSON.parse(sessionStorage.getItem(AK))}catch(e){}

function add(d,m=0,demo=0){const n=++S.n,t=Date.now()-m*6e4,fire=d.type=='fire'||d.type=='collapse'||d.all;
 const pv=FAC.map((f,k)=>({f:k,x:f})).filter(o=>(o.x.t=='hospital'||o.x.t=='ambulance')&&dist(o.x)<=S.radius).map(o=>({f:o.f,ds:'Alert sent',unit:'',eta:'',up:t}));
 const i={...d,id:n,ref:'ER-2026-'+String(n).padStart(4,'0'),t,demo,stage:2,pv,claim:null,extra:0,po:{ds:'Alert sent',unit:''},fi:{ds:fire?'Alert sent':'Not notified',unit:''},tl:[]};
 lg(i,'Report submitted from the citizen app (simulated).',1,t);lg(i,'Report received by the demo system. No real service has been alerted.',1,t);
 if(!pv.length)lg(i,'No eligible facility within '+S.radius+' km (straight-line). Admin action needed.',0,t);S.inc.unshift(i);return i}

function seed(){S={v:1,n:0,radius:5,inc:[]};
 add({type:'road',desc:'Two-wheeler and car collision at junction (DEMO).',aff:'2',hz:['Traffic obstruction'],loc:{lat:28.9845,lng:77.7064,acc:25,demo:1,t:Date.now()},med:1},3,1);
 add({type:'fire',desc:'Smoke from shop shutters (DEMO).',aff:'1',hz:['Fire','Smoke'],loc:{lat:28.99,lng:77.71,acc:30,demo:1,t:Date.now()},med:1},26,1);return S}

function load(){try{S=JSON.parse(localStorage.getItem(SK))}catch(e){S=null}if(!S||S.v!==1)seed()}

function save(){try{localStorage.setItem(SK,JSON.stringify(S))}catch(e){}}

const nd=()=>({s:1,type:'road',aff:'Unknown',hz:[],desc:'',ct:0,med:[],loc:null,gl:'',cam:'',consent:0,all:1,err:''});

const stopCam=()=>{stream&&stream.getTracks().forEach(t=>t.stop());stream=null};

const vis=()=>S.inc.filter(i=>(!own||!i.demo)&&(role=='hospital'?i.pv.length:role=='fire'?i.fi.ds!='Not notified':1));
