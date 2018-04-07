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
    fun score(@RequestParam rolls: List<Int>): Outcome<Int, List<BowlingFailures>> {
        Thread.sleep(1000)
        return scorer.score(rolls)
    }

    @GetMapping("/games/rolls/new")
    @ResponseBody
    fun new(@RequestParam rolls: List<Int>) =
            roll(rolls)
}