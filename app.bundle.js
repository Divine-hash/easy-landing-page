(()=>{var e={933:(e,t,r)=>{var o={"./bg-intro-desktop.svg":867,"./bg-intro-mobile.svg":131,"./favicon-32x32.png":198,"./footer-logo.svg":761,"./icon-api.svg":341,"./icon-budgeting.svg":38,"./icon-close.svg":909,"./icon-facebook.svg":802,"./icon-hamburger.svg":543,"./icon-instagram.svg":856,"./icon-onboarding.svg":700,"./icon-online.svg":385,"./icon-pinterest.svg":197,"./icon-twitter.svg":236,"./icon-youtube.svg":121,"./image-confetti.jpg":68,"./image-currency.jpg":715,"./image-mockups.png":449,"./image-plane.jpg":514,"./image-restaurant.jpg":775,"./logo.svg":937};function n(e){var t=i(e);return r(t)}function i(e){if(!r.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}n.keys=function(){return Object.keys(o)},n.resolve=i,e.exports=n,n.id=933},867:(e,t,r)=>{"use strict";e.exports=r.p+"./images/bg-intro-desktop.svg"},131:(e,t,r)=>{"use strict";e.exports=r.p+"./images/bg-intro-mobile.svg"},198:(e,t,r)=>{"use strict";e.exports=r.p+"./images/favicon-32x32.png"},761:(e,t,r)=>{"use strict";e.exports=r.p+"./images/footer-logo.svg"},341:(e,t,r)=>{"use strict";e.exports=r.p+"./images/icon-api.svg"},38:(e,t,r)=>{"use strict";e.exports=r.p+"./images/icon-budgeting.svg"},909:(e,t,r)=>{"use strict";e.exports=r.p+"./images/icon-close.svg"},802:(e,t,r)=>{"use strict";e.exports=r.p+"./images/icon-facebook.svg"},543:(e,t,r)=>{"use strict";e.exports=r.p+"./images/icon-hamburger.svg"},856:(e,t,r)=>{"use strict";e.exports=r.p+"./images/icon-instagram.svg"},700:(e,t,r)=>{"use strict";e.exports=r.p+"./images/icon-onboarding.svg"},385:(e,t,r)=>{"use strict";e.exports=r.p+"./images/icon-online.svg"},197:(e,t,r)=>{"use strict";e.exports=r.p+"./images/icon-pinterest.svg"},236:(e,t,r)=>{"use strict";e.exports=r.p+"./images/icon-twitter.svg"},121:(e,t,r)=>{"use strict";e.exports=r.p+"./images/icon-youtube.svg"},68:(e,t,r)=>{"use strict";e.exports=r.p+"./images/image-confetti.jpg"},715:(e,t,r)=>{"use strict";e.exports=r.p+"./images/image-currency.jpg"},449:(e,t,r)=>{"use strict";e.exports=r.p+"./images/image-mockups.png"},514:(e,t,r)=>{"use strict";e.exports=r.p+"./images/image-plane.jpg"},775:(e,t,r)=>{"use strict";e.exports=r.p+"./images/image-restaurant.jpg"},937:(e,t,r)=>{"use strict";e.exports=r.p+"./images/logo.svg"}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{"use strict";r(775);const e=JSON.parse('[{"img":"./images/image-currency.jpg","author":"By Claire Robinson","heading":"Receive money in any currency with no fees","paragraph":"The world is getting smaller and we\'re becoming more mobile. So why should you be forced to only recieve money in a single...","id":1},{"img":"./images/image-restaurant.jpg","author":"By Wilson Hutton","heading":"Treat yourself without worrying about money","paragraph":"Our simple budgeting feature allows you to seperate out your spending and set realistic limits each month, That means you...","id":2},{"img":"./images/image-plane.jpg","author":"By Wilson Hutton","heading":"Take your Easybank card wherever you go","paragraph":"We want you to enjoy your travels. This is why we don\'t charge any fees on purchases while you\'re abroad. We\'ll even show you...","id":3},{"img":"./images/image-confetti.jpg","author":"By Claire Robinson","heading":"Our invite-only Beta accounts are now live!","paragraph":"After a lot of hard work by the whole team, we\'re excited to launch our closed beta. It\'s easy to request an invite through the site...","id":4}]');function t(e){if(e.target.closest('[data-id="hamburger"]')){this.classList.toggle("active");var t=this.classList.contains("active");document.body.style.overflow=t?"hidden":""}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function n(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];r.forEach((function(t){({true:function(){return t.classList.add(e)},false:function(){return t.classList.remove(e)}})[t.getBoundingClientRect().top<document.documentElement.clientHeight]()}))}r(933);var i=[{func:function(e){e.addEventListener("click",t)},selector:'[data-id="nav-id"]'},{func:function(e){var t=e.querySelectorAll('[class^="reasons"]:not(.reasons-list)');document.addEventListener("scroll",(function(){return n.apply(void 0,["fade-in"].concat(function(e){if(Array.isArray(e))return o(e)}(e=t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()));var e}))},selector:'[data-id="reasons-id"]'},{func:function(e,t){var r=e.querySelectorAll(".card");document.addEventListener("scroll",(function(){return function(e,t){e.forEach((function(e){if(e.getBoundingClientRect().bottom<=document.documentElement.clientHeight){if("true"==e.dataset.loaded)return;e.dataset.loaded="true";var r=e.querySelectorAll(".animation-bg");setTimeout((function(){!function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];e.forEach((function(e){var t;return(t=e.classList).remove.apply(t,r)}))}(r,"animation-bg","animation-bg-text"),function(e,t){var r={cardImg:e.querySelector(".card-img"),cardAuthor:e.querySelector(".author"),cardHeading:e.querySelector("h3"),cardParagraph:e.querySelector("p")},o=t.find((function(t){return t.id==e.id}));r.cardImg.innerHTML='<a href="#"><img src="'.concat(o.img,'"></a>'),r.cardAuthor.textContent=o.author,r.cardHeading.textContent=o.heading,r.cardParagraph.textContent=o.paragraph}(e,t)}),2500)}}))}(r,t.data)}))},selector:'[data-id="latest-articles"]',options:{data:e}}];document.addEventListener("DOMContentLoaded",(function(){i.forEach((function(e){var t=document.querySelector(e.selector);t&&e.func(t,e.options)}))}))})()})();