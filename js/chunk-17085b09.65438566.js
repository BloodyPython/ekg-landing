(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17085b09"],{"06ed":function(t,e,i){t.exports=i.p+"img/logo_landing_white.3056872f.png"},"7a74":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{padless:""}},[a("v-card",{staticClass:"text-center",attrs:{flat:"",tile:"",color:"secondary",width:"100%"}},[a("v-row",{staticStyle:{padding:"10rem 1rem"},attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-img",{staticClass:"mx-auto footer-logo-animate",attrs:{src:i("06ed"),contain:"",height:t.logoMaxSize,width:t.logoMaxSize}})],1),a("v-row",{staticClass:"justify-center",attrs:{"no-gutters":""}},t._l(t.linksSocials,(function(e){return a("v-col",{key:e.icon,staticClass:"mt-8",class:{"order-last":"web"==e.icon},attrs:{cols:"6"}},[a("v-btn",{staticClass:"white--text",attrs:{icon:"",href:e.href,target:"_blank"}},[a("v-icon",{staticClass:"icons-animate",attrs:{"x-large":""}},[t._v("mdi-"+t._s(e.icon))])],1)],1)})),1)],1),a("v-divider"),a("v-card-text",{staticClass:"blue-grey--text text--lighten-4"},[t._v(" © "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("Марканта")])])],1)],1)},o=[],s=i("d4ec"),n=i("262e"),r=i("2caf"),c=i("9ab4"),l=i("0d59"),p=i("60a3"),u=function(t){Object(n["a"])(i,t);var e=Object(r["a"])(i);function i(){var t;return Object(s["a"])(this,i),t=e.apply(this,arguments),t.logoMaxSize=250,t.linksSocials=[new l["b"]("instagram","https://www.instagram.com/markanta.go/"),new l["b"]("facebook","https://www.facebook.com/markanta.go"),new l["b"]("web","https://www.markanta.go"),new l["b"]("youtube","https://www.youtube.com/channel/UCuGgLBn0pKAQCTUKvEoUOsA"),new l["b"]("telegram","https://t.me/markantago")],t}return i}(p["c"]);u=Object(c["a"])([p["a"]],u);var d=u,h=d,f=(i("bd1f"),i("2877")),v=i("6544"),b=i.n(v),m=i("8336"),g=i("b0af"),w=i("99d9"),y=i("62ad"),x=i("5530"),j=(i("8ce9"),i("7560")),O=j["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(x["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(x["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}}),$=(i("a9e3"),i("c7cd"),i("b5b6"),i("8dd9")),C=i("fe6c"),k=i("58df");function _(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(k["a"])(Object(C["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}var B=i("d10f"),A=i("80d2"),P=Object(k["a"])($["a"],_("footer",["height","inset"]),B["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(x["a"])(Object(x["a"])({},$["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(x["a"])(Object(x["a"])({},$["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(A["d"])(t),left:Object(A["d"])(this.computedLeft),right:Object(A["d"])(this.computedRight),bottom:Object(A["d"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}}),U=i("132d"),V=i("adda"),S=i("0fd9"),N=Object(f["a"])(h,a,o,!1,null,null,null);e["default"]=N.exports;b()(N,{VBtn:m["a"],VCard:g["a"],VCardText:w["b"],VCol:y["a"],VDivider:O,VFooter:P,VIcon:U["a"],VImg:V["a"],VRow:S["a"]})},"8ce9":function(t,e,i){},b5b6:function(t,e,i){},bd1f:function(t,e,i){"use strict";var a=i("dec8"),o=i.n(a);o.a},d10f:function(t,e,i){"use strict";var a=i("2b0e");e["a"]=a["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})},dec8:function(t,e,i){}}]);
//# sourceMappingURL=chunk-17085b09.65438566.js.map