// ============================================================
//                        ANSWERS FILE
//     Topics: Functions | this | call/bind/apply | Closures
//                   | Prototypal Inheritance
// ============================================================



// ============================================================
// =================== TOPIC 1: FUNCTIONS =====================
// ============================================================



// ----------------------------------------------------------
// A1. Hoisting — Function Declaration vs Function Expression
// ----------------------------------------------------------
// OUTPUT:
//   greet()     → "Hello from greet!"
//   sayHello()  → TypeError: sayHello is not a function
//
// WHY:
//   - Function DECLARATIONS are fully hoisted (name + body moved to top).
//   - var DECLARATIONS are hoisted but initialized to 'undefined'.
//   - Calling undefined() throws a TypeError.
//   - So sayHello is undefined at the point of the console.log call.

console.log(greet());
// console.log(sayHello()); // ← Uncomment to see TypeError

function greet() { return "Hello from greet!"; }
var sayHello = function () { return "Hello from sayHello!"; };



// ----------------------------------------------------------
// A2. Arrow vs Regular function — 'this' binding
// ----------------------------------------------------------
// OUTPUT:
//   obj.regularFn() → "Sahil"     (this = obj, implicit binding)
//   obj.arrowFn()   → undefined   (arrow captures 'this' from the
//                                   surrounding scope at definition time,
//                                   which is the module/global scope)
//
// In a browser (non-strict), arrowFn would log window.name (likely "").
// In Node.js module scope, 'this' is {}, so this.name is undefined.

const obj_A2 = {
  name: "Sahil",
  regularFn: function () { console.log(this.name); },
  arrowFn: () => { console.log(this.name); },
};

obj_A2.regularFn(); // "Sahil"
obj_A2.arrowFn();   // undefined



// ----------------------------------------------------------
// A3. arguments object vs rest parameters
// ----------------------------------------------------------
// OUTPUT:
//   showArgs(10, 20, 30)      → arguments.length = 3, arguments[0] = 10
//   showArgsArrow(10, 20, 30) → args.length = 3, args[0] = 10
//
// KEY POINT: Arrow functions do NOT have their own 'arguments' object.
// If you tried using 'arguments' inside showArgsArrow, you'd get a
// ReferenceError (or pick up a surrounding function's arguments).

function showArgs_A3() {
  console.log(arguments.length); // 3
  console.log(arguments[0]);     // 10
}

const showArgsArrow_A3 = (...args) => {
  console.log(args.length); // 3
  console.log(args[0]);     // 10
};



// ----------------------------------------------------------
// A4. Default parameters + arguments object
// ----------------------------------------------------------
// OUTPUT:
//   multiply(5)    → arguments.length = 1,  result = 10
//   multiply(5, 4) → arguments.length = 2,  result = 20
//
// WHY: 'arguments' only counts ACTUALLY PASSED arguments.
// Default values don't count — so multiply(5) gives arguments.length = 1.

function multiply_A4(a, b = 2) {
  console.log(arguments.length);
  return a * b;
}

multiply_A4(5);    // 1, 10
multiply_A4(5, 4); // 2, 20



// ----------------------------------------------------------
// A5. IIFE + hoisting inside a function scope
// ----------------------------------------------------------
// OUTPUT:
//   typeof foo → "undefined"  (var is hoisted but not yet assigned)
//   typeof foo → "number"     (after assignment, foo = 10)
//
// The IIFE creates its own function scope. var foo is hoisted to
// the TOP of that scope, but its value assignment stays in place.

(function () {
  console.log(typeof foo); // "undefined"
  var foo = 10;
  console.log(typeof foo); // "number"
})();



// ----------------------------------------------------------
// A6. Lexical scope — which 'x' does inner() see?
// ----------------------------------------------------------
// OUTPUT:
//   inner()       → 20  (sees outer()'s x = 20, not the global x)
//   console.log(x)→ 10  (global x is untouched)
//
// Functions look up the scope chain where they were DEFINED (lexical scope),
// not where they are called.

var x_A6 = 10;
function outer_A6() {
  var x_A6 = 20;
  function inner_A6() { console.log(x_A6); }
  inner_A6();
}
outer_A6();        // 20
console.log(x_A6); // 10



