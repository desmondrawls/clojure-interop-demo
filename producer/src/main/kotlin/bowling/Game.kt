package bowling

import java.util.*

data class Game(val rolls: List<Int> = emptyList(),
                val name: String = "new",
                val identifier: UUID = UUID.randomUUID())
