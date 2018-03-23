// Compiled by ClojureScript 1.7.145 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16358__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16358__auto__){
return or__16358__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16358__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26736_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26736_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26741 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26742 = null;
var count__26743 = (0);
var i__26744 = (0);
while(true){
if((i__26744 < count__26743)){
var n = cljs.core._nth.call(null,chunk__26742,i__26744);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26745 = seq__26741;
var G__26746 = chunk__26742;
var G__26747 = count__26743;
var G__26748 = (i__26744 + (1));
seq__26741 = G__26745;
chunk__26742 = G__26746;
count__26743 = G__26747;
i__26744 = G__26748;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26741);
if(temp__4425__auto__){
var seq__26741__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26741__$1)){
var c__17161__auto__ = cljs.core.chunk_first.call(null,seq__26741__$1);
var G__26749 = cljs.core.chunk_rest.call(null,seq__26741__$1);
var G__26750 = c__17161__auto__;
var G__26751 = cljs.core.count.call(null,c__17161__auto__);
var G__26752 = (0);
seq__26741 = G__26749;
chunk__26742 = G__26750;
count__26743 = G__26751;
i__26744 = G__26752;
continue;
} else {
var n = cljs.core.first.call(null,seq__26741__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26753 = cljs.core.next.call(null,seq__26741__$1);
var G__26754 = null;
var G__26755 = (0);
var G__26756 = (0);
seq__26741 = G__26753;
chunk__26742 = G__26754;
count__26743 = G__26755;
i__26744 = G__26756;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__26795_26802 = cljs.core.seq.call(null,deps);
var chunk__26796_26803 = null;
var count__26797_26804 = (0);
var i__26798_26805 = (0);
while(true){
if((i__26798_26805 < count__26797_26804)){
var dep_26806 = cljs.core._nth.call(null,chunk__26796_26803,i__26798_26805);
topo_sort_helper_STAR_.call(null,dep_26806,(depth + (1)),state);

var G__26807 = seq__26795_26802;
var G__26808 = chunk__26796_26803;
var G__26809 = count__26797_26804;
var G__26810 = (i__26798_26805 + (1));
seq__26795_26802 = G__26807;
chunk__26796_26803 = G__26808;
count__26797_26804 = G__26809;
i__26798_26805 = G__26810;
continue;
} else {
var temp__4425__auto___26811 = cljs.core.seq.call(null,seq__26795_26802);
if(temp__4425__auto___26811){
var seq__26795_26812__$1 = temp__4425__auto___26811;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26795_26812__$1)){
var c__17161__auto___26813 = cljs.core.chunk_first.call(null,seq__26795_26812__$1);
var G__26814 = cljs.core.chunk_rest.call(null,seq__26795_26812__$1);
var G__26815 = c__17161__auto___26813;
var G__26816 = cljs.core.count.call(null,c__17161__auto___26813);
var G__26817 = (0);
seq__26795_26802 = G__26814;
chunk__26796_26803 = G__26815;
count__26797_26804 = G__26816;
i__26798_26805 = G__26817;
continue;
} else {
var dep_26818 = cljs.core.first.call(null,seq__26795_26812__$1);
topo_sort_helper_STAR_.call(null,dep_26818,(depth + (1)),state);

var G__26819 = cljs.core.next.call(null,seq__26795_26812__$1);
var G__26820 = null;
var G__26821 = (0);
var G__26822 = (0);
seq__26795_26802 = G__26819;
chunk__26796_26803 = G__26820;
count__26797_26804 = G__26821;
i__26798_26805 = G__26822;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26799){
var vec__26801 = p__26799;
var x = cljs.core.nth.call(null,vec__26801,(0),null);
var xs = cljs.core.nthnext.call(null,vec__26801,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26801,x,xs,get_deps__$1){
return (function (p1__26757_SHARP_){
return clojure.set.difference.call(null,p1__26757_SHARP_,x);
});})(vec__26801,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26835 = cljs.core.seq.call(null,provides);
var chunk__26836 = null;
var count__26837 = (0);
var i__26838 = (0);
while(true){
if((i__26838 < count__26837)){
var prov = cljs.core._nth.call(null,chunk__26836,i__26838);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26839_26847 = cljs.core.seq.call(null,requires);
var chunk__26840_26848 = null;
var count__26841_26849 = (0);
var i__26842_26850 = (0);
while(true){
if((i__26842_26850 < count__26841_26849)){
var req_26851 = cljs.core._nth.call(null,chunk__26840_26848,i__26842_26850);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26851,prov);

var G__26852 = seq__26839_26847;
var G__26853 = chunk__26840_26848;
var G__26854 = count__26841_26849;
var G__26855 = (i__26842_26850 + (1));
seq__26839_26847 = G__26852;
chunk__26840_26848 = G__26853;
count__26841_26849 = G__26854;
i__26842_26850 = G__26855;
continue;
} else {
var temp__4425__auto___26856 = cljs.core.seq.call(null,seq__26839_26847);
if(temp__4425__auto___26856){
var seq__26839_26857__$1 = temp__4425__auto___26856;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26839_26857__$1)){
var c__17161__auto___26858 = cljs.core.chunk_first.call(null,seq__26839_26857__$1);
var G__26859 = cljs.core.chunk_rest.call(null,seq__26839_26857__$1);
var G__26860 = c__17161__auto___26858;
var G__26861 = cljs.core.count.call(null,c__17161__auto___26858);
var G__26862 = (0);
seq__26839_26847 = G__26859;
chunk__26840_26848 = G__26860;
count__26841_26849 = G__26861;
i__26842_26850 = G__26862;
continue;
} else {
var req_26863 = cljs.core.first.call(null,seq__26839_26857__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26863,prov);

var G__26864 = cljs.core.next.call(null,seq__26839_26857__$1);
var G__26865 = null;
var G__26866 = (0);
var G__26867 = (0);
seq__26839_26847 = G__26864;
chunk__26840_26848 = G__26865;
count__26841_26849 = G__26866;
i__26842_26850 = G__26867;
continue;
}
} else {
}
}
break;
}

var G__26868 = seq__26835;
var G__26869 = chunk__26836;
var G__26870 = count__26837;
var G__26871 = (i__26838 + (1));
seq__26835 = G__26868;
chunk__26836 = G__26869;
count__26837 = G__26870;
i__26838 = G__26871;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26835);
if(temp__4425__auto__){
var seq__26835__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26835__$1)){
var c__17161__auto__ = cljs.core.chunk_first.call(null,seq__26835__$1);
var G__26872 = cljs.core.chunk_rest.call(null,seq__26835__$1);
var G__26873 = c__17161__auto__;
var G__26874 = cljs.core.count.call(null,c__17161__auto__);
var G__26875 = (0);
seq__26835 = G__26872;
chunk__26836 = G__26873;
count__26837 = G__26874;
i__26838 = G__26875;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26835__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26843_26876 = cljs.core.seq.call(null,requires);
var chunk__26844_26877 = null;
var count__26845_26878 = (0);
var i__26846_26879 = (0);
while(true){
if((i__26846_26879 < count__26845_26878)){
var req_26880 = cljs.core._nth.call(null,chunk__26844_26877,i__26846_26879);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26880,prov);

var G__26881 = seq__26843_26876;
var G__26882 = chunk__26844_26877;
var G__26883 = count__26845_26878;
var G__26884 = (i__26846_26879 + (1));
seq__26843_26876 = G__26881;
chunk__26844_26877 = G__26882;
count__26845_26878 = G__26883;
i__26846_26879 = G__26884;
continue;
} else {
var temp__4425__auto___26885__$1 = cljs.core.seq.call(null,seq__26843_26876);
if(temp__4425__auto___26885__$1){
var seq__26843_26886__$1 = temp__4425__auto___26885__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26843_26886__$1)){
var c__17161__auto___26887 = cljs.core.chunk_first.call(null,seq__26843_26886__$1);
var G__26888 = cljs.core.chunk_rest.call(null,seq__26843_26886__$1);
var G__26889 = c__17161__auto___26887;
var G__26890 = cljs.core.count.call(null,c__17161__auto___26887);
var G__26891 = (0);
seq__26843_26876 = G__26888;
chunk__26844_26877 = G__26889;
count__26845_26878 = G__26890;
i__26846_26879 = G__26891;
continue;
} else {
var req_26892 = cljs.core.first.call(null,seq__26843_26886__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26892,prov);

var G__26893 = cljs.core.next.call(null,seq__26843_26886__$1);
var G__26894 = null;
var G__26895 = (0);
var G__26896 = (0);
seq__26843_26876 = G__26893;
chunk__26844_26877 = G__26894;
count__26845_26878 = G__26895;
i__26846_26879 = G__26896;
continue;
}
} else {
}
}
break;
}