// ----------------------------------------------------------
// A7. IMPLEMENTATION — curry()
// ----------------------------------------------------------
// Strategy: compare how many args have been collected vs fn.length.
// If enough, call fn. Otherwise return a function that collects more.

function curry_A7(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function (...moreArgs) {
      return curried.apply(this, [...args, ...moreArgs]);
    };
  };
}

function add_A7(a, b, c) { return a + b + c; }

const curriedAdd = curry_A7(add_A7);
console.log(curriedAdd(1)(2)(3));   // 6
console.log(curriedAdd(1, 2)(3));   // 6
console.log(curriedAdd(1)(2, 3));   // 6



// ----------------------------------------------------------
// A8. IMPLEMENTATION — pipe()
// ----------------------------------------------------------
// Apply each function left-to-right using reduce.
// pipe is the opposite of compose (compose applies right-to-left).

function pipe_A8(...fns) {
  return function (value) {
    return fns.reduce((acc, fn) => fn(acc), value);
  };
}

const process_A8 = pipe_A8(
  x => x * 2,   // 3 * 2 = 6
  x => x + 1,   // 6 + 1 = 7
  x => x ** 2   // 7^2  = 49
);
console.log(process_A8(3)); // 49



// ----------------------------------------------------------
// A9. IMPLEMENTATION — once()
// ----------------------------------------------------------
// Use a closure variable 'called' to guard repeated invocations.

function once_A9(fn) {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  };
}

const init_A9 = once_A9(() => console.log("Initialized!"));
init_A9(); // "Initialized!"
init_A9(); // (nothing)



// ----------------------------------------------------------
// A10. IMPLEMENTATION — makeCounter() using IIFE
// ----------------------------------------------------------

const counter_A10 = (function () {
  let count = 0;
  return {
    increment() { count++; },
    decrement() { count--; },
    getCount()  { return count; },
  };
})();

counter_A10.increment();
counter_A10.increment();
counter_A10.decrement();
console.log(counter_A10.getCount()); // 1
// counter_A10.count → undefined (count is private!)



// ============================================================
// ================ TOPIC 2: 'this' KEYWORD ==================
// ============================================================



// ----------------------------------------------------------
// A1. Default binding — 'this' in a plain function call
// ----------------------------------------------------------
// Non-strict mode (browser): 'this' → window (global object)
// Strict mode ('use strict'): 'this' → undefined
//
// Rule: When a function is called with no explicit receiver,
//       'this' falls back to the global object (or undefined in strict).



// ----------------------------------------------------------
// A2. Losing 'this' — implicit binding vs unbound function
// ----------------------------------------------------------
// OUTPUT:
//   user.greet()    → "Sahil"      (this = user, dot-notation binding)
//   greetFn()       → undefined    (no object before the call — 'this' is global)
//
// When you assign a method to a variable and call it standalone,
// you LOSE the implicit binding. 'this' reverts to the global object.

const user_A2 = {
  name: "Sahil",
  greet() { console.log(this.name); },
};

user_A2.greet();                        // "Sahil"
const greetFn_A2 = user_A2.greet;
greetFn_A2();                           // undefined (or "" in browser)



// ----------------------------------------------------------
// A3. Fixing 'this' in setInterval — arrow function
// ----------------------------------------------------------
// PROBLEM: Inside setInterval's regular function callback,
//          'this' is NOT the timer object — it's the global object.
//          So this.seconds++ modifies window.seconds (NaN) or is undefined.
//
// FIX: Use an arrow function, which inherits 'this' from start()'s scope.

const timer_A3 = {
  seconds: 0,
  start() {
    // ✅ Arrow function captures 'this' (= timer_A3) from start()
    setInterval(() => {
      this.seconds++;
      console.log(this.seconds); // 1, 2, 3 ...
    }, 1000);
  },
};



// ----------------------------------------------------------
// A4. Nested regular function loses 'this'
// ----------------------------------------------------------
// OUTPUT: undefined (in strict) / window.value (non-strict, likely undefined)
//
// inner() is called as a plain function (no dot, no call/apply).
// Its 'this' defaults to global — not obj1.

const obj1_A4 = {
  value: 42,
  getValue: function () {
    const inner = function () { return this.value; }; // 'this' = global
    return inner();
  },
};
console.log(obj1_A4.getValue()); // undefined



