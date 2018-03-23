// Compiled by ClojureScript 1.7.145 {}
goog.provide('bowling_alley.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
bowling_alley.views.loading_throbber = (function bowling_alley$views$loading_throbber(){
var loading_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,loading_QMARK_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.loading","div.loading",-155515768),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.three-quarters-loader","div.three-quarters-loader",893653211),"Loading..."], null)], null);
} else {
return null;
}
});
bowling_alley.views.rolls_input = (function bowling_alley$views$rolls_input(){
var loading_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null));
var error_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error?","error?",-460689159)], null));
var rolls = reagent.core.atom.call(null,"");
var on_click = ((function (loading_QMARK_,error_QMARK_,rolls){
return (function (_){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rolls))){
return null;
} else {
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-rolls","set-rolls",-1632928528),cljs.core.deref.call(null,rolls)], null));

return cljs.core.reset_BANG_.call(null,rolls,"");
}
});})(loading_QMARK_,error_QMARK_,rolls))
;
return ((function (loading_QMARK_,error_QMARK_,rolls,on_click){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group","div.input-group",-2073660476),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter Rolls",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (loading_QMARK_,error_QMARK_,rolls,on_click){
return (function (p1__32436_SHARP_){
return cljs.core.reset_BANG_.call(null,rolls,p1__32436_SHARP_.target.value);
});})(loading_QMARK_,error_QMARK_,rolls,on_click))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-btn","span.input-group-btn",358441272),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (loading_QMARK_,error_QMARK_,rolls,on_click){
return (function (p1__32437_SHARP_){
if(cljs.core.truth_(cljs.core.deref.call(null,loading_QMARK_))){
return null;
} else {
return on_click.call(null,p1__32437_SHARP_);
}
});})(loading_QMARK_,error_QMARK_,rolls,on_click))
], null),"Score"], null)], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,error_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.error-text.text-danger","p.error-text.text-danger",-937825642),"\u00AF\\_(\u30C4)_/\u00AF  Unknown error. Do you know what you're doing?"], null):null)], null);
});
;})(loading_QMARK_,error_QMARK_,rolls,on_click))
});
bowling_alley.views.rolls = (function bowling_alley$views$rolls(){
return (function (){
var rolls__$1 = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rolls","rolls",598605463)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-center","h3.text-center",-1711489073),cljs.core.deref.call(null,rolls__$1)], null);
});
});
bowling_alley.views.score = (function bowling_alley$views$score(){
return (function (){
var score__$1 = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",-1963588780)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.text-center","h5.text-center",-1381748718),cljs.core.deref.call(null,score__$1)], null);
});
});
bowling_alley.views.home_panel = (function bowling_alley$views$home_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.topbar","div.topbar",1355117265),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-6.col-lg-offset-3","div.col-lg-6.col-lg-offset-3",-1015130696),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bowling_alley.views.rolls_input], null)], null)], null)], null)], null)], null);
});
});
bowling_alley.views.profile_panel = (function bowling_alley$views$profile_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"This is the Profile Page.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"go to Home Page"], null)], null)], null);
});
});
if(typeof bowling_alley.views.panels !== 'undefined'){
} else {
bowling_alley.views.panels = (function (){var method_table__17271__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17272__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17273__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17274__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17275__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"bowling-alley.views","panels"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17275__auto__,method_table__17271__auto__,prefer_table__17272__auto__,method_cache__17273__auto__,cached_hierarchy__17274__auto__));
})();
}
cljs.core._add_method.call(null,bowling_alley.views.panels,new cljs.core.Keyword(null,"home-panel","home-panel",1226198754),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bowling_alley.views.home_panel], null);
}));
cljs.core._add_method.call(null,bowling_alley.views.panels,new cljs.core.Keyword(null,"profile-panel","profile-panel",1578205687),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bowling_alley.views.profile_panel], null);
}));
cljs.core._add_method.call(null,bowling_alley.views.panels,new cljs.core.Keyword(null,"default","default",-1987822328),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
}));
bowling_alley.views.main_panel = (function bowling_alley$views$main_panel(){
var active_panel = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994)], null));
return ((function (active_panel){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bowling_alley.views.loading_throbber], null),bowling_alley.views.panels.call(null,cljs.core.deref.call(null,active_panel)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bowling_alley.views.rolls], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bowling_alley.views.score], null)], null)], null);
});
;})(active_panel))
});

//# sourceMappingURL=views.js.map?rel=1521787223365