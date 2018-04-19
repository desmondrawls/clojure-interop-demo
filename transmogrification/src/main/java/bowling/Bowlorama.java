package bowling;

import com.jayway.jsonpath.DocumentContext;
import com.jayway.jsonpath.JsonPath;
import reactor.core.publisher.Flux;
import scoring.shower;

import java.util.Arrays;
import java.util.List;
import java.util.function.Function;

public class Bowlorama implements Function<Flux<Foo>, Flux<Bar>> {
    @Override
    public Flux<Bar> apply(Flux<Foo> foos) {
        return foos.map(foo -> new Bar("Hello " + foo.getValue()));
    }
}

class Foo {
    private String value;

    public Foo() {
    }

    public Foo(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}

class Bar {
    private String value;

    public Bar() {
    }

    public Bar(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