// ----------------------------------------------------------
// A5. Arrow function captures 'this' from enclosing scope
// ----------------------------------------------------------
// OUTPUT: 42
//
// inner arrow function captures 'this' from getValue's scope,
// where 'this' is correctly bound to obj2.

const obj2_A5 = {
  value: 42,
  getValue: function () {
    const inner = () => this.value; // 'this' = obj2
    return inner();
  },
};
console.log(obj2_A5.getValue()); // 42



// ----------------------------------------------------------
// A6. Losing 'this' from a class method
// ----------------------------------------------------------
// OUTPUT:
//   dog.speak()    → "Dog makes a sound."
//   speakFn()      → TypeError: Cannot read properties of undefined
//                    (in strict mode — classes always run in strict mode)
//
// Classes are ALWAYS in strict mode. Calling speakFn() without a
// receiver sets 'this' to undefined → accessing undefined.name throws.
//
// FIX options:
//   1. speakFn = dog.speak.bind(dog)
//   2. Define speak as an arrow function in the constructor:
//      this.speak = () => `${this.name} makes a sound.`



// ----------------------------------------------------------
// A7. Classic trick — 'this' inside a callback (var + global)
// ----------------------------------------------------------
// OUTPUT: 4
//
// WHY: cb() is called as a plain function (default binding).
// 'this' inside callback() is the global object.
// var length = 4 creates window.length = 4.
// So this.length === 4.
//
// Note: object.length = 5 is NEVER reached because 'this' ≠ object.

var length_A7 = 4;
function callback_A7() { console.log(this.length); } // 'this' = global → 4

const object_A7 = {
  length: 5,
  method(cb) { cb(); }, // called as plain fn → 'this' = global
};

object_A7.method(callback_A7); // 4



// ----------------------------------------------------------
// A8. Fixing 'this' inside forEach — three approaches
// ----------------------------------------------------------

const person_A8 = {
  name: "Alice",
  friends: ["Bob", "Charlie"],

  // ❌ Problem: 'this' inside the regular callback is NOT person
  listFriendsBroken() {
    this.friends.forEach(function (friend) {
      console.log(this.name + " knows " + friend); // 'this' = global
    });
  },

  // ✅ Fix 1: Arrow function (captures 'this' from listFriends)
  listFriendsArrow() {
    this.friends.forEach((friend) => {
      console.log(this.name + " knows " + friend);
    });
  },

  // ✅ Fix 2: bind
  listFriendsBind() {
    this.friends.forEach(function (friend) {
      console.log(this.name + " knows " + friend);
    }.bind(this));
  },

  // ✅ Fix 3: self/that pattern
  listFriendsSelf() {
    const self = this;
    this.friends.forEach(function (friend) {
      console.log(self.name + " knows " + friend);
    });
  },
};

person_A8.listFriendsArrow(); // "Alice knows Bob", "Alice knows Charlie"



// ----------------------------------------------------------
// A9. Arrow vs Regular in constructor — call/bind cannot change arrow's 'this'
// ----------------------------------------------------------
// OUTPUTS:
//   foo.bar()               → foo object        (regular fn — 'this' = receiver)
//   foo.baz()               → foo object        (arrow fn — 'this' = foo from new Foo())
//   foo.bar.call({ x: 1 }) → { x: 1 } object   (regular fn — 'this' changed by call)
//   foo.baz.call({ x: 1 }) → foo object         (arrow fn — CANNOT be changed!)
//
// Arrow functions capture 'this' permanently at creation time.
// call/apply/bind are IGNORED for arrow functions.



// ----------------------------------------------------------
// A10. Event listeners — regular vs arrow
// ----------------------------------------------------------
// Regular function callback:
//   'this' → the element that fired the event (btn)
//   This is because addEventListener sets 'this' to the target element.
//
// Arrow function callback:
//   'this' → the enclosing lexical scope (usually window in a script,
//             or the module's 'this' in a module).
//
// Best practice: use regular functions when you need 'this' = the element.
// Use arrow functions when you want 'this' from the outer scope.



// ============================================================
// ============= TOPIC 3: call, bind, apply ===================
// ============================================================



