package bowling


interface ScoreGameUseCase {
    fun score(game: Game): Outcome<Int, List<BowlingFailures>>
}