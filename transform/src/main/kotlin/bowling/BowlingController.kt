package bowling

import com.jayway.jsonpath.DocumentContext
import com.jayway.jsonpath.JsonPath
import org.springframework.core.ParameterizedTypeReference
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*
import org.springframework.web.reactive.function.server.ServerRequest
import org.springframework.web.reactive.function.server.ServerResponse
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@RestController
class BowlingController(val scorer: Scorer) {

    @GetMapping("/transform/roll")
    @ResponseBody
    fun new(@RequestParam rolls: List<Int>) =
            roll(rolls)

    @PostMapping("/transform/scores")
    @ResponseBody
    fun scores(@RequestBody games: Flux<Game>) =
        games.map({game -> mapOf(game.rolls to scorer.score(game.rolls))})


//    @PostMapping("/transform/score")
//    @ResponseBody
//    fun score(@RequestBody inputStream: String): Flux<Outcome<Int, List<BowlingFailures>>> {
//        val document: DocumentContext = JsonPath.parse(inputStream)
//        val games: List<List<Int>> = document.read("$.games")
//        return Flux.fromIterable(games)
//                .map(scorer::score)
//    }

    @PostMapping(path = arrayOf("/transform/score"),
            consumes = arrayOf(MediaType.APPLICATION_JSON_VALUE),
            produces = arrayOf(MediaType.APPLICATION_STREAM_JSON_VALUE))
    @ResponseBody
    fun score(@RequestBody inputStream: Mono<String>): Mono<Outcome<Int, List<BowlingFailures>>> {
        return inputStream
                .map(JsonPath::parse)
                .map({document -> document.read<List<Int>>("$.rolls")})
                .map({rolls -> scorer.score(rolls)})
    }

    fun scorify(req: ServerRequest) = ServerResponse.ok()
            .contentType(MediaType.APPLICATION_STREAM_JSON)
            .body(Flux.fromIterable(listOf("yo", "wassup")), String::class.java)

}