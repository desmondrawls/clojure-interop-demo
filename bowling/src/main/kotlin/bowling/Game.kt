package bowling

import java.util.*

data class ScoredGame(val game: Game,
                      val score: Outcome<Int, List<BowlingFailures>>)

data class Game(val rolls: List<Int> = emptyList(),
                val name: String = "new",
                val identifier: UUID = UUID.randomUUID())
