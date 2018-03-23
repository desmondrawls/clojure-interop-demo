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
var seq__26684_26698 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26685_26699 = null;
var count__26686_26700 = (0);
var i__26687_26701 = (0);
while(true){
if((i__26687_26701 < count__26686_26700)){
var f_26702 = cljs.core._nth.call(null,chunk__26685_26699,i__26687_26701);
cljs.core.println.call(null,"  ",f_26702);

var G__26703 = seq__26684_26698;
var G__26704 = chunk__26685_26699;
var G__26705 = count__26686_26700;
var G__26706 = (i__26687_26701 + (1));
seq__26684_26698 = G__26703;
chunk__26685_26699 = G__26704;
count__26686_26700 = G__26705;
i__26687_26701 = G__26706;
continue;
} else {
var temp__4425__auto___26707 = cljs.core.seq.call(null,seq__26684_26698);
if(temp__4425__auto___26707){
var seq__26684_26708__$1 = temp__4425__auto___26707;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26684_26708__$1)){
var c__17161__auto___26709 = cljs.core.chunk_first.call(null,seq__26684_26708__$1);
var G__26710 = cljs.core.chunk_rest.call(null,seq__26684_26708__$1);
var G__26711 = c__17161__auto___26709;
var G__26712 = cljs.core.count.call(null,c__17161__auto___26709);
var G__26713 = (0);
seq__26684_26698 = G__26710;
chunk__26685_26699 = G__26711;
count__26686_26700 = G__26712;
i__26687_26701 = G__26713;
continue;
} else {
var f_26714 = cljs.core.first.call(null,seq__26684_26708__$1);
cljs.core.println.call(null,"  ",f_26714);

var G__26715 = cljs.core.next.call(null,seq__26684_26708__$1);
var G__26716 = null;
var G__26717 = (0);
var G__26718 = (0);
seq__26684_26698 = G__26715;
chunk__26685_26699 = G__26716;
count__26686_26700 = G__26717;
i__26687_26701 = G__26718;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26719 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16358__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26719);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26719)))?cljs.core.second.call(null,arglists_26719):arglists_26719));
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
var seq__26688 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26689 = null;
var count__26690 = (0);
var i__26691 = (0);
while(true){
if((i__26691 < count__26690)){
var vec__26692 = cljs.core._nth.call(null,chunk__26689,i__26691);
var name = cljs.core.nth.call(null,vec__26692,(0),null);
var map__26693 = cljs.core.nth.call(null,vec__26692,(1),null);
var map__26693__$1 = ((((!((map__26693 == null)))?((((map__26693.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26693.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26693):map__26693);
var doc = cljs.core.get.call(null,map__26693__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26693__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26720 = seq__26688;
var G__26721 = chunk__26689;
var G__26722 = count__26690;
var G__26723 = (i__26691 + (1));
seq__26688 = G__26720;
chunk__26689 = G__26721;
count__26690 = G__26722;
i__26691 = G__26723;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26688);
if(temp__4425__auto__){
var seq__26688__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26688__$1)){
var c__17161__auto__ = cljs.core.chunk_first.call(null,seq__26688__$1);
var G__26724 = cljs.core.chunk_rest.call(null,seq__26688__$1);
var G__26725 = c__17161__auto__;
var G__26726 = cljs.core.count.call(null,c__17161__auto__);
var G__26727 = (0);
seq__26688 = G__26724;
chunk__26689 = G__26725;
count__26690 = G__26726;
i__26691 = G__26727;
continue;
} else {
var vec__26695 = cljs.core.first.call(null,seq__26688__$1);
var name = cljs.core.nth.call(null,vec__26695,(0),null);
var map__26696 = cljs.core.nth.call(null,vec__26695,(1),null);
var map__26696__$1 = ((((!((map__26696 == null)))?((((map__26696.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26696.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26696):map__26696);
var doc = cljs.core.get.call(null,map__26696__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26696__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26728 = cljs.core.next.call(null,seq__26688__$1);
var G__26729 = null;
var G__26730 = (0);
var G__26731 = (0);
seq__26688 = G__26728;
chunk__26689 = G__26729;
count__26690 = G__26730;
i__26691 = G__26731;
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

//# sourceMappingURL=repl.js.map?rel=1521786014098