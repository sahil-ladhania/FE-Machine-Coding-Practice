/**
 * PROBLEM: limit(fn, n)
 * Return a function that can be invoked at most n times.
 * After n calls, return the result of the nth call without calling fn again.
 *
 * STEPS:
 * Step 1: Declare a `count` variable = 0
 * Step 2: Declare a `result` variable to cache last valid return value
 * Step 3: Return an inner function
 * Step 4: Inside — if count < n, increment count, call fn, store in result
 * Step 5: Always return result
 *
 * NOTE: once(fn) === limit(fn, 1)
 */

export function limit<T extends (...args: any[]) => any>(fn: T, n: number): (...args: Parameters<T>) => ReturnType<T> {
  // your code here
  throw new Error("Not implemented");
}

// Test
const limited = limit((x: number) => x * 2, 3);
// limited(1) → 2, limited(2) → 4, limited(3) → 6
// limited(99) → 6 (nth result, fn not called)
