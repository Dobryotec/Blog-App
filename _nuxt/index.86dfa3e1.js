import{f as L,r as H,g as f,o as _,c as i,F as x,h as k,t as d,u as o,_ as y,a as e,b as u,w as $,d as w,n as j,i as F,j as I}from"./entry.d7ac9a83.js";import{_ as T}from"./nuxt-link.c78974a2.js";import{c as N,f as P,a as D,_ as V,u as z}from"./AddHttps.1fba8242.js";import"./vue.f36acd1f.20a63f08.js";const g=[{id:"1",category:"All",color:"black"},{id:"2",category:"World",color:"gold"},{id:"3",category:"Design",color:"green"},{id:"4",category:"Technology",color:"red"},{id:"5",category:"Culture",color:"blue"},{id:"6",category:"Health",color:"violet"},{id:"7",category:"Style",color:"pink"},{id:"8",category:"Travel",color:"purple"},{id:"9",category:"Science",color:"brown"},{id:"10",category:"Business",color:"orange"}],S=L("tabStore",()=>{const s=H("");function n(c){s.value=c}return{setSelectTab:n,selectedTab:s}}),A={class:"nav d-flex justify-content-between"},W=["onClick"],q=f({__name:"NavBar",setup(s){const n=S(),c=a=>{n.setSelectTab(a)};return(a,m)=>(_(),i("nav",A,[(_(!0),i(x,null,k(o(g),({id:t,category:r})=>(_(),i("button",{class:"post-container btn btn-link link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover",key:t,onClick:p=>c(t)},d(r),9,W))),128))]))}});const E=y(q,[["__scopeId","data-v-75214482"]]),C=s=>s.length<=80?s:s.slice(0,77)+"...",Q={class:"p-4 p-md-5 mb-4 rounded text-bg-dark"},G={class:"col-md-6 px-0"},J={class:"display-4 fst-italic title"},K={class:"lead my-3"},M={class:"lead mb-0"},O=f({__name:"Hero",props:{posts:{}},setup(s){const{posts:n}=s,{title:c,content:a,id:m}=[...n].find(({id:t})=>t==="1");return(t,r)=>{const p=T;return _(),i("div",null,[e("div",Q,[e("div",G,[e("h1",J,d(o(N)(o(c))),1),e("p",K,d(o(C)(o(a))),1),e("p",M,[u(p,{to:`/posts/${o(m)}`,class:"hero-link link fw-bold"},{default:$(()=>[w("Continue reading...")]),_:1},8,["to"])])])])])}}});const R=y(O,[["__scopeId","data-v-58283aa4"]]),U={class:"row mb-2 shadow p-3 mb-5 bg-body-tertiary rounded",style:{justifyContent:"center"}},X={class:"row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-230 position-relative"},Y={class:"col p-4 d-flex flex-column position-static"},Z={class:"mb-0 title"},tt={class:"mb-1 text-muted"},et={class:"card-text mb-auto"},ot={class:"col-auto d-none d-lg-block"},st=f({__name:"Posts",props:["posts"],setup(s){return(n,c)=>{const a=T,m=V;return _(),i("div",U,[(_(!0),i(x,null,k(s.posts,({id:t,title:r,createdAt:p,image:l,content:v})=>{var h,b;return _(),i("div",{class:"col-md-6 post-container",key:t},[e("div",X,[e("div",Y,[e("strong",{class:"d-inline-block mb-2",style:j({color:(h=o(g)[Number(t)-1])==null?void 0:h.color})},d((b=o(g)[Number(t)-1])==null?void 0:b.category),5),e("h3",Z,d(o(N)(r)),1),e("div",tt,d(o(P)(p)),1),e("p",et,d(o(C)(v)),1),u(a,{to:`/posts/${t}`,class:"link"},{default:$(()=>[w("Continue reading")]),_:2},1032,["to"])]),e("div",ot,[u(m,{src:o(D)(l),class:"bd-placeholder-img image-post",width:"200",height:"250",alt:"post"},null,8,["src"])])])])}),128))])}}});const nt=y(st,[["__scopeId","data-v-86a94012"]]),ct={class:"container"},at={class:"nav-scroller py-1 mb-2"},dt=f({__name:"index",async setup(s){let n,c;const{data:a,pending:m}=([n,c]=F(()=>z("https://62fe137ba85c52ee482f275b.mockapi.io/api/v1/posts","$pqtWcjQkdb")),n=await n,c(),n),t=a.value,r=S(),p=I(()=>r.selectedTab==="1"?t.filter(({id:l})=>l!=="1"):r.selectedTab?t.filter(({id:l})=>l===r.selectedTab):t.filter(({id:l})=>l!=="1"));return(l,v)=>{const h=E,b=R,B=nt;return _(),i("div",ct,[e("div",at,[u(h)]),u(b,{posts:o(t)},null,8,["posts"]),u(B,{posts:p.value},null,8,["posts"])])}}});export{dt as default};