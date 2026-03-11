/**
 * PROBLEM: myObjectCreate(proto)
 * Create a new object whose [[Prototype]] is set to proto.
 *
 * STEPS:
 * Step 1: Handle proto = null case — create truly empty object using Object.create(null) equivalent
 * Step 2: Create an empty constructor function F
 * Step 3: Set F.prototype = proto
 * Step 4: Return new F() — the instance's [[Prototype]] will be proto
 *
 * NOTE: Do NOT use Object.create() itself.
 */

export function myObjectCreate(proto: object | null): object {
  // your code here
  throw new Error("Not implemented");
}

// Test
const animal = { eat() { return "eating"; } };
const dog = myObjectCreate(animal);
// dog.eat() → "eating" (via prototype chain)
// Object.getPrototypeOf(dog) === animal → true
