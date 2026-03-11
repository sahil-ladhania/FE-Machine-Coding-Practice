# JS Practice Sheet 2: Functions & `this` Keyword

**Difficulty:** Medium to Hard | **Time:** 2-3 hours | **Focus:** Output-based + Implementation

---

## Section A: Function Declarations vs Expressions (6 Questions)

### Q1. Predict the Output
```javascript
console.log(foo());
console.log(bar());

function foo() {
  return 'foo';
}

var bar = function() {
  return 'bar';
};
```

---

### Q2. Predict the Output
```javascript
var a = function b() {
  console.log(typeof b);
};
a();
console.log(typeof b);
```

---

### Q3. Predict the Output
```javascript
console.log(typeof foo);
console.log(typeof bar);

if (true) {
  function foo() { return 1; }
  var bar = function() { return 2; };
}

console.log(typeof foo);
console.log(typeof bar);
```

---

### Q4. Predict the Output
```javascript
var foo = function bar() {
  return 'hello';
};

console.log(foo());
console.log(bar());
```

---

### Q5. Predict the Output
```javascript
function outer() {
  console.log(inner);
  
  var inner = function() {
    return 'inner function';
  };
  
  console.log(inner);
}
outer();
```

---

### Q6. Implementation: Convert to the other form
```javascript
// Convert function declaration to expression and vice versa
// Explain when to use which

// Declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Expression (convert above to this)


// When would you prefer one over the other?
```

---

## Section B: `this` Binding Rules (15 Questions)

### Q7. Predict the Output (Default Binding)
```javascript
function showThis() {
  console.log(this);
}
showThis();
```

---

### Q8. Predict the Output (Default Binding - Strict Mode)
```javascript
'use strict';
function showThis() {
  console.log(this);
}
showThis();
```

---

### Q9. Predict the Output (Implicit Binding)
```javascript
const obj = {
  name: 'John',
  greet: function() {
    console.log(this.name);
  }
};
obj.greet();
```

---

### Q10. Predict the Output (Implicit Binding Lost)
```javascript
const obj = {
  name: 'John',
  greet: function() {
    console.log(this.name);
  }
};

const greetFn = obj.greet;
greetFn();
```

---

### Q11. Predict the Output (Nested Object)
```javascript
const obj = {
  name: 'outer',
  inner: {
    name: 'inner',
    getName: function() {
      console.log(this.name);
    }
  }
};
obj.inner.getName();

const fn = obj.inner.getName;
fn();
```

---

### Q12. Predict the Output (Explicit Binding - call)
```javascript
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: 'Alice' };
greet.call(person, 'Hello', '!');
```

---

### Q13. Predict the Output (Explicit Binding - apply)
```javascript
function introduce(greeting, age) {
  console.log(`${greeting}, I'm ${this.name}, ${age} years old`);
}

