package bowling

import java.util.*

fun randomRoll(rolls: List<Int>): Int =
    if (rolls.filter { it != 10 }.count().rem(2) == 0) {
        Random().nextInt(10)
    } else Random().nextInt(10 - rolls.last())

fun roll(rolls: List<Int>, pins: Int = randomRoll(rolls)): Outcome<List<Int>, BowlingFailures> =
   validateRoll(pins)
           .fold({pins ->
               Success<List<Int>, BowlingFailures>(listOf(rolls, listOf(pins)).flatten())},
                   {errors -> Failure<List<Int>, BowlingFailures>(errors)})