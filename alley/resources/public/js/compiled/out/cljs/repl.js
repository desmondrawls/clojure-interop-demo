// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23999_24013 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24000_24014 = null;
var count__24001_24015 = (0);
var i__24002_24016 = (0);
while(true){
if((i__24002_24016 < count__24001_24015)){
var f_24017 = cljs.core._nth.call(null,chunk__24000_24014,i__24002_24016);
cljs.core.println.call(null,"  ",f_24017);

var G__24018 = seq__23999_24013;
var G__24019 = chunk__24000_24014;
var G__24020 = count__24001_24015;
var G__24021 = (i__24002_24016 + (1));
seq__23999_24013 = G__24018;
chunk__24000_24014 = G__24019;
count__24001_24015 = G__24020;
i__24002_24016 = G__24021;
continue;
} else {
var temp__4425__auto___24022 = cljs.core.seq.call(null,seq__23999_24013);
if(temp__4425__auto___24022){
var seq__23999_24023__$1 = temp__4425__auto___24022;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23999_24023__$1)){
var c__17161__auto___24024 = cljs.core.chunk_first.call(null,seq__23999_24023__$1);
var G__24025 = cljs.core.chunk_rest.call(null,seq__23999_24023__$1);
var G__24026 = c__17161__auto___24024;
var G__24027 = cljs.core.count.call(null,c__17161__auto___24024);
var G__24028 = (0);
seq__23999_24013 = G__24025;
chunk__24000_24014 = G__24026;
count__24001_24015 = G__24027;
i__24002_24016 = G__24028;
continue;
} else {
var f_24029 = cljs.core.first.call(null,seq__23999_24023__$1);
cljs.core.println.call(null,"  ",f_24029);

var G__24030 = cljs.core.next.call(null,seq__23999_24023__$1);
var G__24031 = null;
var G__24032 = (0);
var G__24033 = (0);
seq__23999_24013 = G__24030;
chunk__24000_24014 = G__24031;
count__24001_24015 = G__24032;
i__24002_24016 = G__24033;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24034 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16358__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24034);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24034)))?cljs.core.second.call(null,arglists_24034):arglists_24034));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24003 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24004 = null;
var count__24005 = (0);
var i__24006 = (0);
while(true){
if((i__24006 < count__24005)){
var vec__24007 = cljs.core._nth.call(null,chunk__24004,i__24006);
var name = cljs.core.nth.call(null,vec__24007,(0),null);
var map__24008 = cljs.core.nth.call(null,vec__24007,(1),null);
var map__24008__$1 = ((((!((map__24008 == null)))?((((map__24008.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24008.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24008):map__24008);
var doc = cljs.core.get.call(null,map__24008__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24008__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24035 = seq__24003;
var G__24036 = chunk__24004;
var G__24037 = count__24005;
var G__24038 = (i__24006 + (1));
seq__24003 = G__24035;
chunk__24004 = G__24036;
count__24005 = G__24037;
i__24006 = G__24038;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24003);
if(temp__4425__auto__){
var seq__24003__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24003__$1)){
var c__17161__auto__ = cljs.core.chunk_first.call(null,seq__24003__$1);
var G__24039 = cljs.core.chunk_rest.call(null,seq__24003__$1);
var G__24040 = c__17161__auto__;
var G__24041 = cljs.core.count.call(null,c__17161__auto__);
var G__24042 = (0);
seq__24003 = G__24039;
chunk__24004 = G__24040;
count__24005 = G__24041;
i__24006 = G__24042;
continue;
} else {
var vec__24010 = cljs.core.first.call(null,seq__24003__$1);
var name = cljs.core.nth.call(null,vec__24010,(0),null);
var map__24011 = cljs.core.nth.call(null,vec__24010,(1),null);
var map__24011__$1 = ((((!((map__24011 == null)))?((((map__24011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24011):map__24011);
var doc = cljs.core.get.call(null,map__24011__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24011__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24043 = cljs.core.next.call(null,seq__24003__$1);
var G__24044 = null;
var G__24045 = (0);
var G__24046 = (0);
seq__24003 = G__24043;
chunk__24004 = G__24044;
count__24005 = G__24045;
i__24006 = G__24046;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1521783861628