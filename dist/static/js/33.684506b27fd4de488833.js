webpackJsonp([33],{QV3O:function(t,e,n){"use strict";function r(t){n("n0/v")}Object.defineProperty(e,"__esModule",{value:!0});var o=n("vMJZ"),s={name:"DealersReports",created:function(){this.loadReports()},data:function(){return{reports:[]}},methods:{loadReports:function(){var t=this;o.a.getReports({order_by:"-id"}).then(function(e){0===e.data.code&&(t.reports=e.data.data.reports)})},openReport:function(t,e){o.a.updateReportViews(t,{}).then(function(t){0===t.data.code&&(location.href=e)})}}},i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"itv-report"},[0===t.reports.length?r("div",{staticClass:"itv-action-result"},[r("img",{attrs:{src:n("44Bn")}}),t._v(" "),r("h1",[t._v("您还没有报告")])]):t._e(),t._v(" "),t._l(t.reports,function(e){return[r("div",{staticClass:"report-item",class:{"bg-filter":1===e.product,"bg-child":2===e.product,"bg-microbiology":[3,4].includes(e.product)},on:{click:function(n){t.openReport(e.id,e.report_lite_link.split(",")[0])}}},[r("h3",[t._v(t._s(e.product_name)+"报告")]),t._v(" "),r("p",{staticClass:"person"},[r("span",[t._v("被测人："+t._s(e.person_name?e.person_name:"-"))]),t._v(" "),r("span",[t._v(t._s(t._f("formatTime")(e.iso_finish_time)))])])])]})],2)},a=[],c={render:i,staticRenderFns:a},p=c,l=n("VU/8"),u=r,d=l(s,p,!1,u,null,null);e.default=d.exports},"n0/v":function(t,e,n){var r=n("tunX");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("47d54bde",r,!0,{})},tunX:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"",""])}});