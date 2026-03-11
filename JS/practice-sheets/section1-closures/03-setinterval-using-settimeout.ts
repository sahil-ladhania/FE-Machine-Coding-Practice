/**
 * PROBLEM: mySetInterval(fn, delay)
 * Implement setInterval using ONLY setTimeout. Must be cancellable.
 *
 * STEPS:
 * Step 1: Declare a variable `timerId` to hold current setTimeout reference
 * Step 2: Create an inner function `run()` that:
 *         a. Calls fn()
 *         b. Schedules itself again using setTimeout(run, delay) — stores ID in timerId
 * Step 3: Call run() to kick off the first execution
 * Step 4: Return an object with a clear() method that calls clearTimeout(timerId)
 */

export function mySetInterval(fn: () => void, delay: number): { clear: () => void } {
  // your code here
  throw new Error("Not implemented");
}

// Test
const { clear } = mySetInterval(() => console.log("tick"), 1000);
// logs "tick" every 1000ms
// clear() → stops it
