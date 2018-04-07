package bowling

import com.jayway.jsonpath.DocumentContext
import com.jayway.jsonpath.JsonPath
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
class BowlingController(val identifyGame: (identifier: UUID) -> Outcome<Game, CommonErrors>,
                        val fetchGames: () -> Outcome<List<Game>, CommonErrors>,
                        val scorer: ScoreGameUseCase,
                        val gameSaver: GameSaver) {

    @GetMapping("/games/{identifier}")
    @ResponseBody
    fun find(@PathVariable identifier: String) =
            identifyGame(UUID.fromString(identifier))

    @GetMapping("/games")
    @ResponseBody
    fun index() = fetchGames()

    @GetMapping("/games/new")
    @ResponseBody
    fun new() = Game()

    @PostMapping("/games")
    @ResponseBody
    fun save(@RequestBody inputStream: String) {
        val document: DocumentContext = JsonPath.parse(inputStream)
        val name: String = document.read("$.name")
        val rolls: List<Int> = document.read("$.rolls")
        val identifier: UUID = UUID.fromString(document.read("$.identifier"))
        gameSaver.save(Game(rolls, name, identifier))
    }

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