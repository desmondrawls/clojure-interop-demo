// Compiled by ClojureScript 1.7.145 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__22202,handler){
var map__22203 = p__22202;
var map__22203__$1 = ((((!((map__22203 == null)))?((((map__22203.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22203.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22203):map__22203);
var uri = cljs.core.get.call(null,map__22203__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__22203__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__22203__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__22203__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__22203__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__22203__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__22203__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__22203,map__22203__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__22201_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__22201_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__22203,map__22203__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___22211 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___22211)){
var response_type_22212 = temp__4425__auto___22211;
this$__$1.responseType = cljs.core.name.call(null,response_type_22212);
} else {
}

var seq__22205_22213 = cljs.core.seq.call(null,headers);
var chunk__22206_22214 = null;
var count__22207_22215 = (0);
var i__22208_22216 = (0);
while(true){
if((i__22208_22216 < count__22207_22215)){
var vec__22209_22217 = cljs.core._nth.call(null,chunk__22206_22214,i__22208_22216);
var k_22218 = cljs.core.nth.call(null,vec__22209_22217,(0),null);
var v_22219 = cljs.core.nth.call(null,vec__22209_22217,(1),null);
this$__$1.setRequestHeader(k_22218,v_22219);

var G__22220 = seq__22205_22213;
var G__22221 = chunk__22206_22214;
var G__22222 = count__22207_22215;
var G__22223 = (i__22208_22216 + (1));
seq__22205_22213 = G__22220;
chunk__22206_22214 = G__22221;
count__22207_22215 = G__22222;
i__22208_22216 = G__22223;
continue;
} else {
var temp__4425__auto___22224 = cljs.core.seq.call(null,seq__22205_22213);
if(temp__4425__auto___22224){
var seq__22205_22225__$1 = temp__4425__auto___22224;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22205_22225__$1)){
var c__17161__auto___22226 = cljs.core.chunk_first.call(null,seq__22205_22225__$1);
var G__22227 = cljs.core.chunk_rest.call(null,seq__22205_22225__$1);
var G__22228 = c__17161__auto___22226;
var G__22229 = cljs.core.count.call(null,c__17161__auto___22226);
var G__22230 = (0);
seq__22205_22213 = G__22227;
chunk__22206_22214 = G__22228;
count__22207_22215 = G__22229;
i__22208_22216 = G__22230;
continue;
} else {
var vec__22210_22231 = cljs.core.first.call(null,seq__22205_22225__$1);
var k_22232 = cljs.core.nth.call(null,vec__22210_22231,(0),null);
var v_22233 = cljs.core.nth.call(null,vec__22210_22231,(1),null);
this$__$1.setRequestHeader(k_22232,v_22233);

var G__22234 = cljs.core.next.call(null,seq__22205_22225__$1);
var G__22235 = null;
var G__22236 = (0);
var G__22237 = (0);
seq__22205_22213 = G__22234;
chunk__22206_22214 = G__22235;
count__22207_22215 = G__22236;
i__22208_22216 = G__22237;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1521783859033