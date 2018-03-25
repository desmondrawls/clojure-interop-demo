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
        val name: String = document.read("$.name")
        val rolls: List<Int> = document.read("$.rolls")
        println("\nSAVING " + name + " - " + rolls.toString())
        println("\nSAVING " + name + " # " + rolls.toString())
        println("\nSAVING " + name + " * " + rolls.toString())
        gameSaver.save(Game(rolls, name))
    }
}