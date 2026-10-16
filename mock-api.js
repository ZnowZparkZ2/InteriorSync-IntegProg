/* Offline demo-only API adapter. Preserves original page data contracts with localStorage.
   It does not make network requests or provide real account security. */
(()=>{
'use strict';
class ProjectRecord {constructor(data){Object.assign(this,data)} isActive(){return this.status==='ACTIVE'} rename(name){if(!String(name).trim())throw Error('Project name is required');this.projectName=name;this.name=name;}}
const KEY='interiorsync_exact_demo_v2';const now='2026-10-15T10:00:00.000Z';
const demoUser=(id,firstName,lastName,role,email)=>({userId:id,id,firstName,lastName,role,email,active:true,isActive:true,status:'ACTIVE'});
function initial(){const client=demoUser(1,'Alex','Rivera','CLIENT','client@demo.local'),designer=demoUser(2,'Sofia','Santos','INTERIOR_DESIGNER','designer@demo.local'),manager=demoUser(3,'Daniel','Cruz','PROJECT_MANAGER','manager@demo.local'),admin=demoUser(4,'Morgan','Reyes','ADMIN','admin@demo.local');
 const projects=[{projectId:101,projectName:'Modern Family Living Room',name:'Modern Family Living Room',description:'A warm, welcoming living space featuring natural materials and minimalist styling.',status:'ACTIVE',projectStatus:'ACTIVE',client:{clientId:1,user:client},projectManager:{user:manager},designer:{user:designer},budget:250000,projectType:'RESIDENTIAL',designStyle:'Modern Minimalist',location:'Makati City',startDate:'2026-10-01',endDate:'2026-11-20',createdAt:'2026-10-01T09:00:00Z',updatedAt:now},
 {projectId:102,projectName:'Boutique Office Renovation',name:'Boutique Office Renovation',description:'A functional and stylish workspace redesign.',status:'PLANNING',projectStatus:'PLANNING',client:{clientId:1,user:client},projectManager:{user:manager},designer:{user:designer},budget:425000,projectType:'COMMERCIAL',designStyle:'Contemporary',location:'Taguig City',startDate:'2026-10-12',endDate:'2026-12-05',createdAt:'2026-10-08T09:00:00Z',updatedAt:now},
 {projectId:103,projectName:'Coastal Bedroom Concept',name:'Coastal Bedroom Concept',description:'A calming bedroom inspired by coastal materials.',status:'COMPLETED',projectStatus:'COMPLETED',client:{clientId:1,user:client},projectManager:{user:manager},designer:{user:designer},budget:175000,projectType:'RESIDENTIAL',designStyle:'Coastal',location:'Quezon City',startDate:'2026-09-01',endDate:'2026-10-08',createdAt:'2026-09-01T10:00:00Z',updatedAt:'2026-10-08T10:00:00Z'}];
 const assets=[{assetId:201,assetName:'Living Room 3D Model',name:'Living Room 3D Model',assetType:'3D_MODEL',type:'3D_MODEL',project:{projectId:101,projectName:projects[0].projectName},description:'Main space concept',createdAt:now},{assetId:202,assetName:'Mood Board',name:'Mood Board',assetType:'IMAGE',type:'IMAGE',project:{projectId:101,projectName:projects[0].projectName},description:'Visual mood board',createdAt:now},{assetId:203,assetName:'Office Floor Plan',name:'Office Floor Plan',assetType:'DOCUMENT',type:'DOCUMENT',project:{projectId:102,projectName:projects[1].projectName},description:'Proposed layout',createdAt:now}];
 const versions=[{versionId:301,assetId:201,asset:assets[0],versionNumber:1,versionLabel:'Version 1',status:'RENDER_READY',reviewStatus:'RENDER_READY',fileName:'living-room-v1.glb',uploadedAt:'2026-10-10T08:30:00Z',createdAt:now},{versionId:302,assetId:201,asset:assets[0],versionNumber:2,versionLabel:'Version 2',status:'FOR_REVIEW',reviewStatus:'FOR_REVIEW',fileName:'living-room-v2.glb',uploadedAt:'2026-10-14T10:30:00Z',createdAt:now},{versionId:303,assetId:202,asset:assets[1],versionNumber:1,versionLabel:'Version 1',status:'APPROVED',reviewStatus:'APPROVED',fileName:'mood-board-v1.png',uploadedAt:'2026-10-12T08:30:00Z',createdAt:now}];
 const renderJobs=[{renderJobId:401,projectId:101,project:projects[0],assetVersion:versions[0],version:versions[0],status:'QUEUED',submittedAt:'2026-10-15T07:30:00Z',createdAt:now},{renderJobId:402,projectId:103,project:projects[2],assetVersion:versions[2],version:versions[2],status:'COMPLETED',submittedAt:'2026-10-09T08:00:00Z',completedAt:'2026-10-10T13:00:00Z',createdAt:now}];
 const notifications=[{notificationId:501,title:'Design Ready for Review',message:'Version 2 is ready for review.',isRead:false,read:false,createdAt:'2026-10-15T08:45:00Z',type:'VERSION'},{notificationId:502,title:'Project Update',message:'Your interior design project was updated.',isRead:false,read:false,createdAt:'2026-10-13T12:00:00Z',type:'PROJECT'}];
 const consultations=[{consultationId:601,client:{user:client},clientId:1,clientName:'Alex Rivera',title:'Living Room Consultation',projectType:'Residential',roomType:'Living Room',preferredDate:'2026-10-22',status:'PENDING',budgetRange:'100,000-300,000',description:'Modern and comfortable family space',createdAt:'2026-10-15T09:00:00Z'}];
 const logs=[{auditLogId:701,id:701,action:'PROJECT_CREATED',description:'Created Modern Family Living Room project',entityType:'PROJECT',performedBy:manager,user:manager,createdAt:now,timestamp:now},{auditLogId:702,id:702,action:'VERSION_UPLOADED',description:'Uploaded a new 3D model version',entityType:'ASSET_VERSION',performedBy:designer,user:designer,createdAt:now,timestamp:now}];
 const comments=[{commentId:801,versionId:302,comment:'Can we explore a lighter wood finish?',content:'Can we explore a lighter wood finish?',user:client,createdAt:now}];
 return {users:[client,designer,manager,admin],projects,assets,versions,renderJobs,notifications,consultations,logs,comments,outputs:[]};}
let db;try{db=JSON.parse(localStorage.getItem(KEY))||initial()}catch(e){db=initial()};function save(){localStorage.setItem(KEY,JSON.stringify(db));}
function res(data,status=200){return Promise.resolve(new Response(JSON.stringify(data),{status,headers:{'Content-Type':'application/json'}}));}
function parseJSON(options){try{return JSON.parse(options?.body||'{}')}catch(e){return {}}}
function uid(a,key){return Math.max(0,...a.map(x=>Number(x[key])||0))+1;}
function roleOf(email){const e=String(email||'').toLowerCase();if(e.includes('admin'))return 'ADMIN';if(e.includes('designer'))return 'INTERIOR_DESIGNER';if(e.includes('manager'))return 'PROJECT_MANAGER';return 'CLIENT';}
function projectOf(id){return db.projects.find(p=>p.projectId==id)}
function route(path,method,body){
 if(path==='/api/auth/login'){
  if(!body.email||!body.password)return [{message:'Please enter your email and password.'},400];
  const role=roleOf(body.email),profile=db.users.find(u=>u.role===role)||db.users[0];
  return [{token:'local-demo-token',email:body.email,role,userId:profile.userId,firstName:profile.firstName,lastName:profile.lastName},200];
 }
 if(path==='/api/projects'&&method==='GET')return [db.projects,200];
 if(path==='/api/projects'&&method==='POST'){const p={projectId:uid(db.projects,'projectId'),createdAt:now,status:'PLANNING',...body};const model=new ProjectRecord(p);db.projects.unshift(model);save();return [model,201];}
 if(/^\/api\/projects\/\d+$/.test(path)){const p=projectOf(path.split('/').pop());return [p||{},p?200:404];}
 if(/^\/api\/projects\/\d+\/deliver$/.test(path)){let p=projectOf(path.split('/')[3]);if(p){p.status='COMPLETED';save();}return [p||{},200];}
 if(path==='/api/clients')return [db.users.filter(x=>x.role==='CLIENT').map(x=>({clientId:x.userId,user:x})),200];
 if(path==='/api/project-assignment-options')return [{clients:db.users.filter(x=>x.role==='CLIENT'),designers:db.users.filter(x=>x.role==='INTERIOR_DESIGNER'),projectManagers:db.users.filter(x=>x.role==='PROJECT_MANAGER')},200];
 if(path==='/api/project-members')return [[],200];
 if(path.startsWith('/api/project-members/project/'))return [[],200];
 if(path==='/api/users'&&method==='GET')return [db.users,200];
 if(path==='/api/users'&&method==='POST'){const u={userId:uid(db.users,'userId'),active:true,status:'ACTIVE',...body};db.users.push(u);save();return [u,201];}
 if(/^\/api\/users\/\d+\/status$/.test(path)){const u=db.users.find(u=>u.userId==path.split('/')[3]);if(u){u.status=body.status||((u.status==='ACTIVE')?'INACTIVE':'ACTIVE');u.active=u.status==='ACTIVE';save();}return [u||{},200];}
 if(/^\/api\/users\/\d+$/.test(path)){const id=Number(path.split('/').pop()),u=db.users.find(u=>u.userId===id);if(method==='DELETE'){db.users=db.users.filter(u=>u.userId!==id);save();return [{success:true},200];}if(method==='PUT'||method==='PATCH'){Object.assign(u||{},body);save();}return [u||{},200];}
 if(path==='/api/assets'&&method==='POST'){const a={assetId:uid(db.assets,'assetId'),createdAt:now,...body};db.assets.push(a);save();return [a,201];}
 if(path.startsWith('/api/assets/project/'))return [db.assets.filter(a=>a.project?.projectId==path.split('/').pop()||a.projectId==path.split('/').pop()),200];
 if(path==='/api/asset-versions'&&method==='POST'){const v={versionId:uid(db.versions,'versionId'),uploadedAt:now,status:'PENDING_REVIEW',...body};db.versions.unshift(v);save();return [v,201];}
 if(path.startsWith('/api/asset-versions/asset/'))return [db.versions.filter(v=>v.assetId==path.split('/').pop()||v.asset?.assetId==path.split('/').pop()),200];
 if(path.includes('/submit-review')){const v=db.versions.find(v=>v.versionId==path.split('/')[3]);if(v){v.status='PENDING_REVIEW';save();}return [v||{},200];}
 if(path.includes('/request-revision')){const v=db.versions.find(v=>v.versionId==path.split('/')[3]);if(v){v.status='REVISION_REQUESTED';save();}return [v||{},200];}
 if(path==='/api/approvals/approve'){const v=db.versions.find(v=>v.versionId==(body.versionId||body.assetVersionId));if(v){v.status='APPROVED';save();}return [{success:true,version:v||null},200];}
 if(path.includes('/download'))return [{downloadUrl:'#',message:'Offline preview has no uploaded file.'},200];
 if(path==='/api/render-jobs'&&method==='POST'){const r={renderJobId:uid(db.renderJobs,'renderJobId'),status:'QUEUED',submittedAt:now,...body};db.renderJobs.unshift(r);save();return [r,201];}
 if(path==='/api/render-jobs')return [db.renderJobs,200];
 if(path.startsWith('/api/render-jobs/project/'))return [db.renderJobs.filter(j=>j.projectId==path.split('/').pop()||j.project?.projectId==path.split('/').pop()),200];
 if(path.includes('/render-jobs/')&&path.endsWith('/status')){const r=db.renderJobs.find(r=>r.renderJobId==path.split('/')[3]);if(r){r.status=body.status||'COMPLETED';r.updatedAt=now;save();}return [r||{},200];}
 if(path.startsWith('/api/comments/version/'))return [db.comments.filter(c=>c.versionId==path.split('/').pop()),200];
 if(path==='/api/comments'&&method==='POST'){const c={commentId:uid(db.comments,'commentId'),createdAt:now,...body};db.comments.push(c);save();return [c,201];}
 if(path==='/api/notifications/me/unread-count')return [{unreadCount:db.notifications.filter(n=>!n.read&&!n.isRead).length},200];
 if(path==='/api/notifications/me')return [db.notifications,200];
 if(path.includes('/notifications/')&&path.endsWith('/read')){let n=db.notifications.find(x=>x.notificationId==path.split('/')[3]);if(n)n.read=n.isRead=true;save();return [n||{},200];}
 if(path==='/api/notifications/me/read-all'){db.notifications.forEach(n=>n.read=n.isRead=true);save();return [{success:true},200];}
 if(path==='/api/consultations/my')return [db.consultations,200];
 if(path==='/api/consultations'&&method==='GET')return [db.consultations,200];
 if(path==='/api/consultations'&&method==='POST'){const c={consultationId:uid(db.consultations,'consultationId'),status:'PENDING',createdAt:now,...body};db.consultations.unshift(c);save();return [c,201];}
 if(path==='/api/audit-logs')return [db.logs,200];
 if(path.startsWith('/api/render-outputs/render-job/'))return [db.outputs.filter(r=>r.renderJobId==path.split('/').pop()),200];
 if(path==='/api/render-outputs'&&method==='POST'){const o={renderOutputId:uid(db.outputs,'renderOutputId'),uploadedAt:now,...body};db.outputs.push(o);save();return [o,201];}
 if(path==='/api/render-outputs')return [db.outputs,200];
 console.info('Offline API fallback',method,path);return [[],200];
}
const realFetch=window.fetch.bind(window);
window.fetch=(resource,options={})=>{
 const raw=typeof resource==='string'?resource:resource?.url||String(resource);
 if(!raw.startsWith('/api/'))return realFetch(resource,options);
 const path=raw.split('?')[0],method=(options.method||'GET').toUpperCase();
 try{const [data,status]=route(path,method,parseJSON(options));return res(data,status);}catch(error){console.error('Mock API failure',error,path);return res({message:String(error)},500);}
};
window.InteriorSyncDemo={reset(){localStorage.removeItem(KEY);location.reload()},getData(){return JSON.parse(JSON.stringify(db))}};
})();
