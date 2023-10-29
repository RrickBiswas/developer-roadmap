import{j as e}from"./jsx-runtime.6940b965.js";import{g as X}from"./browser.6245b9a5.js";import{r as n}from"./index.070054a4.js";import{a as k,d as _}from"./http.408ee04f.js";import{p as u}from"./page.2efb91d4.js";import{R as Y}from"./roadmap.98480e4e.js";import{u as ee}from"./index.2d760e66.js";import{a as se}from"./team.52a4929c.js";import{u as ae}from"./use-toast.dbd347db.js";import{U as te,S as re}from"./UpdateTeamResourceModal.c2262b8c.js";import{M as oe}from"./Modal.f242e82e.js";import{M as ie}from"./map.07b8754f.js";import{S as M}from"./shapes.18fdadc5.js";import{C as ne}from"./CreateRoadmapModal.e596f358.js";import{M as le}from"./more-vertical.fd1e64f8.js";import{u as de}from"./use-outside-click.5adb83b9.js";import{M as me,L,S as ce}from"./ShareOptionsModal.dff6012e.js";import{T as pe}from"./trash-2.c5096478.js";import{c as ue}from"./classname.fdb4949b.js";import{P as E,E as O,G as xe}from"./pen-square.d5418dc6.js";import{c as F}from"./createLucideIcon.3c9fdece.js";import{U}from"./users.9673a18c.js";import"./jwt.ab9b7b25.js";import"./index.4b590221.js";import"./index.1c368e68.js";import"./toast.5b8c89b6.js";import"./use-keydown.bb1f91bb.js";import"./close.bb7a0ac2.js";import"./index.es.ebad3893.js";import"./Spinner.799b0955.js";import"./resource-progress.8f66df23.js";/* empty css                       */import"./dom.ebb41e7a.js";import"./loader-2.7ee93c0d.js";import"./use-copy-text.77785bb1.js";import"./copy.2caf0f52.js";import"./users-2.dc7091e7.js";import"./check-circle.045c0bed.js";import"./tw-merge.ecc400cc.js";const he=F("PackageMinus",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]),fe=F("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);function ge(o){const{onClose:t,showDefaultRoadmapsModal:i,showCreateCustomRoadmapModal:d}=o;return e.jsxs(oe,{onClose:t,bodyClassName:"p-4",children:[e.jsx("h2",{className:"mb-0.5 text-left text-2xl font-semibold",children:"Pick an Option"}),e.jsx("p",{className:"text-left text-sm text-gray-500 mb-4",children:"Choose from default roadmaps or create from scratch."}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("button",{className:"text-base flex items-center rounded-md border border-gray-300 p-2 px-4 text-left font-medium hover:bg-gray-100",onClick:i,children:[e.jsx(ie,{className:"mr-2 inline-block",size:20}),"Use a Default Roadmap"]}),e.jsxs("button",{className:"text-base flex items-center rounded-md border border-gray-300 p-2 px-4 text-left font-medium hover:bg-gray-100",onClick:d,children:[e.jsx(M,{className:"mr-2 inline-block",size:20}),"Create from Scratch"]})]})]})}function I(o){const{onDelete:t,onUpdateSharing:i,onCustomize:d}=o,m=n.useRef(null),[c,l]=n.useState(!1);return de(m,()=>{l(!1)}),e.jsxs("div",{className:"relative",children:[e.jsx("button",{disabled:!1,onClick:()=>l(!c),className:"hidden items-center opacity-60 transition-opacity hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-30 sm:flex",children:e.jsx("img",{alt:"menu",src:le.src,className:"h-4 w-4"})}),e.jsxs("button",{disabled:!1,onClick:()=>l(!c),className:"flex items-center gap-1 rounded-md border border-gray-300 bg-white px-2 py-1.5 text-xs hover:bg-gray-50 focus:outline-none sm:hidden",children:[e.jsx(me,{size:14}),"Options"]}),c&&e.jsx("div",{ref:m,className:"align-right absolute right-auto top-full z-50 mt-1 w-[140px] rounded-md bg-slate-800 px-2 py-2 text-white shadow-md sm:right-0",children:e.jsxs("ul",{children:[i&&e.jsx("li",{children:e.jsxs("button",{onClick:()=>{l(!1),i()},className:"flex w-full cursor-pointer items-center rounded p-2 text-sm font-medium text-slate-100 hover:bg-slate-700",children:[e.jsx(L,{size:14,className:"mr-2"}),"Sharing"]})}),d&&e.jsx("li",{children:e.jsxs("button",{onClick:()=>{l(!1),d()},className:"flex w-full cursor-pointer items-center rounded p-2 text-sm font-medium text-slate-100 hover:bg-slate-700",children:[e.jsx(M,{size:14,className:"mr-2"}),"Customize"]})}),t&&e.jsx("li",{children:e.jsxs("button",{onClick:()=>{l(!1),t()},className:"flex w-full cursor-pointer items-center rounded p-2 text-sm font-medium text-slate-100 hover:bg-slate-700",children:[e.jsx(pe,{size:14,className:"mr-2"}),"Delete"]})})]})})]})}function is(){const{t:o}=X(),t=ee(se),i=ae(),[d,m]=n.useState(!0),[c,l]=n.useState(!1),[V,S]=n.useState(!1),[G,v]=n.useState(!1),[w,C]=n.useState(""),[f,q]=n.useState(),[g,x]=n.useState([]),[B,Z]=n.useState([]),[p,R]=n.useState(null);async function T(){const{error:s,response:a}=await k("/pages.json");if(s){i.error(s.message||"Something went wrong");return}if(!a)return[];const r=a.filter(N=>N.group==="Roadmaps").sort((N,W)=>N.title==="Android"?1:N.title.localeCompare(W.title));return Z(r),a}async function H(s){const{response:a,error:r}=await k(`https://api.roadmap.sh/v1-get-team/${s}`);if(r||!a){i.error("Error loading team"),window.location.href="/account";return}q(a)}async function A(s){const{error:a,response:r}=await k(`https://api.roadmap.sh/v1-get-team-resource-config/${s}`);if(a||!Array.isArray(r)){console.error(a);return}x(r)}n.useEffect(()=>{o&&(m(!0),Promise.all([H(o),A(o),T()]).finally(()=>{u.set(""),m(!1)}))},[o]);async function J(s){if(!f?._id)return;i.loading("Deleting roadmap"),u.set("Deleting roadmap from team");const{error:a,response:r}=await _(`https://api.roadmap.sh/v1-delete-team-resource-config/${f._id}`,{resourceId:s,resourceType:"roadmap"});if(a||!r){i.error(a?.message||"Something went wrong");return}i.success("Roadmap removed"),x(r)}async function P(s){if(!o)return;i.loading("Adding roadmap"),u.set("Adding roadmap"),m(!0);const{error:a,response:r}=await _(`https://api.roadmap.sh/v1-update-team-resource-config/${o}`,{teamId:o,resourceId:s,resourceType:"roadmap",removed:[]});if(a||!r){i.error(a?.message||"Error adding roadmap");return}x(r),i.success("Roadmap added")}async function b(s){u.set("Removing roadmap"),J(s).finally(()=>{u.set("")})}if(n.useEffect(()=>{function s(a){const{roadmapId:r}=a?.detail;r&&(T().finally(()=>{}),P(r).finally(()=>{u.set("")}))}return window.addEventListener("custom-roadmap-created",s),()=>{window.removeEventListener("custom-roadmap-created",s)}},[]),!f)return null;const z=c&&e.jsx(ge,{onClose:()=>l(!1),showDefaultRoadmapsModal:()=>{S(!0),l(!1)},showCreateCustomRoadmapModal:()=>{v(!0),l(!1)}}),$=V&&e.jsx(re,{onClose:()=>S(!1),teamResourceConfig:g,allRoadmaps:B,teamId:o,onRoadmapAdd:s=>{P(s).finally(()=>{u.set("")})},onRoadmapRemove:s=>{confirm("Are you sure you want to remove this roadmap?")&&b(s).finally(()=>{})}}),D=G&&e.jsx(ne,{teamId:o,onClose:()=>{v(!1)},onCreated:()=>{A(o).finally(()=>null),v(!1)}}),y=g.filter(s=>s.isCustomResource&&!s.topics),j=g.filter(s=>s.isCustomResource&&s.topics),h=g.filter(s=>!s.isCustomResource);if(!(j.length>0||h.length>0||y.length>0&&t)&&!d)return e.jsxs("div",{className:"flex flex-col items-center p-4 py-20",children:[z,$,D,e.jsx("img",{alt:"roadmap",src:Y.src,className:"mb-4 h-24 w-24 opacity-10"}),e.jsx("h3",{className:"mb-1 text-2xl font-bold text-gray-900",children:"No roadmaps"}),e.jsx("p",{className:"text-base text-gray-500",children:t?"Add a roadmap to start tracking your team":"Ask your team admin to add some roadmaps"}),t&&e.jsx("button",{className:"mt-4 rounded-lg bg-black px-4 py-2 font-medium text-white hover:bg-gray-900",onClick:()=>l(!0),children:"Add roadmap"})]});const K=w&&e.jsx(te,{onClose:()=>C(""),resourceId:w,resourceType:"roadmap",teamId:f?._id,setTeamResourceConfig:x,defaultRemovedItems:h.find(s=>s.resourceId===w)?.removed||[]}),Q=p&&e.jsx(ce,{description:p.description,visibility:p.visibility,sharedTeamMemberIds:p.sharedTeamMemberIds,sharedFriendIds:p.sharedFriendIds,teamId:o,roadmapId:p.resourceId,onShareSettingsUpdate:s=>{x(a=>a.map(r=>r.resourceId!==p.resourceId?r:{...r,...s}))},onClose:()=>R(null)});return e.jsxs("div",{children:[z,$,D,K,Q,t&&y.length>0&&e.jsxs("div",{className:"mb-5",children:[e.jsx("div",{className:"mb-2 flex items-center justify-between",children:e.jsxs("h3",{className:"flex w-full items-center justify-between text-xs uppercase text-gray-400",children:[e.jsx("span",{className:"flex",children:"Placeholder Roadmaps"}),e.jsxs("span",{className:"normal-case",children:["Total ",y.length," roadmap(s)"]})]})}),e.jsx("div",{className:"flex flex-col divide-y rounded-md border",children:y.map(s=>e.jsxs("div",{className:"grid grid-cols-1 p-2.5 sm:grid-cols-[auto_173px]",children:[e.jsxs("div",{className:"mb-3 grid sm:mb-0",children:[e.jsx("p",{className:"mb-1.5 truncate text-base font-medium leading-tight text-black",children:s.title}),e.jsx("span",{className:"text-xs italic leading-none text-gray-400/60",children:"Placeholder roadmap"})]}),t&&e.jsxs("div",{className:"flex items-center justify-start gap-2 sm:justify-end",children:[e.jsx(I,{onUpdateSharing:()=>{R(s)},onDelete:()=>{confirm("Are you sure you want to remove this roadmap?")&&b(s.resourceId).finally(()=>{})}}),e.jsxs("a",{href:`https://draw.roadmap.sh/${s.resourceId}`,className:"flex gap-2 rounded-md border border-gray-300 bg-white px-2 py-1.5 text-xs hover:bg-gray-50 focus:outline-none",target:"_blank",children:[e.jsx(E,{className:"inline-block h-4 w-4"}),"Create Roadmap"]})]})]},s.resourceId))})]}),j.length>0&&e.jsxs("div",{className:"mb-5",children:[e.jsx("div",{className:"mb-2 flex items-center justify-between",children:e.jsxs("h3",{className:"flex w-full items-center justify-between text-xs uppercase text-gray-400",children:[e.jsx("span",{className:"flex",children:"Custom Roadmaps"}),e.jsxs("span",{className:"normal-case",children:["Total ",j.length," roadmap(s)"]})]})}),e.jsx("div",{className:"flex flex-col divide-y rounded-md border",children:j.map(s=>{const a=`https://draw.roadmap.sh/${s.resourceId}`;return e.jsxs("div",{className:ue("grid grid-cols-1 p-2.5",t?"sm:grid-cols-[auto_172px]":"sm:grid-cols-[auto_110px]"),children:[e.jsxs("div",{className:"mb-3 grid grid-cols-1 sm:mb-0",children:[e.jsx("p",{className:"mb-1.5 truncate text-base font-medium leading-tight text-black",children:s.title}),e.jsxs("span",{className:"flex items-center text-xs leading-none text-gray-400",children:[e.jsx(ye,{visibility:s.visibility,sharedTeamMemberIds:s.sharedTeamMemberIds,sharedFriendIds:s.sharedFriendIds}),e.jsx("span",{className:"mx-2 font-semibold",children:"·"}),e.jsx(M,{size:16,className:"mr-1 inline-block h-4 w-4"}),s.topics," topic"]})]}),e.jsxs("div",{className:"mr-1 flex items-center justify-start sm:justify-end",children:[t&&e.jsx(I,{onUpdateSharing:()=>{R(s)},onCustomize:()=>{window.open(a,"_blank")},onDelete:()=>{confirm("Are you sure you want to remove this roadmap?")&&b(s.resourceId).finally(()=>{})}}),e.jsxs("a",{href:`/r?id=${s.resourceId}`,className:"ml-2 flex items-center gap-2 rounded-md border border-gray-300 bg-white px-2 py-1.5 text-xs hover:bg-gray-50 focus:outline-none",target:"_blank",children:[e.jsx(O,{className:"inline-block h-4 w-4"}),"Visit"]}),t&&e.jsxs("a",{href:a,className:"ml-2 flex items-center gap-2 rounded-md border border-gray-800 bg-gray-900 px-2.5 py-1.5 text-xs text-white hover:bg-gray-800 focus:outline-none",target:"_blank",children:[e.jsx(E,{className:"inline-block h-4 w-4"}),"Edit"]})]})]},s.resourceId)})})]}),h.length>0&&e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 flex items-center justify-between",children:e.jsxs("h3",{className:"flex w-full items-center justify-between text-xs uppercase text-gray-400",children:[e.jsx("span",{className:"flex",children:"Default Roadmaps"}),e.jsxs("span",{className:"normal-case",children:["Total ",h.length," roadmap(s)"]})]})}),e.jsx("div",{className:"flex flex-col divide-y rounded-md border",children:h.map(s=>e.jsxs("div",{className:"grid grid-cols-1 p-3 sm:grid-cols-[auto_110px]",children:[e.jsxs("div",{className:"mb-3 grid grid-cols-1 sm:mb-0",children:[e.jsx("p",{className:"mb-1.5 truncate text-base font-medium leading-tight text-black",children:s.title}),e.jsxs("span",{className:"flex items-center text-xs leading-none text-gray-400",children:[s?.removed?.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(he,{size:16,className:"mr-1 inline-block h-4 w-4"}),s.removed.length," topics removed"]}),!s?.removed?.length&&e.jsxs(e.Fragment,{children:[e.jsx(fe,{size:16,className:"mr-1 inline-block h-4 w-4"}),"No changes made"]})]})]}),e.jsxs("div",{className:"mr-1 flex items-center justify-start sm:justify-end",children:[t&&e.jsx(I,{onCustomize:()=>{C(s.resourceId)},onDelete:()=>{confirm("Are you sure you want to remove this roadmap?")&&b(s.resourceId).finally(()=>{})}}),e.jsxs("a",{href:`/${s.resourceId}`,className:"ml-2 flex items-center gap-2 rounded-md border border-gray-300 bg-white px-2 py-1.5 text-xs hover:bg-gray-50 focus:outline-none",target:"_blank",children:[e.jsx(O,{className:"inline-block h-4 w-4"}),"Visit"]})]})]},s.resourceId))})]}),t&&e.jsx("div",{className:"mt-5",children:e.jsx("button",{className:"block w-full rounded-md border border-dashed border-gray-300 py-2 text-sm transition-colors hover:border-gray-600 hover:bg-gray-50 focus:outline-0",onClick:()=>l(!0),children:"+ Add new Roadmap"})})]})}const be={public:{icon:xe,label:"Public"},me:{icon:L,label:"Only me"},team:{icon:U,label:"Team Member(s)"},friends:{icon:U,label:"Friend(s)"}};function ye(o){const{visibility:t,sharedTeamMemberIds:i=[],sharedFriendIds:d=[]}=o,{label:m,icon:c}=be[t];return e.jsxs("span",{className:"inline-flex items-center gap-1.5 whitespace-nowrap text-xs font-normal",children:[e.jsx(c,{className:"inline-block h-3 w-3"}),e.jsxs("div",{className:"flex items-center",children:[t==="team"&&i?.length>0&&e.jsx("span",{className:"mr-1",children:i.length}),t==="friends"&&d?.length>0&&e.jsx("span",{className:"mr-1",children:d.length}),m]})]})}export{is as TeamRoadmaps};
