(ns bowling-alley.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub-raw
  :scores
  (fn [db]
    (reaction (:scores @db))))

(re-frame/reg-sub-raw
  :games
  (fn [db]
    (reaction (:games @db))))

(re-frame/reg-sub-raw
 :name
 (fn [db]
   (reaction (:name @db))))

(re-frame/reg-sub-raw
  :inputs
  (fn [db]
    (reaction (get-in @db [:inputs]))))

(re-frame/reg-sub-raw
 :active-panel
 (fn [db _]
   (reaction (:active-panel @db))))

(re-frame/reg-sub-raw
 :github-id
 (fn [db]
   (reaction (get-in @db [:user :github-id]))))

(re-frame/reg-sub-raw
 :loading?
 (fn [db]
   (reaction (:loading? @db))))

(re-frame/reg-sub-raw
 :error?
 (fn [db]
   (reaction (:error @db))))

(re-frame/reg-sub-raw
 :user-profile
 (fn [db]
   (reaction (get-in @db [:user :profile]))))

(re-frame/reg-sub-raw
 :user-repos
 (fn [db]
   (reaction (get-in @db [:user :repos]))))
