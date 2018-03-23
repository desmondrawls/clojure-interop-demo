// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async35851 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35851 = (function (fn_handler,f,meta35852){
this.fn_handler = fn_handler;
this.f = f;
this.meta35852 = meta35852;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35853,meta35852__$1){
var self__ = this;
var _35853__$1 = this;
return (new cljs.core.async.t_cljs$core$async35851(self__.fn_handler,self__.f,meta35852__$1));
});

cljs.core.async.t_cljs$core$async35851.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35853){
var self__ = this;
var _35853__$1 = this;
return self__.meta35852;
});

cljs.core.async.t_cljs$core$async35851.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35851.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35851.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async35851.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta35852","meta35852",-761714194,null)], null);
});

cljs.core.async.t_cljs$core$async35851.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35851.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35851";

cljs.core.async.t_cljs$core$async35851.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async35851");
});

cljs.core.async.__GT_t_cljs$core$async35851 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async35851(fn_handler__$1,f__$1,meta35852){
return (new cljs.core.async.t_cljs$core$async35851(fn_handler__$1,f__$1,meta35852));
});

}

return (new cljs.core.async.t_cljs$core$async35851(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args35856 = [];
var len__17416__auto___35859 = arguments.length;
var i__17417__auto___35860 = (0);
while(true){
if((i__17417__auto___35860 < len__17416__auto___35859)){
args35856.push((arguments[i__17417__auto___35860]));

var G__35861 = (i__17417__auto___35860 + (1));
i__17417__auto___35860 = G__35861;
continue;
} else {
}
break;
}

var G__35858 = args35856.length;
switch (G__35858) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35856.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args35863 = [];
var len__17416__auto___35866 = arguments.length;
var i__17417__auto___35867 = (0);
while(true){
if((i__17417__auto___35867 < len__17416__auto___35866)){
args35863.push((arguments[i__17417__auto___35867]));

var G__35868 = (i__17417__auto___35867 + (1));
i__17417__auto___35867 = G__35868;
continue;
} else {
}
break;
}

var G__35865 = args35863.length;
switch (G__35865) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35863.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_35870 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_35870);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_35870,ret){
return (function (){
return fn1.call(null,val_35870);
});})(val_35870,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args35871 = [];
var len__17416__auto___35874 = arguments.length;
var i__17417__auto___35875 = (0);
while(true){
if((i__17417__auto___35875 < len__17416__auto___35874)){
args35871.push((arguments[i__17417__auto___35875]));

var G__35876 = (i__17417__auto___35875 + (1));
i__17417__auto___35875 = G__35876;
continue;
} else {
}
break;
}

var G__35873 = args35871.length;
switch (G__35873) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35871.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17261__auto___35878 = n;
var x_35879 = (0);
while(true){
if((x_35879 < n__17261__auto___35878)){
(a[x_35879] = (0));

var G__35880 = (x_35879 + (1));
x_35879 = G__35880;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__35881 = (i + (1));
i = G__35881;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async35885 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35885 = (function (alt_flag,flag,meta35886){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta35886 = meta35886;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_35887,meta35886__$1){
var self__ = this;
var _35887__$1 = this;
return (new cljs.core.async.t_cljs$core$async35885(self__.alt_flag,self__.flag,meta35886__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async35885.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_35887){
var self__ = this;
var _35887__$1 = this;
return self__.meta35886;
});})(flag))
;

cljs.core.async.t_cljs$core$async35885.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35885.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async35885.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35885.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35886","meta35886",-1944484069,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async35885.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35885.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35885";

cljs.core.async.t_cljs$core$async35885.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async35885");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async35885 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35885(alt_flag__$1,flag__$1,meta35886){
return (new cljs.core.async.t_cljs$core$async35885(alt_flag__$1,flag__$1,meta35886));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async35885(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async35891 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35891 = (function (alt_handler,flag,cb,meta35892){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta35892 = meta35892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35893,meta35892__$1){
var self__ = this;
var _35893__$1 = this;
return (new cljs.core.async.t_cljs$core$async35891(self__.alt_handler,self__.flag,self__.cb,meta35892__$1));
});

cljs.core.async.t_cljs$core$async35891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35893){
var self__ = this;
var _35893__$1 = this;
return self__.meta35892;
});

cljs.core.async.t_cljs$core$async35891.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35891.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async35891.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async35891.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35892","meta35892",-420144418,null)], null);
});

cljs.core.async.t_cljs$core$async35891.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35891.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35891";

cljs.core.async.t_cljs$core$async35891.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async35891");
});

cljs.core.async.__GT_t_cljs$core$async35891 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35891(alt_handler__$1,flag__$1,cb__$1,meta35892){
return (new cljs.core.async.t_cljs$core$async35891(alt_handler__$1,flag__$1,cb__$1,meta35892));
});

}

