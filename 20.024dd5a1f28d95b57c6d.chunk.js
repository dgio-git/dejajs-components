webpackJsonp([20],{aVCg:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e("LMZF"),d=function(){},u=e("pvRN"),a=e("Ioj9"),o=e("SMsG"),r=e("YXpL"),i=e("V8+5"),c=e("Un6q"),m=e("wu+X"),p=e("ZFRd"),s=(e("v/RK"),e("MFXG"),function(){function l(l,n,e){var t=this;this.tabIndex=1,this.model={date:new Date},this.isAlive=!0,n.register("sendaction").takeWhile(function(){return t.isAlive}).subscribe(function(n){e.run(function(){t.model.date=new Date(n[0]),l.markForCheck();var e=window.parent;e&&e!==window&&e.sendAction&&e.sendAction("From IFrame")})})}return l.prototype.ngOnDestroy=function(){this.isAlive=!1},l}()),b=e("OpP6"),f=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function g(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"mat-card",[["class","demo-card demo-basic mat-card"]],null,null,null,u.b,u.a)),t["\u0275did"](1,49152,null,0,a.a,[],null,null),(l()(),t["\u0275ted"](-1,0,["\n\tTODO\n"]))],null,null)}function v(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,16,"mat-card",[["class","demo-card mat-card"]],null,null,null,u.b,u.a)),t["\u0275did"](1,49152,null,0,a.a,[],null,null),(l()(),t["\u0275ted"](-1,0,["\n\t"])),(l()(),t["\u0275eld"](3,0,null,0,3,"mat-toolbar",[["class","mat-toolbar"],["color","primary"]],[[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,o.b,o.a)),t["\u0275did"](4,4243456,null,1,r.a,[t.ElementRef,i.a,c.d],{color:[0,"color"]},null),t["\u0275qud"](603979776,4,{_toolbarRows:1}),(l()(),t["\u0275ted"](-1,0,["Global Events"])),(l()(),t["\u0275ted"](-1,0,["\n\t"])),(l()(),t["\u0275eld"](8,0,null,0,7,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),t["\u0275did"](9,16384,null,0,a.c,[],null,null),(l()(),t["\u0275ted"](-1,null,["\n\t\tThis page is registered in to a global event with the GlobalEventService. Every seconds, it will receive a message raised from the index.html outside Angular.\n\t\t"])),(l()(),t["\u0275eld"](11,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n\t\t"])),(l()(),t["\u0275eld"](13,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](14,null,["",""])),(l()(),t["\u0275ted"](-1,null,["\n\t"])),(l()(),t["\u0275ted"](-1,0,["\n"]))],function(l,n){l(n,4,0,"primary")},function(l,n){var e=n.component;l(n,3,0,t["\u0275nov"](n,4)._toolbarRows.length,!t["\u0275nov"](n,4)._toolbarRows.length),l(n,14,0,e.model.date.toLocaleTimeString())})}function h(l){return t["\u0275vid"](2,[(l()(),t["\u0275eld"](0,0,null,null,16,"mat-tab-group",[["class","mat-tab-group"]],[[2,"mat-tab-group-dynamic-height",null],[2,"mat-tab-group-inverted-header",null]],[[null,"selectChange"]],function(l,n,e){var t=!0;return"selectChange"===n&&(t=!1!==(l.component.tabIndex=e.index)&&t),t},m.c,m.b)),t["\u0275did"](1,3325952,null,1,p.e,[t.ElementRef,t.ChangeDetectorRef],{selectedIndex:[0,"selectedIndex"]},{selectChange:"selectChange"}),t["\u0275qud"](603979776,1,{_tabs:1}),(l()(),t["\u0275ted"](-1,null,["\n\t"])),(l()(),t["\u0275ted"](-1,null,["\n\t"])),(l()(),t["\u0275ted"](-1,null,["\n\t"])),(l()(),t["\u0275ted"](-1,null,["\n\t"])),(l()(),t["\u0275ted"](-1,null,["\n\t"])),(l()(),t["\u0275ted"](-1,null,["\n\t"])),(l()(),t["\u0275eld"](9,16777216,null,null,2,"mat-tab",[["label","API REFERENCE"]],null,null,null,m.d,m.a)),t["\u0275did"](10,770048,[[1,4]],1,p.b,[t.ViewContainerRef],{textLabel:[0,"textLabel"]},null),t["\u0275qud"](335544320,2,{templateLabel:0}),(l()(),t["\u0275ted"](-1,null,["\n\t"])),(l()(),t["\u0275eld"](13,16777216,null,null,2,"mat-tab",[["label","EXAMPLES"]],null,null,null,m.d,m.a)),t["\u0275did"](14,770048,[[1,4]],1,p.b,[t.ViewContainerRef],{textLabel:[0,"textLabel"]},null),t["\u0275qud"](335544320,3,{templateLabel:0}),(l()(),t["\u0275ted"](-1,null,["\n"])),(l()(),t["\u0275ted"](-1,null,["\n\n"])),(l()(),t["\u0275and"](16777216,null,null,1,null,g)),t["\u0275did"](19,16384,null,0,c.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275ted"](-1,null,["\n\n"])),(l()(),t["\u0275and"](16777216,null,null,1,null,v)),t["\u0275did"](22,16384,null,0,c.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,1,0,e.tabIndex),l(n,10,0,"API REFERENCE"),l(n,14,0,"EXAMPLES"),l(n,19,0,0===e.tabIndex),l(n,22,0,1===e.tabIndex)},function(l,n){l(n,0,0,t["\u0275nov"](n,1).dynamicHeight,"below"===t["\u0275nov"](n,1).headerPosition)})}var R=t["\u0275ccf"]("events-demo",s,function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"events-demo",[],null,null,null,h,f)),t["\u0275did"](1,180224,null,0,s,[t.ChangeDetectorRef,b.a,t.NgZone],null,null)],null,null)},{},{},[]),w=e("0nO6"),C=e("l6RC"),E=e("ppgG"),I=e("4jwp"),F=e("TMwh"),x=e("j5BN"),y=e("CZgk"),L=e("dCOf"),A=e("UHIZ");e.d(n,"DejaGlobalEventsDemoModuleNgFactory",function(){return M});var M=t["\u0275cmf"](d,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[R]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,c.p,c.o,[t.LOCALE_ID,[2,c.A]]),t["\u0275mpd"](4608,w["\u0275i"],w["\u0275i"],[]),t["\u0275mpd"](6144,C.b,null,[c.d]),t["\u0275mpd"](4608,C.c,C.c,[[2,C.b]]),t["\u0275mpd"](4608,i.a,i.a,[]),t["\u0275mpd"](4608,E.b,E.b,[]),t["\u0275mpd"](5120,I.d,I.b,[[3,I.d],t.NgZone,i.a]),t["\u0275mpd"](5120,I.g,I.f,[[3,I.g],i.a,t.NgZone]),t["\u0275mpd"](4608,F.c,F.c,[]),t["\u0275mpd"](4608,F.h,F.b,[]),t["\u0275mpd"](5120,F.j,F.k,[]),t["\u0275mpd"](4608,F.i,F.i,[F.c,F.h,F.j]),t["\u0275mpd"](4608,F.f,F.a,[]),t["\u0275mpd"](5120,F.d,F.l,[F.i,F.f]),t["\u0275mpd"](4608,b.a,b.a,[]),t["\u0275mpd"](512,c.c,c.c,[]),t["\u0275mpd"](512,w["\u0275ba"],w["\u0275ba"],[]),t["\u0275mpd"](512,w.FormsModule,w.FormsModule,[]),t["\u0275mpd"](512,C.a,C.a,[]),t["\u0275mpd"](256,x.e,!0,[]),t["\u0275mpd"](512,x.l,x.l,[[2,x.e]]),t["\u0275mpd"](512,a.e,a.e,[]),t["\u0275mpd"](512,y.g,y.g,[]),t["\u0275mpd"](512,i.b,i.b,[]),t["\u0275mpd"](512,x.w,x.w,[]),t["\u0275mpd"](512,E.c,E.c,[]),t["\u0275mpd"](512,I.c,I.c,[]),t["\u0275mpd"](512,p.i,p.i,[]),t["\u0275mpd"](512,r.b,r.b,[]),t["\u0275mpd"](512,F.e,F.e,[]),t["\u0275mpd"](512,L.a,L.a,[]),t["\u0275mpd"](512,A.o,A.o,[[2,A.t],[2,A.l]]),t["\u0275mpd"](512,d,d,[]),t["\u0275mpd"](1024,A.j,function(){return[[{path:"",component:s},{path:"**",redirectTo:"",pathMatch:"full"}]]},[])])})}});