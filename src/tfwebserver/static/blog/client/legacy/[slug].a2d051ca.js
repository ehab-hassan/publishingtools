import{a as n,b as t,X as o,c,d as s,e as r,f as a,i as e,s as u,g as i,S as l,R as f,j as p,J as h,Q as d,m,n as v,q as g,u as b,A as k,B as $,w,x,y as j,z as P,C as y}from"./client.f04795c4.js";import{b as E}from"./_api.10f3610e.js";import"./showdown.811dd8b6.js";import{P as B}from"./PostList.cc2b217d.js";function N(n){return{c:w,l:w,m:w,p:w,i:w,o:w,d:w}}function q(n){var t,o,c,s={ctx:n,current:null,token:null,pending:C,then:A,catch:z,value:3,blocks:[,,,]};return f(o=n[0],s),{c:function(){t=h(),s.block.c()},l:function(n){t=h(),s.block.l(n)},m:function(n,o){g(n,t,o),s.block.m(n,s.anchor=o),s.mount=function(){return t.parentNode},s.anchor=t,c=!0},p:function(t,c){if(n=t,s.ctx=n,1&c&&o!==(o=n[0])&&f(o,s));else{var r=n.slice();r[3]=s.resolved,s.block.p(r,c)}},i:function(n){c||(k(s.block),c=!0)},o:function(n){for(var t=0;t<3;t+=1){var o=s.blocks[t];$(o)}c=!1},d:function(n){n&&m(t),s.block.d(n),s.token=null,s=null}}}function z(n){return{c:w,l:w,m:w,p:w,i:w,o:w,d:w}}function A(n){var t,o=new B({props:{title:"Posts with tag "+n[2],posts:n[3]}});return{c:function(){x(o.$$.fragment)},l:function(n){j(o.$$.fragment,n)},m:function(n,c){P(o,n,c),t=!0},p:function(n,t){var c={};2&t&&(c.title="Posts with tag "+n[2]),1&t&&(c.posts=n[3]),o.$set(c)},i:function(n){t||(k(o.$$.fragment,n),t=!0)},o:function(n){$(o.$$.fragment,n),t=!1},d:function(n){y(o,n)}}}function C(n){return{c:w,l:w,m:w,p:w,i:w,o:w,d:w}}function J(n){return{c:w,l:w,m:w,p:w,i:w,o:w,d:w}}function L(n){var t,o,c,s,r={ctx:n,current:null,token:null,pending:J,then:q,catch:N,value:2,blocks:[,,,]};return f(c=n[1],r),{c:function(){t=p(),o=h(),r.block.c(),this.h()},l:function(n){d('[data-svelte="svelte-10h7psl"]',document.head).forEach(m),t=v(n),o=h(),r.block.l(n),this.h()},h:function(){document.title="Blog"},m:function(n,c){g(n,t,c),g(n,o,c),r.block.m(n,r.anchor=c),r.mount=function(){return o.parentNode},r.anchor=o,s=!0},p:function(t,o){var s=b(o,1)[0];if(n=t,r.ctx=n,2&s&&c!==(c=n[1])&&f(c,r));else{var a=n.slice();a[2]=r.resolved,r.block.p(a,s)}},i:function(n){s||(k(r.block),s=!0)},o:function(n){for(var t=0;t<3;t+=1){var o=r.blocks[t];$(o)}s=!1},d:function(n){n&&m(t),n&&m(o),r.block.d(n),r.token=null,r=null}}}function M(n){return Q.apply(this,arguments)}function Q(){return(Q=n(t.mark(function n(c){var s,r,a,e,u;return t.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return s=c.params,r=s.slug,n.next=4,E(s.theuser);case 4:return a=n.sent,e=new Map,a.forEach(function(n){n.tags.forEach(function(t){e.has(t)?e.set(t,[].concat(o(e.get(t)),[n])):e.set(t,[n])})}),u=e.get(r),n.abrupt("return",{posts:u,tag:s.slug});case 9:case"end":return n.stop()}},n)}))).apply(this,arguments)}function R(n,t,o){var c=t.posts,s=void 0===c?[]:c,r=t.tag,a=void 0===r?"":r;return console.log("tag",a),n.$set=function(n){"posts"in n&&o(0,s=n.posts),"tag"in n&&o(1,a=n.tag)},[s,a]}export default(function(n){function t(n){var o;return s(this,t),o=r(this,a(t).call(this)),e(i(o),n,R,L,u,{posts:0,tag:1}),o}return c(t,l),t}());export{M as preload};
