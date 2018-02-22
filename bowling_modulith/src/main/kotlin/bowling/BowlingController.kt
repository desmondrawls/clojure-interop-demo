package bowling

import com.jayway.jsonpath.DocumentContext
import com.jayway.jsonpath.JsonPath
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
class BowlingController(val identifyGame: (identifier: UUID) -> Outcome<Game, CommonErrors>,
                        val gameSaver: GameSaver) {

    @GetMapping("/games/{identifier}")
    @ResponseBody
    fun find(@PathVariable identifier: String) =
            identifyGame(UUID.fromString(identifier))

    @GetMapping("/games/new")
    @ResponseBody
    fun new() = Game()

    @PostMapping("/games")
    @ResponseBody
    fun save(@RequestBody inputStream: String) {
        val document: DocumentContext = JsonPath.parse(inputStream)
        val identifier: String = document.read("$.identifier")
        val rolls: List<Int> = document.read("$.rolls")
        gameSaver.save(Game(rolls, UUID.fromString(identifier)))
    }

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