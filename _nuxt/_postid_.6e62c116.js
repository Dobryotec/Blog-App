import{u as y,b as x,_ as w,a as S,c as I}from"./AddHttps.9c229726.js";import{k as N,l as B,m as T,g as v,o as p,c as m,F as A,h as H,a as t,b,t as l,u as o,_ as g,q as k,i as V,s as F,v as K,d as L,x as P,y as R,p as z,e as E}from"./entry.75f8e21a.js";import{u as q}from"./vue.f36acd1f.dc58a020.js";const U="$s";function j(...e){const a=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(a);const[s,n]=e;if(!s||typeof s!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+s);if(n!==void 0&&typeof n!="function")throw new Error("[nuxt] [useState] init must be a function: "+n);const r=U+s,_=T(),i=N(_.payload.state,r);if(i.value===void 0&&n){const c=n();if(B(c))return _.payload.state[r]=c,c;i.value=c}return i}const M={class:"row mb-2 rounded"},O={class:"row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-230 position-relative"},Z={class:"col-auto d-none d-lg-block"},G={class:"col p-4 d-flex flex-column position-static"},J={class:"mb-0"},Q={class:"mb-1 text-muted"},W={class:"card-text mb-auto"},X=v({__name:"Comments",setup(e){const{data:a}=y("https://62fe137ba85c52ee482f275b.mockapi.io/api/v1/comments","$qcyLnnUKk0");return(s,n)=>{const r=w;return p(),m("div",M,[(p(!0),m(A,null,H(o(a),({id:_,name:i,createdAt:c,avatar:h,comment:d})=>(p(),m("div",{class:"col-md-6",key:_},[t("div",O,[t("div",Z,[b(r,{src:h,class:"bd-placeholder-img image",width:"100",height:"150"},null,8,["src"])]),t("div",G,[t("h3",J,l(i),1),t("div",Q,l(("formattedDate"in s?s.formattedDate:o(x))(c)),1),t("p",W,l(d),1)])])]))),128))])}}});const Y=g(X,[["__scopeId","data-v-87a63121"]]),tt=e=>(z("data-v-8a1bc7c2"),e=e(),E(),e),et={class:"row g-0 row-gap-5 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-230 position-relative",style:{justifyContent:"center"}},ot={class:"col-auto d-none py-4 ps-4 d-lg-block"},st={class:"col p-4 d-flex flex-column position-static"},nt=tt(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-left",viewBox:"0 0 16 16"},[t("path",{"fill-rule":"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"})],-1)),at={class:"mb-0 title"},ct={class:"mb-1 text-muted"},it={class:"card-text mb-5 text"},dt=v({__name:"PostDetails",async setup(e){let a,s;const{postid:n}=k().params,{data:r}=([a,s]=V(()=>y(`https://62fe137ba85c52ee482f275b.mockapi.io/api/v1/posts/${n}`,"$ARyNKzITZC")),a=await a,s(),a),{image:_,createdAt:i,title:c,content:h}=r.value,d=j("open",()=>!1);return F(()=>{d.value=!1}),q({title:c}),(u,f)=>{const $=w,C=Y;return p(),m("div",null,[t("div",et,[t("div",ot,[b($,{src:o(S)(o(_)),class:"bd-placeholder-img image",width:"400",height:"400"},null,8,["src"])]),t("div",st,[t("button",{class:"icon-link icon-link-hover btn mb-4 btn-back fs-5",onClick:f[0]||(f[0]=D=>("navigateTo"in u?u.navigateTo:o(K))("/"))},[nt,L(" Back ")]),t("h3",at,l(o(I)(o(c))),1),t("div",ct,l(("formattedDate"in u?u.formattedDate:o(x))(o(i))),1),t("p",it,l(o(h)),1),t("button",{type:"button",onClick:f[1]||(f[1]=D=>d.value=!o(d)),class:"btn btn-primary"},l(o(d)?"Hide":"Show")+" comments ",1)]),o(d)?(p(),P(C,{key:0})):R("",!0)])])}}});const lt=g(dt,[["__scopeId","data-v-8a1bc7c2"]]),rt={style:{flex:1}},ut=v({__name:"[postid]",setup(e){return k().params,(a,s)=>{const n=lt;return p(),m("div",rt,[b(n)])}}});export{ut as default};