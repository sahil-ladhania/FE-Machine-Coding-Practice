/**
 * PROBLEM: myPromiseAllSettled(promises)
 * Wait for ALL promises. Never rejects. Returns array of { status, value/reason }.
 *
 * STEPS:
 * Step 1: Return new Promise that always resolves
 * Step 2: Track count of settled promises
 * Step 3: Create results array of same length as promises
 * Step 4: For each promise at index i:
 *         - On resolve: results[i] = { status: 'fulfilled', value }
 *         - On reject:  results[i] = { status: 'rejected', reason }
 *         - Increment count, if count === promises.length → resolve(results)
 * Step 5: Handle empty array → resolve([]) immediately
 */

type SettledResult<T> =
  | { status: 'fulfilled'; value: T }
  | { status: 'rejected'; reason: any };

export function myPromiseAllSettled<T>(promises: Promise<T>[]): Promise<SettledResult<T>[]> {
  // your code here
  throw new Error("Not implemented");
}
