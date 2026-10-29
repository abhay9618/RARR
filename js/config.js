/* config.js — Constants and demo-only accounts. */

const SK='rarr.fe.v1',ST=['Draft','Submitted','Received','Acknowledged','Response assigned','Responders en route','Arrived','Resolved'];

const TY={road:'Road accident',fire:'Fire',medical:'Medical emergency',collapse:'Building collapse',other:'Other'};

const RL={citizen:'Citizen portal',hospital:'Hospital & ambulance',police:'Police control room',fire:'Fire & rescue',admin:'Central administrator'};

const HZ=['Fire','Smoke','Traffic obstruction','Trapped persons','Other'];

const FAC=[{n:'DEMO City General Hospital',t:'hospital',x:.6,y:-.5,av:1},{n:'DEMO Trauma & Burns Centre',t:'hospital',x:-1.8,y:.7,av:1},{n:'DEMO Community Health Centre',t:'hospital',x:2.6,y:1.9,av:0},{n:'DEMO District Hospital',t:'hospital',x:6,y:3,av:1},{n:'DEMO Ambulance Service A',t:'ambulance',x:-.9,y:-1.2,av:1},{n:'DEMO Ambulance Service B',t:'ambulance',x:1.5,y:-2.2,av:1},{n:'DEMO Police Station',t:'police',x:1,y:1,av:1},{n:'DEMO Fire Station',t:'fire',x:-1.3,y:-1.5,av:1}];

const AK='rarr.fe.auth',ACC=[{e:'user@demo.invalid',p:'demo1234',role:'citizen',name:'Demo Citizen'},{e:'hospital@demo.invalid',p:'demo1234',role:'hospital',name:'Demo Hospital Operator'},{e:'police@demo.invalid',p:'demo1234',role:'police',name:'Demo Police Operator'},{e:'fire@demo.invalid',p:'demo1234',role:'fire',name:'Demo Fire Operator'},{e:'admin@demo.invalid',p:'demo1234',role:'admin',name:'Demo Administrator'}];
