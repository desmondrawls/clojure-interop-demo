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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24051_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24051_SHARP_));
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
var seq__24056 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24057 = null;
var count__24058 = (0);
var i__24059 = (0);
while(true){
if((i__24059 < count__24058)){
var n = cljs.core._nth.call(null,chunk__24057,i__24059);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24060 = seq__24056;
var G__24061 = chunk__24057;
var G__24062 = count__24058;
var G__24063 = (i__24059 + (1));
seq__24056 = G__24060;
chunk__24057 = G__24061;
count__24058 = G__24062;
i__24059 = G__24063;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24056);
if(temp__4425__auto__){
var seq__24056__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24056__$1)){
var c__17161__auto__ = cljs.core.chunk_first.call(null,seq__24056__$1);
var G__24064 = cljs.core.chunk_rest.call(null,seq__24056__$1);
var G__24065 = c__17161__auto__;
var G__24066 = cljs.core.count.call(null,c__17161__auto__);
var G__24067 = (0);
seq__24056 = G__24064;
chunk__24057 = G__24065;
count__24058 = G__24066;
i__24059 = G__24067;
continue;
} else {
var n = cljs.core.first.call(null,seq__24056__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24068 = cljs.core.next.call(null,seq__24056__$1);
var G__24069 = null;
var G__24070 = (0);
var G__24071 = (0);
seq__24056 = G__24068;
chunk__24057 = G__24069;
count__24058 = G__24070;
i__24059 = G__24071;
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

var seq__24110_24117 = cljs.core.seq.call(null,deps);
var chunk__24111_24118 = null;
var count__24112_24119 = (0);
var i__24113_24120 = (0);
while(true){
if((i__24113_24120 < count__24112_24119)){
var dep_24121 = cljs.core._nth.call(null,chunk__24111_24118,i__24113_24120);
topo_sort_helper_STAR_.call(null,dep_24121,(depth + (1)),state);

var G__24122 = seq__24110_24117;
var G__24123 = chunk__24111_24118;
var G__24124 = count__24112_24119;
var G__24125 = (i__24113_24120 + (1));
seq__24110_24117 = G__24122;
chunk__24111_24118 = G__24123;
count__24112_24119 = G__24124;
i__24113_24120 = G__24125;
continue;
} else {
var temp__4425__auto___24126 = cljs.core.seq.call(null,seq__24110_24117);
if(temp__4425__auto___24126){
var seq__24110_24127__$1 = temp__4425__auto___24126;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24110_24127__$1)){
var c__17161__auto___24128 = cljs.core.chunk_first.call(null,seq__24110_24127__$1);
var G__24129 = cljs.core.chunk_rest.call(null,seq__24110_24127__$1);
var G__24130 = c__17161__auto___24128;
var G__24131 = cljs.core.count.call(null,c__17161__auto___24128);
var G__24132 = (0);
seq__24110_24117 = G__24129;
chunk__24111_24118 = G__24130;
count__24112_24119 = G__24131;
i__24113_24120 = G__24132;
continue;
} else {
var dep_24133 = cljs.core.first.call(null,seq__24110_24127__$1);
topo_sort_helper_STAR_.call(null,dep_24133,(depth + (1)),state);

var G__24134 = cljs.core.next.call(null,seq__24110_24127__$1);
var G__24135 = null;
var G__24136 = (0);
var G__24137 = (0);
seq__24110_24117 = G__24134;
chunk__24111_24118 = G__24135;
count__24112_24119 = G__24136;
i__24113_24120 = G__24137;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24114){
var vec__24116 = p__24114;
var x = cljs.core.nth.call(null,vec__24116,(0),null);
var xs = cljs.core.nthnext.call(null,vec__24116,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24116,x,xs,get_deps__$1){
return (function (p1__24072_SHARP_){
return clojure.set.difference.call(null,p1__24072_SHARP_,x);
});})(vec__24116,x,xs,get_deps__$1))
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
var seq__24150 = cljs.core.seq.call(null,provides);
var chunk__24151 = null;
var count__24152 = (0);
var i__24153 = (0);
while(true){
if((i__24153 < count__24152)){
var prov = cljs.core._nth.call(null,chunk__24151,i__24153);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24154_24162 = cljs.core.seq.call(null,requires);
var chunk__24155_24163 = null;
var count__24156_24164 = (0);
var i__24157_24165 = (0);
while(true){
if((i__24157_24165 < count__24156_24164)){
var req_24166 = cljs.core._nth.call(null,chunk__24155_24163,i__24157_24165);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24166,prov);

var G__24167 = seq__24154_24162;
var G__24168 = chunk__24155_24163;
var G__24169 = count__24156_24164;
var G__24170 = (i__24157_24165 + (1));
seq__24154_24162 = G__24167;
chunk__24155_24163 = G__24168;
count__24156_24164 = G__24169;
i__24157_24165 = G__24170;
continue;
} else {
var temp__4425__auto___24171 = cljs.core.seq.call(null,seq__24154_24162);
if(temp__4425__auto___24171){
var seq__24154_24172__$1 = temp__4425__auto___24171;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24154_24172__$1)){
var c__17161__auto___24173 = cljs.core.chunk_first.call(null,seq__24154_24172__$1);
var G__24174 = cljs.core.chunk_rest.call(null,seq__24154_24172__$1);
var G__24175 = c__17161__auto___24173;
var G__24176 = cljs.core.count.call(null,c__17161__auto___24173);
var G__24177 = (0);
seq__24154_24162 = G__24174;
chunk__24155_24163 = G__24175;
count__24156_24164 = G__24176;
i__24157_24165 = G__24177;
continue;
} else {
var req_24178 = cljs.core.first.call(null,seq__24154_24172__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24178,prov);

var G__24179 = cljs.core.next.call(null,seq__24154_24172__$1);
var G__24180 = null;
var G__24181 = (0);
var G__24182 = (0);
seq__24154_24162 = G__24179;
chunk__24155_24163 = G__24180;
count__24156_24164 = G__24181;
i__24157_24165 = G__24182;
continue;
}
} else {
}
}
break;
}

var G__24183 = seq__24150;
var G__24184 = chunk__24151;
var G__24185 = count__24152;
var G__24186 = (i__24153 + (1));
seq__24150 = G__24183;
chunk__24151 = G__24184;
count__24152 = G__24185;
i__24153 = G__24186;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24150);
if(temp__4425__auto__){
var seq__24150__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24150__$1)){
var c__17161__auto__ = cljs.core.chunk_first.call(null,seq__24150__$1);
var G__24187 = cljs.core.chunk_rest.call(null,seq__24150__$1);
var G__24188 = c__17161__auto__;
var G__24189 = cljs.core.count.call(null,c__17161__auto__);
var G__24190 = (0);
seq__24150 = G__24187;
chunk__24151 = G__24188;
count__24152 = G__24189;
i__24153 = G__24190;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24150__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24158_24191 = cljs.core.seq.call(null,requires);
var chunk__24159_24192 = null;
var count__24160_24193 = (0);
var i__24161_24194 = (0);
while(true){
if((i__24161_24194 < count__24160_24193)){
var req_24195 = cljs.core._nth.call(null,chunk__24159_24192,i__24161_24194);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24195,prov);

var G__24196 = seq__24158_24191;
var G__24197 = chunk__24159_24192;
var G__24198 = count__24160_24193;
var G__24199 = (i__24161_24194 + (1));
seq__24158_24191 = G__24196;
chunk__24159_24192 = G__24197;
count__24160_24193 = G__24198;
i__24161_24194 = G__24199;
continue;
} else {
var temp__4425__auto___24200__$1 = cljs.core.seq.call(null,seq__24158_24191);
if(temp__4425__auto___24200__$1){
var seq__24158_24201__$1 = temp__4425__auto___24200__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24158_24201__$1)){
var c__17161__auto___24202 = cljs.core.chunk_first.call(null,seq__24158_24201__$1);
var G__24203 = cljs.core.chunk_rest.call(null,seq__24158_24201__$1);
var G__24204 = c__17161__auto___24202;
var G__24205 = cljs.core.count.call(null,c__17161__auto___24202);
var G__24206 = (0);
seq__24158_24191 = G__24203;
chunk__24159_24192 = G__24204;
count__24160_24193 = G__24205;
i__24161_24194 = G__24206;
continue;
} else {
var req_24207 = cljs.core.first.call(null,seq__24158_24201__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24207,prov);

var G__24208 = cljs.core.next.call(null,seq__24158_24201__$1);
var G__24209 = null;
var G__24210 = (0);
var G__24211 = (0);
seq__24158_24191 = G__24208;
chunk__24159_24192 = G__24209;
count__24160_24193 = G__24210;
i__24161_24194 = G__24211;
continue;
}
} else {
}
}
break;
}

