(()=>{"use strict";var t={159:(t,e,n)=>{n.d(e,{Z:()=>U});const i="transitionend",s=t=>{t.dispatchEvent(new Event(i))},r=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),o=t=>r(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(t):null,a=t=>!(!r(t)||0===t.getClientRects().length)&&"visible"===getComputedStyle(t).getPropertyValue("visibility"),l=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},c=[],u=()=>"rtl"===document.documentElement.dir,d=t=>{"function"==typeof t&&t()},h=/[^.]*(?=\..*)\.|.*/,f=/\..*/,m=/::\d+$/,g={};let p=1;const v={mouseenter:"mouseover",mouseleave:"mouseout"},_=/^(mouseenter|mouseleave)/i,b=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function E(t,e){return e&&`${e}::${p++}`||t.uidEvent||p++}function y(t){const e=E(t);return t.uidEvent=e,g[e]=g[e]||{},g[e]}function S(t,e,n=null){const i=Object.keys(t);for(let s=0,r=i.length;s<r;s++){const r=t[i[s]];if(r.originalHandler===e&&r.delegationSelector===n)return r}return null}function w(t,e,n){const i="string"==typeof e,s=i?n:e;let r=I(t);return b.has(r)||(r=t),[i,s,r]}function T(t,e,n,i,s){if("string"!=typeof e||!t)return;if(n||(n=i,i=null),_.test(e)){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};i?i=t(i):n=t(n)}const[r,o,a]=w(e,n,i),l=y(t),c=l[a]||(l[a]={}),u=S(c,o,r?n:null);if(u)return void(u.oneOff=u.oneOff&&s);const d=E(o,e.replace(h,"")),f=r?function(t,e,n){return function i(s){const r=t.querySelectorAll(e);for(let{target:o}=s;o&&o!==this;o=o.parentNode)for(let a=r.length;a--;)if(r[a]===o)return s.delegateTarget=o,i.oneOff&&O.off(t,s.type,e,n),n.apply(o,[s]);return null}}(t,n,i):function(t,e){return function n(i){return i.delegateTarget=t,n.oneOff&&O.off(t,i.type,e),e.apply(t,[i])}}(t,n);f.delegationSelector=r?n:null,f.originalHandler=o,f.oneOff=s,f.uidEvent=d,c[d]=f,t.addEventListener(a,f,r)}function A(t,e,n,i,s){const r=S(e[n],i,s);r&&(t.removeEventListener(n,r,Boolean(s)),delete e[n][r.uidEvent])}function I(t){return t=t.replace(f,""),v[t]||t}const O={on(t,e,n,i){T(t,e,n,i,!1)},one(t,e,n,i){T(t,e,n,i,!0)},off(t,e,n,i){if("string"!=typeof e||!t)return;const[s,r,o]=w(e,n,i),a=o!==e,l=y(t),c=e.startsWith(".");if(void 0!==r){if(!l||!l[o])return;return void A(t,l,o,r,s?n:null)}c&&Object.keys(l).forEach((n=>{!function(t,e,n,i){const s=e[n]||{};Object.keys(s).forEach((r=>{if(r.includes(i)){const i=s[r];A(t,e,n,i.originalHandler,i.delegationSelector)}}))}(t,l,n,e.slice(1))}));const u=l[o]||{};Object.keys(u).forEach((n=>{const i=n.replace(m,"");if(!a||e.includes(i)){const e=u[n];A(t,l,o,e.originalHandler,e.delegationSelector)}}))},trigger(t,e,n){if("string"!=typeof e||!t)return null;const i=l(),s=I(e),r=e!==s,o=b.has(s);let a,c=!0,u=!0,d=!1,h=null;return r&&i&&(a=i.Event(e,n),i(t).trigger(a),c=!a.isPropagationStopped(),u=!a.isImmediatePropagationStopped(),d=a.isDefaultPrevented()),o?(h=document.createEvent("HTMLEvents"),h.initEvent(s,c,!0)):h=new CustomEvent(e,{bubbles:c,cancelable:!0}),void 0!==n&&Object.keys(n).forEach((t=>{Object.defineProperty(h,t,{get:()=>n[t]})})),d&&h.preventDefault(),u&&t.dispatchEvent(h),h.defaultPrevented&&void 0!==a&&a.preventDefault(),h}},x=O;function L(t){return"true"===t||"false"!==t&&(t===Number(t).toString()?Number(t):""===t||"null"===t?null:t)}function D(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const $={setDataAttribute(t,e,n){t.setAttribute(`data-bs-${D(e)}`,n)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${D(e)}`)},getDataAttributes(t){if(!t)return{};const e={};return Object.keys(t.dataset).filter((t=>t.startsWith("bs"))).forEach((n=>{let i=n.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=L(t.dataset[n])})),e},getDataAttribute:(t,e)=>L(t.getAttribute(`data-bs-${D(e)}`)),offset(t){const e=t.getBoundingClientRect();return{top:e.top+window.pageYOffset,left:e.left+window.pageXOffset}},position:t=>({top:t.offsetTop,left:t.offsetLeft})},N={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const n=[];let i=t.parentNode;for(;i&&i.nodeType===Node.ELEMENT_NODE&&3!==i.nodeType;)i.matches(e)&&n.push(i),i=i.parentNode;return n},prev(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(", ");return this.find(e,t).filter((t=>!(t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")))(t)&&a(t)))}},C=new Map,k={set(t,e,n){C.has(t)||C.set(t,new Map);const i=C.get(t);i.has(e)||0===i.size?i.set(e,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)},get:(t,e)=>C.has(t)&&C.get(t).get(e)||null,remove(t,e){if(!C.has(t))return;const n=C.get(t);n.delete(e),0===n.size&&C.delete(t)}},j="carousel",X={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},M={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},q="next",P="prev",z="left",Y="right",B={ArrowLeft:Y,ArrowRight:z},H="slid.bs.carousel",R="active",K=".active.carousel-item";class V extends class{constructor(t){(t=o(t))&&(this._element=t,k.set(this._element,this.constructor.DATA_KEY,this))}dispose(){k.remove(this._element,this.constructor.DATA_KEY),x.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach((t=>{this[t]=null}))}_queueCallback(t,e,n=!0){((t,e,n=!0)=>{if(!n)return void d(t);const r=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const i=Number.parseFloat(e),s=Number.parseFloat(n);return i||s?(e=e.split(",")[0],n=n.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(n))):0})(e)+5;let o=!1;const a=({target:n})=>{n===e&&(o=!0,e.removeEventListener(i,a),d(t))};e.addEventListener(i,a),setTimeout((()=>{o||s(e)}),r)})(t,e,n)}static getInstance(t){return k.get(o(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.1.3"}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}{constructor(t,e){super(t),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._indicatorsElement=N.findOne(".carousel-indicators",this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return X}static get NAME(){return j}next(){this._slide(q)}nextWhenVisible(){!document.hidden&&a(this._element)&&this.next()}prev(){this._slide(P)}pause(t){t||(this._isPaused=!0),N.findOne(".carousel-item-next, .carousel-item-prev",this._element)&&(s(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(t){this._activeElement=N.findOne(K,this._element);const e=this._getItemIndex(this._activeElement);if(t>this._items.length-1||t<0)return;if(this._isSliding)return void x.one(this._element,H,(()=>this.to(t)));if(e===t)return this.pause(),void this.cycle();const n=t>e?q:P;this._slide(n,this._items[t])}_getConfig(t){return t={...X,...$.getDataAttributes(this._element),..."object"==typeof t?t:{}},((t,e,n)=>{Object.keys(n).forEach((i=>{const s=n[i],o=e[i],a=o&&r(o)?"element":null==(l=o)?`${l}`:{}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();var l;if(!new RegExp(s).test(a))throw new TypeError(`${t.toUpperCase()}: Option "${i}" provided type "${a}" but expected type "${s}".`)}))})(j,t,M),t}_handleSwipe(){const t=Math.abs(this.touchDeltaX);if(t<=40)return;const e=t/this.touchDeltaX;this.touchDeltaX=0,e&&this._slide(e>0?Y:z)}_addEventListeners(){this._config.keyboard&&x.on(this._element,"keydown.bs.carousel",(t=>this._keydown(t))),"hover"===this._config.pause&&(x.on(this._element,"mouseenter.bs.carousel",(t=>this.pause(t))),x.on(this._element,"mouseleave.bs.carousel",(t=>this.cycle(t)))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const t=t=>this._pointerEvent&&("pen"===t.pointerType||"touch"===t.pointerType),e=e=>{t(e)?this.touchStartX=e.clientX:this._pointerEvent||(this.touchStartX=e.touches[0].clientX)},n=t=>{this.touchDeltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this.touchStartX},i=e=>{t(e)&&(this.touchDeltaX=e.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((t=>this.cycle(t)),500+this._config.interval))};N.find(".carousel-item img",this._element).forEach((t=>{x.on(t,"dragstart.bs.carousel",(t=>t.preventDefault()))})),this._pointerEvent?(x.on(this._element,"pointerdown.bs.carousel",(t=>e(t))),x.on(this._element,"pointerup.bs.carousel",(t=>i(t))),this._element.classList.add("pointer-event")):(x.on(this._element,"touchstart.bs.carousel",(t=>e(t))),x.on(this._element,"touchmove.bs.carousel",(t=>n(t))),x.on(this._element,"touchend.bs.carousel",(t=>i(t))))}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=B[t.key];e&&(t.preventDefault(),this._slide(e))}_getItemIndex(t){return this._items=t&&t.parentNode?N.find(".carousel-item",t.parentNode):[],this._items.indexOf(t)}_getItemByOrder(t,e){const n=t===q;return((t,e,n,i)=>{let s=t.indexOf(e);if(-1===s)return t[!n&&i?t.length-1:0];const r=t.length;return s+=n?1:-1,i&&(s=(s+r)%r),t[Math.max(0,Math.min(s,r-1))]})(this._items,e,n,this._config.wrap)}_triggerSlideEvent(t,e){const n=this._getItemIndex(t),i=this._getItemIndex(N.findOne(K,this._element));return x.trigger(this._element,"slide.bs.carousel",{relatedTarget:t,direction:e,from:i,to:n})}_setActiveIndicatorElement(t){if(this._indicatorsElement){const e=N.findOne(".active",this._indicatorsElement);e.classList.remove(R),e.removeAttribute("aria-current");const n=N.find("[data-bs-target]",this._indicatorsElement);for(let e=0;e<n.length;e++)if(Number.parseInt(n[e].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(t)){n[e].classList.add(R),n[e].setAttribute("aria-current","true");break}}}_updateInterval(){const t=this._activeElement||N.findOne(K,this._element);if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);e?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=e):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(t,e){const n=this._directionToOrder(t),i=N.findOne(K,this._element),s=this._getItemIndex(i),r=e||this._getItemByOrder(n,i),o=this._getItemIndex(r),a=Boolean(this._interval),l=n===q,c=l?"carousel-item-start":"carousel-item-end",u=l?"carousel-item-next":"carousel-item-prev",d=this._orderToDirection(n);if(r&&r.classList.contains(R))return void(this._isSliding=!1);if(this._isSliding)return;if(this._triggerSlideEvent(r,d).defaultPrevented)return;if(!i||!r)return;this._isSliding=!0,a&&this.pause(),this._setActiveIndicatorElement(r),this._activeElement=r;const h=()=>{x.trigger(this._element,H,{relatedTarget:r,direction:d,from:s,to:o})};if(this._element.classList.contains("slide")){r.classList.add(u),(t=>{t.offsetHeight})(r),i.classList.add(c),r.classList.add(c);const t=()=>{r.classList.remove(c,u),r.classList.add(R),i.classList.remove(R,u,c),this._isSliding=!1,setTimeout(h,0)};this._queueCallback(t,i,!0)}else i.classList.remove(R),r.classList.add(R),this._isSliding=!1,h();a&&this.cycle()}_directionToOrder(t){return[Y,z].includes(t)?u()?t===z?P:q:t===z?q:P:t}_orderToDirection(t){return[q,P].includes(t)?u()?t===P?z:Y:t===P?Y:z:t}static carouselInterface(t,e){const n=V.getOrCreateInstance(t,e);let{_config:i}=n;"object"==typeof e&&(i={...i,...e});const s="string"==typeof e?e:i.slide;if("number"==typeof e)n.to(e);else if("string"==typeof s){if(void 0===n[s])throw new TypeError(`No method named "${s}"`);n[s]()}else i.interval&&i.ride&&(n.pause(),n.cycle())}static jQueryInterface(t){return this.each((function(){V.carouselInterface(this,t)}))}static dataApiClickHandler(t){const e=(t=>{const e=(t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&"#"!==n?n.trim():null}return e})(this);return e?document.querySelector(e):null})();if(!e||!e.classList.contains("carousel"))return;const n={...$.getDataAttributes(e),...$.getDataAttributes(this)},i=this.getAttribute("data-bs-slide-to");i&&(n.interval=!1),V.carouselInterface(e,n),i&&V.getInstance(e).to(i),t.preventDefault()}}var W,Z;x.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",V.dataApiClickHandler),x.on(window,"load.bs.carousel.data-api",(()=>{const t=N.find('[data-bs-ride="carousel"]');for(let e=0,n=t.length;e<n;e++)V.carouselInterface(t[e],V.getInstance(t[e]))})),W=V,Z=()=>{const t=l();if(t){const e=W.NAME,n=t.fn[e];t.fn[e]=W.jQueryInterface,t.fn[e].Constructor=W,t.fn[e].noConflict=()=>(t.fn[e]=n,W.jQueryInterface)}},"loading"===document.readyState?(c.length||document.addEventListener("DOMContentLoaded",(()=>{c.forEach((t=>t()))})),c.push(Z)):Z();const F={Carousel:V};class Q{static defaultSelector="extended-carousel";static defaultSize=3;selector;slidesToShow;el;constructor(t){this.el=t,t.dataset.ecThumbnail?this.setThumbnail(this.el):(this.selector=Q.defaultSelector,this.slidesToShow=this.setSize(this.el),this.setRespondsiveness(this.slidesToShow),this.setTransition(this.slidesToShow))}setRespondsiveness(t){let e=this.el.querySelectorAll(".carousel-item");if(1==t)return!1;e.forEach((n=>{let i=n.nextElementSibling;for(let s=1;s<t;s++){null==i&&(i=e[0]);let t=i.cloneNode(!0);n.appendChild(t.children[0]),i=i.nextElementSibling}}))}setTransition(t){let e="",n=document.querySelector('link[href="./css/extended-carousel.css"]').sheet;t>1&&(e=`\n\t\t\t\t@media (min-width: 1200px) {\n\t\t\t\t\t#${this.el.id}[data-ec-toggle="${this.selector}"] .carousel-inner .carousel-item-next, \n\t\t\t\t\t#${this.el.id}[data-ec-toggle="${this.selector}"] .carousel-inner .carousel-item-end.active { \n\t\t\t\t\t\ttransform: translateX(${100/t}%);\n\t\t\t\t\t\ttransition: transform 0.5s linear;\n\t\t\t\t\t}\n\t\t\t\t\t#${this.el.id}[data-ec-toggle="${this.selector}"] .carousel-inner .carousel-item-start.active, \n\t\t\t\t\t#${this.el.id}[data-ec-toggle="${this.selector}"] .carousel-inner .carousel-item-prev{ \n\t\t\t\t\t\ttransform: translateX(${-100/t}%);\n\t\t\t\t\t\ttransition: transform 0.5s linear;\n\t\t\t\t\t}\n\t\t\t\t\t#${this.el.id}[data-ec-toggle="${this.selector}"] .carousel-inner .carousel-item-end,\n\t\t\t\t\t#${this.el.id}[data-ec-toggle="${this.selector}"] .carousel-inner .carousel-item-start { \n\t\t\t\t\t\ttransform: translateX(0);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t`),n.insertRule(e)}setThumbnail(t){if(!t.dataset.ecThumbnail)return!1;let e=t.querySelectorAll(".carousel")[0],n=t.querySelectorAll(".carousel")[1];if(!e||!n)return!1;let i=F.Carousel.getOrCreateInstance(e),s=F.Carousel.getOrCreateInstance(n);e.addEventListener("slide.bs.carousel",(t=>{"left"==t.direction&&s.next(),"right"==t.direction&&s.prev()})),n.querySelectorAll(".carousel-item div").forEach((t=>{t.addEventListener("click",(e=>{let n=parseInt(t.dataset.slideNumber);i.to(n),e.preventDefault()}))}))}setSize(t){return t.dataset.ecSize||Q.defaultSize}}const U=Q},693:(t,e,n)=>{var i,s=n(159);i=function(){document.querySelectorAll(`.carousel[data-ec-toggle="${s.Z.defaultSelector}"]`).forEach((t=>{new s.Z(t)})),document.querySelectorAll('[data-ec-thumbnail="true"]').forEach((t=>{new s.Z(t)}))},"loading"!=document.readyState?i():document.addEventListener&&document.addEventListener("DOMContentLoaded",i)}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n(159),n(693)})();