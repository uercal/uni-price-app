(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-main-list"],{"50cc":function(t,i,s){"use strict";var a=s("f2c8"),e=s.n(a);e.a},"7a85":function(t,i,s){i=t.exports=s("2350")(!1),i.push([t.i,'.page[data-v-5c1a1689]{height:100Vh;width:100vw}.page.show[data-v-5c1a1689]{overflow:hidden}.switch-sex[data-v-5c1a1689]:after{content:"\\E716"}.switch-sex[data-v-5c1a1689]:before{content:"\\E7A9"}.switch-music[data-v-5c1a1689]:after{content:"\\E66A"}.switch-music[data-v-5c1a1689]:before{content:"\\E6DB"}',""])},"932c":function(t,i,s){"use strict";s.r(i);var a=s("dcbb"),e=s("bd9d");for(var n in e)"default"!==n&&function(t){s.d(i,t,function(){return e[t]})}(n);s("50cc");var c=s("2877"),u=Object(c["a"])(e["default"],a["a"],a["b"],!1,null,"5c1a1689",null);i["default"]=u.exports},"93f2":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{cuIconList:[{cuIcon:"cardboardfill",color:"red",badge:120,name:"VR"},{cuIcon:"recordfill",color:"orange",badge:1,name:"录像"},{cuIcon:"picfill",color:"yellow",badge:0,name:"图像"},{cuIcon:"noticefill",color:"olive",badge:22,name:"通知"},{cuIcon:"upstagefill",color:"cyan",badge:0,name:"排行榜"},{cuIcon:"clothesfill",color:"blue",badge:0,name:"皮肤"},{cuIcon:"discoverfill",color:"purple",badge:0,name:"发现"},{cuIcon:"questionfill",color:"mauve",badge:0,name:"帮助"},{cuIcon:"commandfill",color:"purple",badge:0,name:"问答"},{cuIcon:"brandfill",color:"mauve",badge:0,name:"版权"}],modalName:null,gridCol:3,gridBorder:!1,menuBorder:!1,menuArrow:!1,menuCard:!1,skin:!1,listTouchStart:0,listTouchDirection:null}},methods:{showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},Gridchange:function(t){this.gridCol=t.detail.value},Gridswitch:function(t){this.gridBorder=t.detail.value},MenuBorder:function(t){this.menuBorder=t.detail.value},MenuArrow:function(t){this.menuArrow=t.detail.value},MenuCard:function(t){this.menuCard=t.detail.value},SwitchSex:function(t){this.skin=t.detail.value},ListTouchStart:function(t){this.listTouchStart=t.touches[0].pageX},ListTouchMove:function(t){this.listTouchDirection=t.touches[0].pageX-this.listTouchStart>0?"right":"left"},ListTouchEnd:function(t){"left"==this.listTouchDirection?this.modalName=t.currentTarget.dataset.target:this.modalName=null,this.listTouchDirection=null}}};i.default=a},bd9d:function(t,i,s){"use strict";s.r(i);var a=s("93f2"),e=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(i,t,function(){return a[t]})}(n);i["default"]=e.a},dcbb:function(t,i,s){"use strict";var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("v-uni-view",[s("v-uni-scroll-view",{staticClass:"page",class:null!=t.modalName?"show":"",attrs:{"scroll-y":null==t.modalName}},[s("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"cuIcon-title text-orange"}),t._v("商品列表")],1),s("v-uni-view",{staticClass:"action"},[s("v-uni-button",{staticClass:"cu-btn bg-green shadow",attrs:{"data-target":"menuModal"},on:{click:function(i){i=t.$handleEvent(i),t.showModal(i)}}},[t._v("个人中心")])],1)],1),s("v-uni-view",{staticClass:"cu-list menu",class:[t.menuBorder?"sm-border":"",t.menuCard?"card-menu margin-top":""]},[s("v-uni-view",{staticClass:"cu-item",class:t.menuArrow?"arrow":""},[s("v-uni-view",{staticClass:"content"},[s("v-uni-text",{staticClass:"cuIcon-circlefill text-grey"}),s("v-uni-text",{staticClass:"text-grey"},[t._v("图标 + 标题")])],1)],1),s("v-uni-view",{staticClass:"cu-item",class:t.menuArrow?"arrow":""},[s("v-uni-view",{staticClass:"content"},[s("v-uni-image",{staticClass:"png",attrs:{src:"/static/logo.png",mode:"aspectFit"}}),s("v-uni-text",{staticClass:"text-grey"},[t._v("图片 + 标题")])],1)],1),s("v-uni-view",{staticClass:"cu-item",class:t.menuArrow?"arrow":""},[s("v-uni-button",{staticClass:"cu-btn content",attrs:{"open-type":"contact"}},[s("v-uni-text",{staticClass:"cuIcon-btn text-olive"}),s("v-uni-text",{staticClass:"text-grey"},[t._v("Open-type 按钮")])],1)],1),s("v-uni-view",{staticClass:"cu-item",class:t.menuArrow?"arrow":""},[s("v-uni-navigator",{staticClass:"content",attrs:{"hover-class":"none",url:"../list/list","open-type":"redirect"}},[s("v-uni-text",{staticClass:"cuIcon-discoverfill text-orange"}),s("v-uni-text",{staticClass:"text-grey"},[t._v("Navigator 跳转")])],1)],1),s("v-uni-view",{staticClass:"cu-item",class:t.menuArrow?"arrow":""},[s("v-uni-view",{staticClass:"content"},[s("v-uni-text",{staticClass:"cuIcon-emojiflashfill text-pink"}),s("v-uni-text",{staticClass:"text-grey"},[t._v("头像组")])],1),s("v-uni-view",{staticClass:"action"},[s("v-uni-view",{staticClass:"cu-avatar-group"},[s("v-uni-view",{staticClass:"cu-avatar round sm",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"}}),s("v-uni-view",{staticClass:"cu-avatar round sm",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg)"}}),s("v-uni-view",{staticClass:"cu-avatar round sm",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg)"}}),s("v-uni-view",{staticClass:"cu-avatar round sm",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg)"}})],1),s("v-uni-text",{staticClass:"text-grey text-sm"},[t._v("4 人")])],1)],1),s("v-uni-view",{staticClass:"cu-item",class:t.menuArrow?"arrow":""},[s("v-uni-view",{staticClass:"content"},[s("v-uni-text",{staticClass:"cuIcon-btn text-green"}),s("v-uni-text",{staticClass:"text-grey"},[t._v("按钮")])],1),s("v-uni-view",{staticClass:"action"},[s("v-uni-button",{staticClass:"cu-btn round bg-green shadow"},[s("v-uni-text",{staticClass:"cuIcon-upload"}),t._v("上传")],1)],1)],1),s("v-uni-view",{staticClass:"cu-item",class:t.menuArrow?"arrow":""},[s("v-uni-view",{staticClass:"content"},[s("v-uni-text",{staticClass:"cuIcon-tagfill text-red  margin-right-xs"}),s("v-uni-text",{staticClass:"text-grey"},[t._v("标签")])],1),s("v-uni-view",{staticClass:"action"},[s("v-uni-view",{staticClass:"cu-tag round bg-orange light"},[t._v("音乐")]),s("v-uni-view",{staticClass:"cu-tag round bg-olive light"},[t._v("电影")]),s("v-uni-view",{staticClass:"cu-tag round bg-blue light"},[t._v("旅行")])],1)],1),s("v-uni-view",{staticClass:"cu-item",class:t.menuArrow?"arrow":""},[s("v-uni-view",{staticClass:"content"},[s("v-uni-text",{staticClass:"cuIcon-warn text-green"}),s("v-uni-text",{staticClass:"text-grey"},[t._v("文本")])],1),s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"text-grey text-sm"},[t._v("小目标还没有实现！")])],1)],1),s("v-uni-view",{staticClass:"cu-item"},[s("v-uni-view",{staticClass:"content padding-tb-sm"},[s("v-uni-view",[s("v-uni-text",{staticClass:"cuIcon-clothesfill text-blue margin-right-xs"}),t._v("多行Item")],1),s("v-uni-view",{staticClass:"text-gray text-sm"},[s("v-uni-text",{staticClass:"cuIcon-infofill margin-right-xs"}),t._v("小目标还没有实现！")],1)],1),s("v-uni-view",{staticClass:"action"},[s("v-uni-switch",{staticClass:"switch-sex",class:t.skin?"checked":"",attrs:{checked:!!t.skin},on:{change:function(i){i=t.$handleEvent(i),t.SwitchSex(i)}}})],1)],1)],1),s("v-uni-view",{staticClass:"cu-modal",class:"menuModal"==t.modalName?"show":"",on:{click:function(i){i=t.$handleEvent(i),t.hideModal(i)}}},[s("v-uni-view",{staticClass:"cu-dialog",on:{click:function(i){i.stopPropagation(),i=t.$handleEvent(i)}}},[s("v-uni-view",{staticClass:"cu-list menu text-left solid-top"},[s("v-uni-view",{staticClass:"cu-item"},[s("v-uni-view",{staticClass:"content"},[s("v-uni-text",{staticClass:"text-grey"},[t._v("短边框")])],1),s("v-uni-view",{staticClass:"action"},[s("v-uni-switch",{class:t.menuBorder?"checked":"",attrs:{checked:!!t.menuBorder},on:{change:function(i){i=t.$handleEvent(i),t.MenuBorder(i)}}})],1)],1),s("v-uni-view",{staticClass:"cu-item"},[s("v-uni-view",{staticClass:"content"},[s("v-uni-text",{staticClass:"text-grey"},[t._v("箭头")])],1),s("v-uni-view",{staticClass:"action"},[s("v-uni-switch",{class:t.menuArrow?"checked":"",attrs:{checked:!!t.menuArrow},on:{change:function(i){i=t.$handleEvent(i),t.MenuArrow(i)}}})],1)],1),s("v-uni-view",{staticClass:"cu-item"},[s("v-uni-view",{staticClass:"content"},[s("v-uni-text",{staticClass:"text-grey"},[t._v("卡片")])],1),s("v-uni-view",{staticClass:"action"},[s("v-uni-switch",{class:t.menuCard?"checked":"",attrs:{checked:!!t.menuCard},on:{change:function(i){i=t.$handleEvent(i),t.MenuCard(i)}}})],1)],1)],1)],1)],1),s("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"cuIcon-title text-orange "}),t._v("宫格列表")],1),s("v-uni-view",{staticClass:"action"},[s("v-uni-button",{staticClass:"cu-btn bg-green shadow",attrs:{"data-target":"gridModal"},on:{click:function(i){i=t.$handleEvent(i),t.showModal(i)}}},[t._v("设置")])],1)],1),s("v-uni-view",{staticClass:"cu-modal",class:"gridModal"==t.modalName?"show":"",on:{click:function(i){i=t.$handleEvent(i),t.hideModal(i)}}},[s("v-uni-view",{staticClass:"cu-dialog",on:{click:function(i){i.stopPropagation(),i=t.$handleEvent(i)}}},[s("v-uni-radio-group",{staticClass:"block",on:{change:function(i){i=t.$handleEvent(i),t.Gridchange(i)}}},[s("v-uni-view",{staticClass:"cu-list menu text-left"},t._l(3,function(i,a){return s("v-uni-view",{key:a,staticClass:"cu-item"},[s("v-uni-label",{staticClass:"flex justify-between align-center flex-sub"},[s("v-uni-view",{staticClass:"flex-sub"},[t._v(t._s(a+3)+" 列")]),s("v-uni-radio",{staticClass:"round",class:t.gridCol==a+3?"checked":"",attrs:{value:a+3+"",checked:t.gridCol==a+3}})],1)],1)}),1)],1),s("v-uni-view",{staticClass:"cu-list menu text-left solid-top"},[s("v-uni-view",{staticClass:"cu-item"},[s("v-uni-view",{staticClass:"content"},[s("v-uni-text",{staticClass:"text-grey"},[t._v("边框")])],1),s("v-uni-view",{staticClass:"action"},[s("v-uni-switch",{class:t.gridBorder?"checked":"",attrs:{checked:!!t.gridBorder},on:{change:function(i){i=t.$handleEvent(i),t.Gridswitch(i)}}})],1)],1)],1)],1)],1),s("v-uni-view",{staticClass:"cu-list grid",class:["col-"+t.gridCol,t.gridBorder?"":"no-border"]},t._l(t.cuIconList,function(i,a){return a<2*t.gridCol?s("v-uni-view",{key:a,staticClass:"cu-item"},[s("v-uni-view",{class:["cuIcon-"+i.cuIcon,"text-"+i.color]},[0!=i.badge?s("v-uni-view",{staticClass:"cu-tag badge"},[1!=i.badge?[t._v(t._s(i.badge>99?"99+":i.badge))]:t._e()],2):t._e()],1),s("v-uni-text",[t._v(t._s(i.name))])],1):t._e()}),1),s("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"cuIcon-title text-orange "}),t._v("消息列表")],1),s("v-uni-view",{staticClass:"action"},[s("v-uni-button",{staticClass:"cu-btn bg-green shadow",attrs:{"data-target":"menuModal"},on:{click:function(i){i=t.$handleEvent(i),t.showModal(i)}}},[t._v("个人中心")])],1)],1),s("v-uni-view",{staticClass:"cu-list menu-avatar"},[s("v-uni-view",{staticClass:"cu-item"},[s("v-uni-view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"}}),s("v-uni-view",{staticClass:"content"},[s("v-uni-view",{staticClass:"text-grey"},[t._v("凯尔")]),s("v-uni-view",{staticClass:"text-gray text-sm flex"},[s("v-uni-view",{staticClass:"text-cut"},[s("v-uni-text",{staticClass:"cuIcon-infofill text-red  margin-right-xs"}),t._v("我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。")],1)],1)],1),s("v-uni-view",{staticClass:"action"},[s("v-uni-view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),s("v-uni-view",{staticClass:"cu-tag round bg-grey sm"},[t._v("5")])],1)],1),s("v-uni-view",{staticClass:"cu-item"},[s("v-uni-view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png)"}},[s("v-uni-view",{staticClass:"cu-tag badge"},[t._v("99+")])],1),s("v-uni-view",{staticClass:"content"},[s("v-uni-view",{staticClass:"text-grey"},[s("v-uni-view",{staticClass:"text-cut"},[t._v("瓦洛兰之盾-塔里克")]),s("v-uni-view",{staticClass:"cu-tag round bg-orange sm"},[t._v("战士")])],1),s("v-uni-view",{staticClass:"text-gray text-sm flex"},[s("v-uni-view",{staticClass:"text-cut"},[t._v("塔里克是保护者星灵，用超乎寻常的力量守护着符文之地的生命、仁爱以及万物之美。塔里克由于渎职而被放逐，离开了祖国德玛西亚，前去攀登巨神峰寻找救赎，但他找到的却是来自星界的更高层的召唤。现在的塔里克与古代巨神族的神力相融合，以瓦洛兰之盾的身份，永不疲倦地警惕着阴险狡诈的虚空腐化之力。")])],1)],1),s("v-uni-view",{staticClass:"action"},[s("v-uni-view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),s("v-uni-view",{staticClass:"cuIcon-notice_forbid_fill text-gray"})],1)],1),s("v-uni-view",{staticClass:"cu-item "},[s("v-uni-view",{staticClass:"cu-avatar radius lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png)"}}),s("v-uni-view",{staticClass:"content"},[s("v-uni-view",{staticClass:"text-pink"},[s("v-uni-view",{staticClass:"text-cut"},[t._v("莫甘娜")])],1),s("v-uni-view",{staticClass:"text-gray text-sm flex"},[s("v-uni-view",{staticClass:"text-cut"},[t._v("凯尔，你被自己的光芒变的盲目！")])],1)],1),s("v-uni-view",{staticClass:"action"},[s("v-uni-view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),s("v-uni-view",{staticClass:"cu-tag round bg-red sm"},[t._v("5")])],1)],1),s("v-uni-view",{staticClass:"cu-item grayscale"},[s("v-uni-view",{staticClass:"cu-avatar radius lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg)"}}),s("v-uni-view",{staticClass:"content"},[s("v-uni-view",[s("v-uni-view",{staticClass:"text-cut"},[t._v("伊泽瑞尔")]),s("v-uni-view",{staticClass:"cu-tag round bg-orange sm"},[t._v("断开连接...")])],1),s("v-uni-view",{staticClass:"text-gray text-sm flex"},[s("v-uni-view",{staticClass:"text-cut"},[t._v("等我回来一个打十个")])],1)],1),s("v-uni-view",{staticClass:"action"},[s("v-uni-view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),s("v-uni-view",{staticClass:"cu-tag round bg-red sm"},[t._v("5")])],1)],1),s("v-uni-view",{staticClass:"cu-item cur"},[s("v-uni-view",{staticClass:"cu-avatar radius lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg)"}},[s("v-uni-view",{staticClass:"cu-tag badge"})],1),s("v-uni-view",{staticClass:"content"},[s("v-uni-view",[s("v-uni-view",{staticClass:"text-cut"},[t._v("瓦罗兰大陆-睡衣守护者-新手保护营")]),s("v-uni-view",{staticClass:"cu-tag round bg-orange sm"},[t._v("6人")])],1),s("v-uni-view",{staticClass:"text-gray text-sm flex"},[s("v-uni-view",{staticClass:"text-cut"},[t._v("伊泽瑞尔："),s("v-uni-text",{staticClass:"cuIcon-locationfill text-orange margin-right-xs"}),t._v("传送中...")],1)],1)],1),s("v-uni-view",{staticClass:"action"},[s("v-uni-view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),s("v-uni-view",{staticClass:"cuIcon-notice_forbid_fill text-gray"})],1)],1)],1),s("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"cuIcon-title text-orange "}),t._v("列表左滑")],1)],1),s("v-uni-view",{staticClass:"cu-list menu-avatar"},t._l(4,function(i,a){return s("v-uni-view",{key:a,staticClass:"cu-item",class:t.modalName=="move-box-"+a?"move-cur":"",attrs:{"data-target":"move-box-"+a},on:{touchstart:function(i){i=t.$handleEvent(i),t.ListTouchStart(i)},touchmove:function(i){i=t.$handleEvent(i),t.ListTouchMove(i)},touchend:function(i){i=t.$handleEvent(i),t.ListTouchEnd(i)}}},[s("v-uni-view",{staticClass:"cu-avatar round lg",style:[{backgroundImage:"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big2100"+(a+2)+".jpg)"}]}),s("v-uni-view",{staticClass:"content"},[s("v-uni-view",{staticClass:"text-grey"},[t._v("文晓港")]),s("v-uni-view",{staticClass:"text-gray text-sm"},[s("v-uni-text",{staticClass:"cuIcon-infofill text-red  margin-right-xs"}),t._v("消息未送达")],1)],1),s("v-uni-view",{staticClass:"action"},[s("v-uni-view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),s("v-uni-view",{staticClass:"cu-tag round bg-grey sm"},[t._v("5")])],1),s("v-uni-view",{staticClass:"move"},[s("v-uni-view",{staticClass:"bg-grey"},[t._v("置顶")]),s("v-uni-view",{staticClass:"bg-red"},[t._v("删除")])],1)],1)}),1)],1)],1)},e=[];s.d(i,"a",function(){return a}),s.d(i,"b",function(){return e})},f2c8:function(t,i,s){var a=s("7a85");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=s("4f06").default;e("ed08508e",a,!0,{sourceMap:!1,shadowMode:!1})}}]);