package bowling

import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
class BowlingController {

    @GetMapping("/games/new")
    @ResponseBody
    fun new() = Game()

    @GetMapping("games/{identifier}/score")
    @ResponseBody
    fun score(@PathVariable identifier: String,
              @RequestParam rolls: List<Int>) =
            scoreGame(Game(rolls, UUID.fromString(identifier)))

    @GetMapping("/games/{identifier}/rolls/new")
    @ResponseBody
    fun new(@PathVariable identifier: UUID,
            @RequestParam rolls: List<Int>,
            @RequestParam(value = "pins", required = false) pins: Int?) =
            roll(Game(rolls, identifier), pins)
}