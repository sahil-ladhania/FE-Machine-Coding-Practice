/**
 * PROBLEM: myNew(Constructor, ...args)
 * Simulate what the `new` keyword does internally.
 *
 * STEPS:
 * Step 1: Create an empty object with Constructor.prototype as its [[Prototype]]
 *         → use Object.create(Constructor.prototype)
 * Step 2: Call Constructor with `this` = the new object
 *         → const result = Constructor.apply(obj, args)
 * Step 3: If Constructor explicitly returns an object → return that object
 * Step 4: Otherwise return the obj we created in Step 1
 */

export function myNew<T>(Constructor: new (...args: any[]) => T, ...args: any[]): T {
  // your code here
  throw new Error("Not implemented");
}

// Test
function Person(this: any, name: string, age: number) {
  this.name = name;
  this.age = age;
}
// const p = myNew(Person, "Sahil", 25)
// p.name → "Sahil", p.age → 25
// p instanceof Person → true
