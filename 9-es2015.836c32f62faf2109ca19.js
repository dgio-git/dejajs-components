(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Jql4:function(e,t,s){"use strict";s.d(t,"a",(function(){return B})),s.d(t,"b",(function(){return P}));var i=s("SVse"),o=s("8Y7J"),r=s("s7LF"),n=s("Dxy4"),a=s("Tj54"),l=s("Z5sx"),c=s("2Vo4"),d=s("Cfvw"),h=s("itXk"),b=s("XNiG"),u=s("PqYM"),p=s("VRyK"),v=s("xgIS"),f=s("1G5W"),O=s("lJxs"),g=s("vkgz"),C=s("/uUt"),y=s("6eBy"),_=s("Kj3r"),m=s("3E0/"),j=s("pLZG"),x=s("IzEk"),w=s("8LU1");const k=["*"];function $(e,t){if(1&e&&o["\u0275\u0275element"](0,"deja-color-fab",5),2&e){const e=t.index;o["\u0275\u0275property"]("color",t.$implicit),o["\u0275\u0275attribute"]("index",e)}}function F(e,t){if(1&e&&o["\u0275\u0275element"](0,"deja-color-fab",6),2&e){const e=t.$implicit,s=t.index;o["\u0275\u0275styleProp"]("transition-duration",100*s+"ms"),o["\u0275\u0275property"]("color",e),o["\u0275\u0275attribute"]("index",s)}}function M(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"div",7),o["\u0275\u0275listener"]("click",(function(){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().resetDefaultColor()})),o["\u0275\u0275elementStart"](1,"mat-icon"),o["\u0275\u0275text"](2,"undo"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}if(2&e){const e=o["\u0275\u0275nextContext"]();o["\u0275\u0275styleProp"]("background-color",e._resetcolor.toHex()),o["\u0275\u0275advance"](1),o["\u0275\u0275styleProp"]("color",e.getBestTextColor(e._resetcolor.toHex()))}}class I{constructor(e,t=!1,s=!1){this._color=e,this._disabled=t,this._active=s,this.color$=new c.a(e),this.disabled$=new c.a(t),this.active$=new c.a(s)}set color(e){this.color$.next(this._color=e)}get color(){return this._color}set disabled(e){this.disabled$.next(this._disabled=e)}get disabled(){return this._disabled}set active(e){this.active$.next(this._active=e)}get active(){return this._active}}let E=(()=>{class e extends l.s{constructor(e){super(),this.element=e.nativeElement}set color(e){if(this._colorFab=e,e){const t=(e,t)=>{t?this.element.setAttribute(e,t.toString()):this.element.removeAttribute(e)};Object(d.a)(e.active$).pipe(Object(f.a)(this.destroyed$)).subscribe(e=>t("active",e)),Object(h.a)([e.color$,e.disabled$]).pipe(Object(O.a)(([e,t])=>e&&t?e.grayScale:e),Object(f.a)(this.destroyed$)).subscribe(e=>this.element.style.backgroundColor=e?e.toHex():"")}}get tile(){return this._colorFab}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](o.ElementRef))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["deja-color-fab"]],inputs:{color:"color"},features:[o["\u0275\u0275InheritDefinitionFeature"]],ngContentSelectors:k,decls:1,vars:0,template:function(e,t){1&e&&(o["\u0275\u0275projectionDef"](),o["\u0275\u0275projection"](0))},styles:["[_nghost-%COMP%]{align-items:center;border-radius:50%;cursor:pointer;display:flex;height:2.5rem;justify-content:space-around;margin:.45rem;transition:all .2s linear;width:2.5rem}[small][_nghost-%COMP%]{height:1.65rem;margin:.3rem;width:1.65rem}[active][_nghost-%COMP%]{transform:scale(1.4);transition:transform .2s linear!important}"]}),e})(),B=(()=>{class e{constructor(t,s){this.control=s,this.colorhover=new o.EventEmitter,this.destroyed$=new b.a,this._colors$=new c.a([]),this._resetcolor$=new c.a(null),this._colorFabs=[],this._subColorFabs=[],this._selectedBaseIndex=0,this._disabled=!1,this.selectedBaseIndex$=new c.a(0),this.selectedSubIndex$=new c.a(0),this.hilightedBaseIndex$=new b.a,this.hilightedSubIndex$=new b.a,this.onTouchedCallback=()=>{},this.onChangeCallback=e=>{};const i=t.nativeElement;this.control&&(this.control.valueAccessor=this),this._colorFabs$=Object(d.a)(this._colors$).pipe(Object(O.a)(e=>e.map((e,t)=>new I(e,this._disabled,t===this._selectedBaseIndex))),Object(g.a)(e=>this._colorFabs=e)),Object(h.a)([this._colors$,this._resetcolor$]).pipe(Object(f.a)(this.destroyed$)).subscribe(([e,t])=>{if(!e||!e.length||!t)return void(this._resetcolor=void 0);let s;e.reduce((e,t)=>{const s=t;return s.subColors?e=[...e,...s.subColors]:e.push(t),e},[]).reduce((e,i)=>{const o=.3*Math.abs(i.r-t.r)+.4*Math.abs(i.g-t.g)+.25*Math.abs(i.b-t.b);return o<e?(s=i,o):e},765),this._resetcolor=s});const r=Object(d.a)(this.hilightedBaseIndex$).pipe(Object(C.a)(),Object(y.a)(e=>Object(u.a)(void 0!==e?100:1e3)),Object(g.a)(e=>{var t,s;this.hilightedBaseIndex=e;const i=new CustomEvent("ColorEvent",{});i.color=e?null===(s=null===(t=this._colorFabs)||void 0===t?void 0:t[e])||void 0===s?void 0:s.color:this.value,this.colorhover.emit(i)}),Object(O.a)(e=>void 0!==e?e:this._selectedBaseIndex||0)),n=Object(d.a)(this.selectedBaseIndex$).pipe(Object(g.a)(e=>this._selectedBaseIndex=e));this._subColorFabs$=Object(p.a)(r,n).pipe(Object(C.a)(),Object(g.a)(e=>{this._colorFabs&&this._colorFabs.forEach((t,s)=>t.active=s===e)}),Object(_.a)(100),Object(g.a)(()=>i.setAttribute("sub-tr","")),Object(O.a)(e=>{var t;return(null===(t=this._colorFabs)||void 0===t?void 0:t[e])&&this._colorFabs[e].color.subColors}),Object(O.a)(e=>null==e?void 0:e.map((e,t)=>new I(e,this._disabled,t===this._selectedSubIndex))),Object(g.a)(e=>this._subColorFabs=e)),this._subColorFabs$.pipe(Object(m.a)(100),Object(f.a)(this.destroyed$)).subscribe(()=>i.removeAttribute("sub-tr"));const a=Object(d.a)(this.hilightedSubIndex$).pipe(Object(C.a)(),Object(y.a)(e=>Object(u.a)(void 0!==e?200:1100)),Object(g.a)(e=>{var t,s;this.hilightedSubIndex=e;const i=new CustomEvent("ColorEvent",{});i.color=void 0!==e?null===(s=null===(t=this._subColorFabs)||void 0===t?void 0:t[e])||void 0===s?void 0:s.color:this.value,this.colorhover.emit(i)}),Object(O.a)(e=>void 0!==e?e:this._selectedSubIndex||0)),x=Object(d.a)(this.selectedSubIndex$).pipe(Object(C.a)(),Object(g.a)(e=>this._selectedSubIndex=e));Object(p.a)(a,x).pipe(Object(j.a)(()=>!!this._subColorFabs),Object(f.a)(this.destroyed$)).subscribe(e=>this._subColorFabs.forEach((t,s)=>t.active=s===e)),Object(v.a)(i,"mousemove").pipe(Object(j.a)(()=>!this._disabled),Object(f.a)(this.destroyed$)).subscribe(t=>{const s=t.target,i=s.attributes[e.INDEX_ATTRIBUTE];s.hasAttribute("basecolor")?(this.hilightedBaseIndex$.next(+i.value),this.hilightedSubIndex$.next(this.hilightedSubIndex)):s.hasAttribute("subcolor")?(this.hilightedBaseIndex$.next(this.hilightedBaseIndex),this.hilightedSubIndex$.next(+i.value)):(this.hilightedBaseIndex$.next(null),this.hilightedSubIndex$.next(null))}),Object(v.a)(i,"click").pipe(Object(j.a)(()=>!this._disabled),Object(f.a)(this.destroyed$)).subscribe(e=>{const t=e.target;(t.hasAttribute("basecolor")||t.hasAttribute("subcolor"))&&(this.value=l.b.parse(t.style.backgroundColor))})}get subColorFabs(){return this._subColorFabs}get subColorFabs$(){return this._subColorFabs$}get colorFabs$(){return this._colorFabs$}set resetcolor(e){""===e&&(e=new l.b);const t=e&&("string"==typeof e?l.b.parse(e):e);this._resetcolor$.next(t||null)}set disabled(e){const t=Object(w.b)(e);this._colorFabs&&this._colorFabs.forEach(e=>e.disabled=t),this._subColorFabs&&this._subColorFabs.forEach(e=>e.disabled=t),this._disabled=t||null}get disabled(){return this._disabled}getBestTextColor(e){return l.b.fromHex(e).bestTextColor.toHex()}resetDefaultColor(){this.value=this._resetcolor}set colors(e){this._colors$.next(e||[]),this.selectedBaseIndex$.next(0)}set selectedColor(e){const t=e=>{Object(u.a)(1).pipe(Object(x.a)(1),Object(f.a)(this.destroyed$)).subscribe(()=>this.selectedSubIndex$.next(e))};this._colorFabs&&(this._colorFabs.find((s,i)=>{var o;const r=s.color,n=null===(o=r.subColors)||void 0===o?void 0:o.findIndex(t=>l.b.equals(t,e));return void 0!==n&&n>=0?(this.selectedBaseIndex$.next(i),t(n),!0):!!l.b.equals(r,e)&&(this.selectedBaseIndex$.next(i),t(0),!0)})||(this.selectedBaseIndex$.next(0),t(0)))}set value(e){l.b.equals(e,this._value)||(this.writeValue(e),this.onChangeCallback(e))}get value(){return this._value}writeValue(e){this._value=e,this.selectedColor=e}registerOnChange(e){this.onChangeCallback=e}registerOnTouched(e){this.onTouchedCallback=e}setDisabledState(e){this.disabled=e}ngOnDestroy(){this.destroyed$.next(),this.destroyed$.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](o.ElementRef),o["\u0275\u0275directiveInject"](r.NgControl,10))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["deja-color-selector"]],inputs:{resetcolor:"resetcolor",disabled:"disabled",colors:"colors"},outputs:{colorhover:"colorhover"},decls:7,vars:7,consts:[["id","basecolors",1,"colors-wrapper"],["basecolor","","small","",3,"color",4,"ngFor","ngForOf"],["id","subcolors",1,"colors-wrapper"],["subcolor","",3,"transition-duration","color",4,"ngFor","ngForOf"],["id","reset",3,"background-color","click",4,"ngIf"],["basecolor","","small","",3,"color"],["subcolor","",3,"color"],["id","reset",3,"click"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"div",0),o["\u0275\u0275template"](1,$,1,2,"deja-color-fab",1),o["\u0275\u0275pipe"](2,"async"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"div",2),o["\u0275\u0275template"](4,F,1,4,"deja-color-fab",3),o["\u0275\u0275pipe"](5,"async"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275template"](6,M,3,4,"div",4)),2&e&&(o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngForOf",o["\u0275\u0275pipeBind1"](2,3,t.colorFabs$)),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("ngForOf",o["\u0275\u0275pipeBind1"](5,5,t.subColorFabs$)),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngIf",!!t._resetcolor))},directives:[i.m,i.n,E,a.a],pipes:[i.b],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   .colors-wrapper[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;margin:1rem .5rem}[_nghost-%COMP%]   .colors-wrapper[_ngcontent-%COMP%]   deja-color-fab[_ngcontent-%COMP%]{float:left}[_nghost-%COMP%]   .colors-wrapper[_ngcontent-%COMP%]   #subcolors[_ngcontent-%COMP%]   deja-color-fab[_ngcontent-%COMP%]{opacity:1}[sub-tr][_nghost-%COMP%]   #subcolors.colors-wrapper[_ngcontent-%COMP%]   deja-color-fab[_ngcontent-%COMP%]{opacity:0;transform:scale(0)}[_nghost-%COMP%]   #reset[_ngcontent-%COMP%]{cursor:pointer;padding:.5rem 0;text-align:center}"]}),e.INDEX_ATTRIBUTE="index",e})(),P=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.c,r.FormsModule,a.b,n.c]]}),e})()},oJzz:function(e,t,s){"use strict";s.d(t,"a",(function(){return p})),s.d(t,"b",(function(){return v}));var i=s("1O3W"),o=s("SVse"),r=s("8Y7J"),n=s("Z5sx"),a=s("8LU1"),l=s("PqYM"),c=s("GJmQ"),d=s("1G5W"),h=s("IzEk");function b(e,t){1&e&&r["\u0275\u0275projection"](0)}const u=["*"];let p=(()=>{class e extends n.s{constructor(e,t,s,i){super(),this.changeDetectorRef=e,this.elementRef=t,this.overlayContainer=s,this.overlayBackdropClass="cdk-overlay-transparent-backdrop",this.visibleChange=new r.EventEmitter,this.closed=new r.EventEmitter,this.overlayOffsetX=0,this.overlayOffsetY=0,this._isVisible=!1,this._hasBackdrop=!0,this._width=null,this._widthForMobile="100%",this._positions=n.f.default,this._isMobile=!1,this.disableMediaService=!1,this.overlayContainer.getContainerElement().addEventListener("contextmenu",e=>(e.preventDefault(),!1)),i.isMobile$.pipe(Object(c.a)(()=>!this.disableMediaService),Object(d.a)(this.destroyed$)).subscribe(e=>{this._isMobile=e,this.updateOriginOverlay(),this.changeDetectorRef.markForCheck()})}get isVisible(){return this._isVisible}set isVisible(e){const t=Object(a.b)(e);if(this._isVisible!==t){this._isVisible=t;const e=this.overlayContainer.getContainerElement();e.classList.forEach(t=>{t.startsWith("cdk")||e.classList.remove(t)}),e.classList.add("deja-overlay-container"),this.overlayContainerClass&&e.classList.add(this.overlayContainerClass),this.changeDetectorRef.markForCheck(),this.visibleChange.emit(this.isVisible)}}set hasBackdrop(e){this._hasBackdrop=Object(a.b)(e)}get hasBackdrop(){return this._hasBackdrop}set ownerElement(e){this._ownerElement=e,this.updateOriginOverlay()}get positions(){return this.isMobile?this._positionsForMobile?this._positionsForMobile:n.f.parse("start top start top"):this._positions}set positions(e){this._positions="string"==typeof e?n.f.parse(e):e}set positionsForMobile(e){this._positionsForMobile="string"==typeof e?n.f.parse(e):e}get isMobile(){return this._isMobile}set isMobile(e){this._isMobile=Object(a.b)(e),this.updateOriginOverlay(),this.disableMediaService=!0}get width(){return this._width}set width(e){this._width=e}get widthForMobile(){return this._widthForMobile}set widthForMobile(e){this._widthForMobile=e}get overlayWidth(){return this.isMobile?this._widthForMobile:this._width}updatePosition(){var e,t;null===(t=null===(e=this.overlay)||void 0===e?void 0:e.overlayRef)||void 0===t||t.updatePosition()}show(e,t){this.overlayOffsetX=void 0!==t?+e:0,this.overlayOffsetY=t||0,this.overlayOrigin=new i.b(new r.ElementRef(this.isMobile&&document.body||(null==e?void 0:e.target)||this.ownerElement||this.elementRef.nativeElement)),this.isVisible=!0,this.changeDetectorRef.markForCheck(),Object(l.a)(1).pipe(Object(h.a)(1),Object(d.a)(this.destroyed$)).subscribe(()=>this.updatePosition())}close(){this.isVisible=!1,this.closed.emit(!0),this.changeDetectorRef.markForCheck()}updateOriginOverlay(){this.overlayOrigin=new i.b(new r.ElementRef(this.isMobile&&document.body||this._ownerElement||this.elementRef.nativeElement))}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.ChangeDetectorRef),r["\u0275\u0275directiveInject"](r.ElementRef),r["\u0275\u0275directiveInject"](i.f),r["\u0275\u0275directiveInject"](n.D))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["deja-overlay"]],viewQuery:function(e,t){var s;1&e&&r["\u0275\u0275staticViewQuery"](i.a,!0),2&e&&r["\u0275\u0275queryRefresh"](s=r["\u0275\u0275loadQuery"]())&&(t.overlay=s.first)},inputs:{overlayBackdropClass:"overlayBackdropClass",overlayOffsetX:"overlayOffsetX",overlayOffsetY:"overlayOffsetY",isVisible:"isVisible",hasBackdrop:"hasBackdrop",ownerElement:"ownerElement",positions:"positions",positionsForMobile:"positionsForMobile",isMobile:"isMobile",width:"width",widthForMobile:"widthForMobile",overlayContainerClass:"overlayContainerClass"},outputs:{visibleChange:"visibleChange",closed:"closed"},features:[r["\u0275\u0275InheritDefinitionFeature"]],ngContentSelectors:u,decls:2,vars:8,consts:[["cdk-connected-overlay","",3,"cdkConnectedOverlayHasBackdrop","cdkConnectedOverlayBackdropClass","cdkConnectedOverlayOpen","cdkConnectedOverlayOffsetY","cdkConnectedOverlayOffsetX","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","backdropClick","detach"],["overlayCmp",""]],template:function(e,t){1&e&&(r["\u0275\u0275projectionDef"](),r["\u0275\u0275template"](0,b,1,0,"ng-template",0,1,r["\u0275\u0275templateRefExtractor"]),r["\u0275\u0275listener"]("backdropClick",(function(){return t.close()}))("detach",(function(){return t.close()}))),2&e&&r["\u0275\u0275property"]("cdkConnectedOverlayHasBackdrop",t.hasBackdrop)("cdkConnectedOverlayBackdropClass",t.overlayBackdropClass)("cdkConnectedOverlayOpen",t.isVisible)("cdkConnectedOverlayOffsetY",t.overlayOffsetY)("cdkConnectedOverlayOffsetX",t.overlayOffsetX)("cdkConnectedOverlayOrigin",t.overlayOrigin)("cdkConnectedOverlayPositions",t.positions)("cdkConnectedOverlayWidth",t.overlayWidth)},directives:[i.a],styles:["@media print{.deja-overlay-container{display:none}}"],encapsulation:2,changeDetection:0}),e})(),v=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,i.g,n.C]]}),e})()}}]);