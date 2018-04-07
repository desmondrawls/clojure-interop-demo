package bowling

import java.lang.Integer.min

enum class BowlingFailures {
    SCORING_MIDFRAME,
    INVALID_ROLL_TOO_HIGH,
    INVALID_ROLL_NEGATIVE,
    INVALID_FRAME_TOO_HIGH,
    INVALID_NAME_MISSING
}

fun scoreGame(rolls: List<Int>): Outcome<Int, BowlingFailures> {
    return validateRolls(rolls)
            .fold({ _ -> scoreFromFrame(rolls, 0, 0, 0) },
                    { errors -> Failure<Int, BowlingFailures>(errors) })
}

private fun scoreFromFrame(rolls: List<Int>, frame: Int, roll: Int, score: Int): Outcome<Int, BowlingFailures> {
    fun nextFrame(): Int = frame + 1

    fun nextRoll(): Int = roll + 1

    fun rollAfterNext(): Int = roll + 2

    fun pinsForThisRoll(): Int = rolls[roll]

    fun pinsForNextRoll(): Int = rolls[nextRoll()]

    fun pinsForRollAfterNext(): Int = rolls[rollAfterNext()]

    fun isFinishedScoring(): Boolean = rolls.size <= roll || frame == 10

    fun isStrike(): Boolean = pinsForThisRoll() == 10

    fun strikeScore(): Outcome<Int, BowlingFailures> {
        val bonus = score + rolls.subList(roll, min(roll + 3, rolls.size)).reduce { x, y -> x + y }
        return scoreFromFrame(rolls, nextFrame(), nextRoll(), bonus)
    }

    fun isSpare(): Boolean = rolls.size > rollAfterNext() && pinsForThisRoll() + pinsForNextRoll() == 10

    fun spareScore(): Outcome<Int, BowlingFailures> {
        val bonus = if (frame == 9) 2 * pinsForRollAfterNext() else pinsForRollAfterNext()
        return scoreFromFrame(rolls, nextFrame(), rollAfterNext(), score + 10 + bonus)
    }

    fun regularScore(): Outcome<Int, BowlingFailures> =
            scoreFromFrame(rolls, nextFrame(), rollAfterNext(), score + pinsForThisRoll() + pinsForNextRoll())

    fun isMidFrame(): Boolean = rolls.size == nextRoll() && !isStrike() && frame != 10


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