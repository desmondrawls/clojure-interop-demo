package bowling

import org.springframework.boot.SpringApplication
import org.springframework.boot.SpringBootConfiguration
import org.springframework.boot.autoconfigure.EnableAutoConfiguration
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.ComponentScan
import org.springframework.web.reactive.function.server.router
import org.springframework.http.MediaType.APPLICATION_STREAM_JSON
import org.springframework.http.MediaType.TEXT_EVENT_STREAM
import org.springframework.web.reactive.function.server.ServerRequest
import reactor.core.publisher.Mono
import org.springframework.web.reactive.function.server.ServerResponse.ok

@SpringBootConfiguration
@EnableAutoConfiguration
@ComponentScan(basePackages = arrayOf("bowling"))
open class MirrorsApplication {

    @Bean
    open fun bowlingController(scorer: Scorer): BowlingController =
            BowlingController(scorer)

    @Bean
    fun router(bowlingController: BowlingController) = router {
        GET("/flux").nest {
            accept(APPLICATION_STREAM_JSON, bowlingController::scorify)
        }
    }

}

fun main(args: Array<String>) {
    SpringApplication.run(MirrorsApplication::class.java, *args)
}
