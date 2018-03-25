package bowling

import java.util.*

fun stubIdentifier(): UUID = UUID.fromString("38400000-8cf0-11bd-b23e-10b96e4ef00d")

class GameIdentifierStub : GameIdentifier {
    val game = Game(listOf(1, 2,3), "showdown of the century", stubIdentifier())

    override fun identify(identifier: UUID): Outcome<Game, CommonErrors> {
        return Success(game)
    }
}

class TemporarilyFailingGameIdentifierStub : GameIdentifier {
    val game = Game(listOf(1, 2,3), "showdown of the century", stubIdentifier())
    var retry: Int = 0

    override fun identify(identifier: UUID): Outcome<Game, CommonErrors> {
        if(retry < 2){
            retry++
            return Failure(listOf(CommonErrors.BAD_TIMING))
        } else {
            return Success(game)
        }
    }
}

class FailingGameIdentifierStub : GameIdentifier {
    override fun identify(identifier: UUID): Outcome<Game, CommonErrors> {
        return Failure(listOf(CommonErrors.BAD_TIMING))
    }
}