/**
 * PROBLEM: Array.prototype.myForEach(callback, thisArg?)
 *
 * STEPS:
 * Step 1: Loop from index 0 to this.length - 1 using a for loop
 * Step 2: Skip sparse slots — check `index in this`
 * Step 3: Call callback.call(thisArg, this[i], i, this)
 * Step 4: Return undefined (always)
 */

declare global {
  interface Array<T> {
    myForEach(callback: (element: T, index: number, array: T[]) => void, thisArg?: any): void;
  }
}

Array.prototype.myForEach = function<T>(callback: (element: T, index: number, array: T[]) => void, thisArg?: any): void {
  // your code here
  throw new Error("Not implemented");
};
