package bowling

import java.util.*

data class Game(val rolls: List<Int> = emptyList(), val identifier: UUID = UUID.randomUUID())
