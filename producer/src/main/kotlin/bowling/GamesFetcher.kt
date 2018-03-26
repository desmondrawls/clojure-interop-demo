package bowling

import java.util.*

interface GamesFetcher {
    fun fetch(): Outcome<List<Game>, CommonErrors>
}