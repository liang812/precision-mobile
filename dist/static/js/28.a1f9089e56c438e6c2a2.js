webpackJsonp([28],{"/Lq6":function(t,s,e){s=t.exports=e("FZ+f")(!1),s.push([t.i,"\n.itv-buy .itv-product-info {\n  margin: 16px 0;\n}\n.itv-buy .money {\n  font-size: 32px;\n}\n.itv-buy .protocol {\n  position: absolute;\n  left: 0;\n  bottom: 95px;\n  padding: 0 32px;\n  height: 100px;\n  width: 100%;\n  line-height: 100px;\n  font-size: 28px;\n}\n.itv-buy .protocol a {\n    vertical-align: inherit;\n}\n",""])},"25O4":function(t,s,e){var a=e("/Lq6");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("baee683a",a,!0)},"M/dV":function(t,s,e){"use strict";function a(t){e("25O4")}Object.defineProperty(s,"__esModule",{value:!0});var i=e("wIDu"),r=e("Z5Fx"),n={name:"BuyIndex",computed:{formatAddress:function(){return this.address.province+" "+this.address.city+" "+this.address.district+" "+this.address.street}},mounted:function(){var t=this;this.$nextTick(function(){if(t.$bus.address)return void(t.address=t.$bus.address);t.loadAddresses(),t.loadDetails()})},data:function(){return{details:null,address:{},number:1,protocol:!0}},methods:{loadAddresses:function(){var t=this;i.a.getAddresses().then(function(s){0===s.data.code&&(s.data.data.addresses.length>0?t.address=t.$bus.address=s.data.data.addresses[0]:t.$router.push({name:"AddressAdd"}))})},loadDetails:function(){var t=this;i.a.getInviteCodeGroup(this.$bus.encryptCode,{product_id:this.$route.query.product_id}).then(function(s){0===s.data.code?t.details=s.data.data.invite_code_group:1419===s.data.code?alert("非常抱歉，该产品已下架"):t.$router.replace({name:"BuyError"})})},createOrders:function(){var t=this;this.protocol&&r.a.createOrders(this.$bus.encryptCode,{product_id:this.details.product.id,quantity:this.number,address_id:this.$bus.address.id}).then(function(s){if(0===s.data.code){var e=s.data.data.order.id;t.createTransactions(e)}else t.$router.replace({name:"BuyError"})})},createTransactions:function(t){var s=this;r.a.createTransactions(t,{channel:"WX_JSAPI"}).then(function(t){if(0===t.data.code){var e=t.data.data;wx.chooseWXPay({timestamp:e.timeStamp,nonceStr:e.nonceStr,package:e.package,signType:e.signType,paySign:e.paySign,success:function(t){"chooseWXPay:ok"===t.errMsg&&s.$router.push({name:"TransactionsSuccess"})}})}else s.$router.push({name:"TransactionsError"})})}}},o=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"itv-buy"},[a("router-link",{staticClass:"itv-address itv-bg-white",attrs:{to:{name:"Address"}}},[a("icon-svg",{attrs:{"icon-class":"location"}}),t._v(" "),a("div",{staticClass:"itv-address-info"},[a("h2",{staticClass:"itv-address-info-title"},[t._v("收货信息")]),t._v(" "),a("div",{staticClass:"itv-address-info-content"},[a("p",[t._v(t._s(t.formatAddress))]),t._v(" "),a("div",{staticClass:"consignee"},[a("span",[t._v(t._s(t.address.consignee))]),t._v(" "),a("span",[t._v(t._s(t.address.phone))])])])]),t._v(" "),a("icon-svg",{staticStyle:{"align-self":"center"},attrs:{"icon-class":"arrow-right"}})],1),t._v(" "),t.details?[a("div",{staticClass:"itv-product-info"},[1===t.details.product.id?a("img",{attrs:{src:e("6+qI"),srcset:e("6+qI")+" 2x"}}):t._e(),t._v(" "),2===t.details.product.id?a("img",{attrs:{src:e("lh62"),srcset:e("lh62")+" 2x"}}):t._e(),t._v(" "),3===t.details.product.id?a("img",{attrs:{src:e("Y/cV"),srcset:e("Y/cV")+" 2x"}}):t._e(),t._v(" "),a("h1",{staticClass:"itv-product-info-name"},[t._v(t._s(t.details.product.name))]),t._v(" "),a("base-number",{model:{value:t.number,callback:function(s){t.number=s},expression:"number"}})],1),t._v(" "),a("base-cell",{attrs:{title:"应付金额"}},[a("span",{staticClass:"itv-highlight-red money"},[t._v("￥"+t._s((t.details.product.price-t.details.discount)/100)+" ")])])]:t._e(),t._v(" "),a("p",{staticClass:"protocol itv-bg-white",on:{click:function(s){t.protocol=!t.protocol}}},[a("icon-svg",{staticStyle:{margin:"0 16px 4px 0"},attrs:{"icon-class":t.protocol?"radio-checked":"radio"}}),t._v("\n    我已阅读并同意\n    "),a("router-link",{staticClass:"itv-highlight-blue",attrs:{to:{name:"Protocol"}}},[t._v("《普瑞森基因服务知情同意书》")])],1),t._v(" "),a("base-button",{attrs:{type:"error",size:"big",width:"100%",position:"bottom",disabled:!t.protocol},on:{click:t.createOrders}},[t._v("\n    支付订单\n  ")])],2)},d=[],c={render:o,staticRenderFns:d},l=c,u=e("VU/8"),p=a,v=u(n,l,!1,p,null,null);s.default=v.exports}});