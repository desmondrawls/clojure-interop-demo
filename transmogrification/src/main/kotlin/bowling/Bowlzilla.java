package bowling;

import java.util.function.Function;
import transform.bowling.scorer;

public class Bowlzilla implements Function<String, String> {

	public String apply(String name) {
		try{
			return "BOWLZILLA: " + scorer.score(name);
		} catch (Exception e) {
			return e.getMessage();
		}
	}

}
