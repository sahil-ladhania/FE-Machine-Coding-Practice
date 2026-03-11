/**
 * PROBLEM: debounce(fn, delay)
 * Delay invoking fn until after delay ms have elapsed since the LAST call.
 * Each new call resets the timer.
 *
 * STEPS:
 * Step 1: Declare `timerId` variable to hold the timeout reference
 * Step 2: Return an inner function that accepts ...args
 * Step 3: Inside — call clearTimeout(timerId) to cancel any pending timer
 * Step 4: Set a new setTimeout that calls fn(...args) after delay
 * Step 5: Store the new timeout ID in timerId
 * BONUS Step 6: Attach a .cancel() method on the returned function that calls clearTimeout(timerId)
 */

export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): ((...args: Parameters<T>) => void) & { cancel: () => void } {
  // your code here
  throw new Error("Not implemented");
}

// Test
const debouncedLog = debounce((msg: string) => console.log(msg), 300);
// debouncedLog("a") → timer starts
// debouncedLog("b") → timer resets
// debouncedLog("c") → timer resets
// after 300ms → logs "c" only
