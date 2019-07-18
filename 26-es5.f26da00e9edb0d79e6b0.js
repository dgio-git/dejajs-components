(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{VzA2:function(n,e,l){"use strict";l.r(e);var t=l("CcnG"),o=function(){return function(){}}(),a=l("pMnS"),i=l("lzlj"),u=l("FVSy"),r=l("w6M7"),d=l("iss+"),s=l("t/Na"),c=l("ZYjt"),g=l("JDXa"),m=l("k6xb"),p=l("I+O4"),h=l("n0hM"),f=l("Ip0R"),b=l("FbN9"),v=l("8mMr"),C=l("dWZg"),w=l("mrSG"),x=l("n6gG"),_=l("bne5"),M=l("p0ib"),O=l("P6uZ"),R=l("xMyE"),y=l("ny24"),P=function(){return function(n,e,l){this.min=n,this.max=e,this.$width=l}}(),k=function(){},E=function(){function n(n,e,l){this.changeDetectorRef=n,this.elementRef=e,this._control=l,this.step=1,this.selected=0,this.select=new t.EventEmitter,this.errorFeedback=new t.EventEmitter,this.minimumRangePercentage=.01,this._readOnly=!0,this._disabled=!1,this._onChangeCallback=k,this._onTouchCallback=k,this._control&&(this._control.valueAccessor=this)}return n.prototype.registerOnChange=function(n){this._onChangeCallback=n},n.prototype.registerOnTouched=function(n){this._onTouchCallback=n},Object.defineProperty(n.prototype,"ranges",{get:function(){return this._ranges||[]},set:function(n){n&&(this.writeValue(n),this._onChangeCallback(n))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"disabled",{get:function(){return this._disabled},set:function(n){this._disabled=Object(x.b)(n),this.changeDetectorRef.markForCheck()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"readOnly",{get:function(){return this._readOnly||this.disabled},set:function(n){this._readOnly=Object(x.b)(n)},enumerable:!0,configurable:!0}),n.prototype.writeValue=function(n){if(n&&n.length){var e=this.elementRef.nativeElement.firstElementChild.getBoundingClientRect().width,l=n[n.length-1].max-n[0].min;this._ranges=n.map(function(t,o){return t.$width=+(e*((n[o].max-n[o].min)/(l/100))/100).toFixed(2),t}),this.changeDetectorRef.markForCheck()}},n.prototype.setDisabledState=function(n){this.disabled=n},n.prototype.onResize=function(){this.ranges=this.ranges.concat()},n.prototype.add=function(){if(!this.readOnly){if("number"!=typeof this.step)throw new Error("Invalid step type, you have to implement the add function yourself for the fn & array.");var n=this.ranges,e=this.selected,l=n[e],t=l.max-l.min,o=void 0,a=void 0;if(t/(n[n.length-1].max-n[0].min)>2*this.minimumRangePercentage&&t>=2*this.step){a=new P(l.min,o=l.min+t/2),l.min=o;var i=n.slice(0,e),u=n.length-1>e?n.slice(e+1):[],r=w.f(i,[a,l],u),d=r.indexOf(a);r[d].max=this.toStep(r,d,r[d].max),r=r.map(function(n,e){return 0!==e&&(n.min=r[e-1].max),n}),this.ranges=r}else this.errorFeedback.emit(new Error("Range is too small to be splitted"))}},n.prototype.remove=function(){var n=this;if(!this.readOnly&&this.ranges.length>2){var e=this.ranges.filter(function(e,l){return n.selected!==l});this.ranges=e.map(function(n,l){return l!==e.length-1&&(n.max=e[l+1].min),n})}},n.prototype.refresh=function(){this.changeDetectorRef.markForCheck()},n.prototype.onSelect=function(n,e){if(!this.disabled&&this.selected!==e){var l=n;l.range=this.ranges[e],l.index=e,l.ranges=this.ranges,this.select.emit(l),this.selected=e}},n.prototype.onMouseDown=function(n,e){var l=this;if(!this.readOnly){for(var t=n.pageX,o=this.ranges,a=this.ranges[e],i=a.max,u=n.target.parentElement;!u.classList.contains("block");)u=u.parentElement;var r=Object(_.a)(document,"mouseup"),d=Object(_.a)(document.body,"mouseleave"),s=Object(M.a)(r,d).pipe(Object(O.a)(),Object(R.a)(function(){l.elementRef.nativeElement.firstElementChild.ownerDocument.body.classList.remove("noselect"),l._onChangeCallback(l._ranges)}));Object(_.a)(document,"mousemove").pipe(Object(y.a)(s)).subscribe(function(n){var u=-(t-n.pageX),r=l.ranges[e+1],d=o[o.length-1].max-o[0].min,s=l.elementRef.nativeElement.firstElementChild,c=s.getBoundingClientRect().width;s.ownerDocument.body.classList.add("noselect");var g=i+u*d/c,m=l.minimumRangePercentage*d,p=a.min+m;g=Math.min(g,r.max-m),g=Math.max(g,p);var h=l.toStep(o,e,g);r.min=a.max=h,o[e]=a,o[e+1]=r,l.writeValue(o)})}},n.prototype.toStep=function(n,e,l){var t=n[e],o=n[n.length-1>e?e+1:e].max,a=0!==e?n[e-1].max:0,i=this.minimumRangePercentage*(n[n.length-1].max-n[0].min),u=t.min+i,r=o-i;if("number"==typeof this.step){var d=this.step,s=100/(100*d),c=Math.round(l*s)/s,g=d.toString().replace(/[0-9]+\./,"").length,m=+c.toFixed(g),p=Math.min(m,o-d),h=Math.max(m,a+d);return l>t.max?r>p?p:r:u<h?h:u}if("function"==typeof this.step){var f={};return f.range=this.ranges[e],f.index=e,f.ranges=this.ranges,f.newMax=l,this.step(f)}if(this.step instanceof Array){var b,v=l;return this.step.filter(function(n){return n<=r&&n>=u}).forEach(function(n){var e=Math.abs(n-l);(void 0===b||b>e)&&(v=n,b=e)}),v}throw new Error("Invalid step type.")},n}(),F=t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   #container[_ngcontent-%COMP%]{width:100%;display:flex;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);height:32px}[_nghost-%COMP%]   #container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[_nghost-%COMP%]   #container[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]{display:inline-flex}[_nghost-%COMP%]   #container[_ngcontent-%COMP%]   .range[_ngcontent-%COMP%]{display:inline-flex;flex-grow:100;justify-content:center;width:7px;cursor:pointer}[_nghost-%COMP%]   #container[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%]{display:inline-flex;flex-basis:auto;justify-content:center;z-index:5;cursor:ew-resize}[_nghost-%COMP%]   #container[_ngcontent-%COMP%]:hover{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}[_nghost-%COMP%]   #container[_ngcontent-%COMP%]   .range[_ngcontent-%COMP%]   .default-range[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center;font-size:10pt;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}[_nghost-%COMP%]   #container[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%]   .default-separator[_ngcontent-%COMP%]{width:7px;height:25.6px;margin-top:3.2px;display:flex;justify-content:center}[_nghost-%COMP%]   #container[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%]   .default-separator[_ngcontent-%COMP%]   .default-separator-item[_ngcontent-%COMP%]{height:100%;width:1px}[_nghost-%COMP%]   #container[_ngcontent-%COMP%]   .range.selected[_ngcontent-%COMP%]{-webkit-animation-name:selected;animation-name:selected;-webkit-animation-duration:175ms;animation-duration:175ms;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}[_nghost-%COMP%]   #container[_ngcontent-%COMP%]   .range[_ngcontent-%COMP%]:not(.selected){-webkit-animation-name:not-selected;animation-name:not-selected;-webkit-animation-duration:175ms;animation-duration:175ms;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}"]],data:{}});function T(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"span",[["class","default-range"]],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,[""," - ",""]))],null,function(n,e){n(e,1,0,e.parent.context.$implicit.min,e.parent.context.$implicit.max)})}function j(n){return t["\u0275vid"](0,[(n()(),t["\u0275and"](0,null,null,0))],null,null)}function I(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"span",[["class","default-separator"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,0,"span",[["class","default-separator-item"]],null,null,null,null,null))],null,null)}function D(n){return t["\u0275vid"](0,[(n()(),t["\u0275and"](0,null,null,0))],null,null)}function N(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,5,"span",[["class","separator"]],null,[[null,"mousedown"]],function(n,e,l){var t=!0;return"mousedown"===e&&(t=!1!==n.component.onMouseDown(l,n.parent.context.index)&&t),t},null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,I)),t["\u0275did"](2,16384,null,0,f.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,2,null,D)),t["\u0275did"](4,540672,null,0,f.u,[t.ViewContainerRef],{ngTemplateOutletContext:[0,"ngTemplateOutletContext"],ngTemplateOutlet:[1,"ngTemplateOutlet"]},null),t["\u0275pod"](5,{$implicit:0,index:1,ranges:2})],function(n,e){var l=e.component;n(e,2,0,!l.separatorTemplate);var t=n(e,5,0,e.parent.context.$implicit,e.parent.context.index,l.ranges);n(e,4,0,t,l.separatorTemplate)},null)}function W(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,8,"section",[["class","block"]],[[4,"width","px"]],null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,5,"span",[["class","range"]],[[2,"selected",null]],[[null,"mousedown"]],function(n,e,l){var t=!0;return"mousedown"===e&&(t=!1!==n.component.onSelect(l,n.context.index)&&t),t},null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,T)),t["\u0275did"](3,16384,null,0,f.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,2,null,j)),t["\u0275did"](5,540672,null,0,f.u,[t.ViewContainerRef],{ngTemplateOutletContext:[0,"ngTemplateOutletContext"],ngTemplateOutlet:[1,"ngTemplateOutlet"]},null),t["\u0275pod"](6,{$implicit:0,index:1,ranges:2}),(n()(),t["\u0275and"](16777216,null,null,1,null,N)),t["\u0275did"](8,16384,null,0,f.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,e){var l=e.component;n(e,3,0,!l.rangeTemplate);var t=n(e,6,0,e.context.$implicit,e.context.index,l.ranges);n(e,5,0,t,l.rangeTemplate),n(e,8,0,l.ranges.length>e.context.index+1)},function(n,e){var l=e.component;n(e,0,0,e.context.$implicit.$width),n(e,1,0,l.selected===e.context.index)})}function A(n){return t["\u0275vid"](2,[(n()(),t["\u0275eld"](0,0,null,null,2,"section",[["id","container"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,W)),t["\u0275did"](2,278528,null,0,f.m,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,e){n(e,2,0,e.component.ranges)},null)}var L=l("gIcY"),z=l("21Lb"),S=l("OzfB"),q=l("bujt"),V=l("UodH"),$=l("lLAP"),X=l("wFw1"),U=l("Rlre"),H=l("La40"),Y=l("0/uQ"),B=l("67Y/"),G=l("dC0D"),J=l("HJBe"),Z=function(){return function(){}}(),K=function(){return function(n,e){this.minWeight=n,this.maxWeight=e}}(),Q=[new P(4,16),new P(16,20),new P(20,24),new P(24,36)],nn=[new P(0,12.5),new P(12.5,25),new P(25,30)],en=[new P(0,12),new P(12,20),new P(20,24)],ln=[new K(3,4),new K(4,6),new K(6,9),new K(9,12),new K(12,16),new K(16,20),new K(20,25),new K(25,32),new K(32,40),new K(40,200)],tn=[1,2,4,8,16,20,22,24],on=function(){function n(){this.tabIndex=1,this.numericStep=1,this.errorFeed=new t.EventEmitter,this.readOnlyRanges=Q,this.rangesWithInterval=en,this.ranges=nn,this.weights=ln,this.steps=tn,this.computeRangeFromWeight(),this.errors=Object(Y.a)(this.errorFeed).pipe(Object(B.a)(function(n){return{gate:!0,message:n.message}}),Object(G.a)(function(n,e){return w.f(n,[e])},[]),Object(J.a)([]))}return n.prototype.stepFn=function(n){var e=n.ranges[n.index],l=n.ranges.length-1===n.index,t=Math.pow(Math.E,n.newMax-e.min)/4,o=e.minWeight+t;if(o=Math.round(o),o=Math.max(o,e.minWeight+1),!l){var a=n.ranges[n.index+1];o=Math.min(o,a.maxWeight-1),a.minWeight=o,e.maxWeight=o}return e.min+Math.log(4*(o-e.minWeight))},n.prototype.remove=function(n){if(this.weights.length>=2){var e=this.weights.find(function(e,l){return n===l}),l=this.weights.filter(function(e,l){return n!==l});n>0&&(l[n-1].maxWeight=e.maxWeight),this.weights=l,this.weightRef.selected=0,this.computeRangeFromWeight()}},n.prototype.add=function(n){var e=this.weights.find(function(e,l){return n===l}),l=e.maxWeight-e.minWeight;if(l>=2){var t=new K(e.minWeight,e.minWeight+l/2);e.minWeight=e.minWeight+l/2;var o=0!==n?this.weights.slice(0,n):[],a=n<this.weights.length?this.weights.slice(n+1):[];this.weights=w.f(o,[t,e],a),this.weightRef.selected=0,this.computeRangeFromWeight()}},n.prototype.increase=function(){this.weights[this.weights.length-1].maxWeight++,this.computeRangeFromWeight()},n.prototype.decrease=function(){this.weights[0].minWeight>0&&(this.weights[0].minWeight--,this.computeRangeFromWeight())},n.prototype.computeRangeFromWeight=function(){var n=0;this.weights=this.weights.map(function(e){var l=Math.log(4*(e.maxWeight-e.minWeight));return e.min=n,e.max=n+l,n+=l,e})},n}(),an=t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]   #custom-range-actions[_ngcontent-%COMP%]{display:flex;justify-content:space-around}[_nghost-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:24px}[_nghost-%COMP%]   #flex-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-end}[_nghost-%COMP%]   #flex-container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{display:block;flex-grow:1;flex-shrink:0;box-sizing:border-box;margin:1rem}[_nghost-%COMP%]   #flex-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex-grow:0;flex-shrink:1;flex-basis:36px;box-sizing:border-box;margin:1rem}[_nghost-%COMP%]   #custom-range[_ngcontent-%COMP%]{flex-basis:max-content;-ms-grid-row-align:center;align-self:center;height:24px}[_nghost-%COMP%]   #custom-range[_ngcontent-%COMP%]   .custom-range[_ngcontent-%COMP%]{display:flex;align-self:center;font-size:10pt;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}[_nghost-%COMP%]   #custom-range[_ngcontent-%COMP%]   .custom-separator[_ngcontent-%COMP%]{display:flex;width:10px;flex-wrap:wrap}[_nghost-%COMP%]   #custom-range[_ngcontent-%COMP%]   .custom-separator[_ngcontent-%COMP%]   svg.triangle[_ngcontent-%COMP%]{margin-top:-5px;width:10px;height:5px}[_nghost-%COMP%]   #custom-range[_ngcontent-%COMP%]   .custom-separator[_ngcontent-%COMP%]   svg.triangle[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#333}[_nghost-%COMP%]   #custom-range[_ngcontent-%COMP%]   .custom-separator[_ngcontent-%COMP%]   svg.line[_ngcontent-%COMP%]{height:34px;margin-top:-5px}[_nghost-%COMP%]   #custom-range[_ngcontent-%COMP%]   .custom-separator[_ngcontent-%COMP%]   svg.line[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%]{fill:#333;height:34px;width:1px}"]],data:{}});function un(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"mat-card",[["class","demo-card demo-basic mat-card"]],null,null,null,i.b,i.a)),t["\u0275did"](1,49152,null,0,u.a,[],null,null),(n()(),t["\u0275eld"](2,0,null,0,1,"deja-markdown",[],null,null,null,r.b,r.a)),t["\u0275did"](3,8503296,null,0,d.a,[t.ChangeDetectorRef,s.c,c.DomSanitizer],{url:[0,"url"]},null)],function(n,e){n(e,3,0,"https://raw.githubusercontent.com/DSI-HUG/dejajs-components/dev/projects/deja-js/component/range/readme.md")},null)}function rn(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"span",[["class","custom-range"]],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,[""," - "," kg"])),t["\u0275ppd"](2,2),t["\u0275ppd"](3,2)],null,function(n,e){var l=t["\u0275unv"](e,1,0,n(e,2,0,t["\u0275nov"](e.parent.parent,0),e.context.$implicit.minWeight,"1.0-2")),o=t["\u0275unv"](e,1,1,n(e,3,0,t["\u0275nov"](e.parent.parent,0),e.context.$implicit.maxWeight,"1.0-2"));n(e,1,0,l,o)})}function dn(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,6,"span",[["class","custom-separator"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,":svg:svg",[["class","triangle"]],null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,0,":svg:polygon",[["points","0,0 10,0 5,5"]],null,null,null,null,null)),(n()(),t["\u0275eld"](3,0,null,null,1,":svg:svg",[["class","line"]],null,null,null,null,null)),(n()(),t["\u0275eld"](4,0,null,null,0,":svg:rect",[["x","4.5"],["y","0"]],null,null,null,null,null)),(n()(),t["\u0275eld"](5,0,null,null,1,":svg:svg",[["class","triangle"]],null,null,null,null,null)),(n()(),t["\u0275eld"](6,0,null,null,0,":svg:polygon",[["points","0,5 5,0 10,5 "]],null,null,null,null,null))],null,null)}function sn(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,5,"deja-snackbar",[["alignment","bottom right"]],null,[[null,"onAnimationDone"],["window","resize"]],function(n,e,l){var o=!0;return"window:resize"===e&&(o=!1!==t["\u0275nov"](n,1).onResize()&&o),"onAnimationDone"===e&&(o=0!=(n.parent.context.$implicit.gate=!1)&&o),o},g.b,g.a)),t["\u0275did"](1,4440064,null,0,m.a,[t.ElementRef],{duration:[0,"duration"],alignment:[1,"alignment"]},{onAnimationDone:"onAnimationDone"}),(n()(),t["\u0275eld"](2,0,null,0,3,"deja-message-box",[["horizontal",""],["type","warn"]],null,null,null,p.b,p.a)),t["\u0275did"](3,114688,null,1,h.a,[],{type:[0,"type"],horizontal:[1,"horizontal"]},null),t["\u0275qud"](603979776,20,{actionsTemplate:0}),(n()(),t["\u0275ted"](5,0,["",""]))],function(n,e){n(e,1,0,5e3,"bottom right"),n(e,3,0,"warn","")},function(n,e){n(e,5,0,e.parent.context.$implicit.message)})}function cn(n){return t["\u0275vid"](0,[(n()(),t["\u0275and"](16777216,null,null,1,null,sn)),t["\u0275did"](1,16384,null,0,f.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](0,null,null,0))],function(n,e){n(e,1,0,null==e.context.$implicit?null:e.context.$implicit.gate)},null)}function gn(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,92,"div",[],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,14,"mat-card",[["class","demo-card mat-card"]],null,null,null,i.b,i.a)),t["\u0275did"](2,49152,null,0,u.a,[],null,null),(n()(),t["\u0275eld"](3,0,null,0,3,"mat-toolbar",[["class","mat-toolbar"],["color","primary"]],[[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,b.b,b.a)),t["\u0275did"](4,4243456,null,1,v.a,[t.ElementRef,C.a,f.d],{color:[0,"color"]},null),t["\u0275qud"](603979776,8,{_toolbarRows:1}),(n()(),t["\u0275ted"](-1,0,["Default template : Read Only"])),(n()(),t["\u0275eld"](7,0,null,0,8,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),t["\u0275did"](8,16384,null,0,u.c,[],null,null),(n()(),t["\u0275eld"](9,0,null,null,6,"deja-range",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],["window","resize"]],function(n,e,l){var o=!0,a=n.component;return"window:resize"===e&&(o=!1!==t["\u0275nov"](n,13).onResize()&&o),"ngModelChange"===e&&(o=!1!==(a.readOnlyRanges=l)&&o),o},A,F)),t["\u0275did"](10,671744,null,0,L.NgModel,[[8,null],[8,null],[8,null],[8,null]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,L.NgControl,null,[L.NgModel]),t["\u0275did"](12,16384,null,0,L.NgControlStatus,[[4,L.NgControl]],null,null),t["\u0275did"](13,49152,null,2,E,[t.ChangeDetectorRef,t.ElementRef,[6,L.NgControl]],null,null),t["\u0275qud"](603979776,9,{rangeTemplate:0}),t["\u0275qud"](603979776,10,{separatorTemplate:0}),(n()(),t["\u0275eld"](16,0,null,null,14,"mat-card",[["class","demo-card mat-card"]],null,null,null,i.b,i.a)),t["\u0275did"](17,49152,null,0,u.a,[],null,null),(n()(),t["\u0275eld"](18,0,null,0,3,"mat-toolbar",[["class","mat-toolbar"],["color","primary"]],[[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,b.b,b.a)),t["\u0275did"](19,4243456,null,1,v.a,[t.ElementRef,C.a,f.d],{color:[0,"color"]},null),t["\u0275qud"](603979776,11,{_toolbarRows:1}),(n()(),t["\u0275ted"](-1,0,["Default template : Movable separator, with an array of accepted intervals"])),(n()(),t["\u0275eld"](22,0,null,0,8,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),t["\u0275did"](23,16384,null,0,u.c,[],null,null),(n()(),t["\u0275eld"](24,0,null,null,6,"deja-range",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],["window","resize"]],function(n,e,l){var o=!0,a=n.component;return"window:resize"===e&&(o=!1!==t["\u0275nov"](n,28).onResize()&&o),"ngModelChange"===e&&(o=!1!==(a.rangesWithInterval=l)&&o),o},A,F)),t["\u0275did"](25,671744,null,0,L.NgModel,[[8,null],[8,null],[8,null],[8,null]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,L.NgControl,null,[L.NgModel]),t["\u0275did"](27,16384,null,0,L.NgControlStatus,[[4,L.NgControl]],null,null),t["\u0275did"](28,49152,null,2,E,[t.ChangeDetectorRef,t.ElementRef,[6,L.NgControl]],{step:[0,"step"],selected:[1,"selected"],readOnly:[2,"readOnly"]},null),t["\u0275qud"](603979776,12,{rangeTemplate:0}),t["\u0275qud"](603979776,13,{separatorTemplate:0}),(n()(),t["\u0275eld"](31,0,null,null,26,"mat-card",[["class","demo-card mat-card"]],null,null,null,i.b,i.a)),t["\u0275did"](32,49152,null,0,u.a,[],null,null),(n()(),t["\u0275eld"](33,0,null,0,3,"mat-toolbar",[["class","mat-toolbar"],["color","primary"]],[[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,b.b,b.a)),t["\u0275did"](34,4243456,null,1,v.a,[t.ElementRef,C.a,f.d],{color:[0,"color"]},null),t["\u0275qud"](603979776,14,{_toolbarRows:1}),(n()(),t["\u0275ted"](-1,0,["Default template : Movable separator, with a numeric step"])),(n()(),t["\u0275eld"](37,0,null,0,8,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),t["\u0275did"](38,16384,null,0,u.c,[],null,null),(n()(),t["\u0275eld"](39,0,null,null,6,"deja-range",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"errorFeedback"],["window","resize"]],function(n,e,l){var o=!0,a=n.component;return"window:resize"===e&&(o=!1!==t["\u0275nov"](n,43).onResize()&&o),"ngModelChange"===e&&(o=!1!==(a.ranges=l)&&o),"errorFeedback"===e&&(o=!1!==a.errorFeed.emit(l)&&o),o},A,F)),t["\u0275did"](40,671744,null,0,L.NgModel,[[8,null],[8,null],[8,null],[8,null]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,L.NgControl,null,[L.NgModel]),t["\u0275did"](42,16384,null,0,L.NgControlStatus,[[4,L.NgControl]],null,null),t["\u0275did"](43,49152,[[1,4],["dejaRange",4]],2,E,[t.ChangeDetectorRef,t.ElementRef,[6,L.NgControl]],{step:[0,"step"],readOnly:[1,"readOnly"]},{errorFeedback:"errorFeedback"}),t["\u0275qud"](603979776,15,{rangeTemplate:0}),t["\u0275qud"](603979776,16,{separatorTemplate:0}),(n()(),t["\u0275eld"](46,0,null,0,11,"mat-card-content",[["class","mat-card-content"],["fxLayoutAlign","center center"]],null,null,null,null,null)),t["\u0275did"](47,671744,null,0,z.c,[t.ElementRef,S.i,[2,z.i],S.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),t["\u0275did"](48,16384,null,0,u.c,[],null,null),(n()(),t["\u0275eld"](49,0,null,null,2,"button",[["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,q.d,q.b)),t["\u0275did"](50,180224,null,0,V.b,[t.ElementRef,$.f,[2,X.a]],null,null),(n()(),t["\u0275ted"](-1,0,["Simple"])),(n()(),t["\u0275eld"](52,0,null,null,2,"button",[["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,e,l){var o=!0;return"click"===e&&(o=!1!==t["\u0275nov"](n,43).add(t["\u0275nov"](n,43).selected)&&o),o},q.d,q.b)),t["\u0275did"](53,180224,null,0,V.b,[t.ElementRef,$.f,[2,X.a]],null,null),(n()(),t["\u0275ted"](-1,0,["Split selected range"])),(n()(),t["\u0275eld"](55,0,null,null,2,"button",[["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,e,l){var o=!0;return"click"===e&&(o=!1!==t["\u0275nov"](n,43).remove(t["\u0275nov"](n,43).selected)&&o),o},q.d,q.b)),t["\u0275did"](56,180224,null,0,V.b,[t.ElementRef,$.f,[2,X.a]],null,null),(n()(),t["\u0275ted"](-1,0,["Remove selected range"])),(n()(),t["\u0275eld"](58,0,null,null,31,"mat-card",[["class","demo-card mat-card"]],null,null,null,i.b,i.a)),t["\u0275did"](59,49152,null,0,u.a,[],null,null),(n()(),t["\u0275eld"](60,0,null,0,3,"mat-toolbar",[["class","mat-toolbar"],["color","primary"]],[[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,b.b,b.a)),t["\u0275did"](61,4243456,null,1,v.a,[t.ElementRef,C.a,f.d],{color:[0,"color"]},null),t["\u0275qud"](603979776,17,{_toolbarRows:1}),(n()(),t["\u0275ted"](-1,0,["Custom template : Movable separator, with a function based step, logarithmic interpolation bewtween the model (weight) and the inner model"])),(n()(),t["\u0275eld"](64,0,null,0,10,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),t["\u0275did"](65,16384,null,0,u.c,[],null,null),(n()(),t["\u0275eld"](66,0,null,null,8,"deja-range",[["id","custom-range"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"errorFeedback"],["window","resize"]],function(n,e,l){var o=!0,a=n.component;return"window:resize"===e&&(o=!1!==t["\u0275nov"](n,70).onResize()&&o),"ngModelChange"===e&&(o=!1!==(a.weights=l)&&o),"ngModelChange"===e&&(o=!1!==a.computeRangeFromWeight()&&o),"errorFeedback"===e&&(o=!1!==a.errorFeed.emit(l)&&o),o},A,F)),t["\u0275did"](67,671744,null,0,L.NgModel,[[8,null],[8,null],[8,null],[8,null]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,L.NgControl,null,[L.NgModel]),t["\u0275did"](69,16384,null,0,L.NgControlStatus,[[4,L.NgControl]],null,null),t["\u0275did"](70,49152,[[2,4],["dejaWeight",4]],2,E,[t.ChangeDetectorRef,t.ElementRef,[6,L.NgControl]],{step:[0,"step"],selected:[1,"selected"],readOnly:[2,"readOnly"]},{errorFeedback:"errorFeedback"}),t["\u0275qud"](603979776,18,{rangeTemplate:0}),t["\u0275qud"](603979776,19,{separatorTemplate:0}),(n()(),t["\u0275and"](0,[[18,2],["rangeTemplate",2]],null,0,null,rn)),(n()(),t["\u0275and"](0,[[19,2],["separatorTemplate",2]],null,0,null,dn)),(n()(),t["\u0275eld"](75,0,null,0,14,"mat-card-content",[["class","mat-card-content"],["fxLayoutAlign","center center"]],null,null,null,null,null)),t["\u0275did"](76,671744,null,0,z.c,[t.ElementRef,S.i,[2,z.i],S.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),t["\u0275did"](77,16384,null,0,u.c,[],null,null),(n()(),t["\u0275eld"](78,0,null,null,2,"button",[["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,e,l){var o=!0;return"click"===e&&(o=!1!==n.component.add(t["\u0275nov"](n,70).selected)&&o),o},q.d,q.b)),t["\u0275did"](79,180224,null,0,V.b,[t.ElementRef,$.f,[2,X.a]],null,null),(n()(),t["\u0275ted"](-1,0,["Split selected range"])),(n()(),t["\u0275eld"](81,0,null,null,2,"button",[["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,e,l){var o=!0;return"click"===e&&(o=!1!==n.component.remove(t["\u0275nov"](n,70).selected)&&o),o},q.d,q.b)),t["\u0275did"](82,180224,null,0,V.b,[t.ElementRef,$.f,[2,X.a]],null,null),(n()(),t["\u0275ted"](-1,0,["Remove selected range"])),(n()(),t["\u0275eld"](84,0,null,null,2,"button",[["id","decrease"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.decrease()&&t),t},q.d,q.b)),t["\u0275did"](85,180224,null,0,V.b,[t.ElementRef,$.f,[2,X.a]],{disabled:[0,"disabled"]},null),(n()(),t["\u0275ted"](-1,0,["Decrease minimum"])),(n()(),t["\u0275eld"](87,0,null,null,2,"button",[["id","increase"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.increase()&&t),t},q.d,q.b)),t["\u0275did"](88,180224,null,0,V.b,[t.ElementRef,$.f,[2,X.a]],null,null),(n()(),t["\u0275ted"](-1,0,["Increase maximum"])),(n()(),t["\u0275and"](16777216,null,null,2,null,cn)),t["\u0275did"](91,278528,null,0,f.m,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),t["\u0275pid"](131072,f.b,[t.ChangeDetectorRef])],function(n,e){var l=e.component;n(e,4,0,"primary"),n(e,10,0,l.readOnlyRanges),n(e,19,0,"primary"),n(e,25,0,l.rangesWithInterval),n(e,28,0,l.steps,1,!1),n(e,34,0,"primary"),n(e,40,0,l.ranges),n(e,43,0,2.5,!1),n(e,47,0,"center center"),n(e,61,0,"primary"),n(e,67,0,l.weights),n(e,70,0,l.stepFn,0,!1),n(e,76,0,"center center"),n(e,85,0,0===(null==l.weights[0]?null:l.weights[0].minWeight)),n(e,91,0,t["\u0275unv"](e,91,0,t["\u0275nov"](e,92).transform(l.errors)))},function(n,e){n(e,3,0,t["\u0275nov"](e,4)._toolbarRows.length>0,0===t["\u0275nov"](e,4)._toolbarRows.length),n(e,9,0,t["\u0275nov"](e,12).ngClassUntouched,t["\u0275nov"](e,12).ngClassTouched,t["\u0275nov"](e,12).ngClassPristine,t["\u0275nov"](e,12).ngClassDirty,t["\u0275nov"](e,12).ngClassValid,t["\u0275nov"](e,12).ngClassInvalid,t["\u0275nov"](e,12).ngClassPending),n(e,18,0,t["\u0275nov"](e,19)._toolbarRows.length>0,0===t["\u0275nov"](e,19)._toolbarRows.length),n(e,24,0,t["\u0275nov"](e,27).ngClassUntouched,t["\u0275nov"](e,27).ngClassTouched,t["\u0275nov"](e,27).ngClassPristine,t["\u0275nov"](e,27).ngClassDirty,t["\u0275nov"](e,27).ngClassValid,t["\u0275nov"](e,27).ngClassInvalid,t["\u0275nov"](e,27).ngClassPending),n(e,33,0,t["\u0275nov"](e,34)._toolbarRows.length>0,0===t["\u0275nov"](e,34)._toolbarRows.length),n(e,39,0,t["\u0275nov"](e,42).ngClassUntouched,t["\u0275nov"](e,42).ngClassTouched,t["\u0275nov"](e,42).ngClassPristine,t["\u0275nov"](e,42).ngClassDirty,t["\u0275nov"](e,42).ngClassValid,t["\u0275nov"](e,42).ngClassInvalid,t["\u0275nov"](e,42).ngClassPending),n(e,49,0,t["\u0275nov"](e,50).disabled||null,"NoopAnimations"===t["\u0275nov"](e,50)._animationMode),n(e,52,0,t["\u0275nov"](e,53).disabled||null,"NoopAnimations"===t["\u0275nov"](e,53)._animationMode),n(e,55,0,t["\u0275nov"](e,56).disabled||null,"NoopAnimations"===t["\u0275nov"](e,56)._animationMode),n(e,60,0,t["\u0275nov"](e,61)._toolbarRows.length>0,0===t["\u0275nov"](e,61)._toolbarRows.length),n(e,66,0,t["\u0275nov"](e,69).ngClassUntouched,t["\u0275nov"](e,69).ngClassTouched,t["\u0275nov"](e,69).ngClassPristine,t["\u0275nov"](e,69).ngClassDirty,t["\u0275nov"](e,69).ngClassValid,t["\u0275nov"](e,69).ngClassInvalid,t["\u0275nov"](e,69).ngClassPending),n(e,78,0,t["\u0275nov"](e,79).disabled||null,"NoopAnimations"===t["\u0275nov"](e,79)._animationMode),n(e,81,0,t["\u0275nov"](e,82).disabled||null,"NoopAnimations"===t["\u0275nov"](e,82)._animationMode),n(e,84,0,t["\u0275nov"](e,85).disabled||null,"NoopAnimations"===t["\u0275nov"](e,85)._animationMode),n(e,87,0,t["\u0275nov"](e,88).disabled||null,"NoopAnimations"===t["\u0275nov"](e,88)._animationMode)})}function mn(n){return t["\u0275vid"](0,[t["\u0275pid"](0,f.f,[t.LOCALE_ID]),t["\u0275qud"](671088640,1,{rangeRef:0}),t["\u0275qud"](671088640,2,{weightRef:0}),(n()(),t["\u0275eld"](3,0,null,null,10,"mat-tab-group",[["class","mat-tab-group"]],[[2,"mat-tab-group-dynamic-height",null],[2,"mat-tab-group-inverted-header",null]],[[null,"selectedTabChange"]],function(n,e,l){var t=!0;return"selectedTabChange"===e&&(t=!1!==(n.component.tabIndex=l.index)&&t),t},U.c,U.b)),t["\u0275did"](4,3325952,null,1,H.f,[t.ElementRef,t.ChangeDetectorRef,[2,H.a],[2,X.a]],{selectedIndex:[0,"selectedIndex"]},{selectedTabChange:"selectedTabChange"}),t["\u0275qud"](603979776,3,{_tabs:1}),(n()(),t["\u0275eld"](6,16777216,null,null,3,"mat-tab",[["label","API REFERENCE"]],null,null,null,U.d,U.a)),t["\u0275did"](7,770048,[[3,4]],2,H.c,[t.ViewContainerRef],{textLabel:[0,"textLabel"]},null),t["\u0275qud"](603979776,4,{templateLabel:0}),t["\u0275qud"](335544320,5,{_explicitContent:0}),(n()(),t["\u0275eld"](10,16777216,null,null,3,"mat-tab",[["label","EXAMPLES"]],null,null,null,U.d,U.a)),t["\u0275did"](11,770048,[[3,4]],2,H.c,[t.ViewContainerRef],{textLabel:[0,"textLabel"]},null),t["\u0275qud"](603979776,6,{templateLabel:0}),t["\u0275qud"](335544320,7,{_explicitContent:0}),(n()(),t["\u0275and"](16777216,null,null,1,null,un)),t["\u0275did"](15,16384,null,0,f.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,gn)),t["\u0275did"](17,16384,null,0,f.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,e){var l=e.component;n(e,4,0,l.tabIndex),n(e,7,0,"API REFERENCE"),n(e,11,0,"EXAMPLES"),n(e,15,0,0===l.tabIndex),n(e,17,0,1===l.tabIndex)},function(n,e){n(e,3,0,t["\u0275nov"](e,4).dynamicHeight,"below"===t["\u0275nov"](e,4).headerPosition)})}function pn(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"deja-range-demo",[],null,null,null,mn,an)),t["\u0275did"](1,49152,null,0,on,[],null,null)],null,null)}var hn=t["\u0275ccf"]("deja-range-demo",on,pn,{},{errorFeed:"errorFeed"},[]),fn=l("M2Lx"),bn=l("Fzqc"),vn=l("hUWP"),Cn=l("3pJQ"),wn=l("V9q+"),xn=l("Wf4p"),_n=l("4c35"),Mn=l("KYkd"),On=l("LoOo"),Rn=l("SMsm"),yn=l("fpaK"),Pn=l("ZYCi");l.d(e,"DejaRangeDemoModuleNgFactory",function(){return kn});var kn=t["\u0275cmf"](o,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,hn]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,f.p,f.o,[t.LOCALE_ID,[2,f.F]]),t["\u0275mpd"](4608,L["\u0275angular_packages_forms_forms_o"],L["\u0275angular_packages_forms_forms_o"],[]),t["\u0275mpd"](5120,t.APP_BOOTSTRAP_LISTENER,function(n,e){return[S.j(n,e)]},[f.d,t.PLATFORM_ID]),t["\u0275mpd"](4608,fn.c,fn.c,[]),t["\u0275mpd"](4608,s.i,s.o,[f.d,t.PLATFORM_ID,s.m]),t["\u0275mpd"](4608,s.p,s.p,[s.i,s.n]),t["\u0275mpd"](5120,s.a,function(n){return[n]},[s.p]),t["\u0275mpd"](4608,s.l,s.l,[]),t["\u0275mpd"](6144,s.j,null,[s.l]),t["\u0275mpd"](4608,s.h,s.h,[s.j]),t["\u0275mpd"](6144,s.b,null,[s.h]),t["\u0275mpd"](4608,s.f,s.k,[s.b,t.Injector]),t["\u0275mpd"](4608,s.c,s.c,[s.f]),t["\u0275mpd"](1073742336,f.c,f.c,[]),t["\u0275mpd"](1073742336,L["\u0275angular_packages_forms_forms_d"],L["\u0275angular_packages_forms_forms_d"],[]),t["\u0275mpd"](1073742336,L.FormsModule,L.FormsModule,[]),t["\u0275mpd"](1073742336,S.c,S.c,[]),t["\u0275mpd"](1073742336,bn.a,bn.a,[]),t["\u0275mpd"](1073742336,z.f,z.f,[]),t["\u0275mpd"](1073742336,vn.a,vn.a,[]),t["\u0275mpd"](1073742336,Cn.a,Cn.a,[]),t["\u0275mpd"](1073742336,wn.a,wn.a,[[2,S.g],t.PLATFORM_ID]),t["\u0275mpd"](1073742336,xn.l,xn.l,[[2,xn.d],[2,c.HAMMER_LOADER]]),t["\u0275mpd"](1073742336,u.e,u.e,[]),t["\u0275mpd"](1073742336,_n.g,_n.g,[]),t["\u0275mpd"](1073742336,C.b,C.b,[]),t["\u0275mpd"](1073742336,xn.v,xn.v,[]),t["\u0275mpd"](1073742336,fn.d,fn.d,[]),t["\u0275mpd"](1073742336,$.a,$.a,[]),t["\u0275mpd"](1073742336,H.j,H.j,[]),t["\u0275mpd"](1073742336,v.b,v.b,[]),t["\u0275mpd"](1073742336,V.c,V.c,[]),t["\u0275mpd"](1073742336,Z,Z,[]),t["\u0275mpd"](1073742336,s.e,s.e,[]),t["\u0275mpd"](1073742336,s.d,s.d,[]),t["\u0275mpd"](1073742336,Mn.a,Mn.a,[]),t["\u0275mpd"](1073742336,On.a,On.a,[]),t["\u0275mpd"](1073742336,Rn.c,Rn.c,[]),t["\u0275mpd"](1073742336,yn.a,yn.a,[]),t["\u0275mpd"](1073742336,Pn.p,Pn.p,[[2,Pn.u],[2,Pn.l]]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](256,s.m,"XSRF-TOKEN",[]),t["\u0275mpd"](256,s.n,"X-XSRF-TOKEN",[]),t["\u0275mpd"](1024,Pn.j,function(){return[[{path:"",component:on},{path:"**",redirectTo:"",pathMatch:"full"}]]},[])])})},w6M7:function(n,e,l){"use strict";var t=l("CcnG");l("iss+"),l("t/Na"),l("ZYjt"),l.d(e,"a",function(){return o}),l.d(e,"b",function(){return a});var o=t["\u0275crt"]({encapsulation:2,styles:[[".markdown-content{overflow-y:auto;padding:1rem}.markdown-content table{border-collapse:collapse}.markdown-content table tr td,.markdown-content table tr th{border-width:1px;border-style:solid;padding:1rem}"]],data:{}});function a(n){return t["\u0275vid"](2,[(n()(),t["\u0275eld"](0,0,null,null,0,"div",[["class","markdown-content"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,e){n(e,0,0,e.component.html)})}}}]);