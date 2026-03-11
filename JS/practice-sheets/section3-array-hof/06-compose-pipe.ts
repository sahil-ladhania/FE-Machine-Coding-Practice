/**
 * PROBLEM: compose(...fns) and pipe(...fns)
 *
 * compose(f, g, h)(x) = f(g(h(x))) → RIGHT to LEFT
 * pipe(f, g, h)(x)    = h(g(f(x))) → LEFT to RIGHT
 *
 * compose STEPS:
 * Step 1: Use Array.reduceRight on fns array
 * Step 2: Start with x as initial accumulator
 * Step 3: Each step: call fn(accumulator)
 * Step 4: Return final result
 *
 * pipe STEPS:
 * Step 1: Same as compose but use Array.reduce (left to right)
 */

type AnyFn = (arg: any) => any;

export function compose(...fns: AnyFn[]): (x: any) => any {
  // your code here — use reduceRight
  throw new Error("Not implemented");
}

export function pipe(...fns: AnyFn[]): (x: any) => any {
  // your code here — use reduce
  throw new Error("Not implemented");
}

// Test
const double = (x: number) => x * 2;
const addOne = (x: number) => x + 1;
const square = (x: number) => x * x;
// compose(square, addOne, double)(3) → square(addOne(double(3))) = square(7) = 49
// pipe(double, addOne, square)(3)    → square(addOne(double(3))) = 49
