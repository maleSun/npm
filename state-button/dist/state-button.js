!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("state-button",[],t):"object"==typeof exports?exports["state-button"]=t():e["state-button"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,n){"use strict";t.a={name:"state-button",props:["stateId","stateBit"],data:function(){return{sid:this.stateId,flag:this.stateBit}},created:function(){},methods:{changeState:function(e){var t=e.currentTarget.getAttribute("data-id");this.flag=0==this.flag,this.$emit("changeState",this.flag,t)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),a={install:function(e,t){e.component(r.a.name,r.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(a),t.default=a},function(e,t,n){"use strict";function r(e){n(3)}var a=n(0),o=n(9),i=n(8),s=r,c=i(a.a,o.a,!1,s,"data-v-7b4c2f7d",null);t.a=c.exports},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(6)("2062882e",r,!0,{})},function(e,t,n){t=e.exports=n(5)(!1),t.push([e.i,'.oval[data-v-7b4c2f7d]{position:relative;display:inline-block;vertical-align:middle;width:1.6em;height:1.6em;line-height:0;background:#ccc;z-index:666;transition:all 1.2s}.circle[data-v-7b4c2f7d],.oval[data-v-7b4c2f7d]:after,.oval[data-v-7b4c2f7d]:before{position:absolute;display:block;top:0;height:1.6em;width:1.6em;border-radius:50%;transition:all .6s;z-index:1}.oval[data-v-7b4c2f7d]:after,.oval[data-v-7b4c2f7d]:before{content:"";background:#ccc;z-index:0;transition:all 1.2s}.circle[data-v-7b4c2f7d]{background:#f40;left:-.8em}.oval[data-v-7b4c2f7d]:before{left:-.8em}.oval[data-v-7b4c2f7d]:after{right:-.8em}.oval-checked[data-v-7b4c2f7d],.oval-checked[data-v-7b4c2f7d]:after,.oval-checked[data-v-7b4c2f7d]:before{background:#f40}.circle-checked[data-v-7b4c2f7d]{left:.8em;background:#fff}',""])},function(e,t){function n(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var o=r(a);return[n].concat(a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"})).concat([o]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(r[o]=!0)}for(a=0;a<e.length;a++){var i=e[a];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=f[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(o(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],a=0;a<n.parts.length;a++)i.push(o(n.parts[a]));f[n.id]={id:n.id,refs:1,parts:i}}}}function a(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function o(e){var t,n,r=document.querySelector("style["+g+'~="'+e.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(m){var o=p++;r=l||(l=a()),t=i.bind(null,r,o,!1),n=i.bind(null,r,o,!0)}else r=a(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function i(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function s(e,t){var n=t.css,r=t.media,a=t.sourceMap;if(r&&e.setAttribute("media",r),b.ssrId&&e.setAttribute(g,t.id),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=n(7),f={},u=c&&(document.head||document.getElementsByTagName("head")[0]),l=null,p=0,v=!1,h=function(){},b=null,g="data-vue-ssr-id",m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,a){v=n,b=a||{};var o=d(e,t);return r(o),function(t){for(var n=[],a=0;a<o.length;a++){var i=o[a],s=f[i.id];s.refs--,n.push(s)}t?(o=d(e,t),r(o)):o=[];for(var a=0;a<n.length;a++){var s=n[a];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete f[s.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],r={},a=0;a<t.length;a++){var o=t[a],i=o[0],s=o[1],c=o[2],d=o[3],f={id:e+":"+a,css:s,media:c,sourceMap:d};r[i]?r[i].parts.push(f):n.push(r[i]={id:i,parts:[f]})}return n}},function(e,t){e.exports=function(e,t,n,r,a,o){var i,s=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(i=e,s=e.default);var d="function"==typeof s?s.options:s;t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0),n&&(d.functional=!0),a&&(d._scopeId=a);var f;if(o?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},d._ssrRegister=f):r&&(f=r),f){var u=d.functional,l=u?d.render:d.beforeCreate;u?(d._injectStyles=f,d.render=function(e,t){return f.call(t),l(e,t)}):d.beforeCreate=l?[].concat(l,f):[f]}return{esModule:i,exports:s,options:d}}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"state"},[n("div",{staticClass:"oval",class:1==e.flag?"oval-checked":""},[n("div",{staticClass:"circle",class:1==e.flag?"circle-checked":"",attrs:{"data-id":e.sid},on:{click:e.changeState}})])])},a=[],o={render:r,staticRenderFns:a};t.a=o}])});
//# sourceMappingURL=state-button.js.map