// ----------------------------------------------------------
// A1. Basic call and apply usage
// ----------------------------------------------------------
// introduce.call(personA, "Mumbai", "India")
//   → "I am Sahil, from Mumbai, India"
//
// introduce.apply(personB, ["New York", "USA"])
//   → "I am Alice, from New York, USA"
//
// Difference: call takes args as individual values; apply takes an array.

function introduce_A1(city, country) {
  console.log(`I am ${this.name}, from ${city}, ${country}`);
}
const personA_A1 = { name: "Sahil" };
const personB_A1 = { name: "Alice" };
introduce_A1.call(personA_A1, "Mumbai", "India");
introduce_A1.apply(personB_A1, ["New York", "USA"]);



// ----------------------------------------------------------
// A2. bind — pre-filled args and partial application
// ----------------------------------------------------------
// typeof boundGreet → "function"  (bind returns a new function)
// boundGreet()      → "Hello, Sahil!"  ("Hello" was pre-bound)
// boundGreet("Hi")  → "Hello, Sahil!"  ("Hello" wins — "Hi" shifts to 2nd param
//                      but greet only has 1 param, so it's ignored)
//
// Once an argument is pre-bound, it cannot be overridden by passing a new one.

function greet_A2(greeting) { return `${greeting}, ${this.name}!`; }
const user_A2b  = { name: "Sahil" };
const boundGreet_A2 = greet_A2.bind(user_A2b, "Hello");
console.log(typeof boundGreet_A2); // "function"
console.log(boundGreet_A2());      // "Hello, Sahil!"
console.log(boundGreet_A2("Hi"));  // "Hello, Sahil!"



// ----------------------------------------------------------
// A3. POLYFILL — Function.prototype.call
// ----------------------------------------------------------
// Strategy:
//   1. Set 'this' (the function) as a temporary property on context.
//   2. Call it so 'this' inside the function becomes context.
//   3. Delete the temp property and return the result.

Function.prototype.myCall = function (context, ...args) {
  context = context ?? globalThis;           // handle null/undefined
  const fnKey = Symbol("fn");                // unique key to avoid collisions
  context[fnKey] = this;                     // 'this' here is the function
  const result = context[fnKey](...args);    // call it with context as receiver
  delete context[fnKey];
  return result;
};

// Verify:
function sayHi_A3(greeting) { return `${greeting}, ${this.name}`; }
const obj_A3 = { name: "Sahil" };
console.log(sayHi_A3.myCall(obj_A3, "Hello")); // "Hello, Sahil"



// ----------------------------------------------------------
// A4. POLYFILL — Function.prototype.apply
// ----------------------------------------------------------
// Identical to myCall except args come as an array.

Function.prototype.myApply = function (context, args = []) {
  context = context ?? globalThis;
  const fnKey = Symbol("fn");
  context[fnKey] = this;
  const result = context[fnKey](...args);
  delete context[fnKey];
  return result;
};

console.log(sayHi_A3.myApply(obj_A3, ["Hello"])); // "Hello, Sahil"



// ----------------------------------------------------------
// A5. POLYFILL — Function.prototype.bind (MOST ASKED)
// ----------------------------------------------------------
// Strategy:
//   - Return a NEW function that, when called, applies the stored context.
//   - Merge pre-bound args (outerArgs) with later args (innerArgs).
//   - BONUS: if the returned fn is invoked with 'new', the bound context
//     should be ignored (new creates its own object).

Function.prototype.myBind = function (context, ...outerArgs) {
  const fn = this; // the original function

  function BoundFn(...innerArgs) {
    // When used with 'new', 'this instanceof BoundFn' is true.
    // In that case, ignore the bound context.
    return fn.apply(
      this instanceof BoundFn ? this : context,
      [...outerArgs, ...innerArgs]
    );
  }

  // Preserve the prototype so 'instanceof' checks work correctly
  // when BoundFn is used as a constructor.
  BoundFn.prototype = Object.create(fn.prototype);
  return BoundFn;
};

const bound_A5 = sayHi_A3.myBind(obj_A3, "Hello");
console.log(bound_A5());        // "Hello, Sahil"
console.log(typeof bound_A5);   // "function"



