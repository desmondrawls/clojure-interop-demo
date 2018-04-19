package bowling;

import com.jayway.jsonpath.DocumentContext;
import com.jayway.jsonpath.JsonPath;
import reactor.core.publisher.Flux;
import scoring.shower;

import java.util.Arrays;
import java.util.List;
import java.util.function.Function;

public class Bowlorama implements Function<Flux<Game>, Flux<Outcome<Integer, List<BowlingFailures>>>> {

    public Flux<Outcome<Integer, List<BowlingFailures>>> apply(Flux<Game> next) {
        Scorer scorer = shower.scorer();
        return next.map(game -> scorer.score(game.getRolls()));
    }
}