return (new cljs.core.async.t_cljs$core$async35891(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35894_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35894_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35895_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35895_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16358__auto__ = wport;
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35896 = (i + (1));
i = G__35896;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16358__auto__ = ret;
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16346__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16346__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16346__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17423__auto__ = [];
var len__17416__auto___35902 = arguments.length;
var i__17417__auto___35903 = (0);
while(true){
if((i__17417__auto___35903 < len__17416__auto___35902)){
args__17423__auto__.push((arguments[i__17417__auto___35903]));

var G__35904 = (i__17417__auto___35903 + (1));
i__17417__auto___35903 = G__35904;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((1) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17424__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35899){
var map__35900 = p__35899;
var map__35900__$1 = ((((!((map__35900 == null)))?((((map__35900.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35900.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35900):map__35900);
var opts = map__35900__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35897){
var G__35898 = cljs.core.first.call(null,seq35897);
var seq35897__$1 = cljs.core.next.call(null,seq35897);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35898,seq35897__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args35905 = [];
var len__17416__auto___35955 = arguments.length;
var i__17417__auto___35956 = (0);
while(true){
if((i__17417__auto___35956 < len__17416__auto___35955)){
args35905.push((arguments[i__17417__auto___35956]));

var G__35957 = (i__17417__auto___35956 + (1));
i__17417__auto___35956 = G__35957;
continue;
} else {
}
break;
}

var G__35907 = args35905.length;
switch (G__35907) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35905.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19438__auto___35959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___35959){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___35959){
return (function (state_35931){
var state_val_35932 = (state_35931[(1)]);
if((state_val_35932 === (7))){
var inst_35927 = (state_35931[(2)]);
var state_35931__$1 = state_35931;
var statearr_35933_35960 = state_35931__$1;
(statearr_35933_35960[(2)] = inst_35927);

(statearr_35933_35960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35932 === (1))){
var state_35931__$1 = state_35931;
var statearr_35934_35961 = state_35931__$1;
(statearr_35934_35961[(2)] = null);

(statearr_35934_35961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35932 === (4))){
var inst_35910 = (state_35931[(7)]);
var inst_35910__$1 = (state_35931[(2)]);
var inst_35911 = (inst_35910__$1 == null);
var state_35931__$1 = (function (){var statearr_35935 = state_35931;
(statearr_35935[(7)] = inst_35910__$1);

return statearr_35935;
})();
if(cljs.core.truth_(inst_35911)){
var statearr_35936_35962 = state_35931__$1;
(statearr_35936_35962[(1)] = (5));

} else {
var statearr_35937_35963 = state_35931__$1;
(statearr_35937_35963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35932 === (13))){
var state_35931__$1 = state_35931;
var statearr_35938_35964 = state_35931__$1;
(statearr_35938_35964[(2)] = null);

(statearr_35938_35964[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35932 === (6))){
var inst_35910 = (state_35931[(7)]);
var state_35931__$1 = state_35931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35931__$1,(11),to,inst_35910);
} else {
if((state_val_35932 === (3))){
var inst_35929 = (state_35931[(2)]);
var state_35931__$1 = state_35931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35931__$1,inst_35929);
} else {
if((state_val_35932 === (12))){
var state_35931__$1 = state_35931;
var statearr_35939_35965 = state_35931__$1;
(statearr_35939_35965[(2)] = null);

(statearr_35939_35965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35932 === (2))){
var state_35931__$1 = state_35931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35931__$1,(4),from);
} else {
if((state_val_35932 === (11))){
var inst_35920 = (state_35931[(2)]);
var state_35931__$1 = state_35931;
if(cljs.core.truth_(inst_35920)){
var statearr_35940_35966 = state_35931__$1;
(statearr_35940_35966[(1)] = (12));

} else {
var statearr_35941_35967 = state_35931__$1;
(statearr_35941_35967[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35932 === (9))){
var state_35931__$1 = state_35931;
var statearr_35942_35968 = state_35931__$1;
(statearr_35942_35968[(2)] = null);

(statearr_35942_35968[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35932 === (5))){
var state_35931__$1 = state_35931;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35943_35969 = state_35931__$1;
(statearr_35943_35969[(1)] = (8));

} else {
var statearr_35944_35970 = state_35931__$1;
(statearr_35944_35970[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35932 === (14))){
var inst_35925 = (state_35931[(2)]);
var state_35931__$1 = state_35931;
var statearr_35945_35971 = state_35931__$1;
(statearr_35945_35971[(2)] = inst_35925);

(statearr_35945_35971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35932 === (10))){
var inst_35917 = (state_35931[(2)]);
var state_35931__$1 = state_35931;
var statearr_35946_35972 = state_35931__$1;
(statearr_35946_35972[(2)] = inst_35917);

(statearr_35946_35972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35932 === (8))){
var inst_35914 = cljs.core.async.close_BANG_.call(null,to);
var state_35931__$1 = state_35931;
var statearr_35947_35973 = state_35931__$1;
(statearr_35947_35973[(2)] = inst_35914);

(statearr_35947_35973[(1)] = (10));


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
});})(c__19438__auto___35959))
;
return ((function (switch__19373__auto__,c__19438__auto___35959){
return (function() {
var cljs$core$async$state_machine__19374__auto__ = null;
var cljs$core$async$state_machine__19374__auto____0 = (function (){
var statearr_35951 = [null,null,null,null,null,null,null,null];
(statearr_35951[(0)] = cljs$core$async$state_machine__19374__auto__);

(statearr_35951[(1)] = (1));

return statearr_35951;
});
var cljs$core$async$state_machine__19374__auto____1 = (function (state_35931){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_35931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e35952){if((e35952 instanceof Object)){
var ex__19377__auto__ = e35952;
var statearr_35953_35974 = state_35931;
(statearr_35953_35974[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35975 = state_35931;
state_35931 = G__35975;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$state_machine__19374__auto__ = function(state_35931){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19374__auto____1.call(this,state_35931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19374__auto____0;
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19374__auto____1;
return cljs$core$async$state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___35959))
})();
var state__19440__auto__ = (function (){var statearr_35954 = f__19439__auto__.call(null);
(statearr_35954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___35959);

return statearr_35954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___35959))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__36159){
var vec__36160 = p__36159;
var v = cljs.core.nth.call(null,vec__36160,(0),null);
var p = cljs.core.nth.call(null,vec__36160,(1),null);
var job = vec__36160;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19438__auto___36342 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___36342,res,vec__36160,v,p,job,jobs,results){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___36342,res,vec__36160,v,p,job,jobs,results){
return (function (state_36165){
var state_val_36166 = (state_36165[(1)]);
if((state_val_36166 === (1))){
var state_36165__$1 = state_36165;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36165__$1,(2),res,v);
} else {
if((state_val_36166 === (2))){
var inst_36162 = (state_36165[(2)]);
var inst_36163 = cljs.core.async.close_BANG_.call(null,res);
var state_36165__$1 = (function (){var statearr_36167 = state_36165;
(statearr_36167[(7)] = inst_36162);

return statearr_36167;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36165__$1,inst_36163);
} else {
return null;
}
}
});})(c__19438__auto___36342,res,vec__36160,v,p,job,jobs,results))
;
return ((function (switch__19373__auto__,c__19438__auto___36342,res,vec__36160,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0 = (function (){
var statearr_36171 = [null,null,null,null,null,null,null,null];
(statearr_36171[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__);

(statearr_36171[(1)] = (1));

return statearr_36171;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1 = (function (state_36165){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_36165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e36172){if((e36172 instanceof Object)){
var ex__19377__auto__ = e36172;
var statearr_36173_36343 = state_36165;
(statearr_36173_36343[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36344 = state_36165;
state_36165 = G__36344;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__ = function(state_36165){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1.call(this,state_36165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___36342,res,vec__36160,v,p,job,jobs,results))
})();
var state__19440__auto__ = (function (){var statearr_36174 = f__19439__auto__.call(null);
(statearr_36174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___36342);

return statearr_36174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___36342,res,vec__36160,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__36175){
var vec__36176 = p__36175;
var v = cljs.core.nth.call(null,vec__36176,(0),null);
var p = cljs.core.nth.call(null,vec__36176,(1),null);
var job = vec__36176;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17261__auto___36345 = n;
var __36346 = (0);
while(true){
if((__36346 < n__17261__auto___36345)){
var G__36177_36347 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36177_36347) {
case "compute":
var c__19438__auto___36349 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36346,c__19438__auto___36349,G__36177_36347,n__17261__auto___36345,jobs,results,process,async){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (__36346,c__19438__auto___36349,G__36177_36347,n__17261__auto___36345,jobs,results,process,async){
return (function (state_36190){
var state_val_36191 = (state_36190[(1)]);
if((state_val_36191 === (1))){
var state_36190__$1 = state_36190;
var statearr_36192_36350 = state_36190__$1;
(statearr_36192_36350[(2)] = null);

(statearr_36192_36350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (2))){
var state_36190__$1 = state_36190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36190__$1,(4),jobs);
} else {
if((state_val_36191 === (3))){
var inst_36188 = (state_36190[(2)]);
var state_36190__$1 = state_36190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36190__$1,inst_36188);
} else {
if((state_val_36191 === (4))){
var inst_36180 = (state_36190[(2)]);
var inst_36181 = process.call(null,inst_36180);
var state_36190__$1 = state_36190;
if(cljs.core.truth_(inst_36181)){
var statearr_36193_36351 = state_36190__$1;
(statearr_36193_36351[(1)] = (5));

} else {
var statearr_36194_36352 = state_36190__$1;
(statearr_36194_36352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (5))){
var state_36190__$1 = state_36190;
var statearr_36195_36353 = state_36190__$1;
(statearr_36195_36353[(2)] = null);

(statearr_36195_36353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (6))){
var state_36190__$1 = state_36190;
var statearr_36196_36354 = state_36190__$1;
(statearr_36196_36354[(2)] = null);

(statearr_36196_36354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (7))){
var inst_36186 = (state_36190[(2)]);
var state_36190__$1 = state_36190;
var statearr_36197_36355 = state_36190__$1;
(statearr_36197_36355[(2)] = inst_36186);

(statearr_36197_36355[(1)] = (3));


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
});})(__36346,c__19438__auto___36349,G__36177_36347,n__17261__auto___36345,jobs,results,process,async))
;
return ((function (__36346,switch__19373__auto__,c__19438__auto___36349,G__36177_36347,n__17261__auto___36345,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0 = (function (){
var statearr_36201 = [null,null,null,null,null,null,null];
(statearr_36201[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__);

(statearr_36201[(1)] = (1));

return statearr_36201;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1 = (function (state_36190){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_36190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e36202){if((e36202 instanceof Object)){
var ex__19377__auto__ = e36202;
var statearr_36203_36356 = state_36190;
(statearr_36203_36356[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36357 = state_36190;
state_36190 = G__36357;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__ = function(state_36190){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1.call(this,state_36190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__;
})()
;})(__36346,switch__19373__auto__,c__19438__auto___36349,G__36177_36347,n__17261__auto___36345,jobs,results,process,async))
})();
var state__19440__auto__ = (function (){var statearr_36204 = f__19439__auto__.call(null);
(statearr_36204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___36349);

return statearr_36204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(__36346,c__19438__auto___36349,G__36177_36347,n__17261__auto___36345,jobs,results,process,async))
);


break;
case "async":
var c__19438__auto___36358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36346,c__19438__auto___36358,G__36177_36347,n__17261__auto___36345,jobs,results,process,async){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (__36346,c__19438__auto___36358,G__36177_36347,n__17261__auto___36345,jobs,results,process,async){
return (function (state_36217){
var state_val_36218 = (state_36217[(1)]);
if((state_val_36218 === (1))){
var state_36217__$1 = state_36217;
var statearr_36219_36359 = state_36217__$1;
(statearr_36219_36359[(2)] = null);

(statearr_36219_36359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36218 === (2))){
var state_36217__$1 = state_36217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36217__$1,(4),jobs);
} else {
if((state_val_36218 === (3))){
var inst_36215 = (state_36217[(2)]);
var state_36217__$1 = state_36217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36217__$1,inst_36215);
} else {
if((state_val_36218 === (4))){
var inst_36207 = (state_36217[(2)]);
var inst_36208 = async.call(null,inst_36207);
var state_36217__$1 = state_36217;
if(cljs.core.truth_(inst_36208)){
var statearr_36220_36360 = state_36217__$1;
(statearr_36220_36360[(1)] = (5));

} else {
var statearr_36221_36361 = state_36217__$1;
(statearr_36221_36361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36218 === (5))){
var state_36217__$1 = state_36217;
var statearr_36222_36362 = state_36217__$1;
(statearr_36222_36362[(2)] = null);

(statearr_36222_36362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36218 === (6))){
var state_36217__$1 = state_36217;
var statearr_36223_36363 = state_36217__$1;
(statearr_36223_36363[(2)] = null);

(statearr_36223_36363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36218 === (7))){
var inst_36213 = (state_36217[(2)]);
var state_36217__$1 = state_36217;
var statearr_36224_36364 = state_36217__$1;
(statearr_36224_36364[(2)] = inst_36213);

(statearr_36224_36364[(1)] = (3));


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
});})(__36346,c__19438__auto___36358,G__36177_36347,n__17261__auto___36345,jobs,results,process,async))
;
return ((function (__36346,switch__19373__auto__,c__19438__auto___36358,G__36177_36347,n__17261__auto___36345,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0 = (function (){
var statearr_36228 = [null,null,null,null,null,null,null];
(statearr_36228[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__);

(statearr_36228[(1)] = (1));

return statearr_36228;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1 = (function (state_36217){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_36217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e36229){if((e36229 instanceof Object)){
var ex__19377__auto__ = e36229;
var statearr_36230_36365 = state_36217;
(statearr_36230_36365[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36366 = state_36217;
state_36217 = G__36366;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__ = function(state_36217){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1.call(this,state_36217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__;
})()
;})(__36346,switch__19373__auto__,c__19438__auto___36358,G__36177_36347,n__17261__auto___36345,jobs,results,process,async))
})();
var state__19440__auto__ = (function (){var statearr_36231 = f__19439__auto__.call(null);
(statearr_36231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___36358);

return statearr_36231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(__36346,c__19438__auto___36358,G__36177_36347,n__17261__auto___36345,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__36367 = (__36346 + (1));
__36346 = G__36367;
continue;
} else {
}
break;
}

var c__19438__auto___36368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___36368,jobs,results,process,async){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___36368,jobs,results,process,async){
return (function (state_36253){
var state_val_36254 = (state_36253[(1)]);
if((state_val_36254 === (1))){
var state_36253__$1 = state_36253;
var statearr_36255_36369 = state_36253__$1;
(statearr_36255_36369[(2)] = null);

(statearr_36255_36369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36254 === (2))){
var state_36253__$1 = state_36253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36253__$1,(4),from);
} else {
if((state_val_36254 === (3))){
var inst_36251 = (state_36253[(2)]);
var state_36253__$1 = state_36253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36253__$1,inst_36251);
} else {
if((state_val_36254 === (4))){
var inst_36234 = (state_36253[(7)]);
var inst_36234__$1 = (state_36253[(2)]);
var inst_36235 = (inst_36234__$1 == null);
var state_36253__$1 = (function (){var statearr_36256 = state_36253;
(statearr_36256[(7)] = inst_36234__$1);

return statearr_36256;
})();
if(cljs.core.truth_(inst_36235)){
var statearr_36257_36370 = state_36253__$1;
(statearr_36257_36370[(1)] = (5));

} else {
var statearr_36258_36371 = state_36253__$1;
(statearr_36258_36371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36254 === (5))){
var inst_36237 = cljs.core.async.close_BANG_.call(null,jobs);
var state_36253__$1 = state_36253;
var statearr_36259_36372 = state_36253__$1;
(statearr_36259_36372[(2)] = inst_36237);

(statearr_36259_36372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36254 === (6))){
var inst_36234 = (state_36253[(7)]);
var inst_36239 = (state_36253[(8)]);
var inst_36239__$1 = cljs.core.async.chan.call(null,(1));
var inst_36240 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36241 = [inst_36234,inst_36239__$1];
var inst_36242 = (new cljs.core.PersistentVector(null,2,(5),inst_36240,inst_36241,null));
var state_36253__$1 = (function (){var statearr_36260 = state_36253;
(statearr_36260[(8)] = inst_36239__$1);

return statearr_36260;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36253__$1,(8),jobs,inst_36242);
} else {
if((state_val_36254 === (7))){
var inst_36249 = (state_36253[(2)]);
var state_36253__$1 = state_36253;
var statearr_36261_36373 = state_36253__$1;
(statearr_36261_36373[(2)] = inst_36249);

(statearr_36261_36373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36254 === (8))){
var inst_36239 = (state_36253[(8)]);
var inst_36244 = (state_36253[(2)]);
var state_36253__$1 = (function (){var statearr_36262 = state_36253;
(statearr_36262[(9)] = inst_36244);

return statearr_36262;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36253__$1,(9),results,inst_36239);
} else {
if((state_val_36254 === (9))){
var inst_36246 = (state_36253[(2)]);
var state_36253__$1 = (function (){var statearr_36263 = state_36253;
(statearr_36263[(10)] = inst_36246);

return statearr_36263;
})();
var statearr_36264_36374 = state_36253__$1;
(statearr_36264_36374[(2)] = null);

(statearr_36264_36374[(1)] = (2));


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
});})(c__19438__auto___36368,jobs,results,process,async))
;
return ((function (switch__19373__auto__,c__19438__auto___36368,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0 = (function (){
var statearr_36268 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36268[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__);

(statearr_36268[(1)] = (1));

return statearr_36268;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1 = (function (state_36253){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_36253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e36269){if((e36269 instanceof Object)){
var ex__19377__auto__ = e36269;
var statearr_36270_36375 = state_36253;
(statearr_36270_36375[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36376 = state_36253;
state_36253 = G__36376;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__ = function(state_36253){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1.call(this,state_36253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___36368,jobs,results,process,async))
})();
var state__19440__auto__ = (function (){var statearr_36271 = f__19439__auto__.call(null);
(statearr_36271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___36368);

return statearr_36271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___36368,jobs,results,process,async))
);


var c__19438__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto__,jobs,results,process,async){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto__,jobs,results,process,async){
return (function (state_36309){
var state_val_36310 = (state_36309[(1)]);
if((state_val_36310 === (7))){
var inst_36305 = (state_36309[(2)]);
var state_36309__$1 = state_36309;
var statearr_36311_36377 = state_36309__$1;
(statearr_36311_36377[(2)] = inst_36305);

(statearr_36311_36377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36310 === (20))){
var state_36309__$1 = state_36309;
var statearr_36312_36378 = state_36309__$1;
(statearr_36312_36378[(2)] = null);

(statearr_36312_36378[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36310 === (1))){
var state_36309__$1 = state_36309;
var statearr_36313_36379 = state_36309__$1;
(statearr_36313_36379[(2)] = null);

(statearr_36313_36379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36310 === (4))){
var inst_36274 = (state_36309[(7)]);
var inst_36274__$1 = (state_36309[(2)]);
var inst_36275 = (inst_36274__$1 == null);
var state_36309__$1 = (function (){var statearr_36314 = state_36309;
(statearr_36314[(7)] = inst_36274__$1);

return statearr_36314;
})();
if(cljs.core.truth_(inst_36275)){
var statearr_36315_36380 = state_36309__$1;
(statearr_36315_36380[(1)] = (5));

} else {
var statearr_36316_36381 = state_36309__$1;
(statearr_36316_36381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36310 === (15))){
var inst_36287 = (state_36309[(8)]);
var state_36309__$1 = state_36309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36309__$1,(18),to,inst_36287);
} else {
if((state_val_36310 === (21))){
var inst_36300 = (state_36309[(2)]);
var state_36309__$1 = state_36309;
var statearr_36317_36382 = state_36309__$1;
(statearr_36317_36382[(2)] = inst_36300);

(statearr_36317_36382[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36310 === (13))){
var inst_36302 = (state_36309[(2)]);
var state_36309__$1 = (function (){var statearr_36318 = state_36309;
(statearr_36318[(9)] = inst_36302);

return statearr_36318;
})();
var statearr_36319_36383 = state_36309__$1;
(statearr_36319_36383[(2)] = null);

(statearr_36319_36383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36310 === (6))){
var inst_36274 = (state_36309[(7)]);
var state_36309__$1 = state_36309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36309__$1,(11),inst_36274);
} else {
if((state_val_36310 === (17))){
var inst_36295 = (state_36309[(2)]);
var state_36309__$1 = state_36309;
if(cljs.core.truth_(inst_36295)){
var statearr_36320_36384 = state_36309__$1;
(statearr_36320_36384[(1)] = (19));

} else {
var statearr_36321_36385 = state_36309__$1;
(statearr_36321_36385[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36310 === (3))){
var inst_36307 = (state_36309[(2)]);
var state_36309__$1 = state_36309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36309__$1,inst_36307);
} else {
if((state_val_36310 === (12))){
var inst_36284 = (state_36309[(10)]);
var state_36309__$1 = state_36309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36309__$1,(14),inst_36284);
} else {
if((state_val_36310 === (2))){
var state_36309__$1 = state_36309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36309__$1,(4),results);
} else {
if((state_val_36310 === (19))){
var state_36309__$1 = state_36309;
var statearr_36322_36386 = state_36309__$1;
(statearr_36322_36386[(2)] = null);

(statearr_36322_36386[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36310 === (11))){
var inst_36284 = (state_36309[(2)]);
var state_36309__$1 = (function (){var statearr_36323 = state_36309;
(statearr_36323[(10)] = inst_36284);

return statearr_36323;
})();
var statearr_36324_36387 = state_36309__$1;
(statearr_36324_36387[(2)] = null);

(statearr_36324_36387[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36310 === (9))){
var state_36309__$1 = state_36309;
var statearr_36325_36388 = state_36309__$1;
(statearr_36325_36388[(2)] = null);

(statearr_36325_36388[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36310 === (5))){
var state_36309__$1 = state_36309;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36326_36389 = state_36309__$1;
(statearr_36326_36389[(1)] = (8));

} else {
var statearr_36327_36390 = state_36309__$1;
(statearr_36327_36390[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36310 === (14))){
var inst_36289 = (state_36309[(11)]);
var inst_36287 = (state_36309[(8)]);
var inst_36287__$1 = (state_36309[(2)]);
var inst_36288 = (inst_36287__$1 == null);
var inst_36289__$1 = cljs.core.not.call(null,inst_36288);
var state_36309__$1 = (function (){var statearr_36328 = state_36309;
(statearr_36328[(11)] = inst_36289__$1);

(statearr_36328[(8)] = inst_36287__$1);

return statearr_36328;
})();
if(inst_36289__$1){
var statearr_36329_36391 = state_36309__$1;
(statearr_36329_36391[(1)] = (15));

} else {
var statearr_36330_36392 = state_36309__$1;
(statearr_36330_36392[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36310 === (16))){
var inst_36289 = (state_36309[(11)]);
var state_36309__$1 = state_36309;
var statearr_36331_36393 = state_36309__$1;
(statearr_36331_36393[(2)] = inst_36289);

(statearr_36331_36393[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36310 === (10))){
var inst_36281 = (state_36309[(2)]);
var state_36309__$1 = state_36309;
var statearr_36332_36394 = state_36309__$1;
(statearr_36332_36394[(2)] = inst_36281);

(statearr_36332_36394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36310 === (18))){
var inst_36292 = (state_36309[(2)]);
var state_36309__$1 = state_36309;
var statearr_36333_36395 = state_36309__$1;
(statearr_36333_36395[(2)] = inst_36292);

(statearr_36333_36395[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36310 === (8))){
var inst_36278 = cljs.core.async.close_BANG_.call(null,to);
var state_36309__$1 = state_36309;
var statearr_36334_36396 = state_36309__$1;
(statearr_36334_36396[(2)] = inst_36278);

(statearr_36334_36396[(1)] = (10));


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
});})(c__19438__auto__,jobs,results,process,async))
;
return ((function (switch__19373__auto__,c__19438__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0 = (function (){
var statearr_36338 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36338[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__);

(statearr_36338[(1)] = (1));

return statearr_36338;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1 = (function (state_36309){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_36309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e36339){if((e36339 instanceof Object)){
var ex__19377__auto__ = e36339;
var statearr_36340_36397 = state_36309;
(statearr_36340_36397[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36398 = state_36309;
state_36309 = G__36398;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__ = function(state_36309){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1.call(this,state_36309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto__,jobs,results,process,async))
})();
var state__19440__auto__ = (function (){var statearr_36341 = f__19439__auto__.call(null);
(statearr_36341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto__);

return statearr_36341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto__,jobs,results,process,async))
);

return c__19438__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args36399 = [];
var len__17416__auto___36402 = arguments.length;
var i__17417__auto___36403 = (0);
while(true){
if((i__17417__auto___36403 < len__17416__auto___36402)){
args36399.push((arguments[i__17417__auto___36403]));

var G__36404 = (i__17417__auto___36403 + (1));
i__17417__auto___36403 = G__36404;
continue;
} else {
}
break;
}

var G__36401 = args36399.length;
switch (G__36401) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36399.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args36406 = [];
var len__17416__auto___36409 = arguments.length;
var i__17417__auto___36410 = (0);
while(true){
if((i__17417__auto___36410 < len__17416__auto___36409)){
args36406.push((arguments[i__17417__auto___36410]));

var G__36411 = (i__17417__auto___36410 + (1));
i__17417__auto___36410 = G__36411;
continue;
} else {
}
break;
}

var G__36408 = args36406.length;
switch (G__36408) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36406.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args36413 = [];
var len__17416__auto___36466 = arguments.length;
var i__17417__auto___36467 = (0);
while(true){
if((i__17417__auto___36467 < len__17416__auto___36466)){
args36413.push((arguments[i__17417__auto___36467]));

var G__36468 = (i__17417__auto___36467 + (1));
i__17417__auto___36467 = G__36468;
continue;
} else {
}
break;
}

var G__36415 = args36413.length;
switch (G__36415) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36413.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19438__auto___36470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___36470,tc,fc){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___36470,tc,fc){
return (function (state_36441){
var state_val_36442 = (state_36441[(1)]);
if((state_val_36442 === (7))){
var inst_36437 = (state_36441[(2)]);
var state_36441__$1 = state_36441;
var statearr_36443_36471 = state_36441__$1;
(statearr_36443_36471[(2)] = inst_36437);

(statearr_36443_36471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36442 === (1))){
var state_36441__$1 = state_36441;
var statearr_36444_36472 = state_36441__$1;
(statearr_36444_36472[(2)] = null);

(statearr_36444_36472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36442 === (4))){
var inst_36418 = (state_36441[(7)]);
var inst_36418__$1 = (state_36441[(2)]);
var inst_36419 = (inst_36418__$1 == null);
var state_36441__$1 = (function (){var statearr_36445 = state_36441;
(statearr_36445[(7)] = inst_36418__$1);

return statearr_36445;
})();
if(cljs.core.truth_(inst_36419)){
var statearr_36446_36473 = state_36441__$1;
(statearr_36446_36473[(1)] = (5));

} else {
var statearr_36447_36474 = state_36441__$1;
(statearr_36447_36474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36442 === (13))){
var state_36441__$1 = state_36441;
var statearr_36448_36475 = state_36441__$1;
(statearr_36448_36475[(2)] = null);

(statearr_36448_36475[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36442 === (6))){
var inst_36418 = (state_36441[(7)]);
var inst_36424 = p.call(null,inst_36418);
var state_36441__$1 = state_36441;
if(cljs.core.truth_(inst_36424)){
var statearr_36449_36476 = state_36441__$1;
(statearr_36449_36476[(1)] = (9));

} else {
var statearr_36450_36477 = state_36441__$1;
(statearr_36450_36477[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36442 === (3))){
var inst_36439 = (state_36441[(2)]);
var state_36441__$1 = state_36441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36441__$1,inst_36439);
} else {
if((state_val_36442 === (12))){
var state_36441__$1 = state_36441;
var statearr_36451_36478 = state_36441__$1;
(statearr_36451_36478[(2)] = null);

(statearr_36451_36478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36442 === (2))){
var state_36441__$1 = state_36441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36441__$1,(4),ch);
} else {
if((state_val_36442 === (11))){
var inst_36418 = (state_36441[(7)]);
var inst_36428 = (state_36441[(2)]);
var state_36441__$1 = state_36441;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36441__$1,(8),inst_36428,inst_36418);
} else {
if((state_val_36442 === (9))){
var state_36441__$1 = state_36441;
var statearr_36452_36479 = state_36441__$1;
(statearr_36452_36479[(2)] = tc);

(statearr_36452_36479[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36442 === (5))){
var inst_36421 = cljs.core.async.close_BANG_.call(null,tc);
var inst_36422 = cljs.core.async.close_BANG_.call(null,fc);
var state_36441__$1 = (function (){var statearr_36453 = state_36441;
(statearr_36453[(8)] = inst_36421);

return statearr_36453;
})();
var statearr_36454_36480 = state_36441__$1;
(statearr_36454_36480[(2)] = inst_36422);

(statearr_36454_36480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36442 === (14))){
var inst_36435 = (state_36441[(2)]);
var state_36441__$1 = state_36441;
var statearr_36455_36481 = state_36441__$1;
(statearr_36455_36481[(2)] = inst_36435);

(statearr_36455_36481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36442 === (10))){
var state_36441__$1 = state_36441;
var statearr_36456_36482 = state_36441__$1;
(statearr_36456_36482[(2)] = fc);

(statearr_36456_36482[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36442 === (8))){
var inst_36430 = (state_36441[(2)]);
var state_36441__$1 = state_36441;
if(cljs.core.truth_(inst_36430)){
var statearr_36457_36483 = state_36441__$1;
(statearr_36457_36483[(1)] = (12));

} else {
var statearr_36458_36484 = state_36441__$1;
(statearr_36458_36484[(1)] = (13));

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
});})(c__19438__auto___36470,tc,fc))
;
return ((function (switch__19373__auto__,c__19438__auto___36470,tc,fc){
return (function() {
var cljs$core$async$state_machine__19374__auto__ = null;
var cljs$core$async$state_machine__19374__auto____0 = (function (){
var statearr_36462 = [null,null,null,null,null,null,null,null,null];
(statearr_36462[(0)] = cljs$core$async$state_machine__19374__auto__);

(statearr_36462[(1)] = (1));

return statearr_36462;
});
var cljs$core$async$state_machine__19374__auto____1 = (function (state_36441){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_36441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e36463){if((e36463 instanceof Object)){
var ex__19377__auto__ = e36463;
var statearr_36464_36485 = state_36441;
(statearr_36464_36485[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36486 = state_36441;
state_36441 = G__36486;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$state_machine__19374__auto__ = function(state_36441){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19374__auto____1.call(this,state_36441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19374__auto____0;
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19374__auto____1;
return cljs$core$async$state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___36470,tc,fc))
})();
var state__19440__auto__ = (function (){var statearr_36465 = f__19439__auto__.call(null);
(statearr_36465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___36470);

return statearr_36465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___36470,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19438__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto__){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto__){
return (function (state_36533){
var state_val_36534 = (state_36533[(1)]);
if((state_val_36534 === (1))){
var inst_36519 = init;
var state_36533__$1 = (function (){var statearr_36535 = state_36533;
(statearr_36535[(7)] = inst_36519);

return statearr_36535;
})();
var statearr_36536_36551 = state_36533__$1;
(statearr_36536_36551[(2)] = null);

(statearr_36536_36551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (2))){
var state_36533__$1 = state_36533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36533__$1,(4),ch);
} else {
if((state_val_36534 === (3))){
var inst_36531 = (state_36533[(2)]);
var state_36533__$1 = state_36533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36533__$1,inst_36531);
} else {
if((state_val_36534 === (4))){
var inst_36522 = (state_36533[(8)]);
var inst_36522__$1 = (state_36533[(2)]);
var inst_36523 = (inst_36522__$1 == null);
var state_36533__$1 = (function (){var statearr_36537 = state_36533;
(statearr_36537[(8)] = inst_36522__$1);

return statearr_36537;
})();
if(cljs.core.truth_(inst_36523)){
var statearr_36538_36552 = state_36533__$1;
(statearr_36538_36552[(1)] = (5));

} else {
var statearr_36539_36553 = state_36533__$1;
(statearr_36539_36553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (5))){
var inst_36519 = (state_36533[(7)]);
var state_36533__$1 = state_36533;
var statearr_36540_36554 = state_36533__$1;
(statearr_36540_36554[(2)] = inst_36519);

(statearr_36540_36554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (6))){
var inst_36519 = (state_36533[(7)]);
var inst_36522 = (state_36533[(8)]);
var inst_36526 = f.call(null,inst_36519,inst_36522);
var inst_36519__$1 = inst_36526;
var state_36533__$1 = (function (){var statearr_36541 = state_36533;
(statearr_36541[(7)] = inst_36519__$1);

return statearr_36541;
})();
var statearr_36542_36555 = state_36533__$1;
(statearr_36542_36555[(2)] = null);

(statearr_36542_36555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (7))){
var inst_36529 = (state_36533[(2)]);
var state_36533__$1 = state_36533;
var statearr_36543_36556 = state_36533__$1;
(statearr_36543_36556[(2)] = inst_36529);

(statearr_36543_36556[(1)] = (3));


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
});})(c__19438__auto__))
;
return ((function (switch__19373__auto__,c__19438__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19374__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19374__auto____0 = (function (){
var statearr_36547 = [null,null,null,null,null,null,null,null,null];
(statearr_36547[(0)] = cljs$core$async$reduce_$_state_machine__19374__auto__);

(statearr_36547[(1)] = (1));

return statearr_36547;
});
var cljs$core$async$reduce_$_state_machine__19374__auto____1 = (function (state_36533){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_36533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e36548){if((e36548 instanceof Object)){
var ex__19377__auto__ = e36548;
var statearr_36549_36557 = state_36533;
(statearr_36549_36557[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36558 = state_36533;
state_36533 = G__36558;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19374__auto__ = function(state_36533){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19374__auto____1.call(this,state_36533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19374__auto____0;
cljs$core$async$reduce_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19374__auto____1;
return cljs$core$async$reduce_$_state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto__))
})();
var state__19440__auto__ = (function (){var statearr_36550 = f__19439__auto__.call(null);
(statearr_36550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto__);

return statearr_36550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto__))
);

return c__19438__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args36559 = [];
var len__17416__auto___36611 = arguments.length;
var i__17417__auto___36612 = (0);
while(true){
if((i__17417__auto___36612 < len__17416__auto___36611)){
args36559.push((arguments[i__17417__auto___36612]));

var G__36613 = (i__17417__auto___36612 + (1));
i__17417__auto___36612 = G__36613;
continue;
} else {
}
break;
}

var G__36561 = args36559.length;
switch (G__36561) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36559.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19438__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto__){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto__){
return (function (state_36586){
var state_val_36587 = (state_36586[(1)]);
if((state_val_36587 === (7))){
var inst_36568 = (state_36586[(2)]);
var state_36586__$1 = state_36586;
var statearr_36588_36615 = state_36586__$1;
(statearr_36588_36615[(2)] = inst_36568);

(statearr_36588_36615[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (1))){
var inst_36562 = cljs.core.seq.call(null,coll);
var inst_36563 = inst_36562;
var state_36586__$1 = (function (){var statearr_36589 = state_36586;
(statearr_36589[(7)] = inst_36563);

return statearr_36589;
})();
var statearr_36590_36616 = state_36586__$1;
(statearr_36590_36616[(2)] = null);

(statearr_36590_36616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (4))){
var inst_36563 = (state_36586[(7)]);
var inst_36566 = cljs.core.first.call(null,inst_36563);
var state_36586__$1 = state_36586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36586__$1,(7),ch,inst_36566);
} else {
if((state_val_36587 === (13))){
var inst_36580 = (state_36586[(2)]);
var state_36586__$1 = state_36586;
var statearr_36591_36617 = state_36586__$1;
(statearr_36591_36617[(2)] = inst_36580);

(statearr_36591_36617[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (6))){
var inst_36571 = (state_36586[(2)]);
var state_36586__$1 = state_36586;
if(cljs.core.truth_(inst_36571)){
var statearr_36592_36618 = state_36586__$1;
(statearr_36592_36618[(1)] = (8));

} else {
var statearr_36593_36619 = state_36586__$1;
(statearr_36593_36619[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (3))){
var inst_36584 = (state_36586[(2)]);
var state_36586__$1 = state_36586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36586__$1,inst_36584);
} else {
if((state_val_36587 === (12))){
var state_36586__$1 = state_36586;
var statearr_36594_36620 = state_36586__$1;
(statearr_36594_36620[(2)] = null);

(statearr_36594_36620[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (2))){
var inst_36563 = (state_36586[(7)]);
var state_36586__$1 = state_36586;
if(cljs.core.truth_(inst_36563)){
var statearr_36595_36621 = state_36586__$1;
(statearr_36595_36621[(1)] = (4));

} else {
var statearr_36596_36622 = state_36586__$1;
(statearr_36596_36622[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (11))){
var inst_36577 = cljs.core.async.close_BANG_.call(null,ch);
var state_36586__$1 = state_36586;
var statearr_36597_36623 = state_36586__$1;
(statearr_36597_36623[(2)] = inst_36577);

(statearr_36597_36623[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (9))){
var state_36586__$1 = state_36586;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36598_36624 = state_36586__$1;
(statearr_36598_36624[(1)] = (11));

} else {
var statearr_36599_36625 = state_36586__$1;
(statearr_36599_36625[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (5))){
var inst_36563 = (state_36586[(7)]);
var state_36586__$1 = state_36586;
var statearr_36600_36626 = state_36586__$1;
(statearr_36600_36626[(2)] = inst_36563);

(statearr_36600_36626[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (10))){
var inst_36582 = (state_36586[(2)]);
var state_36586__$1 = state_36586;
var statearr_36601_36627 = state_36586__$1;
(statearr_36601_36627[(2)] = inst_36582);

(statearr_36601_36627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (8))){
var inst_36563 = (state_36586[(7)]);
var inst_36573 = cljs.core.next.call(null,inst_36563);
var inst_36563__$1 = inst_36573;
var state_36586__$1 = (function (){var statearr_36602 = state_36586;
(statearr_36602[(7)] = inst_36563__$1);

return statearr_36602;
})();
var statearr_36603_36628 = state_36586__$1;
(statearr_36603_36628[(2)] = null);

(statearr_36603_36628[(1)] = (2));


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
});})(c__19438__auto__))
;
return ((function (switch__19373__auto__,c__19438__auto__){
return (function() {
var cljs$core$async$state_machine__19374__auto__ = null;
var cljs$core$async$state_machine__19374__auto____0 = (function (){
var statearr_36607 = [null,null,null,null,null,null,null,null];
(statearr_36607[(0)] = cljs$core$async$state_machine__19374__auto__);

(statearr_36607[(1)] = (1));

return statearr_36607;
});
var cljs$core$async$state_machine__19374__auto____1 = (function (state_36586){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_36586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e36608){if((e36608 instanceof Object)){
var ex__19377__auto__ = e36608;
var statearr_36609_36629 = state_36586;
(statearr_36609_36629[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36630 = state_36586;
state_36586 = G__36630;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$state_machine__19374__auto__ = function(state_36586){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19374__auto____1.call(this,state_36586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19374__auto____0;
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19374__auto____1;
return cljs$core$async$state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto__))
})();
var state__19440__auto__ = (function (){var statearr_36610 = f__19439__auto__.call(null);
(statearr_36610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto__);

return statearr_36610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto__))
);

return c__19438__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17013__auto__ = (((_ == null))?null:_);
var m__17014__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,_);
} else {
var m__17014__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17013__auto__ = (((m == null))?null:m);
var m__17014__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17014__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17013__auto__ = (((m == null))?null:m);
var m__17014__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,m,ch);
} else {
var m__17014__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17013__auto__ = (((m == null))?null:m);
var m__17014__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,m);
} else {
var m__17014__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async36852 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36852 = (function (mult,ch,cs,meta36853){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta36853 = meta36853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_36854,meta36853__$1){
var self__ = this;
var _36854__$1 = this;
return (new cljs.core.async.t_cljs$core$async36852(self__.mult,self__.ch,self__.cs,meta36853__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async36852.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_36854){
var self__ = this;
var _36854__$1 = this;
return self__.meta36853;
});})(cs))
;

cljs.core.async.t_cljs$core$async36852.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async36852.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async36852.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async36852.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36852.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36852.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36852.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36853","meta36853",-900738072,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async36852.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36852.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36852";

cljs.core.async.t_cljs$core$async36852.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async36852");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async36852 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async36852(mult__$1,ch__$1,cs__$1,meta36853){
return (new cljs.core.async.t_cljs$core$async36852(mult__$1,ch__$1,cs__$1,meta36853));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async36852(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19438__auto___37073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___37073,cs,m,dchan,dctr,done){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___37073,cs,m,dchan,dctr,done){
return (function (state_36985){
var state_val_36986 = (state_36985[(1)]);
if((state_val_36986 === (7))){
var inst_36981 = (state_36985[(2)]);
var state_36985__$1 = state_36985;
var statearr_36987_37074 = state_36985__$1;
(statearr_36987_37074[(2)] = inst_36981);

(statearr_36987_37074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (20))){
var inst_36886 = (state_36985[(7)]);
var inst_36896 = cljs.core.first.call(null,inst_36886);
var inst_36897 = cljs.core.nth.call(null,inst_36896,(0),null);
var inst_36898 = cljs.core.nth.call(null,inst_36896,(1),null);
var state_36985__$1 = (function (){var statearr_36988 = state_36985;
(statearr_36988[(8)] = inst_36897);

return statearr_36988;
})();
if(cljs.core.truth_(inst_36898)){
var statearr_36989_37075 = state_36985__$1;
(statearr_36989_37075[(1)] = (22));

} else {
var statearr_36990_37076 = state_36985__$1;
(statearr_36990_37076[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (27))){
var inst_36928 = (state_36985[(9)]);
var inst_36857 = (state_36985[(10)]);
var inst_36933 = (state_36985[(11)]);
var inst_36926 = (state_36985[(12)]);
var inst_36933__$1 = cljs.core._nth.call(null,inst_36926,inst_36928);
var inst_36934 = cljs.core.async.put_BANG_.call(null,inst_36933__$1,inst_36857,done);
var state_36985__$1 = (function (){var statearr_36991 = state_36985;
(statearr_36991[(11)] = inst_36933__$1);

return statearr_36991;
})();
if(cljs.core.truth_(inst_36934)){
var statearr_36992_37077 = state_36985__$1;
(statearr_36992_37077[(1)] = (30));

} else {
var statearr_36993_37078 = state_36985__$1;
(statearr_36993_37078[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (1))){
var state_36985__$1 = state_36985;
var statearr_36994_37079 = state_36985__$1;
(statearr_36994_37079[(2)] = null);

(statearr_36994_37079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (24))){
var inst_36886 = (state_36985[(7)]);
var inst_36903 = (state_36985[(2)]);
var inst_36904 = cljs.core.next.call(null,inst_36886);
var inst_36866 = inst_36904;
var inst_36867 = null;
var inst_36868 = (0);
var inst_36869 = (0);
var state_36985__$1 = (function (){var statearr_36995 = state_36985;
(statearr_36995[(13)] = inst_36869);

(statearr_36995[(14)] = inst_36867);

(statearr_36995[(15)] = inst_36866);

(statearr_36995[(16)] = inst_36868);

(statearr_36995[(17)] = inst_36903);

return statearr_36995;
})();
var statearr_36996_37080 = state_36985__$1;
(statearr_36996_37080[(2)] = null);

(statearr_36996_37080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (39))){
var state_36985__$1 = state_36985;
var statearr_37000_37081 = state_36985__$1;
(statearr_37000_37081[(2)] = null);

(statearr_37000_37081[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (4))){
var inst_36857 = (state_36985[(10)]);
var inst_36857__$1 = (state_36985[(2)]);
var inst_36858 = (inst_36857__$1 == null);
var state_36985__$1 = (function (){var statearr_37001 = state_36985;
(statearr_37001[(10)] = inst_36857__$1);

return statearr_37001;
})();
if(cljs.core.truth_(inst_36858)){
var statearr_37002_37082 = state_36985__$1;
(statearr_37002_37082[(1)] = (5));

} else {
var statearr_37003_37083 = state_36985__$1;
(statearr_37003_37083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (15))){
var inst_36869 = (state_36985[(13)]);
var inst_36867 = (state_36985[(14)]);
var inst_36866 = (state_36985[(15)]);
var inst_36868 = (state_36985[(16)]);
var inst_36882 = (state_36985[(2)]);
var inst_36883 = (inst_36869 + (1));
var tmp36997 = inst_36867;
var tmp36998 = inst_36866;
var tmp36999 = inst_36868;
var inst_36866__$1 = tmp36998;
var inst_36867__$1 = tmp36997;
var inst_36868__$1 = tmp36999;
var inst_36869__$1 = inst_36883;
var state_36985__$1 = (function (){var statearr_37004 = state_36985;
(statearr_37004[(13)] = inst_36869__$1);

(statearr_37004[(14)] = inst_36867__$1);

(statearr_37004[(15)] = inst_36866__$1);

(statearr_37004[(18)] = inst_36882);

(statearr_37004[(16)] = inst_36868__$1);

return statearr_37004;
})();
var statearr_37005_37084 = state_36985__$1;
(statearr_37005_37084[(2)] = null);

(statearr_37005_37084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (21))){
var inst_36907 = (state_36985[(2)]);
var state_36985__$1 = state_36985;
var statearr_37009_37085 = state_36985__$1;
(statearr_37009_37085[(2)] = inst_36907);

(statearr_37009_37085[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (31))){
var inst_36933 = (state_36985[(11)]);
var inst_36937 = done.call(null,null);
var inst_36938 = cljs.core.async.untap_STAR_.call(null,m,inst_36933);
var state_36985__$1 = (function (){var statearr_37010 = state_36985;
(statearr_37010[(19)] = inst_36937);

return statearr_37010;
})();
var statearr_37011_37086 = state_36985__$1;
(statearr_37011_37086[(2)] = inst_36938);

(statearr_37011_37086[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (32))){
var inst_36925 = (state_36985[(20)]);
var inst_36927 = (state_36985[(21)]);
var inst_36928 = (state_36985[(9)]);
var inst_36926 = (state_36985[(12)]);
var inst_36940 = (state_36985[(2)]);
var inst_36941 = (inst_36928 + (1));
var tmp37006 = inst_36925;
var tmp37007 = inst_36927;
var tmp37008 = inst_36926;
var inst_36925__$1 = tmp37006;
var inst_36926__$1 = tmp37008;
var inst_36927__$1 = tmp37007;
var inst_36928__$1 = inst_36941;
var state_36985__$1 = (function (){var statearr_37012 = state_36985;
(statearr_37012[(22)] = inst_36940);

(statearr_37012[(20)] = inst_36925__$1);

(statearr_37012[(21)] = inst_36927__$1);

(statearr_37012[(9)] = inst_36928__$1);

(statearr_37012[(12)] = inst_36926__$1);

return statearr_37012;
})();
var statearr_37013_37087 = state_36985__$1;
(statearr_37013_37087[(2)] = null);

(statearr_37013_37087[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (40))){
var inst_36953 = (state_36985[(23)]);
var inst_36957 = done.call(null,null);
var inst_36958 = cljs.core.async.untap_STAR_.call(null,m,inst_36953);
var state_36985__$1 = (function (){var statearr_37014 = state_36985;
(statearr_37014[(24)] = inst_36957);

return statearr_37014;
})();
var statearr_37015_37088 = state_36985__$1;
(statearr_37015_37088[(2)] = inst_36958);

(statearr_37015_37088[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (33))){
var inst_36944 = (state_36985[(25)]);
var inst_36946 = cljs.core.chunked_seq_QMARK_.call(null,inst_36944);
var state_36985__$1 = state_36985;
if(inst_36946){
var statearr_37016_37089 = state_36985__$1;
(statearr_37016_37089[(1)] = (36));

} else {
var statearr_37017_37090 = state_36985__$1;
(statearr_37017_37090[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (13))){
var inst_36876 = (state_36985[(26)]);
var inst_36879 = cljs.core.async.close_BANG_.call(null,inst_36876);
var state_36985__$1 = state_36985;
var statearr_37018_37091 = state_36985__$1;
(statearr_37018_37091[(2)] = inst_36879);

(statearr_37018_37091[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (22))){
var inst_36897 = (state_36985[(8)]);
var inst_36900 = cljs.core.async.close_BANG_.call(null,inst_36897);
var state_36985__$1 = state_36985;
var statearr_37019_37092 = state_36985__$1;
(statearr_37019_37092[(2)] = inst_36900);

(statearr_37019_37092[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (36))){
var inst_36944 = (state_36985[(25)]);
var inst_36948 = cljs.core.chunk_first.call(null,inst_36944);
var inst_36949 = cljs.core.chunk_rest.call(null,inst_36944);
var inst_36950 = cljs.core.count.call(null,inst_36948);
var inst_36925 = inst_36949;
var inst_36926 = inst_36948;
var inst_36927 = inst_36950;
var inst_36928 = (0);
var state_36985__$1 = (function (){var statearr_37020 = state_36985;
(statearr_37020[(20)] = inst_36925);

(statearr_37020[(21)] = inst_36927);

(statearr_37020[(9)] = inst_36928);

(statearr_37020[(12)] = inst_36926);

return statearr_37020;
})();
var statearr_37021_37093 = state_36985__$1;
(statearr_37021_37093[(2)] = null);

(statearr_37021_37093[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (41))){
var inst_36944 = (state_36985[(25)]);
var inst_36960 = (state_36985[(2)]);
var inst_36961 = cljs.core.next.call(null,inst_36944);
var inst_36925 = inst_36961;
var inst_36926 = null;
var inst_36927 = (0);
var inst_36928 = (0);
var state_36985__$1 = (function (){var statearr_37022 = state_36985;
(statearr_37022[(20)] = inst_36925);

(statearr_37022[(21)] = inst_36927);

(statearr_37022[(9)] = inst_36928);

(statearr_37022[(27)] = inst_36960);

(statearr_37022[(12)] = inst_36926);

return statearr_37022;
})();
var statearr_37023_37094 = state_36985__$1;
(statearr_37023_37094[(2)] = null);

(statearr_37023_37094[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (43))){
var state_36985__$1 = state_36985;
var statearr_37024_37095 = state_36985__$1;
(statearr_37024_37095[(2)] = null);

(statearr_37024_37095[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (29))){
var inst_36969 = (state_36985[(2)]);
var state_36985__$1 = state_36985;
var statearr_37025_37096 = state_36985__$1;
(statearr_37025_37096[(2)] = inst_36969);

(statearr_37025_37096[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (44))){
var inst_36978 = (state_36985[(2)]);
var state_36985__$1 = (function (){var statearr_37026 = state_36985;
(statearr_37026[(28)] = inst_36978);

return statearr_37026;
})();
var statearr_37027_37097 = state_36985__$1;
(statearr_37027_37097[(2)] = null);

(statearr_37027_37097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (6))){
var inst_36917 = (state_36985[(29)]);
var inst_36916 = cljs.core.deref.call(null,cs);
var inst_36917__$1 = cljs.core.keys.call(null,inst_36916);
var inst_36918 = cljs.core.count.call(null,inst_36917__$1);
var inst_36919 = cljs.core.reset_BANG_.call(null,dctr,inst_36918);
var inst_36924 = cljs.core.seq.call(null,inst_36917__$1);
var inst_36925 = inst_36924;
var inst_36926 = null;
var inst_36927 = (0);
var inst_36928 = (0);
var state_36985__$1 = (function (){var statearr_37028 = state_36985;
(statearr_37028[(30)] = inst_36919);

(statearr_37028[(20)] = inst_36925);

(statearr_37028[(29)] = inst_36917__$1);

(statearr_37028[(21)] = inst_36927);

(statearr_37028[(9)] = inst_36928);

(statearr_37028[(12)] = inst_36926);

return statearr_37028;
})();
var statearr_37029_37098 = state_36985__$1;
(statearr_37029_37098[(2)] = null);

(statearr_37029_37098[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (28))){
var inst_36944 = (state_36985[(25)]);
var inst_36925 = (state_36985[(20)]);
var inst_36944__$1 = cljs.core.seq.call(null,inst_36925);
var state_36985__$1 = (function (){var statearr_37030 = state_36985;
(statearr_37030[(25)] = inst_36944__$1);

return statearr_37030;
})();
if(inst_36944__$1){
var statearr_37031_37099 = state_36985__$1;
(statearr_37031_37099[(1)] = (33));

} else {
var statearr_37032_37100 = state_36985__$1;
(statearr_37032_37100[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (25))){
var inst_36927 = (state_36985[(21)]);
var inst_36928 = (state_36985[(9)]);
var inst_36930 = (inst_36928 < inst_36927);
var inst_36931 = inst_36930;
var state_36985__$1 = state_36985;
if(cljs.core.truth_(inst_36931)){
var statearr_37033_37101 = state_36985__$1;
(statearr_37033_37101[(1)] = (27));

} else {
var statearr_37034_37102 = state_36985__$1;
(statearr_37034_37102[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (34))){
var state_36985__$1 = state_36985;
var statearr_37035_37103 = state_36985__$1;
(statearr_37035_37103[(2)] = null);

(statearr_37035_37103[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (17))){
var state_36985__$1 = state_36985;
var statearr_37036_37104 = state_36985__$1;
(statearr_37036_37104[(2)] = null);

(statearr_37036_37104[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (3))){
var inst_36983 = (state_36985[(2)]);
var state_36985__$1 = state_36985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36985__$1,inst_36983);
} else {
if((state_val_36986 === (12))){
var inst_36912 = (state_36985[(2)]);
var state_36985__$1 = state_36985;
var statearr_37037_37105 = state_36985__$1;
(statearr_37037_37105[(2)] = inst_36912);

(statearr_37037_37105[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (2))){
var state_36985__$1 = state_36985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36985__$1,(4),ch);
} else {
if((state_val_36986 === (23))){
var state_36985__$1 = state_36985;
var statearr_37038_37106 = state_36985__$1;
(statearr_37038_37106[(2)] = null);

(statearr_37038_37106[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (35))){
var inst_36967 = (state_36985[(2)]);
var state_36985__$1 = state_36985;
var statearr_37039_37107 = state_36985__$1;
(statearr_37039_37107[(2)] = inst_36967);

(statearr_37039_37107[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (19))){
var inst_36886 = (state_36985[(7)]);
var inst_36890 = cljs.core.chunk_first.call(null,inst_36886);
var inst_36891 = cljs.core.chunk_rest.call(null,inst_36886);
var inst_36892 = cljs.core.count.call(null,inst_36890);
var inst_36866 = inst_36891;
var inst_36867 = inst_36890;
var inst_36868 = inst_36892;
var inst_36869 = (0);
var state_36985__$1 = (function (){var statearr_37040 = state_36985;
(statearr_37040[(13)] = inst_36869);

(statearr_37040[(14)] = inst_36867);

(statearr_37040[(15)] = inst_36866);

(statearr_37040[(16)] = inst_36868);

return statearr_37040;
})();
var statearr_37041_37108 = state_36985__$1;
(statearr_37041_37108[(2)] = null);

(statearr_37041_37108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (11))){
var inst_36866 = (state_36985[(15)]);
var inst_36886 = (state_36985[(7)]);
var inst_36886__$1 = cljs.core.seq.call(null,inst_36866);
var state_36985__$1 = (function (){var statearr_37042 = state_36985;
(statearr_37042[(7)] = inst_36886__$1);

return statearr_37042;
})();
if(inst_36886__$1){
var statearr_37043_37109 = state_36985__$1;
(statearr_37043_37109[(1)] = (16));

} else {
var statearr_37044_37110 = state_36985__$1;
(statearr_37044_37110[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (9))){
var inst_36914 = (state_36985[(2)]);
var state_36985__$1 = state_36985;
var statearr_37045_37111 = state_36985__$1;
(statearr_37045_37111[(2)] = inst_36914);

(statearr_37045_37111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (5))){
var inst_36864 = cljs.core.deref.call(null,cs);
var inst_36865 = cljs.core.seq.call(null,inst_36864);
var inst_36866 = inst_36865;
var inst_36867 = null;
var inst_36868 = (0);
var inst_36869 = (0);
var state_36985__$1 = (function (){var statearr_37046 = state_36985;
(statearr_37046[(13)] = inst_36869);

(statearr_37046[(14)] = inst_36867);

(statearr_37046[(15)] = inst_36866);

(statearr_37046[(16)] = inst_36868);

return statearr_37046;
})();
var statearr_37047_37112 = state_36985__$1;
(statearr_37047_37112[(2)] = null);

(statearr_37047_37112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (14))){
var state_36985__$1 = state_36985;
var statearr_37048_37113 = state_36985__$1;
(statearr_37048_37113[(2)] = null);

(statearr_37048_37113[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (45))){
var inst_36975 = (state_36985[(2)]);
var state_36985__$1 = state_36985;
var statearr_37049_37114 = state_36985__$1;
(statearr_37049_37114[(2)] = inst_36975);

(statearr_37049_37114[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (26))){
var inst_36917 = (state_36985[(29)]);
var inst_36971 = (state_36985[(2)]);
var inst_36972 = cljs.core.seq.call(null,inst_36917);
var state_36985__$1 = (function (){var statearr_37050 = state_36985;
(statearr_37050[(31)] = inst_36971);

return statearr_37050;
})();
if(inst_36972){
var statearr_37051_37115 = state_36985__$1;
(statearr_37051_37115[(1)] = (42));

} else {
var statearr_37052_37116 = state_36985__$1;
(statearr_37052_37116[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (16))){
var inst_36886 = (state_36985[(7)]);
var inst_36888 = cljs.core.chunked_seq_QMARK_.call(null,inst_36886);
var state_36985__$1 = state_36985;
if(inst_36888){
var statearr_37053_37117 = state_36985__$1;
(statearr_37053_37117[(1)] = (19));

} else {
var statearr_37054_37118 = state_36985__$1;
(statearr_37054_37118[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (38))){
var inst_36964 = (state_36985[(2)]);
var state_36985__$1 = state_36985;
var statearr_37055_37119 = state_36985__$1;
(statearr_37055_37119[(2)] = inst_36964);

(statearr_37055_37119[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (30))){
var state_36985__$1 = state_36985;
var statearr_37056_37120 = state_36985__$1;
(statearr_37056_37120[(2)] = null);

(statearr_37056_37120[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (10))){
var inst_36869 = (state_36985[(13)]);
var inst_36867 = (state_36985[(14)]);
var inst_36875 = cljs.core._nth.call(null,inst_36867,inst_36869);
var inst_36876 = cljs.core.nth.call(null,inst_36875,(0),null);
var inst_36877 = cljs.core.nth.call(null,inst_36875,(1),null);
var state_36985__$1 = (function (){var statearr_37057 = state_36985;
(statearr_37057[(26)] = inst_36876);

return statearr_37057;
})();
if(cljs.core.truth_(inst_36877)){
var statearr_37058_37121 = state_36985__$1;
(statearr_37058_37121[(1)] = (13));

} else {
var statearr_37059_37122 = state_36985__$1;
(statearr_37059_37122[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (18))){
var inst_36910 = (state_36985[(2)]);
var state_36985__$1 = state_36985;
var statearr_37060_37123 = state_36985__$1;
(statearr_37060_37123[(2)] = inst_36910);

(statearr_37060_37123[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (42))){
var state_36985__$1 = state_36985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36985__$1,(45),dchan);
} else {
if((state_val_36986 === (37))){
var inst_36953 = (state_36985[(23)]);
var inst_36944 = (state_36985[(25)]);
var inst_36857 = (state_36985[(10)]);
var inst_36953__$1 = cljs.core.first.call(null,inst_36944);
var inst_36954 = cljs.core.async.put_BANG_.call(null,inst_36953__$1,inst_36857,done);
var state_36985__$1 = (function (){var statearr_37061 = state_36985;
(statearr_37061[(23)] = inst_36953__$1);

return statearr_37061;
})();
if(cljs.core.truth_(inst_36954)){
var statearr_37062_37124 = state_36985__$1;
(statearr_37062_37124[(1)] = (39));

} else {
var statearr_37063_37125 = state_36985__$1;
(statearr_37063_37125[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (8))){
var inst_36869 = (state_36985[(13)]);
var inst_36868 = (state_36985[(16)]);
var inst_36871 = (inst_36869 < inst_36868);
var inst_36872 = inst_36871;
var state_36985__$1 = state_36985;
if(cljs.core.truth_(inst_36872)){
var statearr_37064_37126 = state_36985__$1;
(statearr_37064_37126[(1)] = (10));

} else {
var statearr_37065_37127 = state_36985__$1;
(statearr_37065_37127[(1)] = (11));

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
});})(c__19438__auto___37073,cs,m,dchan,dctr,done))
;
return ((function (switch__19373__auto__,c__19438__auto___37073,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19374__auto__ = null;
var cljs$core$async$mult_$_state_machine__19374__auto____0 = (function (){
var statearr_37069 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37069[(0)] = cljs$core$async$mult_$_state_machine__19374__auto__);

(statearr_37069[(1)] = (1));

return statearr_37069;
});
var cljs$core$async$mult_$_state_machine__19374__auto____1 = (function (state_36985){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_36985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e37070){if((e37070 instanceof Object)){
var ex__19377__auto__ = e37070;
var statearr_37071_37128 = state_36985;
(statearr_37071_37128[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37129 = state_36985;
state_36985 = G__37129;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19374__auto__ = function(state_36985){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19374__auto____1.call(this,state_36985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19374__auto____0;
cljs$core$async$mult_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19374__auto____1;
return cljs$core$async$mult_$_state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___37073,cs,m,dchan,dctr,done))
})();
var state__19440__auto__ = (function (){var statearr_37072 = f__19439__auto__.call(null);
(statearr_37072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___37073);

return statearr_37072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___37073,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args37130 = [];
var len__17416__auto___37133 = arguments.length;
var i__17417__auto___37134 = (0);
while(true){
if((i__17417__auto___37134 < len__17416__auto___37133)){
args37130.push((arguments[i__17417__auto___37134]));

var G__37135 = (i__17417__auto___37134 + (1));
i__17417__auto___37134 = G__37135;
continue;
} else {
}
break;
}

var G__37132 = args37130.length;
switch (G__37132) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37130.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17013__auto__ = (((m == null))?null:m);
var m__17014__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,m,ch);
} else {
var m__17014__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17013__auto__ = (((m == null))?null:m);
var m__17014__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,m,ch);
} else {
var m__17014__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17013__auto__ = (((m == null))?null:m);
var m__17014__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,m);
} else {
var m__17014__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17013__auto__ = (((m == null))?null:m);
var m__17014__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,m,state_map);
} else {
var m__17014__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17013__auto__ = (((m == null))?null:m);
var m__17014__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,m,mode);
} else {
var m__17014__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17423__auto__ = [];
var len__17416__auto___37147 = arguments.length;
var i__17417__auto___37148 = (0);
while(true){
if((i__17417__auto___37148 < len__17416__auto___37147)){
args__17423__auto__.push((arguments[i__17417__auto___37148]));

var G__37149 = (i__17417__auto___37148 + (1));
i__17417__auto___37148 = G__37149;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((3) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17424__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37141){
var map__37142 = p__37141;
var map__37142__$1 = ((((!((map__37142 == null)))?((((map__37142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37142):map__37142);
var opts = map__37142__$1;
var statearr_37144_37150 = state;
(statearr_37144_37150[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__37142,map__37142__$1,opts){
return (function (val){
var statearr_37145_37151 = state;
(statearr_37145_37151[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__37142,map__37142__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_37146_37152 = state;
(statearr_37146_37152[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37137){
var G__37138 = cljs.core.first.call(null,seq37137);
var seq37137__$1 = cljs.core.next.call(null,seq37137);
var G__37139 = cljs.core.first.call(null,seq37137__$1);
var seq37137__$2 = cljs.core.next.call(null,seq37137__$1);
var G__37140 = cljs.core.first.call(null,seq37137__$2);
var seq37137__$3 = cljs.core.next.call(null,seq37137__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37138,G__37139,G__37140,seq37137__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async37316 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37316 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37317){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta37317 = meta37317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37318,meta37317__$1){
var self__ = this;
var _37318__$1 = this;
return (new cljs.core.async.t_cljs$core$async37316(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37317__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37316.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37318){
var self__ = this;
var _37318__$1 = this;
return self__.meta37317;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37316.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async37316.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37316.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async37316.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37316.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37316.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37316.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37316.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37316.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37317","meta37317",-350096097,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37316.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37316.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37316";

cljs.core.async.t_cljs$core$async37316.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async37316");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async37316 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async37316(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37317){
return (new cljs.core.async.t_cljs$core$async37316(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37317));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async37316(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19438__auto___37479 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___37479,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___37479,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_37416){
var state_val_37417 = (state_37416[(1)]);
if((state_val_37417 === (7))){
var inst_37334 = (state_37416[(2)]);
var state_37416__$1 = state_37416;
var statearr_37418_37480 = state_37416__$1;
(statearr_37418_37480[(2)] = inst_37334);

(statearr_37418_37480[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (20))){
var inst_37346 = (state_37416[(7)]);
var state_37416__$1 = state_37416;
var statearr_37419_37481 = state_37416__$1;
(statearr_37419_37481[(2)] = inst_37346);

(statearr_37419_37481[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (27))){
var state_37416__$1 = state_37416;
var statearr_37420_37482 = state_37416__$1;
(statearr_37420_37482[(2)] = null);

(statearr_37420_37482[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (1))){
var inst_37322 = (state_37416[(8)]);
var inst_37322__$1 = calc_state.call(null);
var inst_37324 = (inst_37322__$1 == null);
var inst_37325 = cljs.core.not.call(null,inst_37324);
var state_37416__$1 = (function (){var statearr_37421 = state_37416;
(statearr_37421[(8)] = inst_37322__$1);

return statearr_37421;
})();
if(inst_37325){
var statearr_37422_37483 = state_37416__$1;
(statearr_37422_37483[(1)] = (2));

} else {
var statearr_37423_37484 = state_37416__$1;
(statearr_37423_37484[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (24))){
var inst_37390 = (state_37416[(9)]);
var inst_37376 = (state_37416[(10)]);
var inst_37369 = (state_37416[(11)]);
var inst_37390__$1 = inst_37369.call(null,inst_37376);
var state_37416__$1 = (function (){var statearr_37424 = state_37416;
(statearr_37424[(9)] = inst_37390__$1);

return statearr_37424;
})();
if(cljs.core.truth_(inst_37390__$1)){
var statearr_37425_37485 = state_37416__$1;
(statearr_37425_37485[(1)] = (29));

} else {
var statearr_37426_37486 = state_37416__$1;
(statearr_37426_37486[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (4))){
var inst_37337 = (state_37416[(2)]);
var state_37416__$1 = state_37416;
if(cljs.core.truth_(inst_37337)){
var statearr_37427_37487 = state_37416__$1;
(statearr_37427_37487[(1)] = (8));

} else {
var statearr_37428_37488 = state_37416__$1;
(statearr_37428_37488[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (15))){
var inst_37363 = (state_37416[(2)]);
var state_37416__$1 = state_37416;
if(cljs.core.truth_(inst_37363)){
var statearr_37429_37489 = state_37416__$1;
(statearr_37429_37489[(1)] = (19));

} else {
var statearr_37430_37490 = state_37416__$1;
(statearr_37430_37490[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (21))){
var inst_37368 = (state_37416[(12)]);
var inst_37368__$1 = (state_37416[(2)]);
var inst_37369 = cljs.core.get.call(null,inst_37368__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37370 = cljs.core.get.call(null,inst_37368__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37371 = cljs.core.get.call(null,inst_37368__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37416__$1 = (function (){var statearr_37431 = state_37416;
(statearr_37431[(12)] = inst_37368__$1);

(statearr_37431[(13)] = inst_37370);

(statearr_37431[(11)] = inst_37369);

return statearr_37431;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_37416__$1,(22),inst_37371);
} else {
if((state_val_37417 === (31))){
var inst_37398 = (state_37416[(2)]);
var state_37416__$1 = state_37416;
if(cljs.core.truth_(inst_37398)){
var statearr_37432_37491 = state_37416__$1;
(statearr_37432_37491[(1)] = (32));

} else {
var statearr_37433_37492 = state_37416__$1;
(statearr_37433_37492[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (32))){
var inst_37375 = (state_37416[(14)]);
var state_37416__$1 = state_37416;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37416__$1,(35),out,inst_37375);
} else {
if((state_val_37417 === (33))){
var inst_37368 = (state_37416[(12)]);
var inst_37346 = inst_37368;
var state_37416__$1 = (function (){var statearr_37434 = state_37416;
(statearr_37434[(7)] = inst_37346);

return statearr_37434;
})();
var statearr_37435_37493 = state_37416__$1;
(statearr_37435_37493[(2)] = null);

(statearr_37435_37493[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (13))){
var inst_37346 = (state_37416[(7)]);
var inst_37353 = inst_37346.cljs$lang$protocol_mask$partition0$;
var inst_37354 = (inst_37353 & (64));
var inst_37355 = inst_37346.cljs$core$ISeq$;
var inst_37356 = (inst_37354) || (inst_37355);
var state_37416__$1 = state_37416;
if(cljs.core.truth_(inst_37356)){
var statearr_37436_37494 = state_37416__$1;
(statearr_37436_37494[(1)] = (16));

} else {
var statearr_37437_37495 = state_37416__$1;
(statearr_37437_37495[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (22))){
var inst_37376 = (state_37416[(10)]);
var inst_37375 = (state_37416[(14)]);
var inst_37374 = (state_37416[(2)]);
var inst_37375__$1 = cljs.core.nth.call(null,inst_37374,(0),null);
var inst_37376__$1 = cljs.core.nth.call(null,inst_37374,(1),null);
var inst_37377 = (inst_37375__$1 == null);
var inst_37378 = cljs.core._EQ_.call(null,inst_37376__$1,change);
var inst_37379 = (inst_37377) || (inst_37378);
var state_37416__$1 = (function (){var statearr_37438 = state_37416;
(statearr_37438[(10)] = inst_37376__$1);

(statearr_37438[(14)] = inst_37375__$1);

return statearr_37438;
})();
if(cljs.core.truth_(inst_37379)){
var statearr_37439_37496 = state_37416__$1;
(statearr_37439_37496[(1)] = (23));

} else {
var statearr_37440_37497 = state_37416__$1;
(statearr_37440_37497[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (36))){
var inst_37368 = (state_37416[(12)]);
var inst_37346 = inst_37368;
var state_37416__$1 = (function (){var statearr_37441 = state_37416;
(statearr_37441[(7)] = inst_37346);

return statearr_37441;
})();
var statearr_37442_37498 = state_37416__$1;
(statearr_37442_37498[(2)] = null);

(statearr_37442_37498[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (29))){
var inst_37390 = (state_37416[(9)]);
var state_37416__$1 = state_37416;
var statearr_37443_37499 = state_37416__$1;
(statearr_37443_37499[(2)] = inst_37390);

(statearr_37443_37499[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (6))){
var state_37416__$1 = state_37416;
var statearr_37444_37500 = state_37416__$1;
(statearr_37444_37500[(2)] = false);

(statearr_37444_37500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (28))){
var inst_37386 = (state_37416[(2)]);
var inst_37387 = calc_state.call(null);
var inst_37346 = inst_37387;
var state_37416__$1 = (function (){var statearr_37445 = state_37416;
(statearr_37445[(15)] = inst_37386);

(statearr_37445[(7)] = inst_37346);

return statearr_37445;
})();
var statearr_37446_37501 = state_37416__$1;
(statearr_37446_37501[(2)] = null);

(statearr_37446_37501[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (25))){
var inst_37412 = (state_37416[(2)]);
var state_37416__$1 = state_37416;
var statearr_37447_37502 = state_37416__$1;
(statearr_37447_37502[(2)] = inst_37412);

(statearr_37447_37502[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (34))){
var inst_37410 = (state_37416[(2)]);
var state_37416__$1 = state_37416;
var statearr_37448_37503 = state_37416__$1;
(statearr_37448_37503[(2)] = inst_37410);

(statearr_37448_37503[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (17))){
var state_37416__$1 = state_37416;
var statearr_37449_37504 = state_37416__$1;
(statearr_37449_37504[(2)] = false);

(statearr_37449_37504[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (3))){
var state_37416__$1 = state_37416;
var statearr_37450_37505 = state_37416__$1;
(statearr_37450_37505[(2)] = false);

(statearr_37450_37505[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (12))){
var inst_37414 = (state_37416[(2)]);
var state_37416__$1 = state_37416;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37416__$1,inst_37414);
} else {
if((state_val_37417 === (2))){
var inst_37322 = (state_37416[(8)]);
var inst_37327 = inst_37322.cljs$lang$protocol_mask$partition0$;
var inst_37328 = (inst_37327 & (64));
var inst_37329 = inst_37322.cljs$core$ISeq$;
var inst_37330 = (inst_37328) || (inst_37329);
var state_37416__$1 = state_37416;
if(cljs.core.truth_(inst_37330)){
var statearr_37451_37506 = state_37416__$1;
(statearr_37451_37506[(1)] = (5));

} else {
var statearr_37452_37507 = state_37416__$1;
(statearr_37452_37507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (23))){
var inst_37375 = (state_37416[(14)]);
var inst_37381 = (inst_37375 == null);
var state_37416__$1 = state_37416;
if(cljs.core.truth_(inst_37381)){
var statearr_37453_37508 = state_37416__$1;
(statearr_37453_37508[(1)] = (26));

} else {
var statearr_37454_37509 = state_37416__$1;
(statearr_37454_37509[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (35))){
var inst_37401 = (state_37416[(2)]);
var state_37416__$1 = state_37416;
if(cljs.core.truth_(inst_37401)){
var statearr_37455_37510 = state_37416__$1;
(statearr_37455_37510[(1)] = (36));

} else {
var statearr_37456_37511 = state_37416__$1;
(statearr_37456_37511[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (19))){
var inst_37346 = (state_37416[(7)]);
var inst_37365 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37346);
var state_37416__$1 = state_37416;
var statearr_37457_37512 = state_37416__$1;
(statearr_37457_37512[(2)] = inst_37365);

(statearr_37457_37512[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (11))){
var inst_37346 = (state_37416[(7)]);
var inst_37350 = (inst_37346 == null);
var inst_37351 = cljs.core.not.call(null,inst_37350);
var state_37416__$1 = state_37416;
if(inst_37351){
var statearr_37458_37513 = state_37416__$1;
(statearr_37458_37513[(1)] = (13));

} else {
var statearr_37459_37514 = state_37416__$1;
(statearr_37459_37514[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (9))){
var inst_37322 = (state_37416[(8)]);
var state_37416__$1 = state_37416;
var statearr_37460_37515 = state_37416__$1;
(statearr_37460_37515[(2)] = inst_37322);

(statearr_37460_37515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (5))){
var state_37416__$1 = state_37416;
var statearr_37461_37516 = state_37416__$1;
(statearr_37461_37516[(2)] = true);

(statearr_37461_37516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (14))){
var state_37416__$1 = state_37416;
var statearr_37462_37517 = state_37416__$1;
(statearr_37462_37517[(2)] = false);

(statearr_37462_37517[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (26))){
var inst_37376 = (state_37416[(10)]);
var inst_37383 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_37376);
var state_37416__$1 = state_37416;
var statearr_37463_37518 = state_37416__$1;
(statearr_37463_37518[(2)] = inst_37383);

(statearr_37463_37518[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (16))){
var state_37416__$1 = state_37416;
var statearr_37464_37519 = state_37416__$1;
(statearr_37464_37519[(2)] = true);

(statearr_37464_37519[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (38))){
var inst_37406 = (state_37416[(2)]);
var state_37416__$1 = state_37416;
var statearr_37465_37520 = state_37416__$1;
(statearr_37465_37520[(2)] = inst_37406);

(statearr_37465_37520[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (30))){
var inst_37370 = (state_37416[(13)]);
var inst_37376 = (state_37416[(10)]);
var inst_37369 = (state_37416[(11)]);
var inst_37393 = cljs.core.empty_QMARK_.call(null,inst_37369);
var inst_37394 = inst_37370.call(null,inst_37376);
var inst_37395 = cljs.core.not.call(null,inst_37394);
var inst_37396 = (inst_37393) && (inst_37395);
var state_37416__$1 = state_37416;
var statearr_37466_37521 = state_37416__$1;
(statearr_37466_37521[(2)] = inst_37396);

(statearr_37466_37521[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (10))){
var inst_37322 = (state_37416[(8)]);
var inst_37342 = (state_37416[(2)]);
var inst_37343 = cljs.core.get.call(null,inst_37342,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37344 = cljs.core.get.call(null,inst_37342,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37345 = cljs.core.get.call(null,inst_37342,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37346 = inst_37322;
var state_37416__$1 = (function (){var statearr_37467 = state_37416;
(statearr_37467[(7)] = inst_37346);

(statearr_37467[(16)] = inst_37345);

(statearr_37467[(17)] = inst_37344);

(statearr_37467[(18)] = inst_37343);

return statearr_37467;
})();
var statearr_37468_37522 = state_37416__$1;
(statearr_37468_37522[(2)] = null);

(statearr_37468_37522[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (18))){
var inst_37360 = (state_37416[(2)]);
var state_37416__$1 = state_37416;
var statearr_37469_37523 = state_37416__$1;
(statearr_37469_37523[(2)] = inst_37360);

(statearr_37469_37523[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (37))){
var state_37416__$1 = state_37416;
var statearr_37470_37524 = state_37416__$1;
(statearr_37470_37524[(2)] = null);

(statearr_37470_37524[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (8))){
var inst_37322 = (state_37416[(8)]);
var inst_37339 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37322);
var state_37416__$1 = state_37416;
var statearr_37471_37525 = state_37416__$1;
(statearr_37471_37525[(2)] = inst_37339);

(statearr_37471_37525[(1)] = (10));


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
});})(c__19438__auto___37479,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19373__auto__,c__19438__auto___37479,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19374__auto__ = null;
var cljs$core$async$mix_$_state_machine__19374__auto____0 = (function (){
var statearr_37475 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37475[(0)] = cljs$core$async$mix_$_state_machine__19374__auto__);

(statearr_37475[(1)] = (1));

return statearr_37475;
});
var cljs$core$async$mix_$_state_machine__19374__auto____1 = (function (state_37416){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_37416);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e37476){if((e37476 instanceof Object)){
var ex__19377__auto__ = e37476;
var statearr_37477_37526 = state_37416;
(statearr_37477_37526[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37527 = state_37416;
state_37416 = G__37527;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19374__auto__ = function(state_37416){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19374__auto____1.call(this,state_37416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19374__auto____0;
cljs$core$async$mix_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19374__auto____1;
return cljs$core$async$mix_$_state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___37479,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19440__auto__ = (function (){var statearr_37478 = f__19439__auto__.call(null);
(statearr_37478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___37479);

return statearr_37478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___37479,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17013__auto__ = (((p == null))?null:p);
var m__17014__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17014__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17013__auto__ = (((p == null))?null:p);
var m__17014__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,p,v,ch);
} else {
var m__17014__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args37528 = [];
var len__17416__auto___37531 = arguments.length;
var i__17417__auto___37532 = (0);
while(true){
if((i__17417__auto___37532 < len__17416__auto___37531)){
args37528.push((arguments[i__17417__auto___37532]));

var G__37533 = (i__17417__auto___37532 + (1));
i__17417__auto___37532 = G__37533;
continue;
} else {
}
break;
}

var G__37530 = args37528.length;
switch (G__37530) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37528.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17013__auto__ = (((p == null))?null:p);
var m__17014__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,p);
} else {
var m__17014__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17013__auto__ = (((p == null))?null:p);
var m__17014__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,p,v);
} else {
var m__17014__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args37536 = [];
var len__17416__auto___37661 = arguments.length;
var i__17417__auto___37662 = (0);
while(true){
if((i__17417__auto___37662 < len__17416__auto___37661)){
args37536.push((arguments[i__17417__auto___37662]));

var G__37663 = (i__17417__auto___37662 + (1));
i__17417__auto___37662 = G__37663;
continue;
} else {
}
break;
}

var G__37538 = args37536.length;
switch (G__37538) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37536.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16358__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16358__auto__,mults){
return (function (p1__37535_SHARP_){
if(cljs.core.truth_(p1__37535_SHARP_.call(null,topic))){
return p1__37535_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__37535_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16358__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async37539 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37539 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37540){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37540 = meta37540;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_37541,meta37540__$1){
var self__ = this;
var _37541__$1 = this;
return (new cljs.core.async.t_cljs$core$async37539(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37540__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37539.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_37541){
var self__ = this;
var _37541__$1 = this;
return self__.meta37540;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37539.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async37539.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37539.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async37539.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37539.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37539.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37539.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37539.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37540","meta37540",-1197757847,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37539.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37539.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37539";

cljs.core.async.t_cljs$core$async37539.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async37539");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async37539 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async37539(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37540){
return (new cljs.core.async.t_cljs$core$async37539(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37540));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async37539(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19438__auto___37665 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___37665,mults,ensure_mult,p){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___37665,mults,ensure_mult,p){
return (function (state_37613){
var state_val_37614 = (state_37613[(1)]);
if((state_val_37614 === (7))){
var inst_37609 = (state_37613[(2)]);
var state_37613__$1 = state_37613;
var statearr_37615_37666 = state_37613__$1;
(statearr_37615_37666[(2)] = inst_37609);

(statearr_37615_37666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (20))){
var state_37613__$1 = state_37613;
var statearr_37616_37667 = state_37613__$1;
(statearr_37616_37667[(2)] = null);

(statearr_37616_37667[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (1))){
var state_37613__$1 = state_37613;
var statearr_37617_37668 = state_37613__$1;
(statearr_37617_37668[(2)] = null);

(statearr_37617_37668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (24))){
var inst_37592 = (state_37613[(7)]);
var inst_37601 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_37592);
var state_37613__$1 = state_37613;
var statearr_37618_37669 = state_37613__$1;
(statearr_37618_37669[(2)] = inst_37601);

(statearr_37618_37669[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (4))){
var inst_37544 = (state_37613[(8)]);
var inst_37544__$1 = (state_37613[(2)]);
var inst_37545 = (inst_37544__$1 == null);
var state_37613__$1 = (function (){var statearr_37619 = state_37613;
(statearr_37619[(8)] = inst_37544__$1);

return statearr_37619;
})();
if(cljs.core.truth_(inst_37545)){
var statearr_37620_37670 = state_37613__$1;
(statearr_37620_37670[(1)] = (5));

} else {
var statearr_37621_37671 = state_37613__$1;
(statearr_37621_37671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (15))){
var inst_37586 = (state_37613[(2)]);
var state_37613__$1 = state_37613;
var statearr_37622_37672 = state_37613__$1;
(statearr_37622_37672[(2)] = inst_37586);

(statearr_37622_37672[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (21))){
var inst_37606 = (state_37613[(2)]);
var state_37613__$1 = (function (){var statearr_37623 = state_37613;
(statearr_37623[(9)] = inst_37606);

return statearr_37623;
})();
var statearr_37624_37673 = state_37613__$1;
(statearr_37624_37673[(2)] = null);

(statearr_37624_37673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (13))){
var inst_37568 = (state_37613[(10)]);
var inst_37570 = cljs.core.chunked_seq_QMARK_.call(null,inst_37568);
var state_37613__$1 = state_37613;
if(inst_37570){
var statearr_37625_37674 = state_37613__$1;
(statearr_37625_37674[(1)] = (16));

} else {
var statearr_37626_37675 = state_37613__$1;
(statearr_37626_37675[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (22))){
var inst_37598 = (state_37613[(2)]);
var state_37613__$1 = state_37613;
if(cljs.core.truth_(inst_37598)){
var statearr_37627_37676 = state_37613__$1;
(statearr_37627_37676[(1)] = (23));

} else {
var statearr_37628_37677 = state_37613__$1;
(statearr_37628_37677[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (6))){
var inst_37544 = (state_37613[(8)]);
var inst_37592 = (state_37613[(7)]);
var inst_37594 = (state_37613[(11)]);
var inst_37592__$1 = topic_fn.call(null,inst_37544);
var inst_37593 = cljs.core.deref.call(null,mults);
var inst_37594__$1 = cljs.core.get.call(null,inst_37593,inst_37592__$1);
var state_37613__$1 = (function (){var statearr_37629 = state_37613;
(statearr_37629[(7)] = inst_37592__$1);

(statearr_37629[(11)] = inst_37594__$1);

return statearr_37629;
})();
if(cljs.core.truth_(inst_37594__$1)){
var statearr_37630_37678 = state_37613__$1;
(statearr_37630_37678[(1)] = (19));

} else {
var statearr_37631_37679 = state_37613__$1;
(statearr_37631_37679[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (25))){
var inst_37603 = (state_37613[(2)]);
var state_37613__$1 = state_37613;
var statearr_37632_37680 = state_37613__$1;
(statearr_37632_37680[(2)] = inst_37603);

(statearr_37632_37680[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (17))){
var inst_37568 = (state_37613[(10)]);
var inst_37577 = cljs.core.first.call(null,inst_37568);
var inst_37578 = cljs.core.async.muxch_STAR_.call(null,inst_37577);
var inst_37579 = cljs.core.async.close_BANG_.call(null,inst_37578);
var inst_37580 = cljs.core.next.call(null,inst_37568);
var inst_37554 = inst_37580;
var inst_37555 = null;
var inst_37556 = (0);
var inst_37557 = (0);
var state_37613__$1 = (function (){var statearr_37633 = state_37613;
(statearr_37633[(12)] = inst_37555);

(statearr_37633[(13)] = inst_37554);

(statearr_37633[(14)] = inst_37579);

(statearr_37633[(15)] = inst_37556);

(statearr_37633[(16)] = inst_37557);

return statearr_37633;
})();
var statearr_37634_37681 = state_37613__$1;
(statearr_37634_37681[(2)] = null);

(statearr_37634_37681[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (3))){
var inst_37611 = (state_37613[(2)]);
var state_37613__$1 = state_37613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37613__$1,inst_37611);
} else {
if((state_val_37614 === (12))){
var inst_37588 = (state_37613[(2)]);
var state_37613__$1 = state_37613;
var statearr_37635_37682 = state_37613__$1;
(statearr_37635_37682[(2)] = inst_37588);

(statearr_37635_37682[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (2))){
var state_37613__$1 = state_37613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37613__$1,(4),ch);
} else {
if((state_val_37614 === (23))){
var state_37613__$1 = state_37613;
var statearr_37636_37683 = state_37613__$1;
(statearr_37636_37683[(2)] = null);

(statearr_37636_37683[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (19))){
var inst_37544 = (state_37613[(8)]);
var inst_37594 = (state_37613[(11)]);
var inst_37596 = cljs.core.async.muxch_STAR_.call(null,inst_37594);
var state_37613__$1 = state_37613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37613__$1,(22),inst_37596,inst_37544);
} else {
if((state_val_37614 === (11))){
var inst_37554 = (state_37613[(13)]);
var inst_37568 = (state_37613[(10)]);
var inst_37568__$1 = cljs.core.seq.call(null,inst_37554);
var state_37613__$1 = (function (){var statearr_37637 = state_37613;
(statearr_37637[(10)] = inst_37568__$1);

return statearr_37637;
})();
if(inst_37568__$1){
var statearr_37638_37684 = state_37613__$1;
(statearr_37638_37684[(1)] = (13));

} else {
var statearr_37639_37685 = state_37613__$1;
(statearr_37639_37685[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (9))){
var inst_37590 = (state_37613[(2)]);
var state_37613__$1 = state_37613;
var statearr_37640_37686 = state_37613__$1;
(statearr_37640_37686[(2)] = inst_37590);

(statearr_37640_37686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (5))){
var inst_37551 = cljs.core.deref.call(null,mults);
var inst_37552 = cljs.core.vals.call(null,inst_37551);
var inst_37553 = cljs.core.seq.call(null,inst_37552);
var inst_37554 = inst_37553;
var inst_37555 = null;
var inst_37556 = (0);
var inst_37557 = (0);
var state_37613__$1 = (function (){var statearr_37641 = state_37613;
(statearr_37641[(12)] = inst_37555);

(statearr_37641[(13)] = inst_37554);

(statearr_37641[(15)] = inst_37556);

(statearr_37641[(16)] = inst_37557);

return statearr_37641;
})();
var statearr_37642_37687 = state_37613__$1;
(statearr_37642_37687[(2)] = null);

(statearr_37642_37687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (14))){
var state_37613__$1 = state_37613;
var statearr_37646_37688 = state_37613__$1;
(statearr_37646_37688[(2)] = null);

(statearr_37646_37688[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (16))){
var inst_37568 = (state_37613[(10)]);
var inst_37572 = cljs.core.chunk_first.call(null,inst_37568);
var inst_37573 = cljs.core.chunk_rest.call(null,inst_37568);
var inst_37574 = cljs.core.count.call(null,inst_37572);
var inst_37554 = inst_37573;
var inst_37555 = inst_37572;
var inst_37556 = inst_37574;
var inst_37557 = (0);
var state_37613__$1 = (function (){var statearr_37647 = state_37613;
(statearr_37647[(12)] = inst_37555);

(statearr_37647[(13)] = inst_37554);

(statearr_37647[(15)] = inst_37556);

(statearr_37647[(16)] = inst_37557);

return statearr_37647;
})();
var statearr_37648_37689 = state_37613__$1;
(statearr_37648_37689[(2)] = null);

(statearr_37648_37689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (10))){
var inst_37555 = (state_37613[(12)]);
var inst_37554 = (state_37613[(13)]);
var inst_37556 = (state_37613[(15)]);
var inst_37557 = (state_37613[(16)]);
var inst_37562 = cljs.core._nth.call(null,inst_37555,inst_37557);
var inst_37563 = cljs.core.async.muxch_STAR_.call(null,inst_37562);
var inst_37564 = cljs.core.async.close_BANG_.call(null,inst_37563);
var inst_37565 = (inst_37557 + (1));
var tmp37643 = inst_37555;
var tmp37644 = inst_37554;
var tmp37645 = inst_37556;
var inst_37554__$1 = tmp37644;
var inst_37555__$1 = tmp37643;
var inst_37556__$1 = tmp37645;
var inst_37557__$1 = inst_37565;
var state_37613__$1 = (function (){var statearr_37649 = state_37613;
(statearr_37649[(17)] = inst_37564);

(statearr_37649[(12)] = inst_37555__$1);

(statearr_37649[(13)] = inst_37554__$1);

(statearr_37649[(15)] = inst_37556__$1);

(statearr_37649[(16)] = inst_37557__$1);

return statearr_37649;
})();
var statearr_37650_37690 = state_37613__$1;
(statearr_37650_37690[(2)] = null);

(statearr_37650_37690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (18))){
var inst_37583 = (state_37613[(2)]);
var state_37613__$1 = state_37613;
var statearr_37651_37691 = state_37613__$1;
(statearr_37651_37691[(2)] = inst_37583);

(statearr_37651_37691[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (8))){
var inst_37556 = (state_37613[(15)]);
var inst_37557 = (state_37613[(16)]);
var inst_37559 = (inst_37557 < inst_37556);
var inst_37560 = inst_37559;
var state_37613__$1 = state_37613;
if(cljs.core.truth_(inst_37560)){
var statearr_37652_37692 = state_37613__$1;
(statearr_37652_37692[(1)] = (10));

} else {
var statearr_37653_37693 = state_37613__$1;
(statearr_37653_37693[(1)] = (11));

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
});})(c__19438__auto___37665,mults,ensure_mult,p))
;
return ((function (switch__19373__auto__,c__19438__auto___37665,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19374__auto__ = null;
var cljs$core$async$state_machine__19374__auto____0 = (function (){
var statearr_37657 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37657[(0)] = cljs$core$async$state_machine__19374__auto__);

(statearr_37657[(1)] = (1));

return statearr_37657;
});
var cljs$core$async$state_machine__19374__auto____1 = (function (state_37613){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_37613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e37658){if((e37658 instanceof Object)){
var ex__19377__auto__ = e37658;
var statearr_37659_37694 = state_37613;
(statearr_37659_37694[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37695 = state_37613;
state_37613 = G__37695;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$state_machine__19374__auto__ = function(state_37613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19374__auto____1.call(this,state_37613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19374__auto____0;
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19374__auto____1;
return cljs$core$async$state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___37665,mults,ensure_mult,p))
})();
var state__19440__auto__ = (function (){var statearr_37660 = f__19439__auto__.call(null);
(statearr_37660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___37665);

return statearr_37660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___37665,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args37696 = [];
var len__17416__auto___37699 = arguments.length;
var i__17417__auto___37700 = (0);
while(true){
if((i__17417__auto___37700 < len__17416__auto___37699)){
args37696.push((arguments[i__17417__auto___37700]));

var G__37701 = (i__17417__auto___37700 + (1));
i__17417__auto___37700 = G__37701;
continue;
} else {
}
break;
}

var G__37698 = args37696.length;
switch (G__37698) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37696.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args37703 = [];
var len__17416__auto___37706 = arguments.length;
var i__17417__auto___37707 = (0);
while(true){
if((i__17417__auto___37707 < len__17416__auto___37706)){
args37703.push((arguments[i__17417__auto___37707]));

var G__37708 = (i__17417__auto___37707 + (1));
i__17417__auto___37707 = G__37708;
continue;
} else {
}
break;
}

var G__37705 = args37703.length;
switch (G__37705) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37703.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args37710 = [];
var len__17416__auto___37781 = arguments.length;
var i__17417__auto___37782 = (0);
while(true){
if((i__17417__auto___37782 < len__17416__auto___37781)){
args37710.push((arguments[i__17417__auto___37782]));

var G__37783 = (i__17417__auto___37782 + (1));
i__17417__auto___37782 = G__37783;
continue;
} else {
}
break;
}

var G__37712 = args37710.length;
switch (G__37712) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37710.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19438__auto___37785 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___37785,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___37785,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_37751){
var state_val_37752 = (state_37751[(1)]);
if((state_val_37752 === (7))){
var state_37751__$1 = state_37751;
var statearr_37753_37786 = state_37751__$1;
(statearr_37753_37786[(2)] = null);

(statearr_37753_37786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37752 === (1))){
var state_37751__$1 = state_37751;
var statearr_37754_37787 = state_37751__$1;
(statearr_37754_37787[(2)] = null);

(statearr_37754_37787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37752 === (4))){
var inst_37715 = (state_37751[(7)]);
var inst_37717 = (inst_37715 < cnt);
var state_37751__$1 = state_37751;
if(cljs.core.truth_(inst_37717)){
var statearr_37755_37788 = state_37751__$1;
(statearr_37755_37788[(1)] = (6));

} else {
var statearr_37756_37789 = state_37751__$1;
(statearr_37756_37789[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37752 === (15))){
var inst_37747 = (state_37751[(2)]);
var state_37751__$1 = state_37751;
var statearr_37757_37790 = state_37751__$1;
(statearr_37757_37790[(2)] = inst_37747);

(statearr_37757_37790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37752 === (13))){
var inst_37740 = cljs.core.async.close_BANG_.call(null,out);
var state_37751__$1 = state_37751;
var statearr_37758_37791 = state_37751__$1;
(statearr_37758_37791[(2)] = inst_37740);

(statearr_37758_37791[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37752 === (6))){
var state_37751__$1 = state_37751;
var statearr_37759_37792 = state_37751__$1;
(statearr_37759_37792[(2)] = null);

(statearr_37759_37792[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37752 === (3))){
var inst_37749 = (state_37751[(2)]);
var state_37751__$1 = state_37751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37751__$1,inst_37749);
} else {
if((state_val_37752 === (12))){
var inst_37737 = (state_37751[(8)]);
var inst_37737__$1 = (state_37751[(2)]);
var inst_37738 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_37737__$1);
var state_37751__$1 = (function (){var statearr_37760 = state_37751;
(statearr_37760[(8)] = inst_37737__$1);

return statearr_37760;
})();
if(cljs.core.truth_(inst_37738)){
var statearr_37761_37793 = state_37751__$1;
(statearr_37761_37793[(1)] = (13));

} else {
var statearr_37762_37794 = state_37751__$1;
(statearr_37762_37794[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37752 === (2))){
var inst_37714 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_37715 = (0);
var state_37751__$1 = (function (){var statearr_37763 = state_37751;
(statearr_37763[(9)] = inst_37714);

(statearr_37763[(7)] = inst_37715);

return statearr_37763;
})();
var statearr_37764_37795 = state_37751__$1;
(statearr_37764_37795[(2)] = null);

(statearr_37764_37795[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37752 === (11))){
var inst_37715 = (state_37751[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37751,(10),Object,null,(9));
var inst_37724 = chs__$1.call(null,inst_37715);
var inst_37725 = done.call(null,inst_37715);
var inst_37726 = cljs.core.async.take_BANG_.call(null,inst_37724,inst_37725);
var state_37751__$1 = state_37751;
var statearr_37765_37796 = state_37751__$1;
(statearr_37765_37796[(2)] = inst_37726);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37751__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37752 === (9))){
var inst_37715 = (state_37751[(7)]);
var inst_37728 = (state_37751[(2)]);
var inst_37729 = (inst_37715 + (1));
var inst_37715__$1 = inst_37729;
var state_37751__$1 = (function (){var statearr_37766 = state_37751;
(statearr_37766[(10)] = inst_37728);

(statearr_37766[(7)] = inst_37715__$1);

return statearr_37766;
})();
var statearr_37767_37797 = state_37751__$1;
(statearr_37767_37797[(2)] = null);

(statearr_37767_37797[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37752 === (5))){
var inst_37735 = (state_37751[(2)]);
var state_37751__$1 = (function (){var statearr_37768 = state_37751;
(statearr_37768[(11)] = inst_37735);

return statearr_37768;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37751__$1,(12),dchan);
} else {
if((state_val_37752 === (14))){
var inst_37737 = (state_37751[(8)]);
var inst_37742 = cljs.core.apply.call(null,f,inst_37737);
var state_37751__$1 = state_37751;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37751__$1,(16),out,inst_37742);
} else {
if((state_val_37752 === (16))){
var inst_37744 = (state_37751[(2)]);
var state_37751__$1 = (function (){var statearr_37769 = state_37751;
(statearr_37769[(12)] = inst_37744);

return statearr_37769;
})();
var statearr_37770_37798 = state_37751__$1;
(statearr_37770_37798[(2)] = null);

(statearr_37770_37798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37752 === (10))){
var inst_37719 = (state_37751[(2)]);
var inst_37720 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_37751__$1 = (function (){var statearr_37771 = state_37751;
(statearr_37771[(13)] = inst_37719);

return statearr_37771;
})();
var statearr_37772_37799 = state_37751__$1;
(statearr_37772_37799[(2)] = inst_37720);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37751__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37752 === (8))){
var inst_37733 = (state_37751[(2)]);
var state_37751__$1 = state_37751;
var statearr_37773_37800 = state_37751__$1;
(statearr_37773_37800[(2)] = inst_37733);

(statearr_37773_37800[(1)] = (5));


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
});})(c__19438__auto___37785,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19373__auto__,c__19438__auto___37785,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19374__auto__ = null;
var cljs$core$async$state_machine__19374__auto____0 = (function (){
var statearr_37777 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37777[(0)] = cljs$core$async$state_machine__19374__auto__);

(statearr_37777[(1)] = (1));

return statearr_37777;
});
var cljs$core$async$state_machine__19374__auto____1 = (function (state_37751){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_37751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e37778){if((e37778 instanceof Object)){
var ex__19377__auto__ = e37778;
var statearr_37779_37801 = state_37751;
(statearr_37779_37801[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37802 = state_37751;
state_37751 = G__37802;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$state_machine__19374__auto__ = function(state_37751){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19374__auto____1.call(this,state_37751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19374__auto____0;
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19374__auto____1;
return cljs$core$async$state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___37785,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19440__auto__ = (function (){var statearr_37780 = f__19439__auto__.call(null);
(statearr_37780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___37785);

return statearr_37780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___37785,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args37804 = [];
var len__17416__auto___37860 = arguments.length;
var i__17417__auto___37861 = (0);
while(true){
if((i__17417__auto___37861 < len__17416__auto___37860)){
args37804.push((arguments[i__17417__auto___37861]));

var G__37862 = (i__17417__auto___37861 + (1));
i__17417__auto___37861 = G__37862;
continue;
} else {
}
break;
}

var G__37806 = args37804.length;
switch (G__37806) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37804.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19438__auto___37864 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___37864,out){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___37864,out){
return (function (state_37836){
var state_val_37837 = (state_37836[(1)]);
if((state_val_37837 === (7))){
var inst_37816 = (state_37836[(7)]);
var inst_37815 = (state_37836[(8)]);
var inst_37815__$1 = (state_37836[(2)]);
var inst_37816__$1 = cljs.core.nth.call(null,inst_37815__$1,(0),null);
var inst_37817 = cljs.core.nth.call(null,inst_37815__$1,(1),null);
var inst_37818 = (inst_37816__$1 == null);
var state_37836__$1 = (function (){var statearr_37838 = state_37836;
(statearr_37838[(9)] = inst_37817);

(statearr_37838[(7)] = inst_37816__$1);

(statearr_37838[(8)] = inst_37815__$1);

return statearr_37838;
})();
if(cljs.core.truth_(inst_37818)){
var statearr_37839_37865 = state_37836__$1;
(statearr_37839_37865[(1)] = (8));

} else {
var statearr_37840_37866 = state_37836__$1;
(statearr_37840_37866[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37837 === (1))){
var inst_37807 = cljs.core.vec.call(null,chs);
var inst_37808 = inst_37807;
var state_37836__$1 = (function (){var statearr_37841 = state_37836;
(statearr_37841[(10)] = inst_37808);

return statearr_37841;
})();
var statearr_37842_37867 = state_37836__$1;
(statearr_37842_37867[(2)] = null);

(statearr_37842_37867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37837 === (4))){
var inst_37808 = (state_37836[(10)]);
var state_37836__$1 = state_37836;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37836__$1,(7),inst_37808);
} else {
if((state_val_37837 === (6))){
var inst_37832 = (state_37836[(2)]);
var state_37836__$1 = state_37836;
var statearr_37843_37868 = state_37836__$1;
(statearr_37843_37868[(2)] = inst_37832);

(statearr_37843_37868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37837 === (3))){
var inst_37834 = (state_37836[(2)]);
var state_37836__$1 = state_37836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37836__$1,inst_37834);
} else {
if((state_val_37837 === (2))){
var inst_37808 = (state_37836[(10)]);
var inst_37810 = cljs.core.count.call(null,inst_37808);
var inst_37811 = (inst_37810 > (0));
var state_37836__$1 = state_37836;
if(cljs.core.truth_(inst_37811)){
var statearr_37845_37869 = state_37836__$1;
(statearr_37845_37869[(1)] = (4));

} else {
var statearr_37846_37870 = state_37836__$1;
(statearr_37846_37870[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37837 === (11))){
var inst_37808 = (state_37836[(10)]);
var inst_37825 = (state_37836[(2)]);
var tmp37844 = inst_37808;
var inst_37808__$1 = tmp37844;
var state_37836__$1 = (function (){var statearr_37847 = state_37836;
(statearr_37847[(10)] = inst_37808__$1);

(statearr_37847[(11)] = inst_37825);

return statearr_37847;
})();
var statearr_37848_37871 = state_37836__$1;
(statearr_37848_37871[(2)] = null);

(statearr_37848_37871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37837 === (9))){
var inst_37816 = (state_37836[(7)]);
var state_37836__$1 = state_37836;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37836__$1,(11),out,inst_37816);
} else {
if((state_val_37837 === (5))){
var inst_37830 = cljs.core.async.close_BANG_.call(null,out);
var state_37836__$1 = state_37836;
var statearr_37849_37872 = state_37836__$1;
(statearr_37849_37872[(2)] = inst_37830);

(statearr_37849_37872[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37837 === (10))){
var inst_37828 = (state_37836[(2)]);
var state_37836__$1 = state_37836;
var statearr_37850_37873 = state_37836__$1;
(statearr_37850_37873[(2)] = inst_37828);

(statearr_37850_37873[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37837 === (8))){
var inst_37817 = (state_37836[(9)]);
var inst_37816 = (state_37836[(7)]);
var inst_37815 = (state_37836[(8)]);
var inst_37808 = (state_37836[(10)]);
var inst_37820 = (function (){var cs = inst_37808;
var vec__37813 = inst_37815;
var v = inst_37816;
var c = inst_37817;
return ((function (cs,vec__37813,v,c,inst_37817,inst_37816,inst_37815,inst_37808,state_val_37837,c__19438__auto___37864,out){
return (function (p1__37803_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__37803_SHARP_);
});
;})(cs,vec__37813,v,c,inst_37817,inst_37816,inst_37815,inst_37808,state_val_37837,c__19438__auto___37864,out))
})();
var inst_37821 = cljs.core.filterv.call(null,inst_37820,inst_37808);
var inst_37808__$1 = inst_37821;
var state_37836__$1 = (function (){var statearr_37851 = state_37836;
(statearr_37851[(10)] = inst_37808__$1);

return statearr_37851;
})();
var statearr_37852_37874 = state_37836__$1;
(statearr_37852_37874[(2)] = null);

(statearr_37852_37874[(1)] = (2));


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
});})(c__19438__auto___37864,out))
;
return ((function (switch__19373__auto__,c__19438__auto___37864,out){
return (function() {
var cljs$core$async$state_machine__19374__auto__ = null;
var cljs$core$async$state_machine__19374__auto____0 = (function (){
var statearr_37856 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37856[(0)] = cljs$core$async$state_machine__19374__auto__);

(statearr_37856[(1)] = (1));

return statearr_37856;
});
var cljs$core$async$state_machine__19374__auto____1 = (function (state_37836){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_37836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e37857){if((e37857 instanceof Object)){
var ex__19377__auto__ = e37857;
var statearr_37858_37875 = state_37836;
(statearr_37858_37875[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37876 = state_37836;
state_37836 = G__37876;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$state_machine__19374__auto__ = function(state_37836){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19374__auto____1.call(this,state_37836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19374__auto____0;
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19374__auto____1;
return cljs$core$async$state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___37864,out))
})();
var state__19440__auto__ = (function (){var statearr_37859 = f__19439__auto__.call(null);
(statearr_37859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___37864);

return statearr_37859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___37864,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args37877 = [];
var len__17416__auto___37926 = arguments.length;
var i__17417__auto___37927 = (0);
while(true){
if((i__17417__auto___37927 < len__17416__auto___37926)){
args37877.push((arguments[i__17417__auto___37927]));

var G__37928 = (i__17417__auto___37927 + (1));
i__17417__auto___37927 = G__37928;
continue;
} else {
}
break;
}

var G__37879 = args37877.length;
switch (G__37879) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37877.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19438__auto___37930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___37930,out){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___37930,out){
return (function (state_37903){
var state_val_37904 = (state_37903[(1)]);
if((state_val_37904 === (7))){
var inst_37885 = (state_37903[(7)]);
var inst_37885__$1 = (state_37903[(2)]);
var inst_37886 = (inst_37885__$1 == null);
var inst_37887 = cljs.core.not.call(null,inst_37886);
var state_37903__$1 = (function (){var statearr_37905 = state_37903;
(statearr_37905[(7)] = inst_37885__$1);

return statearr_37905;
})();
if(inst_37887){
var statearr_37906_37931 = state_37903__$1;
(statearr_37906_37931[(1)] = (8));

} else {
var statearr_37907_37932 = state_37903__$1;
(statearr_37907_37932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37904 === (1))){
var inst_37880 = (0);
var state_37903__$1 = (function (){var statearr_37908 = state_37903;
(statearr_37908[(8)] = inst_37880);

return statearr_37908;
})();
var statearr_37909_37933 = state_37903__$1;
(statearr_37909_37933[(2)] = null);

(statearr_37909_37933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37904 === (4))){
var state_37903__$1 = state_37903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37903__$1,(7),ch);
} else {
if((state_val_37904 === (6))){
var inst_37898 = (state_37903[(2)]);
var state_37903__$1 = state_37903;
var statearr_37910_37934 = state_37903__$1;
(statearr_37910_37934[(2)] = inst_37898);

(statearr_37910_37934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37904 === (3))){
var inst_37900 = (state_37903[(2)]);
var inst_37901 = cljs.core.async.close_BANG_.call(null,out);
var state_37903__$1 = (function (){var statearr_37911 = state_37903;
(statearr_37911[(9)] = inst_37900);

return statearr_37911;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37903__$1,inst_37901);
} else {
if((state_val_37904 === (2))){
var inst_37880 = (state_37903[(8)]);
var inst_37882 = (inst_37880 < n);
var state_37903__$1 = state_37903;
if(cljs.core.truth_(inst_37882)){
var statearr_37912_37935 = state_37903__$1;
(statearr_37912_37935[(1)] = (4));

} else {
var statearr_37913_37936 = state_37903__$1;
(statearr_37913_37936[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37904 === (11))){
var inst_37880 = (state_37903[(8)]);
var inst_37890 = (state_37903[(2)]);
var inst_37891 = (inst_37880 + (1));
var inst_37880__$1 = inst_37891;
var state_37903__$1 = (function (){var statearr_37914 = state_37903;
(statearr_37914[(8)] = inst_37880__$1);

(statearr_37914[(10)] = inst_37890);

return statearr_37914;
})();
var statearr_37915_37937 = state_37903__$1;
(statearr_37915_37937[(2)] = null);

(statearr_37915_37937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37904 === (9))){
var state_37903__$1 = state_37903;
var statearr_37916_37938 = state_37903__$1;
(statearr_37916_37938[(2)] = null);

(statearr_37916_37938[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37904 === (5))){
var state_37903__$1 = state_37903;
var statearr_37917_37939 = state_37903__$1;
(statearr_37917_37939[(2)] = null);

(statearr_37917_37939[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37904 === (10))){
var inst_37895 = (state_37903[(2)]);
var state_37903__$1 = state_37903;
var statearr_37918_37940 = state_37903__$1;
(statearr_37918_37940[(2)] = inst_37895);

(statearr_37918_37940[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37904 === (8))){
var inst_37885 = (state_37903[(7)]);
var state_37903__$1 = state_37903;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37903__$1,(11),out,inst_37885);
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
});})(c__19438__auto___37930,out))
;
return ((function (switch__19373__auto__,c__19438__auto___37930,out){
return (function() {
var cljs$core$async$state_machine__19374__auto__ = null;
var cljs$core$async$state_machine__19374__auto____0 = (function (){
var statearr_37922 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37922[(0)] = cljs$core$async$state_machine__19374__auto__);

(statearr_37922[(1)] = (1));

return statearr_37922;
});
var cljs$core$async$state_machine__19374__auto____1 = (function (state_37903){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_37903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e37923){if((e37923 instanceof Object)){
var ex__19377__auto__ = e37923;
var statearr_37924_37941 = state_37903;
(statearr_37924_37941[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37942 = state_37903;
state_37903 = G__37942;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$state_machine__19374__auto__ = function(state_37903){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19374__auto____1.call(this,state_37903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19374__auto____0;
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19374__auto____1;
return cljs$core$async$state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___37930,out))
})();
var state__19440__auto__ = (function (){var statearr_37925 = f__19439__auto__.call(null);
(statearr_37925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___37930);

return statearr_37925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___37930,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async37950 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37950 = (function (map_LT_,f,ch,meta37951){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta37951 = meta37951;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37952,meta37951__$1){
var self__ = this;
var _37952__$1 = this;
return (new cljs.core.async.t_cljs$core$async37950(self__.map_LT_,self__.f,self__.ch,meta37951__$1));
});

cljs.core.async.t_cljs$core$async37950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37952){
var self__ = this;
var _37952__$1 = this;
return self__.meta37951;
});

cljs.core.async.t_cljs$core$async37950.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async37950.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37950.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37950.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async37950.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async37953 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37953 = (function (map_LT_,f,ch,meta37951,_,fn1,meta37954){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta37951 = meta37951;
this._ = _;
this.fn1 = fn1;
this.meta37954 = meta37954;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_37955,meta37954__$1){
var self__ = this;
var _37955__$1 = this;
return (new cljs.core.async.t_cljs$core$async37953(self__.map_LT_,self__.f,self__.ch,self__.meta37951,self__._,self__.fn1,meta37954__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async37953.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_37955){
var self__ = this;
var _37955__$1 = this;
return self__.meta37954;
});})(___$1))
;

cljs.core.async.t_cljs$core$async37953.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37953.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async37953.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__37943_SHARP_){
return f1.call(null,(((p1__37943_SHARP_ == null))?null:self__.f.call(null,p1__37943_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async37953.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37951","meta37951",575224799,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async37950","cljs.core.async/t_cljs$core$async37950",1675379256,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta37954","meta37954",1915587414,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async37953.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37953.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37953";

cljs.core.async.t_cljs$core$async37953.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async37953");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async37953 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37953(map_LT___$1,f__$1,ch__$1,meta37951__$1,___$2,fn1__$1,meta37954){
return (new cljs.core.async.t_cljs$core$async37953(map_LT___$1,f__$1,ch__$1,meta37951__$1,___$2,fn1__$1,meta37954));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async37953(self__.map_LT_,self__.f,self__.ch,self__.meta37951,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16346__auto__ = ret;
if(cljs.core.truth_(and__16346__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16346__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async37950.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async37950.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async37950.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37951","meta37951",575224799,null)], null);
});

cljs.core.async.t_cljs$core$async37950.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37950.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37950";

cljs.core.async.t_cljs$core$async37950.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async37950");
});

cljs.core.async.__GT_t_cljs$core$async37950 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37950(map_LT___$1,f__$1,ch__$1,meta37951){
return (new cljs.core.async.t_cljs$core$async37950(map_LT___$1,f__$1,ch__$1,meta37951));
});

}

return (new cljs.core.async.t_cljs$core$async37950(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async37959 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37959 = (function (map_GT_,f,ch,meta37960){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta37960 = meta37960;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37961,meta37960__$1){
var self__ = this;
var _37961__$1 = this;
return (new cljs.core.async.t_cljs$core$async37959(self__.map_GT_,self__.f,self__.ch,meta37960__$1));
});

cljs.core.async.t_cljs$core$async37959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37961){
var self__ = this;
var _37961__$1 = this;
return self__.meta37960;
});

cljs.core.async.t_cljs$core$async37959.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async37959.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37959.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async37959.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async37959.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async37959.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async37959.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37960","meta37960",993674472,null)], null);
});

cljs.core.async.t_cljs$core$async37959.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37959.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37959";

cljs.core.async.t_cljs$core$async37959.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async37959");
});

cljs.core.async.__GT_t_cljs$core$async37959 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async37959(map_GT___$1,f__$1,ch__$1,meta37960){
return (new cljs.core.async.t_cljs$core$async37959(map_GT___$1,f__$1,ch__$1,meta37960));
});

}

return (new cljs.core.async.t_cljs$core$async37959(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async37965 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37965 = (function (filter_GT_,p,ch,meta37966){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta37966 = meta37966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37967,meta37966__$1){
var self__ = this;
var _37967__$1 = this;
return (new cljs.core.async.t_cljs$core$async37965(self__.filter_GT_,self__.p,self__.ch,meta37966__$1));
});

cljs.core.async.t_cljs$core$async37965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37967){
var self__ = this;
var _37967__$1 = this;
return self__.meta37966;
});

cljs.core.async.t_cljs$core$async37965.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async37965.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37965.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37965.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async37965.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async37965.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async37965.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async37965.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37966","meta37966",-387160064,null)], null);
});

cljs.core.async.t_cljs$core$async37965.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37965.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37965";

cljs.core.async.t_cljs$core$async37965.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async37965");
});

cljs.core.async.__GT_t_cljs$core$async37965 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async37965(filter_GT___$1,p__$1,ch__$1,meta37966){
return (new cljs.core.async.t_cljs$core$async37965(filter_GT___$1,p__$1,ch__$1,meta37966));
});

}

return (new cljs.core.async.t_cljs$core$async37965(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args37968 = [];
var len__17416__auto___38012 = arguments.length;
var i__17417__auto___38013 = (0);
while(true){
if((i__17417__auto___38013 < len__17416__auto___38012)){
args37968.push((arguments[i__17417__auto___38013]));

var G__38014 = (i__17417__auto___38013 + (1));
i__17417__auto___38013 = G__38014;
continue;
} else {
}
break;
}

var G__37970 = args37968.length;
switch (G__37970) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37968.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19438__auto___38016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___38016,out){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___38016,out){
return (function (state_37991){
var state_val_37992 = (state_37991[(1)]);
if((state_val_37992 === (7))){
var inst_37987 = (state_37991[(2)]);
var state_37991__$1 = state_37991;
var statearr_37993_38017 = state_37991__$1;
(statearr_37993_38017[(2)] = inst_37987);

(statearr_37993_38017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37992 === (1))){
var state_37991__$1 = state_37991;
var statearr_37994_38018 = state_37991__$1;
(statearr_37994_38018[(2)] = null);

(statearr_37994_38018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37992 === (4))){
var inst_37973 = (state_37991[(7)]);
var inst_37973__$1 = (state_37991[(2)]);
var inst_37974 = (inst_37973__$1 == null);
var state_37991__$1 = (function (){var statearr_37995 = state_37991;
(statearr_37995[(7)] = inst_37973__$1);

return statearr_37995;
})();
if(cljs.core.truth_(inst_37974)){
var statearr_37996_38019 = state_37991__$1;
(statearr_37996_38019[(1)] = (5));

} else {
var statearr_37997_38020 = state_37991__$1;
(statearr_37997_38020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37992 === (6))){
var inst_37973 = (state_37991[(7)]);
var inst_37978 = p.call(null,inst_37973);
var state_37991__$1 = state_37991;
if(cljs.core.truth_(inst_37978)){
var statearr_37998_38021 = state_37991__$1;
(statearr_37998_38021[(1)] = (8));

} else {
var statearr_37999_38022 = state_37991__$1;
(statearr_37999_38022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37992 === (3))){
var inst_37989 = (state_37991[(2)]);
var state_37991__$1 = state_37991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37991__$1,inst_37989);
} else {
if((state_val_37992 === (2))){
var state_37991__$1 = state_37991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37991__$1,(4),ch);
} else {
if((state_val_37992 === (11))){
var inst_37981 = (state_37991[(2)]);
var state_37991__$1 = state_37991;
var statearr_38000_38023 = state_37991__$1;
(statearr_38000_38023[(2)] = inst_37981);

(statearr_38000_38023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37992 === (9))){
var state_37991__$1 = state_37991;
var statearr_38001_38024 = state_37991__$1;
(statearr_38001_38024[(2)] = null);

(statearr_38001_38024[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37992 === (5))){
var inst_37976 = cljs.core.async.close_BANG_.call(null,out);
var state_37991__$1 = state_37991;
var statearr_38002_38025 = state_37991__$1;
(statearr_38002_38025[(2)] = inst_37976);

(statearr_38002_38025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37992 === (10))){
var inst_37984 = (state_37991[(2)]);
var state_37991__$1 = (function (){var statearr_38003 = state_37991;
(statearr_38003[(8)] = inst_37984);

return statearr_38003;
})();
var statearr_38004_38026 = state_37991__$1;
(statearr_38004_38026[(2)] = null);

(statearr_38004_38026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37992 === (8))){
var inst_37973 = (state_37991[(7)]);
var state_37991__$1 = state_37991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37991__$1,(11),out,inst_37973);
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
});})(c__19438__auto___38016,out))
;
return ((function (switch__19373__auto__,c__19438__auto___38016,out){
return (function() {
var cljs$core$async$state_machine__19374__auto__ = null;
var cljs$core$async$state_machine__19374__auto____0 = (function (){
var statearr_38008 = [null,null,null,null,null,null,null,null,null];
(statearr_38008[(0)] = cljs$core$async$state_machine__19374__auto__);

(statearr_38008[(1)] = (1));

return statearr_38008;
});
var cljs$core$async$state_machine__19374__auto____1 = (function (state_37991){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_37991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e38009){if((e38009 instanceof Object)){
var ex__19377__auto__ = e38009;
var statearr_38010_38027 = state_37991;
(statearr_38010_38027[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38028 = state_37991;
state_37991 = G__38028;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$state_machine__19374__auto__ = function(state_37991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19374__auto____1.call(this,state_37991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19374__auto____0;
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19374__auto____1;
return cljs$core$async$state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___38016,out))
})();
var state__19440__auto__ = (function (){var statearr_38011 = f__19439__auto__.call(null);
(statearr_38011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___38016);

return statearr_38011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___38016,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args38029 = [];
var len__17416__auto___38032 = arguments.length;
var i__17417__auto___38033 = (0);
while(true){
if((i__17417__auto___38033 < len__17416__auto___38032)){
args38029.push((arguments[i__17417__auto___38033]));

var G__38034 = (i__17417__auto___38033 + (1));
i__17417__auto___38033 = G__38034;
continue;
} else {
}
break;
}

var G__38031 = args38029.length;
switch (G__38031) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38029.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19438__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto__){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto__){
return (function (state_38201){
var state_val_38202 = (state_38201[(1)]);
if((state_val_38202 === (7))){
var inst_38197 = (state_38201[(2)]);
var state_38201__$1 = state_38201;
var statearr_38203_38244 = state_38201__$1;
(statearr_38203_38244[(2)] = inst_38197);

(statearr_38203_38244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38202 === (20))){
var inst_38167 = (state_38201[(7)]);
var inst_38178 = (state_38201[(2)]);
var inst_38179 = cljs.core.next.call(null,inst_38167);
var inst_38153 = inst_38179;
var inst_38154 = null;
var inst_38155 = (0);
var inst_38156 = (0);
var state_38201__$1 = (function (){var statearr_38204 = state_38201;
(statearr_38204[(8)] = inst_38178);

(statearr_38204[(9)] = inst_38153);

(statearr_38204[(10)] = inst_38154);

(statearr_38204[(11)] = inst_38156);

(statearr_38204[(12)] = inst_38155);

return statearr_38204;
})();
var statearr_38205_38245 = state_38201__$1;
(statearr_38205_38245[(2)] = null);

(statearr_38205_38245[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38202 === (1))){
var state_38201__$1 = state_38201;
var statearr_38206_38246 = state_38201__$1;
(statearr_38206_38246[(2)] = null);

(statearr_38206_38246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38202 === (4))){
var inst_38142 = (state_38201[(13)]);
var inst_38142__$1 = (state_38201[(2)]);
var inst_38143 = (inst_38142__$1 == null);
var state_38201__$1 = (function (){var statearr_38207 = state_38201;
(statearr_38207[(13)] = inst_38142__$1);

return statearr_38207;
})();
if(cljs.core.truth_(inst_38143)){
var statearr_38208_38247 = state_38201__$1;
(statearr_38208_38247[(1)] = (5));

} else {
var statearr_38209_38248 = state_38201__$1;
(statearr_38209_38248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38202 === (15))){
var state_38201__$1 = state_38201;
var statearr_38213_38249 = state_38201__$1;
(statearr_38213_38249[(2)] = null);

(statearr_38213_38249[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38202 === (21))){
var state_38201__$1 = state_38201;
var statearr_38214_38250 = state_38201__$1;
(statearr_38214_38250[(2)] = null);

(statearr_38214_38250[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38202 === (13))){
var inst_38153 = (state_38201[(9)]);
var inst_38154 = (state_38201[(10)]);
var inst_38156 = (state_38201[(11)]);
var inst_38155 = (state_38201[(12)]);
var inst_38163 = (state_38201[(2)]);
var inst_38164 = (inst_38156 + (1));
var tmp38210 = inst_38153;
var tmp38211 = inst_38154;
var tmp38212 = inst_38155;
var inst_38153__$1 = tmp38210;
var inst_38154__$1 = tmp38211;
var inst_38155__$1 = tmp38212;
var inst_38156__$1 = inst_38164;
var state_38201__$1 = (function (){var statearr_38215 = state_38201;
(statearr_38215[(9)] = inst_38153__$1);

(statearr_38215[(14)] = inst_38163);

(statearr_38215[(10)] = inst_38154__$1);

(statearr_38215[(11)] = inst_38156__$1);

(statearr_38215[(12)] = inst_38155__$1);

return statearr_38215;
})();
var statearr_38216_38251 = state_38201__$1;
(statearr_38216_38251[(2)] = null);

(statearr_38216_38251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38202 === (22))){
var state_38201__$1 = state_38201;
var statearr_38217_38252 = state_38201__$1;
(statearr_38217_38252[(2)] = null);

(statearr_38217_38252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38202 === (6))){
var inst_38142 = (state_38201[(13)]);
var inst_38151 = f.call(null,inst_38142);
var inst_38152 = cljs.core.seq.call(null,inst_38151);
var inst_38153 = inst_38152;
var inst_38154 = null;
var inst_38155 = (0);
var inst_38156 = (0);
var state_38201__$1 = (function (){var statearr_38218 = state_38201;
(statearr_38218[(9)] = inst_38153);

(statearr_38218[(10)] = inst_38154);

(statearr_38218[(11)] = inst_38156);

(statearr_38218[(12)] = inst_38155);

return statearr_38218;
})();
var statearr_38219_38253 = state_38201__$1;
(statearr_38219_38253[(2)] = null);

(statearr_38219_38253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38202 === (17))){
var inst_38167 = (state_38201[(7)]);
var inst_38171 = cljs.core.chunk_first.call(null,inst_38167);
var inst_38172 = cljs.core.chunk_rest.call(null,inst_38167);
var inst_38173 = cljs.core.count.call(null,inst_38171);
var inst_38153 = inst_38172;
var inst_38154 = inst_38171;
var inst_38155 = inst_38173;
var inst_38156 = (0);
var state_38201__$1 = (function (){var statearr_38220 = state_38201;
(statearr_38220[(9)] = inst_38153);

(statearr_38220[(10)] = inst_38154);

(statearr_38220[(11)] = inst_38156);

(statearr_38220[(12)] = inst_38155);

return statearr_38220;
})();
var statearr_38221_38254 = state_38201__$1;
(statearr_38221_38254[(2)] = null);

(statearr_38221_38254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38202 === (3))){
var inst_38199 = (state_38201[(2)]);
var state_38201__$1 = state_38201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38201__$1,inst_38199);
} else {
if((state_val_38202 === (12))){
var inst_38187 = (state_38201[(2)]);
var state_38201__$1 = state_38201;
var statearr_38222_38255 = state_38201__$1;
(statearr_38222_38255[(2)] = inst_38187);

(statearr_38222_38255[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38202 === (2))){
var state_38201__$1 = state_38201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38201__$1,(4),in$);
} else {
if((state_val_38202 === (23))){
var inst_38195 = (state_38201[(2)]);
var state_38201__$1 = state_38201;
var statearr_38223_38256 = state_38201__$1;
(statearr_38223_38256[(2)] = inst_38195);

(statearr_38223_38256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38202 === (19))){
var inst_38182 = (state_38201[(2)]);
var state_38201__$1 = state_38201;
var statearr_38224_38257 = state_38201__$1;
(statearr_38224_38257[(2)] = inst_38182);

(statearr_38224_38257[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38202 === (11))){
var inst_38167 = (state_38201[(7)]);
var inst_38153 = (state_38201[(9)]);
var inst_38167__$1 = cljs.core.seq.call(null,inst_38153);
var state_38201__$1 = (function (){var statearr_38225 = state_38201;
(statearr_38225[(7)] = inst_38167__$1);

return statearr_38225;
})();
if(inst_38167__$1){
var statearr_38226_38258 = state_38201__$1;
(statearr_38226_38258[(1)] = (14));

} else {
var statearr_38227_38259 = state_38201__$1;
(statearr_38227_38259[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38202 === (9))){
var inst_38189 = (state_38201[(2)]);
var inst_38190 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_38201__$1 = (function (){var statearr_38228 = state_38201;
(statearr_38228[(15)] = inst_38189);

return statearr_38228;
})();
if(cljs.core.truth_(inst_38190)){
var statearr_38229_38260 = state_38201__$1;
(statearr_38229_38260[(1)] = (21));

} else {
var statearr_38230_38261 = state_38201__$1;
(statearr_38230_38261[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38202 === (5))){
var inst_38145 = cljs.core.async.close_BANG_.call(null,out);
var state_38201__$1 = state_38201;
var statearr_38231_38262 = state_38201__$1;
(statearr_38231_38262[(2)] = inst_38145);

(statearr_38231_38262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38202 === (14))){
var inst_38167 = (state_38201[(7)]);
var inst_38169 = cljs.core.chunked_seq_QMARK_.call(null,inst_38167);
var state_38201__$1 = state_38201;
if(inst_38169){
var statearr_38232_38263 = state_38201__$1;
(statearr_38232_38263[(1)] = (17));

} else {
var statearr_38233_38264 = state_38201__$1;
(statearr_38233_38264[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38202 === (16))){
var inst_38185 = (state_38201[(2)]);
var state_38201__$1 = state_38201;
var statearr_38234_38265 = state_38201__$1;
(statearr_38234_38265[(2)] = inst_38185);

(statearr_38234_38265[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38202 === (10))){
var inst_38154 = (state_38201[(10)]);
var inst_38156 = (state_38201[(11)]);
var inst_38161 = cljs.core._nth.call(null,inst_38154,inst_38156);
var state_38201__$1 = state_38201;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38201__$1,(13),out,inst_38161);
} else {
if((state_val_38202 === (18))){
var inst_38167 = (state_38201[(7)]);
var inst_38176 = cljs.core.first.call(null,inst_38167);
var state_38201__$1 = state_38201;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38201__$1,(20),out,inst_38176);
} else {
if((state_val_38202 === (8))){
var inst_38156 = (state_38201[(11)]);
var inst_38155 = (state_38201[(12)]);
var inst_38158 = (inst_38156 < inst_38155);
var inst_38159 = inst_38158;
var state_38201__$1 = state_38201;
if(cljs.core.truth_(inst_38159)){
var statearr_38235_38266 = state_38201__$1;
(statearr_38235_38266[(1)] = (10));

} else {
var statearr_38236_38267 = state_38201__$1;
(statearr_38236_38267[(1)] = (11));

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
});})(c__19438__auto__))
;
return ((function (switch__19373__auto__,c__19438__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19374__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19374__auto____0 = (function (){
var statearr_38240 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38240[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19374__auto__);

(statearr_38240[(1)] = (1));

return statearr_38240;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19374__auto____1 = (function (state_38201){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_38201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e38241){if((e38241 instanceof Object)){
var ex__19377__auto__ = e38241;
var statearr_38242_38268 = state_38201;
(statearr_38242_38268[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38269 = state_38201;
state_38201 = G__38269;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19374__auto__ = function(state_38201){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19374__auto____1.call(this,state_38201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19374__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19374__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto__))
})();
var state__19440__auto__ = (function (){var statearr_38243 = f__19439__auto__.call(null);
(statearr_38243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto__);

return statearr_38243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto__))
);

return c__19438__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args38270 = [];
var len__17416__auto___38273 = arguments.length;
var i__17417__auto___38274 = (0);
while(true){
if((i__17417__auto___38274 < len__17416__auto___38273)){
args38270.push((arguments[i__17417__auto___38274]));

var G__38275 = (i__17417__auto___38274 + (1));
i__17417__auto___38274 = G__38275;
continue;
} else {
}
break;
}

var G__38272 = args38270.length;
switch (G__38272) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38270.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args38277 = [];
var len__17416__auto___38280 = arguments.length;
var i__17417__auto___38281 = (0);
while(true){
if((i__17417__auto___38281 < len__17416__auto___38280)){
args38277.push((arguments[i__17417__auto___38281]));

var G__38282 = (i__17417__auto___38281 + (1));
i__17417__auto___38281 = G__38282;
continue;
} else {
}
break;
}

var G__38279 = args38277.length;
switch (G__38279) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38277.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args38284 = [];
var len__17416__auto___38335 = arguments.length;
var i__17417__auto___38336 = (0);
while(true){
if((i__17417__auto___38336 < len__17416__auto___38335)){
args38284.push((arguments[i__17417__auto___38336]));

var G__38337 = (i__17417__auto___38336 + (1));
i__17417__auto___38336 = G__38337;
continue;
} else {
}
break;
}

var G__38286 = args38284.length;
switch (G__38286) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38284.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19438__auto___38339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___38339,out){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___38339,out){
return (function (state_38310){
var state_val_38311 = (state_38310[(1)]);
if((state_val_38311 === (7))){
var inst_38305 = (state_38310[(2)]);
var state_38310__$1 = state_38310;
var statearr_38312_38340 = state_38310__$1;
(statearr_38312_38340[(2)] = inst_38305);

(statearr_38312_38340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38311 === (1))){
var inst_38287 = null;
var state_38310__$1 = (function (){var statearr_38313 = state_38310;
(statearr_38313[(7)] = inst_38287);

return statearr_38313;
})();
var statearr_38314_38341 = state_38310__$1;
(statearr_38314_38341[(2)] = null);

(statearr_38314_38341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38311 === (4))){
var inst_38290 = (state_38310[(8)]);
var inst_38290__$1 = (state_38310[(2)]);
var inst_38291 = (inst_38290__$1 == null);
var inst_38292 = cljs.core.not.call(null,inst_38291);
var state_38310__$1 = (function (){var statearr_38315 = state_38310;
(statearr_38315[(8)] = inst_38290__$1);

return statearr_38315;
})();
if(inst_38292){
var statearr_38316_38342 = state_38310__$1;
(statearr_38316_38342[(1)] = (5));

} else {
var statearr_38317_38343 = state_38310__$1;
(statearr_38317_38343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38311 === (6))){
var state_38310__$1 = state_38310;
var statearr_38318_38344 = state_38310__$1;
(statearr_38318_38344[(2)] = null);

(statearr_38318_38344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38311 === (3))){
var inst_38307 = (state_38310[(2)]);
var inst_38308 = cljs.core.async.close_BANG_.call(null,out);
var state_38310__$1 = (function (){var statearr_38319 = state_38310;
(statearr_38319[(9)] = inst_38307);

return statearr_38319;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38310__$1,inst_38308);
} else {
if((state_val_38311 === (2))){
var state_38310__$1 = state_38310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38310__$1,(4),ch);
} else {
if((state_val_38311 === (11))){
var inst_38290 = (state_38310[(8)]);
var inst_38299 = (state_38310[(2)]);
var inst_38287 = inst_38290;
var state_38310__$1 = (function (){var statearr_38320 = state_38310;
(statearr_38320[(10)] = inst_38299);

(statearr_38320[(7)] = inst_38287);

return statearr_38320;
})();
var statearr_38321_38345 = state_38310__$1;
(statearr_38321_38345[(2)] = null);

(statearr_38321_38345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38311 === (9))){
var inst_38290 = (state_38310[(8)]);
var state_38310__$1 = state_38310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38310__$1,(11),out,inst_38290);
} else {
if((state_val_38311 === (5))){
var inst_38287 = (state_38310[(7)]);
var inst_38290 = (state_38310[(8)]);
var inst_38294 = cljs.core._EQ_.call(null,inst_38290,inst_38287);
var state_38310__$1 = state_38310;
if(inst_38294){
var statearr_38323_38346 = state_38310__$1;
(statearr_38323_38346[(1)] = (8));

} else {
var statearr_38324_38347 = state_38310__$1;
(statearr_38324_38347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38311 === (10))){
var inst_38302 = (state_38310[(2)]);
var state_38310__$1 = state_38310;
var statearr_38325_38348 = state_38310__$1;
(statearr_38325_38348[(2)] = inst_38302);

(statearr_38325_38348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38311 === (8))){
var inst_38287 = (state_38310[(7)]);
var tmp38322 = inst_38287;
var inst_38287__$1 = tmp38322;
var state_38310__$1 = (function (){var statearr_38326 = state_38310;
(statearr_38326[(7)] = inst_38287__$1);

return statearr_38326;
})();
var statearr_38327_38349 = state_38310__$1;
(statearr_38327_38349[(2)] = null);

(statearr_38327_38349[(1)] = (2));


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
});})(c__19438__auto___38339,out))
;
return ((function (switch__19373__auto__,c__19438__auto___38339,out){
return (function() {
var cljs$core$async$state_machine__19374__auto__ = null;
var cljs$core$async$state_machine__19374__auto____0 = (function (){
var statearr_38331 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38331[(0)] = cljs$core$async$state_machine__19374__auto__);

(statearr_38331[(1)] = (1));

return statearr_38331;
});
var cljs$core$async$state_machine__19374__auto____1 = (function (state_38310){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_38310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e38332){if((e38332 instanceof Object)){
var ex__19377__auto__ = e38332;
var statearr_38333_38350 = state_38310;
(statearr_38333_38350[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38351 = state_38310;
state_38310 = G__38351;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$state_machine__19374__auto__ = function(state_38310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19374__auto____1.call(this,state_38310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19374__auto____0;
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19374__auto____1;
return cljs$core$async$state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___38339,out))
})();
var state__19440__auto__ = (function (){var statearr_38334 = f__19439__auto__.call(null);
(statearr_38334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___38339);

return statearr_38334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___38339,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args38352 = [];
var len__17416__auto___38422 = arguments.length;
var i__17417__auto___38423 = (0);
while(true){
if((i__17417__auto___38423 < len__17416__auto___38422)){
args38352.push((arguments[i__17417__auto___38423]));

var G__38424 = (i__17417__auto___38423 + (1));
i__17417__auto___38423 = G__38424;
continue;
} else {
}
break;
}

var G__38354 = args38352.length;
switch (G__38354) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38352.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19438__auto___38426 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___38426,out){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___38426,out){
return (function (state_38392){
var state_val_38393 = (state_38392[(1)]);
if((state_val_38393 === (7))){
var inst_38388 = (state_38392[(2)]);
var state_38392__$1 = state_38392;
var statearr_38394_38427 = state_38392__$1;
(statearr_38394_38427[(2)] = inst_38388);

(statearr_38394_38427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38393 === (1))){
var inst_38355 = (new Array(n));
var inst_38356 = inst_38355;
var inst_38357 = (0);
var state_38392__$1 = (function (){var statearr_38395 = state_38392;
(statearr_38395[(7)] = inst_38356);

(statearr_38395[(8)] = inst_38357);

return statearr_38395;
})();
var statearr_38396_38428 = state_38392__$1;
(statearr_38396_38428[(2)] = null);

(statearr_38396_38428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38393 === (4))){
var inst_38360 = (state_38392[(9)]);
var inst_38360__$1 = (state_38392[(2)]);
var inst_38361 = (inst_38360__$1 == null);
var inst_38362 = cljs.core.not.call(null,inst_38361);
var state_38392__$1 = (function (){var statearr_38397 = state_38392;
(statearr_38397[(9)] = inst_38360__$1);

return statearr_38397;
})();
if(inst_38362){
var statearr_38398_38429 = state_38392__$1;
(statearr_38398_38429[(1)] = (5));

} else {
var statearr_38399_38430 = state_38392__$1;
(statearr_38399_38430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38393 === (15))){
var inst_38382 = (state_38392[(2)]);
var state_38392__$1 = state_38392;
var statearr_38400_38431 = state_38392__$1;
(statearr_38400_38431[(2)] = inst_38382);

(statearr_38400_38431[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38393 === (13))){
var state_38392__$1 = state_38392;
var statearr_38401_38432 = state_38392__$1;
(statearr_38401_38432[(2)] = null);

(statearr_38401_38432[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38393 === (6))){
var inst_38357 = (state_38392[(8)]);
var inst_38378 = (inst_38357 > (0));
var state_38392__$1 = state_38392;
if(cljs.core.truth_(inst_38378)){
var statearr_38402_38433 = state_38392__$1;
(statearr_38402_38433[(1)] = (12));

} else {
var statearr_38403_38434 = state_38392__$1;
(statearr_38403_38434[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38393 === (3))){
var inst_38390 = (state_38392[(2)]);
var state_38392__$1 = state_38392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38392__$1,inst_38390);
} else {
if((state_val_38393 === (12))){
var inst_38356 = (state_38392[(7)]);
var inst_38380 = cljs.core.vec.call(null,inst_38356);
var state_38392__$1 = state_38392;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38392__$1,(15),out,inst_38380);
} else {
if((state_val_38393 === (2))){
var state_38392__$1 = state_38392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38392__$1,(4),ch);
} else {
if((state_val_38393 === (11))){
var inst_38372 = (state_38392[(2)]);
var inst_38373 = (new Array(n));
var inst_38356 = inst_38373;
var inst_38357 = (0);
var state_38392__$1 = (function (){var statearr_38404 = state_38392;
(statearr_38404[(7)] = inst_38356);

(statearr_38404[(10)] = inst_38372);

(statearr_38404[(8)] = inst_38357);

return statearr_38404;
})();
var statearr_38405_38435 = state_38392__$1;
(statearr_38405_38435[(2)] = null);

(statearr_38405_38435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38393 === (9))){
var inst_38356 = (state_38392[(7)]);
var inst_38370 = cljs.core.vec.call(null,inst_38356);
var state_38392__$1 = state_38392;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38392__$1,(11),out,inst_38370);
} else {
if((state_val_38393 === (5))){
var inst_38365 = (state_38392[(11)]);
var inst_38356 = (state_38392[(7)]);
var inst_38357 = (state_38392[(8)]);
var inst_38360 = (state_38392[(9)]);
var inst_38364 = (inst_38356[inst_38357] = inst_38360);
var inst_38365__$1 = (inst_38357 + (1));
var inst_38366 = (inst_38365__$1 < n);
var state_38392__$1 = (function (){var statearr_38406 = state_38392;
(statearr_38406[(11)] = inst_38365__$1);

(statearr_38406[(12)] = inst_38364);

return statearr_38406;
})();
if(cljs.core.truth_(inst_38366)){
var statearr_38407_38436 = state_38392__$1;
(statearr_38407_38436[(1)] = (8));

} else {
var statearr_38408_38437 = state_38392__$1;
(statearr_38408_38437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38393 === (14))){
var inst_38385 = (state_38392[(2)]);
var inst_38386 = cljs.core.async.close_BANG_.call(null,out);
var state_38392__$1 = (function (){var statearr_38410 = state_38392;
(statearr_38410[(13)] = inst_38385);

return statearr_38410;
})();
var statearr_38411_38438 = state_38392__$1;
(statearr_38411_38438[(2)] = inst_38386);

(statearr_38411_38438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38393 === (10))){
var inst_38376 = (state_38392[(2)]);
var state_38392__$1 = state_38392;
var statearr_38412_38439 = state_38392__$1;
(statearr_38412_38439[(2)] = inst_38376);

(statearr_38412_38439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38393 === (8))){
var inst_38365 = (state_38392[(11)]);
var inst_38356 = (state_38392[(7)]);
var tmp38409 = inst_38356;
var inst_38356__$1 = tmp38409;
var inst_38357 = inst_38365;
var state_38392__$1 = (function (){var statearr_38413 = state_38392;
(statearr_38413[(7)] = inst_38356__$1);

(statearr_38413[(8)] = inst_38357);

return statearr_38413;
})();
var statearr_38414_38440 = state_38392__$1;
(statearr_38414_38440[(2)] = null);

(statearr_38414_38440[(1)] = (2));


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
});})(c__19438__auto___38426,out))
;
return ((function (switch__19373__auto__,c__19438__auto___38426,out){
return (function() {
var cljs$core$async$state_machine__19374__auto__ = null;
var cljs$core$async$state_machine__19374__auto____0 = (function (){
var statearr_38418 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38418[(0)] = cljs$core$async$state_machine__19374__auto__);

(statearr_38418[(1)] = (1));

return statearr_38418;
});
var cljs$core$async$state_machine__19374__auto____1 = (function (state_38392){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_38392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e38419){if((e38419 instanceof Object)){
var ex__19377__auto__ = e38419;
var statearr_38420_38441 = state_38392;
(statearr_38420_38441[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38442 = state_38392;
state_38392 = G__38442;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$state_machine__19374__auto__ = function(state_38392){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19374__auto____1.call(this,state_38392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19374__auto____0;
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19374__auto____1;
return cljs$core$async$state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___38426,out))
})();
var state__19440__auto__ = (function (){var statearr_38421 = f__19439__auto__.call(null);
(statearr_38421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___38426);

return statearr_38421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___38426,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args38443 = [];
var len__17416__auto___38517 = arguments.length;
var i__17417__auto___38518 = (0);
while(true){
if((i__17417__auto___38518 < len__17416__auto___38517)){
args38443.push((arguments[i__17417__auto___38518]));

var G__38519 = (i__17417__auto___38518 + (1));
i__17417__auto___38518 = G__38519;
continue;
} else {
}
break;
}

var G__38445 = args38443.length;
switch (G__38445) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38443.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19438__auto___38521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___38521,out){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___38521,out){
return (function (state_38487){
var state_val_38488 = (state_38487[(1)]);
if((state_val_38488 === (7))){
var inst_38483 = (state_38487[(2)]);
var state_38487__$1 = state_38487;
var statearr_38489_38522 = state_38487__$1;
(statearr_38489_38522[(2)] = inst_38483);

(statearr_38489_38522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38488 === (1))){
var inst_38446 = [];
var inst_38447 = inst_38446;
var inst_38448 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38487__$1 = (function (){var statearr_38490 = state_38487;
(statearr_38490[(7)] = inst_38448);

(statearr_38490[(8)] = inst_38447);

return statearr_38490;
})();
var statearr_38491_38523 = state_38487__$1;
(statearr_38491_38523[(2)] = null);

(statearr_38491_38523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38488 === (4))){
var inst_38451 = (state_38487[(9)]);
var inst_38451__$1 = (state_38487[(2)]);
var inst_38452 = (inst_38451__$1 == null);
var inst_38453 = cljs.core.not.call(null,inst_38452);
var state_38487__$1 = (function (){var statearr_38492 = state_38487;
(statearr_38492[(9)] = inst_38451__$1);

return statearr_38492;
})();
if(inst_38453){
var statearr_38493_38524 = state_38487__$1;
(statearr_38493_38524[(1)] = (5));

} else {
var statearr_38494_38525 = state_38487__$1;
(statearr_38494_38525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38488 === (15))){
var inst_38477 = (state_38487[(2)]);
var state_38487__$1 = state_38487;
var statearr_38495_38526 = state_38487__$1;
(statearr_38495_38526[(2)] = inst_38477);

(statearr_38495_38526[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38488 === (13))){
var state_38487__$1 = state_38487;
var statearr_38496_38527 = state_38487__$1;
(statearr_38496_38527[(2)] = null);

(statearr_38496_38527[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38488 === (6))){
var inst_38447 = (state_38487[(8)]);
var inst_38472 = inst_38447.length;
var inst_38473 = (inst_38472 > (0));
var state_38487__$1 = state_38487;
if(cljs.core.truth_(inst_38473)){
var statearr_38497_38528 = state_38487__$1;
(statearr_38497_38528[(1)] = (12));

} else {
var statearr_38498_38529 = state_38487__$1;
(statearr_38498_38529[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38488 === (3))){
var inst_38485 = (state_38487[(2)]);
var state_38487__$1 = state_38487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38487__$1,inst_38485);
} else {
if((state_val_38488 === (12))){
var inst_38447 = (state_38487[(8)]);
var inst_38475 = cljs.core.vec.call(null,inst_38447);
var state_38487__$1 = state_38487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38487__$1,(15),out,inst_38475);
} else {
if((state_val_38488 === (2))){
var state_38487__$1 = state_38487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38487__$1,(4),ch);
} else {
if((state_val_38488 === (11))){
var inst_38455 = (state_38487[(10)]);
var inst_38451 = (state_38487[(9)]);
var inst_38465 = (state_38487[(2)]);
var inst_38466 = [];
var inst_38467 = inst_38466.push(inst_38451);
var inst_38447 = inst_38466;
var inst_38448 = inst_38455;
var state_38487__$1 = (function (){var statearr_38499 = state_38487;
(statearr_38499[(11)] = inst_38465);

(statearr_38499[(12)] = inst_38467);

(statearr_38499[(7)] = inst_38448);

(statearr_38499[(8)] = inst_38447);

return statearr_38499;
})();
var statearr_38500_38530 = state_38487__$1;
(statearr_38500_38530[(2)] = null);

(statearr_38500_38530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38488 === (9))){
var inst_38447 = (state_38487[(8)]);
var inst_38463 = cljs.core.vec.call(null,inst_38447);
var state_38487__$1 = state_38487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38487__$1,(11),out,inst_38463);
} else {
if((state_val_38488 === (5))){
var inst_38455 = (state_38487[(10)]);
var inst_38451 = (state_38487[(9)]);
var inst_38448 = (state_38487[(7)]);
var inst_38455__$1 = f.call(null,inst_38451);
var inst_38456 = cljs.core._EQ_.call(null,inst_38455__$1,inst_38448);
var inst_38457 = cljs.core.keyword_identical_QMARK_.call(null,inst_38448,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_38458 = (inst_38456) || (inst_38457);
var state_38487__$1 = (function (){var statearr_38501 = state_38487;
(statearr_38501[(10)] = inst_38455__$1);

return statearr_38501;
})();
if(cljs.core.truth_(inst_38458)){
var statearr_38502_38531 = state_38487__$1;
(statearr_38502_38531[(1)] = (8));

} else {
var statearr_38503_38532 = state_38487__$1;
(statearr_38503_38532[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38488 === (14))){
var inst_38480 = (state_38487[(2)]);
var inst_38481 = cljs.core.async.close_BANG_.call(null,out);
var state_38487__$1 = (function (){var statearr_38505 = state_38487;
(statearr_38505[(13)] = inst_38480);

return statearr_38505;
})();
var statearr_38506_38533 = state_38487__$1;
(statearr_38506_38533[(2)] = inst_38481);

(statearr_38506_38533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38488 === (10))){
var inst_38470 = (state_38487[(2)]);
var state_38487__$1 = state_38487;
var statearr_38507_38534 = state_38487__$1;
(statearr_38507_38534[(2)] = inst_38470);

(statearr_38507_38534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38488 === (8))){
var inst_38455 = (state_38487[(10)]);
var inst_38451 = (state_38487[(9)]);
var inst_38447 = (state_38487[(8)]);
var inst_38460 = inst_38447.push(inst_38451);
var tmp38504 = inst_38447;
var inst_38447__$1 = tmp38504;
var inst_38448 = inst_38455;
var state_38487__$1 = (function (){var statearr_38508 = state_38487;
(statearr_38508[(14)] = inst_38460);

(statearr_38508[(7)] = inst_38448);

(statearr_38508[(8)] = inst_38447__$1);

return statearr_38508;
})();
var statearr_38509_38535 = state_38487__$1;
(statearr_38509_38535[(2)] = null);

(statearr_38509_38535[(1)] = (2));


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
});})(c__19438__auto___38521,out))
;
return ((function (switch__19373__auto__,c__19438__auto___38521,out){
return (function() {
var cljs$core$async$state_machine__19374__auto__ = null;
var cljs$core$async$state_machine__19374__auto____0 = (function (){
var statearr_38513 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38513[(0)] = cljs$core$async$state_machine__19374__auto__);

(statearr_38513[(1)] = (1));

return statearr_38513;
});
var cljs$core$async$state_machine__19374__auto____1 = (function (state_38487){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_38487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e38514){if((e38514 instanceof Object)){
var ex__19377__auto__ = e38514;
var statearr_38515_38536 = state_38487;
(statearr_38515_38536[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38537 = state_38487;
state_38487 = G__38537;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$state_machine__19374__auto__ = function(state_38487){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19374__auto____1.call(this,state_38487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19374__auto____0;
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19374__auto____1;
return cljs$core$async$state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___38521,out))
})();
var state__19440__auto__ = (function (){var statearr_38516 = f__19439__auto__.call(null);
(statearr_38516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___38521);

return statearr_38516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___38521,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1521787229040