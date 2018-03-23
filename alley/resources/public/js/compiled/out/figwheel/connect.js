// Compiled by ClojureScript 1.7.145 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('github_profile.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__27919__delegate = function (x){
if(cljs.core.truth_(github_profile.core.mount_root)){
return cljs.core.apply.call(null,github_profile.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'github-profile.core/mount-root' is missing");
}
};
var G__27919 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__27920__i = 0, G__27920__a = new Array(arguments.length -  0);
while (G__27920__i < G__27920__a.length) {G__27920__a[G__27920__i] = arguments[G__27920__i + 0]; ++G__27920__i;}
  x = new cljs.core.IndexedSeq(G__27920__a,0);
} 
return G__27919__delegate.call(this,x);};
G__27919.cljs$lang$maxFixedArity = 0;
G__27919.cljs$lang$applyTo = (function (arglist__27921){
var x = cljs.core.seq(arglist__27921);
return G__27919__delegate(x);
});
G__27919.cljs$core$IFn$_invoke$arity$variadic = G__27919__delegate;
return G__27919;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1521783864755