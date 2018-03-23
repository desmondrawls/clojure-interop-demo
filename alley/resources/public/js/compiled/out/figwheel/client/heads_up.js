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
var len__17416__auto___26436 = arguments.length;
var i__17417__auto___26437 = (0);
while(true){
if((i__17417__auto___26437 < len__17416__auto___26436)){
args__17423__auto__.push((arguments[i__17417__auto___26437]));

var G__26438 = (i__17417__auto___26437 + (1));
i__17417__auto___26437 = G__26438;
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
var seq__26428_26439 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__26429_26440 = null;
var count__26430_26441 = (0);
var i__26431_26442 = (0);
while(true){
if((i__26431_26442 < count__26430_26441)){
var k_26443 = cljs.core._nth.call(null,chunk__26429_26440,i__26431_26442);
e.setAttribute(cljs.core.name.call(null,k_26443),cljs.core.get.call(null,attrs,k_26443));

var G__26444 = seq__26428_26439;
var G__26445 = chunk__26429_26440;
var G__26446 = count__26430_26441;
var G__26447 = (i__26431_26442 + (1));
seq__26428_26439 = G__26444;
chunk__26429_26440 = G__26445;
count__26430_26441 = G__26446;
i__26431_26442 = G__26447;
continue;
} else {
var temp__4425__auto___26448 = cljs.core.seq.call(null,seq__26428_26439);
if(temp__4425__auto___26448){
var seq__26428_26449__$1 = temp__4425__auto___26448;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26428_26449__$1)){
var c__17161__auto___26450 = cljs.core.chunk_first.call(null,seq__26428_26449__$1);
var G__26451 = cljs.core.chunk_rest.call(null,seq__26428_26449__$1);
var G__26452 = c__17161__auto___26450;
var G__26453 = cljs.core.count.call(null,c__17161__auto___26450);
var G__26454 = (0);
seq__26428_26439 = G__26451;
chunk__26429_26440 = G__26452;
count__26430_26441 = G__26453;
i__26431_26442 = G__26454;
continue;
} else {
var k_26455 = cljs.core.first.call(null,seq__26428_26449__$1);
e.setAttribute(cljs.core.name.call(null,k_26455),cljs.core.get.call(null,attrs,k_26455));

var G__26456 = cljs.core.next.call(null,seq__26428_26449__$1);
var G__26457 = null;
var G__26458 = (0);
var G__26459 = (0);
seq__26428_26439 = G__26456;
chunk__26429_26440 = G__26457;
count__26430_26441 = G__26458;
i__26431_26442 = G__26459;
continue;
}
} else {
}
}
break;
}

