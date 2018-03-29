package bowling;

import java.util.Arrays;
import java.util.List;
import java.util.function.Function;

import com.jayway.jsonpath.DocumentContext;
import com.jayway.jsonpath.JsonPath;
import scoring.bowling.shower;

public class Bowlzilla implements Function<String, String> {

	public String apply(String body) {
		try{
			DocumentContext documentContext = JsonPath.parse(body);
			List<Integer> rolls = documentContext.read("$.rolls[*]");
			return shower.show_score(rolls);
		} catch (Exception e) {
			return e.getMessage();
		}
	}

}
