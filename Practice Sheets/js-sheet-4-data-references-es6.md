# JS Practice Sheet 4: Data, References & ES6+

**Difficulty:** Medium to Hard | **Time:** 2-3 hours | **Focus:** Output-based + Implementation

---

## Section A: == vs === & Truthy/Falsy (8 Questions)

### Q1. Predict the Output
```javascript
console.log(1 == '1');
console.log(1 === '1');
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
```

---

### Q2. Predict the Output
```javascript
console.log(null == undefined);
console.log(null === undefined);
console.log(null == 0);
console.log(undefined == 0);
```

---

### Q3. Predict the Output (Truthy/Falsy)
```javascript
const values = [0, '', null, undefined, NaN, false, [], {}, 'false', '0'];

values.forEach(val => {
  console.log(`${JSON.stringify(val)}: ${val ? 'truthy' : 'falsy'}`);
});
```

---

### Q4. Predict the Output
```javascript
console.log([] == false);
console.log([] == ![]);
console.log([] == 0);
console.log([] == '');
```

---

### Q5. Predict the Output
```javascript
console.log({} == '[object Object]');
console.log([1,2] == '1,2');
console.log([1] == 1);
console.log(['a'] == 'a');
```

---

### Q6. Predict the Output
```javascript
console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));
console.log(Number.isNaN(NaN));
console.log(isNaN('hello'));
console.log(Number.isNaN('hello'));
```

---

### Q7. Predict the Output
```javascript
const a = { valueOf: () => 2 };
const b = { toString: () => '2' };

console.log(a == 2);
console.log(b == 2);
console.log(a == '2');
console.log(a === 2);
```

---

### Q8. Implementation: Create a function to check deep equality
```javascript
// Implement deepEqual(a, b) that works for primitives, objects, arrays
// Should handle nested structures

function deepEqual(a, b) {
  // Your implementation
}

// Tests
console.log(deepEqual(1, 1)); // true
console.log(deepEqual([1, 2], [1, 2])); // true
console.log(deepEqual({ a: 1 }, { a: 1 })); // true
console.log(deepEqual({ a: [1, 2] }, { a: [1, 2] })); // true
console.log(deepEqual([1, 2], [2, 1])); // false
```

---

## Section B: Object & Array Reference Behavior (10 Questions)

### Q9. Predict the Output
```javascript
let a = [1, 2, 3];
let b = a;
b.push(4);
console.log(a);
console.log(b);
console.log(a === b);
```

---

### Q10. Predict the Output
```javascript
let a = [1, 2, 3];
let b = a;
b = [1, 2, 3, 4];
console.log(a);
console.log(b);
console.log(a === b);
```

---

### Q11. Predict the Output
```javascript
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = obj1;
const obj3 = { ...obj1 };

obj2.a = 100;
obj3.b.c = 300;

console.log(obj1.a);
console.log(obj1.b.c);
console.log(obj2.a);
console.log(obj3.a);
console.log(obj3.b.c);
```

---

### Q12. Predict the Output
```javascript
const arr = [{ id: 1 }, { id: 2 }];
const copy = [...arr];

copy[0].id = 100;
copy[1] = { id: 200 };

console.log(arr[0].id);
console.log(arr[1].id);
console.log(copy[0].id);
console.log(copy[1].id);
```

---

### Q13. Predict the Output
```javascript
function modify(obj, arr) {
  obj.x = 10;
  arr.push(4);
  
  obj = { x: 20 };
  arr = [5, 6, 7];
}

const myObj = { x: 1 };
const myArr = [1, 2, 3];

modify(myObj, myArr);

console.log(myObj);
console.log(myArr);
```

---

### Q14. Predict the Output
```javascript
const person = { name: 'John' };
const people = [person, person, person];

people[0].name = 'Jane';

console.log(people[1].name);
console.log(people[2].name);
console.log(person.name);
```

---

### Q15. Predict the Output
```javascript
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

console.log(arr1 == arr2);
console.log(arr1 === arr2);
console.log(JSON.stringify(arr1) === JSON.stringify(arr2));
```

---

