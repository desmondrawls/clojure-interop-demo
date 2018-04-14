package bowling

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController
import java.util.*

@RestController
class BowlingController(val fetchGames: () -> Outcome<List<Game>, CommonErrors>) {

    @GetMapping("/source/games")
    @ResponseBody
    fun index() = fetchGames()
}