function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _iterableToArrayLimit(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==l.return||l.return()}finally{if(i)throw o}}return n}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,r=_getPrototypeOf(e);if(t){var i=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{Pkvd:function(e,t,n){"use strict";n.r(t);var r,i,o=n("SVse"),a=n("s7LF"),l=n("PDjf"),c=n("pMoy"),s=n("M9ds"),d=n("l0rg"),u=n("8LU1"),f=n("Z5sx"),b=n("2Vo4"),m=n("xgIS"),p=n("Cfvw"),h=n("PqYM"),y=n("1G5W"),v=n("/uUt"),g=n("lJxs"),_=n("IzEk"),j=n("pLZG"),C=n("eIep"),O=n("8Y7J"),w=((i=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,r){var i;_classCallCheck(this,n),(i=t.call(this))._control=r,i._inEdition=!1,i._editMode=!1,i._mandatory=!1,i._multiline=!1,i.edit$=new b.a([!1,!1]),i._disabled=null,i.onTouchedCallback=function(e){},i.onChangeCallback=function(e){},i._control&&(i._control.valueAccessor=_assertThisInitialized(i)),i.element=e.nativeElement,Object(m.a)(i.element,"mousedown").pipe(Object(y.a)(i.destroyed$)).subscribe((function(e){return i.inEdition||i.disabled?(e.cancelBubble=!0,!1):i.editMode?(i.edit$.next([!0,!0]),e.cancelBubble=!0,!1):void 0}));var o=Object(p.a)(i.edit$).pipe(Object(v.a)(),Object(g.a)((function(e){var t=_slicedToArray(e,2),n=t[0];return!1!==t[1]&&Object(h.a)(10).pipe(Object(_.a)(1),Object(y.a)(i.destroyed$)).subscribe((function(){i.selectAll(),i.focus()})),i._inEdition=n,n?i.element.setAttribute("contenteditable","true"):i.element.removeAttribute("contenteditable"),i.refreshView(),n}))),a=o.pipe(Object(j.a)((function(e){return!e}))),l=Object(m.a)(i.element.ownerDocument,"mousedown").pipe(Object(j.a)((function(e){return!i.isChildElement(e.target)})),Object(y.a)(a));o.pipe(Object(j.a)((function(e){return e})),Object(C.a)((function(){return l})),Object(y.a)(i.destroyed$)).subscribe((function(){var e=i.element.innerText.replace(/\n/g,"<br />").replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"");i.onTouchedCallback(),!e&&i.mandatory||(i.value=e),i.inEdition=!1}));var c=Object(m.a)(i.element,"keydown").pipe(Object(y.a)(a));return o.pipe(Object(j.a)((function(e){return e})),Object(C.a)((function(){return c})),Object(y.a)(i.destroyed$)).subscribe((function(e){if(e.cancelBubble=!0,e.stopPropagation(),e.code!==f.A.Enter||i.multiline)e.code===f.A.Escape&&(i.inEdition=!1);else{var t=i.element.innerText;!t&&i.mandatory||(i.value=t),i.inEdition=!1}return!1})),i}return _createClass(n,[{key:"writeValue",value:function(e){this.model=e,this.refreshView()}},{key:"registerOnChange",value:function(e){this.onChangeCallback=e}},{key:"registerOnTouched",value:function(e){this.onTouchedCallback=e}},{key:"setDisabledState",value:function(e){this.disabled=e}},{key:"ngOnInit",value:function(){this.model=this.element.innerHTML}},{key:"focus",value:function(){this.element.focus()}},{key:"selectAll",value:function(){var e=document.createRange();e.selectNodeContents(this.element);var t=window.getSelection();t.removeAllRanges(),t.addRange(e)}},{key:"edit",value:function(e){this.edit$.next([!this.disabled,e])}},{key:"isChildElement",value:function(e){for(var t=e;t&&t!==this.element;)t=t.parentElement;return t===this.element}},{key:"refreshView",value:function(){this.model&&(this.inEdition?this.element.innerText=this.model.replace(/<br\s*[\/]?>/gi,"\n"):this.element.innerHTML=this.model.replace(/\n/g,"<br />"))}},{key:"mandatory",set:function(e){this._mandatory=Object(u.b)(e)},get:function(){return this._mandatory}},{key:"multiline",set:function(e){this._multiline=Object(u.b)(e)},get:function(){return this._multiline}},{key:"disabled",set:function(e){var t=Object(u.b)(e);this._disabled=t||null,this.disabled&&this.edit$.next([!1,!1])},get:function(){var e;return(null===(e=this._control)||void 0===e?void 0:e.disabled)||this._disabled}},{key:"editMode",set:function(e){this._editMode=Object(u.b)(e)},get:function(){return this._editMode}},{key:"inEdition",set:function(e){this.disabled||this.edit$.next([Object(u.b)(e),!1])},get:function(){return this._inEdition}},{key:"value",set:function(e){e!==this.model&&(this.writeValue(e),this.onChangeCallback(e))},get:function(){return this.model}}]),n}(f.s)).\u0275fac=function(e){return new(e||i)(O["\u0275\u0275directiveInject"](O.ElementRef),O["\u0275\u0275directiveInject"](a.NgControl,10))},i.\u0275dir=O["\u0275\u0275defineDirective"]({type:i,selectors:[["","deja-editable",""]],hostVars:1,hostBindings:function(e,t){2&e&&O["\u0275\u0275attribute"]("disabled",t._disabled)},inputs:{inEdition:"inEdition",mandatory:"mandatory",multiline:"multiline",disabled:"disabled",editMode:["deja-editable","editMode"]},features:[O["\u0275\u0275InheritDefinitionFeature"]]}),i),E=((r=function e(){_classCallCheck(this,e)}).\u0275mod=O["\u0275\u0275defineNgModule"]({type:r}),r.\u0275inj=O["\u0275\u0275defineInjector"]({factory:function(e){return new(e||r)},imports:[[o.c,a.FormsModule]]}),r),k=n("KYkd"),x=n("iInd"),M=n("iss+");function I(e,t){1&e&&(O["\u0275\u0275elementStart"](0,"mat-card",4),O["\u0275\u0275element"](1,"deja-markdown",5),O["\u0275\u0275elementEnd"]()),2&e&&(O["\u0275\u0275advance"](1),O["\u0275\u0275property"]("url","https://raw.githubusercontent.com/DSI-HUG/dejajs-components/dev/projects/deja-js/component/content-editable/readme.md"))}function S(e,t){if(1&e){var n=O["\u0275\u0275getCurrentView"]();O["\u0275\u0275elementStart"](0,"mat-card",4),O["\u0275\u0275elementStart"](1,"mat-toolbar",6),O["\u0275\u0275text"](2,"Content Editable Demo"),O["\u0275\u0275elementEnd"](),O["\u0275\u0275elementStart"](3,"mat-card-content"),O["\u0275\u0275elementStart"](4,"mat-checkbox",7),O["\u0275\u0275listener"]("ngModelChange",(function(e){return O["\u0275\u0275restoreView"](n),O["\u0275\u0275nextContext"]().designMode=e})),O["\u0275\u0275text"](5,"Design Mode\xa0"),O["\u0275\u0275elementEnd"](),O["\u0275\u0275elementStart"](6,"mat-checkbox",7),O["\u0275\u0275listener"]("ngModelChange",(function(e){return O["\u0275\u0275restoreView"](n),O["\u0275\u0275nextContext"]().disabled=e})),O["\u0275\u0275text"](7,"Disabled"),O["\u0275\u0275elementEnd"](),O["\u0275\u0275elementEnd"](),O["\u0275\u0275elementStart"](8,"mat-card-content",8),O["\u0275\u0275elementStart"](9,"div",9),O["\u0275\u0275text"](10," Lorem ipsum dolor sit amet, consectetur adipiscing elit. "),O["\u0275\u0275element"](11,"br"),O["\u0275\u0275text"](12," Mauris auctor sit amet odio et aliquet. Curabitur auctor eleifend mattis. "),O["\u0275\u0275element"](13,"br"),O["\u0275\u0275text"](14," Nullam sit amet quam tellus. Ut mattis tellus sed erat ultricies ornare. "),O["\u0275\u0275element"](15,"br"),O["\u0275\u0275text"](16," Nulla dictum nisi eu tortor lacinia porttitor. Donec eu arcu et enim cursus viverra. "),O["\u0275\u0275element"](17,"br"),O["\u0275\u0275text"](18," Praesent pulvinar dui nisi, a tincidunt arcu finibus sed. "),O["\u0275\u0275element"](19,"br"),O["\u0275\u0275elementStart"](20,"a",10),O["\u0275\u0275text"](21,"Google"),O["\u0275\u0275elementEnd"](),O["\u0275\u0275elementEnd"](),O["\u0275\u0275elementEnd"](),O["\u0275\u0275elementEnd"]()}if(2&e){var r=O["\u0275\u0275nextContext"]();O["\u0275\u0275advance"](4),O["\u0275\u0275property"]("ngModel",r.designMode),O["\u0275\u0275advance"](2),O["\u0275\u0275property"]("ngModel",r.disabled),O["\u0275\u0275advance"](3),O["\u0275\u0275property"]("deja-editable",r.designMode)("disabled",r.disabled)}}var T,A=x.f.forChild([{path:"",component:(T=function e(){_classCallCheck(this,e),this.tabIndex=1,this.designMode=!1,this.disabled=!1},T.\u0275fac=function(e){return new(e||T)},T.\u0275cmp=O["\u0275\u0275defineComponent"]({type:T,selectors:[["deja-content-editable-demo"]],decls:5,vars:3,consts:[[3,"selectedIndex","selectedTabChange"],["label","API REFERENCE"],["label","EXAMPLES"],["class","demo-card demo-basic",4,"ngIf"],[1,"demo-card","demo-basic"],[3,"url"],["color","primary"],["color","primary",3,"ngModel","ngModelChange"],["id","contentEditableContainer"],["multiline","",3,"deja-editable","disabled"],["href","http://www.google.ch"]],template:function(e,t){1&e&&(O["\u0275\u0275elementStart"](0,"mat-tab-group",0),O["\u0275\u0275listener"]("selectedTabChange",(function(e){return t.tabIndex=e.index})),O["\u0275\u0275element"](1,"mat-tab",1),O["\u0275\u0275element"](2,"mat-tab",2),O["\u0275\u0275elementEnd"](),O["\u0275\u0275template"](3,I,2,1,"mat-card",3),O["\u0275\u0275template"](4,S,22,4,"mat-card",3)),2&e&&(O["\u0275\u0275property"]("selectedIndex",t.tabIndex),O["\u0275\u0275advance"](3),O["\u0275\u0275property"]("ngIf",0===t.tabIndex),O["\u0275\u0275advance"](1),O["\u0275\u0275property"]("ngIf",1===t.tabIndex))},directives:[s.b,s.a,o.n,l.a,M.a,d.a,l.c,c.a,a.NgControlStatus,a.NgModel,w],encapsulation:2}),T)},{path:"**",redirectTo:"",pathMatch:"full"}]);n.d(t,"DejaContentEditableDemoModule",(function(){return R}));var P,R=((P=function e(){_classCallCheck(this,e)}).\u0275mod=O["\u0275\u0275defineNgModule"]({type:P}),P.\u0275inj=O["\u0275\u0275defineInjector"]({factory:function(e){return new(e||P)},providers:[],imports:[[o.c,a.FormsModule,l.d,c.b,s.c,d.b,E,k.a,A]]}),P)}}]);