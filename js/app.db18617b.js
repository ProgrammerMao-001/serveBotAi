(function(t){function e(e){for(var a,o,s=e[0],l=e[1],c=e[2],d=0,u=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&u.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(u.length)u.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(a=!1)}a&&(r.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},o={app:0},i={app:0},r=[];function s(t){return l.p+"js/"+({price:"price",product:"product",solution:"solution"}[t]||t)+"."+{"chunk-18bc09ad":"e3ecbce9",price:"0e2e6b26",product:"270c993b",solution:"b53d4e8b"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={"chunk-18bc09ad":1,price:1,product:1,solution:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({price:"price",product:"product",solution:"solution"}[t]||t)+"."+{"chunk-18bc09ad":"711c863d",price:"00f5b13d",product:"0d1cf73f",solution:"97ba8b67"}[t]+".css",i=l.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var c=r[s],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===a||d===i))return e()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){c=u[s],d=c.getAttribute("data-href");if(d===a||d===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[t],p.parentNode.removeChild(p),n(r)},p.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){o[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=r);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=s(t);var u=new Error;c=function(e){d.onerror=d.onload=null,clearTimeout(p);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,n[1](u)}i[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=d;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"050c":function(t,e,n){},"0b83":function(t,e,n){"use strict";n("31fd")},2073:function(t,e,n){},"31fd":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("5923"),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},i=[],r=n("1805"),s={},l=Object(r["a"])(s,o,i,!1,null,null,null),c=l.exports,d=n("f191"),u=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("headerComp",{staticClass:"container-header"}),e("main-slot",{staticClass:"container-main"},[e("router-view")],1),e("footerComp",{staticClass:"container-footer"})],1)},p=[],m=function(){var t=this,e=t._self._c;return e("main-slot",{staticClass:"container-header"},[e("div",{staticClass:"container-header-main"},[e("div",{staticClass:"left"},[e("el-image",{attrs:{src:"/images/logo.png",fit:"contain"}})],1),e("div",{staticClass:"center"},[e("div",{staticClass:"center-container"},t._l(t.routerList,(function(n,a){return e("div",{key:n.title,staticClass:"center-container-public",on:{click:function(e){return t.routerTo(n,a)}}},[t._v(" "+t._s(n.title)+" ")])})),0),e("div",{staticClass:"center-bar"},[e("div",{staticClass:"center-bar-hover",style:{left:t.hoverPosition}})])]),e("div",{staticClass:"right",on:{click:function(e){t.showPanel=!t.showPanel}}},[e("div",{staticClass:"right-img"},[e("img",{attrs:{src:t.language.img,alt:"简体中文"}})]),e("div",{staticClass:"right-title"},[t._v(t._s(t.language.name))]),e("div",{staticClass:"right-icon",class:t.showPanel?"right-icon-down":"right-icon-up"},[e("i",{staticClass:"iconfont icon-shang"})]),e("collapse-transition",[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showPanel,expression:"showPanel"}],staticClass:"right-panel"},t._l(t.languageList,(function(n,a){return e("div",{key:a,staticClass:"right-panel-public",on:{click:function(e){return t.changeLanguage(n)}}},[e("div",{},[e("img",{attrs:{src:n.img,alt:"简体中文"}})]),e("div",[t._v(t._s(n.name))]),e("div",{style:{visibility:n.id===t.language.id?"visible":"hidden"}},[e("i",{staticClass:"iconfont icon-gouxuan"})])])})),0)])],1)])])},f=[],h=(n("8180"),{name:"headerComp",components:{},mixins:[],props:{},computed:{hoverPosition(){const t=100/this.routerList.length,e=t/5*2,n=t*this.activeIndex+(t-e)/2-1;return n+"%"}},watch:{},filters:{},data(){return{showPanel:!1,activeIndex:0,routerList:[{title:"首页",path:"/index"},{title:"产品说明",path:"/product"},{title:"解决方案",path:"/solution"},{title:"定价",path:"/price"},{title:"公司",path:"/corporation"}],languageList:[{id:0,img:"/images/China.png",lang:"zh",name:"简体中文"},{id:1,img:"/images/britain.png",lang:"en",name:"English"},{id:2,img:"/images/Japan.png",lang:"en",name:"Japan"}],language:{id:0,img:"/images/China.png",lang:"zh",name:"简体中文"}}},methods:{routerTo(t,e){this.activeIndex=e,this.$router.push(t.path)},changeLanguage(t,e){this.language=t},echoChoose(){let t=this.$route.path;this.activeIndex=this.routerList.findIndex(e=>e.path===t)||0}},created(){this.echoChoose()},mounted(){},destroyed(){}}),g=h,v=(n("0b83"),Object(r["a"])(g,m,f,!1,null,"347dbf37",null)),b=v.exports,y=function(){var t=this,e=t._self._c;return e("main-slot",{staticClass:"container-footer"},[e("div",{staticClass:"container-footer-main"},[e("div",{staticClass:"container-footer-main-left"},[e("div",{staticClass:"top"},[e("div",{staticClass:"top-img"},[e("img",{attrs:{src:"/images/logo.png",alt:"AI驱动的企业智能客服解决方案"}})]),e("span",[t._v(" AI驱动的企业智能客服解决方案 ")])]),e("div",{staticClass:"center"},[e("div",{staticClass:"center-public"},[e("i",{staticClass:"iconfont icon-dianhua"}),e("span",[t._v(" "+t._s(t.config.phone)+" ")])]),e("div",{staticClass:"center-public"},[e("i",{staticClass:"iconfont icon-youxiang-"}),e("span",[t._v(" "+t._s(t.config.email)+" ")])]),e("div",{staticClass:"center-public"},[e("i",{staticClass:"iconfont icon-dingwei"}),e("span",[t._v(" "+t._s(t.config.address)+" ")])])]),e("div",{staticClass:"bottom"},[e("img",{attrs:{src:"/images/icons.png",alt:""}})])]),e("div",{staticClass:"container-footer-main-right"},[e("div",{staticClass:"title"},[t._v("联系我们")]),e("div",{staticClass:"content"},[e("el-form",{ref:"form",attrs:{model:t.formData,rules:t.formRules}},[e("el-form-item",{attrs:{prop:"name"}},[e("el-input",{attrs:{placeholder:"姓名"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),e("el-form-item",{attrs:{prop:"email"}},[e("el-input",{attrs:{placeholder:"邮箱"},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}})],1),e("el-form-item",{attrs:{prop:"phone"}},[e("el-input",{attrs:{placeholder:"电话"},model:{value:t.formData.phone,callback:function(e){t.$set(t.formData,"phone",e)},expression:"formData.phone"}})],1)],1),e("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v(" 立即试用")])],1)])])])},C=[],w={name:"footerComp",components:{},mixins:[],props:{},computed:{},watch:{},filters:{},data(){return{config:{desc:"AI驱动的企业智能客服解决方案",phone:"12345647890",email:"ServeBotAI@gmail.com",address:"浙江省杭州市余杭区欧美金融城万创国际"},formData:{name:"",email:"",phone:""},formRules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"}],phone:[{required:!0,message:"请输入电话",trigger:"blur"}]}}},methods:{submitForm(){this.$refs.form.validate(t=>{if(!t)return!1;console.log(this.formData)})}},created(){},mounted(){},destroyed(){}},_=w,x=(n("a7ea"),Object(r["a"])(_,y,C,!1,null,"4d8af2a2",null)),P=x.exports,T={name:"layout",components:{headerComp:b,footerComp:P},mixins:[],props:{},computed:{},watch:{},filters:{},data(){return{}},methods:{},created(){},mounted(){},destroyed(){}},k=T,O=(n("6ace"),Object(r["a"])(k,u,p,!1,null,"0c53ece6",null)),B=O.exports;a["default"].use(d["a"]);const j=[{path:"/",redirect:"/index",name:"Index",meta:{title:"ServeBot.Ai"},component:B,children:[{path:"/index",name:"Index",meta:{title:"首页"},component:()=>n.e("chunk-18bc09ad").then(n.bind(null,"37f9"))}]},{path:"/product",name:"Product",meta:{title:"产品说明"},component:B,children:[{path:"/product",name:"Product",meta:{title:"产品说明"},component:()=>n.e("product").then(n.bind(null,"a44b"))}]},{path:"/solution",name:"Solution",meta:{title:"解决方案"},component:B,children:[{path:"/solution",name:"Solution",meta:{title:"解决方案"},component:()=>n.e("solution").then(n.bind(null,"b52b"))}]},{path:"/price",name:"Price",meta:{title:"解决方案"},component:B,children:[{path:"/price",name:"Price",meta:{title:"定价"},component:()=>n.e("price").then(n.bind(null,"fdf1"))}]},{path:"/corporation",name:"Corporation",meta:{title:"公司"},component:B,children:[{path:"/corporation",name:"Corporation",meta:{title:"公司"},component:()=>n.e("price").then(n.bind(null,"ac1f"))}]}],S=new d["a"]({mode:"history",base:"/",routes:j});var D=S,L=n("f0a4");a["default"].use(L["a"]);var I=new L["a"].Store({state:{},mutations:{},actions:{},modules:{}}),A=n("2e36"),E=n.n(A),$=(n("5ba9"),n("2073"),n("c9a2"));const N="0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out",q={"before-enter"(t){t.style.transition=N,t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0},enter(t){t.dataset.oldOverflow=t.style.overflow,0!==t.scrollHeight?(t.style.height=t.scrollHeight+"px",t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom):(t.style.height="",t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom),t.style.overflow="hidden"},"after-enter"(t){t.style.transition="",t.style.height="",t.style.overflow=t.dataset.oldOverflow},"before-leave"(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.height=t.scrollHeight+"px",t.style.overflow="hidden"},leave(t){0!==t.scrollHeight&&(t.style.transition=N,t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0)},"after-leave"(t){t.style.transition="",t.style.height="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom}};var H={name:"collapseTransition",functional:!0,render(t,{children:e}){const n={on:q};return t("transition",n,e)}},J=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main"},[e("div",{staticClass:"main-inner"},[t._t("default")],2)])},M=[],F={name:"mainSlot",components:{},props:{},computed:{},watch:{},filters:{},data(){return{}},methods:{},created(){},mounted(){},destroyed(){}},z=F,R=(n("cb20"),Object(r["a"])(z,J,M,!1,null,"5817ecef",null)),K=R.exports;a["default"].component("collapse-transition",H),a["default"].component("main-slot",K),a["default"].use(E.a),a["default"].prototype.$axios=$["a"],a["default"].config.productionTip=!1,new a["default"]({router:D,store:I,render:t=>t(c)}).$mount("#app")},"6ace":function(t,e,n){"use strict";n("86b0")},"86b0":function(t,e,n){},a7ea:function(t,e,n){"use strict";n("ccfd")},cb20:function(t,e,n){"use strict";n("050c")},ccfd:function(t,e,n){}});
//# sourceMappingURL=app.db18617b.js.map