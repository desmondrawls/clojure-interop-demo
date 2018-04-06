package bowling

import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
class BowlingController(val scorer: ScoreGameUseCase) {

    @GetMapping("/games/new")
    @ResponseBody
    fun new() = Game()

    @GetMapping("/games/score")
    @ResponseBody
    fun score(@RequestParam name: String,
              @RequestParam rolls: List<Int>): Outcome<Int, List<BowlingFailures>> {
            Thread.sleep(1000)
            return scorer.score(Game(rolls, name))
    }

    @GetMapping("/games/rolls/new")
    @ResponseBody
    fun new(@RequestParam name: String,
            @RequestParam rolls: List<Int>,
            @RequestParam(value = "pins", required = false) pins: Int?) =
            roll(Game(rolls, name), pins)
}