var seq__26432_26460 = cljs.core.seq.call(null,children);
var chunk__26433_26461 = null;
var count__26434_26462 = (0);
var i__26435_26463 = (0);
while(true){
if((i__26435_26463 < count__26434_26462)){
var ch_26464 = cljs.core._nth.call(null,chunk__26433_26461,i__26435_26463);
e.appendChild(ch_26464);

var G__26465 = seq__26432_26460;
var G__26466 = chunk__26433_26461;
var G__26467 = count__26434_26462;
var G__26468 = (i__26435_26463 + (1));
seq__26432_26460 = G__26465;
chunk__26433_26461 = G__26466;
count__26434_26462 = G__26467;
i__26435_26463 = G__26468;
continue;
} else {
var temp__4425__auto___26469 = cljs.core.seq.call(null,seq__26432_26460);
if(temp__4425__auto___26469){
var seq__26432_26470__$1 = temp__4425__auto___26469;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26432_26470__$1)){
var c__17161__auto___26471 = cljs.core.chunk_first.call(null,seq__26432_26470__$1);
var G__26472 = cljs.core.chunk_rest.call(null,seq__26432_26470__$1);
var G__26473 = c__17161__auto___26471;
var G__26474 = cljs.core.count.call(null,c__17161__auto___26471);
var G__26475 = (0);
seq__26432_26460 = G__26472;
chunk__26433_26461 = G__26473;
count__26434_26462 = G__26474;
i__26435_26463 = G__26475;
continue;
} else {
var ch_26476 = cljs.core.first.call(null,seq__26432_26470__$1);
e.appendChild(ch_26476);

var G__26477 = cljs.core.next.call(null,seq__26432_26470__$1);
var G__26478 = null;
var G__26479 = (0);
var G__26480 = (0);
seq__26432_26460 = G__26477;
chunk__26433_26461 = G__26478;
count__26434_26462 = G__26479;
i__26435_26463 = G__26480;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq26425){
var G__26426 = cljs.core.first.call(null,seq26425);
var seq26425__$1 = cljs.core.next.call(null,seq26425);
var G__26427 = cljs.core.first.call(null,seq26425__$1);
var seq26425__$2 = cljs.core.next.call(null,seq26425__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__26426,G__26427,seq26425__$2);
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
var el_26481 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_26481.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_26481.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_26481.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_26481);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__26482,st_map){
var map__26487 = p__26482;
var map__26487__$1 = ((((!((map__26487 == null)))?((((map__26487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26487):map__26487);
var container_el = cljs.core.get.call(null,map__26487__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__26487,map__26487__$1,container_el){
return (function (p__26489){
var vec__26490 = p__26489;
var k = cljs.core.nth.call(null,vec__26490,(0),null);
var v = cljs.core.nth.call(null,vec__26490,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__26487,map__26487__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__26491,dom_str){
var map__26494 = p__26491;
var map__26494__$1 = ((((!((map__26494 == null)))?((((map__26494.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26494.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26494):map__26494);
var c = map__26494__$1;
var content_area_el = cljs.core.get.call(null,map__26494__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__26496){
var map__26499 = p__26496;
var map__26499__$1 = ((((!((map__26499 == null)))?((((map__26499.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26499.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26499):map__26499);
var content_area_el = cljs.core.get.call(null,map__26499__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19438__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto__){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto__){
return (function (state_26542){
var state_val_26543 = (state_26542[(1)]);
if((state_val_26543 === (1))){
var inst_26527 = (state_26542[(7)]);
var inst_26527__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26528 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26529 = ["10px","10px","100%","68px","1.0"];
var inst_26530 = cljs.core.PersistentHashMap.fromArrays(inst_26528,inst_26529);
var inst_26531 = cljs.core.merge.call(null,inst_26530,style);
var inst_26532 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26527__$1,inst_26531);
var inst_26533 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26527__$1,msg);
var inst_26534 = cljs.core.async.timeout.call(null,(300));
var state_26542__$1 = (function (){var statearr_26544 = state_26542;
(statearr_26544[(8)] = inst_26533);

(statearr_26544[(7)] = inst_26527__$1);

(statearr_26544[(9)] = inst_26532);

return statearr_26544;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26542__$1,(2),inst_26534);
} else {
if((state_val_26543 === (2))){
var inst_26527 = (state_26542[(7)]);
var inst_26536 = (state_26542[(2)]);
var inst_26537 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_26538 = ["auto"];
var inst_26539 = cljs.core.PersistentHashMap.fromArrays(inst_26537,inst_26538);
var inst_26540 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26527,inst_26539);
var state_26542__$1 = (function (){var statearr_26545 = state_26542;
(statearr_26545[(10)] = inst_26536);

return statearr_26545;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26542__$1,inst_26540);
} else {
return null;
}
}
});})(c__19438__auto__))
;
return ((function (switch__19373__auto__,c__19438__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19374__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19374__auto____0 = (function (){
var statearr_26549 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26549[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19374__auto__);

(statearr_26549[(1)] = (1));

return statearr_26549;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19374__auto____1 = (function (state_26542){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_26542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e26550){if((e26550 instanceof Object)){
var ex__19377__auto__ = e26550;
var statearr_26551_26553 = state_26542;
(statearr_26551_26553[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26554 = state_26542;
state_26542 = G__26554;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19374__auto__ = function(state_26542){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19374__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19374__auto____1.call(this,state_26542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19374__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19374__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto__))
})();
var state__19440__auto__ = (function (){var statearr_26552 = f__19439__auto__.call(null);
(statearr_26552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto__);

return statearr_26552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto__))
);

return c__19438__auto__;
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
var vec__26556 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__26556,(0),null);
var ln = cljs.core.nth.call(null,vec__26556,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__26559 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__26559,(0),null);
var file_line = cljs.core.nth.call(null,vec__26559,(1),null);
var file_column = cljs.core.nth.call(null,vec__26559,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__26559,file_name,file_line,file_column){
return (function (p1__26557_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__26557_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__26559,file_name,file_line,file_column))
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
var map__26562 = figwheel.client.heads_up.ensure_container.call(null);
var map__26562__$1 = ((((!((map__26562 == null)))?((((map__26562.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26562.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26562):map__26562);
var content_area_el = cljs.core.get.call(null,map__26562__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19438__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto__){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto__){
return (function (state_26610){
var state_val_26611 = (state_26610[(1)]);
if((state_val_26611 === (1))){
var inst_26593 = (state_26610[(7)]);
var inst_26593__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26594 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26595 = ["0.0"];
var inst_26596 = cljs.core.PersistentHashMap.fromArrays(inst_26594,inst_26595);
var inst_26597 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26593__$1,inst_26596);
var inst_26598 = cljs.core.async.timeout.call(null,(300));
var state_26610__$1 = (function (){var statearr_26612 = state_26610;
(statearr_26612[(7)] = inst_26593__$1);

(statearr_26612[(8)] = inst_26597);

return statearr_26612;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26610__$1,(2),inst_26598);
} else {
if((state_val_26611 === (2))){
var inst_26593 = (state_26610[(7)]);
var inst_26600 = (state_26610[(2)]);
var inst_26601 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_26602 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_26603 = cljs.core.PersistentHashMap.fromArrays(inst_26601,inst_26602);
var inst_26604 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26593,inst_26603);
var inst_26605 = cljs.core.async.timeout.call(null,(200));
var state_26610__$1 = (function (){var statearr_26613 = state_26610;
(statearr_26613[(9)] = inst_26600);

(statearr_26613[(10)] = inst_26604);

return statearr_26613;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26610__$1,(3),inst_26605);
} else {
if((state_val_26611 === (3))){
var inst_26593 = (state_26610[(7)]);
var inst_26607 = (state_26610[(2)]);
var inst_26608 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26593,"");
var state_26610__$1 = (function (){var statearr_26614 = state_26610;
(statearr_26614[(11)] = inst_26607);

return statearr_26614;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26610__$1,inst_26608);
} else {
return null;
}
}
}
});})(c__19438__auto__))
;
return ((function (switch__19373__auto__,c__19438__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19374__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19374__auto____0 = (function (){
var statearr_26618 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26618[(0)] = figwheel$client$heads_up$clear_$_state_machine__19374__auto__);

(statearr_26618[(1)] = (1));

return statearr_26618;
});
var figwheel$client$heads_up$clear_$_state_machine__19374__auto____1 = (function (state_26610){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_26610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e26619){if((e26619 instanceof Object)){
var ex__19377__auto__ = e26619;
var statearr_26620_26622 = state_26610;
(statearr_26620_26622[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26623 = state_26610;
state_26610 = G__26623;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19374__auto__ = function(state_26610){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19374__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19374__auto____1.call(this,state_26610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19374__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19374__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto__))
})();
var state__19440__auto__ = (function (){var statearr_26621 = f__19439__auto__.call(null);
(statearr_26621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto__);

return statearr_26621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto__))
);

return c__19438__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19438__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto__){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto__){
return (function (state_26655){
var state_val_26656 = (state_26655[(1)]);
if((state_val_26656 === (1))){
var inst_26645 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_26655__$1 = state_26655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26655__$1,(2),inst_26645);
} else {
if((state_val_26656 === (2))){
var inst_26647 = (state_26655[(2)]);
var inst_26648 = cljs.core.async.timeout.call(null,(400));
var state_26655__$1 = (function (){var statearr_26657 = state_26655;
(statearr_26657[(7)] = inst_26647);

return statearr_26657;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26655__$1,(3),inst_26648);
} else {
if((state_val_26656 === (3))){
var inst_26650 = (state_26655[(2)]);
var inst_26651 = figwheel.client.heads_up.clear.call(null);
var state_26655__$1 = (function (){var statearr_26658 = state_26655;
(statearr_26658[(8)] = inst_26650);

return statearr_26658;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26655__$1,(4),inst_26651);
} else {
if((state_val_26656 === (4))){
var inst_26653 = (state_26655[(2)]);
var state_26655__$1 = state_26655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26655__$1,inst_26653);
} else {
return null;
}
}
}
}
});})(c__19438__auto__))
;
return ((function (switch__19373__auto__,c__19438__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19374__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19374__auto____0 = (function (){
var statearr_26662 = [null,null,null,null,null,null,null,null,null];
(statearr_26662[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19374__auto__);

(statearr_26662[(1)] = (1));

return statearr_26662;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19374__auto____1 = (function (state_26655){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_26655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e26663){if((e26663 instanceof Object)){
var ex__19377__auto__ = e26663;
var statearr_26664_26666 = state_26655;
(statearr_26664_26666[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26667 = state_26655;
state_26655 = G__26667;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19374__auto__ = function(state_26655){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19374__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19374__auto____1.call(this,state_26655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19374__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19374__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto__))
})();
var state__19440__auto__ = (function (){var statearr_26665 = f__19439__auto__.call(null);
(statearr_26665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto__);

return statearr_26665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto__))
);

return c__19438__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1521786014040