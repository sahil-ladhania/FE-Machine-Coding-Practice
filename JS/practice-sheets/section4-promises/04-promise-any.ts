/**
 * PROBLEM: myPromiseAny(promises)
 * Resolves with first FULFILLED value. Rejects only if ALL reject.
 *
 * STEPS:
 * Step 1: Track rejection count and reasons array
 * Step 2: For each promise at index i:
 *         - On resolve → resolve(value) immediately
 *         - On reject  → store reason at reasons[i], increment rejectionCount
 *         - If rejectionCount === promises.length → reject(new AggregateError(reasons, 'All promises rejected'))
 * Step 3: Handle empty array → reject with AggregateError immediately
 */

export function myPromiseAny<T>(promises: Promise<T>[]): Promise<T> {
  // your code here
  throw new Error("Not implemented");
}
