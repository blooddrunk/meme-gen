(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(e,t,n){e.exports=n.p+"static/media/luxun_1.77bdf646.jpg"},220:function(e,t,n){e.exports=n(549)},549:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),l=n.n(o),i=n(25),c=n(26),u=n(28),s=n(27),m=n(29),d=n(218),h=n(23),g=n(33),p=n(216),f=n.n(p),b=n(63),E=n(195),v=n.n(E),x=n(196),y=n.n(x),w=n(197),j=n.n(w),C=Object(g.createMuiTheme)({palette:{primary:y.a,secondary:j.a},typography:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}}),O=n(552),k=n(554),S=n(553),I=n(34),T=n(550),A=n(35),F=n(201),R=n.n(F),L=n(202),D=n.n(L),M=n(21),P=n.n(M),U=n(20),_=n.n(U);function W(){var e=Object(I.a)(["\n  flex-grow: 1;\n  padding: 24px;\n"]);return W=function(){return e},e}function z(){var e=Object(I.a)(["\n  flex-grow: 1;\n  padding-left: 24px;\n"]);return z=function(){return e},e}function B(){var e=Object(I.a)(["\n  text-decoration: none;\n  color: inherit;\n"]);return B=function(){return e},e}function H(){var e=Object(I.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n"]);return H=function(){return e},e}var N=A.a.div(H()),V=Object(A.a)(T.a)(B()),q=Object(A.a)(P.a)(z()),G=A.a.section(W()),Y=function(e){var t=e.children;return r.a.createElement(N,null,r.a.createElement(R.a,{position:"sticky"},r.a.createElement(D.a,null,r.a.createElement(P.a,{variant:"title",color:"inherit"},r.a.createElement(V,{to:"/"},"MEME")),r.a.createElement(q,{color:"inherit"},"For modern browsers only"),r.a.createElement(_.a,{color:"inherit"},"Gallery"))),r.a.createElement(G,null,t))},J=n(3),Q=n(41),$=n.n(Q),K=n(119),X=n.n(K),Z=n(65),ee=n.n(Z),te=n(214),ne=n.n(te),ae=n(50),re=n.n(ae),oe=n(203),le=n(87),ie=n.n(le),ce=n(88),ue=n.n(ce),se=n(42),me=n.n(se),de=n(51),he=n.n(de),ge=n(205),pe=n.n(ge),fe=n(206),be=n.n(fe),Ee=n(207),ve=n.n(Ee),xe=n(121),ye=n.n(xe),we=n(66),je=n.n(we),Ce=n(89),Oe=n.n(Ce),ke=n(208),Se=n.n(ke),Ie=n(86),Te=n.n(Ie),Ae=n(52),Fe=n(204),Re=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).componentDidMount=function(){Object(J.i)(function(){n._createImage(n.props.builder.imageSrc)}),Object(J.x)(function(){return{dictum:n.props.builder.dictum,author:n.props.builder.author,textColor:n.props.builder.textColor}},function(e){n.shouldAdjustText=!0})},n.componentDidUpdate=function(e,t){(t.image!==n.state.image||n.shouldAdjustText)&&(n._adjustText(),n.shouldAdjustText=!1)},n.handleImageReload=function(){n._createImage(n.props.builder.imageSrc)},n.handleSnackbarClose=function(){n.setState({error:null})},n._computeScale=Object(Fe.a)(function(e,t,n){if(!n)return 1;var a=Math.min(e,n.width)/n.width,r=Math.min(t,n.height)/n.height;return Math.min(a,r,1)}),n._computeSize=function(e,t,n,a){return e?{width:e.width*t,height:e.height*t}:{width:n,height:a}},n.state={image:null,error:null},n.authorTextRef=r.a.createRef(),n.dictumTextRef=r.a.createRef(),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"_createImage",value:function(e){var t=this;if(e){var n=this.props.builder;n.toggleLoading(!0);var a=new window.Image;a.src=e,a.onload=function(){n.toggleLoading(!1),t.setState({image:a})},a.onerror=function(e){n.toggleLoading(!1),n.changeImage(""),t.setState({error:e})}}}},{key:"_adjustText",value:function(){var e=this.props.forwardRef.current,t=this.authorTextRef.current,n=this.dictumTextRef.current;if(e&&t&&n){var a=e.getStage().getHeight()-t.getHeight();t.y(a),n.y(a-n.getHeight())}}},{key:"render",value:function(){var e=this.props,t=e.builder,n=t.dictum,o=t.author,l=t.textColor,i=e.containerWidth,c=e.containerHeight,u=e.forwardRef,s=this.state,m=s.image,d=s.error,h=this._computeScale(i,c,m),g=this._computeSize(m,h,i,i),p=g.width,f=g.height;return r.a.createElement(a.Fragment,null,r.a.createElement(Ae.Stage,{ref:u,width:p,height:f},r.a.createElement(Ae.Layer,null,r.a.createElement(Ae.Image,{image:m,preventDefault:!1,scale:{x:h,y:h}}),m&&r.a.createElement(a.Fragment,null,r.a.createElement(Ae.Text,{ref:this.dictumTextRef,width:p,x:0,y:f,fill:l,text:n,fontSize:36,align:"center",verticalAlign:"bottom",preventDefault:!1,draggable:!0}),r.a.createElement(Ae.Text,{ref:this.authorTextRef,width:p,x:0,y:f,fill:l,text:o&&"\u2014\u2014".concat(o),padding:16,fontSize:30,align:"right",verticalAlign:"bottom",preventDefault:!1,draggable:!0})))),r.a.createElement(Te.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:!!d,autoHideDuration:3e3,onClose:this.handleSnackbarClose,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id"},"Failed to loading image, please check the URL"),action:[r.a.createElement(_.a,{key:"reload",color:"secondary",size:"small",onClick:this.handleImageReload},"RETRY")]}))}}]),t}(a.Component);Re.defaultProps={containerWidth:600,containerHeight:600};var Le=$()(Object(h.b)(function(e){return{builder:e.store.builder}}),h.c)(Re);function De(){var e=Object(I.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return De=function(){return e},e}var Me=Object(A.a)(me.a)(De()),Pe={marginLeft:8},Ue=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).error=null,a.handleFileUpload=function(e){var t=e.target.files[0];if(t){var n=new FileReader;n.addEventListener("load",function(){a.props.builder.changeImage(n.result)}),n.readAsDataURL(t)}},a.handleFileDownload=function(){var e=Object(oe.a)(re.a.mark(function e(t){var r,o;return re.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(1).then(n.t.bind(null,551,7));case 2:r=e.sent.default,o=a.canvasRef.current.getStage().toCanvas();try{o.toBlob(function(e){r(e,"pretty image.png")})}catch(t){a.error=t}case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.handleFileCopy=function(){},a.handleExternalImageSrcChange=function(e){var t=e.target;a.props.builder.changeExternalImage(t.value)},a.handleExternalImageLoad=function(){var e=a.props.builder;e.changeImage(e.externalImageSrc)},a.handleSnackbarClose=function(){a.error=null},a.handleExternalImagePick=function(){a.props.builder.pickExternalImage()},a.canvasRef=r.a.createRef(),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.builder,t=e.externalImageSrc,n=e.externalImageFetching;return r.a.createElement(a.Fragment,null,r.a.createElement(ie.a,null,r.a.createElement(ue.a,{title:"\u56fe\u7247\u9884\u89c8"}),r.a.createElement(Me,null,r.a.createElement(Le,{forwardRef:this.canvasRef})),r.a.createElement(he.a,null,r.a.createElement("input",{onChange:this.handleFileUpload,accept:"image/*",style:{display:"none"},id:"upload-image",type:"file"}),r.a.createElement("label",{htmlFor:"upload-image"},r.a.createElement(_.a,{component:"span",color:"primary"},"Upload",r.a.createElement(pe.a,{style:Pe}))),r.a.createElement(_.a,{color:"secondary",onClick:this.handleFileDownload},"Save",r.a.createElement(be.a,{style:Pe})),r.a.createElement(a.Fragment,null,r.a.createElement(ye.a,{disableTouchListener:!0,title:"Not supported yet!"},r.a.createElement(_.a,{color:"default",onClick:this.handleFileCopy},"Copy",r.a.createElement(ve.a,{style:Pe}))))),r.a.createElement(me.a,null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(P.a,{color:"textSecondary",gutterBottom:!0},"Text supports drag & drop")),r.a.createElement("li",null,r.a.createElement(P.a,{color:"textSecondary",gutterBottom:!0},"Image might overflow with insufficient space, click Save button to preview whole")),r.a.createElement("li",null,r.a.createElement(P.a,{color:"textSecondary"},"Failed to find a clipboard api to programmatically copy canvas/image, right click and select 'Copy image' works though")))),r.a.createElement(me.a,null,r.a.createElement(je.a,{label:"External source",value:t,placeholder:"Use external image source",helperText:"Enter an valid image source and click 'APPLY'",fullWidth:!0,disabled:n,margin:"normal",onChange:this.handleExternalImageSrcChange,InputProps:{endAdornment:r.a.createElement(Oe.a,{position:"end"},r.a.createElement(ye.a,{disableTouchListener:!0,title:"Apply"},r.a.createElement("div",null,r.a.createElement(ee.a,{disabled:!t,onClick:this.handleExternalImageLoad},r.a.createElement(Se.a,null)))))}})),r.a.createElement(he.a,null,r.a.createElement(_.a,{onClick:this.handleExternalImagePick},"I'm Feeling Lucky"))),r.a.createElement(Te.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:!!this.error,autoHideDuration:3e3,onClose:this.handleSnackbarClose,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id"},"External image may not be downloaded this way. Right click and select 'Save image as...' instead"),action:[r.a.createElement(_.a,{key:"close",color:"secondary",size:"small",onClick:this.handleSnackbarClose},"CLOSE")]}))}}]),t}(a.Component);Object(J.m)(Ue,{error:J.v});var _e=$()(Object(h.b)(function(e){return{builder:e.store.builder}}),h.c)(Ue),We=n(122),ze=n.n(We),Be=n(211),He=n.n(Be),Ne=n(210),Ve=n.n(Ne),qe=n(213),Ge=n.n(qe),Ye=n(212),Je=n.n(Ye),Qe=n(209),$e={marginLeft:8},Ke=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).handleMultilineToggle=function(e){var t=e.target;n.props.builder.toggleMultiline(t.checked)},n.handleDictumChange=function(e){var t=e.target;n.props.builder.changeDictum(t.value)},n.handleAuthorToggle=function(e){var t=e.target;n.props.builder.changeAuthor(t.checked?"\u9c81\u8fc5":"")},n.handleAuthorChange=function(e){var t=e.target;n.props.builder.changeAuthor(t.value)},n.handleColorChange=function(e){var t=e.hex;n.props.builder.changeTextColor(t)},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.builder,t=e.dictum,n=e.author,a=e.authorVisible,o=e.multiline,l=e.textColor,i=e.drawDictum,c=e.reset;return r.a.createElement(ie.a,null,r.a.createElement(ue.a,{title:"\u5185\u5bb9\u7f16\u8f91"}),r.a.createElement(me.a,null,r.a.createElement(je.a,{label:"\u6587\u5b57\u5185\u5bb9",multiline:o,value:t,placeholder:"\u8bf7\u8f93\u5165\u6587\u5b57\u5185\u5bb9",helperText:o?"\u56de\u8f66\u8fdb\u5165\u4e0b\u4e00\u884c":"\u4f7f\u7528\u53f3\u4fa7\u5f00\u5173\u5207\u6362\u591a\u884c\u6a21\u5f0f",fullWidth:!0,margin:"normal",onChange:this.handleDictumChange,InputProps:{endAdornment:r.a.createElement(Oe.a,{position:"end"},r.a.createElement(ze.a,{checked:o,onChange:this.handleMultilineToggle}))}})),r.a.createElement(he.a,null,r.a.createElement(_.a,{color:"default",variant:"contained",onClick:i},"RANDOM",r.a.createElement(Ve.a,{style:$e}))),r.a.createElement(me.a,null,r.a.createElement(P.a,{component:"p",color:"textSecondary",gutterBottom:!0},"\u8bbe\u7f6e\u6587\u5b57\u989c\u8272"),r.a.createElement(Qe.TwitterPicker,{triangle:"hide",width:"280px",color:l,colors:["#000","#f3f3f3","#f44336","#9c27b0","#673ab7","#3f51b5","#03a9f4","#009688","#ffc107","#cddc39"],onChangeComplete:this.handleColorChange})),r.a.createElement(me.a,null,r.a.createElement(He.a,{control:r.a.createElement(ze.a,{color:"primary",checked:a,onChange:this.handleAuthorToggle}),label:"\u663e\u793a\u51fa\u5904"}),r.a.createElement(Je.a,{in:a},r.a.createElement(je.a,{label:"\u51fa\u5904",value:n,placeholder:"\u8bf7\u8f93\u5165\u51fa\u5904",fullWidth:!0,margin:"normal",onChange:this.handleAuthorChange}))),r.a.createElement(he.a,null,r.a.createElement(_.a,{color:"secondary",variant:"contained",onClick:c},"RESET",r.a.createElement(Ge.a,{style:$e}))))}}]),t}(a.Component),Xe=$()(Object(h.b)(function(e){return{builder:e.store.builder}}),h.c)(Ke);function Ze(){var e=Object(I.a)(["\n  grid-column: 1 / span 2;\n  width: 100%;\n  max-width: 100%;\n  background-color: ",";\n\n  @supports (display: grid) {\n    display: none;\n  }\n"]);return Ze=function(){return e},e}function et(){var e=Object(I.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, minmax(300px, 1fr));\n  grid-gap: 24px;\n  align-items: start;\n  max-width: 1200px;\n  min-width: 300px;\n  margin: auto;\n  padding-top: 24px;\n\n  @media (max-width: 800px) {\n    grid-template-columns: none;\n  }\n"]);return et=function(){return e},e}var tt=A.a.section(et()),nt=Object(A.a)(X.a)(Ze(),function(e){return e.theme.palette.error.light}),at=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).isAlertVisible=!0,n.handleAlertClose=function(){n.isAlertVisible=!1},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.theme;return r.a.createElement(tt,null,this.isAlertVisible&&r.a.createElement(nt,{message:"Your browser seems to be out of date so that it lacks support of CSS Grid Layout.",theme:e,action:[r.a.createElement(ee.a,{key:"close","aria-label":"Close",color:"inherit",onClick:this.handleAlertClose},r.a.createElement(ne.a,null))]}),r.a.createElement(_e,null),r.a.createElement(Xe,null))}}]),t}(a.Component);Object(J.m)(at,{isAlertVisible:J.v});var rt=$()(Object(g.withTheme)(),h.c)(at),ot=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(O.a,{basename:"/meme-gen"},r.a.createElement(k.a,null,r.a.createElement(Y,{path:"/"},r.a.createElement(k.a,null,r.a.createElement(S.a,{exact:!0,component:rt,path:"/"})))))}}]),t}(a.Component),lt=Object(g.createGenerateClassName)(),it=Object(b.create)(Object(d.a)({},Object(g.jssPreset)(),{insertionPoint:document.getElementById("jss-insertion-point")})),ct=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.store;return r.a.createElement(h.a,{store:e},r.a.createElement(v.a,{jss:it,generateClassName:lt},r.a.createElement(g.MuiThemeProvider,{theme:C},r.a.createElement(a.Fragment,null,r.a.createElement(ot,null),r.a.createElement(f.a,null)))))}}]),t}(a.Component),ut=n(6),st=n(217),mt=n(123),dt=n.n(mt),ht=["\u665a\u7761\u7684\u4eba\uff0c\u6ca1\u6709\u5bf9\u8c61","\u8868\u60c5\u5305\u591a\u7684\u4eba\uff0c\u6ca1\u6709\u5bf9\u8c61","\u6211\u6ca1\u8bf4\u8fc7\u8fd9\u4e9b\u8bdd","no zuo no die","\u6211\u5c31\u9759\u9759\u5730\u770b\u7740\u4f60\u4eec\u88c5\u903c"],gt=function(){return ht[Math.floor(Math.random()*ht.length)]},pt=ut.q.model({dictum:gt(),author:"\u9c81\u8fc5",imageSrc:dt.a,imageLoading:!1,externalImageSrc:"",externalImageFetching:!1,multiline:!1,textColor:"#FFF"}).views(function(e){return{get authorVisible(){return!!e.author}}}).actions(function(e){var t=new window.AbortController,n=t.signal;return{changeDictum:function(t){e.dictum=t},drawDictum:function(){e.dictum=gt()},changeAuthor:function(t){e.author=t},changeImage:function(t){e.imageSrc=t},changeExternalImage:function(t){e.externalImageSrc=t},changeTextColor:function(t){e.textColor=t},toggleLoading:function(t){e.imageLoading=t},toggleMultiline:function(t){e.multiline=t},reset:function(){e.imageSrc=dt.a,e.dictum=gt(),e.author="\u9c81\u8fc5",e.textColor="#FFF"},pickExternalImage:Object(ut.f)(re.a.mark(function a(){var r,o,l;return re.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e.externalImageFetching?(t.abort(),t=new window.AbortController,n=t.signal):e.externalImageFetching=!0,a.prev=1,a.next=4,fetch("https://api.unsplash.com/photos/random/?client_id=".concat("556115dbc94565196eeec1ba84158924b3c6d4d54918fb1f5cb736c56d3d6982"),{signal:n});case 4:return r=a.sent,a.next=7,r.json();case 7:o=a.sent,l=o.urls.regular,e.externalImageSrc=l,e.imageSrc=l,a.next=16;break;case 13:a.prev=13,a.t0=a.catch(1),console.error(a.t0);case 16:return a.prev=16,e.externalImageFetching=!1,a.finish(16);case 19:case"end":return a.stop()}},a,this,[[1,13,16,19]])}))}}),ft=ut.q.model({builder:ut.q.optional(pt,{})}).create();Object(ut.a)(ft,st.a);var bt=ft,Et=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function vt(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(ct,{store:bt}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/meme-gen",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/meme-gen","/service-worker.js");Et?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):vt(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):vt(e)})}}()}},[[220,3,2]]]);
//# sourceMappingURL=main.cbeb17ef.chunk.js.map