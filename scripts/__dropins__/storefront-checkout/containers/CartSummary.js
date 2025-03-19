import*as e from"@dropins/elsie/event-bus.js";import*as n from"@dropins/elsie/fetch-graphql.js";import*as r from"@dropins/elsie/preact-compat.js";import*as t from"@dropins/elsie/preact-hooks.js";import*as o from"@dropins/elsie/preact-jsx-runtime.js";import*as i from"@dropins/elsie/preact.js";export const id=552;export const ids=[552];export const modules={8228:(e,n,r)=>{r.d(n,{Z:()=>S});var t=r(5587),o=r(1892),i=r.n(o),a=r(5760),l=r.n(a),s=r(8311),c=r.n(s),u=r(8192),m=r.n(u),p=r(8060),d=r.n(p),f=r(4865),v=r.n(f),g=r(6731),b={};b.styleTagTransform=v(),b.setAttributes=m(),b.insert=c().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=d();i()(g.Z,b);g.Z&&g.Z.locals&&g.Z.locals;var y=r(7188);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}var w=["variant","className","children"];function j(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function x(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?j(Object(r),!0).forEach((function(n){O(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function O(e,n,r){var t;return t=function(e,n){if("object"!=h(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var t=r.call(e,n||"default");if("object"!=h(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(n,"string"),(n="symbol"==h(t)?t:String(t))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function k(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var S=function(e){var n=e.variant,r=void 0===n?"primary":n,o=e.className,i=e.children,a=k(e,w);return(0,y.jsx)("div",x(x({},a),{},{className:(0,t.S)(["elsie-card","elsie-card--".concat(r),o]),children:(0,y.jsx)("div",{class:"elsie-card__content",children:i})}))}},7816:(e,n,r)=>{r.d(n,{O:()=>C,d:()=>_});var t=r(5587),o=r(1892),i=r.n(o),a=r(5760),l=r.n(a),s=r(8311),c=r.n(s),u=r(8192),m=r.n(u),p=r(8060),d=r.n(p),f=r(4865),v=r.n(f),g=r(1735),b={};b.styleTagTransform=v(),b.setAttributes=m(),b.insert=c().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=d();i()(g.Z,b);g.Z&&g.Z.locals&&g.Z.locals;var y=r(7188);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}var w=["className","fullWidth","lines","size","variant","children","multilineGap"],j=["className","children","rowGap"];function x(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function O(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?x(Object(r),!0).forEach((function(n){k(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function k(e,n,r){var t;return t=function(e,n){if("object"!=h(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var t=r.call(e,n||"default");if("object"!=h(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(n,"string"),(n="symbol"==h(t)?t:String(t))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function S(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var _=function(e){var n=e.className,r=e.fullWidth,o=void 0!==r&&r,i=e.lines,a=void 0===i?1:i,l=e.size,s=void 0===l?"small":l,c=e.variant,u=void 0===c?"row":c,m=e.children,p=void 0===m?null:m,d=e.multilineGap,f=void 0===d?"medium":d,v=S(e,w),g=[["elsie-skeleton-row__".concat(u),u],["elsie-skeleton-row__".concat(u,"-").concat(s),u&&s]];if(!p&&"empty"===u)return(0,y.jsx)("div",{className:(0,t.S)(["elsie-skeleton-row elsie-skeleton-row__empty",n])});if(p){var b=p.trim();return(0,y.jsx)("div",O(O({},v),{},{class:(0,t.S)(["elsie-skeleton-row",["elsie-skeleton-row--full",o],n]),dangerouslySetInnerHTML:{__html:b}}))}return!1===a>1?(0,y.jsx)("div",O(O({},v),{},{class:(0,t.S)(["elsie-skeleton-row",["elsie-skeleton-row--full",o],"elsie-skeleton--row__content"].concat(g,[n]))})):(0,y.jsx)("div",O(O({},v),{},{style:{"--multiline-gap-spacing":"var(--spacing-".concat(f,")")},class:(0,t.S)(["elsie-skeleton-row--multiline",["elsie-skeleton-row--full",o],n]),children:Array.from({length:a}).map((function(e,n){return(0,y.jsx)("div",{class:(0,t.S)(["elsie-skeleton-row",["elsie-skeleton-row--full",o],"elsie-skeleton--row__content"].concat(g))},n)}))}))},C=function(e){var n=e.className,r=e.children,o=e.rowGap,i=void 0===o?"medium":o,a=S(e,j);return(0,y.jsx)("div",O(O({style:{"--row-gap-spacing":"var(--spacing-".concat(i,")")}},a),{},{className:(0,t.S)(["elsie-skeleton",n]),role:"status","aria-label":"Loading...",children:r}))}},7553:(e,n,r)=>{r.d(n,{X:()=>y});var t=r(1892),o=r.n(t),i=r(5760),a=r.n(i),l=r(8311),s=r.n(l),c=r(8192),u=r.n(c),m=r(8060),p=r.n(m),d=r(4865),f=r.n(d),v=r(4553),g={};g.styleTagTransform=f(),g.setAttributes=u(),g.insert=s().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p();o()(v.Z,g);v.Z&&v.Z.locals&&v.Z.locals;var b=r(7188),y=function(e){var n=e.className,r=e.children,t=e.level,o=void 0===t?2:t,i=o>=1&&o<=6?"h".concat(o):"h2";return(0,b.jsx)(i,{className:n,children:r})}},9454:(e,n,r)=>{r.d(n,{Cj:()=>t.C,VD:()=>t.V,ZP:()=>t.V});var t=r(1644)},6731:(e,n,r)=>{r.d(n,{Z:()=>l});var t=r(4933),o=r.n(t),i=r(3476),a=r.n(i)()(o());a.push([e.id,".elsie-card{\n  --bgColor:var(--color-neutral-200);\n  background-color:var(--bgColor);\n  border-width:0;\n  border-radius:var(--shape-border-radius-2);\n}\n\n.elsie-card--secondary{\n  --bgColor:var(--color-neutral-50);\n  border-width:var(--shape-border-width-2);\n  border-style:solid;\n  border-color:var(--color-neutral-400);\n}\n\n.elsie-card__content{\n  display:flex;\n  flex-direction:column;\n  gap:var(--spacing-medium);\n  padding-top:var(--spacing-medium);\n  padding-right:var(--spacing-medium);\n  padding-bottom:var(--spacing-medium);\n  padding-left:var(--spacing-medium);\n}\n",""]);const l=a},1735:(e,n,r)=>{r.d(n,{Z:()=>l});var t=r(4933),o=r.n(t),i=r(3476),a=r.n(i)()(o());a.push([e.id,".elsie-skeleton{\n  --row-gap-spacing:var(--spacing-medium);\n  display:grid;\n  grid-template-columns:1fr 1fr;\n  gap:var(--row-gap-spacing);\n}\n\n.elsie-skeleton .elsie-skeleton--row__content{\n  background:var(--color-neutral-300) linear-gradient(to right,\n      var(--color-neutral-300) 0%,\n      var(--color-neutral-100) 20%,\n      var(--color-neutral-300) 40%,\n      var(--color-neutral-300) 100%) no-repeat;\n  animation:skeletonShimmer infinite 1.2s linear;\n  border-radius:var(--shape-border-radius-2);\n}\n.elsie-skeleton__empty{\n  background:none;\n}\n\n.elsie-skeleton-row--multiline{\n  --multiline-gap-spacing:var(--spacing-medium);\n  display:grid;\n  grid-auto-rows:max-content;\n  gap:var(--multiline-gap-spacing);\n}\n\n.elsie-skeleton-row--full{\n  grid-column:1 / -1;\n}\n.elsie-skeleton-row svg{\n  fill:var(--color-neutral-400);\n  fill-opacity:0.5;\n  animation-duration:1s;\n  animation-fill-mode:forwards;\n  animation-iteration-count:infinite;\n  animation-name:placeholderShimmer;\n  animation-timing-function:linear;\n}\n\n.elsie-skeleton-row__row-xsmall{\n  height:32px;\n}\n\n.elsie-skeleton-row__row-small{\n  height:40px;\n}\n\n.elsie-skeleton-row__row-medium{\n  height:48px;\n}\n\n.elsie-skeleton-row__row-large{\n  height:56px;\n}\n\n.elsie-skeleton-row__row-xlarge{\n  height:72px;\n}\n\n.elsie-skeleton-row__heading-xsmall{\n  height:20px;\n}\n\n.elsie-skeleton-row__heading-small{\n  height:24px;\n}\n\n.elsie-skeleton-row__heading-medium{\n  height:32px;\n}\n\n.elsie-skeleton-row__heading-large{\n  height:40px;\n}\n\n.elsie-skeleton-row__heading-xlarge{\n  height:48px;\n}\n\n@keyframes skeletonShimmer{\n  0%{\n    background-position:-600px 0;\n  }\n\n  100%{\n    background-position:600px 0;\n  }\n}\n\n@keyframes placeholderShimmer{\n  0%{\n    fill-opacity:0.5;\n  }\n\n  50%{\n    fill-opacity:1;\n  }\n\n  100%{\n    fill-opacity:0.5;\n  }\n}\n@media only screen and (max-width: 600px){\n  .elsie-skeleton{\n    grid-template-columns:1fr;\n  }\n}",""]);const l=a},4553:(e,n,r)=>{r.d(n,{Z:()=>l});var t=r(4933),o=r.n(t),i=r(3476),a=r.n(i)()(o());a.push([e.id,"\n",""]);const l=a},6765:(n,r,t)=>{n.exports=(e=>{var n={};return t.d(n,e),n})({events:()=>e.events})},9699:(e,r,t)=>{e.exports=(e=>{var n={};return t.d(n,e),n})({FetchGraphQL:()=>n.FetchGraphQL})},4853:(e,n,t)=>{e.exports=(e=>{var n={};return t.d(n,e),n})({createContext:()=>r.createContext,forwardRef:()=>r.forwardRef,useCallback:()=>r.useCallback,useContext:()=>r.useContext,useEffect:()=>r.useEffect,useImperativeHandle:()=>r.useImperativeHandle,useMemo:()=>r.useMemo,useRef:()=>r.useRef,useState:()=>r.useState})},5437:(e,n,r)=>{e.exports=(e=>{var n={};return r.d(n,e),n})({useCallback:()=>t.useCallback,useContext:()=>t.useContext,useDebugValue:()=>t.useDebugValue,useEffect:()=>t.useEffect,useId:()=>t.useId,useImperativeHandle:()=>t.useImperativeHandle,useLayoutEffect:()=>t.useLayoutEffect,useMemo:()=>t.useMemo,useReducer:()=>t.useReducer,useRef:()=>t.useRef,useState:()=>t.useState})},4142:(e,n,r)=>{e.exports=(e=>{var n={};return r.d(n,e),n})({Fragment:()=>o.Fragment,jsx:()=>o.jsx,jsxs:()=>o.jsxs})},3474:(e,n,r)=>{e.exports=(e=>{var n={};return r.d(n,e),n})({Component:()=>i.Component,Fragment:()=>i.Fragment,cloneElement:()=>i.cloneElement,createContext:()=>i.createContext,createElement:()=>i.createElement,createRef:()=>i.createRef,h:()=>i.h,hydrate:()=>i.hydrate,isValidElement:()=>i.isValidElement,options:()=>i.options,render:()=>i.render,toChildArray:()=>i.toChildArray})}};import a from"../runtime.js";import*as l from"../757.js";a.C(l);import*as s from"../448.js";a.C(s);import*as c from"../467.js";a.C(c);import*as u from"../965.js";a.C(u);import*as m from"../644.js";a.C(m);import*as p from"./CartSummary.js";a.C(p);var d,f=(d=9454,a(a.s=d)),v=f.VD,g=f.ZP,b=f.Cj;export{v as CartSummary,g as default,b as useCartSummary};