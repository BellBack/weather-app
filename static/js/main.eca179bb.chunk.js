(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{21:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(5),r=c.n(n),a=(c(21),c(0)),s=c(2),i=c(1);var o=function(e){var t=e.weather,c=t.current&&t.current.condition.icon,n=t.current&&t.current.condition.text,r=t.current&&t.current.temp_c,a=t.location&&t.location.name,o=Object(s.c)((function(e){return e.weather.weatherItems}));return o.error&&1006===o.error.code?Object(i.jsx)("div",{children:Object(i.jsx)("p",{className:"error",children:"City not found"})}):Object(i.jsxs)("div",{className:"weather_box",children:[Object(i.jsx)("p",{className:"cityName",children:a}),Object(i.jsxs)("p",{className:"temp",children:["Temperature ",r,"\xb0"]}),Object(i.jsxs)("div",{className:"weather_info",children:[Object(i.jsx)("img",{width:50,src:c,alt:""}),Object(i.jsx)("p",{className:"text",children:n})]})]})},j=c(15),h=function(e){return function(t){t({type:"weather/load/start"}),fetch("https://api.weatherapi.com/v1/current.json?key=65d6fa8cb55a47c0aa1133000212904&q=".concat(e||"kharkiv","&aqi=no")).then((function(e){return e.json()})).then((function(e){t({type:"weather/load/success",payload:e})}))}},u=c(16);var l=function(e){var t=Object(s.b)(),c=Object(a.useState)(""),n=Object(j.a)(c,2),r=n[0],o=n[1];Object(u.a)("enter",(function(){l(r),o("")}),{enableOnTags:["INPUT"]});var l=function(){t(h(r)),o("")};return Object(i.jsx)("div",{className:"form",children:Object(i.jsxs)("div",{children:[Object(i.jsx)("input",{type:"text",placeholder:"Enter the city",value:r,onChange:function(e){return function(e){o(e.target.value)}(e)}}),Object(i.jsx)("button",{style:{fontSize:16},onClick:l,children:"Search"})]})})},d=c(11),b=c.n(d);var O=function(e){var t=Object(s.c)((function(e){return e.weather.weatherItems})),c=Object(s.c)((function(e){return e.weather.loading}));return Object(i.jsxs)("div",{className:"weather",children:[c?Object(i.jsx)("div",{className:"loading",children:Object(i.jsx)(b.a,{type:"spin",color:"white",height:50,width:50})}):Object(i.jsx)(o,{weather:t}),Object(i.jsx)(l,{})]})};var p=function(){var e=Object(s.b)();return Object(a.useEffect)((function(){e(h())}),[e]),Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(O,{})})},f=c(7),w=c(14),v=c(4),x={weatherItems:[],loading:!1,city:""},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"weather/load/start":return Object(v.a)(Object(v.a)({},e),{},{loading:!0});case"weather/load/success":return Object(v.a)(Object(v.a)({},e),{},{weatherItems:t.payload,loading:!1});default:return e}},y=c(13),g=Object(w.a)({diff:!0,collapsed:!0}),N=Object(f.b)({weather:m}),k=Object(f.c)(N,Object(f.a)(y.a,g));r.a.render(Object(i.jsx)(s.a,{store:k,children:Object(i.jsx)(p,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.eca179bb.chunk.js.map