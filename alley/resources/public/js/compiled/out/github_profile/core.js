// Compiled by ClojureScript 1.7.145 {}
goog.provide('github_profile.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('github_profile.views');
goog.require('github_profile.subs');
goog.require('github_profile.routes');
goog.require('github_profile.handlers');
goog.require('re_frame.core');
github_profile.core.mount_root = (function github_profile$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [github_profile.views.main_panel], null),document.getElementById("app"));
});
github_profile.core.init = (function github_profile$core$init(){
github_profile.routes.app_routes.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return github_profile.core.mount_root.call(null);
});
goog.exportSymbol('github_profile.core.init', github_profile.core.init);

//# sourceMappingURL=core.js.map?rel=1521783857976