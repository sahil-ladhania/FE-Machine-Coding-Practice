/**
 * PROBLEM: myFind + myFindIndex
 *
 * myFind STEPS:
 * Step 1: Loop through array
 * Step 2: If callback(el, i, arr) is truthy → return el immediately
 * Step 3: If no match found → return undefined
 *
 * myFindIndex STEPS:
 * Step 1: Loop through array
 * Step 2: If callback(el, i, arr) is truthy → return i immediately
 * Step 3: If no match → return -1
 */

declare global {
  interface Array<T> {
    myFind(callback: (element: T, index: number, array: T[]) => boolean, thisArg?: any): T | undefined;
    myFindIndex(callback: (element: T, index: number, array: T[]) => boolean, thisArg?: any): number;
  }
}

Array.prototype.myFind = function<T>(callback: (element: T, index: number, array: T[]) => boolean, thisArg?: any): T | undefined {
  // your code here
  throw new Error("Not implemented");
};

Array.prototype.myFindIndex = function<T>(callback: (element: T, index: number, array: T[]) => boolean, thisArg?: any): number {
  // your code here
  throw new Error("Not implemented");
};
