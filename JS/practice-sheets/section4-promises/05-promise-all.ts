/**
 * PROBLEM: myPromiseAll(promises)
 * Resolves with array of results IN ORDER when ALL resolve.
 * Rejects immediately on first rejection.
 *
 * STEPS:
 * Step 1: Handle empty array → resolve([]) immediately
 * Step 2: Create results array of same length
 * Step 3: Track resolvedCount
 * Step 4: For each promise at index i:
 *         - On resolve: results[i] = value (NOT push — order must be preserved)
 *           increment resolvedCount, if === promises.length → resolve(results)
 *         - On reject: reject(reason) immediately (short-circuit)
 *
 * CRITICAL: Use results[i] = value, NOT results.push(value)
 */

export function myPromiseAll<T>(promises: Promise<T>[]): Promise<T[]> {
  // your code here
  throw new Error("Not implemented");
}
