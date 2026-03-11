# JS Practice Sheet 1: Execution, Scope & Memory

**Difficulty:** Medium to Hard | **Time:** 2-3 hours | **Focus:** Output-based + Implementation

---

## Section A: Execution Context & Call Stack (8 Questions)

### Q1. Predict the Output
```javascript
var a = 10;
function outer() {
  console.log(a);
  var a = 20;
  console.log(a);
}
outer();
console.log(a);
```

---

### Q2. Predict the Output
```javascript
function first() {
  console.log('first');
  second();
  console.log('first end');
}

function second() {
  console.log('second');
  third();
  console.log('second end');
}

function third() {
  console.log('third');
}

first();
```

---

### Q3. Predict the Output
```javascript
var x = 1;
function a() {
  var x = 2;
  b();
}
function b() {
  console.log(x);
}
a();
```

---

### Q4. Predict the Output
```javascript
console.log(typeof a);
console.log(typeof b);
var a = 10;
function b() {}
```

---

### Q5. Predict the Output
```javascript
var a = 1;
function outer() {
  var a = 2;
  function inner() {
    a++;
    var a = 3;
    console.log(a);
  }
  inner();
  console.log(a);
}
outer();
console.log(a);
```

---

### Q6. Predict the Output
```javascript
function test() {
  console.log(1);
  return;
  console.log(2);
}
console.log(test());
```

---

### Q7. Predict the Output (Tricky)
```javascript
(function() {
  var a = b = 3;
})();

console.log(typeof a);
console.log(typeof b);
```

---

### Q8. Implementation: Create a function that tracks call stack depth
```javascript
// Implement a function that logs the current depth of nested function calls
// Example:
// trackDepth(() => {
//   trackDepth(() => {
//     trackDepth(() => {
//       // should log: Depth: 3
//     });
//   });
// });
```

---

## Section B: var, let, const + Hoisting + TDZ (10 Questions)

### Q9. Predict the Output
```javascript
console.log(a);
console.log(b);
console.log(c);
var a = 1;
let b = 2;
const c = 3;
```

---

### Q10. Predict the Output
```javascript
let a = 1;
{
  console.log(a);
  let a = 2;
}
```

---

### Q11. Predict the Output
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

---

### Q12. Predict the Output
```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

---

### Q13. Predict the Output
```javascript
const obj = { a: 1 };
obj.a = 2;
obj.b = 3;
console.log(obj);

obj = { c: 4 };
```

---

### Q14. Predict the Output
```javascript
var a = 1;
var a = 2;
console.log(a);

let b = 1;
let b = 2;
console.log(b);
```

---

### Q15. Predict the Output
```javascript
function test() {
  console.log(a);
  console.log(foo());
  
  var a = 1;
  function foo() {
    return 2;
  }
}
test();
```

---

### Q16. Predict the Output (TDZ Edge Case)
```javascript
let x = x + 1;
console.log(x);
```

---

### Q17. Predict the Output
```javascript
const arr = [1, 2, 3];
arr.push(4);
arr[0] = 10;
console.log(arr);
arr = [5, 6];
```

---

### Q18. Implementation: Fix this code to print 0, 1, 2
```javascript
// Current code prints 3, 3, 3 — Fix it using TWO different methods
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
```

---

## Section C: Lexical Scope & Scope Chain (6 Questions)

### Q19. Predict the Output
```javascript
var x = 10;
function outer() {
  var x = 20;
  function inner() {
    var x = 30;
    console.log(x);
  }
  inner();
  console.log(x);
}
outer();
console.log(x);
```

---

### Q20. Predict the Output
```javascript
var a = 10;
function foo() {
  console.log(a);
}

function bar() {
  var a = 20;
  foo();
}

bar();
```

---

### Q21. Predict the Output
```javascript
function createCounter() {
  let count = 0;
  return {
    increment: function() { count++; },
    getCount: function() { return count; }
  };
}

const counter1 = createCounter();
const counter2 = createCounter();
counter1.increment();
counter1.increment();
counter2.increment();
console.log(counter1.getCount());
console.log(counter2.getCount());
```

---

### Q22. Predict the Output
```javascript
let x = 1;
function a() {
  let y = 2;
  function b() {
    let z = 3;
    console.log(x + y + z);
  }
  b();
}
a();
```

---

### Q23. Predict the Output (Scope Chain Lookup)
```javascript
var a = 1;
function outer() {
  console.log(a);
  function inner() {
    console.log(a);
    var a = 2;
  }
  inner();
}
outer();
```

---

### Q24. Implementation: Explain scope chain lookup
```javascript
// What is the scope chain for function `c`? List all scopes it has access to.
var global = "global";
function a() {
  var aVar = "a";
  function b() {
    var bVar = "b";
    function c() {
      var cVar = "c";
      console.log(global, aVar, bVar, cVar);
    }
    c();
  }
  b();
}
a();
```

---

## Section D: Closures - Behavior Focus (10 Questions)

### Q25. Predict the Output
```javascript
function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  a = 20;
  return inner;
}
var fn = outer();
fn();
```

---

### Q26. Predict the Output
```javascript
function createFunctions() {
  var result = [];
  for (var i = 0; i < 3; i++) {
    result.push(function() {
      console.log(i);
    });
  }
  return result;
}
var funcs = createFunctions();
funcs[0]();
funcs[1]();
funcs[2]();
```

---

### Q27. Implementation: Fix Q26 using closures (IIFE approach)
```javascript
// Rewrite to print 0, 1, 2 using IIFE
```

---

### Q28. Predict the Output
```javascript
function outer() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  };
}

