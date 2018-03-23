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
var pred__25574 = cljs.core._EQ_;
var expr__25575 = (function (){var or__16358__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__25574.call(null,"true",expr__25575))){
return true;
} else {
if(cljs.core.truth_(pred__25574.call(null,"false",expr__25575))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__25575)].join('')));
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
var G__25577__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25577 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25578__i = 0, G__25578__a = new Array(arguments.length -  0);
while (G__25578__i < G__25578__a.length) {G__25578__a[G__25578__i] = arguments[G__25578__i + 0]; ++G__25578__i;}
  args = new cljs.core.IndexedSeq(G__25578__a,0);
} 
return G__25577__delegate.call(this,args);};
G__25577.cljs$lang$maxFixedArity = 0;
G__25577.cljs$lang$applyTo = (function (arglist__25579){
var args = cljs.core.seq(arglist__25579);
return G__25577__delegate(args);
});
G__25577.cljs$core$IFn$_invoke$arity$variadic = G__25577__delegate;
return G__25577;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25580){
var map__25583 = p__25580;
var map__25583__$1 = ((((!((map__25583 == null)))?((((map__25583.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25583.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25583):map__25583);
var message = cljs.core.get.call(null,map__25583__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__25583__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__19438__auto___25745 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___25745,ch){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___25745,ch){
return (function (state_25714){
var state_val_25715 = (state_25714[(1)]);
if((state_val_25715 === (7))){
var inst_25710 = (state_25714[(2)]);
var state_25714__$1 = state_25714;
var statearr_25716_25746 = state_25714__$1;
(statearr_25716_25746[(2)] = inst_25710);

(statearr_25716_25746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (1))){
var state_25714__$1 = state_25714;
var statearr_25717_25747 = state_25714__$1;
(statearr_25717_25747[(2)] = null);

(statearr_25717_25747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (4))){
var inst_25667 = (state_25714[(7)]);
var inst_25667__$1 = (state_25714[(2)]);
var state_25714__$1 = (function (){var statearr_25718 = state_25714;
(statearr_25718[(7)] = inst_25667__$1);

return statearr_25718;
})();
if(cljs.core.truth_(inst_25667__$1)){
var statearr_25719_25748 = state_25714__$1;
(statearr_25719_25748[(1)] = (5));

} else {
var statearr_25720_25749 = state_25714__$1;
(statearr_25720_25749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (15))){
var inst_25674 = (state_25714[(8)]);
var inst_25689 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25674);
var inst_25690 = cljs.core.first.call(null,inst_25689);
var inst_25691 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25690);
var inst_25692 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_25691)].join('');
var inst_25693 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_25692);
var state_25714__$1 = state_25714;
var statearr_25721_25750 = state_25714__$1;
(statearr_25721_25750[(2)] = inst_25693);

(statearr_25721_25750[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (13))){
var inst_25698 = (state_25714[(2)]);
var state_25714__$1 = state_25714;
var statearr_25722_25751 = state_25714__$1;
(statearr_25722_25751[(2)] = inst_25698);

(statearr_25722_25751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (6))){
var state_25714__$1 = state_25714;
var statearr_25723_25752 = state_25714__$1;
(statearr_25723_25752[(2)] = null);

(statearr_25723_25752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (17))){
var inst_25696 = (state_25714[(2)]);
var state_25714__$1 = state_25714;
var statearr_25724_25753 = state_25714__$1;
(statearr_25724_25753[(2)] = inst_25696);

(statearr_25724_25753[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (3))){
var inst_25712 = (state_25714[(2)]);
var state_25714__$1 = state_25714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25714__$1,inst_25712);
} else {
if((state_val_25715 === (12))){
var inst_25673 = (state_25714[(9)]);
var inst_25687 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25673,opts);
var state_25714__$1 = state_25714;
if(cljs.core.truth_(inst_25687)){
var statearr_25725_25754 = state_25714__$1;
(statearr_25725_25754[(1)] = (15));

} else {
var statearr_25726_25755 = state_25714__$1;
(statearr_25726_25755[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (2))){
var state_25714__$1 = state_25714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25714__$1,(4),ch);
} else {
if((state_val_25715 === (11))){
var inst_25674 = (state_25714[(8)]);
var inst_25679 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25680 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25674);
var inst_25681 = cljs.core.async.timeout.call(null,(1000));
var inst_25682 = [inst_25680,inst_25681];
var inst_25683 = (new cljs.core.PersistentVector(null,2,(5),inst_25679,inst_25682,null));
var state_25714__$1 = state_25714;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25714__$1,(14),inst_25683);
} else {
if((state_val_25715 === (9))){
var inst_25674 = (state_25714[(8)]);
var inst_25700 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_25701 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25674);
var inst_25702 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25701);
var inst_25703 = [cljs.core.str("Not loading: "),cljs.core.str(inst_25702)].join('');
var inst_25704 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_25703);
var state_25714__$1 = (function (){var statearr_25727 = state_25714;
(statearr_25727[(10)] = inst_25700);

return statearr_25727;
})();
var statearr_25728_25756 = state_25714__$1;
(statearr_25728_25756[(2)] = inst_25704);

(statearr_25728_25756[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (5))){
var inst_25667 = (state_25714[(7)]);
var inst_25669 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25670 = (new cljs.core.PersistentArrayMap(null,2,inst_25669,null));
var inst_25671 = (new cljs.core.PersistentHashSet(null,inst_25670,null));
var inst_25672 = figwheel.client.focus_msgs.call(null,inst_25671,inst_25667);
var inst_25673 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25672);
var inst_25674 = cljs.core.first.call(null,inst_25672);
var inst_25675 = figwheel.client.autoload_QMARK_.call(null);
var state_25714__$1 = (function (){var statearr_25729 = state_25714;
(statearr_25729[(9)] = inst_25673);

(statearr_25729[(8)] = inst_25674);

return statearr_25729;
})();
if(cljs.core.truth_(inst_25675)){
var statearr_25730_25757 = state_25714__$1;
(statearr_25730_25757[(1)] = (8));

} else {
var statearr_25731_25758 = state_25714__$1;
(statearr_25731_25758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (14))){
var inst_25685 = (state_25714[(2)]);
var state_25714__$1 = state_25714;
var statearr_25732_25759 = state_25714__$1;
(statearr_25732_25759[(2)] = inst_25685);

(statearr_25732_25759[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (16))){
var state_25714__$1 = state_25714;
var statearr_25733_25760 = state_25714__$1;
(statearr_25733_25760[(2)] = null);

(statearr_25733_25760[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (10))){
var inst_25706 = (state_25714[(2)]);
var state_25714__$1 = (function (){var statearr_25734 = state_25714;
(statearr_25734[(11)] = inst_25706);

return statearr_25734;
})();
var statearr_25735_25761 = state_25714__$1;
(statearr_25735_25761[(2)] = null);

(statearr_25735_25761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (8))){
var inst_25673 = (state_25714[(9)]);
var inst_25677 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25673,opts);
var state_25714__$1 = state_25714;
if(cljs.core.truth_(inst_25677)){
var statearr_25736_25762 = state_25714__$1;
(statearr_25736_25762[(1)] = (11));

} else {
var statearr_25737_25763 = state_25714__$1;
(statearr_25737_25763[(1)] = (12));

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
});})(c__19438__auto___25745,ch))
;
return ((function (switch__19373__auto__,c__19438__auto___25745,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19374__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19374__auto____0 = (function (){
var statearr_25741 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25741[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19374__auto__);

(statearr_25741[(1)] = (1));

return statearr_25741;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19374__auto____1 = (function (state_25714){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_25714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e25742){if((e25742 instanceof Object)){
var ex__19377__auto__ = e25742;
var statearr_25743_25764 = state_25714;
(statearr_25743_25764[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25765 = state_25714;
state_25714 = G__25765;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19374__auto__ = function(state_25714){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19374__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19374__auto____1.call(this,state_25714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19374__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19374__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___25745,ch))
})();
var state__19440__auto__ = (function (){var statearr_25744 = f__19439__auto__.call(null);
(statearr_25744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___25745);

return statearr_25744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___25745,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25766_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25766_SHARP_));
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
var base_path_25773 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25773){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_25771 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25772 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_25771,_STAR_print_newline_STAR_25772,base_path_25773){
return (function() { 
var G__25774__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25774 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25775__i = 0, G__25775__a = new Array(arguments.length -  0);
while (G__25775__i < G__25775__a.length) {G__25775__a[G__25775__i] = arguments[G__25775__i + 0]; ++G__25775__i;}
  args = new cljs.core.IndexedSeq(G__25775__a,0);
} 
return G__25774__delegate.call(this,args);};
G__25774.cljs$lang$maxFixedArity = 0;
G__25774.cljs$lang$applyTo = (function (arglist__25776){
var args = cljs.core.seq(arglist__25776);
return G__25774__delegate(args);
});
G__25774.cljs$core$IFn$_invoke$arity$variadic = G__25774__delegate;
return G__25774;
})()
;})(_STAR_print_fn_STAR_25771,_STAR_print_newline_STAR_25772,base_path_25773))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25772;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25771;
}}catch (e25770){if((e25770 instanceof Error)){
var e = e25770;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25773], null));
} else {
var e = e25770;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25773))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25777){
var map__25784 = p__25777;
var map__25784__$1 = ((((!((map__25784 == null)))?((((map__25784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25784):map__25784);
var opts = map__25784__$1;
var build_id = cljs.core.get.call(null,map__25784__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25784,map__25784__$1,opts,build_id){
return (function (p__25786){
var vec__25787 = p__25786;
var map__25788 = cljs.core.nth.call(null,vec__25787,(0),null);
var map__25788__$1 = ((((!((map__25788 == null)))?((((map__25788.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25788.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25788):map__25788);
var msg = map__25788__$1;
var msg_name = cljs.core.get.call(null,map__25788__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25787,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__25787,map__25788,map__25788__$1,msg,msg_name,_,map__25784,map__25784__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25787,map__25788,map__25788__$1,msg,msg_name,_,map__25784,map__25784__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25784,map__25784__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25794){
var vec__25795 = p__25794;
var map__25796 = cljs.core.nth.call(null,vec__25795,(0),null);
var map__25796__$1 = ((((!((map__25796 == null)))?((((map__25796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25796):map__25796);
var msg = map__25796__$1;
var msg_name = cljs.core.get.call(null,map__25796__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25795,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25798){
var map__25808 = p__25798;
var map__25808__$1 = ((((!((map__25808 == null)))?((((map__25808.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25808.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25808):map__25808);
var on_compile_warning = cljs.core.get.call(null,map__25808__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__25808__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__25808,map__25808__$1,on_compile_warning,on_compile_fail){
return (function (p__25810){
var vec__25811 = p__25810;
var map__25812 = cljs.core.nth.call(null,vec__25811,(0),null);
var map__25812__$1 = ((((!((map__25812 == null)))?((((map__25812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25812):map__25812);
var msg = map__25812__$1;
var msg_name = cljs.core.get.call(null,map__25812__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25811,(1));
var pred__25814 = cljs.core._EQ_;
var expr__25815 = msg_name;
if(cljs.core.truth_(pred__25814.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25815))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25814.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25815))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25808,map__25808__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19438__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto__,msg_hist,msg_names,msg){
return (function (state_26031){
var state_val_26032 = (state_26031[(1)]);
if((state_val_26032 === (7))){
var inst_25955 = (state_26031[(2)]);
var state_26031__$1 = state_26031;
if(cljs.core.truth_(inst_25955)){
var statearr_26033_26079 = state_26031__$1;
(statearr_26033_26079[(1)] = (8));

} else {
var statearr_26034_26080 = state_26031__$1;
(statearr_26034_26080[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26032 === (20))){
var inst_26025 = (state_26031[(2)]);
var state_26031__$1 = state_26031;
var statearr_26035_26081 = state_26031__$1;
(statearr_26035_26081[(2)] = inst_26025);

(statearr_26035_26081[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26032 === (27))){
var inst_26021 = (state_26031[(2)]);
var state_26031__$1 = state_26031;
var statearr_26036_26082 = state_26031__$1;
(statearr_26036_26082[(2)] = inst_26021);

(statearr_26036_26082[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26032 === (1))){
var inst_25948 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26031__$1 = state_26031;
if(cljs.core.truth_(inst_25948)){
var statearr_26037_26083 = state_26031__$1;
(statearr_26037_26083[(1)] = (2));

} else {
var statearr_26038_26084 = state_26031__$1;
(statearr_26038_26084[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26032 === (24))){
var inst_26023 = (state_26031[(2)]);
var state_26031__$1 = state_26031;
var statearr_26039_26085 = state_26031__$1;
(statearr_26039_26085[(2)] = inst_26023);

(statearr_26039_26085[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26032 === (4))){
var inst_26029 = (state_26031[(2)]);
var state_26031__$1 = state_26031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26031__$1,inst_26029);
} else {
if((state_val_26032 === (15))){
var inst_26027 = (state_26031[(2)]);
var state_26031__$1 = state_26031;
var statearr_26040_26086 = state_26031__$1;
(statearr_26040_26086[(2)] = inst_26027);

(statearr_26040_26086[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26032 === (21))){
var inst_25986 = (state_26031[(2)]);
var state_26031__$1 = state_26031;
var statearr_26041_26087 = state_26031__$1;
(statearr_26041_26087[(2)] = inst_25986);

(statearr_26041_26087[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26032 === (31))){
var inst_26010 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26031__$1 = state_26031;
if(cljs.core.truth_(inst_26010)){
var statearr_26042_26088 = state_26031__$1;
(statearr_26042_26088[(1)] = (34));

} else {
var statearr_26043_26089 = state_26031__$1;
(statearr_26043_26089[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26032 === (32))){
var inst_26019 = (state_26031[(2)]);
var state_26031__$1 = state_26031;
var statearr_26044_26090 = state_26031__$1;
(statearr_26044_26090[(2)] = inst_26019);

(statearr_26044_26090[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26032 === (33))){
var inst_26008 = (state_26031[(2)]);
var state_26031__$1 = state_26031;
var statearr_26045_26091 = state_26031__$1;
(statearr_26045_26091[(2)] = inst_26008);

(statearr_26045_26091[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26032 === (13))){
var inst_25969 = figwheel.client.heads_up.clear.call(null);
var state_26031__$1 = state_26031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26031__$1,(16),inst_25969);
} else {
if((state_val_26032 === (22))){
var inst_25990 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25991 = figwheel.client.heads_up.append_message.call(null,inst_25990);
var state_26031__$1 = state_26031;
var statearr_26046_26092 = state_26031__$1;
(statearr_26046_26092[(2)] = inst_25991);

(statearr_26046_26092[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26032 === (36))){
var inst_26017 = (state_26031[(2)]);
var state_26031__$1 = state_26031;
var statearr_26047_26093 = state_26031__$1;
(statearr_26047_26093[(2)] = inst_26017);

(statearr_26047_26093[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26032 === (29))){
var inst_26001 = (state_26031[(2)]);
var state_26031__$1 = state_26031;
var statearr_26048_26094 = state_26031__$1;
(statearr_26048_26094[(2)] = inst_26001);

(statearr_26048_26094[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26032 === (6))){
var inst_25950 = (state_26031[(7)]);
var state_26031__$1 = state_26031;
var statearr_26049_26095 = state_26031__$1;
(statearr_26049_26095[(2)] = inst_25950);

(statearr_26049_26095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26032 === (28))){
var inst_25997 = (state_26031[(2)]);
var inst_25998 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25999 = figwheel.client.heads_up.display_warning.call(null,inst_25998);
var state_26031__$1 = (function (){var statearr_26050 = state_26031;
(statearr_26050[(8)] = inst_25997);

return statearr_26050;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26031__$1,(29),inst_25999);
} else {
if((state_val_26032 === (25))){
var inst_25995 = figwheel.client.heads_up.clear.call(null);
var state_26031__$1 = state_26031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26031__$1,(28),inst_25995);
} else {
if((state_val_26032 === (34))){
var inst_26012 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26031__$1 = state_26031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26031__$1,(37),inst_26012);
} else {
if((state_val_26032 === (17))){
var inst_25977 = (state_26031[(2)]);
var state_26031__$1 = state_26031;
var statearr_26051_26096 = state_26031__$1;
(statearr_26051_26096[(2)] = inst_25977);

(statearr_26051_26096[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26032 === (3))){
var inst_25967 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26031__$1 = state_26031;
if(cljs.core.truth_(inst_25967)){
var statearr_26052_26097 = state_26031__$1;
(statearr_26052_26097[(1)] = (13));

} else {
var statearr_26053_26098 = state_26031__$1;
(statearr_26053_26098[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26032 === (12))){
var inst_25963 = (state_26031[(2)]);
var state_26031__$1 = state_26031;
var statearr_26054_26099 = state_26031__$1;
(statearr_26054_26099[(2)] = inst_25963);

(statearr_26054_26099[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26032 === (2))){
var inst_25950 = (state_26031[(7)]);
var inst_25950__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26031__$1 = (function (){var statearr_26055 = state_26031;
(statearr_26055[(7)] = inst_25950__$1);

return statearr_26055;
})();
if(cljs.core.truth_(inst_25950__$1)){
var statearr_26056_26100 = state_26031__$1;
(statearr_26056_26100[(1)] = (5));

} else {
var statearr_26057_26101 = state_26031__$1;
(statearr_26057_26101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26032 === (23))){
var inst_25993 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26031__$1 = state_26031;
if(cljs.core.truth_(inst_25993)){
var statearr_26058_26102 = state_26031__$1;
(statearr_26058_26102[(1)] = (25));

} else {
var statearr_26059_26103 = state_26031__$1;
(statearr_26059_26103[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26032 === (35))){
var state_26031__$1 = state_26031;
var statearr_26060_26104 = state_26031__$1;
(statearr_26060_26104[(2)] = null);

(statearr_26060_26104[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26032 === (19))){
var inst_25988 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26031__$1 = state_26031;
if(cljs.core.truth_(inst_25988)){
var statearr_26061_26105 = state_26031__$1;
(statearr_26061_26105[(1)] = (22));

} else {
var statearr_26062_26106 = state_26031__$1;
(statearr_26062_26106[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26032 === (11))){
var inst_25959 = (state_26031[(2)]);
var state_26031__$1 = state_26031;
var statearr_26063_26107 = state_26031__$1;
(statearr_26063_26107[(2)] = inst_25959);

(statearr_26063_26107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26032 === (9))){
var inst_25961 = figwheel.client.heads_up.clear.call(null);
var state_26031__$1 = state_26031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26031__$1,(12),inst_25961);
} else {
if((state_val_26032 === (5))){
var inst_25952 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26031__$1 = state_26031;
var statearr_26064_26108 = state_26031__$1;
(statearr_26064_26108[(2)] = inst_25952);

(statearr_26064_26108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26032 === (14))){
var inst_25979 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26031__$1 = state_26031;
if(cljs.core.truth_(inst_25979)){
var statearr_26065_26109 = state_26031__$1;
(statearr_26065_26109[(1)] = (18));

} else {
var statearr_26066_26110 = state_26031__$1;
(statearr_26066_26110[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26032 === (26))){
var inst_26003 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26031__$1 = state_26031;
if(cljs.core.truth_(inst_26003)){
var statearr_26067_26111 = state_26031__$1;
(statearr_26067_26111[(1)] = (30));

} else {
var statearr_26068_26112 = state_26031__$1;
(statearr_26068_26112[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26032 === (16))){
var inst_25971 = (state_26031[(2)]);
var inst_25972 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25973 = figwheel.client.format_messages.call(null,inst_25972);
var inst_25974 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25975 = figwheel.client.heads_up.display_error.call(null,inst_25973,inst_25974);
var state_26031__$1 = (function (){var statearr_26069 = state_26031;
(statearr_26069[(9)] = inst_25971);

return statearr_26069;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26031__$1,(17),inst_25975);
} else {
if((state_val_26032 === (30))){
var inst_26005 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26006 = figwheel.client.heads_up.display_warning.call(null,inst_26005);
var state_26031__$1 = state_26031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26031__$1,(33),inst_26006);
} else {
if((state_val_26032 === (10))){
var inst_25965 = (state_26031[(2)]);
var state_26031__$1 = state_26031;
var statearr_26070_26113 = state_26031__$1;
(statearr_26070_26113[(2)] = inst_25965);

(statearr_26070_26113[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26032 === (18))){
var inst_25981 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25982 = figwheel.client.format_messages.call(null,inst_25981);
var inst_25983 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25984 = figwheel.client.heads_up.display_error.call(null,inst_25982,inst_25983);
var state_26031__$1 = state_26031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26031__$1,(21),inst_25984);
} else {
if((state_val_26032 === (37))){
var inst_26014 = (state_26031[(2)]);
var state_26031__$1 = state_26031;
var statearr_26071_26114 = state_26031__$1;
(statearr_26071_26114[(2)] = inst_26014);

(statearr_26071_26114[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26032 === (8))){
var inst_25957 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26031__$1 = state_26031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26031__$1,(11),inst_25957);
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
});})(c__19438__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19373__auto__,c__19438__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19374__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19374__auto____0 = (function (){
var statearr_26075 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26075[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19374__auto__);

(statearr_26075[(1)] = (1));

return statearr_26075;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19374__auto____1 = (function (state_26031){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_26031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e26076){if((e26076 instanceof Object)){
var ex__19377__auto__ = e26076;
var statearr_26077_26115 = state_26031;
(statearr_26077_26115[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26116 = state_26031;
state_26031 = G__26116;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19374__auto__ = function(state_26031){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19374__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19374__auto____1.call(this,state_26031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19374__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19374__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto__,msg_hist,msg_names,msg))
})();
var state__19440__auto__ = (function (){var statearr_26078 = f__19439__auto__.call(null);
(statearr_26078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto__);

return statearr_26078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto__,msg_hist,msg_names,msg))
);

return c__19438__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19438__auto___26179 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___26179,ch){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___26179,ch){
return (function (state_26162){
var state_val_26163 = (state_26162[(1)]);
if((state_val_26163 === (1))){
var state_26162__$1 = state_26162;
var statearr_26164_26180 = state_26162__$1;
(statearr_26164_26180[(2)] = null);

(statearr_26164_26180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (2))){
var state_26162__$1 = state_26162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26162__$1,(4),ch);
} else {
if((state_val_26163 === (3))){
var inst_26160 = (state_26162[(2)]);
var state_26162__$1 = state_26162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26162__$1,inst_26160);
} else {
if((state_val_26163 === (4))){
var inst_26150 = (state_26162[(7)]);
var inst_26150__$1 = (state_26162[(2)]);
var state_26162__$1 = (function (){var statearr_26165 = state_26162;
(statearr_26165[(7)] = inst_26150__$1);

return statearr_26165;
})();
if(cljs.core.truth_(inst_26150__$1)){
var statearr_26166_26181 = state_26162__$1;
(statearr_26166_26181[(1)] = (5));

} else {
var statearr_26167_26182 = state_26162__$1;
(statearr_26167_26182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (5))){
var inst_26150 = (state_26162[(7)]);
var inst_26152 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26150);
var state_26162__$1 = state_26162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26162__$1,(8),inst_26152);
} else {
if((state_val_26163 === (6))){
var state_26162__$1 = state_26162;
var statearr_26168_26183 = state_26162__$1;
(statearr_26168_26183[(2)] = null);

(statearr_26168_26183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (7))){
var inst_26158 = (state_26162[(2)]);
var state_26162__$1 = state_26162;
var statearr_26169_26184 = state_26162__$1;
(statearr_26169_26184[(2)] = inst_26158);

(statearr_26169_26184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (8))){
var inst_26154 = (state_26162[(2)]);
var state_26162__$1 = (function (){var statearr_26170 = state_26162;
(statearr_26170[(8)] = inst_26154);

return statearr_26170;
})();
var statearr_26171_26185 = state_26162__$1;
(statearr_26171_26185[(2)] = null);

(statearr_26171_26185[(1)] = (2));


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
});})(c__19438__auto___26179,ch))
;
return ((function (switch__19373__auto__,c__19438__auto___26179,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19374__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19374__auto____0 = (function (){
var statearr_26175 = [null,null,null,null,null,null,null,null,null];
(statearr_26175[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19374__auto__);

(statearr_26175[(1)] = (1));

return statearr_26175;
});
var figwheel$client$heads_up_plugin_$_state_machine__19374__auto____1 = (function (state_26162){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_26162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e26176){if((e26176 instanceof Object)){
var ex__19377__auto__ = e26176;
var statearr_26177_26186 = state_26162;
(statearr_26177_26186[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26187 = state_26162;
state_26162 = G__26187;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19374__auto__ = function(state_26162){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19374__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19374__auto____1.call(this,state_26162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19374__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19374__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___26179,ch))
})();
var state__19440__auto__ = (function (){var statearr_26178 = f__19439__auto__.call(null);
(statearr_26178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___26179);

return statearr_26178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___26179,ch))
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
var c__19438__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto__){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto__){
return (function (state_26208){
var state_val_26209 = (state_26208[(1)]);
if((state_val_26209 === (1))){
var inst_26203 = cljs.core.async.timeout.call(null,(3000));
var state_26208__$1 = state_26208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26208__$1,(2),inst_26203);
} else {
if((state_val_26209 === (2))){
var inst_26205 = (state_26208[(2)]);
var inst_26206 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26208__$1 = (function (){var statearr_26210 = state_26208;
(statearr_26210[(7)] = inst_26205);

return statearr_26210;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26208__$1,inst_26206);
} else {
return null;
}
}
});})(c__19438__auto__))
;
return ((function (switch__19373__auto__,c__19438__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19374__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19374__auto____0 = (function (){
var statearr_26214 = [null,null,null,null,null,null,null,null];
(statearr_26214[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19374__auto__);

(statearr_26214[(1)] = (1));

return statearr_26214;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19374__auto____1 = (function (state_26208){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_26208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e26215){if((e26215 instanceof Object)){
var ex__19377__auto__ = e26215;
var statearr_26216_26218 = state_26208;
(statearr_26216_26218[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26219 = state_26208;
state_26208 = G__26219;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19374__auto__ = function(state_26208){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19374__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19374__auto____1.call(this,state_26208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19374__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19374__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto__))
})();
var state__19440__auto__ = (function (){var statearr_26217 = f__19439__auto__.call(null);
(statearr_26217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto__);

return statearr_26217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto__))
);

return c__19438__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26220){
var map__26227 = p__26220;
var map__26227__$1 = ((((!((map__26227 == null)))?((((map__26227.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26227.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26227):map__26227);
var ed = map__26227__$1;
var formatted_exception = cljs.core.get.call(null,map__26227__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26227__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26227__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26229_26233 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26230_26234 = null;
var count__26231_26235 = (0);
var i__26232_26236 = (0);
while(true){
if((i__26232_26236 < count__26231_26235)){
var msg_26237 = cljs.core._nth.call(null,chunk__26230_26234,i__26232_26236);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26237);

var G__26238 = seq__26229_26233;
var G__26239 = chunk__26230_26234;
var G__26240 = count__26231_26235;
var G__26241 = (i__26232_26236 + (1));
seq__26229_26233 = G__26238;
chunk__26230_26234 = G__26239;
count__26231_26235 = G__26240;
i__26232_26236 = G__26241;
continue;
} else {
var temp__4425__auto___26242 = cljs.core.seq.call(null,seq__26229_26233);
if(temp__4425__auto___26242){
var seq__26229_26243__$1 = temp__4425__auto___26242;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26229_26243__$1)){
var c__17161__auto___26244 = cljs.core.chunk_first.call(null,seq__26229_26243__$1);
var G__26245 = cljs.core.chunk_rest.call(null,seq__26229_26243__$1);
var G__26246 = c__17161__auto___26244;
var G__26247 = cljs.core.count.call(null,c__17161__auto___26244);
var G__26248 = (0);
seq__26229_26233 = G__26245;
chunk__26230_26234 = G__26246;
count__26231_26235 = G__26247;
i__26232_26236 = G__26248;
continue;
} else {
var msg_26249 = cljs.core.first.call(null,seq__26229_26243__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26249);

var G__26250 = cljs.core.next.call(null,seq__26229_26243__$1);
var G__26251 = null;
var G__26252 = (0);
var G__26253 = (0);
seq__26229_26233 = G__26250;
chunk__26230_26234 = G__26251;
count__26231_26235 = G__26252;
i__26232_26236 = G__26253;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26254){
var map__26257 = p__26254;
var map__26257__$1 = ((((!((map__26257 == null)))?((((map__26257.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26257.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26257):map__26257);
var w = map__26257__$1;
var message = cljs.core.get.call(null,map__26257__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__26265 = cljs.core.seq.call(null,plugins);
var chunk__26266 = null;
var count__26267 = (0);
var i__26268 = (0);
while(true){
if((i__26268 < count__26267)){
var vec__26269 = cljs.core._nth.call(null,chunk__26266,i__26268);
var k = cljs.core.nth.call(null,vec__26269,(0),null);
var plugin = cljs.core.nth.call(null,vec__26269,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26271 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26265,chunk__26266,count__26267,i__26268,pl_26271,vec__26269,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26271.call(null,msg_hist);
});})(seq__26265,chunk__26266,count__26267,i__26268,pl_26271,vec__26269,k,plugin))
);
} else {
}

var G__26272 = seq__26265;
var G__26273 = chunk__26266;
var G__26274 = count__26267;
var G__26275 = (i__26268 + (1));
seq__26265 = G__26272;
chunk__26266 = G__26273;
count__26267 = G__26274;
i__26268 = G__26275;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26265);
if(temp__4425__auto__){
var seq__26265__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26265__$1)){
var c__17161__auto__ = cljs.core.chunk_first.call(null,seq__26265__$1);
var G__26276 = cljs.core.chunk_rest.call(null,seq__26265__$1);
var G__26277 = c__17161__auto__;
var G__26278 = cljs.core.count.call(null,c__17161__auto__);
var G__26279 = (0);
seq__26265 = G__26276;
chunk__26266 = G__26277;
count__26267 = G__26278;
i__26268 = G__26279;
continue;
} else {
var vec__26270 = cljs.core.first.call(null,seq__26265__$1);
var k = cljs.core.nth.call(null,vec__26270,(0),null);
var plugin = cljs.core.nth.call(null,vec__26270,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26280 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26265,chunk__26266,count__26267,i__26268,pl_26280,vec__26270,k,plugin,seq__26265__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26280.call(null,msg_hist);
});})(seq__26265,chunk__26266,count__26267,i__26268,pl_26280,vec__26270,k,plugin,seq__26265__$1,temp__4425__auto__))
);
} else {
}

var G__26281 = cljs.core.next.call(null,seq__26265__$1);
var G__26282 = null;
var G__26283 = (0);
var G__26284 = (0);
seq__26265 = G__26281;
chunk__26266 = G__26282;
count__26267 = G__26283;
i__26268 = G__26284;
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
var args26285 = [];
var len__17416__auto___26288 = arguments.length;
var i__17417__auto___26289 = (0);
while(true){
if((i__17417__auto___26289 < len__17416__auto___26288)){
args26285.push((arguments[i__17417__auto___26289]));

var G__26290 = (i__17417__auto___26289 + (1));
i__17417__auto___26289 = G__26290;
continue;
} else {
}
break;
}

var G__26287 = args26285.length;
switch (G__26287) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26285.length)].join('')));

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
var len__17416__auto___26296 = arguments.length;
var i__17417__auto___26297 = (0);
while(true){
if((i__17417__auto___26297 < len__17416__auto___26296)){
args__17423__auto__.push((arguments[i__17417__auto___26297]));

var G__26298 = (i__17417__auto___26297 + (1));
i__17417__auto___26297 = G__26298;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((0) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17424__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26293){
var map__26294 = p__26293;
var map__26294__$1 = ((((!((map__26294 == null)))?((((map__26294.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26294.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26294):map__26294);
var opts = map__26294__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26292){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26292));
});

//# sourceMappingURL=client.js.map?rel=1521786013528