(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["game"],{"4b85":function(t,e,i){},"615b":function(t,e,i){},"6a7a":function(t,e,i){"use strict";i("f287")},"6ece":function(t,e,i){},"7d36":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-main",[i("h1",{attrs:{dark:"",centered:""}},[t._v("This is a Game page")]),i("v-container",{attrs:{align:"centre"}},[i("Ticktac")],1)],1)},r=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticStyle:{width:"400px",height:"400px"}},[i("v-card",{directives:[{name:"show",rawName:"v-show",value:t.winnername,expression:"winnername"}],attrs:{height:"150px",width:"400px",overflow:"true"}},[i("v-card-title",{staticClass:"headline red lighten-2"},[t._v(" Game Over ")]),i("v-spacer"),i("v-card-text",["draw"==t.winnername?i("h1",{attrs:{"x-large":""}},[t._v(" Match Draw ")]):i("h1",{attrs:{"x-large":""}},[t._v(" "+t._s(t.winnername)+" is the winner ")])]),i("v-spacer"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.clear(t.thils)}}},[t._v(" Restart ")]),i("v-spacer")],1)],1),t._l(9,(function(e){return i("span",{key:e},[i("v-btn",{attrs:{raised:"",width:"30%",height:"30%","x-large":"",disabled:""!=t.winnername||""!=t.cells[e],id:e,value:t.cells[e]},on:{click:function(i){return t.mark(e)}}},[t._v(" "+t._s(t.cells[e])+" ")])],1)})),t._v(" clicked "+t._s(t.click)+" times and values are "+t._s(t.cells)+" ")],2)},s=[],o=(i("159b"),{name:"Ticktac",data:function(){return{click:0,cells:{1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:""},winConditions:[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]],winnername:""}},methods:{clear:function(){this.click=1;while(this.click<"10")this.cells[this.click]="",this.click+=1;this.click=0,this.winnername=""},winner:function(t){var e=this;t.forEach((function(t){e.cells[t[0]]==e.cells[t[1]]&&e.cells[t[0]]==e.cells[t[2]]&&""!=e.cells[t[0]]&&(e.winnername=e.cells[t[0]])}))},mark:function(t){this.click+=1,this.click%2==0?this.cells[t]="O":this.cells[t]="X",this.click>4&&this.winner(this.winConditions),9==this.click&&""==this.winnername&&(this.winnername="draw")}}}),l=o,c=(i("6a7a"),i("2877")),d=i("6544"),u=i.n(d),h=i("8336"),f=i("5530"),v=(i("a9e3"),i("0481"),i("615b"),i("10d2")),p=i("2b0e"),g=i("ade3"),m=(i("c7cd"),i("6ece"),i("99af"),i("d9f7"));function y(){for(var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length,n=new Array(i>1?i-1:0),r=1;r<i;r++)n[r-1]=arguments[r];return(t=Array()).concat.apply(t,[e].concat(n))}function b(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",i=arguments.length>2?arguments[2]:void 0;return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:i},origin:{type:String,default:e}},render:function(e,i){var n="transition".concat(i.props.group?"-group":""),r={props:{name:t,mode:i.props.mode},on:{beforeEnter:function(t){t.style.transformOrigin=i.props.origin,t.style.webkitTransformOrigin=i.props.origin}}};return i.props.leaveAbsolute&&(r.on.leave=y(r.on.leave,(function(t){var e=t.offsetTop,i=t.offsetLeft,n=t.offsetWidth,r=t.offsetHeight;t._transitionInitialStyles={position:t.style.position,top:t.style.top,left:t.style.left,width:t.style.width,height:t.style.height},t.style.position="absolute",t.style.top=e+"px",t.style.left=i+"px",t.style.width=n+"px",t.style.height=r+"px"})),r.on.afterLeave=y(r.on.afterLeave,(function(t){if(t&&t._transitionInitialStyles){var e=t._transitionInitialStyles,i=e.position,n=e.top,r=e.left,a=e.width,s=e.height;delete t._transitionInitialStyles,t.style.position=i||"",t.style.top=n||"",t.style.left=r||"",t.style.width=a||"",t.style.height=s||""}}))),i.props.hideOnLeave&&(r.on.leave=y(r.on.leave,(function(t){t._initialDisplay=t.style.display,t.style.display="none"})),r.on.afterLeave=y(r.on.afterLeave,(function(t){t&&(t.style.display=t._initialDisplay||"")}))),e(n,Object(m["a"])(i.data,r),i.children)}}}function _(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:t,functional:!0,props:{mode:{type:String,default:i}},render:function(i,n){return i("transition",Object(m["a"])(n.data,{props:{name:t},on:e}),n.children)}}}var w=i("80d2"),k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=e?"width":"height",n="offset".concat(Object(w["o"])(i));return{beforeEnter:function(t){t._parent=t.parentNode,t._initialStyle=Object(g["a"])({transition:t.style.transition,overflow:t.style.overflow},i,t.style[i])},enter:function(e){var r=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden";var a="".concat(e[n],"px");e.style[i]="0",e.offsetHeight,e.style.transition=r.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((function(){e.style[i]=a}))},afterEnter:a,enterCancelled:a,leave:function(t){t._initialStyle=Object(g["a"])({transition:"",overflow:t.style.overflow},i,t.style[i]),t.style.overflow="hidden",t.style[i]="".concat(t[n],"px"),t.offsetHeight,requestAnimationFrame((function(){return t.style[i]="0"}))},afterLeave:r,leaveCancelled:r};function r(e){t&&e._parent&&e._parent.classList.remove(t),a(e)}function a(t){var e=t._initialStyle[i];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[i]=e),delete t._initialStyle}},O=(b("carousel-transition"),b("carousel-reverse-transition"),b("tab-transition"),b("tab-reverse-transition"),b("menu-transition"),b("fab-transition","center center","out-in"),b("dialog-transition"),b("dialog-bottom-transition"),b("dialog-top-transition"),b("fade-transition")),x=(b("scale-transition"),b("scroll-x-transition"),b("scroll-x-reverse-transition"),b("scroll-y-transition"),b("scroll-y-reverse-transition"),b("slide-x-transition")),B=(b("slide-x-reverse-transition"),b("slide-y-transition"),b("slide-y-reverse-transition"),_("expand-transition",k()),_("expand-x-transition",k("",!0)),i("90a2")),C=i("a9ad"),j=i("fe6c");function S(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return p["a"].extend({name:"proxyable",model:{prop:t,event:e},props:Object(g["a"])({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:Object(g["a"])({},t,(function(t){this.internalLazyValue=t}))})}var V=S(),z=V,L=i("7560"),$=i("58df"),E=Object($["a"])(C["a"],Object(j["b"])(["absolute","fixed","top","bottom"]),z,L["a"]),P=E.extend({name:"v-progress-linear",directives:{intersect:B["a"]},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(w["d"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(w["d"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(g["a"])(t,this.isReversed?"right":"left",Object(w["d"])(this.normalizedValue,"%")),Object(g["a"])(t,"width",Object(w["d"])(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),t},classes:function(){return Object(f["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?O:x},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(w["d"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(w["i"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(g["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),i=e.width;this.internalValue=t.offsetX/i*100}},onObserve:function(t,e,i){this.isVisible=i},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(w["d"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),T=P,A=p["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(T,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),N=i("1c87"),q=Object($["a"])(A,N["a"],v["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(f["a"])(Object(f["a"])({"v-card":!0},N["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},v["a"].options.computed.classes.call(this))},styles:function(){var t=Object(f["a"])({},v["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=A.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),i=e.tag,n=e.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(i,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}}),H=Object(w["e"])("v-card__actions"),I=(Object(w["e"])("v-card__subtitle"),Object(w["e"])("v-card__text")),R=Object(w["e"])("v-card__title"),D=i("a523"),F=i("2fa4"),G=Object(c["a"])(l,a,s,!1,null,"16e468a9",null),M=G.exports;u()(G,{VBtn:h["a"],VCard:q,VCardActions:H,VCardText:I,VCardTitle:R,VContainer:D["a"],VSpacer:F["a"]});var W={name:"Game",components:{Ticktac:M}},J=W,X=i("f6c4"),K=Object(c["a"])(J,n,r,!1,null,null,null);e["default"]=K.exports;u()(K,{VContainer:D["a"],VMain:X["a"]})},a523:function(t,e,i){"use strict";i("4de4"),i("b64b"),i("2ca0"),i("99af"),i("20f6"),i("4b85"),i("498a"),i("a15b");var n=i("2b0e");function r(t){return n["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,i){var n=i.props,r=i.data,a=i.children;r.staticClass="".concat(t," ").concat(r.staticClass||"").trim();var s=r.attrs;if(s){r.attrs={};var o=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(r.staticClass+=" ".concat(o.join(" ")))}return n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),e(n.tag,r,a)}})}var a=i("d9f7");e["a"]=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var i,n=e.props,r=e.data,s=e.children,o=r.attrs;return o&&(r.attrs={},i=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}))),n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),t(n.tag,Object(a["a"])(r,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(i||[])}),s)}})},f287:function(t,e,i){}}]);
//# sourceMappingURL=game.4ba9515c.js.map