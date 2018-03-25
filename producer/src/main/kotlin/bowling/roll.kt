package bowling

import java.util.*


fun roll(game: Game, pins: Int?): Outcome<Game, BowlingFailures> =
        if (pins != null)
            roll(game, pins)
        else roll(game)

private fun roll(game: Game, pins: Int = Random().nextInt(10)): Outcome<Game, BowlingFailures> =
   validateRoll(pins)
           .fold({pins ->
               Success<Game, BowlingFailures>(Game(listOf(game.rolls, listOf(pins)).flatten(), game.name, game.identifier))},
                   {errors -> Failure<Game, BowlingFailures>(errors)})