var G__26897 = cljs.core.next.call(null,seq__26835__$1);
var G__26898 = null;
var G__26899 = (0);
var G__26900 = (0);
seq__26835 = G__26897;
chunk__26836 = G__26898;
count__26837 = G__26899;
i__26838 = G__26900;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26905_26909 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26906_26910 = null;
var count__26907_26911 = (0);
var i__26908_26912 = (0);
while(true){
if((i__26908_26912 < count__26907_26911)){
var ns_26913 = cljs.core._nth.call(null,chunk__26906_26910,i__26908_26912);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26913);

var G__26914 = seq__26905_26909;
var G__26915 = chunk__26906_26910;
var G__26916 = count__26907_26911;
var G__26917 = (i__26908_26912 + (1));
seq__26905_26909 = G__26914;
chunk__26906_26910 = G__26915;
count__26907_26911 = G__26916;
i__26908_26912 = G__26917;
continue;
} else {
var temp__4425__auto___26918 = cljs.core.seq.call(null,seq__26905_26909);
if(temp__4425__auto___26918){
var seq__26905_26919__$1 = temp__4425__auto___26918;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26905_26919__$1)){
var c__17161__auto___26920 = cljs.core.chunk_first.call(null,seq__26905_26919__$1);
var G__26921 = cljs.core.chunk_rest.call(null,seq__26905_26919__$1);
var G__26922 = c__17161__auto___26920;
var G__26923 = cljs.core.count.call(null,c__17161__auto___26920);
var G__26924 = (0);
seq__26905_26909 = G__26921;
chunk__26906_26910 = G__26922;
count__26907_26911 = G__26923;
i__26908_26912 = G__26924;
continue;
} else {
var ns_26925 = cljs.core.first.call(null,seq__26905_26919__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26925);

var G__26926 = cljs.core.next.call(null,seq__26905_26919__$1);
var G__26927 = null;
var G__26928 = (0);
var G__26929 = (0);
seq__26905_26909 = G__26926;
chunk__26906_26910 = G__26927;
count__26907_26911 = G__26928;
i__26908_26912 = G__26929;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16358__auto__ = goog.require__;
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__26930__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26930 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26931__i = 0, G__26931__a = new Array(arguments.length -  0);
while (G__26931__i < G__26931__a.length) {G__26931__a[G__26931__i] = arguments[G__26931__i + 0]; ++G__26931__i;}
  args = new cljs.core.IndexedSeq(G__26931__a,0);
} 
return G__26930__delegate.call(this,args);};
G__26930.cljs$lang$maxFixedArity = 0;
G__26930.cljs$lang$applyTo = (function (arglist__26932){
var args = cljs.core.seq(arglist__26932);
return G__26930__delegate(args);
});
G__26930.cljs$core$IFn$_invoke$arity$variadic = G__26930__delegate;
return G__26930;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26934 = cljs.core._EQ_;
var expr__26935 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26934.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26935))){
var path_parts = ((function (pred__26934,expr__26935){
return (function (p1__26933_SHARP_){
return clojure.string.split.call(null,p1__26933_SHARP_,/[\/\\]/);
});})(pred__26934,expr__26935))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26934,expr__26935){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(clojure.string.join.call(null,"/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","..",request_url], null)));
}catch (e26937){if((e26937 instanceof Error)){
var e = e26937;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26937;

}
}})());
});
;})(path_parts,sep,root,pred__26934,expr__26935))
} else {
if(cljs.core.truth_(pred__26934.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26935))){
return ((function (pred__26934,expr__26935){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__26934,expr__26935){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26934,expr__26935))
);

return deferred.addErrback(((function (deferred,pred__26934,expr__26935){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26934,expr__26935))
);
});
;})(pred__26934,expr__26935))
} else {
return ((function (pred__26934,expr__26935){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26934,expr__26935))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26938,callback){
var map__26941 = p__26938;
var map__26941__$1 = ((((!((map__26941 == null)))?((((map__26941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26941):map__26941);
var file_msg = map__26941__$1;
var request_url = cljs.core.get.call(null,map__26941__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26941,map__26941__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26941,map__26941__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19438__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto__){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto__){
return (function (state_26965){
var state_val_26966 = (state_26965[(1)]);
if((state_val_26966 === (7))){
var inst_26961 = (state_26965[(2)]);
var state_26965__$1 = state_26965;
var statearr_26967_26987 = state_26965__$1;
(statearr_26967_26987[(2)] = inst_26961);

(statearr_26967_26987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26966 === (1))){
var state_26965__$1 = state_26965;
var statearr_26968_26988 = state_26965__$1;
(statearr_26968_26988[(2)] = null);

(statearr_26968_26988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26966 === (4))){
var inst_26945 = (state_26965[(7)]);
var inst_26945__$1 = (state_26965[(2)]);
var state_26965__$1 = (function (){var statearr_26969 = state_26965;
(statearr_26969[(7)] = inst_26945__$1);

return statearr_26969;
})();
if(cljs.core.truth_(inst_26945__$1)){
var statearr_26970_26989 = state_26965__$1;
(statearr_26970_26989[(1)] = (5));

} else {
var statearr_26971_26990 = state_26965__$1;
(statearr_26971_26990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26966 === (6))){
var state_26965__$1 = state_26965;
var statearr_26972_26991 = state_26965__$1;
(statearr_26972_26991[(2)] = null);

(statearr_26972_26991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26966 === (3))){
var inst_26963 = (state_26965[(2)]);
var state_26965__$1 = state_26965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26965__$1,inst_26963);
} else {
if((state_val_26966 === (2))){
var state_26965__$1 = state_26965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26965__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26966 === (11))){
var inst_26957 = (state_26965[(2)]);
var state_26965__$1 = (function (){var statearr_26973 = state_26965;
(statearr_26973[(8)] = inst_26957);

return statearr_26973;
})();
var statearr_26974_26992 = state_26965__$1;
(statearr_26974_26992[(2)] = null);

(statearr_26974_26992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26966 === (9))){
var inst_26949 = (state_26965[(9)]);
var inst_26951 = (state_26965[(10)]);
var inst_26953 = inst_26951.call(null,inst_26949);
var state_26965__$1 = state_26965;
var statearr_26975_26993 = state_26965__$1;
(statearr_26975_26993[(2)] = inst_26953);

(statearr_26975_26993[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26966 === (5))){
var inst_26945 = (state_26965[(7)]);
var inst_26947 = figwheel.client.file_reloading.blocking_load.call(null,inst_26945);
var state_26965__$1 = state_26965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26965__$1,(8),inst_26947);
} else {
if((state_val_26966 === (10))){
var inst_26949 = (state_26965[(9)]);
var inst_26955 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26949);
var state_26965__$1 = state_26965;
var statearr_26976_26994 = state_26965__$1;
(statearr_26976_26994[(2)] = inst_26955);

(statearr_26976_26994[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26966 === (8))){
var inst_26945 = (state_26965[(7)]);
var inst_26951 = (state_26965[(10)]);
var inst_26949 = (state_26965[(2)]);
var inst_26950 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26951__$1 = cljs.core.get.call(null,inst_26950,inst_26945);
var state_26965__$1 = (function (){var statearr_26977 = state_26965;
(statearr_26977[(9)] = inst_26949);

(statearr_26977[(10)] = inst_26951__$1);

return statearr_26977;
})();
if(cljs.core.truth_(inst_26951__$1)){
var statearr_26978_26995 = state_26965__$1;
(statearr_26978_26995[(1)] = (9));

} else {
var statearr_26979_26996 = state_26965__$1;
(statearr_26979_26996[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19438__auto__))
;
return ((function (switch__19373__auto__,c__19438__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19374__auto__ = null;
var figwheel$client$file_reloading$state_machine__19374__auto____0 = (function (){
var statearr_26983 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26983[(0)] = figwheel$client$file_reloading$state_machine__19374__auto__);

(statearr_26983[(1)] = (1));

return statearr_26983;
});
var figwheel$client$file_reloading$state_machine__19374__auto____1 = (function (state_26965){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_26965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e26984){if((e26984 instanceof Object)){
var ex__19377__auto__ = e26984;
var statearr_26985_26997 = state_26965;
(statearr_26985_26997[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26998 = state_26965;
state_26965 = G__26998;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19374__auto__ = function(state_26965){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19374__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19374__auto____1.call(this,state_26965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19374__auto____0;
figwheel$client$file_reloading$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19374__auto____1;
return figwheel$client$file_reloading$state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto__))
})();
var state__19440__auto__ = (function (){var statearr_26986 = f__19439__auto__.call(null);
(statearr_26986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto__);

return statearr_26986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto__))
);

return c__19438__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26999,callback){
var map__27002 = p__26999;
var map__27002__$1 = ((((!((map__27002 == null)))?((((map__27002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27002):map__27002);
var file_msg = map__27002__$1;
var namespace = cljs.core.get.call(null,map__27002__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27002,map__27002__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27002,map__27002__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27004){
var map__27007 = p__27004;
var map__27007__$1 = ((((!((map__27007 == null)))?((((map__27007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27007):map__27007);
var file_msg = map__27007__$1;
var namespace = cljs.core.get.call(null,map__27007__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16346__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16346__auto__){
var or__16358__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
var or__16358__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16358__auto____$1)){
return or__16358__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16346__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27009,callback){
var map__27012 = p__27009;
var map__27012__$1 = ((((!((map__27012 == null)))?((((map__27012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27012):map__27012);
var file_msg = map__27012__$1;
var request_url = cljs.core.get.call(null,map__27012__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27012__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19438__auto___27100 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___27100,out){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___27100,out){
return (function (state_27082){
var state_val_27083 = (state_27082[(1)]);
if((state_val_27083 === (1))){
var inst_27060 = cljs.core.nth.call(null,files,(0),null);
var inst_27061 = cljs.core.nthnext.call(null,files,(1));
var inst_27062 = files;
var state_27082__$1 = (function (){var statearr_27084 = state_27082;
(statearr_27084[(7)] = inst_27062);

(statearr_27084[(8)] = inst_27061);

(statearr_27084[(9)] = inst_27060);

return statearr_27084;
})();
var statearr_27085_27101 = state_27082__$1;
(statearr_27085_27101[(2)] = null);

(statearr_27085_27101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (2))){
var inst_27062 = (state_27082[(7)]);
var inst_27065 = (state_27082[(10)]);
var inst_27065__$1 = cljs.core.nth.call(null,inst_27062,(0),null);
var inst_27066 = cljs.core.nthnext.call(null,inst_27062,(1));
var inst_27067 = (inst_27065__$1 == null);
var inst_27068 = cljs.core.not.call(null,inst_27067);
var state_27082__$1 = (function (){var statearr_27086 = state_27082;
(statearr_27086[(11)] = inst_27066);

(statearr_27086[(10)] = inst_27065__$1);

return statearr_27086;
})();
if(inst_27068){
var statearr_27087_27102 = state_27082__$1;
(statearr_27087_27102[(1)] = (4));

} else {
var statearr_27088_27103 = state_27082__$1;
(statearr_27088_27103[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (3))){
var inst_27080 = (state_27082[(2)]);
var state_27082__$1 = state_27082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27082__$1,inst_27080);
} else {
if((state_val_27083 === (4))){
var inst_27065 = (state_27082[(10)]);
var inst_27070 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27065);
var state_27082__$1 = state_27082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27082__$1,(7),inst_27070);
} else {
if((state_val_27083 === (5))){
var inst_27076 = cljs.core.async.close_BANG_.call(null,out);
var state_27082__$1 = state_27082;
var statearr_27089_27104 = state_27082__$1;
(statearr_27089_27104[(2)] = inst_27076);

(statearr_27089_27104[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (6))){
var inst_27078 = (state_27082[(2)]);
var state_27082__$1 = state_27082;
var statearr_27090_27105 = state_27082__$1;
(statearr_27090_27105[(2)] = inst_27078);

(statearr_27090_27105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (7))){
var inst_27066 = (state_27082[(11)]);
var inst_27072 = (state_27082[(2)]);
var inst_27073 = cljs.core.async.put_BANG_.call(null,out,inst_27072);
var inst_27062 = inst_27066;
var state_27082__$1 = (function (){var statearr_27091 = state_27082;
(statearr_27091[(7)] = inst_27062);

(statearr_27091[(12)] = inst_27073);

return statearr_27091;
})();
var statearr_27092_27106 = state_27082__$1;
(statearr_27092_27106[(2)] = null);

(statearr_27092_27106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__19438__auto___27100,out))
;
return ((function (switch__19373__auto__,c__19438__auto___27100,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19374__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19374__auto____0 = (function (){
var statearr_27096 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27096[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19374__auto__);

(statearr_27096[(1)] = (1));

return statearr_27096;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19374__auto____1 = (function (state_27082){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_27082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e27097){if((e27097 instanceof Object)){
var ex__19377__auto__ = e27097;
var statearr_27098_27107 = state_27082;
(statearr_27098_27107[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27108 = state_27082;
state_27082 = G__27108;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19374__auto__ = function(state_27082){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19374__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19374__auto____1.call(this,state_27082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19374__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19374__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___27100,out))
})();
var state__19440__auto__ = (function (){var statearr_27099 = f__19439__auto__.call(null);
(statearr_27099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___27100);

return statearr_27099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___27100,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27109,opts){
var map__27113 = p__27109;
var map__27113__$1 = ((((!((map__27113 == null)))?((((map__27113.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27113.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27113):map__27113);
var eval_body__$1 = cljs.core.get.call(null,map__27113__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27113__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16346__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16346__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16346__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27115){var e = e27115;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27116_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27116_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27121){
var vec__27122 = p__27121;
var k = cljs.core.nth.call(null,vec__27122,(0),null);
var v = cljs.core.nth.call(null,vec__27122,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27123){
var vec__27124 = p__27123;
var k = cljs.core.nth.call(null,vec__27124,(0),null);
var v = cljs.core.nth.call(null,vec__27124,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27128,p__27129){
var map__27376 = p__27128;
var map__27376__$1 = ((((!((map__27376 == null)))?((((map__27376.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27376.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27376):map__27376);
var opts = map__27376__$1;
var before_jsload = cljs.core.get.call(null,map__27376__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27376__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27376__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27377 = p__27129;
var map__27377__$1 = ((((!((map__27377 == null)))?((((map__27377.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27377.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27377):map__27377);
var msg = map__27377__$1;
var files = cljs.core.get.call(null,map__27377__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27377__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27377__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19438__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto__,map__27376,map__27376__$1,opts,before_jsload,on_jsload,reload_dependents,map__27377,map__27377__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto__,map__27376,map__27376__$1,opts,before_jsload,on_jsload,reload_dependents,map__27377,map__27377__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27530){
var state_val_27531 = (state_27530[(1)]);
if((state_val_27531 === (7))){
var inst_27394 = (state_27530[(7)]);
var inst_27391 = (state_27530[(8)]);
var inst_27392 = (state_27530[(9)]);
var inst_27393 = (state_27530[(10)]);
var inst_27399 = cljs.core._nth.call(null,inst_27392,inst_27394);
var inst_27400 = figwheel.client.file_reloading.eval_body.call(null,inst_27399,opts);
var inst_27401 = (inst_27394 + (1));
var tmp27532 = inst_27391;
var tmp27533 = inst_27392;
var tmp27534 = inst_27393;
var inst_27391__$1 = tmp27532;
var inst_27392__$1 = tmp27533;
var inst_27393__$1 = tmp27534;
var inst_27394__$1 = inst_27401;
var state_27530__$1 = (function (){var statearr_27535 = state_27530;
(statearr_27535[(7)] = inst_27394__$1);

(statearr_27535[(8)] = inst_27391__$1);

(statearr_27535[(9)] = inst_27392__$1);

(statearr_27535[(10)] = inst_27393__$1);

(statearr_27535[(11)] = inst_27400);

return statearr_27535;
})();
var statearr_27536_27622 = state_27530__$1;
(statearr_27536_27622[(2)] = null);

(statearr_27536_27622[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (20))){
var inst_27434 = (state_27530[(12)]);
var inst_27442 = figwheel.client.file_reloading.sort_files.call(null,inst_27434);
var state_27530__$1 = state_27530;
var statearr_27537_27623 = state_27530__$1;
(statearr_27537_27623[(2)] = inst_27442);

(statearr_27537_27623[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (27))){
var state_27530__$1 = state_27530;
var statearr_27538_27624 = state_27530__$1;
(statearr_27538_27624[(2)] = null);

(statearr_27538_27624[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (1))){
var inst_27383 = (state_27530[(13)]);
var inst_27380 = before_jsload.call(null,files);
var inst_27381 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27382 = (function (){return ((function (inst_27383,inst_27380,inst_27381,state_val_27531,c__19438__auto__,map__27376,map__27376__$1,opts,before_jsload,on_jsload,reload_dependents,map__27377,map__27377__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27125_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27125_SHARP_);
});
;})(inst_27383,inst_27380,inst_27381,state_val_27531,c__19438__auto__,map__27376,map__27376__$1,opts,before_jsload,on_jsload,reload_dependents,map__27377,map__27377__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27383__$1 = cljs.core.filter.call(null,inst_27382,files);
var inst_27384 = cljs.core.not_empty.call(null,inst_27383__$1);
var state_27530__$1 = (function (){var statearr_27539 = state_27530;
(statearr_27539[(13)] = inst_27383__$1);

(statearr_27539[(14)] = inst_27381);

(statearr_27539[(15)] = inst_27380);

return statearr_27539;
})();
if(cljs.core.truth_(inst_27384)){
var statearr_27540_27625 = state_27530__$1;
(statearr_27540_27625[(1)] = (2));

} else {
var statearr_27541_27626 = state_27530__$1;
(statearr_27541_27626[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (24))){
var state_27530__$1 = state_27530;
var statearr_27542_27627 = state_27530__$1;
(statearr_27542_27627[(2)] = null);

(statearr_27542_27627[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (39))){
var inst_27484 = (state_27530[(16)]);
var state_27530__$1 = state_27530;
var statearr_27543_27628 = state_27530__$1;
(statearr_27543_27628[(2)] = inst_27484);

(statearr_27543_27628[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (46))){
var inst_27525 = (state_27530[(2)]);
var state_27530__$1 = state_27530;
var statearr_27544_27629 = state_27530__$1;
(statearr_27544_27629[(2)] = inst_27525);

(statearr_27544_27629[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (4))){
var inst_27428 = (state_27530[(2)]);
var inst_27429 = cljs.core.List.EMPTY;
var inst_27430 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27429);
var inst_27431 = (function (){return ((function (inst_27428,inst_27429,inst_27430,state_val_27531,c__19438__auto__,map__27376,map__27376__$1,opts,before_jsload,on_jsload,reload_dependents,map__27377,map__27377__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27126_SHARP_){
var and__16346__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27126_SHARP_);
if(cljs.core.truth_(and__16346__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27126_SHARP_));
} else {
return and__16346__auto__;
}
});
;})(inst_27428,inst_27429,inst_27430,state_val_27531,c__19438__auto__,map__27376,map__27376__$1,opts,before_jsload,on_jsload,reload_dependents,map__27377,map__27377__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27432 = cljs.core.filter.call(null,inst_27431,files);
var inst_27433 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27434 = cljs.core.concat.call(null,inst_27432,inst_27433);
var state_27530__$1 = (function (){var statearr_27545 = state_27530;
(statearr_27545[(17)] = inst_27428);

(statearr_27545[(18)] = inst_27430);

(statearr_27545[(12)] = inst_27434);

return statearr_27545;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27546_27630 = state_27530__$1;
(statearr_27546_27630[(1)] = (16));

} else {
var statearr_27547_27631 = state_27530__$1;
(statearr_27547_27631[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (15))){
var inst_27418 = (state_27530[(2)]);
var state_27530__$1 = state_27530;
var statearr_27548_27632 = state_27530__$1;
(statearr_27548_27632[(2)] = inst_27418);

(statearr_27548_27632[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (21))){
var inst_27444 = (state_27530[(19)]);
var inst_27444__$1 = (state_27530[(2)]);
var inst_27445 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27444__$1);
var state_27530__$1 = (function (){var statearr_27549 = state_27530;
(statearr_27549[(19)] = inst_27444__$1);

return statearr_27549;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27530__$1,(22),inst_27445);
} else {
if((state_val_27531 === (31))){
var inst_27528 = (state_27530[(2)]);
var state_27530__$1 = state_27530;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27530__$1,inst_27528);
} else {
if((state_val_27531 === (32))){
var inst_27484 = (state_27530[(16)]);
var inst_27489 = inst_27484.cljs$lang$protocol_mask$partition0$;
var inst_27490 = (inst_27489 & (64));
var inst_27491 = inst_27484.cljs$core$ISeq$;
var inst_27492 = (inst_27490) || (inst_27491);
var state_27530__$1 = state_27530;
if(cljs.core.truth_(inst_27492)){
var statearr_27550_27633 = state_27530__$1;
(statearr_27550_27633[(1)] = (35));

} else {
var statearr_27551_27634 = state_27530__$1;
(statearr_27551_27634[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (40))){
var inst_27505 = (state_27530[(20)]);
var inst_27504 = (state_27530[(2)]);
var inst_27505__$1 = cljs.core.get.call(null,inst_27504,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27506 = cljs.core.get.call(null,inst_27504,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27507 = cljs.core.not_empty.call(null,inst_27505__$1);
var state_27530__$1 = (function (){var statearr_27552 = state_27530;
(statearr_27552[(21)] = inst_27506);

(statearr_27552[(20)] = inst_27505__$1);

return statearr_27552;
})();
if(cljs.core.truth_(inst_27507)){
var statearr_27553_27635 = state_27530__$1;
(statearr_27553_27635[(1)] = (41));

} else {
var statearr_27554_27636 = state_27530__$1;
(statearr_27554_27636[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (33))){
var state_27530__$1 = state_27530;
var statearr_27555_27637 = state_27530__$1;
(statearr_27555_27637[(2)] = false);

(statearr_27555_27637[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (13))){
var inst_27404 = (state_27530[(22)]);
var inst_27408 = cljs.core.chunk_first.call(null,inst_27404);
var inst_27409 = cljs.core.chunk_rest.call(null,inst_27404);
var inst_27410 = cljs.core.count.call(null,inst_27408);
var inst_27391 = inst_27409;
var inst_27392 = inst_27408;
var inst_27393 = inst_27410;
var inst_27394 = (0);
var state_27530__$1 = (function (){var statearr_27556 = state_27530;
(statearr_27556[(7)] = inst_27394);

(statearr_27556[(8)] = inst_27391);

(statearr_27556[(9)] = inst_27392);

(statearr_27556[(10)] = inst_27393);

return statearr_27556;
})();
var statearr_27557_27638 = state_27530__$1;
(statearr_27557_27638[(2)] = null);

(statearr_27557_27638[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (22))){
var inst_27452 = (state_27530[(23)]);
var inst_27448 = (state_27530[(24)]);
var inst_27444 = (state_27530[(19)]);
var inst_27447 = (state_27530[(25)]);
var inst_27447__$1 = (state_27530[(2)]);
var inst_27448__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27447__$1);
var inst_27449 = (function (){var all_files = inst_27444;
var res_SINGLEQUOTE_ = inst_27447__$1;
var res = inst_27448__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27452,inst_27448,inst_27444,inst_27447,inst_27447__$1,inst_27448__$1,state_val_27531,c__19438__auto__,map__27376,map__27376__$1,opts,before_jsload,on_jsload,reload_dependents,map__27377,map__27377__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27127_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27127_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27452,inst_27448,inst_27444,inst_27447,inst_27447__$1,inst_27448__$1,state_val_27531,c__19438__auto__,map__27376,map__27376__$1,opts,before_jsload,on_jsload,reload_dependents,map__27377,map__27377__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27450 = cljs.core.filter.call(null,inst_27449,inst_27447__$1);
var inst_27451 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27452__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27451);
var inst_27453 = cljs.core.not_empty.call(null,inst_27452__$1);
var state_27530__$1 = (function (){var statearr_27558 = state_27530;
(statearr_27558[(26)] = inst_27450);

(statearr_27558[(23)] = inst_27452__$1);

(statearr_27558[(24)] = inst_27448__$1);

(statearr_27558[(25)] = inst_27447__$1);

return statearr_27558;
})();
if(cljs.core.truth_(inst_27453)){
var statearr_27559_27639 = state_27530__$1;
(statearr_27559_27639[(1)] = (23));

} else {
var statearr_27560_27640 = state_27530__$1;
(statearr_27560_27640[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (36))){
var state_27530__$1 = state_27530;
var statearr_27561_27641 = state_27530__$1;
(statearr_27561_27641[(2)] = false);

(statearr_27561_27641[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (41))){
var inst_27505 = (state_27530[(20)]);
var inst_27509 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27510 = cljs.core.map.call(null,inst_27509,inst_27505);
var inst_27511 = cljs.core.pr_str.call(null,inst_27510);
var inst_27512 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27511)].join('');
var inst_27513 = figwheel.client.utils.log.call(null,inst_27512);
var state_27530__$1 = state_27530;
var statearr_27562_27642 = state_27530__$1;
(statearr_27562_27642[(2)] = inst_27513);

(statearr_27562_27642[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (43))){
var inst_27506 = (state_27530[(21)]);
var inst_27516 = (state_27530[(2)]);
var inst_27517 = cljs.core.not_empty.call(null,inst_27506);
var state_27530__$1 = (function (){var statearr_27563 = state_27530;
(statearr_27563[(27)] = inst_27516);

return statearr_27563;
})();
if(cljs.core.truth_(inst_27517)){
var statearr_27564_27643 = state_27530__$1;
(statearr_27564_27643[(1)] = (44));

} else {
var statearr_27565_27644 = state_27530__$1;
(statearr_27565_27644[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (29))){
var inst_27450 = (state_27530[(26)]);
var inst_27452 = (state_27530[(23)]);
var inst_27448 = (state_27530[(24)]);
var inst_27484 = (state_27530[(16)]);
var inst_27444 = (state_27530[(19)]);
var inst_27447 = (state_27530[(25)]);
var inst_27480 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27483 = (function (){var all_files = inst_27444;
var res_SINGLEQUOTE_ = inst_27447;
var res = inst_27448;
var files_not_loaded = inst_27450;
var dependencies_that_loaded = inst_27452;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27450,inst_27452,inst_27448,inst_27484,inst_27444,inst_27447,inst_27480,state_val_27531,c__19438__auto__,map__27376,map__27376__$1,opts,before_jsload,on_jsload,reload_dependents,map__27377,map__27377__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27482){
var map__27566 = p__27482;
var map__27566__$1 = ((((!((map__27566 == null)))?((((map__27566.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27566.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27566):map__27566);
var namespace = cljs.core.get.call(null,map__27566__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27450,inst_27452,inst_27448,inst_27484,inst_27444,inst_27447,inst_27480,state_val_27531,c__19438__auto__,map__27376,map__27376__$1,opts,before_jsload,on_jsload,reload_dependents,map__27377,map__27377__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27484__$1 = cljs.core.group_by.call(null,inst_27483,inst_27450);
var inst_27486 = (inst_27484__$1 == null);
var inst_27487 = cljs.core.not.call(null,inst_27486);
var state_27530__$1 = (function (){var statearr_27568 = state_27530;
(statearr_27568[(28)] = inst_27480);

(statearr_27568[(16)] = inst_27484__$1);

return statearr_27568;
})();
if(inst_27487){
var statearr_27569_27645 = state_27530__$1;
(statearr_27569_27645[(1)] = (32));

} else {
var statearr_27570_27646 = state_27530__$1;
(statearr_27570_27646[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (44))){
var inst_27506 = (state_27530[(21)]);
var inst_27519 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27506);
var inst_27520 = cljs.core.pr_str.call(null,inst_27519);
var inst_27521 = [cljs.core.str("not required: "),cljs.core.str(inst_27520)].join('');
var inst_27522 = figwheel.client.utils.log.call(null,inst_27521);
var state_27530__$1 = state_27530;
var statearr_27571_27647 = state_27530__$1;
(statearr_27571_27647[(2)] = inst_27522);

(statearr_27571_27647[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (6))){
var inst_27425 = (state_27530[(2)]);
var state_27530__$1 = state_27530;
var statearr_27572_27648 = state_27530__$1;
(statearr_27572_27648[(2)] = inst_27425);

(statearr_27572_27648[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (28))){
var inst_27450 = (state_27530[(26)]);
var inst_27477 = (state_27530[(2)]);
var inst_27478 = cljs.core.not_empty.call(null,inst_27450);
var state_27530__$1 = (function (){var statearr_27573 = state_27530;
(statearr_27573[(29)] = inst_27477);

return statearr_27573;
})();
if(cljs.core.truth_(inst_27478)){
var statearr_27574_27649 = state_27530__$1;
(statearr_27574_27649[(1)] = (29));

} else {
var statearr_27575_27650 = state_27530__$1;
(statearr_27575_27650[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (25))){
var inst_27448 = (state_27530[(24)]);
var inst_27464 = (state_27530[(2)]);
var inst_27465 = cljs.core.not_empty.call(null,inst_27448);
var state_27530__$1 = (function (){var statearr_27576 = state_27530;
(statearr_27576[(30)] = inst_27464);

return statearr_27576;
})();
if(cljs.core.truth_(inst_27465)){
var statearr_27577_27651 = state_27530__$1;
(statearr_27577_27651[(1)] = (26));

} else {
var statearr_27578_27652 = state_27530__$1;
(statearr_27578_27652[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (34))){
var inst_27499 = (state_27530[(2)]);
var state_27530__$1 = state_27530;
if(cljs.core.truth_(inst_27499)){
var statearr_27579_27653 = state_27530__$1;
(statearr_27579_27653[(1)] = (38));

} else {
var statearr_27580_27654 = state_27530__$1;
(statearr_27580_27654[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (17))){
var state_27530__$1 = state_27530;
var statearr_27581_27655 = state_27530__$1;
(statearr_27581_27655[(2)] = recompile_dependents);

(statearr_27581_27655[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (3))){
var state_27530__$1 = state_27530;
var statearr_27582_27656 = state_27530__$1;
(statearr_27582_27656[(2)] = null);

(statearr_27582_27656[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (12))){
var inst_27421 = (state_27530[(2)]);
var state_27530__$1 = state_27530;
var statearr_27583_27657 = state_27530__$1;
(statearr_27583_27657[(2)] = inst_27421);

(statearr_27583_27657[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (2))){
var inst_27383 = (state_27530[(13)]);
var inst_27390 = cljs.core.seq.call(null,inst_27383);
var inst_27391 = inst_27390;
var inst_27392 = null;
var inst_27393 = (0);
var inst_27394 = (0);
var state_27530__$1 = (function (){var statearr_27584 = state_27530;
(statearr_27584[(7)] = inst_27394);

(statearr_27584[(8)] = inst_27391);

(statearr_27584[(9)] = inst_27392);

(statearr_27584[(10)] = inst_27393);

return statearr_27584;
})();
var statearr_27585_27658 = state_27530__$1;
(statearr_27585_27658[(2)] = null);

(statearr_27585_27658[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (23))){
var inst_27450 = (state_27530[(26)]);
var inst_27452 = (state_27530[(23)]);
var inst_27448 = (state_27530[(24)]);
var inst_27444 = (state_27530[(19)]);
var inst_27447 = (state_27530[(25)]);
var inst_27455 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27457 = (function (){var all_files = inst_27444;
var res_SINGLEQUOTE_ = inst_27447;
var res = inst_27448;
var files_not_loaded = inst_27450;
var dependencies_that_loaded = inst_27452;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27450,inst_27452,inst_27448,inst_27444,inst_27447,inst_27455,state_val_27531,c__19438__auto__,map__27376,map__27376__$1,opts,before_jsload,on_jsload,reload_dependents,map__27377,map__27377__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27456){
var map__27586 = p__27456;
var map__27586__$1 = ((((!((map__27586 == null)))?((((map__27586.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27586.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27586):map__27586);
var request_url = cljs.core.get.call(null,map__27586__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27450,inst_27452,inst_27448,inst_27444,inst_27447,inst_27455,state_val_27531,c__19438__auto__,map__27376,map__27376__$1,opts,before_jsload,on_jsload,reload_dependents,map__27377,map__27377__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27458 = cljs.core.reverse.call(null,inst_27452);
var inst_27459 = cljs.core.map.call(null,inst_27457,inst_27458);
var inst_27460 = cljs.core.pr_str.call(null,inst_27459);
var inst_27461 = figwheel.client.utils.log.call(null,inst_27460);
var state_27530__$1 = (function (){var statearr_27588 = state_27530;
(statearr_27588[(31)] = inst_27455);

return statearr_27588;
})();
var statearr_27589_27659 = state_27530__$1;
(statearr_27589_27659[(2)] = inst_27461);

(statearr_27589_27659[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (35))){
var state_27530__$1 = state_27530;
var statearr_27590_27660 = state_27530__$1;
(statearr_27590_27660[(2)] = true);

(statearr_27590_27660[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (19))){
var inst_27434 = (state_27530[(12)]);
var inst_27440 = figwheel.client.file_reloading.expand_files.call(null,inst_27434);
var state_27530__$1 = state_27530;
var statearr_27591_27661 = state_27530__$1;
(statearr_27591_27661[(2)] = inst_27440);

(statearr_27591_27661[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (11))){
var state_27530__$1 = state_27530;
var statearr_27592_27662 = state_27530__$1;
(statearr_27592_27662[(2)] = null);

(statearr_27592_27662[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (9))){
var inst_27423 = (state_27530[(2)]);
var state_27530__$1 = state_27530;
var statearr_27593_27663 = state_27530__$1;
(statearr_27593_27663[(2)] = inst_27423);

(statearr_27593_27663[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (5))){
var inst_27394 = (state_27530[(7)]);
var inst_27393 = (state_27530[(10)]);
var inst_27396 = (inst_27394 < inst_27393);
var inst_27397 = inst_27396;
var state_27530__$1 = state_27530;
if(cljs.core.truth_(inst_27397)){
var statearr_27594_27664 = state_27530__$1;
(statearr_27594_27664[(1)] = (7));

} else {
var statearr_27595_27665 = state_27530__$1;
(statearr_27595_27665[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (14))){
var inst_27404 = (state_27530[(22)]);
var inst_27413 = cljs.core.first.call(null,inst_27404);
var inst_27414 = figwheel.client.file_reloading.eval_body.call(null,inst_27413,opts);
var inst_27415 = cljs.core.next.call(null,inst_27404);
var inst_27391 = inst_27415;
var inst_27392 = null;
var inst_27393 = (0);
var inst_27394 = (0);
var state_27530__$1 = (function (){var statearr_27596 = state_27530;
(statearr_27596[(32)] = inst_27414);

(statearr_27596[(7)] = inst_27394);

(statearr_27596[(8)] = inst_27391);

(statearr_27596[(9)] = inst_27392);

(statearr_27596[(10)] = inst_27393);

return statearr_27596;
})();
var statearr_27597_27666 = state_27530__$1;
(statearr_27597_27666[(2)] = null);

(statearr_27597_27666[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (45))){
var state_27530__$1 = state_27530;
var statearr_27598_27667 = state_27530__$1;
(statearr_27598_27667[(2)] = null);

(statearr_27598_27667[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (26))){
var inst_27450 = (state_27530[(26)]);
var inst_27452 = (state_27530[(23)]);
var inst_27448 = (state_27530[(24)]);
var inst_27444 = (state_27530[(19)]);
var inst_27447 = (state_27530[(25)]);
var inst_27467 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27469 = (function (){var all_files = inst_27444;
var res_SINGLEQUOTE_ = inst_27447;
var res = inst_27448;
var files_not_loaded = inst_27450;
var dependencies_that_loaded = inst_27452;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27450,inst_27452,inst_27448,inst_27444,inst_27447,inst_27467,state_val_27531,c__19438__auto__,map__27376,map__27376__$1,opts,before_jsload,on_jsload,reload_dependents,map__27377,map__27377__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27468){
var map__27599 = p__27468;
var map__27599__$1 = ((((!((map__27599 == null)))?((((map__27599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27599):map__27599);
var namespace = cljs.core.get.call(null,map__27599__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27599__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27450,inst_27452,inst_27448,inst_27444,inst_27447,inst_27467,state_val_27531,c__19438__auto__,map__27376,map__27376__$1,opts,before_jsload,on_jsload,reload_dependents,map__27377,map__27377__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27470 = cljs.core.map.call(null,inst_27469,inst_27448);
var inst_27471 = cljs.core.pr_str.call(null,inst_27470);
var inst_27472 = figwheel.client.utils.log.call(null,inst_27471);
var inst_27473 = (function (){var all_files = inst_27444;
var res_SINGLEQUOTE_ = inst_27447;
var res = inst_27448;
var files_not_loaded = inst_27450;
var dependencies_that_loaded = inst_27452;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27450,inst_27452,inst_27448,inst_27444,inst_27447,inst_27467,inst_27469,inst_27470,inst_27471,inst_27472,state_val_27531,c__19438__auto__,map__27376,map__27376__$1,opts,before_jsload,on_jsload,reload_dependents,map__27377,map__27377__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27450,inst_27452,inst_27448,inst_27444,inst_27447,inst_27467,inst_27469,inst_27470,inst_27471,inst_27472,state_val_27531,c__19438__auto__,map__27376,map__27376__$1,opts,before_jsload,on_jsload,reload_dependents,map__27377,map__27377__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27474 = setTimeout(inst_27473,(10));
var state_27530__$1 = (function (){var statearr_27601 = state_27530;
(statearr_27601[(33)] = inst_27467);

(statearr_27601[(34)] = inst_27472);

return statearr_27601;
})();
var statearr_27602_27668 = state_27530__$1;
(statearr_27602_27668[(2)] = inst_27474);

(statearr_27602_27668[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (16))){
var state_27530__$1 = state_27530;
var statearr_27603_27669 = state_27530__$1;
(statearr_27603_27669[(2)] = reload_dependents);

(statearr_27603_27669[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (38))){
var inst_27484 = (state_27530[(16)]);
var inst_27501 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27484);
var state_27530__$1 = state_27530;
var statearr_27604_27670 = state_27530__$1;
(statearr_27604_27670[(2)] = inst_27501);

(statearr_27604_27670[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (30))){
var state_27530__$1 = state_27530;
var statearr_27605_27671 = state_27530__$1;
(statearr_27605_27671[(2)] = null);

(statearr_27605_27671[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (10))){
var inst_27404 = (state_27530[(22)]);
var inst_27406 = cljs.core.chunked_seq_QMARK_.call(null,inst_27404);
var state_27530__$1 = state_27530;
if(inst_27406){
var statearr_27606_27672 = state_27530__$1;
(statearr_27606_27672[(1)] = (13));

} else {
var statearr_27607_27673 = state_27530__$1;
(statearr_27607_27673[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (18))){
var inst_27438 = (state_27530[(2)]);
var state_27530__$1 = state_27530;
if(cljs.core.truth_(inst_27438)){
var statearr_27608_27674 = state_27530__$1;
(statearr_27608_27674[(1)] = (19));

} else {
var statearr_27609_27675 = state_27530__$1;
(statearr_27609_27675[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (42))){
var state_27530__$1 = state_27530;
var statearr_27610_27676 = state_27530__$1;
(statearr_27610_27676[(2)] = null);

(statearr_27610_27676[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (37))){
var inst_27496 = (state_27530[(2)]);
var state_27530__$1 = state_27530;
var statearr_27611_27677 = state_27530__$1;
(statearr_27611_27677[(2)] = inst_27496);

(statearr_27611_27677[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (8))){
var inst_27391 = (state_27530[(8)]);
var inst_27404 = (state_27530[(22)]);
var inst_27404__$1 = cljs.core.seq.call(null,inst_27391);
var state_27530__$1 = (function (){var statearr_27612 = state_27530;
(statearr_27612[(22)] = inst_27404__$1);

return statearr_27612;
})();
if(inst_27404__$1){
var statearr_27613_27678 = state_27530__$1;
(statearr_27613_27678[(1)] = (10));

} else {
var statearr_27614_27679 = state_27530__$1;
(statearr_27614_27679[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19438__auto__,map__27376,map__27376__$1,opts,before_jsload,on_jsload,reload_dependents,map__27377,map__27377__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19373__auto__,c__19438__auto__,map__27376,map__27376__$1,opts,before_jsload,on_jsload,reload_dependents,map__27377,map__27377__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19374__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19374__auto____0 = (function (){
var statearr_27618 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27618[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19374__auto__);

(statearr_27618[(1)] = (1));

return statearr_27618;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19374__auto____1 = (function (state_27530){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_27530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e27619){if((e27619 instanceof Object)){
var ex__19377__auto__ = e27619;
var statearr_27620_27680 = state_27530;
(statearr_27620_27680[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27681 = state_27530;
state_27530 = G__27681;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19374__auto__ = function(state_27530){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19374__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19374__auto____1.call(this,state_27530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19374__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19374__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto__,map__27376,map__27376__$1,opts,before_jsload,on_jsload,reload_dependents,map__27377,map__27377__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19440__auto__ = (function (){var statearr_27621 = f__19439__auto__.call(null);
(statearr_27621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto__);

return statearr_27621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto__,map__27376,map__27376__$1,opts,before_jsload,on_jsload,reload_dependents,map__27377,map__27377__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19438__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27684,link){
var map__27687 = p__27684;
var map__27687__$1 = ((((!((map__27687 == null)))?((((map__27687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27687):map__27687);
var file = cljs.core.get.call(null,map__27687__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__27687,map__27687__$1,file){
return (function (p1__27682_SHARP_,p2__27683_SHARP_){
if(cljs.core._EQ_.call(null,p1__27682_SHARP_,p2__27683_SHARP_)){
return p1__27682_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__27687,map__27687__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27693){
var map__27694 = p__27693;
var map__27694__$1 = ((((!((map__27694 == null)))?((((map__27694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27694):map__27694);
var match_length = cljs.core.get.call(null,map__27694__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27694__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27689_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27689_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args27696 = [];
var len__17416__auto___27699 = arguments.length;
var i__17417__auto___27700 = (0);
while(true){
if((i__17417__auto___27700 < len__17416__auto___27699)){
args27696.push((arguments[i__17417__auto___27700]));

var G__27701 = (i__17417__auto___27700 + (1));
i__17417__auto___27700 = G__27701;
continue;
} else {
}
break;
}

var G__27698 = args27696.length;
switch (G__27698) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27696.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27703_SHARP_,p2__27704_SHARP_){
return cljs.core.assoc.call(null,p1__27703_SHARP_,cljs.core.get.call(null,p2__27704_SHARP_,key),p2__27704_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27705){
var map__27708 = p__27705;
var map__27708__$1 = ((((!((map__27708 == null)))?((((map__27708.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27708.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27708):map__27708);
var f_data = map__27708__$1;
var file = cljs.core.get.call(null,map__27708__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27710,files_msg){
var map__27717 = p__27710;
var map__27717__$1 = ((((!((map__27717 == null)))?((((map__27717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27717):map__27717);
var opts = map__27717__$1;
var on_cssload = cljs.core.get.call(null,map__27717__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27719_27723 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27720_27724 = null;
var count__27721_27725 = (0);
var i__27722_27726 = (0);
while(true){
if((i__27722_27726 < count__27721_27725)){
var f_27727 = cljs.core._nth.call(null,chunk__27720_27724,i__27722_27726);
figwheel.client.file_reloading.reload_css_file.call(null,f_27727);

var G__27728 = seq__27719_27723;
var G__27729 = chunk__27720_27724;
var G__27730 = count__27721_27725;
var G__27731 = (i__27722_27726 + (1));
seq__27719_27723 = G__27728;
chunk__27720_27724 = G__27729;
count__27721_27725 = G__27730;
i__27722_27726 = G__27731;
continue;
} else {
var temp__4425__auto___27732 = cljs.core.seq.call(null,seq__27719_27723);
if(temp__4425__auto___27732){
var seq__27719_27733__$1 = temp__4425__auto___27732;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27719_27733__$1)){
var c__17161__auto___27734 = cljs.core.chunk_first.call(null,seq__27719_27733__$1);
var G__27735 = cljs.core.chunk_rest.call(null,seq__27719_27733__$1);
var G__27736 = c__17161__auto___27734;
var G__27737 = cljs.core.count.call(null,c__17161__auto___27734);
var G__27738 = (0);
seq__27719_27723 = G__27735;
chunk__27720_27724 = G__27736;
count__27721_27725 = G__27737;
i__27722_27726 = G__27738;
continue;
} else {
var f_27739 = cljs.core.first.call(null,seq__27719_27733__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27739);

var G__27740 = cljs.core.next.call(null,seq__27719_27733__$1);
var G__27741 = null;
var G__27742 = (0);
var G__27743 = (0);
seq__27719_27723 = G__27740;
chunk__27720_27724 = G__27741;
count__27721_27725 = G__27742;
i__27722_27726 = G__27743;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27717,map__27717__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27717,map__27717__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1521786014649