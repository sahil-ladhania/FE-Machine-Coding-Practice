/**
 * PROBLEM: once(fn)
 * Return a function that calls fn only on the FIRST invocation.
 * All subsequent calls return the result of the first call WITHOUT calling fn again.
 *
 * STEPS:
 * Step 1: Declare a boolean flag `called` = false
 * Step 2: Declare a variable `result` to cache the first return value
 * Step 3: Return an inner function
 * Step 4: Inside inner function — if called is false, invoke fn, store result, set called = true
 * Step 5: Return result (works for both first call and all subsequent calls)
 */

export function once<T extends (...args: any[]) => any>(fn: T): (...args: Parameters<T>) => ReturnType<T> {
  // your code here
  throw new Error("Not implemented");
}

// Test
const init = once(() => {
  console.log("Initialized!");
  return 42;
});
// init() → logs "Initialized!", returns 42
// init() → returns 42 (no log)
// init() → returns 42 (no log)