const person = { name: 'Bob' };
introduce.apply(person, ['Hi', 25]);
```

---

### Q14. Predict the Output (Explicit Binding - bind)
```javascript
const obj = {
  x: 10,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = obj.getX;
const boundGetX = unboundGetX.bind(obj);

console.log(unboundGetX());
console.log(boundGetX());
```

---

### Q15. Predict the Output (new Binding)
```javascript
function Person(name) {
  this.name = name;
  console.log(this);
}

const p1 = new Person('John');
const p2 = Person('Jane');
console.log(p1);
console.log(p2);
```

---

### Q16. Predict the Output (Binding Priority)
```javascript
function foo() {
  console.log(this.a);
}

const obj1 = { a: 2, foo };
const obj2 = { a: 3, foo };

obj1.foo();
obj2.foo();

obj1.foo.call(obj2);
obj2.foo.call(obj1);
```

---

### Q17. Predict the Output (Hard Binding vs new)
```javascript
function foo(something) {
  this.a = something;
}

const obj1 = {};
const bar = foo.bind(obj1);
bar(2);
console.log(obj1.a);

const baz = new bar(3);
console.log(obj1.a);
console.log(baz.a);
```

---

### Q18. Predict the Output (this in Callback)
```javascript
const obj = {
  name: 'Test',
  items: [1, 2, 3],
  process: function() {
    this.items.forEach(function(item) {
      console.log(this.name + ': ' + item);
    });
  }
};
obj.process();
```

---

### Q19. Implementation: Fix Q18 - Three different ways
```javascript
// Fix the above code to correctly log "Test: 1", "Test: 2", "Test: 3"
// Method 1: Using that/self pattern
// Method 2: Using bind
// Method 3: Using arrow function
```

---

### Q20. Predict the Output (this in setTimeout)
```javascript
const obj = {
  count: 0,
  increment: function() {
    setTimeout(function() {
      this.count++;
      console.log(this.count);
    }, 100);
  }
};
obj.increment();
```

---

### Q21. Predict the Output (Complex)
```javascript
const obj = {
  a: 1,
  b: function() {
    console.log(this.a);
  },
  c: {
    a: 2,
    d: function() {
      console.log(this.a);
    }
  }
};

obj.b();
obj.c.d();
const fn = obj.c.d;
fn();
```

---

## Section C: call, apply, bind Deep Dive (8 Questions)

### Q22. Implementation: Implement your own call
```javascript
// Implement Function.prototype.myCall
// Should work exactly like native call

Function.prototype.myCall = function(context, ...args) {
  // Your implementation
};

// Test
function greet(greeting) {
  return `${greeting}, ${this.name}`;
}
const obj = { name: 'Test' };
console.log(greet.myCall(obj, 'Hello')); // "Hello, Test"
```

---

### Q23. Implementation: Implement your own apply
```javascript
// Implement Function.prototype.myApply
// Should work exactly like native apply

Function.prototype.myApply = function(context, args) {
  // Your implementation
};

// Test
function sum(a, b, c) {
  return this.base + a + b + c;
}
const obj = { base: 10 };
console.log(sum.myApply(obj, [1, 2, 3])); // 16
```

---

### Q24. Implementation: Implement your own bind
```javascript
// Implement Function.prototype.myBind
// Should work with partial application too

Function.prototype.myBind = function(context, ...args) {
  // Your implementation
};

// Test
function multiply(a, b) {
  return this.factor * a * b;
}
const obj = { factor: 2 };
const bound = multiply.myBind(obj, 3);
console.log(bound(4)); // 24 (2 * 3 * 4)
```

---

### Q25. Predict the Output (Multiple binds)
```javascript
function foo() {
  console.log(this.a);
}

const obj1 = { a: 1 };
const obj2 = { a: 2 };

const bar = foo.bind(obj1);
const baz = bar.bind(obj2);

baz();
```

---

### Q26. Predict the Output (call/apply with primitives)
```javascript
function showThis() {
  console.log(this);
  console.log(typeof this);
}

showThis.call(5);
showThis.call('hello');
showThis.call(null);
showThis.call(undefined);
```

---

### Q27. Predict the Output (Strict mode with call)
```javascript
'use strict';
function showThis() {
  console.log(this);
}

showThis.call(null);
showThis.call(undefined);
showThis.call(5);
```

---

### Q28. Implementation: Create a partial application function
```javascript
// Implement partial(fn, ...presetArgs) that pre-fills some arguments
// Example:
// function add(a, b, c) { return a + b + c; }
// const add5 = partial(add, 5);
// add5(10, 15) // 30
// const add5and10 = partial(add, 5, 10);
// add5and10(15) // 30
```

---

### Q29. Predict the Output
```javascript
const obj = {
  a: 1,
  getA: function() {
    return this.a;
  }
};

const getA = obj.getA;
const boundGetA = getA.bind(obj);
const boundAgain = boundGetA.bind({ a: 100 });

console.log(obj.getA());
console.log(getA());
console.log(boundGetA());
console.log(boundAgain());
```

---

## Section D: Arrow Functions vs Normal Functions (10 Questions)

### Q30. Predict the Output
```javascript
const obj = {
  name: 'arrow',
  regular: function() {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  }
};

obj.regular();
obj.arrow();
```

---

### Q31. Predict the Output
```javascript
const obj = {
  name: 'outer',
  inner: {
    name: 'inner',
    arrow: () => console.log(this.name),
    regular: function() {
      console.log(this.name);
    }
  }
};

obj.inner.arrow();
obj.inner.regular();
```

---

### Q32. Predict the Output (Arrow in method)
```javascript
const obj = {
  count: 0,
  increment: function() {
    const addOne = () => {
      this.count++;
    };
    addOne();
  }
};

obj.increment();
obj.increment();
console.log(obj.count);
```

---

### Q33. Predict the Output (Arrow with call/apply/bind)
```javascript
const arrow = () => {
  console.log(this);
};

const obj = { name: 'test' };

arrow.call(obj);
arrow.apply(obj);
const bound = arrow.bind(obj);
bound();
```

---

### Q34. Predict the Output (Arrow as constructor)
```javascript
const Person = (name) => {
  this.name = name;
};

try {
  const p = new Person('John');
  console.log(p);
} catch (e) {
  console.log(e.message);
}
```

---

### Q35. Predict the Output (Arrow in callback)
```javascript
const obj = {
  items: [1, 2, 3],
  multiplier: 2,
  multiply: function() {
    return this.items.map(item => item * this.multiplier);
  }
};

console.log(obj.multiply());
```

---

### Q36. Predict the Output (Nested arrows)
```javascript
const obj = {
  name: 'outer',
  method: function() {
    const inner = () => {
      const deepInner = () => {
        console.log(this.name);
      };
      deepInner();
    };
    inner();
  }
};
obj.method();
```

---

### Q37. Predict the Output (Arrow + setTimeout)
```javascript
const obj = {
  name: 'Test',
  greetLater: function() {
    setTimeout(() => {
      console.log('Hello, ' + this.name);
    }, 100);
  }
};
obj.greetLater();
```

---

### Q38. Implementation: When to use arrow vs regular?
```javascript
// Refactor this object - decide which methods should be arrow vs regular
const calculator = {
  value: 0,
  
  // Which should be regular, which arrow?
  add: function(n) { /* ... */ },
  subtract: function(n) { /* ... */ },
  
  // Event handler
  handleClick: function() { /* ... */ },
  
  // Helper inside method
  processItems: function(items) {
    return items.map(function(item) {
      return item * this.value;
    });
  }
};
```

---

### Q39. Predict the Output
```javascript
function outer() {
  const arrow = () => {
    console.log(this.x);
  };
  return arrow;
}

const obj1 = { x: 1, getArrow: outer };
const obj2 = { x: 2 };

const arrow1 = obj1.getArrow();
arrow1();
arrow1.call(obj2);
```

---

## Section E: Currying & Partial Application (6 Questions)

### Q40. Implementation: Create a curry function
```javascript
// Implement curry that converts f(a, b, c) to f(a)(b)(c)
// Should work for any number of arguments

function curry(fn) {
  // Your implementation
}

// Test
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6
```

---

### Q41. Predict the Output
```javascript
const multiply = (a) => (b) => (c) => a * b * c;

const result1 = multiply(2)(3)(4);
const multiplyBy2 = multiply(2);
const multiplyBy2And3 = multiplyBy2(3);
const result2 = multiplyBy2And3(4);

console.log(result1);
console.log(result2);
```

---

### Q42. Implementation: Create an infinite currying sum
```javascript
// Implement a sum function that works like this:
// sum(1)(2)(3)() => 6
// sum(1)(2)(3)(4)(5)() => 15
// Empty call () returns the result

function sum(a) {
  // Your implementation
}
```

---

### Q43. Implementation: Create a pipe function
```javascript
// Implement pipe that chains functions left to right
// pipe(f, g, h)(x) = h(g(f(x)))

function pipe(...fns) {
  // Your implementation
}

// Test
const add10 = x => x + 10;
const multiply2 = x => x * 2;
const subtract5 = x => x - 5;

const transform = pipe(add10, multiply2, subtract5);
console.log(transform(5)); // ((5 + 10) * 2) - 5 = 25
```

---

### Q44. Implementation: Create a compose function
```javascript
// Implement compose that chains functions right to left
// compose(f, g, h)(x) = f(g(h(x)))

function compose(...fns) {
  // Your implementation
}

// Test
const add10 = x => x + 10;
const multiply2 = x => x * 2;
const subtract5 = x => x - 5;

const transform = compose(subtract5, multiply2, add10);
console.log(transform(5)); // ((5 + 10) * 2) - 5 = 25
```

---

### Q45. Predict the Output
```javascript
const calc = {
  operate: function(a) {
    return function(b) {
      return function(c) {
        return a + b + c + this.base;
      }.bind(this);
    }.bind(this);
  },
  base: 10
};

console.log(calc.operate(1)(2)(3));
```

---

## Section F: Higher-Order Functions (6 Questions)

### Q46. Implementation: Implement your own map
```javascript
// Implement Array.prototype.myMap

Array.prototype.myMap = function(callback, thisArg) {
  // Your implementation
};

// Test
const arr = [1, 2, 3];
const doubled = arr.myMap(function(item, index, array) {
  return item * 2;
});
console.log(doubled); // [2, 4, 6]
```

---

### Q47. Implementation: Implement your own filter
```javascript
// Implement Array.prototype.myFilter

Array.prototype.myFilter = function(callback, thisArg) {
  // Your implementation
};

// Test
const arr = [1, 2, 3, 4, 5];
const evens = arr.myFilter(item => item % 2 === 0);
console.log(evens); // [2, 4]
```

---

### Q48. Implementation: Implement your own reduce
```javascript
// Implement Array.prototype.myReduce

Array.prototype.myReduce = function(callback, initialValue) {
  // Your implementation
};

// Test
const arr = [1, 2, 3, 4];
const sum = arr.myReduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10
```

---

### Q49. Implementation: Create a once function
```javascript
// Implement once(fn) - fn can only be called once
// Subsequent calls return first call's result

function once(fn) {
  // Your implementation
}

// Test
const addOnce = once((a, b) => a + b);
console.log(addOnce(2, 3)); // 5
console.log(addOnce(10, 20)); // 5 (cached)
```

---

### Q50. Implementation: Create a debounce function
```javascript
// Implement debounce(fn, delay)
// Only executes fn after delay ms of no calls

function debounce(fn, delay) {
  // Your implementation
}

// Test
const log = debounce((msg) => console.log(msg), 1000);
log('hello');
log('world');
// After 1000ms, only logs 'world'
```

---

### Q51. Implementation: Create a throttle function
```javascript
// Implement throttle(fn, limit)
// Executes fn at most once per limit ms

function throttle(fn, limit) {
  // Your implementation
}

// Test
const log = throttle((msg) => console.log(msg), 1000);
log('1'); // logs immediately
log('2'); // ignored
log('3'); // ignored
// After 1000ms, can log again
```

---

## Bonus: Combined Concepts

### Q52. Predict the Output (Ultimate this Challenge)
```javascript
var name = 'global';

const obj = {
  name: 'obj',
  
  regular: function() {
    console.log('1:', this.name);
    
    const arrow = () => {
      console.log('2:', this.name);
    };
    
    function inner() {
      console.log('3:', this.name);
    }
    
    arrow();
    inner();
  },
  
  arrow: () => {
    console.log('4:', this.name);
  }
};

obj.regular();
obj.arrow();

const detached = obj.regular;
detached();
```

---

## Answer Verification Tips

1. **For `this` questions**: Always identify the call site, not where the function is defined
2. **For arrow functions**: Look for the enclosing scope at definition time
3. **For bind**: Remember bind creates a new function, and binding is permanent
4. **For HOF implementations**: Handle edge cases (empty arrays, no initial value, etc.)

---

**Interview Pro Tip:** When explaining `this` binding:
1. Identify: Is it arrow or regular function?
2. If arrow: What was `this` in enclosing scope at definition?
3. If regular: What is the call site pattern?
   - `new` binding? → newly created object
   - explicit (call/apply/bind)? → specified object
   - implicit (obj.method())? → obj
   - default? → global (or undefined in strict mode)

