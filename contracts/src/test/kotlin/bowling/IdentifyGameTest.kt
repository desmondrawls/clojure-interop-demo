package bowling

import com.natpryce.hamkrest.assertion.assert
import com.natpryce.hamkrest.equalTo
import org.junit.Test

class IdentifyGameTest {

    @Test
    fun success() {
        val gameRepository = GameIdentifierStub()

        val outcome = (identifyGameUseCase(gameRepository))(stubIdentifier())

        val expectedGame = Game(listOf(1,2,3), "showdown of the century", stubIdentifier())
        assert.that(Success(expectedGame), equalTo(outcome))
    }

    @Test
    fun retries() {
        val temporarilyFailingGameRepository = TemporarilyFailingGameIdentifierStub()

        val outcome = (identifyGameUseCase(temporarilyFailingGameRepository))(stubIdentifier())

        val expectedGame = Game(listOf(1,2,3), "showdown of the century", stubIdentifier())
        assert.that(Success(expectedGame), equalTo(outcome))
    }

    @Test
    fun failure() {
        val failingGameRepository = FailingGameIdentifierStub()

        val outcome = (identifyGameUseCase(failingGameRepository))(stubIdentifier())

        val expectedFailure: Outcome<Game, CommonErrors> = Failure(listOf(CommonErrors.BAD_TIMING))
        assert.that(outcome, equalTo(expectedFailure))
    }
}