(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-128028de"],{"0c15":function(t,e,s){},"0ef8":function(t,e,s){},"10ed":function(t,e,s){"use strict";s("6723")},2869:function(t,e,s){},"37f9":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"index"},[e("div",{staticClass:"index-banner"},[e("banner",{ref:"banner"})],1),e("div",{staticClass:"index-productIntroduction"},[e("productIntroduction",{ref:"productIntroduction"})],1),e("div",{staticClass:"index-cooperativeEnterprise"},[e("cooperativeEnterprise",{ref:"cooperativeEnterprise"})],1),e("div",{staticClass:"index-multiPlatform"},[e("multiPlatform",{ref:"multiPlatform"})],1)])},i=[],a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"banner"})},r=[],o={name:"banner",components:{},mixins:[],props:{},computed:{},watch:{},filters:{},data(){return{}},methods:{},created(){},mounted(){},destroyed(){}},c=o,l=(s("10ed"),s("1805")),d=Object(l["a"])(c,a,r,!1,null,"cc4c30ae",null),p=d.exports,u=function(){var t=this,e=t._self._c;return e("main-slot",{staticClass:"productIntroduction"},[e("div",{staticClass:"productIntroduction-main"},[e("div",{staticClass:"btn"},[e("el-button",{attrs:{type:""}},[t._v("立即试用")])],1),e("div",{staticClass:"primary-title"},[t._v("产品介绍")]),e("div",{staticClass:"intro"},t._l(t.swiperList,(function(s,n){return e("div",{key:n,class:["sub-title",t.swiperIndex===n?"intro-active":"intro-item"],on:{click:function(e){return t.handleChangeSwiperIndex(n)}}},[t._v(" "+t._s(s.name)+" ")])})),0),e("div",{staticClass:"swiper"},[e("el-carousel",{ref:"carousel",staticClass:"swiper-carousel",attrs:{arrow:"always",interval:4e3},on:{change:t.swiperChange}},t._l(t.swiperList,(function(t){return e("el-carousel-item",{key:t.name,staticClass:"swiper-carousel-item"},[e("el-image",{staticStyle:{width:"880px",height:"500px"},attrs:{fit:"contain",src:t.path}})],1)})),1)],1)])])},m=[],f={name:"productIntroduction",components:{},mixins:[],props:{},computed:{},watch:{},filters:{},data(){return{swiperIndex:0,swiperList:[{name:"智能语言理解",path:"/serveBotAi/images/index/swiper0.png"},{name:"私有化训练",path:"/serveBotAi/images/index/swiper1.png"},{name:"多语言支持",path:"/serveBotAi/images/index/swiper2.png"},{name:"应答效率",path:"/serveBotAi/images/index/swiper3.png"}]}},methods:{handleChangeSwiperIndex(t){this.$refs.carousel.setActiveItem(t)},swiperChange(t){this.swiperIndex=t}},created(){},mounted(){},destroyed(){}},v=f,h=(s("8302"),Object(l["a"])(v,u,m,!1,null,"d685f57c",null)),C=h.exports,b=function(){var t=this,e=t._self._c;return e("main-slot",{staticClass:"cooperativeEnterprise"},[e("div",{staticClass:"company"},t._l(t.companyList,(function(s,n){return e("div",{key:n,staticClass:"company-item third-title"},[t._v(" "+t._s(s.label)+" ")])})),0),e("div",{staticClass:"cooperativeEnterprise-main"},[e("div",{staticClass:"primary-title"},[t._v("合作企业")]),e("div",{staticClass:"empty"}),e("div",{staticClass:"primary-title intro"},[t._v("客户评价和成功案例")]),e("div",{staticClass:"comment"})])])},x=[],w={name:"cooperativeEnterprise",components:{},mixins:[],props:{},computed:{},watch:{},filters:{},data(){return{companyList:[{label:"M&Kコーポレーション"},{label:"株式会社フューチャーリーディング"},{label:"株式会社NewTide"},{label:"株式会社ヴィラス"},{label:"东京JM株式会社"},{label:"优宿株式会社"}]}},methods:{},created(){},mounted(){},destroyed(){}},_=w,y=(s("b692"),Object(l["a"])(_,b,x,!1,null,"7d5cd453",null)),g=y.exports,B=function(){var t=this,e=t._self._c;return e("main-slot",{staticClass:"multiPlatform"},[e("div",{staticClass:"multiPlatform-main"},[e("div",{staticClass:"top"},[e("div",{staticClass:"primary-title"},[t._v("支持多平台")]),e("div",{staticClass:"top-top"},[e("img",{attrs:{src:"/serveBotAi/images/index/platform-top.png",alt:""}})]),e("div",{staticClass:"top-bottom"},[e("img",{attrs:{src:"/serveBotAi/images/index/platform.png",alt:""}})])])]),e("font-and-btn",{ref:"fontAndBtn"})],1)},I=[],A=s("58ec"),k={name:"multiPlatform",components:{fontAndBtn:A["a"]},mixins:[],props:{},computed:{},watch:{},filters:{},data(){return{}},methods:{},created(){},mounted(){},destroyed(){}},j=k,E=(s("443f"),Object(l["a"])(j,B,I,!1,null,"2b7692a3",null)),O=E.exports,P={name:"index",components:{banner:p,productIntroduction:C,cooperativeEnterprise:g,multiPlatform:O},mixins:[],props:{},computed:{},watch:{},filters:{},data(){return{}},methods:{},created(){},async mounted(){},destroyed(){}},S=P,L=(s("ebec"),Object(l["a"])(S,n,i,!1,null,"45c652ff",null));e["default"]=L.exports},"443f":function(t,e,s){"use strict";s("0c15")},"58ec":function(t,e,s){"use strict";var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"fontAndBtn",style:t.styleConfig},[e("main-slot",[e("div",{staticClass:"fontAndBtn-main"},[e("div",{staticClass:"fontAndBtn-left"},[e("div",{staticClass:"fontAndBtn-left-top third-title"},[t._v(" "+t._s(t.leftTopIntro)+" ")]),e("div",{staticClass:"fontAndBtn-left-bottom forth-title"},[t._v(" "+t._s(t.leftBottomIntro)+" ")])]),e("div",{staticClass:"fontAndBtn-right"},[t.$slots.customBtn?t._t("customBtn"):e("el-button",{on:{click:t.handleClick}},[t._v(t._s(t.btnName))])],2)])])],1)},i=[],a={name:"fontAndBtn",components:{},mixins:[],props:{leftTopIntro:{type:String,default:"立即注册，免费试用ServeBot.AI，提升客服效率！"},leftBottomIntro:{type:String,default:"轻松应对客户咨询，高效省时！"},btnName:{type:String,default:"立即体验AI客服"},styleConfig:{type:Object,default(){return{"--boxHeight":"230px","--btnWidth":"260px"}}}},computed:{},watch:{},filters:{},data(){return{}},methods:{handleClick(){this.$emit("on-response")}},created(){},mounted(){},destroyed(){}},r=a,o=(s("c74c"),s("1805")),c=Object(o["a"])(r,n,i,!1,null,"0314f69d",null);e["a"]=c.exports},6723:function(t,e,s){},8302:function(t,e,s){"use strict";s("2869")},"8ff6":function(t,e,s){},"9a89":function(t,e,s){},b692:function(t,e,s){"use strict";s("0ef8")},c74c:function(t,e,s){"use strict";s("8ff6")},ebec:function(t,e,s){"use strict";s("9a89")}}]);
//# sourceMappingURL=chunk-128028de.40f2e55d.js.map