(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main/main"],{"1f84":function(t,e,a){"use strict";a.r(e);var s=a("99e2"),o=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);e["default"]=o.a},"4b13":function(t,e,a){"use strict";a.r(e);var s=a("d6ad"),o=a("1f84");for(var i in o)"default"!==i&&function(t){a.d(e,t,function(){return o[t]})}(i);a("c8c1");var n=a("2877"),c=Object(n["a"])(o["default"],s["a"],s["b"],!1,null,null,null);e["default"]=c.exports},"56ae":function(t,e,a){},"66da":function(t,e,a){"use strict";a("463c");var s=i(a("b0ce")),o=i(a("4b13"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(o.default))},"99e2":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a("2f62");function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},s=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),s.forEach(function(e){i(t,e,a[e])})}return t}function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var n={data:function(){return{modalName:null,dialogNmae:null,cuIconList:[{cuIcon:"moneybagfill",color:"red",badge:0,name:"价格管理",method:"price",permission:[0]},{cuIcon:"group_fill",color:"orange",badge:0,name:"分组管理",method:"group",permission:[0,1]},{cuIcon:"friendadd",color:"yellow",badge:0,name:"经销商管理",method:"child",permission:[0,1]},{cuIcon:"settingsfill",color:"olive",badge:0,name:"密码修改",method:"password",permission:[0,1,2]},{cuIcon:"exit",color:"grey",badge:0,name:"退出",method:"logout",permission:[0,1,2]}],gridCol:3,gridBorder:!1}},computed:(0,s.mapState)(["forcedLogin","hasLogin","userName","goods","avatar","member","type"]),methods:o({},(0,s.mapMutations)(["getIndexData"]),{showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1)},login:function(){t.navigateTo({url:"/pages/login/login"})},method:function(e){console.log(e);var a="/pages/main/"+e;"logout"==e?this.dialogNmae="DialogModal1":t.navigateTo({url:a})},logoutDo:function(){t.removeStorageSync("token"),t.removeStorageSync("member"),t.reLaunch({url:"/pages/main/main"})},hidedialog:function(){this.dialogNmae=null}}),onLoad:function(){this.getIndexData()}};e.default=n}).call(this,a("543d")["default"])},c8c1:function(t,e,a){"use strict";var s=a("56ae"),o=a.n(s);o.a},d6ad:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"bg-gradual-blue"},[a("scroll-view",{staticClass:"DrawerPage",class:"viewModal"==t.modalName?"show":"",attrs:{"scroll-y":""}},[a("view",{staticClass:"cu-bar bg-white solid-bottom"},[a("view",{staticClass:"action text-title text-bold"},[a("text",{staticClass:"cuIcon-title text-orange"}),t._v("商品列表")]),a("view",{staticClass:"action"},[t.hasLogin?a("button",{staticClass:"cu-btn bg-green shadow",attrs:{"data-target":"viewModal",eventid:"a672bc30-0"},on:{tap:t.showModal}},[t._v("个人中心")]):t._e(),t.hasLogin?t._e():a("button",{staticClass:"cu-btn bg-green shadow",attrs:{eventid:"a672bc30-1"},on:{tap:t.login}},[t._v("登陆")])],1)]),a("view",{staticClass:"cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg"},[a("view",{staticClass:"cu-item arrow"},[a("view",{staticClass:"content"},[a("text",{staticClass:"text-grey text-title"},[t._v("商品名称")]),a("text",{staticClass:"text-grey text-title"},[t._v("价格")])])]),t._l(t.goods,function(e,s){return a("view",{key:s,staticClass:"cu-item arrow"},[a("view",{staticClass:"content"},[a("text",{staticClass:"text-grey text-num"},[t._v(t._s(e.goods_name))]),a("text",{staticClass:"text-grey text-num"},[t._v(t._s(e.price?e.price+"元":"未定价"))])])])})],2)]),a("view",{staticClass:"DrawerClose",class:"viewModal"==t.modalName?"show":"",attrs:{eventid:"a672bc30-2"},on:{tap:t.hideModal}},[a("text",{staticClass:"cuIcon-pullright"})]),a("scroll-view",{staticClass:"DrawerWindow",class:"viewModal"==t.modalName?"show":"",staticStyle:{background:"#fff"},attrs:{"scroll-y":""}},[a("view",{staticClass:"avatar"},[a("image",{attrs:{src:t.avatar,mode:""}})]),t.member?a("view",{staticClass:"info-bonus"},[a("text",{staticClass:"type"},[t._v(t._s(t.member.type_text))]),a("text",{staticClass:"name"},[t._v(t._s(t.member.manager))])]):t._e(),a("view",{staticClass:"cu-list grid",class:["col-"+t.gridCol,t.gridBorder?"":"no-border"]},t._l(t.cuIconList,function(e,s){return-1!=e.permission.indexOf(t.type)?a("view",{key:s,staticClass:"cu-item",attrs:{eventid:"a672bc30-3-"+s},on:{click:function(a){t.method(e.method)}}},[a("view",{class:["cuIcon-"+e.cuIcon,"text-"+e.color]},[0!=e.badge?a("view",{staticClass:"cu-tag badge"},[1!=e.badge?a("block",[t._v(t._s(e.badge>99?"99+":e.badge))]):t._e()],1):t._e()]),a("text",[t._v(t._s(e.name))])]):t._e()}))]),a("view",{staticClass:"cu-modal",class:"DialogModal1"==t.dialogNmae?"show":""},[a("view",{staticClass:"cu-dialog"},[a("view",{staticClass:"cu-bar bg-white justify-end"},[a("view",{staticClass:"content"},[t._v("确认")]),a("view",{staticClass:"action",attrs:{eventid:"a672bc30-4"},on:{tap:t.hideModal}},[a("text",{staticClass:"cuIcon-close text-red"})])]),a("view",{staticClass:"padding-xl text-black"},[t._v("确定退出账号吗")]),a("view",{staticClass:"cu-bar bg-white justify-end"},[a("view",{staticClass:"action"},[a("button",{staticClass:"cu-btn line-green text-green",attrs:{eventid:"a672bc30-5"},on:{tap:t.hidedialog}},[t._v("取消")]),a("button",{staticClass:"cu-btn bg-green margin-left",attrs:{eventid:"a672bc30-6"},on:{tap:t.logoutDo}},[t._v("确定")])],1)])])])],1)},o=[];a.d(e,"a",function(){return s}),a.d(e,"b",function(){return o})}},[["66da","common/runtime","common/vendor"]]]);