/**
 * PROBLEM: Function.prototype.myBind(context, ...presetArgs)
 * Return a new function with `this` permanently bound to context.
 * Must support partial application AND work correctly with `new`.
 *
 * STEPS:
 * Step 1: Store reference to original function: const originalFn = this
 * Step 2: Return a new function (NOT arrow — needs its own `this` for new detection)
 * Step 3: Inside returned function:
 *         a. Check if called with `new`: if (this instanceof boundFn)
 *            → call originalFn with `this` as context (new binding wins)
 *         b. Otherwise: call originalFn.apply(context, [...presetArgs, ...newArgs])
 * Step 4: Set boundFn.prototype = originalFn.prototype so instanceof works correctly
 *
 * CRITICAL: The `new` check (step 3a) is the hardest part — don't skip it.
 */

declare global {
  interface Function {
    myBind(context: any, ...presetArgs: any[]): (...args: any[]) => any;
  }
}

Function.prototype.myBind = function(context: any, ...presetArgs: any[]) {
  // your code here
  throw new Error("Not implemented");
};
