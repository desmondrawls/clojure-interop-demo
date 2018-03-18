package bowling;

import java.util.function.Function;
import recording_studio.bowling.scorer;

public class Bowlzilla implements Function<String, String> {

	public String apply(String name) {
		return "BOWLZILLA: " + scorer.score(name);
	}

}
