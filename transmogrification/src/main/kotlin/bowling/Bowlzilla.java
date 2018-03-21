package bowling;

import java.util.Arrays;
import java.util.function.Function;

import transform.bowling.scorer;

public class Bowlzilla implements Function<String, String> {

	public String apply(String name) {
		try{
			return scorer.show_score(Arrays.asList(1, 2, 3, 6));
		} catch (Exception e) {
			return e.getMessage();
		}
	}

}
