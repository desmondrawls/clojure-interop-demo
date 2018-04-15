package bowling

import com.jayway.jsonpath.DocumentContext
import com.jayway.jsonpath.JsonPath
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
class BowlingController(val fetchGames: () -> Outcome<List<Game>, CommonErrors>) {

    @GetMapping("/source/games")
    @ResponseBody
    fun index() = fetchGames()
}