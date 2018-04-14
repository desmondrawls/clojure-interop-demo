package bowling

fun validateGame(game: Game): Outcome<Game, BowlingFailures> =
    validateRolls(game.rolls)
            .fold({_ -> Success<Game, BowlingFailures>(game)},
                    {errors -> Failure<Game, BowlingFailures>(errors)})