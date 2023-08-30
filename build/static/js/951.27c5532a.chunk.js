"use strict";(self.webpackChunkinterior=self.webpackChunkinterior||[]).push([[951],{2666:function(e,n,t){t.d(n,{Z:function(){return i}});t(2791);var a,r=t(168),o=(t(8789).ZP.button(a||(a=(0,r.Z)(["\n  \n"]))),t(8182)),l=t(184),i=function(e){var n=e.children,t=e.type,a=e.onClick,r=e.style;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(o.E.button,{className:"common_btn",type:t,style:r,onClick:a,children:n})})}},5989:function(e,n,t){t.d(n,{Z:function(){return c}});t(2791);var a,r=t(2666),o=(t(5672),t(168)),l=t(8789).ZP.div(a||(a=(0,o.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  align-items: center;\n\n  h3 {\n    font-style: normal;\n    margin: 0;\n    font-weight: 400;\n    font-size: 24px;\n    line-height: 28px;\n    color: #03544c;\n    text-transform: uppercase;\n  }\n\n"]))),i=t(184);var c=function(e){var n=e.title,t=e.textBtn,a=(e.style,e.onClick),o=e.isBtn;return(0,i.jsxs)(l,{children:[(0,i.jsx)("h3",{children:n}),!1===o?null:(0,i.jsx)(r.Z,{style:{background:"#03544C"},onClick:a,children:t})]})}},6884:function(e,n,t){t(2791);var a=t(6747),r=t(1192),o=t(184);n.Z=function(e){var n=e.open,t=e.handleClose,l=e.children,i=e.width,c=e.height,s=e.styles,d={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:i,bgcolor:"rgba(40, 40, 40, 0.6)",boxShadow:"10px 10px 20px rgba(0, 0, 0, 0.05)",borderRadius:"20px",height:c,p:2,backdropFilter:"blur(5px)",zIndex:"1"};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(r.Z,{open:n,onClose:t,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,o.jsx)(a.Z,{sx:d,style:s,children:l})})})}},5672:function(e,n,t){t.d(n,{Z:function(){return i}});t(2791);var a,r=t(168),o=(t(8789).ZP.button(a||(a=(0,r.Z)(["\n  display: flex;\n  align-items: center;\n  border: none;\n  background-color: transparent;\n  width: 100%;\n  span {\n    background-image: linear-gradient(\n      180deg,\n      rgba(156, 237, 86, 255) 0%,\n      rgba(85, 151, 26, 255) 100%\n    );\n    padding: 10px 20px;\n    text-transform: uppercase;\n    color: white;\n    font-weight: bold;\n    font-size: 10px;\n    border-start-end-radius: 10px;\n    border-end-end-radius: 10px;\n  }\n  ion-icon {\n    background-image: linear-gradient(\n      180deg,\n      rgba(156, 237, 86, 255) 0%,\n      rgba(85, 151, 26, 255) 100%\n    );\n    padding: 10px 10px;\n    color: white;\n    font-size: 23px;\n    border-start-start-radius: 10px;\n    border-end-start-radius: 10px;\n  }\n"]))),t(8182)),l=t(184);var i=function(e){var n=e.children,t=(e.href,e.style),a=e.onClick;return(0,l.jsx)(o.E.button,{custom:5,variants:{hidden:{x:-100,opacity:0},visible:function(e){return{x:0,opacity:1,transition:{delay:.5*e}}}},className:"btn-anime",style:t,onClick:a,children:n})}},6685:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(4065),r=t(184);var o=function(e){var n=e.columns,t=e.data,o=e.summary,l=e.bordered,i=e.scroll,c=e.className,s=e.pagination,d=e.loading;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(a.Z,{className:c,columns:n,dataSource:t,bordered:l,tableLayout:"none",pagination:s,scroll:i,summary:o,loading:d})})}},7332:function(e,n,t){t.d(n,{Z:function(){return L}});var a=t(4165),r=t(5861),o=t(2791),l=t(8190),i=t(586),c=t(3296),s=t(3388),d=t(7689),p=t(1087),u=t(1583),x=t(774),m=t(1306),h=t(6058),g=t(713),f=t(821),j=t(3876),y=t(6533),b=t(2414),v=t(9529),Z=t(131),k=t(7716),w=t(9434),N=t(3658),C=t(184),O=i.Z.Header,E=i.Z.Content,S=i.Z.Footer,L=function(e){var n,t=e.children,L=(e.setIsChecked,window.localStorage.getItem("emails")),P=(0,C.jsx)("span",{children:"\u0412\u044b\u0439\u0442\u0438"}),_=(0,w.I0)(),I=(null===(n=(0,w.v9)((function(e){return e.adminadd})).userGet)||void 0===n?void 0:n.data).filter((function(e){return e.email==L})),z=(0,d.TH)(),B=new l.Z;console.log(I),(0,o.useEffect)((function(){_((0,N.Yz)())}),[]);var F=(0,d.s0)(),W=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.localStorage.setItem("checked","true"),window.location.reload();case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),T=c.Z.useToken().token.colorBgContainer,D=[{label:(0,C.jsx)(Z.Z,{title:P,children:(0,C.jsxs)("button",{className:"tool_btns",onClick:function(){B.remove("token"),setTimeout((function(){F("/"),window.location.reload()}),"1500")},children:[(0,C.jsx)("span",{children:"\u0412\u044b\u0439\u0442\u0438"}),(0,C.jsx)(h.Z,{})]})}),key:"0"},{label:(0,C.jsxs)("div",{className:"switch_wrapp",children:[" ",(0,C.jsx)("span",{children:"\u0411\u043e\u043a\u043e\u0432\u0430\u044f \u043f\u0430\u043d\u0435\u043b\u044c"})," ",(0,C.jsx)(m.Z,{onChange:W})]}),key:"1"}];return(0,C.jsxs)(i.Z,{className:"layout hori_sidebar",children:[(0,C.jsxs)(O,{style:{display:"flex",alignItems:"center"},children:[(0,C.jsx)("img",{src:k,width:100,className:"demo-logo"}),(0,C.jsx)(s.Z,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],items:[{key:"1",icon:(0,C.jsx)(g.Z,{}),label:(0,C.jsx)(p.OL,{to:"/adminadd",className:"/adminadd"==z?"active":"",children:(0,C.jsx)("span",{class:"title",children:"\u0410\u0434\u043c\u0438\u043d"})})},{key:"2",icon:(0,C.jsx)(f.Z,{}),label:(0,C.jsx)(p.OL,{to:"/contact",children:(0,C.jsx)("span",{class:"title",children:"\u0417\u0430\u044f\u0432\u043a\u0438"})})},{key:"3",label:(0,C.jsx)("span",{class:"title",children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"}),children:[{type:"category",label:(0,C.jsx)(p.OL,{to:"/category-aparat",className:"/category-aparat"==z?"active":"",children:(0,C.jsx)("span",{class:"title",children:"\u0410\u043f\u0430\u0440\u0430\u0442"})})},{type:"category",label:(0,C.jsx)(p.OL,{to:"/category-pereparat",className:"/category-pereparat"==z?"active":"",children:(0,C.jsx)("span",{class:"title",children:"\u043f\u0440\u0435\u043f\u0430\u0440\u0430\u0442\u044b"})})}]},{key:"4",label:(0,C.jsx)("span",{class:"title",children:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442"}),children:[{type:"category",label:(0,C.jsx)(p.OL,{to:"/aparat-product",className:"/aparat-product"==z?"active":"",children:(0,C.jsx)("span",{class:"title",children:"\u0410\u043f\u0430\u0440\u0430\u0442"})})},{type:"category",label:(0,C.jsx)(p.OL,{to:"/pereparat-product",className:"/pereparat-product"==z?"active":"",children:(0,C.jsx)("span",{class:"title",children:"\u043f\u0440\u0435\u043f\u0430\u0440\u0430\u0442\u044b"})})}]},{key:"5",icon:(0,C.jsx)(j.Z,{}),label:(0,C.jsx)(p.OL,{to:"/news",className:"/news"==z?"active":"",children:(0,C.jsx)("span",{class:"title",children:"\u043d\u043e\u0432\u043e\u0441\u0442\u0438"})})},{key:"6",icon:(0,C.jsx)(y.Z,{}),label:(0,C.jsx)(p.OL,{to:"/blog",className:"/blog"==z?"active":"",children:(0,C.jsx)("span",{class:"title",children:"\u0411\u043b\u043e\u0433"})})}]}),(0,C.jsxs)("div",{className:"profile",children:[(0,C.jsx)(u.Z,{style:{marginLeft:"10px"},menu:{items:D},trigger:["click"],children:(0,C.jsx)("a",{onClick:function(e){return e.preventDefault()},children:(0,C.jsxs)(x.Z,{children:[(0,C.jsx)(b.Z,{}),(0,C.jsx)("span",{className:"drop_span",children:"Setting"})]})})}),(0,C.jsx)(v.Z,{className:"user-icon"}),(0,C.jsx)("div",{className:"profile-right",children:I.map((function(e){return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("p",{className:"profile_name",children:e.name}),(0,C.jsx)("p",{className:"profile_email",children:e.email})]})}))})]})]}),(0,C.jsx)(E,{style:{padding:"0 50px"},children:(0,C.jsx)("div",{className:"site-layout-content",style:{background:T,borderRadius:"20px"},children:t})}),(0,C.jsx)(S,{style:{textAlign:"center",background:"transparent",color:"#3045A5",fontWeight:"500",padding:"15px 50px"},children:"\xa92023 Created by Supersite"})]})}},7621:function(e,n,t){t.d(n,{Z:function(){return P}});var a=t(9439),r=t(2791),o=t(8190),l=t(131),i=t(1306),c=t(1583),s=t(774),d=t(6058),p=t(713),u=t(8301),x=t(8961),m=t(6533),h=t(3621),g=t(5797),f=t(2414),j=t(9529),y=t(9434),b=t(7689),v=t(1087),Z=t(586),k=t(3296),w=t(3388),N=(t(7716),t(3658)),C=t(184),O=Z.Z.Header,E=Z.Z.Sider,S=Z.Z.Footer,L=Z.Z.Content,P=function(e){var n,t=e.children,P=(e.setIsChecked,window.localStorage.getItem("emails")),_=(0,C.jsx)("span",{children:"\u0412\u044b\u0439\u0442\u0438"}),I=(0,y.I0)(),z=(null===(n=(0,y.v9)((function(e){return e.adminadd})).userGet)||void 0===n?void 0:n.data).filter((function(e){return e.email==P}));console.log(z),(0,r.useEffect)((function(){I((0,N.Yz)())}),[]);var B=(0,r.useState)(!1),F=(0,a.Z)(B,2),W=F[0],T=F[1],D=new o.Z,A=(0,b.TH)(),H=(0,b.s0)(),R=(k.Z.useToken().token.colorBgContainer,[{label:(0,C.jsx)(l.Z,{title:_,children:(0,C.jsxs)("button",{className:"tool_btns",onClick:function(){D.remove("token"),setTimeout((function(){H("/"),window.location.reload()}),"1500")},children:[(0,C.jsx)("span",{children:"\u0412\u044b\u0439\u0442\u0438"}),(0,C.jsx)(d.Z,{})]})}),key:"0"},{label:(0,C.jsxs)("div",{className:"switch_wrapp",children:[" ",(0,C.jsx)("span",{children:"\u0411\u043e\u043a\u043e\u0432\u0430\u044f \u043f\u0430\u043d\u0435\u043b\u044c"})," ",(0,C.jsx)(i.Z,{defaultChecked:!0,onChange:function(){window.localStorage.setItem("checked","false"),window.location.reload()}})]}),key:"1"}]);return(0,C.jsxs)(Z.Z,{style:{height:"100vh",position:"relative"},children:[(0,C.jsxs)(E,{style:{backgroundColor:"#5A79E5"},width:240,trigger:null,collapsible:!0,collapsed:W,children:[(0,C.jsx)(w.Z,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"],items:[{key:"1",icon:(0,C.jsx)(p.Z,{}),label:(0,C.jsx)(v.OL,{to:"/adminadd",className:"/adminadd"==A?"active":"",children:(0,C.jsx)("span",{class:"title",children:"\u0410\u0434\u043c\u0438\u043d"})})},{key:"2",icon:(0,C.jsx)(u.Z,{}),label:(0,C.jsx)(v.OL,{to:"/contact",children:(0,C.jsx)("span",{class:"title",children:"\u0417\u0430\u044f\u0432\u043a\u0438"})})},{key:"3",icon:(0,C.jsx)(x.Z,{}),label:(0,C.jsx)("span",{class:"title",children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"}),children:[{type:"category",label:(0,C.jsx)(v.OL,{to:"/category-aparat",className:"/category-aparat"==A?"active":"",children:(0,C.jsx)("span",{class:"title",children:"\u0410\u043f\u0430\u0440\u0430\u0442"})})},{type:"category",label:(0,C.jsx)(v.OL,{to:"/category-pereparat",className:"/category-pereparat"==A?"active":"",children:(0,C.jsx)("span",{class:"title",children:"\u043f\u0440\u0435\u043f\u0430\u0440\u0430\u0442\u044b"})})}]},{key:"4",icon:(0,C.jsx)(m.Z,{}),label:(0,C.jsx)("span",{class:"title",children:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442"}),children:[{type:"category",label:(0,C.jsx)(v.OL,{to:"/aparat-product",className:"/aparat-product"==A?"active":"",children:(0,C.jsx)("span",{class:"title",children:"\u0410\u043f\u0430\u0440\u0430\u0442"})})},{type:"category",label:(0,C.jsx)(v.OL,{to:"/pereparat-product",className:"/pereparat-product"==A?"active":"",children:(0,C.jsx)("span",{class:"title",children:"\u043f\u0440\u0435\u043f\u0430\u0440\u0430\u0442\u044b"})})}]},{key:"5",icon:(0,C.jsx)(m.Z,{}),label:(0,C.jsx)(v.OL,{to:"/news",className:"/news"==A?"active":"",children:(0,C.jsx)("span",{class:"title",children:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"})})},{key:"6",icon:(0,C.jsx)(m.Z,{}),label:(0,C.jsx)(v.OL,{to:"/blog",className:"/blog"==A?"active":"",children:(0,C.jsx)("span",{class:"title",children:"\u0431\u043b\u043e\u0433"})})}],style:{backgroundColor:"#000B3E"}}),(0,C.jsx)("div",{className:"logo_wrapp",children:"MARDTRAVEL"})]}),(0,C.jsxs)(Z.Z,{className:"site-layout",children:[(0,C.jsxs)(O,{style:{padding:0,background:"#000B3E",display:"flex",justifyContent:"space-between"},children:[(0,C.jsx)("div",{className:"logos",children:r.createElement(W?h.Z:g.Z,{className:"trigger",onClick:function(){return T(!W)}})}),(0,C.jsxs)("div",{className:"left",children:[(0,C.jsx)("div",{className:"icons"}),(0,C.jsxs)("div",{className:"profile",children:[(0,C.jsx)(c.Z,{style:{marginLeft:"10px"},menu:{items:R},trigger:["click"],children:(0,C.jsx)("a",{onClick:function(e){return e.preventDefault()},children:(0,C.jsxs)(s.Z,{children:[(0,C.jsx)(f.Z,{}),(0,C.jsx)("span",{className:"drop_span",children:"Setting"})]})})}),(0,C.jsx)(j.Z,{className:"user-icon"}),(0,C.jsx)("div",{className:"profile-right",children:z.map((function(e){return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("p",{className:"profile_name",children:e.name}),(0,C.jsx)("p",{className:"profile_email",children:e.email})]})}))})]})]})]}),(0,C.jsx)(L,{style:{margin:"24px 16px",padding:24,minHeight:280,background:"#EEEFF5",overflowY:"auto",height:"85vh"},children:t}),(0,C.jsx)(S,{style:{textAlign:"center",background:"transparent",color:"#3045A5",fontWeight:"500",padding:"10px 20px"},children:"\xa92023 Created by Supersite"})]})]})}},3403:function(e,n,t){t.d(n,{Z:function(){return E}});var a=t(9439),r=t(1694),o=t.n(r),l=t(2791),i=function(e){return e?"function"===typeof e?e():e:null},c=t(9464),s=t(1929),d=t(131),p=t(6904),u=t(4942),x=t(7521),m=t(278),h=t(3817),g=t(8876),f=t(5564),j=t(9922),y=function(e){var n,t=e.componentCls,a=e.popoverColor,r=e.minWidth,o=e.fontWeightStrong,l=e.popoverPadding,i=e.boxShadowSecondary,c=e.colorTextHeading,s=e.borderRadiusLG,d=e.zIndexPopup,p=e.marginXS,m=e.colorBgElevated,g=e.popoverBg;return[(0,u.Z)({},t,Object.assign(Object.assign({},(0,x.Wf)(e)),(n={position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:d,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":m,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"}},(0,u.Z)(n,"".concat(t,"-content"),{position:"relative"}),(0,u.Z)(n,"".concat(t,"-inner"),{backgroundColor:g,backgroundClip:"padding-box",borderRadius:s,boxShadow:i,padding:l}),(0,u.Z)(n,"".concat(t,"-title"),{minWidth:r,marginBottom:p,color:c,fontWeight:o}),(0,u.Z)(n,"".concat(t,"-inner-content"),{color:a}),n))),(0,h.ZP)(e,{colorBg:"var(--antd-arrow-background-color)"}),(0,u.Z)({},"".concat(t,"-pure"),(0,u.Z)({position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block"},"".concat(t,"-content"),{display:"inline-block"}))]},b=function(e){var n=e.componentCls;return(0,u.Z)({},n,g.i.map((function(t){var a,r=e["".concat(t,"6")];return(0,u.Z)({},"&".concat(n,"-").concat(t),(a={"--antd-arrow-background-color":r},(0,u.Z)(a,"".concat(n,"-inner"),{backgroundColor:r}),(0,u.Z)(a,"".concat(n,"-arrow"),{background:"transparent"}),a))})))},v=function(e){var n,t=e.componentCls,a=e.lineWidth,r=e.lineType,o=e.colorSplit,l=e.paddingSM,i=e.controlHeight,c=e.fontSize,s=e.lineHeight,d=e.padding,p=i-Math.round(c*s),x=p/2,m=p/2-a,h=d;return(0,u.Z)({},t,(n={},(0,u.Z)(n,"".concat(t,"-inner"),{padding:0}),(0,u.Z)(n,"".concat(t,"-title"),{margin:0,padding:"".concat(x,"px ").concat(h,"px ").concat(m,"px"),borderBottom:"".concat(a,"px ").concat(r," ").concat(o)}),(0,u.Z)(n,"".concat(t,"-inner-content"),{padding:"".concat(l,"px ").concat(h,"px")}),n))},Z=(0,f.Z)("Popover",(function(e){var n=e.colorBgElevated,t=e.colorText,a=e.wireframe,r=(0,j.TS)(e,{popoverPadding:12,popoverBg:n,popoverColor:t});return[y(r),b(r),a&&v(r),(0,m._y)(r,"zoom-big")]}),(function(e){return{width:177,minWidth:177,zIndexPopup:e.zIndexPopupBase+30}}),{deprecatedTokens:[["width","minWidth"]]}),k=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t};function w(e){var n=e.hashId,t=e.prefixCls,a=e.className,r=e.style,c=e.placement,s=void 0===c?"top":c,d=e.title,u=e.content,x=e.children;return l.createElement("div",{className:o()(n,t,"".concat(t,"-pure"),"".concat(t,"-placement-").concat(s),a),style:r},l.createElement("div",{className:"".concat(t,"-arrow")}),l.createElement(p.G,Object.assign({},e,{className:n,prefixCls:t}),x||function(e,n,t){if(n||t)return l.createElement(l.Fragment,null,n&&l.createElement("div",{className:"".concat(e,"-title")},i(n)),l.createElement("div",{className:"".concat(e,"-inner-content")},i(t)))}(t,d,u)))}var N=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},C=function(e){var n=e.title,t=e.content,a=e.prefixCls;return l.createElement(l.Fragment,null,n&&l.createElement("div",{className:"".concat(a,"-title")},i(n)),l.createElement("div",{className:"".concat(a,"-inner-content")},i(t)))},O=l.forwardRef((function(e,n){var t=e.prefixCls,r=e.title,i=e.content,p=e.overlayClassName,u=e.placement,x=void 0===u?"top":u,m=e.trigger,h=void 0===m?"hover":m,g=e.mouseEnterDelay,f=void 0===g?.1:g,j=e.mouseLeaveDelay,y=void 0===j?.1:j,b=e.overlayStyle,v=void 0===b?{}:b,k=N(e,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),w=l.useContext(s.E_).getPrefixCls,O=w("popover",t),E=Z(O),S=(0,a.Z)(E,2),L=S[0],P=S[1],_=w(),I=o()(p,P);return L(l.createElement(d.Z,Object.assign({placement:x,trigger:h,mouseEnterDelay:f,mouseLeaveDelay:y,overlayStyle:v},k,{prefixCls:O,overlayClassName:I,ref:n,overlay:r||i?l.createElement(C,{prefixCls:O,title:r,content:i}):null,transitionName:(0,c.mL)(_,"zoom-big",k.transitionName),"data-popover-inject":!0})))}));O._InternalPanelDoNotUseOrYouWillBeFired=function(e){var n=e.prefixCls,t=k(e,["prefixCls"]),r=(0,l.useContext(s.E_).getPrefixCls)("popover",n),o=Z(r),i=(0,a.Z)(o,2),c=i[0],d=i[1];return c(l.createElement(w,Object.assign({},t,{prefixCls:r,hashId:d})))};var E=O},7716:function(e,n,t){e.exports=t.p+"static/media/logos.0405ce5de60593dd5529.png"}}]);
//# sourceMappingURL=951.27c5532a.chunk.js.map