// ----------------------------------------------------------
// A6. call vs apply — same result, different syntax
// ----------------------------------------------------------
// Both log [1, 2, 3] — the difference is ONLY in how args are passed.
//   call  → individual arguments: fn.call(ctx, 1, 2, 3)
//   apply → array of arguments:   fn.apply(ctx, [1, 2, 3])
//
// Use apply when you already have args in an array.
// Use call when you're passing args one by one.



// ----------------------------------------------------------
// A7. IMPLEMENTATION — Method borrowing with call
// ----------------------------------------------------------
// The 'arguments' object is array-LIKE (has .length, indexed access)
// but is NOT an Array, so it doesn't have .join() directly.
// Borrow Array.prototype.join using call.

function joinArgs_A7() {
  return Array.prototype.join.call(arguments, " - ");
}

console.log(joinArgs_A7("a", "b", "c")); // "a - b - c"



// ----------------------------------------------------------
// A8. IMPLEMENTATION — Partial application with bind
// ----------------------------------------------------------
// bind(thisArg, firstArg) locks in the first argument.
// null is passed as 'this' since multiply doesn't use 'this'.

function multiply_A8(a, b) { return a * b; }

const double_A8 = multiply_A8.bind(null, 2); // a = 2, waits for b
const triple_A8 = multiply_A8.bind(null, 3); // a = 3, waits for b

console.log(double_A8(5)); // 10
console.log(triple_A8(5)); // 15



// ----------------------------------------------------------
// A9. bind + new — new wins over bind's 'this'
// ----------------------------------------------------------
// OUTPUT: p.name → "Sahil"
//
// When you use 'new' with a bound function, the bound 'this' is IGNORED.
// 'new' creates a fresh object and sets 'this' to that object.
// So new BoundPerson("Sahil") correctly assigns this.name = "Sahil".

function Person_A9(name) { this.name = name; }
const BoundPerson_A9 = Person_A9.bind({ name: "Ignored" });
const p_A9 = new BoundPerson_A9("Sahil");
console.log(p_A9.name); // "Sahil"



// ----------------------------------------------------------
// A10. IMPLEMENTATION — Math.max via apply (no spread)
// ----------------------------------------------------------
// apply unpacks an array as individual arguments — perfect for Math.max.

const numbers_A10 = [3, 1, 4, 1, 5, 9, 2, 6];
const max_A10 = Math.max.apply(null, numbers_A10);
console.log(max_A10); // 9



// ============================================================
// ================== TOPIC 4: CLOSURES =======================
// ============================================================



// ----------------------------------------------------------
// A1. Classic var-in-loop gotcha + 3 fixes
// ----------------------------------------------------------
// OUTPUT (original): 3, 3, 3 (after ~1 second)
//
// WHY: var is function-scoped, not block-scoped. There is ONE 'i'.
// By the time all 3 setTimeout callbacks fire, the loop has finished
// and i === 3. All callbacks close over the same 'i'.

// ✅ Fix 1: let (block-scoped — new 'i' per iteration)
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000); // 0, 1, 2
}

// ✅ Fix 2: IIFE (captures the current value of i in a new scope)
for (var i = 0; i < 3; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000); // 0, 1, 2
  })(i);
}

// ✅ Fix 3: bind (passes current i as an argument to console.log)
for (var i = 0; i < 3; i++) {
  setTimeout(console.log.bind(null, i), 1000); // 0, 1, 2
}



// ----------------------------------------------------------
// A2. Closure over SEPARATE scope per outer() call
// ----------------------------------------------------------
// OUTPUT:
//   fn1() → 1  (fn1's count goes from 0 → 1)
//   fn1() → 2  (fn1's count goes from 1 → 2)
//   fn2() → 1  (fn2 has its OWN separate count, starting at 0)
//   fn1() → 3  (fn1's count continues at 2 → 3)
//
// Each call to outer() creates a NEW closure scope with its own 'count'.
// fn1 and fn2 do NOT share count.

function outer_A2() {
  let count = 0;
  return function inner() { count++; console.log(count); };
}

const fn1_A2 = outer_A2();
const fn2_A2 = outer_A2();

fn1_A2(); // 1
fn1_A2(); // 2
fn2_A2(); // 1 ← separate count!
fn1_A2(); // 3



