(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{VHtl:function(e,t,i){"use strict";i.d(t,"a",function(){return o}),i.d(t,"b",function(){return l});var r=i("CcnG"),n=i("vDbO"),s=i("Ip0R"),o=r["\u0275crt"]({encapsulation:2,styles:["deja-splitter{display:flex;flex-wrap:nowrap;justify-content:flex-start}deja-splitter split-gutter{flex:0 0 10px;background-position:50%;background-repeat:no-repeat}deja-splitter split-area{flex-grow:0;flex-shrink:0;height:100%;overflow:hidden}"],data:{}});function a(e){return r["\u0275vid"](0,[(e()(),r["\u0275eld"](0,0,null,null,1,"split-gutter",[],null,[[null,"mousedown"],[null,"touchstart"]],function(e,t,i){var r=!0,n=e.component;return"mousedown"===t&&(r=!1!==n.startDragging(i,2*e.parent.context.index+1)&&r),"touchstart"===t&&(r=!1!==n.startDragging(i,2*e.parent.context.index+1)&&r),r},null,null)),r["\u0275did"](1,16384,null,0,n.d,[r.ElementRef,r.Renderer],{order:[0,"order"],direction:[1,"direction"],size:[2,"size"],disabled:[3,"disabled"]},null)],function(e,t){var i=t.component;e(t,1,0,2*t.parent.context.index+1,i.direction,i.gutterSize,i.disabled)},null)}function u(e){return r["\u0275vid"](0,[(e()(),r["\u0275and"](16777216,null,null,1,null,a)),r["\u0275did"](1,16384,null,0,s.n,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),r["\u0275and"](0,null,null,0))],function(e,t){e(t,1,0,!1===t.context.last)},null)}function l(e){return r["\u0275vid"](2,[r["\u0275ncd"](null,0),(e()(),r["\u0275and"](16777216,null,null,1,null,u)),r["\u0275did"](2,278528,null,0,s.m,[r.ViewContainerRef,r.TemplateRef,r.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(e,t){e(t,2,0,t.component.areas)},null)}},vDbO:function(e,t,i){"use strict";i.d(t,"a",function(){return u}),i.d(t,"b",function(){return s}),i.d(t,"c",function(){return o}),i.d(t,"d",function(){return a});var r=i("CcnG"),n=i("n6gG"),s=function(){function e(e,t,i){this.cdRef=e,this.elementRef=t,this.renderer=i,this.direction="horizontal",this.gutterSize=10,this.dragStart=new r.EventEmitter(!1),this.dragProgress=new r.EventEmitter(!1),this.dragEnd=new r.EventEmitter(!1),this._areas=[],this.isDragging=!1,this.containerSize=0,this.areaASize=0,this.areaBSize=0,this.eventsDragFct=[],this._disabled=!1}return Object.defineProperty(e.prototype,"styleFlexDirection",{get:function(){return"horizontal"===this.direction?"row":"column"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"styleWidth",{get:function(){return this.width&&!isNaN(this.width)&&this.width>0?this.width+"px":"100%"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"styleHeight",{get:function(){return this.height&&!isNaN(this.height)&&this.height>0?this.height+"px":"100%"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"nbGutters",{get:function(){return this._areas.length-1},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"disabled",{get:function(){return this._disabled},set:function(e){this._disabled=Object(n.b)(e)||null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"areas",{get:function(){return this._areas},enumerable:!0,configurable:!0}),e.prototype.ngOnChanges=function(e){(e.gutterSize||e.disabled)&&this.refresh()},e.prototype.ngOnDestroy=function(){this.stopDragging()},e.prototype.addArea=function(e,t,i,r){this._areas.push({component:e,orderUser:t,order:-1,sizeUser:i,size:-1,minPixel:r}),this.refresh()},e.prototype.updateArea=function(e,t,i,r){var n=this._areas.find(function(t){return t.component===e});n&&(n.orderUser=t,n.sizeUser=i,n.minPixel=r,this.refresh())},e.prototype.removeArea=function(e){var t=this._areas.find(function(t){return t.component===e});if(t){var i=this._areas.indexOf(t);this._areas.splice(i,1),this._areas.forEach(function(e,t){return e.order=2*t}),this.refresh()}},e.prototype.startDragging=function(e,t){var i=this;if(e.preventDefault(),!this.disabled){var r=this._areas.find(function(e){return e.order===t-1}),n=this._areas.find(function(e){return e.order===t+1});if(r&&n){this.containerSize=this.elementRef.nativeElement["horizontal"===this.direction?"offsetWidth":"offsetHeight"],this.areaASize=this.containerSize*r.size/100,this.areaBSize=this.containerSize*n.size/100;var s={x:e.screenX,y:e.screenY};this.eventsDragFct.push(this.renderer.listenGlobal("document","mousemove",function(e){return i.dragEvent(e,s,r,n)})),this.eventsDragFct.push(this.renderer.listenGlobal("document","touchmove",function(e){return i.dragEvent(e,s,r,n)})),this.eventsDragFct.push(this.renderer.listenGlobal("document","mouseup",function(){return i.stopDragging()})),this.eventsDragFct.push(this.renderer.listenGlobal("document","touchend",function(){return i.stopDragging()})),this.eventsDragFct.push(this.renderer.listenGlobal("document","touchcancel",function(){return i.stopDragging()})),r.component.lockEvents(),n.component.lockEvents(),this.isDragging=!0,this.notify("start")}}},e.prototype.refresh=function(){this.stopDragging(),this._areas.filter(function(e){return null!==e.orderUser&&!isNaN(e.orderUser)}).length===this._areas.length&&this._areas.sort(function(e,t){return+e.orderUser-+t.orderUser}),this._areas.forEach(function(e,t){e.order=2*t,e.component.setStyle("order",e.order)});var e=this._areas.map(function(e){return e.sizeUser}).reduce(function(e,t){return e+t},0),t=this._areas.filter(function(e){return!e.sizeUser||isNaN(e.sizeUser)});if((e<99.99||e>100.01)&&this._areas.length>1)if(0===t.length)this._areas.forEach(function(t){var i=100*Number(t.sizeUser)/e;t.size=i});else if(e<99.99){var i=100-e,r=t.length;t.forEach(function(e){var t=i/r--;e.size=t,i-=t}),this._areas.filter(function(e){return e.sizeUser&&!isNaN(e.sizeUser)}).forEach(function(e){return e.size=Number(e.sizeUser)})}else{var n=Number((100/this._areas.length).toFixed(3));this._areas.forEach(function(e){return e.size=n})}else 0===e&&1===this._areas.length?this._areas[0].size=100:this._areas.forEach(function(e){return e.size=Number(e.sizeUser)});this.refreshStyleSizes(),this.cdRef.markForCheck()},e.prototype.refreshStyleSizes=function(){var e=this.gutterSize*this.nbGutters/this._areas.length;this._areas.forEach(function(t){return t.component.setStyle("flex-basis","calc( "+t.size+"% - "+e+"px )")})},e.prototype.dragEvent=function(e,t,i,r){this.isDragging&&this.drag(t,{x:e.screenX,y:e.screenY},i,r)},e.prototype.drag=function(e,t,i,r){var n="horizontal"===this.direction?e.x-t.x:e.y-t.y,s=i.minPixel?(i.minPixel+5)/this.containerSize*100:0,o=r.minPixel?(r.minPixel+5)/this.containerSize*100:0,a=(this.areaASize-n)/this.containerSize*100,u=(this.areaBSize+n)/this.containerSize*100;a<=s?(a=s,u=i.size+r.size-s):u<=o?(u=o,a=i.size+r.size-o):(a=Number(a.toFixed(3)),u=Number((i.size+r.size-a).toFixed(3))),i.size=a,r.size=u,this.refreshStyleSizes(),this.notify("progress")},e.prototype.stopDragging=function(){if(this.isDragging){for(this._areas.forEach(function(e){return e.component.unlockEvents()});this.eventsDragFct.length>0;){var e=this.eventsDragFct.pop();e&&e()}this.containerSize=0,this.areaASize=0,this.areaBSize=0,this.isDragging=!1,this.notify("end")}},e.prototype.notify=function(e){var t=this._areas.map(function(e){return e.size});switch(e){case"start":return this.dragStart.emit(t);case"progress":return this.dragProgress.emit(t);case"end":return this.dragEnd.emit(t);default:return null}},e}(),o=function(){function e(e,t,i){this.elementRef=e,this.renderer=t,this.split=i,this._order=null,this._size=null,this._minSizePixel=0,this.eventsLockFct=[]}return Object.defineProperty(e.prototype,"order",{set:function(e){var t=Object(n.e)(e);this._order=isNaN(t)?null:t,this.split.updateArea(this,this._order,this._size,this._minSizePixel)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"size",{set:function(e){var t=Object(n.e)(e);this._size=isNaN(t)?null:t,this.split.updateArea(this,this._order,this._size,this._minSizePixel)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"minSizePixel",{set:function(e){var t=Object(n.e)(e);this._minSizePixel=!isNaN(t)&&t>0?t:0,this.split.updateArea(this,this._order,this._size,this._minSizePixel)},enumerable:!0,configurable:!0}),e.prototype.ngOnInit=function(){this.split.addArea(this,this._order,this._size,this._minSizePixel)},e.prototype.lockEvents=function(){this.eventsLockFct.push(this.renderer.listen(this.elementRef.nativeElement,"selectstart",function(){return!1})),this.eventsLockFct.push(this.renderer.listen(this.elementRef.nativeElement,"dragstart",function(){return!1}))},e.prototype.unlockEvents=function(){for(;this.eventsLockFct.length>0;){var e=this.eventsLockFct.pop();e&&e()}},e.prototype.setStyle=function(e,t){this.renderer.setElementStyle(this.elementRef.nativeElement,e,t)},e.prototype.ngOnDestroy=function(){this.split.removeArea(this)},e}(),a=function(){function e(e,t){this.elementRef=e,this.renderer=t,this._disabled=!1}return Object.defineProperty(e.prototype,"order",{set:function(e){this.setStyle("order",Object(n.e)(e))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"direction",{set:function(e){this._direction=e,this.refreshStyle()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"size",{set:function(e){this.setStyle("flex-basis",e?"string"==typeof e?Object(n.e)(e)+"px":e+"px":"")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"disabled",{set:function(e){this._disabled=e,this.refreshStyle()},enumerable:!0,configurable:!0}),e.prototype.refreshStyle=function(){var e=!0===this._disabled?"disabled":this._direction;this.setStyle("cursor",this.getCursor(e)),this.setStyle("background-image",'url("'+this.getImage(e)+'")'),"horizontal"===e&&this.setStyle("content"," ")},e.prototype.setStyle=function(e,t){this.renderer.setElementStyle(this.elementRef.nativeElement,e,t)},e.prototype.getCursor=function(e){switch(e){case"disabled":return"default";case"vertical":return"row-resize";case"horizontal":return"col-resize";default:return null}},e.prototype.getImage=function(e){switch(e){case"disabled":return"";case"vertical":return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFCAMAAABl/6zIAAAABlBMVEUAAADMzMzIT8AyAAAAAXRSTlMAQObYZgAAABRJREFUeAFjYGRkwIMJSeMHlBkOABP7AEGzSuPKAAAAAElFTkSuQmCC";case"horizontal":return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==";default:return null}},e}(),u=function(){return function(){}}()}}]);