webpackJsonp([4],{"2ze9":function(t,e,s){t.exports=s.p+"static/img/pic-ecosystem.de4df6f.png"},"99nG":function(t,e,s){"use strict";function i(t){s("Uk8Y")}Object.defineProperty(e,"__esModule",{value:!0});var n=s("mvHQ"),c=s.n(n),r=(s("vMJZ"),s("SDXL")),a={name:"InviteCode",data:function(){return{success:!1}},created:function(){this.$cookies.getRaw("_prs_wx_user")||(location.href="http://precision-m.interval.im/extensions/wx/user/authorize/?state="+encodeURIComponent(location.href)),this.$bus.$emit(this.$bus.EVENTS.WX_USER_UPDATE)},methods:{addCard:function(){var t=this;r.a.cardConfig(this.$route.query.card_id).then(function(e){var s=e.data.data;wx.addCard({cardList:[{cardId:s.cardId,cardExt:c()({timestamp:s.timestamp,nonce_str:s.nonce_str,signature:s.signature})}],success:function(e){t.success=!0,t.$bus.$emit(t.$bus.EVENTS.WX_USER_UPDATE)}})})}}},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"itv-invite-code"},[2==t.$route.query.category_id?i("img",{attrs:{src:s("Qnxn")}}):t._e(),t._v(" "),3==t.$route.query.category_id?i("img",{attrs:{src:s("zmnI")}}):t._e(),t._v(" "),1==t.$route.query.category_id?i("img",{attrs:{src:s("xmXx")}}):t._e(),t._v(" "),-1==t.$bus.weixinUser.card_ids.indexOf(t.$route.query.card_id)?i("base-Button",{staticClass:"btn",attrs:{size:"big"},on:{click:t.addCard}},[t._v("立即领取")]):i("base-Button",{staticClass:"btn",attrs:{size:"big",disabled:""}},[t._v("已领取")]),t._v(" "),i("base-Dialog",{attrs:{visible:t.success,background:"transparent"},on:{"update:visible":function(e){t.success=e}}},[2==t.$route.query.category_id?i("img",{attrs:{src:s("Efqo")}}):t._e(),t._v(" "),3==t.$route.query.category_id?i("img",{attrs:{src:s("2ze9")}}):t._e(),t._v(" "),1==t.$route.query.category_id?i("img",{attrs:{src:s("qaMj")}}):t._e(),t._v(" "),i("div",{staticClass:"success-desc"},[i("div",{staticClass:"success-desc-hd"},[i("p",[t._v("领取成功！")]),t._v(" "),i("p",[t._v("邀请券已进入您的微信卡包")])]),t._v(" "),i("div",{staticClass:"success-desc-bd"},[i("p",[t._v("请在普瑞森基因公众号或在电脑端官方网站(http://www.precisiongene.cn/)凭本券购买普瑞森服务。")]),t._v(" "),i("p",[t._v("此微信卡券领取成功后"),i("span",{staticClass:"itv-highlight-red"},[t._v("90天")]),t._v("内有效，请注意使用时间并妥善保管。")])])]),t._v(" "),i("icon-svg",{attrs:{slot:"close","icon-class":"close","class-name":"dialog"},slot:"close"})],1)],1)},d=[],u={render:o,staticRenderFns:d},p=u,v=s("VU/8"),g=i,l=v(a,p,!1,g,null,null);e.default=l.exports},Efqo:function(t,e,s){t.exports=s.p+"static/img/pic-child.25a0719.png"},Qnxn:function(t,e,s){t.exports=s.p+"static/img/bg-child.4727d8b.jpg"},Uk8Y:function(t,e,s){var i=s("fXVg");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("rjj0")("53a3879c",i,!0)},fXVg:function(t,e,s){e=t.exports=s("FZ+f")(!1),e.push([t.i,"\n.itv-invite-code img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.itv-invite-code .btn {\n  position: absolute;\n  top: 550px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.itv-invite-code .success-desc {\n  padding: 56px 48px;\n  color: #FFFFFF;\n  text-align: center;\n}\n.itv-invite-code .success-desc-hd {\n    font-size: 32px;\n    margin-bottom: 24px;\n}\n.itv-invite-code .success-desc-bd p {\n    margin-bottom: 8px;\n}\n",""])},mvHQ:function(t,e,s){t.exports={default:s("qkKv"),__esModule:!0}},qaMj:function(t,e,s){t.exports=s.p+"static/img/pic-filter.1848947.png"},qkKv:function(t,e,s){var i=s("FeBl"),n=i.JSON||(i.JSON={stringify:JSON.stringify});t.exports=function(t){return n.stringify.apply(n,arguments)}},xmXx:function(t,e,s){t.exports=s.p+"static/img/bg-filter.07c61de.jpg"},zmnI:function(t,e,s){t.exports=s.p+"static/img/bg-ecosystem.9dea85d.jpg"}});