var G__24212 = cljs.core.next.call(null,seq__24150__$1);
var G__24213 = null;
var G__24214 = (0);
var G__24215 = (0);
seq__24150 = G__24212;
chunk__24151 = G__24213;
count__24152 = G__24214;
i__24153 = G__24215;
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
var seq__24220_24224 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__24221_24225 = null;
var count__24222_24226 = (0);
var i__24223_24227 = (0);
while(true){
if((i__24223_24227 < count__24222_24226)){
var ns_24228 = cljs.core._nth.call(null,chunk__24221_24225,i__24223_24227);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24228);

var G__24229 = seq__24220_24224;
var G__24230 = chunk__24221_24225;
var G__24231 = count__24222_24226;
var G__24232 = (i__24223_24227 + (1));
seq__24220_24224 = G__24229;
chunk__24221_24225 = G__24230;
count__24222_24226 = G__24231;
i__24223_24227 = G__24232;
continue;
} else {
var temp__4425__auto___24233 = cljs.core.seq.call(null,seq__24220_24224);
if(temp__4425__auto___24233){
var seq__24220_24234__$1 = temp__4425__auto___24233;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24220_24234__$1)){
var c__17161__auto___24235 = cljs.core.chunk_first.call(null,seq__24220_24234__$1);
var G__24236 = cljs.core.chunk_rest.call(null,seq__24220_24234__$1);
var G__24237 = c__17161__auto___24235;
var G__24238 = cljs.core.count.call(null,c__17161__auto___24235);
var G__24239 = (0);
seq__24220_24224 = G__24236;
chunk__24221_24225 = G__24237;
count__24222_24226 = G__24238;
i__24223_24227 = G__24239;
continue;
} else {
var ns_24240 = cljs.core.first.call(null,seq__24220_24234__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24240);

var G__24241 = cljs.core.next.call(null,seq__24220_24234__$1);
var G__24242 = null;
var G__24243 = (0);
var G__24244 = (0);
seq__24220_24224 = G__24241;
chunk__24221_24225 = G__24242;
count__24222_24226 = G__24243;
i__24223_24227 = G__24244;
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
var G__24245__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__24245 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24246__i = 0, G__24246__a = new Array(arguments.length -  0);
while (G__24246__i < G__24246__a.length) {G__24246__a[G__24246__i] = arguments[G__24246__i + 0]; ++G__24246__i;}
  args = new cljs.core.IndexedSeq(G__24246__a,0);
} 
return G__24245__delegate.call(this,args);};
G__24245.cljs$lang$maxFixedArity = 0;
G__24245.cljs$lang$applyTo = (function (arglist__24247){
var args = cljs.core.seq(arglist__24247);
return G__24245__delegate(args);
});
G__24245.cljs$core$IFn$_invoke$arity$variadic = G__24245__delegate;
return G__24245;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__24249 = cljs.core._EQ_;
var expr__24250 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__24249.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__24250))){
var path_parts = ((function (pred__24249,expr__24250){
return (function (p1__24248_SHARP_){
return clojure.string.split.call(null,p1__24248_SHARP_,/[\/\\]/);
});})(pred__24249,expr__24250))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__24249,expr__24250){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(clojure.string.join.call(null,"/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","..",request_url], null)));
}catch (e24252){if((e24252 instanceof Error)){
var e = e24252;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e24252;

}
}})());
});
;})(path_parts,sep,root,pred__24249,expr__24250))
} else {
if(cljs.core.truth_(pred__24249.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__24250))){
return ((function (pred__24249,expr__24250){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__24249,expr__24250){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__24249,expr__24250))
);

return deferred.addErrback(((function (deferred,pred__24249,expr__24250){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__24249,expr__24250))
);
});
;})(pred__24249,expr__24250))
} else {
return ((function (pred__24249,expr__24250){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__24249,expr__24250))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__24253,callback){
var map__24256 = p__24253;
var map__24256__$1 = ((((!((map__24256 == null)))?((((map__24256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24256):map__24256);
var file_msg = map__24256__$1;
var request_url = cljs.core.get.call(null,map__24256__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__24256,map__24256__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__24256,map__24256__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__19639__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19639__auto__){
return (function (){
var f__19640__auto__ = (function (){var switch__19618__auto__ = ((function (c__19639__auto__){
return (function (state_24280){
var state_val_24281 = (state_24280[(1)]);
if((state_val_24281 === (7))){
var inst_24276 = (state_24280[(2)]);
var state_24280__$1 = state_24280;
var statearr_24282_24302 = state_24280__$1;
(statearr_24282_24302[(2)] = inst_24276);

(statearr_24282_24302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24281 === (1))){
var state_24280__$1 = state_24280;
var statearr_24283_24303 = state_24280__$1;
(statearr_24283_24303[(2)] = null);

(statearr_24283_24303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24281 === (4))){
var inst_24260 = (state_24280[(7)]);
var inst_24260__$1 = (state_24280[(2)]);
var state_24280__$1 = (function (){var statearr_24284 = state_24280;
(statearr_24284[(7)] = inst_24260__$1);

return statearr_24284;
})();
if(cljs.core.truth_(inst_24260__$1)){
var statearr_24285_24304 = state_24280__$1;
(statearr_24285_24304[(1)] = (5));

} else {
var statearr_24286_24305 = state_24280__$1;
(statearr_24286_24305[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24281 === (6))){
var state_24280__$1 = state_24280;
var statearr_24287_24306 = state_24280__$1;
(statearr_24287_24306[(2)] = null);

(statearr_24287_24306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24281 === (3))){
var inst_24278 = (state_24280[(2)]);
var state_24280__$1 = state_24280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24280__$1,inst_24278);
} else {
if((state_val_24281 === (2))){
var state_24280__$1 = state_24280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24280__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_24281 === (11))){
var inst_24272 = (state_24280[(2)]);
var state_24280__$1 = (function (){var statearr_24288 = state_24280;
(statearr_24288[(8)] = inst_24272);

return statearr_24288;
})();
var statearr_24289_24307 = state_24280__$1;
(statearr_24289_24307[(2)] = null);

(statearr_24289_24307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24281 === (9))){
var inst_24264 = (state_24280[(9)]);
var inst_24266 = (state_24280[(10)]);
var inst_24268 = inst_24266.call(null,inst_24264);
var state_24280__$1 = state_24280;
var statearr_24290_24308 = state_24280__$1;
(statearr_24290_24308[(2)] = inst_24268);

(statearr_24290_24308[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24281 === (5))){
var inst_24260 = (state_24280[(7)]);
var inst_24262 = figwheel.client.file_reloading.blocking_load.call(null,inst_24260);
var state_24280__$1 = state_24280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24280__$1,(8),inst_24262);
} else {
if((state_val_24281 === (10))){
var inst_24264 = (state_24280[(9)]);
var inst_24270 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_24264);
var state_24280__$1 = state_24280;
var statearr_24291_24309 = state_24280__$1;
(statearr_24291_24309[(2)] = inst_24270);

(statearr_24291_24309[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24281 === (8))){
var inst_24266 = (state_24280[(10)]);
var inst_24260 = (state_24280[(7)]);
var inst_24264 = (state_24280[(2)]);
var inst_24265 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_24266__$1 = cljs.core.get.call(null,inst_24265,inst_24260);
var state_24280__$1 = (function (){var statearr_24292 = state_24280;
(statearr_24292[(9)] = inst_24264);

(statearr_24292[(10)] = inst_24266__$1);

return statearr_24292;
})();
if(cljs.core.truth_(inst_24266__$1)){
var statearr_24293_24310 = state_24280__$1;
(statearr_24293_24310[(1)] = (9));

} else {
var statearr_24294_24311 = state_24280__$1;
(statearr_24294_24311[(1)] = (10));

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
});})(c__19639__auto__))
;
return ((function (switch__19618__auto__,c__19639__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19619__auto__ = null;
var figwheel$client$file_reloading$state_machine__19619__auto____0 = (function (){
var statearr_24298 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24298[(0)] = figwheel$client$file_reloading$state_machine__19619__auto__);

(statearr_24298[(1)] = (1));

return statearr_24298;
});
var figwheel$client$file_reloading$state_machine__19619__auto____1 = (function (state_24280){
while(true){
var ret_value__19620__auto__ = (function (){try{while(true){
var result__19621__auto__ = switch__19618__auto__.call(null,state_24280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19621__auto__;
}
break;
}
}catch (e24299){if((e24299 instanceof Object)){
var ex__19622__auto__ = e24299;
var statearr_24300_24312 = state_24280;
(statearr_24300_24312[(5)] = ex__19622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24313 = state_24280;
state_24280 = G__24313;
continue;
} else {
return ret_value__19620__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19619__auto__ = function(state_24280){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19619__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19619__auto____1.call(this,state_24280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19619__auto____0;
figwheel$client$file_reloading$state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19619__auto____1;
return figwheel$client$file_reloading$state_machine__19619__auto__;
})()
;})(switch__19618__auto__,c__19639__auto__))
})();
var state__19641__auto__ = (function (){var statearr_24301 = f__19640__auto__.call(null);
(statearr_24301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19639__auto__);

return statearr_24301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19641__auto__);
});})(c__19639__auto__))
);

return c__19639__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__24314,callback){
var map__24317 = p__24314;
var map__24317__$1 = ((((!((map__24317 == null)))?((((map__24317.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24317.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24317):map__24317);
var file_msg = map__24317__$1;
var namespace = cljs.core.get.call(null,map__24317__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__24317,map__24317__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__24317,map__24317__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__24319){
var map__24322 = p__24319;
var map__24322__$1 = ((((!((map__24322 == null)))?((((map__24322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24322):map__24322);
var file_msg = map__24322__$1;
var namespace = cljs.core.get.call(null,map__24322__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__24324,callback){
var map__24327 = p__24324;
var map__24327__$1 = ((((!((map__24327 == null)))?((((map__24327.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24327.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24327):map__24327);
var file_msg = map__24327__$1;
var request_url = cljs.core.get.call(null,map__24327__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__24327__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__19639__auto___24415 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19639__auto___24415,out){
return (function (){
var f__19640__auto__ = (function (){var switch__19618__auto__ = ((function (c__19639__auto___24415,out){
return (function (state_24397){
var state_val_24398 = (state_24397[(1)]);
if((state_val_24398 === (1))){
var inst_24375 = cljs.core.nth.call(null,files,(0),null);
var inst_24376 = cljs.core.nthnext.call(null,files,(1));
var inst_24377 = files;
var state_24397__$1 = (function (){var statearr_24399 = state_24397;
(statearr_24399[(7)] = inst_24375);

(statearr_24399[(8)] = inst_24376);

(statearr_24399[(9)] = inst_24377);

return statearr_24399;
})();
var statearr_24400_24416 = state_24397__$1;
(statearr_24400_24416[(2)] = null);

(statearr_24400_24416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (2))){
var inst_24380 = (state_24397[(10)]);
var inst_24377 = (state_24397[(9)]);
var inst_24380__$1 = cljs.core.nth.call(null,inst_24377,(0),null);
var inst_24381 = cljs.core.nthnext.call(null,inst_24377,(1));
var inst_24382 = (inst_24380__$1 == null);
var inst_24383 = cljs.core.not.call(null,inst_24382);
var state_24397__$1 = (function (){var statearr_24401 = state_24397;
(statearr_24401[(10)] = inst_24380__$1);

(statearr_24401[(11)] = inst_24381);

return statearr_24401;
})();
if(inst_24383){
var statearr_24402_24417 = state_24397__$1;
(statearr_24402_24417[(1)] = (4));

} else {
var statearr_24403_24418 = state_24397__$1;
(statearr_24403_24418[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (3))){
var inst_24395 = (state_24397[(2)]);
var state_24397__$1 = state_24397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24397__$1,inst_24395);
} else {
if((state_val_24398 === (4))){
var inst_24380 = (state_24397[(10)]);
var inst_24385 = figwheel.client.file_reloading.reload_js_file.call(null,inst_24380);
var state_24397__$1 = state_24397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24397__$1,(7),inst_24385);
} else {
if((state_val_24398 === (5))){
var inst_24391 = cljs.core.async.close_BANG_.call(null,out);
var state_24397__$1 = state_24397;
var statearr_24404_24419 = state_24397__$1;
(statearr_24404_24419[(2)] = inst_24391);

(statearr_24404_24419[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (6))){
var inst_24393 = (state_24397[(2)]);
var state_24397__$1 = state_24397;
var statearr_24405_24420 = state_24397__$1;
(statearr_24405_24420[(2)] = inst_24393);

(statearr_24405_24420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (7))){
var inst_24381 = (state_24397[(11)]);
var inst_24387 = (state_24397[(2)]);
var inst_24388 = cljs.core.async.put_BANG_.call(null,out,inst_24387);
var inst_24377 = inst_24381;
var state_24397__$1 = (function (){var statearr_24406 = state_24397;
(statearr_24406[(12)] = inst_24388);

(statearr_24406[(9)] = inst_24377);

return statearr_24406;
})();
var statearr_24407_24421 = state_24397__$1;
(statearr_24407_24421[(2)] = null);

(statearr_24407_24421[(1)] = (2));


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
});})(c__19639__auto___24415,out))
;
return ((function (switch__19618__auto__,c__19639__auto___24415,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19619__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19619__auto____0 = (function (){
var statearr_24411 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24411[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19619__auto__);

(statearr_24411[(1)] = (1));

return statearr_24411;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19619__auto____1 = (function (state_24397){
while(true){
var ret_value__19620__auto__ = (function (){try{while(true){
var result__19621__auto__ = switch__19618__auto__.call(null,state_24397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19621__auto__;
}
break;
}
}catch (e24412){if((e24412 instanceof Object)){
var ex__19622__auto__ = e24412;
var statearr_24413_24422 = state_24397;
(statearr_24413_24422[(5)] = ex__19622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24423 = state_24397;
state_24397 = G__24423;
continue;
} else {
return ret_value__19620__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19619__auto__ = function(state_24397){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19619__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19619__auto____1.call(this,state_24397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19619__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19619__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19619__auto__;
})()
;})(switch__19618__auto__,c__19639__auto___24415,out))
})();
var state__19641__auto__ = (function (){var statearr_24414 = f__19640__auto__.call(null);
(statearr_24414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19639__auto___24415);

return statearr_24414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19641__auto__);
});})(c__19639__auto___24415,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__24424,opts){
var map__24428 = p__24424;
var map__24428__$1 = ((((!((map__24428 == null)))?((((map__24428.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24428.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24428):map__24428);
var eval_body__$1 = cljs.core.get.call(null,map__24428__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__24428__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e24430){var e = e24430;
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
return (function (p1__24431_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24431_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__24436){
var vec__24437 = p__24436;
var k = cljs.core.nth.call(null,vec__24437,(0),null);
var v = cljs.core.nth.call(null,vec__24437,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__24438){
var vec__24439 = p__24438;
var k = cljs.core.nth.call(null,vec__24439,(0),null);
var v = cljs.core.nth.call(null,vec__24439,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__24443,p__24444){
var map__24691 = p__24443;
var map__24691__$1 = ((((!((map__24691 == null)))?((((map__24691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24691):map__24691);
var opts = map__24691__$1;
var before_jsload = cljs.core.get.call(null,map__24691__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__24691__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__24691__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__24692 = p__24444;
var map__24692__$1 = ((((!((map__24692 == null)))?((((map__24692.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24692.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24692):map__24692);
var msg = map__24692__$1;
var files = cljs.core.get.call(null,map__24692__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__24692__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__24692__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19639__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19639__auto__,map__24691,map__24691__$1,opts,before_jsload,on_jsload,reload_dependents,map__24692,map__24692__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19640__auto__ = (function (){var switch__19618__auto__ = ((function (c__19639__auto__,map__24691,map__24691__$1,opts,before_jsload,on_jsload,reload_dependents,map__24692,map__24692__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_24845){
var state_val_24846 = (state_24845[(1)]);
if((state_val_24846 === (7))){
var inst_24708 = (state_24845[(7)]);
var inst_24706 = (state_24845[(8)]);
var inst_24707 = (state_24845[(9)]);
var inst_24709 = (state_24845[(10)]);
var inst_24714 = cljs.core._nth.call(null,inst_24707,inst_24709);
var inst_24715 = figwheel.client.file_reloading.eval_body.call(null,inst_24714,opts);
var inst_24716 = (inst_24709 + (1));
var tmp24847 = inst_24708;
var tmp24848 = inst_24706;
var tmp24849 = inst_24707;
var inst_24706__$1 = tmp24848;
var inst_24707__$1 = tmp24849;
var inst_24708__$1 = tmp24847;
var inst_24709__$1 = inst_24716;
var state_24845__$1 = (function (){var statearr_24850 = state_24845;
(statearr_24850[(7)] = inst_24708__$1);

(statearr_24850[(8)] = inst_24706__$1);

(statearr_24850[(11)] = inst_24715);

(statearr_24850[(9)] = inst_24707__$1);

(statearr_24850[(10)] = inst_24709__$1);

return statearr_24850;
})();
var statearr_24851_24937 = state_24845__$1;
(statearr_24851_24937[(2)] = null);

(statearr_24851_24937[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (20))){
var inst_24749 = (state_24845[(12)]);
var inst_24757 = figwheel.client.file_reloading.sort_files.call(null,inst_24749);
var state_24845__$1 = state_24845;
var statearr_24852_24938 = state_24845__$1;
(statearr_24852_24938[(2)] = inst_24757);

(statearr_24852_24938[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (27))){
var state_24845__$1 = state_24845;
var statearr_24853_24939 = state_24845__$1;
(statearr_24853_24939[(2)] = null);

(statearr_24853_24939[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (1))){
var inst_24698 = (state_24845[(13)]);
var inst_24695 = before_jsload.call(null,files);
var inst_24696 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_24697 = (function (){return ((function (inst_24698,inst_24695,inst_24696,state_val_24846,c__19639__auto__,map__24691,map__24691__$1,opts,before_jsload,on_jsload,reload_dependents,map__24692,map__24692__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24440_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24440_SHARP_);
});
;})(inst_24698,inst_24695,inst_24696,state_val_24846,c__19639__auto__,map__24691,map__24691__$1,opts,before_jsload,on_jsload,reload_dependents,map__24692,map__24692__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24698__$1 = cljs.core.filter.call(null,inst_24697,files);
var inst_24699 = cljs.core.not_empty.call(null,inst_24698__$1);
var state_24845__$1 = (function (){var statearr_24854 = state_24845;
(statearr_24854[(13)] = inst_24698__$1);

(statearr_24854[(14)] = inst_24696);

(statearr_24854[(15)] = inst_24695);

return statearr_24854;
})();
if(cljs.core.truth_(inst_24699)){
var statearr_24855_24940 = state_24845__$1;
(statearr_24855_24940[(1)] = (2));

} else {
var statearr_24856_24941 = state_24845__$1;
(statearr_24856_24941[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (24))){
var state_24845__$1 = state_24845;
var statearr_24857_24942 = state_24845__$1;
(statearr_24857_24942[(2)] = null);

(statearr_24857_24942[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (39))){
var inst_24799 = (state_24845[(16)]);
var state_24845__$1 = state_24845;
var statearr_24858_24943 = state_24845__$1;
(statearr_24858_24943[(2)] = inst_24799);

(statearr_24858_24943[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (46))){
var inst_24840 = (state_24845[(2)]);
var state_24845__$1 = state_24845;
var statearr_24859_24944 = state_24845__$1;
(statearr_24859_24944[(2)] = inst_24840);

(statearr_24859_24944[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (4))){
var inst_24743 = (state_24845[(2)]);
var inst_24744 = cljs.core.List.EMPTY;
var inst_24745 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_24744);
var inst_24746 = (function (){return ((function (inst_24743,inst_24744,inst_24745,state_val_24846,c__19639__auto__,map__24691,map__24691__$1,opts,before_jsload,on_jsload,reload_dependents,map__24692,map__24692__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24441_SHARP_){
var and__16346__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24441_SHARP_);
if(cljs.core.truth_(and__16346__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24441_SHARP_));
} else {
return and__16346__auto__;
}
});
;})(inst_24743,inst_24744,inst_24745,state_val_24846,c__19639__auto__,map__24691,map__24691__$1,opts,before_jsload,on_jsload,reload_dependents,map__24692,map__24692__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24747 = cljs.core.filter.call(null,inst_24746,files);
var inst_24748 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_24749 = cljs.core.concat.call(null,inst_24747,inst_24748);
var state_24845__$1 = (function (){var statearr_24860 = state_24845;
(statearr_24860[(17)] = inst_24745);

(statearr_24860[(18)] = inst_24743);

(statearr_24860[(12)] = inst_24749);

return statearr_24860;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_24861_24945 = state_24845__$1;
(statearr_24861_24945[(1)] = (16));

} else {
var statearr_24862_24946 = state_24845__$1;
(statearr_24862_24946[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (15))){
var inst_24733 = (state_24845[(2)]);
var state_24845__$1 = state_24845;
var statearr_24863_24947 = state_24845__$1;
(statearr_24863_24947[(2)] = inst_24733);

(statearr_24863_24947[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (21))){
var inst_24759 = (state_24845[(19)]);
var inst_24759__$1 = (state_24845[(2)]);
var inst_24760 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_24759__$1);
var state_24845__$1 = (function (){var statearr_24864 = state_24845;
(statearr_24864[(19)] = inst_24759__$1);

return statearr_24864;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24845__$1,(22),inst_24760);
} else {
if((state_val_24846 === (31))){
var inst_24843 = (state_24845[(2)]);
var state_24845__$1 = state_24845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24845__$1,inst_24843);
} else {
if((state_val_24846 === (32))){
var inst_24799 = (state_24845[(16)]);
var inst_24804 = inst_24799.cljs$lang$protocol_mask$partition0$;
var inst_24805 = (inst_24804 & (64));
var inst_24806 = inst_24799.cljs$core$ISeq$;
var inst_24807 = (inst_24805) || (inst_24806);
var state_24845__$1 = state_24845;
if(cljs.core.truth_(inst_24807)){
var statearr_24865_24948 = state_24845__$1;
(statearr_24865_24948[(1)] = (35));

} else {
var statearr_24866_24949 = state_24845__$1;
(statearr_24866_24949[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (40))){
var inst_24820 = (state_24845[(20)]);
var inst_24819 = (state_24845[(2)]);
var inst_24820__$1 = cljs.core.get.call(null,inst_24819,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_24821 = cljs.core.get.call(null,inst_24819,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_24822 = cljs.core.not_empty.call(null,inst_24820__$1);
var state_24845__$1 = (function (){var statearr_24867 = state_24845;
(statearr_24867[(21)] = inst_24821);

(statearr_24867[(20)] = inst_24820__$1);

return statearr_24867;
})();
if(cljs.core.truth_(inst_24822)){
var statearr_24868_24950 = state_24845__$1;
(statearr_24868_24950[(1)] = (41));

} else {
var statearr_24869_24951 = state_24845__$1;
(statearr_24869_24951[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (33))){
var state_24845__$1 = state_24845;
var statearr_24870_24952 = state_24845__$1;
(statearr_24870_24952[(2)] = false);

(statearr_24870_24952[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (13))){
var inst_24719 = (state_24845[(22)]);
var inst_24723 = cljs.core.chunk_first.call(null,inst_24719);
var inst_24724 = cljs.core.chunk_rest.call(null,inst_24719);
var inst_24725 = cljs.core.count.call(null,inst_24723);
var inst_24706 = inst_24724;
var inst_24707 = inst_24723;
var inst_24708 = inst_24725;
var inst_24709 = (0);
var state_24845__$1 = (function (){var statearr_24871 = state_24845;
(statearr_24871[(7)] = inst_24708);

(statearr_24871[(8)] = inst_24706);

(statearr_24871[(9)] = inst_24707);

(statearr_24871[(10)] = inst_24709);

return statearr_24871;
})();
var statearr_24872_24953 = state_24845__$1;
(statearr_24872_24953[(2)] = null);

(statearr_24872_24953[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (22))){
var inst_24759 = (state_24845[(19)]);
var inst_24762 = (state_24845[(23)]);
var inst_24763 = (state_24845[(24)]);
var inst_24767 = (state_24845[(25)]);
var inst_24762__$1 = (state_24845[(2)]);
var inst_24763__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24762__$1);
var inst_24764 = (function (){var all_files = inst_24759;
var res_SINGLEQUOTE_ = inst_24762__$1;
var res = inst_24763__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_24759,inst_24762,inst_24763,inst_24767,inst_24762__$1,inst_24763__$1,state_val_24846,c__19639__auto__,map__24691,map__24691__$1,opts,before_jsload,on_jsload,reload_dependents,map__24692,map__24692__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24442_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__24442_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_24759,inst_24762,inst_24763,inst_24767,inst_24762__$1,inst_24763__$1,state_val_24846,c__19639__auto__,map__24691,map__24691__$1,opts,before_jsload,on_jsload,reload_dependents,map__24692,map__24692__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24765 = cljs.core.filter.call(null,inst_24764,inst_24762__$1);
var inst_24766 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_24767__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24766);
var inst_24768 = cljs.core.not_empty.call(null,inst_24767__$1);
var state_24845__$1 = (function (){var statearr_24873 = state_24845;
(statearr_24873[(23)] = inst_24762__$1);

(statearr_24873[(24)] = inst_24763__$1);

(statearr_24873[(26)] = inst_24765);

(statearr_24873[(25)] = inst_24767__$1);

return statearr_24873;
})();
if(cljs.core.truth_(inst_24768)){
var statearr_24874_24954 = state_24845__$1;
(statearr_24874_24954[(1)] = (23));

} else {
var statearr_24875_24955 = state_24845__$1;
(statearr_24875_24955[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (36))){
var state_24845__$1 = state_24845;
var statearr_24876_24956 = state_24845__$1;
(statearr_24876_24956[(2)] = false);

(statearr_24876_24956[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (41))){
var inst_24820 = (state_24845[(20)]);
var inst_24824 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_24825 = cljs.core.map.call(null,inst_24824,inst_24820);
var inst_24826 = cljs.core.pr_str.call(null,inst_24825);
var inst_24827 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_24826)].join('');
var inst_24828 = figwheel.client.utils.log.call(null,inst_24827);
var state_24845__$1 = state_24845;
var statearr_24877_24957 = state_24845__$1;
(statearr_24877_24957[(2)] = inst_24828);

(statearr_24877_24957[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (43))){
var inst_24821 = (state_24845[(21)]);
var inst_24831 = (state_24845[(2)]);
var inst_24832 = cljs.core.not_empty.call(null,inst_24821);
var state_24845__$1 = (function (){var statearr_24878 = state_24845;
(statearr_24878[(27)] = inst_24831);

return statearr_24878;
})();
if(cljs.core.truth_(inst_24832)){
var statearr_24879_24958 = state_24845__$1;
(statearr_24879_24958[(1)] = (44));

} else {
var statearr_24880_24959 = state_24845__$1;
(statearr_24880_24959[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (29))){
var inst_24759 = (state_24845[(19)]);
var inst_24762 = (state_24845[(23)]);
var inst_24763 = (state_24845[(24)]);
var inst_24799 = (state_24845[(16)]);
var inst_24765 = (state_24845[(26)]);
var inst_24767 = (state_24845[(25)]);
var inst_24795 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_24798 = (function (){var all_files = inst_24759;
var res_SINGLEQUOTE_ = inst_24762;
var res = inst_24763;
var files_not_loaded = inst_24765;
var dependencies_that_loaded = inst_24767;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24759,inst_24762,inst_24763,inst_24799,inst_24765,inst_24767,inst_24795,state_val_24846,c__19639__auto__,map__24691,map__24691__$1,opts,before_jsload,on_jsload,reload_dependents,map__24692,map__24692__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24797){
var map__24881 = p__24797;
var map__24881__$1 = ((((!((map__24881 == null)))?((((map__24881.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24881.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24881):map__24881);
var namespace = cljs.core.get.call(null,map__24881__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24759,inst_24762,inst_24763,inst_24799,inst_24765,inst_24767,inst_24795,state_val_24846,c__19639__auto__,map__24691,map__24691__$1,opts,before_jsload,on_jsload,reload_dependents,map__24692,map__24692__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24799__$1 = cljs.core.group_by.call(null,inst_24798,inst_24765);
var inst_24801 = (inst_24799__$1 == null);
var inst_24802 = cljs.core.not.call(null,inst_24801);
var state_24845__$1 = (function (){var statearr_24883 = state_24845;
(statearr_24883[(28)] = inst_24795);

(statearr_24883[(16)] = inst_24799__$1);

return statearr_24883;
})();
if(inst_24802){
var statearr_24884_24960 = state_24845__$1;
(statearr_24884_24960[(1)] = (32));

} else {
var statearr_24885_24961 = state_24845__$1;
(statearr_24885_24961[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (44))){
var inst_24821 = (state_24845[(21)]);
var inst_24834 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24821);
var inst_24835 = cljs.core.pr_str.call(null,inst_24834);
var inst_24836 = [cljs.core.str("not required: "),cljs.core.str(inst_24835)].join('');
var inst_24837 = figwheel.client.utils.log.call(null,inst_24836);
var state_24845__$1 = state_24845;
var statearr_24886_24962 = state_24845__$1;
(statearr_24886_24962[(2)] = inst_24837);

(statearr_24886_24962[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (6))){
var inst_24740 = (state_24845[(2)]);
var state_24845__$1 = state_24845;
var statearr_24887_24963 = state_24845__$1;
(statearr_24887_24963[(2)] = inst_24740);

(statearr_24887_24963[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (28))){
var inst_24765 = (state_24845[(26)]);
var inst_24792 = (state_24845[(2)]);
var inst_24793 = cljs.core.not_empty.call(null,inst_24765);
var state_24845__$1 = (function (){var statearr_24888 = state_24845;
(statearr_24888[(29)] = inst_24792);

return statearr_24888;
})();
if(cljs.core.truth_(inst_24793)){
var statearr_24889_24964 = state_24845__$1;
(statearr_24889_24964[(1)] = (29));

} else {
var statearr_24890_24965 = state_24845__$1;
(statearr_24890_24965[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (25))){
var inst_24763 = (state_24845[(24)]);
var inst_24779 = (state_24845[(2)]);
var inst_24780 = cljs.core.not_empty.call(null,inst_24763);
var state_24845__$1 = (function (){var statearr_24891 = state_24845;
(statearr_24891[(30)] = inst_24779);

return statearr_24891;
})();
if(cljs.core.truth_(inst_24780)){
var statearr_24892_24966 = state_24845__$1;
(statearr_24892_24966[(1)] = (26));

} else {
var statearr_24893_24967 = state_24845__$1;
(statearr_24893_24967[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (34))){
var inst_24814 = (state_24845[(2)]);
var state_24845__$1 = state_24845;
if(cljs.core.truth_(inst_24814)){
var statearr_24894_24968 = state_24845__$1;
(statearr_24894_24968[(1)] = (38));

} else {
var statearr_24895_24969 = state_24845__$1;
(statearr_24895_24969[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (17))){
var state_24845__$1 = state_24845;
var statearr_24896_24970 = state_24845__$1;
(statearr_24896_24970[(2)] = recompile_dependents);

(statearr_24896_24970[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (3))){
var state_24845__$1 = state_24845;
var statearr_24897_24971 = state_24845__$1;
(statearr_24897_24971[(2)] = null);

(statearr_24897_24971[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (12))){
var inst_24736 = (state_24845[(2)]);
var state_24845__$1 = state_24845;
var statearr_24898_24972 = state_24845__$1;
(statearr_24898_24972[(2)] = inst_24736);

(statearr_24898_24972[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (2))){
var inst_24698 = (state_24845[(13)]);
var inst_24705 = cljs.core.seq.call(null,inst_24698);
var inst_24706 = inst_24705;
var inst_24707 = null;
var inst_24708 = (0);
var inst_24709 = (0);
var state_24845__$1 = (function (){var statearr_24899 = state_24845;
(statearr_24899[(7)] = inst_24708);

(statearr_24899[(8)] = inst_24706);

(statearr_24899[(9)] = inst_24707);

(statearr_24899[(10)] = inst_24709);

return statearr_24899;
})();
var statearr_24900_24973 = state_24845__$1;
(statearr_24900_24973[(2)] = null);

(statearr_24900_24973[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (23))){
var inst_24759 = (state_24845[(19)]);
var inst_24762 = (state_24845[(23)]);
var inst_24763 = (state_24845[(24)]);
var inst_24765 = (state_24845[(26)]);
var inst_24767 = (state_24845[(25)]);
var inst_24770 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_24772 = (function (){var all_files = inst_24759;
var res_SINGLEQUOTE_ = inst_24762;
var res = inst_24763;
var files_not_loaded = inst_24765;
var dependencies_that_loaded = inst_24767;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24759,inst_24762,inst_24763,inst_24765,inst_24767,inst_24770,state_val_24846,c__19639__auto__,map__24691,map__24691__$1,opts,before_jsload,on_jsload,reload_dependents,map__24692,map__24692__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24771){
var map__24901 = p__24771;
var map__24901__$1 = ((((!((map__24901 == null)))?((((map__24901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24901):map__24901);
var request_url = cljs.core.get.call(null,map__24901__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24759,inst_24762,inst_24763,inst_24765,inst_24767,inst_24770,state_val_24846,c__19639__auto__,map__24691,map__24691__$1,opts,before_jsload,on_jsload,reload_dependents,map__24692,map__24692__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24773 = cljs.core.reverse.call(null,inst_24767);
var inst_24774 = cljs.core.map.call(null,inst_24772,inst_24773);
var inst_24775 = cljs.core.pr_str.call(null,inst_24774);
var inst_24776 = figwheel.client.utils.log.call(null,inst_24775);
var state_24845__$1 = (function (){var statearr_24903 = state_24845;
(statearr_24903[(31)] = inst_24770);

return statearr_24903;
})();
var statearr_24904_24974 = state_24845__$1;
(statearr_24904_24974[(2)] = inst_24776);

(statearr_24904_24974[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (35))){
var state_24845__$1 = state_24845;
var statearr_24905_24975 = state_24845__$1;
(statearr_24905_24975[(2)] = true);

(statearr_24905_24975[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (19))){
var inst_24749 = (state_24845[(12)]);
var inst_24755 = figwheel.client.file_reloading.expand_files.call(null,inst_24749);
var state_24845__$1 = state_24845;
var statearr_24906_24976 = state_24845__$1;
(statearr_24906_24976[(2)] = inst_24755);

(statearr_24906_24976[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (11))){
var state_24845__$1 = state_24845;
var statearr_24907_24977 = state_24845__$1;
(statearr_24907_24977[(2)] = null);

(statearr_24907_24977[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (9))){
var inst_24738 = (state_24845[(2)]);
var state_24845__$1 = state_24845;
var statearr_24908_24978 = state_24845__$1;
(statearr_24908_24978[(2)] = inst_24738);

(statearr_24908_24978[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (5))){
var inst_24708 = (state_24845[(7)]);
var inst_24709 = (state_24845[(10)]);
var inst_24711 = (inst_24709 < inst_24708);
var inst_24712 = inst_24711;
var state_24845__$1 = state_24845;
if(cljs.core.truth_(inst_24712)){
var statearr_24909_24979 = state_24845__$1;
(statearr_24909_24979[(1)] = (7));

} else {
var statearr_24910_24980 = state_24845__$1;
(statearr_24910_24980[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (14))){
var inst_24719 = (state_24845[(22)]);
var inst_24728 = cljs.core.first.call(null,inst_24719);
var inst_24729 = figwheel.client.file_reloading.eval_body.call(null,inst_24728,opts);
var inst_24730 = cljs.core.next.call(null,inst_24719);
var inst_24706 = inst_24730;
var inst_24707 = null;
var inst_24708 = (0);
var inst_24709 = (0);
var state_24845__$1 = (function (){var statearr_24911 = state_24845;
(statearr_24911[(7)] = inst_24708);

(statearr_24911[(8)] = inst_24706);

(statearr_24911[(9)] = inst_24707);

(statearr_24911[(32)] = inst_24729);

(statearr_24911[(10)] = inst_24709);

return statearr_24911;
})();
var statearr_24912_24981 = state_24845__$1;
(statearr_24912_24981[(2)] = null);

(statearr_24912_24981[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (45))){
var state_24845__$1 = state_24845;
var statearr_24913_24982 = state_24845__$1;
(statearr_24913_24982[(2)] = null);

(statearr_24913_24982[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (26))){
var inst_24759 = (state_24845[(19)]);
var inst_24762 = (state_24845[(23)]);
var inst_24763 = (state_24845[(24)]);
var inst_24765 = (state_24845[(26)]);
var inst_24767 = (state_24845[(25)]);
var inst_24782 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_24784 = (function (){var all_files = inst_24759;
var res_SINGLEQUOTE_ = inst_24762;
var res = inst_24763;
var files_not_loaded = inst_24765;
var dependencies_that_loaded = inst_24767;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24759,inst_24762,inst_24763,inst_24765,inst_24767,inst_24782,state_val_24846,c__19639__auto__,map__24691,map__24691__$1,opts,before_jsload,on_jsload,reload_dependents,map__24692,map__24692__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24783){
var map__24914 = p__24783;
var map__24914__$1 = ((((!((map__24914 == null)))?((((map__24914.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24914.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24914):map__24914);
var namespace = cljs.core.get.call(null,map__24914__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__24914__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24759,inst_24762,inst_24763,inst_24765,inst_24767,inst_24782,state_val_24846,c__19639__auto__,map__24691,map__24691__$1,opts,before_jsload,on_jsload,reload_dependents,map__24692,map__24692__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24785 = cljs.core.map.call(null,inst_24784,inst_24763);
var inst_24786 = cljs.core.pr_str.call(null,inst_24785);
var inst_24787 = figwheel.client.utils.log.call(null,inst_24786);
var inst_24788 = (function (){var all_files = inst_24759;
var res_SINGLEQUOTE_ = inst_24762;
var res = inst_24763;
var files_not_loaded = inst_24765;
var dependencies_that_loaded = inst_24767;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24759,inst_24762,inst_24763,inst_24765,inst_24767,inst_24782,inst_24784,inst_24785,inst_24786,inst_24787,state_val_24846,c__19639__auto__,map__24691,map__24691__$1,opts,before_jsload,on_jsload,reload_dependents,map__24692,map__24692__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24759,inst_24762,inst_24763,inst_24765,inst_24767,inst_24782,inst_24784,inst_24785,inst_24786,inst_24787,state_val_24846,c__19639__auto__,map__24691,map__24691__$1,opts,before_jsload,on_jsload,reload_dependents,map__24692,map__24692__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24789 = setTimeout(inst_24788,(10));
var state_24845__$1 = (function (){var statearr_24916 = state_24845;
(statearr_24916[(33)] = inst_24782);

(statearr_24916[(34)] = inst_24787);

return statearr_24916;
})();
var statearr_24917_24983 = state_24845__$1;
(statearr_24917_24983[(2)] = inst_24789);

(statearr_24917_24983[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (16))){
var state_24845__$1 = state_24845;
var statearr_24918_24984 = state_24845__$1;
(statearr_24918_24984[(2)] = reload_dependents);

(statearr_24918_24984[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (38))){
var inst_24799 = (state_24845[(16)]);
var inst_24816 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24799);
var state_24845__$1 = state_24845;
var statearr_24919_24985 = state_24845__$1;
(statearr_24919_24985[(2)] = inst_24816);

(statearr_24919_24985[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (30))){
var state_24845__$1 = state_24845;
var statearr_24920_24986 = state_24845__$1;
(statearr_24920_24986[(2)] = null);

(statearr_24920_24986[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (10))){
var inst_24719 = (state_24845[(22)]);
var inst_24721 = cljs.core.chunked_seq_QMARK_.call(null,inst_24719);
var state_24845__$1 = state_24845;
if(inst_24721){
var statearr_24921_24987 = state_24845__$1;
(statearr_24921_24987[(1)] = (13));

} else {
var statearr_24922_24988 = state_24845__$1;
(statearr_24922_24988[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (18))){
var inst_24753 = (state_24845[(2)]);
var state_24845__$1 = state_24845;
if(cljs.core.truth_(inst_24753)){
var statearr_24923_24989 = state_24845__$1;
(statearr_24923_24989[(1)] = (19));

} else {
var statearr_24924_24990 = state_24845__$1;
(statearr_24924_24990[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (42))){
var state_24845__$1 = state_24845;
var statearr_24925_24991 = state_24845__$1;
(statearr_24925_24991[(2)] = null);

(statearr_24925_24991[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (37))){
var inst_24811 = (state_24845[(2)]);
var state_24845__$1 = state_24845;
var statearr_24926_24992 = state_24845__$1;
(statearr_24926_24992[(2)] = inst_24811);

(statearr_24926_24992[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (8))){
var inst_24706 = (state_24845[(8)]);
var inst_24719 = (state_24845[(22)]);
var inst_24719__$1 = cljs.core.seq.call(null,inst_24706);
var state_24845__$1 = (function (){var statearr_24927 = state_24845;
(statearr_24927[(22)] = inst_24719__$1);

return statearr_24927;
})();
if(inst_24719__$1){
var statearr_24928_24993 = state_24845__$1;
(statearr_24928_24993[(1)] = (10));

} else {
var statearr_24929_24994 = state_24845__$1;
(statearr_24929_24994[(1)] = (11));

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
});})(c__19639__auto__,map__24691,map__24691__$1,opts,before_jsload,on_jsload,reload_dependents,map__24692,map__24692__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19618__auto__,c__19639__auto__,map__24691,map__24691__$1,opts,before_jsload,on_jsload,reload_dependents,map__24692,map__24692__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19619__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19619__auto____0 = (function (){
var statearr_24933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24933[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19619__auto__);

(statearr_24933[(1)] = (1));

return statearr_24933;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19619__auto____1 = (function (state_24845){
while(true){
var ret_value__19620__auto__ = (function (){try{while(true){
var result__19621__auto__ = switch__19618__auto__.call(null,state_24845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19621__auto__;
}
break;
}
}catch (e24934){if((e24934 instanceof Object)){
var ex__19622__auto__ = e24934;
var statearr_24935_24995 = state_24845;
(statearr_24935_24995[(5)] = ex__19622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24996 = state_24845;
state_24845 = G__24996;
continue;
} else {
return ret_value__19620__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19619__auto__ = function(state_24845){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19619__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19619__auto____1.call(this,state_24845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19619__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19619__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19619__auto__;
})()
;})(switch__19618__auto__,c__19639__auto__,map__24691,map__24691__$1,opts,before_jsload,on_jsload,reload_dependents,map__24692,map__24692__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19641__auto__ = (function (){var statearr_24936 = f__19640__auto__.call(null);
(statearr_24936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19639__auto__);

return statearr_24936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19641__auto__);
});})(c__19639__auto__,map__24691,map__24691__$1,opts,before_jsload,on_jsload,reload_dependents,map__24692,map__24692__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19639__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__24999,link){
var map__25002 = p__24999;
var map__25002__$1 = ((((!((map__25002 == null)))?((((map__25002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25002):map__25002);
var file = cljs.core.get.call(null,map__25002__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__25002,map__25002__$1,file){
return (function (p1__24997_SHARP_,p2__24998_SHARP_){
if(cljs.core._EQ_.call(null,p1__24997_SHARP_,p2__24998_SHARP_)){
return p1__24997_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__25002,map__25002__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25008){
var map__25009 = p__25008;
var map__25009__$1 = ((((!((map__25009 == null)))?((((map__25009.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25009.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25009):map__25009);
var match_length = cljs.core.get.call(null,map__25009__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25009__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25004_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25004_SHARP_);
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
var args25011 = [];
var len__17416__auto___25014 = arguments.length;
var i__17417__auto___25015 = (0);
while(true){
if((i__17417__auto___25015 < len__17416__auto___25014)){
args25011.push((arguments[i__17417__auto___25015]));

var G__25016 = (i__17417__auto___25015 + (1));
i__17417__auto___25015 = G__25016;
continue;
} else {
}
break;
}

var G__25013 = args25011.length;
switch (G__25013) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25011.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25018_SHARP_,p2__25019_SHARP_){
return cljs.core.assoc.call(null,p1__25018_SHARP_,cljs.core.get.call(null,p2__25019_SHARP_,key),p2__25019_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25020){
var map__25023 = p__25020;
var map__25023__$1 = ((((!((map__25023 == null)))?((((map__25023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25023):map__25023);
var f_data = map__25023__$1;
var file = cljs.core.get.call(null,map__25023__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25025,files_msg){
var map__25032 = p__25025;
var map__25032__$1 = ((((!((map__25032 == null)))?((((map__25032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25032):map__25032);
var opts = map__25032__$1;
var on_cssload = cljs.core.get.call(null,map__25032__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25034_25038 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25035_25039 = null;
var count__25036_25040 = (0);
var i__25037_25041 = (0);
while(true){
if((i__25037_25041 < count__25036_25040)){
var f_25042 = cljs.core._nth.call(null,chunk__25035_25039,i__25037_25041);
figwheel.client.file_reloading.reload_css_file.call(null,f_25042);

var G__25043 = seq__25034_25038;
var G__25044 = chunk__25035_25039;
var G__25045 = count__25036_25040;
var G__25046 = (i__25037_25041 + (1));
seq__25034_25038 = G__25043;
chunk__25035_25039 = G__25044;
count__25036_25040 = G__25045;
i__25037_25041 = G__25046;
continue;
} else {
var temp__4425__auto___25047 = cljs.core.seq.call(null,seq__25034_25038);
if(temp__4425__auto___25047){
var seq__25034_25048__$1 = temp__4425__auto___25047;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25034_25048__$1)){
var c__17161__auto___25049 = cljs.core.chunk_first.call(null,seq__25034_25048__$1);
var G__25050 = cljs.core.chunk_rest.call(null,seq__25034_25048__$1);
var G__25051 = c__17161__auto___25049;
var G__25052 = cljs.core.count.call(null,c__17161__auto___25049);
var G__25053 = (0);
seq__25034_25038 = G__25050;
chunk__25035_25039 = G__25051;
count__25036_25040 = G__25052;
i__25037_25041 = G__25053;
continue;
} else {
var f_25054 = cljs.core.first.call(null,seq__25034_25048__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25054);

var G__25055 = cljs.core.next.call(null,seq__25034_25048__$1);
var G__25056 = null;
var G__25057 = (0);
var G__25058 = (0);
seq__25034_25038 = G__25055;
chunk__25035_25039 = G__25056;
count__25036_25040 = G__25057;
i__25037_25041 = G__25058;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25032,map__25032__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25032,map__25032__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1521783862161