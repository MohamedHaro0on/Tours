(this["webpackJsonpour-tours"]=this["webpackJsonpour-tours"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(14),i=n.n(r),s=(n(20),n(3)),o=(n(21),n(15)),l=n.n(o),u=n(5),j=n(0),d=function(e){var t=e.id,n=e.image,a=e.info,r=e.name,i=e.price,o=e.ButtonHandler,l=Object(c.useState)(!1),u=Object(s.a)(l,2),d=u[0],b=u[1],h=function(){b((function(e){return!e}))},O=" ";return O=d?Object(j.jsxs)("p",{className:"Information",children:["".concat(a)," ",Object(j.jsx)("span",{onClick:function(){return h()},children:" Show More"})]}):Object(j.jsxs)("p",{className:"Information",children:["".concat(a.slice(0,150))," ",Object(j.jsx)("span",{onClick:function(){return h()},children:" Show less"})]}),Object(j.jsxs)("article",{className:"Card",children:[Object(j.jsx)("img",{src:n,alt:r,title:r,width:"100%"}),Object(j.jsx)("div",{children:Object(j.jsxs)("h2",{children:[" ",Object(j.jsx)("span",{children:r})," ",Object(j.jsx)("span",{className:"Price",children:"".concat(i," $")})]})}),O,Object(j.jsx)("button",{className:"ButtonDanger",onClick:function(){return o(t)},"aria-label":"Not Intersted",children:" Not Intersted ! "})]})},b=function(e){var t=e.data,n=e.ButtonHandler;return t.map((function(e){return Object(c.createElement)(d,Object(u.a)(Object(u.a)({},e),{},{ButtonHandler:n,key:e.id}))}))},h=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!0),i=Object(s.a)(r,2),o=i[0],u=i[1],d=function(){l.a.get("https://course-api.com/react-tours-project").then((function(e){a(e.data),u(!1)}))};Object(c.useEffect)((function(){d()}),[]);var h=null;return h=o?Object(j.jsx)("div",{className:"MainHeading","aria-label":"Loading ....!!",children:" Loading..... !! "}):0===n.length?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"MainHeading",children:" there is no Tours left ."}),Object(j.jsx)("button",{className:"ButtonDanger",onClick:d,"aria-label":"Get information",children:" Refresh"})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"MainHeading",children:" Our Tours "}),Object(j.jsx)(b,{data:n,ButtonHandler:function(e){var t=n.filter((function(t){return t.id!==e}));a(t)}})]}),Object(j.jsx)("main",{children:h})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),O()}},[[41,1,2]]]);
//# sourceMappingURL=main.4e9d58c3.chunk.js.map