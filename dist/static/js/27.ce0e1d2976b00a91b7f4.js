webpackJsonp([27],{h2p2:function(t,e,a){var n=a("vpi3");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("574f37a8",n,!0)},mVUi:function(t,e,a){"use strict";function n(t){a("h2p2")}Object.defineProperty(e,"__esModule",{value:!0});var o={name:"About",methods:{tabActive:function(t){switch(t){case"了解普瑞森":this.$router.replace({name:"AboutInfo"});break;case"普瑞森团队":this.$router.replace({name:"AboutTeam"});break;case"加入我们":this.$router.replace({name:"AboutJoin"})}}}},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"itv-about"},[a("yd-tab",{staticClass:"itv-orders-nav",attrs:{"active-color":"#3C90EF",callback:t.tabActive}},[a("yd-tab-panel",{attrs:{label:"了解普瑞森",active:"AboutInfo"===t.$route.name}}),t._v(" "),a("yd-tab-panel",{attrs:{label:"加入我们",active:"AboutJoin"===t.$route.name}})],1),t._v(" "),a("div",{staticClass:"itv-about-content"},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)],1)},r=[],s={render:i,staticRenderFns:r},c=s,u=a("VU/8"),l=n,v=u(o,c,!1,l,null,null);e.default=v.exports},vpi3:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"\n.itv-about .itv-orders-nav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n.itv-about-content {\n  padding-top: 100px;\n}\n",""])}});