/**
 * PROBLEM: Array.prototype.myFilter(callback, thisArg?)
 *
 * STEPS:
 * Step 1: Create an empty result array
 * Step 2: Loop — for each element, call callback.call(thisArg, el, i, arr)
 * Step 3: If callback returns truthy → push element to result
 * Step 4: Return result
 */

declare global {
  interface Array<T> {
    myFilter(callback: (element: T, index: number, array: T[]) => boolean, thisArg?: any): T[];
  }
}

Array.prototype.myFilter = function<T>(callback: (element: T, index: number, array: T[]) => boolean, thisArg?: any): T[] {
  // your code here
  throw new Error("Not implemented");
};
