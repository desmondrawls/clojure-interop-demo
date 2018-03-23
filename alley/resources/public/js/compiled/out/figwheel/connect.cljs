(ns figwheel.connect (:require [github-profile.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/github-profile.core.mount-root (apply js/github-profile.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'github-profile.core/mount-root' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

