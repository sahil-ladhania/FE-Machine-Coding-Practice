// ============================================================
// TOPIC 3: call, bind, apply in JavaScript
// TYPE: Polyfill Implementations are MOST asked in interviews.
//       Also includes output-based and practical usage.
// ============================================================
// Quick reference:
//   fn.call(thisArg, arg1, arg2)      → calls fn immediately
//   fn.apply(thisArg, [arg1, arg2])   → calls fn immediately (array args)
//   fn.bind(thisArg, arg1)            → returns a NEW function (not called)
// ============================================================



// ----------------------------------------------------------
// Q1. OUTPUT BASED — What will each line log?
// ----------------------------------------------------------

function introduce(city, country) {
  console.log(`I am ${this.name}, from ${city}, ${country}`);
}

const personA = { name: "Sahil" };
const personB = { name: "Alice" };

introduce.call(personA, "Mumbai", "India");    // I am Sahil , from Mumbai, India.
introduce.apply(personB, ["New York", "USA"]); // I am Alice , from New York, USA.



// ----------------------------------------------------------
// Q2. OUTPUT BASED — What does bind return? What gets logged?
// (bind pre-fills arguments — what happens when you pass more?)
// ----------------------------------------------------------

function greet(greeting) {
  return `${greeting}, ${this.name}!`;
}

const user = { name: "Sahil" };
const boundGreet = greet.bind(user, "Hello");

console.log(typeof boundGreet); // function
console.log(boundGreet());      // Hello Sahil
console.log(boundGreet("Hi"));  // Hello Sahil  ← "Hello" is already bound, what happens?



// ----------------------------------------------------------
// Q3. IMPLEMENTATION — Polyfill for Function.prototype.call
// ----------------------------------------------------------
// Rules:
//   - 'this' inside myCall refers to the function being called
//   - context is the object to set as 'this'
//   - Should handle null/undefined context (default to globalThis)

Function.prototype.myCall = function (context, ...args) {
  // Your code here
};

// Test:
// function sayHi(greeting) { return `${greeting}, ${this.name}`; }
// const obj = { name: "Sahil" };
// console.log(sayHi.myCall(obj, "Hello")); // "Hello, Sahil"



// ----------------------------------------------------------
// Q4. IMPLEMENTATION — Polyfill for Function.prototype.apply
// ----------------------------------------------------------
// Same as call but second argument is an ARRAY of args

Function.prototype.myApply = function (context, args = []) {
  // Your code here
};

// Test:
// console.log(sayHi.myApply(obj, ["Hello"])); // "Hello, Sahil"



// ----------------------------------------------------------
// Q5. IMPLEMENTATION — Polyfill for Function.prototype.bind
// *** Most commonly asked polyfill in JS interviews ***
// ----------------------------------------------------------
// Rules:
//   - Returns a new function (does NOT call immediately)
//   - Pre-fills 'this' and optionally pre-fills some args (partial application)
//   - The returned function can accept additional args when called
//   - BONUS: If the returned fn is used with 'new', the bound 'this' is ignored

Function.prototype.myBind = function (context, ...outerArgs) {
  // Your code here
};

// Test:
// const bound = sayHi.myBind(obj, "Hello");
// console.log(bound());         // "Hello, Sahil"
// console.log(typeof bound);    // "function"



// ----------------------------------------------------------
// Q6. OUTPUT BASED — call vs apply: same result, different syntax
// ----------------------------------------------------------

function logArgs() {
  console.log([...arguments]);
}

logArgs.call(null, 1, 2, 3);    // [1 , 2 , 3]
logArgs.apply(null, [1, 2, 3]); // [1 , 2 , 3]

// Are outputs the same or different? When would you prefer one over the other?



// ----------------------------------------------------------
// Q7. IMPLEMENTATION — Method borrowing using call
// ----------------------------------------------------------
// Use Array.prototype.join via call to join the 'arguments' object
// The 'arguments' object is array-LIKE but not an actual array.

function joinArgs() {
  // Use Array.prototype.join.call to join all arguments with " - "
  // Your code here
}

// console.log(joinArgs("a", "b", "c")); // "a - b - c"



// ----------------------------------------------------------
// Q8. IMPLEMENTATION — Partial application using bind
// ----------------------------------------------------------

function multiply(a, b) {
  return a * b;
}

// Use bind to create 'double' (always multiplies by 2)
// and 'triple' (always multiplies by 3) — without calling multiply directly

const double = /* Your code */null;
const triple = /* Your code */null;

// console.log(double(5)); // 10
// console.log(triple(5)); // 15



// ----------------------------------------------------------
// Q9. OUTPUT BASED — bind + new (tricky!)
// When 'new' is used on a bound function, does the bound 'this' win?
// ----------------------------------------------------------

function Person(name) {
  this.name = name;
}

const BoundPerson = Person.bind({ name: "Ignored" });
const p = new BoundPerson("Sahil");

console.log(p.name); // ?  ← Hint: new OVERRIDES the bound 'this'



// ----------------------------------------------------------
// Q10. IMPLEMENTATION — Use apply to find max in an array
// ----------------------------------------------------------
// Find the max value WITHOUT using the spread operator — use apply.

const numbers = [3, 1, 4, 1, 5, 9, 2, 6];

const max = /* Your code using Math.max + apply */null;

console.log(max); // 9
