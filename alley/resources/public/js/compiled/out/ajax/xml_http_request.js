// Compiled by ClojureScript 1.7.145 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__32989,handler){
var map__32990 = p__32989;
var map__32990__$1 = ((((!((map__32990 == null)))?((((map__32990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32990):map__32990);
var uri = cljs.core.get.call(null,map__32990__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__32990__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__32990__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__32990__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__32990__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__32990__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__32990__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__32990,map__32990__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__32988_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__32988_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__32990,map__32990__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___32998 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___32998)){
var response_type_32999 = temp__4425__auto___32998;
this$__$1.responseType = cljs.core.name.call(null,response_type_32999);
} else {
}

var seq__32992_33000 = cljs.core.seq.call(null,headers);
var chunk__32993_33001 = null;
var count__32994_33002 = (0);
var i__32995_33003 = (0);
while(true){
if((i__32995_33003 < count__32994_33002)){
var vec__32996_33004 = cljs.core._nth.call(null,chunk__32993_33001,i__32995_33003);
var k_33005 = cljs.core.nth.call(null,vec__32996_33004,(0),null);
var v_33006 = cljs.core.nth.call(null,vec__32996_33004,(1),null);
this$__$1.setRequestHeader(k_33005,v_33006);

var G__33007 = seq__32992_33000;
var G__33008 = chunk__32993_33001;
var G__33009 = count__32994_33002;
var G__33010 = (i__32995_33003 + (1));
seq__32992_33000 = G__33007;
chunk__32993_33001 = G__33008;
count__32994_33002 = G__33009;
i__32995_33003 = G__33010;
continue;
} else {
var temp__4425__auto___33011 = cljs.core.seq.call(null,seq__32992_33000);
if(temp__4425__auto___33011){
var seq__32992_33012__$1 = temp__4425__auto___33011;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32992_33012__$1)){
var c__17161__auto___33013 = cljs.core.chunk_first.call(null,seq__32992_33012__$1);
var G__33014 = cljs.core.chunk_rest.call(null,seq__32992_33012__$1);
var G__33015 = c__17161__auto___33013;
var G__33016 = cljs.core.count.call(null,c__17161__auto___33013);
var G__33017 = (0);
seq__32992_33000 = G__33014;
chunk__32993_33001 = G__33015;
count__32994_33002 = G__33016;
i__32995_33003 = G__33017;
continue;
} else {
var vec__32997_33018 = cljs.core.first.call(null,seq__32992_33012__$1);
var k_33019 = cljs.core.nth.call(null,vec__32997_33018,(0),null);
var v_33020 = cljs.core.nth.call(null,vec__32997_33018,(1),null);
this$__$1.setRequestHeader(k_33019,v_33020);

var G__33021 = cljs.core.next.call(null,seq__32992_33012__$1);
var G__33022 = null;
var G__33023 = (0);
var G__33024 = (0);
seq__32992_33000 = G__33021;
chunk__32993_33001 = G__33022;
count__32994_33002 = G__33023;
i__32995_33003 = G__33024;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__16358__auto__ = body;
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1521787224516