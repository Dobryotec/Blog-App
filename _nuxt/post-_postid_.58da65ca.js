import{b as D,d as w,_ as x,u as S,e as I,a as B,c as N}from"./useData.7d0691bd.js";import{j as H,k as T,l as V,m as z,a as g,h as k,o as p,c as f,F as A,b as E,e as t,f as b,t as r,u as o,_ as y,p as F,q as P,s as j,g as K,v as L,x as M,y as R,z as O}from"./entry.285c763b.js";const q="$s";function U(...e){const s=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(s);const[a,c]=e;if(!a||typeof a!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+a);if(c!==void 0&&typeof c!="function")throw new Error("[nuxt] [useState] init must be a function: "+c);const l=q+a,i=V(),_=H(i.payload.state,l);if(_.value===void 0&&c){const n=c();if(T(n))return i.payload.state[l]=n,n;_.value=n}return _}const G=async e=>{const{data:s}=await D(e,"$OKguzw21Ij");if(!s.value)throw z({statusCode:404,statusMessage:"Comments not found",fatal:!0});return s},J={class:"row mb-2 rounded"},Q={class:"row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative",style:{height:"140px"}},W={class:"col-auto d-none d-sm-block"},X={class:"col p-4 d-flex flex-column position-static"},Y={class:"mb-0"},Z={class:"mb-1 text-muted"},tt={class:"card-text mb-auto"},et=g({__name:"Comments",async setup(e){let s,a;const l=([s,a]=k(()=>G("https://62fe137ba85c52ee482f275b.mockapi.io/api/v1/comments")),s=await s,a(),s).value;return(i,_)=>{const n=x;return p(),f("div",J,[(p(!0),f(A,null,E(o(l),({id:h,name:d,createdAt:u,avatar:m,comment:v})=>(p(),f("div",{class:"col-md-6",key:h},[t("div",Q,[t("div",W,[b(n,{src:m,class:"bd-placeholder-img image",width:"100",height:"140"},null,8,["src"])]),t("div",X,[t("h3",Y,r(d),1),t("div",Z,r(("formattedDate"in i?i.formattedDate:o(w))(u)),1),t("p",tt,r(v),1)])])]))),128))])}}});const st=y(et,[["__scopeId","data-v-c504d317"]]),ot=e=>(R("data-v-3604a5ca"),e=e(),O(),e),at={class:"row g-0 row-gap-5 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-230 position-relative",style:{justifyContent:"center"}},nt={class:"col-auto d-none py-4 ps-md-4 d-md-block"},ct={class:"col p-4 d-flex flex-column position-static"},it=ot(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-left",viewBox:"0 0 16 16"},[t("path",{"fill-rule":"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"})],-1)),dt={class:"mb-0 title"},rt={class:"mb-1 text-muted"},lt={class:"card-text mb-5 text"},_t=g({__name:"PostDetails",async setup(e){let s,a;const{postid:c}=F().params,l=([s,a]=k(()=>S(`https://62fe137ba85c52ee482f275b.mockapi.io/api/v1/posts/${c}`,!0)),s=await s,a(),s),{image:i,createdAt:_,title:n,content:h}=l.value,d=U("open",()=>!1);return P(()=>{d.value=!1}),I({title:`My Blog | ${n}`}),(u,m)=>{const v=x,$=st;return p(),f("div",null,[t("div",at,[t("div",nt,[b(v,{src:o(B)(o(i)),class:"bd-placeholder-img image",width:"400",height:"400"},null,8,["src"])]),t("div",ct,[t("button",{class:"icon-link icon-link-hover btn mb-4 btn-back fs-5",onClick:m[0]||(m[0]=C=>("navigateTo"in u?u.navigateTo:o(j))("/"))},[it,K(" Back ")]),t("h3",dt,r(o(N)(o(n))),1),t("div",rt,r(("formattedDate"in u?u.formattedDate:o(w))(o(_))),1),t("p",lt,r(o(h)),1),t("button",{type:"button",onClick:m[1]||(m[1]=C=>d.value=!o(d)),class:"btn btn-primary"},r(o(d)?"Hide":"Show")+" comments ",1)]),o(d)?(p(),L($,{key:0})):M("",!0)])])}}});const ut=y(_t,[["__scopeId","data-v-3604a5ca"]]),mt={},pt={style:{flex:1}};function ft(e,s){const a=ut;return p(),f("div",pt,[b(a)])}const bt=y(mt,[["render",ft]]);export{bt as default};