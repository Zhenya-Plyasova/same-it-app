"use strict";(self.webpackChunksame_it_app=self.webpackChunksame_it_app||[]).push([[204],{3188:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(9439),r=n(2791),u=n(1087),i=n(4554),s=n(9120),o=n(142),c=n(184);function l(e){var t,n=(0,r.useState)(""),l=(0,a.Z)(n,2),d=l[0],p=l[1],m=(0,u.lr)(),f=(0,a.Z)(m,2),h=f[0],v=f[1],g=null!==(t=h.get("query"))&&void 0!==t?t:"",x=/^\d{14}$/,b=/^[\u0410-\u042f\u0430-\u044f\u0406\u0456\u0407\u0457\u0404\u0454\u0490\u0491\s]*$/,Z=(0,r.useState)(!0),j=(0,a.Z)(Z,2),k=j[0],y=j[1];console.log(g);return(0,c.jsxs)(i.Z,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"}},noValidate:!0,onSubmit:function(t){t.preventDefault();var n=d.trim();if(""===n)return v({});"numeric"===e.pattern&&x.test(n)||"ukrainian"===e.pattern&&b.test(n)?(v({query:n}),y(!0)):y(!1),console.log(g)},children:[(0,c.jsx)(s.Z,{id:"outlined-basic",label:e.label,variant:"outlined",size:"small",inputMode:"numeric"===e.pattern?"numeric":"text",required:!0,onChange:function(t){var n=t.target,a=n.value;("numeric"!==e.pattern||/^[0-9]*$/.test(a))&&("ukrainian"!==e.pattern||b.test(a))&&p(n.value)},value:d}),(0,c.jsx)(o.Z,{type:"submit",variant:"contained",children:e.buttonText}),!k&&(0,c.jsx)("p",{style:{color:"red"},children:"\u041d\u0435\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f. \u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u0432\u0432\u0435\u0434\u0435\u043d\u0456 \u0434\u0430\u043d\u0456."})]})}},6204:function(e,t,n){n.r(t);var a=n(5861),r=n(9439),u=n(4687),i=n.n(u),s=n(2791),o=n(1087),c=n(3188),l=n(6012),d=n(184);t.default=function(){var e,t=(0,s.useState)(null),n=(0,r.Z)(t,2),u=n[0],p=n[1],m=(0,o.lr)(),f=(0,r.Z)(m,1)[0],h=(0,s.useState)(""),v=(0,r.Z)(h,2),g=v[0],x=v[1],b=(0,s.useState)(!1),Z=(0,r.Z)(b,2),j=Z[0],k=Z[1],y=null!==(e=f.get("query"))&&void 0!==e?e:"";return(0,s.useEffect)((function(){var e=function(){var e=(0,a.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,0===t.length){e.next=8;break}return k(!0),e.next=5,(0,l.a)(t);case 5:n=e.sent,console.log(n.data.data),p(n.data.data);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),x(e.t0.message);case 13:return e.prev=13,k(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(t){return e.apply(this,arguments)}}();e(y)}),[y]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{children:(0,d.jsx)(c.Z,{label:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u043d\u0430\u0441\u0435\u043b. \u043f\u0443\u043d\u043a\u0442",buttonText:"\u0437\u043d\u0430\u0439\u0442\u0438",pattern:"ukrainian"})}),g&&(0,d.jsx)("p",{children:"Something went wrong..."}),j&&(0,d.jsx)("p",{children:"Loading..."}),(0,d.jsx)("ul",{children:u&&u.map((function(e){return(0,d.jsx)("li",{children:e.ShortAddress},e.Number)}))})]})}},6012:function(e,t,n){n.d(t,{a:function(){return i},w:function(){return u}});var a=n(1243);a.Z.defaults.baseURL="https://api.novaposhta.ua/v2.0/json/";var r="bc0aa8469883b07a40cd36b8052a0ae2";function u(e){return a.Z.post("/",{apiKey:r,modelName:"TrackingDocument",calledMethod:"getStatusDocuments",methodProperties:{Documents:[{DocumentNumber:e}]}})}function i(e){return a.Z.post("/",{apiKey:r,modelName:"Address",calledMethod:"getWarehouses",methodProperties:{CityName:e,Page:"1",Limit:"50",Language:"UA"}})}}}]);
//# sourceMappingURL=204.908a5f1f.chunk.js.map