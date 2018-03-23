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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34838_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34838_SHARP_));
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
var seq__34843 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34844 = null;
var count__34845 = (0);
var i__34846 = (0);
while(true){
if((i__34846 < count__34845)){
var n = cljs.core._nth.call(null,chunk__34844,i__34846);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34847 = seq__34843;
var G__34848 = chunk__34844;
var G__34849 = count__34845;
var G__34850 = (i__34846 + (1));
seq__34843 = G__34847;
chunk__34844 = G__34848;
count__34845 = G__34849;
i__34846 = G__34850;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__34843);
if(temp__4425__auto__){
var seq__34843__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34843__$1)){
var c__17161__auto__ = cljs.core.chunk_first.call(null,seq__34843__$1);
var G__34851 = cljs.core.chunk_rest.call(null,seq__34843__$1);
var G__34852 = c__17161__auto__;
var G__34853 = cljs.core.count.call(null,c__17161__auto__);
var G__34854 = (0);
seq__34843 = G__34851;
chunk__34844 = G__34852;
count__34845 = G__34853;
i__34846 = G__34854;
continue;
} else {
var n = cljs.core.first.call(null,seq__34843__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34855 = cljs.core.next.call(null,seq__34843__$1);
var G__34856 = null;
var G__34857 = (0);
var G__34858 = (0);
seq__34843 = G__34855;
chunk__34844 = G__34856;
count__34845 = G__34857;
i__34846 = G__34858;
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

var seq__34897_34904 = cljs.core.seq.call(null,deps);
var chunk__34898_34905 = null;
var count__34899_34906 = (0);
var i__34900_34907 = (0);
while(true){
if((i__34900_34907 < count__34899_34906)){
var dep_34908 = cljs.core._nth.call(null,chunk__34898_34905,i__34900_34907);
topo_sort_helper_STAR_.call(null,dep_34908,(depth + (1)),state);

var G__34909 = seq__34897_34904;
var G__34910 = chunk__34898_34905;
var G__34911 = count__34899_34906;
var G__34912 = (i__34900_34907 + (1));
seq__34897_34904 = G__34909;
chunk__34898_34905 = G__34910;
count__34899_34906 = G__34911;
i__34900_34907 = G__34912;
continue;
} else {
var temp__4425__auto___34913 = cljs.core.seq.call(null,seq__34897_34904);
if(temp__4425__auto___34913){
var seq__34897_34914__$1 = temp__4425__auto___34913;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34897_34914__$1)){
var c__17161__auto___34915 = cljs.core.chunk_first.call(null,seq__34897_34914__$1);
var G__34916 = cljs.core.chunk_rest.call(null,seq__34897_34914__$1);
var G__34917 = c__17161__auto___34915;
var G__34918 = cljs.core.count.call(null,c__17161__auto___34915);
var G__34919 = (0);
seq__34897_34904 = G__34916;
chunk__34898_34905 = G__34917;
count__34899_34906 = G__34918;
i__34900_34907 = G__34919;
continue;
} else {
var dep_34920 = cljs.core.first.call(null,seq__34897_34914__$1);
topo_sort_helper_STAR_.call(null,dep_34920,(depth + (1)),state);

var G__34921 = cljs.core.next.call(null,seq__34897_34914__$1);
var G__34922 = null;
var G__34923 = (0);
var G__34924 = (0);
seq__34897_34904 = G__34921;
chunk__34898_34905 = G__34922;
count__34899_34906 = G__34923;
i__34900_34907 = G__34924;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34901){
var vec__34903 = p__34901;
var x = cljs.core.nth.call(null,vec__34903,(0),null);
var xs = cljs.core.nthnext.call(null,vec__34903,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34903,x,xs,get_deps__$1){
return (function (p1__34859_SHARP_){
return clojure.set.difference.call(null,p1__34859_SHARP_,x);
});})(vec__34903,x,xs,get_deps__$1))
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
var seq__34937 = cljs.core.seq.call(null,provides);
var chunk__34938 = null;
var count__34939 = (0);
var i__34940 = (0);
while(true){
if((i__34940 < count__34939)){
var prov = cljs.core._nth.call(null,chunk__34938,i__34940);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34941_34949 = cljs.core.seq.call(null,requires);
var chunk__34942_34950 = null;
var count__34943_34951 = (0);
var i__34944_34952 = (0);
while(true){
if((i__34944_34952 < count__34943_34951)){
var req_34953 = cljs.core._nth.call(null,chunk__34942_34950,i__34944_34952);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34953,prov);

var G__34954 = seq__34941_34949;
var G__34955 = chunk__34942_34950;
var G__34956 = count__34943_34951;
var G__34957 = (i__34944_34952 + (1));
seq__34941_34949 = G__34954;
chunk__34942_34950 = G__34955;
count__34943_34951 = G__34956;
i__34944_34952 = G__34957;
continue;
} else {
var temp__4425__auto___34958 = cljs.core.seq.call(null,seq__34941_34949);
if(temp__4425__auto___34958){
var seq__34941_34959__$1 = temp__4425__auto___34958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34941_34959__$1)){
var c__17161__auto___34960 = cljs.core.chunk_first.call(null,seq__34941_34959__$1);
var G__34961 = cljs.core.chunk_rest.call(null,seq__34941_34959__$1);
var G__34962 = c__17161__auto___34960;
var G__34963 = cljs.core.count.call(null,c__17161__auto___34960);
var G__34964 = (0);
seq__34941_34949 = G__34961;
chunk__34942_34950 = G__34962;
count__34943_34951 = G__34963;
i__34944_34952 = G__34964;
continue;
} else {
var req_34965 = cljs.core.first.call(null,seq__34941_34959__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34965,prov);

var G__34966 = cljs.core.next.call(null,seq__34941_34959__$1);
var G__34967 = null;
var G__34968 = (0);
var G__34969 = (0);
seq__34941_34949 = G__34966;
chunk__34942_34950 = G__34967;
count__34943_34951 = G__34968;
i__34944_34952 = G__34969;
continue;
}
} else {
}
}
break;
}

var G__34970 = seq__34937;
var G__34971 = chunk__34938;
var G__34972 = count__34939;
var G__34973 = (i__34940 + (1));
seq__34937 = G__34970;
chunk__34938 = G__34971;
count__34939 = G__34972;
i__34940 = G__34973;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__34937);
if(temp__4425__auto__){
var seq__34937__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34937__$1)){
var c__17161__auto__ = cljs.core.chunk_first.call(null,seq__34937__$1);
var G__34974 = cljs.core.chunk_rest.call(null,seq__34937__$1);
var G__34975 = c__17161__auto__;
var G__34976 = cljs.core.count.call(null,c__17161__auto__);
var G__34977 = (0);
seq__34937 = G__34974;
chunk__34938 = G__34975;
count__34939 = G__34976;
i__34940 = G__34977;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34937__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34945_34978 = cljs.core.seq.call(null,requires);
var chunk__34946_34979 = null;
var count__34947_34980 = (0);
var i__34948_34981 = (0);
while(true){
if((i__34948_34981 < count__34947_34980)){
var req_34982 = cljs.core._nth.call(null,chunk__34946_34979,i__34948_34981);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34982,prov);

var G__34983 = seq__34945_34978;
var G__34984 = chunk__34946_34979;
var G__34985 = count__34947_34980;
var G__34986 = (i__34948_34981 + (1));
seq__34945_34978 = G__34983;
chunk__34946_34979 = G__34984;
count__34947_34980 = G__34985;
i__34948_34981 = G__34986;
continue;
} else {
var temp__4425__auto___34987__$1 = cljs.core.seq.call(null,seq__34945_34978);
if(temp__4425__auto___34987__$1){
var seq__34945_34988__$1 = temp__4425__auto___34987__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34945_34988__$1)){
var c__17161__auto___34989 = cljs.core.chunk_first.call(null,seq__34945_34988__$1);
var G__34990 = cljs.core.chunk_rest.call(null,seq__34945_34988__$1);
var G__34991 = c__17161__auto___34989;
var G__34992 = cljs.core.count.call(null,c__17161__auto___34989);
var G__34993 = (0);
seq__34945_34978 = G__34990;
chunk__34946_34979 = G__34991;
count__34947_34980 = G__34992;
i__34948_34981 = G__34993;
continue;
} else {
var req_34994 = cljs.core.first.call(null,seq__34945_34988__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34994,prov);

var G__34995 = cljs.core.next.call(null,seq__34945_34988__$1);
var G__34996 = null;
var G__34997 = (0);
var G__34998 = (0);
seq__34945_34978 = G__34995;
chunk__34946_34979 = G__34996;
count__34947_34980 = G__34997;
i__34948_34981 = G__34998;
continue;
}
} else {
}
}
break;
}

