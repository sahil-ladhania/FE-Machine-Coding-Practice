/**
 * PROBLEM: Array.prototype.myReduce(callback, initialValue?)
 *
 * STEPS:
 * Step 1: Check if array is empty AND no initialValue → throw TypeError
 * Step 2: If initialValue provided:
 *         - accumulator = initialValue
 *         - start loop from index 0
 * Step 3: If initialValue NOT provided:
 *         - accumulator = this[0]
 *         - start loop from index 1
 * Step 4: For each iteration: accumulator = callback(accumulator, this[i], i, this)
 * Step 5: Return accumulator after loop
 *
 * CRITICAL: The no-initialValue case is what most candidates get wrong.
 */

declare global {
  interface Array<T> {
    myReduce<U>(callback: (accumulator: U, current: T, index: number, array: T[]) => U, initialValue?: U): U;
  }
}

Array.prototype.myReduce = function<T, U>(callback: (acc: U, cur: T, idx: number, arr: T[]) => U, initialValue?: U): U {
  // your code here
  throw new Error("Not implemented");
};
