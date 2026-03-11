// ============================================================
// TOPIC 1: Functions in JavaScript
// MIX: Output-Based + Implementation Questions
// ============================================================
// Key areas: Hoisting, Arrow vs Regular, IIFE, Currying,
//            Arguments object, First-class functions, Pipe
// ============================================================



// ----------------------------------------------------------
// Q1. OUTPUT BASED — What will be logged? Explain why.
// (Tests your understanding of hoisting)
// ----------------------------------------------------------

console.log(greet());     // Hello from greet!
console.log(sayHello());  // TypeError

function greet() {
  return "Hello from greet!";
}

var sayHello = function () {
  return "Hello from sayHello!";
};



// ----------------------------------------------------------
// Q2. OUTPUT BASED — What will each call log? Explain the difference.
// (Arrow function vs Regular function and 'this')
// ----------------------------------------------------------

const obj = {
  name: "Sahil",
  regularFn: function () {
    console.log(this.name);
  },
  arrowFn: () => {
    console.log(this.name);
  },
};

obj.regularFn(); // Sahil
obj.arrowFn();   // undefined



// ----------------------------------------------------------
// Q3. OUTPUT BASED — What is logged and why?
// (arguments object does NOT exist in arrow functions)
// ----------------------------------------------------------

function showArgs() {
  console.log(arguments.length);
  console.log(arguments[0]);
}

const showArgsArrow = (...args) => {
  console.log(args.length);
  console.log(args[0]);
};

showArgs(10, 20, 30);      // 3 , 10
showArgsArrow(10, 20, 30); // 3 , 10



// ----------------------------------------------------------
// Q4. OUTPUT BASED — What will be logged? (Default params + arguments)
// (Tricky: arguments only counts ACTUALLY passed args, not defaults)
// ----------------------------------------------------------

function multiply(a, b = 2) {
  console.log(arguments.length);
  return a * b;
}

multiply(5);      // arguments.length = 1 , return = 10
multiply(5, 4);   // arguments.length = 2 , return = 20



// ----------------------------------------------------------
// Q5. OUTPUT BASED — What will be logged? (Scope + Hoisting in IIFE)
// ----------------------------------------------------------

(function () {
  console.log(typeof foo); // undefined
  var foo = 10;
  console.log(typeof foo); // number
})();



// ----------------------------------------------------------
// Q6. OUTPUT BASED — What is logged?
// (Lexical scope — which 'x' does inner() see?)
// ----------------------------------------------------------

var x = 10;

function outer() {
  var x = 20;
  function inner() {
    console.log(x); // 20
  }
  inner();
}

outer();
console.log(x); // 10



// ----------------------------------------------------------
// Q7. IMPLEMENTATION — Write a curry() function
// ----------------------------------------------------------
// curry(fn) should convert fn into a curried version.
// It should accept arguments one at a time OR all at once.
//
// Example:
//   function add(a, b, c) { return a + b + c; }
//   curry(add)(1)(2)(3)   → 6
//   curry(add)(1, 2)(3)   → 6
//   curry(add)(1)(2, 3)   → 6

function add(a, b, c) {
  return a + b + c;
}

function curry(fn) {
  // Your code here
}

// const curriedAdd = curry(add);
// console.log(curriedAdd(1)(2)(3)); // 6
// console.log(curriedAdd(1, 2)(3)); // 6



// ----------------------------------------------------------
// Q8. IMPLEMENTATION — Write a pipe() function
// ----------------------------------------------------------
// pipe(fn1, fn2, fn3)(value) applies fn1 first, then fn2, then fn3.
// The output of each function feeds into the next.
//
// Example:
//   const process = pipe(x => x * 2, x => x + 1, x => x ** 2);
//   process(3) → ((3 * 2) + 1)^2 = 49

function pipe(...fns) {
  // Your code here
}



// ----------------------------------------------------------
// Q9. IMPLEMENTATION — Write a once() function
// ----------------------------------------------------------
// once(fn) returns a new function that calls fn only the FIRST time.
// All subsequent calls return undefined (or the cached first result).
//
// Example:
//   const init = once(() => console.log("Initialized!"));
//   init(); // "Initialized!"
//   init(); // (nothing)
//   init(); // (nothing)

function once(fn) {
  // Your code here
}



// ----------------------------------------------------------
// Q10. IMPLEMENTATION — Write a makeCounter() using IIFE
// ----------------------------------------------------------
// The returned object should expose: increment(), decrement(), getCount()
// The internal count must NOT be accessible directly from outside.

const counter = (function () {
  // Your code here
})();

// counter.increment();
// counter.increment();
// counter.decrement();
// console.log(counter.getCount()); // 1
