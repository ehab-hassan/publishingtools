import{a as t,b as n,c as e,d as a,e as s,f as r,i as o,s as c,g as i,S as u,O as p,t as l,z as f,T as h,l as m,v as g,n as d,A as v,L as $,M as b,B as P,C as k,p as y,h as x,I as L,j,k as w,J as N,m as _,K as R,N as D}from"./client.6c990ffa.js";import{a as I,b as C}from"./_api.4a22d527.js";import"./showdown.5e3bed0c.js";import{L as E}from"./ListPagination.13b652d8.js";import{P as S}from"./PostList.3858e4b1.js";function q(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var e,r=a(t);if(n){var o=a(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return s(this,e)}}function B(t){return{c:y,l:y,m:y,p:y,i:y,o:y,d:y}}function J(t){var n,e,a,s,r=new S({props:{posts:t[10],username:t[3]}}),o=new E({props:{articlesCount:t[2],articlesPerPage:t[1].posts_per_page,objectPath:"/blog/"+t[3]+"/posts",page:t[4]}});return{c:function(){n=x("div"),L(r.$$.fragment),e=l(),a=x("div"),L(o.$$.fragment),this.h()},l:function(t){n=j(t,"DIV",{class:!0});var s=w(n);N(r.$$.fragment,s),s.forEach(m),e=g(t),a=j(t,"DIV",{class:!0});var c=w(a);N(o.$$.fragment,c),c.forEach(m),this.h()},h:function(){_(n,"class","row"),_(a,"class","row")},m:function(t,c){d(t,n,c),R(r,n,null),d(t,e,c),d(t,a,c),R(o,a,null),s=!0},p:function(t,n){var e={};1&n&&(e.posts=t[10]),8&n&&(e.username=t[3]),r.$set(e);var a={};4&n&&(a.articlesCount=t[2]),2&n&&(a.articlesPerPage=t[1].posts_per_page),8&n&&(a.objectPath="/blog/"+t[3]+"/posts"),16&n&&(a.page=t[4]),o.$set(a)},i:function(t){s||($(r.$$.fragment,t),$(o.$$.fragment,t),s=!0)},o:function(t){b(r.$$.fragment,t),b(o.$$.fragment,t),s=!1},d:function(t){t&&m(n),D(r),t&&m(e),t&&m(a),D(o)}}}function O(t){return{c:y,l:y,m:y,p:y,i:y,o:y,d:y}}function V(t){var n,e,a,s,r={ctx:t,current:null,token:null,pending:O,then:J,catch:B,value:10,blocks:[,,,]};return p(a=t[0],r),{c:function(){n=l(),e=f(),r.block.c(),this.h()},l:function(t){h('[data-svelte="svelte-10h7psl"]',document.head).forEach(m),n=g(t),e=f(),r.block.l(t),this.h()},h:function(){document.title="Blog"},m:function(t,a){d(t,n,a),d(t,e,a),r.block.m(t,r.anchor=a),r.mount=function(){return e.parentNode},r.anchor=e,s=!0},p:function(n,e){var s=v(e,1)[0];if(t=n,r.ctx=t,1&s&&a!==(a=t[0])&&p(a,r));else{var o=t.slice();o[10]=r.resolved,r.block.p(o,s)}},i:function(t){s||($(r.block),s=!0)},o:function(t){for(var n=0;n<3;n+=1){var e=r.blocks[n];b(e)}s=!1},d:function(t){t&&m(n),t&&m(e),r.block.d(t),r.token=null,r=null}}}function z(t){return A.apply(this,arguments)}function A(){return(A=t(n.mark(function t(e){var a,s,r,o,c,i,u,p,l,f,h;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.host,a=e.path,s=e.params,r=e.query,console.log("params in posts index",JSON.stringify(s)),(o=parseInt(r.page))||this.redirect(302,"".concat(s.theuser,"/posts?page=1")),t.next=6,C(s.theuser);case 6:return c=t.sent,o>0&&o--,console.log(c.length),i=c.length,t.next=12,I(s.theuser);case 12:return u=t.sent,p=u.posts_per_page||5,l=o*p,f=o*p+p,h=c.slice(l,f),t.abrupt("return",{path:a,posts:h,totalPostsLength:i,metadata:u});case 18:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function K(t,n,e){var a,s=n.posts,r=void 0===s?[]:s,o=n.metadata,c=n.totalPostsLength,i=n.path,u=P(),p=(u.preloading,u.page);u.session;k(t,p,function(t){return e(7,a=t)}),console.log("in posts index",a.params);var l=n.username,f=void 0===l?a.params.theuser:l,h=n.pageNum,m=void 0===h?a.query.page:h;return t.$set=function(t){"posts"in t&&e(0,r=t.posts),"metadata"in t&&e(1,o=t.metadata),"totalPostsLength"in t&&e(2,c=t.totalPostsLength),"path"in t&&e(6,i=t.path),"username"in t&&e(3,f=t.username),"pageNum"in t&&e(4,m=t.pageNum)},[r,o,c,f,m,p,i]}export default(function(t){e(a,u);var n=q(a);function a(t){var e;return r(this,a),e=n.call(this),o(i(e),t,K,V,c,{posts:0,metadata:1,totalPostsLength:2,path:6,username:3,pageNum:4}),e}return a}());export{z as preload};
