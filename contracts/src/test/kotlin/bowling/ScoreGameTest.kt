package bowling

import com.natpryce.hamkrest.assertion.assert
import com.natpryce.hamkrest.equalTo
import org.junit.Test
import java.util.*

class ScoreGameTest {
    @Test
    fun negativePins() {
        val terribleRoll = listOf(-1)
        val expectedScore: Outcome<Int, BowlingFailures> = Failure(listOf(BowlingFailures.INVALID_ROLL_NEGATIVE))

        val score = scoreGame(terribleRoll)

        assert.that(score, equalTo(expectedScore))
    }

    @Test
    fun moreThanTenPinsInARoll() {
        val amazingRoll = listOf(11)
        val expectedScore: Outcome<Int, BowlingFailures> = Failure(listOf(BowlingFailures.INVALID_ROLL_TOO_HIGH))

        val score = scoreGame(amazingRoll)

        assert.that(score, equalTo(expectedScore))
    }

    @Test
    fun mixedValidityRolls() {
        val terribleRoll = listOf(9, -1, 4, 5, 6)
        val expectedScore: Outcome<Int, BowlingFailures> = Failure(listOf(BowlingFailures.INVALID_ROLL_NEGATIVE))

        val score = scoreGame(terribleRoll)

        assert.that(score, equalTo(expectedScore))
    }

    @Test
    fun gutterBall() {
        val gutterBall = listOf(0)
        val expectedScore: Outcome<Int, BowlingFailures> = Failure(listOf(BowlingFailures.SCORING_MIDFRAME))

        val score = scoreGame(gutterBall)

        assert.that(score, equalTo(expectedScore))
    }

    @Test
    fun gutterFrame() {
        val gutterFrame = listOf(0, 0)
        val expectedScore: Outcome<Int, BowlingFailures> = Success(0)

        val score = scoreGame(gutterFrame)

        assert.that(score, equalTo(expectedScore))
    }

    @Test
    fun spareFrame() {
        val spareFrame = listOf(1, 9)
        val expectedScore: Outcome<Int, BowlingFailures> = Success(10)

        val score = scoreGame(spareFrame)

        assert.that(score, equalTo(expectedScore))
    }

    @Test
    fun strikeFrame() {
        val gutterFrame = listOf(10)
        val expectedScore: Outcome<Int, BowlingFailures> = Success(10)

        val score = scoreGame(gutterFrame)

        assert.that(score, equalTo(expectedScore))
    }

    @Test
    fun gutterGame() {
        val gutterGame: List<Int> = rollMany(emptyList(), 0, 20)
        val expectedScore: Outcome<Int, BowlingFailures> = Success(0)

        val score = scoreGame(gutterGame)

        assert.that(score, equalTo(expectedScore))
    }

    @Test
    fun onePinGame() {
        val badStart: List<Int> = rollMany(emptyList(), 0, 19)
        val onePinner: List<Int> = mustRoll(badStart, 1)
        val expectedScore: Outcome<Int, BowlingFailures> = Success(1)

        val score = scoreGame(onePinner)

        assert.that(score, equalTo(expectedScore))
    }

    @Test
    fun allDeucesGame() {
        val deuces: List<Int> = rollMany(emptyList(), 2, 20)
        val expectedScore: Outcome<Int, BowlingFailures> = Success(40)

        val score = scoreGame(deuces)

        assert.that(score, equalTo(expectedScore))
    }

    @Test
    fun tooManyRolls() {
        val tooManyRolls: List<Int> = rollMany(emptyList(), 2, 99)
        val expectedScore: Outcome<Int, BowlingFailures> = Success(40)

        val score = scoreGame(tooManyRolls)

        assert.that(score, equalTo(expectedScore))
    }

    @Test
    fun oneSpareGame() {
        val promisingStart: List<Int> = rollSequence(emptyList(), listOf(8,2,5))
        val badFinish: List<Int> = rollMany(promisingStart, 0, 17)
        val expectedScore: Outcome<Int, BowlingFailures> = Success(20)

        val score = scoreGame(badFinish)

        assert.that(score, equalTo(expectedScore))
    }

    @Test
    fun closingSpareGame() {
        val badStart: List<Int> = rollMany(emptyList(), 0, 18)
        val closingSpare: List<Int> = rollMany(badStart, 5, 3)
        val expectedScore: Outcome<Int, BowlingFailures> = Success(20)

        val score = scoreGame(closingSpare)

        assert.that(score, equalTo(expectedScore))
    }

    @Test
    fun oneStrikeGame() {
        val promisingStart: List<Int> = rollSequence(emptyList(), listOf(10,2,5))
        val badFinish: List<Int> = rollMany(promisingStart, 0, 16)
        val expectedScore: Outcome<Int, BowlingFailures> = Success(24)

        val score = scoreGame(badFinish)

        assert.that(score, equalTo(expectedScore))
    }

    @Test
    fun perfectGame() {
        val perfection: List<Int> = rollMany(emptyList(), 10, 12)
        val expectedScore: Outcome<Int, BowlingFailures> = Success(300)

        val score = scoreGame(perfection)

        assert.that(score, equalTo(expectedScore))
    }

    private fun rollMany(rolls: List<Int>, pins: Int, repititions: Int): List<Int> {
        return rollSequence(rolls, Collections.nCopies(repititions, pins))
    }

    private fun rollSequence(rolls: List<Int>, pins: List<Int>): List<Int> {
        fun rollAgain(rolls: List<Int>, pins: List<Int>): List<Int> {
            if (pins.isEmpty()) {
                return rolls
            } else {
                return rollAgain(mustRoll(rolls, pins[0]), pins.drop(1))
            }
        }
        return rollAgain(rolls, pins)
    }

    private fun mustRoll(rolls: List<Int>, pins: Int): List<Int> {
        return roll(rolls, pins).fold({outcome -> outcome}, {_ -> throw RuntimeException()})
    }
}