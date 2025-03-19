/*! Copyright 2025 Adobe
All Rights Reserved. */
(function(n,o){try{if(typeof document<"u"){const t=document.createElement("style"),r=o.styleId;for(const e in o.attributes)t.setAttribute(e,o.attributes[e]);t.setAttribute("data-dropin",r),t.appendChild(document.createTextNode(n));const a=document.querySelector('style[data-dropin="sdk"]');if(a)a.after(t);else{const e=document.querySelector('link[rel="stylesheet"], style');e?e.before(t):document.head.append(t)}}}catch(t){console.error("dropin-styles (injectCodeFunction)",t)}})(`.checkout__banner{margin-bottom:var(--spacing-xlarge)}
.checkout-estimate-shipping{display:grid;grid-template-columns:1fr 1fr;gap:var(--spacing-xxsmall);align-items:center;color:var(--color-neutral-800)}.checkout-estimate-shipping__label,.checkout-estimate-shipping__price{font:var(--type-body-1-default-font);letter-spacing:var(--type-body-1-default-letter-spacing)}.checkout-estimate-shipping__label--muted{font:var(--type-body-2-default-font);letter-spacing:var(--type-body-2-default-letter-spacing);color:var(--color-neutral-700)}.checkout-estimate-shipping__price--muted{font:var(--type-body-2-default-font);letter-spacing:var(--type-body-2-default-letter-spacing)}.checkout-estimate-shipping__price{text-align:right}.checkout-estimate-shipping__label--bold,.checkout-estimate-shipping__price--bold{font:var(--type-body-1-emphasized-font);letter-spacing:var(--type-body-1-emphasized-letter-spacing)}.checkout-estimate-shipping__caption{font:var(--type-details-caption-2-font);letter-spacing:var(--type-details-caption-2-letter-spacing);color:var(--color-neutral-700)}.cart-order-summary__shipping .dropin-skeleton{grid-template-columns:1fr}.checkout-login-form__heading{display:grid;grid-template-columns:1fr max-content;grid-auto-rows:max-content}.checkout-login-form__content{grid-auto-rows:max-content}.checkout-login-form__content .dropin-field__hint a{font-weight:400}.checkout-login-form__customer-details{display:grid;grid-auto-flow:row;gap:var(--spacing-xxsmall)}.checkout-login-form__customer-name{font:var(--type-body-1-strong-font);letter-spacing:var(--type-body-1-default-letter-spacing)}.checkout-login-form__customer-email{font:var(--type-body-2-default-font);letter-spacing:var(--type-body-2-default-letter-spacing);color:var(--color-neutral-700)}.checkout-login-form__title{grid-column-start:1;color:var(--color-neutral-800);font:var(--type-headline-2-default-font);letter-spacing:var(--type-headline-2-default-letter-spacing);margin:0 0 var(--spacing-medium) 0}.checkout-login-form__sign-in,.checkout-login-form__sign-out{grid-column-start:2;color:var(--color-neutral-800);font:var(--type-body-2-default-font);letter-spacing:var(--type-body-2-default-letter-spacing);justify-self:flex-end;margin-top:var(--spacing-xxsmall)}a.checkout-login-form__link{font:var(--type-body-2-strong-font);letter-spacing:var(--type-body-2-strong-letter-spacing);margin-left:var(--spacing-xxsmall)}@media only screen and (min-width: 320px) and (max-width: 768px){.checkout-login-form__heading{grid-template-columns:repeat(1,1fr [col-start]);grid-template-rows:1fr}.checkout-login-form__sign-in,.checkout-login-form__sign-out{grid-column-start:1;align-self:flex-start;justify-self:flex-start;margin-top:0;margin-bottom:var(--spacing-medium)}}.checkout-out-of-stock.dropin-card{border-color:var(--color-warning-500)}.checkout-out-of-stock .dropin-card__content{gap:var(--spacing-small);padding:var(--spacing-small)}.checkout-out-of-stock__title{color:var(--color-neutral-900);font:var(--type-body-2-strong-font);letter-spacing:var(--type-body-2-strong-letter-spacing);margin:0;display:flex;gap:var(--spacing-xxsmall);align-items:center;justify-content:left;text-align:center}.checkout-out-of-stock__message{color:var(--color-neutral-800);font:var(--type-body-1-default-font);letter-spacing:var(--type-body-1-default-letter-spacing);margin:0}.checkout-out-of-stock__items{display:grid;grid-template-columns:repeat(5,100px);grid-gap:var(--spacing-small);list-style:none;padding:0;margin:0}.checkout-out-of-stock__item img{width:100%;height:auto}.checkout-out-of-stock__actions{display:flex;gap:var(--spacing-small);justify-content:flex-end}a.checkout-out-of-stock__action{color:var(--color-brand-500);font:var(--type-details-caption-1-font);letter-spacing:var(--type-details-caption-1-letter-spacing)}.checkout-out-of-stock__action{color:var(--color-brand-500);font:var(--type-details-caption-1-font);letter-spacing:var(--type-details-caption-1-letter-spacing);background:none;border:none;padding:0;cursor:pointer}.checkout-out-of-stock__action:hover{--textColor: var(--color-brand-700);text-decoration:solid underline var(--textColor);text-underline-offset:6px}@media only screen and (width >= 320px) and (width <= 768px){.checkout-out-of-stock__items{grid-template-columns:repeat(3,100px)}}.checkout-server-error{position:relative;text-align:center}.checkout-server-error__icon .error-icon{color:var(--color-alert-500)}.checkout-server-error a{font:var(--type-body-2-strong-font);letter-spacing:var(--type-body-2-strong-letter-spacing)}.checkout-terms-and-conditions{display:grid}.checkout-terms-and-conditions__error{font:var(--type-details-caption-2-font);letter-spacing:var(--type-details-caption-2-letter-spacing);color:var(--color-alert-800);text-align:left;margin-top:var(--spacing-xsmall)}.checkout-terms-and-conditions__error:empty{display:none}
.checkout-shipping-methods__title{color:var(--color-neutral-800);font:var(--type-body-1-default-font);letter-spacing:var(--type-body-1-default-letter-spacing);margin:0 0 var(--spacing-medium) 0}.checkout-shipping-methods__content{position:relative;display:block}.checkout-shipping-methods__method{margin-bottom:var(--spacing-medium);width:fit-content;cursor:pointer;font:var(--type-body-2-default-font);letter-spacing:var(--type-body-2-default-letter-spacing)}.checkout-shipping-methods__method:last-child{margin-bottom:0}.dropin-radio-button__label .dropin-price{color:var(--color-neutral-800);font-weight:400}.checkout-shipping-methods__options--loading{opacity:.4;pointer-events:none}.checkout-shipping-methods__spinner{margin:0 auto;position:absolute;z-index:999;left:0;right:0;top:calc(50% - (var(--size) / 2));bottom:0}
.checkout-place-order{display:grid;padding-bottom:var(--spacing-big)}.checkout-place-order__button{align-self:flex-end;justify-self:flex-end}@media only screen and (min-width:320px) and (max-width: 768px){.checkout-place-order{background-color:var(--color-neutral-200);padding:var(--spacing-medium) var(--spacing-medium) var(--spacing-big) var(--spacing-medium)}.checkout-place-order__button{align-self:center;justify-self:stretch}}
.checkout-payment-methods__title{color:var(--color-neutral-800);font:var(--type-headline-2-default-font);letter-spacing:var(--type-headline-2-default-letter-spacing);margin:0 0 var(--spacing-medium) 0}.checkout-payment-methods__wrapper{position:relative;display:grid}.checkout-payment-methods__wrapper--loading{opacity:.4;pointer-events:none}.checkout-payment-methods__methods{display:grid;grid-template-columns:1fr 1fr;gap:var(--spacing-medium)}.checkout-payment-methods__content{font:var(--type-body-2-default-font);letter-spacing:var(--type-body-2-default-letter-spacing);margin-top:var(--spacing-xbig)}.checkout-payment-methods__content>div[data-slot=PaymentMethodSlot]:not(:empty){margin-top:var(--spacing-medium)}.checkout-payment-methods--full-width{grid-template-columns:1fr}.checkout-payment-methods__spinner{margin:0 auto;position:absolute;z-index:999;left:0;right:0;top:calc(50% - (var(--size) / 2));bottom:0}.checkout__content [data-slot=PaymentMethods]:empty{display:none}@media only screen and (min-width: 320px) and (max-width: 768px){.checkout-payment-methods__methods{grid-template-columns:1fr}}
.checkout-bill-to-shipping-address label{font:var(--type-body-2-default-font);letter-spacing:var(--type-body-2-default-letter-spacing);gap:0}`,{styleId:"checkout"});
import{jsx as f}from"@dropins/tools/preact-jsx-runtime.js";import{Render as d}from"@dropins/tools/lib.js";import"./chunks/state.js";import"./chunks/transform-store-config.js";import{events as p}from"@dropins/tools/event-bus.js";import{c as g}from"./chunks/synchronizeCheckout.js";import{UIProvider as y}from"@dropins/tools/components.js";import{useState as b,useEffect as h}from"@dropins/tools/preact-hooks.js";import"@dropins/tools/fetch-graphql.js";import"./chunks/store-config.js";import"@dropins/tools/signals.js";import"./fragments.js";import"./chunks/errors.js";function O(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var w=function(t){return S(t)&&!v(t)};function S(e){return!!e&&typeof e=="object"}function v(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||M(e)}var E=typeof Symbol=="function"&&Symbol.for,j=E?Symbol.for("react.element"):60103;function M(e){return e.$$typeof===j}function P(e){return Array.isArray(e)?[]:{}}function i(e,t){return t.clone!==!1&&t.isMergeableObject(e)?o(P(e),e,t):e}function A(e,t,r){return e.concat(t).map(function(a){return i(a,r)})}function T(e,t){if(!t.customMerge)return o;var r=t.customMerge(e);return typeof r=="function"?r:o}function I(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function u(e){return Object.keys(e).concat(I(e))}function m(e,t){try{return t in e}catch{return!1}}function C(e,t){return m(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function x(e,t,r){var a={};return r.isMergeableObject(e)&&u(e).forEach(function(n){a[n]=i(e[n],r)}),u(t).forEach(function(n){C(e,n)||(m(e,n)&&r.isMergeableObject(t[n])?a[n]=T(n,r)(e[n],t[n],r):a[n]=i(t[n],r))}),a}function o(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||A,r.isMergeableObject=r.isMergeableObject||w,r.cloneUnlessOtherwiseSpecified=i;var a=Array.isArray(t),n=Array.isArray(e),s=a===n;return s?a?r.arrayMerge(e,t,r):x(e,t,r):i(t,r)}o.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(a,n){return o(a,n,r)},{})};var D=o,_=D;const L=O(_),R={title:"Checkout",LoginForm:{title:"Contact details",account:"Already have an account?",ariaLabel:"Email",invalidEmailError:"Please enter a valid email address.",missingEmailError:"Enter an email address.",emailExists:{alreadyHaveAccount:"It looks like you already have an account.",signInButton:"Sign in",forFasterCheckout:"for a faster checkout."},floatingLabel:"Email *",placeholder:"Enter your email address",signIn:"Sign In",switch:"Do you want to switch account?",signOut:"Sign Out"},ShippingMethods:{title:"Shipping options",emptyState:"This order can't be shipped to the address provided. Please review the address details you entered and make sure they're correct."},BillToShippingAddress:{title:"Bill to shipping address"},PaymentMethods:{title:"Payment",emptyState:"No payment methods available"},OutOfStock:{title:"Your cart contains items that are out of stock",message:"The following items are out of stock:",actions:{reviewCart:"Review cart",removeOutOfStock:"Remove out of stock items"},lowInventory:{one:"Last item!",many:"Only {{count}} left!"},alert:"Out of stock!"},PlaceOrder:{button:"Place Order"},ServerError:{title:"We were unable to process your order",contactSupport:"If you continue to have issues, please contact support.",unexpected:"An unexpected error occurred while processing your order. Please try again later.",button:"Try again"},EmptyCart:{title:"Your cart is empty",button:"Start shopping"},MergedCartBanner:{items:{one:"1 item from a previous session was added to your cart. Please review your new subtotal.",many:"{{count}} items from a previous session were added to your cart. Please review your new subtotal."}},EstimateShipping:{estimated:"Estimated Shipping",freeShipping:"Free",label:"Shipping",taxToBeDetermined:"TBD",withTaxes:"Including taxes",withoutTaxes:"Excluding taxes"},TermsAndConditions:{label:"I have read, understand, and accept our <a href='https://www.adobe.com/legal/terms.html' target='_blank'>Terms of Use, Terms of Sales, Privacy Policy, and Return Policy</a>.",error:"Please accept the Terms and Conditions to continue."}},U={Checkout:R},B={default:U},k=({children:e})=>{var s;const[t,r]=b(),a=(s=g.getConfig())==null?void 0:s.langDefinitions;h(()=>{const c=p.on("locale",l=>{l!==t&&r(l)},{eager:!0});return()=>{c==null||c.off()}},[t]);const n=L(B,a??{});return f(y,{lang:t,langDefinitions:n,children:e})},X=new d(f(k,{}));export{k as Provider,X as render};
