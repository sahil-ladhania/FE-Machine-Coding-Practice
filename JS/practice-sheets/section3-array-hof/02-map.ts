/**
 * PROBLEM: Array.prototype.myMap(callback, thisArg?)
 *
 * STEPS:
 * Step 1: Create an empty result array
 * Step 2: Loop with for — check `index in this` for sparse arrays
 * Step 3: Push callback.call(thisArg, this[i], i, this) to result
 * Step 4: Return result
 *
 * NOTE: Do NOT use native .map() internally.
 */

declare global {
  interface Array<T> {
    myMap<U>(callback: (element: T, index: number, array: T[]) => U, thisArg?: any): U[];
  }
}

Array.prototype.myMap = function<T, U>(callback: (element: T, index: number, array: T[]) => U, thisArg?: any): U[] {
  // your code here
  throw new Error("Not implemented");
};
