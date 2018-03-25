package bowling

import com.natpryce.hamkrest.assertion.assert
import com.natpryce.hamkrest.equalTo
import org.junit.Test
import java.util.*

class RollTest {
    @Test
    fun moreThanTenPins() {
        val expectedRoll: Outcome<Game, BowlingFailures> = Failure(listOf(BowlingFailures.INVALID_ROLL_TOO_HIGH))

        val roll = roll(Game(), 11)

        assert.that(roll, equalTo(expectedRoll))
    }

    @Test
    fun negativePins() {
        val expectedRoll: Outcome<Game, BowlingFailures> = Failure(listOf(BowlingFailures.INVALID_ROLL_NEGATIVE))

        val roll = roll(Game(), -1)

        assert.that(roll, equalTo(expectedRoll))
    }

    @Test
    fun valid() {
        val testIdentifier = UUID.randomUUID()
        val expectedRoll: Outcome<Game, BowlingFailures> = Success(Game(listOf(1, 5), "boring", testIdentifier))

        val roll = roll(Game(listOf(1), "boring", testIdentifier), 5)

        assert.that(roll, equalTo(expectedRoll))
    }

    @Test
    fun random() {
        val roll = roll(Game(listOf(1)), null)

        assert.that(roll, isSuccess())
        assert.that(roll, hasSuccessValue({ value -> value.rolls.size == 2}))
        assert.that(roll, hasSuccessValue({ value -> value.rolls[0] == 1}))
        assert.that(roll, hasSuccessValue({ value -> value.rolls[1] >= 0}))
        assert.that(roll, hasSuccessValue({ value -> value.rolls[1] <= 10}))
    }
}