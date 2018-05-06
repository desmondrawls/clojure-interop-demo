package bowling

interface GamesFetcher {
    fun fetch(): Outcome<List<Game>, SpacetimeErrors>
}