// ----------------------------------------------------------
// A3. var in loop — all functions share the final value of i
// ----------------------------------------------------------
// OUTPUT:
//   fns[0]() → 5
//   fns[3]() → 5
//
// var i is hoisted to createFunctions's scope. All 5 pushed functions
// close over the SAME i. After the loop i === 5. All return 5.

function createFunctions_A3() {
  const funcs = [];
  for (var i = 0; i < 5; i++) {
    funcs.push(function () { return i; });
  }
  return funcs;
}

const fns_A3 = createFunctions_A3();
console.log(fns_A3[0]()); // 5
console.log(fns_A3[3]()); // 5



// ----------------------------------------------------------
// A4. IMPLEMENTATION — makeCounter()
// ----------------------------------------------------------
// Closure keeps 'count' and 'initialValue' alive across calls.

function makeCounter_A4(initialValue = 0) {
  let count = initialValue;
  return {
    increment() { count++; },
    decrement() { count--; },
    reset()     { count = initialValue; },
    getCount()  { return count; },
  };
}

const c_A4 = makeCounter_A4(10);
c_A4.increment(); // 11
c_A4.increment(); // 12
c_A4.decrement(); // 11
c_A4.reset();
console.log(c_A4.getCount()); // 10



// ----------------------------------------------------------
// A5. IMPLEMENTATION — memoize()
// ----------------------------------------------------------
// Use a Map (or plain object) as a cache.
// JSON.stringify(args) creates a stable cache key for multiple arguments.

function memoize_A5(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key); // cache hit — no recomputation
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

const square_A5 = memoize_A5((n) => { console.log("Computing..."); return n * n; });
square_A5(5); // "Computing..." → 25
square_A5(5); // (no log)      → 25  ← from cache
square_A5(6); // "Computing..." → 36



// ----------------------------------------------------------
// A6. IMPLEMENTATION — makeMultiplier() (function factory)
// ----------------------------------------------------------

function makeMultiplier_A6(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double_A6 = makeMultiplier_A6(2);
const triple_A6 = makeMultiplier_A6(3);
console.log(double_A6(5)); // 10
console.log(triple_A6(5)); // 15



// ----------------------------------------------------------
// A7. Private data with closure
// ----------------------------------------------------------
// OUTPUT:
//   account.getBalance() → 120  (100 + 50 - 30)
//   account.balance      → undefined  (balance is NOT on the returned object)
//
// 'balance' lives in BankAccount's closure scope.
// It's inaccessible from outside — true data privacy without classes.

function BankAccount_A7(initialBalance) {
  let balance = initialBalance;
  return {
    deposit(amount)  { balance += amount; },
    withdraw(amount) { balance -= amount; },
    getBalance()     { return balance; },
  };
}

const account_A7 = BankAccount_A7(100);
account_A7.deposit(50);
account_A7.withdraw(30);
console.log(account_A7.getBalance()); // 120
console.log(account_A7.balance);      // undefined ← private!



// ----------------------------------------------------------
// A8. IMPLEMENTATION — once()
// ----------------------------------------------------------

function once_A8(fn) {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  };
}

const connectDB_A8 = once_A8(() => console.log("DB Connected!"));
connectDB_A8(); // "DB Connected!"
connectDB_A8(); // (nothing)



// ----------------------------------------------------------
// A9. let in loop — each iteration has its own 'i'
// ----------------------------------------------------------
// OUTPUT:
//   After 1s → 1
//   After 2s → 2
//   After 3s → 3
//
// 'let' creates a NEW binding of 'i' for each loop iteration.
// Each arrow function closes over its OWN 'i'.
// This is the FIXED version of the var-in-loop problem.



// ----------------------------------------------------------
// A10. IMPLEMENTATION — compose()
// ----------------------------------------------------------
// compose(f, g)(x) = f(g(x))
// Apply g first, then pass its result to f.

function compose_A10(f, g) {
  return function (x) {
    return f(g(x));
  };
}

const add1_A10   = x => x + 1;
const double_A10 = x => x * 2;
const doubleThenAdd1 = compose_A10(add1_A10, double_A10);
console.log(doubleThenAdd1(3)); // add1(double(3)) = add1(6) = 7



// ============================================================
// =========== TOPIC 5: PROTOTYPAL INHERITANCE ================
// ============================================================



