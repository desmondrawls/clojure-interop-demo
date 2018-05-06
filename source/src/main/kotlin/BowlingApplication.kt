package bowling

import org.springframework.boot.SpringApplication
import org.springframework.boot.SpringBootConfiguration
import org.springframework.boot.autoconfigure.EnableAutoConfiguration
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.ComponentScan

@SpringBootConfiguration
@EnableAutoConfiguration
@ComponentScan(basePackages = arrayOf("bowling"))
open class MirrorsApplication {

    @Bean
    open fun bowlingController(gamesFetcher: GamesFetcher,
                               scorer: Scorer): BowlingController =
            BowlingController(fetchGamesUseCase(gamesFetcher, scorer))

}

fun main(args: Array<String>) {
    SpringApplication.run(MirrorsApplication::class.java, *args)
}
