/**
 * PROBLEM: myPromiseRace(promises)
 * Settles with whoever settles first.
 *
 * STEPS:
 * Step 1: Return new Promise((resolve, reject) => ...)
 * Step 2: Loop through promises
 * Step 3: For each promise: Promise.resolve(p).then(resolve).catch(reject)
 * Step 4: First one to settle → calls resolve/reject → promise settles
 * Step 5: Subsequent settlements are ignored (Promise state is immutable once settled)
 *
 * EDGE CASE: Empty array → promise stays pending forever (do nothing)
 */

export function myPromiseRace<T>(promises: Promise<T>[]): Promise<T> {
  // your code here
  throw new Error("Not implemented");
}
