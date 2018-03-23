// Compiled by ClojureScript 1.7.145 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__24887,handler){
var map__24888 = p__24887;
var map__24888__$1 = ((((!((map__24888 == null)))?((((map__24888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24888):map__24888);
var uri = cljs.core.get.call(null,map__24888__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__24888__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__24888__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__24888__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__24888__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__24888__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__24888__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__24888,map__24888__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__24886_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__24886_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__24888,map__24888__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___24896 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___24896)){
var response_type_24897 = temp__4425__auto___24896;
this$__$1.responseType = cljs.core.name.call(null,response_type_24897);
} else {
}

var seq__24890_24898 = cljs.core.seq.call(null,headers);
var chunk__24891_24899 = null;
var count__24892_24900 = (0);
var i__24893_24901 = (0);
while(true){
if((i__24893_24901 < count__24892_24900)){
var vec__24894_24902 = cljs.core._nth.call(null,chunk__24891_24899,i__24893_24901);
var k_24903 = cljs.core.nth.call(null,vec__24894_24902,(0),null);
var v_24904 = cljs.core.nth.call(null,vec__24894_24902,(1),null);
this$__$1.setRequestHeader(k_24903,v_24904);

var G__24905 = seq__24890_24898;
var G__24906 = chunk__24891_24899;
var G__24907 = count__24892_24900;
var G__24908 = (i__24893_24901 + (1));
seq__24890_24898 = G__24905;
chunk__24891_24899 = G__24906;
count__24892_24900 = G__24907;
i__24893_24901 = G__24908;
continue;
} else {
var temp__4425__auto___24909 = cljs.core.seq.call(null,seq__24890_24898);
if(temp__4425__auto___24909){
var seq__24890_24910__$1 = temp__4425__auto___24909;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24890_24910__$1)){
var c__17161__auto___24911 = cljs.core.chunk_first.call(null,seq__24890_24910__$1);
var G__24912 = cljs.core.chunk_rest.call(null,seq__24890_24910__$1);
var G__24913 = c__17161__auto___24911;
var G__24914 = cljs.core.count.call(null,c__17161__auto___24911);
var G__24915 = (0);
seq__24890_24898 = G__24912;
chunk__24891_24899 = G__24913;
count__24892_24900 = G__24914;
i__24893_24901 = G__24915;
continue;
} else {
var vec__24895_24916 = cljs.core.first.call(null,seq__24890_24910__$1);
var k_24917 = cljs.core.nth.call(null,vec__24895_24916,(0),null);
var v_24918 = cljs.core.nth.call(null,vec__24895_24916,(1),null);
this$__$1.setRequestHeader(k_24917,v_24918);

var G__24919 = cljs.core.next.call(null,seq__24890_24910__$1);
var G__24920 = null;
var G__24921 = (0);
var G__24922 = (0);
seq__24890_24898 = G__24919;
chunk__24891_24899 = G__24920;
count__24892_24900 = G__24921;
i__24893_24901 = G__24922;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1521786011461