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
if(typeof cljs.core.async.t_cljs$core$async25064 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25064 = (function (fn_handler,f,meta25065){
this.fn_handler = fn_handler;
this.f = f;
this.meta25065 = meta25065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25066,meta25065__$1){
var self__ = this;
var _25066__$1 = this;
return (new cljs.core.async.t_cljs$core$async25064(self__.fn_handler,self__.f,meta25065__$1));
});

cljs.core.async.t_cljs$core$async25064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25066){
var self__ = this;
var _25066__$1 = this;
return self__.meta25065;
});

cljs.core.async.t_cljs$core$async25064.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25064.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25064.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25064.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta25065","meta25065",-755491505,null)], null);
});

cljs.core.async.t_cljs$core$async25064.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25064";

cljs.core.async.t_cljs$core$async25064.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async25064");
});

cljs.core.async.__GT_t_cljs$core$async25064 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async25064(fn_handler__$1,f__$1,meta25065){
return (new cljs.core.async.t_cljs$core$async25064(fn_handler__$1,f__$1,meta25065));
});

}

return (new cljs.core.async.t_cljs$core$async25064(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args25069 = [];
var len__17416__auto___25072 = arguments.length;
var i__17417__auto___25073 = (0);
while(true){
if((i__17417__auto___25073 < len__17416__auto___25072)){
args25069.push((arguments[i__17417__auto___25073]));

var G__25074 = (i__17417__auto___25073 + (1));
i__17417__auto___25073 = G__25074;
continue;
} else {
}
break;
}

var G__25071 = args25069.length;
switch (G__25071) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25069.length)].join('')));

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
var args25076 = [];
var len__17416__auto___25079 = arguments.length;
var i__17417__auto___25080 = (0);
while(true){
if((i__17417__auto___25080 < len__17416__auto___25079)){
args25076.push((arguments[i__17417__auto___25080]));

var G__25081 = (i__17417__auto___25080 + (1));
i__17417__auto___25080 = G__25081;
continue;
} else {
}
break;
}

var G__25078 = args25076.length;
switch (G__25078) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25076.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25083 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25083);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25083,ret){
return (function (){
return fn1.call(null,val_25083);
});})(val_25083,ret))
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
var args25084 = [];
var len__17416__auto___25087 = arguments.length;
var i__17417__auto___25088 = (0);
while(true){
if((i__17417__auto___25088 < len__17416__auto___25087)){
args25084.push((arguments[i__17417__auto___25088]));

var G__25089 = (i__17417__auto___25088 + (1));
i__17417__auto___25088 = G__25089;
continue;
} else {
}
break;
}

var G__25086 = args25084.length;
switch (G__25086) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25084.length)].join('')));

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
var n__17261__auto___25091 = n;
var x_25092 = (0);
while(true){
if((x_25092 < n__17261__auto___25091)){
(a[x_25092] = (0));

var G__25093 = (x_25092 + (1));
x_25092 = G__25093;
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

var G__25094 = (i + (1));
i = G__25094;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async25098 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25098 = (function (alt_flag,flag,meta25099){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta25099 = meta25099;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25100,meta25099__$1){
var self__ = this;
var _25100__$1 = this;
return (new cljs.core.async.t_cljs$core$async25098(self__.alt_flag,self__.flag,meta25099__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25098.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25100){
var self__ = this;
var _25100__$1 = this;
return self__.meta25099;
});})(flag))
;

cljs.core.async.t_cljs$core$async25098.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25098.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25098.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25098.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25099","meta25099",-2085566750,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25098.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25098.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25098";

cljs.core.async.t_cljs$core$async25098.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async25098");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async25098 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25098(alt_flag__$1,flag__$1,meta25099){
return (new cljs.core.async.t_cljs$core$async25098(alt_flag__$1,flag__$1,meta25099));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25098(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async25104 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25104 = (function (alt_handler,flag,cb,meta25105){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta25105 = meta25105;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25106,meta25105__$1){
var self__ = this;
var _25106__$1 = this;
return (new cljs.core.async.t_cljs$core$async25104(self__.alt_handler,self__.flag,self__.cb,meta25105__$1));
});

cljs.core.async.t_cljs$core$async25104.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25106){
var self__ = this;
var _25106__$1 = this;
return self__.meta25105;
});

cljs.core.async.t_cljs$core$async25104.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25104.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25104.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25104.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25105","meta25105",-1930301753,null)], null);
});

cljs.core.async.t_cljs$core$async25104.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25104.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25104";

cljs.core.async.t_cljs$core$async25104.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async25104");
});

cljs.core.async.__GT_t_cljs$core$async25104 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25104(alt_handler__$1,flag__$1,cb__$1,meta25105){
return (new cljs.core.async.t_cljs$core$async25104(alt_handler__$1,flag__$1,cb__$1,meta25105));
});

}

