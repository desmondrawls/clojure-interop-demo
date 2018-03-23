// Compiled by ClojureScript 1.7.145 {}
goog.provide('github_profile.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
github_profile.routes.hook_browser_navigation_BANG_ = (function github_profile$routes$hook_browser_navigation_BANG_(){
var G__21654 = (new goog.History());
goog.events.listen(G__21654,goog.history.EventType.NAVIGATE,((function (G__21654){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__21654))
);

G__21654.setEnabled(true);

return G__21654;
});
github_profile.routes.app_routes = (function github_profile$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__18714__auto___21667 = (function (params__18715__auto__){
if(cljs.core.map_QMARK_.call(null,params__18715__auto__)){
var map__21661 = params__18715__auto__;
var map__21661__$1 = ((((!((map__21661 == null)))?((((map__21661.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21661.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21661):map__21661);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__18715__auto__)){
var vec__21663 = params__18715__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__18714__auto___21667);


var action__18714__auto___21668 = (function (params__18715__auto__){
if(cljs.core.map_QMARK_.call(null,params__18715__auto__)){
var map__21664 = params__18715__auto__;
var map__21664__$1 = ((((!((map__21664 == null)))?((((map__21664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21664):map__21664);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"profile-panel","profile-panel",1578205687)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__18715__auto__)){
var vec__21666 = params__18715__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"profile-panel","profile-panel",1578205687)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/profile",action__18714__auto___21668);


return github_profile.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1521783857964