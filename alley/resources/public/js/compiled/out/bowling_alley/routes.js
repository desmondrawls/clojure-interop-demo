// Compiled by ClojureScript 1.7.145 {}
goog.provide('bowling_alley.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
bowling_alley.routes.hook_browser_navigation_BANG_ = (function bowling_alley$routes$hook_browser_navigation_BANG_(){
var G__32419 = (new goog.History());
goog.events.listen(G__32419,goog.history.EventType.NAVIGATE,((function (G__32419){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__32419))
);

G__32419.setEnabled(true);

return G__32419;
});
bowling_alley.routes.app_routes = (function bowling_alley$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__23473__auto___32432 = (function (params__23474__auto__){
if(cljs.core.map_QMARK_.call(null,params__23474__auto__)){
var map__32426 = params__23474__auto__;
var map__32426__$1 = ((((!((map__32426 == null)))?((((map__32426.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32426.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32426):map__32426);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__23474__auto__)){
var vec__32428 = params__23474__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__23473__auto___32432);


var action__23473__auto___32433 = (function (params__23474__auto__){
if(cljs.core.map_QMARK_.call(null,params__23474__auto__)){
var map__32429 = params__23474__auto__;
var map__32429__$1 = ((((!((map__32429 == null)))?((((map__32429.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32429.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32429):map__32429);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"profile-panel","profile-panel",1578205687)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__23474__auto__)){
var vec__32431 = params__23474__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"profile-panel","profile-panel",1578205687)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/profile",action__23473__auto___32433);


return bowling_alley.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1521787223339