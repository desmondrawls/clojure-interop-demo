package bowling

import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
class BowlingController(val scorer: ScoreGameUseCase) {

    @GetMapping("/games/new")
    @ResponseBody
    fun new() = Game()

    @GetMapping("/games/{identifier}/score")
    @ResponseBody
    fun score(@PathVariable identifier: String,
              @RequestParam name: String,
              @RequestParam rolls: List<Int>): Outcome<Int, List<BowlingFailures>> {
            Thread.sleep(3000)
            return scorer.score(Game(rolls, name, UUID.fromString(identifier)))
    }

    @GetMapping("/games/{identifier}/rolls/new")
    @ResponseBody
    fun new(@PathVariable identifier: String,
            @RequestParam name: String,
            @RequestParam rolls: List<Int>,
            @RequestParam(value = "pins", required = false) pins: Int?) =
            roll(Game(rolls, name, (UUID.fromString(identifier))), pins)
}