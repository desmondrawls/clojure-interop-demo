package bowling

interface Outcome<Value, Error> {
    fun <Folded, OnSuccess: Folded, OnFailure: Folded> fold(successReaction: (Value) -> OnSuccess, failureReaction: (List<Error>) -> OnFailure): Folded
    fun <Mapped> map(transformation: (Value) -> Mapped): Outcome<Mapped, Error>
    fun <Mapped> flatMap(transformation: (Value) -> Outcome<Mapped, Error>): Outcome<Mapped, Error>
}

data class Success<Value, Error>(val value: Value) : Outcome<Value, Error> {
    override fun <Folded, OnSuccess: Folded, OnFailure: Folded> fold(successReaction: (Value) -> OnSuccess, failureReaction: (List<Error>) -> OnFailure): Folded {
        return successReaction(value)
    }
    override fun <Mapped> map(transformation: (Value) -> Mapped): Outcome<Mapped, Error> {
        return Success(transformation(value))
    }
    override fun <Mapped> flatMap(transformation: (Value) -> Outcome<Mapped, Error>): Outcome<Mapped, Error> {
        return transformation(value)
    }
}

data class Failure<Value, Error>(val errors: List<Error>) : Outcome<Value, Error> {
    override fun <Folded, OnSuccess: Folded, OnFailure: Folded> fold(successReaction: (Value) -> OnSuccess, failureReaction: (List<Error>) -> OnFailure): Folded {
        return failureReaction(errors)
    }
    override fun <Mapped> map(transformation: (Value) -> Mapped): Outcome<Mapped, Error> {
        return Failure(errors)
    }
    override fun <Mapped> flatMap(transformation: (Value) -> Outcome<Mapped, Error>): Outcome<Mapped, Error> {
        return Failure(errors)
    }
}