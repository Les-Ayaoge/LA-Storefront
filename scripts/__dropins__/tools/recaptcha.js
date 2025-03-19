import{FetchGraphQL as h}from"./fetch-graphql.js";const o={failedFetch:"Failed to fetch config from backend with status:",failedSetStorageConfig:"Failed to set storage config",failedGetStorageConfig:"Configuration could not be loaded.",failedExecutionRecaptcha:"Recaptcha execution failed",failedInitializing:"An error occurred while initializing ReCaptcha:"},g={PLACE_ORDER:"placeOrder",CONTACT:"contactUs",CUSTOMER_LOGIN:"generateCustomerToken",CUSTOMER_FORGOT_PASSWORD:"requestPasswordResetEmail",CUSTOMER_CREATE:"createCustomerV2",CUSTOMER_EDIT:"updateCustomerV2",NEWSLETTER:"subscribeEmailToNewsletter",PRODUCT_REVIEW:"createProductReview",SENDFRIEND:"SENDFRIEND",BRAINTREE:"BRAINTREE"},l=(i,e)=>{if(i&&i.forms){const t=i.forms.concat(e).map(r=>typeof r!="string"?{...r,enabledBadgePlace:!1}:{badgeId:g[r],enabledBadgePlace:!1});return{...i,forms:[...new Set(t)]}}return{}},c=async(i,e=1,t=1e3)=>{const r=sessionStorage.getItem(i);return r!==null?JSON.parse(r):e>0?(await new Promise(a=>setTimeout(a,t)),c(i,e-1,t)):null},f=(i,e,t)=>{if(!i||!e.website_key)return null;try{sessionStorage.setItem(i,JSON.stringify(e))}catch(r){return t&&console.error(o.failedSetStorageConfig,r),null}},{failedExecutionRecaptcha:s}=o,p=async i=>{if(!window.grecaptcha)return Promise.reject(s);try{return await window.grecaptcha.execute(i,{action:"click"})}catch(e){return Promise.reject(`${s} : ${e}`)}},u=()=>new Promise(i=>{const e=new MutationObserver((r,a)=>{window.grecaptcha&&(a.disconnect(),i(!0))}),t={childList:!0,subtree:!0,attributes:!0};e.observe(document.body,t)}),_=async(i,e,t)=>(window.grecaptcha||await u(),grecaptcha.ready(()=>{const r=document.querySelectorAll(`#${i}`);if(!r.length)return null;r.forEach(a=>a.id=`${a.id}_${Math.random().toString(36)}`),r.forEach(a=>{if(a.innerHTML==="")try{grecaptcha.render(a.id,{sitekey:e.website_key,badge:e.badge_position,size:"invisible"})}catch(d){t&&console.error(d)}})})),C=`query {
  recaptchaV3Config {
    is_enabled
    website_key
    minimum_score
    badge_position
    language_code
    failure_message
    forms
  } 
}`,n=new h().getMethods();class b{constructor(){var e;this._enableReCAPTCHA=!1,this._recaptchaBackendEndpoint=((e=n.getConfig())==null?void 0:e.endpoint)||"",this._recaptchaScriptUrl="https://www.google.com/recaptcha/api.js",this._configStorageKey="recaptchaConfig",this._logger=!1}async _updateBadgePosition(e,t){if((t==null?void 0:t.badge_position)!=="inline")return null;await _(e,t,this._logger)}async _addRecaptchaScript(){const e=await this._loadConfig();if(!document.getElementById("recaptchaId")&&e){const t=e.website_key,r=e.badge_position==="inline";if(!t)return;const a=document.createElement("script");a.setAttribute("id","recaptchaId"),a.defer=!0,a.src=r?`${this._recaptchaScriptUrl}?render=${t}&badge=none`:`${this._recaptchaScriptUrl}?render=${t}&badge=${e.badge_position}`,document.head.appendChild(a)}}async _fetchStoreConfig(){var e;try{const t=await n.fetchGraphQl(C,{method:"GET",cache:"force-cache"});if((e=t==null?void 0:t.errors)!=null&&e.length){this._logger&&console.error(t.errors[0].message);return}return t}catch(t){this._logger&&console.error(`${o.failedFetch}:`,t)}}async _loadConfig(){const e=await c(this._configStorageKey);return e?(this._enableReCAPTCHA=!!e.is_enabled,e):(this._logger&&console.error(o.failedGetStorageConfig),null)}setEndpoint(e){e&&(this._recaptchaBackendEndpoint=e,n.setEndpoint(e))}async setConfig(e){var t;try{const r=await this._fetchStoreConfig();if(!((t=r==null?void 0:r.data)!=null&&t.recaptchaV3Config)){sessionStorage.removeItem(this._configStorageKey);return}const a=l(r.data.recaptchaV3Config,e);f(this._configStorageKey,a,this._logger)}catch(r){this._logger&&console.error(o.failedSetStorageConfig,r),sessionStorage.removeItem(this._configStorageKey)}}async initReCaptcha(e=3e3){setTimeout(()=>{(async()=>{try{const t=await this._loadConfig();if(!(t!=null&&t.forms)||!t.is_enabled)return;await this._addRecaptchaScript();for(let r=0;r<t.forms.length;r++){const a=t.forms[r];await this._updateBadgePosition(a.badgeId,t)}}catch(t){this._logger&&console.error(o.failedInitializing,t)}})()},e)}async verifyReCaptcha(){try{const e=await this._loadConfig();return!(e!=null&&e.forms)||!e.website_key||!e.is_enabled?void 0:await p(e.website_key)}catch(e){this._logger&&console.error(e)}}enableLogger(e){this._logger=e}getMethods(){return{enableLogger:this.enableLogger.bind(this),setEndpoint:this.setEndpoint.bind(this),setConfig:this.setConfig.bind(this),initReCaptcha:this.initReCaptcha.bind(this),verifyReCaptcha:this.verifyReCaptcha.bind(this)}}}const m=new b,{initReCaptcha:R,verifyReCaptcha:y,setEndpoint:S,setConfig:E,enableLogger:T}=m.getMethods();export{b as RecaptchaModule,T as enableLogger,R as initReCaptcha,n as recaptchaFetchApi,E as setConfig,S as setEndpoint,y as verifyReCaptcha};
