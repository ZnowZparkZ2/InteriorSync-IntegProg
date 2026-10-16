/* InteriorSync browser runtime. Generated JSX has been converted into ordinary JavaScript.
 * This miniature renderer implements only the UI behavior needed by the original components.
 * No React, JSX parser, build tool, API service, or remote library is used at runtime.
 */
(function(){
'use strict';
const modules={}, cache={}, instances=new Map(), queuedEffects=[];
let currentInstance=null, hookIndex=0, scheduled=false, activeParams={}, activePath=location.pathname, mountedTree=null;
const root=document.getElementById('root');
const Fragment=Symbol('fragment');
function h(type,props,...children){return {type,props:props||{},children};}
function register(id,fn){modules[id]=fn;}
function resolve(request,from){
 if(request==='react'||request==='react-router-dom'||request==='lucide-react'||request==='react-dom/client')return request;
 if(request.endsWith('.css'))return '@css';
 if(!request.startsWith('.'))return request;
 const arr=from.split('/');arr.pop();
 for(const part of request.split('/')){if(part==='.'||!part)continue;if(part==='..')arr.pop();else arr.push(part);}
 let result=arr.join('/');
 if(!/\.(jsx|js)$/.test(result))result+=modules[result+'.jsx']?'.jsx':'.js';
 return result;
}
function requireFrom(request,from){
 const id=resolve(request,from);
 if(id==='react')return ReactShim;
 if(id==='react-router-dom')return RouterShim;
 if(id==='lucide-react')return Icons;
 if(id==='react-dom/client')return {createRoot:()=>({render:()=>{}})};
 if(id==='@css')return {};
 if(cache[id])return cache[id].exports;
 if(!modules[id]){console.warn('Missing bundle module',id,'requested from',from);return {};}
 const module={exports:{}};cache[id]=module;
 modules[id](module,module.exports,(item)=>requireFrom(item,id));return module.exports;
}
function unchanged(a,b){return a&&b&&a.length===b.length&&a.every((v,i)=>Object.is(v,b[i]));}
function useState(initial){
 if(!currentInstance)throw Error('useState requires a component');
 const ins=currentInstance,idx=hookIndex++;
 if(!(idx in ins.hooks))ins.hooks[idx]={value:typeof initial==='function'?initial():initial};
 return [ins.hooks[idx].value,function(next){
   const old=ins.hooks[idx].value;
   const value=typeof next==='function'?next(old):next;
   if(!Object.is(old,value)){ins.hooks[idx].value=value;queueRender();}
 }];
}
function useRef(value){const ins=currentInstance,idx=hookIndex++;if(!(idx in ins.hooks))ins.hooks[idx]={current:value};return ins.hooks[idx];}
function useMemo(factory,deps){const ins=currentInstance,idx=hookIndex++;let record=ins.hooks[idx];if(!record||!unchanged(record.deps,deps)){record={value:factory(),deps};ins.hooks[idx]=record;}return record.value;}
function useEffect(callback,deps){const ins=currentInstance,idx=hookIndex++;let record=ins.hooks[idx];if(!record||!unchanged(record.deps,deps)){
  if(record&&record.cleanup)try{record.cleanup()}catch(e){console.warn(e)}
  ins.hooks[idx]={deps,cleanup:null};queuedEffects.push({ins,idx,callback});
 }}
const ReactShim={useState,useRef,useMemo,useEffect,useCallback:(cb,deps)=>useMemo(()=>cb,deps),Fragment,StrictMode:({children})=>children};
function flat(input,out){for(const item of input){if(item==null||item===false||item===true)continue;if(Array.isArray(item))flat(item,out);else out.push(item);}return out;}
function expand(node,path='0',used=new Set()){
 if(node==null||node===false||node===true)return [];
 if(Array.isArray(node))return flat(node.map((n,i)=>expand(n,path+'.'+i,used)),[]);
 if(typeof node!=='object'||!('type'in node))return [{type:'#text',text:String(node),props:{},children:[]}];
 if(node.type===Fragment)return expand(node.children,path+'.f',used);
 if(typeof node.type==='function'){
  let ins=instances.get(path);
  if(!ins||ins.type!==node.type){ins={type:node.type,hooks:[],path};instances.set(path,ins);}
  used.add(path);
  const old=currentInstance,oldIdx=hookIndex;currentInstance=ins;hookIndex=0;
  try{
   const result=node.type({...node.props,children:node.children.length===1?node.children[0]:node.children});
   currentInstance=old;hookIndex=oldIdx;
   return expand(result,path+'.c',used);
  }catch(error){currentInstance=old;hookIndex=oldIdx;console.error('Component error:',node.type.name,error);return [{type:'div',props:{className:'runtime-error'},children:[`Unable to load ${node.type.name}. See browser console.`]}];}
 }
 const nativeChildren=flat(node.children.map((child,i)=>expand(child,path+'.'+i,used)),[]);
 return [{type:node.type,props:node.props,children:nativeChildren}];
}
function queueRender(){if(!scheduled){scheduled=true;queueMicrotask(()=>{scheduled=false;render();});}}
function patch(parent,old,node,index){
 if(!node){if(old&&old.el?.parentNode===parent)parent.removeChild(old.el);return null;}
 if(!old||old.type!==node.type){
   const svg=parent.namespaceURI==='http://www.w3.org/2000/svg';
   const el=node.type==='#text'?document.createTextNode(node.text):svg||node.type==='svg'?document.createElementNS('http://www.w3.org/2000/svg',node.type):document.createElement(node.type);
   node.el=el;
   if(old?.el?.parentNode===parent)parent.replaceChild(el,old.el);else {const at=parent.childNodes[index]||null;parent.insertBefore(el,at);}
   if(node.type!=='#text'){syncProps(el,{},node.props||{});let previous=[];for(let i=0;i<node.children.length;i++)previous.push(patch(el,null,node.children[i],i));node.children=previous;}
   return node;
 }
 const el=node.el=old.el;
 if(node.type==='#text'){if(old.text!==node.text)el.nodeValue=node.text;return node;}
 syncProps(el,old.props||{},node.props||{});
 const existing=old.children||[],arr=[];
 for(let i=0;i<node.children.length;i++)arr.push(patch(el,existing[i],node.children[i],i));
 for(let i=node.children.length;i<existing.length;i++)patch(el,existing[i],null,i);
 node.children=arr;return node;
}
function styleSet(el,prev,next){if(typeof next==='string'){el.style.cssText=next;return;}prev=prev||{};next=next||{};for(const k of Object.keys(prev))if(!(k in next))el.style[k]='';for(const [k,v] of Object.entries(next)){const value=typeof v==='number'&&v!==0&&!/^(opacity|zIndex|flex|order|fontWeight|lineHeight|gridRow|gridColumn|zoom)$/.test(k)?v+'px':v;try{el.style[k]=value;}catch(e){}}}
function syncProps(el,prev,next){
 const keys=new Set([...Object.keys(prev),...Object.keys(next)]);
 for(const key of keys){if(key==='children'||key==='key'||key==='dangerouslySetInnerHTML')continue;
  const value=next[key],before=prev[key];if(key==='ref'){if(typeof value==='function')value(el);else if(value&&typeof value==='object')value.current=el;continue;}
  if(key==='style'){if(value!==before)styleSet(el,before,value);continue;}
  if(key.startsWith('on')&&typeof value==='function'){
    const type=key.slice(2).toLowerCase();el.__handlers=el.__handlers||{};
    if(!el.__handlers[type]){const listener=(event)=>{const f=el.__handlers?.[type];if(f)f(event)};el.addEventListener(type,listener);}
    el.__handlers[type]=value;continue;
  }
  if(key.startsWith('on')&&typeof before==='function'&&!value){if(el.__handlers)el.__handlers[key.slice(2).toLowerCase()]=null;continue;}
  if(key==='className'){if(el.getAttribute('class')!==(value||''))el.setAttribute('class',value||'');continue;}
  if(key==='htmlFor'){if(value==null)el.removeAttribute('for');else el.setAttribute('for',value);continue;}
  if(key==='value'&&('value'in el)){const str=value==null?'':String(value);if(el.value!==str)el.value=str;continue;}
  if(key==='checked'){el.checked=!!value;continue;}
  if(key==='defaultValue'){if(!el.value&&value!=null)el.value=value;continue;}
  if(key==='defaultChecked'){if(value)el.checked=true;continue;}
  if(key==='disabled'||key==='required'||key==='readOnly'||key==='multiple'||key==='selected'||key==='hidden'){const attr=key==='readOnly'?'readonly':key;if(value)el.setAttribute(attr,'');else el.removeAttribute(attr);if(key in el)el[key]=!!value;continue;}
  if(key==='autoFocus'){if(value)queueMicrotask(()=>el.focus());continue;}
  if(key==='src'&&value==null)continue;
  if(key==='suppressHydrationWarning')continue;
  if(value==null||value===false){if(before!=null)el.removeAttribute(key);continue;}
  if(value===true){el.setAttribute(key,'');continue;}
  if(typeof value==='function')continue;
  const attr=key==='tabIndex'?'tabindex':key==='acceptCharset'?'accept-charset':key;
  const val=String(value);if(el.getAttribute(attr)!==val)el.setAttribute(attr,val);
 }
 if(next.dangerouslySetInnerHTML?.__html!=null&&el.innerHTML!==next.dangerouslySetInnerHTML.__html)el.innerHTML=next.dangerouslySetInnerHTML.__html;
}
function render(){
 if(!root)return;
 queuedEffects.length=0;const used=new Set();
 try{const App=requireFrom('src/App.jsx','root').default;
 const tree=expand(h(App,{}),'0',used);
 const old=mountedTree||[];mountedTree=[];
 for(let i=0;i<tree.length;i++)mountedTree.push(patch(root,old[i],tree[i],i));
 for(let i=tree.length;i<old.length;i++)patch(root,old[i],null,i);
 }catch(e){console.error('Top-level render failed:',e);root.textContent='Application failed to render: '+e.message;}
 for(const [path,ins]of instances)if(!used.has(path)){for(const hook of ins.hooks)if(hook?.cleanup)try{hook.cleanup()}catch(e){}instances.delete(path);}
 const pending=queuedEffects.splice(0);
 for(const {ins,idx,callback}of pending){if(instances.get(ins.path)!==ins)continue;try{const cleanup=callback();if(typeof cleanup==='function')ins.hooks[idx].cleanup=cleanup;}catch(e){console.error('Effect failed',ins.type.name,e);}}
}
// Use hash routes on GitHub Pages project sites, where server-side SPA rewrites
// are not supported. Keep standard clean URLs on Vercel and local web servers.
const useHashRoutes = location.protocol==='file:' || location.protocol==='about:' ||
  location.hostname.endsWith('.github.io');
function currentPath(){
 if(useHashRoutes){
   const hash=location.hash.replace(/^#/, '');
   return (hash&&hash[0]==='/'?hash.split('?')[0]:'/')||'/';
 }
 return location.pathname;
}
function navigate(to,opts={}){
 const href=typeof to==='number'?null:String(to||'/');
 if(!href){history.go(to);return;}
 if(useHashRoutes){
   const where='#'+href;
   if(opts.replace)history.replaceState(opts.state||{},'',where);
   else history.pushState(opts.state||{},'',where);
 }else{
   const url=new URL(href,location.href);
   const where=url.pathname+url.search+url.hash;
   if(opts.replace)history.replaceState(opts.state||{},'',where);
   else history.pushState(opts.state||{},'',where);
 }
 activePath=currentPath();window.scrollTo(0,0);queueRender();
}
window.addEventListener('popstate',()=>{activePath=currentPath();queueRender();});
window.addEventListener('hashchange',()=>{if(useHashRoutes){activePath=currentPath();queueRender();}});
function matchRoute(pattern,current){const parts=pattern.split('/').filter(Boolean),where=current.split('/').filter(Boolean);if(pattern==='*')return {};if(parts.length!==where.length)return null;const found={};for(let i=0;i<parts.length;i++){if(parts[i][0]===':'){found[parts[i].slice(1)]=decodeURIComponent(where[i]);continue;}if(parts[i]!==where[i])return null;}return found;}
function BrowserRouter({children}){return children;}
function Routes({children}){const list=flat([children],[]);let chosen=null;
 for(const route of list){if(!route?.props?.path)continue;const found=matchRoute(route.props.path,currentPath());if(found!==null){activeParams=found;chosen=route.props.element;break;}}
 return chosen||null;
}
function Route(){return null;}
function Navigate({to,replace}){queueMicrotask(()=>navigate(to,{replace}));return null;}
function Link({to,children,onClick,...props}){return h('a',{...props,href:useHashRoutes?'#'+to:to,onClick:(e)=>{if(onClick)onClick(e);if(!e.defaultPrevented&&!e.ctrlKey&&!e.metaKey){e.preventDefault();navigate(to);}}},children);}
function NavLink({to,className,children,...props}){const current=currentPath()===to||currentPath().startsWith(to+'/');const cls=typeof className==='function'?className({isActive:current,isPending:false}):className;return Link({to,className:cls,children,...props});}
function useSearchParams(){const params=new URLSearchParams(useHashRoutes?location.hash.split('?')[1]||'':location.search);return [params,(newP)=>navigate(currentPath()+'?'+new URLSearchParams(typeof newP==='function'?newP(params):newP))];}
const RouterShim={BrowserRouter,Routes,Route,Navigate,Link,NavLink,useNavigate:()=>navigate,useLocation:()=>({pathname:currentPath(),search:useHashRoutes?(location.hash.split('?')[1]||''):location.search,state:history.state||null}),useParams:()=>activeParams,useSearchParams};
// Inline line icons. Each icon uses a source-independent SVG drawing without external assets.
const iconPaths={
 AlertCircle:'<circle cx="12" cy="12" r="9"/><path d="M12 7v6m0 4h.01"/>',CircleAlert:'<circle cx="12" cy="12" r="9"/><path d="M12 7v6m0 4h.01"/>',Ban:'<circle cx="12" cy="12" r="9"/><path d="m5.6 5.6 12.8 12.8"/>',
 BarChart3:'<path d="M3 3v18h18M7 17v-5m5 5V7m5 10v-9"/>',Box:'<path d="m12 2 9 5v10l-9 5-9-5V7zM3 7l9 5 9-5m-9 5v10"/>',Boxes:'<path d="m12 2 5 3v6l-5 3-5-3V5zM7 5l5 3 5-3m-5 3v6M6 12l6 3v7l-6-3-5-3v-7l5 3Zm12 0-6 3v7l6-3 5-3v-7l-5 3Z"/>',
 BriefcaseBusiness:'<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18m-11-2v4h4v-4"/>',
 CheckCheck:'<path d="m18 6-7 7-3-3m14 0-10 10L2 14"/>',Circle:'<circle cx="12" cy="12" r="9"/>',CirclePlus:'<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>',
 CircleUserRound:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="9" r="3"/><path d="M6 19a7 7 0 0 1 12 0"/>',ClipboardCheck:'<rect x="5" y="5" width="14" height="17" rx="2"/><rect x="9" y="2" width="6" height="5" rx="1"/><path d="m9 15 2 2 4-4"/>',
 Database:'<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 2 18 2 18 0V5M3 12c0 3 18 3 18 0"/>',
 FileBox:'<path d="M6 2h8l5 5v15H6zM14 2v5h5m-7 4 5 3-5 3-5-3 5-3z"/>',FileClock:'<path d="M6 2h8l5 5v15H6zM14 2v5h5m-7 5v3l2 2m-6-2a6 6 0 1 0 12 0 6 6 0 0 0-12 0"/>',
 FileImage:'<path d="M6 2h8l5 5v15H6zM14 2v5h5M8 18l3-4 2 2 2-2 3 4H8Zm2-8h.01"/>',FileQuestion:'<path d="M6 2h8l5 5v15H6zM14 2v5h5m-3 6a2 2 0 0 0-4 0c0 2 2 1 2 3m0 3h.01"/>',
 FolderOpen:'<path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v2H7l-4 9V7Zm0 13 4-9h15l-4 9Z"/>',
 Globe2:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c-5 5-5 13 0 18m0-18c5 5 5 13 0 18"/>',HardDrive:'<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M2 13h20m-4 2h.01m-4 0h.01"/>',
 KeyRound:'<circle cx="8" cy="9" r="5"/><path d="m12 12 9 9m-4-4 2-2m-4 0 2-2"/>',MailOpen:'<path d="m2 10 10-7 10 7v11H2V10Zm0 1 10 7 10-7M5 8h14"/>',
 PackageCheck:'<path d="m12 2 9 5v10l-9 5-9-5V7zM3 7l9 5 9-5m-9 5v10m-4-5 2 2 4-4"/>',
 Play:'<path d="M8 4v16l13-8Z"/>',RotateCcw:'<path d="M3 11a9 9 0 1 1 3 7M3 4v7h7"/>',
 ScrollText:'<path d="M8 4h12v16H6a4 4 0 0 1-4-4V7a3 3 0 0 1 6 0v3M6 20V8M12 9h5M12 13h5M12 17h3"/>',
 Send:'<path d="m22 2-7 20-4-9-9-4L22 2Zm0 0L11 13"/>',Server:'<rect x="3" y="3" width="18" height="8" rx="2"/><rect x="3" y="13" width="18" height="8" rx="2"/><path d="M7 7h.01M7 17h.01M11 7h7M11 17h7"/>',Tag:'<path d="M3 3h8l10 10-8 8L3 11V3Zm5 5h.01"/>',
 UserCheck:'<circle cx="9" cy="8" r="4"/><path d="M2 21c0-8 14-8 14 0m2-12 2 2 3-4"/>',UserCog:'<circle cx="8" cy="8" r="4"/><path d="M2 21c0-8 12-8 12 0m5-9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0-2v2m0 6v2m-5-5h2m6 0h2"/>',UsersRound:'<circle cx="9" cy="8" r="4"/><path d="M2 21c0-8 14-8 14 0m2-14a3 3 0 0 1 0 6m2 8v-2a5 5 0 0 0-3-5"/>',
 Workflow:'<rect x="2" y="3" width="6" height="6" rx="1"/><rect x="16" y="15" width="6" height="6" rx="1"/><rect x="2" y="15" width="6" height="6" rx="1"/><path d="M8 6h5v12h3m-8 0h5"/>',XCircle:'<circle cx="12" cy="12" r="9"/><path d="m8 8 8 8m0-8-8 8"/>',

 Bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/>',
 Check:'<path d="m20 6-11 11-5-5"/>',CheckCircle2:'<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',CircleCheck:'<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',CircleX:'<circle cx="12" cy="12" r="9"/><path d="m8 8 8 8m0-8-8 8"/>',X:'<path d="M18 6 6 18M6 6l12 12"/>',Plus:'<path d="M12 5v14M5 12h14"/>',Minus:'<path d="M5 12h14"/>',
 ChevronDown:'<path d="m6 9 6 6 6-6"/>',ChevronUp:'<path d="m6 15 6-6 6 6"/>',ChevronLeft:'<path d="m15 18-6-6 6-6"/>',ChevronRight:'<path d="m9 18 6-6-6-6"/>',ArrowRight:'<path d="M5 12h14m-7-7 7 7-7 7"/>',ArrowLeft:'<path d="M19 12H5m7 7-7-7 7-7"/>',ArrowUpRight:'<path d="M7 17 17 7M8 7h9v9"/>',
 Menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',Search:'<circle cx="10.8" cy="10.8" r="7"/><path d="m16 16 5 5"/>',Eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',EyeOff:'<path d="m3 3 18 18M10.5 5.5C17 4 22 12 22 12a17 17 0 0 1-4 4m-3 2c-6 2-11-6-13-6a18 18 0 0 1 5-5"/>',
 Folder:'<path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v10H3z"/>',FolderPlus:'<path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v10H3zM12 11v6M9 14h6"/>',
 LayoutDashboard:'<rect x="3" y="3" width="7" height="8" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="15" width="7" height="6" rx="1"/>',
 ClipboardList:'<rect x="5" y="5" width="14" height="17" rx="2"/><rect x="9" y="2" width="6" height="5" rx="1"/><path d="M9 12h6m-6 4h6"/>',ListChecks:'<path d="m3 7 2 2 3-3m3 2h10M3 17l2 2 3-3m3 2h10"/>',
 History:'<path d="M3 12a9 9 0 1 0 3-6M3 3v5h5"/><path d="M12 7v5l3 2"/>',Layers3:'<path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5"/>',
 MessageCircle:'<path d="M21 11.5a9 9 0 0 1-12 8.6L3 21l.9-6A9 9 0 1 1 21 11.5Z"/>',LogOut:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5m5 5H9"/>',
 UserCircle:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="9" r="3"/><path d="M6 19c1-6 11-6 12 0"/>',UserRound:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-8 16-8 16 0"/>',Users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM20 21v-2a4 4 0 0 0-3-4m0-11a4 4 0 0 1 0 8"/>',
 Upload:'<path d="M12 16V3m-5 5 5-5 5 5M4 17v4h16v-4"/>',Download:'<path d="M12 3v13m-5-5 5 5 5-5M4 17v4h16v-4"/>',UploadCloud:'<path d="M7 18H6a4 4 0 0 1-1-8 7 7 0 0 1 13-1 5 5 0 0 1 1 9h-2M12 22V11m-4 4 4-4 4 4"/>',
 RefreshCw:'<path d="M20 8a8 8 0 0 0-14-2L3 9m0-5v5h5M4 16a8 8 0 0 0 14 2l3-3m0 5v-5h-5"/>',
 Mail:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="m2 7 10 7 10-7"/>',LockKeyhole:'<rect x="4" y="10" width="16" height="12" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v4"/>',ShieldCheck:'<path d="M12 2 20 5v6c0 6-4 9-8 11-4-2-8-5-8-11V5z"/><path d="m8 12 3 3 5-6"/>',
 Calendar:'<rect x="3" y="5" width="18" height="17" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/>',CalendarDays:'<rect x="3" y="5" width="18" height="17" rx="2"/><path d="M7 3v4M17 3v4M3 10h18M7 14h2m3 0h2m3 0h2M7 18h2m3 0h2"/>',Clock3:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 3"/>',
 FileText:'<path d="M6 2h8l5 5v15H6zM14 2v5h5M9 12h7M9 16h7"/>',FileCheck2:'<path d="M6 2h8l5 5v15H6zM14 2v5h5m-6 9 2 2 4-4"/>',FilePlus2:'<path d="M6 2h8l5 5v15H6zM14 2v5h5m-7 5v6m-3-3h6"/>',FileUp:'<path d="M6 2h8l5 5v15H6zM14 2v5h5m-7 12v-8m-3 3 3-3 3 3"/>',
 Settings:'<circle cx="12" cy="12" r="3"/><path d="M10 2h4l1 3 3 1 3-1 2 4-2 3v2l2 2-2 4-3-1-3 1-1 2h-4l-1-2-3-1-3 1-2-4 2-2v-2L1 9l2-4 3 1 3-1z"/>',
 Trash2:'<path d="M3 6h18M8 6V4h8v2m-11 0 1 16h12l1-16M10 10v8m4-8v8"/>',Pencil:'<path d="m3 21 5-1 12-12-4-4L4 16zM14 6l4 4"/>',Edit3:'<path d="m3 21 5-1 12-12-4-4L4 16zM14 6l4 4"/>',
 AlertTriangle:'<path d="m12 3 10 18H2L12 3zM12 10v4m0 3h.01"/>',Info:'<circle cx="12" cy="12" r="10"/><path d="M12 10v6M12 7h.01"/>',Activity:'<path d="M2 12h4l3-8 5 16 3-8h5"/>',
 Filter:'<path d="M3 4h18l-7 8v8l-4-2v-6Z"/>',ExternalLink:'<path d="M12 4H4v16h16v-8M13 3h8v8m0-8-11 11"/>',
 House:'<path d="m3 10 9-7 9 7v11H3zM9 21v-7h6v7"/>',Building2:'<rect x="4" y="2" width="16" height="20" rx="1"/><path d="M8 6h2m4 0h2M8 10h2m4 0h2M8 14h2m4 0h2M10 22v-5h4v5"/>',
 MoreHorizontal:'<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',Ellipsis:'<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>'
};
const iconCache={};function iconOf(name){if(iconCache[name])return iconCache[name];const path=iconPaths[name]||('<circle cx="12" cy="12" r="9"/><path d="M7 12h10m-5-5v10"/>');return iconCache[name]=function Icon({size=24,strokeWidth=2,color='currentColor',fill='none',absoluteStrokeWidth,children,...other}){
 return h('svg',{...other,width:size,height:size,viewBox:'0 0 24 24',fill,stroke:color,'stroke-width':strokeWidth,'stroke-linecap':'round','stroke-linejoin':'round','aria-hidden':'true',className:((other.className||'')+' lucide lucide-'+name.toLowerCase()).trim(),dangerouslySetInnerHTML:{__html:path}});
};}
const Icons=new Proxy({}, {get:(_target,key)=>iconOf(String(key))});
// Global module registration and generated JavaScript entry points.
window.__interiorRuntime={register,start:render,require:(name)=>requireFrom(name,'root'),navigate,rerender:queueRender};
window.h=h;window.Fragment=Fragment;
})();
