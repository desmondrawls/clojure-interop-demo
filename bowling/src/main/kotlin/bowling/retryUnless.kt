package bowling

fun <Value> retryUnless(task: () -> Outcome<Value, SpacetimeErrors>, showStopper: SpacetimeErrors, retries: Int): Outcome<Value, SpacetimeErrors> {
    fun attempt(retry: Int): Outcome<Value, SpacetimeErrors> {
        return task().fold(
                { value -> Success<Value, SpacetimeErrors>(value) },
                { errors ->
                    when {
                        retry > retries -> Failure<Value, SpacetimeErrors>(errors)
                        errors.contains(showStopper) -> Failure<Value, SpacetimeErrors>(errors)
                        else -> attempt(retry + 1)
                    }
                })
    }
    return attempt(0)
}

