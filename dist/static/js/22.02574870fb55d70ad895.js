webpackJsonp([22],{"57jE":function(t,e,a){var i=a("z0Bw");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("771b0861",i,!0)},"7Otq":function(t,e,a){t.exports=a.p+"static/img/logo.727ad14.png"},Imvj:function(t,e,a){"use strict";function i(t){a("57jE")}Object.defineProperty(e,"__esModule",{value:!0});var o=a("vMJZ"),s={name:"Login",mounted:function(){this.getCaptcha(),""!==this.$bus.user.mobile&&this.$bus.user.mobile&&this.$router.push({name:"User"})},data:function(){return{bindForm:{mobile:"",code:"",captchaCode:"",errorText:"",captchaImage:null,captchaToken:null},codeStatus:{statusText:"获取验证码",sending:!1,interval:void 0},focus:1}},methods:{getCaptcha:function(){var t=this;o.a.getCaptcha({width:100,height:50}).then(function(e){var a=e.data.data;0===e.data.code&&(t.bindForm.captchaImage=a.image,t.bindForm.captchaToken=a.token)})},sendCode:function(){var t=this,e=30;if(""===this.bindForm.mobile)return void(this.bindForm.errorText="手机号不能为空");o.a.sendBind({mobile:this.bindForm.mobile,captcha_token:this.bindForm.captchaToken,captcha_code:this.bindForm.captchaCode}).then(function(a){0===a.data.code?(t.bindForm.errorText="",t.codeStatus.sending=!0,t.codeStatus.statusText=e+"s",t.codeStatus.interval=setInterval(function(){if(1===e)return t.codeStatus.sending=!1,t.codeStatus.statusText="获取验证码",void clearInterval(t.codeStatus.interval);e--,t.codeStatus.statusText=e+"s"},1e3)):t.bindForm.errorText=a.data.message})},submitBind:function(){var t=this;o.a.bind({mobile:this.bindForm.mobile,code:this.bindForm.code}).then(function(e){var a=e.data.data;0===e.data.code?(t.$bus.$emit(t.$bus.EVENTS.USER_UPDATE,a.user),t.$cookies.setRaw("_prs_user",a.token,{expires:"30D"}),t.$router.push({name:"BindSuccess"})):t.bindForm.errorText=e.data.message})}}},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"itv-bind"},[i("img",{staticClass:"logo",attrs:{src:a("7Otq"),alt:"logo"}}),t._v(" "),i("p",[t._v("绑定手机即可体验普瑞森服务")]),t._v(" "),i("div",{staticClass:"itv-form"},[i("div",{staticClass:"itv-input-group",class:{active:1===t.focus}},[i("icon-svg",{attrs:{"icon-class":1===t.focus?"phone":"phone-disabled"}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.bindForm.mobile,expression:"bindForm.mobile"}],staticClass:"itv-input",attrs:{type:"text",placeholder:"请输入新手机号"},domProps:{value:t.bindForm.mobile},on:{focus:function(e){t.focus=1},input:function(e){e.target.composing||t.$set(t.bindForm,"mobile",e.target.value)}}})],1),t._v(" "),i("div",{staticClass:"itv-input-group",class:{active:2===t.focus}},[i("icon-svg",{attrs:{"icon-class":2===t.focus?"captcha":"captcha-disabled"}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.bindForm.captchaCode,expression:"bindForm.captchaCode"}],staticClass:"itv-input",attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:t.bindForm.captchaCode},on:{focus:function(e){t.focus=2},input:function(e){e.target.composing||t.$set(t.bindForm,"captchaCode",e.target.value)}}}),t._v(" "),i("div",{staticClass:"captcha-group"},[t.bindForm.captchaImage?i("img",{staticClass:"img",attrs:{src:"data:img/jpg;base64,"+t.bindForm.captchaImage,alt:"captchaImage"}}):t._e(),t._v(" "),i("span",{staticClass:"refresh",on:{click:t.getCaptcha}},[t._v("刷新")])])],1),t._v(" "),i("div",{staticClass:"itv-input-group",class:{active:3===t.focus}},[i("icon-svg",{attrs:{"icon-class":3===t.focus?"code":"code-disabled"}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.bindForm.code,expression:"bindForm.code"}],staticClass:"itv-input",attrs:{type:"text",placeholder:"输入验证码"},domProps:{value:t.bindForm.code},on:{focus:function(e){t.focus=3},input:function(e){e.target.composing||t.$set(t.bindForm,"code",e.target.value)}}}),t._v(" "),i("base-button",{attrs:{size:"small",disabled:t.codeStatus.sending||""===t.bindForm.captchaCode},on:{click:t.sendCode}},[t._v(t._s(t.codeStatus.statusText)+"\n      ")])],1),t._v(" "),i("div",{staticClass:"info-tip"},[t._v(t._s(t.bindForm.errorText))])]),t._v(" "),i("base-button",{attrs:{width:"100%"},on:{click:t.submitBind}},[t._v("立即绑定")])],1)},c=[],r={render:n,staticRenderFns:c},d=r,u=a("VU/8"),l=i,m=u(s,d,!1,l,null,null);e.default=m.exports},z0Bw:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"\n.itv-bind {\n  padding: 96px 72px;\n  text-align: center;\n  color: #3C90EF;\n}\n.itv-bind .logo {\n    margin-bottom: 48px;\n}\n.itv-bind .itv-form {\n    padding: 64px 0;\n}\n.itv-bind .info-tip {\n    padding: 16px 0;\n    color: #FE5462;\n    text-align: right;\n}\n",""])}});