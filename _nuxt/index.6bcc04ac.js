import{_ as x}from"./nuxt-link.9cba80e7.js";import{f as g,o as i,c as _,a as t,t as r,u as o,b as d,w as b,d as v,F as C,r as L,n as N,g as T}from"./entry.1cbf3a3e.js";import{f as H,a as S,_ as B,u as F}from"./fetch.fe2b4b4c.js";import"./vue.f36acd1f.0bab2468.js";const k=e=>e.length<=80?e:e.slice(0,77)+"...",P={class:"p-4 p-md-5 mb-4 rounded text-bg-dark"},D={class:"col-md-6 px-0"},V={class:"display-4 fst-italic title"},W={class:"lead my-3"},j={class:"lead mb-0"},q=g({__name:"Hero",props:{posts:{}},setup(e){const{posts:s}=e,{title:n,content:a,id:p}=[...s].find(({id:c})=>c==="1");return(c,u)=>{const l=x;return i(),_("div",null,[t("div",P,[t("div",D,[t("h1",V,r(o(n)),1),t("p",W,r(o(k)(o(a))),1),t("p",j,[d(l,{to:`/posts/${o(p)}`,class:"hero-link link fw-bold"},{default:b(()=>[v("Continue reading...")]),_:1},8,["to"])])])])])}}});const f=[{category:"World",color:"gold"},{category:"Design",color:"green"},{category:"Technology",color:"red"},{category:"Culture",color:"blue"},{category:"Health",color:"violet"},{category:"Style",color:"pink"},{category:"Travel",color:"purple"},{category:"Science",color:"brown"},{category:"Business",color:"orange"}],z={class:"row mb-2 shadow p-3 mb-5 bg-body-tertiary rounded",style:{justifyContent:"center"}},A={class:"row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-230 position-relative"},E={class:"col p-4 d-flex flex-column position-static"},I={class:"mb-0 title"},Q={class:"mb-1 text-muted"},G={class:"card-text mb-auto"},J={class:"col-auto d-none d-lg-block"},K=g({__name:"Posts",props:["posts"],setup(e){const{posts:s}=e,n=[...s].filter(({id:a})=>a!=="1");return(a,p)=>{const c=x,u=B;return i(),_("div",z,[(i(!0),_(C,null,L(o(n),({id:l,title:m,createdAt:h,image:w,content:$},y)=>(i(),_("div",{class:"col-md-6",key:l},[t("div",A,[t("div",E,[t("strong",{class:"d-inline-block mb-2",style:N({color:o(f)[y].color})},r(o(f)[y].category),5),t("h3",I,r(m),1),t("div",Q,r(o(H)(h)),1),t("p",G,r(o(k)($)),1),d(c,{to:`/posts/${l}`,class:"link"},{default:b(()=>[v("Continue reading")]),_:2},1032,["to"])]),t("div",J,[d(u,{src:o(S)(w),class:"bd-placeholder-img image-post",width:"200",height:"250",alt:"post"},null,8,["src"])])])]))),128))])}}});const M={class:"container"},Y=g({__name:"index",async setup(e){let s,n;const{data:a,pending:p}=([s,n]=T(()=>F("https://62fe137ba85c52ee482f275b.mockapi.io/api/v1/posts","$pqtWcjQkdb")),s=await s,n(),s),c=a.value;return(u,l)=>{const m=q,h=K;return i(),_("div",M,[d(m,{posts:o(c)},null,8,["posts"]),d(h,{posts:o(c)},null,8,["posts"])])}}});export{Y as default};
