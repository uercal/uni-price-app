(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main/group_add"],{"0dab":function(t,e,a){"use strict";a.r(e);var i=a("a8cd"),n=a("9cc2");for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);a("c202");var c=a("2877"),s=Object(c["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=s.exports},"10fc":function(t,e,a){"use strict";a("463c");var i=r(a("b0ce")),n=r(a("0dab"));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(n.default))},5054:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a("2f62"),n=r(a("376b"));function r(t){return t&&t.__esModule?t:{default:t}}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},i=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),i.forEach(function(e){s(t,e,a[e])})}return t}function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var o={data:function(){return{goods_price:[],newPrice:[],group_name:""}},computed:c({},(0,i.mapState)(["goods"])),methods:{fixed:function(t){var e=t.toFixed(2);return"00"==e.split(".")[1]?e.split(".")[0]:e},submit:function(){var e={},a=this.newPrice,i=a.some(function(t){return!t.rate||""==t.rate});if(""==this.group_name)return n.default.showError("分组名称不能为空"),!1;i?n.default.showError("比例不能为空"):(a.map(function(t){e["goods_id["+t.goods_id+"]"]=[t.rate*t.price/100,t.rate]}),e["group_name"]=this.group_name,n.default._post("Member/saveGroup",e,function(e){n.default.showSuccess("成功",function(){t.navigateBack()})}))},clearNoNum:function(t,e){t.value=t.value.replace(/[^\d.]/g,""),t.value=t.value.replace(/\.{2,}/g,"."),t.value=t.value.replace(/^\./g,""),t.value=t.value.replace(".","$#$").replace(/\./g,"").replace("$#$","."),t.value=t.value.replace(/^(\-)*(\d+)\.(\d\d).*$/,"$1$2.$3");var a=this;setTimeout(function(){a.newPrice[e].rate=t.value},1)}},onShow:function(){var t=this;this.goods_price=this.goods,this.goods_price.map(function(e){t.newPrice.push({goods_id:e.goods_id,price:e.price,rate:100})})}};e.default=o}).call(this,a("543d")["default"])},"9cc2":function(t,e,a){"use strict";a.r(e);var i=a("5054"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);e["default"]=n.a},a8cd:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",[a("form",[a("view",{staticClass:"cu-bar bg-white solid-bottom"},[a("view",{staticClass:"action text-title text-bold"},[a("text",{staticClass:"cuIcon-title text-orange"}),t._v("分组信息")])]),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("分组名称")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.group_name,expression:"group_name"}],attrs:{placeholder:"请填写分组名称",name:"input",eventid:"6321f012-0"},domProps:{value:t.group_name},on:{input:function(e){e.target.composing||(t.group_name=e.target.value)}}})]),a("view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[a("view",{staticClass:"action text-bold"},[a("text",{staticClass:"cuIcon-title text-orange"}),t._v("价格比例")])]),a("view",{staticClass:"cu-list menu sm-border card-menu margin-top'"},[a("view",{staticClass:"cu-item"},[a("view",{staticClass:"content"},[a("text",{staticClass:"text-black",staticStyle:{width:"35%"}},[t._v("商品名称")]),a("text",{staticClass:"text-black",staticStyle:{width:"20%"}},[t._v("原价")]),a("text",{staticClass:"text-black",staticStyle:{width:"20%"}},[t._v("现价")]),a("view",{staticStyle:{width:"20%",display:"flex","align-items":"center"}},[a("text",{staticClass:"text-black"},[t._v("比例")])])])]),t._l(t.goods_price,function(e,i){return a("view",{key:e.goods_id,staticClass:"cu-item"},[a("view",{staticClass:"content"},[a("text",{staticClass:"text-grey",staticStyle:{width:"35%"}},[t._v(t._s(e.goods_name))]),a("text",{staticClass:"text-grey",staticStyle:{width:"20%"}},[t._v(t._s(e.price)+"元")]),a("text",{staticClass:"text-grey",staticStyle:{width:"20%"}},[t._v(t._s(t.fixed(t.newPrice[i].rate*e.price/100))+"元")]),a("view",{staticStyle:{width:"20%",display:"flex","align-items":"center"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newPrice[i].rate,expression:"newPrice[index].rate"}],attrs:{placeholder:"比例",name:"input",type:"digit",eventid:"6321f012-1-"+i},domProps:{value:t.newPrice[i].rate},on:{input:[function(e){e.target.composing||(t.newPrice[i].rate=e.target.value)},function(e){t.clearNoNum(e.target,i)}]}}),a("view",{staticClass:"cu-capsule radius"},[a("label",{staticClass:"cu-tag"},[t._v("%")])],1)])])])})],2),a("view",{staticClass:"padding flex flex-direction"},[a("button",{staticClass:"cu-btn bg-blue margin-tb-sm lg",attrs:{eventid:"6321f012-2"},on:{click:t.submit}},[t._v("保存")])],1)])],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},b12f:function(t,e,a){},c202:function(t,e,a){"use strict";var i=a("b12f"),n=a.n(i);n.a}},[["10fc","common/runtime","common/vendor"]]]);