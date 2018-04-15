package bowling

import com.jayway.jsonpath.DocumentContext
import com.jayway.jsonpath.JsonPath
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
class BowlingController(val scorer: Scorer) {

    @GetMapping("/transform/roll")
    @ResponseBody
    fun new(@RequestParam rolls: List<Int>) =
            roll(rolls)

    @PostMapping("/transform/score")
    @ResponseBody
    fun score(@RequestBody inputStream: String): Outcome<Int, List<BowlingFailures>> {
        val document: DocumentContext = JsonPath.parse(inputStream)
        val rolls: List<Int> = document.read("$.rolls")
        return scorer.score(rolls)
    }

}