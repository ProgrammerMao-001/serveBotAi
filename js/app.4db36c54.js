(function(t){function e(e){for(var a,i,r=e[0],l=e[1],c=e[2],d=0,u=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&u.push(n[i][0]),n[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(u.length)u.shift()();return s.push.apply(s,c||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],a=!0,i=1;i<o.length;i++){var r=o[i];0!==n[r]&&(a=!1)}a&&(s.splice(e--,1),t=l(l.s=o[0]))}return t}var a={},i={app:0},n={app:0},s=[];function r(t){return l.p+"js/"+({price:"price",product:"product",solution:"solution"}[t]||t)+"."+{"chunk-51d11f4e":"3e3a4b06",price:"7e5cc383",product:"55b53143",solution:"35721403"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.e=function(t){var e=[],o={"chunk-51d11f4e":1,price:1,product:1,solution:1};i[t]?e.push(i[t]):0!==i[t]&&o[t]&&e.push(i[t]=new Promise((function(e,o){for(var a="css/"+({price:"price",product:"product",solution:"solution"}[t]||t)+"."+{"chunk-51d11f4e":"dd563645",price:"3f0a9beb",product:"cf80bd09",solution:"d2e6ad4d"}[t]+".css",n=l.p+a,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var c=s[r],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===a||d===n))return e()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){c=u[r],d=c.getAttribute("data-href");if(d===a||d===n)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||n,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete i[t],p.parentNode.removeChild(p),o(s)},p.href=n;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){i[t]=0})));var a=n[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,o){a=n[t]=[e,o]}));e.push(a[2]=s);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=r(t);var u=new Error;c=function(e){d.onerror=d.onload=null,clearTimeout(p);var o=n[t];if(0!==o){if(o){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}n[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,o){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(o,a,function(e){return t[e]}.bind(null,a));return o},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/serveBotAi/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=d;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"050c":function(t,e,o){},"0b83":function(t,e,o){"use strict";o("31fd")},2073:function(t,e,o){},"246e":function(t,e,o){"use strict";o("24ec")},"24ec":function(t,e,o){},"303b":function(t,e,o){"use strict";o("96df")},"31fd":function(t,e,o){},"35a6":function(t,e,o){"use strict";o("c331")},"56d7":function(t,e,o){"use strict";o.r(e);var a=o("5923"),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},n=[],s=o("1805"),r={},l=Object(s["a"])(r,i,n,!1,null,null,null),c=l.exports,d=o("f191"),u=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("headerComp",{staticClass:"container-header"}),e("main-slot",{staticClass:"container-main"},[e("router-view")],1),e("newFooterComp",{staticClass:"container-footer"})],1)},p=[],m=function(){var t=this,e=t._self._c;return e("main-slot",{staticClass:"container-header"},[e("div",{staticClass:"container-header-main"},[e("div",{staticClass:"left"},[e("el-image",{attrs:{src:"/images/logo.png",fit:"contain"}})],1),e("div",{staticClass:"center"},[e("div",{staticClass:"center-container"},t._l(t.routerList,(function(o,a){return e("div",{key:o.title,staticClass:"center-container-public",on:{click:function(e){return t.routerTo(o,a)}}},[t._v(" "+t._s(o.title)+" ")])})),0),e("div",{staticClass:"center-bar"},[e("div",{staticClass:"center-bar-hover",style:{left:t.hoverPosition}})])]),e("div",{staticClass:"right",on:{click:function(e){t.showPanel=!t.showPanel}}},[e("div",{staticClass:"right-img"},[e("img",{attrs:{src:t.language.img,alt:"简体中文"}})]),e("div",{staticClass:"right-title"},[t._v(t._s(t.language.name))]),e("div",{staticClass:"right-icon",class:t.showPanel?"right-icon-down":"right-icon-up"},[e("i",{staticClass:"iconfont icon-shang"})]),e("collapse-transition",[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showPanel,expression:"showPanel"}],staticClass:"right-panel"},t._l(t.languageList,(function(o,a){return e("div",{key:a,staticClass:"right-panel-public",on:{click:function(e){return t.changeLanguage(o)}}},[e("div",{},[e("img",{attrs:{src:o.img,alt:"简体中文"}})]),e("div",[t._v(t._s(o.name))]),e("div",{style:{visibility:o.id===t.language.id?"visible":"hidden"}},[e("i",{staticClass:"iconfont icon-gouxuan"})])])})),0)])],1)])])},f=[],h=(o("8180"),{name:"headerComp",components:{},mixins:[],props:{},computed:{hoverPosition(){const t=100/this.routerList.length,e=t/5*2,o=t*this.activeIndex+(t-e)/2-1;return o+"%"}},watch:{},filters:{},data(){return{showPanel:!1,activeIndex:0,routerList:[{title:"首页",path:"/index"},{title:"产品说明",path:"/product"},{title:"解决方案",path:"/solution"},{title:"定价",path:"/price"},{title:"公司",path:"/corporation"}],languageList:[{id:0,img:"/images/China.png",lang:"zh",name:"简体中文"},{id:1,img:"/images/britain.png",lang:"en",name:"English"},{id:2,img:"/images/Japan.png",lang:"en",name:"Japan"}],language:{id:0,img:"/images/China.png",lang:"zh",name:"简体中文"}}},methods:{routerTo(t,e){this.activeIndex=e,this.$router.push(t.path)},changeLanguage(t,e){this.language=t},echoChoose(){let t=this.$route.path;this.activeIndex=this.routerList.findIndex(e=>e.path===t)||0}},created(){this.echoChoose()},mounted(){},destroyed(){}}),g=h,v=(o("0b83"),Object(s["a"])(g,m,f,!1,null,"347dbf37",null)),b=v.exports,C=function(){var t=this,e=t._self._c;return e("main-slot",{staticClass:"container-footer"},[e("div",{staticClass:"container-footer-main"},[e("div",{staticClass:"container-footer-main-left"},[e("div",{staticClass:"top"},[e("div",{staticClass:"top-img"},[e("img",{attrs:{src:"/images/logo.png",alt:"AI驱动的企业智能客服解决方案"}})]),e("span",[t._v(" AI驱动的企业智能客服解决方案 ")])]),e("div",{staticClass:"center"},[e("div",{staticClass:"center-public"},[e("i",{staticClass:"iconfont icon-dianhua"}),e("span",[t._v(" "+t._s(t.config.phone)+" ")])]),e("div",{staticClass:"center-public"},[e("i",{staticClass:"iconfont icon-youxiang-"}),e("span",[t._v(" "+t._s(t.config.email)+" ")])]),e("div",{staticClass:"center-public"},[e("i",{staticClass:"iconfont icon-dingwei"}),e("span",[t._v(" "+t._s(t.config.address)+" ")])])]),e("div",{staticClass:"bottom"},[e("img",{attrs:{src:"/images/icons.png",alt:""}})])]),e("div",{staticClass:"container-footer-main-right"},[e("div",{staticClass:"title"},[t._v("联系我们")]),e("div",{staticClass:"content"},[e("el-form",{ref:"form",attrs:{model:t.formData,rules:t.formRules}},[e("el-form-item",{attrs:{prop:"name"}},[e("el-input",{attrs:{placeholder:"姓名"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),e("el-form-item",{attrs:{prop:"email"}},[e("el-input",{attrs:{placeholder:"邮箱"},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}})],1),e("el-form-item",{attrs:{prop:"phone"}},[e("el-input",{attrs:{placeholder:"电话"},model:{value:t.formData.phone,callback:function(e){t.$set(t.formData,"phone",e)},expression:"formData.phone"}})],1)],1),e("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v(" 立即试用")])],1)])])])},y=[],_={name:"footerComp",components:{},mixins:[],props:{},computed:{},watch:{},filters:{},data(){return{config:{desc:"AI驱动的企业智能客服解决方案",phone:"12345647890",email:"ServeBotAI@gmail.com",address:"浙江省杭州市余杭区欧美金融城万创国际"},formData:{name:"",email:"",phone:""},formRules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"}],phone:[{required:!0,message:"请输入电话",trigger:"blur"}]}}},methods:{submitForm(){this.$refs.form.validate(t=>{if(!t)return!1;console.log(this.formData)})}},created(){},mounted(){},destroyed(){}},w=_,x=(o("303b"),Object(s["a"])(w,C,y,!1,null,"3627a7aa",null)),D=x.exports,P=function(){var t=this,e=t._self._c;return e("main-slot",{staticClass:"container-footer"},[e("div",{staticClass:"container-footer-main"},[e("div",{staticClass:"top"},[e("div",{staticClass:"top-public"},[e("div",{staticClass:"top-public-title"},[t._v("产品")]),e("div",{staticClass:"top-public-content"},[e("div",{staticClass:"top-public-content-item"},[t._v("ServeBotAI")])])]),e("div",{staticClass:"top-public"},[e("div",{staticClass:"top-public-title"},[t._v("解决方案")]),e("div",{staticClass:"top-public-content"},[e("div",{staticClass:"top-public-content-item"},[t._v("民宿行业")]),e("div",{staticClass:"top-public-content-item"},[t._v("其他行业")])])]),e("div",{staticClass:"top-public"},[e("div",{staticClass:"top-public-title"},[t._v("定价方案")]),e("div",{staticClass:"top-public-content"},[e("div",{staticClass:"top-public-content-item"},[t._v("基础版")]),e("div",{staticClass:"top-public-content-item"},[t._v("中级版")]),e("div",{staticClass:"top-public-content-item"},[t._v("高级版")]),e("div",{staticClass:"top-public-content-item"},[t._v("卓业版")])])]),e("div",{staticClass:"top-public"},[e("div",{staticClass:"top-public-title"},[t._v("支持语言")]),e("div",{staticClass:"top-public-content"},[e("div",{staticClass:"top-public-content-item"},[t._v("中文")]),e("div",{staticClass:"top-public-content-item"},[t._v("JAPAN")]),e("div",{staticClass:"top-public-content-item"},[t._v("ENGLISH")])])]),e("div",{staticClass:"top-public"},[e("div",{staticClass:"top-public-title"},[t._v("公司")]),e("div",{staticClass:"top-public-content"},[e("div",{staticClass:"top-public-content-item"},[t._v("关于我们")]),e("div",{staticClass:"top-public-content-item"},[t._v("加入我们")]),e("div",{staticClass:"top-public-content-item"},[t._v("更多新闻")])])])]),e("div",{staticClass:"bottom"},[t._v("版权所有© 2024ServeBotAI.LTD. 保留所有权利")])])])},T=[],k={name:"newFooterComp",components:{},mixins:[],props:{},computed:{},watch:{},filters:{},data(){return{}},methods:{},created(){},mounted(){},destroyed(){}},O=k,S=(o("e50f"),Object(s["a"])(O,P,T,!1,null,"431e8066",null)),B=S.exports,j={name:"layout",components:{headerComp:b,footerComp:D,newFooterComp:B},mixins:[],props:{},computed:{},watch:{},filters:{},data(){return{}},methods:{},created(){},mounted(){},destroyed(){}},L=j,$=(o("35a6"),Object(s["a"])(L,u,p,!1,null,"d274ab8a",null)),A=$.exports;a["default"].use(d["a"]);const I=[{path:"/",redirect:"/index",name:"Index",meta:{title:"ServeBot.Ai"},component:A,children:[{path:"/index",name:"Index",meta:{title:"首页"},component:()=>o.e("chunk-51d11f4e").then(o.bind(null,"37f9"))}]},{path:"/product",name:"Product",meta:{title:"产品说明"},component:A,children:[{path:"/product",name:"Product",meta:{title:"产品说明"},component:()=>o.e("product").then(o.bind(null,"a44b"))}]},{path:"/solution",name:"Solution",meta:{title:"解决方案"},component:A,children:[{path:"/solution",name:"Solution",meta:{title:"解决方案"},component:()=>o.e("solution").then(o.bind(null,"b52b"))}]},{path:"/price",name:"Price",meta:{title:"解决方案"},component:A,children:[{path:"/price",name:"Price",meta:{title:"定价"},component:()=>o.e("price").then(o.bind(null,"fdf1"))}]},{path:"/corporation",name:"Corporation",meta:{title:"公司"},component:A,children:[{path:"/corporation",name:"Corporation",meta:{title:"公司"},component:()=>o.e("price").then(o.bind(null,"ac1f"))}]}],q=new d["a"]({mode:"history",base:"/serveBotAi/",routes:I});var E=q,F=o("f0a4");a["default"].use(F["a"]);var H=new F["a"].Store({state:{},mutations:{},actions:{},modules:{}}),N=o("2e36"),V=o.n(N),J=(o("5ba9"),o("2073"),o("c9a2"));const M="0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out",R={"before-enter"(t){t.style.transition=M,t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0},enter(t){t.dataset.oldOverflow=t.style.overflow,0!==t.scrollHeight?(t.style.height=t.scrollHeight+"px",t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom):(t.style.height="",t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom),t.style.overflow="hidden"},"after-enter"(t){t.style.transition="",t.style.height="",t.style.overflow=t.dataset.oldOverflow},"before-leave"(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.height=t.scrollHeight+"px",t.style.overflow="hidden"},leave(t){0!==t.scrollHeight&&(t.style.transition=M,t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0)},"after-leave"(t){t.style.transition="",t.style.height="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom}};var W={name:"collapseTransition",functional:!0,render(t,{children:e}){const o={on:R};return t("transition",o,e)}},z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main"},[e("div",{staticClass:"main-inner"},[t._t("default")],2)])},U=[],X={name:"mainSlot",components:{},props:{},computed:{},watch:{},filters:{},data(){return{}},methods:{},created(){},mounted(){},destroyed(){}},Y=X,G=(o("cb20"),Object(s["a"])(Y,z,U,!1,null,"5817ecef",null)),K=G.exports,Q=function(){var t=this,e=t._self._c;return e("el-dialog",{directives:[{name:"dialog-out",rawName:"v-dialog-out"}],staticClass:"contact-dialog",attrs:{width:"700px",title:t.title,visible:t.dialogVisible,"before-close":t.hideDialog},on:{"update:visible":function(e){t.dialogVisible=e}}},[e("el-form",{ref:"form",attrs:{"label-position":"top",model:t.formData,rules:t.formRules}},[e("el-form-item",{attrs:{label:"姓名",prop:"name"}},[e("el-input",{attrs:{placeholder:"碳基人"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),e("el-form-item",{attrs:{prop:"email",label:"邮箱地址"}},[e("el-input",{attrs:{placeholder:"请输入邮箱地址"},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}})],1),e("el-form-item",{attrs:{prop:"phone",label:"电话"}},[e("el-input",{attrs:{placeholder:"请输入电话"},model:{value:t.formData.phone,callback:function(e){t.$set(t.formData,"phone",e)},expression:"formData.phone"}})],1),e("el-form-item",{attrs:{prop:"message",label:"留言"}},[e("el-input",{attrs:{placeholder:"请给我们留言",type:"textarea",rows:5},model:{value:t.formData.message,callback:function(e){t.$set(t.formData,"message",e)},expression:"formData.message"}})],1)],1),e("el-button",{staticStyle:{"margin-top":"20px"},attrs:{type:"primary"},on:{click:t.submitForm}},[t._v(" 立即试用")])],1)},Z=[],tt={name:"contactUsDialog",components:{},mixins:[],props:{},computed:{},watch:{},filters:{},data(){return{title:"联系我们",dialogVisible:!1,formData:{name:"",email:"",phone:""},formRules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"}],phone:[{required:!0,message:"请输入电话",trigger:"blur"}],message:[{required:!0,message:"请给我们留言",trigger:"blur"}]}}},methods:{showDialog(){this.dialogVisible=!0},hideDialog(){this.dialogVisible=!1,this.$refs.form.resetFields(),this.formData={}},submitForm(){this.$refs.form.validate(t=>{if(!t)return!1;this.$message.success("感谢您的加入！"),this.hideDialog()})}},created(){},mounted(){},destroyed(){}},et=tt,ot=(o("246e"),Object(s["a"])(et,Q,Z,!1,null,"534c0a44",null)),at=ot.exports;a["default"].component("collapse-transition",W),a["default"].component("main-slot",K),a["default"].component("contact-us-dialog",at);var it={bind:function(t,e,o){const a=t.querySelector(".el-dialog__header"),i=t.querySelector(".el-dialog");a.style.cssText+=";cursor:move;",i.style.cssText+=";top:0px;";const n=function(){return window.document.currentStyle?(t,e)=>t.currentStyle[e]:(t,e)=>getComputedStyle(t,!1)[e]}();a.onmousedown=t=>{const e=t.clientX-a.offsetLeft,s=t.clientY-a.offsetTop,r=i.offsetWidth,l=i.offsetHeight,c=document.body.clientWidth,d=document.body.clientHeight,u=i.offsetLeft,p=c-i.offsetLeft-r,m=i.offsetTop,f=d-i.offsetTop-l;let h=n(i,"left"),g=n(i,"top");h.includes("%")?(h=+document.body.clientWidth*(+h.replace(/%/g,"")/100),g=+document.body.clientHeight*(+g.replace(/%/g,"")/100)):(h=+h.replace(/\px/g,""),g=+g.replace(/\px/g,"")),document.onmousemove=function(t){let a=t.clientX-e,n=t.clientY-s;-a>u?a=-u:a>p&&(a=p),-n>m?n=-m:n>f&&(n=f),i.style.cssText+=`;left:${a+h}px;top:${n+g}px;`,o&&o.child.$emit("dragDialog")},document.onmouseup=function(){document.onmousemove=null,document.onmouseup=null}}}};const nt=function(t){t.directive("dialogOut",it)};window.Vue&&Vue.use(nt);var st=nt;a["default"].use(st),a["default"].use(V.a),a["default"].prototype.$axios=J["a"],a["default"].config.productionTip=!1,new a["default"]({router:E,store:H,render:t=>t(c)}).$mount("#app")},"96df":function(t,e,o){},"9c42":function(t,e,o){},c331:function(t,e,o){},cb20:function(t,e,o){"use strict";o("050c")},e50f:function(t,e,o){"use strict";o("9c42")}});
//# sourceMappingURL=app.4db36c54.js.map