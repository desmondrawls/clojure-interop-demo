package bowling

import com.natpryce.hamkrest.assertion.assert
import com.natpryce.hamkrest.equalTo
import org.junit.Test

class IdentifyGameTest {

    @Test
    fun success() {
        val gameIdentifier = GameIdentifierStub()

        val outcome = (identifyGameUseCase(gameIdentifier))(stubIdentifier())

        val expectedGame = Game(listOf(1,2,3), "showdown of the century", stubIdentifier())
        assert.that(Success(expectedGame), equalTo(outcome))
    }

    @Test
    fun retries() {
        val temporarilyFailingGameIdentifier = TemporarilyFailingGameIdentifierStub()

        val outcome = (identifyGameUseCase(temporarilyFailingGameIdentifier))(stubIdentifier())

        val expectedGame = Game(listOf(1,2,3), "showdown of the century", stubIdentifier())
        assert.that(Success(expectedGame), equalTo(outcome))
    }

    @Test
    fun failure() {
        val failingGameIdentifier = FailingGameIdentifierStub()

        val outcome = (identifyGameUseCase(failingGameIdentifier))(stubIdentifier())

        val expectedFailure: Outcome<Game, SpacetimeErrors> = Failure(listOf(SpacetimeErrors.BAD_TIMING))
        assert.that(outcome, equalTo(expectedFailure))
    }
}