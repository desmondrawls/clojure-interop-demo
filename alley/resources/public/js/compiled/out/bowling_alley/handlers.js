// Compiled by ClojureScript 1.7.145 {}
goog.provide('bowling_alley.handlers');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('re_frame.core');
goog.require('bowling_alley.db');
cljs.core.enable_console_print_BANG_.call(null);
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return bowling_alley.db.default_db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),(function (db,p__24340){
var vec__24341 = p__24340;
var _ = cljs.core.nth.call(null,vec__24341,(0),null);
var active_panel = cljs.core.nth.call(null,vec__24341,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-rolls","set-rolls",-1632928528),(function (db,p__24342){
var vec__24343 = p__24342;
var _ = cljs.core.nth.call(null,vec__24343,(0),null);
var rolls = cljs.core.nth.call(null,vec__24343,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score-game","score-game",1116421145),rolls], null));

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rolls","rolls",598605463)], null),rolls);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"score-game","score-game",1116421145),(function (db,p__24346){
var vec__24347 = p__24346;
var _ = cljs.core.nth.call(null,vec__24347,(0),null);
var rolls = cljs.core.nth.call(null,vec__24347,(1),null);
ajax.core.POST.call(null,"http://localhost:8000/requests/rolls",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rolls","rolls",598605463),cljs.core.map.call(null,parseInt,clojure.string.split.call(null,rolls,/,/))], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","text/plain"], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__24347,_,rolls){
return (function (p1__24344_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-scoring-response","process-scoring-response",-945654677),p1__24344_SHARP_], null));
});})(vec__24347,_,rolls))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__24347,_,rolls){
return (function (p1__24345_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),p1__24345_SHARP_], null));
});})(vec__24347,_,rolls))
], null));

return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true),new cljs.core.Keyword(null,"error","error",-978969032),false);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"process-scoring-response","process-scoring-response",-945654677),(function (db,p__24348){
var vec__24349 = p__24348;
var _ = cljs.core.nth.call(null,vec__24349,(0),null);
var response = cljs.core.nth.call(null,vec__24349,(1),null);
cljs.core.println.call(null,"RESPONSE: ",response);

cljs.core.println.call(null,"RIGHT: ",cljs.core.get.call(null,cljs.core.js__GT_clj.call(null,response),"right"));

return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",-1963588780)], null),cljs.core.get.call(null,cljs.core.js__GT_clj.call(null,response),"right"));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),(function (db,p__24350){
var vec__24351 = p__24350;
var _ = cljs.core.nth.call(null,vec__24351,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__24351,(1),null);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.Keyword(null,"error","error",-978969032),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"repos","repos",647483789)], null),cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"profile","profile",-545963874)], null),cljs.core.PersistentArrayMap.EMPTY);
}));

//# sourceMappingURL=handlers.js.map?rel=1521786010256