(ns figwheel.connect (:require [figwheel.client] [bowling-alley.core] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/bowling-alley.core.mount-root (apply js/bowling-alley.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'bowling-alley.core/mount-root' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

