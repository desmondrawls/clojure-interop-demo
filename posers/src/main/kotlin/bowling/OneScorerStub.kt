package bowling

class OneScorerStub : Scorer {
    override fun score(rolls: List<Int>): Outcome<Int, List<BowlingFailures>> {
        return Success(1)
    }
}