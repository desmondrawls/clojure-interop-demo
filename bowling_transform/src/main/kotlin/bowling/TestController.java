package bowling;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import transform.bowling.scorer;
import transform.bowling.shower;

import java.util.Arrays;
import java.util.List;

@RestController
public class TestController {

    @GetMapping("/test")
    @ResponseBody
    public String test(){
        return scorer.show_score(Arrays.asList(1, 2, 3));
    }
}
