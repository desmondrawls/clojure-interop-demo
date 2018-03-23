// Compiled by ClojureScript 1.7.145 {}
goog.provide('bowling_alley.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('bowling_alley.routes');
goog.require('bowling_alley.views');
goog.require('bowling_alley.handlers');
goog.require('bowling_alley.subs');
goog.require('re_frame.core');
bowling_alley.core.mount_root = (function bowling_alley$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bowling_alley.views.main_panel], null),document.getElementById("app"));
});
bowling_alley.core.init = (function bowling_alley$core$init(){
bowling_alley.routes.app_routes.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return bowling_alley.core.mount_root.call(null);
});
goog.exportSymbol('bowling_alley.core.init', bowling_alley.core.init);

//# sourceMappingURL=core.js.map?rel=1521787223422