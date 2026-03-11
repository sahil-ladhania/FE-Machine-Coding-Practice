/**
 * PROBLEM: sleep(ms)
 * Return a Promise that resolves after ms milliseconds.
 *
 * STEPS:
 * Step 1: Return new Promise
 * Step 2: Inside executor — call setTimeout(resolve, ms)
 * Step 3: That's it. resolve is called after ms with no value.
 *
 * BONUS: Cancellable sleep
 * Step 1: Expose a cancel() function that calls reject with { cancelled: true }
 * Step 2: clearTimeout on cancel to prevent resolve from firing too
 */

export function sleep(ms: number): Promise<void> {
  // your code here
  throw new Error("Not implemented");
}

export function cancellableSleep(ms: number): { promise: Promise<void>; cancel: () => void } {
  // your code here
  throw new Error("Not implemented");
}
