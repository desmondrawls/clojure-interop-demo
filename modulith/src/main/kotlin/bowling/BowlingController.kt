package bowling

import com.jayway.jsonpath.DocumentContext
import com.jayway.jsonpath.JsonPath
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
class BowlingController(val fetchGames: () -> Outcome<List<Game>, CommonErrors>,
                        val scorer: Scorer,
                        val gameSaver: GameSaver) {

    @GetMapping("/modulith/games")
    @ResponseBody
    fun index() = fetchGames()

    @PostMapping("/modulith/games")
    @ResponseBody
    fun save(@RequestBody inputStream: String) {
        val document: DocumentContext = JsonPath.parse(inputStream)
        val name: String = document.read("$.name")
        val rolls: List<Int> = document.read("$.rolls")
        val identifier: UUID = UUID.fromString(document.read("$.identifier"))
        gameSaver.save(Game(rolls, name, identifier))
    }

    @GetMapping("/modulith/roll")
    @ResponseBody
    fun new(@RequestParam rolls: List<Int>) =
            roll(rolls)

    @PostMapping("/modulith/score")
    @ResponseBody
    fun score(@RequestBody inputStream: String): Outcome<Int, List<BowlingFailures>> {
        val document: DocumentContext = JsonPath.parse(inputStream)
        val rolls: List<Int> = document.read("$.rolls")
        return scorer.score(rolls)
    }

}