(this["webpackJsonp2048-game"]=this["webpackJsonp2048-game"]||[]).push([[0],[,,,,function(e,t,n){e.exports={wrapper:"Controls_wrapper__1JhvB",button:"Controls_button__15Knd",row:"Controls_row__2XfkB"}},function(e,t,n){e.exports={layout:"Game_layout__1qfxe",buttonWrapper:"Game_buttonWrapper__3w_dR",title:"Game_title__i5Jxb",leftSide:"Game_leftSide__AUznv"}},,,,function(e,t,n){e.exports={cell:"Cell_cell__1kT_P",activeCell:"Cell_activeCell__3m_vH"}},function(e,t,n){e.exports={bg:"GameOver_bg__CVVsa",wrapper:"GameOver_wrapper__1usCj",score:"GameOver_score__svqWs"}},,function(e,t,n){e.exports={bg:"HowToPlay_bg__3qHR0",wrapper:"HowToPlay_wrapper__LYWQg"}},,function(e,t,n){e.exports={wrapper:"Score_wrapper__21mgP",score:"Score_score__2ufP8"}},,,function(e,t,n){e.exports={grid:"Grid_grid__B6Zcz"}},function(e,t,n){e.exports={button:"Button_button__dvV7A"}},,,,,,function(e,t,n){},,,,,,,,function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(2),o=n.n(r),a=n(16),s=n.n(a),i=(n(24),n(25),n(3)),l=n(5),u=n.n(l),j=n(34),b=n(17),f=n.n(b),d=n(9),O=n.n(d),h=function(e){var t=e.num;return Object(c.jsx)("div",{id:"".concat(t),className:"".concat(O.a.cell," ").concat(0!==t?O.a.activeCell:""),children:Object(c.jsx)("div",{className:O.a.content,children:t})})},v=function(e){var t=e.data;return Object(c.jsx)("div",{className:f.a.grid,children:t.map((function(e){return Object(c.jsx)("div",{children:e.map((function(e){return Object(c.jsx)(h,{num:e},Object(j.a)())}))},Object(j.a)())}))})},p=function(e){for(var t=!1;!t;){var n=Math.floor(Math.random()*e.length),c=Math.floor(Math.random()*e.length),r=Math.random()>.5?2:4;0===e[n][c]&&(e[n][c]=r,t=!0)}},x=n(15),m=[0],g=function(e,t){var n=x.cloneDeep(e),c=x.cloneDeep(e);c.forEach((function(e){for(var t=0,n=1;n<e.length;)n===e.length&&(n=t+1,t+=1),e[t]||e[n]?!e[t]&&e[n]?(e[t]=e[n],e[n]=0,n+=1):e[t]&&!e[n]?n+=1:e[t]&&e[n]&&(e[t]===e[n]?(e[t]+=e[n],m[0]+=e[t],e[n]=0,n=t+1,t+=1):n=(t+=1)+1):n+=1})),JSON.stringify(n)!==JSON.stringify(c)&&p(c),t(c)},_=function(e,t){var n=x.cloneDeep(e),c=x.cloneDeep(e);c.forEach((function(e){for(var t=e.length-1,n=t-1;n>=0;)-1===n&&(n=(t-=1)-1),e[t]||e[n]?!e[t]&&e[n]?(e[t]=e[n],e[n]=0,n-=1):e[t]&&!e[n]?n-=1:e[t]&&e[n]&&(e[t]===e[n]?(e[t]+=e[n],m[0]+=e[t],e[n]=0,n=(t-=1)-1):n=(t-=1)-1):n-=1})),JSON.stringify(n)!==JSON.stringify(c)&&p(c),t(c)},w=function(e,t){for(var n=x.cloneDeep(e),c=x.cloneDeep(e),r=0;r<c.length;){for(var o=0,a=1;a<c[r].length;)a===c[r].length&&(a=o+1,o+=1),c[o][r]||c[a][r]?!c[o][r]&&c[a][r]?(c[o][r]=c[a][r],c[a][r]=0,a+=1):c[o][r]&&!c[a][r]?a+=1:c[o][r]&&c[a][r]&&(c[o][r]===c[a][r]?(c[o][r]+=c[a][r],m[0]+=c[o][r],c[a][r]=0,a=o+1,o+=1):a=(o+=1)+1):a+=1;r+=1}JSON.stringify(n)!==JSON.stringify(c)&&p(c),t(c)},N=function(e,t){for(var n=x.cloneDeep(e),c=x.cloneDeep(e),r=0;r<c.length;){for(var o=c[r].length-1,a=o-1;a>=0;)-1===a&&(a=(o-=1)-1),c[o][r]||c[a][r]?!c[o][r]&&c[a][r]?(c[o][r]=c[a][r],c[a][r]=0,a-=1):c[o][r]&&!c[a][r]?a-=1:c[o][r]&&c[a][r]&&(c[o][r]===c[a][r]?(c[o][r]+=c[a][r],m[0]+=c[o][r],c[a][r]=0,a=(o-=1)-1):a=(o-=1)-1):a-=1;r+=1}JSON.stringify(n)!==JSON.stringify(c)&&p(c),t(c)},S=[],y=n(18),C=n.n(y),k=function(e){var t=e.onClick,n=e.text;return Object(c.jsx)("button",{type:"button",className:C.a.button,onClick:t,children:n})},J=n(12),E=n.n(J),D=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(r.useEffect)((function(){var e=function(e){return e.target.id&&o(!1)};return window.addEventListener("mousedown",e),function(){window.removeEventListener("mousedown",e)}})),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(k,{text:"How To Play",onClick:function(){return o(!0)}}),n&&Object(c.jsx)("div",{id:"bg",className:E.a.bg,children:Object(c.jsxs)("div",{className:E.a.wrapper,children:[Object(c.jsx)("h1",{children:"How to Play"}),Object(c.jsxs)("p",{children:["Use your arrow keys or buttons on the right side to move the tiles. Tiles with the same number merge into one when they touch. Add them up to reach ",Object(c.jsx)("strong",{children:"2048"}),"!"]})]})})]})},G=n(6),P=n(7),L=n(4),A=n.n(L),B=function(e){var t=e.up,n=e.down,r=e.left,o=e.right;return Object(c.jsxs)("div",{className:A.a.wrapper,children:[Object(c.jsx)("button",{type:"button",className:A.a.button,onClick:t,children:Object(c.jsx)(G.a,{icon:P.d})}),Object(c.jsxs)("div",{className:A.a.row,children:[Object(c.jsx)("button",{type:"button",className:A.a.button,onClick:o,children:Object(c.jsx)(G.a,{icon:P.b})}),Object(c.jsx)("button",{type:"button",className:A.a.button,onClick:n,children:Object(c.jsx)(G.a,{icon:P.a})}),Object(c.jsx)("button",{type:"button",className:A.a.button,onClick:r,children:Object(c.jsx)(G.a,{icon:P.c})})]})]})},I=n(14),T=n.n(I),F=function(e){var t=e.num,n=e.text;return Object(c.jsxs)("div",{className:T.a.wrapper,children:[n," ",Object(c.jsx)("span",{className:T.a.score,children:t})]})},H=n(10),M=n.n(H),W=function(e){var t=e.over,n=e.score;return Object(c.jsx)(c.Fragment,{children:t&&Object(c.jsx)("div",{id:"bg",className:M.a.bg,children:Object(c.jsxs)("div",{className:M.a.wrapper,children:[Object(c.jsx)("h1",{children:"Game Over"}),Object(c.jsxs)("h2",{children:["Your score: ",Object(c.jsx)("span",{className:M.a.score,children:n})]})]})})})},q=n(15),R=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],U=JSON.parse(localStorage.getItem("2048Score"));U||localStorage.setItem("2048Score","".concat(0));var V=function(){var e=Object(r.useState)(R),t=Object(i.a)(e,2),n=t[0],o=t[1],a=Object(r.useState)(!1),s=Object(i.a)(a,2),l=s[0],j=s[1],b=Object(r.useState)(0),f=Object(i.a)(b,2),d=f[0],O=f[1],h=Object(r.useState)(U),x=Object(i.a)(h,2),y=x[0],C=x[1];Object(r.useEffect)((function(){J()}),[]),Object(r.useEffect)((function(){O(m[0])}),[n]),Object(r.useEffect)((function(){var e=function(e){"ArrowRight"===e.key?N(n,o):"ArrowLeft"===e.key?w(n,o):"ArrowDown"===e.key?_(n,o):"ArrowUp"===e.key&&g(n,o)};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}})),Object(r.useEffect)((function(){n.map((function(e){return e.every((function(e){return e}))})).every((function(e){return e}))&&(function(e){for(var t=0;t<e.length;){for(var n=0,c=1;c<e[t].length;)if(e[t][n]!==e[t][c])c+=1,n+=1;else if(e[t][n]===e[t][c])return void S.push("x");t+=1}}(n),function(e){for(var t=0;t<e.length;){for(var n=0,c=1;c<e[t].length;)if(e[n][t]!==e[c][t])c+=1,n+=1;else if(e[n][t]===e[c][t])return void S.push("x");t+=1}}(n),function(e){S.includes("x")?S.splice(0,S.length):e(!0)}(j))}),[n]),Object(r.useEffect)((function(){l&&(JSON.parse(localStorage.getItem("2048Score"))<m[0]&&localStorage.setItem("2048Score","".concat(m[0])))}),[l]);var J=function(){var e=q.cloneDeep(R);p(e),p(e),o(e),j(!1),m[0]=0;var t=JSON.parse(localStorage.getItem("2048Score"));t>m[0]?C(t):C(m[0])};return Object(c.jsxs)("div",{className:u.a.layout,children:[Object(c.jsx)("div",{className:u.a.title,children:"2048"}),Object(c.jsxs)("div",{className:u.a.buttonWrapper,children:[Object(c.jsx)(W,{over:l,score:d}),Object(c.jsx)(k,{text:"New Game",onClick:J}),Object(c.jsx)(D,{})]}),Object(c.jsx)(v,{data:n}),Object(c.jsxs)("div",{className:u.a.leftSide,children:[Object(c.jsxs)("div",{className:u.a.score,children:[Object(c.jsx)(F,{text:"Best",num:d>y?d:y}),Object(c.jsx)(F,{text:"Score",num:d})]}),Object(c.jsx)(B,{up:function(){return g(n,o)},down:function(){return _(n,o)},left:function(){return N(n,o)},right:function(){return w(n,o)}})]})]})},z=function(){return Object(c.jsx)("section",{className:"game",children:Object(c.jsx)("div",{className:"container container-fluid",children:Object(c.jsx)("div",{className:"row center-xs",children:Object(c.jsx)("div",{className:"col-xs-12",children:Object(c.jsx)(V,{})})})})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))};s.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(z,{})}),document.getElementById("root")),Y()}],[[32,1,2]]]);
//# sourceMappingURL=main.e86f5b24.chunk.js.map