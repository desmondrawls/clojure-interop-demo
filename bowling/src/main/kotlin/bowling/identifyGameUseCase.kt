package bowling

import java.util.*

fun identifyGameUseCase(gameIdentifier: GameIdentifier): (identifier : UUID) -> Outcome<Game, SpacetimeErrors> {
    return { identifier : UUID -> retryUnless({ gameIdentifier.identify(identifier) }, SpacetimeErrors.DEAD_END, 2) }
}