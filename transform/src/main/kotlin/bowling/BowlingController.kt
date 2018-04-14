package bowling

import org.springframework.web.bind.annotation.*
import java.util.*
import com.jayway.jsonpath.DocumentContext
import com.jayway.jsonpath.JsonPath

@RestController
class BowlingController(val scorer: ScoreGameUseCase) {

    @PostMapping("/transform/score")
    @ResponseBody
    fun score(@RequestBody inputStream: String): Outcome<Int, List<BowlingFailures>> {
        Thread.sleep(1000)
        val document: DocumentContext = JsonPath.parse(inputStream)
        val rolls: List<Int> = document.read("$.rolls")
        return scorer.score(rolls)
    }

    @GetMapping("/transform/roll")
    @ResponseBody
    fun new(@RequestParam rolls: List<Int>) =
            roll(rolls)
}