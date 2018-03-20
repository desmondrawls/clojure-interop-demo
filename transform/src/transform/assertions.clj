(ns transform.assertions)

(defn assertEquals [expected actual name]
  (if (= expected actual)
    (println "SUCCESS: " name)
    (println "FAILED: " name "\n\texpected " actual " to equal " expected)))