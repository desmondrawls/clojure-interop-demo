// Compiled by ClojureScript 1.7.145 {}
goog.provide('bowling_alley.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
bowling_alley.routes.hook_browser_navigation_BANG_ = (function bowling_alley$routes$hook_browser_navigation_BANG_(){
var G__24316 = (new goog.History());
goog.events.listen(G__24316,goog.history.EventType.NAVIGATE,((function (G__24316){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__24316))
);

G__24316.setEnabled(true);

return G__24316;
});
bowling_alley.routes.app_routes = (function bowling_alley$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__23472__auto___24330 = (function (params__23473__auto__){
if(cljs.core.map_QMARK_.call(null,params__23473__auto__)){
var map__24324 = params__23473__auto__;
var map__24324__$1 = ((((!((map__24324 == null)))?((((map__24324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24324):map__24324);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__23473__auto__)){
var vec__24326 = params__23473__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__23472__auto___24330);


var action__23472__auto___24331 = (function (params__23473__auto__){
if(cljs.core.map_QMARK_.call(null,params__23473__auto__)){
var map__24327 = params__23473__auto__;
var map__24327__$1 = ((((!((map__24327 == null)))?((((map__24327.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24327.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24327):map__24327);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"profile-panel","profile-panel",1578205687)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__23473__auto__)){
var vec__24329 = params__23473__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"profile-panel","profile-panel",1578205687)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/profile",action__23472__auto___24331);


return bowling_alley.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1521786010188