### Q16. Predict the Output
```javascript
const original = { a: 1, b: [2, 3], c: { d: 4 } };
const clone1 = { ...original };
const clone2 = Object.assign({}, original);
const clone3 = JSON.parse(JSON.stringify(original));

original.a = 10;
original.b.push(5);
original.c.d = 40;

console.log(clone1.a, clone1.b, clone1.c.d);
console.log(clone2.a, clone2.b, clone2.c.d);
console.log(clone3.a, clone3.b, clone3.c.d);
```

---

### Q17. Predict the Output
```javascript
const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
console.log(a);
```

---

### Q18. Implementation: Check if two objects have same reference path changes
```javascript
// When does mutation affect the original? Trace through this:

const data = {
  users: [
    { name: 'Alice', settings: { theme: 'dark' } },
    { name: 'Bob', settings: { theme: 'light' } }
  ]
};

// Which of these will mutate `data`? Explain why.
const users = data.users;
users[0].name = 'Alicia';

const firstUser = data.users[0];
firstUser.settings.theme = 'blue';

const settings = { ...data.users[0].settings };
settings.theme = 'red';

const spreadUsers = [...data.users];
spreadUsers[0].name = 'Alan';
```

---

## Section C: Deep vs Shallow Copy (6 Questions)

### Q19. Implementation: Create shallow copy - multiple methods
```javascript
// Implement 3 different ways to create a shallow copy of an object
const original = { a: 1, b: [2, 3], c: { d: 4 } };

// Method 1: Spread operator
const shallow1 = // ?

// Method 2: Object.assign
const shallow2 = // ?

// Method 3: Object.fromEntries
const shallow3 = // ?
```

---

### Q20. Implementation: Deep clone without JSON
```javascript
// Implement deepClone that handles: objects, arrays, Date, null, primitives
// Note: JSON.parse/stringify fails with Date, undefined, functions, circular refs

function deepClone(obj) {
  // Your implementation
}

// Tests
const original = {
  a: 1,
  b: [1, 2, { c: 3 }],
  d: new Date(),
  e: { f: { g: 4 } }
};

const cloned = deepClone(original);
cloned.b[2].c = 100;
console.log(original.b[2].c); // Should still be 3
```

---

### Q21. Implementation: Deep clone with circular reference handling
```javascript
// Extend deepClone to handle circular references

function deepCloneWithCircular(obj, seen = new WeakMap()) {
  // Your implementation
}

// Test
const obj = { a: 1 };
obj.self = obj;

const cloned = deepCloneWithCircular(obj);
console.log(cloned.self === cloned); // true (circular maintained)
console.log(cloned.self === obj); // false (different object)
```

---

### Q22. Predict the Output
```javascript
const arr = [[1, 2], [3, 4]];
const flat = arr.flat();
const spread = [...arr];

arr[0].push(100);

console.log(flat);
console.log(spread);
```

---

### Q23. Predict the Output (JSON limitations)
```javascript
const original = {
  date: new Date('2024-01-01'),
  fn: function() { return 'hello'; },
  undef: undefined,
  symbol: Symbol('test'),
  infinity: Infinity,
  nan: NaN,
  nested: { a: 1 }
};

const clone = JSON.parse(JSON.stringify(original));

console.log(clone);
console.log(typeof clone.date);
console.log(clone.fn);
console.log('undef' in clone);
console.log('symbol' in clone);
console.log(clone.infinity);
console.log(clone.nan);
```

---

### Q24. Implementation: structuredClone alternative
```javascript
// Modern browsers have structuredClone. Explain its advantages over JSON method
// Then implement a polyfill for older browsers

function structuredClonePolyfill(obj) {
  // Your implementation
  // Should handle: Date, RegExp, Map, Set, ArrayBuffer, etc.
}
```

---

## Section D: Destructuring, Rest & Spread (10 Questions)

### Q25. Predict the Output
```javascript
const [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a, b, rest);

const [x, , y] = [1, 2, 3];
console.log(x, y);

const [first = 10, second = 20] = [1];
console.log(first, second);
```

---

