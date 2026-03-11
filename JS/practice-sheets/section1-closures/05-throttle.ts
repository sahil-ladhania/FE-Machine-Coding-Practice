/**
 * PROBLEM: throttle(fn, limit)
 * Invoke fn at most once per `limit` ms.
 * Implement BOTH approaches.
 *
 * APPROACH 1 — Timestamp based:
 * Step 1: Declare `lastCall` = 0
 * Step 2: Return inner function
 * Step 3: If Date.now() - lastCall >= limit → call fn, update lastCall
 *
 * APPROACH 2 — Flag based:
 * Step 1: Declare `waiting` = false
 * Step 2: Return inner function
 * Step 3: If waiting is true → return early (do nothing)
 * Step 4: Call fn, set waiting = true
 * Step 5: setTimeout → set waiting = false after limit ms
 */

// Approach 1 — Timestamp
export function throttleTimestamp<T extends (...args: any[]) => any>(fn: T, limit: number): (...args: Parameters<T>) => void {
  // your code here
  throw new Error("Not implemented");
}

// Approach 2 — Flag
export function throttleFlag<T extends (...args: any[]) => any>(fn: T, limit: number): (...args: Parameters<T>) => void {
  // your code here
  throw new Error("Not implemented");
}
