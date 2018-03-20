package bowling;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import transform.bowling.scorer;

@RestController
public class TestController {

    @GetMapping("/test")
    @ResponseBody
    public String test(){
        return scorer.show_score("the fonz");
    }
}
