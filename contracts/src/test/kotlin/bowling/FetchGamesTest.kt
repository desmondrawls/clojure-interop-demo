package bowling

import com.natpryce.hamkrest.assertion.assert
import com.natpryce.hamkrest.equalTo
import org.junit.Test

class FetchGamesTest {

    @Test
    fun success() {
        val gamesFetcher = GamesFetcherStub()

        val outcome = (fetchGamesUseCase(gamesFetcher))()

        val expectedGames = listOf(Game(listOf(1,2,3), "showdown of the century", stubIdentifier()))
        assert.that(Success(expectedGames), equalTo(outcome))
    }

    @Test
    fun retries() {
        val temporarilyFailingGamesFetcher = TemporarilyFailingGamesFetcherStub()

        val outcome = (fetchGamesUseCase(temporarilyFailingGamesFetcher))()

        val expectedGames = listOf(Game(listOf(1,2,3), "showdown of the century", stubIdentifier()))
        assert.that(Success(expectedGames), equalTo(outcome))
    }

    @Test
    fun failure() {
        val failingGamesFetcher = FailingGamesFetcherStub()

        val outcome = (fetchGamesUseCase(failingGamesFetcher))()

        val expectedFailure: Outcome<List<Game>, CommonErrors> = Failure(listOf(CommonErrors.BAD_TIMING))
        assert.that(outcome, equalTo(expectedFailure))
    }
}