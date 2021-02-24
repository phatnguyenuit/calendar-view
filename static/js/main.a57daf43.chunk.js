(this["webpackJsonpcalendar-view"]=this["webpackJsonpcalendar-view"]||[]).push([[0],{24:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(6),o=n.n(c),i=(n(24),n(2)),s=n(3),d=n(5),u=function(e){return e.toLocaleString("en-us",{day:"2-digit"})},l=function(e){return e.toLocaleString("en-us",{weekday:"short"})},j=function(e){var t=new Date;return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()},b=n(10),O=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.map((function(e){return"string"===typeof e?e:Array.isArray(e)?e.flat():"object"===typeof e?Object.entries(e).map((function(e){var t=Object(b.a)(e,2),n=t[0];return t[1]?n:""})):""}));return r.flat().filter(Boolean).join(" ")},p="-workout-exercises-",x="-workout-container-",f=function(e){var t=e.reps,n=e.weight;return"".concat(n," lb x ").concat(t)},m=n(7),w=n.n(m),v=n(1),y=function(e){var t,n=e.name,r=e.sets;return Object(v.jsxs)("div",{className:w.a.container,children:[Object(v.jsx)("p",{className:w.a.name,children:n}),Object(v.jsxs)("div",{className:w.a.description,children:[Object(v.jsxs)("span",{children:[r.length,"x"]}),Object(v.jsx)("div",{className:w.a.grow}),Object(v.jsx)("div",{className:w.a.setDescription,children:Object(v.jsx)("span",{children:(t={name:n,sets:r},t.sets.map(f).join(", "))})})]})]})},h=Object(r.memo)(y);h.displayName="Exercise";var g=h,_=function(){return Object(v.jsxs)("svg",{width:"11",height:"3",viewBox:"0 0 11 3",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(v.jsx)("circle",{cx:"1.5",cy:"1.5",r:"1.5",fill:"#C4C4C4"}),Object(v.jsx)("circle",{cx:"5.5",cy:"1.5",r:"1.5",fill:"#C4C4C4"}),Object(v.jsx)("circle",{cx:"9.5",cy:"1.5",r:"1.5",fill:"#C4C4C4"})]})},k=Object(r.memo)(_);k.displayName="MoreIcon";var N=k,I=n(8),D=n.n(I),C=function(e){return e.replace(/\s/g,"-")},A=function(e){var t=e.name,n=e.exercises,r=e.index,a=e.weekday;return Object(v.jsxs)("div",{className:D.a.container,children:[Object(v.jsxs)("div",{className:D.a.header,children:[Object(v.jsx)("div",{className:D.a.name,children:Object(v.jsx)("span",{children:t})}),Object(v.jsx)("button",{type:"button",className:D.a.moreButton,children:Object(v.jsx)(N,{})})]}),Object(v.jsx)(d.c,{droppableId:"".concat(a,"-").concat(r,"-").concat(p).concat(C(t)),children:function(e){return Object(v.jsxs)("div",Object(i.a)(Object(i.a)({},e.droppableProps),{},{ref:e.innerRef,className:D.a.exercises,children:[n.map((function(e,t){return Object(v.jsx)(d.b,{draggableId:"".concat(a,"-").concat(r,"-").concat(C(e.name),"-").concat(t),index:t,children:function(t){return Object(v.jsx)("div",Object(i.a)(Object(i.a)(Object(i.a)({ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{children:Object(v.jsx)(g,Object(i.a)({},e))}))}},"".concat(a,"-").concat(r,"-").concat(C(e.name),"-").concat(t))})),e.placeholder]}))}})]})},B=Object(r.memo)(A);B.displayName="Workout";var F=B,M=n(18),P=n(19),S=function(e,t){return Math.floor(function(e,t){return Math.random()*(t-e)+e}(e,t))},E=["Chest","Leg","Arm","Shoulder","Back","Abs"].map((function(e){return{name:"".concat(e," day"),exercises:new Array(S(1,4)).fill(void 0).map((function(t,n){return{name:"".concat(e," Ex").concat(n+1),sets:new Array(S(2,4)).fill(void 0).map((function(e,t){return{weight:S(10,50),reps:S(6,12)}}))}}))}})),L=function(e,t,n){var r=e.length;if([t,n].some((function(e){return e<0||e>=r})))throw new Error("Wrong index");return e.map((function(e,r,a){return r===t?a[n]:r===n?a[t]:e}))},R=function(e){var t=e.split(p),n=Object(b.a)(t,2),r=n[0],a=n[1],c=Object(M.a)(/([0-9]+)\x2D([0-9]+)/,{weekday:1,workoutIndex:2}).exec(r),o={workoutName:a,weekday:-1,workoutIndex:-1};return(null===c||void 0===c?void 0:c.groups)&&(o.weekday=Number(c.groups.weekday),o.workoutIndex=Number(c.groups.workoutIndex)),o},Y=function(e){var t=e.replace(x,"");return{weekday:Number(t)}},T=function(e,t){var n=Array.from(e);return n.splice(t,1),n},W=function(e,t,n){var r=Array.from(e);return r.splice(t,0,n),r},G=function(){var e=Object(r.useState)(function(e){return e.reduce((function(e,t,n){var r;return Object(i.a)(Object(i.a)({},e),{},Object(s.a)({},n,[].concat(Object(P.a)(null!==(r=e[n])&&void 0!==r?r:[]),[t])))}),{})}(E)),t=Object(b.a)(e,2),n=t[0],a=t[1];return{workouts:n,handleDragEnd:Object(r.useCallback)((function(e){var t=e.source,n=e.destination;if(n){if([t.droppableId.includes(p),n.droppableId.includes(p)].every(Boolean)){var r=R(t.droppableId),c=r.workoutName,o=r.workoutIndex,d=r.weekday;if([t.droppableId===n.droppableId,t.index!==n.index].every(Boolean))return void a((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(s.a)({},d,e[d].map((function(e,r){return r===o&&C(e.name)===c?Object(i.a)(Object(i.a)({},e),{},{exercises:L(e.exercises,t.index,n.index)}):e}))))}));var u=R(n.droppableId),l=u.workoutName,j=u.workoutIndex,b=u.weekday;a((function(e){var r=e[d][o].exercises[t.index];return Object(i.a)(Object(i.a)({},e),{},Object(s.a)({},b,e[b].map((function(e,t){return t===j&&C(e.name)===l?Object(i.a)(Object(i.a)({},e),{},{exercises:W(e.exercises,n.index,r)}):e}))))})),a((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(s.a)({},d,e[d].map((function(e,n){return n===o&&C(e.name)===c?Object(i.a)(Object(i.a)({},e),{},{exercises:T(e.exercises,t.index)}):e}))))}))}if([t.droppableId.includes(x),n.droppableId.includes(x)].every(Boolean)){var O=Y(t.droppableId).weekday,f=Y(n.droppableId).weekday;O===f?a((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(s.a)({},O,L(e[O],t.index,n.index)))})):(a((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(s.a)({},f,W(e[f],n.index,e[O][t.index])))})),a((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(s.a)({},O,T(e[O],t.index)))})))}}}),[])}},H=n(4),J=n.n(H),V=function(){var e=new Date,t=e.getDate()-e.getDay()+1;return new Array(7).fill(void 0).map((function(e,n){return new Date((new Date).setDate(t+n))}))}(),q=function(){var e=G(),t=e.workouts,n=e.handleDragEnd;return Object(v.jsx)(d.a,{onDragEnd:n,children:Object(v.jsx)("div",{className:J.a["week-container"],"data-testid":"week-container",children:V.map((function(e){var n,r=e.getDay(),a=null!==(n=t[r])&&void 0!==n?n:[];return Object(v.jsxs)("div",{className:J.a["date-container"],children:[Object(v.jsx)("div",{className:J.a["week-day"],children:Object(v.jsx)("span",{children:l(e)})}),Object(v.jsxs)("div",{className:J.a["workout-container"],children:[Object(v.jsx)("div",{className:O(J.a["workout-date"],Object(s.a)({},J.a.today,j(e))),children:Object(v.jsx)("span",{children:u(e)})}),Object(v.jsx)(d.c,{droppableId:"".concat(x).concat(r),children:function(e){return Object(v.jsxs)("div",Object(i.a)(Object(i.a)({},e.droppableProps),{},{ref:e.innerRef,className:J.a.workouts,children:[a.map((function(e,t){return Object(v.jsx)(d.b,{draggableId:"".concat(e.name,"-").concat(t),index:t,children:function(n){return Object(v.jsx)("div",Object(i.a)(Object(i.a)(Object(i.a)({ref:n.innerRef},n.draggableProps),n.dragHandleProps),{},{children:Object(v.jsx)(F,Object(i.a)({index:t,weekday:r},e))}))}},"".concat(e.name,"+").concat(t))})),e.placeholder]}))}})]})]},e.toString())}))})})},K=Object(r.memo)(q);K.displayName="WeekContainer";var Q=K;var U=function(){return Object(v.jsx)(Q,{})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};o.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(U,{})}),document.getElementById("root")),z()},4:function(e,t,n){e.exports={"week-container":"styles_week-container__1xT6M","date-container":"styles_date-container__1TtLn","week-day":"styles_week-day__tmxY_","workout-container":"styles_workout-container__jpifA",workouts:"styles_workouts__3gHuC","workout-date":"styles_workout-date__ju2FI",today:"styles_today__3esYg"}},7:function(e,t,n){e.exports={container:"styles_container__3GsFh",name:"styles_name__38_G4",description:"styles_description__8SDM3",grow:"styles_grow__2WnA1",setDescription:"styles_setDescription__1-0Qd"}},8:function(e,t,n){e.exports={container:"styles_container__GtiYD",header:"styles_header__2V5RO",name:"styles_name__D9pU6",moreButton:"styles_moreButton__3-ibq",exercises:"styles_exercises__33KdV"}}},[[32,1,2]]]);
//# sourceMappingURL=main.a57daf43.chunk.js.map