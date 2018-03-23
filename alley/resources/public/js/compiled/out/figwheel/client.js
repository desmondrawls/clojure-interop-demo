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
var pred__33676 = cljs.core._EQ_;
var expr__33677 = (function (){var or__16358__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__33676.call(null,"true",expr__33677))){
return true;
} else {
if(cljs.core.truth_(pred__33676.call(null,"false",expr__33677))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__33677)].join('')));
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
var G__33679__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__33679 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33680__i = 0, G__33680__a = new Array(arguments.length -  0);
while (G__33680__i < G__33680__a.length) {G__33680__a[G__33680__i] = arguments[G__33680__i + 0]; ++G__33680__i;}
  args = new cljs.core.IndexedSeq(G__33680__a,0);
} 
return G__33679__delegate.call(this,args);};
G__33679.cljs$lang$maxFixedArity = 0;
G__33679.cljs$lang$applyTo = (function (arglist__33681){
var args = cljs.core.seq(arglist__33681);
return G__33679__delegate(args);
});
G__33679.cljs$core$IFn$_invoke$arity$variadic = G__33679__delegate;
return G__33679;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__33682){
var map__33685 = p__33682;
var map__33685__$1 = ((((!((map__33685 == null)))?((((map__33685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33685):map__33685);
var message = cljs.core.get.call(null,map__33685__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__33685__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__19438__auto___33847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___33847,ch){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___33847,ch){
return (function (state_33816){
var state_val_33817 = (state_33816[(1)]);
if((state_val_33817 === (7))){
var inst_33812 = (state_33816[(2)]);
var state_33816__$1 = state_33816;
var statearr_33818_33848 = state_33816__$1;
(statearr_33818_33848[(2)] = inst_33812);

(statearr_33818_33848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33817 === (1))){
var state_33816__$1 = state_33816;
var statearr_33819_33849 = state_33816__$1;
(statearr_33819_33849[(2)] = null);

(statearr_33819_33849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33817 === (4))){
var inst_33769 = (state_33816[(7)]);
var inst_33769__$1 = (state_33816[(2)]);
var state_33816__$1 = (function (){var statearr_33820 = state_33816;
(statearr_33820[(7)] = inst_33769__$1);

return statearr_33820;
})();
if(cljs.core.truth_(inst_33769__$1)){
var statearr_33821_33850 = state_33816__$1;
(statearr_33821_33850[(1)] = (5));

} else {
var statearr_33822_33851 = state_33816__$1;
(statearr_33822_33851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33817 === (15))){
var inst_33776 = (state_33816[(8)]);
var inst_33791 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33776);
var inst_33792 = cljs.core.first.call(null,inst_33791);
var inst_33793 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_33792);
var inst_33794 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_33793)].join('');
var inst_33795 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_33794);
var state_33816__$1 = state_33816;
var statearr_33823_33852 = state_33816__$1;
(statearr_33823_33852[(2)] = inst_33795);

(statearr_33823_33852[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33817 === (13))){
var inst_33800 = (state_33816[(2)]);
var state_33816__$1 = state_33816;
var statearr_33824_33853 = state_33816__$1;
(statearr_33824_33853[(2)] = inst_33800);

(statearr_33824_33853[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33817 === (6))){
var state_33816__$1 = state_33816;
var statearr_33825_33854 = state_33816__$1;
(statearr_33825_33854[(2)] = null);

(statearr_33825_33854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33817 === (17))){
var inst_33798 = (state_33816[(2)]);
var state_33816__$1 = state_33816;
var statearr_33826_33855 = state_33816__$1;
(statearr_33826_33855[(2)] = inst_33798);

(statearr_33826_33855[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33817 === (3))){
var inst_33814 = (state_33816[(2)]);
var state_33816__$1 = state_33816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33816__$1,inst_33814);
} else {
if((state_val_33817 === (12))){
var inst_33775 = (state_33816[(9)]);
var inst_33789 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_33775,opts);
var state_33816__$1 = state_33816;
if(cljs.core.truth_(inst_33789)){
var statearr_33827_33856 = state_33816__$1;
(statearr_33827_33856[(1)] = (15));

} else {
var statearr_33828_33857 = state_33816__$1;
(statearr_33828_33857[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33817 === (2))){
var state_33816__$1 = state_33816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33816__$1,(4),ch);
} else {
if((state_val_33817 === (11))){
var inst_33776 = (state_33816[(8)]);
var inst_33781 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33782 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_33776);
var inst_33783 = cljs.core.async.timeout.call(null,(1000));
var inst_33784 = [inst_33782,inst_33783];
var inst_33785 = (new cljs.core.PersistentVector(null,2,(5),inst_33781,inst_33784,null));
var state_33816__$1 = state_33816;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33816__$1,(14),inst_33785);
} else {
if((state_val_33817 === (9))){
var inst_33776 = (state_33816[(8)]);
var inst_33802 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_33803 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33776);
var inst_33804 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33803);
var inst_33805 = [cljs.core.str("Not loading: "),cljs.core.str(inst_33804)].join('');
var inst_33806 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_33805);
var state_33816__$1 = (function (){var statearr_33829 = state_33816;
(statearr_33829[(10)] = inst_33802);

return statearr_33829;
})();
var statearr_33830_33858 = state_33816__$1;
(statearr_33830_33858[(2)] = inst_33806);

(statearr_33830_33858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33817 === (5))){
var inst_33769 = (state_33816[(7)]);
var inst_33771 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_33772 = (new cljs.core.PersistentArrayMap(null,2,inst_33771,null));
var inst_33773 = (new cljs.core.PersistentHashSet(null,inst_33772,null));
var inst_33774 = figwheel.client.focus_msgs.call(null,inst_33773,inst_33769);
var inst_33775 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_33774);
var inst_33776 = cljs.core.first.call(null,inst_33774);
var inst_33777 = figwheel.client.autoload_QMARK_.call(null);
var state_33816__$1 = (function (){var statearr_33831 = state_33816;
(statearr_33831[(9)] = inst_33775);

(statearr_33831[(8)] = inst_33776);

return statearr_33831;
})();
if(cljs.core.truth_(inst_33777)){
var statearr_33832_33859 = state_33816__$1;
(statearr_33832_33859[(1)] = (8));

} else {
var statearr_33833_33860 = state_33816__$1;
(statearr_33833_33860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33817 === (14))){
var inst_33787 = (state_33816[(2)]);
var state_33816__$1 = state_33816;
var statearr_33834_33861 = state_33816__$1;
(statearr_33834_33861[(2)] = inst_33787);

(statearr_33834_33861[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33817 === (16))){
var state_33816__$1 = state_33816;
var statearr_33835_33862 = state_33816__$1;
(statearr_33835_33862[(2)] = null);

(statearr_33835_33862[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33817 === (10))){
var inst_33808 = (state_33816[(2)]);
var state_33816__$1 = (function (){var statearr_33836 = state_33816;
(statearr_33836[(11)] = inst_33808);

return statearr_33836;
})();
var statearr_33837_33863 = state_33816__$1;
(statearr_33837_33863[(2)] = null);

(statearr_33837_33863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33817 === (8))){
var inst_33775 = (state_33816[(9)]);
var inst_33779 = figwheel.client.reload_file_state_QMARK_.call(null,inst_33775,opts);
var state_33816__$1 = state_33816;
if(cljs.core.truth_(inst_33779)){
var statearr_33838_33864 = state_33816__$1;
(statearr_33838_33864[(1)] = (11));

} else {
var statearr_33839_33865 = state_33816__$1;
(statearr_33839_33865[(1)] = (12));

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
});})(c__19438__auto___33847,ch))
;
return ((function (switch__19373__auto__,c__19438__auto___33847,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19374__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19374__auto____0 = (function (){
var statearr_33843 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33843[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19374__auto__);

(statearr_33843[(1)] = (1));

return statearr_33843;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19374__auto____1 = (function (state_33816){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_33816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e33844){if((e33844 instanceof Object)){
var ex__19377__auto__ = e33844;
var statearr_33845_33866 = state_33816;
(statearr_33845_33866[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33867 = state_33816;
state_33816 = G__33867;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19374__auto__ = function(state_33816){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19374__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19374__auto____1.call(this,state_33816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19374__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19374__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___33847,ch))
})();
var state__19440__auto__ = (function (){var statearr_33846 = f__19439__auto__.call(null);
(statearr_33846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___33847);

return statearr_33846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___33847,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__33868_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__33868_SHARP_));
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
var base_path_33875 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_33875){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_33873 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_33874 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_33873,_STAR_print_newline_STAR_33874,base_path_33875){
return (function() { 
var G__33876__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__33876 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33877__i = 0, G__33877__a = new Array(arguments.length -  0);
while (G__33877__i < G__33877__a.length) {G__33877__a[G__33877__i] = arguments[G__33877__i + 0]; ++G__33877__i;}
  args = new cljs.core.IndexedSeq(G__33877__a,0);
} 
return G__33876__delegate.call(this,args);};
G__33876.cljs$lang$maxFixedArity = 0;
G__33876.cljs$lang$applyTo = (function (arglist__33878){
var args = cljs.core.seq(arglist__33878);
return G__33876__delegate(args);
});
G__33876.cljs$core$IFn$_invoke$arity$variadic = G__33876__delegate;
return G__33876;
})()
;})(_STAR_print_fn_STAR_33873,_STAR_print_newline_STAR_33874,base_path_33875))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_33874;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_33873;
}}catch (e33872){if((e33872 instanceof Error)){
var e = e33872;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_33875], null));
} else {
var e = e33872;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_33875))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__33879){
var map__33886 = p__33879;
var map__33886__$1 = ((((!((map__33886 == null)))?((((map__33886.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33886.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33886):map__33886);
var opts = map__33886__$1;
var build_id = cljs.core.get.call(null,map__33886__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__33886,map__33886__$1,opts,build_id){
return (function (p__33888){
var vec__33889 = p__33888;
var map__33890 = cljs.core.nth.call(null,vec__33889,(0),null);
var map__33890__$1 = ((((!((map__33890 == null)))?((((map__33890.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33890.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33890):map__33890);
var msg = map__33890__$1;
var msg_name = cljs.core.get.call(null,map__33890__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33889,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__33889,map__33890,map__33890__$1,msg,msg_name,_,map__33886,map__33886__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__33889,map__33890,map__33890__$1,msg,msg_name,_,map__33886,map__33886__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__33886,map__33886__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__33896){
var vec__33897 = p__33896;
var map__33898 = cljs.core.nth.call(null,vec__33897,(0),null);
var map__33898__$1 = ((((!((map__33898 == null)))?((((map__33898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33898):map__33898);
var msg = map__33898__$1;
var msg_name = cljs.core.get.call(null,map__33898__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33897,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__33900){
var map__33910 = p__33900;
var map__33910__$1 = ((((!((map__33910 == null)))?((((map__33910.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33910.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33910):map__33910);
var on_compile_warning = cljs.core.get.call(null,map__33910__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__33910__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__33910,map__33910__$1,on_compile_warning,on_compile_fail){
return (function (p__33912){
var vec__33913 = p__33912;
var map__33914 = cljs.core.nth.call(null,vec__33913,(0),null);
var map__33914__$1 = ((((!((map__33914 == null)))?((((map__33914.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33914.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33914):map__33914);
var msg = map__33914__$1;
var msg_name = cljs.core.get.call(null,map__33914__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33913,(1));
var pred__33916 = cljs.core._EQ_;
var expr__33917 = msg_name;
if(cljs.core.truth_(pred__33916.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__33917))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__33916.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__33917))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__33910,map__33910__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19438__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto__,msg_hist,msg_names,msg){
return (function (state_34133){
var state_val_34134 = (state_34133[(1)]);
if((state_val_34134 === (7))){
var inst_34057 = (state_34133[(2)]);
var state_34133__$1 = state_34133;
if(cljs.core.truth_(inst_34057)){
var statearr_34135_34181 = state_34133__$1;
(statearr_34135_34181[(1)] = (8));

} else {
var statearr_34136_34182 = state_34133__$1;
(statearr_34136_34182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (20))){
var inst_34127 = (state_34133[(2)]);
var state_34133__$1 = state_34133;
var statearr_34137_34183 = state_34133__$1;
(statearr_34137_34183[(2)] = inst_34127);

(statearr_34137_34183[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (27))){
var inst_34123 = (state_34133[(2)]);
var state_34133__$1 = state_34133;
var statearr_34138_34184 = state_34133__$1;
(statearr_34138_34184[(2)] = inst_34123);

(statearr_34138_34184[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (1))){
var inst_34050 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34133__$1 = state_34133;
if(cljs.core.truth_(inst_34050)){
var statearr_34139_34185 = state_34133__$1;
(statearr_34139_34185[(1)] = (2));

} else {
var statearr_34140_34186 = state_34133__$1;
(statearr_34140_34186[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (24))){
var inst_34125 = (state_34133[(2)]);
var state_34133__$1 = state_34133;
var statearr_34141_34187 = state_34133__$1;
(statearr_34141_34187[(2)] = inst_34125);

(statearr_34141_34187[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (4))){
var inst_34131 = (state_34133[(2)]);
var state_34133__$1 = state_34133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34133__$1,inst_34131);
} else {
if((state_val_34134 === (15))){
var inst_34129 = (state_34133[(2)]);
var state_34133__$1 = state_34133;
var statearr_34142_34188 = state_34133__$1;
(statearr_34142_34188[(2)] = inst_34129);

(statearr_34142_34188[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (21))){
var inst_34088 = (state_34133[(2)]);
var state_34133__$1 = state_34133;
var statearr_34143_34189 = state_34133__$1;
(statearr_34143_34189[(2)] = inst_34088);

(statearr_34143_34189[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (31))){
var inst_34112 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34133__$1 = state_34133;
if(cljs.core.truth_(inst_34112)){
var statearr_34144_34190 = state_34133__$1;
(statearr_34144_34190[(1)] = (34));

} else {
var statearr_34145_34191 = state_34133__$1;
(statearr_34145_34191[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (32))){
var inst_34121 = (state_34133[(2)]);
var state_34133__$1 = state_34133;
var statearr_34146_34192 = state_34133__$1;
(statearr_34146_34192[(2)] = inst_34121);

(statearr_34146_34192[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (33))){
var inst_34110 = (state_34133[(2)]);
var state_34133__$1 = state_34133;
var statearr_34147_34193 = state_34133__$1;
(statearr_34147_34193[(2)] = inst_34110);

(statearr_34147_34193[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (13))){
var inst_34071 = figwheel.client.heads_up.clear.call(null);
var state_34133__$1 = state_34133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34133__$1,(16),inst_34071);
} else {
if((state_val_34134 === (22))){
var inst_34092 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34093 = figwheel.client.heads_up.append_message.call(null,inst_34092);
var state_34133__$1 = state_34133;
var statearr_34148_34194 = state_34133__$1;
(statearr_34148_34194[(2)] = inst_34093);

(statearr_34148_34194[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (36))){
var inst_34119 = (state_34133[(2)]);
var state_34133__$1 = state_34133;
var statearr_34149_34195 = state_34133__$1;
(statearr_34149_34195[(2)] = inst_34119);

(statearr_34149_34195[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (29))){
var inst_34103 = (state_34133[(2)]);
var state_34133__$1 = state_34133;
var statearr_34150_34196 = state_34133__$1;
(statearr_34150_34196[(2)] = inst_34103);

(statearr_34150_34196[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (6))){
var inst_34052 = (state_34133[(7)]);
var state_34133__$1 = state_34133;
var statearr_34151_34197 = state_34133__$1;
(statearr_34151_34197[(2)] = inst_34052);

(statearr_34151_34197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (28))){
var inst_34099 = (state_34133[(2)]);
var inst_34100 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34101 = figwheel.client.heads_up.display_warning.call(null,inst_34100);
var state_34133__$1 = (function (){var statearr_34152 = state_34133;
(statearr_34152[(8)] = inst_34099);

return statearr_34152;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34133__$1,(29),inst_34101);
} else {
if((state_val_34134 === (25))){
var inst_34097 = figwheel.client.heads_up.clear.call(null);
var state_34133__$1 = state_34133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34133__$1,(28),inst_34097);
} else {
if((state_val_34134 === (34))){
var inst_34114 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34133__$1 = state_34133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34133__$1,(37),inst_34114);
} else {
if((state_val_34134 === (17))){
var inst_34079 = (state_34133[(2)]);
var state_34133__$1 = state_34133;
var statearr_34153_34198 = state_34133__$1;
(statearr_34153_34198[(2)] = inst_34079);

(statearr_34153_34198[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (3))){
var inst_34069 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34133__$1 = state_34133;
if(cljs.core.truth_(inst_34069)){
var statearr_34154_34199 = state_34133__$1;
(statearr_34154_34199[(1)] = (13));

} else {
var statearr_34155_34200 = state_34133__$1;
(statearr_34155_34200[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (12))){
var inst_34065 = (state_34133[(2)]);
var state_34133__$1 = state_34133;
var statearr_34156_34201 = state_34133__$1;
(statearr_34156_34201[(2)] = inst_34065);

(statearr_34156_34201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (2))){
var inst_34052 = (state_34133[(7)]);
var inst_34052__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_34133__$1 = (function (){var statearr_34157 = state_34133;
(statearr_34157[(7)] = inst_34052__$1);

return statearr_34157;
})();
if(cljs.core.truth_(inst_34052__$1)){
var statearr_34158_34202 = state_34133__$1;
(statearr_34158_34202[(1)] = (5));

} else {
var statearr_34159_34203 = state_34133__$1;
(statearr_34159_34203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (23))){
var inst_34095 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34133__$1 = state_34133;
if(cljs.core.truth_(inst_34095)){
var statearr_34160_34204 = state_34133__$1;
(statearr_34160_34204[(1)] = (25));

} else {
var statearr_34161_34205 = state_34133__$1;
(statearr_34161_34205[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (35))){
var state_34133__$1 = state_34133;
var statearr_34162_34206 = state_34133__$1;
(statearr_34162_34206[(2)] = null);

(statearr_34162_34206[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (19))){
var inst_34090 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34133__$1 = state_34133;
if(cljs.core.truth_(inst_34090)){
var statearr_34163_34207 = state_34133__$1;
(statearr_34163_34207[(1)] = (22));

} else {
var statearr_34164_34208 = state_34133__$1;
(statearr_34164_34208[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (11))){
var inst_34061 = (state_34133[(2)]);
var state_34133__$1 = state_34133;
var statearr_34165_34209 = state_34133__$1;
(statearr_34165_34209[(2)] = inst_34061);

(statearr_34165_34209[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (9))){
var inst_34063 = figwheel.client.heads_up.clear.call(null);
var state_34133__$1 = state_34133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34133__$1,(12),inst_34063);
} else {
if((state_val_34134 === (5))){
var inst_34054 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34133__$1 = state_34133;
var statearr_34166_34210 = state_34133__$1;
(statearr_34166_34210[(2)] = inst_34054);

(statearr_34166_34210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (14))){
var inst_34081 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34133__$1 = state_34133;
if(cljs.core.truth_(inst_34081)){
var statearr_34167_34211 = state_34133__$1;
(statearr_34167_34211[(1)] = (18));

} else {
var statearr_34168_34212 = state_34133__$1;
(statearr_34168_34212[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (26))){
var inst_34105 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34133__$1 = state_34133;
if(cljs.core.truth_(inst_34105)){
var statearr_34169_34213 = state_34133__$1;
(statearr_34169_34213[(1)] = (30));

} else {
var statearr_34170_34214 = state_34133__$1;
(statearr_34170_34214[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (16))){
var inst_34073 = (state_34133[(2)]);
var inst_34074 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34075 = figwheel.client.format_messages.call(null,inst_34074);
var inst_34076 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34077 = figwheel.client.heads_up.display_error.call(null,inst_34075,inst_34076);
var state_34133__$1 = (function (){var statearr_34171 = state_34133;
(statearr_34171[(9)] = inst_34073);

return statearr_34171;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34133__$1,(17),inst_34077);
} else {
if((state_val_34134 === (30))){
var inst_34107 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34108 = figwheel.client.heads_up.display_warning.call(null,inst_34107);
var state_34133__$1 = state_34133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34133__$1,(33),inst_34108);
} else {
if((state_val_34134 === (10))){
var inst_34067 = (state_34133[(2)]);
var state_34133__$1 = state_34133;
var statearr_34172_34215 = state_34133__$1;
(statearr_34172_34215[(2)] = inst_34067);

(statearr_34172_34215[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (18))){
var inst_34083 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34084 = figwheel.client.format_messages.call(null,inst_34083);
var inst_34085 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34086 = figwheel.client.heads_up.display_error.call(null,inst_34084,inst_34085);
var state_34133__$1 = state_34133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34133__$1,(21),inst_34086);
} else {
if((state_val_34134 === (37))){
var inst_34116 = (state_34133[(2)]);
var state_34133__$1 = state_34133;
var statearr_34173_34216 = state_34133__$1;
(statearr_34173_34216[(2)] = inst_34116);

(statearr_34173_34216[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34134 === (8))){
var inst_34059 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34133__$1 = state_34133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34133__$1,(11),inst_34059);
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
var statearr_34177 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34177[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19374__auto__);

(statearr_34177[(1)] = (1));

return statearr_34177;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19374__auto____1 = (function (state_34133){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_34133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e34178){if((e34178 instanceof Object)){
var ex__19377__auto__ = e34178;
var statearr_34179_34217 = state_34133;
(statearr_34179_34217[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34218 = state_34133;
state_34133 = G__34218;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19374__auto__ = function(state_34133){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19374__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19374__auto____1.call(this,state_34133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19374__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19374__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto__,msg_hist,msg_names,msg))
})();
var state__19440__auto__ = (function (){var statearr_34180 = f__19439__auto__.call(null);
(statearr_34180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto__);

return statearr_34180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto__,msg_hist,msg_names,msg))
);

return c__19438__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19438__auto___34281 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___34281,ch){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___34281,ch){
return (function (state_34264){
var state_val_34265 = (state_34264[(1)]);
if((state_val_34265 === (1))){
var state_34264__$1 = state_34264;
var statearr_34266_34282 = state_34264__$1;
(statearr_34266_34282[(2)] = null);

(statearr_34266_34282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (2))){
var state_34264__$1 = state_34264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34264__$1,(4),ch);
} else {
if((state_val_34265 === (3))){
var inst_34262 = (state_34264[(2)]);
var state_34264__$1 = state_34264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34264__$1,inst_34262);
} else {
if((state_val_34265 === (4))){
var inst_34252 = (state_34264[(7)]);
var inst_34252__$1 = (state_34264[(2)]);
var state_34264__$1 = (function (){var statearr_34267 = state_34264;
(statearr_34267[(7)] = inst_34252__$1);

return statearr_34267;
})();
if(cljs.core.truth_(inst_34252__$1)){
var statearr_34268_34283 = state_34264__$1;
(statearr_34268_34283[(1)] = (5));

} else {
var statearr_34269_34284 = state_34264__$1;
(statearr_34269_34284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (5))){
var inst_34252 = (state_34264[(7)]);
var inst_34254 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_34252);
var state_34264__$1 = state_34264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34264__$1,(8),inst_34254);
} else {
if((state_val_34265 === (6))){
var state_34264__$1 = state_34264;
var statearr_34270_34285 = state_34264__$1;
(statearr_34270_34285[(2)] = null);

(statearr_34270_34285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (7))){
var inst_34260 = (state_34264[(2)]);
var state_34264__$1 = state_34264;
var statearr_34271_34286 = state_34264__$1;
(statearr_34271_34286[(2)] = inst_34260);

(statearr_34271_34286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (8))){
var inst_34256 = (state_34264[(2)]);
var state_34264__$1 = (function (){var statearr_34272 = state_34264;
(statearr_34272[(8)] = inst_34256);

return statearr_34272;
})();
var statearr_34273_34287 = state_34264__$1;
(statearr_34273_34287[(2)] = null);

(statearr_34273_34287[(1)] = (2));


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
});})(c__19438__auto___34281,ch))
;
return ((function (switch__19373__auto__,c__19438__auto___34281,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19374__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19374__auto____0 = (function (){
var statearr_34277 = [null,null,null,null,null,null,null,null,null];
(statearr_34277[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19374__auto__);

(statearr_34277[(1)] = (1));

return statearr_34277;
});
var figwheel$client$heads_up_plugin_$_state_machine__19374__auto____1 = (function (state_34264){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_34264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e34278){if((e34278 instanceof Object)){
var ex__19377__auto__ = e34278;
var statearr_34279_34288 = state_34264;
(statearr_34279_34288[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34289 = state_34264;
state_34264 = G__34289;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19374__auto__ = function(state_34264){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19374__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19374__auto____1.call(this,state_34264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19374__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19374__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___34281,ch))
})();
var state__19440__auto__ = (function (){var statearr_34280 = f__19439__auto__.call(null);
(statearr_34280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___34281);

return statearr_34280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___34281,ch))
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
return (function (state_34310){
var state_val_34311 = (state_34310[(1)]);
if((state_val_34311 === (1))){
var inst_34305 = cljs.core.async.timeout.call(null,(3000));
var state_34310__$1 = state_34310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34310__$1,(2),inst_34305);
} else {
if((state_val_34311 === (2))){
var inst_34307 = (state_34310[(2)]);
var inst_34308 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_34310__$1 = (function (){var statearr_34312 = state_34310;
(statearr_34312[(7)] = inst_34307);

return statearr_34312;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34310__$1,inst_34308);
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
var statearr_34316 = [null,null,null,null,null,null,null,null];
(statearr_34316[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19374__auto__);

(statearr_34316[(1)] = (1));

return statearr_34316;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19374__auto____1 = (function (state_34310){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_34310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e34317){if((e34317 instanceof Object)){
var ex__19377__auto__ = e34317;
var statearr_34318_34320 = state_34310;
(statearr_34318_34320[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34321 = state_34310;
state_34310 = G__34321;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19374__auto__ = function(state_34310){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19374__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19374__auto____1.call(this,state_34310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19374__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19374__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto__))
})();
var state__19440__auto__ = (function (){var statearr_34319 = f__19439__auto__.call(null);
(statearr_34319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto__);

return statearr_34319;
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
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__34322){
var map__34329 = p__34322;
var map__34329__$1 = ((((!((map__34329 == null)))?((((map__34329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34329):map__34329);
var ed = map__34329__$1;
var formatted_exception = cljs.core.get.call(null,map__34329__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__34329__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__34329__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__34331_34335 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__34332_34336 = null;
var count__34333_34337 = (0);
var i__34334_34338 = (0);
while(true){
if((i__34334_34338 < count__34333_34337)){
var msg_34339 = cljs.core._nth.call(null,chunk__34332_34336,i__34334_34338);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34339);

var G__34340 = seq__34331_34335;
var G__34341 = chunk__34332_34336;
var G__34342 = count__34333_34337;
var G__34343 = (i__34334_34338 + (1));
seq__34331_34335 = G__34340;
chunk__34332_34336 = G__34341;
count__34333_34337 = G__34342;
i__34334_34338 = G__34343;
continue;
} else {
var temp__4425__auto___34344 = cljs.core.seq.call(null,seq__34331_34335);
if(temp__4425__auto___34344){
var seq__34331_34345__$1 = temp__4425__auto___34344;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34331_34345__$1)){
var c__17161__auto___34346 = cljs.core.chunk_first.call(null,seq__34331_34345__$1);
var G__34347 = cljs.core.chunk_rest.call(null,seq__34331_34345__$1);
var G__34348 = c__17161__auto___34346;
var G__34349 = cljs.core.count.call(null,c__17161__auto___34346);
var G__34350 = (0);
seq__34331_34335 = G__34347;
chunk__34332_34336 = G__34348;
count__34333_34337 = G__34349;
i__34334_34338 = G__34350;
continue;
} else {
var msg_34351 = cljs.core.first.call(null,seq__34331_34345__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34351);

var G__34352 = cljs.core.next.call(null,seq__34331_34345__$1);
var G__34353 = null;
var G__34354 = (0);
var G__34355 = (0);
seq__34331_34335 = G__34352;
chunk__34332_34336 = G__34353;
count__34333_34337 = G__34354;
i__34334_34338 = G__34355;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__34356){
var map__34359 = p__34356;
var map__34359__$1 = ((((!((map__34359 == null)))?((((map__34359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34359):map__34359);
var w = map__34359__$1;
var message = cljs.core.get.call(null,map__34359__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__34367 = cljs.core.seq.call(null,plugins);
var chunk__34368 = null;
var count__34369 = (0);
var i__34370 = (0);
while(true){
if((i__34370 < count__34369)){
var vec__34371 = cljs.core._nth.call(null,chunk__34368,i__34370);
var k = cljs.core.nth.call(null,vec__34371,(0),null);
var plugin = cljs.core.nth.call(null,vec__34371,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34373 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34367,chunk__34368,count__34369,i__34370,pl_34373,vec__34371,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_34373.call(null,msg_hist);
});})(seq__34367,chunk__34368,count__34369,i__34370,pl_34373,vec__34371,k,plugin))
);
} else {
}

var G__34374 = seq__34367;
var G__34375 = chunk__34368;
var G__34376 = count__34369;
var G__34377 = (i__34370 + (1));
seq__34367 = G__34374;
chunk__34368 = G__34375;
count__34369 = G__34376;
i__34370 = G__34377;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__34367);
if(temp__4425__auto__){
var seq__34367__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34367__$1)){
var c__17161__auto__ = cljs.core.chunk_first.call(null,seq__34367__$1);
var G__34378 = cljs.core.chunk_rest.call(null,seq__34367__$1);
var G__34379 = c__17161__auto__;
var G__34380 = cljs.core.count.call(null,c__17161__auto__);
var G__34381 = (0);
seq__34367 = G__34378;
chunk__34368 = G__34379;
count__34369 = G__34380;
i__34370 = G__34381;
continue;
} else {
var vec__34372 = cljs.core.first.call(null,seq__34367__$1);
var k = cljs.core.nth.call(null,vec__34372,(0),null);
var plugin = cljs.core.nth.call(null,vec__34372,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34382 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34367,chunk__34368,count__34369,i__34370,pl_34382,vec__34372,k,plugin,seq__34367__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_34382.call(null,msg_hist);
});})(seq__34367,chunk__34368,count__34369,i__34370,pl_34382,vec__34372,k,plugin,seq__34367__$1,temp__4425__auto__))
);
} else {
}

var G__34383 = cljs.core.next.call(null,seq__34367__$1);
var G__34384 = null;
var G__34385 = (0);
var G__34386 = (0);
seq__34367 = G__34383;
chunk__34368 = G__34384;
count__34369 = G__34385;
i__34370 = G__34386;
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
var args34387 = [];
var len__17416__auto___34390 = arguments.length;
var i__17417__auto___34391 = (0);
while(true){
if((i__17417__auto___34391 < len__17416__auto___34390)){
args34387.push((arguments[i__17417__auto___34391]));

var G__34392 = (i__17417__auto___34391 + (1));
i__17417__auto___34391 = G__34392;
continue;
} else {
}
break;
}

var G__34389 = args34387.length;
switch (G__34389) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34387.length)].join('')));

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
var len__17416__auto___34398 = arguments.length;
var i__17417__auto___34399 = (0);
while(true){
if((i__17417__auto___34399 < len__17416__auto___34398)){
args__17423__auto__.push((arguments[i__17417__auto___34399]));

var G__34400 = (i__17417__auto___34399 + (1));
i__17417__auto___34399 = G__34400;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((0) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17424__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__34395){
var map__34396 = p__34395;
var map__34396__$1 = ((((!((map__34396 == null)))?((((map__34396.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34396.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34396):map__34396);
var opts = map__34396__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq34394){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34394));
});

//# sourceMappingURL=client.js.map?rel=1521787226455