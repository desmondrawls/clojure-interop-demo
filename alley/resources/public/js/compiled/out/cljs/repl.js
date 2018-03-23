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
var seq__34786_34800 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34787_34801 = null;
var count__34788_34802 = (0);
var i__34789_34803 = (0);
while(true){
if((i__34789_34803 < count__34788_34802)){
var f_34804 = cljs.core._nth.call(null,chunk__34787_34801,i__34789_34803);
cljs.core.println.call(null,"  ",f_34804);

var G__34805 = seq__34786_34800;
var G__34806 = chunk__34787_34801;
var G__34807 = count__34788_34802;
var G__34808 = (i__34789_34803 + (1));
seq__34786_34800 = G__34805;
chunk__34787_34801 = G__34806;
count__34788_34802 = G__34807;
i__34789_34803 = G__34808;
continue;
} else {
var temp__4425__auto___34809 = cljs.core.seq.call(null,seq__34786_34800);
if(temp__4425__auto___34809){
var seq__34786_34810__$1 = temp__4425__auto___34809;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34786_34810__$1)){
var c__17161__auto___34811 = cljs.core.chunk_first.call(null,seq__34786_34810__$1);
var G__34812 = cljs.core.chunk_rest.call(null,seq__34786_34810__$1);
var G__34813 = c__17161__auto___34811;
var G__34814 = cljs.core.count.call(null,c__17161__auto___34811);
var G__34815 = (0);
seq__34786_34800 = G__34812;
chunk__34787_34801 = G__34813;
count__34788_34802 = G__34814;
i__34789_34803 = G__34815;
continue;
} else {
var f_34816 = cljs.core.first.call(null,seq__34786_34810__$1);
cljs.core.println.call(null,"  ",f_34816);

var G__34817 = cljs.core.next.call(null,seq__34786_34810__$1);
var G__34818 = null;
var G__34819 = (0);
var G__34820 = (0);
seq__34786_34800 = G__34817;
chunk__34787_34801 = G__34818;
count__34788_34802 = G__34819;
i__34789_34803 = G__34820;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34821 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16358__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_34821);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_34821)))?cljs.core.second.call(null,arglists_34821):arglists_34821));
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
var seq__34790 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34791 = null;
var count__34792 = (0);
var i__34793 = (0);
while(true){
if((i__34793 < count__34792)){
var vec__34794 = cljs.core._nth.call(null,chunk__34791,i__34793);
var name = cljs.core.nth.call(null,vec__34794,(0),null);
var map__34795 = cljs.core.nth.call(null,vec__34794,(1),null);
var map__34795__$1 = ((((!((map__34795 == null)))?((((map__34795.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34795.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34795):map__34795);
var doc = cljs.core.get.call(null,map__34795__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__34795__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__34822 = seq__34790;
var G__34823 = chunk__34791;
var G__34824 = count__34792;
var G__34825 = (i__34793 + (1));
seq__34790 = G__34822;
chunk__34791 = G__34823;
count__34792 = G__34824;
i__34793 = G__34825;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__34790);
if(temp__4425__auto__){
var seq__34790__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34790__$1)){
var c__17161__auto__ = cljs.core.chunk_first.call(null,seq__34790__$1);
var G__34826 = cljs.core.chunk_rest.call(null,seq__34790__$1);
var G__34827 = c__17161__auto__;
var G__34828 = cljs.core.count.call(null,c__17161__auto__);
var G__34829 = (0);
seq__34790 = G__34826;
chunk__34791 = G__34827;
count__34792 = G__34828;
i__34793 = G__34829;
continue;
} else {
var vec__34797 = cljs.core.first.call(null,seq__34790__$1);
var name = cljs.core.nth.call(null,vec__34797,(0),null);
var map__34798 = cljs.core.nth.call(null,vec__34797,(1),null);
var map__34798__$1 = ((((!((map__34798 == null)))?((((map__34798.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34798.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34798):map__34798);
var doc = cljs.core.get.call(null,map__34798__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__34798__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__34830 = cljs.core.next.call(null,seq__34790__$1);
var G__34831 = null;
var G__34832 = (0);
var G__34833 = (0);
seq__34790 = G__34830;
chunk__34791 = G__34831;
count__34792 = G__34832;
i__34793 = G__34833;
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

//# sourceMappingURL=repl.js.map?rel=1521787227016