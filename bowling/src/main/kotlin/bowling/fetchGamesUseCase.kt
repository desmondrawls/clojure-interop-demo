package bowling

fun addScores(scorer: Scorer, games: List<Game>): List<ScoredGame> {
    return games.map({game -> ScoredGame(game, scorer.score(game.rolls))})
}

fun fetchGamesUseCase(gamesFetcher: GamesFetcher, scorer: Scorer): () -> Outcome<List<ScoredGame>, SpacetimeErrors> {
    return { retryUnless({ gamesFetcher.fetch().map({games -> addScores(scorer, games)}) },
            SpacetimeErrors.DEAD_END, 2) }
}