var G__34999 = cljs.core.next.call(null,seq__34937__$1);
var G__35000 = null;
var G__35001 = (0);
var G__35002 = (0);
seq__34937 = G__34999;
chunk__34938 = G__35000;
count__34939 = G__35001;
i__34940 = G__35002;
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
var seq__35007_35011 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35008_35012 = null;
var count__35009_35013 = (0);
var i__35010_35014 = (0);
while(true){
if((i__35010_35014 < count__35009_35013)){
var ns_35015 = cljs.core._nth.call(null,chunk__35008_35012,i__35010_35014);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35015);

var G__35016 = seq__35007_35011;
var G__35017 = chunk__35008_35012;
var G__35018 = count__35009_35013;
var G__35019 = (i__35010_35014 + (1));
seq__35007_35011 = G__35016;
chunk__35008_35012 = G__35017;
count__35009_35013 = G__35018;
i__35010_35014 = G__35019;
continue;
} else {
var temp__4425__auto___35020 = cljs.core.seq.call(null,seq__35007_35011);
if(temp__4425__auto___35020){
var seq__35007_35021__$1 = temp__4425__auto___35020;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35007_35021__$1)){
var c__17161__auto___35022 = cljs.core.chunk_first.call(null,seq__35007_35021__$1);
var G__35023 = cljs.core.chunk_rest.call(null,seq__35007_35021__$1);
var G__35024 = c__17161__auto___35022;
var G__35025 = cljs.core.count.call(null,c__17161__auto___35022);
var G__35026 = (0);
seq__35007_35011 = G__35023;
chunk__35008_35012 = G__35024;
count__35009_35013 = G__35025;
i__35010_35014 = G__35026;
continue;
} else {
var ns_35027 = cljs.core.first.call(null,seq__35007_35021__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35027);

var G__35028 = cljs.core.next.call(null,seq__35007_35021__$1);
var G__35029 = null;
var G__35030 = (0);
var G__35031 = (0);
seq__35007_35011 = G__35028;
chunk__35008_35012 = G__35029;
count__35009_35013 = G__35030;
i__35010_35014 = G__35031;
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
var G__35032__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35032 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35033__i = 0, G__35033__a = new Array(arguments.length -  0);
while (G__35033__i < G__35033__a.length) {G__35033__a[G__35033__i] = arguments[G__35033__i + 0]; ++G__35033__i;}
  args = new cljs.core.IndexedSeq(G__35033__a,0);
} 
return G__35032__delegate.call(this,args);};
G__35032.cljs$lang$maxFixedArity = 0;
G__35032.cljs$lang$applyTo = (function (arglist__35034){
var args = cljs.core.seq(arglist__35034);
return G__35032__delegate(args);
});
G__35032.cljs$core$IFn$_invoke$arity$variadic = G__35032__delegate;
return G__35032;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35036 = cljs.core._EQ_;
var expr__35037 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35036.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35037))){
var path_parts = ((function (pred__35036,expr__35037){
return (function (p1__35035_SHARP_){
return clojure.string.split.call(null,p1__35035_SHARP_,/[\/\\]/);
});})(pred__35036,expr__35037))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__35036,expr__35037){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(clojure.string.join.call(null,"/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","..",request_url], null)));
}catch (e35039){if((e35039 instanceof Error)){
var e = e35039;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35039;

}
}})());
});
;})(path_parts,sep,root,pred__35036,expr__35037))
} else {
if(cljs.core.truth_(pred__35036.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35037))){
return ((function (pred__35036,expr__35037){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__35036,expr__35037){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__35036,expr__35037))
);

return deferred.addErrback(((function (deferred,pred__35036,expr__35037){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__35036,expr__35037))
);
});
;})(pred__35036,expr__35037))
} else {
return ((function (pred__35036,expr__35037){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35036,expr__35037))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35040,callback){
var map__35043 = p__35040;
var map__35043__$1 = ((((!((map__35043 == null)))?((((map__35043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35043):map__35043);
var file_msg = map__35043__$1;
var request_url = cljs.core.get.call(null,map__35043__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35043,map__35043__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35043,map__35043__$1,file_msg,request_url))
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
return (function (state_35067){
var state_val_35068 = (state_35067[(1)]);
if((state_val_35068 === (7))){
var inst_35063 = (state_35067[(2)]);
var state_35067__$1 = state_35067;
var statearr_35069_35089 = state_35067__$1;
(statearr_35069_35089[(2)] = inst_35063);

(statearr_35069_35089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35068 === (1))){
var state_35067__$1 = state_35067;
var statearr_35070_35090 = state_35067__$1;
(statearr_35070_35090[(2)] = null);

(statearr_35070_35090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35068 === (4))){
var inst_35047 = (state_35067[(7)]);
var inst_35047__$1 = (state_35067[(2)]);
var state_35067__$1 = (function (){var statearr_35071 = state_35067;
(statearr_35071[(7)] = inst_35047__$1);

return statearr_35071;
})();
if(cljs.core.truth_(inst_35047__$1)){
var statearr_35072_35091 = state_35067__$1;
(statearr_35072_35091[(1)] = (5));

} else {
var statearr_35073_35092 = state_35067__$1;
(statearr_35073_35092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35068 === (6))){
var state_35067__$1 = state_35067;
var statearr_35074_35093 = state_35067__$1;
(statearr_35074_35093[(2)] = null);

(statearr_35074_35093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35068 === (3))){
var inst_35065 = (state_35067[(2)]);
var state_35067__$1 = state_35067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35067__$1,inst_35065);
} else {
if((state_val_35068 === (2))){
var state_35067__$1 = state_35067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35067__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35068 === (11))){
var inst_35059 = (state_35067[(2)]);
var state_35067__$1 = (function (){var statearr_35075 = state_35067;
(statearr_35075[(8)] = inst_35059);

return statearr_35075;
})();
var statearr_35076_35094 = state_35067__$1;
(statearr_35076_35094[(2)] = null);

(statearr_35076_35094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35068 === (9))){
var inst_35051 = (state_35067[(9)]);
var inst_35053 = (state_35067[(10)]);
var inst_35055 = inst_35053.call(null,inst_35051);
var state_35067__$1 = state_35067;
var statearr_35077_35095 = state_35067__$1;
(statearr_35077_35095[(2)] = inst_35055);

(statearr_35077_35095[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35068 === (5))){
var inst_35047 = (state_35067[(7)]);
var inst_35049 = figwheel.client.file_reloading.blocking_load.call(null,inst_35047);
var state_35067__$1 = state_35067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35067__$1,(8),inst_35049);
} else {
if((state_val_35068 === (10))){
var inst_35051 = (state_35067[(9)]);
var inst_35057 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35051);
var state_35067__$1 = state_35067;
var statearr_35078_35096 = state_35067__$1;
(statearr_35078_35096[(2)] = inst_35057);

(statearr_35078_35096[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35068 === (8))){
var inst_35047 = (state_35067[(7)]);
var inst_35053 = (state_35067[(10)]);
var inst_35051 = (state_35067[(2)]);
var inst_35052 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35053__$1 = cljs.core.get.call(null,inst_35052,inst_35047);
var state_35067__$1 = (function (){var statearr_35079 = state_35067;
(statearr_35079[(9)] = inst_35051);

(statearr_35079[(10)] = inst_35053__$1);

return statearr_35079;
})();
if(cljs.core.truth_(inst_35053__$1)){
var statearr_35080_35097 = state_35067__$1;
(statearr_35080_35097[(1)] = (9));

} else {
var statearr_35081_35098 = state_35067__$1;
(statearr_35081_35098[(1)] = (10));

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
var statearr_35085 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35085[(0)] = figwheel$client$file_reloading$state_machine__19374__auto__);

(statearr_35085[(1)] = (1));

return statearr_35085;
});
var figwheel$client$file_reloading$state_machine__19374__auto____1 = (function (state_35067){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_35067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e35086){if((e35086 instanceof Object)){
var ex__19377__auto__ = e35086;
var statearr_35087_35099 = state_35067;
(statearr_35087_35099[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35100 = state_35067;
state_35067 = G__35100;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19374__auto__ = function(state_35067){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19374__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19374__auto____1.call(this,state_35067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19374__auto____0;
figwheel$client$file_reloading$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19374__auto____1;
return figwheel$client$file_reloading$state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto__))
})();
var state__19440__auto__ = (function (){var statearr_35088 = f__19439__auto__.call(null);
(statearr_35088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto__);

return statearr_35088;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35101,callback){
var map__35104 = p__35101;
var map__35104__$1 = ((((!((map__35104 == null)))?((((map__35104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35104):map__35104);
var file_msg = map__35104__$1;
var namespace = cljs.core.get.call(null,map__35104__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35104,map__35104__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35104,map__35104__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35106){
var map__35109 = p__35106;
var map__35109__$1 = ((((!((map__35109 == null)))?((((map__35109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35109):map__35109);
var file_msg = map__35109__$1;
var namespace = cljs.core.get.call(null,map__35109__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35111,callback){
var map__35114 = p__35111;
var map__35114__$1 = ((((!((map__35114 == null)))?((((map__35114.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35114.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35114):map__35114);
var file_msg = map__35114__$1;
var request_url = cljs.core.get.call(null,map__35114__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35114__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__19438__auto___35202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___35202,out){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___35202,out){
return (function (state_35184){
var state_val_35185 = (state_35184[(1)]);
if((state_val_35185 === (1))){
var inst_35162 = cljs.core.nth.call(null,files,(0),null);
var inst_35163 = cljs.core.nthnext.call(null,files,(1));
var inst_35164 = files;
var state_35184__$1 = (function (){var statearr_35186 = state_35184;
(statearr_35186[(7)] = inst_35162);

(statearr_35186[(8)] = inst_35164);

(statearr_35186[(9)] = inst_35163);

return statearr_35186;
})();
var statearr_35187_35203 = state_35184__$1;
(statearr_35187_35203[(2)] = null);

(statearr_35187_35203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35185 === (2))){
var inst_35164 = (state_35184[(8)]);
var inst_35167 = (state_35184[(10)]);
var inst_35167__$1 = cljs.core.nth.call(null,inst_35164,(0),null);
var inst_35168 = cljs.core.nthnext.call(null,inst_35164,(1));
var inst_35169 = (inst_35167__$1 == null);
var inst_35170 = cljs.core.not.call(null,inst_35169);
var state_35184__$1 = (function (){var statearr_35188 = state_35184;
(statearr_35188[(10)] = inst_35167__$1);

(statearr_35188[(11)] = inst_35168);

return statearr_35188;
})();
if(inst_35170){
var statearr_35189_35204 = state_35184__$1;
(statearr_35189_35204[(1)] = (4));

} else {
var statearr_35190_35205 = state_35184__$1;
(statearr_35190_35205[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35185 === (3))){
var inst_35182 = (state_35184[(2)]);
var state_35184__$1 = state_35184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35184__$1,inst_35182);
} else {
if((state_val_35185 === (4))){
var inst_35167 = (state_35184[(10)]);
var inst_35172 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35167);
var state_35184__$1 = state_35184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35184__$1,(7),inst_35172);
} else {
if((state_val_35185 === (5))){
var inst_35178 = cljs.core.async.close_BANG_.call(null,out);
var state_35184__$1 = state_35184;
var statearr_35191_35206 = state_35184__$1;
(statearr_35191_35206[(2)] = inst_35178);

(statearr_35191_35206[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35185 === (6))){
var inst_35180 = (state_35184[(2)]);
var state_35184__$1 = state_35184;
var statearr_35192_35207 = state_35184__$1;
(statearr_35192_35207[(2)] = inst_35180);

(statearr_35192_35207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35185 === (7))){
var inst_35168 = (state_35184[(11)]);
var inst_35174 = (state_35184[(2)]);
var inst_35175 = cljs.core.async.put_BANG_.call(null,out,inst_35174);
var inst_35164 = inst_35168;
var state_35184__$1 = (function (){var statearr_35193 = state_35184;
(statearr_35193[(8)] = inst_35164);

(statearr_35193[(12)] = inst_35175);

return statearr_35193;
})();
var statearr_35194_35208 = state_35184__$1;
(statearr_35194_35208[(2)] = null);

(statearr_35194_35208[(1)] = (2));


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
});})(c__19438__auto___35202,out))
;
return ((function (switch__19373__auto__,c__19438__auto___35202,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19374__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19374__auto____0 = (function (){
var statearr_35198 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35198[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19374__auto__);

(statearr_35198[(1)] = (1));

return statearr_35198;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19374__auto____1 = (function (state_35184){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_35184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e35199){if((e35199 instanceof Object)){
var ex__19377__auto__ = e35199;
var statearr_35200_35209 = state_35184;
(statearr_35200_35209[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35210 = state_35184;
state_35184 = G__35210;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19374__auto__ = function(state_35184){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19374__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19374__auto____1.call(this,state_35184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19374__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19374__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___35202,out))
})();
var state__19440__auto__ = (function (){var statearr_35201 = f__19439__auto__.call(null);
(statearr_35201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___35202);

return statearr_35201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___35202,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35211,opts){
var map__35215 = p__35211;
var map__35215__$1 = ((((!((map__35215 == null)))?((((map__35215.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35215.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35215):map__35215);
var eval_body__$1 = cljs.core.get.call(null,map__35215__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35215__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e35217){var e = e35217;
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
return (function (p1__35218_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35218_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__35223){
var vec__35224 = p__35223;
var k = cljs.core.nth.call(null,vec__35224,(0),null);
var v = cljs.core.nth.call(null,vec__35224,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35225){
var vec__35226 = p__35225;
var k = cljs.core.nth.call(null,vec__35226,(0),null);
var v = cljs.core.nth.call(null,vec__35226,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35230,p__35231){
var map__35478 = p__35230;
var map__35478__$1 = ((((!((map__35478 == null)))?((((map__35478.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35478.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35478):map__35478);
var opts = map__35478__$1;
var before_jsload = cljs.core.get.call(null,map__35478__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35478__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35478__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35479 = p__35231;
var map__35479__$1 = ((((!((map__35479 == null)))?((((map__35479.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35479.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35479):map__35479);
var msg = map__35479__$1;
var files = cljs.core.get.call(null,map__35479__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35479__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35479__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19438__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto__,map__35478,map__35478__$1,opts,before_jsload,on_jsload,reload_dependents,map__35479,map__35479__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto__,map__35478,map__35478__$1,opts,before_jsload,on_jsload,reload_dependents,map__35479,map__35479__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35632){
var state_val_35633 = (state_35632[(1)]);
if((state_val_35633 === (7))){
var inst_35495 = (state_35632[(7)]);
var inst_35493 = (state_35632[(8)]);
var inst_35496 = (state_35632[(9)]);
var inst_35494 = (state_35632[(10)]);
var inst_35501 = cljs.core._nth.call(null,inst_35494,inst_35496);
var inst_35502 = figwheel.client.file_reloading.eval_body.call(null,inst_35501,opts);
var inst_35503 = (inst_35496 + (1));
var tmp35634 = inst_35495;
var tmp35635 = inst_35493;
var tmp35636 = inst_35494;
var inst_35493__$1 = tmp35635;
var inst_35494__$1 = tmp35636;
var inst_35495__$1 = tmp35634;
var inst_35496__$1 = inst_35503;
var state_35632__$1 = (function (){var statearr_35637 = state_35632;
(statearr_35637[(7)] = inst_35495__$1);

(statearr_35637[(8)] = inst_35493__$1);

(statearr_35637[(9)] = inst_35496__$1);

(statearr_35637[(11)] = inst_35502);

(statearr_35637[(10)] = inst_35494__$1);

return statearr_35637;
})();
var statearr_35638_35724 = state_35632__$1;
(statearr_35638_35724[(2)] = null);

(statearr_35638_35724[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (20))){
var inst_35536 = (state_35632[(12)]);
var inst_35544 = figwheel.client.file_reloading.sort_files.call(null,inst_35536);
var state_35632__$1 = state_35632;
var statearr_35639_35725 = state_35632__$1;
(statearr_35639_35725[(2)] = inst_35544);

(statearr_35639_35725[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (27))){
var state_35632__$1 = state_35632;
var statearr_35640_35726 = state_35632__$1;
(statearr_35640_35726[(2)] = null);

(statearr_35640_35726[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (1))){
var inst_35485 = (state_35632[(13)]);
var inst_35482 = before_jsload.call(null,files);
var inst_35483 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35484 = (function (){return ((function (inst_35485,inst_35482,inst_35483,state_val_35633,c__19438__auto__,map__35478,map__35478__$1,opts,before_jsload,on_jsload,reload_dependents,map__35479,map__35479__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35227_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35227_SHARP_);
});
;})(inst_35485,inst_35482,inst_35483,state_val_35633,c__19438__auto__,map__35478,map__35478__$1,opts,before_jsload,on_jsload,reload_dependents,map__35479,map__35479__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35485__$1 = cljs.core.filter.call(null,inst_35484,files);
var inst_35486 = cljs.core.not_empty.call(null,inst_35485__$1);
var state_35632__$1 = (function (){var statearr_35641 = state_35632;
(statearr_35641[(13)] = inst_35485__$1);

(statearr_35641[(14)] = inst_35482);

(statearr_35641[(15)] = inst_35483);

return statearr_35641;
})();
if(cljs.core.truth_(inst_35486)){
var statearr_35642_35727 = state_35632__$1;
(statearr_35642_35727[(1)] = (2));

} else {
var statearr_35643_35728 = state_35632__$1;
(statearr_35643_35728[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (24))){
var state_35632__$1 = state_35632;
var statearr_35644_35729 = state_35632__$1;
(statearr_35644_35729[(2)] = null);

(statearr_35644_35729[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (39))){
var inst_35586 = (state_35632[(16)]);
var state_35632__$1 = state_35632;
var statearr_35645_35730 = state_35632__$1;
(statearr_35645_35730[(2)] = inst_35586);

(statearr_35645_35730[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (46))){
var inst_35627 = (state_35632[(2)]);
var state_35632__$1 = state_35632;
var statearr_35646_35731 = state_35632__$1;
(statearr_35646_35731[(2)] = inst_35627);

(statearr_35646_35731[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (4))){
var inst_35530 = (state_35632[(2)]);
var inst_35531 = cljs.core.List.EMPTY;
var inst_35532 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35531);
var inst_35533 = (function (){return ((function (inst_35530,inst_35531,inst_35532,state_val_35633,c__19438__auto__,map__35478,map__35478__$1,opts,before_jsload,on_jsload,reload_dependents,map__35479,map__35479__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35228_SHARP_){
var and__16346__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35228_SHARP_);
if(cljs.core.truth_(and__16346__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35228_SHARP_));
} else {
return and__16346__auto__;
}
});
;})(inst_35530,inst_35531,inst_35532,state_val_35633,c__19438__auto__,map__35478,map__35478__$1,opts,before_jsload,on_jsload,reload_dependents,map__35479,map__35479__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35534 = cljs.core.filter.call(null,inst_35533,files);
var inst_35535 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35536 = cljs.core.concat.call(null,inst_35534,inst_35535);
var state_35632__$1 = (function (){var statearr_35647 = state_35632;
(statearr_35647[(12)] = inst_35536);

(statearr_35647[(17)] = inst_35530);

(statearr_35647[(18)] = inst_35532);

return statearr_35647;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35648_35732 = state_35632__$1;
(statearr_35648_35732[(1)] = (16));

} else {
var statearr_35649_35733 = state_35632__$1;
(statearr_35649_35733[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (15))){
var inst_35520 = (state_35632[(2)]);
var state_35632__$1 = state_35632;
var statearr_35650_35734 = state_35632__$1;
(statearr_35650_35734[(2)] = inst_35520);

(statearr_35650_35734[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (21))){
var inst_35546 = (state_35632[(19)]);
var inst_35546__$1 = (state_35632[(2)]);
var inst_35547 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35546__$1);
var state_35632__$1 = (function (){var statearr_35651 = state_35632;
(statearr_35651[(19)] = inst_35546__$1);

return statearr_35651;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35632__$1,(22),inst_35547);
} else {
if((state_val_35633 === (31))){
var inst_35630 = (state_35632[(2)]);
var state_35632__$1 = state_35632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35632__$1,inst_35630);
} else {
if((state_val_35633 === (32))){
var inst_35586 = (state_35632[(16)]);
var inst_35591 = inst_35586.cljs$lang$protocol_mask$partition0$;
var inst_35592 = (inst_35591 & (64));
var inst_35593 = inst_35586.cljs$core$ISeq$;
var inst_35594 = (inst_35592) || (inst_35593);
var state_35632__$1 = state_35632;
if(cljs.core.truth_(inst_35594)){
var statearr_35652_35735 = state_35632__$1;
(statearr_35652_35735[(1)] = (35));

} else {
var statearr_35653_35736 = state_35632__$1;
(statearr_35653_35736[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (40))){
var inst_35607 = (state_35632[(20)]);
var inst_35606 = (state_35632[(2)]);
var inst_35607__$1 = cljs.core.get.call(null,inst_35606,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35608 = cljs.core.get.call(null,inst_35606,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35609 = cljs.core.not_empty.call(null,inst_35607__$1);
var state_35632__$1 = (function (){var statearr_35654 = state_35632;
(statearr_35654[(21)] = inst_35608);

(statearr_35654[(20)] = inst_35607__$1);

return statearr_35654;
})();
if(cljs.core.truth_(inst_35609)){
var statearr_35655_35737 = state_35632__$1;
(statearr_35655_35737[(1)] = (41));

} else {
var statearr_35656_35738 = state_35632__$1;
(statearr_35656_35738[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (33))){
var state_35632__$1 = state_35632;
var statearr_35657_35739 = state_35632__$1;
(statearr_35657_35739[(2)] = false);

(statearr_35657_35739[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (13))){
var inst_35506 = (state_35632[(22)]);
var inst_35510 = cljs.core.chunk_first.call(null,inst_35506);
var inst_35511 = cljs.core.chunk_rest.call(null,inst_35506);
var inst_35512 = cljs.core.count.call(null,inst_35510);
var inst_35493 = inst_35511;
var inst_35494 = inst_35510;
var inst_35495 = inst_35512;
var inst_35496 = (0);
var state_35632__$1 = (function (){var statearr_35658 = state_35632;
(statearr_35658[(7)] = inst_35495);

(statearr_35658[(8)] = inst_35493);

(statearr_35658[(9)] = inst_35496);

(statearr_35658[(10)] = inst_35494);

return statearr_35658;
})();
var statearr_35659_35740 = state_35632__$1;
(statearr_35659_35740[(2)] = null);

(statearr_35659_35740[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (22))){
var inst_35549 = (state_35632[(23)]);
var inst_35546 = (state_35632[(19)]);
var inst_35554 = (state_35632[(24)]);
var inst_35550 = (state_35632[(25)]);
var inst_35549__$1 = (state_35632[(2)]);
var inst_35550__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35549__$1);
var inst_35551 = (function (){var all_files = inst_35546;
var res_SINGLEQUOTE_ = inst_35549__$1;
var res = inst_35550__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35549,inst_35546,inst_35554,inst_35550,inst_35549__$1,inst_35550__$1,state_val_35633,c__19438__auto__,map__35478,map__35478__$1,opts,before_jsload,on_jsload,reload_dependents,map__35479,map__35479__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35229_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35229_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35549,inst_35546,inst_35554,inst_35550,inst_35549__$1,inst_35550__$1,state_val_35633,c__19438__auto__,map__35478,map__35478__$1,opts,before_jsload,on_jsload,reload_dependents,map__35479,map__35479__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35552 = cljs.core.filter.call(null,inst_35551,inst_35549__$1);
var inst_35553 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35554__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35553);
var inst_35555 = cljs.core.not_empty.call(null,inst_35554__$1);
var state_35632__$1 = (function (){var statearr_35660 = state_35632;
(statearr_35660[(26)] = inst_35552);

(statearr_35660[(23)] = inst_35549__$1);

(statearr_35660[(24)] = inst_35554__$1);

(statearr_35660[(25)] = inst_35550__$1);

return statearr_35660;
})();
if(cljs.core.truth_(inst_35555)){
var statearr_35661_35741 = state_35632__$1;
(statearr_35661_35741[(1)] = (23));

} else {
var statearr_35662_35742 = state_35632__$1;
(statearr_35662_35742[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (36))){
var state_35632__$1 = state_35632;
var statearr_35663_35743 = state_35632__$1;
(statearr_35663_35743[(2)] = false);

(statearr_35663_35743[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (41))){
var inst_35607 = (state_35632[(20)]);
var inst_35611 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35612 = cljs.core.map.call(null,inst_35611,inst_35607);
var inst_35613 = cljs.core.pr_str.call(null,inst_35612);
var inst_35614 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_35613)].join('');
var inst_35615 = figwheel.client.utils.log.call(null,inst_35614);
var state_35632__$1 = state_35632;
var statearr_35664_35744 = state_35632__$1;
(statearr_35664_35744[(2)] = inst_35615);

(statearr_35664_35744[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (43))){
var inst_35608 = (state_35632[(21)]);
var inst_35618 = (state_35632[(2)]);
var inst_35619 = cljs.core.not_empty.call(null,inst_35608);
var state_35632__$1 = (function (){var statearr_35665 = state_35632;
(statearr_35665[(27)] = inst_35618);

return statearr_35665;
})();
if(cljs.core.truth_(inst_35619)){
var statearr_35666_35745 = state_35632__$1;
(statearr_35666_35745[(1)] = (44));

} else {
var statearr_35667_35746 = state_35632__$1;
(statearr_35667_35746[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (29))){
var inst_35586 = (state_35632[(16)]);
var inst_35552 = (state_35632[(26)]);
var inst_35549 = (state_35632[(23)]);
var inst_35546 = (state_35632[(19)]);
var inst_35554 = (state_35632[(24)]);
var inst_35550 = (state_35632[(25)]);
var inst_35582 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35585 = (function (){var all_files = inst_35546;
var res_SINGLEQUOTE_ = inst_35549;
var res = inst_35550;
var files_not_loaded = inst_35552;
var dependencies_that_loaded = inst_35554;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35586,inst_35552,inst_35549,inst_35546,inst_35554,inst_35550,inst_35582,state_val_35633,c__19438__auto__,map__35478,map__35478__$1,opts,before_jsload,on_jsload,reload_dependents,map__35479,map__35479__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35584){
var map__35668 = p__35584;
var map__35668__$1 = ((((!((map__35668 == null)))?((((map__35668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35668):map__35668);
var namespace = cljs.core.get.call(null,map__35668__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35586,inst_35552,inst_35549,inst_35546,inst_35554,inst_35550,inst_35582,state_val_35633,c__19438__auto__,map__35478,map__35478__$1,opts,before_jsload,on_jsload,reload_dependents,map__35479,map__35479__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35586__$1 = cljs.core.group_by.call(null,inst_35585,inst_35552);
var inst_35588 = (inst_35586__$1 == null);
var inst_35589 = cljs.core.not.call(null,inst_35588);
var state_35632__$1 = (function (){var statearr_35670 = state_35632;
(statearr_35670[(16)] = inst_35586__$1);

(statearr_35670[(28)] = inst_35582);

return statearr_35670;
})();
if(inst_35589){
var statearr_35671_35747 = state_35632__$1;
(statearr_35671_35747[(1)] = (32));

} else {
var statearr_35672_35748 = state_35632__$1;
(statearr_35672_35748[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (44))){
var inst_35608 = (state_35632[(21)]);
var inst_35621 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35608);
var inst_35622 = cljs.core.pr_str.call(null,inst_35621);
var inst_35623 = [cljs.core.str("not required: "),cljs.core.str(inst_35622)].join('');
var inst_35624 = figwheel.client.utils.log.call(null,inst_35623);
var state_35632__$1 = state_35632;
var statearr_35673_35749 = state_35632__$1;
(statearr_35673_35749[(2)] = inst_35624);

(statearr_35673_35749[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (6))){
var inst_35527 = (state_35632[(2)]);
var state_35632__$1 = state_35632;
var statearr_35674_35750 = state_35632__$1;
(statearr_35674_35750[(2)] = inst_35527);

(statearr_35674_35750[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (28))){
var inst_35552 = (state_35632[(26)]);
var inst_35579 = (state_35632[(2)]);
var inst_35580 = cljs.core.not_empty.call(null,inst_35552);
var state_35632__$1 = (function (){var statearr_35675 = state_35632;
(statearr_35675[(29)] = inst_35579);

return statearr_35675;
})();
if(cljs.core.truth_(inst_35580)){
var statearr_35676_35751 = state_35632__$1;
(statearr_35676_35751[(1)] = (29));

} else {
var statearr_35677_35752 = state_35632__$1;
(statearr_35677_35752[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (25))){
var inst_35550 = (state_35632[(25)]);
var inst_35566 = (state_35632[(2)]);
var inst_35567 = cljs.core.not_empty.call(null,inst_35550);
var state_35632__$1 = (function (){var statearr_35678 = state_35632;
(statearr_35678[(30)] = inst_35566);

return statearr_35678;
})();
if(cljs.core.truth_(inst_35567)){
var statearr_35679_35753 = state_35632__$1;
(statearr_35679_35753[(1)] = (26));

} else {
var statearr_35680_35754 = state_35632__$1;
(statearr_35680_35754[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (34))){
var inst_35601 = (state_35632[(2)]);
var state_35632__$1 = state_35632;
if(cljs.core.truth_(inst_35601)){
var statearr_35681_35755 = state_35632__$1;
(statearr_35681_35755[(1)] = (38));

} else {
var statearr_35682_35756 = state_35632__$1;
(statearr_35682_35756[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (17))){
var state_35632__$1 = state_35632;
var statearr_35683_35757 = state_35632__$1;
(statearr_35683_35757[(2)] = recompile_dependents);

(statearr_35683_35757[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (3))){
var state_35632__$1 = state_35632;
var statearr_35684_35758 = state_35632__$1;
(statearr_35684_35758[(2)] = null);

(statearr_35684_35758[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (12))){
var inst_35523 = (state_35632[(2)]);
var state_35632__$1 = state_35632;
var statearr_35685_35759 = state_35632__$1;
(statearr_35685_35759[(2)] = inst_35523);

(statearr_35685_35759[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (2))){
var inst_35485 = (state_35632[(13)]);
var inst_35492 = cljs.core.seq.call(null,inst_35485);
var inst_35493 = inst_35492;
var inst_35494 = null;
var inst_35495 = (0);
var inst_35496 = (0);
var state_35632__$1 = (function (){var statearr_35686 = state_35632;
(statearr_35686[(7)] = inst_35495);

(statearr_35686[(8)] = inst_35493);

(statearr_35686[(9)] = inst_35496);

(statearr_35686[(10)] = inst_35494);

return statearr_35686;
})();
var statearr_35687_35760 = state_35632__$1;
(statearr_35687_35760[(2)] = null);

(statearr_35687_35760[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (23))){
var inst_35552 = (state_35632[(26)]);
var inst_35549 = (state_35632[(23)]);
var inst_35546 = (state_35632[(19)]);
var inst_35554 = (state_35632[(24)]);
var inst_35550 = (state_35632[(25)]);
var inst_35557 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35559 = (function (){var all_files = inst_35546;
var res_SINGLEQUOTE_ = inst_35549;
var res = inst_35550;
var files_not_loaded = inst_35552;
var dependencies_that_loaded = inst_35554;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35552,inst_35549,inst_35546,inst_35554,inst_35550,inst_35557,state_val_35633,c__19438__auto__,map__35478,map__35478__$1,opts,before_jsload,on_jsload,reload_dependents,map__35479,map__35479__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35558){
var map__35688 = p__35558;
var map__35688__$1 = ((((!((map__35688 == null)))?((((map__35688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35688):map__35688);
var request_url = cljs.core.get.call(null,map__35688__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35552,inst_35549,inst_35546,inst_35554,inst_35550,inst_35557,state_val_35633,c__19438__auto__,map__35478,map__35478__$1,opts,before_jsload,on_jsload,reload_dependents,map__35479,map__35479__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35560 = cljs.core.reverse.call(null,inst_35554);
var inst_35561 = cljs.core.map.call(null,inst_35559,inst_35560);
var inst_35562 = cljs.core.pr_str.call(null,inst_35561);
var inst_35563 = figwheel.client.utils.log.call(null,inst_35562);
var state_35632__$1 = (function (){var statearr_35690 = state_35632;
(statearr_35690[(31)] = inst_35557);

return statearr_35690;
})();
var statearr_35691_35761 = state_35632__$1;
(statearr_35691_35761[(2)] = inst_35563);

(statearr_35691_35761[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (35))){
var state_35632__$1 = state_35632;
var statearr_35692_35762 = state_35632__$1;
(statearr_35692_35762[(2)] = true);

(statearr_35692_35762[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (19))){
var inst_35536 = (state_35632[(12)]);
var inst_35542 = figwheel.client.file_reloading.expand_files.call(null,inst_35536);
var state_35632__$1 = state_35632;
var statearr_35693_35763 = state_35632__$1;
(statearr_35693_35763[(2)] = inst_35542);

(statearr_35693_35763[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (11))){
var state_35632__$1 = state_35632;
var statearr_35694_35764 = state_35632__$1;
(statearr_35694_35764[(2)] = null);

(statearr_35694_35764[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (9))){
var inst_35525 = (state_35632[(2)]);
var state_35632__$1 = state_35632;
var statearr_35695_35765 = state_35632__$1;
(statearr_35695_35765[(2)] = inst_35525);

(statearr_35695_35765[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (5))){
var inst_35495 = (state_35632[(7)]);
var inst_35496 = (state_35632[(9)]);
var inst_35498 = (inst_35496 < inst_35495);
var inst_35499 = inst_35498;
var state_35632__$1 = state_35632;
if(cljs.core.truth_(inst_35499)){
var statearr_35696_35766 = state_35632__$1;
(statearr_35696_35766[(1)] = (7));

} else {
var statearr_35697_35767 = state_35632__$1;
(statearr_35697_35767[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (14))){
var inst_35506 = (state_35632[(22)]);
var inst_35515 = cljs.core.first.call(null,inst_35506);
var inst_35516 = figwheel.client.file_reloading.eval_body.call(null,inst_35515,opts);
var inst_35517 = cljs.core.next.call(null,inst_35506);
var inst_35493 = inst_35517;
var inst_35494 = null;
var inst_35495 = (0);
var inst_35496 = (0);
var state_35632__$1 = (function (){var statearr_35698 = state_35632;
(statearr_35698[(7)] = inst_35495);

(statearr_35698[(8)] = inst_35493);

(statearr_35698[(32)] = inst_35516);

(statearr_35698[(9)] = inst_35496);

(statearr_35698[(10)] = inst_35494);

return statearr_35698;
})();
var statearr_35699_35768 = state_35632__$1;
(statearr_35699_35768[(2)] = null);

(statearr_35699_35768[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (45))){
var state_35632__$1 = state_35632;
var statearr_35700_35769 = state_35632__$1;
(statearr_35700_35769[(2)] = null);

(statearr_35700_35769[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (26))){
var inst_35552 = (state_35632[(26)]);
var inst_35549 = (state_35632[(23)]);
var inst_35546 = (state_35632[(19)]);
var inst_35554 = (state_35632[(24)]);
var inst_35550 = (state_35632[(25)]);
var inst_35569 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35571 = (function (){var all_files = inst_35546;
var res_SINGLEQUOTE_ = inst_35549;
var res = inst_35550;
var files_not_loaded = inst_35552;
var dependencies_that_loaded = inst_35554;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35552,inst_35549,inst_35546,inst_35554,inst_35550,inst_35569,state_val_35633,c__19438__auto__,map__35478,map__35478__$1,opts,before_jsload,on_jsload,reload_dependents,map__35479,map__35479__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35570){
var map__35701 = p__35570;
var map__35701__$1 = ((((!((map__35701 == null)))?((((map__35701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35701):map__35701);
var namespace = cljs.core.get.call(null,map__35701__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35701__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35552,inst_35549,inst_35546,inst_35554,inst_35550,inst_35569,state_val_35633,c__19438__auto__,map__35478,map__35478__$1,opts,before_jsload,on_jsload,reload_dependents,map__35479,map__35479__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35572 = cljs.core.map.call(null,inst_35571,inst_35550);
var inst_35573 = cljs.core.pr_str.call(null,inst_35572);
var inst_35574 = figwheel.client.utils.log.call(null,inst_35573);
var inst_35575 = (function (){var all_files = inst_35546;
var res_SINGLEQUOTE_ = inst_35549;
var res = inst_35550;
var files_not_loaded = inst_35552;
var dependencies_that_loaded = inst_35554;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35552,inst_35549,inst_35546,inst_35554,inst_35550,inst_35569,inst_35571,inst_35572,inst_35573,inst_35574,state_val_35633,c__19438__auto__,map__35478,map__35478__$1,opts,before_jsload,on_jsload,reload_dependents,map__35479,map__35479__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35552,inst_35549,inst_35546,inst_35554,inst_35550,inst_35569,inst_35571,inst_35572,inst_35573,inst_35574,state_val_35633,c__19438__auto__,map__35478,map__35478__$1,opts,before_jsload,on_jsload,reload_dependents,map__35479,map__35479__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35576 = setTimeout(inst_35575,(10));
var state_35632__$1 = (function (){var statearr_35703 = state_35632;
(statearr_35703[(33)] = inst_35574);

(statearr_35703[(34)] = inst_35569);

return statearr_35703;
})();
var statearr_35704_35770 = state_35632__$1;
(statearr_35704_35770[(2)] = inst_35576);

(statearr_35704_35770[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (16))){
var state_35632__$1 = state_35632;
var statearr_35705_35771 = state_35632__$1;
(statearr_35705_35771[(2)] = reload_dependents);

(statearr_35705_35771[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (38))){
var inst_35586 = (state_35632[(16)]);
var inst_35603 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35586);
var state_35632__$1 = state_35632;
var statearr_35706_35772 = state_35632__$1;
(statearr_35706_35772[(2)] = inst_35603);

(statearr_35706_35772[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (30))){
var state_35632__$1 = state_35632;
var statearr_35707_35773 = state_35632__$1;
(statearr_35707_35773[(2)] = null);

(statearr_35707_35773[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (10))){
var inst_35506 = (state_35632[(22)]);
var inst_35508 = cljs.core.chunked_seq_QMARK_.call(null,inst_35506);
var state_35632__$1 = state_35632;
if(inst_35508){
var statearr_35708_35774 = state_35632__$1;
(statearr_35708_35774[(1)] = (13));

} else {
var statearr_35709_35775 = state_35632__$1;
(statearr_35709_35775[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (18))){
var inst_35540 = (state_35632[(2)]);
var state_35632__$1 = state_35632;
if(cljs.core.truth_(inst_35540)){
var statearr_35710_35776 = state_35632__$1;
(statearr_35710_35776[(1)] = (19));

} else {
var statearr_35711_35777 = state_35632__$1;
(statearr_35711_35777[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (42))){
var state_35632__$1 = state_35632;
var statearr_35712_35778 = state_35632__$1;
(statearr_35712_35778[(2)] = null);

(statearr_35712_35778[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (37))){
var inst_35598 = (state_35632[(2)]);
var state_35632__$1 = state_35632;
var statearr_35713_35779 = state_35632__$1;
(statearr_35713_35779[(2)] = inst_35598);

(statearr_35713_35779[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (8))){
var inst_35506 = (state_35632[(22)]);
var inst_35493 = (state_35632[(8)]);
var inst_35506__$1 = cljs.core.seq.call(null,inst_35493);
var state_35632__$1 = (function (){var statearr_35714 = state_35632;
(statearr_35714[(22)] = inst_35506__$1);

return statearr_35714;
})();
if(inst_35506__$1){
var statearr_35715_35780 = state_35632__$1;
(statearr_35715_35780[(1)] = (10));

} else {
var statearr_35716_35781 = state_35632__$1;
(statearr_35716_35781[(1)] = (11));

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
});})(c__19438__auto__,map__35478,map__35478__$1,opts,before_jsload,on_jsload,reload_dependents,map__35479,map__35479__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19373__auto__,c__19438__auto__,map__35478,map__35478__$1,opts,before_jsload,on_jsload,reload_dependents,map__35479,map__35479__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19374__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19374__auto____0 = (function (){
var statearr_35720 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35720[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19374__auto__);

(statearr_35720[(1)] = (1));

return statearr_35720;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19374__auto____1 = (function (state_35632){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_35632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e35721){if((e35721 instanceof Object)){
var ex__19377__auto__ = e35721;
var statearr_35722_35782 = state_35632;
(statearr_35722_35782[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35783 = state_35632;
state_35632 = G__35783;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19374__auto__ = function(state_35632){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19374__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19374__auto____1.call(this,state_35632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19374__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19374__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto__,map__35478,map__35478__$1,opts,before_jsload,on_jsload,reload_dependents,map__35479,map__35479__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19440__auto__ = (function (){var statearr_35723 = f__19439__auto__.call(null);
(statearr_35723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto__);

return statearr_35723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto__,map__35478,map__35478__$1,opts,before_jsload,on_jsload,reload_dependents,map__35479,map__35479__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19438__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35786,link){
var map__35789 = p__35786;
var map__35789__$1 = ((((!((map__35789 == null)))?((((map__35789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35789):map__35789);
var file = cljs.core.get.call(null,map__35789__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__35789,map__35789__$1,file){
return (function (p1__35784_SHARP_,p2__35785_SHARP_){
if(cljs.core._EQ_.call(null,p1__35784_SHARP_,p2__35785_SHARP_)){
return p1__35784_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__35789,map__35789__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35795){
var map__35796 = p__35795;
var map__35796__$1 = ((((!((map__35796 == null)))?((((map__35796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35796):map__35796);
var match_length = cljs.core.get.call(null,map__35796__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35796__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35791_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35791_SHARP_);
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
var args35798 = [];
var len__17416__auto___35801 = arguments.length;
var i__17417__auto___35802 = (0);
while(true){
if((i__17417__auto___35802 < len__17416__auto___35801)){
args35798.push((arguments[i__17417__auto___35802]));

var G__35803 = (i__17417__auto___35802 + (1));
i__17417__auto___35802 = G__35803;
continue;
} else {
}
break;
}

var G__35800 = args35798.length;
switch (G__35800) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35798.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35805_SHARP_,p2__35806_SHARP_){
return cljs.core.assoc.call(null,p1__35805_SHARP_,cljs.core.get.call(null,p2__35806_SHARP_,key),p2__35806_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__35807){
var map__35810 = p__35807;
var map__35810__$1 = ((((!((map__35810 == null)))?((((map__35810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35810):map__35810);
var f_data = map__35810__$1;
var file = cljs.core.get.call(null,map__35810__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35812,files_msg){
var map__35819 = p__35812;
var map__35819__$1 = ((((!((map__35819 == null)))?((((map__35819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35819):map__35819);
var opts = map__35819__$1;
var on_cssload = cljs.core.get.call(null,map__35819__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__35821_35825 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__35822_35826 = null;
var count__35823_35827 = (0);
var i__35824_35828 = (0);
while(true){
if((i__35824_35828 < count__35823_35827)){
var f_35829 = cljs.core._nth.call(null,chunk__35822_35826,i__35824_35828);
figwheel.client.file_reloading.reload_css_file.call(null,f_35829);

var G__35830 = seq__35821_35825;
var G__35831 = chunk__35822_35826;
var G__35832 = count__35823_35827;
var G__35833 = (i__35824_35828 + (1));
seq__35821_35825 = G__35830;
chunk__35822_35826 = G__35831;
count__35823_35827 = G__35832;
i__35824_35828 = G__35833;
continue;
} else {
var temp__4425__auto___35834 = cljs.core.seq.call(null,seq__35821_35825);
if(temp__4425__auto___35834){
var seq__35821_35835__$1 = temp__4425__auto___35834;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35821_35835__$1)){
var c__17161__auto___35836 = cljs.core.chunk_first.call(null,seq__35821_35835__$1);
var G__35837 = cljs.core.chunk_rest.call(null,seq__35821_35835__$1);
var G__35838 = c__17161__auto___35836;
var G__35839 = cljs.core.count.call(null,c__17161__auto___35836);
var G__35840 = (0);
seq__35821_35825 = G__35837;
chunk__35822_35826 = G__35838;
count__35823_35827 = G__35839;
i__35824_35828 = G__35840;
continue;
} else {
var f_35841 = cljs.core.first.call(null,seq__35821_35835__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_35841);

var G__35842 = cljs.core.next.call(null,seq__35821_35835__$1);
var G__35843 = null;
var G__35844 = (0);
var G__35845 = (0);
seq__35821_35825 = G__35842;
chunk__35822_35826 = G__35843;
count__35823_35827 = G__35844;
i__35824_35828 = G__35845;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__35819,map__35819__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__35819,map__35819__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1521787227493