package bowling

import org.springframework.boot.SpringApplication
import org.springframework.boot.SpringBootConfiguration
import org.springframework.boot.autoconfigure.EnableAutoConfiguration
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.ComponentScan

@SpringBootConfiguration
@EnableAutoConfiguration
@ComponentScan(basePackages = arrayOf("bowling"))
open class BowlingApplication {

    @Bean
    open fun bowlingController(gameIdentifier: GameIdentifier,
                               gamesFetcher: GamesFetcher): BowlingController =
        BowlingController(identifyGameUseCase(gameIdentifier),
                fetchGamesUseCase(gamesFetcher))
}

fun main(args: Array<String>) {
    SpringApplication.run(BowlingApplication::class.java, *args)
}