// ----------------------------------------------------------
// A1. Prototype chain — own vs inherited properties
// ----------------------------------------------------------
// OUTPUT:
//   cat.speak()                        → "Cat makes a sound."
//   cat.hasOwnProperty("name")         → true   (assigned in constructor)
//   cat.hasOwnProperty("speak")        → false  (lives on Animal.prototype)
//   cat.__proto__ === Animal.prototype → true

function Animal_A1(name) { this.name = name; }
Animal_A1.prototype.speak = function () { return `${this.name} makes a sound.`; };

const cat_A1 = new Animal_A1("Cat");
console.log(cat_A1.speak());                           // "Cat makes a sound."
console.log(cat_A1.hasOwnProperty("name"));            // true
console.log(cat_A1.hasOwnProperty("speak"));           // false
console.log(cat_A1.__proto__ === Animal_A1.prototype); // true



// ----------------------------------------------------------
// A2. Classical inheritance with constructor functions
// ----------------------------------------------------------
// OUTPUT:
//   myCar.describe()              → "I am a Toyota car"  (overridden method)
//   myCar instanceof Car          → true
//   myCar instanceof Vehicle      → true  (chain: myCar → Car.prototype → Vehicle.prototype)
//   myCar.constructor === Car     → true  (only because we reset it!)
//
// WHY reset constructor?
//   Car.prototype = Object.create(Vehicle.prototype) REPLACES Car.prototype.
//   The new object's constructor points to Vehicle, not Car.
//   We manually fix it: Car.prototype.constructor = Car.
//
// WHY Vehicle.call(this, "car")?
//   To run Vehicle's constructor code in the context of the Car instance,
//   so this.type = "car" is set on the new Car object (not on Vehicle.prototype).



// ----------------------------------------------------------
// A3. POLYFILL — 'new' keyword
// ----------------------------------------------------------
// Steps:
//   1. Create an object whose [[Prototype]] = Constructor.prototype
//   2. Call Constructor with 'this' = that object
//   3. If Constructor explicitly returns an object, return that; otherwise return our object

function myNew_A3(Constructor, ...args) {
  const obj = Object.create(Constructor.prototype); // step 1
  const result = Constructor.apply(obj, args);       // step 2
  // step 3: if constructor returns a non-null object, use it
  return result instanceof Object ? result : obj;
}

function Person_A3(name, age) { this.name = name; this.age = age; }
Person_A3.prototype.greet = function () { return `Hi, I'm ${this.name}`; };

const p_A3 = myNew_A3(Person_A3, "Sahil", 25);
console.log(p_A3.greet());            // "Hi, I'm Sahil"
console.log(p_A3 instanceof Person_A3); // true



// ----------------------------------------------------------
// A4. IMPLEMENTATION — Inheritance via Object.create (no class)
// ----------------------------------------------------------
// Object.create(Animal2) creates an object whose prototype IS Animal2.
// Then we add Dog-specific methods directly on that object.

const Animal2_A4 = {
  init(name) { this.name = name; return this; },
  speak() { return `${this.name} makes a sound.`; },
};

const Dog_A4 = Object.create(Animal2_A4);
Dog_A4.bark = function () { return `${this.name} barks!`; };

const myDog_A4 = Object.create(Dog_A4).init("Rex");
console.log(myDog_A4.speak()); // "Rex makes a sound."  (from Animal2)
console.log(myDog_A4.bark());  // "Rex barks!"          (from Dog)
// Prototype chain: myDog → Dog → Animal2 → Object.prototype → null



// ----------------------------------------------------------
// A5. Shared prototype property vs own instance property
// ----------------------------------------------------------
// Case 1 (hobbies as own property in constructor):
//   p2.hobbies → []  (p2 has its OWN hobbies array, unaffected by p1)
//
// Case 2 (hobbies on Person2.prototype — SHARED!):
//   p4.hobbies → ["Reading"]  (p3 and p4 SHARE the same array on the prototype!)
//
// WHY: When you do p3.hobbies.push(...), you're MUTATING the shared prototype
// array — not creating a new own property. p4 looks up the chain and sees
// the same modified array.
//
// LESSON: Never put mutable objects (arrays, objects) on the prototype.

