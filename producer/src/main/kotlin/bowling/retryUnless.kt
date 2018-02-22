package bowling

fun <Value> retryUnless(task: () -> Outcome<Value, CommonErrors>, showStopper: CommonErrors, retries: Int): Outcome<Value, CommonErrors> {
    fun attempt(retry: Int): Outcome<Value, CommonErrors> {
        return task().fold(
                { value -> Success<Value, CommonErrors>(value) },
                { errors ->
                    when {
                        retry > retries -> Failure<Value, CommonErrors>(errors)
                        errors.contains(showStopper) -> Failure<Value, CommonErrors>(errors)
                        else -> attempt(retry + 1)
                    }
                })
    }
    return attempt(0)
}

