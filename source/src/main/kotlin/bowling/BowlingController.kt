package bowling

import org.springframework.web.bind.annotation.*

@RestController
class BowlingController(val fetchGames: () -> Outcome<List<ScoredGame>, SpacetimeErrors>) {

    @GetMapping("/source/games")
    @ResponseBody
    fun index() = fetchGames()
}