webpackJsonp([0],{"1i66":function(t,s){},"9fgM":function(t,s){},AhPL:function(t,s){},Dlsl:function(t,s){},JPD4:function(t,s){},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("7+uW"),e={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"topNavBar"},[s("nav",{staticClass:"navbar navbar-expand-md navbar-dark fixed-top bg-color"},[s("header",{staticClass:"container"},[s("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[s("h4",{staticClass:"m-0"},[s("img",{staticClass:"img-fluid",staticStyle:{height:"36px"},attrs:{src:a("ueDN")}}),this._v("\r\n          "+this._s(this.companyTitle)+"\r\n        ")])]),this._v(" "),this._m(0),this._v(" "),this._m(1)])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarCollapse"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item active"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("最新動態 "),a("span",{staticClass:"sr-only"},[t._v("(current)")])])]),t._v(" "),a("li",{staticClass:"nav-item active dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\r\n              產品介紹\r\n            ")]),t._v(" "),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdownMenuLink"}},[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("HIS 門診作業系統")]),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("智慧平台交換系統")]),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("智慧語音提醒")]),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("APP 智能手機平板")]),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("點數禮品兌換")])])]),t._v(" "),a("li",{staticClass:"nav-item active"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("保健購物")])]),t._v(" "),a("li",{staticClass:"nav-item active"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("點數兌換")])]),t._v(" "),a("li",{staticClass:"nav-item active"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("與我聯繫")])]),t._v(" "),a("li",{staticClass:"nav-item active"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[a("i",{staticClass:"far fa-user"}),t._v(" 用戶")])]),t._v(" "),a("li",{staticClass:"nav-item active dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("i",{staticClass:"fas fa-globe-asia"})]),t._v(" "),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdownMenuLink"}},[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("英文 English")]),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("中文(繁體) zh-tw")]),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("中文(简体) zh-cn")]),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("日文 Japanese")])])])])])}]};var n=a("VU/8")({name:"topNavBar",data:function(){return{companyTitle:"健曄醫康科技"}}},e,!1,function(t){a("xrfa")},"data-v-3b9f9044",null).exports,l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("footer",{staticClass:"footerBar container"},[s("article",{staticClass:"row m-0"},[s("section",{staticClass:"col-sm"},[this._v("\n      © 2017-2018 CYT-Company, Inc. · "),s("a",{attrs:{href:"#"}},[this._v("Privacy")]),this._v(" · "),s("a",{attrs:{href:"#"}},[this._v("Terms")])]),this._v(" "),s("section",{staticClass:"col-sm"},[s("small",[this._v("Design by Miller (bata)")])])])])}]};var c=a("VU/8")({name:"footerBar"},l,!1,function(t){a("9fgM")},"data-v-5448bde0",null).exports,o=a("7t+N"),r=a.n(o);if("undefined"!=typeof window)a("gqkz");var d={props:{options:{type:Object,default:function(){return{}}}},mounted:function(){this.create()},destroyed:function(){r()(this.$el).slick("unslick")},methods:{create:function(){var t=r()(this.$el);t.on("afterChange",this.onAfterChange),t.on("beforeChange",this.onBeforeChange),t.on("breakpoint",this.onBreakpoint),t.on("destroy",this.onDestroy),t.on("edge",this.onEdge),t.on("init",this.onInit),t.on("reInit",this.onReInit),t.on("setPosition",this.onSetPosition),t.on("swipe",this.onSwipe),t.on("lazyLoaded",this.onLazyLoaded),t.on("lazyLoadError",this.onLazyLoadError),t.slick(this.options)},destroy:function(){var t=r()(this.$el);t.off("afterChange",this.onAfterChange),t.off("beforeChange",this.onBeforeChange),t.off("breakpoint",this.onBreakpoint),t.off("destroy",this.onDestroy),t.off("edge",this.onEdge),t.off("init",this.onInit),t.off("reInit",this.onReInit),t.off("setPosition",this.onSetPosition),t.off("swipe",this.onSwipe),t.off("lazyLoaded",this.onLazyLoaded),t.off("lazyLoadError",this.onLazyLoadError),r()(this.$el).slick("unslick")},reSlick:function(){this.destroy(),this.create()},next:function(){r()(this.$el).slick("slickNext")},prev:function(){r()(this.$el).slick("slickPrev")},pause:function(){r()(this.$el).slick("slickPause")},play:function(){r()(this.$el).slick("slickPlay")},goTo:function(t,s){r()(this.$el).slick("slickGoTo",t,s)},currentSlide:function(){return r()(this.$el).slick("slickCurrentSlide")},add:function(t,s,a){r()(this.$el).slick("slickAdd",t,s,a)},remove:function(t,s){r()(this.$el).slick("slickRemove",t,s)},filter:function(t){r()(this.$el).slick("slickFilter",t)},unfilter:function(){r()(this.$el).slick("slickUnfilter")},getOption:function(t){r()(this.$el).slick("slickGetOption",t)},setOption:function(t,s,a){r()(this.$el).slick("slickSetOption",t,s,a)},setPosition:function(){r()(this.$el).slick("setPosition")},onAfterChange:function(t,s,a){this.$emit("afterChange",t,s,a)},onBeforeChange:function(t,s,a,i){this.$emit("beforeChange",t,s,a,i)},onBreakpoint:function(t,s,a){this.$emit("breakpoint",t,s,a)},onDestroy:function(t,s){this.$emit("destroy",t,s)},onEdge:function(t,s,a){this.$emit("edge",t,s,a)},onInit:function(t,s){this.$emit("init",t,s)},onReInit:function(t,s){this.$emit("reInit",t,s)},onSetPosition:function(t,s){this.$emit("setPosition",t,s)},onSwipe:function(t,s,a){this.$emit("swipe",t,s,a)},onLazyLoaded:function(t,s,a,i){this.$emit("lazyLoaded",t,s,a,i)},onLazyLoadError:function(t,s,a,i){this.$emit("lazyLoadError",t,s,a,i)}}},v={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._t("default")],2)},staticRenderFns:[]},m=a("VU/8")(d,v,!1,null,null,null).exports,h=(a("Dlsl"),a("Yyf6"),{name:"slickCarousel",components:{Slick:m},data:function(){return{slickOptions:{slidesToShow:1,dots:!0,arrows:!1,speed:800,adaptiveHeight:!0,autoplay:!0,autoplaySpeed:3e3}}},methods:{next:function(){this.$refs.slick.next()},prev:function(){this.$refs.slick.prev()}}}),u={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"slickCarousel"},[a("slick",{ref:"slick",attrs:{options:t.slickOptions}},[a("a",{staticClass:"imgBG1 d-flex align-items-end",attrs:{href:"#0"}},[a("div",{staticClass:"slickInfo"},[a("article",{staticClass:"row justify-content-center align-items-center"},[a("section",{staticClass:"col-md-4"},[a("img",{staticClass:"img-fluid m-auto",attrs:{src:"http://3k0p7trq4uw3mnwij2j2a5s1.wpengine.netdna-cdn.com/health/wp-content/uploads/sites/4/2015/06/health_img_top.png"}})]),t._v(" "),a("section",{staticClass:"col-md-5"},[a("h1",[t._v("願景及目標")]),t._v(" "),a("hr"),t._v(" "),a("h5",[t._v("能够協助醫療健康養護企業機構(醫院，診所，養護中心)醫生及護理人員提供客戶(病人)高品質及極貼心且滿意的服務")]),t._v(" "),a("h5",[t._v("提供具有大數據加上人工智慧處理能力的醫護健康服務平台")])])])])]),t._v(" "),a("a",{staticClass:"imgBG2 d-flex align-items-center",attrs:{href:"#0"}},[a("div",{staticClass:"slickInfo"},[a("article",{staticClass:"row justify-content-center align-items-center"},[a("section",{staticClass:"col-sm-4"},[a("h1",[t._v("平台開發技術")]),t._v(" "),a("hr"),t._v(" "),a("h4",[t._v("智慧雲數據搬遷服务平台")]),t._v(" "),a("h4",[t._v("醫康智能服務平台")])]),t._v(" "),a("section",{staticClass:"col-sm-3"},[a("img",{staticClass:"img-fluid m-auto",attrs:{src:"https://www.mdmarketingdigital.com/en/img/what-does-a-digital-marketing-agency-do.png"}})])])])]),t._v(" "),a("a",{staticClass:"imgBG3 d-flex align-items-end",attrs:{href:"#0"}},[a("div",{staticClass:"slickInfo"},[a("h1",{staticClass:"text-center"},[t._v("提供企業客戶在智能轉型，資訊雲化")]),t._v(" "),a("article",{staticClass:"row justify-content-center align-items-center"},[a("section",{staticClass:"col-sm-4"},[a("h3",[a("i",{staticClass:"fas fa-braille"}),t._v(" 服務升級過程中")]),t._v(" "),a("h3",[a("i",{staticClass:"fas fa-medkit"}),t._v(" 可靠安全的執行工具。")]),t._v(" "),a("h3",[a("i",{staticClass:"fas fa-user-md"}),t._v(" 快速簡易的客戶操作介面。")]),t._v(" "),a("h3",[a("i",{staticClass:"fab fa-buromobelexperte"}),t._v(" 可及時驗証的使用模式")])]),t._v(" "),a("section",{staticClass:"col-sm-3"},[a("img",{staticClass:"img-fluid m-auto",staticStyle:{transform:"translateY(1rem)"},attrs:{src:"http://demo.stylishthemes.co/medic-wp/wp-content/uploads/2014/09/lady-doc.png"}})])])])])])],1)},staticRenderFns:[]};var f=a("VU/8")(h,u,!1,function(t){a("UYtn")},"data-v-00cbe41b",null).exports,p={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"ServicePlatform container"},[a("p",{staticClass:"p-2"},[t._v(" ")]),t._v(" "),a("article",{staticClass:"row align-items-center"},[t._m(0),t._v(" "),a("section",{staticClass:"col-sm"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("p",{staticClass:"lead"},[t._v("能够協助醫療健康養護企業機構(醫院，診所，養護中心)醫生及護理人員提供客戶(病人)高品質及極貼心且滿意的服務")]),t._v(" "),t._m(1)])]),t._v(" "),a("p",{staticClass:"p-2"},[t._v(" ")]),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"col-sm"},[s("img",{staticClass:"figure-img img-fluid rounded",attrs:{src:"http://www.iehealth7799.com.tw/j2ph/images/slider/s_002.jpg"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"lead"},[this._v("提供具有"),s("span",{staticClass:"text-success"},[this._v("大數據加上人工智慧")]),this._v("處理能力的"),s("span",{staticClass:"text-danger"},[this._v("醫護健康服務平台")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("article",{staticClass:"row mb-2"},[a("section",{staticClass:"col-md-6",attrs:{"data-aos":"fade-up"}},[a("div",{staticClass:"card flex-md-row mb-4 box-shadow h-md-250"},[a("div",{staticClass:"card-body d-flex flex-column align-items-start text-left"},[a("strong",{staticClass:"d-inline-block mb-2 text-primary"},[t._v("智慧雲數據搬遷服务平台")]),t._v(" "),a("h3",{staticClass:"mb-0"},[a("p",{staticClass:"text-dark"},[t._v("平台開發技術 (I)")])]),t._v(" "),a("ul",{staticClass:"list-unstyled_"},[a("li",[t._v("專利異雲數據搬遷手法")]),t._v(" "),a("li",[t._v("一鍵自動搬遷突破技术")])]),t._v(" "),a("p",{staticClass:"card-text mb-auto"},[t._v("提供企業客戶在智能轉型，資訊雲化，服務升級過程中")]),t._v(" "),a("ul",{staticClass:"list-unstyled_"},[a("li",[t._v("可靠安全的執行工具。")]),t._v(" "),a("li",[t._v("快速簡易的客戶操作介面。")]),t._v(" "),a("li",[t._v("可及時驗証的使用模式")])])]),t._v(" "),a("img",{staticClass:"card-img-right flex-auto d-none d-md-block",staticStyle:{"max-height":"250px"},attrs:{src:"https://image.shutterstock.com/mosaic_250/0/0/1033298602.jpg"}})])]),t._v(" "),a("section",{staticClass:"col-md-6",attrs:{"data-aos":"fade-up","data-aos-delay":"50"}},[a("div",{staticClass:"card flex-md-row mb-4 box-shadow h-md-250"},[a("div",{staticClass:"card-body d-flex flex-column align-items-start text-left"},[a("strong",{staticClass:"d-inline-block mb-2 text-success"},[t._v("醫康智能服務平台")]),t._v(" "),a("h3",{staticClass:"mb-0"},[a("p",{staticClass:"text-dark"},[t._v("平台開發技術 (II)")])]),t._v(" "),a("ul",{staticClass:"list-unstyled_"},[a("li",[t._v("主動式對話的機器人 ")]),t._v(" "),a("li",[t._v("大數據及人工智慧")]),t._v(" "),a("li",[t._v("幇助一般民眾想要的健康生活和及具即時讀取個人化的保健資詢。")]),t._v(" "),a("li",[t._v("協助醫院，診所，養護中心收集到個人同意釋放而經過智能轉化有用的醫護資訊。")])])]),t._v(" "),a("img",{staticClass:"card-img-right flex-auto d-none d-md-block",staticStyle:{"max-height":"250px"},attrs:{src:"http://ohla.info/wp-content/uploads/2018/06/abstract-art-blur-373543-200x250.jpg"}})])])])}]};var g=a("VU/8")({name:"ServicePlatform",data:function(){return{msg:"願景及目標"}}},p,!1,function(t){a("w8yP")},"data-v-84f91538",null).exports,C={name:"pricing",methods:{even:function(){alert("XDDDD")}}},_={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"pricing"},[i("article",{staticClass:"container"},[i("section",{staticClass:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"},[i("h1",{staticClass:"display-4",attrs:{"data-aos":"fade-right"}},[t._v("醫康服務平台商務模式")]),t._v(" "),i("img",{staticClass:"img-fluid m-auto",attrs:{"data-aos":"fade-up",src:a("zMjX")}})]),t._v(" "),i("h1",{staticClass:"mt-4 mb-5",attrs:{"data-aos":"fade-right"}},[t._v("Pricing")]),t._v(" "),i("div",{staticClass:"card-deck mb-3 text-center"},[i("div",{staticClass:"card mb-4 box-shadow",attrs:{"data-aos":"fade-up"}},[i("div",{staticClass:"card-header"},[i("h4",{staticClass:"my-0 font-weight-normal"},[t._v("Free")])]),t._v(" "),i("div",{staticClass:"card-body"},[i("img",{staticClass:"img-fluid mb-3",attrs:{src:"http://childrens-clinic.axiomthemes.com/wp-content/uploads/2017/05/services1.jpg"}}),t._v(" "),i("h1",{staticClass:"card-title pricing-card-title"},[t._v("$0 "),i("small",{staticClass:"text-muted"},[t._v("/ mo")])]),t._v(" "),i("ul",{staticClass:"list-unstyled mt-3 mb-4"},[i("li",[t._v("軟體授權(~$2萬/次)")]),t._v(" "),i("li",[t._v("平台維護(~$1萬/年)")]),t._v(" "),i("li",[t._v("雲平台維運($1千/月)")]),t._v(" "),i("li",[t._v("---")]),t._v(" "),i("li",[t._v("---")]),t._v(" "),i("li",[t._v("---")])]),t._v(" "),i("button",{staticClass:"btn btn-lg btn-block btn-outline-primary",attrs:{type:"button"}},[t._v("Sign up for free")])])]),t._v(" "),i("div",{staticClass:"card mb-4 box-shadow",attrs:{"data-aos":"fade-up"}},[i("div",{staticClass:"card-header"},[i("h4",{staticClass:"my-0 font-weight-normal"},[t._v("Pro")])]),t._v(" "),i("div",{staticClass:"card-body"},[i("img",{staticClass:"img-fluid mb-3",attrs:{src:"http://childrens-clinic.axiomthemes.com/wp-content/uploads/2017/05/services2.jpg"}}),t._v(" "),i("h1",{staticClass:"card-title pricing-card-title"},[t._v("$15 "),i("small",{staticClass:"text-muted"},[t._v("/ mo")])]),t._v(" "),i("ul",{staticClass:"list-unstyled mt-3 mb-4"},[i("li",[t._v("軟體授權(~$8萬/次)")]),t._v(" "),i("li",[t._v("平台維護(~$1.5萬/年)")]),t._v(" "),i("li",[t._v("雲平台維運($1.2千/月)")]),t._v(" "),i("li",[t._v("終端客戶廣告收益")]),t._v(" "),i("li",[t._v("---")]),t._v(" "),i("li",[t._v("---")])]),t._v(" "),i("button",{staticClass:"btn btn-lg btn-block btn-primary",attrs:{type:"button"}},[t._v("Get started")])])]),t._v(" "),i("div",{staticClass:"card mb-4 box-shadow",attrs:{"data-aos":"fade-up"}},[i("div",{staticClass:"card-header"},[i("h4",{staticClass:"my-0 font-weight-normal"},[t._v("Enterprise")])]),t._v(" "),i("div",{staticClass:"card-body"},[i("img",{staticClass:"img-fluid mb-3",attrs:{src:"http://childrens-clinic.axiomthemes.com/wp-content/uploads/2017/05/services3.jpg"}}),t._v(" "),i("h1",{staticClass:"card-title pricing-card-title"},[t._v("$29 "),i("small",{staticClass:"text-muted"},[t._v("/ mo")])]),t._v(" "),i("ul",{staticClass:"list-unstyled mt-3 mb-4"},[i("li",[t._v("軟體授權(~$20萬/次)")]),t._v(" "),i("li",[t._v("平台維護(~$2萬/年)")]),t._v(" "),i("li",[t._v("雲平台維運($2千/月)")]),t._v(" "),i("li",[t._v("終端客戶廣告收益")]),t._v(" "),i("li",[t._v("代支代付款")]),t._v(" "),i("li",[t._v("個人化保健商品購買")])]),t._v(" "),i("button",{staticClass:"btn btn-lg btn-block btn-primary",attrs:{type:"button"}},[t._v("Contact us")])])])])]),t._v(" "),i("article",{staticClass:"phoneUI"},[i("section",{staticClass:"container"},[i("div",{staticClass:"row align-items-center"},[i("section",{staticClass:"col-sm",attrs:{"data-aos":"flip-left","data-aos-delay":"300"}},[i("img",{staticClass:"img-fluid appUI",attrs:{src:"https://demos.creative-tim.com/marketplace/material-kit-pro/assets/assets-for-demo/cards-test.png"}})]),t._v(" "),i("section",{staticClass:"col-sm"},[i("img",{staticClass:"img-fluid",attrs:{"data-aos":"fade-up","data-aos-delay":"150",src:"https://image.flaticon.com/icons/png/128/896/896530.png"}}),t._v(" "),i("hr"),t._v(" "),i("article",{staticClass:"row justify-content-center"},[i("section",{staticClass:"col-5 col-sm-4"},[i("a",{attrs:{href:"#0"}},[i("img",{staticClass:"img-fluid",attrs:{src:"http://hamiwallet.emome.net/image/ios_download.svg"}})])]),t._v(" "),i("section",{staticClass:"col-5 col-sm-4"},[i("a",{attrs:{href:"#0"}},[i("img",{staticClass:"img-fluid",attrs:{src:"http://hamiwallet.emome.net/image/google-play.svg"}})])])])])])])])])}]};var b=a("VU/8")(C,_,!1,function(t){a("UFhs")},"data-v-528ea93c",null).exports,y={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"shopCard container"},[a("article",{staticClass:"card-deck"},[a("section",{staticClass:"card"},[a("img",{staticClass:"card-img-top",attrs:{src:"http://therapy.axiomthemes.com/wp-content/uploads/2015/01/Depositphotos_13724305_l1-400x225.jpg"}}),t._v(" "),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Your Medical Records")]),t._v(" "),a("p",{staticClass:"card-text"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam ante nec magna pharetra feugiat. Phasellus et...")])])]),t._v(" "),a("section",{staticClass:"card"},[a("img",{staticClass:"card-img-top",attrs:{src:"http://therapy.axiomthemes.com/wp-content/uploads/2015/01/Depositphotos_24652121_original1-400x225.jpg"}}),t._v(" "),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("2017 Best USA Hospitals")]),t._v(" "),a("p",{staticClass:"card-text"},[t._v("Duis eget dictum eros, in dictum sem. Vivamus sed molestie sapien. Aliquam et facilisis arcu, ut molestie augue...")])])]),t._v(" "),a("section",{staticClass:"card"},[a("img",{staticClass:"card-img-top",attrs:{src:"http://therapy.axiomthemes.com/wp-content/uploads/2014/12/Depositphotos_18234583_original-400x225.jpg"}}),t._v(" "),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Technologies In Hospital")]),t._v(" "),a("p",{staticClass:"card-text"},[t._v("Sed ac egestas nisl. Sed vestibulum ac diam sit amet porta. Vivamus est neque, tristique quis tempor at, consequat a...")])])])])])}]};var w=a("VU/8")({name:"shopCard"},y,!1,function(t){a("JPD4")},"data-v-411bb6b5",null).exports,k={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"container"},[s("article",{staticClass:"row ADbanner d-flex align-items-center"},[s("section",{staticClass:"offset-sm-1 col-sm-6 col-md-5 text-left",attrs:{"data-aos":"fade-up"}},[s("h2",[this._v("know how to treat")]),this._v(" "),s("p",{staticClass:"text-muted"},[this._v("He who joyfully marches to music in rank and file has already earned my contempt. He has been given a large brain by mistake, since for him the spinal cord would suffice. It stands to the everlasting credit of science that by acting on the human mind it has overcome man’s insecurity before himself and before nature.")])])])])}]};var x=a("VU/8")({name:"ADbanner"},k,!1,function(t){a("pwc/")},"data-v-600c8468",null).exports,E={name:"gotoTop",props:{visibleHeight:{type:Number,default:350},rate:{type:Number,default:12}},data:function(){return{scrollTop:"",visible:!1,interval:null}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll),this.interval&&clearInterval(this.interval)},methods:{handleScroll:function(){this.visible=window.pageYOffset>this.visibleHeight,this.scrollTop=window.pageYOffset},goTop:function(t){var s=this;this.interval=setInterval(function(){s.scrollTop=s.scrollTop+-s.scrollTop/s.rate,window.scrollTo(0,s.scrollTop),s.scrollTop<=0&&(window.scrollTo(0,0),clearInterval(s.interval))},13)}}},A={render:function(){var t=this.$createElement,s=this._self._c||t;return s("article",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}],staticClass:"gotoTop"},[s("a",{staticClass:"topBtn",attrs:{href:"#0"},on:{click:this.goTop}},[s("span")])])},staticRenderFns:[]};var I={name:"App",components:{topNav:n,footerBar:c,Pricing:b,shopCard:w,ADbanner:x,SlickCarousel:f,GotoTop:a("VU/8")(E,A,!1,function(t){a("gpd/")},"data-v-1e07a6fb",null).exports,ServicePlatform:g}},R={render:function(){var t=this.$createElement,s=this._self._c||t;return s("main",{attrs:{id:"app"}},[s("top-nav"),this._v(" "),s("slick-carousel"),this._v(" "),s("shopCard"),this._v(" "),s("ServicePlatform"),this._v(" "),s("pricing"),this._v(" "),s("ADbanner"),this._v(" "),s("goto-top"),this._v(" "),s("footer-bar")],1)},staticRenderFns:[]};var J=a("VU/8")(I,R,!1,function(t){a("1i66")},"data-v-76c8d0ce",null).exports,T=(a("K3J8"),a("qb6w"),a("RInU")),j=a.n(T);a("AhPL");j.a.init({duration:1200,easing:"ease-in-out",mirror:!0}),i.a.config.productionTip=!1,new i.a({el:"#app",components:{App:J},template:"<App/>"})},UFhs:function(t,s){},UYtn:function(t,s){},Yyf6:function(t,s){},"gpd/":function(t,s){},"pwc/":function(t,s){},qb6w:function(t,s){},ueDN:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA0CAYAAAA62j4JAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAwNzdFNjIzRDhGRDExRTg5M0E0RjEyOERFNTIyMDgxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAwNzdFNjI0RDhGRDExRTg5M0E0RjEyOERFNTIyMDgxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDA3N0U2MjFEOEZEMTFFODkzQTRGMTI4REU1MjIwODEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDA3N0U2MjJEOEZEMTFFODkzQTRGMTI4REU1MjIwODEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6HTm9BAAAS70lEQVR42sxb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"},w8yP:function(t,s){},xrfa:function(t,s){},zMjX:function(t,s,a){t.exports=a.p+"static/img/img_solution.8c676ff.png"}},["NHnr"]);
//# sourceMappingURL=app.03e7c105ae7a2805a477.js.map