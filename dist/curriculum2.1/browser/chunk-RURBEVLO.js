import{Jb as p,K as a,N as s,jb as d}from"./chunk-KKIUVDZZ.js";var c=class extends Error{};c.prototype.name="InvalidTokenError";function f(r){return decodeURIComponent(atob(r).replace(/(.)/g,(e,n)=>{let t=n.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t}))}function h(r){let e=r.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return f(e)}catch{return atob(e)}}function l(r,e){if(typeof r!="string")throw new c("Invalid token specified: must be a string");e||(e={});let n=e.header===!0?0:1,t=r.split(".")[n];if(typeof t!="string")throw new c(`Invalid token specified: missing part #${n+1}`);let o;try{o=h(t)}catch(i){throw new c(`Invalid token specified: invalid base64 for part #${n+1} (${i.message})`)}try{return JSON.parse(o)}catch(i){throw new c(`Invalid token specified: invalid json for part #${n+1} (${i.message})`)}}var b=(()=>{let e=class e{constructor(t){this.http=t}login(t,o){return this.http.post(`${p.serverUrl}/user/login`,{name:t,password:o})}checkToken(t){let o=localStorage.getItem("token")||"";return l(o)[t]}};e.\u0275fac=function(o){return new(o||e)(s(d))},e.\u0275prov=a({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();export{l as a,b};
