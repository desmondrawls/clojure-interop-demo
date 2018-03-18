package bowling;

import java.util.function.Function;

public class Bowler implements Function<String, String> {

	public String apply(String name) {
		return "BOWLER: " + name;
	}

}
