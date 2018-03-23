// Compiled by ClojureScript 1.7.145 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__22889 = cljs.core._EQ_;
var expr__22890 = (function (){var or__16358__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__22889.call(null,"true",expr__22890))){
return true;
} else {
if(cljs.core.truth_(pred__22889.call(null,"false",expr__22890))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__22890)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22892__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__22892 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22893__i = 0, G__22893__a = new Array(arguments.length -  0);
while (G__22893__i < G__22893__a.length) {G__22893__a[G__22893__i] = arguments[G__22893__i + 0]; ++G__22893__i;}
  args = new cljs.core.IndexedSeq(G__22893__a,0);
} 
return G__22892__delegate.call(this,args);};
G__22892.cljs$lang$maxFixedArity = 0;
G__22892.cljs$lang$applyTo = (function (arglist__22894){
var args = cljs.core.seq(arglist__22894);
return G__22892__delegate(args);
});
G__22892.cljs$core$IFn$_invoke$arity$variadic = G__22892__delegate;
return G__22892;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__22895){
var map__22898 = p__22895;
var map__22898__$1 = ((((!((map__22898 == null)))?((((map__22898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22898):map__22898);
var message = cljs.core.get.call(null,map__22898__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__22898__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16358__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16346__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16346__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16346__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19639__auto___23060 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19639__auto___23060,ch){
return (function (){
var f__19640__auto__ = (function (){var switch__19618__auto__ = ((function (c__19639__auto___23060,ch){
return (function (state_23029){
var state_val_23030 = (state_23029[(1)]);
if((state_val_23030 === (7))){
var inst_23025 = (state_23029[(2)]);
var state_23029__$1 = state_23029;
var statearr_23031_23061 = state_23029__$1;
(statearr_23031_23061[(2)] = inst_23025);

(statearr_23031_23061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23030 === (1))){
var state_23029__$1 = state_23029;
var statearr_23032_23062 = state_23029__$1;
(statearr_23032_23062[(2)] = null);

(statearr_23032_23062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23030 === (4))){
var inst_22982 = (state_23029[(7)]);
var inst_22982__$1 = (state_23029[(2)]);
var state_23029__$1 = (function (){var statearr_23033 = state_23029;
(statearr_23033[(7)] = inst_22982__$1);

return statearr_23033;
})();
if(cljs.core.truth_(inst_22982__$1)){
var statearr_23034_23063 = state_23029__$1;
(statearr_23034_23063[(1)] = (5));

} else {
var statearr_23035_23064 = state_23029__$1;
(statearr_23035_23064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23030 === (15))){
var inst_22989 = (state_23029[(8)]);
var inst_23004 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_22989);
var inst_23005 = cljs.core.first.call(null,inst_23004);
var inst_23006 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_23005);
var inst_23007 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_23006)].join('');
var inst_23008 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_23007);
var state_23029__$1 = state_23029;
var statearr_23036_23065 = state_23029__$1;
(statearr_23036_23065[(2)] = inst_23008);

(statearr_23036_23065[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23030 === (13))){
var inst_23013 = (state_23029[(2)]);
var state_23029__$1 = state_23029;
var statearr_23037_23066 = state_23029__$1;
(statearr_23037_23066[(2)] = inst_23013);

(statearr_23037_23066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23030 === (6))){
var state_23029__$1 = state_23029;
var statearr_23038_23067 = state_23029__$1;
(statearr_23038_23067[(2)] = null);

(statearr_23038_23067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23030 === (17))){
var inst_23011 = (state_23029[(2)]);
var state_23029__$1 = state_23029;
var statearr_23039_23068 = state_23029__$1;
(statearr_23039_23068[(2)] = inst_23011);

(statearr_23039_23068[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23030 === (3))){
var inst_23027 = (state_23029[(2)]);
var state_23029__$1 = state_23029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23029__$1,inst_23027);
} else {
if((state_val_23030 === (12))){
var inst_22988 = (state_23029[(9)]);
var inst_23002 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_22988,opts);
var state_23029__$1 = state_23029;
if(cljs.core.truth_(inst_23002)){
var statearr_23040_23069 = state_23029__$1;
(statearr_23040_23069[(1)] = (15));

} else {
var statearr_23041_23070 = state_23029__$1;
(statearr_23041_23070[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23030 === (2))){
var state_23029__$1 = state_23029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23029__$1,(4),ch);
} else {
if((state_val_23030 === (11))){
var inst_22989 = (state_23029[(8)]);
var inst_22994 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22995 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_22989);
var inst_22996 = cljs.core.async.timeout.call(null,(1000));
var inst_22997 = [inst_22995,inst_22996];
var inst_22998 = (new cljs.core.PersistentVector(null,2,(5),inst_22994,inst_22997,null));
var state_23029__$1 = state_23029;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23029__$1,(14),inst_22998);
} else {
if((state_val_23030 === (9))){
var inst_22989 = (state_23029[(8)]);
var inst_23015 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_23016 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_22989);
var inst_23017 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23016);
var inst_23018 = [cljs.core.str("Not loading: "),cljs.core.str(inst_23017)].join('');
var inst_23019 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_23018);
var state_23029__$1 = (function (){var statearr_23042 = state_23029;
(statearr_23042[(10)] = inst_23015);

return statearr_23042;
})();
var statearr_23043_23071 = state_23029__$1;
(statearr_23043_23071[(2)] = inst_23019);

(statearr_23043_23071[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23030 === (5))){
var inst_22982 = (state_23029[(7)]);
var inst_22984 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_22985 = (new cljs.core.PersistentArrayMap(null,2,inst_22984,null));
var inst_22986 = (new cljs.core.PersistentHashSet(null,inst_22985,null));
var inst_22987 = figwheel.client.focus_msgs.call(null,inst_22986,inst_22982);
var inst_22988 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_22987);
var inst_22989 = cljs.core.first.call(null,inst_22987);
var inst_22990 = figwheel.client.autoload_QMARK_.call(null);
var state_23029__$1 = (function (){var statearr_23044 = state_23029;
(statearr_23044[(9)] = inst_22988);

(statearr_23044[(8)] = inst_22989);

return statearr_23044;
})();
if(cljs.core.truth_(inst_22990)){
var statearr_23045_23072 = state_23029__$1;
(statearr_23045_23072[(1)] = (8));

} else {
var statearr_23046_23073 = state_23029__$1;
(statearr_23046_23073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23030 === (14))){
var inst_23000 = (state_23029[(2)]);
var state_23029__$1 = state_23029;
var statearr_23047_23074 = state_23029__$1;
(statearr_23047_23074[(2)] = inst_23000);

(statearr_23047_23074[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23030 === (16))){
var state_23029__$1 = state_23029;
var statearr_23048_23075 = state_23029__$1;
(statearr_23048_23075[(2)] = null);

(statearr_23048_23075[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23030 === (10))){
var inst_23021 = (state_23029[(2)]);
var state_23029__$1 = (function (){var statearr_23049 = state_23029;
(statearr_23049[(11)] = inst_23021);

return statearr_23049;
})();
var statearr_23050_23076 = state_23029__$1;
(statearr_23050_23076[(2)] = null);

(statearr_23050_23076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23030 === (8))){
var inst_22988 = (state_23029[(9)]);
var inst_22992 = figwheel.client.reload_file_state_QMARK_.call(null,inst_22988,opts);
var state_23029__$1 = state_23029;
if(cljs.core.truth_(inst_22992)){
var statearr_23051_23077 = state_23029__$1;
(statearr_23051_23077[(1)] = (11));

} else {
var statearr_23052_23078 = state_23029__$1;
(statearr_23052_23078[(1)] = (12));

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
});})(c__19639__auto___23060,ch))
;
return ((function (switch__19618__auto__,c__19639__auto___23060,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19619__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19619__auto____0 = (function (){
var statearr_23056 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23056[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19619__auto__);

(statearr_23056[(1)] = (1));

return statearr_23056;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19619__auto____1 = (function (state_23029){
while(true){
var ret_value__19620__auto__ = (function (){try{while(true){
var result__19621__auto__ = switch__19618__auto__.call(null,state_23029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19621__auto__;
}
break;
}
}catch (e23057){if((e23057 instanceof Object)){
var ex__19622__auto__ = e23057;
var statearr_23058_23079 = state_23029;
(statearr_23058_23079[(5)] = ex__19622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23080 = state_23029;
state_23029 = G__23080;
continue;
} else {
return ret_value__19620__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19619__auto__ = function(state_23029){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19619__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19619__auto____1.call(this,state_23029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19619__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19619__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19619__auto__;
})()
;})(switch__19618__auto__,c__19639__auto___23060,ch))
})();
var state__19641__auto__ = (function (){var statearr_23059 = f__19640__auto__.call(null);
(statearr_23059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19639__auto___23060);

return statearr_23059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19641__auto__);
});})(c__19639__auto___23060,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__23081_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__23081_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_23088 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_23088){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_23086 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_23087 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_23086,_STAR_print_newline_STAR_23087,base_path_23088){
return (function() { 
var G__23089__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__23089 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23090__i = 0, G__23090__a = new Array(arguments.length -  0);
while (G__23090__i < G__23090__a.length) {G__23090__a[G__23090__i] = arguments[G__23090__i + 0]; ++G__23090__i;}
  args = new cljs.core.IndexedSeq(G__23090__a,0);
} 
return G__23089__delegate.call(this,args);};
G__23089.cljs$lang$maxFixedArity = 0;
G__23089.cljs$lang$applyTo = (function (arglist__23091){
var args = cljs.core.seq(arglist__23091);
return G__23089__delegate(args);
});
G__23089.cljs$core$IFn$_invoke$arity$variadic = G__23089__delegate;
return G__23089;
})()
;})(_STAR_print_fn_STAR_23086,_STAR_print_newline_STAR_23087,base_path_23088))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23087;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23086;
}}catch (e23085){if((e23085 instanceof Error)){
var e = e23085;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_23088], null));
} else {
var e = e23085;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_23088))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__23092){
var map__23099 = p__23092;
var map__23099__$1 = ((((!((map__23099 == null)))?((((map__23099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23099):map__23099);
var opts = map__23099__$1;
var build_id = cljs.core.get.call(null,map__23099__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__23099,map__23099__$1,opts,build_id){
return (function (p__23101){
var vec__23102 = p__23101;
var map__23103 = cljs.core.nth.call(null,vec__23102,(0),null);
var map__23103__$1 = ((((!((map__23103 == null)))?((((map__23103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23103):map__23103);
var msg = map__23103__$1;
var msg_name = cljs.core.get.call(null,map__23103__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23102,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__23102,map__23103,map__23103__$1,msg,msg_name,_,map__23099,map__23099__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__23102,map__23103,map__23103__$1,msg,msg_name,_,map__23099,map__23099__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__23099,map__23099__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__23109){
var vec__23110 = p__23109;
var map__23111 = cljs.core.nth.call(null,vec__23110,(0),null);
var map__23111__$1 = ((((!((map__23111 == null)))?((((map__23111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23111):map__23111);
var msg = map__23111__$1;
var msg_name = cljs.core.get.call(null,map__23111__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23110,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__23113){
var map__23123 = p__23113;
var map__23123__$1 = ((((!((map__23123 == null)))?((((map__23123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23123):map__23123);
var on_compile_warning = cljs.core.get.call(null,map__23123__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__23123__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__23123,map__23123__$1,on_compile_warning,on_compile_fail){
return (function (p__23125){
var vec__23126 = p__23125;
var map__23127 = cljs.core.nth.call(null,vec__23126,(0),null);
var map__23127__$1 = ((((!((map__23127 == null)))?((((map__23127.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23127.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23127):map__23127);
var msg = map__23127__$1;
var msg_name = cljs.core.get.call(null,map__23127__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23126,(1));
var pred__23129 = cljs.core._EQ_;
var expr__23130 = msg_name;
if(cljs.core.truth_(pred__23129.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__23130))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__23129.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__23130))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__23123,map__23123__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19639__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19639__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19640__auto__ = (function (){var switch__19618__auto__ = ((function (c__19639__auto__,msg_hist,msg_names,msg){
return (function (state_23346){
var state_val_23347 = (state_23346[(1)]);
if((state_val_23347 === (7))){
var inst_23270 = (state_23346[(2)]);
var state_23346__$1 = state_23346;
if(cljs.core.truth_(inst_23270)){
var statearr_23348_23394 = state_23346__$1;
(statearr_23348_23394[(1)] = (8));

} else {
var statearr_23349_23395 = state_23346__$1;
(statearr_23349_23395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23347 === (20))){
var inst_23340 = (state_23346[(2)]);
var state_23346__$1 = state_23346;
var statearr_23350_23396 = state_23346__$1;
(statearr_23350_23396[(2)] = inst_23340);

(statearr_23350_23396[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23347 === (27))){
var inst_23336 = (state_23346[(2)]);
var state_23346__$1 = state_23346;
var statearr_23351_23397 = state_23346__$1;
(statearr_23351_23397[(2)] = inst_23336);

(statearr_23351_23397[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23347 === (1))){
var inst_23263 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_23346__$1 = state_23346;
if(cljs.core.truth_(inst_23263)){
var statearr_23352_23398 = state_23346__$1;
(statearr_23352_23398[(1)] = (2));

} else {
var statearr_23353_23399 = state_23346__$1;
(statearr_23353_23399[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23347 === (24))){
var inst_23338 = (state_23346[(2)]);
var state_23346__$1 = state_23346;
var statearr_23354_23400 = state_23346__$1;
(statearr_23354_23400[(2)] = inst_23338);

(statearr_23354_23400[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23347 === (4))){
var inst_23344 = (state_23346[(2)]);
var state_23346__$1 = state_23346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23346__$1,inst_23344);
} else {
if((state_val_23347 === (15))){
var inst_23342 = (state_23346[(2)]);
var state_23346__$1 = state_23346;
var statearr_23355_23401 = state_23346__$1;
(statearr_23355_23401[(2)] = inst_23342);

(statearr_23355_23401[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23347 === (21))){
var inst_23301 = (state_23346[(2)]);
var state_23346__$1 = state_23346;
var statearr_23356_23402 = state_23346__$1;
(statearr_23356_23402[(2)] = inst_23301);

(statearr_23356_23402[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23347 === (31))){
var inst_23325 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_23346__$1 = state_23346;
if(cljs.core.truth_(inst_23325)){
var statearr_23357_23403 = state_23346__$1;
(statearr_23357_23403[(1)] = (34));

} else {
var statearr_23358_23404 = state_23346__$1;
(statearr_23358_23404[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23347 === (32))){
var inst_23334 = (state_23346[(2)]);
var state_23346__$1 = state_23346;
var statearr_23359_23405 = state_23346__$1;
(statearr_23359_23405[(2)] = inst_23334);

(statearr_23359_23405[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23347 === (33))){
var inst_23323 = (state_23346[(2)]);
var state_23346__$1 = state_23346;
var statearr_23360_23406 = state_23346__$1;
(statearr_23360_23406[(2)] = inst_23323);

(statearr_23360_23406[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23347 === (13))){
var inst_23284 = figwheel.client.heads_up.clear.call(null);
var state_23346__$1 = state_23346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23346__$1,(16),inst_23284);
} else {
if((state_val_23347 === (22))){
var inst_23305 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23306 = figwheel.client.heads_up.append_message.call(null,inst_23305);
var state_23346__$1 = state_23346;
var statearr_23361_23407 = state_23346__$1;
(statearr_23361_23407[(2)] = inst_23306);

(statearr_23361_23407[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23347 === (36))){
var inst_23332 = (state_23346[(2)]);
var state_23346__$1 = state_23346;
var statearr_23362_23408 = state_23346__$1;
(statearr_23362_23408[(2)] = inst_23332);

(statearr_23362_23408[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23347 === (29))){
var inst_23316 = (state_23346[(2)]);
var state_23346__$1 = state_23346;
var statearr_23363_23409 = state_23346__$1;
(statearr_23363_23409[(2)] = inst_23316);

(statearr_23363_23409[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23347 === (6))){
var inst_23265 = (state_23346[(7)]);
var state_23346__$1 = state_23346;
var statearr_23364_23410 = state_23346__$1;
(statearr_23364_23410[(2)] = inst_23265);

(statearr_23364_23410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23347 === (28))){
var inst_23312 = (state_23346[(2)]);
var inst_23313 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23314 = figwheel.client.heads_up.display_warning.call(null,inst_23313);
var state_23346__$1 = (function (){var statearr_23365 = state_23346;
(statearr_23365[(8)] = inst_23312);

return statearr_23365;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23346__$1,(29),inst_23314);
} else {
if((state_val_23347 === (25))){
var inst_23310 = figwheel.client.heads_up.clear.call(null);
var state_23346__$1 = state_23346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23346__$1,(28),inst_23310);
} else {
if((state_val_23347 === (34))){
var inst_23327 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23346__$1 = state_23346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23346__$1,(37),inst_23327);
} else {
if((state_val_23347 === (17))){
var inst_23292 = (state_23346[(2)]);
var state_23346__$1 = state_23346;
var statearr_23366_23411 = state_23346__$1;
(statearr_23366_23411[(2)] = inst_23292);

(statearr_23366_23411[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23347 === (3))){
var inst_23282 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_23346__$1 = state_23346;
if(cljs.core.truth_(inst_23282)){
var statearr_23367_23412 = state_23346__$1;
(statearr_23367_23412[(1)] = (13));

} else {
var statearr_23368_23413 = state_23346__$1;
(statearr_23368_23413[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23347 === (12))){
var inst_23278 = (state_23346[(2)]);
var state_23346__$1 = state_23346;
var statearr_23369_23414 = state_23346__$1;
(statearr_23369_23414[(2)] = inst_23278);

(statearr_23369_23414[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23347 === (2))){
var inst_23265 = (state_23346[(7)]);
var inst_23265__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_23346__$1 = (function (){var statearr_23370 = state_23346;
(statearr_23370[(7)] = inst_23265__$1);

return statearr_23370;
})();
if(cljs.core.truth_(inst_23265__$1)){
var statearr_23371_23415 = state_23346__$1;
(statearr_23371_23415[(1)] = (5));

} else {
var statearr_23372_23416 = state_23346__$1;
(statearr_23372_23416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23347 === (23))){
var inst_23308 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_23346__$1 = state_23346;
if(cljs.core.truth_(inst_23308)){
var statearr_23373_23417 = state_23346__$1;
(statearr_23373_23417[(1)] = (25));

} else {
var statearr_23374_23418 = state_23346__$1;
(statearr_23374_23418[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23347 === (35))){
var state_23346__$1 = state_23346;
var statearr_23375_23419 = state_23346__$1;
(statearr_23375_23419[(2)] = null);

(statearr_23375_23419[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23347 === (19))){
var inst_23303 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_23346__$1 = state_23346;
if(cljs.core.truth_(inst_23303)){
var statearr_23376_23420 = state_23346__$1;
(statearr_23376_23420[(1)] = (22));

} else {
var statearr_23377_23421 = state_23346__$1;
(statearr_23377_23421[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23347 === (11))){
var inst_23274 = (state_23346[(2)]);
var state_23346__$1 = state_23346;
var statearr_23378_23422 = state_23346__$1;
(statearr_23378_23422[(2)] = inst_23274);

(statearr_23378_23422[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23347 === (9))){
var inst_23276 = figwheel.client.heads_up.clear.call(null);
var state_23346__$1 = state_23346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23346__$1,(12),inst_23276);
} else {
if((state_val_23347 === (5))){
var inst_23267 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_23346__$1 = state_23346;
var statearr_23379_23423 = state_23346__$1;
(statearr_23379_23423[(2)] = inst_23267);

(statearr_23379_23423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23347 === (14))){
var inst_23294 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_23346__$1 = state_23346;
if(cljs.core.truth_(inst_23294)){
var statearr_23380_23424 = state_23346__$1;
(statearr_23380_23424[(1)] = (18));

} else {
var statearr_23381_23425 = state_23346__$1;
(statearr_23381_23425[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23347 === (26))){
var inst_23318 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_23346__$1 = state_23346;
if(cljs.core.truth_(inst_23318)){
var statearr_23382_23426 = state_23346__$1;
(statearr_23382_23426[(1)] = (30));

} else {
var statearr_23383_23427 = state_23346__$1;
(statearr_23383_23427[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23347 === (16))){
var inst_23286 = (state_23346[(2)]);
var inst_23287 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23288 = figwheel.client.format_messages.call(null,inst_23287);
var inst_23289 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23290 = figwheel.client.heads_up.display_error.call(null,inst_23288,inst_23289);
var state_23346__$1 = (function (){var statearr_23384 = state_23346;
(statearr_23384[(9)] = inst_23286);

return statearr_23384;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23346__$1,(17),inst_23290);
} else {
if((state_val_23347 === (30))){
var inst_23320 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23321 = figwheel.client.heads_up.display_warning.call(null,inst_23320);
var state_23346__$1 = state_23346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23346__$1,(33),inst_23321);
} else {
if((state_val_23347 === (10))){
var inst_23280 = (state_23346[(2)]);
var state_23346__$1 = state_23346;
var statearr_23385_23428 = state_23346__$1;
(statearr_23385_23428[(2)] = inst_23280);

(statearr_23385_23428[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23347 === (18))){
var inst_23296 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23297 = figwheel.client.format_messages.call(null,inst_23296);
var inst_23298 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23299 = figwheel.client.heads_up.display_error.call(null,inst_23297,inst_23298);
var state_23346__$1 = state_23346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23346__$1,(21),inst_23299);
} else {
if((state_val_23347 === (37))){
var inst_23329 = (state_23346[(2)]);
var state_23346__$1 = state_23346;
var statearr_23386_23429 = state_23346__$1;
(statearr_23386_23429[(2)] = inst_23329);

(statearr_23386_23429[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23347 === (8))){
var inst_23272 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23346__$1 = state_23346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23346__$1,(11),inst_23272);
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
});})(c__19639__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19618__auto__,c__19639__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19619__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19619__auto____0 = (function (){
var statearr_23390 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23390[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19619__auto__);

(statearr_23390[(1)] = (1));

return statearr_23390;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19619__auto____1 = (function (state_23346){
while(true){
var ret_value__19620__auto__ = (function (){try{while(true){
var result__19621__auto__ = switch__19618__auto__.call(null,state_23346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19621__auto__;
}
break;
}
}catch (e23391){if((e23391 instanceof Object)){
var ex__19622__auto__ = e23391;
var statearr_23392_23430 = state_23346;
(statearr_23392_23430[(5)] = ex__19622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23431 = state_23346;
state_23346 = G__23431;
continue;
} else {
return ret_value__19620__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19619__auto__ = function(state_23346){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19619__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19619__auto____1.call(this,state_23346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19619__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19619__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19619__auto__;
})()
;})(switch__19618__auto__,c__19639__auto__,msg_hist,msg_names,msg))
})();
var state__19641__auto__ = (function (){var statearr_23393 = f__19640__auto__.call(null);
(statearr_23393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19639__auto__);

return statearr_23393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19641__auto__);
});})(c__19639__auto__,msg_hist,msg_names,msg))
);

return c__19639__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19639__auto___23494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19639__auto___23494,ch){
return (function (){
var f__19640__auto__ = (function (){var switch__19618__auto__ = ((function (c__19639__auto___23494,ch){
return (function (state_23477){
var state_val_23478 = (state_23477[(1)]);
if((state_val_23478 === (1))){
var state_23477__$1 = state_23477;
var statearr_23479_23495 = state_23477__$1;
(statearr_23479_23495[(2)] = null);

(statearr_23479_23495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23478 === (2))){
var state_23477__$1 = state_23477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23477__$1,(4),ch);
} else {
if((state_val_23478 === (3))){
var inst_23475 = (state_23477[(2)]);
var state_23477__$1 = state_23477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23477__$1,inst_23475);
} else {
if((state_val_23478 === (4))){
var inst_23465 = (state_23477[(7)]);
var inst_23465__$1 = (state_23477[(2)]);
var state_23477__$1 = (function (){var statearr_23480 = state_23477;
(statearr_23480[(7)] = inst_23465__$1);

return statearr_23480;
})();
if(cljs.core.truth_(inst_23465__$1)){
var statearr_23481_23496 = state_23477__$1;
(statearr_23481_23496[(1)] = (5));

} else {
var statearr_23482_23497 = state_23477__$1;
(statearr_23482_23497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23478 === (5))){
var inst_23465 = (state_23477[(7)]);
var inst_23467 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_23465);
var state_23477__$1 = state_23477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23477__$1,(8),inst_23467);
} else {
if((state_val_23478 === (6))){
var state_23477__$1 = state_23477;
var statearr_23483_23498 = state_23477__$1;
(statearr_23483_23498[(2)] = null);

(statearr_23483_23498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23478 === (7))){
var inst_23473 = (state_23477[(2)]);
var state_23477__$1 = state_23477;
var statearr_23484_23499 = state_23477__$1;
(statearr_23484_23499[(2)] = inst_23473);

(statearr_23484_23499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23478 === (8))){
var inst_23469 = (state_23477[(2)]);
var state_23477__$1 = (function (){var statearr_23485 = state_23477;
(statearr_23485[(8)] = inst_23469);

return statearr_23485;
})();
var statearr_23486_23500 = state_23477__$1;
(statearr_23486_23500[(2)] = null);

(statearr_23486_23500[(1)] = (2));


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
});})(c__19639__auto___23494,ch))
;
return ((function (switch__19618__auto__,c__19639__auto___23494,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19619__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19619__auto____0 = (function (){
var statearr_23490 = [null,null,null,null,null,null,null,null,null];
(statearr_23490[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19619__auto__);

(statearr_23490[(1)] = (1));

return statearr_23490;
});
var figwheel$client$heads_up_plugin_$_state_machine__19619__auto____1 = (function (state_23477){
while(true){
var ret_value__19620__auto__ = (function (){try{while(true){
var result__19621__auto__ = switch__19618__auto__.call(null,state_23477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19621__auto__;
}
break;
}
}catch (e23491){if((e23491 instanceof Object)){
var ex__19622__auto__ = e23491;
var statearr_23492_23501 = state_23477;
(statearr_23492_23501[(5)] = ex__19622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23502 = state_23477;
state_23477 = G__23502;
continue;
} else {
return ret_value__19620__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19619__auto__ = function(state_23477){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19619__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19619__auto____1.call(this,state_23477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19619__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19619__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19619__auto__;
})()
;})(switch__19618__auto__,c__19639__auto___23494,ch))
})();
var state__19641__auto__ = (function (){var statearr_23493 = f__19640__auto__.call(null);
(statearr_23493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19639__auto___23494);

return statearr_23493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19641__auto__);
});})(c__19639__auto___23494,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19639__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19639__auto__){
return (function (){
var f__19640__auto__ = (function (){var switch__19618__auto__ = ((function (c__19639__auto__){
return (function (state_23523){
var state_val_23524 = (state_23523[(1)]);
if((state_val_23524 === (1))){
var inst_23518 = cljs.core.async.timeout.call(null,(3000));
var state_23523__$1 = state_23523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23523__$1,(2),inst_23518);
} else {
if((state_val_23524 === (2))){
var inst_23520 = (state_23523[(2)]);
var inst_23521 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_23523__$1 = (function (){var statearr_23525 = state_23523;
(statearr_23525[(7)] = inst_23520);

return statearr_23525;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23523__$1,inst_23521);
} else {
return null;
}
}
});})(c__19639__auto__))
;
return ((function (switch__19618__auto__,c__19639__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19619__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19619__auto____0 = (function (){
var statearr_23529 = [null,null,null,null,null,null,null,null];
(statearr_23529[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19619__auto__);

(statearr_23529[(1)] = (1));

return statearr_23529;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19619__auto____1 = (function (state_23523){
while(true){
var ret_value__19620__auto__ = (function (){try{while(true){
var result__19621__auto__ = switch__19618__auto__.call(null,state_23523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19621__auto__;
}
break;
}
}catch (e23530){if((e23530 instanceof Object)){
var ex__19622__auto__ = e23530;
var statearr_23531_23533 = state_23523;
(statearr_23531_23533[(5)] = ex__19622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23534 = state_23523;
state_23523 = G__23534;
continue;
} else {
return ret_value__19620__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19619__auto__ = function(state_23523){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19619__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19619__auto____1.call(this,state_23523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19619__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19619__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19619__auto__;
})()
;})(switch__19618__auto__,c__19639__auto__))
})();
var state__19641__auto__ = (function (){var statearr_23532 = f__19640__auto__.call(null);
(statearr_23532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19639__auto__);

return statearr_23532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19641__auto__);
});})(c__19639__auto__))
);

return c__19639__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__23535){
var map__23542 = p__23535;
var map__23542__$1 = ((((!((map__23542 == null)))?((((map__23542.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23542.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23542):map__23542);
var ed = map__23542__$1;
var formatted_exception = cljs.core.get.call(null,map__23542__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__23542__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__23542__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__23544_23548 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__23545_23549 = null;
var count__23546_23550 = (0);
var i__23547_23551 = (0);
while(true){
if((i__23547_23551 < count__23546_23550)){
var msg_23552 = cljs.core._nth.call(null,chunk__23545_23549,i__23547_23551);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_23552);

var G__23553 = seq__23544_23548;
var G__23554 = chunk__23545_23549;
var G__23555 = count__23546_23550;
var G__23556 = (i__23547_23551 + (1));
seq__23544_23548 = G__23553;
chunk__23545_23549 = G__23554;
count__23546_23550 = G__23555;
i__23547_23551 = G__23556;
continue;
} else {
var temp__4425__auto___23557 = cljs.core.seq.call(null,seq__23544_23548);
if(temp__4425__auto___23557){
var seq__23544_23558__$1 = temp__4425__auto___23557;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23544_23558__$1)){
var c__17161__auto___23559 = cljs.core.chunk_first.call(null,seq__23544_23558__$1);
var G__23560 = cljs.core.chunk_rest.call(null,seq__23544_23558__$1);
var G__23561 = c__17161__auto___23559;
var G__23562 = cljs.core.count.call(null,c__17161__auto___23559);
var G__23563 = (0);
seq__23544_23548 = G__23560;
chunk__23545_23549 = G__23561;
count__23546_23550 = G__23562;
i__23547_23551 = G__23563;
continue;
} else {
var msg_23564 = cljs.core.first.call(null,seq__23544_23558__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_23564);

var G__23565 = cljs.core.next.call(null,seq__23544_23558__$1);
var G__23566 = null;
var G__23567 = (0);
var G__23568 = (0);
seq__23544_23548 = G__23565;
chunk__23545_23549 = G__23566;
count__23546_23550 = G__23567;
i__23547_23551 = G__23568;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__23569){
var map__23572 = p__23569;
var map__23572__$1 = ((((!((map__23572 == null)))?((((map__23572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23572):map__23572);
var w = map__23572__$1;
var message = cljs.core.get.call(null,map__23572__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16346__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16346__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16346__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__23580 = cljs.core.seq.call(null,plugins);
var chunk__23581 = null;
var count__23582 = (0);
var i__23583 = (0);
while(true){
if((i__23583 < count__23582)){
var vec__23584 = cljs.core._nth.call(null,chunk__23581,i__23583);
var k = cljs.core.nth.call(null,vec__23584,(0),null);
var plugin = cljs.core.nth.call(null,vec__23584,(1),null);
if(cljs.core.truth_(plugin)){
var pl_23586 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__23580,chunk__23581,count__23582,i__23583,pl_23586,vec__23584,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_23586.call(null,msg_hist);
});})(seq__23580,chunk__23581,count__23582,i__23583,pl_23586,vec__23584,k,plugin))
);
} else {
}

var G__23587 = seq__23580;
var G__23588 = chunk__23581;
var G__23589 = count__23582;
var G__23590 = (i__23583 + (1));
seq__23580 = G__23587;
chunk__23581 = G__23588;
count__23582 = G__23589;
i__23583 = G__23590;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23580);
if(temp__4425__auto__){
var seq__23580__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23580__$1)){
var c__17161__auto__ = cljs.core.chunk_first.call(null,seq__23580__$1);
var G__23591 = cljs.core.chunk_rest.call(null,seq__23580__$1);
var G__23592 = c__17161__auto__;
var G__23593 = cljs.core.count.call(null,c__17161__auto__);
var G__23594 = (0);
seq__23580 = G__23591;
chunk__23581 = G__23592;
count__23582 = G__23593;
i__23583 = G__23594;
continue;
} else {
var vec__23585 = cljs.core.first.call(null,seq__23580__$1);
var k = cljs.core.nth.call(null,vec__23585,(0),null);
var plugin = cljs.core.nth.call(null,vec__23585,(1),null);
if(cljs.core.truth_(plugin)){
var pl_23595 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__23580,chunk__23581,count__23582,i__23583,pl_23595,vec__23585,k,plugin,seq__23580__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_23595.call(null,msg_hist);
});})(seq__23580,chunk__23581,count__23582,i__23583,pl_23595,vec__23585,k,plugin,seq__23580__$1,temp__4425__auto__))
);
} else {
}

var G__23596 = cljs.core.next.call(null,seq__23580__$1);
var G__23597 = null;
var G__23598 = (0);
var G__23599 = (0);
seq__23580 = G__23596;
chunk__23581 = G__23597;
count__23582 = G__23598;
i__23583 = G__23599;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args23600 = [];
var len__17416__auto___23603 = arguments.length;
var i__17417__auto___23604 = (0);
while(true){
if((i__17417__auto___23604 < len__17416__auto___23603)){
args23600.push((arguments[i__17417__auto___23604]));

var G__23605 = (i__17417__auto___23604 + (1));
i__17417__auto___23604 = G__23605;
continue;
} else {
}
break;
}

var G__23602 = args23600.length;
switch (G__23602) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23600.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17423__auto__ = [];
var len__17416__auto___23611 = arguments.length;
var i__17417__auto___23612 = (0);
while(true){
if((i__17417__auto___23612 < len__17416__auto___23611)){
args__17423__auto__.push((arguments[i__17417__auto___23612]));

var G__23613 = (i__17417__auto___23612 + (1));
i__17417__auto___23612 = G__23613;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((0) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17424__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__23608){
var map__23609 = p__23608;
var map__23609__$1 = ((((!((map__23609 == null)))?((((map__23609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23609):map__23609);
var opts = map__23609__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq23607){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23607));
});

//# sourceMappingURL=client.js.map?rel=1521783861073