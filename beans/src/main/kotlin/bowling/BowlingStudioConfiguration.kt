package bowling

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import recording_studio.bowling.fetcher
import recording_studio.bowling.saver

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
}