/**
 * PROBLEM: Function.prototype.myApply(context, argsArray)
 * Same as call but args are passed as an array.
 *
 * STEPS:
 * Step 1: Handle null/undefined context → globalThis
 * Step 2: Handle null/undefined argsArray → default to []
 * Step 3: Create a unique Symbol key
 * Step 4: Attach function to context[key]
 * Step 5: Spread argsArray: context[key](...argsArray)
 * Step 6: Delete key, return result
 */

declare global {
  interface Function {
    myApply(context: any, argsArray?: any[]): any;
  }
}

Function.prototype.myApply = function(context: any, argsArray: any[] = []): any {
  // your code here
  throw new Error("Not implemented");
};
