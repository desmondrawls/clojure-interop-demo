package bowling;

import java.util.function.Function;

import com.fasterxml.jackson.databind.ObjectMapper;
import transform.bowling.scorer;

public class Bowlzilla implements Function<String, String> {

	public String apply(String name) {
		try{
			ObjectMapper mapper = new ObjectMapper();
			return mapper.writeValueAsString(scorer.score(name));
		} catch (Exception e) {
			return e.getMessage();
		}
	}

}
