package bowling

import com.natpryce.hamkrest.assertion.assert
import com.natpryce.hamkrest.equalTo
import org.junit.Test
import java.util.*

class RollTest {
    @Test
    fun moreThanTenPins() {
        val expectedRoll: Outcome<List<Int>, BowlingFailures> = Failure(listOf(BowlingFailures.INVALID_ROLL_TOO_HIGH))

        val roll = roll(emptyList(), 11)

        assert.that(roll, equalTo(expectedRoll))
    }

    @Test
    fun negativePins() {
        val expectedRoll: Outcome<List<Int>, BowlingFailures> = Failure(listOf(BowlingFailures.INVALID_ROLL_NEGATIVE))

        val roll = roll(emptyList(), -1)

        assert.that(roll, equalTo(expectedRoll))
    }

    @Test
    fun valid() {
        val expectedRoll: Outcome<List<Int>, BowlingFailures> = Success(listOf(1, 5))

        val roll = roll(listOf(1), 5)

        assert.that(roll, equalTo(expectedRoll))
    }

    @Test
    fun random() {
        val roll = roll(listOf(1,2))

        assert.that(roll, isSuccess())
        assert.that(roll, hasSuccessValue({ value -> value.size == 3}))
        assert.that(roll, hasSuccessValue({ value -> value[0] == 1}))
        assert.that(roll, hasSuccessValue({ value -> value[1] == 2}))
        assert.that(roll, hasSuccessValue({ value -> value[2] >= 0}))
        assert.that(roll, hasSuccessValue({ value -> value[2] <= 10}))
    }

    @Test
    fun randomMidframe() {
        val roll = roll(listOf(10,9))

        assert.that(roll, isSuccess())
        assert.that(roll, hasSuccessValue({ value -> value.size == 3}))
        assert.that(roll, hasSuccessValue({ value -> value[0] == 10}))
        assert.that(roll, hasSuccessValue({ value -> value[1] == 9}))
        assert.that(roll, hasSuccessValue({ value -> value[2] <= 1}))
    }
}