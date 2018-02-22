package bowling

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController
import java.util.*

@RestController
class BowlingController(val identifyGame: (identifier: UUID) -> Outcome<Game, CommonErrors>) {

    @GetMapping("/games/{identifier}")
    @ResponseBody
    fun find(@PathVariable identifier: String) =
            identifyGame(UUID.fromString(identifier))
}