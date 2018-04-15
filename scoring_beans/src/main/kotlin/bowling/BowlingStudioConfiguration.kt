package bowling

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import scoring.shower

@Configuration
class BowlingStudioConfiguration {

    @Bean
    fun bowlingStudioScorer(): Scorer {
        return shower.scorer()
    }
}
