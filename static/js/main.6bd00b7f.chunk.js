(this["webpackJsonptest-task"]=this["webpackJsonptest-task"]||[]).push([[0],{67:function(n,e,t){"use strict";t.r(e);var c,r,a,i,o,d,s,b,x,j,l=t(0),p=t.n(l),h=t(35),u=t.n(h),f=t(24),m=t(17),O=t(20),g=t(4),w=t(5),v=t(1),y=w.b.h1(c||(c=Object(g.a)(["\n   text-align: center;\n   margin: 50px 0 0;  \n"]))),k=w.b.h2(r||(r=Object(g.a)(["\n   text-align: center;\n   font-size: 18px;  \n   margin-top: 10px;\n"]))),C=function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(y,{children:"Infinite Unsplash Gallery"}),Object(v.jsx)(k,{children:"Click on the image to open it in full size"})]})},z=w.b.img(a||(a=Object(g.a)(["\n   width: 100%;\n   object-fit: cover;\n   cursor: pointer;\n   margin:50px 0 0 0;\n   border-radius: 10px;\n   border:20px solid black;\n   transition: 0.1s;\n\n   :hover{\n      border:20px solid rgba(0,0,0,0.9);\n      transform: scale(0.95);\n   }\n"]))),F=w.b.div(i||(i=Object(g.a)(["\n   max-width:300px;\n\n   @media screen and (max-width:920px){\n      max-width: 350px;\n   }\n\n   @media screen and (max-width:700px){\n      max-width: 700px;\n   }\n"]))),S=function(n){var e=n.key,t=n.source,c=n.name,r=n.description;return Object(v.jsx)("div",{children:Object(v.jsxs)(F,{children:[Object(v.jsx)("a",{href:"/image",children:Object(v.jsx)(z,{src:t},e)}),Object(v.jsx)("h2",{children:c}),Object(v.jsx)("p",{children:r})]})})},E=t(16),I=t.n(E),L=w.b.div(o||(o=Object(g.a)(["\n   display: flex;\n   justify-content: center;\n\n   @media screen and (max-width: 1200px){\n      flex-direction: column;\n      width: 100%;\n   }\n"]))),_=w.b.a(d||(d=Object(g.a)(["\n   font-family: 'Helvetica';\n   text-decoration: none;\n   text-aling: center;\n   background: rgb(50,50,50);\n   outline: none;\n   border: none;\n   border-top-left-radius: 10px;\n   border-bottom-left-radius: 10px;\n   cursor: pointer;\n   color: white;\n   font-weight: bold;\n   padding: 23px 0;\n   transition: 0.1s;\n\n   &:hover{\n      color:  rgb(50,50,50);\n      transition: 0.2s;\n   }\n\n   @media screen and (max-width: 1200px){\n      padding: 0px;\n      text-align: center;\n      border-top-left-radius: 10px;\n      border-top-right-radius: 10px;\n      border-bottom-left-radius: 0px;\n   }\n\n"]))),A=w.b.img(s||(s=Object(g.a)(["\n   border-top-right-radius: 10px;\n   border-bottom-right-radius: 10px;\n\n   @media screen and (max-width: 1200px){\n      border-top-right-radius: 0px;\n      border-bottom-left-radius: 10px;\n      border-bottom-right-radius: 10px;\n   }\n"]))),B=w.b.p(b||(b=Object(g.a)(["\n   transform: rotate(-90deg);\n   font-size: 24px;\n   padding: 0 0;\n\n   @media screen and (max-width: 1200px){\n      transform: rotate(0deg);\n   }\n"]))),H=function(n){var e=Object(l.useState)(""),t=Object(m.a)(e,2),c=t[0],r=t[1];Object(l.useEffect)((function(){a()}),[]);var a=function(){I.a.get("".concat("https://api.unsplash.com","/photos/").concat(n.match.params.id,"/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0")).then((function(n){r(n.data.urls.regular)}))};return Object(v.jsxs)(L,{children:[Object(v.jsx)(_,{href:"/",children:Object(v.jsx)(B,{children:"Close"})}),Object(v.jsx)(A,{src:c},n.key)]})},J=t(21),M=t(2),P=t(39),T=Object(w.a)(x||(x=Object(g.a)(["\n  *{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Helvetica', 'Arial', sans-serif;\n    user-select: none;\n    text-decoration: none;\n    color: black;\n    cursor: default;\n  }\n"]))),D=w.b.div(j||(j=Object(g.a)(["\n  max-width: 1000px;\n  padding: 0 8px;\n  margin: 0 auto;\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n  justify-content: space-between;\n  \n  @media screen and (max-width:720px){\n    justify-content: center;\n    max-width: 95%;\n  }\n"])));function G(){var n=Object(l.useState)([]),e=Object(m.a)(n,2),t=e[0],c=e[1];Object(l.useEffect)((function(){r()}),[]);var r=function(){I.a.get("".concat("https://api.unsplash.com","/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0")).then((function(n){return c([].concat(Object(f.a)(t),Object(f.a)(n.data)))}))};return Object(v.jsxs)("div",{children:[Object(v.jsx)(C,{}),console.log(t),Object(v.jsx)(T,{}),Object(v.jsx)(P.a,{dataLength:t.length,next:r,hasMore:!0,children:Object(v.jsxs)(D,{children:[" ",t.map((function(n){return Object(v.jsx)(J.b,{to:"/".concat(n.id),children:Object(v.jsx)(S,{source:n.urls.small,name:n.user.username,description:n.alt_description},n.id)},"".concat(n.id))}))]})})]})}var N=function(){var n;return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(J.a,{children:Object(v.jsxs)(M.c,{children:[Object(v.jsx)(M.a,{exact:!0,path:"/:id",component:H}),Object(v.jsx)(M.a,(n={exact:!0,path:"/"},Object(O.a)(n,"exact",!0),Object(O.a)(n,"component",G),n))]})})})},U=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,68)).then((function(e){var t=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;t(n),c(n),r(n),a(n),i(n)}))};u.a.render(Object(v.jsx)(p.a.StrictMode,{children:Object(v.jsx)(N,{})}),document.getElementById("root")),U()}},[[67,1,2]]]);
//# sourceMappingURL=main.6bd00b7f.chunk.js.map