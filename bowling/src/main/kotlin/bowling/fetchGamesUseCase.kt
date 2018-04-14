package bowling

fun fetchGamesUseCase(gamesFetcher: GamesFetcher): () -> Outcome<List<Game>, CommonErrors> {
    return { retryUnless({ gamesFetcher.fetch() }, CommonErrors.DEAD_END, 2) }
}