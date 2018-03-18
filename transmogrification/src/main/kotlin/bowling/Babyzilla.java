package bowling;


import java.util.function.Function;

public class Babyzilla implements Function<String, String> {

	public String apply(String name) {
		return "BOWLZILLA: " + Helpzilla.help();
	}

}
