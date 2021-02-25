(this["webpackJsonpcalendar-view"]=this["webpackJsonpcalendar-view"]||[]).push([[0],{24:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(7),o=n.n(a),i=(n(24),n(2)),s=n(3),d=n(5),u=function(e){return e.toLocaleString("en-us",{day:"2-digit"})},l=function(e){return e.toLocaleString("en-us",{weekday:"short"})},j=function(e){var t=new Date;return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()},b=n(10),x=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.map((function(e){return"string"===typeof e?e:Array.isArray(e)?e.flat():"object"===typeof e?Object.entries(e).map((function(e){var t=Object(b.a)(e,2),n=t[0];return t[1]?n:""})):""}));return r.flat().filter(Boolean).join(" ")},O="-workout-exercises-",f="-workout-container-",p=function(e){return e.replace(/\s/g,"-")},m=function(e){var t=e.reps,n=e.weight;return"".concat(n," lb x ").concat(t)},w=n(8),v=n.n(w),h=n(1),y=function(e){var t,n=e.name,r=e.sets;return Object(h.jsxs)("div",{className:v.a.container,children:[Object(h.jsx)("p",{className:v.a.name,children:n}),Object(h.jsxs)("div",{className:v.a.description,children:[Object(h.jsxs)("span",{children:[r.length,"x"]}),Object(h.jsx)("div",{className:v.a.grow}),Object(h.jsx)("div",{className:v.a.setDescription,children:Object(h.jsx)("span",{children:(t={name:n,sets:r},t.sets.map(m).join(", "))})})]})]})},g=Object(r.memo)(y);g.displayName="Exercise";var _=g,k=function(){return Object(h.jsxs)("svg",{width:"11",height:"3",viewBox:"0 0 11 3",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("circle",{cx:"1.5",cy:"1.5",r:"1.5",fill:"#C4C4C4"}),Object(h.jsx)("circle",{cx:"5.5",cy:"1.5",r:"1.5",fill:"#C4C4C4"}),Object(h.jsx)("circle",{cx:"9.5",cy:"1.5",r:"1.5",fill:"#C4C4C4"})]})},N=Object(r.memo)(k);N.displayName="MoreIcon";var I=N,C=function(){return Object(h.jsxs)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("circle",{cx:"6",cy:"6",r:"6",fill:"#A0A8B1"}),Object(h.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 5V3H5V5H3V7H5V9H7V7H9V5H7Z",fill:"white"})]})},D=Object(r.memo)(C);D.displayName="PlusIcon";var E=D,A=n(6),B=n.n(A),M=function(e){var t=e.exercises,n=e.weekday,c=e.name,a=e.index,o=e.onCreateExercise,s=Object(r.useMemo)((function(){return"".concat(n,"-").concat(a,"-").concat(O).concat(p(c))}),[n,a,c]);return Object(h.jsxs)("div",{className:B.a.container,children:[Object(h.jsxs)("div",{className:B.a.header,children:[Object(h.jsx)("div",{className:B.a.name,children:Object(h.jsx)("span",{children:c})}),Object(h.jsx)("button",{type:"button",className:B.a.moreButton,children:Object(h.jsx)(I,{})})]}),Object(h.jsx)(d.c,{droppableId:s,children:function(e){return Object(h.jsxs)("div",Object(i.a)(Object(i.a)({},e.droppableProps),{},{ref:e.innerRef,className:B.a.exercises,children:[t.map((function(e,t){var r="".concat(n,"-").concat(a,"-").concat(p(e.name),"-").concat(t);return Object(h.jsx)(d.b,{draggableId:r,index:t,children:function(t){return Object(h.jsx)("div",Object(i.a)(Object(i.a)(Object(i.a)({ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{children:Object(h.jsx)(_,Object(i.a)({},e))}))}},r)})),e.placeholder]}))}}),Object(h.jsx)("div",{className:B.a.createExercise,children:Object(h.jsx)("button",{type:"button",onClick:o,children:Object(h.jsx)(E,{})})})]})},H=Object(r.memo)(M);H.displayName="Workout";var P=H,S=n(19),V=n(16),F=function(e,t){return Math.floor(function(e,t){return Math.random()*(t-e)+e}(e,t))},R=["Chest","Leg","Arm","Shoulder","Back","Abs"].map((function(e){return{name:"".concat(e," day"),exercises:new Array(F(1,4)).fill(void 0).map((function(t,n){return{name:"".concat(e," Ex").concat(n+1),sets:new Array(F(2,4)).fill(void 0).map((function(e,t){return{weight:F(10,50),reps:F(6,12)}}))}}))}})),L=function(e,t,n){var r=e.length;if([t,n].some((function(e){return e<0||e>=r})))throw new Error("Wrong index");return e.map((function(e,r,c){return r===t?c[n]:r===n?c[t]:e}))},Y=function(e){var t=e.split(O),n=Object(b.a)(t,2),r=n[0],c=n[1],a=Object(S.a)(/([0-9]+)\x2D([0-9]+)/,{weekday:1,workoutIndex:2}).exec(r),o={workoutName:c,weekday:-1,workoutIndex:-1};return(null===a||void 0===a?void 0:a.groups)&&(o.weekday=Number(a.groups.weekday),o.workoutIndex=Number(a.groups.workoutIndex)),o},T=function(e){var t=e.replace(f,"");return{weekday:Number(t)}},W=function(e,t){var n=Array.from(e);return n.splice(t,1),n},G=function(e,t,n){var r=Array.from(e);return r.splice(t,0,n),r},J=function(){var e=0;return function(){var t=String.fromCharCode(65+e),n={name:"Exercise ".concat(t),sets:[{reps:e+1,weight:10*(e+1)}]};return e+=1,n}}(),Q=function(){var e=Object(r.useState)(function(e){return e.reduce((function(e,t,n){var r;return Object(i.a)(Object(i.a)({},e),{},Object(s.a)({},n,[].concat(Object(V.a)(null!==(r=e[n])&&void 0!==r?r:[]),[t])))}),{})}(R)),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(r.useCallback)((function(e,t){return function(){var n=J();c((function(r){return Object(i.a)(Object(i.a)({},r),{},Object(s.a)({},e,r[e].map((function(e,r){return r===t?Object(i.a)(Object(i.a)({},e),{},{exercises:[].concat(Object(V.a)(e.exercises),[n])}):e}))))}))}}),[c]);return{workouts:n,handleDragEnd:Object(r.useCallback)((function(e){var t=e.source,n=e.destination;if(n){if([t.droppableId.includes(O),n.droppableId.includes(O)].every(Boolean)){var r=Y(t.droppableId),a=r.workoutName,o=r.workoutIndex,d=r.weekday;if([t.droppableId===n.droppableId,t.index!==n.index].every(Boolean))return void c((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(s.a)({},d,e[d].map((function(e,r){return r===o&&p(e.name)===a?Object(i.a)(Object(i.a)({},e),{},{exercises:L(e.exercises,t.index,n.index)}):e}))))}));var u=Y(n.droppableId),l=u.workoutName,j=u.workoutIndex,b=u.weekday;c((function(e){var r=e[d][o].exercises[t.index];return Object(i.a)(Object(i.a)({},e),{},Object(s.a)({},b,e[b].map((function(e,t){return t===j&&p(e.name)===l?Object(i.a)(Object(i.a)({},e),{},{exercises:G(e.exercises,n.index,r)}):e}))))})),c((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(s.a)({},d,e[d].map((function(e,n){return n===o&&p(e.name)===a?Object(i.a)(Object(i.a)({},e),{},{exercises:W(e.exercises,t.index)}):e}))))}))}if([t.droppableId.includes(f),n.droppableId.includes(f)].every(Boolean)){var x=T(t.droppableId).weekday,m=T(n.droppableId).weekday;x===m?c((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(s.a)({},x,L(e[x],t.index,n.index)))})):(c((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(s.a)({},m,G(e[m],n.index,e[x][t.index])))})),c((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(s.a)({},x,W(e[x],t.index)))})))}}}),[]),handleCreateExercise:a}},q=n(4),K=n.n(q),U=function(){var e=new Date,t=e.getDate()-e.getDay()+1;return new Array(7).fill(void 0).map((function(e,n){return new Date((new Date).setDate(t+n))}))}(),Z=function(){var e=Q(),t=e.workouts,n=e.handleDragEnd,r=e.handleCreateExercise;return Object(h.jsx)(d.a,{onDragEnd:n,children:Object(h.jsx)("div",{className:K.a["week-container"],"data-testid":"week-container",children:U.map((function(e){var n,c=e.getDay(),a=null!==(n=t[c])&&void 0!==n?n:[],o="".concat(f).concat(c);return Object(h.jsxs)("div",{className:K.a["date-container"],children:[Object(h.jsx)("div",{className:K.a["week-day"],children:Object(h.jsx)("span",{children:l(e)})}),Object(h.jsxs)("div",{className:K.a["workout-container"],children:[Object(h.jsx)("div",{className:x(K.a["workout-date"],Object(s.a)({},K.a.today,j(e))),children:Object(h.jsx)("span",{children:u(e)})}),Object(h.jsx)(d.c,{droppableId:o,children:function(e){return Object(h.jsxs)("div",Object(i.a)(Object(i.a)({},e.droppableProps),{},{ref:e.innerRef,className:K.a.workouts,children:[a.map((function(e,t){var n="".concat(e.name,"-").concat(t);return Object(h.jsx)(d.b,{draggableId:n,index:t,children:function(n){return Object(h.jsx)("div",Object(i.a)(Object(i.a)(Object(i.a)({ref:n.innerRef},n.draggableProps),n.dragHandleProps),{},{children:Object(h.jsx)(P,Object(i.a)(Object(i.a)({},e),{},{index:t,weekday:c,onCreateExercise:r(c,t)}))}))}},n)})),e.placeholder]}))}})]})]},e.toString())}))})})},z=Object(r.memo)(Z);z.displayName="WeekContainer";var X=z;var $=function(){return Object(h.jsx)(X,{})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)($,{})}),document.getElementById("root")),ee()},4:function(e,t,n){e.exports={"week-container":"styles_week-container__1xT6M","date-container":"styles_date-container__1TtLn","week-day":"styles_week-day__tmxY_","workout-container":"styles_workout-container__jpifA",workouts:"styles_workouts__3gHuC","workout-date":"styles_workout-date__ju2FI",today:"styles_today__3esYg"}},6:function(e,t,n){e.exports={container:"styles_container__GtiYD",header:"styles_header__2V5RO",name:"styles_name__D9pU6",moreButton:"styles_moreButton__3-ibq",exercises:"styles_exercises__33KdV",createExercise:"styles_createExercise__2lQVt"}},8:function(e,t,n){e.exports={container:"styles_container__3GsFh",name:"styles_name__38_G4",description:"styles_description__8SDM3",grow:"styles_grow__2WnA1",setDescription:"styles_setDescription__1-0Qd"}}},[[32,1,2]]]);
//# sourceMappingURL=main.38d7ddeb.chunk.js.map