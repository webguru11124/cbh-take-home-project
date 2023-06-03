# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

In the refactored version, the code has been simplified and made more readable by utilizing optional chaining (?.) and nullish coalescing (||) operators to handle cases where event or its properties might be null or undefined. This avoids unnecessary nested if statements. The code also uses template literals to concatenate long lines for improved readability. Additionally, the code now checks for the typeof the candidate and stringifies it if necessary. The unit tests cover different scenarios, including null event, existing partition key, missing partition key, non-string partition key, and long partition key. This ensures the existing functionality is maintained and no regressions occur. Overall, this refactoring improves readability by reducing code duplication, simplifying conditionals, and using modern JavaScript features.
