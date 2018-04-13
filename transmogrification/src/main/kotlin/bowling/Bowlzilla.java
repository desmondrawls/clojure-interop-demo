package bowling;

import com.jayway.jsonpath.DocumentContext;
import com.jayway.jsonpath.JsonPath;
import scoring.bowling.shower;

import java.util.List;
import java.util.function.Function;

public class Bowlzilla implements Function<String, Outcome<Integer, List<BowlingFailures>>> {

    public Outcome<Integer, List<BowlingFailures>> apply(String body) {
        DocumentContext documentContext = JsonPath.parse(body);
        List<Integer> rolls = documentContext.read("$.rolls[*]");
        return shower.scorer().score(rolls);
    }
}
