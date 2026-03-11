// ============================================================
// TOPIC 4: Closures in JavaScript
// TYPE: Mix — Classic output gotchas + Implementation patterns
// ============================================================
// Definition: A closure is a function that "remembers" the variables
// from its outer scope even after the outer function has returned.
//
// Key use-cases in interviews:
//   - Data privacy / encapsulation
//   - Counter / stateful functions
//   - Memoization
//   - Function factories
//   - The classic var-in-loop gotcha
// ============================================================



// ----------------------------------------------------------
// Q1. OUTPUT BASED — The most classic closure interview question
// What gets logged after ~1 second? Why?
// Fix it in 3 different ways.
// ----------------------------------------------------------

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // 3 , 3 , 3
  }, 1000);
}

// Fix 1: Using 'let' instead of 'var'
// Fix 2: Using an IIFE
// Fix 3: Using .bind()



// ----------------------------------------------------------
// Q2. OUTPUT BASED — Closure over a shared variable reference
// Each call to outer() creates a SEPARATE closure scope.
// ----------------------------------------------------------

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const fn1 = outer();
const fn2 = outer();

fn1(); // 1
fn1(); // 2
fn2(); // 1
fn1(); // 3



// ----------------------------------------------------------
// Q3. OUTPUT BASED — What will be logged?
// (createFunctions shares the same 'i' variable via var)
// ----------------------------------------------------------

function createFunctions() {
  const funcs = [];
  for (var i = 0; i < 5; i++) {
    funcs.push(function () {
      return i;
    });
  }
  return funcs;
}

const fns = createFunctions();
console.log(fns[0]()); // 5
console.log(fns[3]()); // 5  ← Is it 3 or something else?



// ----------------------------------------------------------
// Q4. IMPLEMENTATION — Counter using closure
// ----------------------------------------------------------
// makeCounter(initialValue) returns an object with:
//   increment() — increments count by 1
//   decrement() — decrements count by 1
//   reset()     — resets count to the initial value
//   getCount()  — returns current count
// The 'count' variable must NOT be accessible from outside.

function makeCounter(initialValue = 0) {
  // Your code here
}

// const c = makeCounter(10);
// c.increment(); c.increment(); // 11, 12
// c.decrement();                // 11
// c.reset();
// console.log(c.getCount());    // 10



// ----------------------------------------------------------
// Q5. IMPLEMENTATION — Memoization using closure
// ----------------------------------------------------------
// memoize(fn) returns a new function that caches results.
// If called again with the same arguments, it returns the cached
// result WITHOUT calling fn again.

function memoize(fn) {
  // Your code here
}

// const square = memoize((n) => { console.log("Computing..."); return n * n; });
// square(5);  // logs "Computing..." → 25
// square(5);  // returns 25 (NO "Computing..." — from cache)
// square(6);  // logs "Computing..." → 36



// ----------------------------------------------------------
// Q6. IMPLEMENTATION — Function factory using closure
// ----------------------------------------------------------
// makeMultiplier(x) returns a function that multiplies any number by x.

function makeMultiplier(multiplier) {
  // Your code here
}

// const double = makeMultiplier(2);
// const triple = makeMultiplier(3);
// console.log(double(5)); // 10
// console.log(triple(5)); // 15



// ----------------------------------------------------------
// Q7. OUTPUT BASED — Private data with closure
// What gets logged? Can you access 'balance' from outside?
// ----------------------------------------------------------

function BankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) { balance += amount; },
    withdraw(amount) { balance -= amount; },
    getBalance() { return balance; },
  };
}

const account = BankAccount(100);
account.deposit(50);
account.withdraw(30);
console.log(account.getBalance()); // ?
console.log(account.balance);      // ?  ← Can you access it directly?



// ----------------------------------------------------------
// Q8. IMPLEMENTATION — once() function using closure
// ----------------------------------------------------------
// Returns a wrapper function that invokes fn only the first time it's called.
// Subsequent calls do nothing (returns undefined or the first result).

function once(fn) {
  // Your code here
}

// const connectDB = once(() => console.log("DB Connected!"));
// connectDB(); // "DB Connected!"
// connectDB(); // (nothing)
// connectDB(); // (nothing)



// ----------------------------------------------------------
// Q9. OUTPUT BASED — What gets logged and WHEN?
// (let creates a new binding per iteration — no closure problem)
// ----------------------------------------------------------

function delayedLog() {
  for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

delayedLog(); // 1 , 2 , 3
// What is logged after 1s, 2s, 3s?



// ----------------------------------------------------------
// Q10. IMPLEMENTATION — compose() using closure
// ----------------------------------------------------------
// compose(f, g) returns a new function where:
//   compose(f, g)(x) === f(g(x))
// g is applied first, then f is applied to its result.

function compose(f, g) {
  // Your code here
}

// const add1   = x => x + 1;
// const double = x => x * 2;
// const doubleThenAdd1 = compose(add1, double);
// console.log(doubleThenAdd1(3)); // add1(double(3)) = add1(6) = 7