### Q26. Predict the Output
```javascript
const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a, b, rest);

const { x: newX, y: newY = 10 } = { x: 1 };
console.log(newX, newY);
// console.log(x); // What happens?
```

---

### Q27. Predict the Output (Nested Destructuring)
```javascript
const user = {
  name: 'John',
  address: {
    city: 'NYC',
    coords: { lat: 40.7, lng: -74 }
  },
  tags: ['admin', 'user']
};

const { 
  name, 
  address: { city, coords: { lat } },
  tags: [firstTag]
} = user;

console.log(name, city, lat, firstTag);
// console.log(address); // What happens?
// console.log(coords); // What happens?
```

---

### Q28. Predict the Output
```javascript
function greet({ name = 'Guest', age } = {}) {
  console.log(`${name} is ${age}`);
}

greet({ name: 'John', age: 30 });
greet({ age: 25 });
greet({});
greet();
```

---

### Q29. Predict the Output (Spread behavior)
```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged);

const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2, 5];
console.log(combined);
```

---

### Q30. Predict the Output
```javascript
const arr = [1, 2, 3];
const [head, ...tail] = arr;
console.log(head, tail);

const obj = { a: 1, b: 2, c: 3 };
const { a, ...others } = obj;
console.log(a, others);
```

---

### Q31. Implementation: Swap variables using destructuring
```javascript
// Swap a and b without using temp variable
let a = 1;
let b = 2;

// Your code here

console.log(a, b); // 2, 1
```

---

### Q32. Implementation: Extract nested properties safely
```javascript
// Extract deeply nested value with defaults
const response = {
  data: {
    user: {
      profile: {
        name: 'John'
      }
    }
  }
};

// Extract name with default 'Anonymous' if any level is missing
// Using destructuring with defaults

const { /* your destructuring */ } = response;
```

---

### Q33. Predict the Output
```javascript
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3));
console.log(sum(...[1, 2, 3]));
console.log(sum(...[1, 2], 3, ...[4, 5]));
```

---

### Q34. Predict the Output (Common Gotcha)
```javascript
const arr = [1, 2, 3];
const obj = { ...arr };
console.log(obj);

const str = 'hello';
const chars = [...str];
console.log(chars);

const num = 123;
// const digits = [...num]; // What happens?
```

---

## Section E: Map, Set, WeakMap, WeakSet (10 Questions)

### Q35. Predict the Output (Map basics)
```javascript
const map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('a', 3);

console.log(map.get('a'));
console.log(map.size);
console.log([...map]);
```

---

### Q36. Predict the Output (Map with object keys)
```javascript
const map = new Map();
const obj1 = { id: 1 };
const obj2 = { id: 1 };

map.set(obj1, 'first');
map.set(obj2, 'second');

console.log(map.size);
console.log(map.get(obj1));
console.log(map.get(obj2));
console.log(map.get({ id: 1 }));
```

---

### Q37. Predict the Output (Set basics)
```javascript
const set = new Set([1, 2, 2, 3, 3, 3]);

console.log(set.size);
console.log([...set]);
console.log(set.has(2));

set.add(2);
console.log(set.size);
```

---

### Q38. Predict the Output (Set with objects)
```javascript
const set = new Set();
const obj = { a: 1 };

set.add(obj);
set.add(obj);
set.add({ a: 1 });

console.log(set.size);
```

---

### Q39. Implementation: Remove duplicates from array
```javascript
// Use Set to remove duplicates
const arr = [1, 2, 2, 3, 3, 3, 4];

// Method 1: Set + spread
const unique1 = // ?

// Method 2: Set + Array.from
const unique2 = // ?
```

---

### Q40. Predict the Output (WeakMap behavior)
```javascript
const weakMap = new WeakMap();
let obj = { name: 'test' };

weakMap.set(obj, 'value');
console.log(weakMap.get(obj));

obj = null;
// What happens to the WeakMap entry?
// Can we iterate over WeakMap?

// weakMap.set('key', 'value'); // What happens?
```

---

