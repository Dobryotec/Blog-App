import{u as y,a as g,_ as w}from"./fetch.4835a095.js";import{f as v,o as _,c as u,F as D,r as N,a as t,b,t as r,u as o,h as B,i as S,j as T,k as x,g as A,l as V,m as K,d as P,q as R,s as E}from"./entry.ab0ddc4b.js";import"./vue.f36acd1f.49242b9d.js";const F={class:"row mb-2 rounded"},H={class:"row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-230 position-relative"},I={class:"col-auto d-none d-lg-block"},L={class:"col p-4 d-flex flex-column position-static"},j={class:"mb-0"},q={class:"mb-1 text-muted"},z={class:"card-text mb-auto"},U=v({__name:"Comments",setup(n){const{data:a}=y("https://62fe137ba85c52ee482f275b.mockapi.io/api/v1/comments","$qcyLnnUKk0");return(e,s)=>{const d=w;return _(),u("div",F,[(_(!0),u(D,null,N(o(a),({id:m,name:c,createdAt:i,avatar:h,comment:l})=>(_(),u("div",{class:"col-md-6",key:m},[t("div",H,[t("div",I,[b(d,{src:h,class:"bd-placeholder-img image",width:"100",height:"150"},null,8,["src"])]),t("div",L,[t("h3",j,r(c),1),t("div",q,r(("formattedDate"in e?e.formattedDate:o(g))(i)),1),t("p",z,r(l),1)])])]))),128))])}}});const M="$s";function O(...n){const a=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(a);const[e,s]=n;if(!e||typeof e!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+e);if(s!==void 0&&typeof s!="function")throw new Error("[nuxt] [useState] init must be a function: "+s);const d=M+e,m=T(),c=B(m.payload.state,d);if(c.value===void 0&&s){const i=s();if(S(i))return m.payload.state[d]=i,i;c.value=i}return c}const Z={class:"row g-0 row-gap-5 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-230 position-relative",style:{justifyContent:"center"}},G={class:"col-auto d-none py-4 ps-4 d-lg-block"},J={class:"col p-4 d-flex flex-column position-static"},Q=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-left",viewBox:"0 0 16 16"},[t("path",{"fill-rule":"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"})],-1),W={class:"mb-0 title"},X={class:"mb-1 text-muted"},Y={class:"card-text mb-5 text"},tt=v({__name:"PostDetails",async setup(n){let a,e;const{postid:s}=x().params,{data:d}=([a,e]=A(()=>y(`https://62fe137ba85c52ee482f275b.mockapi.io/api/v1/posts/${s}`,"$ARyNKzITZC")),a=await a,e(),a),{image:m,createdAt:c,title:i,content:h}=d.value,l=O("open",()=>!1);return V(()=>{l.value=!1}),(p,f)=>{const k=w,$=U;return _(),u("div",null,[t("div",Z,[t("div",G,[b(k,{src:o(m),class:"bd-placeholder-img image",width:"400",height:"400"},null,8,["src"])]),t("div",J,[t("button",{class:"icon-link icon-link-hover btn mb-4 btn-back fs-5",onClick:f[0]||(f[0]=C=>("navigateTo"in p?p.navigateTo:o(K))("/"))},[Q,P(" Back ")]),t("h3",W,r(o(i)),1),t("div",X,r(("formattedDate"in p?p.formattedDate:o(g))(o(c))),1),t("p",Y,r(o(h)),1),t("button",{type:"button",onClick:f[1]||(f[1]=C=>l.value=!o(l)),class:"btn btn-primary"},r(o(l)?"Hide":"Show")+" comments ",1)]),o(l)?(_(),R($,{key:0})):E("",!0)])])}}});const et={style:{flex:1}},at=v({__name:"[postid]",setup(n){return x().params,(a,e)=>{const s=tt;return _(),u("div",et,[b(s)])}}});export{at as default};