const fn1 = outer();
const fn2 = outer();
fn1();
fn1();
fn2();
fn1();
```

---

### Q29. Implementation: Create a private counter using closure
```javascript
// Implement createCounter that returns an object with:
// - increment(): increases count by 1
// - decrement(): decreases count by 1
// - getCount(): returns current count
// - reset(): resets count to 0
// Count should NOT be directly accessible from outside
```

---

### Q30. Predict the Output
```javascript
function multiply(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    };
  };
}
console.log(multiply(2)(3)(4));
```

---

### Q31. Implementation: Create a memoize function using closure
```javascript
// Implement memoize(fn) that caches results of expensive function calls
// Example:
// const expensiveAdd = (a, b) => { console.log('computing'); return a + b; }
// const memoizedAdd = memoize(expensiveAdd);
// memoizedAdd(1, 2) // logs 'computing', returns 3
// memoizedAdd(1, 2) // returns 3 (no log, from cache)
// memoizedAdd(2, 3) // logs 'computing', returns 5
```

---

### Q32. Predict the Output (Closure + setTimeout)
```javascript
for (var i = 1; i <= 3; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j);
    }, j * 1000);
  })(i);
}
```

---

### Q33. Implementation: Create once() function
```javascript
// Implement once(fn) that allows fn to be called only once
// Subsequent calls should return the result of first call
// Example:
// const onceAdd = once((a, b) => a + b);
// onceAdd(1, 2) // returns 3
// onceAdd(5, 6) // returns 3 (first result)
```

---

### Q34. Predict the Output
```javascript
let a = [];
for (var i = 0; i < 3; i++) {
  a[i] = (function(i) {
    return function() {
      return i * 2;
    };
  })(i);
}
console.log(a[0]());
console.log(a[1]());
console.log(a[2]());
```

---

## Section E: Shadowing & Illegal Shadowing (4 Questions)

### Q35. Predict the Output
```javascript
var a = 10;
{
  var a = 20;
  console.log(a);
}
console.log(a);
```

---

### Q36. Predict the Output
```javascript
let a = 10;
{
  let a = 20;
  console.log(a);
}
console.log(a);
```

---

### Q37. Which is Illegal Shadowing? Why?
```javascript
// Case A
let a = 10;
{
  var a = 20;
}

// Case B
var b = 10;
{
  let b = 20;
}

// Case C
let c = 10;
function foo() {
  var c = 20;
}
```

---

### Q38. Predict the Output
```javascript
var x = 1;
let y = 2;
const z = 3;

{
  var x = 10;
  let y = 20;
  const z = 30;
  console.log(x, y, z);
}

console.log(x, y, z);
```

---

## Section F: Garbage Collection & Memory Leaks (4 Questions)

### Q39. Identify the Memory Leak
```javascript
let theThing = null;
const replaceThing = function() {
  const originalThing = theThing;
  const unused = function() {
    if (originalThing) console.log("hi");
  };
  theThing = {
    longStr: new Array(1000000).join('*'),
    someMethod: function() {
      console.log("message");
    }
  };
};
setInterval(replaceThing, 1000);
```

---

### Q40. Identify Memory Leak Issues
```javascript
// What's wrong with this code? How to fix?
class UserCard {
  constructor(name) {
    this.name = name;
    document.getElementById('btn').addEventListener('click', () => {
      console.log(this.name);
    });
  }
}

// User navigates away, component should be garbage collected
// But is it? Why/Why not?
```

---

### Q41. Implementation: Fix this memory leak
```javascript
// Fix the memory leak in this timer setup
function setupTimer() {
  const hugeData = new Array(10000).fill('data');
  
  setInterval(function() {
    console.log(hugeData.length);
  }, 1000);
}

setupTimer();
// How would you properly clean this up?
```

---

### Q42. Predict: Will this be garbage collected?
```javascript
function createClosure() {
  const largeArray = new Array(1000000).fill('x');
  
  return function() {
    console.log('Hello');
  };
}

const fn = createClosure();
// Is largeArray garbage collected? Why/Why not?
// Answer depends on JS engine optimization - explain both cases
```

---

## Bonus Challenge Questions

### Q43. Predict the Output (Everything Combined)
```javascript
var a = 1;
function outer() {
  console.log(a);
  var a = 2;
  function inner() {
    console.log(a);
    let a = 3;
  }
  inner();
}
outer();
```

---

### Q44. Implementation: Create a secure bank account using closures
```javascript
// Implement createBankAccount(initialBalance) that returns:
// - deposit(amount): adds amount to balance
// - withdraw(amount): subtracts amount if sufficient balance, else error
// - getBalance(): returns current balance
// Balance should NEVER be directly accessible or modifiable
// All methods should log transactions
```

---

### Q45. Predict the Output (Ultimate Challenge)
```javascript
var x = 10;
function foo() {
  console.log(x);
  var x = 20;
  console.log(x);
  function x() {}
  console.log(x);
}
foo();
```

---

## Answer Key Format

After practicing, verify your answers:
1. Run each code snippet in browser console
2. Trace execution context step by step
3. Identify hoisting, scope chain, closure references
4. For implementations, test edge cases

---

**Pro Tip:** For interview, always explain your thought process:
1. What gets hoisted?
2. What is the scope chain?
3. Is closure involved?
4. What's in the call stack?

