(function(e){function t(t){for(var r,a,u=t[0],c=t[1],s=t[2],l=0,p=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function u(e){return c.p+"js/"+({about:"about",contact:"contact",exp:"exp",game:"game",skills:"skills"}[e]||e)+"."+{about:"31d1204b",contact:"ba5ca4b5",exp:"8cb4b7ee",game:"4ba9515c",skills:"bed6446f"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1,game:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about",contact:"contact",exp:"exp",game:"game",skills:"skills"}[e]||e)+"."+{about:"f0222215",contact:"31d6cfe0",exp:"31d6cfe0",game:"019fa96c",skills:"31d6cfe0"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){s=p[u],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var p=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="dist/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("div",{staticClass:"d-flex align-center"},[r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"amit pic",src:n("f6de"),transition:"scale-transition",width:"40"}})],1),r("v-btn",{attrs:{text:"",to:"/home"}},[e._v(" AMIT SINGH ")]),r("v-btn",{attrs:{text:"",to:"/game"}},[e._v(" Game ")]),e._v(" "),r("v-spacer"),r("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[r("span",{staticClass:"mr-2"},[e._v("Latest Release")]),r("v-icon",[e._v("mdi-open-in-new")])],1)],1),r("v-main",[r("router-view",{attrs:{centered:""}})],1)],1)},o=[],i={name:"App",data:function(){return{}}},u=i,c=n("2877"),s=n("6544"),l=n.n(s),p=n("7496"),f=n("40dc"),d=n("8336"),m=n("132d"),b=n("adda"),h=n("f6c4"),v=n("2fa4"),g=Object(c["a"])(u,a,o,!1,null,null,null),y=g.exports;l()(g,{VApp:p["a"],VAppBar:f["a"],VBtn:d["a"],VIcon:m["a"],VImg:b["a"],VMain:h["a"],VSpacer:v["a"]});n("d3b7"),n("3ca3"),n("ddb0");var x=n("8c4f");r["a"].use(x["a"]);var w=[{path:"/",name:"Home",component:function(){return n.e("about").then(n.bind(null,"bb51"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/skills",name:"Skills",component:function(){return n.e("skills").then(n.bind(null,"ad83"))}},{path:"/exp",name:"Exp",component:function(){return n.e("exp").then(n.bind(null,"6a6d"))}},{path:"/contact",name:"Contact",component:function(){return n.e("contact").then(n.bind(null,"b8fa"))}},{path:"/game",name:"Game",component:function(){return n.e("game").then(n.bind(null,"7d36"))}}],k=new x["a"]({mode:"history",base:"dist/",routes:w}),_=k,j=n("f309");r["a"].use(j["a"]);var O=new j["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:_,vuetify:O,render:function(e){return e(y)}}).$mount("#app")},f6de:function(e,t,n){e.exports=n.p+"img/amit.aaef9951.jpg"}});
//# sourceMappingURL=app.0ca04ae4.js.map