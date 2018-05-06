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
    fun score(@RequestBody inputStream: String) =
            scorer.score(JsonPath.parse(inputStream).read("$.rolls"))
}