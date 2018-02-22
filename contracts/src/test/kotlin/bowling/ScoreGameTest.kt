package bowling

import com.natpryce.hamkrest.assertion.assert
import com.natpryce.hamkrest.equalTo
import org.junit.Test
import java.util.*

class ScoreGameTest {
    @Test
    fun negativePins() {
        val terribleRoll = Game(listOf(-1))
        val expectedScore: Outcome<Int, BowlingFailures> = Failure(listOf(BowlingFailures.INVALID_ROLL_NEGATIVE))

        val score = scoreGame(terribleRoll)

        assert.that(score, equalTo(expectedScore))
    }

    @Test
    fun moreThanTenPinsInARoll() {
        val amazingRoll = Game(listOf(11))
        val expectedScore: Outcome<Int, BowlingFailures> = Failure(listOf(BowlingFailures.INVALID_ROLL_TOO_HIGH))

        val score = scoreGame(amazingRoll)

        assert.that(score, equalTo(expectedScore))
    }

    @Test
    fun mixedValidityRolls() {
        val terribleRoll = Game(listOf(9, -1, 4, 5, 6))
        val expectedScore: Outcome<Int, BowlingFailures> = Failure(listOf(BowlingFailures.INVALID_ROLL_NEGATIVE))

        val score = scoreGame(terribleRoll)

        assert.that(score, equalTo(expectedScore))
    }

    @Test
    fun gutterBall() {
        val gutterBall = Game(listOf(0))
        val expectedScore: Outcome<Int, BowlingFailures> = Failure(listOf(BowlingFailures.SCORING_MIDFRAME))

        val score = scoreGame(gutterBall)

        assert.that(score, equalTo(expectedScore))
    }

    @Test
    fun gutterFrame() {
        val gutterFrame = Game(listOf(0, 0))
        val expectedScore: Outcome<Int, BowlingFailures> = Success(0)

        val score = scoreGame(gutterFrame)

        assert.that(score, equalTo(expectedScore))
    }

    @Test
    fun spareFrame() {
        val spareFrame = Game(listOf(1, 9))
        val expectedScore: Outcome<Int, BowlingFailures> = Success(10)

        val score = scoreGame(spareFrame)

        assert.that(score, equalTo(expectedScore))
    }

    @Test
    fun strikeFrame() {
        val gutterFrame = Game(listOf(10))
        val expectedScore: Outcome<Int, BowlingFailures> = Success(10)

        val score = scoreGame(gutterFrame)

        assert.that(score, equalTo(expectedScore))
    }

    @Test
    fun gutterGame() {
        val gutterGame: Game = rollMany(Game(), 0, 20)
        val expectedScore: Outcome<Int, BowlingFailures> = Success(0)

        val score = scoreGame(gutterGame)

        assert.that(score, equalTo(expectedScore))
    }

    @Test
    fun onePinGame() {
        val badStart: Game = rollMany(Game(), 0, 19)
        val onePinner: Game = mustRoll(badStart, 1)
        val expectedScore: Outcome<Int, BowlingFailures> = Success(1)

        val score = scoreGame(onePinner)

        assert.that(score, equalTo(expectedScore))
    }

    @Test
    fun allDeucesGame() {
        val deuces: Game = rollMany(Game(), 2, 20)
        val expectedScore: Outcome<Int, BowlingFailures> = Success(40)

        val score = scoreGame(deuces)

        assert.that(score, equalTo(expectedScore))
    }

    @Test
    fun tooManyRolls() {
        val tooManyRolls: Game = rollMany(Game(), 2, 99)
        val expectedScore: Outcome<Int, BowlingFailures> = Success(40)

        val score = scoreGame(tooManyRolls)

        assert.that(score, equalTo(expectedScore))
    }

    @Test
    fun oneSpareGame() {
        val promisingStart: Game = rollSequence(Game(), listOf(8,2,5))
        val badFinish: Game = rollMany(promisingStart, 0, 17)
        val expectedScore: Outcome<Int, BowlingFailures> = Success(20)

        val score = scoreGame(badFinish)

        assert.that(score, equalTo(expectedScore))
    }

    @Test
    fun closingSpareGame() {
        val badStart: Game = rollMany(Game(), 0, 18)
        val closingSpare: Game = rollMany(badStart, 5, 3)
        val expectedScore: Outcome<Int, BowlingFailures> = Success(20)

        val score = scoreGame(closingSpare)

        assert.that(score, equalTo(expectedScore))
    }

    @Test
    fun oneStrikeGame() {
        val promisingStart: Game = rollSequence(Game(), listOf(10,2,5))
        val badFinish: Game = rollMany(promisingStart, 0, 16)
        val expectedScore: Outcome<Int, BowlingFailures> = Success(24)

        val score = scoreGame(badFinish)

        assert.that(score, equalTo(expectedScore))
    }

    @Test
    fun perfectGame() {
        val perfection: Game = rollMany(Game(), 10, 12)
        val expectedScore: Outcome<Int, BowlingFailures> = Success(300)

        val score = scoreGame(perfection)

        assert.that(score, equalTo(expectedScore))
    }

    private fun rollMany(game: Game, pins: Int, rolls: Int): Game {
        return rollSequence(game, Collections.nCopies(rolls, pins))
    }

    private fun rollSequence(game: Game, pins: List<Int>): Game {
        fun rollAgain(game: Game, pins: List<Int>): Game {
            if (pins.isEmpty()) {
                return game
            } else {
                return rollAgain(mustRoll(game, pins[0]), pins.drop(1))
            }
        }
        return rollAgain(game, pins)
    }

    private fun mustRoll(game: Game, pins: Int): Game {
        return roll(game, pins).fold({game -> game}, {_ -> throw RuntimeException()})
    }
}