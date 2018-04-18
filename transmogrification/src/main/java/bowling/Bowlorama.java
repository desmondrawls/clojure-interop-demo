package bowling;

import com.jayway.jsonpath.DocumentContext;
import com.jayway.jsonpath.JsonPath;
import reactor.core.publisher.Flux;
import scoring.shower;

import java.util.List;
import java.util.function.Function;

public class Bowlorama implements Function<Flux<List<Integer>>, Flux<Outcome<Integer, List<BowlingFailures>>>> {

    public Flux<Outcome<Integer, List<BowlingFailures>>> apply(Flux<List<Integer>> games) {
        return games.map(rolls -> shower.scorer().score(rolls));
    }
}