(this["webpackJsonpreact-typescript"]=this["webpackJsonpreact-typescript"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(18),s=n.n(r),o=n(7),i=(n(25),n(12)),l=n(13),a=n(2),j=(n(26),n(27),n(1));var d=function(){return Object(j.jsxs)("div",{className:"header flex-between",children:[Object(j.jsx)("h1",{children:"TodoList"}),Object(j.jsxs)("ul",{className:"flex nav gap",children:[Object(j.jsx)(o.b,{to:"/undo",children:"\u5f85\u8fa6\u9805\u76ee"}),Object(j.jsx)(o.b,{to:"/done",children:"\u5b8c\u6210\u9805\u76ee"})]})]})};n(34),n(35);var u=function(e){var t={backgroundColor:e.type?"detele"===e.type?"red":void 0:"rgb(113, 95, 78)"};return Object(j.jsx)("div",{className:"button",children:Object(j.jsx)("button",{style:t,children:e.content})})};var b=function(e){var t=Object(a.d)().pathname,n=e.show;console.log(n);var r,s=Object(c.useState)(!0),o=Object(l.a)(s,2),d=o[0],b=o[1],O=Object(i.a)(n),h={display:"/done"===t?"none":"flex"},x="/undo"===t?"\u5f85\u8fa6":"\u5b8c\u6210";return Object(j.jsxs)("div",{className:"content-edit wrap",children:[Object(j.jsxs)("div",{className:"title",children:[Object(j.jsx)("h3",{children:x+"\u9805\u76ee"}),"(".concat(O.length>0?"\u4f60\u6709".concat(O.length,"\u500b").concat(x,"\u9805\u76ee"):"\u76ee\u524d\u7121".concat(x,"\u9805\u76ee"),")")]}),Object(j.jsx)("div",{className:"item",children:(r=O,r.map((function(e){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"flex item-wrap",children:[console.log(d,"render"),Object(j.jsx)("p",{children:e.content}),Object(j.jsxs)("div",{className:"flex center gap",children:[Object(j.jsx)("div",{onClick:function(){return function(e){var t=n.map((function(t){return t.key===e?t.delete=!0:t.delete=!1}));b(!d),O=t,console.log(d)}(e.key)},children:Object(j.jsx)(u,{content:"\u522a\u9664",type:"detele"})}),Object(j.jsx)("div",{style:h,onClick:function(){return function(e){var t=n.map((function(t){return t.key===e?t.done=!0:t.done=!1}));b(!d),console.log(d),O=t}(e.key)},children:Object(j.jsx)(u,{content:"\u5b8c\u6210"})})]})]}),Object(j.jsx)("hr",{})]},e.key)})))})]})},O=[];var h=function(){var e={};function t(t){var n=Object(c.useRef)(null);return Object(j.jsxs)("div",{className:"input flex",children:[Object(j.jsx)("input",{type:"text",ref:n}),Object(j.jsx)("div",{onClick:function(){return function(){var t=n.current.value;""!==n.current.value&&(O.push({key:Date.now(),content:t,done:!1}),e={key:Date.now(),content:t,done:!1,delete:!1},console.log(O),n.current.value="",o(O))}()},children:Object(j.jsx)(u,{content:"\u65b0\u589e\u4e8b\u9805"})})]})}var n=Object(c.useState)([]),r=Object(l.a)(n,2),s=r[0],o=r[1],h="/undo"===Object(a.d)().pathname?s.filter((function(e){return!e.done&&!e.delete})):function(e){return e.filter((function(e){return e.done&&!e.delete}))}(s);return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(d,{}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(t,{}),Object(j.jsx)("div",{className:"list-wrapper",children:Object(j.jsx)(b,{show:Object(i.a)(h),val:e})})]})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))};s.a.render(Object(j.jsx)(o.a,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),x()}},[[36,1,2]]]);
//# sourceMappingURL=main.59317de6.chunk.js.map