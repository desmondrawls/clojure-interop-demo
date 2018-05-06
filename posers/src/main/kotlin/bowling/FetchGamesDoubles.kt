package bowling

class GamesFetcherStub : GamesFetcher {
    val game = Game(listOf(1, 2,3), "showdown of the century", stubIdentifier())

    override fun fetch(): Outcome<List<Game>, SpacetimeErrors> {
        return Success(listOf(game))
    }
}

class TemporarilyFailingGamesFetcherStub : GamesFetcher {
    val game = Game(listOf(1, 2,3), "showdown of the century", stubIdentifier())
    var retry: Int = 0

    override fun fetch(): Outcome<List<Game>, SpacetimeErrors> {
        if(retry < 2){
            retry++
            return Failure(listOf(SpacetimeErrors.BAD_TIMING))
        } else {
            return Success(listOf(game))
        }
    }
}

class FailingGamesFetcherStub : GamesFetcher {
    override fun fetch(): Outcome<List<Game>, SpacetimeErrors> {
        return Failure(listOf(SpacetimeErrors.BAD_TIMING))
    }
}