function Person_A5a(name) { this.name = name; this.hobbies = []; }
const p1_A5 = new Person_A5a("Alice");
const p2_A5 = new Person_A5a("Bob");
p1_A5.hobbies.push("Reading");
console.log(p2_A5.hobbies); // []  ← unaffected (own property)

function Person_A5b(name) { this.name = name; }
Person_A5b.prototype.hobbies = [];
const p3_A5 = new Person_A5b("Alice");
const p4_A5 = new Person_A5b("Bob");
p3_A5.hobbies.push("Reading");
console.log(p4_A5.hobbies); // ["Reading"] ← SHARED mutation!



// ----------------------------------------------------------
// A6. POLYFILL — Object.create
// ----------------------------------------------------------
// Classic technique: create a temporary constructor, set its prototype,
// then instantiate it. Result: new object linked to proto without calling proto's constructor.

function myObjectCreate_A6(proto) {
  function F() {}
  F.prototype = proto;
  return new F();
}

const base_A6 = { greet() { return "hello"; } };
const child_A6 = myObjectCreate_A6(base_A6);
console.log(child_A6.greet());                             // "hello"
console.log(Object.getPrototypeOf(child_A6) === base_A6); // true



// ----------------------------------------------------------
// A7. instanceof and the prototype chain
// ----------------------------------------------------------
// OUTPUT:
//   b instanceof B         → true   (b's chain: b → B.prototype)
//   b instanceof A         → true   (b's chain: b → B.prototype → A.prototype)
//   b instanceof Object    → true   (everything inherits from Object.prototype)
//   B.prototype instanceof A → true (B.prototype was created with Object.create(A.prototype))
//
// instanceof checks: is Constructor.prototype anywhere in the object's chain?



// ----------------------------------------------------------
// A8. IMPLEMENTATION — ES6 class → prototype-based
// ----------------------------------------------------------

function Shape_A8(color) {
  this.color = color;
}
Shape_A8.prototype.describe = function () {
  return `A ${this.color} shape`;
};

function Circle_A8(color, radius) {
  Shape_A8.call(this, color);   // equivalent to super(color)
  this.radius = radius;
}

Circle_A8.prototype = Object.create(Shape_A8.prototype);
Circle_A8.prototype.constructor = Circle_A8;

Circle_A8.prototype.area = function () {
  return Math.PI * this.radius ** 2;
};

const circle_A8 = new Circle_A8("red", 5);
console.log(circle_A8.describe()); // "A red shape"
console.log(circle_A8.area());     // 78.539...
console.log(circle_A8 instanceof Shape_A8); // true



// ----------------------------------------------------------
// A9. Property shadowing — instance vs prototype lookup
// ----------------------------------------------------------
// OUTPUT:
//   g1.toString()          → "Phone"  (instance own property 'name' found first)
//   delete g1.name         → removes the OWN property
//   g1.toString() again    → "Unknown Gadget"  (falls through to prototype.name)
//
// After deleting the instance property, the prototype's 'name' is now visible.
// This is the prototype chain lookup in action.

function Gadget_A9(name) { this.name = name; }
Gadget_A9.prototype.name = "Unknown Gadget";
Gadget_A9.prototype.toString = function () { return this.name; };

const g1_A9 = new Gadget_A9("Phone");
console.log(g1_A9.toString()); // "Phone"
delete g1_A9.name;
console.log(g1_A9.toString()); // "Unknown Gadget"



// ----------------------------------------------------------
// A10. IMPLEMENTATION — Mixin pattern
// ----------------------------------------------------------
// Object.assign copies all enumerable own properties from source objects
// onto the target. This gives Duck instances access to fly() and swim()
// without needing a complex prototype chain.

const Flyable_A10  = { fly()  { return `${this.name} is flying!`; } };
const Swimmable_A10 = { swim() { return `${this.name} is swimming!`; } };

function Duck_A10(name) { this.name = name; }

Object.assign(Duck_A10.prototype, Flyable_A10, Swimmable_A10);

const duck_A10 = new Duck_A10("Donald");
console.log(duck_A10.fly());   // "Donald is flying!"
console.log(duck_A10.swim());  // "Donald is swimming!"

// NOTE: Mixins are a COPY — changes to Flyable after the fact won't affect Duck.
// This is fine for most use cases and is simpler than multi-level inheritance.
