function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return c.Date.now()};function p(e,t,n){var o,i,r,a,u,f,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function w(e){return l=e,u=setTimeout(j,t),c?g(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=r}function j(){var e=m();if(S(e))return h(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?v(n,r-(e-l)):n}(e))}function h(e){return u=void 0,p&&o?g(e):(o=i=void 0,a)}function O(){var e=m(),n=S(e);if(o=arguments,i=this,f=e,n){if(void 0===u)return w(f);if(s)return u=setTimeout(j,t),g(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=b(t)||0,y(n)&&(c=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=i=u=void 0},O.flush=function(){return void 0===u?a:h(m())},O}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};const g=document.querySelector(".feedback-form"),w=g.querySelector('input[name="email"]'),S=g.querySelector('textarea[name="message"]');g.querySelector('button[type="submit"]');g.addEventListener("input",e(t)((function(){const e={email:w.value,message:S.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),window.addEventListener("load",(()=>{const e=JSON.parse(localStorage.getItem("feedback-form-state"))||{};w.value=e.email||"",S.value=e.message||""})),g.addEventListener("submit",(e=>{if(e.preventDefault(),""===w.value||""===S.value)return void alert("Wszystkie pola muszą być wypełnione!");const t={email:w.value,message:S.value};console.log("Form Data:",t),localStorage.removeItem("feedback-form-state"),w.value="",S.value=""}));
//# sourceMappingURL=03-feedback.a3e157c9.js.map