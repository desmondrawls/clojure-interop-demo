package bowling

fun validateRolls(rolls: List<Int>): Outcome<List<Int>, BowlingFailures> {
    if(rolls.isEmpty()){
        return Success(rolls)
    } else {
        return validateRoll(rolls[0])
                .fold({success -> validateRolls(rolls.drop(1))},
                        {errors -> Failure<List<Int>, BowlingFailures>(errors) })
    }
}