import{_ as x}from"./nuxt-link.77da0f3d.js";import{f as g,o as i,c as _,a as t,t as r,u as o,b as d,w as b,d as v,F as C,r as L,n as N,g as T}from"./entry.ab0ddc4b.js";import{f as S,_ as B,u as F}from"./fetch.4835a095.js";import"./vue.f36acd1f.49242b9d.js";const k=s=>s.length<=80?s:s.slice(0,77)+"...",H={class:"p-4 p-md-5 mb-4 rounded text-bg-dark"},P={class:"col-md-6 px-0"},D={class:"display-4 fst-italic title"},V={class:"lead my-3"},W={class:"lead mb-0"},j=g({__name:"Hero",props:{posts:{}},setup(s){const{posts:e}=s,{title:n,content:a,id:p}=[...e].find(({id:c})=>c==="1");return(c,u)=>{const l=x;return i(),_("div",null,[t("div",H,[t("div",P,[t("h1",D,r(o(n)),1),t("p",V,r(o(k)(o(a))),1),t("p",W,[d(l,{to:`/posts/${o(p)}`,class:"hero-link link fw-bold"},{default:b(()=>[v("Continue reading...")]),_:1},8,["to"])])])])])}}});const f=[{category:"World",color:"gold"},{category:"Design",color:"green"},{category:"Technology",color:"red"},{category:"Culture",color:"blue"},{category:"Health",color:"violet"},{category:"Style",color:"pink"},{category:"Travel",color:"purple"},{category:"Science",color:"brown"},{category:"Business",color:"orange"}],q={class:"row mb-2 shadow p-3 mb-5 bg-body-tertiary rounded",style:{justifyContent:"center"}},z={class:"row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-230 position-relative"},A={class:"col p-4 d-flex flex-column position-static"},E={class:"mb-0 title"},I={class:"mb-1 text-muted"},Q={class:"card-text mb-auto"},G={class:"col-auto d-none d-lg-block"},J=g({__name:"Posts",props:["posts"],setup(s){const{posts:e}=s,n=[...e].filter(({id:a})=>a!=="1");return(a,p)=>{const c=x,u=B;return i(),_("div",q,[(i(!0),_(C,null,L(o(n),({id:l,title:m,createdAt:h,image:w,content:$},y)=>(i(),_("div",{class:"col-md-6",key:l},[t("div",z,[t("div",A,[t("strong",{class:"d-inline-block mb-2",style:N({color:o(f)[y].color})},r(o(f)[y].category),5),t("h3",E,r(m),1),t("div",I,r(o(S)(h)),1),t("p",Q,r(o(k)($)),1),d(c,{to:`/posts/${l}`,class:"link"},{default:b(()=>[v("Continue reading")]),_:2},1032,["to"])]),t("div",G,[d(u,{src:w,class:"bd-placeholder-img image-post",width:"200",height:"250",alt:"post"},null,8,["src"])])])]))),128))])}}});const K={class:"container"},X=g({__name:"index",async setup(s){let e,n;const{data:a,pending:p}=([e,n]=T(()=>F("https://62fe137ba85c52ee482f275b.mockapi.io/api/v1/posts","$pqtWcjQkdb")),e=await e,n(),e),c=a.value;return(u,l)=>{const m=j,h=J;return i(),_("div",K,[d(m,{posts:o(c)},null,8,["posts"]),d(h,{posts:o(c)},null,8,["posts"])])}}});export{X as default};