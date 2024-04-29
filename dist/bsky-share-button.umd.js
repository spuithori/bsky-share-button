(function(h,f){typeof exports=="object"&&typeof module<"u"?module.exports=f():typeof define=="function"&&define.amd?define(f):(h=typeof globalThis<"u"?globalThis:h||self,h.BskyShareButton=f())})(this,function(){"use strict";var ft=Object.defineProperty;var at=(h,f,d)=>f in h?ft(h,f,{enumerable:!0,configurable:!0,writable:!0,value:d}):h[f]=d;var $=(h,f,d)=>(at(h,typeof f!="symbol"?f+"":f,d),d);function h(){}function f(e){return e()}function d(){return Object.create(null)}function w(e){e.forEach(f)}function A(e){return typeof e=="function"}function H(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function J(e){return Object.keys(e).length===0}function x(e,t){e.appendChild(t)}function U(e,t,n){const i=V(e);if(!i.getElementById(t)){const r=E("style");r.id=t,r.textContent=n,q(i,r)}}function V(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function q(e,t){return x(e.head||e,t),t.sheet}function B(e,t,n){e.insertBefore(t,n||null)}function v(e){e.parentNode&&e.parentNode.removeChild(e)}function E(e){return document.createElement(e)}function L(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function F(e){return document.createTextNode(e)}function a(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function G(e){return Array.from(e.childNodes)}function K(e){const t={};return e.childNodes.forEach(n=>{t[n.slot||"default"]=!0}),t}let C;function y(e){C=e}const b=[],P=[];let m=[];const M=[],Q=Promise.resolve();let O=!1;function W(){O||(O=!0,Q.then(g))}function S(e){m.push(e)}const N=new Set;let p=0;function g(){if(p!==0)return;const e=C;do{try{for(;p<b.length;){const t=b[p];p++,y(t),X(t.$$)}}catch(t){throw b.length=0,p=0,t}for(y(null),b.length=0,p=0;P.length;)P.pop()();for(let t=0;t<m.length;t+=1){const n=m[t];N.has(n)||(N.add(n),n())}m.length=0}while(b.length);for(;M.length;)M.pop()();O=!1,N.clear(),y(e)}function X(e){if(e.fragment!==null){e.update(),w(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(S)}}function Y(e){const t=[],n=[];m.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),m=t}const Z=new Set;function tt(e,t){e&&e.i&&(Z.delete(e),e.i(t))}function et(e,t,n){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),S(()=>{const s=e.$$.on_mount.map(f).filter(A);e.$$.on_destroy?e.$$.on_destroy.push(...s):w(s),e.$$.on_mount=[]}),r.forEach(S)}function nt(e,t){const n=e.$$;n.fragment!==null&&(Y(n.after_update),w(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function st(e,t){e.$$.dirty[0]===-1&&(b.push(e),W(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function it(e,t,n,i,r,s,o=null,u=[-1]){const l=C;y(e);const c=e.$$={fragment:null,ctx:[],props:s,update:h,not_equal:r,bound:d(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:d(),dirty:u,skip_bound:!1,root:t.target||l.$$.root};o&&o(c.root);let k=!1;if(c.ctx=n?n(e,t.props||{},(_,z,...I)=>{const D=I.length?I[0]:z;return c.ctx&&r(c.ctx[_],c.ctx[_]=D)&&(!c.skip_bound&&c.bound[_]&&c.bound[_](D),k&&st(e,_)),z}):[],c.update(),k=!0,w(c.before_update),c.fragment=i?i(c.ctx):!1,t.target){if(t.hydrate){const _=G(t.target);c.fragment&&c.fragment.l(_),_.forEach(v)}else c.fragment&&c.fragment.c();t.intro&&tt(e.$$.fragment),et(e,t.target,t.anchor),g()}y(l)}let R;typeof HTMLElement=="function"&&(R=class extends HTMLElement{constructor(t,n,i){super();$(this,"$$ctor");$(this,"$$s");$(this,"$$c");$(this,"$$cn",!1);$(this,"$$d",{});$(this,"$$r",!1);$(this,"$$p_d",{});$(this,"$$l",{});$(this,"$$l_u",new Map);this.$$ctor=t,this.$$s=n,i&&this.attachShadow({mode:"open"})}addEventListener(t,n,i){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(n),this.$$c){const r=this.$$c.$on(t,n);this.$$l_u.set(n,r)}super.addEventListener(t,n,i)}removeEventListener(t,n,i){if(super.removeEventListener(t,n,i),this.$$c){const r=this.$$l_u.get(n);r&&(r(),this.$$l_u.delete(n))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(s){return()=>{let o;return{c:function(){o=E("slot"),s!=="default"&&a(o,"name",s)},m:function(c,k){B(c,o,k)},d:function(c){c&&v(o)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const n={},i=K(this);for(const s of this.$$s)s in i&&(n[s]=[t(s)]);for(const s of this.attributes){const o=this.$$g_p(s.name);o in this.$$d||(this.$$d[o]=j(o,s.value,this.$$p_d,"toProp"))}for(const s in this.$$p_d)!(s in this.$$d)&&this[s]!==void 0&&(this.$$d[s]=this[s],delete this[s]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$scope:{ctx:[]}}});const r=()=>{this.$$r=!0;for(const s in this.$$p_d)if(this.$$d[s]=this.$$c.$$.ctx[this.$$c.$$.props[s]],this.$$p_d[s].reflect){const o=j(s,this.$$d[s],this.$$p_d,"toAttribute");o==null?this.removeAttribute(this.$$p_d[s].attribute||s):this.setAttribute(this.$$p_d[s].attribute||s,o)}this.$$r=!1};this.$$c.$$.after_update.push(r),r();for(const s in this.$$l)for(const o of this.$$l[s]){const u=this.$$c.$on(s,o);this.$$l_u.set(o,u)}this.$$l={}}}attributeChangedCallback(t,n,i){var r;this.$$r||(t=this.$$g_p(t),this.$$d[t]=j(t,i,this.$$p_d,"toProp"),(r=this.$$c)==null||r.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(t){return Object.keys(this.$$p_d).find(n=>this.$$p_d[n].attribute===t||!this.$$p_d[n].attribute&&n.toLowerCase()===t)||t}});function j(e,t,n,i){var s;const r=(s=n[e])==null?void 0:s.type;if(t=r==="Boolean"&&typeof t!="boolean"?t!=null:t,!i||!n[e])return t;if(i==="toAttribute")switch(r){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(r){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function rt(e,t,n,i,r,s){let o=class extends R{constructor(){super(e,n,r),this.$$p_d=t}static get observedAttributes(){return Object.keys(t).map(u=>(t[u].attribute||u).toLowerCase())}};return Object.keys(t).forEach(u=>{Object.defineProperty(o.prototype,u,{get(){return this.$$c&&u in this.$$c?this.$$c[u]:this.$$d[u]},set(l){var c;l=j(u,l,t),this.$$d[u]=l,(c=this.$$c)==null||c.$set({[u]:l})}})}),i.forEach(u=>{Object.defineProperty(o.prototype,u,{get(){var l;return(l=this.$$c)==null?void 0:l[u]}})}),e.element=o,o}class ct{constructor(){$(this,"$$");$(this,"$$set")}$destroy(){nt(this,1),this.$destroy=h}$on(t,n){if(!A(n))return h;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!J(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ot="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ot);function ut(e){U(e,"svelte-1h23jac",".svelte-1h23jac,.svelte-1h23jac::before,.svelte-1h23jac::after{background-repeat:no-repeat;box-sizing:border-box}.svelte-1h23jac::before,.svelte-1h23jac::after{text-decoration:inherit;vertical-align:inherit}.svelte-1h23jac{padding:0;margin:0}a.svelte-1h23jac{background-color:transparent}a.svelte-1h23jac:active,a.svelte-1h23jac:hover{outline-width:0}a.svelte-1h23jac:focus{outline-width:0}.svelte-1h23jac::-webkit-file-upload-button{-webkit-appearance:button;color:inherit;font:inherit}.button.svelte-1h23jac{font-family:sans-serif;display:inline-flex;align-items:center;justify-content:center;gap:8px;background-color:#4a83fc;color:#fff;font-weight:bold;width:120px;height:40px;text-decoration:none;font-size:14px;border-radius:4px;transition:opacity .2s linear}.button.svelte-1h23jac:hover{opacity:.7}")}function lt(e){let t,n,i,r;return{c(){t=E("a"),n=L("svg"),i=L("path"),r=F("Share"),a(i,"fill","#fff"),a(i,"d","M407.8 294.7c-3.3-.4-6.7-.8-10-1.3c3.4 .4 6.7 .9 10 1.3zM288 227.1C261.9 176.4 190.9 81.9 124.9 35.3C61.6-9.4 37.5-1.7 21.6 5.5C3.3 13.8 0 41.9 0 58.4S9.1 194 15 213.9c19.5 65.7 89.1 87.9 153.2 80.7c3.3-.5 6.6-.9 10-1.4c-3.3 .5-6.6 1-10 1.4C74.3 308.6-9.1 342.8 100.3 464.5C220.6 589.1 265.1 437.8 288 361.1c22.9 76.7 49.2 222.5 185.6 103.4c102.4-103.4 28.1-156-65.8-169.9c-3.3-.4-6.7-.8-10-1.3c3.4 .4 6.7 .9 10 1.3c64.1 7.1 133.6-15.1 153.2-80.7C566.9 194 576 75 576 58.4s-3.3-44.7-21.6-52.9c-15.8-7.1-40-14.9-103.2 29.8C385.1 81.9 314.1 176.4 288 227.1z"),a(i,"class","svelte-1h23jac"),a(n,"xmlns","http://www.w3.org/2000/svg"),a(n,"height","14"),a(n,"width","15.75"),a(n,"viewBox","0 0 576 512"),a(n,"class","svelte-1h23jac"),a(t,"class","button svelte-1h23jac"),a(t,"href","https://bsky.app/intent/compose?text="+encodeURIComponent(e[0])),a(t,"target","_blank"),a(t,"rel","nofollow")},m(s,o){B(s,t,o),x(t,n),x(n,i),x(t,r)},p:h,i:h,o:h,d(s){s&&v(t)}}}function ht(e,t,n){let{type:i="button"}=t,{width:r=120}=t,{height:s=40}=t,{title:o=document.title||""}=t,{url:u=location.href}=t,l=o+`
`+u;return e.$$set=c=>{"type"in c&&n(1,i=c.type),"width"in c&&n(2,r=c.width),"height"in c&&n(3,s=c.height),"title"in c&&n(4,o=c.title),"url"in c&&n(5,u=c.url)},[l,i,r,s,o,u]}class T extends ct{constructor(t){super(),it(this,t,ht,lt,H,{type:1,width:2,height:3,title:4,url:5},ut)}get type(){return this.$$.ctx[1]}set type(t){this.$$set({type:t}),g()}get width(){return this.$$.ctx[2]}set width(t){this.$$set({width:t}),g()}get height(){return this.$$.ctx[3]}set height(t){this.$$set({height:t}),g()}get title(){return this.$$.ctx[4]}set title(t){this.$$set({title:t}),g()}get url(){return this.$$.ctx[5]}set url(t){this.$$set({url:t}),g()}}return customElements.define("bsky-share-button",rt(T,{type:{},width:{},height:{},title:{},url:{}},[],[],!0)),T});