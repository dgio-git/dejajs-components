(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"1iX6":function(n,l,e){"use strict";e.d(l,"a",function(){return i}),e.d(l,"b",function(){return o});var t=e("8Y7J"),i=(e("LFOi"),e("SVse"),t["\u0275crt"]({encapsulation:0,styles:["[_nghost-%COMP%]{align-items:center;background-color:rgba(0,0,0,.6);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:999}[_nghost-%COMP%]   .dialog[_ngcontent-%COMP%]{z-index:1000}"],data:{}}));function o(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","dialog"]],null,null,null,null,null)),t["\u0275ncd"](null,0)],null,null)}},LFOi:function(n,l,e){"use strict";e.d(l,"a",function(){return u}),e.d(l,"b",function(){return r});var t=e("8Y7J"),i=e("6XaJ"),o=e("xgIS"),a=e("GJmQ"),s=e("pLZG");const u=(()=>(class{constructor(n){this.closed=new t.EventEmitter,this.isAlive=!0;const l=n.nativeElement;Object(o.a)(l.ownerDocument,"keyup").pipe(Object(a.a)(()=>this.isAlive),Object(s.a)(n=>!(n.keyCode!==i.B.Enter||!this.okButton||!this.okButton._elementRef)||!(n.keyCode!==i.B.Escape||!this.cancelButton||!this.cancelButton._elementRef))).subscribe(n=>{n.keyCode===i.B.Enter&&this.okButton._elementRef.nativeElement.click(),n.keyCode===i.B.Escape&&this.cancelButton._elementRef.nativeElement.click()})}ngOnDestroy(){this.isAlive=!1}close(n){let l=!0,e=n.target;const t=n.currentTarget;for(;e.parentElement&&e!==t;)"dialog"===e.className&&(l=!1),e=e.parentElement;l&&(this.closed.emit(),n.preventDefault())}}))(),r=(()=>(class{}))()},QlJR:function(n,l,e){"use strict";e.d(l,"a",function(){return d}),e.d(l,"b",function(){return c});var t=e("QQfA"),i=e("8Y7J"),o=e("6XaJ"),a=e("KCVW"),s=e("PqYM"),u=e("GJmQ"),r=e("SxV6");const d=(()=>(class{constructor(n,l,e,t){this.changeDetectorRef=n,this.elementRef=l,this.overlayContainer=e,this._isVisible=!1,this.overlayBackdropClass="cdk-overlay-transparent-backdrop",this._hasBackdrop=!0,this._width=null,this._widthForMobile="100%",this.visibleChange=new i.EventEmitter,this.closed=new i.EventEmitter,this.overlayOffsetX=0,this.overlayOffsetY=0,this._positions=o.g.default,this._isMobile=!1,this.isAlive=!0,this.disableMediaService=!1;const a=this.overlayContainer.getContainerElement();a.classList.add("deja-overlay-container"),a.addEventListener("contextmenu",n=>(n.preventDefault(),!1)),t.isMobile$.pipe(Object(u.a)(()=>this.isAlive&&!this.disableMediaService)).subscribe(n=>{this._isMobile=n,this.updateOriginOverlay(),this.changeDetectorRef.markForCheck()})}get isVisible(){return this._isVisible}set isVisible(n){const l=Object(a.b)(n);this._isVisible!==l&&(this._isVisible=l,this.changeDetectorRef.markForCheck(),this.visibleChange.emit(this.isVisible))}set overlayContainerClass(n){this.overlayContainer.getContainerElement().classList.add(n)}set hasBackdrop(n){this._hasBackdrop=Object(a.b)(n)}get hasBackdrop(){return this._hasBackdrop}set ownerElement(n){this._ownerElement=n,this.updateOriginOverlay()}get positions(){return this.isMobile?this._positionsForMobile?this._positionsForMobile:o.g.parse("start top start top"):this._positions}set positions(n){this._positions="string"==typeof n?o.g.parse(n):n}set positionsForMobile(n){this._positionsForMobile="string"==typeof n?o.g.parse(n):n}get isMobile(){return this._isMobile}set isMobile(n){this._isMobile=Object(a.b)(n),this.updateOriginOverlay(),this.disableMediaService=!0}get width(){return this._width}set width(n){this._width=n}get widthForMobile(){return this._widthForMobile}set widthForMobile(n){this._widthForMobile=n}get overlayWidth(){return this.isMobile?this._widthForMobile:this._width}ngOnDestroy(){this.isAlive=!1}updatePosition(){this.overlay&&this.overlay.overlayRef&&this.overlay.overlayRef.updatePosition()}show(n,l){this.overlayOffsetX=void 0!==l?+n:0,this.overlayOffsetY=l||0,this.overlayOrigin=new t.b(new i.ElementRef(this.isMobile&&document.body||n&&n.target||this.ownerElement||this.elementRef.nativeElement)),this.isVisible=!0,this.changeDetectorRef.markForCheck(),Object(s.a)(1).pipe(Object(r.a)()).subscribe(()=>{this.updatePosition()})}close(){this.isVisible=!1,this.closed.emit(!0),this.changeDetectorRef.markForCheck()}updateOriginOverlay(){this.overlayOrigin=new t.b(new i.ElementRef(this.isMobile&&document.body||this._ownerElement||this.elementRef.nativeElement))}}))(),c=(()=>(class{}))()},UZOC:function(n,l,e){"use strict";e.d(l,"a",function(){return p}),e.d(l,"b",function(){return O});var t=e("8Y7J"),i=(e("iVkG"),e("SVse")),o=(e("IP0z"),e("Xd0L"),e("cUpR"),e("igqZ")),a=e("Gi4r"),s=(e("/HVE"),e("Fwaw")),u=e("Mr+X"),r=e("bujt"),d=e("5GAg"),c=e("omvX"),m=e("lzlj"),p=t["\u0275crt"]({encapsulation:2,styles:["deja-message-box{display:block}deja-message-box #msgbox{border-style:solid;border-width:1px;margin:0;padding:0;display:block}deja-message-box #msgbox .mat-card-title{align-items:center;box-shadow:0 1px 4px 0 rgba(0,0,0,.2);display:flex;margin:0;padding:.8rem}deja-message-box #msgbox .mat-card-title #icon{margin-right:.5rem}deja-message-box #msgbox .mat-card-title .header-actions{margin-left:auto}deja-message-box #msgbox .mat-card-title .header-actions button.mat-mini-fab{background:0 0;border:none;box-shadow:none}deja-message-box #msgbox .mat-card-content{margin:0;padding:.75rem;overflow:hidden}deja-message-box #msgbox .mat-card-content h2{font-size:1.3rem;margin:0;font-weight:300;line-height:2rem;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}deja-message-box #msgbox .mat-card-actions{align-items:center;display:flex;justify-content:flex-end;margin:0;padding:.2rem}deja-message-box #msgbox .mat-card-actions button{margin-left:.2rem}deja-message-box #msgbox .mat-card-actions button.mat-blank[mat-fab]:not([disabled]),deja-message-box #msgbox .mat-card-actions button.mat-blank[mat-mini-fab]:not([disabled]),deja-message-box #msgbox .mat-card-actions button.mat-blank[mat-raised-button]:not([disabled]){box-shadow:none}deja-message-box #msgbox .mat-card-actions button.mat-blank[mat-fab].action-button,deja-message-box #msgbox .mat-card-actions button.mat-blank[mat-mini-fab].action-button,deja-message-box #msgbox .mat-card-actions button.mat-blank[mat-raised-button].action-button{align-items:stretch;display:flex;height:1rem;margin:0;padding:0;right:0;width:1rem}deja-message-box #msgbox .mat-card-actions button.mat-blank[mat-fab].action-button .mat-button-wrapper,deja-message-box #msgbox .mat-card-actions button.mat-blank[mat-mini-fab].action-button .mat-button-wrapper,deja-message-box #msgbox .mat-card-actions button.mat-blank[mat-raised-button].action-button .mat-button-wrapper{height:1rem;width:1rem}deja-message-box #msgbox .mat-card-actions button.mat-blank[mat-fab].action-button .mat-button-wrapper .mat-icon,deja-message-box #msgbox .mat-card-actions button.mat-blank[mat-mini-fab].action-button .mat-button-wrapper .mat-icon,deja-message-box #msgbox .mat-card-actions button.mat-blank[mat-raised-button].action-button .mat-button-wrapper .mat-icon{font-size:1rem;height:1rem;line-height:1rem;padding:0;position:absolute;right:0;top:0;width:1rem}deja-message-box[horizontal] #msgbox{align-items:stretch;display:flex;flex-direction:row;padding:0;position:relative}deja-message-box[horizontal] #msgbox .mat-card-title{align-items:center;display:flex;flex:0 0 auto;justify-content:center;margin:0;text-align:center}deja-message-box[horizontal] #msgbox .mat-card-title #icon{margin:0}deja-message-box[horizontal] #msgbox .mat-card-content{-ms-grid-row-align:center;align-self:center;flex:1 1 auto;padding:.75rem}deja-message-box[horizontal] #msgbox .mat-card-actions{margin:0;padding:0;position:absolute;right:.2rem;top:.3rem}"],data:{}});function b(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["id","icon"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,u.b,u.a)),t["\u0275did"](1,9158656,null,0,a.b,[t.ElementRef,a.d,[8,null],[2,a.a]],null,null),(n()(),t["\u0275ted"](2,0,["",""]))],function(n,l){n(l,1,0)},function(n,l){var e=l.component;n(l,0,0,t["\u0275nov"](l,1).inline,"primary"!==t["\u0275nov"](l,1).color&&"accent"!==t["\u0275nov"](l,1).color&&"warn"!==t["\u0275nov"](l,1).color),n(l,2,0,e.icon)})}function f(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"span",[["id","title"]],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,["",""]))],null,function(n,l){n(l,1,0,l.component.title)})}function h(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,4,"button",[["class","close"],["mat-mini-fab",""],["type","button"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.onClose()&&t),t},r.d,r.b)),t["\u0275did"](1,180224,null,0,s.b,[t.ElementRef,d.f,[2,c.a]],null,null),(n()(),t["\u0275eld"](2,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,u.b,u.a)),t["\u0275did"](3,9158656,null,0,a.b,[t.ElementRef,a.d,[8,null],[2,a.a]],null,null),(n()(),t["\u0275ted"](-1,0,["close"]))],function(n,l){n(l,3,0)},function(n,l){n(l,0,0,t["\u0275nov"](l,1).disabled||null,"NoopAnimations"===t["\u0275nov"](l,1)._animationMode),n(l,2,0,t["\u0275nov"](l,3).inline,"primary"!==t["\u0275nov"](l,3).color&&"accent"!==t["\u0275nov"](l,3).color&&"warn"!==t["\u0275nov"](l,3).color)})}function g(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,8,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,o.f,[],null,null),(n()(),t["\u0275and"](16777216,null,null,1,null,b)),t["\u0275did"](3,16384,null,0,i.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,f)),t["\u0275did"](5,16384,null,0,i.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](6,0,null,null,2,"div",[["class","header-actions"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,h)),t["\u0275did"](8,16384,null,0,i.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,3,0,e.icon),n(l,5,0,!e.horizontal),n(l,8,0,e.showCloseIcon)},null)}function v(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"h2",[["id","title"]],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,["",""]))],null,function(n,l){n(l,1,0,l.component.title)})}function y(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"button",[["class","with-icon"],["mat-raised-button",""],["type","button"]],[[1,"data-icon",0],[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.parent.context.$implicit.action()&&t),t},r.d,r.b)),t["\u0275did"](1,180224,null,0,s.b,[t.ElementRef,d.f,[2,c.a]],{color:[0,"color"]},null),(n()(),t["\u0275ted"](2,0,[" "," "]))],function(n,l){n(l,1,0,l.parent.context.$implicit.type)},function(n,l){n(l,0,0,l.parent.context.$implicit.icon,t["\u0275nov"](l,1).disabled||null,"NoopAnimations"===t["\u0275nov"](l,1)._animationMode),n(l,2,0,l.parent.context.$implicit.text)})}function x(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"button",[["mat-raised-button",""],["type","button"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.parent.context.$implicit.action()&&t),t},r.d,r.b)),t["\u0275did"](1,180224,null,0,s.b,[t.ElementRef,d.f,[2,c.a]],{color:[0,"color"]},null),(n()(),t["\u0275ted"](2,0,[" "," "]))],function(n,l){n(l,1,0,l.parent.context.$implicit.type)},function(n,l){n(l,0,0,t["\u0275nov"](l,1).disabled||null,"NoopAnimations"===t["\u0275nov"](l,1)._animationMode),n(l,2,0,l.parent.context.$implicit.text)})}function w(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,u.b,u.a)),t["\u0275did"](1,9158656,null,0,a.b,[t.ElementRef,a.d,[8,null],[2,a.a]],null,null),(n()(),t["\u0275ted"](2,0,["",""]))],function(n,l){n(l,1,0)},function(n,l){n(l,0,0,t["\u0275nov"](l,1).inline,"primary"!==t["\u0275nov"](l,1).color&&"accent"!==t["\u0275nov"](l,1).color&&"warn"!==t["\u0275nov"](l,1).color),n(l,2,0,l.parent.parent.context.$implicit.icon)})}function R(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"button",[["mat-mini-fab",""],["type","button"]],[[2,"action-button",null],[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.parent.context.$implicit.action()&&t),t},r.d,r.b)),t["\u0275did"](1,180224,null,0,s.b,[t.ElementRef,d.f,[2,c.a]],{color:[0,"color"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,w)),t["\u0275did"](3,16384,null,0,i.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,1,0,l.parent.context.$implicit.type||"blank"),n(l,3,0,l.parent.context.$implicit.icon)},function(n,l){n(l,0,0,!l.parent.context.$implicit.type,t["\u0275nov"](l,1).disabled||null,"NoopAnimations"===t["\u0275nov"](l,1)._animationMode)})}function j(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,6,"span",[],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,y)),t["\u0275did"](2,16384,null,0,i.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,x)),t["\u0275did"](4,16384,null,0,i.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,R)),t["\u0275did"](6,16384,null,0,i.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,2,0,l.context.$implicit.icon&&l.context.$implicit.text),n(l,4,0,!l.context.$implicit.icon&&l.context.$implicit.text),n(l,6,0,l.context.$implicit.icon&&!l.context.$implicit.text)},null)}function k(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"mat-card-actions",[["class","mat-card-actions"]],[[2,"mat-card-actions-align-end",null]],null,null,null,null)),t["\u0275did"](1,16384,null,0,o.b,[],null,null),(n()(),t["\u0275and"](16777216,null,null,1,null,j)),t["\u0275did"](3,278528,null,0,i.m,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,3,0,l.component.actions)},function(n,l){n(l,0,0,"end"===t["\u0275nov"](l,1).align)})}function _(n){return t["\u0275vid"](0,[(n()(),t["\u0275and"](0,null,null,0))],null,null)}function C(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"mat-card-actions",[["class","mat-card-actions"]],[[2,"mat-card-actions-align-end",null]],null,null,null,null)),t["\u0275did"](1,16384,null,0,o.b,[],null,null),(n()(),t["\u0275and"](16777216,null,null,1,null,_)),t["\u0275did"](3,540672,null,0,i.u,[t.ViewContainerRef],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null)],function(n,l){n(l,3,0,l.component.actionsTemplate)},function(n,l){n(l,0,0,"end"===t["\u0275nov"](l,1).align)})}function O(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,12,"mat-card",[["class","mat-card"],["id","msgbox"]],[[8,"className",0]],null,null,m.b,m.a)),t["\u0275did"](1,49152,null,0,o.a,[],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,g)),t["\u0275did"](3,16384,null,0,i.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](4,0,null,0,4,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),t["\u0275did"](5,16384,null,0,o.c,[],null,null),(n()(),t["\u0275and"](16777216,null,null,1,null,v)),t["\u0275did"](7,16384,null,0,i.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),t["\u0275ncd"](null,0),(n()(),t["\u0275and"](16777216,null,0,1,null,k)),t["\u0275did"](10,16384,null,0,i.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,C)),t["\u0275did"](12,16384,null,0,i.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,3,0,e.icon||e.showCloseIcon),n(l,7,0,e.horizontal&&e.title),n(l,10,0,e.actions),n(l,12,0,!e.actions&&e.actionsTemplate)},function(n,l){n(l,0,0,t["\u0275inlineInterpolate"](1,"",l.component.type,""))})}},bX5p:function(n,l,e){"use strict";e.d(l,"a",function(){return a}),e.d(l,"b",function(){return u});var t=e("8Y7J"),i=(e("QlJR"),e("SVse"),e("QQfA")),o=e("IP0z"),a=(e("6XaJ"),e("zMNK"),e("/HVE"),e("hOhj"),t["\u0275crt"]({encapsulation:2,styles:["@media print{.deja-overlay-container{display:none}}"],data:{}}));function s(n){return t["\u0275vid"](0,[t["\u0275ncd"](null,0),(n()(),t["\u0275and"](0,null,null,0))],null,null)}function u(n){return t["\u0275vid"](2,[t["\u0275qud"](402653184,1,{overlay:0}),(n()(),t["\u0275and"](16777216,[["overlayCmp",2]],null,1,function(n,l,e){var t=!0,i=n.component;return"backdropClick"===l&&(t=!1!==i.close()&&t),"detach"===l&&(t=!1!==i.close()&&t),t},s)),t["\u0275did"](2,671744,[[1,4]],0,i.a,[i.d,t.TemplateRef,t.ViewContainerRef,i.k,[2,o.b]],{origin:[0,"origin"],positions:[1,"positions"],offsetX:[2,"offsetX"],offsetY:[3,"offsetY"],width:[4,"width"],backdropClass:[5,"backdropClass"],open:[6,"open"],hasBackdrop:[7,"hasBackdrop"]},{backdropClick:"backdropClick",detach:"detach"})],function(n,l){var e=l.component;n(l,2,0,e.overlayOrigin,e.positions,e.overlayOffsetX,e.overlayOffsetY,e.overlayWidth,e.overlayBackdropClass,e.isVisible,e.hasBackdrop||null)},null)}},iVkG:function(n,l,e){"use strict";e.d(l,"a",function(){return o}),e.d(l,"b",function(){return a});var t=e("8Y7J"),i=e("KCVW");const o=(()=>(class{constructor(){this.close=new t.EventEmitter,this._showCloseIcon=!1}set horizontal(n){this._horizontal=Object(i.b)(n)}get horizontal(){return this._horizontal}set showCloseIcon(n){this._showCloseIcon=Object(i.b)(n)}get showCloseIcon(){return this._showCloseIcon}ngOnInit(){!this.icon&&this.type&&(this.icon=this.getIconFromType(this.type)),this.actions&&this.actions.forEach(n=>{!n.icon&&n.type&&(n.icon=this.getIconFromType(n.type))})}onClose(){this.close.emit()}getIconFromType(n){switch(n){case"info":case"primary":return n="primary","info_outline";case"success":return"done";case"warn":return"warning_outline";case"danger":return"error_outline";default:return null}}}))(),a=(()=>(class{}))()},rH8X:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J");class i{}var o=e("pMnS"),a=e("lzlj"),s=e("igqZ"),u=e("w6M7"),r=e("iss+"),d=e("IheW"),c=e("cUpR"),m=e("bujt"),p=e("Fwaw"),b=e("5GAg"),f=e("omvX"),h=e("1iX6"),g=e("LFOi"),v=e("UZOC"),y=e("iVkG"),x=e("6XaJ"),w=e("KCVW"),R=e("Cfvw"),j=e("xgIS"),k=e("LRne"),_=e("vkgz"),C=e("1G5W"),O=e("Kj3r"),E=e("lJxs"),I=e("pLZG"),T=e("3E0/"),M=e("eIep");const V=(()=>(class{constructor(){this.params={}}}))(),F=(()=>(class{constructor(n,l){this.tooltipService=l,this._positions=[{originX:"center",originY:"bottom",overlayX:"center",overlayY:"top"},{originX:"center",originY:"top",overlayX:"center",overlayY:"bottom"},{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"}],this.hide=new t.EventEmitter,this.overlayVisible=!1,this._closeOnMoveOver=!1;const e=n.nativeElement,i=Object(R.a)(this.hide).pipe(Object(_.a)(()=>this._model=void 0));Object(j.a)(e.ownerDocument,"mousemove").pipe(Object(C.a)(i),Object(O.a)(100),Object(E.a)(n=>new x.F(n.pageX,n.pageY)),Object(I.a)(n=>{if(this._closeOnMoveOver)return!0;let l=document.elementFromPoint(n.left,n.top);for(;l;){if("cdk-overlay-pane"===l.className)return!1;l=l.parentElement}return!0}),Object(I.a)(n=>!!this._closeOnMoveOver||!new x.G((this.params.ownerElement.nativeElement||this.params.ownerElement).getBoundingClientRect()).containsPoint(n)),Object(T.a)(300)).subscribe(()=>{this.hide.emit(),this.overlayVisible=!1})}set closeOnMoveOver(n){this._closeOnMoveOver=Object(w.b)(n)}get closeOnMoveOver(){return this._closeOnMoveOver}set positions(n){this._positions="string"==typeof n?x.g.parse(n):n}get positions(){return this._positions}get model(){return this._model}ngOnInit(){if(!this.name)throw new Error("Name is required");this.params=this.tooltipService.params[this.name],this.ownerElement=this.params.ownerElement.nativeElement||this.params.ownerElement;const n=this.params.model;if(n)if(n.subscribe)n.subscribe(n=>{this._model=n,this.overlayVisible=!0},()=>{this.hide.emit(),this.overlayVisible=!1});else{const n=this.params.model;n.then?n.then(n=>{this._model=n,this.overlayVisible=!0}).catch(()=>{this.hide.emit(),this.overlayVisible=!1}):(this._model=this.params.model,this.overlayVisible=!0)}else this._model=void 0,this.overlayVisible=!0}}))(),X=(()=>(class{constructor(n,l){this.delay=600,this.show=new t.EventEmitter;const e=n.nativeElement,i=Object(j.a)(e,"mouseleave");Object(j.a)(e,"mouseenter").pipe(Object(M.a)(n=>Object(k.a)(n).pipe(Object(T.a)(this.delay),Object(C.a)(i)))).subscribe(()=>{l.params[this.name]={model:this.model,ownerElement:n,positions:this.positions},this.show.emit()})}}))(),z=(()=>(class{}))();var Y=e("SVse"),A=e("QQfA"),B=e("IP0z"),L=e("zMNK"),D=e("/HVE"),q=e("hOhj"),J=e("QlJR"),N=e("bX5p"),P=t["\u0275crt"]({encapsulation:2,styles:[".deja-overlay-container #tooltip{font-size:.8rem;border:1px solid #888;padding:.5rem}"],data:{}});function $(n){return t["\u0275vid"](0,[(n()(),t["\u0275and"](0,null,null,0))],null,null)}function S(n){return t["\u0275vid"](0,[(n()(),t["\u0275and"](16777216,null,null,2,null,$)),t["\u0275did"](1,540672,null,0,Y.u,[t.ViewContainerRef],{ngTemplateOutletContext:[0,"ngTemplateOutletContext"],ngTemplateOutlet:[1,"ngTemplateOutlet"]},null),t["\u0275pod"](2,{$implicit:0}),(n()(),t["\u0275and"](0,null,null,0))],function(n,l){var e=l.component,t=n(l,2,0,e.model);n(l,1,0,t,e.tooltipTemplate)},null)}function G(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,null,null,null,null,null,null,null)),t["\u0275ncd"](null,0),(n()(),t["\u0275and"](0,null,null,0))],null,null)}function Q(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,5,"deja-overlay",[["hasBackdrop","false"],["isMobile","false"]],null,null,null,N.b,N.a)),t["\u0275did"](1,180224,null,0,J.a,[t.ChangeDetectorRef,t.ElementRef,A.f,x.E],{isVisible:[0,"isVisible"],hasBackdrop:[1,"hasBackdrop"],ownerElement:[2,"ownerElement"],overlayOffsetX:[3,"overlayOffsetX"],overlayOffsetY:[4,"overlayOffsetY"],positions:[5,"positions"],isMobile:[6,"isMobile"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,S)),t["\u0275did"](3,16384,null,0,Y.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,G)),t["\u0275did"](5,16384,null,0,Y.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,1,0,e.overlayVisible,"false",e.ownerElement,0,10,e.positions,"false"),n(l,3,0,!!e.tooltipTemplate),n(l,5,0,!e.tooltipTemplate)},null)}var U=e("Mr+X"),H=e("Gi4r"),K=e("Rlre"),W=e("rWV4");class Z{constructor(){this.tabIndex=1,this.toolTipModel={text:"Je suis un deja-tooltip"},this.tooltipVisible=!1,this.actions=[{action:()=>{this.dialogTitle="<b>I am a deja-dialog !</b><br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet felis id nisl maximus interdum. Morbi mollis sapien sapien. Vivamus lacinia elementum eros"},text:"Cliquez moi pour ouvrir une deja-dialog",type:"primary"},{action:()=>alert("test action"),text:"test sans icon"},{action:()=>alert("test action"),type:"danger"}],this.closeAction=[{action:()=>alert("test action"),icon:"clear"}]}}var nn=t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]   .example[_ngcontent-%COMP%]{margin-top:2rem}"]],data:{}});function ln(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"mat-card",[["class","demo-card demo-basic mat-card"]],null,null,null,a.b,a.a)),t["\u0275did"](1,49152,null,0,s.a,[],null,null),(n()(),t["\u0275eld"](2,0,null,0,1,"deja-markdown",[],null,null,null,u.b,u.a)),t["\u0275did"](3,8503296,null,0,r.a,[t.ChangeDetectorRef,d.c,c.DomSanitizer],{url:[0,"url"]},null)],function(n,l){n(l,3,0,"https://raw.githubusercontent.com/DSI-HUG/dejajs-components/dev/projects/deja-js/component/message-box/readme.md")},null)}function en(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"button",[["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==(n.component.dialogTitle=null)&&t),t},m.d,m.b)),t["\u0275did"](1,180224,null,0,p.b,[t.ElementRef,b.f,[2,f.a]],null,null),(n()(),t["\u0275ted"](-1,0,[" Cancel "])),(n()(),t["\u0275eld"](3,0,null,null,2,"button",[["color","primary"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==(n.component.dialogTitle=null)&&t),t},m.d,m.b)),t["\u0275did"](4,180224,null,0,p.b,[t.ElementRef,b.f,[2,f.a]],{color:[0,"color"]},null),(n()(),t["\u0275ted"](-1,0,[" Ok "]))],function(n,l){n(l,4,0,"primary")},function(n,l){n(l,0,0,t["\u0275nov"](l,1).disabled||null,"NoopAnimations"===t["\u0275nov"](l,1)._animationMode),n(l,3,0,t["\u0275nov"](l,4).disabled||null,"NoopAnimations"===t["\u0275nov"](l,4)._animationMode)})}function tn(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,8,"deja-dialog",[],null,[[null,"closed"],[null,"click"]],function(n,l,e){var i=!0,o=n.component;return"click"===l&&(i=!1!==t["\u0275nov"](n,1).close(e)&&i),"closed"===l&&(i=!1!==(o.dialogTitle=null)&&i),i},h.b,h.a)),t["\u0275did"](1,180224,null,2,g.a,[t.ElementRef],null,{closed:"closed"}),t["\u0275qud"](603979776,6,{okButton:0}),t["\u0275qud"](603979776,7,{cancelButton:0}),(n()(),t["\u0275eld"](4,0,null,0,4,"deja-message-box",[["showCloseIcon","true"],["title","Title"],["type","primary"]],null,[[null,"close"]],function(n,l,e){var t=!0;return"close"===l&&(t=!1!==(n.component.dialogTitle=null)&&t),t},v.b,v.a)),t["\u0275did"](5,114688,null,1,y.a,[],{type:[0,"type"],title:[1,"title"],showCloseIcon:[2,"showCloseIcon"]},{close:"close"}),t["\u0275qud"](603979776,8,{actionsTemplate:0}),(n()(),t["\u0275eld"](7,0,null,0,0,"span",[],[[8,"innerHTML",1]],null,null,null,null)),(n()(),t["\u0275and"](0,[[8,2],["actionsTemplate",2]],0,0,null,en))],function(n,l){n(l,5,0,"primary","Title","true")},function(n,l){n(l,7,0,l.component.dialogTitle)})}function on(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"div",[["id","tooltip"]],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,[" "," "]))],null,function(n,l){n(l,1,0,l.context.$implicit.text)})}function an(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"deja-tooltip",[["name","test-tt"]],null,[[null,"hide"]],function(n,l,e){var t=!0;return"hide"===l&&(t=0!=(n.component.tooltipVisible=!1)&&t),t},Q,P)),t["\u0275did"](1,114688,null,1,F,[t.ElementRef,V],{name:[0,"name"]},{hide:"hide"}),t["\u0275qud"](603979776,10,{tooltipTemplate:0}),(n()(),t["\u0275and"](0,[[10,2],["tooltipTemplate",2]],0,0,null,on))],function(n,l){n(l,1,0,"test-tt")},null)}function sn(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,4,"button",[["class","action-button"],["mat-mini-fab",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,m.d,m.b)),t["\u0275did"](1,180224,null,0,p.b,[t.ElementRef,b.f,[2,f.a]],{color:[0,"color"]},null),(n()(),t["\u0275eld"](2,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,U.b,U.a)),t["\u0275did"](3,9158656,null,0,H.b,[t.ElementRef,H.d,[8,null],[2,H.a]],null,null),(n()(),t["\u0275ted"](-1,0,["clear"]))],function(n,l){n(l,1,0,"blank"),n(l,3,0)},function(n,l){n(l,0,0,t["\u0275nov"](l,1).disabled||null,"NoopAnimations"===t["\u0275nov"](l,1)._animationMode),n(l,2,0,t["\u0275nov"](l,3).inline,"primary"!==t["\u0275nov"](l,3).color&&"accent"!==t["\u0275nov"](l,3).color&&"warn"!==t["\u0275nov"](l,3).color)})}function un(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,38,"div",[["class","example"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,tn)),t["\u0275did"](2,16384,null,0,Y.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](3,0,null,null,5,"deja-message-box",[["title","Title"],["type","primary"]],null,null,null,v.b,v.a)),t["\u0275did"](4,114688,null,1,y.a,[],{type:[0,"type"],title:[1,"title"]},null),t["\u0275qud"](603979776,9,{actionsTemplate:0}),(n()(),t["\u0275ted"](-1,0,[" Du texte dans la "])),(n()(),t["\u0275eld"](7,0,null,0,1,"b",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["message box"])),(n()(),t["\u0275eld"](9,0,null,null,0,"div",[["style","margin:1rem;"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,an)),t["\u0275did"](11,16384,null,0,Y.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](12,0,null,null,5,"deja-message-box",[["title","Title"],["type","success"]],null,null,null,v.b,v.a)),t["\u0275did"](13,114688,null,1,y.a,[],{type:[0,"type"],title:[1,"title"],actions:[2,"actions"]},null),t["\u0275qud"](603979776,11,{actionsTemplate:0}),(n()(),t["\u0275eld"](15,0,null,0,2,"span",[["deja-tooltip","test-tt"]],null,[[null,"tooltip-show"]],function(n,l,e){var t=!0;return"tooltip-show"===l&&(t=0!=(n.component.tooltipVisible=!0)&&t),t},null,null)),t["\u0275did"](16,16384,null,0,X,[t.ElementRef,V],{model:[0,"model"],name:[1,"name"]},{show:"tooltip-show"}),(n()(),t["\u0275ted"](-1,null,['Un message "success"'])),(n()(),t["\u0275eld"](18,0,null,null,0,"div",[["style","margin:1rem;"]],null,null,null,null,null)),(n()(),t["\u0275eld"](19,0,null,null,5,"deja-message-box",[["horizontal",""],["title","Title"],["type","warn"]],null,null,null,v.b,v.a)),t["\u0275did"](20,114688,null,1,y.a,[],{type:[0,"type"],title:[1,"title"],actions:[2,"actions"],horizontal:[3,"horizontal"]},null),t["\u0275qud"](603979776,12,{actionsTemplate:0}),(n()(),t["\u0275ted"](-1,0,[' Un message "warn" '])),(n()(),t["\u0275eld"](23,0,null,0,1,"b",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["horizontal"])),(n()(),t["\u0275eld"](25,0,null,null,0,"div",[["style","margin:1rem;"]],null,null,null,null,null)),(n()(),t["\u0275eld"](26,0,null,null,7,"deja-message-box",[["horizontal",""],["title","Title"],["type","danger"]],null,null,null,v.b,v.a)),t["\u0275did"](27,114688,null,1,y.a,[],{type:[0,"type"],title:[1,"title"],horizontal:[2,"horizontal"]},null),t["\u0275qud"](603979776,13,{actionsTemplate:0}),(n()(),t["\u0275ted"](-1,0,[' Un message "danger" '])),(n()(),t["\u0275eld"](30,0,null,0,1,"b",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["horizontal"])),(n()(),t["\u0275ted"](-1,0,[" avec une action au format template "])),(n()(),t["\u0275and"](0,[[13,2],["actionsTemplate",2]],0,0,null,sn)),(n()(),t["\u0275eld"](34,0,null,null,0,"div",[["style","margin:1rem;"]],null,null,null,null,null)),(n()(),t["\u0275eld"](35,0,null,null,3,"deja-message-box",[["horizontal",""]],null,null,null,v.b,v.a)),t["\u0275did"](36,114688,null,1,y.a,[],{horizontal:[0,"horizontal"]},null),t["\u0275qud"](603979776,14,{actionsTemplate:0}),(n()(),t["\u0275ted"](-1,0,[" Un message horizontal sans type ni titre "]))],function(n,l){var e=l.component;n(l,2,0,e.dialogTitle),n(l,4,0,"primary","Title"),n(l,11,0,e.tooltipVisible),n(l,13,0,"success","Title",e.actions),n(l,16,0,e.toolTipModel,"test-tt"),n(l,20,0,"warn","Title",e.closeAction,""),n(l,27,0,"danger","Title",""),n(l,36,0,"")},null)}function rn(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,10,"mat-tab-group",[["class","mat-tab-group"]],[[2,"mat-tab-group-dynamic-height",null],[2,"mat-tab-group-inverted-header",null]],[[null,"selectedTabChange"]],function(n,l,e){var t=!0;return"selectedTabChange"===l&&(t=!1!==(n.component.tabIndex=e.index)&&t),t},K.c,K.b)),t["\u0275did"](1,3325952,null,1,W.f,[t.ElementRef,t.ChangeDetectorRef,[2,W.a],[2,f.a]],{selectedIndex:[0,"selectedIndex"]},{selectedTabChange:"selectedTabChange"}),t["\u0275qud"](603979776,1,{_tabs:1}),(n()(),t["\u0275eld"](3,16777216,null,null,3,"mat-tab",[["label","API REFERENCE"]],null,null,null,K.d,K.a)),t["\u0275did"](4,770048,[[1,4]],2,W.c,[t.ViewContainerRef],{textLabel:[0,"textLabel"]},null),t["\u0275qud"](603979776,2,{templateLabel:0}),t["\u0275qud"](335544320,3,{_explicitContent:0}),(n()(),t["\u0275eld"](7,16777216,null,null,3,"mat-tab",[["label","EXAMPLES"]],null,null,null,K.d,K.a)),t["\u0275did"](8,770048,[[1,4]],2,W.c,[t.ViewContainerRef],{textLabel:[0,"textLabel"]},null),t["\u0275qud"](603979776,4,{templateLabel:0}),t["\u0275qud"](335544320,5,{_explicitContent:0}),(n()(),t["\u0275and"](16777216,null,null,1,null,ln)),t["\u0275did"](12,16384,null,0,Y.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,un)),t["\u0275did"](14,16384,null,0,Y.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,1,0,e.tabIndex),n(l,4,0,"API REFERENCE"),n(l,8,0,"EXAMPLES"),n(l,12,0,0===e.tabIndex),n(l,14,0,1===e.tabIndex)},function(n,l){n(l,0,0,t["\u0275nov"](l,1).dynamicHeight,"below"===t["\u0275nov"](l,1).headerPosition)})}function dn(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"message-box-demo",[],null,null,null,rn,nn)),t["\u0275did"](1,49152,null,0,Z,[],null,null)],null,null)}var cn=t["\u0275ccf"]("message-box-demo",Z,dn,{},{},[]),mn=e("s7LF"),pn=e("POq0"),bn=e("Xd0L"),fn=e("BzsH"),hn=e("KYkd"),gn=e("iInd");e.d(l,"DejaMessageBoxDemoModuleNgFactory",function(){return vn});var vn=t["\u0275cmf"](i,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,cn]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,Y.p,Y.o,[t.LOCALE_ID,[2,Y.F]]),t["\u0275mpd"](4608,mn["\u0275angular_packages_forms_forms_o"],mn["\u0275angular_packages_forms_forms_o"],[]),t["\u0275mpd"](4608,pn.c,pn.c,[]),t["\u0275mpd"](4608,d.i,d.o,[Y.d,t.PLATFORM_ID,d.m]),t["\u0275mpd"](4608,d.p,d.p,[d.i,d.n]),t["\u0275mpd"](5120,d.a,function(n){return[n]},[d.p]),t["\u0275mpd"](4608,d.l,d.l,[]),t["\u0275mpd"](6144,d.j,null,[d.l]),t["\u0275mpd"](4608,d.h,d.h,[d.j]),t["\u0275mpd"](6144,d.b,null,[d.h]),t["\u0275mpd"](4608,d.f,d.k,[d.b,t.Injector]),t["\u0275mpd"](4608,d.c,d.c,[d.f]),t["\u0275mpd"](4608,A.d,A.d,[A.j,A.f,t.ComponentFactoryResolver,A.i,A.g,t.Injector,t.NgZone,Y.d,B.b,[2,Y.j]]),t["\u0275mpd"](5120,A.k,A.l,[A.d]),t["\u0275mpd"](135680,x.E,x.E,[t.NgZone]),t["\u0275mpd"](4608,V,V,[]),t["\u0275mpd"](1073742336,Y.c,Y.c,[]),t["\u0275mpd"](1073742336,mn["\u0275angular_packages_forms_forms_d"],mn["\u0275angular_packages_forms_forms_d"],[]),t["\u0275mpd"](1073742336,mn.FormsModule,mn.FormsModule,[]),t["\u0275mpd"](1073742336,B.a,B.a,[]),t["\u0275mpd"](1073742336,bn.l,bn.l,[[2,bn.d],[2,c.HAMMER_LOADER]]),t["\u0275mpd"](1073742336,D.b,D.b,[]),t["\u0275mpd"](1073742336,bn.v,bn.v,[]),t["\u0275mpd"](1073742336,p.c,p.c,[]),t["\u0275mpd"](1073742336,s.e,s.e,[]),t["\u0275mpd"](1073742336,L.g,L.g,[]),t["\u0275mpd"](1073742336,pn.d,pn.d,[]),t["\u0275mpd"](1073742336,b.a,b.a,[]),t["\u0275mpd"](1073742336,W.j,W.j,[]),t["\u0275mpd"](1073742336,fn.b,fn.b,[]),t["\u0275mpd"](1073742336,H.c,H.c,[]),t["\u0275mpd"](1073742336,g.b,g.b,[]),t["\u0275mpd"](1073742336,y.b,y.b,[]),t["\u0275mpd"](1073742336,d.e,d.e,[]),t["\u0275mpd"](1073742336,d.d,d.d,[]),t["\u0275mpd"](1073742336,hn.a,hn.a,[]),t["\u0275mpd"](1073742336,q.c,q.c,[]),t["\u0275mpd"](1073742336,A.h,A.h,[]),t["\u0275mpd"](1073742336,x.D,x.D,[]),t["\u0275mpd"](1073742336,J.b,J.b,[]),t["\u0275mpd"](1073742336,z,z,[]),t["\u0275mpd"](1073742336,gn.p,gn.p,[[2,gn.u],[2,gn.l]]),t["\u0275mpd"](1073742336,i,i,[]),t["\u0275mpd"](256,d.m,"XSRF-TOKEN",[]),t["\u0275mpd"](256,d.n,"X-XSRF-TOKEN",[]),t["\u0275mpd"](1024,gn.j,function(){return[[{path:"",component:Z},{path:"**",redirectTo:"",pathMatch:"full"}]]},[])])})},w6M7:function(n,l,e){"use strict";var t=e("8Y7J");e("iss+"),e("IheW"),e("cUpR"),e.d(l,"a",function(){return i}),e.d(l,"b",function(){return o});var i=t["\u0275crt"]({encapsulation:2,styles:[[".markdown-content{overflow-y:auto;padding:1rem}.markdown-content table{border-collapse:collapse}.markdown-content table tr td,.markdown-content table tr th{border-width:1px;border-style:solid;padding:1rem}"]],data:{}});function o(n){return t["\u0275vid"](2,[(n()(),t["\u0275eld"](0,0,null,null,0,"div",[["class","markdown-content"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.component.html)})}}}]);