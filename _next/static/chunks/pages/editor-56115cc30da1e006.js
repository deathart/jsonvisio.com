(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[154],{1862:function(t,e,n){"use strict";n.d(e,{z:function(){return f}});var r,i=n(9499),o=n(4730),c=(n(7294),n(7379)),a=n(5893),s=["children","status"];function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}!function(t){t.PRIMARY="SILVER_DARK",t.SECONDARY="BLURPLE",t.DANGER="DANGER",t.SUCCESS="SEAGREEN",t.WARNING="ORANGE"}(r||(r={}));var u=c.ZP.button.withConfig({displayName:"Button__StyledButton",componentId:"sc-6goz99-0"})(["display:block;background:",";color:",";cursor:pointer;padding:8px 16px;@media only screen and (max-width:768px){font-size:18px;}"],(function(t){return function(t,e){return e[r[t]]}(t.status,t.theme)}),(function(t){return t.theme.FULL_WHITE})),p=c.ZP.div.withConfig({displayName:"Button__StyledButtonContent",componentId:"sc-6goz99-1"})(["display:flex;justify-content:center;align-items:center;gap:8px;"]),f=function(t){var e=t.children,n=t.status,r=(0,o.Z)(t,s);return(0,a.jsx)(u,d(d({type:"button",status:null!==n&&void 0!==n?n:"PRIMARY"},r),{},{children:(0,a.jsx)(p,{children:e})}))}},9104:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return $}});var r=n(1163),i=n(7294),o=n(1862),c=n(9499),a=n(6835),s=n(1664),l=n(7379),d=n(8193),u=n(9583),p=n(5434),f=n(4059),h=n(8336),y=n(4597),m=n(5893),x=(0,l.ZP)(h.Z).withConfig({displayName:"JsonEditor__StyledJSONInput",componentId:"sc-1sxvk25-0"})(["margin-top:10px;padding:5px;"]),g=[{Author:"J. K. Rowling.",Genre:"Fantasy",Characters:["Hermione Granger","Harry Potter","Lord Voldemort","MORE"],Books:[{title:"Philosopher's Stone",date:"1997"},{title:"Chamber of Secrets",date:"1998"},{title:"Prisoner of Azkaban",date:"1999"},{title:"Goblet of Fire",date:"1999"},{title:"Order of the Phoenix",date:"2003"},{title:"Half-Blood Prince",date:"2005"},{title:"Deathly Hallows",date:"2007"}]}],j=function(){var t=(0,f._)("json",JSON.stringify(g)),e=(0,a.Z)(t,2),n=e[0],r=e[1];i.useEffect((function(){var t=document.querySelector('[name="outer-box"] > div');t&&(t.style.transform="translate(-75%, 25%)")}),[]);return(0,m.jsx)(x,{placeholder:JSON.parse(n),onChange:function(t){try{JSON.parse(t.json),r(t.json)}catch(e){console.error("Invalid JSON!",e.stack)}},locale:y.Z,height:"100%"})},b=n(681),v=n.n(b),_=n(9362),w=n(4730),S=n(7812),O=["children"],L=function(t){try{t=JSON.parse(t),Array.isArray(t)||(t=[t]);var e=function t(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(n=0,function(){return String(++n)});return e?[e].flat().map((function(e){return{id:r(),data:{label:Object.fromEntries(Object.entries(e).filter((function(t){var e=(0,a.Z)(t,2),n=(e[0],e[1]);return!Array.isArray(n)&&!(n instanceof Object)})))},position:{x:0,y:0},type:"special",children:Object.entries(e).filter((function(t){var e=(0,a.Z)(t,2),n=(e[0],e[1]);return Array.isArray(n)||"object"===typeof n})).flatMap((function(e){var n=(0,a.Z)(e,2),i=n[0],o=n[1];return[{id:r(),data:{label:i},position:{x:0,y:0},children:t(o,r),type:"special"}]}))}})):[]}(t);return[].concat((0,S.Z)(function t(e){return e.flatMap((function(e){var n=e.children;return[(0,w.Z)(e,O)].concat((0,S.Z)(t(n)))}))}(e)),(0,S.Z)(function t(e){return e.flatMap((function(e){var n=e.id,r=e.children,i=void 0===r?[]:r;return[].concat((0,S.Z)(i.map((function(t){var e=t.id;return{id:"e".concat(e,"-").concat(n),source:e,target:n}}))),(0,S.Z)(t(i)))}))}(e)))}catch(n){return console.error("An error occured while parsin JSON data!",n.stack),Array}},E=new(v().graphlib.Graph);E.setDefaultEdgeLabel((function(){return{}}));var N=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r="LR"===t;E.setGraph({rankdir:t}),e.forEach((function(t){(0,_.UG)(t)?E.setNode(t.id,{width:n?t.__rf.width:200,height:n?t.__rf.height:100}):E.setEdge(t.source,t.target)})),v().layout(E);var i=e.map((function(t){if((0,_.UG)(t)){var e=E.node(t.id);t.targetPosition=r?_.Ly.Left:_.Ly.Top,t.sourcePosition=r?_.Ly.Right:_.Ly.Bottom,t.position={x:e.x+Math.random()/1e3,y:e.y}}return t}));return i};function R(t){switch(t){case"TB":return"BT";case"BT":return"RL";case"RL":return"LR";default:return"TB"}}function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(Object(n),!0).forEach((function(e){(0,c.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var I=l.ZP.div.withConfig({displayName:"Sidebar__StyledSidebar",componentId:"sc-77ih9s-0"})(["display:flex;justify-content:space-between;flex-direction:column;align-items:center;width:60px;background:#2f3136;padding:8px;border-right:1px solid ",";"],(function(t){return t.theme.SILVER_DARK})),Z=l.ZP.div.withConfig({displayName:"Sidebar__StyledElement",componentId:"sc-77ih9s-1"})(["text-align:center;font-size:32px;font-weight:700;width:100%;color:",";cursor:pointer;a{text-align:center;width:100%;}svg{vertical-align:middle;}"],(function(t){return t.theme.SILVER})),A=l.ZP.span.withConfig({displayName:"Sidebar__StyledText",componentId:"sc-77ih9s-2"})(["color:",";"],(function(t){var e=t.theme;return t.secondary?e.FULL_WHITE:e.ORANGE})),k=l.ZP.nav.withConfig({displayName:"Sidebar__StyledTopWrapper",componentId:"sc-77ih9s-3"})(["display:flex;justify-content:space-between;flex-direction:column;align-items:center;width:100%;& > div,a{border-bottom:1px solid ",";}"],(function(t){return t.theme.SILVER_DARK})),H=l.ZP.nav.withConfig({displayName:"Sidebar__StyledBottomWrapper",componentId:"sc-77ih9s-4"})(["display:flex;justify-content:space-between;flex-direction:column;align-items:center;width:100%;& > div,a{border-top:1px solid ",";}"],(function(t){return t.theme.SILVER_DARK})),B=l.ZP.div.withConfig({displayName:"Sidebar__StyledLogo",componentId:"sc-77ih9s-5"})(["color:",";"],(function(t){return t.theme.FULL_WHITE})),T=l.ZP.label.withConfig({displayName:"Sidebar__StyledImportFile",componentId:"sc-77ih9s-6"})(['cursor:pointer;input[type="file"]{display:none;}']),D=function(){var t=i.useState(null),e=(0,a.Z)(t,2),n=e[0],r=e[1],o=(0,f._)("json",JSON.stringify(g)),c=(0,a.Z)(o,2),l=(c[0],c[1]),h=(0,f._)("config",{layout:"RL",minimap:!0,controls:!0}),y=(0,a.Z)(h,2),x=(y[0],y[1]);return i.useEffect((function(){if(n){var t=new FileReader;t.readAsText(n,"UTF-8"),t.onload=function(t){var e;l(null===(e=t.target)||void 0===e?void 0:e.result)}}}),[n]),(0,m.jsxs)(I,{children:[(0,m.jsxs)(k,{children:[(0,m.jsx)(Z,{children:(0,m.jsx)(s.default,{href:"/",children:(0,m.jsx)("a",{children:(0,m.jsxs)(B,{children:[(0,m.jsx)(A,{children:"J"}),(0,m.jsx)(A,{secondary:!0,children:"V"})]})})})}),(0,m.jsx)(Z,{title:"Home",children:(0,m.jsx)(s.default,{href:"/",children:(0,m.jsx)("a",{children:(0,m.jsx)(d.V9Z,{})})})}),(0,m.jsx)(Z,{as:"a",onClick:function(){return l("[]")},title:"Clear JSON",children:(0,m.jsx)(d.XzY,{})}),(0,m.jsx)(Z,{as:"a",onClick:function(){return x((function(t){return C(C({},t),{},{layout:R(t.layout)})}))},title:"Change Layout",children:(0,m.jsx)(p.u9z,{})}),(0,m.jsx)(Z,{title:"Toggle Minimap",as:"a",onClick:function(){return x((function(t){return C(C({},t),{},{minimap:!t.minimap})}))},children:(0,m.jsx)(u.Kth,{})}),(0,m.jsx)(Z,{title:"Toggle Controls",as:"a",onClick:function(){return x((function(t){return C(C({},t),{},{controls:!t.controls})}))},children:(0,m.jsx)(d.yLO,{})}),(0,m.jsx)(Z,{title:"Import JSON File",children:(0,m.jsx)("a",{children:(0,m.jsxs)(T,{children:[(0,m.jsx)("input",{onChange:function(t){var e;return r(null===(e=t.target.files)||void 0===e?void 0:e.item(0))},type:"file",accept:"application/JSON"},n),(0,m.jsx)(u.Xur,{})]})})})]}),(0,m.jsxs)(H,{children:[(0,m.jsx)(Z,{children:(0,m.jsx)(s.default,{href:"https://twitter.com/aykutsarach",children:(0,m.jsx)("a",{rel:"me",target:"_blank",children:(0,m.jsx)(d.h3E,{})})})}),(0,m.jsx)(Z,{children:(0,m.jsx)(s.default,{href:"https://github.com/AykutSarac/jsonvisio.com",children:(0,m.jsx)("a",{rel:"me",target:"_blank",children:(0,m.jsx)(d.RrF,{})})})})]})]})},G=l.ZP.div.withConfig({displayName:"Node__StyledWrapper",componentId:"sc-3dlpyb-0"})(["background:",";border:1px solid ",";border-radius:5px;padding:16px;color:",";width:",";height:",";min-width:",";text-align:",";border-radius:",";"],(function(t){return t.theme.BLACK_PRIMARY}),(function(t){return t.theme.BLACK}),(function(t){var e=t.theme,n=t.isArray,r=t.isElement;return n?e.SEAGREEN:r&&e.ORANGE}),(function(t){return t.circle?"20px":"auto"}),(function(t){return t.circle?"20px":"auto"}),(function(t){return!t.circle&&"100px"}),(function(t){return t.isArray&&"center"}),(function(t){return t.circle&&"50%"})),K=l.ZP.span.withConfig({displayName:"Node__StyledKey",componentId:"sc-3dlpyb-1"})(["color:",";"],(function(t){return t.theme.BLURPLE})),V=[[0,0],[1e3,1e3]],J={special:function(t){var e=t.id,n=t.data.label;if(0===Object.keys(n).length)return(0,m.jsxs)(G,{circle:!0,children:[(0,m.jsx)(_.HH,{type:"source",position:_.Ly.Left}),(0,m.jsx)(_.HH,{type:"target",position:_.Ly.Right})]});if("string"===typeof n)return(0,m.jsxs)(G,{isArray:!0,children:[n,(0,m.jsx)(_.HH,{type:"source",position:_.Ly.Left}),(0,m.jsx)(_.HH,{type:"target",position:_.Ly.Right})]});if("object"===typeof n){var r=Object.entries(n);return Object.keys(n).every((function(t){return!isNaN(+t)}))?(0,m.jsxs)(G,{isElement:!0,children:[Object.values(n).join(""),(0,m.jsx)(_.HH,{type:"source",position:_.Ly.Left}),(0,m.jsx)(_.HH,{type:"target",position:_.Ly.Right})]}):(0,m.jsxs)(G,{children:[r.map((function(t){var e="string"===typeof t[1]||"number"===typeof t[1];return(0,m.jsxs)("div",{children:[(0,m.jsxs)(K,{children:[t[0],": "]}),e&&t[1]]},t[0])})),(0,m.jsx)(_.HH,{type:"source",id:e,position:_.Ly.Left}),(0,m.jsx)(_.HH,{type:"target",id:e,position:_.Ly.Right})]})}return null}},z=function(){var t=(0,f._)("json",JSON.stringify(g)),e=(0,a.Z)(t,1)[0],n=(0,f._)("config",{layout:"RL",minimap:!0,controls:!0}),r=(0,a.Z)(n,1)[0],o=i.useState([]),c=(0,a.Z)(o,2),s=c[0],l=c[1],d=i.useState(null),u=(0,a.Z)(d,2),p=u[0],h=u[1],y=i.useState(!0),x=(0,a.Z)(y,2),j=x[0],b=x[1];return i.useEffect((function(){p&&p.fitView()}),[p]),i.useEffect((function(){try{var t=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=L(e);return N(t,r,n)}(r.layout,e);l(t),b(!0)}catch(n){b(!1)}}),[p,e,r]),j?(0,m.jsxs)(_.ZP,{nodeExtent:V,elements:s,nodeTypes:J,onLoad:function(t){return h(t)},children:[r.minimap&&(0,m.jsx)(_.a9,{}),r.controls&&(0,m.jsx)(_.ZX,{children:(0,m.jsx)(_.Bw,{onClick:function(){return l(N(r.layout,s))},style:{gridColumn:"1 / 3",width:"auto"},children:"Format"})})]}):null},F=l.ZP.div.withConfig({displayName:"LiveEditor__StyledLiveEditor",componentId:"sc-143se6z-0"})(["width:100%;height:100%;border-left:1px solid ",";.react-flow__controls{display:grid;grid-auto-flow:dense;grid-template-columns:1fr 1fr;grid-auto-rows:1fr;gap:8px;right:10px;left:unset;}.react-flow__minimap{top:8px;right:8px;background:transparent;.react-flow__minimap-mask{fill:",";opacity:0.5;}}.react-flow__controls-button{background:",";fill:",";color:",";font-weight:600;border:1px solid ",";&:hover{background:unset;}}"],(function(t){return t.theme.SILVER_DARK}),(function(t){return t.theme.SILVER_DARK}),(function(t){return t.theme.BLACK_PRIMARY}),(function(t){return t.theme.SILVER}),(function(t){return t.theme.SILVER}),(function(t){return t.theme.BLACK})),M=function(){return(0,m.jsx)(F,{children:(0,m.jsx)(_.tV,{children:(0,m.jsx)(z,{})})})},U=n(9008),W=l.ZP.div.withConfig({displayName:"editor__StyledPageWrapper",componentId:"sc-19myogy-0"})(["display:flex;"]),Y=l.ZP.div.withConfig({displayName:"editor__StyledIncompatible",componentId:"sc-19myogy-1"})(["display:none;@media only screen and (max-width:768px){position:fixed;top:0;left:0;display:flex;flex-direction:column;background:",';content:"This app is not compatible with your device!";color:',";width:100%;height:100vh;justify-content:center;align-items:center;button{margin-top:60px;}&::before{content:'Uh, oh!';font-weight:700;font-size:60px;opacity:0.6;}}"],(function(t){return t.theme.BLACK_LIGHT}),(function(t){return t.theme.SILVER})),X=l.ZP.div.withConfig({displayName:"editor__StyledEditorWrapper",componentId:"sc-19myogy-2"})(["width:100%;@media only screen and (max-width:768px){display:none;}"]),q=l.ZP.div.withConfig({displayName:"editor__StyledTools",componentId:"sc-19myogy-3"})(["display:flex;align-items:center;height:36px;border-bottom:1px solid ",";padding:4px 16px;background:",";color:",";"],(function(t){return t.theme.BLACK}),(function(t){return t.theme.BLACK_SECONDARY}),(function(t){return t.theme.SILVER})),Q=l.ZP.div.withConfig({displayName:"editor__StyledEditor",componentId:"sc-19myogy-4"})(["display:flex;background:",";height:calc(100vh - 46px);"],(function(t){return t.theme.BLACK_LIGHT})),$=function(){var t=(0,r.useRouter)();return(0,m.jsxs)(W,{children:[(0,m.jsx)(U.default,{children:(0,m.jsx)("title",{children:"Editor | JSON Visio"})}),(0,m.jsx)(D,{}),(0,m.jsxs)(X,{children:[(0,m.jsx)(q,{children:"Editor"}),(0,m.jsxs)(Q,{children:[(0,m.jsx)(j,{}),(0,m.jsx)(M,{})]})]}),(0,m.jsxs)(Y,{children:["This app is not compatible with your device!",(0,m.jsx)(o.z,{className:"incompatible",onClick:function(){return t.push("/")},children:"Go Back"})]})]})}},545:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/editor",function(){return n(9104)}])}},function(t){t.O(0,[617,228,445,740,825,124,774,888,179],(function(){return e=545,t(t.s=e);var e}));var e=t.O();_N_E=e}]);