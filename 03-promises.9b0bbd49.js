!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequire7bc7;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequire7bc7=r);var i=r("6JpON");document.querySelector(".form").addEventListener("submit",(function(n){var t=function(t){var o=+a.value*t+ +r.value,u=t+1;(function(n,t,o){var r=o.currentTarget.elements,a=r.delay,u=r.step,l=r.amount;if(!(a.value<0||u.value<0||l.value<0))return console.log(t),new Promise((function(e,o){var r=Math.random()>.3;setTimeout((function(){r?e({position:n,delays:t}):o({position:n,delays:t})}),t)}));e(i).Notify.warning("Please enter a positive number")})(u,o,n).then((function(){e(i).Notify.success("✅ Fulfilled promise ".concat(u," in ").concat(o,"ms"))})).catch((function(){e(i).Notify.failure("❌ Rejected promise ".concat(u," in ").concat(o,"ms"))}))};n.preventDefault();for(var o=n.currentTarget.elements,r=o.delay,a=o.step,u=o.amount,l=0;l<=Number(u.value)-1;l++)t(l);n.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.9b0bbd49.js.map