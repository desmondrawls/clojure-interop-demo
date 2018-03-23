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
if(typeof cljs.core.async.t_cljs$core$async27749 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27749 = (function (fn_handler,f,meta27750){
this.fn_handler = fn_handler;
this.f = f;
this.meta27750 = meta27750;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27751,meta27750__$1){
var self__ = this;
var _27751__$1 = this;
return (new cljs.core.async.t_cljs$core$async27749(self__.fn_handler,self__.f,meta27750__$1));
});

cljs.core.async.t_cljs$core$async27749.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27751){
var self__ = this;
var _27751__$1 = this;
return self__.meta27750;
});

cljs.core.async.t_cljs$core$async27749.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27749.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27749.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27749.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta27750","meta27750",1681812939,null)], null);
});

cljs.core.async.t_cljs$core$async27749.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27749.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27749";

cljs.core.async.t_cljs$core$async27749.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async27749");
});

cljs.core.async.__GT_t_cljs$core$async27749 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async27749(fn_handler__$1,f__$1,meta27750){
return (new cljs.core.async.t_cljs$core$async27749(fn_handler__$1,f__$1,meta27750));
});

}

return (new cljs.core.async.t_cljs$core$async27749(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args27754 = [];
var len__17416__auto___27757 = arguments.length;
var i__17417__auto___27758 = (0);
while(true){
if((i__17417__auto___27758 < len__17416__auto___27757)){
args27754.push((arguments[i__17417__auto___27758]));

var G__27759 = (i__17417__auto___27758 + (1));
i__17417__auto___27758 = G__27759;
continue;
} else {
}
break;
}

var G__27756 = args27754.length;
switch (G__27756) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27754.length)].join('')));

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
var args27761 = [];
var len__17416__auto___27764 = arguments.length;
var i__17417__auto___27765 = (0);
while(true){
if((i__17417__auto___27765 < len__17416__auto___27764)){
args27761.push((arguments[i__17417__auto___27765]));

var G__27766 = (i__17417__auto___27765 + (1));
i__17417__auto___27765 = G__27766;
continue;
} else {
}
break;
}

var G__27763 = args27761.length;
switch (G__27763) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27761.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27768 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27768);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27768,ret){
return (function (){
return fn1.call(null,val_27768);
});})(val_27768,ret))
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
var args27769 = [];
var len__17416__auto___27772 = arguments.length;
var i__17417__auto___27773 = (0);
while(true){
if((i__17417__auto___27773 < len__17416__auto___27772)){
args27769.push((arguments[i__17417__auto___27773]));

var G__27774 = (i__17417__auto___27773 + (1));
i__17417__auto___27773 = G__27774;
continue;
} else {
}
break;
}

var G__27771 = args27769.length;
switch (G__27771) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27769.length)].join('')));

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
var n__17261__auto___27776 = n;
var x_27777 = (0);
while(true){
if((x_27777 < n__17261__auto___27776)){
(a[x_27777] = (0));

var G__27778 = (x_27777 + (1));
x_27777 = G__27778;
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

var G__27779 = (i + (1));
i = G__27779;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27783 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27783 = (function (alt_flag,flag,meta27784){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27784 = meta27784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27785,meta27784__$1){
var self__ = this;
var _27785__$1 = this;
return (new cljs.core.async.t_cljs$core$async27783(self__.alt_flag,self__.flag,meta27784__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27783.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27785){
var self__ = this;
var _27785__$1 = this;
return self__.meta27784;
});})(flag))
;

cljs.core.async.t_cljs$core$async27783.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27783.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27783.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27783.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27784","meta27784",2126126860,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27783.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27783.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27783";

cljs.core.async.t_cljs$core$async27783.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async27783");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27783 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27783(alt_flag__$1,flag__$1,meta27784){
return (new cljs.core.async.t_cljs$core$async27783(alt_flag__$1,flag__$1,meta27784));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27783(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27789 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27789 = (function (alt_handler,flag,cb,meta27790){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27790 = meta27790;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27791,meta27790__$1){
var self__ = this;
var _27791__$1 = this;
return (new cljs.core.async.t_cljs$core$async27789(self__.alt_handler,self__.flag,self__.cb,meta27790__$1));
});

cljs.core.async.t_cljs$core$async27789.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27791){
var self__ = this;
var _27791__$1 = this;
return self__.meta27790;
});

cljs.core.async.t_cljs$core$async27789.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27789.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27789.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27789.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27790","meta27790",53124351,null)], null);
});

cljs.core.async.t_cljs$core$async27789.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27789.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27789";

cljs.core.async.t_cljs$core$async27789.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async27789");
});

cljs.core.async.__GT_t_cljs$core$async27789 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27789(alt_handler__$1,flag__$1,cb__$1,meta27790){
return (new cljs.core.async.t_cljs$core$async27789(alt_handler__$1,flag__$1,cb__$1,meta27790));
});

}

