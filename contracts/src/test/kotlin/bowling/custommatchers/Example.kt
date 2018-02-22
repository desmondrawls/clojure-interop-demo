package bowling

import com.natpryce.hamkrest.MatchResult
import com.natpryce.hamkrest.Matcher


/*This is unused because it works the same as equalTo
    now that errors are represented with enums
    but I'm keeping it because good examples of
    custom hamkrest matchers are hard to find. */

fun <P : Any, T> isSuccess(): Matcher<Outcome<P, T>> {
    return object : Matcher<Outcome<P, T>> {
        override val description: String
            get() = "is a successful outcome."

        override fun invoke(outcome: Outcome<P, T>): MatchResult {
            return outcome.fold(
                    {_ -> MatchResult.Match },
                    {errors -> MatchResult.Mismatch("was a failure with errors: " + errors)}
            )
        }
    }
}

fun <P : Any, T> hasSuccessValue(predicate: (P) -> Boolean): Matcher<Outcome<P, T>> {
    return object : Matcher<Outcome<P, T>> {
        override val description: String
            get() = "is a successful outcome, which satisfies the predicate."

        override fun invoke(outcome: Outcome<P, T>): MatchResult {
            return outcome.fold(
                    {value ->
                        if (predicate(value))
                            MatchResult.Match
                        else MatchResult.Mismatch("was a success with value: $value, which did not satisfy the predicate") },
                    {errors -> MatchResult.Mismatch("was a failure with errors: " + errors)}
            )
        }
    }
}