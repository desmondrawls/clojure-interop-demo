package bowling

import com.jayway.jsonpath.DocumentContext
import com.jayway.jsonpath.JsonPath
import org.springframework.web.bind.annotation.*
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@RestController
class BowlingController(val scorer: Scorer) {

    @GetMapping("/transform/roll")
    @ResponseBody
    fun new(@RequestParam rolls: List<Int>) =
            roll(rolls)

    @PostMapping("/transform/score")
    @ResponseBody
    fun score(@RequestBody games: Flux<String>): Flux<String> {
        return games
                .map(String::toUpperCase)
    }

//    @PostMapping("/transform/score")
//    @ResponseBody
//    fun score(@RequestBody inputStream: String): Flux<Outcome<Int, List<BowlingFailures>>> {
//        val document: DocumentContext = JsonPath.parse(inputStream)
//        val games: List<List<Int>> = document.read("$.games")
//        return Flux.fromIterable(games)
//                .map(scorer::score)
//    }

//    @PostMapping("/transform/score")
//    @ResponseBody
//    fun score(@RequestBody inputStream: Mono<String>): Mono<Outcome<Int, List<BowlingFailures>>> {
//        return inputStream
//                .map(JsonPath::parse)
//                .map({document -> document.read<List<Int>>("$.rolls")})
//                .map({rolls -> scorer.score(rolls)})
//    }

}