package bowling

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import recording_studio.bowling.fetcher
import recording_studio.bowling.identifier
import recording_studio.bowling.saver
import scoring.shower

@Configuration
class BowlingStudioConfiguration {
    @Bean
    fun bowlingStudioGameIdentifier(): GameIdentifier {
        return identifier.game_identifier()
    }

    @Bean
    fun bowlingStudioGamesFetcher(): GamesFetcher {
        return fetcher.games_fetcher()
    }

    @Bean
    fun bowlingStudioGameSaver(): GameSaver {
        return saver.game_saver()
    }

    @Bean
    fun scoreGameUseCase(): ScoreGameUseCase {
        return shower.scorer()
    }
}
