import{S as a,i as e,s as l,e as s,l as t,c,a as r,d as n,m as i,b as h,f as o,g as f,t as g,p,q as u,r as m,n as d}from"./client.ba54b288.js";function v(a,e,l){const s=a.slice();return s[7]=e[l],s}function E(a){let e,l,g,p,u,d,E,$,j,A,k,N=a[4]>1&&P(a),x=a[3].slice(a[4]-5>=1?a[4]-5:0,a[4]+6),C=[];for(let e=0;e<x.length;e+=1)C[e]=b(v(a,x,e));let y=a[4]<a[3].length&&I(a),V=a[4]+1>a[3].length&&L(a);return{c(){e=s("nav"),l=s("ul"),g=s("li"),p=s("a"),u=s("i"),$=t(),N&&N.c(),j=t();for(let a=0;a<C.length;a+=1)C[a].c();A=t(),y&&y.c(),k=t(),V&&V.c(),this.h()},l(a){e=c(a,"NAV",{"aria-label":!0});var s=r(e);l=c(s,"UL",{class:!0});var t=r(l);g=c(t,"LI",{class:!0});var h=r(g);p=c(h,"A",{href:!0,class:!0});var o=r(p);u=c(o,"I",{class:!0}),r(u).forEach(n),o.forEach(n),h.forEach(n),$=i(t),N&&N.l(t),j=i(t);for(let a=0;a<C.length;a+=1)C[a].l(t);A=i(t),y&&y.l(t),k=i(t),V&&V.l(t),t.forEach(n),s.forEach(n),this.h()},h(){h(u,"class","fa fa-angle-left"),h(p,"href",d=a[2]+"?page=1"),h(p,"class","page-link"),h(g,"class",E="page-item "+(1===a[4]?"active":"")),h(l,"class","pagination pagination-template d-flex justify-content-center"),h(e,"aria-label","Page navigation example")},m(a,s){o(a,e,s),f(e,l),f(l,g),f(g,p),f(p,u),f(l,$),N&&N.m(l,null),f(l,j);for(let a=0;a<C.length;a+=1)C[a].m(l,null);f(l,A),y&&y.m(l,null),f(l,k),V&&V.m(l,null)},p(a,e){if(4&e&&d!==(d=a[2]+"?page=1")&&h(p,"href",d),16&e&&E!==(E="page-item "+(1===a[4]?"active":""))&&h(g,"class",E),a[4]>1?N?N.p(a,e):((N=P(a)).c(),N.m(l,j)):N&&(N.d(1),N=null),28&e){let s;for(x=a[3].slice(a[4]-5>=1?a[4]-5:0,a[4]+6),s=0;s<x.length;s+=1){const t=v(a,x,s);C[s]?C[s].p(t,e):(C[s]=b(t),C[s].c(),C[s].m(l,A))}for(;s<C.length;s+=1)C[s].d(1);C.length=x.length}a[4]<a[3].length?y?y.p(a,e):((y=I(a)).c(),y.m(l,k)):y&&(y.d(1),y=null),a[4]+1>a[3].length?V?V.p(a,e):((V=L(a)).c(),V.m(l,null)):V&&(V.d(1),V=null)},d(a){a&&n(e),N&&N.d(),m(C,a),y&&y.d(),V&&V.d()}}}function P(a){let e,l,t,i;return{c(){e=s("li"),l=s("a"),t=g("<"),this.h()},l(a){e=c(a,"LI",{class:!0});var s=r(e);l=c(s,"A",{href:!0,class:!0});var i=r(l);t=p(i,"<"),i.forEach(n),s.forEach(n),this.h()},h(){h(l,"href",i=a[2]+"?page="+a[4]),h(l,"class","page-link"),h(e,"class","page-item")},m(a,s){o(a,e,s),f(e,l),f(l,t)},p(a,e){20&e&&i!==(i=a[2]+"?page="+a[4])&&h(l,"href",i)},d(a){a&&n(e)}}}function b(a){let e,l,t,i,m,d=a[7]+"";return{c(){e=s("li"),l=s("a"),t=g(d),this.h()},l(a){e=c(a,"LI",{class:!0});var s=r(e);l=c(s,"A",{href:!0,class:!0});var i=r(l);t=p(i,d),i.forEach(n),s.forEach(n),this.h()},h(){h(l,"href",i=a[2]+"?page="+a[7]),h(l,"class","page-link"),h(e,"class",m="page-item "+(a[7]===a[4]?"active":""))},m(a,s){o(a,e,s),f(e,l),f(l,t)},p(a,s){24&s&&d!==(d=a[7]+"")&&u(t,d),28&s&&i!==(i=a[2]+"?page="+a[7])&&h(l,"href",i),24&s&&m!==(m="page-item "+(a[7]===a[4]?"active":""))&&h(e,"class",m)},d(a){a&&n(e)}}}function I(a){let e,l,t,i,g;return{c(){e=s("li"),l=s("a"),t=s("i"),this.h()},l(a){e=c(a,"LI",{class:!0});var s=r(e);l=c(s,"A",{href:!0,class:!0});var i=r(l);t=c(i,"I",{class:!0}),r(t).forEach(n),i.forEach(n),s.forEach(n),this.h()},h(){h(t,"class","fa fa-angle-right"),h(l,"href",i=a[2]+"?page="+a[3].length),h(l,"class","page-link"),h(e,"class",g="page-item "+(a[3].length===a[4]-1?"active":""))},m(a,s){o(a,e,s),f(e,l),f(l,t)},p(a,s){12&s&&i!==(i=a[2]+"?page="+a[3].length)&&h(l,"href",i),24&s&&g!==(g="page-item "+(a[3].length===a[4]-1?"active":""))&&h(e,"class",g)},d(a){a&&n(e)}}}function L(a){let e,l,t,i;return{c(){e=s("li"),l=s("a"),t=s("i"),this.h()},l(a){e=c(a,"LI",{class:!0});var s=r(e);l=c(s,"A",{href:!0,class:!0});var i=r(l);t=c(i,"I",{class:!0}),r(t).forEach(n),i.forEach(n),s.forEach(n),this.h()},h(){h(t,"class","fa fa-angle-right"),h(l,"href",i=a[2]+"?page="+a[4]),h(l,"class","page-link"),h(e,"class","page-item")},m(a,s){o(a,e,s),f(e,l),f(l,t)},p(a,e){20&e&&i!==(i=a[2]+"?page="+a[4])&&h(l,"href",i)},d(a){a&&n(e)}}}function $(a){let e,l=a[0]>=a[1]&&E(a);return{c(){e=s("div"),l&&l.c(),this.h()},l(a){e=c(a,"DIV",{class:!0});var s=r(e);l&&l.l(s),s.forEach(n),this.h()},h(){h(e,"class","row pagination-bar m-auto")},m(a,s){o(a,e,s),l&&l.m(e,null)},p(a,[s]){a[0]>=a[1]?l?l.p(a,s):((l=E(a)).c(),l.m(e,null)):l&&(l.d(1),l=null)},i:d,o:d,d(a){a&&n(e),l&&l.d()}}}function j(a,e,l){let s,t,{articlesCount:c}=e,{pageNum:r="0"}=e,{articlesPerPage:n}=e,{objectPath:i}=e,{posts:h=[]}=e;return a.$set=(a=>{"articlesCount"in a&&l(0,c=a.articlesCount),"pageNum"in a&&l(5,r=a.pageNum),"articlesPerPage"in a&&l(1,n=a.articlesPerPage),"objectPath"in a&&l(2,i=a.objectPath),"posts"in a&&l(6,h=a.posts)}),a.$$.update=(()=>{if(32&a.$$.dirty&&l(4,t=parseInt(r)),11&a.$$.dirty){l(3,s=[]);for(let a=1;a<=Math.ceil(c/n);++a)s.push(a);console.log()}}),[c,n,i,s,t,r,h]}class A extends a{constructor(a){super(),e(this,a,j,$,l,{articlesCount:0,pageNum:5,articlesPerPage:1,objectPath:2,posts:6})}}export{A as L};