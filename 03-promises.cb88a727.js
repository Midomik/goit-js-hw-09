function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire7bc7;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},t.parcelRequire7bc7=o);var l=o("7Y9D8");function i(e,t,n){const{delay:r,step:o,amount:l}=n.currentTarget.elements;return console.log(t),new Promise(((n,r)=>{const o=Math.random()>.3;setTimeout((()=>{o?n({position:e,delays:t}):r({position:e,delays:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const{delay:n,step:r,amount:o}=t.currentTarget.elements;if(n.value<0||r.value<0||o.value<0)e(l).Notify.warning("Please enter a positive number");else{for(let u=0;u<=Number(o.value)-1;u++){const o=+r.value*u+ +n.value;let s=u+1;i(s,o,t).then((()=>{e(l).Notify.success(`✅ Fulfilled promise ${s} in ${o}ms`)})).catch((()=>{e(l).Notify.failure(`❌ Rejected promise ${s} in ${o}ms`)}))}t.currentTarget.reset()}}));
//# sourceMappingURL=03-promises.cb88a727.js.map