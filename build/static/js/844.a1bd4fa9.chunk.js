"use strict";(self.webpackChunkinterior=self.webpackChunkinterior||[]).push([[844],{867:function(e,n,t){t(2791);var r=t(7828),s=t(774),a=t(9004),l=t(184);n.Z=function(e){var n=e.title,t=e.onClose,i=e.open,c=e.children,o=(e.addBtn,e.width);return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(r.Z,{title:n,placement:"right",width:o||1200,onClose:t,open:i,extra:(0,l.jsx)(s.Z,{children:(0,l.jsx)(a.ZP,{danger:!0,onClick:t,children:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"})}),children:c})})}},5158:function(e,n,t){t.d(n,{Z:function(){return a}});t(2791);var r=t(8591),s=t(184),a=function(e){var n=e.placeholder,t=e.defaultValue,a=e.type,l=e.onChange,i=e.className;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(r.Z,{className:i,defaultValue:t,placeholder:n,type:a,onChange:l})})}},9218:function(e,n,t){t.d(n,{Z:function(){return a}});t(2791);var r=t(9555),s=t(184),a=function(e){var n=e.placeholder,t=e.defaultValue,a=e.options,l=e.onChange,i=e.className;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"select_wrapp",children:(0,s.jsx)(r.Z,{showSearch:!0,allowClear:!0,defaultValue:t,onChange:l,className:"select ".concat(i),placeholder:n,optionFilterProp:"children",filterOption:function(e,n){var t;return(null!==(t=null===n||void 0===n?void 0:n.label)&&void 0!==t?t:"").includes(e)},filterSort:function(e,n){var t,r;return(null!==(t=null===e||void 0===e?void 0:e.label)&&void 0!==t?t:"").toLowerCase().localeCompare((null!==(r=null===n||void 0===n?void 0:n.label)&&void 0!==r?r:"").toLowerCase())},options:a})})})}},9457:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(9439),s=t(2791),a=(t(9434),t(586)),l=(t(7716),t(3658),t(7621),t(7332),t(184)),i=(a.Z.Header,a.Z.Sider,a.Z.Footer,a.Z.Content,function(e){e.children;var n=(0,s.useState)("false"),t=(0,r.Z)(n,2),a=t[0];t[1];return console.log("bu herticaldan keldi",a),console.log("okey"),(0,l.jsx)(l.Fragment,{})})},1924:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var r,s=t(9439),a=t(2791),l=t(5989),i=t(3851),c=t(5385),o=t(9434),d=(t(9457),t(4165)),u=t(5861),x=t(6884),p=t(168),h=t(7939),g=h.ZP.div(r||(r=(0,p.Z)(["\n    h3{\n        text-align: center;\n        font-size: 26px;\n    }\n    button{\n        padding: 15px;\n        font-size: 26px;\n        background-color: black;\n        border: 2px solid white;\n        border-radius: 10px;\n        color: white;\n        cursor: pointer;\n    }\n    /* .Buttons{\n        display: flex;\n        justify-content: space-around;\n        margin-top: 40px;\n    } */\n"]))),A=t(4653),f=t(184);var j,m=function(e){var n=e.openDelete,t=e.handleCloseDelete,r=e.HandleDelete;return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(x.Z,{width:340,open:n,handleClose:t,children:(0,f.jsxs)(g,{children:[(0,f.jsx)("h3",{children:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435?"}),(0,f.jsx)("div",{className:"Buttons",children:(0,f.jsxs)(A.X2,{className:"row",children:[(0,f.jsx)(A.JX,{className:"col",lg:6,children:(0,f.jsxs)("button",{onClick:r,children:[(0,f.jsx)("i",{class:"bx bx-check"})," \u0414\u0430"]})}),(0,f.jsx)(A.JX,{className:"col",lg:6,children:(0,f.jsxs)("button",{onClick:t,children:[(0,f.jsx)("i",{class:"bx bx-x"})," \u041d\u0435\u0442"]})})]})})]})})})},E=t(2666),v=h.ZP.form(j||(j=(0,p.Z)(['\n  display: flex;\n  flex-direction: column;\n  h3 {\n    margin-bottom: 15px;\n    font-size: 24px;\n  }\n  .selects {\n    margin-bottom: 10px;\n  }\n  input[type="file"] {\n    display: none;\n  }\n  label {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    width: 100%;\n    border-radius: 20px;\n    text-align: center;\n    /* padding: 15px; */\n    cursor: pointer;\n    /* backdrop-filter: blur(5px) !important;\n    background: rgba(40, 40, 40, 0.6); */\n  }\n  .spins {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 15px;\n    padding-top: 5px;\n    border: 3px solid #f3f3f3;\n  }\n\n  .spinss {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: #f3f3f3;\n    border-radius: 20px;\n    padding-top: 5px;\n    /* border: 2px solid #f3f3f3; */\n  }\n  .span-download {\n    font-size: 20px;\n    margin-right: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n  }\n\n  .span-download > span {\n    margin-left: 10px;\n    font-size: 15px;\n  }\n']))),Q=t(2368),N=t(9218),Z=t(867),b=t(5158),C=t(43),w=t(4996),y=t(7106);var B,I=function(e){var n=e.Open,t=e.HandleClose,r=e.setSelectId,l=e.selectId,i=(0,o.I0)(),x=(0,a.useState)(),p=(0,s.Z)(x,2),h=p[0],g=p[1],j=(0,a.useState)(),m=(0,s.Z)(j,2),B=m[0],I=m[1],S=(0,a.useState)(),J=(0,s.Z)(S,2),k=J[0],_=J[1],z=(0,a.useState)(),X=(0,s.Z)(z,2),K=X[0],R=X[1],F=(0,a.useState)(),T=(0,s.Z)(F,2),P=T[0],q=T[1],U=(0,a.useState)(),D=(0,s.Z)(U,2),G=D[0],H=D[1],L=(0,a.useState)(),Y=(0,s.Z)(L,2),M=Y[0],V=Y[1],O=(0,a.useState)(),W=(0,s.Z)(O,2),$=W[0],ee=W[1],ne=(0,a.useState)(),te=(0,s.Z)(ne,2),re=te[0],se=te[1],ae=(0,a.useState)(),le=(0,s.Z)(ae,2),ie=le[0],ce=le[1],oe=(0,o.v9)((function(e){return e.category.categoryGet.data}));(0,a.useEffect)((function(){i((0,Q.mF)())}),[]);var de=(0,o.v9)((function(e){var n;return null===(n=e.product)||void 0===n?void 0:n.uploadProjects}));(0,a.useEffect)((function(){i((0,c.xZ)())}),[]);var ue=function(){var e=(0,u.Z)((0,d.Z)().mark((function e(n){return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i((0,c.zv)(n));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),xe=((0,o.v9)((function(e){return e.product})),function(){var e=(0,u.Z)((0,d.Z)().mark((function e(n){var r;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r={title_uz:h,title_ru:B,title_en:k,description_uz:K,description_ru:P,description_en:G,description2_uz:M,description2_ru:$,description2_en:re,image:de.data,category:l,sale_count:ie},console.log(r),e.next=5,i((0,c.UO)(r));case 5:i((0,c.xZ)()),t();case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),pe=(0,f.jsx)(y.Z,{style:{fontSize:24,color:"#000"},spin:!0}),he=[];return oe.map((function(e){return he.push({value:e.id,label:e.title_ru})})),(0,f.jsx)(Z.Z,{title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442",open:n,onClose:t,children:(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(v,{onSubmit:xe,children:(0,f.jsx)("div",{className:"input_wrap",children:(0,f.jsxs)("div",{className:"scrool",children:[(0,f.jsxs)(A.X2,{className:"row",children:[(0,f.jsxs)(A.JX,{className:"col",lg:4,children:[(0,f.jsx)("h4",{children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"}),(0,f.jsx)("div",{className:"selects",children:(0,f.jsx)(N.Z,{onChange:function(e){r(e),window.localStorage.setItem("selectId",e)},placeholder:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c",options:he})}),(0,f.jsx)("h4",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e"}),(0,f.jsxs)(A.X2,{className:"row",children:[(0,f.jsx)(A.JX,{className:"col_upload",lg:6,children:1==de.Loading?(0,f.jsx)("div",{className:"spinss",children:(0,f.jsx)(C.Z,{indicator:pe})}):1==de.Success?(0,f.jsx)(w.Z,{style:{aspectRatio:"1 / 1",borderRadius:"20px",zIndex:"99999999"},src:de.data}):(0,f.jsx)("div",{className:"none_img",children:(0,f.jsx)("i",{class:"bx bxs-image"})})}),(0,f.jsx)(A.JX,{className:"col_upload",lg:6,children:1==de.Loading?(0,f.jsx)("div",{className:"spins",children:(0,f.jsx)(C.Z,{indicator:pe})}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("input",{type:"file",id:"file",onChange:ue}),(0,f.jsx)("label",{for:"file",class:"custom-file-upload",children:(0,f.jsxs)("span",{className:"span-download",children:[(0,f.jsx)("ion-icon",{name:"cloud-download-outline"}),(0,f.jsx)("span",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u043e\u0442\u043e"})]})})]})}),(0,f.jsx)(A.JX,{lg:12,children:(0,f.jsxs)("div",{className:"infor_box",children:[(0,f.jsxs)("p",{children:[(0,f.jsx)("span",{children:"\u0424\u043e\u0440\u043c\u0430\u0442: "}),"PNG, JPEG, JPG, SVG. \u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c\u043e\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 ",(0,f.jsx)("span",{children:"1080\xd71080"})]}),(0,f.jsxs)("p",{children:[" ",(0,f.jsx)("span",{children:"\u0420\u0430\u0437\u043c\u0435\u0440: "}),"\u0440\u0430\u0437\u043c\u0435\u0440 \u0444\u0430\u0439\u043b\u0430 \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0442\u044c 5 MB"]})]})})]})]}),(0,f.jsxs)(A.JX,{className:"col",lg:8,children:[(0,f.jsx)("h4",{children:"\u0418\u043c\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430"}),(0,f.jsx)(b.Z,{type:"text",placeholder:"\u0443\u0437\u0431\u0435\u043a\u0441\u043a\u0438\u0439",required:!0,onChange:function(e){return g(e.currentTarget.value)}}),(0,f.jsx)(b.Z,{type:"text",placeholder:"\u0440\u0443\u0441\u0441\u043a\u0438\u0439",required:!0,onChange:function(e){return I(e.currentTarget.value)}}),(0,f.jsx)(b.Z,{type:"text",placeholder:"\u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439",required:!0,onChange:function(e){return _(e.currentTarget.value)}}),(0,f.jsxs)(A.X2,{children:[(0,f.jsxs)(A.JX,{className:"col",lg:12,children:[(0,f.jsx)("h4",{children:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),(0,f.jsx)("textarea",{className:"textarea_products",placeholder:"\u0443\u0437\u0431\u0435\u043a\u0441\u043a\u0438\u0439",required:!0,onChange:function(e){return R(e.currentTarget.value)},rows:"10",cols:"120"})]}),(0,f.jsx)(A.JX,{className:"col",lg:12,children:(0,f.jsx)("textarea",{className:"textarea_products",placeholder:"\u0440\u0443\u0441\u0441\u043a\u0438\u0439",required:!0,onChange:function(e){return q(e.currentTarget.value)},rows:"10",cols:"120"})}),(0,f.jsx)(A.JX,{className:"col",lg:12,children:(0,f.jsx)("textarea",{className:"textarea_products",placeholder:"\u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439",required:!0,onChange:function(e){return H(e.currentTarget.value)},rows:"10",cols:"120"})})]})]}),(0,f.jsxs)(A.JX,{className:"col",lg:4,children:[(0,f.jsx)("h4",{children:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 2"}),(0,f.jsx)("textarea",{className:"textarea_products",placeholder:"\u0443\u0437\u0431\u0435\u043a\u0441\u043a\u0438\u0439",required:!0,onChange:function(e){return V(e.currentTarget.value)},rows:"10",cols:"120"})]}),(0,f.jsxs)(A.JX,{className:"col",lg:4,children:[(0,f.jsx)("h4",{children:"*"}),(0,f.jsx)("textarea",{className:"textarea_products",placeholder:"\u0440\u0443\u0441\u0441\u043a\u0438\u0439",required:!0,onChange:function(e){return ee(e.currentTarget.value)},rows:"10",cols:"120"})]}),(0,f.jsxs)(A.JX,{className:"col",lg:4,children:[(0,f.jsx)("h4",{children:"*"}),(0,f.jsx)("textarea",{className:"textarea_products",placeholder:"\u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439",required:!0,onChange:function(e){return se(e.currentTarget.value)},rows:"10",cols:"120"})]}),(0,f.jsx)(b.Z,{type:"number",placeholder:"\u043f\u0440\u043e\u0446\u0435\u043d\u0442 \u0441\u043a\u0438\u0434\u043a\u0438",required:!0,onChange:function(e){return ce(e.currentTarget.value)}})]}),(0,f.jsx)(E.Z,{type:"submit",style:{margin:"20px auto 0 auto",padding:"12px 40px",border:"2px solid #fff"},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})})})})})},S=h.ZP.form(B||(B=(0,p.Z)(['\n  display: flex;\n  flex-direction: column;\n  h3 {\n    margin-bottom: 15px;\n    font-size: 24px;\n  }\n  .selects {\n    margin-bottom: 10px;\n  }\n  input[type="file"] {\n    display: none;\n  }\n  label {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    width: 100%;\n    border-radius: 20px;\n    text-align: center;\n    /* padding: 15px; */\n    cursor: pointer;\n    /* backdrop-filter: blur(5px) !important;\n    background: rgba(40, 40, 40, 0.6); */\n  }\n  .spins {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 15px;\n    padding-top: 5px;\n    border: 3px solid #f3f3f3;\n  }\n\n  .spinss {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: #f3f3f3;\n    border-radius: 20px;\n    padding-top: 5px;\n    /* border: 2px solid #f3f3f3; */\n  }\n  .span-download {\n    font-size: 20px;\n    margin-right: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n  }\n\n  .span-download > span {\n    margin-left: 10px;\n    font-size: 15px;\n  }\n'])));var J=function(e){var n=e.openPut,t=e.handleClosePut,r=e.put_id,l=e.setSelectId,i=e.selectId,x=e.setLoadings,p=r,h=(0,o.I0)(),g=(0,a.useState)(),j=(0,s.Z)(g,2),m=j[0],v=j[1],B=(0,a.useState)(),I=(0,s.Z)(B,2),J=I[0],k=I[1],_=(0,a.useState)(),z=(0,s.Z)(_,2),X=z[0],K=z[1],R=(0,a.useState)(),F=(0,s.Z)(R,2),T=F[0],P=F[1],q=(0,a.useState)(),U=(0,s.Z)(q,2),D=U[0],G=U[1],H=(0,a.useState)(),L=(0,s.Z)(H,2),Y=L[0],M=L[1],V=(0,a.useState)(),O=(0,s.Z)(V,2),W=O[0],$=O[1],ee=(0,a.useState)(),ne=(0,s.Z)(ee,2),te=ne[0],re=ne[1],se=(0,a.useState)(),ae=(0,s.Z)(se,2),le=ae[0],ie=ae[1],ce=((0,o.v9)((function(e){return e.product})),(0,o.v9)((function(e){return e.product.productGet.data})));(0,a.useEffect)((function(){h((0,c.xZ)())}),[]),ce.filter((function(e){return e.id==p}));var oe=(0,o.v9)((function(e){return e.category.categoryGet.data})),de=(0,o.v9)((function(e){var n;return null===(n=e.product)||void 0===n?void 0:n.uploadProjects}));oe.filter((function(e){return e.id==window.localStorage.getItem("selectId")})),(0,a.useEffect)((function(){h((0,Q.mF)())}),[]),(0,a.useEffect)((function(){h((0,c.xZ)())}),[]);var ue=function(){var e=(0,u.Z)((0,d.Z)().mark((function e(n){return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h((0,c.zv)(n));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),xe=ce.filter((function(e){return e.id==p})),pe=[];oe.map((function(e){return pe.push({value:e.id,label:e.title_ru})}));var he=function(e){l(e)},ge=function(){var e=(0,u.Z)((0,d.Z)().mark((function e(n){var r;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r={title_uz:m,title_ru:J,title_en:X,description_uz:T,description_ru:D,description_en:Y,description2_uz:W,description2_ru:te,description2_en:le,image:de.data?de.data:xe.map((function(e){return e.image}))[0],category:i},e.next=4,h((0,c.KF)({body:r,id:p}));case 4:h((0,c.xZ)()),t(),x(!0),window.location.reload();case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Ae=(0,f.jsx)(y.Z,{style:{fontSize:24,color:"#000"},spin:!0});return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(Z.Z,{title:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442",open:n,onClose:t,children:(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(S,{onSubmit:ge,children:(0,f.jsx)("div",{className:"input_wrap",children:(0,f.jsxs)("div",{className:"scrool",children:[ce.map((function(e){return e.id==p?(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(A.X2,{className:"row",children:[(0,f.jsxs)(A.JX,{className:"col",lg:4,children:[(0,f.jsx)("h4",{children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"}),(0,f.jsx)("div",{className:"selects",children:(0,f.jsx)(N.Z,{defaultValue:i,onChange:he,placeholder:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c",options:pe})}),(0,f.jsx)("h4",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e"}),(0,f.jsxs)(A.X2,{className:"row",children:[(0,f.jsx)(A.JX,{className:"col_upload",lg:6,children:1==de.Loading?(0,f.jsx)("div",{className:"spinss",children:(0,f.jsx)(C.Z,{indicator:Ae})}):1==de.Success?(0,f.jsx)(w.Z,{width:"100%",height:"100%",style:{aspectRatio:"1 / 1",borderRadius:"20px",zIndex:"99999999"},src:de.data}):(0,f.jsx)(w.Z,{width:"100%",height:"100%",style:{aspectRatio:"1 / 1",borderRadius:"20px",zIndex:"99999999"},src:e.image})}),(0,f.jsx)(A.JX,{className:"col_upload",lg:6,children:1==de.Loading?(0,f.jsx)("div",{className:"spins",children:(0,f.jsx)(C.Z,{indicator:Ae})}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("input",{type:"file",id:"file",onChange:ue}),(0,f.jsx)("label",{for:"file",class:"custom-file-upload",children:(0,f.jsxs)("span",{className:"span-download",children:[(0,f.jsx)("ion-icon",{name:"cloud-download-outline"}),(0,f.jsx)("span",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u043e\u0442\u043e"})]})})]})}),(0,f.jsx)(A.JX,{lg:12,children:(0,f.jsxs)("div",{className:"infor_box",children:[(0,f.jsxs)("p",{children:[(0,f.jsx)("span",{children:"\u0424\u043e\u0440\u043c\u0430\u0442: "}),"PNG, JPEG, JPG, SVG. \u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c\u043e\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 ",(0,f.jsx)("span",{children:"1080\xd71080"})]}),(0,f.jsxs)("p",{children:[" ",(0,f.jsx)("span",{children:"\u0420\u0430\u0437\u043c\u0435\u0440: "}),"\u0440\u0430\u0437\u043c\u0435\u0440 \u0444\u0430\u0439\u043b\u0430 \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0442\u044c 5 MB"]})]})})]})]}),(0,f.jsxs)(A.JX,{className:"col",lg:8,children:[(0,f.jsx)("h4",{children:"\u0418\u043c\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430"}),(0,f.jsx)(b.Z,{type:"text",defaultValue:e.title_uz,placeholder:"uz",onChange:function(e){return v(e.currentTarget.value)}}),(0,f.jsx)(b.Z,{type:"text",defaultValue:e.title_ru,placeholder:"ru",onChange:function(e){return k(e.currentTarget.value)}}),(0,f.jsx)(b.Z,{type:"text",defaultValue:e.title_en,placeholder:"en",onChange:function(e){return K(e.currentTarget.value)}}),(0,f.jsxs)(A.X2,{children:[(0,f.jsxs)(A.JX,{className:"col",lg:12,children:[(0,f.jsx)("h4",{children:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),(0,f.jsx)("textarea",{className:"textarea_products",defaultValue:e.description_uz,placeholder:"\u0443\u0437\u0431\u0435\u043a\u0441\u043a\u0438\u0439",required:!0,onChange:function(e){return P(e.currentTarget.value)},rows:"10",cols:"120"})]}),(0,f.jsx)(A.JX,{className:"col",lg:12,children:(0,f.jsx)("textarea",{className:"textarea_products",defaultValue:e.description_ru,placeholder:"\u0440\u0443\u0441\u0441\u043a\u0438\u0439",required:!0,onChange:function(e){return G(e.currentTarget.value)},rows:"10",cols:"120"})}),(0,f.jsx)(A.JX,{className:"col",lg:12,children:(0,f.jsx)("textarea",{className:"textarea_products",defaultValue:e.description_en,placeholder:"\u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439",required:!0,onChange:function(e){return M(e.currentTarget.value)},rows:"10",cols:"120"})})]})]}),(0,f.jsxs)(A.JX,{className:"col",lg:4,children:[(0,f.jsx)("h4",{children:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 2"}),(0,f.jsx)("textarea",{className:"textarea_products",placeholder:"\u0443\u0437\u0431\u0435\u043a\u0441\u043a\u0438\u0439",defaultValue:e.description2_uz,required:!0,onChange:function(e){return $(e.currentTarget.value)},rows:"10",cols:"120"})]}),(0,f.jsxs)(A.JX,{className:"col",lg:4,children:[(0,f.jsx)("h4",{children:"*"}),(0,f.jsx)("textarea",{className:"textarea_products",placeholder:"\u0440\u0443\u0441\u0441\u043a\u0438\u0439",defaultValue:e.description2_ru,required:!0,onChange:function(e){return re(e.currentTarget.value)},rows:"10",cols:"120"})]}),(0,f.jsxs)(A.JX,{className:"col",lg:4,children:[(0,f.jsx)("h4",{children:"*"}),(0,f.jsx)("textarea",{className:"textarea_products",placeholder:"\u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439",defaultValue:e.description2_en,required:!0,onChange:function(e){return ie(e.currentTarget.value)},rows:"10",cols:"120"})]})]})}):null})),(0,f.jsx)(E.Z,{type:"submit",style:{margin:"20px auto 0 auto",padding:"12px 40px",border:"2px solid #fff"},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})})})})})})},k=t(6685),_=t(131),z=t(774),X=t(3403);function K(e){var n,t=e.HandleDelete,r=e.onClickPut,s=(e.selectId,(0,o.v9)((function(e){return e.product}))),l=((0,o.v9)((function(e){return e.product})),null===(n=s.productGet)||void 0===n?void 0:n.data),i=(0,o.I0)();(0,a.useEffect)((function(){i((0,Q.mF)())}),[]);(0,o.v9)((function(e){return e.category.categoryGet.data})).find((function(e){return e.id==window.localStorage.getItem("selectId")}));var c=[];l.map((function(e,n){var s;c.push({key:e.id,data:n+1,"\u0438\u043c\u044f\u0432\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435":null===e||void 0===e||null===(s=e.category)||void 0===s?void 0:s.title_ru,"\u0424\u043e\u0442\u043e":(0,f.jsx)(w.Z,{width:60,height:"100%",style:{aspectRatio:"1 / 1",borderRadius:"20px",objectFit:"cover"},src:e.image,fallback:"data:image/png;base64,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"}),"\u0438\u043c\u044f\u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430":(0,f.jsx)(_.Z,{color:"#1fab8a",title:(0,f.jsxs)("div",{className:"tooltip_box",children:[(0,f.jsxs)("span",{children:["\u0443\u0437\u0431\u0435\u043a\u0441\u043a\u0438\u0439: ",(0,f.jsx)("span",{style:{whiteSpace:"pre-wrap"},children:e.title_uz})]}),(0,f.jsxs)("span",{children:["\u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439: ",(0,f.jsx)("span",{style:{whiteSpace:"pre-wrap"},children:e.title_en})]})]}),children:(0,f.jsx)("span",{className:"curson",style:{whiteSpace:"pre-wrap"},children:e.title_ru})}),"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435":(0,f.jsx)(_.Z,{color:"#1fab8a",title:(0,f.jsxs)("div",{className:"tooltip_box",children:[(0,f.jsxs)("span",{children:["\u0443\u0437\u0431\u0435\u043a\u0441\u043a\u0438\u0439: ",(0,f.jsx)("span",{children:e.description_uz})]}),(0,f.jsxs)("span",{children:["\u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439: ",(0,f.jsx)("span",{children:e.description_en})]})]}),children:(0,f.jsx)("span",{className:"curson",children:e.description_ru})}),"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u04352":(0,f.jsx)(_.Z,{color:"#1fab8a",title:(0,f.jsxs)("div",{className:"tooltip_box",children:[(0,f.jsxs)("span",{children:["\u0443\u0437\u0431\u0435\u043a\u0441\u043a\u0438\u0439: ",(0,f.jsx)("span",{children:e.description2_uz})]}),(0,f.jsxs)("span",{children:["\u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439: ",(0,f.jsx)("span",{children:e.description2_en})]})]}),children:(0,f.jsx)("span",{className:"curson",children:e.description2_ru})}),"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435":(0,f.jsxs)("div",{className:"boxx",children:[(0,f.jsx)("div",{className:"btn-wraps",children:(0,f.jsx)("button",{onClick:r,id:e.id,children:(0,f.jsx)("i",{class:"bx bx-message-square-edit"})})}),(0,f.jsx)(z.Z,{wrap:!0,children:(0,f.jsx)(X.Z,{trigger:"click",placement:"rightBottom",content:(0,f.jsxs)("div",{className:"content_delete_box",children:[(0,f.jsx)("p",{children:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u0442\u0443 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f?"}),(0,f.jsxs)("p",{children:["\u041f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0439 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439 \u0432\u0441\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0430\u0449\u0430\u044f ",(0,f.jsx)("br",{})," \u0434\u0430\u043d\u043d\u043e\u0439 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043b\u0435\u043d\u044b \u0431\u0435\u0437\u0432\u043e\u0437\u0440\u0430\u0442\u043d\u043e"]}),(0,f.jsxs)("div",{className:"btn_wrap_delete",children:[(0,f.jsx)("button",{className:"no_btn",children:"\u041d\u0435\u0442"}),(0,f.jsx)("button",{onClick:t,id:e.id,className:"yes_btn",children:"\u0434\u0430"})]})]}),title:(0,f.jsxs)("div",{className:"delete_box",children:[(0,f.jsx)("i",{class:"bx bxs-error-circle"}),(0,f.jsxs)("span",{children:["\u0423\u0434\u0430\u043b\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f ",(0,f.jsx)("span",{children:e.title_ru})]})]}),children:(0,f.jsx)("div",{className:"btn-wrap",children:(0,f.jsx)("button",{id:e.id,children:(0,f.jsx)("i",{class:"bx bxs-trash"})})})})})]})})}));return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(k.Z,{bordered:!0,columns:[{title:"\u2116",dataIndex:"data",key:"data",fixed:"left",align:"center",width:"50px"},{title:"\u0424\u043e\u0442\u043e",dataIndex:"\u0424\u043e\u0442\u043e",key:"\u0424\u043e\u0442\u043e",fixed:"left",width:60,align:"center"},{title:"\u0438\u043c\u044f \u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435",dataIndex:"\u0438\u043c\u044f\u0432\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435",key:"\u0438\u043c\u044f\u0432\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435",fixed:"left",width:120,align:"center"},{title:"\u0418\u043c\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430",dataIndex:"\u0438\u043c\u044f\u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430",key:"\u0438\u043c\u044f\u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430",fixed:"left",width:100},{title:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",dataIndex:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",key:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"},{title:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 2",dataIndex:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u04352",key:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u04352"},{title:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435",dataIndex:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435",key:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435",fixed:"right",align:"center",width:100}],data:c,pagination:!1,scroll:{x:1500,y:320}})})}var R=function(e){var n=e.open,t=e.handleClose,r=(0,o.I0)(),l=(0,a.useState)(null),i=(0,s.Z)(l,2),x=i[0],p=i[1],h=(0,a.useState)(),g=(0,s.Z)(h,2),A=g[0],j=g[1],E=(0,a.useState)(!1),v=(0,s.Z)(E,2),Q=v[0],N=v[1],Z=(0,a.useState)(!1),b=(0,s.Z)(Z,2),C=b[0],w=b[1];(0,a.useEffect)((function(){r((0,c.xZ)())}),[]);var y=(0,a.useState)(!1),B=(0,s.Z)(y,2),S=B[0],k=B[1],_=function(){var e=(0,u.Z)((0,d.Z)().mark((function e(n){return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r((0,c.To)(n.currentTarget.id));case 2:r((0,c.xZ)()),N(!0);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(I,{setSelectId:p,selectId:x,Open:n,HandleClose:t,setLoadings:N}),(0,f.jsx)(K,{HandleDelete:_,loadings:Q,onClickPut:function(e){j(e.currentTarget.id),k(!0)},setLoadings:N,selectId:x}),(0,f.jsx)(m,{productId:A,openDelete:C,handleCloseDelete:function(){return w(!1)}}),(0,f.jsx)(J,{setLoadings:N,setSelectId:p,selectId:x,put_id:A,openPut:S,handleClosePut:function(){k(!1)}})]})},F=t(7332),T=t(7621);var P=function(){var e=(0,o.v9)((function(e){return e.product})),n=(0,a.useState)(!1),t=(0,s.Z)(n,2),r=t[0],d=t[1],u=(0,o.I0)();(0,a.useEffect)((function(){u((0,c.xZ)())}),[]);var x=function(){d(!0)},p=function(){d(!1)};return!0===e.productDelete.Success&&window.location.reload(),"false"==window.localStorage.getItem("checked")?(0,f.jsx)(F.Z,{children:(0,f.jsxs)(i.t4,{style:{marginTop:"112px"},children:[(0,f.jsx)(l.Z,{title:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442",onClick:x,textBtn:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442"}),(0,f.jsx)(R,{handleClose:p,open:r})]})}):(0,f.jsx)(T.Z,{children:(0,f.jsxs)(i.t4,{children:[(0,f.jsx)(l.Z,{title:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442",onClick:x,textBtn:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442"}),(0,f.jsx)(R,{handleClose:p,open:r})]})})}}}]);
//# sourceMappingURL=844.a1bd4fa9.chunk.js.map