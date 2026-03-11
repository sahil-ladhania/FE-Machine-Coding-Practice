/**
 * PROBLEM: myInstanceOf(obj, Constructor)
 * Walk the prototype chain of obj and check if Constructor.prototype exists in it.
 *
 * STEPS:
 * Step 1: If obj is a primitive (not object/function) → return false immediately
 * Step 2: Get proto = Object.getPrototypeOf(obj)
 * Step 3: Loop:
 *         a. If proto === null → return false (end of chain)
 *         b. If proto === Constructor.prototype → return true
 *         c. proto = Object.getPrototypeOf(proto) → move up the chain
 */

export function myInstanceOf(obj: any, Constructor: Function): boolean {
  // your code here
  throw new Error("Not implemented");
}

// Test
// myInstanceOf([], Array)   → true
// myInstanceOf([], Object)  → true (Array.prototype's proto is Object.prototype)
// myInstanceOf({}, Array)   → false
