package bowling

import java.util.*

fun randomRoll(rolls: List<Int>): Int =
    if (rolls.filter { it != 10 }.count().rem(2) == 0) {
        Random().nextInt(10)
    } else Random().nextInt(10 - rolls.last())

fun roll(game: Game, pins: Int?): Outcome<Game, BowlingFailures> =
        if (pins != null)
            roll(game, pins)
        else roll(game)

private fun roll(game: Game, pins: Int = randomRoll(game.rolls)): Outcome<Game, BowlingFailures> =
   validateRoll(pins)
           .fold({pins ->
               Success<Game, BowlingFailures>(Game(listOf(game.rolls, listOf(pins)).flatten(), game.name, game.identifier))},
                   {errors -> Failure<Game, BowlingFailures>(errors)})