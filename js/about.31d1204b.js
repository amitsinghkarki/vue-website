(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"4b85":function(t,e,n){},"4ec9":function(t,e,n){"use strict";var r=n("6d61"),a=n("6566");t.exports=r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),a)},6566:function(t,e,n){"use strict";var r=n("9bf2").f,a=n("7c73"),i=n("e2cc"),o=n("0366"),s=n("19aa"),c=n("2266"),u=n("7dd0"),l=n("2626"),f=n("83ab"),d=n("f183").fastKey,v=n("69f3"),h=v.set,p=v.getterFor;t.exports={getConstructor:function(t,e,n,u){var l=t((function(t,r){s(t,l,e),h(t,{type:e,index:a(null),first:void 0,last:void 0,size:0}),f||(t.size=0),void 0!=r&&c(r,t[u],{that:t,AS_ENTRIES:n})})),v=p(e),g=function(t,e,n){var r,a,i=v(t),o=b(t,e);return o?o.value=n:(i.last=o={index:a=d(e,!0),key:e,value:n,previous:r=i.last,next:void 0,removed:!1},i.first||(i.first=o),r&&(r.next=o),f?i.size++:t.size++,"F"!==a&&(i.index[a]=o)),t},b=function(t,e){var n,r=v(t),a=d(e);if("F"!==a)return r.index[a];for(n=r.first;n;n=n.next)if(n.key==e)return n};return i(l.prototype,{clear:function(){var t=this,e=v(t),n=e.index,r=e.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;e.first=e.last=void 0,f?e.size=0:t.size=0},delete:function(t){var e=this,n=v(e),r=b(e,t);if(r){var a=r.next,i=r.previous;delete n.index[r.index],r.removed=!0,i&&(i.next=a),a&&(a.previous=i),n.first==r&&(n.first=a),n.last==r&&(n.last=i),f?n.size--:e.size--}return!!r},forEach:function(t){var e,n=v(this),r=o(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){r(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!b(this,t)}}),i(l.prototype,n?{get:function(t){var e=b(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),f&&r(l.prototype,"size",{get:function(){return v(this).size}}),l},setStrong:function(t,e,n){var r=e+" Iterator",a=p(e),i=p(r);u(t,e,(function(t,e){h(this,{type:r,target:t,state:a(t),kind:e,last:void 0})}),(function(){var t=i(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),l(e)}}},"6d61":function(t,e,n){"use strict";var r=n("23e7"),a=n("da84"),i=n("94ca"),o=n("6eeb"),s=n("f183"),c=n("2266"),u=n("19aa"),l=n("861d"),f=n("d039"),d=n("1c7e"),v=n("d44e"),h=n("7156");t.exports=function(t,e,n){var p=-1!==t.indexOf("Map"),g=-1!==t.indexOf("Weak"),b=p?"set":"add",y=a[t],m=y&&y.prototype,x=y,j={},w=function(t){var e=m[t];o(m,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(g&&!l(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!l(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!l(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})},C=i(t,"function"!=typeof y||!(g||m.forEach&&!f((function(){(new y).entries().next()}))));if(C)x=n.getConstructor(e,t,p,b),s.REQUIRED=!0;else if(i(t,!0)){var O=new x,_=O[b](g?{}:-0,1)!=O,k=f((function(){O.has(1)})),S=d((function(t){new y(t)})),E=!g&&f((function(){var t=new y,e=5;while(e--)t[b](e,e);return!t.has(-0)}));S||(x=e((function(e,n){u(e,x,t);var r=h(new y,e,x);return void 0!=n&&c(n,r[b],{that:r,AS_ENTRIES:p}),r})),x.prototype=m,m.constructor=x),(k||E)&&(w("delete"),w("has"),p&&w("get")),(E||_)&&w(b),g&&m.clear&&delete m.clear}return j[t]=x,r({global:!0,forced:x!=y},j),v(x,t),g||n.setStrong(x,t,p),x}},"9b19":function(t,e,n){t.exports=n.p+"img/logo.63a7d78d.svg"},a523:function(t,e,n){"use strict";n("4de4"),n("b64b"),n("2ca0"),n("99af"),n("20f6"),n("4b85"),n("498a"),n("a15b");var r=n("2b0e");function a(t){return r["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,n){var r=n.props,a=n.data,i=n.children;a.staticClass="".concat(t," ").concat(a.staticClass||"").trim();var o=a.attrs;if(o){a.attrs={};var s=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}));s.length&&(a.staticClass+=" ".concat(s.join(" ")))}return r.id&&(a.domProps=a.domProps||{},a.domProps.id=r.id),e(r.tag,a,i)}})}var i=n("d9f7");e["a"]=a("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,a=e.data,o=e.children,s=a.attrs;return s&&(a.attrs={},n=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}))),r.id&&(a.domProps=a.domProps||{},a.domProps.id=r.id),t(r.tag,Object(i["a"])(a,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),o)}})},bb51:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("hello-world")},a=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),r("v-col",{staticClass:"mb-4"},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),r("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),r("br"),t._v("please join our online "),r("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),r("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),r("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),r("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},o=[],s={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},c=s,u=n("2877"),l=n("6544"),f=n.n(l),d=n("ade3"),v=n("5530"),h=(n("a9e3"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("caad"),n("159b"),n("2ca0"),n("4b85"),n("2b0e")),p=n("d9f7"),g=n("80d2"),b=["sm","md","lg","xl"],y=function(){return b.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),m=function(){return b.reduce((function(t,e){return t["offset"+Object(g["o"])(e)]={type:[String,Number],default:null},t}),{})}(),x=function(){return b.reduce((function(t,e){return t["order"+Object(g["o"])(e)]={type:[String,Number],default:null},t}),{})}(),j={col:Object.keys(y),offset:Object.keys(m),order:Object.keys(x)};function w(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var a=e.replace(t,"");r+="-".concat(a)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n),r.toLowerCase()):r.toLowerCase()}}var C=new Map,O=h["a"].extend({name:"v-col",functional:!0,props:Object(v["a"])(Object(v["a"])(Object(v["a"])(Object(v["a"])({cols:{type:[Boolean,String,Number],default:!1}},y),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},x),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,r=e.data,a=e.children,i=(e.parent,"");for(var o in n)i+=String(n[o]);var s=C.get(i);return s||function(){var t,e;for(e in s=[],j)j[e].forEach((function(t){var r=n[t],a=w(e,t,r);a&&s.push(a)}));var r=s.some((function(t){return t.startsWith("col-")}));s.push((t={col:!r||!n.cols},Object(d["a"])(t,"col-".concat(n.cols),n.cols),Object(d["a"])(t,"offset-".concat(n.offset),n.offset),Object(d["a"])(t,"order-".concat(n.order),n.order),Object(d["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),C.set(i,s)}(),t(n.tag,Object(p["a"])(r,{class:s}),a)}}),_=n("a523"),k=n("adda"),S=(n("2532"),n("99af"),["sm","md","lg","xl"]),E=["start","end","center"];function z(t,e){return S.reduce((function(n,r){return n[t+Object(g["o"])(r)]=e(),n}),{})}var N=function(t){return[].concat(E,["baseline","stretch"]).includes(t)},W=z("align",(function(){return{type:String,default:null,validator:N}})),V=function(t){return[].concat(E,["space-between","space-around"]).includes(t)},I=z("justify",(function(){return{type:String,default:null,validator:V}})),L=function(t){return[].concat(E,["space-between","space-around","stretch"]).includes(t)},P=z("alignContent",(function(){return{type:String,default:null,validator:L}})),A={align:Object.keys(W),justify:Object.keys(I),alignContent:Object.keys(P)},B={align:"align",justify:"justify",alignContent:"align-content"};function F(t,e,n){var r=B[t];if(null!=n){if(e){var a=e.replace(t,"");r+="-".concat(a)}return r+="-".concat(n),r.toLowerCase()}}var M=new Map,R=h["a"].extend({name:"v-row",functional:!0,props:Object(v["a"])(Object(v["a"])(Object(v["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:N}},W),{},{justify:{type:String,default:null,validator:V}},I),{},{alignContent:{type:String,default:null,validator:L}},P),render:function(t,e){var n=e.props,r=e.data,a=e.children,i="";for(var o in n)i+=String(n[o]);var s=M.get(i);return s||function(){var t,e;for(e in s=[],A)A[e].forEach((function(t){var r=n[t],a=F(e,t,r);a&&s.push(a)}));s.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(d["a"])(t,"align-".concat(n.align),n.align),Object(d["a"])(t,"justify-".concat(n.justify),n.justify),Object(d["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),M.set(i,s)}(),t(n.tag,Object(p["a"])(r,{staticClass:"row",class:s}),a)}}),T=Object(u["a"])(c,i,o,!1,null,null,null),$=T.exports;f()(T,{VCol:O,VContainer:_["a"],VImg:k["a"],VRow:R});var q={name:"Home",components:{HelloWorld:$}},D=q,H=Object(u["a"])(D,r,a,!1,null,null,null);e["default"]=H.exports},f820:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")])])}],i=n("2877"),o={},s=Object(i["a"])(o,r,a,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=about.31d1204b.js.map