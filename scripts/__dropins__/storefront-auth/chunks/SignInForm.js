/*! Copyright 2024 Adobe
All Rights Reserved. */
import{jsx as u,jsxs as A}from"@dropins/tools/preact-jsx-runtime.js";import{Slot as Z,classes as z}from"@dropins/tools/lib.js";import{g as V,c as _,u as O,F as R,B as H}from"./UpdatePasswordForm.js";import{useState as g,useCallback as F,useEffect as J,useMemo as tt}from"@dropins/tools/preact-hooks.js";import"@dropins/tools/event-bus.js";import"@dropins/tools/recaptcha.js";import{a as at}from"./getCustomerToken.js";import{r as rt}from"./resendConfirmationEmail.js";import{s as et,a as ot}from"./simplifyTransformAttributesForm.js";import{c as it}from"./confirmEmail.js";import{useText as Q}from"@dropins/tools/i18n.js";import{Header as st,InLineAlert as nt,InputPassword as mt}from"@dropins/tools/components.js";/* empty css                       */import{E as ct}from"./EmailConfirmationForm.js";const ut=({emailConfirmationStatusMessage:t,translations:r,initialEmailValue:i,routeSignUp:l,routeForgotPassword:m,routeRedirectOnSignIn:E,onErrorCallback:w,setActiveComponent:a,onSuccessCallback:f,onSignUpLinkClick:h,handleSetInLineAlertProps:e,routeRedirectOnEmailConfirmationClose:N})=>{const[k,P]=g(""),[L,s]=g(!1),[M,d]=g(""),[T,y]=g(!1),[S,C]=g({userName:"",status:!1}),[B,b]=g(!1),[p,x]=g([]),I=F(async n=>{e(),s(!0),y(!1),x([]),await rt(n)},[e]),v=F(n=>{n.length?y(!1):y(!0),d(n)},[]);J(()=>{t!=null&&t.text&&e({text:t.text,type:t.status?t.status:void 0})},[t,e]);const U=F(async n=>{var K;e(),b(!0);const c=V(n.target);if(c.password||(y(!0),b(!1)),c!=null&&c.email&&(c!=null&&c.password)){const{email:G,password:X}=c,o=await at({email:G,password:X,handleSetInLineAlertProps:e,onErrorCallback:w,translations:r});if((K=o==null?void 0:o.errorMessage)!=null&&K.length){P(G);const $=o.errorMessage.includes("This account isn't confirmed. Verify and try again."),Y=$?r.resendEmailInformationText:o.errorMessage;x($?[{label:r.resendEmailButtonText,onClick:()=>{I(G)}}]:[]),e({text:Y,type:"error"}),d("")}o!=null&&o.userName&&(n.target.reset(),_(E)?window.location.href=E():(f==null||f({userName:o==null?void 0:o.userName,status:!0}),C({userName:o==null?void 0:o.userName,status:!0}))),y(!1)}b(!1)},[e,w,r,I,E,f]),q=F(()=>{if(_(a)){a("resetPasswordForm");return}_(m)&&(window.location.href=m())},[m,a]),j=F(()=>{if(_(h)&&h(),_(a)){a("signUpForm");return}_(l)&&(window.location.href=l())},[h,l,a]),D=tt(()=>{const n=et(ot);return i!=null&&i.length?n==null?void 0:n.map(c=>({...c,defaultValue:i})):n},[i]),W=F(()=>{e(),_(N)?window.location.href=N():s(!1)},[e,N]);return{additionalActionsAlert:p,userEmail:k,defaultEnhancedEmailFields:D,passwordError:T,isSuccessful:S,isLoading:B,signInPasswordValue:M,showEmailConfirmationForm:L,setShowEmailConfirmationForm:s,setSignInPasswordValue:d,submitLogInUser:U,forgotPasswordCallback:q,onSignUpLinkClickCallback:j,handledOnPrimaryButtonClick:W,handleSetPassword:v}},ft=()=>{let t=new URL(window.location.href),r=t.searchParams.get("email"),i=t.searchParams.get("key");r&&i&&(t.searchParams.delete("email"),t.searchParams.delete("key"),window.history.replaceState({},document.title,t.toString()))},dt=({enableEmailConfirmation:t})=>{const r=Q({accountConfirmMessage:"Auth.EmailConfirmationForm.accountConfirmMessage",accountConfirmationEmailSuccessMessage:"Auth.EmailConfirmationForm.accountConfirmationEmailSuccessMessage"}),[i,l]=g({text:"",status:""});return J(()=>{if(t){const{search:m}=window.location;m.includes("email=")&&m.includes("key=")&&(async()=>{var f,h,e;const w=new URLSearchParams(m),a=await it({customerEmail:w.get("email"),customerConfirmationKey:w.get("key")});if(!a)return null;(f=a==null?void 0:a.errors)!=null&&f.length?l({text:a==null?void 0:a.errors[0].message,status:"error"}):(l({text:a.data.confirmEmail.customer.email?r.accountConfirmationEmailSuccessMessage.replace("{email}",(e=(h=a==null?void 0:a.data)==null?void 0:h.confirmEmail.customer)==null?void 0:e.email):r.accountConfirmMessage,status:"success"}),ft())})()}},[t,r]),{emailConfirmationStatusMessage:i}},At=({slots:t,labels:r,formSize:i="default",initialEmailValue:l="",renderSignUpLink:m=!1,enableEmailConfirmation:E=!1,hideCloseBtnOnEmailConfirmation:w=!1,routeRedirectOnEmailConfirmationClose:a,routeRedirectOnSignIn:f,routeForgotPassword:h,routeSignUp:e,onSuccessCallback:N,setActiveComponent:k,onErrorCallback:P,onSignUpLinkClick:L})=>{const s=Q({title:"Auth.SignInForm.title",buttonPrimary:"Auth.SignInForm.buttonPrimary",buttonSecondary:"Auth.SignInForm.buttonSecondary",buttonTertiary:"Auth.SignInForm.buttonTertiary",resendEmailInformationText:"Auth.Notification.resendEmailNotification.informationText",resendEmailButtonText:"Auth.Notification.resendEmailNotification.buttonText",customerTokenErrorMessage:"Auth.Api.customerTokenErrorMessage",placeholder:"Auth.InputPassword.placeholder",floatingLabel:"Auth.InputPassword.floatingLabel",requiredFieldError:"Auth.FormText.requiredFieldError"}),{emailConfirmationStatusMessage:M}=dt({enableEmailConfirmation:E}),{inLineAlertProps:d,handleSetInLineAlertProps:T}=O(),{userEmail:y,additionalActionsAlert:S,defaultEnhancedEmailFields:C,passwordError:B,isSuccessful:b,isLoading:p,signInPasswordValue:x,showEmailConfirmationForm:I,submitLogInUser:v,forgotPasswordCallback:U,onSignUpLinkClickCallback:q,handledOnPrimaryButtonClick:j,handleSetPassword:D}=ut({translations:s,emailConfirmationStatusMessage:M,initialEmailValue:l,routeSignUp:e,routeForgotPassword:h,routeRedirectOnSignIn:f,setActiveComponent:k,onErrorCallback:P,onSuccessCallback:N,onSignUpLinkClick:L,handleSetInLineAlertProps:T,routeRedirectOnEmailConfirmationClose:a});return b.status&&(t!=null&&t.SuccessNotification)?u(Z,{"data-testid":"successNotificationTestId",name:"SuccessNotification",slot:t==null?void 0:t.SuccessNotification,context:{isSuccessful:b}}):I?u(ct,{formSize:i,userEmail:y,inLineAlertProps:d,hideCloseBtnOnEmailConfirmation:w,handleSetInLineAlertProps:T,onPrimaryButtonClick:j}):A("div",{className:z(["auth-sign-in-form",`auth-sign-in-form--${i}`]),"data-testid":"signInForm",children:[u(st,{title:(r==null?void 0:r.formTitleText)??s.title,divider:!1,className:"auth-sign-in-form__title"}),d.text?u(nt,{"data-testid":"authInLineAlert",className:"auth-sign-in-form__notification",type:d.type,variant:"secondary",heading:d.text,icon:d.icon,additionalActions:S}):null,A(R,{name:"signIn_form",className:"auth-sign-in-form__form",onSubmit:v,loading:p,fieldsConfig:C,children:[u(mt,{hideStatusIndicator:!0,className:"auth-sign-in-form__form__password",autoComplete:"current-password",errorMessage:B?s.requiredFieldError:void 0,defaultValue:x,onValue:D,placeholder:s.placeholder,floatingLabel:s.floatingLabel}),A("div",{className:"auth-sign-in-form__form__buttons",children:[A("div",{className:"auth-sign-in-form__form__buttons__combine",children:[u(H,{type:"button",variant:"tertiary",style:{padding:0},buttonText:s.buttonTertiary,className:"auth-sign-in-form__button auth-sign-in-form__button--forgot",enableLoader:!1,onClick:U,"data-testid":"switchToSignUp"}),m?u("span",{}):null,m?u(H,{type:"button",variant:"tertiary",style:{padding:0},buttonText:s.buttonSecondary,className:"auth-sign-in-form__button auth-sign-in-form__button--signup",enableLoader:!1,onClick:q}):null]}),u(H,{type:"submit",buttonText:(r==null?void 0:r.primaryButtonText)??s.buttonPrimary,variant:"primary",className:"auth-sign-in-form__button auth-sign-in-form__button--submit",enableLoader:p})]})]}),u("div",{id:"generateCustomerToken"})]})};export{At as S};
