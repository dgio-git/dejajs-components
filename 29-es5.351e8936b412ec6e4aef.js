function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _get(e,t,n){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=_superPropBase(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{MFMR:function(e,t,n){"use strict";n.r(t);var o,r=n("SVse"),i=n("s7LF"),a=n("Dxy4"),c=n("PDjf"),l=n("e6WT"),s=n("M9ds"),d=n("l0rg"),p=n("Cvov"),u=n("fpaK"),m=n("MPFR"),f=n("LoOo"),h=n("KYkd"),g=n("iInd"),b=n("pLZG"),v=n("lJxs"),C=n("iELJ"),w=n("Z5sx"),y=n("8Y7J"),P=n("Drjz"),S=((o=function(){function e(t,n){_classCallCheck(this,e),this.config=t,this.materialColors=n,this.selectedColor=new w.b(233,30,99)}return _createClass(e,[{key:"onColorPickerChange",value:function(e){var t=new m.a("color-change","ground-control");t.data=e,this.config.dejaPopupCom$.next(t)}}]),e}()).\u0275fac=function(e){return new(e||o)(y["\u0275\u0275directiveInject"](C.a),y["\u0275\u0275directiveInject"](w.B))},o.\u0275cmp=y["\u0275\u0275defineComponent"]({type:o,selectors:[["deja-dummy"]],decls:1,vars:2,consts:[["name","4",3,"colors","ngModel","ngModelChange"]],template:function(e,t){1&e&&(y["\u0275\u0275elementStart"](0,"deja-color-selector",0),y["\u0275\u0275listener"]("ngModelChange",(function(e){return t.selectedColor=e}))("ngModelChange",(function(e){return t.onColorPickerChange(e)})),y["\u0275\u0275elementEnd"]()),2&e&&y["\u0275\u0275property"]("colors",t.materialColors.colors)("ngModel",t.selectedColor)},directives:[P.a,i.NgControlStatus,i.NgModel],styles:[""]}),o),_=n("amjW"),x=n("Q2Ze"),O=n("xTAs");function k(e,t){if(1&e&&(y["\u0275\u0275elementStart"](0,"div"),y["\u0275\u0275text"](1),y["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;y["\u0275\u0275advance"](1),y["\u0275\u0275textInterpolate"](n)}}function j(e,t){1&e&&(y["\u0275\u0275elementStart"](0,"div",5),y["\u0275\u0275element"](1,"deja-popup-actions"),y["\u0275\u0275elementEnd"]())}var M,E=((M=function(e){function t(){var e;return _classCallCheck(this,t),(e=_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))).items=[],e}return _inherits(t,e),_createClass(t,[{key:"ngOnInit",value:function(){_get(_getPrototypeOf(t.prototype),"ngOnInit",this).call(this),this.content="Some content here.",this.inputparam=this.config.data.test;for(var e=0;e<50;e++)this.items.push(e)}},{key:"doAction",value:function(e){if(!e)return!1;switch(this.actionSelected=e,e.name){case"undo":this.inputText="";break;default:this.dialogRef.close(e)}}}]),t}(m.c)).\u0275fac=function(e){return I(e||M)},M.\u0275cmp=y["\u0275\u0275defineComponent"]({type:M,selectors:[["custom-dialog"]],features:[y["\u0275\u0275InheritDefinitionFeature"]],decls:13,vars:6,consts:[[3,"config","actionSelected"],["mat-dialog-content","",1,"deja-popup-custom-content"],["matInput","","type","text","placeholder","Input text",3,"ngModel","ngModelChange"],[4,"ngFor","ngForOf"],["mat-dialog-actions","","class","deja-popup-custom-actions",4,"ngIf"],["mat-dialog-actions","",1,"deja-popup-custom-actions"]],template:function(e,t){1&e&&(y["\u0275\u0275elementStart"](0,"deja-popup-toolbar",0),y["\u0275\u0275listener"]("actionSelected",(function(e){return t.doAction(e)})),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](1,"div",1),y["\u0275\u0275elementStart"](2,"p"),y["\u0275\u0275text"](3),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](4,"p"),y["\u0275\u0275text"](5," This is an input parameter: '"),y["\u0275\u0275elementStart"](6,"b"),y["\u0275\u0275text"](7),y["\u0275\u0275elementEnd"](),y["\u0275\u0275text"](8,"'"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](9,"mat-form-field"),y["\u0275\u0275elementStart"](10,"input",2),y["\u0275\u0275listener"]("ngModelChange",(function(e){return t.inputText=e})),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275template"](11,k,2,1,"div",3),y["\u0275\u0275elementEnd"](),y["\u0275\u0275template"](12,j,2,0,"div",4)),2&e&&(y["\u0275\u0275property"]("config",t.config),y["\u0275\u0275advance"](3),y["\u0275\u0275textInterpolate"](t.content),y["\u0275\u0275advance"](4),y["\u0275\u0275textInterpolate"](t.inputparam),y["\u0275\u0275advance"](3),y["\u0275\u0275property"]("ngModel",t.inputText),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("ngForOf",t.items),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("ngIf",!!t.config.hasActions()))},directives:[_.a,x.b,l.a,i.DefaultValueAccessor,i.NgControlStatus,i.NgModel,r.m,r.n,O.a],styles:["[_nghost-%COMP%]{\n            overflow: hidden;\n        }\n        .deja-popup-custom-content[_ngcontent-%COMP%]{\n            overflow: auto;\n            height: 300px;\n            padding: 0 1rem;\n        }\n        .deja-popup-custom-actions[_ngcontent-%COMP%]{\n            padding: 1rem;\n        }"]}),M),I=y["\u0275\u0275getInheritedFactory"](E),R=n("oTn2"),U=n("k6xb"),D=n("n0hM");function A(e,t){if(1&e){var n=y["\u0275\u0275getCurrentView"]();y["\u0275\u0275elementStart"](0,"deja-snackbar",5),y["\u0275\u0275listener"]("onAnimationDone",(function(e){return y["\u0275\u0275restoreView"](n),y["\u0275\u0275nextContext"]().openGate=!1})),y["\u0275\u0275elementStart"](1,"deja-message-box",6),y["\u0275\u0275text"](2),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"]()}if(2&e){var o=y["\u0275\u0275nextContext"]();y["\u0275\u0275property"]("duration",2e3),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("type",o.message.type),y["\u0275\u0275advance"](1),y["\u0275\u0275textInterpolate1"](" ",o.message.text," ")}}var F,T=g.f.forChild([{path:"",component:(F=function(){function e(t,n){var o=this;_classCallCheck(this,e),this.dejaPopupService=t,this.changeDetectorRef=n,this.dummyPdfUrl="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",this.dummyImgUrl="http://lorempixel.com/800/600/abstract/",this.message={type:"info",text:""},this.openGate=!1,this.dejaPopupService.dejaPopupCom$.pipe(Object(b.a)((function(e){return!!e&&"popup-tray"!==e.target&&!e.isFinalAction})),Object(v.a)((function(e){o.message.type="primary",o.message.text=e.label||e.name,o.openGate=!0,"color-change"===e.name&&(o.hoveredColor=e.data),o.changeDetectorRef.markForCheck()}))).subscribe()}return _createClass(e,[{key:"askConfirmation1",value:function(){var e=this,t=new m.b("save","Save","save"),n=new m.b("cancel","Cancel","cancel");this.dejaPopupService.openInline("Inscription \xe0 la formation","Etes-vous sure de vouloir faire cela ?",[t,n]).subscribe((function(t){e.showResponse(t)}))}},{key:"askConfirmation2",value:function(){var e=this,t=new m.d;t.width="530px",t.position={bottom:"50px",right:"50px"},t.disableClose=!0,t.toolbarColor="danger";var n=new m.b("yes","Yes","check"),o=new m.b("no","No","not_interested"),r=new m.b("cancel","Cancel","cancel");this.dejaPopupService.openInline("System failure!","<p>You don't want to <b>Cancel</b> the operation.<br> Or you don't? </p>",[n,o,r],t).subscribe((function(t){e.showResponse(t)}))}},{key:"askConfirmationCustom",value:function(){var e=this,t=new m.d;t.data={test:"abcde"},t.toolbarIconName="accessibility",t.toolbarColor="accent",t.title="Dialog custom",t.actions=[new m.b("confirm","Confirm","done"),new m.b("undo","Undo","undo"),new m.b("cancel","Cancel","cancel")],this.dejaPopupService.openCustom(E,t).subscribe((function(t){e.showResponse(t)}))}},{key:"showUrlImg",value:function(){var e=this,t=new m.d;t.height="600px",t.width="800px",this.dejaPopupService.openUrl(this.dummyImgUrl,t).subscribe((function(t){e.showResponse(t)}))}},{key:"showUrlPdf",value:function(e){var t=this;e||(e=new m.d),e.actions=[new m.b("close","Close","close")],e.toolbarType="window",e.toolbarColor="warn",this.dejaPopupService.openUrl(this.dummyPdfUrl,e).subscribe((function(e){t.showResponse(e)}))}},{key:"showUrlPdfFullscreen",value:function(){var e=new m.d;e.fullscreen=!0,this.showUrlPdf(e)}},{key:"useAdvancedComponent",value:function(){var e=this,t=new m.d;t.actions=[new m.b("close","Close","close")],t.toolbarType="window",t.padding=!0,t.content=["One Line of Content","Two Lines of Content","Many Lines of Content"],this.dejaPopupService.openAdvanced$(t).subscribe((function(t){e.showResponse(t)}))}},{key:"showPopUp",value:function(){var e=this,t=new m.d;t.title="Movable ".concat(m.d.dialogCount+1),t.content="<h2>Movable Popup No Modal</h2>",t.content=["<p><h3>First</h3> html line</p>","<p><h3>Second</h3> html line</p><br><div> One More Line</div>"],t.padding=!0,t.actions=[new m.b("close","Close","close")],t.width="500px",t.height="400px",t.toolbarColor="warn",this.dejaPopupService.openPopUp(t).subscribe((function(t){e.showResponse(t)}))}},{key:"showPopUpPdf",value:function(){var e=this,t=new m.d;t.title="Pdf ".concat(m.d.dialogCount),t.url=this.dummyPdfUrl,t.padding=!1,t.toolbarIconName="photo_camera",t.toolbarColor="accent",t.toolbarActions=[new m.b("account","User","account_circle",!1),new m.b("view","Show","visibility",!1)],t.ensureDimension(),this.dejaPopupService.openPopUp(t).pipe(Object(b.a)((function(e){return!!e}))).subscribe((function(t){e.showResponse(t)}))}},{key:"showComponentInjection",value:function(){var e=this,t=new m.d;t.title="Pick a color",t.height="auto",t.width="auto",t.contentComponentRef=S,this.dejaPopupService.openPopUp(t).subscribe((function(t){e.showResponse(t)}))}},{key:"showResponse",value:function(e){this.message.type=e.accepted?"success":"warn",this.message.text=e.lastAction.label.length?e.lastAction.label:e.lastAction.name,this.openGate=!0,this.changeDetectorRef.markForCheck()}}]),e}(),F.\u0275fac=function(e){return new(e||F)(y["\u0275\u0275directiveInject"](m.f),y["\u0275\u0275directiveInject"](y.ChangeDetectorRef))},F.\u0275cmp=y["\u0275\u0275defineComponent"]({type:F,selectors:[["popup-demo"]],decls:44,vars:3,consts:[["id","demo",1,"demo-card","demo-basic"],["color","primary"],["id","button-container"],["mat-raised-button","",1,"mat-primary",3,"click"],["alignment","bottom",3,"duration","onAnimationDone",4,"ngIf"],["alignment","bottom",3,"duration","onAnimationDone"],["horizontal","",3,"type"]],template:function(e,t){1&e&&(y["\u0275\u0275elementStart"](0,"mat-card",0),y["\u0275\u0275elementStart"](1,"mat-toolbar",1),y["\u0275\u0275text"](2,"Dialogs"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](3,"mat-card-content"),y["\u0275\u0275elementStart"](4,"div",2),y["\u0275\u0275elementStart"](5,"div"),y["\u0275\u0275elementStart"](6,"button",3),y["\u0275\u0275listener"]("click",(function(e){return t.askConfirmation1()})),y["\u0275\u0275text"](7,"Save or Cancel"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](8,"div"),y["\u0275\u0275elementStart"](9,"button",3),y["\u0275\u0275listener"]("click",(function(e){return t.askConfirmation2()})),y["\u0275\u0275text"](10,"Yes, No, Cancel"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](11,"div"),y["\u0275\u0275elementStart"](12,"button",3),y["\u0275\u0275listener"]("click",(function(e){return t.askConfirmationCustom()})),y["\u0275\u0275text"](13,"Custom Dialog"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](14,"div"),y["\u0275\u0275elementStart"](15,"button",3),y["\u0275\u0275listener"]("click",(function(e){return t.showUrlImg()})),y["\u0275\u0275text"](16,"Show an image from an url"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](17,"div"),y["\u0275\u0275elementStart"](18,"button",3),y["\u0275\u0275listener"]("click",(function(e){return t.useAdvancedComponent()})),y["\u0275\u0275text"](19,"Advanced Dialog"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](20,"div"),y["\u0275\u0275elementStart"](21,"button",3),y["\u0275\u0275listener"]("click",(function(e){return t.showUrlPdf()})),y["\u0275\u0275text"](22,"Show a pdf document from an url"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](23,"div"),y["\u0275\u0275elementStart"](24,"button",3),y["\u0275\u0275listener"]("click",(function(e){return t.showUrlPdfFullscreen()})),y["\u0275\u0275text"](25,"Show a pdf document starting in fullscreen"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](26,"br"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](27,"mat-card",0),y["\u0275\u0275elementStart"](28,"mat-toolbar",1),y["\u0275\u0275text"](29,"Popup"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](30,"mat-card-content"),y["\u0275\u0275elementStart"](31,"div",2),y["\u0275\u0275elementStart"](32,"div"),y["\u0275\u0275elementStart"](33,"button",3),y["\u0275\u0275listener"]("click",(function(e){return t.showPopUp()})),y["\u0275\u0275text"](34,"Pop Up"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](35,"div"),y["\u0275\u0275elementStart"](36,"button",3),y["\u0275\u0275listener"]("click",(function(e){return t.showPopUpPdf()})),y["\u0275\u0275text"](37,"Pop Up Pdf"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](38,"div"),y["\u0275\u0275elementStart"](39,"button",3),y["\u0275\u0275listener"]("click",(function(e){return t.showComponentInjection()})),y["\u0275\u0275text"](40,"Component injection"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](41,"br"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275template"](42,A,3,3,"deja-snackbar",4),y["\u0275\u0275element"](43,"deja-popup-tray")),2&e&&(y["\u0275\u0275advance"](30),y["\u0275\u0275styleProp"]("background-color",t.hoveredColor&&t.hoveredColor.toHex()),y["\u0275\u0275advance"](12),y["\u0275\u0275property"]("ngIf",t.openGate))},directives:[c.a,d.a,c.c,a.b,r.n,R.a,U.a,D.a],styles:["[_nghost-%COMP%]   #button-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;line-height:3rem}[_nghost-%COMP%]   #button-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding-right:1rem}[_nghost-%COMP%]   #demo[_ngcontent-%COMP%]   .h1[_ngcontent-%COMP%]{margin-top:2rem}[_nghost-%COMP%]   #demo.demo-card[_ngcontent-%COMP%]{margin:16px}[_nghost-%COMP%]   #demo.demo-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding:16px;display:flex;flex-direction:column}[_nghost-%COMP%]   #demo.demo-basic[_ngcontent-%COMP%]{padding:0}[_nghost-%COMP%]   #demo.demo-full-width[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   #demo.demo-icons[_ngcontent-%COMP%]{font-size:100%;height:inherit;vertical-align:top;width:inherit}[_nghost-%COMP%]   #demo[_ngcontent-%COMP%]   #flight[_ngcontent-%COMP%]{display:flex;align-items:center}"]}),F)},{path:"**",redirectTo:"",pathMatch:"full"}]);n.d(t,"DejaPopupDemoModule",(function(){return L}));var N,L=((N=function e(){_classCallCheck(this,e)}).\u0275mod=y["\u0275\u0275defineNgModule"]({type:N}),N.\u0275inj=y["\u0275\u0275defineInjector"]({factory:function(e){return new(e||N)},imports:[[r.c,i.FormsModule,a.c,c.d,s.c,d.b,l.b,p.a,m.e,h.a,f.a,u.a,T]]}),N)}}]);