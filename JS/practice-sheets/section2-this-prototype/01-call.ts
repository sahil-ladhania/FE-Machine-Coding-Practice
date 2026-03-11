/**
 * PROBLEM: Function.prototype.myCall(context, ...args)
 * Call the function with given `this` context and args.
 *
 * STEPS:
 * Step 1: Handle null/undefined context → default to globalThis
 * Step 2: Create a unique Symbol key to avoid property collision
 * Step 3: Attach the function (this) as a property on context using the Symbol key
 * Step 4: Call context[key](...args) — this triggers implicit binding → this = context
 * Step 5: Delete the Symbol property from context (cleanup)
 * Step 6: Return the result
 */

declare global {
  interface Function {
    myCall(context: any, ...args: any[]): any;
  }
}

Function.prototype.myCall = function(context: any, ...args: any[]): any {
  // your code here
  throw new Error("Not implemented");
};

// Test
function greet(this: { name: string }, greeting: string) {
  return `${greeting}, ${this.name}`;
}
// greet.myCall({ name: "Sahil" }, "Hello") → "Hello, Sahil"
