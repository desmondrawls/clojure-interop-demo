// Compiled by ClojureScript 1.7.145 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17423__auto__ = [];
var len__17416__auto___23751 = arguments.length;
var i__17417__auto___23752 = (0);
while(true){
if((i__17417__auto___23752 < len__17416__auto___23751)){
args__17423__auto__.push((arguments[i__17417__auto___23752]));

var G__23753 = (i__17417__auto___23752 + (1));
i__17417__auto___23752 = G__23753;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((2) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17424__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__23743_23754 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__23744_23755 = null;
var count__23745_23756 = (0);
var i__23746_23757 = (0);
while(true){
if((i__23746_23757 < count__23745_23756)){
var k_23758 = cljs.core._nth.call(null,chunk__23744_23755,i__23746_23757);
e.setAttribute(cljs.core.name.call(null,k_23758),cljs.core.get.call(null,attrs,k_23758));

var G__23759 = seq__23743_23754;
var G__23760 = chunk__23744_23755;
var G__23761 = count__23745_23756;
var G__23762 = (i__23746_23757 + (1));
seq__23743_23754 = G__23759;
chunk__23744_23755 = G__23760;
count__23745_23756 = G__23761;
i__23746_23757 = G__23762;
continue;
} else {
var temp__4425__auto___23763 = cljs.core.seq.call(null,seq__23743_23754);
if(temp__4425__auto___23763){
var seq__23743_23764__$1 = temp__4425__auto___23763;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23743_23764__$1)){
var c__17161__auto___23765 = cljs.core.chunk_first.call(null,seq__23743_23764__$1);
var G__23766 = cljs.core.chunk_rest.call(null,seq__23743_23764__$1);
var G__23767 = c__17161__auto___23765;
var G__23768 = cljs.core.count.call(null,c__17161__auto___23765);
var G__23769 = (0);
seq__23743_23754 = G__23766;
chunk__23744_23755 = G__23767;
count__23745_23756 = G__23768;
i__23746_23757 = G__23769;
continue;
} else {
var k_23770 = cljs.core.first.call(null,seq__23743_23764__$1);
e.setAttribute(cljs.core.name.call(null,k_23770),cljs.core.get.call(null,attrs,k_23770));

var G__23771 = cljs.core.next.call(null,seq__23743_23764__$1);
var G__23772 = null;
var G__23773 = (0);
var G__23774 = (0);
seq__23743_23754 = G__23771;
chunk__23744_23755 = G__23772;
count__23745_23756 = G__23773;
i__23746_23757 = G__23774;
continue;
}
} else {
}
}
break;
}

var seq__23747_23775 = cljs.core.seq.call(null,children);
var chunk__23748_23776 = null;
var count__23749_23777 = (0);
var i__23750_23778 = (0);
while(true){
if((i__23750_23778 < count__23749_23777)){
var ch_23779 = cljs.core._nth.call(null,chunk__23748_23776,i__23750_23778);
e.appendChild(ch_23779);

var G__23780 = seq__23747_23775;
var G__23781 = chunk__23748_23776;
var G__23782 = count__23749_23777;
var G__23783 = (i__23750_23778 + (1));
seq__23747_23775 = G__23780;
chunk__23748_23776 = G__23781;
count__23749_23777 = G__23782;
i__23750_23778 = G__23783;
continue;
} else {
var temp__4425__auto___23784 = cljs.core.seq.call(null,seq__23747_23775);
if(temp__4425__auto___23784){
var seq__23747_23785__$1 = temp__4425__auto___23784;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23747_23785__$1)){
var c__17161__auto___23786 = cljs.core.chunk_first.call(null,seq__23747_23785__$1);
var G__23787 = cljs.core.chunk_rest.call(null,seq__23747_23785__$1);
var G__23788 = c__17161__auto___23786;
var G__23789 = cljs.core.count.call(null,c__17161__auto___23786);
var G__23790 = (0);
seq__23747_23775 = G__23787;
chunk__23748_23776 = G__23788;
count__23749_23777 = G__23789;
i__23750_23778 = G__23790;
continue;
} else {
var ch_23791 = cljs.core.first.call(null,seq__23747_23785__$1);
e.appendChild(ch_23791);

var G__23792 = cljs.core.next.call(null,seq__23747_23785__$1);
var G__23793 = null;
var G__23794 = (0);
var G__23795 = (0);
seq__23747_23775 = G__23792;
chunk__23748_23776 = G__23793;
count__23749_23777 = G__23794;
i__23750_23778 = G__23795;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq23740){
var G__23741 = cljs.core.first.call(null,seq23740);
var seq23740__$1 = cljs.core.next.call(null,seq23740);
var G__23742 = cljs.core.first.call(null,seq23740__$1);
var seq23740__$2 = cljs.core.next.call(null,seq23740__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__23741,G__23742,seq23740__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17271__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17272__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17273__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17274__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17275__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17271__auto__,prefer_table__17272__auto__,method_cache__17273__auto__,cached_hierarchy__17274__auto__,hierarchy__17275__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17271__auto__,prefer_table__17272__auto__,method_cache__17273__auto__,cached_hierarchy__17274__auto__,hierarchy__17275__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17275__auto__,method_table__17271__auto__,prefer_table__17272__auto__,method_cache__17273__auto__,cached_hierarchy__17274__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_23796 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_23796.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_23796.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_23796.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_23796);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__23797,st_map){
var map__23802 = p__23797;
var map__23802__$1 = ((((!((map__23802 == null)))?((((map__23802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23802):map__23802);
var container_el = cljs.core.get.call(null,map__23802__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__23802,map__23802__$1,container_el){
return (function (p__23804){
var vec__23805 = p__23804;
var k = cljs.core.nth.call(null,vec__23805,(0),null);
var v = cljs.core.nth.call(null,vec__23805,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__23802,map__23802__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__23806,dom_str){
var map__23809 = p__23806;
var map__23809__$1 = ((((!((map__23809 == null)))?((((map__23809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23809):map__23809);
var c = map__23809__$1;
var content_area_el = cljs.core.get.call(null,map__23809__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__23811){
var map__23814 = p__23811;
var map__23814__$1 = ((((!((map__23814 == null)))?((((map__23814.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23814.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23814):map__23814);
var content_area_el = cljs.core.get.call(null,map__23814__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19639__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19639__auto__){
return (function (){
var f__19640__auto__ = (function (){var switch__19618__auto__ = ((function (c__19639__auto__){
return (function (state_23857){
var state_val_23858 = (state_23857[(1)]);
if((state_val_23858 === (1))){
var inst_23842 = (state_23857[(7)]);
var inst_23842__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_23843 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_23844 = ["10px","10px","100%","68px","1.0"];
var inst_23845 = cljs.core.PersistentHashMap.fromArrays(inst_23843,inst_23844);
var inst_23846 = cljs.core.merge.call(null,inst_23845,style);
var inst_23847 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23842__$1,inst_23846);
var inst_23848 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_23842__$1,msg);
var inst_23849 = cljs.core.async.timeout.call(null,(300));
var state_23857__$1 = (function (){var statearr_23859 = state_23857;
(statearr_23859[(8)] = inst_23848);

(statearr_23859[(7)] = inst_23842__$1);

(statearr_23859[(9)] = inst_23847);

return statearr_23859;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23857__$1,(2),inst_23849);
} else {
if((state_val_23858 === (2))){
var inst_23842 = (state_23857[(7)]);
var inst_23851 = (state_23857[(2)]);
var inst_23852 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_23853 = ["auto"];
var inst_23854 = cljs.core.PersistentHashMap.fromArrays(inst_23852,inst_23853);
var inst_23855 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23842,inst_23854);
var state_23857__$1 = (function (){var statearr_23860 = state_23857;
(statearr_23860[(10)] = inst_23851);

return statearr_23860;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23857__$1,inst_23855);
} else {
return null;
}
}
});})(c__19639__auto__))
;
return ((function (switch__19618__auto__,c__19639__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19619__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19619__auto____0 = (function (){
var statearr_23864 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23864[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19619__auto__);

(statearr_23864[(1)] = (1));

return statearr_23864;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19619__auto____1 = (function (state_23857){
while(true){
var ret_value__19620__auto__ = (function (){try{while(true){
var result__19621__auto__ = switch__19618__auto__.call(null,state_23857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19621__auto__;
}
break;
}
}catch (e23865){if((e23865 instanceof Object)){
var ex__19622__auto__ = e23865;
var statearr_23866_23868 = state_23857;
(statearr_23866_23868[(5)] = ex__19622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23869 = state_23857;
state_23857 = G__23869;
continue;
} else {
return ret_value__19620__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19619__auto__ = function(state_23857){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19619__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19619__auto____1.call(this,state_23857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19619__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19619__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19619__auto__;
})()
;})(switch__19618__auto__,c__19639__auto__))
})();
var state__19641__auto__ = (function (){var statearr_23867 = f__19640__auto__.call(null);
(statearr_23867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19639__auto__);

return statearr_23867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19641__auto__);
});})(c__19639__auto__))
);

return c__19639__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__23871 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__23871,(0),null);
var ln = cljs.core.nth.call(null,vec__23871,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__23874 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__23874,(0),null);
var file_line = cljs.core.nth.call(null,vec__23874,(1),null);
var file_column = cljs.core.nth.call(null,vec__23874,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__23874,file_name,file_line,file_column){
return (function (p1__23872_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__23872_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__23874,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16358__auto__ = file_line;
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
var and__16346__auto__ = cause;
if(cljs.core.truth_(and__16346__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16346__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__23877 = figwheel.client.heads_up.ensure_container.call(null);
var map__23877__$1 = ((((!((map__23877 == null)))?((((map__23877.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23877.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23877):map__23877);
var content_area_el = cljs.core.get.call(null,map__23877__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19639__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19639__auto__){
return (function (){
var f__19640__auto__ = (function (){var switch__19618__auto__ = ((function (c__19639__auto__){
return (function (state_23925){
var state_val_23926 = (state_23925[(1)]);
if((state_val_23926 === (1))){
var inst_23908 = (state_23925[(7)]);
var inst_23908__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_23909 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_23910 = ["0.0"];
var inst_23911 = cljs.core.PersistentHashMap.fromArrays(inst_23909,inst_23910);
var inst_23912 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23908__$1,inst_23911);
var inst_23913 = cljs.core.async.timeout.call(null,(300));
var state_23925__$1 = (function (){var statearr_23927 = state_23925;
(statearr_23927[(8)] = inst_23912);

(statearr_23927[(7)] = inst_23908__$1);

return statearr_23927;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23925__$1,(2),inst_23913);
} else {
if((state_val_23926 === (2))){
var inst_23908 = (state_23925[(7)]);
var inst_23915 = (state_23925[(2)]);
var inst_23916 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_23917 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_23918 = cljs.core.PersistentHashMap.fromArrays(inst_23916,inst_23917);
var inst_23919 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23908,inst_23918);
var inst_23920 = cljs.core.async.timeout.call(null,(200));
var state_23925__$1 = (function (){var statearr_23928 = state_23925;
(statearr_23928[(9)] = inst_23919);

(statearr_23928[(10)] = inst_23915);

return statearr_23928;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23925__$1,(3),inst_23920);
} else {
if((state_val_23926 === (3))){
var inst_23908 = (state_23925[(7)]);
var inst_23922 = (state_23925[(2)]);
var inst_23923 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_23908,"");
var state_23925__$1 = (function (){var statearr_23929 = state_23925;
(statearr_23929[(11)] = inst_23922);

return statearr_23929;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23925__$1,inst_23923);
} else {
return null;
}
}
}
});})(c__19639__auto__))
;
return ((function (switch__19618__auto__,c__19639__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19619__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19619__auto____0 = (function (){
var statearr_23933 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23933[(0)] = figwheel$client$heads_up$clear_$_state_machine__19619__auto__);

(statearr_23933[(1)] = (1));

return statearr_23933;
});
var figwheel$client$heads_up$clear_$_state_machine__19619__auto____1 = (function (state_23925){
while(true){
var ret_value__19620__auto__ = (function (){try{while(true){
var result__19621__auto__ = switch__19618__auto__.call(null,state_23925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19621__auto__;
}
break;
}
}catch (e23934){if((e23934 instanceof Object)){
var ex__19622__auto__ = e23934;
var statearr_23935_23937 = state_23925;
(statearr_23935_23937[(5)] = ex__19622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23938 = state_23925;
state_23925 = G__23938;
continue;
} else {
return ret_value__19620__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19619__auto__ = function(state_23925){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19619__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19619__auto____1.call(this,state_23925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19619__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19619__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19619__auto__;
})()
;})(switch__19618__auto__,c__19639__auto__))
})();
var state__19641__auto__ = (function (){var statearr_23936 = f__19640__auto__.call(null);
(statearr_23936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19639__auto__);

return statearr_23936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19641__auto__);
});})(c__19639__auto__))
);

return c__19639__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19639__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19639__auto__){
return (function (){
var f__19640__auto__ = (function (){var switch__19618__auto__ = ((function (c__19639__auto__){
return (function (state_23970){
var state_val_23971 = (state_23970[(1)]);
if((state_val_23971 === (1))){
var inst_23960 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_23970__$1 = state_23970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23970__$1,(2),inst_23960);
} else {
if((state_val_23971 === (2))){
var inst_23962 = (state_23970[(2)]);
var inst_23963 = cljs.core.async.timeout.call(null,(400));
var state_23970__$1 = (function (){var statearr_23972 = state_23970;
(statearr_23972[(7)] = inst_23962);

return statearr_23972;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23970__$1,(3),inst_23963);
} else {
if((state_val_23971 === (3))){
var inst_23965 = (state_23970[(2)]);
var inst_23966 = figwheel.client.heads_up.clear.call(null);
var state_23970__$1 = (function (){var statearr_23973 = state_23970;
(statearr_23973[(8)] = inst_23965);

return statearr_23973;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23970__$1,(4),inst_23966);
} else {
if((state_val_23971 === (4))){
var inst_23968 = (state_23970[(2)]);
var state_23970__$1 = state_23970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23970__$1,inst_23968);
} else {
return null;
}
}
}
}
});})(c__19639__auto__))
;
return ((function (switch__19618__auto__,c__19639__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19619__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19619__auto____0 = (function (){
var statearr_23977 = [null,null,null,null,null,null,null,null,null];
(statearr_23977[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19619__auto__);

(statearr_23977[(1)] = (1));

return statearr_23977;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19619__auto____1 = (function (state_23970){
while(true){
var ret_value__19620__auto__ = (function (){try{while(true){
var result__19621__auto__ = switch__19618__auto__.call(null,state_23970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19621__auto__;
}
break;
}
}catch (e23978){if((e23978 instanceof Object)){
var ex__19622__auto__ = e23978;
var statearr_23979_23981 = state_23970;
(statearr_23979_23981[(5)] = ex__19622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23982 = state_23970;
state_23970 = G__23982;
continue;
} else {
return ret_value__19620__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19619__auto__ = function(state_23970){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19619__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19619__auto____1.call(this,state_23970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19619__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19619__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19619__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19619__auto__;
})()
;})(switch__19618__auto__,c__19639__auto__))
})();
var state__19641__auto__ = (function (){var statearr_23980 = f__19640__auto__.call(null);
(statearr_23980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19639__auto__);

return statearr_23980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19641__auto__);
});})(c__19639__auto__))
);

return c__19639__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1521783861575