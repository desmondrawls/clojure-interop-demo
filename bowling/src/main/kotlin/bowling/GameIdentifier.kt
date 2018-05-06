package bowling

import java.util.*

interface GameIdentifier {
    fun identify(identifier: UUID): Outcome<Game, SpacetimeErrors>
}