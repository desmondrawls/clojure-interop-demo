// Compiled by ClojureScript 1.7.145 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('bowling_alley.core');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__38694__delegate = function (x){
if(cljs.core.truth_(bowling_alley.core.mount_root)){
return cljs.core.apply.call(null,bowling_alley.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'bowling-alley.core/mount-root' is missing");
}
};
var G__38694 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__38695__i = 0, G__38695__a = new Array(arguments.length -  0);
while (G__38695__i < G__38695__a.length) {G__38695__a[G__38695__i] = arguments[G__38695__i + 0]; ++G__38695__i;}
  x = new cljs.core.IndexedSeq(G__38695__a,0);
} 
return G__38694__delegate.call(this,x);};
G__38694.cljs$lang$maxFixedArity = 0;
G__38694.cljs$lang$applyTo = (function (arglist__38696){
var x = cljs.core.seq(arglist__38696);
return G__38694__delegate(x);
});
G__38694.cljs$core$IFn$_invoke$arity$variadic = G__38694__delegate;
return G__38694;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1521787230188