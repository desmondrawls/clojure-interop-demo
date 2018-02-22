package bowling

import com.jayway.jsonpath.DocumentContext
import com.jayway.jsonpath.JsonPath
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController
import java.util.*

@RestController
class BowlingController(val gameSaver: GameSaver) {

    @PostMapping("/games")
    @ResponseBody
    fun save(@RequestBody inputStream: String) {
        val document: DocumentContext = JsonPath.parse(inputStream)
        val identifier: String = document.read("$.identifier")
        val rolls: List<Int> = document.read("$.rolls")
        gameSaver.save(Game(rolls, UUID.fromString(identifier)))
    }
}