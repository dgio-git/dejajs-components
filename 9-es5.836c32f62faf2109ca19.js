!function(){function e(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||n(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],o=!0,r=!1,i=void 0;try{for(var s,c=e[Symbol.iterator]();!(o=(s=c.next()).done)&&(n.push(s.value),!t||n.length!==t);o=!0);}catch(a){r=!0,i=a}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}(e,t)||n(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=a(e);if(t){var r=a(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return c(this,n)}}function c(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Jql4:function(n,o,i){"use strict";i.d(o,"a",(function(){return V})),i.d(o,"b",(function(){return T}));var c=i("SVse"),a=i("8Y7J"),u=i("s7LF"),f=i("Dxy4"),b=i("Tj54"),h=i("Z5sx"),v=i("2Vo4"),p=i("Cfvw"),y=i("itXk"),O=i("XNiG"),g=i("PqYM"),m=i("VRyK"),_=i("xgIS"),C=i("1G5W"),j=i("lJxs"),k=i("vkgz"),w=i("/uUt"),x=i("6eBy"),$=i("Kj3r"),F=i("3E0/"),I=i("pLZG"),M=i("IzEk"),E=i("8LU1"),B=["*"];function S(e,t){if(1&e&&a["\u0275\u0275element"](0,"deja-color-fab",5),2&e){var n=t.index;a["\u0275\u0275property"]("color",t.$implicit),a["\u0275\u0275attribute"]("index",n)}}function P(e,t){if(1&e&&a["\u0275\u0275element"](0,"deja-color-fab",6),2&e){var n=t.$implicit,o=t.index;a["\u0275\u0275styleProp"]("transition-duration",100*o+"ms"),a["\u0275\u0275property"]("color",n),a["\u0275\u0275attribute"]("index",o)}}function R(e,t){if(1&e){var n=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"div",7),a["\u0275\u0275listener"]("click",(function(){return a["\u0275\u0275restoreView"](n),a["\u0275\u0275nextContext"]().resetDefaultColor()})),a["\u0275\u0275elementStart"](1,"mat-icon"),a["\u0275\u0275text"](2,"undo"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}if(2&e){var o=a["\u0275\u0275nextContext"]();a["\u0275\u0275styleProp"]("background-color",o._resetcolor.toHex()),a["\u0275\u0275advance"](1),a["\u0275\u0275styleProp"]("color",o.getBestTextColor(o._resetcolor.toHex()))}}var D=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];l(this,e),this._color=t,this._disabled=n,this._active=o,this.color$=new v.a(t),this.disabled$=new v.a(n),this.active$=new v.a(o)}return d(e,[{key:"color",set:function(e){this.color$.next(this._color=e)},get:function(){return this._color}},{key:"disabled",set:function(e){this.disabled$.next(this._disabled=e)},get:function(){return this._disabled}},{key:"active",set:function(e){this.active$.next(this._active=e)},get:function(){return this._active}}]),e}(),A=function(){var e=function(e){r(o,e);var n=s(o);function o(e){var t;return l(this,o),(t=n.call(this)).element=e.nativeElement,t}return d(o,[{key:"color",set:function(e){var n=this;if(this._colorFab=e,e){Object(p.a)(e.active$).pipe(Object(C.a)(this.destroyed$)).subscribe((function(e){return function(e,t){t?n.element.setAttribute(e,t.toString()):n.element.removeAttribute(e)}("active",e)})),Object(y.a)([e.color$,e.disabled$]).pipe(Object(j.a)((function(e){var n=t(e,2),o=n[0],r=n[1];return o&&r?o.grayScale:o})),Object(C.a)(this.destroyed$)).subscribe((function(e){return n.element.style.backgroundColor=e?e.toHex():""}))}}},{key:"tile",get:function(){return this._colorFab}}]),o}(h.s);return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](a.ElementRef))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["deja-color-fab"]],inputs:{color:"color"},features:[a["\u0275\u0275InheritDefinitionFeature"]],ngContentSelectors:B,decls:1,vars:0,template:function(e,t){1&e&&(a["\u0275\u0275projectionDef"](),a["\u0275\u0275projection"](0))},styles:["[_nghost-%COMP%]{align-items:center;border-radius:50%;cursor:pointer;display:flex;height:2.5rem;justify-content:space-around;margin:.45rem;transition:all .2s linear;width:2.5rem}[small][_nghost-%COMP%]{height:1.65rem;margin:.3rem;width:1.65rem}[active][_nghost-%COMP%]{transform:scale(1.4);transition:transform .2s linear!important}"]}),e}(),V=function(){var n=function(){function n(o,r){var i=this;l(this,n),this.control=r,this.colorhover=new a.EventEmitter,this.destroyed$=new O.a,this._colors$=new v.a([]),this._resetcolor$=new v.a(null),this._colorFabs=[],this._subColorFabs=[],this._selectedBaseIndex=0,this._disabled=!1,this.selectedBaseIndex$=new v.a(0),this.selectedSubIndex$=new v.a(0),this.hilightedBaseIndex$=new O.a,this.hilightedSubIndex$=new O.a,this.onTouchedCallback=function(){},this.onChangeCallback=function(e){};var s=o.nativeElement;this.control&&(this.control.valueAccessor=this),this._colorFabs$=Object(p.a)(this._colors$).pipe(Object(j.a)((function(e){return e.map((function(e,t){return new D(e,i._disabled,t===i._selectedBaseIndex)}))})),Object(k.a)((function(e){return i._colorFabs=e}))),Object(y.a)([this._colors$,this._resetcolor$]).pipe(Object(C.a)(this.destroyed$)).subscribe((function(n){var o,r=t(n,2),s=r[0],c=r[1];s&&s.length&&c?(s.reduce((function(t,n){var o=n;return o.subColors?t=[].concat(e(t),e(o.subColors)):t.push(n),t}),[]).reduce((function(e,t){var n=.3*Math.abs(t.r-c.r)+.4*Math.abs(t.g-c.g)+.25*Math.abs(t.b-c.b);return n<e?(o=t,n):e}),765),i._resetcolor=o):i._resetcolor=void 0}));var c=Object(p.a)(this.hilightedBaseIndex$).pipe(Object(w.a)(),Object(x.a)((function(e){return Object(g.a)(void 0!==e?100:1e3)})),Object(k.a)((function(e){var t,n;i.hilightedBaseIndex=e;var o=new CustomEvent("ColorEvent",{});o.color=e?null===(n=null===(t=i._colorFabs)||void 0===t?void 0:t[e])||void 0===n?void 0:n.color:i.value,i.colorhover.emit(o)})),Object(j.a)((function(e){return void 0!==e?e:i._selectedBaseIndex||0}))),u=Object(p.a)(this.selectedBaseIndex$).pipe(Object(k.a)((function(e){return i._selectedBaseIndex=e})));this._subColorFabs$=Object(m.a)(c,u).pipe(Object(w.a)(),Object(k.a)((function(e){i._colorFabs&&i._colorFabs.forEach((function(t,n){return t.active=n===e}))})),Object($.a)(100),Object(k.a)((function(){return s.setAttribute("sub-tr","")})),Object(j.a)((function(e){var t;return(null===(t=i._colorFabs)||void 0===t?void 0:t[e])&&i._colorFabs[e].color.subColors})),Object(j.a)((function(e){return null==e?void 0:e.map((function(e,t){return new D(e,i._disabled,t===i._selectedSubIndex)}))})),Object(k.a)((function(e){return i._subColorFabs=e}))),this._subColorFabs$.pipe(Object(F.a)(100),Object(C.a)(this.destroyed$)).subscribe((function(){return s.removeAttribute("sub-tr")}));var d=Object(p.a)(this.hilightedSubIndex$).pipe(Object(w.a)(),Object(x.a)((function(e){return Object(g.a)(void 0!==e?200:1100)})),Object(k.a)((function(e){var t,n;i.hilightedSubIndex=e;var o=new CustomEvent("ColorEvent",{});o.color=void 0!==e?null===(n=null===(t=i._subColorFabs)||void 0===t?void 0:t[e])||void 0===n?void 0:n.color:i.value,i.colorhover.emit(o)})),Object(j.a)((function(e){return void 0!==e?e:i._selectedSubIndex||0}))),f=Object(p.a)(this.selectedSubIndex$).pipe(Object(w.a)(),Object(k.a)((function(e){return i._selectedSubIndex=e})));Object(m.a)(d,f).pipe(Object(I.a)((function(){return!!i._subColorFabs})),Object(C.a)(this.destroyed$)).subscribe((function(e){return i._subColorFabs.forEach((function(t,n){return t.active=n===e}))})),Object(_.a)(s,"mousemove").pipe(Object(I.a)((function(){return!i._disabled})),Object(C.a)(this.destroyed$)).subscribe((function(e){var t=e.target,o=t.attributes[n.INDEX_ATTRIBUTE];t.hasAttribute("basecolor")?(i.hilightedBaseIndex$.next(+o.value),i.hilightedSubIndex$.next(i.hilightedSubIndex)):t.hasAttribute("subcolor")?(i.hilightedBaseIndex$.next(i.hilightedBaseIndex),i.hilightedSubIndex$.next(+o.value)):(i.hilightedBaseIndex$.next(null),i.hilightedSubIndex$.next(null))})),Object(_.a)(s,"click").pipe(Object(I.a)((function(){return!i._disabled})),Object(C.a)(this.destroyed$)).subscribe((function(e){var t=e.target;(t.hasAttribute("basecolor")||t.hasAttribute("subcolor"))&&(i.value=h.b.parse(t.style.backgroundColor))}))}return d(n,[{key:"getBestTextColor",value:function(e){return h.b.fromHex(e).bestTextColor.toHex()}},{key:"resetDefaultColor",value:function(){this.value=this._resetcolor}},{key:"writeValue",value:function(e){this._value=e,this.selectedColor=e}},{key:"registerOnChange",value:function(e){this.onChangeCallback=e}},{key:"registerOnTouched",value:function(e){this.onTouchedCallback=e}},{key:"setDisabledState",value:function(e){this.disabled=e}},{key:"ngOnDestroy",value:function(){this.destroyed$.next(),this.destroyed$.unsubscribe()}},{key:"subColorFabs",get:function(){return this._subColorFabs}},{key:"subColorFabs$",get:function(){return this._subColorFabs$}},{key:"colorFabs$",get:function(){return this._colorFabs$}},{key:"resetcolor",set:function(e){""===e&&(e=new h.b);var t=e&&("string"==typeof e?h.b.parse(e):e);this._resetcolor$.next(t||null)}},{key:"disabled",set:function(e){var t=Object(E.b)(e);this._colorFabs&&this._colorFabs.forEach((function(e){return e.disabled=t})),this._subColorFabs&&this._subColorFabs.forEach((function(e){return e.disabled=t})),this._disabled=t||null},get:function(){return this._disabled}},{key:"colors",set:function(e){this._colors$.next(e||[]),this.selectedBaseIndex$.next(0)}},{key:"selectedColor",set:function(e){var t=this,n=function(e){Object(g.a)(1).pipe(Object(M.a)(1),Object(C.a)(t.destroyed$)).subscribe((function(){return t.selectedSubIndex$.next(e)}))};this._colorFabs&&(this._colorFabs.find((function(o,r){var i,s=o.color,c=null===(i=s.subColors)||void 0===i?void 0:i.findIndex((function(t){return h.b.equals(t,e)}));return void 0!==c&&c>=0?(t.selectedBaseIndex$.next(r),n(c),!0):!!h.b.equals(s,e)&&(t.selectedBaseIndex$.next(r),n(0),!0)}))||(this.selectedBaseIndex$.next(0),n(0)))}},{key:"value",set:function(e){h.b.equals(e,this._value)||(this.writeValue(e),this.onChangeCallback(e))},get:function(){return this._value}}]),n}();return n.\u0275fac=function(e){return new(e||n)(a["\u0275\u0275directiveInject"](a.ElementRef),a["\u0275\u0275directiveInject"](u.NgControl,10))},n.\u0275cmp=a["\u0275\u0275defineComponent"]({type:n,selectors:[["deja-color-selector"]],inputs:{resetcolor:"resetcolor",disabled:"disabled",colors:"colors"},outputs:{colorhover:"colorhover"},decls:7,vars:7,consts:[["id","basecolors",1,"colors-wrapper"],["basecolor","","small","",3,"color",4,"ngFor","ngForOf"],["id","subcolors",1,"colors-wrapper"],["subcolor","",3,"transition-duration","color",4,"ngFor","ngForOf"],["id","reset",3,"background-color","click",4,"ngIf"],["basecolor","","small","",3,"color"],["subcolor","",3,"color"],["id","reset",3,"click"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"div",0),a["\u0275\u0275template"](1,S,1,2,"deja-color-fab",1),a["\u0275\u0275pipe"](2,"async"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](3,"div",2),a["\u0275\u0275template"](4,P,1,4,"deja-color-fab",3),a["\u0275\u0275pipe"](5,"async"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](6,R,3,4,"div",4)),2&e&&(a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngForOf",a["\u0275\u0275pipeBind1"](2,3,t.colorFabs$)),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("ngForOf",a["\u0275\u0275pipeBind1"](5,5,t.subColorFabs$)),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngIf",!!t._resetcolor))},directives:[c.m,c.n,A,b.a],pipes:[c.b],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   .colors-wrapper[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;margin:1rem .5rem}[_nghost-%COMP%]   .colors-wrapper[_ngcontent-%COMP%]   deja-color-fab[_ngcontent-%COMP%]{float:left}[_nghost-%COMP%]   .colors-wrapper[_ngcontent-%COMP%]   #subcolors[_ngcontent-%COMP%]   deja-color-fab[_ngcontent-%COMP%]{opacity:1}[sub-tr][_nghost-%COMP%]   #subcolors.colors-wrapper[_ngcontent-%COMP%]   deja-color-fab[_ngcontent-%COMP%]{opacity:0;transform:scale(0)}[_nghost-%COMP%]   #reset[_ngcontent-%COMP%]{cursor:pointer;padding:.5rem 0;text-align:center}"]}),n.INDEX_ATTRIBUTE="index",n}(),T=function(){var e=function e(){l(this,e)};return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[c.c,u.FormsModule,b.b,f.c]]}),e}()},oJzz:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return g}));var o=n("1O3W"),i=n("SVse"),c=n("8Y7J"),a=n("Z5sx"),u=n("8LU1"),f=n("PqYM"),b=n("GJmQ"),h=n("1G5W"),v=n("IzEk");function p(e,t){1&e&&c["\u0275\u0275projection"](0)}var y=["*"],O=function(){var e=function(e){r(n,e);var t=s(n);function n(e,o,r,i){var s;return l(this,n),(s=t.call(this)).changeDetectorRef=e,s.elementRef=o,s.overlayContainer=r,s.overlayBackdropClass="cdk-overlay-transparent-backdrop",s.visibleChange=new c.EventEmitter,s.closed=new c.EventEmitter,s.overlayOffsetX=0,s.overlayOffsetY=0,s._isVisible=!1,s._hasBackdrop=!0,s._width=null,s._widthForMobile="100%",s._positions=a.f.default,s._isMobile=!1,s.disableMediaService=!1,s.overlayContainer.getContainerElement().addEventListener("contextmenu",(function(e){return e.preventDefault(),!1})),i.isMobile$.pipe(Object(b.a)((function(){return!s.disableMediaService})),Object(h.a)(s.destroyed$)).subscribe((function(e){s._isMobile=e,s.updateOriginOverlay(),s.changeDetectorRef.markForCheck()})),s}return d(n,[{key:"updatePosition",value:function(){var e,t;null===(t=null===(e=this.overlay)||void 0===e?void 0:e.overlayRef)||void 0===t||t.updatePosition()}},{key:"show",value:function(e,t){var n=this;this.overlayOffsetX=void 0!==t?+e:0,this.overlayOffsetY=t||0,this.overlayOrigin=new o.b(new c.ElementRef(this.isMobile&&document.body||(null==e?void 0:e.target)||this.ownerElement||this.elementRef.nativeElement)),this.isVisible=!0,this.changeDetectorRef.markForCheck(),Object(f.a)(1).pipe(Object(v.a)(1),Object(h.a)(this.destroyed$)).subscribe((function(){return n.updatePosition()}))}},{key:"close",value:function(){this.isVisible=!1,this.closed.emit(!0),this.changeDetectorRef.markForCheck()}},{key:"updateOriginOverlay",value:function(){this.overlayOrigin=new o.b(new c.ElementRef(this.isMobile&&document.body||this._ownerElement||this.elementRef.nativeElement))}},{key:"isVisible",get:function(){return this._isVisible},set:function(e){var t=Object(u.b)(e);if(this._isVisible!==t){this._isVisible=t;var n=this.overlayContainer.getContainerElement();n.classList.forEach((function(e){e.startsWith("cdk")||n.classList.remove(e)})),n.classList.add("deja-overlay-container"),this.overlayContainerClass&&n.classList.add(this.overlayContainerClass),this.changeDetectorRef.markForCheck(),this.visibleChange.emit(this.isVisible)}}},{key:"hasBackdrop",set:function(e){this._hasBackdrop=Object(u.b)(e)},get:function(){return this._hasBackdrop}},{key:"ownerElement",set:function(e){this._ownerElement=e,this.updateOriginOverlay()}},{key:"positions",get:function(){return this.isMobile?this._positionsForMobile?this._positionsForMobile:a.f.parse("start top start top"):this._positions},set:function(e){this._positions="string"==typeof e?a.f.parse(e):e}},{key:"positionsForMobile",set:function(e){this._positionsForMobile="string"==typeof e?a.f.parse(e):e}},{key:"isMobile",get:function(){return this._isMobile},set:function(e){this._isMobile=Object(u.b)(e),this.updateOriginOverlay(),this.disableMediaService=!0}},{key:"width",get:function(){return this._width},set:function(e){this._width=e}},{key:"widthForMobile",get:function(){return this._widthForMobile},set:function(e){this._widthForMobile=e}},{key:"overlayWidth",get:function(){return this.isMobile?this._widthForMobile:this._width}}]),n}(a.s);return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](c.ChangeDetectorRef),c["\u0275\u0275directiveInject"](c.ElementRef),c["\u0275\u0275directiveInject"](o.f),c["\u0275\u0275directiveInject"](a.D))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["deja-overlay"]],viewQuery:function(e,t){var n;1&e&&c["\u0275\u0275staticViewQuery"](o.a,!0),2&e&&c["\u0275\u0275queryRefresh"](n=c["\u0275\u0275loadQuery"]())&&(t.overlay=n.first)},inputs:{overlayBackdropClass:"overlayBackdropClass",overlayOffsetX:"overlayOffsetX",overlayOffsetY:"overlayOffsetY",isVisible:"isVisible",hasBackdrop:"hasBackdrop",ownerElement:"ownerElement",positions:"positions",positionsForMobile:"positionsForMobile",isMobile:"isMobile",width:"width",widthForMobile:"widthForMobile",overlayContainerClass:"overlayContainerClass"},outputs:{visibleChange:"visibleChange",closed:"closed"},features:[c["\u0275\u0275InheritDefinitionFeature"]],ngContentSelectors:y,decls:2,vars:8,consts:[["cdk-connected-overlay","",3,"cdkConnectedOverlayHasBackdrop","cdkConnectedOverlayBackdropClass","cdkConnectedOverlayOpen","cdkConnectedOverlayOffsetY","cdkConnectedOverlayOffsetX","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","backdropClick","detach"],["overlayCmp",""]],template:function(e,t){1&e&&(c["\u0275\u0275projectionDef"](),c["\u0275\u0275template"](0,p,1,0,"ng-template",0,1,c["\u0275\u0275templateRefExtractor"]),c["\u0275\u0275listener"]("backdropClick",(function(){return t.close()}))("detach",(function(){return t.close()}))),2&e&&c["\u0275\u0275property"]("cdkConnectedOverlayHasBackdrop",t.hasBackdrop)("cdkConnectedOverlayBackdropClass",t.overlayBackdropClass)("cdkConnectedOverlayOpen",t.isVisible)("cdkConnectedOverlayOffsetY",t.overlayOffsetY)("cdkConnectedOverlayOffsetX",t.overlayOffsetX)("cdkConnectedOverlayOrigin",t.overlayOrigin)("cdkConnectedOverlayPositions",t.positions)("cdkConnectedOverlayWidth",t.overlayWidth)},directives:[o.a],styles:["@media print{.deja-overlay-container{display:none}}"],encapsulation:2,changeDetection:0}),e}(),g=function(){var e=function e(){l(this,e)};return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.c,o.g,a.C]]}),e}()}}])}();