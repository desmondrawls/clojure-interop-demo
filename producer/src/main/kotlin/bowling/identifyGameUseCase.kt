package bowling

import java.util.*

fun identifyGameUseCase(gameIdentifier: GameIdentifier): (identifier : UUID) -> Outcome<Game, CommonErrors> {
    return { identifier : UUID -> retryUnless({ gameIdentifier.identify(identifier) }, CommonErrors.DEAD_END, 2) }
}