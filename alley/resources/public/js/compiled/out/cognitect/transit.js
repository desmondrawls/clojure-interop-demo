// Compiled by ClojureScript 1.7.145 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__32838_32842 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__32839_32843 = null;
var count__32840_32844 = (0);
var i__32841_32845 = (0);
while(true){
if((i__32841_32845 < count__32840_32844)){
var k_32846 = cljs.core._nth.call(null,chunk__32839_32843,i__32841_32845);
var v_32847 = (b[k_32846]);
(a[k_32846] = v_32847);

var G__32848 = seq__32838_32842;
var G__32849 = chunk__32839_32843;
var G__32850 = count__32840_32844;
var G__32851 = (i__32841_32845 + (1));
seq__32838_32842 = G__32848;
chunk__32839_32843 = G__32849;
count__32840_32844 = G__32850;
i__32841_32845 = G__32851;
continue;
} else {
var temp__4425__auto___32852 = cljs.core.seq.call(null,seq__32838_32842);
if(temp__4425__auto___32852){
var seq__32838_32853__$1 = temp__4425__auto___32852;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32838_32853__$1)){
var c__17161__auto___32854 = cljs.core.chunk_first.call(null,seq__32838_32853__$1);
var G__32855 = cljs.core.chunk_rest.call(null,seq__32838_32853__$1);
var G__32856 = c__17161__auto___32854;
var G__32857 = cljs.core.count.call(null,c__17161__auto___32854);
var G__32858 = (0);
seq__32838_32842 = G__32855;
chunk__32839_32843 = G__32856;
count__32840_32844 = G__32857;
i__32841_32845 = G__32858;
continue;
} else {
var k_32859 = cljs.core.first.call(null,seq__32838_32853__$1);
var v_32860 = (b[k_32859]);
(a[k_32859] = v_32860);

var G__32861 = cljs.core.next.call(null,seq__32838_32853__$1);
var G__32862 = null;
var G__32863 = (0);
var G__32864 = (0);
seq__32838_32842 = G__32861;
chunk__32839_32843 = G__32862;
count__32840_32844 = G__32863;
i__32841_32845 = G__32864;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args32865 = [];
var len__17416__auto___32868 = arguments.length;
var i__17417__auto___32869 = (0);
while(true){
if((i__17417__auto___32869 < len__17416__auto___32868)){
args32865.push((arguments[i__17417__auto___32869]));

var G__32870 = (i__17417__auto___32869 + (1));
i__17417__auto___32869 = G__32870;
continue;
} else {
}
break;
}

var G__32867 = args32865.length;
switch (G__32867) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32865.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__32872 = (i + (2));
var G__32873 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__32872;
ret = G__32873;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__32874_32878 = cljs.core.seq.call(null,v);
var chunk__32875_32879 = null;
var count__32876_32880 = (0);
var i__32877_32881 = (0);
while(true){
if((i__32877_32881 < count__32876_32880)){
var x_32882 = cljs.core._nth.call(null,chunk__32875_32879,i__32877_32881);
ret.push(x_32882);

var G__32883 = seq__32874_32878;
var G__32884 = chunk__32875_32879;
var G__32885 = count__32876_32880;
var G__32886 = (i__32877_32881 + (1));
seq__32874_32878 = G__32883;
chunk__32875_32879 = G__32884;
count__32876_32880 = G__32885;
i__32877_32881 = G__32886;
continue;
} else {
var temp__4425__auto___32887 = cljs.core.seq.call(null,seq__32874_32878);
if(temp__4425__auto___32887){
var seq__32874_32888__$1 = temp__4425__auto___32887;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32874_32888__$1)){
var c__17161__auto___32889 = cljs.core.chunk_first.call(null,seq__32874_32888__$1);
var G__32890 = cljs.core.chunk_rest.call(null,seq__32874_32888__$1);
var G__32891 = c__17161__auto___32889;
var G__32892 = cljs.core.count.call(null,c__17161__auto___32889);
var G__32893 = (0);
seq__32874_32878 = G__32890;
chunk__32875_32879 = G__32891;
count__32876_32880 = G__32892;
i__32877_32881 = G__32893;
continue;
} else {
var x_32894 = cljs.core.first.call(null,seq__32874_32888__$1);
ret.push(x_32894);

var G__32895 = cljs.core.next.call(null,seq__32874_32888__$1);
var G__32896 = null;
var G__32897 = (0);
var G__32898 = (0);
seq__32874_32878 = G__32895;
chunk__32875_32879 = G__32896;
count__32876_32880 = G__32897;
i__32877_32881 = G__32898;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__32899_32903 = cljs.core.seq.call(null,v);
var chunk__32900_32904 = null;
var count__32901_32905 = (0);
var i__32902_32906 = (0);
while(true){
if((i__32902_32906 < count__32901_32905)){
var x_32907 = cljs.core._nth.call(null,chunk__32900_32904,i__32902_32906);
ret.push(x_32907);

var G__32908 = seq__32899_32903;
var G__32909 = chunk__32900_32904;
var G__32910 = count__32901_32905;
var G__32911 = (i__32902_32906 + (1));
seq__32899_32903 = G__32908;
chunk__32900_32904 = G__32909;
count__32901_32905 = G__32910;
i__32902_32906 = G__32911;
continue;
} else {
var temp__4425__auto___32912 = cljs.core.seq.call(null,seq__32899_32903);
if(temp__4425__auto___32912){
var seq__32899_32913__$1 = temp__4425__auto___32912;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32899_32913__$1)){
var c__17161__auto___32914 = cljs.core.chunk_first.call(null,seq__32899_32913__$1);
var G__32915 = cljs.core.chunk_rest.call(null,seq__32899_32913__$1);
var G__32916 = c__17161__auto___32914;
var G__32917 = cljs.core.count.call(null,c__17161__auto___32914);
var G__32918 = (0);
seq__32899_32903 = G__32915;
chunk__32900_32904 = G__32916;
count__32901_32905 = G__32917;
i__32902_32906 = G__32918;
continue;
} else {
var x_32919 = cljs.core.first.call(null,seq__32899_32913__$1);
ret.push(x_32919);

var G__32920 = cljs.core.next.call(null,seq__32899_32913__$1);
var G__32921 = null;
var G__32922 = (0);
var G__32923 = (0);
seq__32899_32903 = G__32920;
chunk__32900_32904 = G__32921;
count__32901_32905 = G__32922;
i__32902_32906 = G__32923;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__32924_32928 = cljs.core.seq.call(null,v);
var chunk__32925_32929 = null;
var count__32926_32930 = (0);
var i__32927_32931 = (0);
while(true){
if((i__32927_32931 < count__32926_32930)){
var x_32932 = cljs.core._nth.call(null,chunk__32925_32929,i__32927_32931);
ret.push(x_32932);

var G__32933 = seq__32924_32928;
var G__32934 = chunk__32925_32929;
var G__32935 = count__32926_32930;
var G__32936 = (i__32927_32931 + (1));
seq__32924_32928 = G__32933;
chunk__32925_32929 = G__32934;
count__32926_32930 = G__32935;
i__32927_32931 = G__32936;
continue;
} else {
var temp__4425__auto___32937 = cljs.core.seq.call(null,seq__32924_32928);
if(temp__4425__auto___32937){
var seq__32924_32938__$1 = temp__4425__auto___32937;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32924_32938__$1)){
var c__17161__auto___32939 = cljs.core.chunk_first.call(null,seq__32924_32938__$1);
var G__32940 = cljs.core.chunk_rest.call(null,seq__32924_32938__$1);
var G__32941 = c__17161__auto___32939;
var G__32942 = cljs.core.count.call(null,c__17161__auto___32939);
var G__32943 = (0);
seq__32924_32928 = G__32940;
chunk__32925_32929 = G__32941;
count__32926_32930 = G__32942;
i__32927_32931 = G__32943;
continue;
} else {
var x_32944 = cljs.core.first.call(null,seq__32924_32938__$1);
ret.push(x_32944);

var G__32945 = cljs.core.next.call(null,seq__32924_32938__$1);
var G__32946 = null;
var G__32947 = (0);
var G__32948 = (0);
seq__32924_32928 = G__32945;
chunk__32925_32929 = G__32946;
count__32926_32930 = G__32947;
i__32927_32931 = G__32948;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args32949 = [];
var len__17416__auto___32960 = arguments.length;
var i__17417__auto___32961 = (0);
while(true){
if((i__17417__auto___32961 < len__17416__auto___32960)){
args32949.push((arguments[i__17417__auto___32961]));

var G__32962 = (i__17417__auto___32961 + (1));
i__17417__auto___32961 = G__32962;
continue;
} else {
}
break;
}

var G__32951 = args32949.length;
switch (G__32951) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32949.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__32952 = obj;
G__32952.push(kfn.call(null,k),vfn.call(null,v));

return G__32952;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x32953 = cljs.core.clone.call(null,handlers);
x32953.forEach = ((function (x32953,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__32954 = cljs.core.seq.call(null,coll);
var chunk__32955 = null;
var count__32956 = (0);
var i__32957 = (0);
while(true){
if((i__32957 < count__32956)){
var vec__32958 = cljs.core._nth.call(null,chunk__32955,i__32957);
var k = cljs.core.nth.call(null,vec__32958,(0),null);
var v = cljs.core.nth.call(null,vec__32958,(1),null);
f.call(null,v,k);

var G__32964 = seq__32954;
var G__32965 = chunk__32955;
var G__32966 = count__32956;
var G__32967 = (i__32957 + (1));
seq__32954 = G__32964;
chunk__32955 = G__32965;
count__32956 = G__32966;
i__32957 = G__32967;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__32954);
if(temp__4425__auto__){
var seq__32954__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32954__$1)){
var c__17161__auto__ = cljs.core.chunk_first.call(null,seq__32954__$1);
var G__32968 = cljs.core.chunk_rest.call(null,seq__32954__$1);
var G__32969 = c__17161__auto__;
var G__32970 = cljs.core.count.call(null,c__17161__auto__);
var G__32971 = (0);
seq__32954 = G__32968;
chunk__32955 = G__32969;
count__32956 = G__32970;
i__32957 = G__32971;
continue;
} else {
var vec__32959 = cljs.core.first.call(null,seq__32954__$1);
var k = cljs.core.nth.call(null,vec__32959,(0),null);
var v = cljs.core.nth.call(null,vec__32959,(1),null);
f.call(null,v,k);

var G__32972 = cljs.core.next.call(null,seq__32954__$1);
var G__32973 = null;
var G__32974 = (0);
var G__32975 = (0);
seq__32954 = G__32972;
chunk__32955 = G__32973;
count__32956 = G__32974;
i__32957 = G__32975;
continue;
}
} else {
return null;
}
}
break;
}
});})(x32953,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x32953;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args32976 = [];
var len__17416__auto___32982 = arguments.length;
var i__17417__auto___32983 = (0);
while(true){
if((i__17417__auto___32983 < len__17416__auto___32982)){
args32976.push((arguments[i__17417__auto___32983]));

var G__32984 = (i__17417__auto___32983 + (1));
i__17417__auto___32983 = G__32984;
continue;
} else {
}
break;
}

var G__32978 = args32976.length;
switch (G__32978) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32976.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit32979 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit32979 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta32980){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta32980 = meta32980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit32979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32981,meta32980__$1){
var self__ = this;
var _32981__$1 = this;
return (new cognitect.transit.t_cognitect$transit32979(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta32980__$1));
});

cognitect.transit.t_cognitect$transit32979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32981){
var self__ = this;
var _32981__$1 = this;
return self__.meta32980;
});

cognitect.transit.t_cognitect$transit32979.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit32979.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit32979.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit32979.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit32979.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta32980","meta32980",-384738779,null)], null);
});

cognitect.transit.t_cognitect$transit32979.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit32979.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit32979";

cognitect.transit.t_cognitect$transit32979.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cognitect.transit/t_cognitect$transit32979");
});

cognitect.transit.__GT_t_cognitect$transit32979 = (function cognitect$transit$__GT_t_cognitect$transit32979(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta32980){
return (new cognitect.transit.t_cognitect$transit32979(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta32980));
});

}

return (new cognitect.transit.t_cognitect$transit32979(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__16358__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1521787224462