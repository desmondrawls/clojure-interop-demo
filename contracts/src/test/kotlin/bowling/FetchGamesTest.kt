package bowling

import com.natpryce.hamkrest.assertion.assert
import com.natpryce.hamkrest.equalTo
import org.junit.Test

class FetchGamesTest {

    @Test
    fun success() {
        val gamesFetcher = GamesFetcherStub()

        val outcome = (fetchGamesUseCase(gamesFetcher, OneScorerStub()))()

        val expectedGames = listOf(ScoredGame(Game(listOf(1,2,3), "showdown of the century", stubIdentifier()), Success(1)))
        assert.that(Success(expectedGames), equalTo(outcome))
    }

    @Test
    fun retries() {
        val temporarilyFailingGamesFetcher = TemporarilyFailingGamesFetcherStub()

        val outcome = (fetchGamesUseCase(temporarilyFailingGamesFetcher, OneScorerStub()))()

        val expectedGames = listOf(ScoredGame(Game(listOf(1,2,3), "showdown of the century", stubIdentifier()), Success(1)))
        assert.that(Success(expectedGames), equalTo(outcome))
    }

    @Test
    fun failure() {
        val failingGamesFetcher = FailingGamesFetcherStub()

        val outcome = (fetchGamesUseCase(failingGamesFetcher, OneScorerStub()))()

        val expectedFailure: Outcome<List<ScoredGame>, SpacetimeErrors> = Failure(listOf(SpacetimeErrors.BAD_TIMING))
        assert.that(outcome, equalTo(expectedFailure))
    }
}