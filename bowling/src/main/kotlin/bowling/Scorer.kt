package bowling


interface Scorer {
    fun score(rolls: List<Int>): Outcome<Int, List<BowlingFailures>>
}