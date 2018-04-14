package bowling

fun validateRoll(pins: Int): Outcome<Int, BowlingFailures> {
    if(pins < 0){
        return Failure(listOf(BowlingFailures.INVALID_ROLL_NEGATIVE))
    } else if (pins > 10) {
        return Failure(listOf(BowlingFailures.INVALID_ROLL_TOO_HIGH))
    } else {
        return Success(pins)
    }
}