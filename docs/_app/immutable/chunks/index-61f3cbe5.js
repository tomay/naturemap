function w(){}function R(t,n){for(const e in n)t[e]=n[e];return t}function q(t){return t()}function M(){return Object.create(null)}function p(t){t.forEach(q)}function O(t){return typeof t=="function"}function _t(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let g;function dt(t,n){return g||(g=document.createElement("a")),g.href=n,t===g.href}function W(t){return Object.keys(t).length===0}function Q(t,...n){if(t==null)return w;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ht(t,n,e){t.$$.on_destroy.push(Q(n,e))}function mt(t,n,e,i){if(t){const r=P(t,n,e,i);return t[0](r)}}function P(t,n,e,i){return t[1]&&i?R(e.ctx.slice(),t[1](i(n))):e.ctx}function pt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const u=[],c=Math.max(n.dirty.length,r.length);for(let l=0;l<c;l+=1)u[l]=n.dirty[l]|r[l];return u}return n.dirty|r}return n.dirty}function yt(t,n,e,i,r,u){if(r){const c=P(n,e,i,u);t.p(c,r)}}function gt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function xt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}let E=!1;function U(){E=!0}function V(){E=!1}function X(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Y(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let o=0;o<n.length;o++){const a=n[o];a.claim_order!==void 0&&s.push(a)}n=s}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let s=0;s<n.length;s++){const o=n[s].claim_order,a=(r>0&&n[e[r]].claim_order<=o?r+1:X(1,r,y=>n[e[y]].claim_order,o))-1;i[s]=e[a]+1;const f=a+1;e[f]=s,r=Math.max(f,r)}const u=[],c=[];let l=n.length-1;for(let s=e[r]+1;s!=0;s=i[s-1]){for(u.push(n[s-1]);l>=s;l--)c.push(n[l]);l--}for(;l>=0;l--)c.push(n[l]);u.reverse(),c.sort((s,o)=>s.claim_order-o.claim_order);for(let s=0,o=0;s<c.length;s++){for(;o<u.length&&c[s].claim_order>=u[o].claim_order;)o++;const a=o<u.length?u[o]:null;t.insertBefore(c[s],a)}}function Z(t,n){if(E){for(Y(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function tt(t,n,e){t.insertBefore(n,e||null)}function nt(t,n,e){E&&!e?Z(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function N(t){t.parentNode.removeChild(t)}function bt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function D(t){return document.createElement(t)}function et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function $t(){return S(" ")}function wt(){return S("")}function Nt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function it(t){return Array.from(t.childNodes)}function G(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function z(t,n,e,i,r=!1){G(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const l=t[c];if(n(l)){const s=e(l);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),l}}for(let c=t.claim_info.last_index-1;c>=0;c--){const l=t[c];if(n(l)){const s=e(l);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function rt(t,n,e,i){return z(t,r=>r.nodeName===n,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const l=r.attributes[c];e[l.name]||u.push(l.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(n))}function Et(t,n,e){return rt(t,n,e,D)}function ct(t,n){return z(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function Tt(t){return ct(t," ")}function H(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function vt(t,n){const e=H(t,"HTML_TAG_START",0),i=H(t,"HTML_TAG_END",e);if(e===i)return new C(void 0,n);G(t);const r=t.splice(e,i-e+1);N(r[0]),N(r[r.length-1]);const u=r.slice(1,r.length-1);for(const c of u)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new C(u,n)}function At(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function St(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}class st{constructor(n=!1){this.is_svg=!1,this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=et(e.nodeName):this.e=D(e.nodeName),this.t=e,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)tt(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(N)}}class C extends st{constructor(n,e=!1){super(e),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)nt(this.t,this.n[e],n)}}function jt(t,n){return new t(n)}let m;function h(t){m=t}function F(){if(!m)throw new Error("Function called outside component initialization");return m}function kt(t){F().$$.on_mount.push(t)}function Mt(t){F().$$.after_update.push(t)}const d=[],B=[],b=[],L=[],I=Promise.resolve();let v=!1;function J(){v||(v=!0,I.then(K))}function Ht(){return J(),I}function A(t){b.push(t)}const T=new Set;let x=0;function K(){const t=m;do{for(;x<d.length;){const n=d[x];x++,h(n),lt(n.$$)}for(h(null),d.length=0,x=0;B.length;)B.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];T.has(e)||(T.add(e),e())}b.length=0}while(d.length);for(;L.length;)L.pop()();v=!1,T.clear(),h(t)}function lt(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const $=new Set;let _;function Ct(){_={r:0,c:[],p:_}}function Bt(){_.r||p(_.c),_=_.p}function ot(t,n){t&&t.i&&($.delete(t),t.i(n))}function Lt(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function qt(t,n){const e={},i={},r={$$scope:1};let u=t.length;for(;u--;){const c=t[u],l=n[u];if(l){for(const s in c)s in l||(i[s]=1);for(const s in l)r[s]||(e[s]=l[s],r[s]=1);t[u]=l}else for(const s in c)r[s]=1}for(const c in i)c in e||(e[c]=void 0);return e}function Ot(t){return typeof t=="object"&&t!==null?t:{}}function Pt(t){t&&t.c()}function Dt(t,n){t&&t.l(n)}function ut(t,n,e,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(n,e),i||A(()=>{const c=t.$$.on_mount.map(q).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...c):p(c),t.$$.on_mount=[]}),u.forEach(A)}function ft(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function at(t,n){t.$$.dirty[0]===-1&&(d.push(t),J(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Gt(t,n,e,i,r,u,c,l=[-1]){const s=m;h(t);const o=t.$$={fragment:null,ctx:[],props:u,update:w,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(s?s.$$.context:[])),callbacks:M(),dirty:l,skip_bound:!1,root:n.target||s.$$.root};c&&c(o.root);let a=!1;if(o.ctx=e?e(t,n.props||{},(f,y,...j)=>{const k=j.length?j[0]:y;return o.ctx&&r(o.ctx[f],o.ctx[f]=k)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](k),a&&at(t,f)),y}):[],o.update(),a=!0,p(o.before_update),o.fragment=i?i(o.ctx):!1,n.target){if(n.hydrate){U();const f=it(n.target);o.fragment&&o.fragment.l(f),f.forEach(N)}else o.fragment&&o.fragment.c();n.intro&&ot(t.$$.fragment),ut(t,n.target,n.anchor,n.customElement),V(),K()}h(s)}class zt{$destroy(){ft(this,1),this.$destroy=w}$on(n,e){if(!O(e))return w;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!W(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Ht as A,w as B,dt as C,Z as D,mt as E,yt as F,gt as G,pt as H,ht as I,bt as J,C as K,vt as L,R as M,qt as N,Ot as O,xt as P,zt as S,$t as a,nt as b,Tt as c,Bt as d,wt as e,ot as f,Ct as g,N as h,Gt as i,Mt as j,D as k,Et as l,it as m,Nt as n,kt as o,St as p,S as q,ct as r,_t as s,Lt as t,At as u,jt as v,Pt as w,Dt as x,ut as y,ft as z};
