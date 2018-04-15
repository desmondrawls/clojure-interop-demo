package bowling

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import persistence.bowling.fetcher
import persistence.bowling.saver
import scoring.shower

@Configuration
class BowlingStudioConfiguration {

    @Bean
    fun bowlingStudioGamesFetcher(): GamesFetcher {
        return fetcher.games_fetcher()
    }

    @Bean
    fun bowlingStudioGameSaver(): GameSaver {
        return saver.game_saver()
    }

    @Bean
    fun bowlingStudioScorer(): Scorer {
        return shower.scorer()
    }
}
