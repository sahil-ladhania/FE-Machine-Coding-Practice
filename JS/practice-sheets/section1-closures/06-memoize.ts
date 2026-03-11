/**
 * PROBLEM: memoize(fn)
 * Cache results based on arguments. Return cached result for same args.
 *
 * STEPS:
 * Step 1: Create a Map (or plain object) as cache inside the outer function
 * Step 2: Return an inner function that accepts ...args
 * Step 3: Create a cache key — JSON.stringify(args) for multi-arg support
 * Step 4: If cache.has(key) → return cache.get(key)
 * Step 5: Otherwise call fn(...args), store result in cache, return result
 */

export function memoize<T extends (...args: any[]) => any>(fn: T): (...args: Parameters<T>) => ReturnType<T> {
  // your code here
  throw new Error("Not implemented");
}

// Test
const expensiveAdd = memoize((a: number, b: number) => {
  console.log("Computing...");
  return a + b;
});
// expensiveAdd(1, 2) → logs "Computing...", returns 3
// expensiveAdd(1, 2) → returns 3 (no log — cached)
