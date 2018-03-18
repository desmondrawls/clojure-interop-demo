package bowling;

import java.util.function.Function;

public class Bowlorama implements Function<String, String> {

	public String apply(String name) {
		return "BOWLORAMA: " + Helporama.help();
	}

}
