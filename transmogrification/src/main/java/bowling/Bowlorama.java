package bowling;

import reactor.core.publisher.Flux;
import scoring.shower;

import java.util.List;
import java.util.function.Function;

public class Bowlorama implements Function<Flux<Game>, Flux<Outcome<Integer, List<BowlingFailures>>>> {

    public Flux<Outcome<Integer, List<BowlingFailures>>> apply(Flux<Game> games) {
        Scorer scorer = shower.scorer();
        return games.map(game -> scorer.score(game.getRolls()));
    }
}