return (new cljs.core.async.t_cljs$core$async25104(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25107_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25107_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25108_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25108_SHARP_,port], null));
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
var G__25109 = (i + (1));
i = G__25109;
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
var len__17416__auto___25115 = arguments.length;
var i__17417__auto___25116 = (0);
while(true){
if((i__17417__auto___25116 < len__17416__auto___25115)){
args__17423__auto__.push((arguments[i__17417__auto___25116]));

var G__25117 = (i__17417__auto___25116 + (1));
i__17417__auto___25116 = G__25117;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((1) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17424__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25112){
var map__25113 = p__25112;
var map__25113__$1 = ((((!((map__25113 == null)))?((((map__25113.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25113.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25113):map__25113);
var opts = map__25113__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25110){
var G__25111 = cljs.core.first.call(null,seq25110);
var seq25110__$1 = cljs.core.next.call(null,seq25110);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25111,seq25110__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args25118 = [];
var len__17416__auto___25168 = arguments.length;
var i__17417__auto___25169 = (0);
while(true){
if((i__17417__auto___25169 < len__17416__auto___25168)){
args25118.push((arguments[i__17417__auto___25169]));

var G__25170 = (i__17417__auto___25169 + (1));
i__17417__auto___25169 = G__25170;
continue;
} else {
}
break;
}

var G__25120 = args25118.length;
switch (G__25120) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25118.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19639__auto___25172 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19639__auto___25172){
return (function (){
var f__19640__auto__ = (function (){var switch__19618__auto__ = ((function (c__19639__auto___25172){
return (function (state_25144){
var state_val_25145 = (state_25144[(1)]);
if((state_val_25145 === (7))){
var inst_25140 = (state_25144[(2)]);
var state_25144__$1 = state_25144;
var statearr_25146_25173 = state_25144__$1;
(statearr_25146_25173[(2)] = inst_25140);

(statearr_25146_25173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (1))){
var state_25144__$1 = state_25144;
var statearr_25147_25174 = state_25144__$1;
(statearr_25147_25174[(2)] = null);

(statearr_25147_25174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (4))){
var inst_25123 = (state_25144[(7)]);
var inst_25123__$1 = (state_25144[(2)]);
var inst_25124 = (inst_25123__$1 == null);
var state_25144__$1 = (function (){var statearr_25148 = state_25144;
(statearr_25148[(7)] = inst_25123__$1);

return statearr_25148;
})();
if(cljs.core.truth_(inst_25124)){
var statearr_25149_25175 = state_25144__$1;
(statearr_25149_25175[(1)] = (5));

} else {
var statearr_25150_25176 = state_25144__$1;
(statearr_25150_25176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (13))){
var state_25144__$1 = state_25144;
var statearr_25151_25177 = state_25144__$1;
(statearr_25151_25177[(2)] = null);

(statearr_25151_25177[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (6))){
var inst_25123 = (state_25144[(7)]);
var state_25144__$1 = state_25144;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25144__$1,(11),to,inst_25123);
} else {
if((state_val_25145 === (3))){
var inst_25142 = (state_25144[(2)]);
var state_25144__$1 = state_25144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25144__$1,inst_25142);
} else {
if((state_val_25145 === (12))){
var state_25144__$1 = state_25144;
var statearr_25152_25178 = state_25144__$1;
(statearr_25152_25178[(2)] = null);

(statearr_25152_25178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (2))){
var state_25144__$1 = state_25144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25144__$1,(4),from);
} else {
if((state_val_25145 === (11))){
var inst_25133 = (state_25144[(2)]);
var state_25144__$1 = state_25144;
if(cljs.core.truth_(inst_25133)){
var statearr_25153_25179 = state_25144__$1;
(statearr_25153_25179[(1)] = (12));

} else {
var statearr_25154_25180 = state_25144__$1;
(statearr_25154_25180[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (9))){
var state_25144__$1 = state_25144;
var statearr_25155_25181 = state_25144__$1;
(statearr_25155_25181[(2)] = null);

(statearr_25155_25181[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (5))){
var state_25144__$1 = state_25144;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25156_25182 = state_25144__$1;
(statearr_25156_25182[(1)] = (8));

} else {
var statearr_25157_25183 = state_25144__$1;
(statearr_25157_25183[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (14))){
var inst_25138 = (state_25144[(2)]);
var state_25144__$1 = state_25144;
var statearr_25158_25184 = state_25144__$1;
(statearr_25158_25184[(2)] = inst_25138);

(statearr_25158_25184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (10))){
var inst_25130 = (state_25144[(2)]);
var state_25144__$1 = state_25144;
var statearr_25159_25185 = state_25144__$1;
(statearr_25159_25185[(2)] = inst_25130);

(statearr_25159_25185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (8))){
var inst_25127 = cljs.core.async.close_BANG_.call(null,to);
var state_25144__$1 = state_25144;
var statearr_25160_25186 = state_25144__$1;
(statearr_25160_25186[(2)] = inst_25127);

(statearr_25160_25186[(1)] = (10));


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
});})(c__19639__auto___25172))
;
return ((function (switch__19618__auto__,c__19639__auto___25172){
return (function() {
var cljs$core$async$state_machine__19619__auto__ = null;
var cljs$core$async$state_machine__19619__auto____0 = (function (){
var statearr_25164 = [null,null,null,null,null,null,null,null];
(statearr_25164[(0)] = cljs$core$async$state_machine__19619__auto__);

(statearr_25164[(1)] = (1));

return statearr_25164;
});
var cljs$core$async$state_machine__19619__auto____1 = (function (state_25144){
while(true){
var ret_value__19620__auto__ = (function (){try{while(true){
var result__19621__auto__ = switch__19618__auto__.call(null,state_25144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19621__auto__;
}
break;
}
}catch (e25165){if((e25165 instanceof Object)){
var ex__19622__auto__ = e25165;
var statearr_25166_25187 = state_25144;
(statearr_25166_25187[(5)] = ex__19622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25188 = state_25144;
state_25144 = G__25188;
continue;
} else {
return ret_value__19620__auto__;
}
break;
}
});
cljs$core$async$state_machine__19619__auto__ = function(state_25144){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19619__auto____1.call(this,state_25144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19619__auto____0;
cljs$core$async$state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19619__auto____1;
return cljs$core$async$state_machine__19619__auto__;
})()
;})(switch__19618__auto__,c__19639__auto___25172))
})();
var state__19641__auto__ = (function (){var statearr_25167 = f__19640__auto__.call(null);
(statearr_25167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19639__auto___25172);

return statearr_25167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19641__auto__);
});})(c__19639__auto___25172))
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
return (function (p__25372){
var vec__25373 = p__25372;
var v = cljs.core.nth.call(null,vec__25373,(0),null);
var p = cljs.core.nth.call(null,vec__25373,(1),null);
var job = vec__25373;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19639__auto___25555 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19639__auto___25555,res,vec__25373,v,p,job,jobs,results){
return (function (){
var f__19640__auto__ = (function (){var switch__19618__auto__ = ((function (c__19639__auto___25555,res,vec__25373,v,p,job,jobs,results){
return (function (state_25378){
var state_val_25379 = (state_25378[(1)]);
if((state_val_25379 === (1))){
var state_25378__$1 = state_25378;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25378__$1,(2),res,v);
} else {
if((state_val_25379 === (2))){
var inst_25375 = (state_25378[(2)]);
var inst_25376 = cljs.core.async.close_BANG_.call(null,res);
var state_25378__$1 = (function (){var statearr_25380 = state_25378;
(statearr_25380[(7)] = inst_25375);

return statearr_25380;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25378__$1,inst_25376);
} else {
return null;
}
}
});})(c__19639__auto___25555,res,vec__25373,v,p,job,jobs,results))
;
return ((function (switch__19618__auto__,c__19639__auto___25555,res,vec__25373,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19619__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19619__auto____0 = (function (){
var statearr_25384 = [null,null,null,null,null,null,null,null];
(statearr_25384[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19619__auto__);

(statearr_25384[(1)] = (1));

return statearr_25384;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19619__auto____1 = (function (state_25378){
while(true){
var ret_value__19620__auto__ = (function (){try{while(true){
var result__19621__auto__ = switch__19618__auto__.call(null,state_25378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19621__auto__;
}
break;
}
}catch (e25385){if((e25385 instanceof Object)){
var ex__19622__auto__ = e25385;
var statearr_25386_25556 = state_25378;
(statearr_25386_25556[(5)] = ex__19622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25557 = state_25378;
state_25378 = G__25557;
continue;
} else {
return ret_value__19620__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19619__auto__ = function(state_25378){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19619__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19619__auto____1.call(this,state_25378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19619__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19619__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19619__auto__;
})()
;})(switch__19618__auto__,c__19639__auto___25555,res,vec__25373,v,p,job,jobs,results))
})();
var state__19641__auto__ = (function (){var statearr_25387 = f__19640__auto__.call(null);
(statearr_25387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19639__auto___25555);

return statearr_25387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19641__auto__);
});})(c__19639__auto___25555,res,vec__25373,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25388){
var vec__25389 = p__25388;
var v = cljs.core.nth.call(null,vec__25389,(0),null);
var p = cljs.core.nth.call(null,vec__25389,(1),null);
var job = vec__25389;
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
var n__17261__auto___25558 = n;
var __25559 = (0);
while(true){
if((__25559 < n__17261__auto___25558)){
var G__25390_25560 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25390_25560) {
case "compute":
var c__19639__auto___25562 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25559,c__19639__auto___25562,G__25390_25560,n__17261__auto___25558,jobs,results,process,async){
return (function (){
var f__19640__auto__ = (function (){var switch__19618__auto__ = ((function (__25559,c__19639__auto___25562,G__25390_25560,n__17261__auto___25558,jobs,results,process,async){
return (function (state_25403){
var state_val_25404 = (state_25403[(1)]);
if((state_val_25404 === (1))){
var state_25403__$1 = state_25403;
var statearr_25405_25563 = state_25403__$1;
(statearr_25405_25563[(2)] = null);

(statearr_25405_25563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25404 === (2))){
var state_25403__$1 = state_25403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25403__$1,(4),jobs);
} else {
if((state_val_25404 === (3))){
var inst_25401 = (state_25403[(2)]);
var state_25403__$1 = state_25403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25403__$1,inst_25401);
} else {
if((state_val_25404 === (4))){
var inst_25393 = (state_25403[(2)]);
var inst_25394 = process.call(null,inst_25393);
var state_25403__$1 = state_25403;
if(cljs.core.truth_(inst_25394)){
var statearr_25406_25564 = state_25403__$1;
(statearr_25406_25564[(1)] = (5));

} else {
var statearr_25407_25565 = state_25403__$1;
(statearr_25407_25565[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25404 === (5))){
var state_25403__$1 = state_25403;
var statearr_25408_25566 = state_25403__$1;
(statearr_25408_25566[(2)] = null);

(statearr_25408_25566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25404 === (6))){
var state_25403__$1 = state_25403;
var statearr_25409_25567 = state_25403__$1;
(statearr_25409_25567[(2)] = null);

(statearr_25409_25567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25404 === (7))){
var inst_25399 = (state_25403[(2)]);
var state_25403__$1 = state_25403;
var statearr_25410_25568 = state_25403__$1;
(statearr_25410_25568[(2)] = inst_25399);

(statearr_25410_25568[(1)] = (3));


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
});})(__25559,c__19639__auto___25562,G__25390_25560,n__17261__auto___25558,jobs,results,process,async))
;
return ((function (__25559,switch__19618__auto__,c__19639__auto___25562,G__25390_25560,n__17261__auto___25558,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19619__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19619__auto____0 = (function (){
var statearr_25414 = [null,null,null,null,null,null,null];
(statearr_25414[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19619__auto__);

(statearr_25414[(1)] = (1));

return statearr_25414;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19619__auto____1 = (function (state_25403){
while(true){
var ret_value__19620__auto__ = (function (){try{while(true){
var result__19621__auto__ = switch__19618__auto__.call(null,state_25403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19621__auto__;
}
break;
}
}catch (e25415){if((e25415 instanceof Object)){
var ex__19622__auto__ = e25415;
var statearr_25416_25569 = state_25403;
(statearr_25416_25569[(5)] = ex__19622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25570 = state_25403;
state_25403 = G__25570;
continue;
} else {
return ret_value__19620__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19619__auto__ = function(state_25403){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19619__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19619__auto____1.call(this,state_25403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19619__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19619__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19619__auto__;
})()
;})(__25559,switch__19618__auto__,c__19639__auto___25562,G__25390_25560,n__17261__auto___25558,jobs,results,process,async))
})();
var state__19641__auto__ = (function (){var statearr_25417 = f__19640__auto__.call(null);
(statearr_25417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19639__auto___25562);

return statearr_25417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19641__auto__);
});})(__25559,c__19639__auto___25562,G__25390_25560,n__17261__auto___25558,jobs,results,process,async))
);


break;
case "async":
var c__19639__auto___25571 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25559,c__19639__auto___25571,G__25390_25560,n__17261__auto___25558,jobs,results,process,async){
return (function (){
var f__19640__auto__ = (function (){var switch__19618__auto__ = ((function (__25559,c__19639__auto___25571,G__25390_25560,n__17261__auto___25558,jobs,results,process,async){
return (function (state_25430){
var state_val_25431 = (state_25430[(1)]);
if((state_val_25431 === (1))){
var state_25430__$1 = state_25430;
var statearr_25432_25572 = state_25430__$1;
(statearr_25432_25572[(2)] = null);

(statearr_25432_25572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25431 === (2))){
var state_25430__$1 = state_25430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25430__$1,(4),jobs);
} else {
if((state_val_25431 === (3))){
var inst_25428 = (state_25430[(2)]);
var state_25430__$1 = state_25430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25430__$1,inst_25428);
} else {
if((state_val_25431 === (4))){
var inst_25420 = (state_25430[(2)]);
var inst_25421 = async.call(null,inst_25420);
var state_25430__$1 = state_25430;
if(cljs.core.truth_(inst_25421)){
var statearr_25433_25573 = state_25430__$1;
(statearr_25433_25573[(1)] = (5));

} else {
var statearr_25434_25574 = state_25430__$1;
(statearr_25434_25574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25431 === (5))){
var state_25430__$1 = state_25430;
var statearr_25435_25575 = state_25430__$1;
(statearr_25435_25575[(2)] = null);

(statearr_25435_25575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25431 === (6))){
var state_25430__$1 = state_25430;
var statearr_25436_25576 = state_25430__$1;
(statearr_25436_25576[(2)] = null);

(statearr_25436_25576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25431 === (7))){
var inst_25426 = (state_25430[(2)]);
var state_25430__$1 = state_25430;
var statearr_25437_25577 = state_25430__$1;
(statearr_25437_25577[(2)] = inst_25426);

(statearr_25437_25577[(1)] = (3));


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
});})(__25559,c__19639__auto___25571,G__25390_25560,n__17261__auto___25558,jobs,results,process,async))
;
return ((function (__25559,switch__19618__auto__,c__19639__auto___25571,G__25390_25560,n__17261__auto___25558,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19619__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19619__auto____0 = (function (){
var statearr_25441 = [null,null,null,null,null,null,null];
(statearr_25441[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19619__auto__);

(statearr_25441[(1)] = (1));

return statearr_25441;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19619__auto____1 = (function (state_25430){
while(true){
var ret_value__19620__auto__ = (function (){try{while(true){
var result__19621__auto__ = switch__19618__auto__.call(null,state_25430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19621__auto__;
}
break;
}
}catch (e25442){if((e25442 instanceof Object)){
var ex__19622__auto__ = e25442;
var statearr_25443_25578 = state_25430;
(statearr_25443_25578[(5)] = ex__19622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25579 = state_25430;
state_25430 = G__25579;
continue;
} else {
return ret_value__19620__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19619__auto__ = function(state_25430){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19619__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19619__auto____1.call(this,state_25430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19619__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19619__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19619__auto__;
})()
;})(__25559,switch__19618__auto__,c__19639__auto___25571,G__25390_25560,n__17261__auto___25558,jobs,results,process,async))
})();
var state__19641__auto__ = (function (){var statearr_25444 = f__19640__auto__.call(null);
(statearr_25444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19639__auto___25571);

return statearr_25444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19641__auto__);
});})(__25559,c__19639__auto___25571,G__25390_25560,n__17261__auto___25558,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25580 = (__25559 + (1));
__25559 = G__25580;
continue;
} else {
}
break;
}

var c__19639__auto___25581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19639__auto___25581,jobs,results,process,async){
return (function (){
var f__19640__auto__ = (function (){var switch__19618__auto__ = ((function (c__19639__auto___25581,jobs,results,process,async){
return (function (state_25466){
var state_val_25467 = (state_25466[(1)]);
if((state_val_25467 === (1))){
var state_25466__$1 = state_25466;
var statearr_25468_25582 = state_25466__$1;
(statearr_25468_25582[(2)] = null);

(statearr_25468_25582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (2))){
var state_25466__$1 = state_25466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25466__$1,(4),from);
} else {
if((state_val_25467 === (3))){
var inst_25464 = (state_25466[(2)]);
var state_25466__$1 = state_25466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25466__$1,inst_25464);
} else {
if((state_val_25467 === (4))){
var inst_25447 = (state_25466[(7)]);
var inst_25447__$1 = (state_25466[(2)]);
var inst_25448 = (inst_25447__$1 == null);
var state_25466__$1 = (function (){var statearr_25469 = state_25466;
(statearr_25469[(7)] = inst_25447__$1);

return statearr_25469;
})();
if(cljs.core.truth_(inst_25448)){
var statearr_25470_25583 = state_25466__$1;
(statearr_25470_25583[(1)] = (5));

} else {
var statearr_25471_25584 = state_25466__$1;
(statearr_25471_25584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (5))){
var inst_25450 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25466__$1 = state_25466;
var statearr_25472_25585 = state_25466__$1;
(statearr_25472_25585[(2)] = inst_25450);

(statearr_25472_25585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (6))){
var inst_25447 = (state_25466[(7)]);
var inst_25452 = (state_25466[(8)]);
var inst_25452__$1 = cljs.core.async.chan.call(null,(1));
var inst_25453 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25454 = [inst_25447,inst_25452__$1];
var inst_25455 = (new cljs.core.PersistentVector(null,2,(5),inst_25453,inst_25454,null));
var state_25466__$1 = (function (){var statearr_25473 = state_25466;
(statearr_25473[(8)] = inst_25452__$1);

return statearr_25473;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25466__$1,(8),jobs,inst_25455);
} else {
if((state_val_25467 === (7))){
var inst_25462 = (state_25466[(2)]);
var state_25466__$1 = state_25466;
var statearr_25474_25586 = state_25466__$1;
(statearr_25474_25586[(2)] = inst_25462);

(statearr_25474_25586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (8))){
var inst_25452 = (state_25466[(8)]);
var inst_25457 = (state_25466[(2)]);
var state_25466__$1 = (function (){var statearr_25475 = state_25466;
(statearr_25475[(9)] = inst_25457);

return statearr_25475;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25466__$1,(9),results,inst_25452);
} else {
if((state_val_25467 === (9))){
var inst_25459 = (state_25466[(2)]);
var state_25466__$1 = (function (){var statearr_25476 = state_25466;
(statearr_25476[(10)] = inst_25459);

return statearr_25476;
})();
var statearr_25477_25587 = state_25466__$1;
(statearr_25477_25587[(2)] = null);

(statearr_25477_25587[(1)] = (2));


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
});})(c__19639__auto___25581,jobs,results,process,async))
;
return ((function (switch__19618__auto__,c__19639__auto___25581,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19619__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19619__auto____0 = (function (){
var statearr_25481 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25481[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19619__auto__);

(statearr_25481[(1)] = (1));

return statearr_25481;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19619__auto____1 = (function (state_25466){
while(true){
var ret_value__19620__auto__ = (function (){try{while(true){
var result__19621__auto__ = switch__19618__auto__.call(null,state_25466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19621__auto__;
}
break;
}
}catch (e25482){if((e25482 instanceof Object)){
var ex__19622__auto__ = e25482;
var statearr_25483_25588 = state_25466;
(statearr_25483_25588[(5)] = ex__19622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25589 = state_25466;
state_25466 = G__25589;
continue;
} else {
return ret_value__19620__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19619__auto__ = function(state_25466){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19619__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19619__auto____1.call(this,state_25466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19619__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19619__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19619__auto__;
})()
;})(switch__19618__auto__,c__19639__auto___25581,jobs,results,process,async))
})();
var state__19641__auto__ = (function (){var statearr_25484 = f__19640__auto__.call(null);
(statearr_25484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19639__auto___25581);

return statearr_25484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19641__auto__);
});})(c__19639__auto___25581,jobs,results,process,async))
);


var c__19639__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19639__auto__,jobs,results,process,async){
return (function (){
var f__19640__auto__ = (function (){var switch__19618__auto__ = ((function (c__19639__auto__,jobs,results,process,async){
return (function (state_25522){
var state_val_25523 = (state_25522[(1)]);
if((state_val_25523 === (7))){
var inst_25518 = (state_25522[(2)]);
var state_25522__$1 = state_25522;
var statearr_25524_25590 = state_25522__$1;
(statearr_25524_25590[(2)] = inst_25518);

(statearr_25524_25590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (20))){
var state_25522__$1 = state_25522;
var statearr_25525_25591 = state_25522__$1;
(statearr_25525_25591[(2)] = null);

(statearr_25525_25591[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (1))){
var state_25522__$1 = state_25522;
var statearr_25526_25592 = state_25522__$1;
(statearr_25526_25592[(2)] = null);

(statearr_25526_25592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (4))){
var inst_25487 = (state_25522[(7)]);
var inst_25487__$1 = (state_25522[(2)]);
var inst_25488 = (inst_25487__$1 == null);
var state_25522__$1 = (function (){var statearr_25527 = state_25522;
(statearr_25527[(7)] = inst_25487__$1);

return statearr_25527;
})();
if(cljs.core.truth_(inst_25488)){
var statearr_25528_25593 = state_25522__$1;
(statearr_25528_25593[(1)] = (5));

} else {
var statearr_25529_25594 = state_25522__$1;
(statearr_25529_25594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (15))){
var inst_25500 = (state_25522[(8)]);
var state_25522__$1 = state_25522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25522__$1,(18),to,inst_25500);
} else {
if((state_val_25523 === (21))){
var inst_25513 = (state_25522[(2)]);
var state_25522__$1 = state_25522;
var statearr_25530_25595 = state_25522__$1;
(statearr_25530_25595[(2)] = inst_25513);

(statearr_25530_25595[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (13))){
var inst_25515 = (state_25522[(2)]);
var state_25522__$1 = (function (){var statearr_25531 = state_25522;
(statearr_25531[(9)] = inst_25515);

return statearr_25531;
})();
var statearr_25532_25596 = state_25522__$1;
(statearr_25532_25596[(2)] = null);

(statearr_25532_25596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (6))){
var inst_25487 = (state_25522[(7)]);
var state_25522__$1 = state_25522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25522__$1,(11),inst_25487);
} else {
if((state_val_25523 === (17))){
var inst_25508 = (state_25522[(2)]);
var state_25522__$1 = state_25522;
if(cljs.core.truth_(inst_25508)){
var statearr_25533_25597 = state_25522__$1;
(statearr_25533_25597[(1)] = (19));

} else {
var statearr_25534_25598 = state_25522__$1;
(statearr_25534_25598[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (3))){
var inst_25520 = (state_25522[(2)]);
var state_25522__$1 = state_25522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25522__$1,inst_25520);
} else {
if((state_val_25523 === (12))){
var inst_25497 = (state_25522[(10)]);
var state_25522__$1 = state_25522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25522__$1,(14),inst_25497);
} else {
if((state_val_25523 === (2))){
var state_25522__$1 = state_25522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25522__$1,(4),results);
} else {
if((state_val_25523 === (19))){
var state_25522__$1 = state_25522;
var statearr_25535_25599 = state_25522__$1;
(statearr_25535_25599[(2)] = null);

(statearr_25535_25599[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (11))){
var inst_25497 = (state_25522[(2)]);
var state_25522__$1 = (function (){var statearr_25536 = state_25522;
(statearr_25536[(10)] = inst_25497);

return statearr_25536;
})();
var statearr_25537_25600 = state_25522__$1;
(statearr_25537_25600[(2)] = null);

(statearr_25537_25600[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (9))){
var state_25522__$1 = state_25522;
var statearr_25538_25601 = state_25522__$1;
(statearr_25538_25601[(2)] = null);

(statearr_25538_25601[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (5))){
var state_25522__$1 = state_25522;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25539_25602 = state_25522__$1;
(statearr_25539_25602[(1)] = (8));

} else {
var statearr_25540_25603 = state_25522__$1;
(statearr_25540_25603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (14))){
var inst_25502 = (state_25522[(11)]);
var inst_25500 = (state_25522[(8)]);
var inst_25500__$1 = (state_25522[(2)]);
var inst_25501 = (inst_25500__$1 == null);
var inst_25502__$1 = cljs.core.not.call(null,inst_25501);
var state_25522__$1 = (function (){var statearr_25541 = state_25522;
(statearr_25541[(11)] = inst_25502__$1);

(statearr_25541[(8)] = inst_25500__$1);

return statearr_25541;
})();
if(inst_25502__$1){
var statearr_25542_25604 = state_25522__$1;
(statearr_25542_25604[(1)] = (15));

} else {
var statearr_25543_25605 = state_25522__$1;
(statearr_25543_25605[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (16))){
var inst_25502 = (state_25522[(11)]);
var state_25522__$1 = state_25522;
var statearr_25544_25606 = state_25522__$1;
(statearr_25544_25606[(2)] = inst_25502);

(statearr_25544_25606[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (10))){
var inst_25494 = (state_25522[(2)]);
var state_25522__$1 = state_25522;
var statearr_25545_25607 = state_25522__$1;
(statearr_25545_25607[(2)] = inst_25494);

(statearr_25545_25607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (18))){
var inst_25505 = (state_25522[(2)]);
var state_25522__$1 = state_25522;
var statearr_25546_25608 = state_25522__$1;
(statearr_25546_25608[(2)] = inst_25505);

(statearr_25546_25608[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (8))){
var inst_25491 = cljs.core.async.close_BANG_.call(null,to);
var state_25522__$1 = state_25522;
var statearr_25547_25609 = state_25522__$1;
(statearr_25547_25609[(2)] = inst_25491);

(statearr_25547_25609[(1)] = (10));


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
});})(c__19639__auto__,jobs,results,process,async))
;
return ((function (switch__19618__auto__,c__19639__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19619__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19619__auto____0 = (function (){
var statearr_25551 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25551[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19619__auto__);

(statearr_25551[(1)] = (1));

return statearr_25551;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19619__auto____1 = (function (state_25522){
while(true){
var ret_value__19620__auto__ = (function (){try{while(true){
var result__19621__auto__ = switch__19618__auto__.call(null,state_25522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19621__auto__;
}
break;
}
}catch (e25552){if((e25552 instanceof Object)){
var ex__19622__auto__ = e25552;
var statearr_25553_25610 = state_25522;
(statearr_25553_25610[(5)] = ex__19622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25611 = state_25522;
state_25522 = G__25611;
continue;
} else {
return ret_value__19620__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19619__auto__ = function(state_25522){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19619__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19619__auto____1.call(this,state_25522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19619__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19619__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19619__auto__;
})()
;})(switch__19618__auto__,c__19639__auto__,jobs,results,process,async))
})();
var state__19641__auto__ = (function (){var statearr_25554 = f__19640__auto__.call(null);
(statearr_25554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19639__auto__);

return statearr_25554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19641__auto__);
});})(c__19639__auto__,jobs,results,process,async))
);

return c__19639__auto__;
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
var args25612 = [];
var len__17416__auto___25615 = arguments.length;
var i__17417__auto___25616 = (0);
while(true){
if((i__17417__auto___25616 < len__17416__auto___25615)){
args25612.push((arguments[i__17417__auto___25616]));

var G__25617 = (i__17417__auto___25616 + (1));
i__17417__auto___25616 = G__25617;
continue;
} else {
}
break;
}

var G__25614 = args25612.length;
switch (G__25614) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25612.length)].join('')));

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
var args25619 = [];
var len__17416__auto___25622 = arguments.length;
var i__17417__auto___25623 = (0);
while(true){
if((i__17417__auto___25623 < len__17416__auto___25622)){
args25619.push((arguments[i__17417__auto___25623]));

var G__25624 = (i__17417__auto___25623 + (1));
i__17417__auto___25623 = G__25624;
continue;
} else {
}
break;
}

var G__25621 = args25619.length;
switch (G__25621) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25619.length)].join('')));

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
var args25626 = [];
var len__17416__auto___25679 = arguments.length;
var i__17417__auto___25680 = (0);
while(true){
if((i__17417__auto___25680 < len__17416__auto___25679)){
args25626.push((arguments[i__17417__auto___25680]));

var G__25681 = (i__17417__auto___25680 + (1));
i__17417__auto___25680 = G__25681;
continue;
} else {
}
break;
}

var G__25628 = args25626.length;
switch (G__25628) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25626.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19639__auto___25683 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19639__auto___25683,tc,fc){
return (function (){
var f__19640__auto__ = (function (){var switch__19618__auto__ = ((function (c__19639__auto___25683,tc,fc){
return (function (state_25654){
var state_val_25655 = (state_25654[(1)]);
if((state_val_25655 === (7))){
var inst_25650 = (state_25654[(2)]);
var state_25654__$1 = state_25654;
var statearr_25656_25684 = state_25654__$1;
(statearr_25656_25684[(2)] = inst_25650);

(statearr_25656_25684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25655 === (1))){
var state_25654__$1 = state_25654;
var statearr_25657_25685 = state_25654__$1;
(statearr_25657_25685[(2)] = null);

(statearr_25657_25685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25655 === (4))){
var inst_25631 = (state_25654[(7)]);
var inst_25631__$1 = (state_25654[(2)]);
var inst_25632 = (inst_25631__$1 == null);
var state_25654__$1 = (function (){var statearr_25658 = state_25654;
(statearr_25658[(7)] = inst_25631__$1);

return statearr_25658;
})();
if(cljs.core.truth_(inst_25632)){
var statearr_25659_25686 = state_25654__$1;
(statearr_25659_25686[(1)] = (5));

} else {
var statearr_25660_25687 = state_25654__$1;
(statearr_25660_25687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25655 === (13))){
var state_25654__$1 = state_25654;
var statearr_25661_25688 = state_25654__$1;
(statearr_25661_25688[(2)] = null);

(statearr_25661_25688[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25655 === (6))){
var inst_25631 = (state_25654[(7)]);
var inst_25637 = p.call(null,inst_25631);
var state_25654__$1 = state_25654;
if(cljs.core.truth_(inst_25637)){
var statearr_25662_25689 = state_25654__$1;
(statearr_25662_25689[(1)] = (9));

} else {
var statearr_25663_25690 = state_25654__$1;
(statearr_25663_25690[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25655 === (3))){
var inst_25652 = (state_25654[(2)]);
var state_25654__$1 = state_25654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25654__$1,inst_25652);
} else {
if((state_val_25655 === (12))){
var state_25654__$1 = state_25654;
var statearr_25664_25691 = state_25654__$1;
(statearr_25664_25691[(2)] = null);

(statearr_25664_25691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25655 === (2))){
var state_25654__$1 = state_25654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25654__$1,(4),ch);
} else {
if((state_val_25655 === (11))){
var inst_25631 = (state_25654[(7)]);
var inst_25641 = (state_25654[(2)]);
var state_25654__$1 = state_25654;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25654__$1,(8),inst_25641,inst_25631);
} else {
if((state_val_25655 === (9))){
var state_25654__$1 = state_25654;
var statearr_25665_25692 = state_25654__$1;
(statearr_25665_25692[(2)] = tc);

(statearr_25665_25692[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25655 === (5))){
var inst_25634 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25635 = cljs.core.async.close_BANG_.call(null,fc);
var state_25654__$1 = (function (){var statearr_25666 = state_25654;
(statearr_25666[(8)] = inst_25634);

return statearr_25666;
})();
var statearr_25667_25693 = state_25654__$1;
(statearr_25667_25693[(2)] = inst_25635);

(statearr_25667_25693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25655 === (14))){
var inst_25648 = (state_25654[(2)]);
var state_25654__$1 = state_25654;
var statearr_25668_25694 = state_25654__$1;
(statearr_25668_25694[(2)] = inst_25648);

(statearr_25668_25694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25655 === (10))){
var state_25654__$1 = state_25654;
var statearr_25669_25695 = state_25654__$1;
(statearr_25669_25695[(2)] = fc);

(statearr_25669_25695[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25655 === (8))){
var inst_25643 = (state_25654[(2)]);
var state_25654__$1 = state_25654;
if(cljs.core.truth_(inst_25643)){
var statearr_25670_25696 = state_25654__$1;
(statearr_25670_25696[(1)] = (12));

} else {
var statearr_25671_25697 = state_25654__$1;
(statearr_25671_25697[(1)] = (13));

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
});})(c__19639__auto___25683,tc,fc))
;
return ((function (switch__19618__auto__,c__19639__auto___25683,tc,fc){
return (function() {
var cljs$core$async$state_machine__19619__auto__ = null;
var cljs$core$async$state_machine__19619__auto____0 = (function (){
var statearr_25675 = [null,null,null,null,null,null,null,null,null];
(statearr_25675[(0)] = cljs$core$async$state_machine__19619__auto__);

(statearr_25675[(1)] = (1));

return statearr_25675;
});
var cljs$core$async$state_machine__19619__auto____1 = (function (state_25654){
while(true){
var ret_value__19620__auto__ = (function (){try{while(true){
var result__19621__auto__ = switch__19618__auto__.call(null,state_25654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19621__auto__;
}
break;
}
}catch (e25676){if((e25676 instanceof Object)){
var ex__19622__auto__ = e25676;
var statearr_25677_25698 = state_25654;
(statearr_25677_25698[(5)] = ex__19622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25699 = state_25654;
state_25654 = G__25699;
continue;
} else {
return ret_value__19620__auto__;
}
break;
}
});
cljs$core$async$state_machine__19619__auto__ = function(state_25654){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19619__auto____1.call(this,state_25654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19619__auto____0;
cljs$core$async$state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19619__auto____1;
return cljs$core$async$state_machine__19619__auto__;
})()
;})(switch__19618__auto__,c__19639__auto___25683,tc,fc))
})();
var state__19641__auto__ = (function (){var statearr_25678 = f__19640__auto__.call(null);
(statearr_25678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19639__auto___25683);

return statearr_25678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19641__auto__);
});})(c__19639__auto___25683,tc,fc))
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
var c__19639__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19639__auto__){
return (function (){
var f__19640__auto__ = (function (){var switch__19618__auto__ = ((function (c__19639__auto__){
return (function (state_25746){
var state_val_25747 = (state_25746[(1)]);
if((state_val_25747 === (1))){
var inst_25732 = init;
var state_25746__$1 = (function (){var statearr_25748 = state_25746;
(statearr_25748[(7)] = inst_25732);

return statearr_25748;
})();
var statearr_25749_25764 = state_25746__$1;
(statearr_25749_25764[(2)] = null);

(statearr_25749_25764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25747 === (2))){
var state_25746__$1 = state_25746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25746__$1,(4),ch);
} else {
if((state_val_25747 === (3))){
var inst_25744 = (state_25746[(2)]);
var state_25746__$1 = state_25746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25746__$1,inst_25744);
} else {
if((state_val_25747 === (4))){
var inst_25735 = (state_25746[(8)]);
var inst_25735__$1 = (state_25746[(2)]);
var inst_25736 = (inst_25735__$1 == null);
var state_25746__$1 = (function (){var statearr_25750 = state_25746;
(statearr_25750[(8)] = inst_25735__$1);

return statearr_25750;
})();
if(cljs.core.truth_(inst_25736)){
var statearr_25751_25765 = state_25746__$1;
(statearr_25751_25765[(1)] = (5));

} else {
var statearr_25752_25766 = state_25746__$1;
(statearr_25752_25766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25747 === (5))){
var inst_25732 = (state_25746[(7)]);
var state_25746__$1 = state_25746;
var statearr_25753_25767 = state_25746__$1;
(statearr_25753_25767[(2)] = inst_25732);

(statearr_25753_25767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25747 === (6))){
var inst_25735 = (state_25746[(8)]);
var inst_25732 = (state_25746[(7)]);
var inst_25739 = f.call(null,inst_25732,inst_25735);
var inst_25732__$1 = inst_25739;
var state_25746__$1 = (function (){var statearr_25754 = state_25746;
(statearr_25754[(7)] = inst_25732__$1);

return statearr_25754;
})();
var statearr_25755_25768 = state_25746__$1;
(statearr_25755_25768[(2)] = null);

(statearr_25755_25768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25747 === (7))){
var inst_25742 = (state_25746[(2)]);
var state_25746__$1 = state_25746;
var statearr_25756_25769 = state_25746__$1;
(statearr_25756_25769[(2)] = inst_25742);

(statearr_25756_25769[(1)] = (3));


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
});})(c__19639__auto__))
;
return ((function (switch__19618__auto__,c__19639__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19619__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19619__auto____0 = (function (){
var statearr_25760 = [null,null,null,null,null,null,null,null,null];
(statearr_25760[(0)] = cljs$core$async$reduce_$_state_machine__19619__auto__);

(statearr_25760[(1)] = (1));

return statearr_25760;
});
var cljs$core$async$reduce_$_state_machine__19619__auto____1 = (function (state_25746){
while(true){
var ret_value__19620__auto__ = (function (){try{while(true){
var result__19621__auto__ = switch__19618__auto__.call(null,state_25746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19621__auto__;
}
break;
}
}catch (e25761){if((e25761 instanceof Object)){
var ex__19622__auto__ = e25761;
var statearr_25762_25770 = state_25746;
(statearr_25762_25770[(5)] = ex__19622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25771 = state_25746;
state_25746 = G__25771;
continue;
} else {
return ret_value__19620__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19619__auto__ = function(state_25746){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19619__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19619__auto____1.call(this,state_25746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19619__auto____0;
cljs$core$async$reduce_$_state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19619__auto____1;
return cljs$core$async$reduce_$_state_machine__19619__auto__;
})()
;})(switch__19618__auto__,c__19639__auto__))
})();
var state__19641__auto__ = (function (){var statearr_25763 = f__19640__auto__.call(null);
(statearr_25763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19639__auto__);

return statearr_25763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19641__auto__);
});})(c__19639__auto__))
);

return c__19639__auto__;
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
var args25772 = [];
var len__17416__auto___25824 = arguments.length;
var i__17417__auto___25825 = (0);
while(true){
if((i__17417__auto___25825 < len__17416__auto___25824)){
args25772.push((arguments[i__17417__auto___25825]));

var G__25826 = (i__17417__auto___25825 + (1));
i__17417__auto___25825 = G__25826;
continue;
} else {
}
break;
}

var G__25774 = args25772.length;
switch (G__25774) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25772.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19639__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19639__auto__){
return (function (){
var f__19640__auto__ = (function (){var switch__19618__auto__ = ((function (c__19639__auto__){
return (function (state_25799){
var state_val_25800 = (state_25799[(1)]);
if((state_val_25800 === (7))){
var inst_25781 = (state_25799[(2)]);
var state_25799__$1 = state_25799;
var statearr_25801_25828 = state_25799__$1;
(statearr_25801_25828[(2)] = inst_25781);

(statearr_25801_25828[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (1))){
var inst_25775 = cljs.core.seq.call(null,coll);
var inst_25776 = inst_25775;
var state_25799__$1 = (function (){var statearr_25802 = state_25799;
(statearr_25802[(7)] = inst_25776);

return statearr_25802;
})();
var statearr_25803_25829 = state_25799__$1;
(statearr_25803_25829[(2)] = null);

(statearr_25803_25829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (4))){
var inst_25776 = (state_25799[(7)]);
var inst_25779 = cljs.core.first.call(null,inst_25776);
var state_25799__$1 = state_25799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25799__$1,(7),ch,inst_25779);
} else {
if((state_val_25800 === (13))){
var inst_25793 = (state_25799[(2)]);
var state_25799__$1 = state_25799;
var statearr_25804_25830 = state_25799__$1;
(statearr_25804_25830[(2)] = inst_25793);

(statearr_25804_25830[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (6))){
var inst_25784 = (state_25799[(2)]);
var state_25799__$1 = state_25799;
if(cljs.core.truth_(inst_25784)){
var statearr_25805_25831 = state_25799__$1;
(statearr_25805_25831[(1)] = (8));

} else {
var statearr_25806_25832 = state_25799__$1;
(statearr_25806_25832[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (3))){
var inst_25797 = (state_25799[(2)]);
var state_25799__$1 = state_25799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25799__$1,inst_25797);
} else {
if((state_val_25800 === (12))){
var state_25799__$1 = state_25799;
var statearr_25807_25833 = state_25799__$1;
(statearr_25807_25833[(2)] = null);

(statearr_25807_25833[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (2))){
var inst_25776 = (state_25799[(7)]);
var state_25799__$1 = state_25799;
if(cljs.core.truth_(inst_25776)){
var statearr_25808_25834 = state_25799__$1;
(statearr_25808_25834[(1)] = (4));

} else {
var statearr_25809_25835 = state_25799__$1;
(statearr_25809_25835[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (11))){
var inst_25790 = cljs.core.async.close_BANG_.call(null,ch);
var state_25799__$1 = state_25799;
var statearr_25810_25836 = state_25799__$1;
(statearr_25810_25836[(2)] = inst_25790);

(statearr_25810_25836[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (9))){
var state_25799__$1 = state_25799;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25811_25837 = state_25799__$1;
(statearr_25811_25837[(1)] = (11));

} else {
var statearr_25812_25838 = state_25799__$1;
(statearr_25812_25838[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (5))){
var inst_25776 = (state_25799[(7)]);
var state_25799__$1 = state_25799;
var statearr_25813_25839 = state_25799__$1;
(statearr_25813_25839[(2)] = inst_25776);

(statearr_25813_25839[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (10))){
var inst_25795 = (state_25799[(2)]);
var state_25799__$1 = state_25799;
var statearr_25814_25840 = state_25799__$1;
(statearr_25814_25840[(2)] = inst_25795);

(statearr_25814_25840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (8))){
var inst_25776 = (state_25799[(7)]);
var inst_25786 = cljs.core.next.call(null,inst_25776);
var inst_25776__$1 = inst_25786;
var state_25799__$1 = (function (){var statearr_25815 = state_25799;
(statearr_25815[(7)] = inst_25776__$1);

return statearr_25815;
})();
var statearr_25816_25841 = state_25799__$1;
(statearr_25816_25841[(2)] = null);

(statearr_25816_25841[(1)] = (2));


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
});})(c__19639__auto__))
;
return ((function (switch__19618__auto__,c__19639__auto__){
return (function() {
var cljs$core$async$state_machine__19619__auto__ = null;
var cljs$core$async$state_machine__19619__auto____0 = (function (){
var statearr_25820 = [null,null,null,null,null,null,null,null];
(statearr_25820[(0)] = cljs$core$async$state_machine__19619__auto__);

(statearr_25820[(1)] = (1));

return statearr_25820;
});
var cljs$core$async$state_machine__19619__auto____1 = (function (state_25799){
while(true){
var ret_value__19620__auto__ = (function (){try{while(true){
var result__19621__auto__ = switch__19618__auto__.call(null,state_25799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19621__auto__;
}
break;
}
}catch (e25821){if((e25821 instanceof Object)){
var ex__19622__auto__ = e25821;
var statearr_25822_25842 = state_25799;
(statearr_25822_25842[(5)] = ex__19622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25843 = state_25799;
state_25799 = G__25843;
continue;
} else {
return ret_value__19620__auto__;
}
break;
}
});
cljs$core$async$state_machine__19619__auto__ = function(state_25799){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19619__auto____1.call(this,state_25799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19619__auto____0;
cljs$core$async$state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19619__auto____1;
return cljs$core$async$state_machine__19619__auto__;
})()
;})(switch__19618__auto__,c__19639__auto__))
})();
var state__19641__auto__ = (function (){var statearr_25823 = f__19640__auto__.call(null);
(statearr_25823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19639__auto__);

return statearr_25823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19641__auto__);
});})(c__19639__auto__))
);

return c__19639__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async26065 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26065 = (function (mult,ch,cs,meta26066){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta26066 = meta26066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26067,meta26066__$1){
var self__ = this;
var _26067__$1 = this;
return (new cljs.core.async.t_cljs$core$async26065(self__.mult,self__.ch,self__.cs,meta26066__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26067){
var self__ = this;
var _26067__$1 = this;
return self__.meta26066;
});})(cs))
;

cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26065.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26066","meta26066",-810905774,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26065.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26065";

cljs.core.async.t_cljs$core$async26065.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async26065");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async26065 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26065(mult__$1,ch__$1,cs__$1,meta26066){
return (new cljs.core.async.t_cljs$core$async26065(mult__$1,ch__$1,cs__$1,meta26066));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26065(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19639__auto___26286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19639__auto___26286,cs,m,dchan,dctr,done){
return (function (){
var f__19640__auto__ = (function (){var switch__19618__auto__ = ((function (c__19639__auto___26286,cs,m,dchan,dctr,done){
return (function (state_26198){
var state_val_26199 = (state_26198[(1)]);
if((state_val_26199 === (7))){
var inst_26194 = (state_26198[(2)]);
var state_26198__$1 = state_26198;
var statearr_26200_26287 = state_26198__$1;
(statearr_26200_26287[(2)] = inst_26194);

(statearr_26200_26287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (20))){
var inst_26099 = (state_26198[(7)]);
var inst_26109 = cljs.core.first.call(null,inst_26099);
var inst_26110 = cljs.core.nth.call(null,inst_26109,(0),null);
var inst_26111 = cljs.core.nth.call(null,inst_26109,(1),null);
var state_26198__$1 = (function (){var statearr_26201 = state_26198;
(statearr_26201[(8)] = inst_26110);

return statearr_26201;
})();
if(cljs.core.truth_(inst_26111)){
var statearr_26202_26288 = state_26198__$1;
(statearr_26202_26288[(1)] = (22));

} else {
var statearr_26203_26289 = state_26198__$1;
(statearr_26203_26289[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (27))){
var inst_26139 = (state_26198[(9)]);
var inst_26146 = (state_26198[(10)]);
var inst_26070 = (state_26198[(11)]);
var inst_26141 = (state_26198[(12)]);
var inst_26146__$1 = cljs.core._nth.call(null,inst_26139,inst_26141);
var inst_26147 = cljs.core.async.put_BANG_.call(null,inst_26146__$1,inst_26070,done);
var state_26198__$1 = (function (){var statearr_26204 = state_26198;
(statearr_26204[(10)] = inst_26146__$1);

return statearr_26204;
})();
if(cljs.core.truth_(inst_26147)){
var statearr_26205_26290 = state_26198__$1;
(statearr_26205_26290[(1)] = (30));

} else {
var statearr_26206_26291 = state_26198__$1;
(statearr_26206_26291[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (1))){
var state_26198__$1 = state_26198;
var statearr_26207_26292 = state_26198__$1;
(statearr_26207_26292[(2)] = null);

(statearr_26207_26292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (24))){
var inst_26099 = (state_26198[(7)]);
var inst_26116 = (state_26198[(2)]);
var inst_26117 = cljs.core.next.call(null,inst_26099);
var inst_26079 = inst_26117;
var inst_26080 = null;
var inst_26081 = (0);
var inst_26082 = (0);
var state_26198__$1 = (function (){var statearr_26208 = state_26198;
(statearr_26208[(13)] = inst_26116);

(statearr_26208[(14)] = inst_26082);

(statearr_26208[(15)] = inst_26081);

(statearr_26208[(16)] = inst_26080);

(statearr_26208[(17)] = inst_26079);

return statearr_26208;
})();
var statearr_26209_26293 = state_26198__$1;
(statearr_26209_26293[(2)] = null);

(statearr_26209_26293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (39))){
var state_26198__$1 = state_26198;
var statearr_26213_26294 = state_26198__$1;
(statearr_26213_26294[(2)] = null);

(statearr_26213_26294[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (4))){
var inst_26070 = (state_26198[(11)]);
var inst_26070__$1 = (state_26198[(2)]);
var inst_26071 = (inst_26070__$1 == null);
var state_26198__$1 = (function (){var statearr_26214 = state_26198;
(statearr_26214[(11)] = inst_26070__$1);

return statearr_26214;
})();
if(cljs.core.truth_(inst_26071)){
var statearr_26215_26295 = state_26198__$1;
(statearr_26215_26295[(1)] = (5));

} else {
var statearr_26216_26296 = state_26198__$1;
(statearr_26216_26296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (15))){
var inst_26082 = (state_26198[(14)]);
var inst_26081 = (state_26198[(15)]);
var inst_26080 = (state_26198[(16)]);
var inst_26079 = (state_26198[(17)]);
var inst_26095 = (state_26198[(2)]);
var inst_26096 = (inst_26082 + (1));
var tmp26210 = inst_26081;
var tmp26211 = inst_26080;
var tmp26212 = inst_26079;
var inst_26079__$1 = tmp26212;
var inst_26080__$1 = tmp26211;
var inst_26081__$1 = tmp26210;
var inst_26082__$1 = inst_26096;
var state_26198__$1 = (function (){var statearr_26217 = state_26198;
(statearr_26217[(18)] = inst_26095);

(statearr_26217[(14)] = inst_26082__$1);

(statearr_26217[(15)] = inst_26081__$1);

(statearr_26217[(16)] = inst_26080__$1);

(statearr_26217[(17)] = inst_26079__$1);

return statearr_26217;
})();
var statearr_26218_26297 = state_26198__$1;
(statearr_26218_26297[(2)] = null);

(statearr_26218_26297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (21))){
var inst_26120 = (state_26198[(2)]);
var state_26198__$1 = state_26198;
var statearr_26222_26298 = state_26198__$1;
(statearr_26222_26298[(2)] = inst_26120);

(statearr_26222_26298[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (31))){
var inst_26146 = (state_26198[(10)]);
var inst_26150 = done.call(null,null);
var inst_26151 = cljs.core.async.untap_STAR_.call(null,m,inst_26146);
var state_26198__$1 = (function (){var statearr_26223 = state_26198;
(statearr_26223[(19)] = inst_26150);

return statearr_26223;
})();
var statearr_26224_26299 = state_26198__$1;
(statearr_26224_26299[(2)] = inst_26151);

(statearr_26224_26299[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (32))){
var inst_26138 = (state_26198[(20)]);
var inst_26140 = (state_26198[(21)]);
var inst_26139 = (state_26198[(9)]);
var inst_26141 = (state_26198[(12)]);
var inst_26153 = (state_26198[(2)]);
var inst_26154 = (inst_26141 + (1));
var tmp26219 = inst_26138;
var tmp26220 = inst_26140;
var tmp26221 = inst_26139;
var inst_26138__$1 = tmp26219;
var inst_26139__$1 = tmp26221;
var inst_26140__$1 = tmp26220;
var inst_26141__$1 = inst_26154;
var state_26198__$1 = (function (){var statearr_26225 = state_26198;
(statearr_26225[(20)] = inst_26138__$1);

(statearr_26225[(21)] = inst_26140__$1);

(statearr_26225[(9)] = inst_26139__$1);

(statearr_26225[(22)] = inst_26153);

(statearr_26225[(12)] = inst_26141__$1);

return statearr_26225;
})();
var statearr_26226_26300 = state_26198__$1;
(statearr_26226_26300[(2)] = null);

(statearr_26226_26300[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (40))){
var inst_26166 = (state_26198[(23)]);
var inst_26170 = done.call(null,null);
var inst_26171 = cljs.core.async.untap_STAR_.call(null,m,inst_26166);
var state_26198__$1 = (function (){var statearr_26227 = state_26198;
(statearr_26227[(24)] = inst_26170);

return statearr_26227;
})();
var statearr_26228_26301 = state_26198__$1;
(statearr_26228_26301[(2)] = inst_26171);

(statearr_26228_26301[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (33))){
var inst_26157 = (state_26198[(25)]);
var inst_26159 = cljs.core.chunked_seq_QMARK_.call(null,inst_26157);
var state_26198__$1 = state_26198;
if(inst_26159){
var statearr_26229_26302 = state_26198__$1;
(statearr_26229_26302[(1)] = (36));

} else {
var statearr_26230_26303 = state_26198__$1;
(statearr_26230_26303[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (13))){
var inst_26089 = (state_26198[(26)]);
var inst_26092 = cljs.core.async.close_BANG_.call(null,inst_26089);
var state_26198__$1 = state_26198;
var statearr_26231_26304 = state_26198__$1;
(statearr_26231_26304[(2)] = inst_26092);

(statearr_26231_26304[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (22))){
var inst_26110 = (state_26198[(8)]);
var inst_26113 = cljs.core.async.close_BANG_.call(null,inst_26110);
var state_26198__$1 = state_26198;
var statearr_26232_26305 = state_26198__$1;
(statearr_26232_26305[(2)] = inst_26113);

(statearr_26232_26305[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (36))){
var inst_26157 = (state_26198[(25)]);
var inst_26161 = cljs.core.chunk_first.call(null,inst_26157);
var inst_26162 = cljs.core.chunk_rest.call(null,inst_26157);
var inst_26163 = cljs.core.count.call(null,inst_26161);
var inst_26138 = inst_26162;
var inst_26139 = inst_26161;
var inst_26140 = inst_26163;
var inst_26141 = (0);
var state_26198__$1 = (function (){var statearr_26233 = state_26198;
(statearr_26233[(20)] = inst_26138);

(statearr_26233[(21)] = inst_26140);

(statearr_26233[(9)] = inst_26139);

(statearr_26233[(12)] = inst_26141);

return statearr_26233;
})();
var statearr_26234_26306 = state_26198__$1;
(statearr_26234_26306[(2)] = null);

(statearr_26234_26306[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (41))){
var inst_26157 = (state_26198[(25)]);
var inst_26173 = (state_26198[(2)]);
var inst_26174 = cljs.core.next.call(null,inst_26157);
var inst_26138 = inst_26174;
var inst_26139 = null;
var inst_26140 = (0);
var inst_26141 = (0);
var state_26198__$1 = (function (){var statearr_26235 = state_26198;
(statearr_26235[(20)] = inst_26138);

(statearr_26235[(21)] = inst_26140);

(statearr_26235[(9)] = inst_26139);

(statearr_26235[(27)] = inst_26173);

(statearr_26235[(12)] = inst_26141);

return statearr_26235;
})();
var statearr_26236_26307 = state_26198__$1;
(statearr_26236_26307[(2)] = null);

(statearr_26236_26307[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (43))){
var state_26198__$1 = state_26198;
var statearr_26237_26308 = state_26198__$1;
(statearr_26237_26308[(2)] = null);

(statearr_26237_26308[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (29))){
var inst_26182 = (state_26198[(2)]);
var state_26198__$1 = state_26198;
var statearr_26238_26309 = state_26198__$1;
(statearr_26238_26309[(2)] = inst_26182);

(statearr_26238_26309[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (44))){
var inst_26191 = (state_26198[(2)]);
var state_26198__$1 = (function (){var statearr_26239 = state_26198;
(statearr_26239[(28)] = inst_26191);

return statearr_26239;
})();
var statearr_26240_26310 = state_26198__$1;
(statearr_26240_26310[(2)] = null);

(statearr_26240_26310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (6))){
var inst_26130 = (state_26198[(29)]);
var inst_26129 = cljs.core.deref.call(null,cs);
var inst_26130__$1 = cljs.core.keys.call(null,inst_26129);
var inst_26131 = cljs.core.count.call(null,inst_26130__$1);
var inst_26132 = cljs.core.reset_BANG_.call(null,dctr,inst_26131);
var inst_26137 = cljs.core.seq.call(null,inst_26130__$1);
var inst_26138 = inst_26137;
var inst_26139 = null;
var inst_26140 = (0);
var inst_26141 = (0);
var state_26198__$1 = (function (){var statearr_26241 = state_26198;
(statearr_26241[(20)] = inst_26138);

(statearr_26241[(21)] = inst_26140);

(statearr_26241[(30)] = inst_26132);

(statearr_26241[(9)] = inst_26139);

(statearr_26241[(12)] = inst_26141);

(statearr_26241[(29)] = inst_26130__$1);

return statearr_26241;
})();
var statearr_26242_26311 = state_26198__$1;
(statearr_26242_26311[(2)] = null);

(statearr_26242_26311[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (28))){
var inst_26138 = (state_26198[(20)]);
var inst_26157 = (state_26198[(25)]);
var inst_26157__$1 = cljs.core.seq.call(null,inst_26138);
var state_26198__$1 = (function (){var statearr_26243 = state_26198;
(statearr_26243[(25)] = inst_26157__$1);

return statearr_26243;
})();
if(inst_26157__$1){
var statearr_26244_26312 = state_26198__$1;
(statearr_26244_26312[(1)] = (33));

} else {
var statearr_26245_26313 = state_26198__$1;
(statearr_26245_26313[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (25))){
var inst_26140 = (state_26198[(21)]);
var inst_26141 = (state_26198[(12)]);
var inst_26143 = (inst_26141 < inst_26140);
var inst_26144 = inst_26143;
var state_26198__$1 = state_26198;
if(cljs.core.truth_(inst_26144)){
var statearr_26246_26314 = state_26198__$1;
(statearr_26246_26314[(1)] = (27));

} else {
var statearr_26247_26315 = state_26198__$1;
(statearr_26247_26315[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (34))){
var state_26198__$1 = state_26198;
var statearr_26248_26316 = state_26198__$1;
(statearr_26248_26316[(2)] = null);

(statearr_26248_26316[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (17))){
var state_26198__$1 = state_26198;
var statearr_26249_26317 = state_26198__$1;
(statearr_26249_26317[(2)] = null);

(statearr_26249_26317[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (3))){
var inst_26196 = (state_26198[(2)]);
var state_26198__$1 = state_26198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26198__$1,inst_26196);
} else {
if((state_val_26199 === (12))){
var inst_26125 = (state_26198[(2)]);
var state_26198__$1 = state_26198;
var statearr_26250_26318 = state_26198__$1;
(statearr_26250_26318[(2)] = inst_26125);

(statearr_26250_26318[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (2))){
var state_26198__$1 = state_26198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26198__$1,(4),ch);
} else {
if((state_val_26199 === (23))){
var state_26198__$1 = state_26198;
var statearr_26251_26319 = state_26198__$1;
(statearr_26251_26319[(2)] = null);

(statearr_26251_26319[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (35))){
var inst_26180 = (state_26198[(2)]);
var state_26198__$1 = state_26198;
var statearr_26252_26320 = state_26198__$1;
(statearr_26252_26320[(2)] = inst_26180);

(statearr_26252_26320[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (19))){
var inst_26099 = (state_26198[(7)]);
var inst_26103 = cljs.core.chunk_first.call(null,inst_26099);
var inst_26104 = cljs.core.chunk_rest.call(null,inst_26099);
var inst_26105 = cljs.core.count.call(null,inst_26103);
var inst_26079 = inst_26104;
var inst_26080 = inst_26103;
var inst_26081 = inst_26105;
var inst_26082 = (0);
var state_26198__$1 = (function (){var statearr_26253 = state_26198;
(statearr_26253[(14)] = inst_26082);

(statearr_26253[(15)] = inst_26081);

(statearr_26253[(16)] = inst_26080);

(statearr_26253[(17)] = inst_26079);

return statearr_26253;
})();
var statearr_26254_26321 = state_26198__$1;
(statearr_26254_26321[(2)] = null);

(statearr_26254_26321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (11))){
var inst_26099 = (state_26198[(7)]);
var inst_26079 = (state_26198[(17)]);
var inst_26099__$1 = cljs.core.seq.call(null,inst_26079);
var state_26198__$1 = (function (){var statearr_26255 = state_26198;
(statearr_26255[(7)] = inst_26099__$1);

return statearr_26255;
})();
if(inst_26099__$1){
var statearr_26256_26322 = state_26198__$1;
(statearr_26256_26322[(1)] = (16));

} else {
var statearr_26257_26323 = state_26198__$1;
(statearr_26257_26323[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (9))){
var inst_26127 = (state_26198[(2)]);
var state_26198__$1 = state_26198;
var statearr_26258_26324 = state_26198__$1;
(statearr_26258_26324[(2)] = inst_26127);

(statearr_26258_26324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (5))){
var inst_26077 = cljs.core.deref.call(null,cs);
var inst_26078 = cljs.core.seq.call(null,inst_26077);
var inst_26079 = inst_26078;
var inst_26080 = null;
var inst_26081 = (0);
var inst_26082 = (0);
var state_26198__$1 = (function (){var statearr_26259 = state_26198;
(statearr_26259[(14)] = inst_26082);

(statearr_26259[(15)] = inst_26081);

(statearr_26259[(16)] = inst_26080);

(statearr_26259[(17)] = inst_26079);

return statearr_26259;
})();
var statearr_26260_26325 = state_26198__$1;
(statearr_26260_26325[(2)] = null);

(statearr_26260_26325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (14))){
var state_26198__$1 = state_26198;
var statearr_26261_26326 = state_26198__$1;
(statearr_26261_26326[(2)] = null);

(statearr_26261_26326[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (45))){
var inst_26188 = (state_26198[(2)]);
var state_26198__$1 = state_26198;
var statearr_26262_26327 = state_26198__$1;
(statearr_26262_26327[(2)] = inst_26188);

(statearr_26262_26327[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (26))){
var inst_26130 = (state_26198[(29)]);
var inst_26184 = (state_26198[(2)]);
var inst_26185 = cljs.core.seq.call(null,inst_26130);
var state_26198__$1 = (function (){var statearr_26263 = state_26198;
(statearr_26263[(31)] = inst_26184);

return statearr_26263;
})();
if(inst_26185){
var statearr_26264_26328 = state_26198__$1;
(statearr_26264_26328[(1)] = (42));

} else {
var statearr_26265_26329 = state_26198__$1;
(statearr_26265_26329[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (16))){
var inst_26099 = (state_26198[(7)]);
var inst_26101 = cljs.core.chunked_seq_QMARK_.call(null,inst_26099);
var state_26198__$1 = state_26198;
if(inst_26101){
var statearr_26266_26330 = state_26198__$1;
(statearr_26266_26330[(1)] = (19));

} else {
var statearr_26267_26331 = state_26198__$1;
(statearr_26267_26331[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (38))){
var inst_26177 = (state_26198[(2)]);
var state_26198__$1 = state_26198;
var statearr_26268_26332 = state_26198__$1;
(statearr_26268_26332[(2)] = inst_26177);

(statearr_26268_26332[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (30))){
var state_26198__$1 = state_26198;
var statearr_26269_26333 = state_26198__$1;
(statearr_26269_26333[(2)] = null);

(statearr_26269_26333[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (10))){
var inst_26082 = (state_26198[(14)]);
var inst_26080 = (state_26198[(16)]);
var inst_26088 = cljs.core._nth.call(null,inst_26080,inst_26082);
var inst_26089 = cljs.core.nth.call(null,inst_26088,(0),null);
var inst_26090 = cljs.core.nth.call(null,inst_26088,(1),null);
var state_26198__$1 = (function (){var statearr_26270 = state_26198;
(statearr_26270[(26)] = inst_26089);

return statearr_26270;
})();
if(cljs.core.truth_(inst_26090)){
var statearr_26271_26334 = state_26198__$1;
(statearr_26271_26334[(1)] = (13));

} else {
var statearr_26272_26335 = state_26198__$1;
(statearr_26272_26335[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (18))){
var inst_26123 = (state_26198[(2)]);
var state_26198__$1 = state_26198;
var statearr_26273_26336 = state_26198__$1;
(statearr_26273_26336[(2)] = inst_26123);

(statearr_26273_26336[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (42))){
var state_26198__$1 = state_26198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26198__$1,(45),dchan);
} else {
if((state_val_26199 === (37))){
var inst_26166 = (state_26198[(23)]);
var inst_26157 = (state_26198[(25)]);
var inst_26070 = (state_26198[(11)]);
var inst_26166__$1 = cljs.core.first.call(null,inst_26157);
var inst_26167 = cljs.core.async.put_BANG_.call(null,inst_26166__$1,inst_26070,done);
var state_26198__$1 = (function (){var statearr_26274 = state_26198;
(statearr_26274[(23)] = inst_26166__$1);

return statearr_26274;
})();
if(cljs.core.truth_(inst_26167)){
var statearr_26275_26337 = state_26198__$1;
(statearr_26275_26337[(1)] = (39));

} else {
var statearr_26276_26338 = state_26198__$1;
(statearr_26276_26338[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (8))){
var inst_26082 = (state_26198[(14)]);
var inst_26081 = (state_26198[(15)]);
var inst_26084 = (inst_26082 < inst_26081);
var inst_26085 = inst_26084;
var state_26198__$1 = state_26198;
if(cljs.core.truth_(inst_26085)){
var statearr_26277_26339 = state_26198__$1;
(statearr_26277_26339[(1)] = (10));

} else {
var statearr_26278_26340 = state_26198__$1;
(statearr_26278_26340[(1)] = (11));

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
});})(c__19639__auto___26286,cs,m,dchan,dctr,done))
;
return ((function (switch__19618__auto__,c__19639__auto___26286,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19619__auto__ = null;
var cljs$core$async$mult_$_state_machine__19619__auto____0 = (function (){
var statearr_26282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26282[(0)] = cljs$core$async$mult_$_state_machine__19619__auto__);

(statearr_26282[(1)] = (1));

return statearr_26282;
});
var cljs$core$async$mult_$_state_machine__19619__auto____1 = (function (state_26198){
while(true){
var ret_value__19620__auto__ = (function (){try{while(true){
var result__19621__auto__ = switch__19618__auto__.call(null,state_26198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19621__auto__;
}
break;
}
}catch (e26283){if((e26283 instanceof Object)){
var ex__19622__auto__ = e26283;
var statearr_26284_26341 = state_26198;
(statearr_26284_26341[(5)] = ex__19622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26342 = state_26198;
state_26198 = G__26342;
continue;
} else {
return ret_value__19620__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19619__auto__ = function(state_26198){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19619__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19619__auto____1.call(this,state_26198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19619__auto____0;
cljs$core$async$mult_$_state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19619__auto____1;
return cljs$core$async$mult_$_state_machine__19619__auto__;
})()
;})(switch__19618__auto__,c__19639__auto___26286,cs,m,dchan,dctr,done))
})();
var state__19641__auto__ = (function (){var statearr_26285 = f__19640__auto__.call(null);
(statearr_26285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19639__auto___26286);

return statearr_26285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19641__auto__);
});})(c__19639__auto___26286,cs,m,dchan,dctr,done))
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
var args26343 = [];
var len__17416__auto___26346 = arguments.length;
var i__17417__auto___26347 = (0);
while(true){
if((i__17417__auto___26347 < len__17416__auto___26346)){
args26343.push((arguments[i__17417__auto___26347]));

var G__26348 = (i__17417__auto___26347 + (1));
i__17417__auto___26347 = G__26348;
continue;
} else {
}
break;
}

var G__26345 = args26343.length;
switch (G__26345) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26343.length)].join('')));

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
var len__17416__auto___26360 = arguments.length;
var i__17417__auto___26361 = (0);
while(true){
if((i__17417__auto___26361 < len__17416__auto___26360)){
args__17423__auto__.push((arguments[i__17417__auto___26361]));

var G__26362 = (i__17417__auto___26361 + (1));
i__17417__auto___26361 = G__26362;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((3) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17424__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26354){
var map__26355 = p__26354;
var map__26355__$1 = ((((!((map__26355 == null)))?((((map__26355.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26355.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26355):map__26355);
var opts = map__26355__$1;
var statearr_26357_26363 = state;
(statearr_26357_26363[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__26355,map__26355__$1,opts){
return (function (val){
var statearr_26358_26364 = state;
(statearr_26358_26364[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26355,map__26355__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_26359_26365 = state;
(statearr_26359_26365[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26350){
var G__26351 = cljs.core.first.call(null,seq26350);
var seq26350__$1 = cljs.core.next.call(null,seq26350);
var G__26352 = cljs.core.first.call(null,seq26350__$1);
var seq26350__$2 = cljs.core.next.call(null,seq26350__$1);
var G__26353 = cljs.core.first.call(null,seq26350__$2);
var seq26350__$3 = cljs.core.next.call(null,seq26350__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26351,G__26352,G__26353,seq26350__$3);
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
if(typeof cljs.core.async.t_cljs$core$async26529 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26529 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26530){
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
this.meta26530 = meta26530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26531,meta26530__$1){
var self__ = this;
var _26531__$1 = this;
return (new cljs.core.async.t_cljs$core$async26529(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26530__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26529.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26531){
var self__ = this;
var _26531__$1 = this;
return self__.meta26530;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26529.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26529.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26529.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async26529.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26529.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26529.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26529.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26529.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async26529.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26530","meta26530",-1687219725,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26529.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26529.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26529";

cljs.core.async.t_cljs$core$async26529.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async26529");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async26529 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26529(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26530){
return (new cljs.core.async.t_cljs$core$async26529(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26530));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26529(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19639__auto___26692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19639__auto___26692,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19640__auto__ = (function (){var switch__19618__auto__ = ((function (c__19639__auto___26692,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26629){
var state_val_26630 = (state_26629[(1)]);
if((state_val_26630 === (7))){
var inst_26547 = (state_26629[(2)]);
var state_26629__$1 = state_26629;
var statearr_26631_26693 = state_26629__$1;
(statearr_26631_26693[(2)] = inst_26547);

(statearr_26631_26693[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (20))){
var inst_26559 = (state_26629[(7)]);
var state_26629__$1 = state_26629;
var statearr_26632_26694 = state_26629__$1;
(statearr_26632_26694[(2)] = inst_26559);

(statearr_26632_26694[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (27))){
var state_26629__$1 = state_26629;
var statearr_26633_26695 = state_26629__$1;
(statearr_26633_26695[(2)] = null);

(statearr_26633_26695[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (1))){
var inst_26535 = (state_26629[(8)]);
var inst_26535__$1 = calc_state.call(null);
var inst_26537 = (inst_26535__$1 == null);
var inst_26538 = cljs.core.not.call(null,inst_26537);
var state_26629__$1 = (function (){var statearr_26634 = state_26629;
(statearr_26634[(8)] = inst_26535__$1);

return statearr_26634;
})();
if(inst_26538){
var statearr_26635_26696 = state_26629__$1;
(statearr_26635_26696[(1)] = (2));

} else {
var statearr_26636_26697 = state_26629__$1;
(statearr_26636_26697[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (24))){
var inst_26589 = (state_26629[(9)]);
var inst_26603 = (state_26629[(10)]);
var inst_26582 = (state_26629[(11)]);
var inst_26603__$1 = inst_26582.call(null,inst_26589);
var state_26629__$1 = (function (){var statearr_26637 = state_26629;
(statearr_26637[(10)] = inst_26603__$1);

return statearr_26637;
})();
if(cljs.core.truth_(inst_26603__$1)){
var statearr_26638_26698 = state_26629__$1;
(statearr_26638_26698[(1)] = (29));

} else {
var statearr_26639_26699 = state_26629__$1;
(statearr_26639_26699[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (4))){
var inst_26550 = (state_26629[(2)]);
var state_26629__$1 = state_26629;
if(cljs.core.truth_(inst_26550)){
var statearr_26640_26700 = state_26629__$1;
(statearr_26640_26700[(1)] = (8));

} else {
var statearr_26641_26701 = state_26629__$1;
(statearr_26641_26701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (15))){
var inst_26576 = (state_26629[(2)]);
var state_26629__$1 = state_26629;
if(cljs.core.truth_(inst_26576)){
var statearr_26642_26702 = state_26629__$1;
(statearr_26642_26702[(1)] = (19));

} else {
var statearr_26643_26703 = state_26629__$1;
(statearr_26643_26703[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (21))){
var inst_26581 = (state_26629[(12)]);
var inst_26581__$1 = (state_26629[(2)]);
var inst_26582 = cljs.core.get.call(null,inst_26581__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26583 = cljs.core.get.call(null,inst_26581__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26584 = cljs.core.get.call(null,inst_26581__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26629__$1 = (function (){var statearr_26644 = state_26629;
(statearr_26644[(13)] = inst_26583);

(statearr_26644[(12)] = inst_26581__$1);

(statearr_26644[(11)] = inst_26582);

return statearr_26644;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26629__$1,(22),inst_26584);
} else {
if((state_val_26630 === (31))){
var inst_26611 = (state_26629[(2)]);
var state_26629__$1 = state_26629;
if(cljs.core.truth_(inst_26611)){
var statearr_26645_26704 = state_26629__$1;
(statearr_26645_26704[(1)] = (32));

} else {
var statearr_26646_26705 = state_26629__$1;
(statearr_26646_26705[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (32))){
var inst_26588 = (state_26629[(14)]);
var state_26629__$1 = state_26629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26629__$1,(35),out,inst_26588);
} else {
if((state_val_26630 === (33))){
var inst_26581 = (state_26629[(12)]);
var inst_26559 = inst_26581;
var state_26629__$1 = (function (){var statearr_26647 = state_26629;
(statearr_26647[(7)] = inst_26559);

return statearr_26647;
})();
var statearr_26648_26706 = state_26629__$1;
(statearr_26648_26706[(2)] = null);

(statearr_26648_26706[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (13))){
var inst_26559 = (state_26629[(7)]);
var inst_26566 = inst_26559.cljs$lang$protocol_mask$partition0$;
var inst_26567 = (inst_26566 & (64));
var inst_26568 = inst_26559.cljs$core$ISeq$;
var inst_26569 = (inst_26567) || (inst_26568);
var state_26629__$1 = state_26629;
if(cljs.core.truth_(inst_26569)){
var statearr_26649_26707 = state_26629__$1;
(statearr_26649_26707[(1)] = (16));

} else {
var statearr_26650_26708 = state_26629__$1;
(statearr_26650_26708[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (22))){
var inst_26589 = (state_26629[(9)]);
var inst_26588 = (state_26629[(14)]);
var inst_26587 = (state_26629[(2)]);
var inst_26588__$1 = cljs.core.nth.call(null,inst_26587,(0),null);
var inst_26589__$1 = cljs.core.nth.call(null,inst_26587,(1),null);
var inst_26590 = (inst_26588__$1 == null);
var inst_26591 = cljs.core._EQ_.call(null,inst_26589__$1,change);
var inst_26592 = (inst_26590) || (inst_26591);
var state_26629__$1 = (function (){var statearr_26651 = state_26629;
(statearr_26651[(9)] = inst_26589__$1);

(statearr_26651[(14)] = inst_26588__$1);

return statearr_26651;
})();
if(cljs.core.truth_(inst_26592)){
var statearr_26652_26709 = state_26629__$1;
(statearr_26652_26709[(1)] = (23));

} else {
var statearr_26653_26710 = state_26629__$1;
(statearr_26653_26710[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (36))){
var inst_26581 = (state_26629[(12)]);
var inst_26559 = inst_26581;
var state_26629__$1 = (function (){var statearr_26654 = state_26629;
(statearr_26654[(7)] = inst_26559);

return statearr_26654;
})();
var statearr_26655_26711 = state_26629__$1;
(statearr_26655_26711[(2)] = null);

(statearr_26655_26711[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (29))){
var inst_26603 = (state_26629[(10)]);
var state_26629__$1 = state_26629;
var statearr_26656_26712 = state_26629__$1;
(statearr_26656_26712[(2)] = inst_26603);

(statearr_26656_26712[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (6))){
var state_26629__$1 = state_26629;
var statearr_26657_26713 = state_26629__$1;
(statearr_26657_26713[(2)] = false);

(statearr_26657_26713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (28))){
var inst_26599 = (state_26629[(2)]);
var inst_26600 = calc_state.call(null);
var inst_26559 = inst_26600;
var state_26629__$1 = (function (){var statearr_26658 = state_26629;
(statearr_26658[(7)] = inst_26559);

(statearr_26658[(15)] = inst_26599);

return statearr_26658;
})();
var statearr_26659_26714 = state_26629__$1;
(statearr_26659_26714[(2)] = null);

(statearr_26659_26714[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (25))){
var inst_26625 = (state_26629[(2)]);
var state_26629__$1 = state_26629;
var statearr_26660_26715 = state_26629__$1;
(statearr_26660_26715[(2)] = inst_26625);

(statearr_26660_26715[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (34))){
var inst_26623 = (state_26629[(2)]);
var state_26629__$1 = state_26629;
var statearr_26661_26716 = state_26629__$1;
(statearr_26661_26716[(2)] = inst_26623);

(statearr_26661_26716[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (17))){
var state_26629__$1 = state_26629;
var statearr_26662_26717 = state_26629__$1;
(statearr_26662_26717[(2)] = false);

(statearr_26662_26717[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (3))){
var state_26629__$1 = state_26629;
var statearr_26663_26718 = state_26629__$1;
(statearr_26663_26718[(2)] = false);

(statearr_26663_26718[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (12))){
var inst_26627 = (state_26629[(2)]);
var state_26629__$1 = state_26629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26629__$1,inst_26627);
} else {
if((state_val_26630 === (2))){
var inst_26535 = (state_26629[(8)]);
var inst_26540 = inst_26535.cljs$lang$protocol_mask$partition0$;
var inst_26541 = (inst_26540 & (64));
var inst_26542 = inst_26535.cljs$core$ISeq$;
var inst_26543 = (inst_26541) || (inst_26542);
var state_26629__$1 = state_26629;
if(cljs.core.truth_(inst_26543)){
var statearr_26664_26719 = state_26629__$1;
(statearr_26664_26719[(1)] = (5));

} else {
var statearr_26665_26720 = state_26629__$1;
(statearr_26665_26720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (23))){
var inst_26588 = (state_26629[(14)]);
var inst_26594 = (inst_26588 == null);
var state_26629__$1 = state_26629;
if(cljs.core.truth_(inst_26594)){
var statearr_26666_26721 = state_26629__$1;
(statearr_26666_26721[(1)] = (26));

} else {
var statearr_26667_26722 = state_26629__$1;
(statearr_26667_26722[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (35))){
var inst_26614 = (state_26629[(2)]);
var state_26629__$1 = state_26629;
if(cljs.core.truth_(inst_26614)){
var statearr_26668_26723 = state_26629__$1;
(statearr_26668_26723[(1)] = (36));

} else {
var statearr_26669_26724 = state_26629__$1;
(statearr_26669_26724[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (19))){
var inst_26559 = (state_26629[(7)]);
var inst_26578 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26559);
var state_26629__$1 = state_26629;
var statearr_26670_26725 = state_26629__$1;
(statearr_26670_26725[(2)] = inst_26578);

(statearr_26670_26725[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (11))){
var inst_26559 = (state_26629[(7)]);
var inst_26563 = (inst_26559 == null);
var inst_26564 = cljs.core.not.call(null,inst_26563);
var state_26629__$1 = state_26629;
if(inst_26564){
var statearr_26671_26726 = state_26629__$1;
(statearr_26671_26726[(1)] = (13));

} else {
var statearr_26672_26727 = state_26629__$1;
(statearr_26672_26727[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (9))){
var inst_26535 = (state_26629[(8)]);
var state_26629__$1 = state_26629;
var statearr_26673_26728 = state_26629__$1;
(statearr_26673_26728[(2)] = inst_26535);

(statearr_26673_26728[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (5))){
var state_26629__$1 = state_26629;
var statearr_26674_26729 = state_26629__$1;
(statearr_26674_26729[(2)] = true);

(statearr_26674_26729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (14))){
var state_26629__$1 = state_26629;
var statearr_26675_26730 = state_26629__$1;
(statearr_26675_26730[(2)] = false);

(statearr_26675_26730[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (26))){
var inst_26589 = (state_26629[(9)]);
var inst_26596 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26589);
var state_26629__$1 = state_26629;
var statearr_26676_26731 = state_26629__$1;
(statearr_26676_26731[(2)] = inst_26596);

(statearr_26676_26731[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (16))){
var state_26629__$1 = state_26629;
var statearr_26677_26732 = state_26629__$1;
(statearr_26677_26732[(2)] = true);

(statearr_26677_26732[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (38))){
var inst_26619 = (state_26629[(2)]);
var state_26629__$1 = state_26629;
var statearr_26678_26733 = state_26629__$1;
(statearr_26678_26733[(2)] = inst_26619);

(statearr_26678_26733[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (30))){
var inst_26589 = (state_26629[(9)]);
var inst_26583 = (state_26629[(13)]);
var inst_26582 = (state_26629[(11)]);
var inst_26606 = cljs.core.empty_QMARK_.call(null,inst_26582);
var inst_26607 = inst_26583.call(null,inst_26589);
var inst_26608 = cljs.core.not.call(null,inst_26607);
var inst_26609 = (inst_26606) && (inst_26608);
var state_26629__$1 = state_26629;
var statearr_26679_26734 = state_26629__$1;
(statearr_26679_26734[(2)] = inst_26609);

(statearr_26679_26734[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (10))){
var inst_26535 = (state_26629[(8)]);
var inst_26555 = (state_26629[(2)]);
var inst_26556 = cljs.core.get.call(null,inst_26555,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26557 = cljs.core.get.call(null,inst_26555,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26558 = cljs.core.get.call(null,inst_26555,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26559 = inst_26535;
var state_26629__$1 = (function (){var statearr_26680 = state_26629;
(statearr_26680[(16)] = inst_26556);

(statearr_26680[(17)] = inst_26558);

(statearr_26680[(7)] = inst_26559);

(statearr_26680[(18)] = inst_26557);

return statearr_26680;
})();
var statearr_26681_26735 = state_26629__$1;
(statearr_26681_26735[(2)] = null);

(statearr_26681_26735[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (18))){
var inst_26573 = (state_26629[(2)]);
var state_26629__$1 = state_26629;
var statearr_26682_26736 = state_26629__$1;
(statearr_26682_26736[(2)] = inst_26573);

(statearr_26682_26736[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (37))){
var state_26629__$1 = state_26629;
var statearr_26683_26737 = state_26629__$1;
(statearr_26683_26737[(2)] = null);

(statearr_26683_26737[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (8))){
var inst_26535 = (state_26629[(8)]);
var inst_26552 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26535);
var state_26629__$1 = state_26629;
var statearr_26684_26738 = state_26629__$1;
(statearr_26684_26738[(2)] = inst_26552);

(statearr_26684_26738[(1)] = (10));


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
});})(c__19639__auto___26692,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19618__auto__,c__19639__auto___26692,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19619__auto__ = null;
var cljs$core$async$mix_$_state_machine__19619__auto____0 = (function (){
var statearr_26688 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26688[(0)] = cljs$core$async$mix_$_state_machine__19619__auto__);

(statearr_26688[(1)] = (1));

return statearr_26688;
});
var cljs$core$async$mix_$_state_machine__19619__auto____1 = (function (state_26629){
while(true){
var ret_value__19620__auto__ = (function (){try{while(true){
var result__19621__auto__ = switch__19618__auto__.call(null,state_26629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19621__auto__;
}
break;
}
}catch (e26689){if((e26689 instanceof Object)){
var ex__19622__auto__ = e26689;
var statearr_26690_26739 = state_26629;
(statearr_26690_26739[(5)] = ex__19622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26740 = state_26629;
state_26629 = G__26740;
continue;
} else {
return ret_value__19620__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19619__auto__ = function(state_26629){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19619__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19619__auto____1.call(this,state_26629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19619__auto____0;
cljs$core$async$mix_$_state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19619__auto____1;
return cljs$core$async$mix_$_state_machine__19619__auto__;
})()
;})(switch__19618__auto__,c__19639__auto___26692,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19641__auto__ = (function (){var statearr_26691 = f__19640__auto__.call(null);
(statearr_26691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19639__auto___26692);

return statearr_26691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19641__auto__);
});})(c__19639__auto___26692,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args26741 = [];
var len__17416__auto___26744 = arguments.length;
var i__17417__auto___26745 = (0);
while(true){
if((i__17417__auto___26745 < len__17416__auto___26744)){
args26741.push((arguments[i__17417__auto___26745]));

var G__26746 = (i__17417__auto___26745 + (1));
i__17417__auto___26745 = G__26746;
continue;
} else {
}
break;
}

var G__26743 = args26741.length;
switch (G__26743) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26741.length)].join('')));

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
var args26749 = [];
var len__17416__auto___26874 = arguments.length;
var i__17417__auto___26875 = (0);
while(true){
if((i__17417__auto___26875 < len__17416__auto___26874)){
args26749.push((arguments[i__17417__auto___26875]));

var G__26876 = (i__17417__auto___26875 + (1));
i__17417__auto___26875 = G__26876;
continue;
} else {
}
break;
}

var G__26751 = args26749.length;
switch (G__26751) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26749.length)].join('')));

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
return (function (p1__26748_SHARP_){
if(cljs.core.truth_(p1__26748_SHARP_.call(null,topic))){
return p1__26748_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26748_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16358__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26752 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26752 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26753){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26753 = meta26753;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26754,meta26753__$1){
var self__ = this;
var _26754__$1 = this;
return (new cljs.core.async.t_cljs$core$async26752(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26753__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26752.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26754){
var self__ = this;
var _26754__$1 = this;
return self__.meta26753;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26752.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26752.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26752.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26752.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26752.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async26752.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26752.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26752.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26753","meta26753",2014372375,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26752.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26752.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26752";

cljs.core.async.t_cljs$core$async26752.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async26752");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26752 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26752(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26753){
return (new cljs.core.async.t_cljs$core$async26752(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26753));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26752(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19639__auto___26878 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19639__auto___26878,mults,ensure_mult,p){
return (function (){
var f__19640__auto__ = (function (){var switch__19618__auto__ = ((function (c__19639__auto___26878,mults,ensure_mult,p){
return (function (state_26826){
var state_val_26827 = (state_26826[(1)]);
if((state_val_26827 === (7))){
var inst_26822 = (state_26826[(2)]);
var state_26826__$1 = state_26826;
var statearr_26828_26879 = state_26826__$1;
(statearr_26828_26879[(2)] = inst_26822);

(statearr_26828_26879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (20))){
var state_26826__$1 = state_26826;
var statearr_26829_26880 = state_26826__$1;
(statearr_26829_26880[(2)] = null);

(statearr_26829_26880[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (1))){
var state_26826__$1 = state_26826;
var statearr_26830_26881 = state_26826__$1;
(statearr_26830_26881[(2)] = null);

(statearr_26830_26881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (24))){
var inst_26805 = (state_26826[(7)]);
var inst_26814 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26805);
var state_26826__$1 = state_26826;
var statearr_26831_26882 = state_26826__$1;
(statearr_26831_26882[(2)] = inst_26814);

(statearr_26831_26882[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (4))){
var inst_26757 = (state_26826[(8)]);
var inst_26757__$1 = (state_26826[(2)]);
var inst_26758 = (inst_26757__$1 == null);
var state_26826__$1 = (function (){var statearr_26832 = state_26826;
(statearr_26832[(8)] = inst_26757__$1);

return statearr_26832;
})();
if(cljs.core.truth_(inst_26758)){
var statearr_26833_26883 = state_26826__$1;
(statearr_26833_26883[(1)] = (5));

} else {
var statearr_26834_26884 = state_26826__$1;
(statearr_26834_26884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (15))){
var inst_26799 = (state_26826[(2)]);
var state_26826__$1 = state_26826;
var statearr_26835_26885 = state_26826__$1;
(statearr_26835_26885[(2)] = inst_26799);

(statearr_26835_26885[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (21))){
var inst_26819 = (state_26826[(2)]);
var state_26826__$1 = (function (){var statearr_26836 = state_26826;
(statearr_26836[(9)] = inst_26819);

return statearr_26836;
})();
var statearr_26837_26886 = state_26826__$1;
(statearr_26837_26886[(2)] = null);

(statearr_26837_26886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (13))){
var inst_26781 = (state_26826[(10)]);
var inst_26783 = cljs.core.chunked_seq_QMARK_.call(null,inst_26781);
var state_26826__$1 = state_26826;
if(inst_26783){
var statearr_26838_26887 = state_26826__$1;
(statearr_26838_26887[(1)] = (16));

} else {
var statearr_26839_26888 = state_26826__$1;
(statearr_26839_26888[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (22))){
var inst_26811 = (state_26826[(2)]);
var state_26826__$1 = state_26826;
if(cljs.core.truth_(inst_26811)){
var statearr_26840_26889 = state_26826__$1;
(statearr_26840_26889[(1)] = (23));

} else {
var statearr_26841_26890 = state_26826__$1;
(statearr_26841_26890[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (6))){
var inst_26807 = (state_26826[(11)]);
var inst_26805 = (state_26826[(7)]);
var inst_26757 = (state_26826[(8)]);
var inst_26805__$1 = topic_fn.call(null,inst_26757);
var inst_26806 = cljs.core.deref.call(null,mults);
var inst_26807__$1 = cljs.core.get.call(null,inst_26806,inst_26805__$1);
var state_26826__$1 = (function (){var statearr_26842 = state_26826;
(statearr_26842[(11)] = inst_26807__$1);

(statearr_26842[(7)] = inst_26805__$1);

return statearr_26842;
})();
if(cljs.core.truth_(inst_26807__$1)){
var statearr_26843_26891 = state_26826__$1;
(statearr_26843_26891[(1)] = (19));

} else {
var statearr_26844_26892 = state_26826__$1;
(statearr_26844_26892[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (25))){
var inst_26816 = (state_26826[(2)]);
var state_26826__$1 = state_26826;
var statearr_26845_26893 = state_26826__$1;
(statearr_26845_26893[(2)] = inst_26816);

(statearr_26845_26893[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (17))){
var inst_26781 = (state_26826[(10)]);
var inst_26790 = cljs.core.first.call(null,inst_26781);
var inst_26791 = cljs.core.async.muxch_STAR_.call(null,inst_26790);
var inst_26792 = cljs.core.async.close_BANG_.call(null,inst_26791);
var inst_26793 = cljs.core.next.call(null,inst_26781);
var inst_26767 = inst_26793;
var inst_26768 = null;
var inst_26769 = (0);
var inst_26770 = (0);
var state_26826__$1 = (function (){var statearr_26846 = state_26826;
(statearr_26846[(12)] = inst_26769);

(statearr_26846[(13)] = inst_26770);

(statearr_26846[(14)] = inst_26768);

(statearr_26846[(15)] = inst_26767);

(statearr_26846[(16)] = inst_26792);

return statearr_26846;
})();
var statearr_26847_26894 = state_26826__$1;
(statearr_26847_26894[(2)] = null);

(statearr_26847_26894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (3))){
var inst_26824 = (state_26826[(2)]);
var state_26826__$1 = state_26826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26826__$1,inst_26824);
} else {
if((state_val_26827 === (12))){
var inst_26801 = (state_26826[(2)]);
var state_26826__$1 = state_26826;
var statearr_26848_26895 = state_26826__$1;
(statearr_26848_26895[(2)] = inst_26801);

(statearr_26848_26895[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (2))){
var state_26826__$1 = state_26826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26826__$1,(4),ch);
} else {
if((state_val_26827 === (23))){
var state_26826__$1 = state_26826;
var statearr_26849_26896 = state_26826__$1;
(statearr_26849_26896[(2)] = null);

(statearr_26849_26896[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (19))){
var inst_26807 = (state_26826[(11)]);
var inst_26757 = (state_26826[(8)]);
var inst_26809 = cljs.core.async.muxch_STAR_.call(null,inst_26807);
var state_26826__$1 = state_26826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26826__$1,(22),inst_26809,inst_26757);
} else {
if((state_val_26827 === (11))){
var inst_26767 = (state_26826[(15)]);
var inst_26781 = (state_26826[(10)]);
var inst_26781__$1 = cljs.core.seq.call(null,inst_26767);
var state_26826__$1 = (function (){var statearr_26850 = state_26826;
(statearr_26850[(10)] = inst_26781__$1);

return statearr_26850;
})();
if(inst_26781__$1){
var statearr_26851_26897 = state_26826__$1;
(statearr_26851_26897[(1)] = (13));

} else {
var statearr_26852_26898 = state_26826__$1;
(statearr_26852_26898[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (9))){
var inst_26803 = (state_26826[(2)]);
var state_26826__$1 = state_26826;
var statearr_26853_26899 = state_26826__$1;
(statearr_26853_26899[(2)] = inst_26803);

(statearr_26853_26899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (5))){
var inst_26764 = cljs.core.deref.call(null,mults);
var inst_26765 = cljs.core.vals.call(null,inst_26764);
var inst_26766 = cljs.core.seq.call(null,inst_26765);
var inst_26767 = inst_26766;
var inst_26768 = null;
var inst_26769 = (0);
var inst_26770 = (0);
var state_26826__$1 = (function (){var statearr_26854 = state_26826;
(statearr_26854[(12)] = inst_26769);

(statearr_26854[(13)] = inst_26770);

(statearr_26854[(14)] = inst_26768);

(statearr_26854[(15)] = inst_26767);

return statearr_26854;
})();
var statearr_26855_26900 = state_26826__$1;
(statearr_26855_26900[(2)] = null);

(statearr_26855_26900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (14))){
var state_26826__$1 = state_26826;
var statearr_26859_26901 = state_26826__$1;
(statearr_26859_26901[(2)] = null);

(statearr_26859_26901[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (16))){
var inst_26781 = (state_26826[(10)]);
var inst_26785 = cljs.core.chunk_first.call(null,inst_26781);
var inst_26786 = cljs.core.chunk_rest.call(null,inst_26781);
var inst_26787 = cljs.core.count.call(null,inst_26785);
var inst_26767 = inst_26786;
var inst_26768 = inst_26785;
var inst_26769 = inst_26787;
var inst_26770 = (0);
var state_26826__$1 = (function (){var statearr_26860 = state_26826;
(statearr_26860[(12)] = inst_26769);

(statearr_26860[(13)] = inst_26770);

(statearr_26860[(14)] = inst_26768);

(statearr_26860[(15)] = inst_26767);

return statearr_26860;
})();
var statearr_26861_26902 = state_26826__$1;
(statearr_26861_26902[(2)] = null);

(statearr_26861_26902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (10))){
var inst_26769 = (state_26826[(12)]);
var inst_26770 = (state_26826[(13)]);
var inst_26768 = (state_26826[(14)]);
var inst_26767 = (state_26826[(15)]);
var inst_26775 = cljs.core._nth.call(null,inst_26768,inst_26770);
var inst_26776 = cljs.core.async.muxch_STAR_.call(null,inst_26775);
var inst_26777 = cljs.core.async.close_BANG_.call(null,inst_26776);
var inst_26778 = (inst_26770 + (1));
var tmp26856 = inst_26769;
var tmp26857 = inst_26768;
var tmp26858 = inst_26767;
var inst_26767__$1 = tmp26858;
var inst_26768__$1 = tmp26857;
var inst_26769__$1 = tmp26856;
var inst_26770__$1 = inst_26778;
var state_26826__$1 = (function (){var statearr_26862 = state_26826;
(statearr_26862[(12)] = inst_26769__$1);

(statearr_26862[(13)] = inst_26770__$1);

(statearr_26862[(14)] = inst_26768__$1);

(statearr_26862[(15)] = inst_26767__$1);

(statearr_26862[(17)] = inst_26777);

return statearr_26862;
})();
var statearr_26863_26903 = state_26826__$1;
(statearr_26863_26903[(2)] = null);

(statearr_26863_26903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (18))){
var inst_26796 = (state_26826[(2)]);
var state_26826__$1 = state_26826;
var statearr_26864_26904 = state_26826__$1;
(statearr_26864_26904[(2)] = inst_26796);

(statearr_26864_26904[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (8))){
var inst_26769 = (state_26826[(12)]);
var inst_26770 = (state_26826[(13)]);
var inst_26772 = (inst_26770 < inst_26769);
var inst_26773 = inst_26772;
var state_26826__$1 = state_26826;
if(cljs.core.truth_(inst_26773)){
var statearr_26865_26905 = state_26826__$1;
(statearr_26865_26905[(1)] = (10));

} else {
var statearr_26866_26906 = state_26826__$1;
(statearr_26866_26906[(1)] = (11));

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
});})(c__19639__auto___26878,mults,ensure_mult,p))
;
return ((function (switch__19618__auto__,c__19639__auto___26878,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19619__auto__ = null;
var cljs$core$async$state_machine__19619__auto____0 = (function (){
var statearr_26870 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26870[(0)] = cljs$core$async$state_machine__19619__auto__);

(statearr_26870[(1)] = (1));

return statearr_26870;
});
var cljs$core$async$state_machine__19619__auto____1 = (function (state_26826){
while(true){
var ret_value__19620__auto__ = (function (){try{while(true){
var result__19621__auto__ = switch__19618__auto__.call(null,state_26826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19621__auto__;
}
break;
}
}catch (e26871){if((e26871 instanceof Object)){
var ex__19622__auto__ = e26871;
var statearr_26872_26907 = state_26826;
(statearr_26872_26907[(5)] = ex__19622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26908 = state_26826;
state_26826 = G__26908;
continue;
} else {
return ret_value__19620__auto__;
}
break;
}
});
cljs$core$async$state_machine__19619__auto__ = function(state_26826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19619__auto____1.call(this,state_26826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19619__auto____0;
cljs$core$async$state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19619__auto____1;
return cljs$core$async$state_machine__19619__auto__;
})()
;})(switch__19618__auto__,c__19639__auto___26878,mults,ensure_mult,p))
})();
var state__19641__auto__ = (function (){var statearr_26873 = f__19640__auto__.call(null);
(statearr_26873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19639__auto___26878);

return statearr_26873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19641__auto__);
});})(c__19639__auto___26878,mults,ensure_mult,p))
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
var args26909 = [];
var len__17416__auto___26912 = arguments.length;
var i__17417__auto___26913 = (0);
while(true){
if((i__17417__auto___26913 < len__17416__auto___26912)){
args26909.push((arguments[i__17417__auto___26913]));

var G__26914 = (i__17417__auto___26913 + (1));
i__17417__auto___26913 = G__26914;
continue;
} else {
}
break;
}

var G__26911 = args26909.length;
switch (G__26911) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26909.length)].join('')));

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
var args26916 = [];
var len__17416__auto___26919 = arguments.length;
var i__17417__auto___26920 = (0);
while(true){
if((i__17417__auto___26920 < len__17416__auto___26919)){
args26916.push((arguments[i__17417__auto___26920]));

var G__26921 = (i__17417__auto___26920 + (1));
i__17417__auto___26920 = G__26921;
continue;
} else {
}
break;
}

var G__26918 = args26916.length;
switch (G__26918) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26916.length)].join('')));

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
var args26923 = [];
var len__17416__auto___26994 = arguments.length;
var i__17417__auto___26995 = (0);
while(true){
if((i__17417__auto___26995 < len__17416__auto___26994)){
args26923.push((arguments[i__17417__auto___26995]));

var G__26996 = (i__17417__auto___26995 + (1));
i__17417__auto___26995 = G__26996;
continue;
} else {
}
break;
}

var G__26925 = args26923.length;
switch (G__26925) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26923.length)].join('')));

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
var c__19639__auto___26998 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19639__auto___26998,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19640__auto__ = (function (){var switch__19618__auto__ = ((function (c__19639__auto___26998,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26964){
var state_val_26965 = (state_26964[(1)]);
if((state_val_26965 === (7))){
var state_26964__$1 = state_26964;
var statearr_26966_26999 = state_26964__$1;
(statearr_26966_26999[(2)] = null);

(statearr_26966_26999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26965 === (1))){
var state_26964__$1 = state_26964;
var statearr_26967_27000 = state_26964__$1;
(statearr_26967_27000[(2)] = null);

(statearr_26967_27000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26965 === (4))){
var inst_26928 = (state_26964[(7)]);
var inst_26930 = (inst_26928 < cnt);
var state_26964__$1 = state_26964;
if(cljs.core.truth_(inst_26930)){
var statearr_26968_27001 = state_26964__$1;
(statearr_26968_27001[(1)] = (6));

} else {
var statearr_26969_27002 = state_26964__$1;
(statearr_26969_27002[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26965 === (15))){
var inst_26960 = (state_26964[(2)]);
var state_26964__$1 = state_26964;
var statearr_26970_27003 = state_26964__$1;
(statearr_26970_27003[(2)] = inst_26960);

(statearr_26970_27003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26965 === (13))){
var inst_26953 = cljs.core.async.close_BANG_.call(null,out);
var state_26964__$1 = state_26964;
var statearr_26971_27004 = state_26964__$1;
(statearr_26971_27004[(2)] = inst_26953);

(statearr_26971_27004[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26965 === (6))){
var state_26964__$1 = state_26964;
var statearr_26972_27005 = state_26964__$1;
(statearr_26972_27005[(2)] = null);

(statearr_26972_27005[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26965 === (3))){
var inst_26962 = (state_26964[(2)]);
var state_26964__$1 = state_26964;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26964__$1,inst_26962);
} else {
if((state_val_26965 === (12))){
var inst_26950 = (state_26964[(8)]);
var inst_26950__$1 = (state_26964[(2)]);
var inst_26951 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26950__$1);
var state_26964__$1 = (function (){var statearr_26973 = state_26964;
(statearr_26973[(8)] = inst_26950__$1);

return statearr_26973;
})();
if(cljs.core.truth_(inst_26951)){
var statearr_26974_27006 = state_26964__$1;
(statearr_26974_27006[(1)] = (13));

} else {
var statearr_26975_27007 = state_26964__$1;
(statearr_26975_27007[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26965 === (2))){
var inst_26927 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26928 = (0);
var state_26964__$1 = (function (){var statearr_26976 = state_26964;
(statearr_26976[(9)] = inst_26927);

(statearr_26976[(7)] = inst_26928);

return statearr_26976;
})();
var statearr_26977_27008 = state_26964__$1;
(statearr_26977_27008[(2)] = null);

(statearr_26977_27008[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26965 === (11))){
var inst_26928 = (state_26964[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26964,(10),Object,null,(9));
var inst_26937 = chs__$1.call(null,inst_26928);
var inst_26938 = done.call(null,inst_26928);
var inst_26939 = cljs.core.async.take_BANG_.call(null,inst_26937,inst_26938);
var state_26964__$1 = state_26964;
var statearr_26978_27009 = state_26964__$1;
(statearr_26978_27009[(2)] = inst_26939);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26964__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26965 === (9))){
var inst_26928 = (state_26964[(7)]);
var inst_26941 = (state_26964[(2)]);
var inst_26942 = (inst_26928 + (1));
var inst_26928__$1 = inst_26942;
var state_26964__$1 = (function (){var statearr_26979 = state_26964;
(statearr_26979[(7)] = inst_26928__$1);

(statearr_26979[(10)] = inst_26941);

return statearr_26979;
})();
var statearr_26980_27010 = state_26964__$1;
(statearr_26980_27010[(2)] = null);

(statearr_26980_27010[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26965 === (5))){
var inst_26948 = (state_26964[(2)]);
var state_26964__$1 = (function (){var statearr_26981 = state_26964;
(statearr_26981[(11)] = inst_26948);

return statearr_26981;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26964__$1,(12),dchan);
} else {
if((state_val_26965 === (14))){
var inst_26950 = (state_26964[(8)]);
var inst_26955 = cljs.core.apply.call(null,f,inst_26950);
var state_26964__$1 = state_26964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26964__$1,(16),out,inst_26955);
} else {
if((state_val_26965 === (16))){
var inst_26957 = (state_26964[(2)]);
var state_26964__$1 = (function (){var statearr_26982 = state_26964;
(statearr_26982[(12)] = inst_26957);

return statearr_26982;
})();
var statearr_26983_27011 = state_26964__$1;
(statearr_26983_27011[(2)] = null);

(statearr_26983_27011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26965 === (10))){
var inst_26932 = (state_26964[(2)]);
var inst_26933 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26964__$1 = (function (){var statearr_26984 = state_26964;
(statearr_26984[(13)] = inst_26932);

return statearr_26984;
})();
var statearr_26985_27012 = state_26964__$1;
(statearr_26985_27012[(2)] = inst_26933);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26964__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26965 === (8))){
var inst_26946 = (state_26964[(2)]);
var state_26964__$1 = state_26964;
var statearr_26986_27013 = state_26964__$1;
(statearr_26986_27013[(2)] = inst_26946);

(statearr_26986_27013[(1)] = (5));


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
});})(c__19639__auto___26998,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19618__auto__,c__19639__auto___26998,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19619__auto__ = null;
var cljs$core$async$state_machine__19619__auto____0 = (function (){
var statearr_26990 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26990[(0)] = cljs$core$async$state_machine__19619__auto__);

(statearr_26990[(1)] = (1));

return statearr_26990;
});
var cljs$core$async$state_machine__19619__auto____1 = (function (state_26964){
while(true){
var ret_value__19620__auto__ = (function (){try{while(true){
var result__19621__auto__ = switch__19618__auto__.call(null,state_26964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19621__auto__;
}
break;
}
}catch (e26991){if((e26991 instanceof Object)){
var ex__19622__auto__ = e26991;
var statearr_26992_27014 = state_26964;
(statearr_26992_27014[(5)] = ex__19622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27015 = state_26964;
state_26964 = G__27015;
continue;
} else {
return ret_value__19620__auto__;
}
break;
}
});
cljs$core$async$state_machine__19619__auto__ = function(state_26964){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19619__auto____1.call(this,state_26964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19619__auto____0;
cljs$core$async$state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19619__auto____1;
return cljs$core$async$state_machine__19619__auto__;
})()
;})(switch__19618__auto__,c__19639__auto___26998,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19641__auto__ = (function (){var statearr_26993 = f__19640__auto__.call(null);
(statearr_26993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19639__auto___26998);

return statearr_26993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19641__auto__);
});})(c__19639__auto___26998,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args27017 = [];
var len__17416__auto___27073 = arguments.length;
var i__17417__auto___27074 = (0);
while(true){
if((i__17417__auto___27074 < len__17416__auto___27073)){
args27017.push((arguments[i__17417__auto___27074]));

var G__27075 = (i__17417__auto___27074 + (1));
i__17417__auto___27074 = G__27075;
continue;
} else {
}
break;
}

var G__27019 = args27017.length;
switch (G__27019) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27017.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19639__auto___27077 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19639__auto___27077,out){
return (function (){
var f__19640__auto__ = (function (){var switch__19618__auto__ = ((function (c__19639__auto___27077,out){
return (function (state_27049){
var state_val_27050 = (state_27049[(1)]);
if((state_val_27050 === (7))){
var inst_27028 = (state_27049[(7)]);
var inst_27029 = (state_27049[(8)]);
var inst_27028__$1 = (state_27049[(2)]);
var inst_27029__$1 = cljs.core.nth.call(null,inst_27028__$1,(0),null);
var inst_27030 = cljs.core.nth.call(null,inst_27028__$1,(1),null);
var inst_27031 = (inst_27029__$1 == null);
var state_27049__$1 = (function (){var statearr_27051 = state_27049;
(statearr_27051[(9)] = inst_27030);

(statearr_27051[(7)] = inst_27028__$1);

(statearr_27051[(8)] = inst_27029__$1);

return statearr_27051;
})();
if(cljs.core.truth_(inst_27031)){
var statearr_27052_27078 = state_27049__$1;
(statearr_27052_27078[(1)] = (8));

} else {
var statearr_27053_27079 = state_27049__$1;
(statearr_27053_27079[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (1))){
var inst_27020 = cljs.core.vec.call(null,chs);
var inst_27021 = inst_27020;
var state_27049__$1 = (function (){var statearr_27054 = state_27049;
(statearr_27054[(10)] = inst_27021);

return statearr_27054;
})();
var statearr_27055_27080 = state_27049__$1;
(statearr_27055_27080[(2)] = null);

(statearr_27055_27080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (4))){
var inst_27021 = (state_27049[(10)]);
var state_27049__$1 = state_27049;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27049__$1,(7),inst_27021);
} else {
if((state_val_27050 === (6))){
var inst_27045 = (state_27049[(2)]);
var state_27049__$1 = state_27049;
var statearr_27056_27081 = state_27049__$1;
(statearr_27056_27081[(2)] = inst_27045);

(statearr_27056_27081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (3))){
var inst_27047 = (state_27049[(2)]);
var state_27049__$1 = state_27049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27049__$1,inst_27047);
} else {
if((state_val_27050 === (2))){
var inst_27021 = (state_27049[(10)]);
var inst_27023 = cljs.core.count.call(null,inst_27021);
var inst_27024 = (inst_27023 > (0));
var state_27049__$1 = state_27049;
if(cljs.core.truth_(inst_27024)){
var statearr_27058_27082 = state_27049__$1;
(statearr_27058_27082[(1)] = (4));

} else {
var statearr_27059_27083 = state_27049__$1;
(statearr_27059_27083[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (11))){
var inst_27021 = (state_27049[(10)]);
var inst_27038 = (state_27049[(2)]);
var tmp27057 = inst_27021;
var inst_27021__$1 = tmp27057;
var state_27049__$1 = (function (){var statearr_27060 = state_27049;
(statearr_27060[(10)] = inst_27021__$1);

(statearr_27060[(11)] = inst_27038);

return statearr_27060;
})();
var statearr_27061_27084 = state_27049__$1;
(statearr_27061_27084[(2)] = null);

(statearr_27061_27084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (9))){
var inst_27029 = (state_27049[(8)]);
var state_27049__$1 = state_27049;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27049__$1,(11),out,inst_27029);
} else {
if((state_val_27050 === (5))){
var inst_27043 = cljs.core.async.close_BANG_.call(null,out);
var state_27049__$1 = state_27049;
var statearr_27062_27085 = state_27049__$1;
(statearr_27062_27085[(2)] = inst_27043);

(statearr_27062_27085[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (10))){
var inst_27041 = (state_27049[(2)]);
var state_27049__$1 = state_27049;
var statearr_27063_27086 = state_27049__$1;
(statearr_27063_27086[(2)] = inst_27041);

(statearr_27063_27086[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (8))){
var inst_27030 = (state_27049[(9)]);
var inst_27028 = (state_27049[(7)]);
var inst_27021 = (state_27049[(10)]);
var inst_27029 = (state_27049[(8)]);
var inst_27033 = (function (){var cs = inst_27021;
var vec__27026 = inst_27028;
var v = inst_27029;
var c = inst_27030;
return ((function (cs,vec__27026,v,c,inst_27030,inst_27028,inst_27021,inst_27029,state_val_27050,c__19639__auto___27077,out){
return (function (p1__27016_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27016_SHARP_);
});
;})(cs,vec__27026,v,c,inst_27030,inst_27028,inst_27021,inst_27029,state_val_27050,c__19639__auto___27077,out))
})();
var inst_27034 = cljs.core.filterv.call(null,inst_27033,inst_27021);
var inst_27021__$1 = inst_27034;
var state_27049__$1 = (function (){var statearr_27064 = state_27049;
(statearr_27064[(10)] = inst_27021__$1);

return statearr_27064;
})();
var statearr_27065_27087 = state_27049__$1;
(statearr_27065_27087[(2)] = null);

(statearr_27065_27087[(1)] = (2));


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
});})(c__19639__auto___27077,out))
;
return ((function (switch__19618__auto__,c__19639__auto___27077,out){
return (function() {
var cljs$core$async$state_machine__19619__auto__ = null;
var cljs$core$async$state_machine__19619__auto____0 = (function (){
var statearr_27069 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27069[(0)] = cljs$core$async$state_machine__19619__auto__);

(statearr_27069[(1)] = (1));

return statearr_27069;
});
var cljs$core$async$state_machine__19619__auto____1 = (function (state_27049){
while(true){
var ret_value__19620__auto__ = (function (){try{while(true){
var result__19621__auto__ = switch__19618__auto__.call(null,state_27049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19621__auto__;
}
break;
}
}catch (e27070){if((e27070 instanceof Object)){
var ex__19622__auto__ = e27070;
var statearr_27071_27088 = state_27049;
(statearr_27071_27088[(5)] = ex__19622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27089 = state_27049;
state_27049 = G__27089;
continue;
} else {
return ret_value__19620__auto__;
}
break;
}
});
cljs$core$async$state_machine__19619__auto__ = function(state_27049){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19619__auto____1.call(this,state_27049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19619__auto____0;
cljs$core$async$state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19619__auto____1;
return cljs$core$async$state_machine__19619__auto__;
})()
;})(switch__19618__auto__,c__19639__auto___27077,out))
})();
var state__19641__auto__ = (function (){var statearr_27072 = f__19640__auto__.call(null);
(statearr_27072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19639__auto___27077);

return statearr_27072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19641__auto__);
});})(c__19639__auto___27077,out))
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
var args27090 = [];
var len__17416__auto___27139 = arguments.length;
var i__17417__auto___27140 = (0);
while(true){
if((i__17417__auto___27140 < len__17416__auto___27139)){
args27090.push((arguments[i__17417__auto___27140]));

var G__27141 = (i__17417__auto___27140 + (1));
i__17417__auto___27140 = G__27141;
continue;
} else {
}
break;
}

var G__27092 = args27090.length;
switch (G__27092) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27090.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19639__auto___27143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19639__auto___27143,out){
return (function (){
var f__19640__auto__ = (function (){var switch__19618__auto__ = ((function (c__19639__auto___27143,out){
return (function (state_27116){
var state_val_27117 = (state_27116[(1)]);
if((state_val_27117 === (7))){
var inst_27098 = (state_27116[(7)]);
var inst_27098__$1 = (state_27116[(2)]);
var inst_27099 = (inst_27098__$1 == null);
var inst_27100 = cljs.core.not.call(null,inst_27099);
var state_27116__$1 = (function (){var statearr_27118 = state_27116;
(statearr_27118[(7)] = inst_27098__$1);

return statearr_27118;
})();
if(inst_27100){
var statearr_27119_27144 = state_27116__$1;
(statearr_27119_27144[(1)] = (8));

} else {
var statearr_27120_27145 = state_27116__$1;
(statearr_27120_27145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27117 === (1))){
var inst_27093 = (0);
var state_27116__$1 = (function (){var statearr_27121 = state_27116;
(statearr_27121[(8)] = inst_27093);

return statearr_27121;
})();
var statearr_27122_27146 = state_27116__$1;
(statearr_27122_27146[(2)] = null);

(statearr_27122_27146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27117 === (4))){
var state_27116__$1 = state_27116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27116__$1,(7),ch);
} else {
if((state_val_27117 === (6))){
var inst_27111 = (state_27116[(2)]);
var state_27116__$1 = state_27116;
var statearr_27123_27147 = state_27116__$1;
(statearr_27123_27147[(2)] = inst_27111);

(statearr_27123_27147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27117 === (3))){
var inst_27113 = (state_27116[(2)]);
var inst_27114 = cljs.core.async.close_BANG_.call(null,out);
var state_27116__$1 = (function (){var statearr_27124 = state_27116;
(statearr_27124[(9)] = inst_27113);

return statearr_27124;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27116__$1,inst_27114);
} else {
if((state_val_27117 === (2))){
var inst_27093 = (state_27116[(8)]);
var inst_27095 = (inst_27093 < n);
var state_27116__$1 = state_27116;
if(cljs.core.truth_(inst_27095)){
var statearr_27125_27148 = state_27116__$1;
(statearr_27125_27148[(1)] = (4));

} else {
var statearr_27126_27149 = state_27116__$1;
(statearr_27126_27149[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27117 === (11))){
var inst_27093 = (state_27116[(8)]);
var inst_27103 = (state_27116[(2)]);
var inst_27104 = (inst_27093 + (1));
var inst_27093__$1 = inst_27104;
var state_27116__$1 = (function (){var statearr_27127 = state_27116;
(statearr_27127[(10)] = inst_27103);

(statearr_27127[(8)] = inst_27093__$1);

return statearr_27127;
})();
var statearr_27128_27150 = state_27116__$1;
(statearr_27128_27150[(2)] = null);

(statearr_27128_27150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27117 === (9))){
var state_27116__$1 = state_27116;
var statearr_27129_27151 = state_27116__$1;
(statearr_27129_27151[(2)] = null);

(statearr_27129_27151[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27117 === (5))){
var state_27116__$1 = state_27116;
var statearr_27130_27152 = state_27116__$1;
(statearr_27130_27152[(2)] = null);

(statearr_27130_27152[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27117 === (10))){
var inst_27108 = (state_27116[(2)]);
var state_27116__$1 = state_27116;
var statearr_27131_27153 = state_27116__$1;
(statearr_27131_27153[(2)] = inst_27108);

(statearr_27131_27153[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27117 === (8))){
var inst_27098 = (state_27116[(7)]);
var state_27116__$1 = state_27116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27116__$1,(11),out,inst_27098);
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
});})(c__19639__auto___27143,out))
;
return ((function (switch__19618__auto__,c__19639__auto___27143,out){
return (function() {
var cljs$core$async$state_machine__19619__auto__ = null;
var cljs$core$async$state_machine__19619__auto____0 = (function (){
var statearr_27135 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27135[(0)] = cljs$core$async$state_machine__19619__auto__);

(statearr_27135[(1)] = (1));

return statearr_27135;
});
var cljs$core$async$state_machine__19619__auto____1 = (function (state_27116){
while(true){
var ret_value__19620__auto__ = (function (){try{while(true){
var result__19621__auto__ = switch__19618__auto__.call(null,state_27116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19621__auto__;
}
break;
}
}catch (e27136){if((e27136 instanceof Object)){
var ex__19622__auto__ = e27136;
var statearr_27137_27154 = state_27116;
(statearr_27137_27154[(5)] = ex__19622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27155 = state_27116;
state_27116 = G__27155;
continue;
} else {
return ret_value__19620__auto__;
}
break;
}
});
cljs$core$async$state_machine__19619__auto__ = function(state_27116){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19619__auto____1.call(this,state_27116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19619__auto____0;
cljs$core$async$state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19619__auto____1;
return cljs$core$async$state_machine__19619__auto__;
})()
;})(switch__19618__auto__,c__19639__auto___27143,out))
})();
var state__19641__auto__ = (function (){var statearr_27138 = f__19640__auto__.call(null);
(statearr_27138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19639__auto___27143);

return statearr_27138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19641__auto__);
});})(c__19639__auto___27143,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27163 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27163 = (function (map_LT_,f,ch,meta27164){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27164 = meta27164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27165,meta27164__$1){
var self__ = this;
var _27165__$1 = this;
return (new cljs.core.async.t_cljs$core$async27163(self__.map_LT_,self__.f,self__.ch,meta27164__$1));
});

cljs.core.async.t_cljs$core$async27163.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27165){
var self__ = this;
var _27165__$1 = this;
return self__.meta27164;
});

cljs.core.async.t_cljs$core$async27163.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27163.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27163.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27163.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27163.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async27166 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27166 = (function (map_LT_,f,ch,meta27164,_,fn1,meta27167){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27164 = meta27164;
this._ = _;
this.fn1 = fn1;
this.meta27167 = meta27167;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27168,meta27167__$1){
var self__ = this;
var _27168__$1 = this;
return (new cljs.core.async.t_cljs$core$async27166(self__.map_LT_,self__.f,self__.ch,self__.meta27164,self__._,self__.fn1,meta27167__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27166.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27168){
var self__ = this;
var _27168__$1 = this;
return self__.meta27167;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27166.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27166.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27166.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27156_SHARP_){
return f1.call(null,(((p1__27156_SHARP_ == null))?null:self__.f.call(null,p1__27156_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27166.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27164","meta27164",1248255094,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27163","cljs.core.async/t_cljs$core$async27163",1514448852,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27167","meta27167",993761047,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27166.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27166.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27166";

cljs.core.async.t_cljs$core$async27166.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async27166");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async27166 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27166(map_LT___$1,f__$1,ch__$1,meta27164__$1,___$2,fn1__$1,meta27167){
return (new cljs.core.async.t_cljs$core$async27166(map_LT___$1,f__$1,ch__$1,meta27164__$1,___$2,fn1__$1,meta27167));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27166(self__.map_LT_,self__.f,self__.ch,self__.meta27164,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async27163.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27163.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27163.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27164","meta27164",1248255094,null)], null);
});

cljs.core.async.t_cljs$core$async27163.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27163.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27163";

cljs.core.async.t_cljs$core$async27163.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async27163");
});

cljs.core.async.__GT_t_cljs$core$async27163 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27163(map_LT___$1,f__$1,ch__$1,meta27164){
return (new cljs.core.async.t_cljs$core$async27163(map_LT___$1,f__$1,ch__$1,meta27164));
});

}

return (new cljs.core.async.t_cljs$core$async27163(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27172 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27172 = (function (map_GT_,f,ch,meta27173){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta27173 = meta27173;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27174,meta27173__$1){
var self__ = this;
var _27174__$1 = this;
return (new cljs.core.async.t_cljs$core$async27172(self__.map_GT_,self__.f,self__.ch,meta27173__$1));
});

cljs.core.async.t_cljs$core$async27172.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27174){
var self__ = this;
var _27174__$1 = this;
return self__.meta27173;
});

cljs.core.async.t_cljs$core$async27172.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27172.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27172.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27172.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27172.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27172.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27172.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27173","meta27173",-506429927,null)], null);
});

cljs.core.async.t_cljs$core$async27172.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27172.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27172";

cljs.core.async.t_cljs$core$async27172.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async27172");
});

cljs.core.async.__GT_t_cljs$core$async27172 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27172(map_GT___$1,f__$1,ch__$1,meta27173){
return (new cljs.core.async.t_cljs$core$async27172(map_GT___$1,f__$1,ch__$1,meta27173));
});

}

return (new cljs.core.async.t_cljs$core$async27172(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async27178 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27178 = (function (filter_GT_,p,ch,meta27179){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta27179 = meta27179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27180,meta27179__$1){
var self__ = this;
var _27180__$1 = this;
return (new cljs.core.async.t_cljs$core$async27178(self__.filter_GT_,self__.p,self__.ch,meta27179__$1));
});

cljs.core.async.t_cljs$core$async27178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27180){
var self__ = this;
var _27180__$1 = this;
return self__.meta27179;
});

cljs.core.async.t_cljs$core$async27178.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27178.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27178.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27178.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27178.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27178.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27178.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27178.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27179","meta27179",589285420,null)], null);
});

cljs.core.async.t_cljs$core$async27178.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27178.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27178";

cljs.core.async.t_cljs$core$async27178.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async27178");
});

cljs.core.async.__GT_t_cljs$core$async27178 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27178(filter_GT___$1,p__$1,ch__$1,meta27179){
return (new cljs.core.async.t_cljs$core$async27178(filter_GT___$1,p__$1,ch__$1,meta27179));
});

}

return (new cljs.core.async.t_cljs$core$async27178(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args27181 = [];
var len__17416__auto___27225 = arguments.length;
var i__17417__auto___27226 = (0);
while(true){
if((i__17417__auto___27226 < len__17416__auto___27225)){
args27181.push((arguments[i__17417__auto___27226]));

var G__27227 = (i__17417__auto___27226 + (1));
i__17417__auto___27226 = G__27227;
continue;
} else {
}
break;
}

var G__27183 = args27181.length;
switch (G__27183) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27181.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19639__auto___27229 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19639__auto___27229,out){
return (function (){
var f__19640__auto__ = (function (){var switch__19618__auto__ = ((function (c__19639__auto___27229,out){
return (function (state_27204){
var state_val_27205 = (state_27204[(1)]);
if((state_val_27205 === (7))){
var inst_27200 = (state_27204[(2)]);
var state_27204__$1 = state_27204;
var statearr_27206_27230 = state_27204__$1;
(statearr_27206_27230[(2)] = inst_27200);

(statearr_27206_27230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (1))){
var state_27204__$1 = state_27204;
var statearr_27207_27231 = state_27204__$1;
(statearr_27207_27231[(2)] = null);

(statearr_27207_27231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (4))){
var inst_27186 = (state_27204[(7)]);
var inst_27186__$1 = (state_27204[(2)]);
var inst_27187 = (inst_27186__$1 == null);
var state_27204__$1 = (function (){var statearr_27208 = state_27204;
(statearr_27208[(7)] = inst_27186__$1);

return statearr_27208;
})();
if(cljs.core.truth_(inst_27187)){
var statearr_27209_27232 = state_27204__$1;
(statearr_27209_27232[(1)] = (5));

} else {
var statearr_27210_27233 = state_27204__$1;
(statearr_27210_27233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (6))){
var inst_27186 = (state_27204[(7)]);
var inst_27191 = p.call(null,inst_27186);
var state_27204__$1 = state_27204;
if(cljs.core.truth_(inst_27191)){
var statearr_27211_27234 = state_27204__$1;
(statearr_27211_27234[(1)] = (8));

} else {
var statearr_27212_27235 = state_27204__$1;
(statearr_27212_27235[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (3))){
var inst_27202 = (state_27204[(2)]);
var state_27204__$1 = state_27204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27204__$1,inst_27202);
} else {
if((state_val_27205 === (2))){
var state_27204__$1 = state_27204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27204__$1,(4),ch);
} else {
if((state_val_27205 === (11))){
var inst_27194 = (state_27204[(2)]);
var state_27204__$1 = state_27204;
var statearr_27213_27236 = state_27204__$1;
(statearr_27213_27236[(2)] = inst_27194);

(statearr_27213_27236[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (9))){
var state_27204__$1 = state_27204;
var statearr_27214_27237 = state_27204__$1;
(statearr_27214_27237[(2)] = null);

(statearr_27214_27237[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (5))){
var inst_27189 = cljs.core.async.close_BANG_.call(null,out);
var state_27204__$1 = state_27204;
var statearr_27215_27238 = state_27204__$1;
(statearr_27215_27238[(2)] = inst_27189);

(statearr_27215_27238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (10))){
var inst_27197 = (state_27204[(2)]);
var state_27204__$1 = (function (){var statearr_27216 = state_27204;
(statearr_27216[(8)] = inst_27197);

return statearr_27216;
})();
var statearr_27217_27239 = state_27204__$1;
(statearr_27217_27239[(2)] = null);

(statearr_27217_27239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (8))){
var inst_27186 = (state_27204[(7)]);
var state_27204__$1 = state_27204;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27204__$1,(11),out,inst_27186);
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
});})(c__19639__auto___27229,out))
;
return ((function (switch__19618__auto__,c__19639__auto___27229,out){
return (function() {
var cljs$core$async$state_machine__19619__auto__ = null;
var cljs$core$async$state_machine__19619__auto____0 = (function (){
var statearr_27221 = [null,null,null,null,null,null,null,null,null];
(statearr_27221[(0)] = cljs$core$async$state_machine__19619__auto__);

(statearr_27221[(1)] = (1));

return statearr_27221;
});
var cljs$core$async$state_machine__19619__auto____1 = (function (state_27204){
while(true){
var ret_value__19620__auto__ = (function (){try{while(true){
var result__19621__auto__ = switch__19618__auto__.call(null,state_27204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19621__auto__;
}
break;
}
}catch (e27222){if((e27222 instanceof Object)){
var ex__19622__auto__ = e27222;
var statearr_27223_27240 = state_27204;
(statearr_27223_27240[(5)] = ex__19622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27241 = state_27204;
state_27204 = G__27241;
continue;
} else {
return ret_value__19620__auto__;
}
break;
}
});
cljs$core$async$state_machine__19619__auto__ = function(state_27204){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19619__auto____1.call(this,state_27204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19619__auto____0;
cljs$core$async$state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19619__auto____1;
return cljs$core$async$state_machine__19619__auto__;
})()
;})(switch__19618__auto__,c__19639__auto___27229,out))
})();
var state__19641__auto__ = (function (){var statearr_27224 = f__19640__auto__.call(null);
(statearr_27224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19639__auto___27229);

return statearr_27224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19641__auto__);
});})(c__19639__auto___27229,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args27242 = [];
var len__17416__auto___27245 = arguments.length;
var i__17417__auto___27246 = (0);
while(true){
if((i__17417__auto___27246 < len__17416__auto___27245)){
args27242.push((arguments[i__17417__auto___27246]));

var G__27247 = (i__17417__auto___27246 + (1));
i__17417__auto___27246 = G__27247;
continue;
} else {
}
break;
}

var G__27244 = args27242.length;
switch (G__27244) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27242.length)].join('')));

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
var c__19639__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19639__auto__){
return (function (){
var f__19640__auto__ = (function (){var switch__19618__auto__ = ((function (c__19639__auto__){
return (function (state_27414){
var state_val_27415 = (state_27414[(1)]);
if((state_val_27415 === (7))){
var inst_27410 = (state_27414[(2)]);
var state_27414__$1 = state_27414;
var statearr_27416_27457 = state_27414__$1;
(statearr_27416_27457[(2)] = inst_27410);

(statearr_27416_27457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (20))){
var inst_27380 = (state_27414[(7)]);
var inst_27391 = (state_27414[(2)]);
var inst_27392 = cljs.core.next.call(null,inst_27380);
var inst_27366 = inst_27392;
var inst_27367 = null;
var inst_27368 = (0);
var inst_27369 = (0);
var state_27414__$1 = (function (){var statearr_27417 = state_27414;
(statearr_27417[(8)] = inst_27391);

(statearr_27417[(9)] = inst_27367);

(statearr_27417[(10)] = inst_27368);

(statearr_27417[(11)] = inst_27366);

(statearr_27417[(12)] = inst_27369);

return statearr_27417;
})();
var statearr_27418_27458 = state_27414__$1;
(statearr_27418_27458[(2)] = null);

(statearr_27418_27458[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (1))){
var state_27414__$1 = state_27414;
var statearr_27419_27459 = state_27414__$1;
(statearr_27419_27459[(2)] = null);

(statearr_27419_27459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (4))){
var inst_27355 = (state_27414[(13)]);
var inst_27355__$1 = (state_27414[(2)]);
var inst_27356 = (inst_27355__$1 == null);
var state_27414__$1 = (function (){var statearr_27420 = state_27414;
(statearr_27420[(13)] = inst_27355__$1);

return statearr_27420;
})();
if(cljs.core.truth_(inst_27356)){
var statearr_27421_27460 = state_27414__$1;
(statearr_27421_27460[(1)] = (5));

} else {
var statearr_27422_27461 = state_27414__$1;
(statearr_27422_27461[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (15))){
var state_27414__$1 = state_27414;
var statearr_27426_27462 = state_27414__$1;
(statearr_27426_27462[(2)] = null);

(statearr_27426_27462[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (21))){
var state_27414__$1 = state_27414;
var statearr_27427_27463 = state_27414__$1;
(statearr_27427_27463[(2)] = null);

(statearr_27427_27463[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (13))){
var inst_27367 = (state_27414[(9)]);
var inst_27368 = (state_27414[(10)]);
var inst_27366 = (state_27414[(11)]);
var inst_27369 = (state_27414[(12)]);
var inst_27376 = (state_27414[(2)]);
var inst_27377 = (inst_27369 + (1));
var tmp27423 = inst_27367;
var tmp27424 = inst_27368;
var tmp27425 = inst_27366;
var inst_27366__$1 = tmp27425;
var inst_27367__$1 = tmp27423;
var inst_27368__$1 = tmp27424;
var inst_27369__$1 = inst_27377;
var state_27414__$1 = (function (){var statearr_27428 = state_27414;
(statearr_27428[(9)] = inst_27367__$1);

(statearr_27428[(14)] = inst_27376);

(statearr_27428[(10)] = inst_27368__$1);

(statearr_27428[(11)] = inst_27366__$1);

(statearr_27428[(12)] = inst_27369__$1);

return statearr_27428;
})();
var statearr_27429_27464 = state_27414__$1;
(statearr_27429_27464[(2)] = null);

(statearr_27429_27464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (22))){
var state_27414__$1 = state_27414;
var statearr_27430_27465 = state_27414__$1;
(statearr_27430_27465[(2)] = null);

(statearr_27430_27465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (6))){
var inst_27355 = (state_27414[(13)]);
var inst_27364 = f.call(null,inst_27355);
var inst_27365 = cljs.core.seq.call(null,inst_27364);
var inst_27366 = inst_27365;
var inst_27367 = null;
var inst_27368 = (0);
var inst_27369 = (0);
var state_27414__$1 = (function (){var statearr_27431 = state_27414;
(statearr_27431[(9)] = inst_27367);

(statearr_27431[(10)] = inst_27368);

(statearr_27431[(11)] = inst_27366);

(statearr_27431[(12)] = inst_27369);

return statearr_27431;
})();
var statearr_27432_27466 = state_27414__$1;
(statearr_27432_27466[(2)] = null);

(statearr_27432_27466[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (17))){
var inst_27380 = (state_27414[(7)]);
var inst_27384 = cljs.core.chunk_first.call(null,inst_27380);
var inst_27385 = cljs.core.chunk_rest.call(null,inst_27380);
var inst_27386 = cljs.core.count.call(null,inst_27384);
var inst_27366 = inst_27385;
var inst_27367 = inst_27384;
var inst_27368 = inst_27386;
var inst_27369 = (0);
var state_27414__$1 = (function (){var statearr_27433 = state_27414;
(statearr_27433[(9)] = inst_27367);

(statearr_27433[(10)] = inst_27368);

(statearr_27433[(11)] = inst_27366);

(statearr_27433[(12)] = inst_27369);

return statearr_27433;
})();
var statearr_27434_27467 = state_27414__$1;
(statearr_27434_27467[(2)] = null);

(statearr_27434_27467[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (3))){
var inst_27412 = (state_27414[(2)]);
var state_27414__$1 = state_27414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27414__$1,inst_27412);
} else {
if((state_val_27415 === (12))){
var inst_27400 = (state_27414[(2)]);
var state_27414__$1 = state_27414;
var statearr_27435_27468 = state_27414__$1;
(statearr_27435_27468[(2)] = inst_27400);

(statearr_27435_27468[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (2))){
var state_27414__$1 = state_27414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27414__$1,(4),in$);
} else {
if((state_val_27415 === (23))){
var inst_27408 = (state_27414[(2)]);
var state_27414__$1 = state_27414;
var statearr_27436_27469 = state_27414__$1;
(statearr_27436_27469[(2)] = inst_27408);

(statearr_27436_27469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (19))){
var inst_27395 = (state_27414[(2)]);
var state_27414__$1 = state_27414;
var statearr_27437_27470 = state_27414__$1;
(statearr_27437_27470[(2)] = inst_27395);

(statearr_27437_27470[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (11))){
var inst_27380 = (state_27414[(7)]);
var inst_27366 = (state_27414[(11)]);
var inst_27380__$1 = cljs.core.seq.call(null,inst_27366);
var state_27414__$1 = (function (){var statearr_27438 = state_27414;
(statearr_27438[(7)] = inst_27380__$1);

return statearr_27438;
})();
if(inst_27380__$1){
var statearr_27439_27471 = state_27414__$1;
(statearr_27439_27471[(1)] = (14));

} else {
var statearr_27440_27472 = state_27414__$1;
(statearr_27440_27472[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (9))){
var inst_27402 = (state_27414[(2)]);
var inst_27403 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27414__$1 = (function (){var statearr_27441 = state_27414;
(statearr_27441[(15)] = inst_27402);

return statearr_27441;
})();
if(cljs.core.truth_(inst_27403)){
var statearr_27442_27473 = state_27414__$1;
(statearr_27442_27473[(1)] = (21));

} else {
var statearr_27443_27474 = state_27414__$1;
(statearr_27443_27474[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (5))){
var inst_27358 = cljs.core.async.close_BANG_.call(null,out);
var state_27414__$1 = state_27414;
var statearr_27444_27475 = state_27414__$1;
(statearr_27444_27475[(2)] = inst_27358);

(statearr_27444_27475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (14))){
var inst_27380 = (state_27414[(7)]);
var inst_27382 = cljs.core.chunked_seq_QMARK_.call(null,inst_27380);
var state_27414__$1 = state_27414;
if(inst_27382){
var statearr_27445_27476 = state_27414__$1;
(statearr_27445_27476[(1)] = (17));

} else {
var statearr_27446_27477 = state_27414__$1;
(statearr_27446_27477[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (16))){
var inst_27398 = (state_27414[(2)]);
var state_27414__$1 = state_27414;
var statearr_27447_27478 = state_27414__$1;
(statearr_27447_27478[(2)] = inst_27398);

(statearr_27447_27478[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (10))){
var inst_27367 = (state_27414[(9)]);
var inst_27369 = (state_27414[(12)]);
var inst_27374 = cljs.core._nth.call(null,inst_27367,inst_27369);
var state_27414__$1 = state_27414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27414__$1,(13),out,inst_27374);
} else {
if((state_val_27415 === (18))){
var inst_27380 = (state_27414[(7)]);
var inst_27389 = cljs.core.first.call(null,inst_27380);
var state_27414__$1 = state_27414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27414__$1,(20),out,inst_27389);
} else {
if((state_val_27415 === (8))){
var inst_27368 = (state_27414[(10)]);
var inst_27369 = (state_27414[(12)]);
var inst_27371 = (inst_27369 < inst_27368);
var inst_27372 = inst_27371;
var state_27414__$1 = state_27414;
if(cljs.core.truth_(inst_27372)){
var statearr_27448_27479 = state_27414__$1;
(statearr_27448_27479[(1)] = (10));

} else {
var statearr_27449_27480 = state_27414__$1;
(statearr_27449_27480[(1)] = (11));

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
});})(c__19639__auto__))
;
return ((function (switch__19618__auto__,c__19639__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19619__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19619__auto____0 = (function (){
var statearr_27453 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27453[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19619__auto__);

(statearr_27453[(1)] = (1));

return statearr_27453;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19619__auto____1 = (function (state_27414){
while(true){
var ret_value__19620__auto__ = (function (){try{while(true){
var result__19621__auto__ = switch__19618__auto__.call(null,state_27414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19621__auto__;
}
break;
}
}catch (e27454){if((e27454 instanceof Object)){
var ex__19622__auto__ = e27454;
var statearr_27455_27481 = state_27414;
(statearr_27455_27481[(5)] = ex__19622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27482 = state_27414;
state_27414 = G__27482;
continue;
} else {
return ret_value__19620__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19619__auto__ = function(state_27414){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19619__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19619__auto____1.call(this,state_27414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19619__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19619__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19619__auto__;
})()
;})(switch__19618__auto__,c__19639__auto__))
})();
var state__19641__auto__ = (function (){var statearr_27456 = f__19640__auto__.call(null);
(statearr_27456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19639__auto__);

return statearr_27456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19641__auto__);
});})(c__19639__auto__))
);

return c__19639__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args27483 = [];
var len__17416__auto___27486 = arguments.length;
var i__17417__auto___27487 = (0);
while(true){
if((i__17417__auto___27487 < len__17416__auto___27486)){
args27483.push((arguments[i__17417__auto___27487]));

var G__27488 = (i__17417__auto___27487 + (1));
i__17417__auto___27487 = G__27488;
continue;
} else {
}
break;
}

var G__27485 = args27483.length;
switch (G__27485) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27483.length)].join('')));

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
var args27490 = [];
var len__17416__auto___27493 = arguments.length;
var i__17417__auto___27494 = (0);
while(true){
if((i__17417__auto___27494 < len__17416__auto___27493)){
args27490.push((arguments[i__17417__auto___27494]));

var G__27495 = (i__17417__auto___27494 + (1));
i__17417__auto___27494 = G__27495;
continue;
} else {
}
break;
}

var G__27492 = args27490.length;
switch (G__27492) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27490.length)].join('')));

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
var args27497 = [];
var len__17416__auto___27548 = arguments.length;
var i__17417__auto___27549 = (0);
while(true){
if((i__17417__auto___27549 < len__17416__auto___27548)){
args27497.push((arguments[i__17417__auto___27549]));

var G__27550 = (i__17417__auto___27549 + (1));
i__17417__auto___27549 = G__27550;
continue;
} else {
}
break;
}

var G__27499 = args27497.length;
switch (G__27499) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27497.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19639__auto___27552 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19639__auto___27552,out){
return (function (){
var f__19640__auto__ = (function (){var switch__19618__auto__ = ((function (c__19639__auto___27552,out){
return (function (state_27523){
var state_val_27524 = (state_27523[(1)]);
if((state_val_27524 === (7))){
var inst_27518 = (state_27523[(2)]);
var state_27523__$1 = state_27523;
var statearr_27525_27553 = state_27523__$1;
(statearr_27525_27553[(2)] = inst_27518);

(statearr_27525_27553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (1))){
var inst_27500 = null;
var state_27523__$1 = (function (){var statearr_27526 = state_27523;
(statearr_27526[(7)] = inst_27500);

return statearr_27526;
})();
var statearr_27527_27554 = state_27523__$1;
(statearr_27527_27554[(2)] = null);

(statearr_27527_27554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (4))){
var inst_27503 = (state_27523[(8)]);
var inst_27503__$1 = (state_27523[(2)]);
var inst_27504 = (inst_27503__$1 == null);
var inst_27505 = cljs.core.not.call(null,inst_27504);
var state_27523__$1 = (function (){var statearr_27528 = state_27523;
(statearr_27528[(8)] = inst_27503__$1);

return statearr_27528;
})();
if(inst_27505){
var statearr_27529_27555 = state_27523__$1;
(statearr_27529_27555[(1)] = (5));

} else {
var statearr_27530_27556 = state_27523__$1;
(statearr_27530_27556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (6))){
var state_27523__$1 = state_27523;
var statearr_27531_27557 = state_27523__$1;
(statearr_27531_27557[(2)] = null);

(statearr_27531_27557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (3))){
var inst_27520 = (state_27523[(2)]);
var inst_27521 = cljs.core.async.close_BANG_.call(null,out);
var state_27523__$1 = (function (){var statearr_27532 = state_27523;
(statearr_27532[(9)] = inst_27520);

return statearr_27532;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27523__$1,inst_27521);
} else {
if((state_val_27524 === (2))){
var state_27523__$1 = state_27523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27523__$1,(4),ch);
} else {
if((state_val_27524 === (11))){
var inst_27503 = (state_27523[(8)]);
var inst_27512 = (state_27523[(2)]);
var inst_27500 = inst_27503;
var state_27523__$1 = (function (){var statearr_27533 = state_27523;
(statearr_27533[(10)] = inst_27512);

(statearr_27533[(7)] = inst_27500);

return statearr_27533;
})();
var statearr_27534_27558 = state_27523__$1;
(statearr_27534_27558[(2)] = null);

(statearr_27534_27558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (9))){
var inst_27503 = (state_27523[(8)]);
var state_27523__$1 = state_27523;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27523__$1,(11),out,inst_27503);
} else {
if((state_val_27524 === (5))){
var inst_27503 = (state_27523[(8)]);
var inst_27500 = (state_27523[(7)]);
var inst_27507 = cljs.core._EQ_.call(null,inst_27503,inst_27500);
var state_27523__$1 = state_27523;
if(inst_27507){
var statearr_27536_27559 = state_27523__$1;
(statearr_27536_27559[(1)] = (8));

} else {
var statearr_27537_27560 = state_27523__$1;
(statearr_27537_27560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (10))){
var inst_27515 = (state_27523[(2)]);
var state_27523__$1 = state_27523;
var statearr_27538_27561 = state_27523__$1;
(statearr_27538_27561[(2)] = inst_27515);

(statearr_27538_27561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (8))){
var inst_27500 = (state_27523[(7)]);
var tmp27535 = inst_27500;
var inst_27500__$1 = tmp27535;
var state_27523__$1 = (function (){var statearr_27539 = state_27523;
(statearr_27539[(7)] = inst_27500__$1);

return statearr_27539;
})();
var statearr_27540_27562 = state_27523__$1;
(statearr_27540_27562[(2)] = null);

(statearr_27540_27562[(1)] = (2));


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
});})(c__19639__auto___27552,out))
;
return ((function (switch__19618__auto__,c__19639__auto___27552,out){
return (function() {
var cljs$core$async$state_machine__19619__auto__ = null;
var cljs$core$async$state_machine__19619__auto____0 = (function (){
var statearr_27544 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27544[(0)] = cljs$core$async$state_machine__19619__auto__);

(statearr_27544[(1)] = (1));

return statearr_27544;
});
var cljs$core$async$state_machine__19619__auto____1 = (function (state_27523){
while(true){
var ret_value__19620__auto__ = (function (){try{while(true){
var result__19621__auto__ = switch__19618__auto__.call(null,state_27523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19621__auto__;
}
break;
}
}catch (e27545){if((e27545 instanceof Object)){
var ex__19622__auto__ = e27545;
var statearr_27546_27563 = state_27523;
(statearr_27546_27563[(5)] = ex__19622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27564 = state_27523;
state_27523 = G__27564;
continue;
} else {
return ret_value__19620__auto__;
}
break;
}
});
cljs$core$async$state_machine__19619__auto__ = function(state_27523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19619__auto____1.call(this,state_27523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19619__auto____0;
cljs$core$async$state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19619__auto____1;
return cljs$core$async$state_machine__19619__auto__;
})()
;})(switch__19618__auto__,c__19639__auto___27552,out))
})();
var state__19641__auto__ = (function (){var statearr_27547 = f__19640__auto__.call(null);
(statearr_27547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19639__auto___27552);

return statearr_27547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19641__auto__);
});})(c__19639__auto___27552,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args27565 = [];
var len__17416__auto___27635 = arguments.length;
var i__17417__auto___27636 = (0);
while(true){
if((i__17417__auto___27636 < len__17416__auto___27635)){
args27565.push((arguments[i__17417__auto___27636]));

var G__27637 = (i__17417__auto___27636 + (1));
i__17417__auto___27636 = G__27637;
continue;
} else {
}
break;
}

var G__27567 = args27565.length;
switch (G__27567) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27565.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19639__auto___27639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19639__auto___27639,out){
return (function (){
var f__19640__auto__ = (function (){var switch__19618__auto__ = ((function (c__19639__auto___27639,out){
return (function (state_27605){
var state_val_27606 = (state_27605[(1)]);
if((state_val_27606 === (7))){
var inst_27601 = (state_27605[(2)]);
var state_27605__$1 = state_27605;
var statearr_27607_27640 = state_27605__$1;
(statearr_27607_27640[(2)] = inst_27601);

(statearr_27607_27640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27606 === (1))){
var inst_27568 = (new Array(n));
var inst_27569 = inst_27568;
var inst_27570 = (0);
var state_27605__$1 = (function (){var statearr_27608 = state_27605;
(statearr_27608[(7)] = inst_27570);

(statearr_27608[(8)] = inst_27569);

return statearr_27608;
})();
var statearr_27609_27641 = state_27605__$1;
(statearr_27609_27641[(2)] = null);

(statearr_27609_27641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27606 === (4))){
var inst_27573 = (state_27605[(9)]);
var inst_27573__$1 = (state_27605[(2)]);
var inst_27574 = (inst_27573__$1 == null);
var inst_27575 = cljs.core.not.call(null,inst_27574);
var state_27605__$1 = (function (){var statearr_27610 = state_27605;
(statearr_27610[(9)] = inst_27573__$1);

return statearr_27610;
})();
if(inst_27575){
var statearr_27611_27642 = state_27605__$1;
(statearr_27611_27642[(1)] = (5));

} else {
var statearr_27612_27643 = state_27605__$1;
(statearr_27612_27643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27606 === (15))){
var inst_27595 = (state_27605[(2)]);
var state_27605__$1 = state_27605;
var statearr_27613_27644 = state_27605__$1;
(statearr_27613_27644[(2)] = inst_27595);

(statearr_27613_27644[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27606 === (13))){
var state_27605__$1 = state_27605;
var statearr_27614_27645 = state_27605__$1;
(statearr_27614_27645[(2)] = null);

(statearr_27614_27645[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27606 === (6))){
var inst_27570 = (state_27605[(7)]);
var inst_27591 = (inst_27570 > (0));
var state_27605__$1 = state_27605;
if(cljs.core.truth_(inst_27591)){
var statearr_27615_27646 = state_27605__$1;
(statearr_27615_27646[(1)] = (12));

} else {
var statearr_27616_27647 = state_27605__$1;
(statearr_27616_27647[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27606 === (3))){
var inst_27603 = (state_27605[(2)]);
var state_27605__$1 = state_27605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27605__$1,inst_27603);
} else {
if((state_val_27606 === (12))){
var inst_27569 = (state_27605[(8)]);
var inst_27593 = cljs.core.vec.call(null,inst_27569);
var state_27605__$1 = state_27605;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27605__$1,(15),out,inst_27593);
} else {
if((state_val_27606 === (2))){
var state_27605__$1 = state_27605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27605__$1,(4),ch);
} else {
if((state_val_27606 === (11))){
var inst_27585 = (state_27605[(2)]);
var inst_27586 = (new Array(n));
var inst_27569 = inst_27586;
var inst_27570 = (0);
var state_27605__$1 = (function (){var statearr_27617 = state_27605;
(statearr_27617[(7)] = inst_27570);

(statearr_27617[(8)] = inst_27569);

(statearr_27617[(10)] = inst_27585);

return statearr_27617;
})();
var statearr_27618_27648 = state_27605__$1;
(statearr_27618_27648[(2)] = null);

(statearr_27618_27648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27606 === (9))){
var inst_27569 = (state_27605[(8)]);
var inst_27583 = cljs.core.vec.call(null,inst_27569);
var state_27605__$1 = state_27605;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27605__$1,(11),out,inst_27583);
} else {
if((state_val_27606 === (5))){
var inst_27578 = (state_27605[(11)]);
var inst_27570 = (state_27605[(7)]);
var inst_27569 = (state_27605[(8)]);
var inst_27573 = (state_27605[(9)]);
var inst_27577 = (inst_27569[inst_27570] = inst_27573);
var inst_27578__$1 = (inst_27570 + (1));
var inst_27579 = (inst_27578__$1 < n);
var state_27605__$1 = (function (){var statearr_27619 = state_27605;
(statearr_27619[(12)] = inst_27577);

(statearr_27619[(11)] = inst_27578__$1);

return statearr_27619;
})();
if(cljs.core.truth_(inst_27579)){
var statearr_27620_27649 = state_27605__$1;
(statearr_27620_27649[(1)] = (8));

} else {
var statearr_27621_27650 = state_27605__$1;
(statearr_27621_27650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27606 === (14))){
var inst_27598 = (state_27605[(2)]);
var inst_27599 = cljs.core.async.close_BANG_.call(null,out);
var state_27605__$1 = (function (){var statearr_27623 = state_27605;
(statearr_27623[(13)] = inst_27598);

return statearr_27623;
})();
var statearr_27624_27651 = state_27605__$1;
(statearr_27624_27651[(2)] = inst_27599);

(statearr_27624_27651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27606 === (10))){
var inst_27589 = (state_27605[(2)]);
var state_27605__$1 = state_27605;
var statearr_27625_27652 = state_27605__$1;
(statearr_27625_27652[(2)] = inst_27589);

(statearr_27625_27652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27606 === (8))){
var inst_27578 = (state_27605[(11)]);
var inst_27569 = (state_27605[(8)]);
var tmp27622 = inst_27569;
var inst_27569__$1 = tmp27622;
var inst_27570 = inst_27578;
var state_27605__$1 = (function (){var statearr_27626 = state_27605;
(statearr_27626[(7)] = inst_27570);

(statearr_27626[(8)] = inst_27569__$1);

return statearr_27626;
})();
var statearr_27627_27653 = state_27605__$1;
(statearr_27627_27653[(2)] = null);

(statearr_27627_27653[(1)] = (2));


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
});})(c__19639__auto___27639,out))
;
return ((function (switch__19618__auto__,c__19639__auto___27639,out){
return (function() {
var cljs$core$async$state_machine__19619__auto__ = null;
var cljs$core$async$state_machine__19619__auto____0 = (function (){
var statearr_27631 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27631[(0)] = cljs$core$async$state_machine__19619__auto__);

(statearr_27631[(1)] = (1));

return statearr_27631;
});
var cljs$core$async$state_machine__19619__auto____1 = (function (state_27605){
while(true){
var ret_value__19620__auto__ = (function (){try{while(true){
var result__19621__auto__ = switch__19618__auto__.call(null,state_27605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19621__auto__;
}
break;
}
}catch (e27632){if((e27632 instanceof Object)){
var ex__19622__auto__ = e27632;
var statearr_27633_27654 = state_27605;
(statearr_27633_27654[(5)] = ex__19622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27655 = state_27605;
state_27605 = G__27655;
continue;
} else {
return ret_value__19620__auto__;
}
break;
}
});
cljs$core$async$state_machine__19619__auto__ = function(state_27605){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19619__auto____1.call(this,state_27605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19619__auto____0;
cljs$core$async$state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19619__auto____1;
return cljs$core$async$state_machine__19619__auto__;
})()
;})(switch__19618__auto__,c__19639__auto___27639,out))
})();
var state__19641__auto__ = (function (){var statearr_27634 = f__19640__auto__.call(null);
(statearr_27634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19639__auto___27639);

return statearr_27634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19641__auto__);
});})(c__19639__auto___27639,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args27656 = [];
var len__17416__auto___27730 = arguments.length;
var i__17417__auto___27731 = (0);
while(true){
if((i__17417__auto___27731 < len__17416__auto___27730)){
args27656.push((arguments[i__17417__auto___27731]));

var G__27732 = (i__17417__auto___27731 + (1));
i__17417__auto___27731 = G__27732;
continue;
} else {
}
break;
}

var G__27658 = args27656.length;
switch (G__27658) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27656.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19639__auto___27734 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19639__auto___27734,out){
return (function (){
var f__19640__auto__ = (function (){var switch__19618__auto__ = ((function (c__19639__auto___27734,out){
return (function (state_27700){
var state_val_27701 = (state_27700[(1)]);
if((state_val_27701 === (7))){
var inst_27696 = (state_27700[(2)]);
var state_27700__$1 = state_27700;
var statearr_27702_27735 = state_27700__$1;
(statearr_27702_27735[(2)] = inst_27696);

(statearr_27702_27735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (1))){
var inst_27659 = [];
var inst_27660 = inst_27659;
var inst_27661 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27700__$1 = (function (){var statearr_27703 = state_27700;
(statearr_27703[(7)] = inst_27661);

(statearr_27703[(8)] = inst_27660);

return statearr_27703;
})();
var statearr_27704_27736 = state_27700__$1;
(statearr_27704_27736[(2)] = null);

(statearr_27704_27736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (4))){
var inst_27664 = (state_27700[(9)]);
var inst_27664__$1 = (state_27700[(2)]);
var inst_27665 = (inst_27664__$1 == null);
var inst_27666 = cljs.core.not.call(null,inst_27665);
var state_27700__$1 = (function (){var statearr_27705 = state_27700;
(statearr_27705[(9)] = inst_27664__$1);

return statearr_27705;
})();
if(inst_27666){
var statearr_27706_27737 = state_27700__$1;
(statearr_27706_27737[(1)] = (5));

} else {
var statearr_27707_27738 = state_27700__$1;
(statearr_27707_27738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (15))){
var inst_27690 = (state_27700[(2)]);
var state_27700__$1 = state_27700;
var statearr_27708_27739 = state_27700__$1;
(statearr_27708_27739[(2)] = inst_27690);

(statearr_27708_27739[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (13))){
var state_27700__$1 = state_27700;
var statearr_27709_27740 = state_27700__$1;
(statearr_27709_27740[(2)] = null);

(statearr_27709_27740[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (6))){
var inst_27660 = (state_27700[(8)]);
var inst_27685 = inst_27660.length;
var inst_27686 = (inst_27685 > (0));
var state_27700__$1 = state_27700;
if(cljs.core.truth_(inst_27686)){
var statearr_27710_27741 = state_27700__$1;
(statearr_27710_27741[(1)] = (12));

} else {
var statearr_27711_27742 = state_27700__$1;
(statearr_27711_27742[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (3))){
var inst_27698 = (state_27700[(2)]);
var state_27700__$1 = state_27700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27700__$1,inst_27698);
} else {
if((state_val_27701 === (12))){
var inst_27660 = (state_27700[(8)]);
var inst_27688 = cljs.core.vec.call(null,inst_27660);
var state_27700__$1 = state_27700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27700__$1,(15),out,inst_27688);
} else {
if((state_val_27701 === (2))){
var state_27700__$1 = state_27700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27700__$1,(4),ch);
} else {
if((state_val_27701 === (11))){
var inst_27664 = (state_27700[(9)]);
var inst_27668 = (state_27700[(10)]);
var inst_27678 = (state_27700[(2)]);
var inst_27679 = [];
var inst_27680 = inst_27679.push(inst_27664);
var inst_27660 = inst_27679;
var inst_27661 = inst_27668;
var state_27700__$1 = (function (){var statearr_27712 = state_27700;
(statearr_27712[(11)] = inst_27678);

(statearr_27712[(12)] = inst_27680);

(statearr_27712[(7)] = inst_27661);

(statearr_27712[(8)] = inst_27660);

return statearr_27712;
})();
var statearr_27713_27743 = state_27700__$1;
(statearr_27713_27743[(2)] = null);

(statearr_27713_27743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (9))){
var inst_27660 = (state_27700[(8)]);
var inst_27676 = cljs.core.vec.call(null,inst_27660);
var state_27700__$1 = state_27700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27700__$1,(11),out,inst_27676);
} else {
if((state_val_27701 === (5))){
var inst_27664 = (state_27700[(9)]);
var inst_27668 = (state_27700[(10)]);
var inst_27661 = (state_27700[(7)]);
var inst_27668__$1 = f.call(null,inst_27664);
var inst_27669 = cljs.core._EQ_.call(null,inst_27668__$1,inst_27661);
var inst_27670 = cljs.core.keyword_identical_QMARK_.call(null,inst_27661,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27671 = (inst_27669) || (inst_27670);
var state_27700__$1 = (function (){var statearr_27714 = state_27700;
(statearr_27714[(10)] = inst_27668__$1);

return statearr_27714;
})();
if(cljs.core.truth_(inst_27671)){
var statearr_27715_27744 = state_27700__$1;
(statearr_27715_27744[(1)] = (8));

} else {
var statearr_27716_27745 = state_27700__$1;
(statearr_27716_27745[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (14))){
var inst_27693 = (state_27700[(2)]);
var inst_27694 = cljs.core.async.close_BANG_.call(null,out);
var state_27700__$1 = (function (){var statearr_27718 = state_27700;
(statearr_27718[(13)] = inst_27693);

return statearr_27718;
})();
var statearr_27719_27746 = state_27700__$1;
(statearr_27719_27746[(2)] = inst_27694);

(statearr_27719_27746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (10))){
var inst_27683 = (state_27700[(2)]);
var state_27700__$1 = state_27700;
var statearr_27720_27747 = state_27700__$1;
(statearr_27720_27747[(2)] = inst_27683);

(statearr_27720_27747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (8))){
var inst_27664 = (state_27700[(9)]);
var inst_27668 = (state_27700[(10)]);
var inst_27660 = (state_27700[(8)]);
var inst_27673 = inst_27660.push(inst_27664);
var tmp27717 = inst_27660;
var inst_27660__$1 = tmp27717;
var inst_27661 = inst_27668;
var state_27700__$1 = (function (){var statearr_27721 = state_27700;
(statearr_27721[(14)] = inst_27673);

(statearr_27721[(7)] = inst_27661);

(statearr_27721[(8)] = inst_27660__$1);

return statearr_27721;
})();
var statearr_27722_27748 = state_27700__$1;
(statearr_27722_27748[(2)] = null);

(statearr_27722_27748[(1)] = (2));


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
});})(c__19639__auto___27734,out))
;
return ((function (switch__19618__auto__,c__19639__auto___27734,out){
return (function() {
var cljs$core$async$state_machine__19619__auto__ = null;
var cljs$core$async$state_machine__19619__auto____0 = (function (){
var statearr_27726 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27726[(0)] = cljs$core$async$state_machine__19619__auto__);

(statearr_27726[(1)] = (1));

return statearr_27726;
});
var cljs$core$async$state_machine__19619__auto____1 = (function (state_27700){
while(true){
var ret_value__19620__auto__ = (function (){try{while(true){
var result__19621__auto__ = switch__19618__auto__.call(null,state_27700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19621__auto__;
}
break;
}
}catch (e27727){if((e27727 instanceof Object)){
var ex__19622__auto__ = e27727;
var statearr_27728_27749 = state_27700;
(statearr_27728_27749[(5)] = ex__19622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27750 = state_27700;
state_27700 = G__27750;
continue;
} else {
return ret_value__19620__auto__;
}
break;
}
});
cljs$core$async$state_machine__19619__auto__ = function(state_27700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19619__auto____1.call(this,state_27700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19619__auto____0;
cljs$core$async$state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19619__auto____1;
return cljs$core$async$state_machine__19619__auto__;
})()
;})(switch__19618__auto__,c__19639__auto___27734,out))
})();
var state__19641__auto__ = (function (){var statearr_27729 = f__19640__auto__.call(null);
(statearr_27729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19639__auto___27734);

return statearr_27729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19641__auto__);
});})(c__19639__auto___27734,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1521783863632