import{_ as x}from"./nuxt-link.60fff512.js";import{c as b,f as L,a as N,_ as T,u as F}from"./fetch.e0900c19.js";import{f as g,o as i,c as _,a as o,t as r,u as t,b as d,w as v,d as k,F as H,r as S,n as B,g as P}from"./entry.cb7984a2.js";import"./vue.f36acd1f.5a7c277b.js";const w=e=>e.length<=80?e:e.slice(0,77)+"...",D={class:"p-4 p-md-5 mb-4 rounded text-bg-dark"},V={class:"col-md-6 px-0"},W={class:"display-4 fst-italic title"},j={class:"lead my-3"},z={class:"lead mb-0"},q=g({__name:"Hero",props:{posts:{}},setup(e){const{posts:s}=e,{title:n,content:a,id:p}=[...s].find(({id:c})=>c==="1");return(c,u)=>{const l=x;return i(),_("div",null,[o("div",D,[o("div",V,[o("h1",W,r(t(b)(t(n))),1),o("p",j,r(t(w)(t(a))),1),o("p",z,[d(l,{to:`/posts/${t(p)}`,class:"hero-link link fw-bold"},{default:v(()=>[k("Continue reading...")]),_:1},8,["to"])])])])])}}});const f=[{category:"World",color:"gold"},{category:"Design",color:"green"},{category:"Technology",color:"red"},{category:"Culture",color:"blue"},{category:"Health",color:"violet"},{category:"Style",color:"pink"},{category:"Travel",color:"purple"},{category:"Science",color:"brown"},{category:"Business",color:"orange"}],A={class:"row mb-2 shadow p-3 mb-5 bg-body-tertiary rounded",style:{justifyContent:"center"}},E={class:"row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-230 position-relative"},I={class:"col p-4 d-flex flex-column position-static"},Q={class:"mb-0 title"},G={class:"mb-1 text-muted"},J={class:"card-text mb-auto"},K={class:"col-auto d-none d-lg-block"},M=g({__name:"Posts",props:["posts"],setup(e){const{posts:s}=e,n=[...s].filter(({id:a})=>a!=="1");return(a,p)=>{const c=x,u=T;return i(),_("div",A,[(i(!0),_(H,null,S(t(n),({id:l,title:m,createdAt:h,image:$,content:C},y)=>(i(),_("div",{class:"col-md-6",key:l},[o("div",E,[o("div",I,[o("strong",{class:"d-inline-block mb-2",style:B({color:t(f)[y].color})},r(t(f)[y].category),5),o("h3",Q,r(t(b)(m)),1),o("div",G,r(t(L)(h)),1),o("p",J,r(t(w)(C)),1),d(c,{to:`/posts/${l}`,class:"link"},{default:v(()=>[k("Continue reading")]),_:2},1032,["to"])]),o("div",K,[d(u,{src:t(N)($),class:"bd-placeholder-img image-post",width:"200",height:"250",alt:"post"},null,8,["src"])])])]))),128))])}}});const O={class:"container"},Z=g({__name:"index",async setup(e){let s,n;const{data:a,pending:p}=([s,n]=P(()=>F("https://62fe137ba85c52ee482f275b.mockapi.io/api/v1/posts","$pqtWcjQkdb")),s=await s,n(),s),c=a.value;return(u,l)=>{const m=q,h=M;return i(),_("div",O,[d(m,{posts:t(c)},null,8,["posts"]),d(h,{posts:t(c)},null,8,["posts"])])}}});export{Z as default};