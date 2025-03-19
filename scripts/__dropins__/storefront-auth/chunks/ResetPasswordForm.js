/*! Copyright 2024 Adobe
All Rights Reserved. */
import{jsxs as l,jsx as o}from"@dropins/tools/preact-jsx-runtime.js";import{classes as b}from"@dropins/tools/lib.js";/* empty css      */import"@dropins/tools/event-bus.js";import"@dropins/tools/recaptcha.js";import{r as h}from"./requestPasswordResetEmail.js";import{g as F,c as w,u as P,F as _,B as p}from"./Button2.js";import{useState as x,useCallback as g}from"@dropins/tools/preact-hooks.js";import{useText as R}from"@dropins/tools/i18n.js";import{Header as v,InLineAlert as N}from"@dropins/tools/components.js";import{s as E,D as L}from"./simplifyTransformAttributesForm.js";import*as y from"@dropins/tools/preact-compat.js";const T=t=>y.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},y.createElement("path",{d:"M7.74512 9.87701L12.0001 14.132L16.2551 9.87701",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"square",strokeLinejoin:"round"})),D=({routeSignIn:t,onErrorCallback:a,setActiveComponent:m,handleSetInLineAlertProps:s})=>{const c=R({successPasswordResetEmailNotification:"Auth.Notification.successPasswordResetEmailNotification"}),[r,e]=x(!1),d=g(async u=>{u.preventDefault(),e(!0);const i=F(u.target);if(i&&i.email){const f=await h(i.email);f.success?s==null||s({type:"success",text:c.successPasswordResetEmailNotification.replace("{email}",i.email)}):(a==null||a(f),s==null||s({type:"error",text:f.message}))}e(!1)},[s,a,c.successPasswordResetEmailNotification]),n=g(()=>{if(w(m)){m("signInForm");return}w(t)&&(window.location.href=t())},[m,t]);return{isLoading:r,submitResetPassword:d,redirectToSignInPage:n}},$=({formSize:t="default",routeSignIn:a,setActiveComponent:m,onErrorCallback:s,...c})=>{const r=R({title:"Auth.ResetPasswordForm.title",buttonPrimary:"Auth.ResetPasswordForm.buttonPrimary",buttonSecondary:"Auth.ResetPasswordForm.buttonSecondary",formAriaLabel:"Auth.ResetPasswordForm.formAriaLabel"}),{inLineAlertProps:e,handleSetInLineAlertProps:d}=P(),{isLoading:n,submitResetPassword:u,redirectToSignInPage:i}=D({routeSignIn:a,setActiveComponent:m,onErrorCallback:s,handleSetInLineAlertProps:d});return l("div",{...c,className:b(["auth-reset-password-form",`auth-reset-password-form--${t}`]),"data-testid":"resetPasswordForm",children:[o(v,{title:r.title,divider:!1,className:"auth-reset-password-form__title"}),e.text?o(N,{className:"auth-reset-password-form__notification",type:e.type,variant:"secondary",heading:e.text,icon:e.icon}):null,o(_,{"aria-labelledby":r.formAriaLabel,name:"resetPassword_form",className:"auth-reset-password-form__form",onSubmit:u,loading:n,fieldsConfig:E(L),children:l("div",{className:"auth-reset-password-form__buttons",children:[o(p,{type:"button",variant:"tertiary",style:{padding:"0"},icon:o(T,{style:{transform:"rotate(90deg)"}}),buttonText:r.buttonSecondary,enableLoader:!1,onClick:i}),o(p,{type:"submit",buttonText:r.buttonPrimary,variant:"primary",enableLoader:n})]})}),o("div",{id:"requestPasswordResetEmail"})]})};export{$ as R};
