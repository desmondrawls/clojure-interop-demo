package bowling;

import java.util.function.Function;

public class Kotlinrama implements Function<String, String> {

	public String apply(String name) {
		return "KotlinRAMA: " + bowling.KotlinHelperKt.help();
	}

}
