(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{CQHG:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s}),n("Ip0R");var i=n("Wf4p"),o=function(){function t(){}return t.escapeRegExp=function(t){return t?t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):t},t}(),r=function(){return function(t,e,n,i){this._defaultErrorStateMatcher=t,this._parentForm=e,this._parentFormGroup=n,this.ngControl=i}}(),s=Object(i.E)(r)},Sj1O:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r});var i=n("CcnG"),o=(n("u3PH"),n("Ip0R"),n("M2Lx"),n("seP3"),n("gIcY"),i["\u0275crt"]({encapsulation:2,styles:["deja-editor{line-height:normal}deja-editor .cke_textarea_inline>p{margin:0}deja-editor .cke_textarea_inline:focus{outline:0}"],data:{}}));function r(t){return i["\u0275vid"](2,[i["\u0275qud"](402653184,1,{host:0}),(t()(),i["\u0275eld"](1,0,[[1,0],["host",1]],null,0,"textarea",[["style","visibility: hidden"]],null,[[null,"onchange"]],function(t,e,n){var i=!0;return"onchange"===e&&(i=!1!==t.component.textAreaChange()&&i),i},null,null))],null,null)}},u3PH:function(t,e,n){"use strict";n.d(e,"a",function(){return d}),n.d(e,"b",function(){return p}),n.d(e,"c",function(){return g}),n.d(e,"d",function(){return y}),n.d(e,"e",function(){return h});var i=n("CcnG"),o=n("mrSG"),r=n("n6gG"),s=n("LvDl"),a=n("P6uZ"),c=n("t9fZ"),u=n("CQHG"),l=n("K9Ia"),h=function(){function t(){}return t.prototype.initDejaEditorLib=function(){return this._loading||this.init(),this._loader},t.prototype.init=function(){var t=this;this._loader=new Promise(function(e){if(t._loading=!0,!window.ckeditor){var n=document.getElementsByTagName("base")[0]||{},i=window.CKEDITOR_BASEPATH||n.href+"assets/ckeditor/",o=document.createElement("script");document.head.appendChild(o),o.type="text/javascript",o.src=i+"ckeditor.js",o.addEventListener("load",e)}})},t}(),d=function(){function t(t,e,n){this.zone=t,this._changeDetectorRef=e,this._initializer=n,this.change=new i.EventEmitter,this.ready=new i.EventEmitter,this.blur=new i.EventEmitter,this.focus=new i.EventEmitter,this.disabled=new i.EventEmitter,this._inline=!0,this._value=""}return Object.defineProperty(t.prototype,"readonly",{get:function(){return this._readonly},set:function(t){this._readonly=Object(r.b)(t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"inline",{get:function(){return this._inline},set:function(t){this._inline=Object(r.b)(t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"value",{get:function(){return this._value},set:function(t){t!==this._value&&(this._value=t,this.onChange(t))},enumerable:!0,configurable:!0}),t.prototype.ngOnChanges=function(t){t.readonly&&this.instance&&this.instance.setReadOnly(t.readonly.currentValue)},t.prototype.ngOnDestroy=function(){var t=this;if(this.focus.complete(),this.blur.complete(),this.change.complete(),this.disabled.complete(),this.instance)if(this.instance.focusManager.blur(!0),this._ready){try{this.instance.destroy()}catch(e){console.warn(e,"Error occurred when destroying ckEditor instance")}this.ready.complete(),this.instance=null}else this.ready.pipe(Object(a.a)()).subscribe(function(){try{t.instance.destroy()}catch(e){console.warn(e,"Error occurred when destroying ckEditor instance")}t.instance=null,t.ready.complete()})},t.prototype.ngAfterViewInit=function(){var t=this;this._initializer.initDejaEditorLib().then(function(){t.ckeditorInit(Object(s.cloneDeep)(t.config)||{}),setTimeout(function(){return t._changeDetectorRef.markForCheck()})})},t.prototype.updateValue=function(){var t=this;this.zone.run(function(){var e=t.instance.getData();e||(e=null),t.value!==e&&(t.value=e,t.onChange(e),t.change.emit(e))})},t.prototype.textAreaChange=function(){var t=this;this.zone.run(function(){var e=t.host.nativeElement.value;t.onChange(e),t.change.emit(e)})},t.prototype.ckeditorInit=function(t){var e=this;if("undefined"==typeof CKEDITOR)console.warn("CKEditor 4.x is missing (http://ckeditor.com/)");else{if(this.instance)return;this.readonly&&(t.readOnly=this.readonly);var n=t.on&&t.on.key;t.on||(t.on={}),t.on.key=function(t){1114177===t.data.keyCode&&(t.cancel(),t.stop(),e.instance.document.$.execCommand("SelectAll")),n&&n(t)},this.instance=this.inline?CKEDITOR.inline(this.host.nativeElement,t):CKEDITOR.replace(this.host.nativeElement,t),this.instance.setData(this.value),this.instance.on("instanceReady",function(t){e._ready=!0,e.ready.emit(t)}),this.instance.on("change",function(){e.debounce?(e.debounceTimeout&&clearTimeout(e.debounceTimeout),e.debounceTimeout=setTimeout(function(){e.updateValue(),e.debounceTimeout=null},parseInt(e.debounce,10))):e.updateValue()}),this.instance.on("blur",function(t){e.blur.emit(t),e.onTouched()}),this.instance.on("focus",function(t){e.readonly||e.focus.emit(t)})}},t.prototype.writeValue=function(t){var e=this;this._value=t,setTimeout(function(){e.instance?e.instance.setData(t):e.host.nativeElement.value=t},0)},t.prototype.onChange=function(t){},t.prototype.onTouched=function(){},t.prototype.registerOnChange=function(t){this.onChange=t},t.prototype.registerOnTouched=function(t){this.onTouched=t},t.prototype.setDisabledState=function(t){var e=this;this.readonly=t,this.disabled.next(t),this._ready?this.instance&&this.instance.setReadOnly(t):this.ready.pipe(Object(c.a)(1)).subscribe(function(){e.instance.setReadOnly(e.readonly)})},t.prototype.getWordAtCursor=function(){var t=this.instance.getSelection().getRanges(!0)[0];if(!t)return null;var e=this._firstTextNode(t);return e&&e.toReplace||null},t.prototype.hasActiveSelection=function(){return!!this.getSelectedText()},t.prototype.getSelectedText=function(){return this.instance.getSelection().getSelectedText()},t.prototype.replace=function(t){if(t){if(this.getSelectedText()){var e=this.instance.focus;return this.instance.focus=function(){},this.instance.insertText(t),void(this.instance.focus=e)}var n=this.instance.getSelection().getRanges(!0)[0];if(n){var i=this._firstTextNode(n);i?this._replaceWord(i,t):this.instance.insertText(t),this.updateValue(),this.setFocus()}else this.instance.insertText(t)}},t.prototype.setFocus=function(){this.instance?this.instance.focus():this.host.nativeElement.focus()},t.prototype._hasTextNodeAsChild=function(t,e){var n,i;void 0===e&&(e=!1);var r=t.getChildren().toArray();if(e)for(var s=r.length-1;s>=0;s--){if((u=r[s]).type===CKEDITOR.NODE_TEXT)return u;if(l=this._hasTextNodeAsChild(u))return l}else try{for(var a=Object(o.g)(r),c=a.next();!c.done;c=a.next()){var u,l;if((u=c.value).type===CKEDITOR.NODE_TEXT)return u;if(l=this._hasTextNodeAsChild(u))return l}}catch(h){n={error:h}}finally{try{c&&!c.done&&(i=a.return)&&i.call(a)}finally{if(n)throw n.error}}return null},t.prototype._mergeTextNodeAroundWithDirection=function(t,e){void 0===e&&(e=!1);for(var n=[],i=t.getText(),o=t;(o=e?o.getPrevious():o.getNext)&&o.type===CKEDITOR.NODE_TEXT&&!o.getText().charAt(e?o.getText().length-1:0).match(/[\s,;.:!?]/);)e?i=o.getText()+i:i+=o.getText(),n.push(o);n.length>0&&(t.setText(i),n.forEach(function(t){return t.remove()}))},t.prototype._mergeTextNodeAround=function(t){return this._mergeTextNodeAroundWithDirection(t,!0),this._mergeTextNodeAroundWithDirection(t),t},t.prototype._firstNonEmptyTextNode=function(t,e){void 0===e&&(e=!1);for(var n=t;n=e?n.getPrevious():n.getNext();){if(n.type!==CKEDITOR.NODE_TEXT)return n;if(""!==n.getText())return n}},t.prototype._trim=function(t){return t&&(t=t.replace(/[\u200b\u00A0]/g,"").trim()),t},t.prototype._extractFirstWord=function(t,e){if(void 0===e&&(e=!1),!t)return t;if(-1!==t.indexOf(" ")){var n=t.split(" ");return this._trim(n[e?n.length-1:0])}return this._trim(t)},t.prototype._firstTextNodeResult=function(t,e,n){void 0===e&&(e=!1),void 0===n&&(n=!1);var i=t.getText();if(this._trim(i)&&this._trim(i.substring(i.length-1))){var o=this._mergeTextNodeAround(t);return{textNode:o,firstNodeIsText:n,toReplace:this._extractFirstWord(o.getText(),e)}}return null},t.prototype._firstTextNodeWithDirection=function(t,e){void 0===e&&(e=!1);var n=t.startContainer;if(e&&n.type===CKEDITOR.NODE_TEXT)return this._firstTextNodeResult(n,e,!0);var i=n.type===CKEDITOR.NODE_TEXT?e?this._firstNonEmptyTextNode(n,!0):this._firstNonEmptyTextNode(n):n.getChildren().getItem(t.startOffset-1);if(i){if(i.type===CKEDITOR.NODE_TEXT)return this._firstTextNodeResult(i,e);var o=this._hasTextNodeAsChild(i,e);if(o)return this._firstTextNodeResult(o,e);for(o=i;o=e?o.getPrevious():o.getNext();){if(o.type===CKEDITOR.NODE_TEXT)return this._firstTextNodeResult(o,e);var r=this._hasTextNodeAsChild(o,e);if(r)return this._firstTextNodeResult(r,e)}}return null},t.prototype._firstTextNode=function(t){var e=this._firstTextNodeWithDirection(t,!0);return e||(e=this._firstTextNodeWithDirection(t)),e},t.prototype._replaceWord=function(t,e){var n=t.textNode.getText().lastIndexOf(t.toReplace);if(-1!==n){var i=t.textNode.getText().substring(0,n),o=t.textNode.getText().substring(n+t.toReplace.length);t.textNode.setText(i);var r=CKEDITOR.dom.element.createFromHtml("<span>"+CKEDITOR.tools.transformPlainTextToHtml(e,CKEDITOR.ENTER_BR)+"</span>");r.insertAfter(t.textNode),t.textNode.getText().substring(n+t.toReplace.length)&&new CKEDITOR.dom.text(o).insertAfter(r),this.instance.getSelection().selectElement(t.textNode);var s=this.instance.getSelection().getRanges()[0];s.setStartAfter(t.textNode),s.select()}},t}(),p=function(){return function(){}}(),f=0,g=function(t){function e(e,n,i,o,r,s){var a=t.call(this,r,i,o,n)||this;return a._editor=e,a.ngControl=n,a._hostElement=s,a._uid="mat-input-"+f++,a.stateChanges=new l.a,a._required=!1,a._disabled=!1,a.describedBy="",a.controlType="app-editor",a}return Object(o.c)(e,t),Object.defineProperty(e.prototype,"id",{get:function(){return this._id},set:function(t){this._id=t||this._uid},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"required",{get:function(){return this._required},set:function(t){this._required=Object(r.b)(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"disabled",{get:function(){return this.ngControl&&null!==this.ngControl.disabled?this.ngControl.disabled:this._disabled},set:function(t){this._disabled=Object(r.b)(t),this.focused&&(this.focused=!1,this.stateChanges.next())},enumerable:!0,configurable:!0}),e.prototype.onContainerClick=function(){this._editor.setFocus()},e.prototype.setDescribedByIds=function(t){this.describedBy=t.join(" ")},e.prototype.ngOnInit=function(){var t=this;this._editor.focus.subscribe(function(){t.focused=!0,t.stateChanges.next()}),this._editor.blur.subscribe(function(){t.focused=!1,t.stateChanges.next()}),this._editor.change.subscribe(function(){t.stateChanges.next()}),this._generatePlaceholder()},e.prototype.ngDoCheck=function(){this.ngControl&&this.updateErrorState()},e.prototype.ngOnDestroy=function(){this.stateChanges.complete()},Object.defineProperty(e.prototype,"empty",{get:function(){return!this._editor.value},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"shouldLabelFloat",{get:function(){return this.focused||!this.empty?(this.empty?this._attachPlaceholder():this._detachPlaceholder(),!0):(this._detachPlaceholder(),!1)},enumerable:!0,configurable:!0}),e.prototype._attachPlaceholder=function(){this._placeholder&&!this._placeholder.parentElement&&this._hostElement.nativeElement.appendChild(this._placeholder)},e.prototype._detachPlaceholder=function(){this._placeholder&&this._placeholder.parentElement&&this._placeholder.remove()},e.prototype._generatePlaceholder=function(){if(this.placeholder){this._placeholder=document.createElement("div"),this._placeholder.style.position="absolute",this._placeholder.style.position="absolute",this._placeholder.style.left="0",this._placeholder.style.boxSizing="content-box",this._placeholder.style.width="100%",this._placeholder.style.height="100%",this._placeholder.style.overflow="hidden",this._placeholder.style.pointerEvents="none",this._placeholder.style.top="-0.84375em",this._placeholder.style.paddingTop="0.84375em";var t=document.createElement("div");t.style.color="rgba(0,0,0,0.54)",t.style.top="1.28125em",t.style.position="absolute";var e=document.createTextNode(this.placeholder);t.appendChild(e),this._placeholder.appendChild(t)}},e}(u.b),y=function(){return function(){}}()}}]);