### Q41. Implementation: When to use WeakMap?
```javascript
// Use case: Private data for objects

// Implement a way to store private data for objects
// that doesn't prevent garbage collection

const privateData = new WeakMap();

class User {
  constructor(name, password) {
    // Store password privately
    // Your implementation
  }
  
  checkPassword(input) {
    // Your implementation
  }
}

const user = new User('John', 'secret123');
console.log(user.name); // 'John'
console.log(user.password); // undefined
console.log(user.checkPassword('wrong')); // false
console.log(user.checkPassword('secret123')); // true
```

---

### Q42. Predict the Output (Map vs Object)
```javascript
// What are the differences?
const obj = {};
const map = new Map();

// Keys
obj[{}] = 'object key';
map.set({}, 'object key 1');
map.set({}, 'object key 2');

console.log(Object.keys(obj));
console.log(map.size);

// Iteration order
const obj2 = { 2: 'b', 1: 'a', 3: 'c' };
console.log(Object.keys(obj2));

const map2 = new Map();
map2.set(2, 'b');
map2.set(1, 'a');
map2.set(3, 'c');
console.log([...map2.keys()]);
```

---

### Q43. Implementation: LRU Cache using Map
```javascript
// Implement an LRU (Least Recently Used) Cache
// Map maintains insertion order, use this property

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  
  get(key) {
    // Your implementation
    // Return -1 if not found
    // Move to end if found (most recently used)
  }
  
  put(key, value) {
    // Your implementation
    // Remove oldest if at capacity
  }
}

// Test
const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // 1
cache.put(3, 3); // evicts key 2
console.log(cache.get(2)); // -1
```

---

### Q44. Predict the Output (Set operations)
```javascript
const a = new Set([1, 2, 3]);
const b = new Set([2, 3, 4]);

// Union
const union = new Set([...a, ...b]);
console.log([...union]);

// Intersection
const intersection = new Set([...a].filter(x => b.has(x)));
console.log([...intersection]);

// Difference
const difference = new Set([...a].filter(x => !b.has(x)));
console.log([...difference]);
```

---

## Bonus: ES6+ Features Mixed

### Q45. Predict the Output (Optional Chaining & Nullish Coalescing)
```javascript
const obj = {
  a: {
    b: null,
    c: 0,
    d: ''
  }
};

console.log(obj?.a?.b);
console.log(obj?.a?.b ?? 'default');
console.log(obj?.a?.c ?? 'default');
console.log(obj?.a?.c || 'default');
console.log(obj?.a?.d ?? 'default');
console.log(obj?.a?.d || 'default');
console.log(obj?.x?.y?.z ?? 'default');
```

---

### Q46. Predict the Output (Symbol)
```javascript
const sym1 = Symbol('description');
const sym2 = Symbol('description');

console.log(sym1 === sym2);
console.log(sym1.description === sym2.description);

const obj = {
  [sym1]: 'value1',
  [sym2]: 'value2',
  regular: 'value3'
};

console.log(Object.keys(obj));
console.log(Object.getOwnPropertySymbols(obj));
console.log(obj[sym1]);
```

---

### Q47. Predict the Output (Object methods)
```javascript
const obj = { a: 1, b: 2, c: 3 };

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

const fromEntries = Object.fromEntries([['x', 1], ['y', 2]]);
console.log(fromEntries);
```

---

### Q48. Implementation: Object freeze vs seal
```javascript
// Explain and demonstrate the difference

const frozen = Object.freeze({ a: 1, nested: { b: 2 } });
const sealed = Object.seal({ a: 1, nested: { b: 2 } });

// What can you do with each?
// Test mutations, additions, deletions
// Is it shallow or deep?
```

---

## Answer Verification Guide

1. **For reference questions**: Draw a memory diagram showing variables and their references
2. **For type coercion**: Know the abstract equality algorithm
3. **For ES6+ features**: Test in browser console
4. **For implementations**: Test edge cases (empty arrays, null values, etc.)

---

**Interview Pro Tip:** 
- Always clarify if interviewer wants shallow or deep copy
- Know that `JSON.parse(JSON.stringify())` has limitations
- Understand when to use Map vs Object, Set vs Array
- WeakMap/WeakSet are for memory-sensitive scenarios with object keys

