package bowling


interface ScoreGameUseCase {
    fun score(rolls: List<Int>): Outcome<Int, List<BowlingFailures>>
}