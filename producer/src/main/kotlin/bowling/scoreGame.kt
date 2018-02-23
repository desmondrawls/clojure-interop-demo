package bowling

import java.lang.Integer.min

enum class BowlingFailures {
    SCORING_MIDFRAME,
    INVALID_ROLL_TOO_HIGH,
    INVALID_ROLL_NEGATIVE
}

fun scoreGame(game: Game): Outcome<Int, BowlingFailures> {
    return validateGame(game)
            .fold({ game -> scoreFromFrame(game, 0, 0, 0) },
                    { errors -> Failure<Int, BowlingFailures>(errors) })
}

private fun scoreFromFrame(game: Game, frame: Int, roll: Int, score: Int): Outcome<Int, BowlingFailures> {
    fun nextFrame(): Int = frame + 1

    fun nextRoll(): Int = roll + 1

    fun rollAfterNext(): Int = roll + 2

    fun pinsForThisRoll(): Int = game.rolls[roll]

    fun pinsForNextRoll(): Int = game.rolls[nextRoll()]

    fun pinsForRollAfterNext(): Int = game.rolls[rollAfterNext()]

    fun isFinishedScoring(): Boolean = game.rolls.size <= roll || frame == 10

    fun isStrike(): Boolean = pinsForThisRoll() == 10

    fun strikeScore(): Outcome<Int, BowlingFailures> {
        val bonus = score + game.rolls.subList(roll, min(roll + 3, game.rolls.size)).reduce { x, y -> x + y }
        return scoreFromFrame(game, nextFrame(), nextRoll(), bonus)
    }

    fun isSpare(): Boolean = game.rolls.size > rollAfterNext() && pinsForThisRoll() + pinsForNextRoll() == 10

    fun spareScore(): Outcome<Int, BowlingFailures> {
        val bonus = if (frame == 9) 2*pinsForRollAfterNext() else pinsForRollAfterNext()
        return scoreFromFrame(game, nextFrame(), rollAfterNext(), score + 10 + bonus)
    }

    fun regularScore(): Outcome<Int, BowlingFailures> =
            scoreFromFrame(game, nextFrame(), rollAfterNext(), score + pinsForThisRoll() + pinsForNextRoll())

    fun isMidFrame(): Boolean = game.rolls.size == nextRoll() && !isStrike() && frame != 10


    if (isMidFrame()) {
        return Failure(listOf(BowlingFailures.SCORING_MIDFRAME))
    } else if (isFinishedScoring()) {
        return Success(score)
    } else {
        if (isStrike()) {
            return strikeScore()
        } else if (isSpare()) {
            return spareScore()
        } else {
            return regularScore()
        }
    }
}