return (new cljs.core.async.t_cljs$core$async27789(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27792_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27792_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27793_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27793_SHARP_,port], null));
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
var G__27794 = (i + (1));
i = G__27794;
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
var len__17416__auto___27800 = arguments.length;
var i__17417__auto___27801 = (0);
while(true){
if((i__17417__auto___27801 < len__17416__auto___27800)){
args__17423__auto__.push((arguments[i__17417__auto___27801]));

var G__27802 = (i__17417__auto___27801 + (1));
i__17417__auto___27801 = G__27802;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((1) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17424__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27797){
var map__27798 = p__27797;
var map__27798__$1 = ((((!((map__27798 == null)))?((((map__27798.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27798.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27798):map__27798);
var opts = map__27798__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27795){
var G__27796 = cljs.core.first.call(null,seq27795);
var seq27795__$1 = cljs.core.next.call(null,seq27795);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27796,seq27795__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27803 = [];
var len__17416__auto___27853 = arguments.length;
var i__17417__auto___27854 = (0);
while(true){
if((i__17417__auto___27854 < len__17416__auto___27853)){
args27803.push((arguments[i__17417__auto___27854]));

var G__27855 = (i__17417__auto___27854 + (1));
i__17417__auto___27854 = G__27855;
continue;
} else {
}
break;
}

var G__27805 = args27803.length;
switch (G__27805) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27803.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19438__auto___27857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___27857){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___27857){
return (function (state_27829){
var state_val_27830 = (state_27829[(1)]);
if((state_val_27830 === (7))){
var inst_27825 = (state_27829[(2)]);
var state_27829__$1 = state_27829;
var statearr_27831_27858 = state_27829__$1;
(statearr_27831_27858[(2)] = inst_27825);

(statearr_27831_27858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (1))){
var state_27829__$1 = state_27829;
var statearr_27832_27859 = state_27829__$1;
(statearr_27832_27859[(2)] = null);

(statearr_27832_27859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (4))){
var inst_27808 = (state_27829[(7)]);
var inst_27808__$1 = (state_27829[(2)]);
var inst_27809 = (inst_27808__$1 == null);
var state_27829__$1 = (function (){var statearr_27833 = state_27829;
(statearr_27833[(7)] = inst_27808__$1);

return statearr_27833;
})();
if(cljs.core.truth_(inst_27809)){
var statearr_27834_27860 = state_27829__$1;
(statearr_27834_27860[(1)] = (5));

} else {
var statearr_27835_27861 = state_27829__$1;
(statearr_27835_27861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (13))){
var state_27829__$1 = state_27829;
var statearr_27836_27862 = state_27829__$1;
(statearr_27836_27862[(2)] = null);

(statearr_27836_27862[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (6))){
var inst_27808 = (state_27829[(7)]);
var state_27829__$1 = state_27829;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27829__$1,(11),to,inst_27808);
} else {
if((state_val_27830 === (3))){
var inst_27827 = (state_27829[(2)]);
var state_27829__$1 = state_27829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27829__$1,inst_27827);
} else {
if((state_val_27830 === (12))){
var state_27829__$1 = state_27829;
var statearr_27837_27863 = state_27829__$1;
(statearr_27837_27863[(2)] = null);

(statearr_27837_27863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (2))){
var state_27829__$1 = state_27829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27829__$1,(4),from);
} else {
if((state_val_27830 === (11))){
var inst_27818 = (state_27829[(2)]);
var state_27829__$1 = state_27829;
if(cljs.core.truth_(inst_27818)){
var statearr_27838_27864 = state_27829__$1;
(statearr_27838_27864[(1)] = (12));

} else {
var statearr_27839_27865 = state_27829__$1;
(statearr_27839_27865[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (9))){
var state_27829__$1 = state_27829;
var statearr_27840_27866 = state_27829__$1;
(statearr_27840_27866[(2)] = null);

(statearr_27840_27866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (5))){
var state_27829__$1 = state_27829;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27841_27867 = state_27829__$1;
(statearr_27841_27867[(1)] = (8));

} else {
var statearr_27842_27868 = state_27829__$1;
(statearr_27842_27868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (14))){
var inst_27823 = (state_27829[(2)]);
var state_27829__$1 = state_27829;
var statearr_27843_27869 = state_27829__$1;
(statearr_27843_27869[(2)] = inst_27823);

(statearr_27843_27869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (10))){
var inst_27815 = (state_27829[(2)]);
var state_27829__$1 = state_27829;
var statearr_27844_27870 = state_27829__$1;
(statearr_27844_27870[(2)] = inst_27815);

(statearr_27844_27870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (8))){
var inst_27812 = cljs.core.async.close_BANG_.call(null,to);
var state_27829__$1 = state_27829;
var statearr_27845_27871 = state_27829__$1;
(statearr_27845_27871[(2)] = inst_27812);

(statearr_27845_27871[(1)] = (10));


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
});})(c__19438__auto___27857))
;
return ((function (switch__19373__auto__,c__19438__auto___27857){
return (function() {
var cljs$core$async$state_machine__19374__auto__ = null;
var cljs$core$async$state_machine__19374__auto____0 = (function (){
var statearr_27849 = [null,null,null,null,null,null,null,null];
(statearr_27849[(0)] = cljs$core$async$state_machine__19374__auto__);

(statearr_27849[(1)] = (1));

return statearr_27849;
});
var cljs$core$async$state_machine__19374__auto____1 = (function (state_27829){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_27829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e27850){if((e27850 instanceof Object)){
var ex__19377__auto__ = e27850;
var statearr_27851_27872 = state_27829;
(statearr_27851_27872[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27873 = state_27829;
state_27829 = G__27873;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$state_machine__19374__auto__ = function(state_27829){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19374__auto____1.call(this,state_27829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19374__auto____0;
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19374__auto____1;
return cljs$core$async$state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___27857))
})();
var state__19440__auto__ = (function (){var statearr_27852 = f__19439__auto__.call(null);
(statearr_27852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___27857);

return statearr_27852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___27857))
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
return (function (p__28057){
var vec__28058 = p__28057;
var v = cljs.core.nth.call(null,vec__28058,(0),null);
var p = cljs.core.nth.call(null,vec__28058,(1),null);
var job = vec__28058;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19438__auto___28240 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___28240,res,vec__28058,v,p,job,jobs,results){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___28240,res,vec__28058,v,p,job,jobs,results){
return (function (state_28063){
var state_val_28064 = (state_28063[(1)]);
if((state_val_28064 === (1))){
var state_28063__$1 = state_28063;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28063__$1,(2),res,v);
} else {
if((state_val_28064 === (2))){
var inst_28060 = (state_28063[(2)]);
var inst_28061 = cljs.core.async.close_BANG_.call(null,res);
var state_28063__$1 = (function (){var statearr_28065 = state_28063;
(statearr_28065[(7)] = inst_28060);

return statearr_28065;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28063__$1,inst_28061);
} else {
return null;
}
}
});})(c__19438__auto___28240,res,vec__28058,v,p,job,jobs,results))
;
return ((function (switch__19373__auto__,c__19438__auto___28240,res,vec__28058,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0 = (function (){
var statearr_28069 = [null,null,null,null,null,null,null,null];
(statearr_28069[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__);

(statearr_28069[(1)] = (1));

return statearr_28069;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1 = (function (state_28063){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_28063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e28070){if((e28070 instanceof Object)){
var ex__19377__auto__ = e28070;
var statearr_28071_28241 = state_28063;
(statearr_28071_28241[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28242 = state_28063;
state_28063 = G__28242;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__ = function(state_28063){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1.call(this,state_28063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___28240,res,vec__28058,v,p,job,jobs,results))
})();
var state__19440__auto__ = (function (){var statearr_28072 = f__19439__auto__.call(null);
(statearr_28072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___28240);

return statearr_28072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___28240,res,vec__28058,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28073){
var vec__28074 = p__28073;
var v = cljs.core.nth.call(null,vec__28074,(0),null);
var p = cljs.core.nth.call(null,vec__28074,(1),null);
var job = vec__28074;
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
var n__17261__auto___28243 = n;
var __28244 = (0);
while(true){
if((__28244 < n__17261__auto___28243)){
var G__28075_28245 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28075_28245) {
case "compute":
var c__19438__auto___28247 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28244,c__19438__auto___28247,G__28075_28245,n__17261__auto___28243,jobs,results,process,async){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (__28244,c__19438__auto___28247,G__28075_28245,n__17261__auto___28243,jobs,results,process,async){
return (function (state_28088){
var state_val_28089 = (state_28088[(1)]);
if((state_val_28089 === (1))){
var state_28088__$1 = state_28088;
var statearr_28090_28248 = state_28088__$1;
(statearr_28090_28248[(2)] = null);

(statearr_28090_28248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (2))){
var state_28088__$1 = state_28088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28088__$1,(4),jobs);
} else {
if((state_val_28089 === (3))){
var inst_28086 = (state_28088[(2)]);
var state_28088__$1 = state_28088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28088__$1,inst_28086);
} else {
if((state_val_28089 === (4))){
var inst_28078 = (state_28088[(2)]);
var inst_28079 = process.call(null,inst_28078);
var state_28088__$1 = state_28088;
if(cljs.core.truth_(inst_28079)){
var statearr_28091_28249 = state_28088__$1;
(statearr_28091_28249[(1)] = (5));

} else {
var statearr_28092_28250 = state_28088__$1;
(statearr_28092_28250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (5))){
var state_28088__$1 = state_28088;
var statearr_28093_28251 = state_28088__$1;
(statearr_28093_28251[(2)] = null);

(statearr_28093_28251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (6))){
var state_28088__$1 = state_28088;
var statearr_28094_28252 = state_28088__$1;
(statearr_28094_28252[(2)] = null);

(statearr_28094_28252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (7))){
var inst_28084 = (state_28088[(2)]);
var state_28088__$1 = state_28088;
var statearr_28095_28253 = state_28088__$1;
(statearr_28095_28253[(2)] = inst_28084);

(statearr_28095_28253[(1)] = (3));


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
});})(__28244,c__19438__auto___28247,G__28075_28245,n__17261__auto___28243,jobs,results,process,async))
;
return ((function (__28244,switch__19373__auto__,c__19438__auto___28247,G__28075_28245,n__17261__auto___28243,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0 = (function (){
var statearr_28099 = [null,null,null,null,null,null,null];
(statearr_28099[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__);

(statearr_28099[(1)] = (1));

return statearr_28099;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1 = (function (state_28088){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_28088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e28100){if((e28100 instanceof Object)){
var ex__19377__auto__ = e28100;
var statearr_28101_28254 = state_28088;
(statearr_28101_28254[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28255 = state_28088;
state_28088 = G__28255;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__ = function(state_28088){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1.call(this,state_28088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__;
})()
;})(__28244,switch__19373__auto__,c__19438__auto___28247,G__28075_28245,n__17261__auto___28243,jobs,results,process,async))
})();
var state__19440__auto__ = (function (){var statearr_28102 = f__19439__auto__.call(null);
(statearr_28102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___28247);

return statearr_28102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(__28244,c__19438__auto___28247,G__28075_28245,n__17261__auto___28243,jobs,results,process,async))
);


break;
case "async":
var c__19438__auto___28256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28244,c__19438__auto___28256,G__28075_28245,n__17261__auto___28243,jobs,results,process,async){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (__28244,c__19438__auto___28256,G__28075_28245,n__17261__auto___28243,jobs,results,process,async){
return (function (state_28115){
var state_val_28116 = (state_28115[(1)]);
if((state_val_28116 === (1))){
var state_28115__$1 = state_28115;
var statearr_28117_28257 = state_28115__$1;
(statearr_28117_28257[(2)] = null);

(statearr_28117_28257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (2))){
var state_28115__$1 = state_28115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28115__$1,(4),jobs);
} else {
if((state_val_28116 === (3))){
var inst_28113 = (state_28115[(2)]);
var state_28115__$1 = state_28115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28115__$1,inst_28113);
} else {
if((state_val_28116 === (4))){
var inst_28105 = (state_28115[(2)]);
var inst_28106 = async.call(null,inst_28105);
var state_28115__$1 = state_28115;
if(cljs.core.truth_(inst_28106)){
var statearr_28118_28258 = state_28115__$1;
(statearr_28118_28258[(1)] = (5));

} else {
var statearr_28119_28259 = state_28115__$1;
(statearr_28119_28259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (5))){
var state_28115__$1 = state_28115;
var statearr_28120_28260 = state_28115__$1;
(statearr_28120_28260[(2)] = null);

(statearr_28120_28260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (6))){
var state_28115__$1 = state_28115;
var statearr_28121_28261 = state_28115__$1;
(statearr_28121_28261[(2)] = null);

(statearr_28121_28261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (7))){
var inst_28111 = (state_28115[(2)]);
var state_28115__$1 = state_28115;
var statearr_28122_28262 = state_28115__$1;
(statearr_28122_28262[(2)] = inst_28111);

(statearr_28122_28262[(1)] = (3));


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
});})(__28244,c__19438__auto___28256,G__28075_28245,n__17261__auto___28243,jobs,results,process,async))
;
return ((function (__28244,switch__19373__auto__,c__19438__auto___28256,G__28075_28245,n__17261__auto___28243,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0 = (function (){
var statearr_28126 = [null,null,null,null,null,null,null];
(statearr_28126[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__);

(statearr_28126[(1)] = (1));

return statearr_28126;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1 = (function (state_28115){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_28115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e28127){if((e28127 instanceof Object)){
var ex__19377__auto__ = e28127;
var statearr_28128_28263 = state_28115;
(statearr_28128_28263[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28264 = state_28115;
state_28115 = G__28264;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__ = function(state_28115){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1.call(this,state_28115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__;
})()
;})(__28244,switch__19373__auto__,c__19438__auto___28256,G__28075_28245,n__17261__auto___28243,jobs,results,process,async))
})();
var state__19440__auto__ = (function (){var statearr_28129 = f__19439__auto__.call(null);
(statearr_28129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___28256);

return statearr_28129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(__28244,c__19438__auto___28256,G__28075_28245,n__17261__auto___28243,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28265 = (__28244 + (1));
__28244 = G__28265;
continue;
} else {
}
break;
}

var c__19438__auto___28266 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___28266,jobs,results,process,async){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___28266,jobs,results,process,async){
return (function (state_28151){
var state_val_28152 = (state_28151[(1)]);
if((state_val_28152 === (1))){
var state_28151__$1 = state_28151;
var statearr_28153_28267 = state_28151__$1;
(statearr_28153_28267[(2)] = null);

(statearr_28153_28267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28152 === (2))){
var state_28151__$1 = state_28151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28151__$1,(4),from);
} else {
if((state_val_28152 === (3))){
var inst_28149 = (state_28151[(2)]);
var state_28151__$1 = state_28151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28151__$1,inst_28149);
} else {
if((state_val_28152 === (4))){
var inst_28132 = (state_28151[(7)]);
var inst_28132__$1 = (state_28151[(2)]);
var inst_28133 = (inst_28132__$1 == null);
var state_28151__$1 = (function (){var statearr_28154 = state_28151;
(statearr_28154[(7)] = inst_28132__$1);

return statearr_28154;
})();
if(cljs.core.truth_(inst_28133)){
var statearr_28155_28268 = state_28151__$1;
(statearr_28155_28268[(1)] = (5));

} else {
var statearr_28156_28269 = state_28151__$1;
(statearr_28156_28269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28152 === (5))){
var inst_28135 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28151__$1 = state_28151;
var statearr_28157_28270 = state_28151__$1;
(statearr_28157_28270[(2)] = inst_28135);

(statearr_28157_28270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28152 === (6))){
var inst_28132 = (state_28151[(7)]);
var inst_28137 = (state_28151[(8)]);
var inst_28137__$1 = cljs.core.async.chan.call(null,(1));
var inst_28138 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28139 = [inst_28132,inst_28137__$1];
var inst_28140 = (new cljs.core.PersistentVector(null,2,(5),inst_28138,inst_28139,null));
var state_28151__$1 = (function (){var statearr_28158 = state_28151;
(statearr_28158[(8)] = inst_28137__$1);

return statearr_28158;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28151__$1,(8),jobs,inst_28140);
} else {
if((state_val_28152 === (7))){
var inst_28147 = (state_28151[(2)]);
var state_28151__$1 = state_28151;
var statearr_28159_28271 = state_28151__$1;
(statearr_28159_28271[(2)] = inst_28147);

(statearr_28159_28271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28152 === (8))){
var inst_28137 = (state_28151[(8)]);
var inst_28142 = (state_28151[(2)]);
var state_28151__$1 = (function (){var statearr_28160 = state_28151;
(statearr_28160[(9)] = inst_28142);

return statearr_28160;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28151__$1,(9),results,inst_28137);
} else {
if((state_val_28152 === (9))){
var inst_28144 = (state_28151[(2)]);
var state_28151__$1 = (function (){var statearr_28161 = state_28151;
(statearr_28161[(10)] = inst_28144);

return statearr_28161;
})();
var statearr_28162_28272 = state_28151__$1;
(statearr_28162_28272[(2)] = null);

(statearr_28162_28272[(1)] = (2));


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
});})(c__19438__auto___28266,jobs,results,process,async))
;
return ((function (switch__19373__auto__,c__19438__auto___28266,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0 = (function (){
var statearr_28166 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28166[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__);

(statearr_28166[(1)] = (1));

return statearr_28166;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1 = (function (state_28151){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_28151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e28167){if((e28167 instanceof Object)){
var ex__19377__auto__ = e28167;
var statearr_28168_28273 = state_28151;
(statearr_28168_28273[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28274 = state_28151;
state_28151 = G__28274;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__ = function(state_28151){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1.call(this,state_28151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___28266,jobs,results,process,async))
})();
var state__19440__auto__ = (function (){var statearr_28169 = f__19439__auto__.call(null);
(statearr_28169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___28266);

return statearr_28169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___28266,jobs,results,process,async))
);


var c__19438__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto__,jobs,results,process,async){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto__,jobs,results,process,async){
return (function (state_28207){
var state_val_28208 = (state_28207[(1)]);
if((state_val_28208 === (7))){
var inst_28203 = (state_28207[(2)]);
var state_28207__$1 = state_28207;
var statearr_28209_28275 = state_28207__$1;
(statearr_28209_28275[(2)] = inst_28203);

(statearr_28209_28275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (20))){
var state_28207__$1 = state_28207;
var statearr_28210_28276 = state_28207__$1;
(statearr_28210_28276[(2)] = null);

(statearr_28210_28276[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (1))){
var state_28207__$1 = state_28207;
var statearr_28211_28277 = state_28207__$1;
(statearr_28211_28277[(2)] = null);

(statearr_28211_28277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (4))){
var inst_28172 = (state_28207[(7)]);
var inst_28172__$1 = (state_28207[(2)]);
var inst_28173 = (inst_28172__$1 == null);
var state_28207__$1 = (function (){var statearr_28212 = state_28207;
(statearr_28212[(7)] = inst_28172__$1);

return statearr_28212;
})();
if(cljs.core.truth_(inst_28173)){
var statearr_28213_28278 = state_28207__$1;
(statearr_28213_28278[(1)] = (5));

} else {
var statearr_28214_28279 = state_28207__$1;
(statearr_28214_28279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (15))){
var inst_28185 = (state_28207[(8)]);
var state_28207__$1 = state_28207;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28207__$1,(18),to,inst_28185);
} else {
if((state_val_28208 === (21))){
var inst_28198 = (state_28207[(2)]);
var state_28207__$1 = state_28207;
var statearr_28215_28280 = state_28207__$1;
(statearr_28215_28280[(2)] = inst_28198);

(statearr_28215_28280[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (13))){
var inst_28200 = (state_28207[(2)]);
var state_28207__$1 = (function (){var statearr_28216 = state_28207;
(statearr_28216[(9)] = inst_28200);

return statearr_28216;
})();
var statearr_28217_28281 = state_28207__$1;
(statearr_28217_28281[(2)] = null);

(statearr_28217_28281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (6))){
var inst_28172 = (state_28207[(7)]);
var state_28207__$1 = state_28207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28207__$1,(11),inst_28172);
} else {
if((state_val_28208 === (17))){
var inst_28193 = (state_28207[(2)]);
var state_28207__$1 = state_28207;
if(cljs.core.truth_(inst_28193)){
var statearr_28218_28282 = state_28207__$1;
(statearr_28218_28282[(1)] = (19));

} else {
var statearr_28219_28283 = state_28207__$1;
(statearr_28219_28283[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (3))){
var inst_28205 = (state_28207[(2)]);
var state_28207__$1 = state_28207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28207__$1,inst_28205);
} else {
if((state_val_28208 === (12))){
var inst_28182 = (state_28207[(10)]);
var state_28207__$1 = state_28207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28207__$1,(14),inst_28182);
} else {
if((state_val_28208 === (2))){
var state_28207__$1 = state_28207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28207__$1,(4),results);
} else {
if((state_val_28208 === (19))){
var state_28207__$1 = state_28207;
var statearr_28220_28284 = state_28207__$1;
(statearr_28220_28284[(2)] = null);

(statearr_28220_28284[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (11))){
var inst_28182 = (state_28207[(2)]);
var state_28207__$1 = (function (){var statearr_28221 = state_28207;
(statearr_28221[(10)] = inst_28182);

return statearr_28221;
})();
var statearr_28222_28285 = state_28207__$1;
(statearr_28222_28285[(2)] = null);

(statearr_28222_28285[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (9))){
var state_28207__$1 = state_28207;
var statearr_28223_28286 = state_28207__$1;
(statearr_28223_28286[(2)] = null);

(statearr_28223_28286[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (5))){
var state_28207__$1 = state_28207;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28224_28287 = state_28207__$1;
(statearr_28224_28287[(1)] = (8));

} else {
var statearr_28225_28288 = state_28207__$1;
(statearr_28225_28288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (14))){
var inst_28185 = (state_28207[(8)]);
var inst_28187 = (state_28207[(11)]);
var inst_28185__$1 = (state_28207[(2)]);
var inst_28186 = (inst_28185__$1 == null);
var inst_28187__$1 = cljs.core.not.call(null,inst_28186);
var state_28207__$1 = (function (){var statearr_28226 = state_28207;
(statearr_28226[(8)] = inst_28185__$1);

(statearr_28226[(11)] = inst_28187__$1);

return statearr_28226;
})();
if(inst_28187__$1){
var statearr_28227_28289 = state_28207__$1;
(statearr_28227_28289[(1)] = (15));

} else {
var statearr_28228_28290 = state_28207__$1;
(statearr_28228_28290[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (16))){
var inst_28187 = (state_28207[(11)]);
var state_28207__$1 = state_28207;
var statearr_28229_28291 = state_28207__$1;
(statearr_28229_28291[(2)] = inst_28187);

(statearr_28229_28291[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (10))){
var inst_28179 = (state_28207[(2)]);
var state_28207__$1 = state_28207;
var statearr_28230_28292 = state_28207__$1;
(statearr_28230_28292[(2)] = inst_28179);

(statearr_28230_28292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (18))){
var inst_28190 = (state_28207[(2)]);
var state_28207__$1 = state_28207;
var statearr_28231_28293 = state_28207__$1;
(statearr_28231_28293[(2)] = inst_28190);

(statearr_28231_28293[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (8))){
var inst_28176 = cljs.core.async.close_BANG_.call(null,to);
var state_28207__$1 = state_28207;
var statearr_28232_28294 = state_28207__$1;
(statearr_28232_28294[(2)] = inst_28176);

(statearr_28232_28294[(1)] = (10));


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
var statearr_28236 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28236[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__);

(statearr_28236[(1)] = (1));

return statearr_28236;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1 = (function (state_28207){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_28207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e28237){if((e28237 instanceof Object)){
var ex__19377__auto__ = e28237;
var statearr_28238_28295 = state_28207;
(statearr_28238_28295[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28296 = state_28207;
state_28207 = G__28296;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__ = function(state_28207){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1.call(this,state_28207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto__,jobs,results,process,async))
})();
var state__19440__auto__ = (function (){var statearr_28239 = f__19439__auto__.call(null);
(statearr_28239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto__);

return statearr_28239;
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
var args28297 = [];
var len__17416__auto___28300 = arguments.length;
var i__17417__auto___28301 = (0);
while(true){
if((i__17417__auto___28301 < len__17416__auto___28300)){
args28297.push((arguments[i__17417__auto___28301]));

var G__28302 = (i__17417__auto___28301 + (1));
i__17417__auto___28301 = G__28302;
continue;
} else {
}
break;
}

var G__28299 = args28297.length;
switch (G__28299) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28297.length)].join('')));

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
var args28304 = [];
var len__17416__auto___28307 = arguments.length;
var i__17417__auto___28308 = (0);
while(true){
if((i__17417__auto___28308 < len__17416__auto___28307)){
args28304.push((arguments[i__17417__auto___28308]));

var G__28309 = (i__17417__auto___28308 + (1));
i__17417__auto___28308 = G__28309;
continue;
} else {
}
break;
}

var G__28306 = args28304.length;
switch (G__28306) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28304.length)].join('')));

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
var args28311 = [];
var len__17416__auto___28364 = arguments.length;
var i__17417__auto___28365 = (0);
while(true){
if((i__17417__auto___28365 < len__17416__auto___28364)){
args28311.push((arguments[i__17417__auto___28365]));

var G__28366 = (i__17417__auto___28365 + (1));
i__17417__auto___28365 = G__28366;
continue;
} else {
}
break;
}

var G__28313 = args28311.length;
switch (G__28313) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28311.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19438__auto___28368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___28368,tc,fc){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___28368,tc,fc){
return (function (state_28339){
var state_val_28340 = (state_28339[(1)]);
if((state_val_28340 === (7))){
var inst_28335 = (state_28339[(2)]);
var state_28339__$1 = state_28339;
var statearr_28341_28369 = state_28339__$1;
(statearr_28341_28369[(2)] = inst_28335);

(statearr_28341_28369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28340 === (1))){
var state_28339__$1 = state_28339;
var statearr_28342_28370 = state_28339__$1;
(statearr_28342_28370[(2)] = null);

(statearr_28342_28370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28340 === (4))){
var inst_28316 = (state_28339[(7)]);
var inst_28316__$1 = (state_28339[(2)]);
var inst_28317 = (inst_28316__$1 == null);
var state_28339__$1 = (function (){var statearr_28343 = state_28339;
(statearr_28343[(7)] = inst_28316__$1);

return statearr_28343;
})();
if(cljs.core.truth_(inst_28317)){
var statearr_28344_28371 = state_28339__$1;
(statearr_28344_28371[(1)] = (5));

} else {
var statearr_28345_28372 = state_28339__$1;
(statearr_28345_28372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28340 === (13))){
var state_28339__$1 = state_28339;
var statearr_28346_28373 = state_28339__$1;
(statearr_28346_28373[(2)] = null);

(statearr_28346_28373[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28340 === (6))){
var inst_28316 = (state_28339[(7)]);
var inst_28322 = p.call(null,inst_28316);
var state_28339__$1 = state_28339;
if(cljs.core.truth_(inst_28322)){
var statearr_28347_28374 = state_28339__$1;
(statearr_28347_28374[(1)] = (9));

} else {
var statearr_28348_28375 = state_28339__$1;
(statearr_28348_28375[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28340 === (3))){
var inst_28337 = (state_28339[(2)]);
var state_28339__$1 = state_28339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28339__$1,inst_28337);
} else {
if((state_val_28340 === (12))){
var state_28339__$1 = state_28339;
var statearr_28349_28376 = state_28339__$1;
(statearr_28349_28376[(2)] = null);

(statearr_28349_28376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28340 === (2))){
var state_28339__$1 = state_28339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28339__$1,(4),ch);
} else {
if((state_val_28340 === (11))){
var inst_28316 = (state_28339[(7)]);
var inst_28326 = (state_28339[(2)]);
var state_28339__$1 = state_28339;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28339__$1,(8),inst_28326,inst_28316);
} else {
if((state_val_28340 === (9))){
var state_28339__$1 = state_28339;
var statearr_28350_28377 = state_28339__$1;
(statearr_28350_28377[(2)] = tc);

(statearr_28350_28377[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28340 === (5))){
var inst_28319 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28320 = cljs.core.async.close_BANG_.call(null,fc);
var state_28339__$1 = (function (){var statearr_28351 = state_28339;
(statearr_28351[(8)] = inst_28319);

return statearr_28351;
})();
var statearr_28352_28378 = state_28339__$1;
(statearr_28352_28378[(2)] = inst_28320);

(statearr_28352_28378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28340 === (14))){
var inst_28333 = (state_28339[(2)]);
var state_28339__$1 = state_28339;
var statearr_28353_28379 = state_28339__$1;
(statearr_28353_28379[(2)] = inst_28333);

(statearr_28353_28379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28340 === (10))){
var state_28339__$1 = state_28339;
var statearr_28354_28380 = state_28339__$1;
(statearr_28354_28380[(2)] = fc);

(statearr_28354_28380[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28340 === (8))){
var inst_28328 = (state_28339[(2)]);
var state_28339__$1 = state_28339;
if(cljs.core.truth_(inst_28328)){
var statearr_28355_28381 = state_28339__$1;
(statearr_28355_28381[(1)] = (12));

} else {
var statearr_28356_28382 = state_28339__$1;
(statearr_28356_28382[(1)] = (13));

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
});})(c__19438__auto___28368,tc,fc))
;
return ((function (switch__19373__auto__,c__19438__auto___28368,tc,fc){
return (function() {
var cljs$core$async$state_machine__19374__auto__ = null;
var cljs$core$async$state_machine__19374__auto____0 = (function (){
var statearr_28360 = [null,null,null,null,null,null,null,null,null];
(statearr_28360[(0)] = cljs$core$async$state_machine__19374__auto__);

(statearr_28360[(1)] = (1));

return statearr_28360;
});
var cljs$core$async$state_machine__19374__auto____1 = (function (state_28339){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_28339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e28361){if((e28361 instanceof Object)){
var ex__19377__auto__ = e28361;
var statearr_28362_28383 = state_28339;
(statearr_28362_28383[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28384 = state_28339;
state_28339 = G__28384;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$state_machine__19374__auto__ = function(state_28339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19374__auto____1.call(this,state_28339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19374__auto____0;
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19374__auto____1;
return cljs$core$async$state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___28368,tc,fc))
})();
var state__19440__auto__ = (function (){var statearr_28363 = f__19439__auto__.call(null);
(statearr_28363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___28368);

return statearr_28363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___28368,tc,fc))
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
return (function (state_28431){
var state_val_28432 = (state_28431[(1)]);
if((state_val_28432 === (1))){
var inst_28417 = init;
var state_28431__$1 = (function (){var statearr_28433 = state_28431;
(statearr_28433[(7)] = inst_28417);

return statearr_28433;
})();
var statearr_28434_28449 = state_28431__$1;
(statearr_28434_28449[(2)] = null);

(statearr_28434_28449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (2))){
var state_28431__$1 = state_28431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28431__$1,(4),ch);
} else {
if((state_val_28432 === (3))){
var inst_28429 = (state_28431[(2)]);
var state_28431__$1 = state_28431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28431__$1,inst_28429);
} else {
if((state_val_28432 === (4))){
var inst_28420 = (state_28431[(8)]);
var inst_28420__$1 = (state_28431[(2)]);
var inst_28421 = (inst_28420__$1 == null);
var state_28431__$1 = (function (){var statearr_28435 = state_28431;
(statearr_28435[(8)] = inst_28420__$1);

return statearr_28435;
})();
if(cljs.core.truth_(inst_28421)){
var statearr_28436_28450 = state_28431__$1;
(statearr_28436_28450[(1)] = (5));

} else {
var statearr_28437_28451 = state_28431__$1;
(statearr_28437_28451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (5))){
var inst_28417 = (state_28431[(7)]);
var state_28431__$1 = state_28431;
var statearr_28438_28452 = state_28431__$1;
(statearr_28438_28452[(2)] = inst_28417);

(statearr_28438_28452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (6))){
var inst_28420 = (state_28431[(8)]);
var inst_28417 = (state_28431[(7)]);
var inst_28424 = f.call(null,inst_28417,inst_28420);
var inst_28417__$1 = inst_28424;
var state_28431__$1 = (function (){var statearr_28439 = state_28431;
(statearr_28439[(7)] = inst_28417__$1);

return statearr_28439;
})();
var statearr_28440_28453 = state_28431__$1;
(statearr_28440_28453[(2)] = null);

(statearr_28440_28453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (7))){
var inst_28427 = (state_28431[(2)]);
var state_28431__$1 = state_28431;
var statearr_28441_28454 = state_28431__$1;
(statearr_28441_28454[(2)] = inst_28427);

(statearr_28441_28454[(1)] = (3));


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
var statearr_28445 = [null,null,null,null,null,null,null,null,null];
(statearr_28445[(0)] = cljs$core$async$reduce_$_state_machine__19374__auto__);

(statearr_28445[(1)] = (1));

return statearr_28445;
});
var cljs$core$async$reduce_$_state_machine__19374__auto____1 = (function (state_28431){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_28431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e28446){if((e28446 instanceof Object)){
var ex__19377__auto__ = e28446;
var statearr_28447_28455 = state_28431;
(statearr_28447_28455[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28456 = state_28431;
state_28431 = G__28456;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19374__auto__ = function(state_28431){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19374__auto____1.call(this,state_28431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19374__auto____0;
cljs$core$async$reduce_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19374__auto____1;
return cljs$core$async$reduce_$_state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto__))
})();
var state__19440__auto__ = (function (){var statearr_28448 = f__19439__auto__.call(null);
(statearr_28448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto__);

return statearr_28448;
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
var args28457 = [];
var len__17416__auto___28509 = arguments.length;
var i__17417__auto___28510 = (0);
while(true){
if((i__17417__auto___28510 < len__17416__auto___28509)){
args28457.push((arguments[i__17417__auto___28510]));

var G__28511 = (i__17417__auto___28510 + (1));
i__17417__auto___28510 = G__28511;
continue;
} else {
}
break;
}

var G__28459 = args28457.length;
switch (G__28459) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28457.length)].join('')));

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
return (function (state_28484){
var state_val_28485 = (state_28484[(1)]);
if((state_val_28485 === (7))){
var inst_28466 = (state_28484[(2)]);
var state_28484__$1 = state_28484;
var statearr_28486_28513 = state_28484__$1;
(statearr_28486_28513[(2)] = inst_28466);

(statearr_28486_28513[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (1))){
var inst_28460 = cljs.core.seq.call(null,coll);
var inst_28461 = inst_28460;
var state_28484__$1 = (function (){var statearr_28487 = state_28484;
(statearr_28487[(7)] = inst_28461);

return statearr_28487;
})();
var statearr_28488_28514 = state_28484__$1;
(statearr_28488_28514[(2)] = null);

(statearr_28488_28514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (4))){
var inst_28461 = (state_28484[(7)]);
var inst_28464 = cljs.core.first.call(null,inst_28461);
var state_28484__$1 = state_28484;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28484__$1,(7),ch,inst_28464);
} else {
if((state_val_28485 === (13))){
var inst_28478 = (state_28484[(2)]);
var state_28484__$1 = state_28484;
var statearr_28489_28515 = state_28484__$1;
(statearr_28489_28515[(2)] = inst_28478);

(statearr_28489_28515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (6))){
var inst_28469 = (state_28484[(2)]);
var state_28484__$1 = state_28484;
if(cljs.core.truth_(inst_28469)){
var statearr_28490_28516 = state_28484__$1;
(statearr_28490_28516[(1)] = (8));

} else {
var statearr_28491_28517 = state_28484__$1;
(statearr_28491_28517[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (3))){
var inst_28482 = (state_28484[(2)]);
var state_28484__$1 = state_28484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28484__$1,inst_28482);
} else {
if((state_val_28485 === (12))){
var state_28484__$1 = state_28484;
var statearr_28492_28518 = state_28484__$1;
(statearr_28492_28518[(2)] = null);

(statearr_28492_28518[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (2))){
var inst_28461 = (state_28484[(7)]);
var state_28484__$1 = state_28484;
if(cljs.core.truth_(inst_28461)){
var statearr_28493_28519 = state_28484__$1;
(statearr_28493_28519[(1)] = (4));

} else {
var statearr_28494_28520 = state_28484__$1;
(statearr_28494_28520[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (11))){
var inst_28475 = cljs.core.async.close_BANG_.call(null,ch);
var state_28484__$1 = state_28484;
var statearr_28495_28521 = state_28484__$1;
(statearr_28495_28521[(2)] = inst_28475);

(statearr_28495_28521[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (9))){
var state_28484__$1 = state_28484;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28496_28522 = state_28484__$1;
(statearr_28496_28522[(1)] = (11));

} else {
var statearr_28497_28523 = state_28484__$1;
(statearr_28497_28523[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (5))){
var inst_28461 = (state_28484[(7)]);
var state_28484__$1 = state_28484;
var statearr_28498_28524 = state_28484__$1;
(statearr_28498_28524[(2)] = inst_28461);

(statearr_28498_28524[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (10))){
var inst_28480 = (state_28484[(2)]);
var state_28484__$1 = state_28484;
var statearr_28499_28525 = state_28484__$1;
(statearr_28499_28525[(2)] = inst_28480);

(statearr_28499_28525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (8))){
var inst_28461 = (state_28484[(7)]);
var inst_28471 = cljs.core.next.call(null,inst_28461);
var inst_28461__$1 = inst_28471;
var state_28484__$1 = (function (){var statearr_28500 = state_28484;
(statearr_28500[(7)] = inst_28461__$1);

return statearr_28500;
})();
var statearr_28501_28526 = state_28484__$1;
(statearr_28501_28526[(2)] = null);

(statearr_28501_28526[(1)] = (2));


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
var statearr_28505 = [null,null,null,null,null,null,null,null];
(statearr_28505[(0)] = cljs$core$async$state_machine__19374__auto__);

(statearr_28505[(1)] = (1));

return statearr_28505;
});
var cljs$core$async$state_machine__19374__auto____1 = (function (state_28484){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_28484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e28506){if((e28506 instanceof Object)){
var ex__19377__auto__ = e28506;
var statearr_28507_28527 = state_28484;
(statearr_28507_28527[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28528 = state_28484;
state_28484 = G__28528;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$state_machine__19374__auto__ = function(state_28484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19374__auto____1.call(this,state_28484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19374__auto____0;
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19374__auto____1;
return cljs$core$async$state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto__))
})();
var state__19440__auto__ = (function (){var statearr_28508 = f__19439__auto__.call(null);
(statearr_28508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto__);

return statearr_28508;
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
if(typeof cljs.core.async.t_cljs$core$async28750 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28750 = (function (mult,ch,cs,meta28751){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28751 = meta28751;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28752,meta28751__$1){
var self__ = this;
var _28752__$1 = this;
return (new cljs.core.async.t_cljs$core$async28750(self__.mult,self__.ch,self__.cs,meta28751__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28750.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28752){
var self__ = this;
var _28752__$1 = this;
return self__.meta28751;
});})(cs))
;

cljs.core.async.t_cljs$core$async28750.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28750.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28750.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28750.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28750.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28750.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28750.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28751","meta28751",-150561567,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28750.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28750.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28750";

cljs.core.async.t_cljs$core$async28750.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async28750");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28750 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28750(mult__$1,ch__$1,cs__$1,meta28751){
return (new cljs.core.async.t_cljs$core$async28750(mult__$1,ch__$1,cs__$1,meta28751));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28750(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19438__auto___28971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___28971,cs,m,dchan,dctr,done){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___28971,cs,m,dchan,dctr,done){
return (function (state_28883){
var state_val_28884 = (state_28883[(1)]);
if((state_val_28884 === (7))){
var inst_28879 = (state_28883[(2)]);
var state_28883__$1 = state_28883;
var statearr_28885_28972 = state_28883__$1;
(statearr_28885_28972[(2)] = inst_28879);

(statearr_28885_28972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (20))){
var inst_28784 = (state_28883[(7)]);
var inst_28794 = cljs.core.first.call(null,inst_28784);
var inst_28795 = cljs.core.nth.call(null,inst_28794,(0),null);
var inst_28796 = cljs.core.nth.call(null,inst_28794,(1),null);
var state_28883__$1 = (function (){var statearr_28886 = state_28883;
(statearr_28886[(8)] = inst_28795);

return statearr_28886;
})();
if(cljs.core.truth_(inst_28796)){
var statearr_28887_28973 = state_28883__$1;
(statearr_28887_28973[(1)] = (22));

} else {
var statearr_28888_28974 = state_28883__$1;
(statearr_28888_28974[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (27))){
var inst_28831 = (state_28883[(9)]);
var inst_28826 = (state_28883[(10)]);
var inst_28824 = (state_28883[(11)]);
var inst_28755 = (state_28883[(12)]);
var inst_28831__$1 = cljs.core._nth.call(null,inst_28824,inst_28826);
var inst_28832 = cljs.core.async.put_BANG_.call(null,inst_28831__$1,inst_28755,done);
var state_28883__$1 = (function (){var statearr_28889 = state_28883;
(statearr_28889[(9)] = inst_28831__$1);

return statearr_28889;
})();
if(cljs.core.truth_(inst_28832)){
var statearr_28890_28975 = state_28883__$1;
(statearr_28890_28975[(1)] = (30));

} else {
var statearr_28891_28976 = state_28883__$1;
(statearr_28891_28976[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (1))){
var state_28883__$1 = state_28883;
var statearr_28892_28977 = state_28883__$1;
(statearr_28892_28977[(2)] = null);

(statearr_28892_28977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (24))){
var inst_28784 = (state_28883[(7)]);
var inst_28801 = (state_28883[(2)]);
var inst_28802 = cljs.core.next.call(null,inst_28784);
var inst_28764 = inst_28802;
var inst_28765 = null;
var inst_28766 = (0);
var inst_28767 = (0);
var state_28883__$1 = (function (){var statearr_28893 = state_28883;
(statearr_28893[(13)] = inst_28764);

(statearr_28893[(14)] = inst_28765);

(statearr_28893[(15)] = inst_28801);

(statearr_28893[(16)] = inst_28766);

(statearr_28893[(17)] = inst_28767);

return statearr_28893;
})();
var statearr_28894_28978 = state_28883__$1;
(statearr_28894_28978[(2)] = null);

(statearr_28894_28978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (39))){
var state_28883__$1 = state_28883;
var statearr_28898_28979 = state_28883__$1;
(statearr_28898_28979[(2)] = null);

(statearr_28898_28979[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (4))){
var inst_28755 = (state_28883[(12)]);
var inst_28755__$1 = (state_28883[(2)]);
var inst_28756 = (inst_28755__$1 == null);
var state_28883__$1 = (function (){var statearr_28899 = state_28883;
(statearr_28899[(12)] = inst_28755__$1);

return statearr_28899;
})();
if(cljs.core.truth_(inst_28756)){
var statearr_28900_28980 = state_28883__$1;
(statearr_28900_28980[(1)] = (5));

} else {
var statearr_28901_28981 = state_28883__$1;
(statearr_28901_28981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (15))){
var inst_28764 = (state_28883[(13)]);
var inst_28765 = (state_28883[(14)]);
var inst_28766 = (state_28883[(16)]);
var inst_28767 = (state_28883[(17)]);
var inst_28780 = (state_28883[(2)]);
var inst_28781 = (inst_28767 + (1));
var tmp28895 = inst_28764;
var tmp28896 = inst_28765;
var tmp28897 = inst_28766;
var inst_28764__$1 = tmp28895;
var inst_28765__$1 = tmp28896;
var inst_28766__$1 = tmp28897;
var inst_28767__$1 = inst_28781;
var state_28883__$1 = (function (){var statearr_28902 = state_28883;
(statearr_28902[(13)] = inst_28764__$1);

(statearr_28902[(14)] = inst_28765__$1);

(statearr_28902[(18)] = inst_28780);

(statearr_28902[(16)] = inst_28766__$1);

(statearr_28902[(17)] = inst_28767__$1);

return statearr_28902;
})();
var statearr_28903_28982 = state_28883__$1;
(statearr_28903_28982[(2)] = null);

(statearr_28903_28982[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (21))){
var inst_28805 = (state_28883[(2)]);
var state_28883__$1 = state_28883;
var statearr_28907_28983 = state_28883__$1;
(statearr_28907_28983[(2)] = inst_28805);

(statearr_28907_28983[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (31))){
var inst_28831 = (state_28883[(9)]);
var inst_28835 = done.call(null,null);
var inst_28836 = cljs.core.async.untap_STAR_.call(null,m,inst_28831);
var state_28883__$1 = (function (){var statearr_28908 = state_28883;
(statearr_28908[(19)] = inst_28835);

return statearr_28908;
})();
var statearr_28909_28984 = state_28883__$1;
(statearr_28909_28984[(2)] = inst_28836);

(statearr_28909_28984[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (32))){
var inst_28826 = (state_28883[(10)]);
var inst_28825 = (state_28883[(20)]);
var inst_28824 = (state_28883[(11)]);
var inst_28823 = (state_28883[(21)]);
var inst_28838 = (state_28883[(2)]);
var inst_28839 = (inst_28826 + (1));
var tmp28904 = inst_28825;
var tmp28905 = inst_28824;
var tmp28906 = inst_28823;
var inst_28823__$1 = tmp28906;
var inst_28824__$1 = tmp28905;
var inst_28825__$1 = tmp28904;
var inst_28826__$1 = inst_28839;
var state_28883__$1 = (function (){var statearr_28910 = state_28883;
(statearr_28910[(10)] = inst_28826__$1);

(statearr_28910[(22)] = inst_28838);

(statearr_28910[(20)] = inst_28825__$1);

(statearr_28910[(11)] = inst_28824__$1);

(statearr_28910[(21)] = inst_28823__$1);

return statearr_28910;
})();
var statearr_28911_28985 = state_28883__$1;
(statearr_28911_28985[(2)] = null);

(statearr_28911_28985[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (40))){
var inst_28851 = (state_28883[(23)]);
var inst_28855 = done.call(null,null);
var inst_28856 = cljs.core.async.untap_STAR_.call(null,m,inst_28851);
var state_28883__$1 = (function (){var statearr_28912 = state_28883;
(statearr_28912[(24)] = inst_28855);

return statearr_28912;
})();
var statearr_28913_28986 = state_28883__$1;
(statearr_28913_28986[(2)] = inst_28856);

(statearr_28913_28986[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (33))){
var inst_28842 = (state_28883[(25)]);
var inst_28844 = cljs.core.chunked_seq_QMARK_.call(null,inst_28842);
var state_28883__$1 = state_28883;
if(inst_28844){
var statearr_28914_28987 = state_28883__$1;
(statearr_28914_28987[(1)] = (36));

} else {
var statearr_28915_28988 = state_28883__$1;
(statearr_28915_28988[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (13))){
var inst_28774 = (state_28883[(26)]);
var inst_28777 = cljs.core.async.close_BANG_.call(null,inst_28774);
var state_28883__$1 = state_28883;
var statearr_28916_28989 = state_28883__$1;
(statearr_28916_28989[(2)] = inst_28777);

(statearr_28916_28989[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (22))){
var inst_28795 = (state_28883[(8)]);
var inst_28798 = cljs.core.async.close_BANG_.call(null,inst_28795);
var state_28883__$1 = state_28883;
var statearr_28917_28990 = state_28883__$1;
(statearr_28917_28990[(2)] = inst_28798);

(statearr_28917_28990[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (36))){
var inst_28842 = (state_28883[(25)]);
var inst_28846 = cljs.core.chunk_first.call(null,inst_28842);
var inst_28847 = cljs.core.chunk_rest.call(null,inst_28842);
var inst_28848 = cljs.core.count.call(null,inst_28846);
var inst_28823 = inst_28847;
var inst_28824 = inst_28846;
var inst_28825 = inst_28848;
var inst_28826 = (0);
var state_28883__$1 = (function (){var statearr_28918 = state_28883;
(statearr_28918[(10)] = inst_28826);

(statearr_28918[(20)] = inst_28825);

(statearr_28918[(11)] = inst_28824);

(statearr_28918[(21)] = inst_28823);

return statearr_28918;
})();
var statearr_28919_28991 = state_28883__$1;
(statearr_28919_28991[(2)] = null);

(statearr_28919_28991[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (41))){
var inst_28842 = (state_28883[(25)]);
var inst_28858 = (state_28883[(2)]);
var inst_28859 = cljs.core.next.call(null,inst_28842);
var inst_28823 = inst_28859;
var inst_28824 = null;
var inst_28825 = (0);
var inst_28826 = (0);
var state_28883__$1 = (function (){var statearr_28920 = state_28883;
(statearr_28920[(10)] = inst_28826);

(statearr_28920[(20)] = inst_28825);

(statearr_28920[(11)] = inst_28824);

(statearr_28920[(27)] = inst_28858);

(statearr_28920[(21)] = inst_28823);

return statearr_28920;
})();
var statearr_28921_28992 = state_28883__$1;
(statearr_28921_28992[(2)] = null);

(statearr_28921_28992[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (43))){
var state_28883__$1 = state_28883;
var statearr_28922_28993 = state_28883__$1;
(statearr_28922_28993[(2)] = null);

(statearr_28922_28993[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (29))){
var inst_28867 = (state_28883[(2)]);
var state_28883__$1 = state_28883;
var statearr_28923_28994 = state_28883__$1;
(statearr_28923_28994[(2)] = inst_28867);

(statearr_28923_28994[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (44))){
var inst_28876 = (state_28883[(2)]);
var state_28883__$1 = (function (){var statearr_28924 = state_28883;
(statearr_28924[(28)] = inst_28876);

return statearr_28924;
})();
var statearr_28925_28995 = state_28883__$1;
(statearr_28925_28995[(2)] = null);

(statearr_28925_28995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (6))){
var inst_28815 = (state_28883[(29)]);
var inst_28814 = cljs.core.deref.call(null,cs);
var inst_28815__$1 = cljs.core.keys.call(null,inst_28814);
var inst_28816 = cljs.core.count.call(null,inst_28815__$1);
var inst_28817 = cljs.core.reset_BANG_.call(null,dctr,inst_28816);
var inst_28822 = cljs.core.seq.call(null,inst_28815__$1);
var inst_28823 = inst_28822;
var inst_28824 = null;
var inst_28825 = (0);
var inst_28826 = (0);
var state_28883__$1 = (function (){var statearr_28926 = state_28883;
(statearr_28926[(10)] = inst_28826);

(statearr_28926[(29)] = inst_28815__$1);

(statearr_28926[(20)] = inst_28825);

(statearr_28926[(11)] = inst_28824);

(statearr_28926[(30)] = inst_28817);

(statearr_28926[(21)] = inst_28823);

return statearr_28926;
})();
var statearr_28927_28996 = state_28883__$1;
(statearr_28927_28996[(2)] = null);

(statearr_28927_28996[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (28))){
var inst_28842 = (state_28883[(25)]);
var inst_28823 = (state_28883[(21)]);
var inst_28842__$1 = cljs.core.seq.call(null,inst_28823);
var state_28883__$1 = (function (){var statearr_28928 = state_28883;
(statearr_28928[(25)] = inst_28842__$1);

return statearr_28928;
})();
if(inst_28842__$1){
var statearr_28929_28997 = state_28883__$1;
(statearr_28929_28997[(1)] = (33));

} else {
var statearr_28930_28998 = state_28883__$1;
(statearr_28930_28998[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (25))){
var inst_28826 = (state_28883[(10)]);
var inst_28825 = (state_28883[(20)]);
var inst_28828 = (inst_28826 < inst_28825);
var inst_28829 = inst_28828;
var state_28883__$1 = state_28883;
if(cljs.core.truth_(inst_28829)){
var statearr_28931_28999 = state_28883__$1;
(statearr_28931_28999[(1)] = (27));

} else {
var statearr_28932_29000 = state_28883__$1;
(statearr_28932_29000[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (34))){
var state_28883__$1 = state_28883;
var statearr_28933_29001 = state_28883__$1;
(statearr_28933_29001[(2)] = null);

(statearr_28933_29001[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (17))){
var state_28883__$1 = state_28883;
var statearr_28934_29002 = state_28883__$1;
(statearr_28934_29002[(2)] = null);

(statearr_28934_29002[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (3))){
var inst_28881 = (state_28883[(2)]);
var state_28883__$1 = state_28883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28883__$1,inst_28881);
} else {
if((state_val_28884 === (12))){
var inst_28810 = (state_28883[(2)]);
var state_28883__$1 = state_28883;
var statearr_28935_29003 = state_28883__$1;
(statearr_28935_29003[(2)] = inst_28810);

(statearr_28935_29003[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (2))){
var state_28883__$1 = state_28883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28883__$1,(4),ch);
} else {
if((state_val_28884 === (23))){
var state_28883__$1 = state_28883;
var statearr_28936_29004 = state_28883__$1;
(statearr_28936_29004[(2)] = null);

(statearr_28936_29004[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (35))){
var inst_28865 = (state_28883[(2)]);
var state_28883__$1 = state_28883;
var statearr_28937_29005 = state_28883__$1;
(statearr_28937_29005[(2)] = inst_28865);

(statearr_28937_29005[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (19))){
var inst_28784 = (state_28883[(7)]);
var inst_28788 = cljs.core.chunk_first.call(null,inst_28784);
var inst_28789 = cljs.core.chunk_rest.call(null,inst_28784);
var inst_28790 = cljs.core.count.call(null,inst_28788);
var inst_28764 = inst_28789;
var inst_28765 = inst_28788;
var inst_28766 = inst_28790;
var inst_28767 = (0);
var state_28883__$1 = (function (){var statearr_28938 = state_28883;
(statearr_28938[(13)] = inst_28764);

(statearr_28938[(14)] = inst_28765);

(statearr_28938[(16)] = inst_28766);

(statearr_28938[(17)] = inst_28767);

return statearr_28938;
})();
var statearr_28939_29006 = state_28883__$1;
(statearr_28939_29006[(2)] = null);

(statearr_28939_29006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (11))){
var inst_28764 = (state_28883[(13)]);
var inst_28784 = (state_28883[(7)]);
var inst_28784__$1 = cljs.core.seq.call(null,inst_28764);
var state_28883__$1 = (function (){var statearr_28940 = state_28883;
(statearr_28940[(7)] = inst_28784__$1);

return statearr_28940;
})();
if(inst_28784__$1){
var statearr_28941_29007 = state_28883__$1;
(statearr_28941_29007[(1)] = (16));

} else {
var statearr_28942_29008 = state_28883__$1;
(statearr_28942_29008[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (9))){
var inst_28812 = (state_28883[(2)]);
var state_28883__$1 = state_28883;
var statearr_28943_29009 = state_28883__$1;
(statearr_28943_29009[(2)] = inst_28812);

(statearr_28943_29009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (5))){
var inst_28762 = cljs.core.deref.call(null,cs);
var inst_28763 = cljs.core.seq.call(null,inst_28762);
var inst_28764 = inst_28763;
var inst_28765 = null;
var inst_28766 = (0);
var inst_28767 = (0);
var state_28883__$1 = (function (){var statearr_28944 = state_28883;
(statearr_28944[(13)] = inst_28764);

(statearr_28944[(14)] = inst_28765);

(statearr_28944[(16)] = inst_28766);

(statearr_28944[(17)] = inst_28767);

return statearr_28944;
})();
var statearr_28945_29010 = state_28883__$1;
(statearr_28945_29010[(2)] = null);

(statearr_28945_29010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (14))){
var state_28883__$1 = state_28883;
var statearr_28946_29011 = state_28883__$1;
(statearr_28946_29011[(2)] = null);

(statearr_28946_29011[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (45))){
var inst_28873 = (state_28883[(2)]);
var state_28883__$1 = state_28883;
var statearr_28947_29012 = state_28883__$1;
(statearr_28947_29012[(2)] = inst_28873);

(statearr_28947_29012[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (26))){
var inst_28815 = (state_28883[(29)]);
var inst_28869 = (state_28883[(2)]);
var inst_28870 = cljs.core.seq.call(null,inst_28815);
var state_28883__$1 = (function (){var statearr_28948 = state_28883;
(statearr_28948[(31)] = inst_28869);

return statearr_28948;
})();
if(inst_28870){
var statearr_28949_29013 = state_28883__$1;
(statearr_28949_29013[(1)] = (42));

} else {
var statearr_28950_29014 = state_28883__$1;
(statearr_28950_29014[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (16))){
var inst_28784 = (state_28883[(7)]);
var inst_28786 = cljs.core.chunked_seq_QMARK_.call(null,inst_28784);
var state_28883__$1 = state_28883;
if(inst_28786){
var statearr_28951_29015 = state_28883__$1;
(statearr_28951_29015[(1)] = (19));

} else {
var statearr_28952_29016 = state_28883__$1;
(statearr_28952_29016[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (38))){
var inst_28862 = (state_28883[(2)]);
var state_28883__$1 = state_28883;
var statearr_28953_29017 = state_28883__$1;
(statearr_28953_29017[(2)] = inst_28862);

(statearr_28953_29017[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (30))){
var state_28883__$1 = state_28883;
var statearr_28954_29018 = state_28883__$1;
(statearr_28954_29018[(2)] = null);

(statearr_28954_29018[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (10))){
var inst_28765 = (state_28883[(14)]);
var inst_28767 = (state_28883[(17)]);
var inst_28773 = cljs.core._nth.call(null,inst_28765,inst_28767);
var inst_28774 = cljs.core.nth.call(null,inst_28773,(0),null);
var inst_28775 = cljs.core.nth.call(null,inst_28773,(1),null);
var state_28883__$1 = (function (){var statearr_28955 = state_28883;
(statearr_28955[(26)] = inst_28774);

return statearr_28955;
})();
if(cljs.core.truth_(inst_28775)){
var statearr_28956_29019 = state_28883__$1;
(statearr_28956_29019[(1)] = (13));

} else {
var statearr_28957_29020 = state_28883__$1;
(statearr_28957_29020[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (18))){
var inst_28808 = (state_28883[(2)]);
var state_28883__$1 = state_28883;
var statearr_28958_29021 = state_28883__$1;
(statearr_28958_29021[(2)] = inst_28808);

(statearr_28958_29021[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (42))){
var state_28883__$1 = state_28883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28883__$1,(45),dchan);
} else {
if((state_val_28884 === (37))){
var inst_28842 = (state_28883[(25)]);
var inst_28755 = (state_28883[(12)]);
var inst_28851 = (state_28883[(23)]);
var inst_28851__$1 = cljs.core.first.call(null,inst_28842);
var inst_28852 = cljs.core.async.put_BANG_.call(null,inst_28851__$1,inst_28755,done);
var state_28883__$1 = (function (){var statearr_28959 = state_28883;
(statearr_28959[(23)] = inst_28851__$1);

return statearr_28959;
})();
if(cljs.core.truth_(inst_28852)){
var statearr_28960_29022 = state_28883__$1;
(statearr_28960_29022[(1)] = (39));

} else {
var statearr_28961_29023 = state_28883__$1;
(statearr_28961_29023[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (8))){
var inst_28766 = (state_28883[(16)]);
var inst_28767 = (state_28883[(17)]);
var inst_28769 = (inst_28767 < inst_28766);
var inst_28770 = inst_28769;
var state_28883__$1 = state_28883;
if(cljs.core.truth_(inst_28770)){
var statearr_28962_29024 = state_28883__$1;
(statearr_28962_29024[(1)] = (10));

} else {
var statearr_28963_29025 = state_28883__$1;
(statearr_28963_29025[(1)] = (11));

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
});})(c__19438__auto___28971,cs,m,dchan,dctr,done))
;
return ((function (switch__19373__auto__,c__19438__auto___28971,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19374__auto__ = null;
var cljs$core$async$mult_$_state_machine__19374__auto____0 = (function (){
var statearr_28967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28967[(0)] = cljs$core$async$mult_$_state_machine__19374__auto__);

(statearr_28967[(1)] = (1));

return statearr_28967;
});
var cljs$core$async$mult_$_state_machine__19374__auto____1 = (function (state_28883){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_28883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e28968){if((e28968 instanceof Object)){
var ex__19377__auto__ = e28968;
var statearr_28969_29026 = state_28883;
(statearr_28969_29026[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29027 = state_28883;
state_28883 = G__29027;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19374__auto__ = function(state_28883){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19374__auto____1.call(this,state_28883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19374__auto____0;
cljs$core$async$mult_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19374__auto____1;
return cljs$core$async$mult_$_state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___28971,cs,m,dchan,dctr,done))
})();
var state__19440__auto__ = (function (){var statearr_28970 = f__19439__auto__.call(null);
(statearr_28970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___28971);

return statearr_28970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___28971,cs,m,dchan,dctr,done))
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
var args29028 = [];
var len__17416__auto___29031 = arguments.length;
var i__17417__auto___29032 = (0);
while(true){
if((i__17417__auto___29032 < len__17416__auto___29031)){
args29028.push((arguments[i__17417__auto___29032]));

var G__29033 = (i__17417__auto___29032 + (1));
i__17417__auto___29032 = G__29033;
continue;
} else {
}
break;
}

var G__29030 = args29028.length;
switch (G__29030) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29028.length)].join('')));

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
var len__17416__auto___29045 = arguments.length;
var i__17417__auto___29046 = (0);
while(true){
if((i__17417__auto___29046 < len__17416__auto___29045)){
args__17423__auto__.push((arguments[i__17417__auto___29046]));

var G__29047 = (i__17417__auto___29046 + (1));
i__17417__auto___29046 = G__29047;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((3) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17424__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29039){
var map__29040 = p__29039;
var map__29040__$1 = ((((!((map__29040 == null)))?((((map__29040.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29040.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29040):map__29040);
var opts = map__29040__$1;
var statearr_29042_29048 = state;
(statearr_29042_29048[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__29040,map__29040__$1,opts){
return (function (val){
var statearr_29043_29049 = state;
(statearr_29043_29049[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29040,map__29040__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_29044_29050 = state;
(statearr_29044_29050[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29035){
var G__29036 = cljs.core.first.call(null,seq29035);
var seq29035__$1 = cljs.core.next.call(null,seq29035);
var G__29037 = cljs.core.first.call(null,seq29035__$1);
var seq29035__$2 = cljs.core.next.call(null,seq29035__$1);
var G__29038 = cljs.core.first.call(null,seq29035__$2);
var seq29035__$3 = cljs.core.next.call(null,seq29035__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29036,G__29037,G__29038,seq29035__$3);
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
if(typeof cljs.core.async.t_cljs$core$async29214 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29214 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29215){
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
this.meta29215 = meta29215;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29216,meta29215__$1){
var self__ = this;
var _29216__$1 = this;
return (new cljs.core.async.t_cljs$core$async29214(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29215__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29214.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29216){
var self__ = this;
var _29216__$1 = this;
return self__.meta29215;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29214.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29214.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29214.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29214.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29214.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29214.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29214.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29214.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async29214.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29215","meta29215",1767452754,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29214.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29214.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29214";

cljs.core.async.t_cljs$core$async29214.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async29214");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29214 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29214(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29215){
return (new cljs.core.async.t_cljs$core$async29214(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29215));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29214(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19438__auto___29377 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___29377,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___29377,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29314){
var state_val_29315 = (state_29314[(1)]);
if((state_val_29315 === (7))){
var inst_29232 = (state_29314[(2)]);
var state_29314__$1 = state_29314;
var statearr_29316_29378 = state_29314__$1;
(statearr_29316_29378[(2)] = inst_29232);

(statearr_29316_29378[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (20))){
var inst_29244 = (state_29314[(7)]);
var state_29314__$1 = state_29314;
var statearr_29317_29379 = state_29314__$1;
(statearr_29317_29379[(2)] = inst_29244);

(statearr_29317_29379[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (27))){
var state_29314__$1 = state_29314;
var statearr_29318_29380 = state_29314__$1;
(statearr_29318_29380[(2)] = null);

(statearr_29318_29380[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (1))){
var inst_29220 = (state_29314[(8)]);
var inst_29220__$1 = calc_state.call(null);
var inst_29222 = (inst_29220__$1 == null);
var inst_29223 = cljs.core.not.call(null,inst_29222);
var state_29314__$1 = (function (){var statearr_29319 = state_29314;
(statearr_29319[(8)] = inst_29220__$1);

return statearr_29319;
})();
if(inst_29223){
var statearr_29320_29381 = state_29314__$1;
(statearr_29320_29381[(1)] = (2));

} else {
var statearr_29321_29382 = state_29314__$1;
(statearr_29321_29382[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (24))){
var inst_29274 = (state_29314[(9)]);
var inst_29267 = (state_29314[(10)]);
var inst_29288 = (state_29314[(11)]);
var inst_29288__$1 = inst_29267.call(null,inst_29274);
var state_29314__$1 = (function (){var statearr_29322 = state_29314;
(statearr_29322[(11)] = inst_29288__$1);

return statearr_29322;
})();
if(cljs.core.truth_(inst_29288__$1)){
var statearr_29323_29383 = state_29314__$1;
(statearr_29323_29383[(1)] = (29));

} else {
var statearr_29324_29384 = state_29314__$1;
(statearr_29324_29384[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (4))){
var inst_29235 = (state_29314[(2)]);
var state_29314__$1 = state_29314;
if(cljs.core.truth_(inst_29235)){
var statearr_29325_29385 = state_29314__$1;
(statearr_29325_29385[(1)] = (8));

} else {
var statearr_29326_29386 = state_29314__$1;
(statearr_29326_29386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (15))){
var inst_29261 = (state_29314[(2)]);
var state_29314__$1 = state_29314;
if(cljs.core.truth_(inst_29261)){
var statearr_29327_29387 = state_29314__$1;
(statearr_29327_29387[(1)] = (19));

} else {
var statearr_29328_29388 = state_29314__$1;
(statearr_29328_29388[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (21))){
var inst_29266 = (state_29314[(12)]);
var inst_29266__$1 = (state_29314[(2)]);
var inst_29267 = cljs.core.get.call(null,inst_29266__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29268 = cljs.core.get.call(null,inst_29266__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29269 = cljs.core.get.call(null,inst_29266__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29314__$1 = (function (){var statearr_29329 = state_29314;
(statearr_29329[(10)] = inst_29267);

(statearr_29329[(12)] = inst_29266__$1);

(statearr_29329[(13)] = inst_29268);

return statearr_29329;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29314__$1,(22),inst_29269);
} else {
if((state_val_29315 === (31))){
var inst_29296 = (state_29314[(2)]);
var state_29314__$1 = state_29314;
if(cljs.core.truth_(inst_29296)){
var statearr_29330_29389 = state_29314__$1;
(statearr_29330_29389[(1)] = (32));

} else {
var statearr_29331_29390 = state_29314__$1;
(statearr_29331_29390[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (32))){
var inst_29273 = (state_29314[(14)]);
var state_29314__$1 = state_29314;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29314__$1,(35),out,inst_29273);
} else {
if((state_val_29315 === (33))){
var inst_29266 = (state_29314[(12)]);
var inst_29244 = inst_29266;
var state_29314__$1 = (function (){var statearr_29332 = state_29314;
(statearr_29332[(7)] = inst_29244);

return statearr_29332;
})();
var statearr_29333_29391 = state_29314__$1;
(statearr_29333_29391[(2)] = null);

(statearr_29333_29391[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (13))){
var inst_29244 = (state_29314[(7)]);
var inst_29251 = inst_29244.cljs$lang$protocol_mask$partition0$;
var inst_29252 = (inst_29251 & (64));
var inst_29253 = inst_29244.cljs$core$ISeq$;
var inst_29254 = (inst_29252) || (inst_29253);
var state_29314__$1 = state_29314;
if(cljs.core.truth_(inst_29254)){
var statearr_29334_29392 = state_29314__$1;
(statearr_29334_29392[(1)] = (16));

} else {
var statearr_29335_29393 = state_29314__$1;
(statearr_29335_29393[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (22))){
var inst_29274 = (state_29314[(9)]);
var inst_29273 = (state_29314[(14)]);
var inst_29272 = (state_29314[(2)]);
var inst_29273__$1 = cljs.core.nth.call(null,inst_29272,(0),null);
var inst_29274__$1 = cljs.core.nth.call(null,inst_29272,(1),null);
var inst_29275 = (inst_29273__$1 == null);
var inst_29276 = cljs.core._EQ_.call(null,inst_29274__$1,change);
var inst_29277 = (inst_29275) || (inst_29276);
var state_29314__$1 = (function (){var statearr_29336 = state_29314;
(statearr_29336[(9)] = inst_29274__$1);

(statearr_29336[(14)] = inst_29273__$1);

return statearr_29336;
})();
if(cljs.core.truth_(inst_29277)){
var statearr_29337_29394 = state_29314__$1;
(statearr_29337_29394[(1)] = (23));

} else {
var statearr_29338_29395 = state_29314__$1;
(statearr_29338_29395[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (36))){
var inst_29266 = (state_29314[(12)]);
var inst_29244 = inst_29266;
var state_29314__$1 = (function (){var statearr_29339 = state_29314;
(statearr_29339[(7)] = inst_29244);

return statearr_29339;
})();
var statearr_29340_29396 = state_29314__$1;
(statearr_29340_29396[(2)] = null);

(statearr_29340_29396[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (29))){
var inst_29288 = (state_29314[(11)]);
var state_29314__$1 = state_29314;
var statearr_29341_29397 = state_29314__$1;
(statearr_29341_29397[(2)] = inst_29288);

(statearr_29341_29397[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (6))){
var state_29314__$1 = state_29314;
var statearr_29342_29398 = state_29314__$1;
(statearr_29342_29398[(2)] = false);

(statearr_29342_29398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (28))){
var inst_29284 = (state_29314[(2)]);
var inst_29285 = calc_state.call(null);
var inst_29244 = inst_29285;
var state_29314__$1 = (function (){var statearr_29343 = state_29314;
(statearr_29343[(15)] = inst_29284);

(statearr_29343[(7)] = inst_29244);

return statearr_29343;
})();
var statearr_29344_29399 = state_29314__$1;
(statearr_29344_29399[(2)] = null);

(statearr_29344_29399[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (25))){
var inst_29310 = (state_29314[(2)]);
var state_29314__$1 = state_29314;
var statearr_29345_29400 = state_29314__$1;
(statearr_29345_29400[(2)] = inst_29310);

(statearr_29345_29400[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (34))){
var inst_29308 = (state_29314[(2)]);
var state_29314__$1 = state_29314;
var statearr_29346_29401 = state_29314__$1;
(statearr_29346_29401[(2)] = inst_29308);

(statearr_29346_29401[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (17))){
var state_29314__$1 = state_29314;
var statearr_29347_29402 = state_29314__$1;
(statearr_29347_29402[(2)] = false);

(statearr_29347_29402[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (3))){
var state_29314__$1 = state_29314;
var statearr_29348_29403 = state_29314__$1;
(statearr_29348_29403[(2)] = false);

(statearr_29348_29403[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (12))){
var inst_29312 = (state_29314[(2)]);
var state_29314__$1 = state_29314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29314__$1,inst_29312);
} else {
if((state_val_29315 === (2))){
var inst_29220 = (state_29314[(8)]);
var inst_29225 = inst_29220.cljs$lang$protocol_mask$partition0$;
var inst_29226 = (inst_29225 & (64));
var inst_29227 = inst_29220.cljs$core$ISeq$;
var inst_29228 = (inst_29226) || (inst_29227);
var state_29314__$1 = state_29314;
if(cljs.core.truth_(inst_29228)){
var statearr_29349_29404 = state_29314__$1;
(statearr_29349_29404[(1)] = (5));

} else {
var statearr_29350_29405 = state_29314__$1;
(statearr_29350_29405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (23))){
var inst_29273 = (state_29314[(14)]);
var inst_29279 = (inst_29273 == null);
var state_29314__$1 = state_29314;
if(cljs.core.truth_(inst_29279)){
var statearr_29351_29406 = state_29314__$1;
(statearr_29351_29406[(1)] = (26));

} else {
var statearr_29352_29407 = state_29314__$1;
(statearr_29352_29407[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (35))){
var inst_29299 = (state_29314[(2)]);
var state_29314__$1 = state_29314;
if(cljs.core.truth_(inst_29299)){
var statearr_29353_29408 = state_29314__$1;
(statearr_29353_29408[(1)] = (36));

} else {
var statearr_29354_29409 = state_29314__$1;
(statearr_29354_29409[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (19))){
var inst_29244 = (state_29314[(7)]);
var inst_29263 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29244);
var state_29314__$1 = state_29314;
var statearr_29355_29410 = state_29314__$1;
(statearr_29355_29410[(2)] = inst_29263);

(statearr_29355_29410[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (11))){
var inst_29244 = (state_29314[(7)]);
var inst_29248 = (inst_29244 == null);
var inst_29249 = cljs.core.not.call(null,inst_29248);
var state_29314__$1 = state_29314;
if(inst_29249){
var statearr_29356_29411 = state_29314__$1;
(statearr_29356_29411[(1)] = (13));

} else {
var statearr_29357_29412 = state_29314__$1;
(statearr_29357_29412[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (9))){
var inst_29220 = (state_29314[(8)]);
var state_29314__$1 = state_29314;
var statearr_29358_29413 = state_29314__$1;
(statearr_29358_29413[(2)] = inst_29220);

(statearr_29358_29413[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (5))){
var state_29314__$1 = state_29314;
var statearr_29359_29414 = state_29314__$1;
(statearr_29359_29414[(2)] = true);

(statearr_29359_29414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (14))){
var state_29314__$1 = state_29314;
var statearr_29360_29415 = state_29314__$1;
(statearr_29360_29415[(2)] = false);

(statearr_29360_29415[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (26))){
var inst_29274 = (state_29314[(9)]);
var inst_29281 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29274);
var state_29314__$1 = state_29314;
var statearr_29361_29416 = state_29314__$1;
(statearr_29361_29416[(2)] = inst_29281);

(statearr_29361_29416[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (16))){
var state_29314__$1 = state_29314;
var statearr_29362_29417 = state_29314__$1;
(statearr_29362_29417[(2)] = true);

(statearr_29362_29417[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (38))){
var inst_29304 = (state_29314[(2)]);
var state_29314__$1 = state_29314;
var statearr_29363_29418 = state_29314__$1;
(statearr_29363_29418[(2)] = inst_29304);

(statearr_29363_29418[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (30))){
var inst_29274 = (state_29314[(9)]);
var inst_29267 = (state_29314[(10)]);
var inst_29268 = (state_29314[(13)]);
var inst_29291 = cljs.core.empty_QMARK_.call(null,inst_29267);
var inst_29292 = inst_29268.call(null,inst_29274);
var inst_29293 = cljs.core.not.call(null,inst_29292);
var inst_29294 = (inst_29291) && (inst_29293);
var state_29314__$1 = state_29314;
var statearr_29364_29419 = state_29314__$1;
(statearr_29364_29419[(2)] = inst_29294);

(statearr_29364_29419[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (10))){
var inst_29220 = (state_29314[(8)]);
var inst_29240 = (state_29314[(2)]);
var inst_29241 = cljs.core.get.call(null,inst_29240,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29242 = cljs.core.get.call(null,inst_29240,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29243 = cljs.core.get.call(null,inst_29240,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29244 = inst_29220;
var state_29314__$1 = (function (){var statearr_29365 = state_29314;
(statearr_29365[(7)] = inst_29244);

(statearr_29365[(16)] = inst_29243);

(statearr_29365[(17)] = inst_29242);

(statearr_29365[(18)] = inst_29241);

return statearr_29365;
})();
var statearr_29366_29420 = state_29314__$1;
(statearr_29366_29420[(2)] = null);

(statearr_29366_29420[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (18))){
var inst_29258 = (state_29314[(2)]);
var state_29314__$1 = state_29314;
var statearr_29367_29421 = state_29314__$1;
(statearr_29367_29421[(2)] = inst_29258);

(statearr_29367_29421[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (37))){
var state_29314__$1 = state_29314;
var statearr_29368_29422 = state_29314__$1;
(statearr_29368_29422[(2)] = null);

(statearr_29368_29422[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29315 === (8))){
var inst_29220 = (state_29314[(8)]);
var inst_29237 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29220);
var state_29314__$1 = state_29314;
var statearr_29369_29423 = state_29314__$1;
(statearr_29369_29423[(2)] = inst_29237);

(statearr_29369_29423[(1)] = (10));


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
});})(c__19438__auto___29377,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19373__auto__,c__19438__auto___29377,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19374__auto__ = null;
var cljs$core$async$mix_$_state_machine__19374__auto____0 = (function (){
var statearr_29373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29373[(0)] = cljs$core$async$mix_$_state_machine__19374__auto__);

(statearr_29373[(1)] = (1));

return statearr_29373;
});
var cljs$core$async$mix_$_state_machine__19374__auto____1 = (function (state_29314){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_29314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e29374){if((e29374 instanceof Object)){
var ex__19377__auto__ = e29374;
var statearr_29375_29424 = state_29314;
(statearr_29375_29424[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29425 = state_29314;
state_29314 = G__29425;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19374__auto__ = function(state_29314){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19374__auto____1.call(this,state_29314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19374__auto____0;
cljs$core$async$mix_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19374__auto____1;
return cljs$core$async$mix_$_state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___29377,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19440__auto__ = (function (){var statearr_29376 = f__19439__auto__.call(null);
(statearr_29376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___29377);

return statearr_29376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___29377,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args29426 = [];
var len__17416__auto___29429 = arguments.length;
var i__17417__auto___29430 = (0);
while(true){
if((i__17417__auto___29430 < len__17416__auto___29429)){
args29426.push((arguments[i__17417__auto___29430]));

var G__29431 = (i__17417__auto___29430 + (1));
i__17417__auto___29430 = G__29431;
continue;
} else {
}
break;
}

var G__29428 = args29426.length;
switch (G__29428) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29426.length)].join('')));

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
var args29434 = [];
var len__17416__auto___29559 = arguments.length;
var i__17417__auto___29560 = (0);
while(true){
if((i__17417__auto___29560 < len__17416__auto___29559)){
args29434.push((arguments[i__17417__auto___29560]));

var G__29561 = (i__17417__auto___29560 + (1));
i__17417__auto___29560 = G__29561;
continue;
} else {
}
break;
}

var G__29436 = args29434.length;
switch (G__29436) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29434.length)].join('')));

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
return (function (p1__29433_SHARP_){
if(cljs.core.truth_(p1__29433_SHARP_.call(null,topic))){
return p1__29433_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29433_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16358__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29437 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29437 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29438){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29438 = meta29438;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29439,meta29438__$1){
var self__ = this;
var _29439__$1 = this;
return (new cljs.core.async.t_cljs$core$async29437(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29438__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29437.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29439){
var self__ = this;
var _29439__$1 = this;
return self__.meta29438;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29437.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29437.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29437.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async29437.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29437.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async29437.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29437.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29437.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29438","meta29438",-1580913136,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29437.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29437.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29437";

cljs.core.async.t_cljs$core$async29437.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async29437");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29437 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29437(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29438){
return (new cljs.core.async.t_cljs$core$async29437(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29438));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29437(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19438__auto___29563 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___29563,mults,ensure_mult,p){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___29563,mults,ensure_mult,p){
return (function (state_29511){
var state_val_29512 = (state_29511[(1)]);
if((state_val_29512 === (7))){
var inst_29507 = (state_29511[(2)]);
var state_29511__$1 = state_29511;
var statearr_29513_29564 = state_29511__$1;
(statearr_29513_29564[(2)] = inst_29507);

(statearr_29513_29564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (20))){
var state_29511__$1 = state_29511;
var statearr_29514_29565 = state_29511__$1;
(statearr_29514_29565[(2)] = null);

(statearr_29514_29565[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (1))){
var state_29511__$1 = state_29511;
var statearr_29515_29566 = state_29511__$1;
(statearr_29515_29566[(2)] = null);

(statearr_29515_29566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (24))){
var inst_29490 = (state_29511[(7)]);
var inst_29499 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29490);
var state_29511__$1 = state_29511;
var statearr_29516_29567 = state_29511__$1;
(statearr_29516_29567[(2)] = inst_29499);

(statearr_29516_29567[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (4))){
var inst_29442 = (state_29511[(8)]);
var inst_29442__$1 = (state_29511[(2)]);
var inst_29443 = (inst_29442__$1 == null);
var state_29511__$1 = (function (){var statearr_29517 = state_29511;
(statearr_29517[(8)] = inst_29442__$1);

return statearr_29517;
})();
if(cljs.core.truth_(inst_29443)){
var statearr_29518_29568 = state_29511__$1;
(statearr_29518_29568[(1)] = (5));

} else {
var statearr_29519_29569 = state_29511__$1;
(statearr_29519_29569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (15))){
var inst_29484 = (state_29511[(2)]);
var state_29511__$1 = state_29511;
var statearr_29520_29570 = state_29511__$1;
(statearr_29520_29570[(2)] = inst_29484);

(statearr_29520_29570[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (21))){
var inst_29504 = (state_29511[(2)]);
var state_29511__$1 = (function (){var statearr_29521 = state_29511;
(statearr_29521[(9)] = inst_29504);

return statearr_29521;
})();
var statearr_29522_29571 = state_29511__$1;
(statearr_29522_29571[(2)] = null);

(statearr_29522_29571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (13))){
var inst_29466 = (state_29511[(10)]);
var inst_29468 = cljs.core.chunked_seq_QMARK_.call(null,inst_29466);
var state_29511__$1 = state_29511;
if(inst_29468){
var statearr_29523_29572 = state_29511__$1;
(statearr_29523_29572[(1)] = (16));

} else {
var statearr_29524_29573 = state_29511__$1;
(statearr_29524_29573[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (22))){
var inst_29496 = (state_29511[(2)]);
var state_29511__$1 = state_29511;
if(cljs.core.truth_(inst_29496)){
var statearr_29525_29574 = state_29511__$1;
(statearr_29525_29574[(1)] = (23));

} else {
var statearr_29526_29575 = state_29511__$1;
(statearr_29526_29575[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (6))){
var inst_29490 = (state_29511[(7)]);
var inst_29442 = (state_29511[(8)]);
var inst_29492 = (state_29511[(11)]);
var inst_29490__$1 = topic_fn.call(null,inst_29442);
var inst_29491 = cljs.core.deref.call(null,mults);
var inst_29492__$1 = cljs.core.get.call(null,inst_29491,inst_29490__$1);
var state_29511__$1 = (function (){var statearr_29527 = state_29511;
(statearr_29527[(7)] = inst_29490__$1);

(statearr_29527[(11)] = inst_29492__$1);

return statearr_29527;
})();
if(cljs.core.truth_(inst_29492__$1)){
var statearr_29528_29576 = state_29511__$1;
(statearr_29528_29576[(1)] = (19));

} else {
var statearr_29529_29577 = state_29511__$1;
(statearr_29529_29577[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (25))){
var inst_29501 = (state_29511[(2)]);
var state_29511__$1 = state_29511;
var statearr_29530_29578 = state_29511__$1;
(statearr_29530_29578[(2)] = inst_29501);

(statearr_29530_29578[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (17))){
var inst_29466 = (state_29511[(10)]);
var inst_29475 = cljs.core.first.call(null,inst_29466);
var inst_29476 = cljs.core.async.muxch_STAR_.call(null,inst_29475);
var inst_29477 = cljs.core.async.close_BANG_.call(null,inst_29476);
var inst_29478 = cljs.core.next.call(null,inst_29466);
var inst_29452 = inst_29478;
var inst_29453 = null;
var inst_29454 = (0);
var inst_29455 = (0);
var state_29511__$1 = (function (){var statearr_29531 = state_29511;
(statearr_29531[(12)] = inst_29454);

(statearr_29531[(13)] = inst_29453);

(statearr_29531[(14)] = inst_29455);

(statearr_29531[(15)] = inst_29477);

(statearr_29531[(16)] = inst_29452);

return statearr_29531;
})();
var statearr_29532_29579 = state_29511__$1;
(statearr_29532_29579[(2)] = null);

(statearr_29532_29579[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (3))){
var inst_29509 = (state_29511[(2)]);
var state_29511__$1 = state_29511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29511__$1,inst_29509);
} else {
if((state_val_29512 === (12))){
var inst_29486 = (state_29511[(2)]);
var state_29511__$1 = state_29511;
var statearr_29533_29580 = state_29511__$1;
(statearr_29533_29580[(2)] = inst_29486);

(statearr_29533_29580[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (2))){
var state_29511__$1 = state_29511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29511__$1,(4),ch);
} else {
if((state_val_29512 === (23))){
var state_29511__$1 = state_29511;
var statearr_29534_29581 = state_29511__$1;
(statearr_29534_29581[(2)] = null);

(statearr_29534_29581[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (19))){
var inst_29442 = (state_29511[(8)]);
var inst_29492 = (state_29511[(11)]);
var inst_29494 = cljs.core.async.muxch_STAR_.call(null,inst_29492);
var state_29511__$1 = state_29511;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29511__$1,(22),inst_29494,inst_29442);
} else {
if((state_val_29512 === (11))){
var inst_29452 = (state_29511[(16)]);
var inst_29466 = (state_29511[(10)]);
var inst_29466__$1 = cljs.core.seq.call(null,inst_29452);
var state_29511__$1 = (function (){var statearr_29535 = state_29511;
(statearr_29535[(10)] = inst_29466__$1);

return statearr_29535;
})();
if(inst_29466__$1){
var statearr_29536_29582 = state_29511__$1;
(statearr_29536_29582[(1)] = (13));

} else {
var statearr_29537_29583 = state_29511__$1;
(statearr_29537_29583[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (9))){
var inst_29488 = (state_29511[(2)]);
var state_29511__$1 = state_29511;
var statearr_29538_29584 = state_29511__$1;
(statearr_29538_29584[(2)] = inst_29488);

(statearr_29538_29584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (5))){
var inst_29449 = cljs.core.deref.call(null,mults);
var inst_29450 = cljs.core.vals.call(null,inst_29449);
var inst_29451 = cljs.core.seq.call(null,inst_29450);
var inst_29452 = inst_29451;
var inst_29453 = null;
var inst_29454 = (0);
var inst_29455 = (0);
var state_29511__$1 = (function (){var statearr_29539 = state_29511;
(statearr_29539[(12)] = inst_29454);

(statearr_29539[(13)] = inst_29453);

(statearr_29539[(14)] = inst_29455);

(statearr_29539[(16)] = inst_29452);

return statearr_29539;
})();
var statearr_29540_29585 = state_29511__$1;
(statearr_29540_29585[(2)] = null);

(statearr_29540_29585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (14))){
var state_29511__$1 = state_29511;
var statearr_29544_29586 = state_29511__$1;
(statearr_29544_29586[(2)] = null);

(statearr_29544_29586[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (16))){
var inst_29466 = (state_29511[(10)]);
var inst_29470 = cljs.core.chunk_first.call(null,inst_29466);
var inst_29471 = cljs.core.chunk_rest.call(null,inst_29466);
var inst_29472 = cljs.core.count.call(null,inst_29470);
var inst_29452 = inst_29471;
var inst_29453 = inst_29470;
var inst_29454 = inst_29472;
var inst_29455 = (0);
var state_29511__$1 = (function (){var statearr_29545 = state_29511;
(statearr_29545[(12)] = inst_29454);

(statearr_29545[(13)] = inst_29453);

(statearr_29545[(14)] = inst_29455);

(statearr_29545[(16)] = inst_29452);

return statearr_29545;
})();
var statearr_29546_29587 = state_29511__$1;
(statearr_29546_29587[(2)] = null);

(statearr_29546_29587[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (10))){
var inst_29454 = (state_29511[(12)]);
var inst_29453 = (state_29511[(13)]);
var inst_29455 = (state_29511[(14)]);
var inst_29452 = (state_29511[(16)]);
var inst_29460 = cljs.core._nth.call(null,inst_29453,inst_29455);
var inst_29461 = cljs.core.async.muxch_STAR_.call(null,inst_29460);
var inst_29462 = cljs.core.async.close_BANG_.call(null,inst_29461);
var inst_29463 = (inst_29455 + (1));
var tmp29541 = inst_29454;
var tmp29542 = inst_29453;
var tmp29543 = inst_29452;
var inst_29452__$1 = tmp29543;
var inst_29453__$1 = tmp29542;
var inst_29454__$1 = tmp29541;
var inst_29455__$1 = inst_29463;
var state_29511__$1 = (function (){var statearr_29547 = state_29511;
(statearr_29547[(12)] = inst_29454__$1);

(statearr_29547[(13)] = inst_29453__$1);

(statearr_29547[(14)] = inst_29455__$1);

(statearr_29547[(17)] = inst_29462);

(statearr_29547[(16)] = inst_29452__$1);

return statearr_29547;
})();
var statearr_29548_29588 = state_29511__$1;
(statearr_29548_29588[(2)] = null);

(statearr_29548_29588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (18))){
var inst_29481 = (state_29511[(2)]);
var state_29511__$1 = state_29511;
var statearr_29549_29589 = state_29511__$1;
(statearr_29549_29589[(2)] = inst_29481);

(statearr_29549_29589[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (8))){
var inst_29454 = (state_29511[(12)]);
var inst_29455 = (state_29511[(14)]);
var inst_29457 = (inst_29455 < inst_29454);
var inst_29458 = inst_29457;
var state_29511__$1 = state_29511;
if(cljs.core.truth_(inst_29458)){
var statearr_29550_29590 = state_29511__$1;
(statearr_29550_29590[(1)] = (10));

} else {
var statearr_29551_29591 = state_29511__$1;
(statearr_29551_29591[(1)] = (11));

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
});})(c__19438__auto___29563,mults,ensure_mult,p))
;
return ((function (switch__19373__auto__,c__19438__auto___29563,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19374__auto__ = null;
var cljs$core$async$state_machine__19374__auto____0 = (function (){
var statearr_29555 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29555[(0)] = cljs$core$async$state_machine__19374__auto__);

(statearr_29555[(1)] = (1));

return statearr_29555;
});
var cljs$core$async$state_machine__19374__auto____1 = (function (state_29511){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_29511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e29556){if((e29556 instanceof Object)){
var ex__19377__auto__ = e29556;
var statearr_29557_29592 = state_29511;
(statearr_29557_29592[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29593 = state_29511;
state_29511 = G__29593;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$state_machine__19374__auto__ = function(state_29511){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19374__auto____1.call(this,state_29511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19374__auto____0;
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19374__auto____1;
return cljs$core$async$state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___29563,mults,ensure_mult,p))
})();
var state__19440__auto__ = (function (){var statearr_29558 = f__19439__auto__.call(null);
(statearr_29558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___29563);

return statearr_29558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___29563,mults,ensure_mult,p))
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
var args29594 = [];
var len__17416__auto___29597 = arguments.length;
var i__17417__auto___29598 = (0);
while(true){
if((i__17417__auto___29598 < len__17416__auto___29597)){
args29594.push((arguments[i__17417__auto___29598]));

var G__29599 = (i__17417__auto___29598 + (1));
i__17417__auto___29598 = G__29599;
continue;
} else {
}
break;
}

var G__29596 = args29594.length;
switch (G__29596) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29594.length)].join('')));

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
var args29601 = [];
var len__17416__auto___29604 = arguments.length;
var i__17417__auto___29605 = (0);
while(true){
if((i__17417__auto___29605 < len__17416__auto___29604)){
args29601.push((arguments[i__17417__auto___29605]));

var G__29606 = (i__17417__auto___29605 + (1));
i__17417__auto___29605 = G__29606;
continue;
} else {
}
break;
}

var G__29603 = args29601.length;
switch (G__29603) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29601.length)].join('')));

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
var args29608 = [];
var len__17416__auto___29679 = arguments.length;
var i__17417__auto___29680 = (0);
while(true){
if((i__17417__auto___29680 < len__17416__auto___29679)){
args29608.push((arguments[i__17417__auto___29680]));

var G__29681 = (i__17417__auto___29680 + (1));
i__17417__auto___29680 = G__29681;
continue;
} else {
}
break;
}

var G__29610 = args29608.length;
switch (G__29610) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29608.length)].join('')));

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
var c__19438__auto___29683 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___29683,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___29683,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29649){
var state_val_29650 = (state_29649[(1)]);
if((state_val_29650 === (7))){
var state_29649__$1 = state_29649;
var statearr_29651_29684 = state_29649__$1;
(statearr_29651_29684[(2)] = null);

(statearr_29651_29684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29650 === (1))){
var state_29649__$1 = state_29649;
var statearr_29652_29685 = state_29649__$1;
(statearr_29652_29685[(2)] = null);

(statearr_29652_29685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29650 === (4))){
var inst_29613 = (state_29649[(7)]);
var inst_29615 = (inst_29613 < cnt);
var state_29649__$1 = state_29649;
if(cljs.core.truth_(inst_29615)){
var statearr_29653_29686 = state_29649__$1;
(statearr_29653_29686[(1)] = (6));

} else {
var statearr_29654_29687 = state_29649__$1;
(statearr_29654_29687[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29650 === (15))){
var inst_29645 = (state_29649[(2)]);
var state_29649__$1 = state_29649;
var statearr_29655_29688 = state_29649__$1;
(statearr_29655_29688[(2)] = inst_29645);

(statearr_29655_29688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29650 === (13))){
var inst_29638 = cljs.core.async.close_BANG_.call(null,out);
var state_29649__$1 = state_29649;
var statearr_29656_29689 = state_29649__$1;
(statearr_29656_29689[(2)] = inst_29638);

(statearr_29656_29689[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29650 === (6))){
var state_29649__$1 = state_29649;
var statearr_29657_29690 = state_29649__$1;
(statearr_29657_29690[(2)] = null);

(statearr_29657_29690[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29650 === (3))){
var inst_29647 = (state_29649[(2)]);
var state_29649__$1 = state_29649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29649__$1,inst_29647);
} else {
if((state_val_29650 === (12))){
var inst_29635 = (state_29649[(8)]);
var inst_29635__$1 = (state_29649[(2)]);
var inst_29636 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29635__$1);
var state_29649__$1 = (function (){var statearr_29658 = state_29649;
(statearr_29658[(8)] = inst_29635__$1);

return statearr_29658;
})();
if(cljs.core.truth_(inst_29636)){
var statearr_29659_29691 = state_29649__$1;
(statearr_29659_29691[(1)] = (13));

} else {
var statearr_29660_29692 = state_29649__$1;
(statearr_29660_29692[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29650 === (2))){
var inst_29612 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29613 = (0);
var state_29649__$1 = (function (){var statearr_29661 = state_29649;
(statearr_29661[(7)] = inst_29613);

(statearr_29661[(9)] = inst_29612);

return statearr_29661;
})();
var statearr_29662_29693 = state_29649__$1;
(statearr_29662_29693[(2)] = null);

(statearr_29662_29693[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29650 === (11))){
var inst_29613 = (state_29649[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29649,(10),Object,null,(9));
var inst_29622 = chs__$1.call(null,inst_29613);
var inst_29623 = done.call(null,inst_29613);
var inst_29624 = cljs.core.async.take_BANG_.call(null,inst_29622,inst_29623);
var state_29649__$1 = state_29649;
var statearr_29663_29694 = state_29649__$1;
(statearr_29663_29694[(2)] = inst_29624);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29649__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29650 === (9))){
var inst_29613 = (state_29649[(7)]);
var inst_29626 = (state_29649[(2)]);
var inst_29627 = (inst_29613 + (1));
var inst_29613__$1 = inst_29627;
var state_29649__$1 = (function (){var statearr_29664 = state_29649;
(statearr_29664[(7)] = inst_29613__$1);

(statearr_29664[(10)] = inst_29626);

return statearr_29664;
})();
var statearr_29665_29695 = state_29649__$1;
(statearr_29665_29695[(2)] = null);

(statearr_29665_29695[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29650 === (5))){
var inst_29633 = (state_29649[(2)]);
var state_29649__$1 = (function (){var statearr_29666 = state_29649;
(statearr_29666[(11)] = inst_29633);

return statearr_29666;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29649__$1,(12),dchan);
} else {
if((state_val_29650 === (14))){
var inst_29635 = (state_29649[(8)]);
var inst_29640 = cljs.core.apply.call(null,f,inst_29635);
var state_29649__$1 = state_29649;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29649__$1,(16),out,inst_29640);
} else {
if((state_val_29650 === (16))){
var inst_29642 = (state_29649[(2)]);
var state_29649__$1 = (function (){var statearr_29667 = state_29649;
(statearr_29667[(12)] = inst_29642);

return statearr_29667;
})();
var statearr_29668_29696 = state_29649__$1;
(statearr_29668_29696[(2)] = null);

(statearr_29668_29696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29650 === (10))){
var inst_29617 = (state_29649[(2)]);
var inst_29618 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29649__$1 = (function (){var statearr_29669 = state_29649;
(statearr_29669[(13)] = inst_29617);

return statearr_29669;
})();
var statearr_29670_29697 = state_29649__$1;
(statearr_29670_29697[(2)] = inst_29618);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29649__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29650 === (8))){
var inst_29631 = (state_29649[(2)]);
var state_29649__$1 = state_29649;
var statearr_29671_29698 = state_29649__$1;
(statearr_29671_29698[(2)] = inst_29631);

(statearr_29671_29698[(1)] = (5));


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
});})(c__19438__auto___29683,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19373__auto__,c__19438__auto___29683,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19374__auto__ = null;
var cljs$core$async$state_machine__19374__auto____0 = (function (){
var statearr_29675 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29675[(0)] = cljs$core$async$state_machine__19374__auto__);

(statearr_29675[(1)] = (1));

return statearr_29675;
});
var cljs$core$async$state_machine__19374__auto____1 = (function (state_29649){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_29649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e29676){if((e29676 instanceof Object)){
var ex__19377__auto__ = e29676;
var statearr_29677_29699 = state_29649;
(statearr_29677_29699[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29700 = state_29649;
state_29649 = G__29700;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$state_machine__19374__auto__ = function(state_29649){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19374__auto____1.call(this,state_29649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19374__auto____0;
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19374__auto____1;
return cljs$core$async$state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___29683,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19440__auto__ = (function (){var statearr_29678 = f__19439__auto__.call(null);
(statearr_29678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___29683);

return statearr_29678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___29683,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args29702 = [];
var len__17416__auto___29758 = arguments.length;
var i__17417__auto___29759 = (0);
while(true){
if((i__17417__auto___29759 < len__17416__auto___29758)){
args29702.push((arguments[i__17417__auto___29759]));

var G__29760 = (i__17417__auto___29759 + (1));
i__17417__auto___29759 = G__29760;
continue;
} else {
}
break;
}

var G__29704 = args29702.length;
switch (G__29704) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29702.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19438__auto___29762 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___29762,out){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___29762,out){
return (function (state_29734){
var state_val_29735 = (state_29734[(1)]);
if((state_val_29735 === (7))){
var inst_29714 = (state_29734[(7)]);
var inst_29713 = (state_29734[(8)]);
var inst_29713__$1 = (state_29734[(2)]);
var inst_29714__$1 = cljs.core.nth.call(null,inst_29713__$1,(0),null);
var inst_29715 = cljs.core.nth.call(null,inst_29713__$1,(1),null);
var inst_29716 = (inst_29714__$1 == null);
var state_29734__$1 = (function (){var statearr_29736 = state_29734;
(statearr_29736[(7)] = inst_29714__$1);

(statearr_29736[(8)] = inst_29713__$1);

(statearr_29736[(9)] = inst_29715);

return statearr_29736;
})();
if(cljs.core.truth_(inst_29716)){
var statearr_29737_29763 = state_29734__$1;
(statearr_29737_29763[(1)] = (8));

} else {
var statearr_29738_29764 = state_29734__$1;
(statearr_29738_29764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (1))){
var inst_29705 = cljs.core.vec.call(null,chs);
var inst_29706 = inst_29705;
var state_29734__$1 = (function (){var statearr_29739 = state_29734;
(statearr_29739[(10)] = inst_29706);

return statearr_29739;
})();
var statearr_29740_29765 = state_29734__$1;
(statearr_29740_29765[(2)] = null);

(statearr_29740_29765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (4))){
var inst_29706 = (state_29734[(10)]);
var state_29734__$1 = state_29734;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29734__$1,(7),inst_29706);
} else {
if((state_val_29735 === (6))){
var inst_29730 = (state_29734[(2)]);
var state_29734__$1 = state_29734;
var statearr_29741_29766 = state_29734__$1;
(statearr_29741_29766[(2)] = inst_29730);

(statearr_29741_29766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (3))){
var inst_29732 = (state_29734[(2)]);
var state_29734__$1 = state_29734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29734__$1,inst_29732);
} else {
if((state_val_29735 === (2))){
var inst_29706 = (state_29734[(10)]);
var inst_29708 = cljs.core.count.call(null,inst_29706);
var inst_29709 = (inst_29708 > (0));
var state_29734__$1 = state_29734;
if(cljs.core.truth_(inst_29709)){
var statearr_29743_29767 = state_29734__$1;
(statearr_29743_29767[(1)] = (4));

} else {
var statearr_29744_29768 = state_29734__$1;
(statearr_29744_29768[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (11))){
var inst_29706 = (state_29734[(10)]);
var inst_29723 = (state_29734[(2)]);
var tmp29742 = inst_29706;
var inst_29706__$1 = tmp29742;
var state_29734__$1 = (function (){var statearr_29745 = state_29734;
(statearr_29745[(10)] = inst_29706__$1);

(statearr_29745[(11)] = inst_29723);

return statearr_29745;
})();
var statearr_29746_29769 = state_29734__$1;
(statearr_29746_29769[(2)] = null);

(statearr_29746_29769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (9))){
var inst_29714 = (state_29734[(7)]);
var state_29734__$1 = state_29734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29734__$1,(11),out,inst_29714);
} else {
if((state_val_29735 === (5))){
var inst_29728 = cljs.core.async.close_BANG_.call(null,out);
var state_29734__$1 = state_29734;
var statearr_29747_29770 = state_29734__$1;
(statearr_29747_29770[(2)] = inst_29728);

(statearr_29747_29770[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (10))){
var inst_29726 = (state_29734[(2)]);
var state_29734__$1 = state_29734;
var statearr_29748_29771 = state_29734__$1;
(statearr_29748_29771[(2)] = inst_29726);

(statearr_29748_29771[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (8))){
var inst_29714 = (state_29734[(7)]);
var inst_29706 = (state_29734[(10)]);
var inst_29713 = (state_29734[(8)]);
var inst_29715 = (state_29734[(9)]);
var inst_29718 = (function (){var cs = inst_29706;
var vec__29711 = inst_29713;
var v = inst_29714;
var c = inst_29715;
return ((function (cs,vec__29711,v,c,inst_29714,inst_29706,inst_29713,inst_29715,state_val_29735,c__19438__auto___29762,out){
return (function (p1__29701_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29701_SHARP_);
});
;})(cs,vec__29711,v,c,inst_29714,inst_29706,inst_29713,inst_29715,state_val_29735,c__19438__auto___29762,out))
})();
var inst_29719 = cljs.core.filterv.call(null,inst_29718,inst_29706);
var inst_29706__$1 = inst_29719;
var state_29734__$1 = (function (){var statearr_29749 = state_29734;
(statearr_29749[(10)] = inst_29706__$1);

return statearr_29749;
})();
var statearr_29750_29772 = state_29734__$1;
(statearr_29750_29772[(2)] = null);

(statearr_29750_29772[(1)] = (2));


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
});})(c__19438__auto___29762,out))
;
return ((function (switch__19373__auto__,c__19438__auto___29762,out){
return (function() {
var cljs$core$async$state_machine__19374__auto__ = null;
var cljs$core$async$state_machine__19374__auto____0 = (function (){
var statearr_29754 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29754[(0)] = cljs$core$async$state_machine__19374__auto__);

(statearr_29754[(1)] = (1));

return statearr_29754;
});
var cljs$core$async$state_machine__19374__auto____1 = (function (state_29734){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_29734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e29755){if((e29755 instanceof Object)){
var ex__19377__auto__ = e29755;
var statearr_29756_29773 = state_29734;
(statearr_29756_29773[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29774 = state_29734;
state_29734 = G__29774;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$state_machine__19374__auto__ = function(state_29734){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19374__auto____1.call(this,state_29734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19374__auto____0;
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19374__auto____1;
return cljs$core$async$state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___29762,out))
})();
var state__19440__auto__ = (function (){var statearr_29757 = f__19439__auto__.call(null);
(statearr_29757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___29762);

return statearr_29757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___29762,out))
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
var args29775 = [];
var len__17416__auto___29824 = arguments.length;
var i__17417__auto___29825 = (0);
while(true){
if((i__17417__auto___29825 < len__17416__auto___29824)){
args29775.push((arguments[i__17417__auto___29825]));

var G__29826 = (i__17417__auto___29825 + (1));
i__17417__auto___29825 = G__29826;
continue;
} else {
}
break;
}

var G__29777 = args29775.length;
switch (G__29777) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29775.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19438__auto___29828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___29828,out){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___29828,out){
return (function (state_29801){
var state_val_29802 = (state_29801[(1)]);
if((state_val_29802 === (7))){
var inst_29783 = (state_29801[(7)]);
var inst_29783__$1 = (state_29801[(2)]);
var inst_29784 = (inst_29783__$1 == null);
var inst_29785 = cljs.core.not.call(null,inst_29784);
var state_29801__$1 = (function (){var statearr_29803 = state_29801;
(statearr_29803[(7)] = inst_29783__$1);

return statearr_29803;
})();
if(inst_29785){
var statearr_29804_29829 = state_29801__$1;
(statearr_29804_29829[(1)] = (8));

} else {
var statearr_29805_29830 = state_29801__$1;
(statearr_29805_29830[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29802 === (1))){
var inst_29778 = (0);
var state_29801__$1 = (function (){var statearr_29806 = state_29801;
(statearr_29806[(8)] = inst_29778);

return statearr_29806;
})();
var statearr_29807_29831 = state_29801__$1;
(statearr_29807_29831[(2)] = null);

(statearr_29807_29831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29802 === (4))){
var state_29801__$1 = state_29801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29801__$1,(7),ch);
} else {
if((state_val_29802 === (6))){
var inst_29796 = (state_29801[(2)]);
var state_29801__$1 = state_29801;
var statearr_29808_29832 = state_29801__$1;
(statearr_29808_29832[(2)] = inst_29796);

(statearr_29808_29832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29802 === (3))){
var inst_29798 = (state_29801[(2)]);
var inst_29799 = cljs.core.async.close_BANG_.call(null,out);
var state_29801__$1 = (function (){var statearr_29809 = state_29801;
(statearr_29809[(9)] = inst_29798);

return statearr_29809;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29801__$1,inst_29799);
} else {
if((state_val_29802 === (2))){
var inst_29778 = (state_29801[(8)]);
var inst_29780 = (inst_29778 < n);
var state_29801__$1 = state_29801;
if(cljs.core.truth_(inst_29780)){
var statearr_29810_29833 = state_29801__$1;
(statearr_29810_29833[(1)] = (4));

} else {
var statearr_29811_29834 = state_29801__$1;
(statearr_29811_29834[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29802 === (11))){
var inst_29778 = (state_29801[(8)]);
var inst_29788 = (state_29801[(2)]);
var inst_29789 = (inst_29778 + (1));
var inst_29778__$1 = inst_29789;
var state_29801__$1 = (function (){var statearr_29812 = state_29801;
(statearr_29812[(8)] = inst_29778__$1);

(statearr_29812[(10)] = inst_29788);

return statearr_29812;
})();
var statearr_29813_29835 = state_29801__$1;
(statearr_29813_29835[(2)] = null);

(statearr_29813_29835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29802 === (9))){
var state_29801__$1 = state_29801;
var statearr_29814_29836 = state_29801__$1;
(statearr_29814_29836[(2)] = null);

(statearr_29814_29836[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29802 === (5))){
var state_29801__$1 = state_29801;
var statearr_29815_29837 = state_29801__$1;
(statearr_29815_29837[(2)] = null);

(statearr_29815_29837[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29802 === (10))){
var inst_29793 = (state_29801[(2)]);
var state_29801__$1 = state_29801;
var statearr_29816_29838 = state_29801__$1;
(statearr_29816_29838[(2)] = inst_29793);

(statearr_29816_29838[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29802 === (8))){
var inst_29783 = (state_29801[(7)]);
var state_29801__$1 = state_29801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29801__$1,(11),out,inst_29783);
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
});})(c__19438__auto___29828,out))
;
return ((function (switch__19373__auto__,c__19438__auto___29828,out){
return (function() {
var cljs$core$async$state_machine__19374__auto__ = null;
var cljs$core$async$state_machine__19374__auto____0 = (function (){
var statearr_29820 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29820[(0)] = cljs$core$async$state_machine__19374__auto__);

(statearr_29820[(1)] = (1));

return statearr_29820;
});
var cljs$core$async$state_machine__19374__auto____1 = (function (state_29801){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_29801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e29821){if((e29821 instanceof Object)){
var ex__19377__auto__ = e29821;
var statearr_29822_29839 = state_29801;
(statearr_29822_29839[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29840 = state_29801;
state_29801 = G__29840;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$state_machine__19374__auto__ = function(state_29801){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19374__auto____1.call(this,state_29801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19374__auto____0;
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19374__auto____1;
return cljs$core$async$state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___29828,out))
})();
var state__19440__auto__ = (function (){var statearr_29823 = f__19439__auto__.call(null);
(statearr_29823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___29828);

return statearr_29823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___29828,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29848 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29848 = (function (map_LT_,f,ch,meta29849){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29849 = meta29849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29850,meta29849__$1){
var self__ = this;
var _29850__$1 = this;
return (new cljs.core.async.t_cljs$core$async29848(self__.map_LT_,self__.f,self__.ch,meta29849__$1));
});

cljs.core.async.t_cljs$core$async29848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29850){
var self__ = this;
var _29850__$1 = this;
return self__.meta29849;
});

cljs.core.async.t_cljs$core$async29848.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29848.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29848.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29848.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29848.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29851 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29851 = (function (map_LT_,f,ch,meta29849,_,fn1,meta29852){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29849 = meta29849;
this._ = _;
this.fn1 = fn1;
this.meta29852 = meta29852;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29853,meta29852__$1){
var self__ = this;
var _29853__$1 = this;
return (new cljs.core.async.t_cljs$core$async29851(self__.map_LT_,self__.f,self__.ch,self__.meta29849,self__._,self__.fn1,meta29852__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29851.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29853){
var self__ = this;
var _29853__$1 = this;
return self__.meta29852;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29851.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29851.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29851.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29841_SHARP_){
return f1.call(null,(((p1__29841_SHARP_ == null))?null:self__.f.call(null,p1__29841_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29851.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29849","meta29849",639517567,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29848","cljs.core.async/t_cljs$core$async29848",-1156420962,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29852","meta29852",-675686191,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29851.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29851.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29851";

cljs.core.async.t_cljs$core$async29851.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async29851");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29851 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29851(map_LT___$1,f__$1,ch__$1,meta29849__$1,___$2,fn1__$1,meta29852){
return (new cljs.core.async.t_cljs$core$async29851(map_LT___$1,f__$1,ch__$1,meta29849__$1,___$2,fn1__$1,meta29852));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29851(self__.map_LT_,self__.f,self__.ch,self__.meta29849,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async29848.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29848.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29848.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29849","meta29849",639517567,null)], null);
});

cljs.core.async.t_cljs$core$async29848.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29848.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29848";

cljs.core.async.t_cljs$core$async29848.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async29848");
});

cljs.core.async.__GT_t_cljs$core$async29848 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29848(map_LT___$1,f__$1,ch__$1,meta29849){
return (new cljs.core.async.t_cljs$core$async29848(map_LT___$1,f__$1,ch__$1,meta29849));
});

}

return (new cljs.core.async.t_cljs$core$async29848(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29857 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29857 = (function (map_GT_,f,ch,meta29858){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29858 = meta29858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29859,meta29858__$1){
var self__ = this;
var _29859__$1 = this;
return (new cljs.core.async.t_cljs$core$async29857(self__.map_GT_,self__.f,self__.ch,meta29858__$1));
});

cljs.core.async.t_cljs$core$async29857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29859){
var self__ = this;
var _29859__$1 = this;
return self__.meta29858;
});

cljs.core.async.t_cljs$core$async29857.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29857.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29857.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29857.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29857.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29857.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29857.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29858","meta29858",-742812121,null)], null);
});

cljs.core.async.t_cljs$core$async29857.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29857.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29857";

cljs.core.async.t_cljs$core$async29857.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async29857");
});

cljs.core.async.__GT_t_cljs$core$async29857 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29857(map_GT___$1,f__$1,ch__$1,meta29858){
return (new cljs.core.async.t_cljs$core$async29857(map_GT___$1,f__$1,ch__$1,meta29858));
});

}

return (new cljs.core.async.t_cljs$core$async29857(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29863 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29863 = (function (filter_GT_,p,ch,meta29864){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29864 = meta29864;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29865,meta29864__$1){
var self__ = this;
var _29865__$1 = this;
return (new cljs.core.async.t_cljs$core$async29863(self__.filter_GT_,self__.p,self__.ch,meta29864__$1));
});

cljs.core.async.t_cljs$core$async29863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29865){
var self__ = this;
var _29865__$1 = this;
return self__.meta29864;
});

cljs.core.async.t_cljs$core$async29863.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29863.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29863.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29863.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29863.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29863.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29863.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29863.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29864","meta29864",-531688993,null)], null);
});

cljs.core.async.t_cljs$core$async29863.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29863.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29863";

cljs.core.async.t_cljs$core$async29863.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async29863");
});

cljs.core.async.__GT_t_cljs$core$async29863 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29863(filter_GT___$1,p__$1,ch__$1,meta29864){
return (new cljs.core.async.t_cljs$core$async29863(filter_GT___$1,p__$1,ch__$1,meta29864));
});

}

return (new cljs.core.async.t_cljs$core$async29863(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args29866 = [];
var len__17416__auto___29910 = arguments.length;
var i__17417__auto___29911 = (0);
while(true){
if((i__17417__auto___29911 < len__17416__auto___29910)){
args29866.push((arguments[i__17417__auto___29911]));

var G__29912 = (i__17417__auto___29911 + (1));
i__17417__auto___29911 = G__29912;
continue;
} else {
}
break;
}

var G__29868 = args29866.length;
switch (G__29868) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29866.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19438__auto___29914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___29914,out){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___29914,out){
return (function (state_29889){
var state_val_29890 = (state_29889[(1)]);
if((state_val_29890 === (7))){
var inst_29885 = (state_29889[(2)]);
var state_29889__$1 = state_29889;
var statearr_29891_29915 = state_29889__$1;
(statearr_29891_29915[(2)] = inst_29885);

(statearr_29891_29915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (1))){
var state_29889__$1 = state_29889;
var statearr_29892_29916 = state_29889__$1;
(statearr_29892_29916[(2)] = null);

(statearr_29892_29916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (4))){
var inst_29871 = (state_29889[(7)]);
var inst_29871__$1 = (state_29889[(2)]);
var inst_29872 = (inst_29871__$1 == null);
var state_29889__$1 = (function (){var statearr_29893 = state_29889;
(statearr_29893[(7)] = inst_29871__$1);

return statearr_29893;
})();
if(cljs.core.truth_(inst_29872)){
var statearr_29894_29917 = state_29889__$1;
(statearr_29894_29917[(1)] = (5));

} else {
var statearr_29895_29918 = state_29889__$1;
(statearr_29895_29918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (6))){
var inst_29871 = (state_29889[(7)]);
var inst_29876 = p.call(null,inst_29871);
var state_29889__$1 = state_29889;
if(cljs.core.truth_(inst_29876)){
var statearr_29896_29919 = state_29889__$1;
(statearr_29896_29919[(1)] = (8));

} else {
var statearr_29897_29920 = state_29889__$1;
(statearr_29897_29920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (3))){
var inst_29887 = (state_29889[(2)]);
var state_29889__$1 = state_29889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29889__$1,inst_29887);
} else {
if((state_val_29890 === (2))){
var state_29889__$1 = state_29889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29889__$1,(4),ch);
} else {
if((state_val_29890 === (11))){
var inst_29879 = (state_29889[(2)]);
var state_29889__$1 = state_29889;
var statearr_29898_29921 = state_29889__$1;
(statearr_29898_29921[(2)] = inst_29879);

(statearr_29898_29921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (9))){
var state_29889__$1 = state_29889;
var statearr_29899_29922 = state_29889__$1;
(statearr_29899_29922[(2)] = null);

(statearr_29899_29922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (5))){
var inst_29874 = cljs.core.async.close_BANG_.call(null,out);
var state_29889__$1 = state_29889;
var statearr_29900_29923 = state_29889__$1;
(statearr_29900_29923[(2)] = inst_29874);

(statearr_29900_29923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (10))){
var inst_29882 = (state_29889[(2)]);
var state_29889__$1 = (function (){var statearr_29901 = state_29889;
(statearr_29901[(8)] = inst_29882);

return statearr_29901;
})();
var statearr_29902_29924 = state_29889__$1;
(statearr_29902_29924[(2)] = null);

(statearr_29902_29924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (8))){
var inst_29871 = (state_29889[(7)]);
var state_29889__$1 = state_29889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29889__$1,(11),out,inst_29871);
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
});})(c__19438__auto___29914,out))
;
return ((function (switch__19373__auto__,c__19438__auto___29914,out){
return (function() {
var cljs$core$async$state_machine__19374__auto__ = null;
var cljs$core$async$state_machine__19374__auto____0 = (function (){
var statearr_29906 = [null,null,null,null,null,null,null,null,null];
(statearr_29906[(0)] = cljs$core$async$state_machine__19374__auto__);

(statearr_29906[(1)] = (1));

return statearr_29906;
});
var cljs$core$async$state_machine__19374__auto____1 = (function (state_29889){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_29889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e29907){if((e29907 instanceof Object)){
var ex__19377__auto__ = e29907;
var statearr_29908_29925 = state_29889;
(statearr_29908_29925[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29926 = state_29889;
state_29889 = G__29926;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$state_machine__19374__auto__ = function(state_29889){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19374__auto____1.call(this,state_29889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19374__auto____0;
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19374__auto____1;
return cljs$core$async$state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___29914,out))
})();
var state__19440__auto__ = (function (){var statearr_29909 = f__19439__auto__.call(null);
(statearr_29909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___29914);

return statearr_29909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___29914,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29927 = [];
var len__17416__auto___29930 = arguments.length;
var i__17417__auto___29931 = (0);
while(true){
if((i__17417__auto___29931 < len__17416__auto___29930)){
args29927.push((arguments[i__17417__auto___29931]));

var G__29932 = (i__17417__auto___29931 + (1));
i__17417__auto___29931 = G__29932;
continue;
} else {
}
break;
}

var G__29929 = args29927.length;
switch (G__29929) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29927.length)].join('')));

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
return (function (state_30099){
var state_val_30100 = (state_30099[(1)]);
if((state_val_30100 === (7))){
var inst_30095 = (state_30099[(2)]);
var state_30099__$1 = state_30099;
var statearr_30101_30142 = state_30099__$1;
(statearr_30101_30142[(2)] = inst_30095);

(statearr_30101_30142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30100 === (20))){
var inst_30065 = (state_30099[(7)]);
var inst_30076 = (state_30099[(2)]);
var inst_30077 = cljs.core.next.call(null,inst_30065);
var inst_30051 = inst_30077;
var inst_30052 = null;
var inst_30053 = (0);
var inst_30054 = (0);
var state_30099__$1 = (function (){var statearr_30102 = state_30099;
(statearr_30102[(8)] = inst_30053);

(statearr_30102[(9)] = inst_30051);

(statearr_30102[(10)] = inst_30052);

(statearr_30102[(11)] = inst_30076);

(statearr_30102[(12)] = inst_30054);

return statearr_30102;
})();
var statearr_30103_30143 = state_30099__$1;
(statearr_30103_30143[(2)] = null);

(statearr_30103_30143[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30100 === (1))){
var state_30099__$1 = state_30099;
var statearr_30104_30144 = state_30099__$1;
(statearr_30104_30144[(2)] = null);

(statearr_30104_30144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30100 === (4))){
var inst_30040 = (state_30099[(13)]);
var inst_30040__$1 = (state_30099[(2)]);
var inst_30041 = (inst_30040__$1 == null);
var state_30099__$1 = (function (){var statearr_30105 = state_30099;
(statearr_30105[(13)] = inst_30040__$1);

return statearr_30105;
})();
if(cljs.core.truth_(inst_30041)){
var statearr_30106_30145 = state_30099__$1;
(statearr_30106_30145[(1)] = (5));

} else {
var statearr_30107_30146 = state_30099__$1;
(statearr_30107_30146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30100 === (15))){
var state_30099__$1 = state_30099;
var statearr_30111_30147 = state_30099__$1;
(statearr_30111_30147[(2)] = null);

(statearr_30111_30147[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30100 === (21))){
var state_30099__$1 = state_30099;
var statearr_30112_30148 = state_30099__$1;
(statearr_30112_30148[(2)] = null);

(statearr_30112_30148[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30100 === (13))){
var inst_30053 = (state_30099[(8)]);
var inst_30051 = (state_30099[(9)]);
var inst_30052 = (state_30099[(10)]);
var inst_30054 = (state_30099[(12)]);
var inst_30061 = (state_30099[(2)]);
var inst_30062 = (inst_30054 + (1));
var tmp30108 = inst_30053;
var tmp30109 = inst_30051;
var tmp30110 = inst_30052;
var inst_30051__$1 = tmp30109;
var inst_30052__$1 = tmp30110;
var inst_30053__$1 = tmp30108;
var inst_30054__$1 = inst_30062;
var state_30099__$1 = (function (){var statearr_30113 = state_30099;
(statearr_30113[(14)] = inst_30061);

(statearr_30113[(8)] = inst_30053__$1);

(statearr_30113[(9)] = inst_30051__$1);

(statearr_30113[(10)] = inst_30052__$1);

(statearr_30113[(12)] = inst_30054__$1);

return statearr_30113;
})();
var statearr_30114_30149 = state_30099__$1;
(statearr_30114_30149[(2)] = null);

(statearr_30114_30149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30100 === (22))){
var state_30099__$1 = state_30099;
var statearr_30115_30150 = state_30099__$1;
(statearr_30115_30150[(2)] = null);

(statearr_30115_30150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30100 === (6))){
var inst_30040 = (state_30099[(13)]);
var inst_30049 = f.call(null,inst_30040);
var inst_30050 = cljs.core.seq.call(null,inst_30049);
var inst_30051 = inst_30050;
var inst_30052 = null;
var inst_30053 = (0);
var inst_30054 = (0);
var state_30099__$1 = (function (){var statearr_30116 = state_30099;
(statearr_30116[(8)] = inst_30053);

(statearr_30116[(9)] = inst_30051);

(statearr_30116[(10)] = inst_30052);

(statearr_30116[(12)] = inst_30054);

return statearr_30116;
})();
var statearr_30117_30151 = state_30099__$1;
(statearr_30117_30151[(2)] = null);

(statearr_30117_30151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30100 === (17))){
var inst_30065 = (state_30099[(7)]);
var inst_30069 = cljs.core.chunk_first.call(null,inst_30065);
var inst_30070 = cljs.core.chunk_rest.call(null,inst_30065);
var inst_30071 = cljs.core.count.call(null,inst_30069);
var inst_30051 = inst_30070;
var inst_30052 = inst_30069;
var inst_30053 = inst_30071;
var inst_30054 = (0);
var state_30099__$1 = (function (){var statearr_30118 = state_30099;
(statearr_30118[(8)] = inst_30053);

(statearr_30118[(9)] = inst_30051);

(statearr_30118[(10)] = inst_30052);

(statearr_30118[(12)] = inst_30054);

return statearr_30118;
})();
var statearr_30119_30152 = state_30099__$1;
(statearr_30119_30152[(2)] = null);

(statearr_30119_30152[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30100 === (3))){
var inst_30097 = (state_30099[(2)]);
var state_30099__$1 = state_30099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30099__$1,inst_30097);
} else {
if((state_val_30100 === (12))){
var inst_30085 = (state_30099[(2)]);
var state_30099__$1 = state_30099;
var statearr_30120_30153 = state_30099__$1;
(statearr_30120_30153[(2)] = inst_30085);

(statearr_30120_30153[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30100 === (2))){
var state_30099__$1 = state_30099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30099__$1,(4),in$);
} else {
if((state_val_30100 === (23))){
var inst_30093 = (state_30099[(2)]);
var state_30099__$1 = state_30099;
var statearr_30121_30154 = state_30099__$1;
(statearr_30121_30154[(2)] = inst_30093);

(statearr_30121_30154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30100 === (19))){
var inst_30080 = (state_30099[(2)]);
var state_30099__$1 = state_30099;
var statearr_30122_30155 = state_30099__$1;
(statearr_30122_30155[(2)] = inst_30080);

(statearr_30122_30155[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30100 === (11))){
var inst_30065 = (state_30099[(7)]);
var inst_30051 = (state_30099[(9)]);
var inst_30065__$1 = cljs.core.seq.call(null,inst_30051);
var state_30099__$1 = (function (){var statearr_30123 = state_30099;
(statearr_30123[(7)] = inst_30065__$1);

return statearr_30123;
})();
if(inst_30065__$1){
var statearr_30124_30156 = state_30099__$1;
(statearr_30124_30156[(1)] = (14));

} else {
var statearr_30125_30157 = state_30099__$1;
(statearr_30125_30157[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30100 === (9))){
var inst_30087 = (state_30099[(2)]);
var inst_30088 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30099__$1 = (function (){var statearr_30126 = state_30099;
(statearr_30126[(15)] = inst_30087);

return statearr_30126;
})();
if(cljs.core.truth_(inst_30088)){
var statearr_30127_30158 = state_30099__$1;
(statearr_30127_30158[(1)] = (21));

} else {
var statearr_30128_30159 = state_30099__$1;
(statearr_30128_30159[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30100 === (5))){
var inst_30043 = cljs.core.async.close_BANG_.call(null,out);
var state_30099__$1 = state_30099;
var statearr_30129_30160 = state_30099__$1;
(statearr_30129_30160[(2)] = inst_30043);

(statearr_30129_30160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30100 === (14))){
var inst_30065 = (state_30099[(7)]);
var inst_30067 = cljs.core.chunked_seq_QMARK_.call(null,inst_30065);
var state_30099__$1 = state_30099;
if(inst_30067){
var statearr_30130_30161 = state_30099__$1;
(statearr_30130_30161[(1)] = (17));

} else {
var statearr_30131_30162 = state_30099__$1;
(statearr_30131_30162[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30100 === (16))){
var inst_30083 = (state_30099[(2)]);
var state_30099__$1 = state_30099;
var statearr_30132_30163 = state_30099__$1;
(statearr_30132_30163[(2)] = inst_30083);

(statearr_30132_30163[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30100 === (10))){
var inst_30052 = (state_30099[(10)]);
var inst_30054 = (state_30099[(12)]);
var inst_30059 = cljs.core._nth.call(null,inst_30052,inst_30054);
var state_30099__$1 = state_30099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30099__$1,(13),out,inst_30059);
} else {
if((state_val_30100 === (18))){
var inst_30065 = (state_30099[(7)]);
var inst_30074 = cljs.core.first.call(null,inst_30065);
var state_30099__$1 = state_30099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30099__$1,(20),out,inst_30074);
} else {
if((state_val_30100 === (8))){
var inst_30053 = (state_30099[(8)]);
var inst_30054 = (state_30099[(12)]);
var inst_30056 = (inst_30054 < inst_30053);
var inst_30057 = inst_30056;
var state_30099__$1 = state_30099;
if(cljs.core.truth_(inst_30057)){
var statearr_30133_30164 = state_30099__$1;
(statearr_30133_30164[(1)] = (10));

} else {
var statearr_30134_30165 = state_30099__$1;
(statearr_30134_30165[(1)] = (11));

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
var statearr_30138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30138[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19374__auto__);

(statearr_30138[(1)] = (1));

return statearr_30138;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19374__auto____1 = (function (state_30099){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_30099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e30139){if((e30139 instanceof Object)){
var ex__19377__auto__ = e30139;
var statearr_30140_30166 = state_30099;
(statearr_30140_30166[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30167 = state_30099;
state_30099 = G__30167;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19374__auto__ = function(state_30099){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19374__auto____1.call(this,state_30099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19374__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19374__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto__))
})();
var state__19440__auto__ = (function (){var statearr_30141 = f__19439__auto__.call(null);
(statearr_30141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto__);

return statearr_30141;
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
var args30168 = [];
var len__17416__auto___30171 = arguments.length;
var i__17417__auto___30172 = (0);
while(true){
if((i__17417__auto___30172 < len__17416__auto___30171)){
args30168.push((arguments[i__17417__auto___30172]));

var G__30173 = (i__17417__auto___30172 + (1));
i__17417__auto___30172 = G__30173;
continue;
} else {
}
break;
}

var G__30170 = args30168.length;
switch (G__30170) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30168.length)].join('')));

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
var args30175 = [];
var len__17416__auto___30178 = arguments.length;
var i__17417__auto___30179 = (0);
while(true){
if((i__17417__auto___30179 < len__17416__auto___30178)){
args30175.push((arguments[i__17417__auto___30179]));

var G__30180 = (i__17417__auto___30179 + (1));
i__17417__auto___30179 = G__30180;
continue;
} else {
}
break;
}

var G__30177 = args30175.length;
switch (G__30177) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30175.length)].join('')));

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
var args30182 = [];
var len__17416__auto___30233 = arguments.length;
var i__17417__auto___30234 = (0);
while(true){
if((i__17417__auto___30234 < len__17416__auto___30233)){
args30182.push((arguments[i__17417__auto___30234]));

var G__30235 = (i__17417__auto___30234 + (1));
i__17417__auto___30234 = G__30235;
continue;
} else {
}
break;
}

var G__30184 = args30182.length;
switch (G__30184) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30182.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19438__auto___30237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___30237,out){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___30237,out){
return (function (state_30208){
var state_val_30209 = (state_30208[(1)]);
if((state_val_30209 === (7))){
var inst_30203 = (state_30208[(2)]);
var state_30208__$1 = state_30208;
var statearr_30210_30238 = state_30208__$1;
(statearr_30210_30238[(2)] = inst_30203);

(statearr_30210_30238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (1))){
var inst_30185 = null;
var state_30208__$1 = (function (){var statearr_30211 = state_30208;
(statearr_30211[(7)] = inst_30185);

return statearr_30211;
})();
var statearr_30212_30239 = state_30208__$1;
(statearr_30212_30239[(2)] = null);

(statearr_30212_30239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (4))){
var inst_30188 = (state_30208[(8)]);
var inst_30188__$1 = (state_30208[(2)]);
var inst_30189 = (inst_30188__$1 == null);
var inst_30190 = cljs.core.not.call(null,inst_30189);
var state_30208__$1 = (function (){var statearr_30213 = state_30208;
(statearr_30213[(8)] = inst_30188__$1);

return statearr_30213;
})();
if(inst_30190){
var statearr_30214_30240 = state_30208__$1;
(statearr_30214_30240[(1)] = (5));

} else {
var statearr_30215_30241 = state_30208__$1;
(statearr_30215_30241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (6))){
var state_30208__$1 = state_30208;
var statearr_30216_30242 = state_30208__$1;
(statearr_30216_30242[(2)] = null);

(statearr_30216_30242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (3))){
var inst_30205 = (state_30208[(2)]);
var inst_30206 = cljs.core.async.close_BANG_.call(null,out);
var state_30208__$1 = (function (){var statearr_30217 = state_30208;
(statearr_30217[(9)] = inst_30205);

return statearr_30217;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30208__$1,inst_30206);
} else {
if((state_val_30209 === (2))){
var state_30208__$1 = state_30208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30208__$1,(4),ch);
} else {
if((state_val_30209 === (11))){
var inst_30188 = (state_30208[(8)]);
var inst_30197 = (state_30208[(2)]);
var inst_30185 = inst_30188;
var state_30208__$1 = (function (){var statearr_30218 = state_30208;
(statearr_30218[(10)] = inst_30197);

(statearr_30218[(7)] = inst_30185);

return statearr_30218;
})();
var statearr_30219_30243 = state_30208__$1;
(statearr_30219_30243[(2)] = null);

(statearr_30219_30243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (9))){
var inst_30188 = (state_30208[(8)]);
var state_30208__$1 = state_30208;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30208__$1,(11),out,inst_30188);
} else {
if((state_val_30209 === (5))){
var inst_30188 = (state_30208[(8)]);
var inst_30185 = (state_30208[(7)]);
var inst_30192 = cljs.core._EQ_.call(null,inst_30188,inst_30185);
var state_30208__$1 = state_30208;
if(inst_30192){
var statearr_30221_30244 = state_30208__$1;
(statearr_30221_30244[(1)] = (8));

} else {
var statearr_30222_30245 = state_30208__$1;
(statearr_30222_30245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (10))){
var inst_30200 = (state_30208[(2)]);
var state_30208__$1 = state_30208;
var statearr_30223_30246 = state_30208__$1;
(statearr_30223_30246[(2)] = inst_30200);

(statearr_30223_30246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (8))){
var inst_30185 = (state_30208[(7)]);
var tmp30220 = inst_30185;
var inst_30185__$1 = tmp30220;
var state_30208__$1 = (function (){var statearr_30224 = state_30208;
(statearr_30224[(7)] = inst_30185__$1);

return statearr_30224;
})();
var statearr_30225_30247 = state_30208__$1;
(statearr_30225_30247[(2)] = null);

(statearr_30225_30247[(1)] = (2));


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
});})(c__19438__auto___30237,out))
;
return ((function (switch__19373__auto__,c__19438__auto___30237,out){
return (function() {
var cljs$core$async$state_machine__19374__auto__ = null;
var cljs$core$async$state_machine__19374__auto____0 = (function (){
var statearr_30229 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30229[(0)] = cljs$core$async$state_machine__19374__auto__);

(statearr_30229[(1)] = (1));

return statearr_30229;
});
var cljs$core$async$state_machine__19374__auto____1 = (function (state_30208){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_30208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e30230){if((e30230 instanceof Object)){
var ex__19377__auto__ = e30230;
var statearr_30231_30248 = state_30208;
(statearr_30231_30248[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30249 = state_30208;
state_30208 = G__30249;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$state_machine__19374__auto__ = function(state_30208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19374__auto____1.call(this,state_30208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19374__auto____0;
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19374__auto____1;
return cljs$core$async$state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___30237,out))
})();
var state__19440__auto__ = (function (){var statearr_30232 = f__19439__auto__.call(null);
(statearr_30232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___30237);

return statearr_30232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___30237,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30250 = [];
var len__17416__auto___30320 = arguments.length;
var i__17417__auto___30321 = (0);
while(true){
if((i__17417__auto___30321 < len__17416__auto___30320)){
args30250.push((arguments[i__17417__auto___30321]));

var G__30322 = (i__17417__auto___30321 + (1));
i__17417__auto___30321 = G__30322;
continue;
} else {
}
break;
}

var G__30252 = args30250.length;
switch (G__30252) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30250.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19438__auto___30324 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___30324,out){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___30324,out){
return (function (state_30290){
var state_val_30291 = (state_30290[(1)]);
if((state_val_30291 === (7))){
var inst_30286 = (state_30290[(2)]);
var state_30290__$1 = state_30290;
var statearr_30292_30325 = state_30290__$1;
(statearr_30292_30325[(2)] = inst_30286);

(statearr_30292_30325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (1))){
var inst_30253 = (new Array(n));
var inst_30254 = inst_30253;
var inst_30255 = (0);
var state_30290__$1 = (function (){var statearr_30293 = state_30290;
(statearr_30293[(7)] = inst_30255);

(statearr_30293[(8)] = inst_30254);

return statearr_30293;
})();
var statearr_30294_30326 = state_30290__$1;
(statearr_30294_30326[(2)] = null);

(statearr_30294_30326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (4))){
var inst_30258 = (state_30290[(9)]);
var inst_30258__$1 = (state_30290[(2)]);
var inst_30259 = (inst_30258__$1 == null);
var inst_30260 = cljs.core.not.call(null,inst_30259);
var state_30290__$1 = (function (){var statearr_30295 = state_30290;
(statearr_30295[(9)] = inst_30258__$1);

return statearr_30295;
})();
if(inst_30260){
var statearr_30296_30327 = state_30290__$1;
(statearr_30296_30327[(1)] = (5));

} else {
var statearr_30297_30328 = state_30290__$1;
(statearr_30297_30328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (15))){
var inst_30280 = (state_30290[(2)]);
var state_30290__$1 = state_30290;
var statearr_30298_30329 = state_30290__$1;
(statearr_30298_30329[(2)] = inst_30280);

(statearr_30298_30329[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (13))){
var state_30290__$1 = state_30290;
var statearr_30299_30330 = state_30290__$1;
(statearr_30299_30330[(2)] = null);

(statearr_30299_30330[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (6))){
var inst_30255 = (state_30290[(7)]);
var inst_30276 = (inst_30255 > (0));
var state_30290__$1 = state_30290;
if(cljs.core.truth_(inst_30276)){
var statearr_30300_30331 = state_30290__$1;
(statearr_30300_30331[(1)] = (12));

} else {
var statearr_30301_30332 = state_30290__$1;
(statearr_30301_30332[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (3))){
var inst_30288 = (state_30290[(2)]);
var state_30290__$1 = state_30290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30290__$1,inst_30288);
} else {
if((state_val_30291 === (12))){
var inst_30254 = (state_30290[(8)]);
var inst_30278 = cljs.core.vec.call(null,inst_30254);
var state_30290__$1 = state_30290;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30290__$1,(15),out,inst_30278);
} else {
if((state_val_30291 === (2))){
var state_30290__$1 = state_30290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30290__$1,(4),ch);
} else {
if((state_val_30291 === (11))){
var inst_30270 = (state_30290[(2)]);
var inst_30271 = (new Array(n));
var inst_30254 = inst_30271;
var inst_30255 = (0);
var state_30290__$1 = (function (){var statearr_30302 = state_30290;
(statearr_30302[(7)] = inst_30255);

(statearr_30302[(10)] = inst_30270);

(statearr_30302[(8)] = inst_30254);

return statearr_30302;
})();
var statearr_30303_30333 = state_30290__$1;
(statearr_30303_30333[(2)] = null);

(statearr_30303_30333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (9))){
var inst_30254 = (state_30290[(8)]);
var inst_30268 = cljs.core.vec.call(null,inst_30254);
var state_30290__$1 = state_30290;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30290__$1,(11),out,inst_30268);
} else {
if((state_val_30291 === (5))){
var inst_30255 = (state_30290[(7)]);
var inst_30263 = (state_30290[(11)]);
var inst_30258 = (state_30290[(9)]);
var inst_30254 = (state_30290[(8)]);
var inst_30262 = (inst_30254[inst_30255] = inst_30258);
var inst_30263__$1 = (inst_30255 + (1));
var inst_30264 = (inst_30263__$1 < n);
var state_30290__$1 = (function (){var statearr_30304 = state_30290;
(statearr_30304[(12)] = inst_30262);

(statearr_30304[(11)] = inst_30263__$1);

return statearr_30304;
})();
if(cljs.core.truth_(inst_30264)){
var statearr_30305_30334 = state_30290__$1;
(statearr_30305_30334[(1)] = (8));

} else {
var statearr_30306_30335 = state_30290__$1;
(statearr_30306_30335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (14))){
var inst_30283 = (state_30290[(2)]);
var inst_30284 = cljs.core.async.close_BANG_.call(null,out);
var state_30290__$1 = (function (){var statearr_30308 = state_30290;
(statearr_30308[(13)] = inst_30283);

return statearr_30308;
})();
var statearr_30309_30336 = state_30290__$1;
(statearr_30309_30336[(2)] = inst_30284);

(statearr_30309_30336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (10))){
var inst_30274 = (state_30290[(2)]);
var state_30290__$1 = state_30290;
var statearr_30310_30337 = state_30290__$1;
(statearr_30310_30337[(2)] = inst_30274);

(statearr_30310_30337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (8))){
var inst_30263 = (state_30290[(11)]);
var inst_30254 = (state_30290[(8)]);
var tmp30307 = inst_30254;
var inst_30254__$1 = tmp30307;
var inst_30255 = inst_30263;
var state_30290__$1 = (function (){var statearr_30311 = state_30290;
(statearr_30311[(7)] = inst_30255);

(statearr_30311[(8)] = inst_30254__$1);

return statearr_30311;
})();
var statearr_30312_30338 = state_30290__$1;
(statearr_30312_30338[(2)] = null);

(statearr_30312_30338[(1)] = (2));


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
});})(c__19438__auto___30324,out))
;
return ((function (switch__19373__auto__,c__19438__auto___30324,out){
return (function() {
var cljs$core$async$state_machine__19374__auto__ = null;
var cljs$core$async$state_machine__19374__auto____0 = (function (){
var statearr_30316 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30316[(0)] = cljs$core$async$state_machine__19374__auto__);

(statearr_30316[(1)] = (1));

return statearr_30316;
});
var cljs$core$async$state_machine__19374__auto____1 = (function (state_30290){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_30290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e30317){if((e30317 instanceof Object)){
var ex__19377__auto__ = e30317;
var statearr_30318_30339 = state_30290;
(statearr_30318_30339[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30340 = state_30290;
state_30290 = G__30340;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$state_machine__19374__auto__ = function(state_30290){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19374__auto____1.call(this,state_30290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19374__auto____0;
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19374__auto____1;
return cljs$core$async$state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___30324,out))
})();
var state__19440__auto__ = (function (){var statearr_30319 = f__19439__auto__.call(null);
(statearr_30319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___30324);

return statearr_30319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___30324,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30341 = [];
var len__17416__auto___30415 = arguments.length;
var i__17417__auto___30416 = (0);
while(true){
if((i__17417__auto___30416 < len__17416__auto___30415)){
args30341.push((arguments[i__17417__auto___30416]));

var G__30417 = (i__17417__auto___30416 + (1));
i__17417__auto___30416 = G__30417;
continue;
} else {
}
break;
}

var G__30343 = args30341.length;
switch (G__30343) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30341.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19438__auto___30419 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___30419,out){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___30419,out){
return (function (state_30385){
var state_val_30386 = (state_30385[(1)]);
if((state_val_30386 === (7))){
var inst_30381 = (state_30385[(2)]);
var state_30385__$1 = state_30385;
var statearr_30387_30420 = state_30385__$1;
(statearr_30387_30420[(2)] = inst_30381);

(statearr_30387_30420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30386 === (1))){
var inst_30344 = [];
var inst_30345 = inst_30344;
var inst_30346 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30385__$1 = (function (){var statearr_30388 = state_30385;
(statearr_30388[(7)] = inst_30345);

(statearr_30388[(8)] = inst_30346);

return statearr_30388;
})();
var statearr_30389_30421 = state_30385__$1;
(statearr_30389_30421[(2)] = null);

(statearr_30389_30421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30386 === (4))){
var inst_30349 = (state_30385[(9)]);
var inst_30349__$1 = (state_30385[(2)]);
var inst_30350 = (inst_30349__$1 == null);
var inst_30351 = cljs.core.not.call(null,inst_30350);
var state_30385__$1 = (function (){var statearr_30390 = state_30385;
(statearr_30390[(9)] = inst_30349__$1);

return statearr_30390;
})();
if(inst_30351){
var statearr_30391_30422 = state_30385__$1;
(statearr_30391_30422[(1)] = (5));

} else {
var statearr_30392_30423 = state_30385__$1;
(statearr_30392_30423[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30386 === (15))){
var inst_30375 = (state_30385[(2)]);
var state_30385__$1 = state_30385;
var statearr_30393_30424 = state_30385__$1;
(statearr_30393_30424[(2)] = inst_30375);

(statearr_30393_30424[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30386 === (13))){
var state_30385__$1 = state_30385;
var statearr_30394_30425 = state_30385__$1;
(statearr_30394_30425[(2)] = null);

(statearr_30394_30425[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30386 === (6))){
var inst_30345 = (state_30385[(7)]);
var inst_30370 = inst_30345.length;
var inst_30371 = (inst_30370 > (0));
var state_30385__$1 = state_30385;
if(cljs.core.truth_(inst_30371)){
var statearr_30395_30426 = state_30385__$1;
(statearr_30395_30426[(1)] = (12));

} else {
var statearr_30396_30427 = state_30385__$1;
(statearr_30396_30427[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30386 === (3))){
var inst_30383 = (state_30385[(2)]);
var state_30385__$1 = state_30385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30385__$1,inst_30383);
} else {
if((state_val_30386 === (12))){
var inst_30345 = (state_30385[(7)]);
var inst_30373 = cljs.core.vec.call(null,inst_30345);
var state_30385__$1 = state_30385;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30385__$1,(15),out,inst_30373);
} else {
if((state_val_30386 === (2))){
var state_30385__$1 = state_30385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30385__$1,(4),ch);
} else {
if((state_val_30386 === (11))){
var inst_30353 = (state_30385[(10)]);
var inst_30349 = (state_30385[(9)]);
var inst_30363 = (state_30385[(2)]);
var inst_30364 = [];
var inst_30365 = inst_30364.push(inst_30349);
var inst_30345 = inst_30364;
var inst_30346 = inst_30353;
var state_30385__$1 = (function (){var statearr_30397 = state_30385;
(statearr_30397[(7)] = inst_30345);

(statearr_30397[(8)] = inst_30346);

(statearr_30397[(11)] = inst_30365);

(statearr_30397[(12)] = inst_30363);

return statearr_30397;
})();
var statearr_30398_30428 = state_30385__$1;
(statearr_30398_30428[(2)] = null);

(statearr_30398_30428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30386 === (9))){
var inst_30345 = (state_30385[(7)]);
var inst_30361 = cljs.core.vec.call(null,inst_30345);
var state_30385__$1 = state_30385;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30385__$1,(11),out,inst_30361);
} else {
if((state_val_30386 === (5))){
var inst_30353 = (state_30385[(10)]);
var inst_30346 = (state_30385[(8)]);
var inst_30349 = (state_30385[(9)]);
var inst_30353__$1 = f.call(null,inst_30349);
var inst_30354 = cljs.core._EQ_.call(null,inst_30353__$1,inst_30346);
var inst_30355 = cljs.core.keyword_identical_QMARK_.call(null,inst_30346,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30356 = (inst_30354) || (inst_30355);
var state_30385__$1 = (function (){var statearr_30399 = state_30385;
(statearr_30399[(10)] = inst_30353__$1);

return statearr_30399;
})();
if(cljs.core.truth_(inst_30356)){
var statearr_30400_30429 = state_30385__$1;
(statearr_30400_30429[(1)] = (8));

} else {
var statearr_30401_30430 = state_30385__$1;
(statearr_30401_30430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30386 === (14))){
var inst_30378 = (state_30385[(2)]);
var inst_30379 = cljs.core.async.close_BANG_.call(null,out);
var state_30385__$1 = (function (){var statearr_30403 = state_30385;
(statearr_30403[(13)] = inst_30378);

return statearr_30403;
})();
var statearr_30404_30431 = state_30385__$1;
(statearr_30404_30431[(2)] = inst_30379);

(statearr_30404_30431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30386 === (10))){
var inst_30368 = (state_30385[(2)]);
var state_30385__$1 = state_30385;
var statearr_30405_30432 = state_30385__$1;
(statearr_30405_30432[(2)] = inst_30368);

(statearr_30405_30432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30386 === (8))){
var inst_30345 = (state_30385[(7)]);
var inst_30353 = (state_30385[(10)]);
var inst_30349 = (state_30385[(9)]);
var inst_30358 = inst_30345.push(inst_30349);
var tmp30402 = inst_30345;
var inst_30345__$1 = tmp30402;
var inst_30346 = inst_30353;
var state_30385__$1 = (function (){var statearr_30406 = state_30385;
(statearr_30406[(7)] = inst_30345__$1);

(statearr_30406[(8)] = inst_30346);

(statearr_30406[(14)] = inst_30358);

return statearr_30406;
})();
var statearr_30407_30433 = state_30385__$1;
(statearr_30407_30433[(2)] = null);

(statearr_30407_30433[(1)] = (2));


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
});})(c__19438__auto___30419,out))
;
return ((function (switch__19373__auto__,c__19438__auto___30419,out){
return (function() {
var cljs$core$async$state_machine__19374__auto__ = null;
var cljs$core$async$state_machine__19374__auto____0 = (function (){
var statearr_30411 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30411[(0)] = cljs$core$async$state_machine__19374__auto__);

(statearr_30411[(1)] = (1));

return statearr_30411;
});
var cljs$core$async$state_machine__19374__auto____1 = (function (state_30385){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_30385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e30412){if((e30412 instanceof Object)){
var ex__19377__auto__ = e30412;
var statearr_30413_30434 = state_30385;
(statearr_30413_30434[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30435 = state_30385;
state_30385 = G__30435;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$state_machine__19374__auto__ = function(state_30385){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19374__auto____1.call(this,state_30385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19374__auto____0;
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19374__auto____1;
return cljs$core$async$state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___30419,out))
})();
var state__19440__auto__ = (function (){var statearr_30414 = f__19439__auto__.call(null);
(statearr_30414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___30419);

return statearr_30414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___30419,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1521786016201