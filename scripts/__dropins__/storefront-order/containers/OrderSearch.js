/*! Copyright 2024 Adobe
All Rights Reserved. */
import{jsx as t,jsxs as L}from"@dropins/tools/preact-jsx-runtime.js";import{classes as M}from"@dropins/tools/lib.js";import{Card as V,InLineAlert as k,Icon as C,Button as q}from"@dropins/tools/components.js";import{useState as v,useCallback as F,useEffect as _,useMemo as D}from"@dropins/tools/preact-hooks.js";import{F as H}from"../chunks/ShippingStatusCard.js";import*as w from"@dropins/tools/preact-compat.js";import"@dropins/tools/preact.js";import{events as N}from"@dropins/tools/event-bus.js";import{F as g,g as B}from"../chunks/getFormValues.js";import{r as f}from"../chunks/redirectTo.js";import{g as E}from"../chunks/getQueryParam.js";import{g as x,a as z}from"../chunks/getGuestOrder.js";import{useText as U,Text as T}from"@dropins/tools/i18n.js";import"../chunks/network-error.js";import"../chunks/fetch-graphql.js";import"@dropins/tools/fetch-graphql.js";import"../fragments.js";import"../chunks/initialize.js";const X=s=>w.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},w.createElement("path",{vectorEffect:"non-scaling-stroke",fillRule:"evenodd",clipRule:"evenodd",d:"M1 20.8953L12.1922 1.5L23.395 20.8953H1ZM13.0278 13.9638L13.25 10.0377V9H11.25V10.0377L11.4722 13.9638H13.0278ZM11.2994 16V17.7509H13.2253V16H11.2994Z",fill:"currentColor"})),Z=({onError:s,isAuth:r,renderSignIn:a,routeCustomerOrder:i,routeGuestOrder:c})=>{const[b,u]=v({text:"",type:"success"}),[y,p]=v(!1),n=U({invalidSearch:"Order.Errors.invalidSearch",email:"Order.OrderSearchForm.email",lastname:"Order.OrderSearchForm.lastname",number:"Order.OrderSearchForm.orderNumber"}),R=F(async e=>{const l=E("orderRef"),o=l&&l.length>20;if(!e&&!l||!(e!=null&&e.number)&&!(e!=null&&e.token)&&!l)return null;if(r){const d=await x();(d==null?void 0:d.email)===e.email?f(i,{orderRef:e==null?void 0:e.number}):o||f(c,{orderRef:e.token})}else o||f(c,{orderRef:e==null?void 0:e.token})},[r,i,c]);_(()=>{const e=N.on("order/data",l=>{R(l)},{eager:!0});return()=>{e==null||e.off()}},[R]),_(()=>{const e=E("orderRef"),l=e&&e.length>20?e:null;e&&(l?f(c,{orderRef:e}):r?f(i,{orderRef:e}):a==null||a({render:!0,formValues:{number:e}}))},[r,i,c,a]);const O=D(()=>[{entityType:"CUSTOMER_ADDRESS",is_unique:!1,label:n.email,options:[],defaultValue:"",fieldType:g.TEXT,className:"",required:!0,orderNumber:1,name:"email",id:"email",code:"email"},{entityType:"CUSTOMER_ADDRESS",is_unique:!1,label:n.lastname,options:[],defaultValue:"",fieldType:g.TEXT,className:"",required:!0,orderNumber:2,name:"lastname",id:"lastname",code:"lastname"},{entityType:"CUSTOMER_ADDRESS",is_unique:!1,label:n.number,options:[],defaultValue:"",fieldType:g.TEXT,className:"",required:!0,orderNumber:3,name:"number",id:"number",code:"number"}],[n]);return{onSubmit:F(async(e,l)=>{if(!l)return null;p(!0);const o=B(e.target);await z(o).then(m=>{m||u({text:n.invalidSearch,type:"warning"}),N.emit("order/data",m)}).catch(async m=>{var S;let d=!0;s==null||s({error:m.message});const h=r?await x():{email:""};(h==null?void 0:h.email)===(o==null?void 0:o.email)?f(i,{orderRef:o.number}):d=a==null?void 0:a({render:h===null||((S=m==null?void 0:m.message)==null?void 0:S.includes("Please login to view the order.")),formValues:o}),d&&u({text:m.message,type:"warning"})}).finally(()=>{p(!1)})},[r,s,a,i,n.invalidSearch]),inLineAlert:b,loading:y,normalizeFieldsConfig:O}},ne=({className:s,isAuth:r,renderSignIn:a,routeCustomerOrder:i,routeGuestOrder:c,onError:b})=>{const{onSubmit:u,loading:y,inLineAlert:p,normalizeFieldsConfig:n}=Z({onError:b,isAuth:r,renderSignIn:a,routeCustomerOrder:i,routeGuestOrder:c});return t("div",{className:M(["order-order-search",s]),children:t(j,{onSubmit:u,loading:y,inLineAlert:p,fieldsConfig:n})})},j=({onSubmit:s,loading:r,inLineAlert:a,fieldsConfig:i})=>L(V,{variant:"secondary",className:"order-order-search-form",children:[t("h2",{className:"order-order-search-form__title",children:t(T,{id:"Order.OrderSearchForm.title"})}),t("p",{children:t(T,{id:"Order.OrderSearchForm.description"})}),a.text?t(k,{"data-testid":"orderAlert",className:"order-order-search-form__alert",type:a.type,variant:"secondary",heading:a.text,icon:t(C,{source:X})}):null,t(H,{className:"order-order-search-form__wrapper",name:"orderSearchForm",loading:r,fieldsConfig:i,onSubmit:s,children:t("div",{className:"order-order-search-form__button-container",children:t(q,{className:"order-order-search-form__button",size:"medium",variant:"primary",type:"submit",disabled:r,children:t(T,{id:"Order.OrderSearchForm.button"})},"logIn")})})]});export{ne as OrderSearch,ne as default};
