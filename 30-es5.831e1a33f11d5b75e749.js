!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function n(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"4OUQ":function(t,r,o){"use strict";o.r(r),o.d(r,"DejaSnackbarDemoModule",(function(){return N}));var i=o("SVse"),c=o("s7LF"),l=o("Dxy4"),m=o("PDjf"),s=o("Tj54"),p=o("M9ds"),u=o("l0rg"),d=o("650w"),f=o("KUKF"),g=o("KYkd"),b=o("iInd"),x=o("8Y7J"),h=o("Z5sx"),y=o("Cfvw"),j=o("l5mm"),v=o("pLZG"),w=o("lJxs"),C=o("Kqap"),k=o("xbPD"),E=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Some snackbar",n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];a(this,e),this.content=t,this.gate=n},O=o("iss+");function S(e,t){1&e&&(x["\u0275\u0275elementStart"](0,"mat-card",5),x["\u0275\u0275element"](1,"deja-markdown",6),x["\u0275\u0275elementEnd"]()),2&e&&(x["\u0275\u0275advance"](1),x["\u0275\u0275property"]("url","https://raw.githubusercontent.com/DSI-HUG/dejajs-components/develop/projects/deja-js/component/snackbar/readme.md"))}function I(e,t){if(1&e){var n=x["\u0275\u0275getCurrentView"]();x["\u0275\u0275elementStart"](0,"deja-snackbar",15),x["\u0275\u0275listener"]("onAnimationDone",(function(){return x["\u0275\u0275restoreView"](n),x["\u0275\u0275nextContext"](2).simpleGate=!1})),x["\u0275\u0275elementStart"](1,"deja-message-box",16),x["\u0275\u0275text"](2," Hello world ! I'm a simple snackbar. "),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"]()}2&e&&x["\u0275\u0275property"]("duration",2e3)}function $(e,t){if(1&e){var n=x["\u0275\u0275getCurrentView"]();x["\u0275\u0275elementStart"](0,"button",20),x["\u0275\u0275listener"]("click",(function(){return x["\u0275\u0275restoreView"](n),x["\u0275\u0275nextContext"](2).$implicit.gate=!1})),x["\u0275\u0275elementStart"](1,"mat-icon"),x["\u0275\u0275text"](2,"clear"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"]()}2&e&&x["\u0275\u0275property"]("color","blank")}function P(e,t){if(1&e&&(x["\u0275\u0275elementStart"](0,"deja-snackbar",18),x["\u0275\u0275elementStart"](1,"deja-message-box",16),x["\u0275\u0275text"](2),x["\u0275\u0275template"](3,$,3,1,"ng-template",null,19,x["\u0275\u0275templateRefExtractor"]),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"]()),2&e){var n=x["\u0275\u0275nextContext"]().$implicit;x["\u0275\u0275nextContext"]();var a=x["\u0275\u0275reference"](14);x["\u0275\u0275property"]("outerContainerElement",a),x["\u0275\u0275advance"](2),x["\u0275\u0275textInterpolate1"](" ",n.content," ")}}function V(e,t){1&e&&x["\u0275\u0275template"](0,P,5,2,"deja-snackbar",17),2&e&&x["\u0275\u0275property"]("ngIf",t.$implicit.gate)}function M(e,t){if(1&e){var n=x["\u0275\u0275getCurrentView"]();x["\u0275\u0275elementStart"](0,"button",20),x["\u0275\u0275listener"]("click",(function(){return x["\u0275\u0275restoreView"](n),x["\u0275\u0275nextContext"](2).$implicit.gate=!1})),x["\u0275\u0275elementStart"](1,"mat-icon"),x["\u0275\u0275text"](2,"clear"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"]()}2&e&&x["\u0275\u0275property"]("color","blank")}function A(e,t){if(1&e&&(x["\u0275\u0275elementStart"](0,"deja-snackbar",22),x["\u0275\u0275elementStart"](1,"deja-message-box",23),x["\u0275\u0275text"](2),x["\u0275\u0275template"](3,M,3,1,"ng-template",null,19,x["\u0275\u0275templateRefExtractor"]),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"]()),2&e){var n=x["\u0275\u0275nextContext"]().$implicit;x["\u0275\u0275advance"](2),x["\u0275\u0275textInterpolate1"](" ",n.content," ")}}function D(e,t){1&e&&x["\u0275\u0275template"](0,A,5,1,"deja-snackbar",21),2&e&&x["\u0275\u0275property"]("ngIf",t.$implicit.gate)}function F(e,t){if(1&e){var n=x["\u0275\u0275getCurrentView"]();x["\u0275\u0275elementStart"](0,"button",20),x["\u0275\u0275listener"]("click",(function(){return x["\u0275\u0275restoreView"](n),x["\u0275\u0275nextContext"](2).$implicit.gate=!1})),x["\u0275\u0275elementStart"](1,"mat-icon"),x["\u0275\u0275text"](2,"clear"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"]()}2&e&&x["\u0275\u0275property"]("color","blank")}function _(e,t){if(1&e&&(x["\u0275\u0275elementStart"](0,"deja-snackbar",25),x["\u0275\u0275elementStart"](1,"deja-message-box",26),x["\u0275\u0275text"](2),x["\u0275\u0275template"](3,F,3,1,"ng-template",null,19,x["\u0275\u0275templateRefExtractor"]),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"]()),2&e){var n=x["\u0275\u0275nextContext"]().$implicit;x["\u0275\u0275advance"](2),x["\u0275\u0275textInterpolate1"](" ",n.content," ")}}function T(e,t){1&e&&x["\u0275\u0275template"](0,_,5,1,"deja-snackbar",24),2&e&&x["\u0275\u0275property"]("ngIf",t.$implicit.gate)}function B(e,t){if(1&e){var n=x["\u0275\u0275getCurrentView"]();x["\u0275\u0275elementStart"](0,"button",20),x["\u0275\u0275listener"]("click",(function(){return x["\u0275\u0275restoreView"](n),x["\u0275\u0275nextContext"](2).$implicit.gate=!1})),x["\u0275\u0275elementStart"](1,"mat-icon"),x["\u0275\u0275text"](2,"clear"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"]()}2&e&&x["\u0275\u0275property"]("color","blank")}function G(e,t){if(1&e&&(x["\u0275\u0275elementStart"](0,"deja-snackbar",28),x["\u0275\u0275elementStart"](1,"deja-message-box",29),x["\u0275\u0275text"](2),x["\u0275\u0275template"](3,B,3,1,"ng-template",null,19,x["\u0275\u0275templateRefExtractor"]),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"]()),2&e){var n=x["\u0275\u0275nextContext"]().$implicit;x["\u0275\u0275advance"](2),x["\u0275\u0275textInterpolate1"](" ",n.content," ")}}function R(e,t){1&e&&x["\u0275\u0275template"](0,G,5,1,"deja-snackbar",27),2&e&&x["\u0275\u0275property"]("ngIf",t.$implicit.gate)}function z(e,t){if(1&e){var n=x["\u0275\u0275getCurrentView"]();x["\u0275\u0275elementStart"](0,"deja-snackbar",31),x["\u0275\u0275listener"]("onAnimationDone",(function(){return x["\u0275\u0275restoreView"](n),x["\u0275\u0275nextContext"]().$implicit.gate=!1})),x["\u0275\u0275elementStart"](1,"deja-message-box",16),x["\u0275\u0275text"](2),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"]()}if(2&e){var a=x["\u0275\u0275nextContext"]().$implicit;x["\u0275\u0275property"]("duration",5e3),x["\u0275\u0275advance"](2),x["\u0275\u0275textInterpolate1"](" ",a.content," ")}}function J(e,t){1&e&&x["\u0275\u0275template"](0,z,3,2,"deja-snackbar",30),2&e&&x["\u0275\u0275property"]("ngIf",t.$implicit.gate)}function K(e,t){if(1&e){var n=x["\u0275\u0275getCurrentView"]();x["\u0275\u0275elementStart"](0,"div",7),x["\u0275\u0275elementStart"](1,"div",8),x["\u0275\u0275elementStart"](2,"button",9),x["\u0275\u0275listener"]("click",(function(){return x["\u0275\u0275restoreView"](n),x["\u0275\u0275nextContext"]().push.emit("danger")})),x["\u0275\u0275text"](3,"Danger"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](4,"button",9),x["\u0275\u0275listener"]("click",(function(){return x["\u0275\u0275restoreView"](n),x["\u0275\u0275nextContext"]().push.emit("warning")})),x["\u0275\u0275text"](5,"Warning"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](6,"button",9),x["\u0275\u0275listener"]("click",(function(){return x["\u0275\u0275restoreView"](n),x["\u0275\u0275nextContext"]().push.emit("success")})),x["\u0275\u0275text"](7,"Success"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](8,"button",9),x["\u0275\u0275listener"]("click",(function(){return x["\u0275\u0275restoreView"](n),x["\u0275\u0275nextContext"]().push.emit("info")})),x["\u0275\u0275text"](9,"Info"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](10,"button",9),x["\u0275\u0275listener"]("click",(function(){return x["\u0275\u0275restoreView"](n),x["\u0275\u0275nextContext"]().simpleGate=!0})),x["\u0275\u0275text"](11,"Simple"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275template"](12,I,3,1,"deja-snackbar",10),x["\u0275\u0275elementStart"](13,"section",11,12),x["\u0275\u0275template"](15,V,1,1,"ng-template",13),x["\u0275\u0275pipe"](16,"async"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275template"](17,D,1,1,"ng-template",13),x["\u0275\u0275pipe"](18,"async"),x["\u0275\u0275template"](19,T,1,1,"ng-template",13),x["\u0275\u0275pipe"](20,"async"),x["\u0275\u0275template"](21,R,1,1,"ng-template",13),x["\u0275\u0275pipe"](22,"async"),x["\u0275\u0275elementStart"](23,"section",14),x["\u0275\u0275template"](24,J,1,1,"ng-template",13),x["\u0275\u0275pipe"](25,"async"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"]()}if(2&e){var a=x["\u0275\u0275nextContext"]();x["\u0275\u0275advance"](2),x["\u0275\u0275styleProp"]("background",a.danger),x["\u0275\u0275advance"](2),x["\u0275\u0275styleProp"]("background",a.warning),x["\u0275\u0275advance"](2),x["\u0275\u0275styleProp"]("background",a.success),x["\u0275\u0275advance"](2),x["\u0275\u0275styleProp"]("background",a.info),x["\u0275\u0275advance"](4),x["\u0275\u0275property"]("ngIf",a.simpleGate),x["\u0275\u0275advance"](1),x["\u0275\u0275styleProp"]("position","relative"),x["\u0275\u0275advance"](2),x["\u0275\u0275property"]("ngForOf",x["\u0275\u0275pipeBind1"](16,16,a.infos$)),x["\u0275\u0275advance"](2),x["\u0275\u0275property"]("ngForOf",x["\u0275\u0275pipeBind1"](18,18,a.successes$)),x["\u0275\u0275advance"](2),x["\u0275\u0275property"]("ngForOf",x["\u0275\u0275pipeBind1"](20,20,a.warnings$)),x["\u0275\u0275advance"](2),x["\u0275\u0275property"]("ngForOf",x["\u0275\u0275pipeBind1"](22,22,a.dangers$)),x["\u0275\u0275advance"](3),x["\u0275\u0275property"]("ngForOf",x["\u0275\u0275pipeBind1"](25,24,a.messages$))}}var U,L,H=b.f.forChild([{path:"",component:(U=function(){function t(){a(this,t),this.tabIndex=1,this.push=new x.EventEmitter,this.simpleGate=!1}var r,o,i;return r=t,(o=[{key:"ngOnInit",value:function(){var t=new h.B;this.danger=t.getColor("mat-red")[500],this.warning=t.getColor("mat-orange")[500],this.success=t.getColor("mat-green")[500],this.info=t.getColor("mat-blue")[500],this.default=t.getColor("mat-grey")[900],this.dangers$=Object(y.a)(this.push).pipe(Object(v.a)((function(e){return"danger"===e})),Object(w.a)((function(){return new E("Danger snackbar")})),Object(C.a)((function(t,n){return[].concat(e(t),[n])}),[]),Object(k.a)([])),this.warnings$=Object(y.a)(this.push).pipe(Object(v.a)((function(e){return"warning"===e})),Object(w.a)((function(){return new E("Warning snackbar")})),Object(C.a)((function(t,n){return[].concat(e(t),[n])}),[]),Object(k.a)([])),this.successes$=Object(y.a)(this.push).pipe(Object(v.a)((function(e){return"success"===e})),Object(w.a)((function(){return new E("Success snackbar")})),Object(C.a)((function(t,n){return[].concat(e(t),[n])}),[]),Object(k.a)([])),this.infos$=Object(y.a)(this.push).pipe(Object(v.a)((function(e){return"info"===e})),Object(w.a)((function(){return new E("Info snackbar")})),Object(C.a)((function(t,n){return[].concat(e(t),[n])}),[]),Object(k.a)([])),this.messages$=Object(j.a)(2e3).pipe(Object(w.a)((function(){return new E("Server push snackbar")})),Object(C.a)((function(t,n){return[].concat(e(t),[n])}),[]),Object(k.a)([]))}}])&&n(r.prototype,o),i&&n(r,i),t}(),U.\u0275fac=function(e){return new(e||U)},U.\u0275cmp=x["\u0275\u0275defineComponent"]({type:U,selectors:[["deja-snackbar-demo"]],decls:5,vars:3,consts:[[3,"selectedIndex","selectedTabChange"],["label","API REFERENCE"],["label","EXAMPLES"],["class","demo-card demo-basic",4,"ngIf"],["class","demo-card",4,"ngIf"],[1,"demo-card","demo-basic"],[3,"url"],[1,"demo-card"],["id","btnContainer"],["mat-raised-button","",3,"click"],["alignment","top left",3,"duration","onAnimationDone",4,"ngIf"],["id","container"],["containerEl",""],["ngFor","",3,"ngForOf"],[2,"width","400px","height","4000px","border","red solid 1px"],["alignment","top left",3,"duration","onAnimationDone"],["type","primary","horizontal",""],["alignment","right",3,"outerContainerElement",4,"ngIf"],["alignment","right",3,"outerContainerElement"],["actionsTemplate",""],["mat-mini-fab","",1,"action-button",3,"color","click"],["alignment","bottom left",4,"ngIf"],["alignment","bottom left"],["type","success","horizontal",""],["alignment","bottom",4,"ngIf"],["alignment","bottom"],["type","warn","horizontal",""],["alignment","bottom right",4,"ngIf"],["alignment","bottom right"],["type","danger","horizontal",""],["alignment","left",3,"duration","onAnimationDone",4,"ngIf"],["alignment","left",3,"duration","onAnimationDone"]],template:function(e,t){1&e&&(x["\u0275\u0275elementStart"](0,"mat-tab-group",0),x["\u0275\u0275listener"]("selectedTabChange",(function(e){return t.tabIndex=e.index})),x["\u0275\u0275element"](1,"mat-tab",1),x["\u0275\u0275element"](2,"mat-tab",2),x["\u0275\u0275elementEnd"](),x["\u0275\u0275template"](3,S,2,1,"mat-card",3),x["\u0275\u0275template"](4,K,26,26,"div",4)),2&e&&(x["\u0275\u0275property"]("selectedIndex",t.tabIndex),x["\u0275\u0275advance"](3),x["\u0275\u0275property"]("ngIf",0===t.tabIndex),x["\u0275\u0275advance"](1),x["\u0275\u0275property"]("ngIf",1===t.tabIndex))},directives:[p.b,p.a,i.n,m.a,O.a,l.b,i.m,f.a,d.a,s.a],pipes:[i.b],styles:["[_nghost-%COMP%]   #container[_ngcontent-%COMP%]{display:block;margin:auto;max-width:800px;max-height:800px;min-height:400px;box-sizing:border-box;border:1px solid #000}[_nghost-%COMP%]   .snackbarContent[_ngcontent-%COMP%]{display:flex;justify-content:space-between;border-radius:1px;box-shadow:0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.4)}[_nghost-%COMP%]   .snackbarContent[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:12px 0 12px 12px}[_nghost-%COMP%]   #btnContainer[_ngcontent-%COMP%]{width:500px;margin:auto auto 12px}"]}),U)},{path:"**",redirectTo:"",pathMatch:"full"}]),N=((L=function e(){a(this,e)}).\u0275mod=x["\u0275\u0275defineNgModule"]({type:L}),L.\u0275inj=x["\u0275\u0275defineInjector"]({factory:function(e){return new(e||L)},providers:[],imports:[[i.c,c.FormsModule,l.c,s.b,m.d,p.c,u.b,f.b,g.a,d.b,H]]}),L)}}])}();