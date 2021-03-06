package bowling

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import recording_studio.bowling.identifier
import recording_studio.bowling.saver

@Configuration
class BowlingStudioConfiguration {
    @Bean
    fun bowlingStudioGameIdentifier(): GameIdentifier {
        return identifier.game_identifier()
    }

    @Bean
    fun bowlingStudioGameSaver(): GameSaver {
        return saver.game_saver()
    }
}
