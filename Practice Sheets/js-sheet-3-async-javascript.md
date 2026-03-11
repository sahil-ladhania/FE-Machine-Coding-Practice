# JS Practice Sheet 3: Async JavaScript (Highest Rejection Area)

**Difficulty:** Medium to Hard | **Time:** 3-4 hours | **Focus:** Output-based + Implementation

---

## Section A: Event Loop, Call Stack, Microtasks & Task Queue (12 Questions)

### Q1. Predict the Output
```javascript
console.log('1');

setTimeout(() => {
  console.log('2');
}, 0);

console.log('3');
```

---

### Q2. Predict the Output
```javascript
console.log('start');

setTimeout(() => console.log('timeout'), 0);

Promise.resolve().then(() => console.log('promise'));

console.log('end');
```

---

### Q3. Predict the Output
```javascript
console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve()
  .then(() => console.log('3'))
  .then(() => console.log('4'));

console.log('5');
```

---

### Q4. Predict the Output (Multiple Microtasks)
```javascript
Promise.resolve().then(() => {
  console.log('1');
  Promise.resolve().then(() => console.log('2'));
});

Promise.resolve().then(() => console.log('3'));

console.log('4');
```

---

### Q5. Predict the Output (Mixed Queue)
```javascript
console.log('script start');

setTimeout(() => {
  console.log('setTimeout 1');
  Promise.resolve().then(() => console.log('promise inside timeout'));
}, 0);

Promise.resolve().then(() => {
  console.log('promise 1');
  setTimeout(() => console.log('setTimeout inside promise'), 0);
});

setTimeout(() => console.log('setTimeout 2'), 0);

console.log('script end');
```

---

### Q6. Predict the Output
```javascript
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}

async function async2() {
  console.log('async2');
}

console.log('script start');

setTimeout(() => console.log('setTimeout'), 0);

async1();

new Promise(resolve => {
  console.log('promise1');
  resolve();
}).then(() => {
  console.log('promise2');
});

console.log('script end');
```

---

### Q7. Predict the Output (queueMicrotask)
```javascript
console.log('1');

queueMicrotask(() => console.log('2'));

Promise.resolve().then(() => console.log('3'));

setTimeout(() => console.log('4'), 0);

queueMicrotask(() => console.log('5'));

console.log('6');
```

---

### Q8. Predict the Output (Nested setTimeout)
```javascript
setTimeout(() => {
  console.log('1');
  setTimeout(() => console.log('2'), 0);
  Promise.resolve().then(() => console.log('3'));
}, 0);

setTimeout(() => console.log('4'), 0);

Promise.resolve().then(() => console.log('5'));
```

---

### Q9. Predict the Output (Challenging)
```javascript
async function foo() {
  console.log('foo start');
  await Promise.resolve();
  console.log('foo end');
  await Promise.resolve();
  console.log('foo final');
}

async function bar() {
  console.log('bar start');
  await Promise.resolve();
  console.log('bar end');
}

console.log('start');
foo();
bar();
console.log('end');
```

---

### Q10. Predict the Output
```javascript
console.log('1');

new Promise((resolve) => {
  console.log('2');
  resolve();
  console.log('3');
}).then(() => {
  console.log('4');
});

console.log('5');
```

---

### Q11. Predict the Output (setTimeout timing)
```javascript
const start = Date.now();

setTimeout(() => console.log('A', Date.now() - start), 0);
setTimeout(() => console.log('B', Date.now() - start), 0);

Promise.resolve().then(() => {
  // Simulate heavy computation
  let i = 0;
  while (i < 1000000000) i++;
  console.log('C', Date.now() - start);
});

console.log('D', Date.now() - start);
```

---

### Q12. Implementation: Explain the event loop execution order
```javascript
// Trace through this code and explain EXACTLY what happens in each tick
// Include: Call Stack, Microtask Queue, Macrotask Queue states

console.log('A');

setTimeout(() => {
  console.log('B');
  Promise.resolve().then(() => console.log('C'));
}, 0);

Promise.resolve().then(() => {
  console.log('D');
  setTimeout(() => console.log('E'), 0);
}).then(() => console.log('F'));

console.log('G');
```

---

## Section B: Promises & Chaining (12 Questions)

### Q13. Predict the Output
```javascript
const promise = new Promise((resolve, reject) => {
  resolve('success');
  reject('error');
  resolve('again');
});

promise
  .then(res => console.log(res))
  .catch(err => console.log(err));
```

---

### Q14. Predict the Output
```javascript
Promise.resolve(1)
  .then(x => x + 1)
  .then(x => { throw new Error('Error!') })
  .then(x => console.log(x))
  .catch(err => console.log('Caught:', err.message))
  .then(x => console.log('After catch:', x));
```

---

### Q15. Predict the Output
```javascript
Promise.resolve(1)
  .then(x => {
    console.log(x);
    return x + 1;
  })
  .then(x => {
    console.log(x);
  })
  .then(x => {
    console.log(x);
    return x + 1;
  })
  .then(x => {
    console.log(x);
  });
```

---

### Q16. Predict the Output
```javascript
const promise = new Promise((resolve, reject) => {
  reject('Error!');
});

promise
  .then(
    res => console.log('Success:', res),
    err => {
      console.log('Handler:', err);
      return 'recovered';
    }
  )
  .then(res => console.log('After:', res));
```

---

### Q17. Predict the Output (Return Promise in then)
```javascript
Promise.resolve('Start')
  .then(res => {
    console.log(res);
    return new Promise(resolve => {
      setTimeout(() => resolve('Middle'), 100);
    });
  })
  .then(res => {
    console.log(res);
    return 'End';
  })
  .then(console.log);
```

---

### Q18. Predict the Output
```javascript
Promise.reject('Error')
  .catch(err => {
    console.log('Caught:', err);
    throw new Error('New Error');
  })
  .catch(err => console.log('Caught again:', err.message));
```

---

### Q19. Predict the Output
```javascript
const p = Promise.resolve();

p.then(() => console.log('1'));
p.then(() => console.log('2'));
p.then(() => console.log('3'));
```

---

### Q20. Implementation: Create a Promise that resolves after n ms
```javascript
// Implement delay(ms) that returns a Promise resolving after ms milliseconds

function delay(ms) {
  // Your implementation
}

// Test
delay(1000).then(() => console.log('1 second passed'));
```

---

### Q21. Implementation: Promisify a callback-based function
```javascript
// Implement promisify(fn) that converts callback-style function to Promise-based
// Assumes callback signature: (error, result) => void

function promisify(fn) {
  // Your implementation
}

// Test
function readFile(filename, callback) {
  setTimeout(() => callback(null, 'file content'), 100);
}

const readFilePromise = promisify(readFile);
readFilePromise('test.txt').then(content => console.log(content));
```

---

### Q22. Predict the Output
```javascript
new Promise((resolve, reject) => {
  console.log('1');
  resolve();
})
.then(() => {
  console.log('2');
  new Promise((resolve) => {
    console.log('3');
    resolve();
  })
  .then(() => console.log('4'))
  .then(() => console.log('5'));
})
.then(() => console.log('6'));
```

---

### Q23. Implementation: Promise chain with error handling
```javascript
// Implement a function that fetches user, then user's posts, then post comments
// With proper error handling at each step

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) resolve({ id, name: 'User ' + id });
      else reject(new Error('Invalid user id'));
    }, 100);
  });
}

function getPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) resolve([{ id: 1, title: 'Post 1' }]);
      else reject(new Error('Invalid userId'));
    }, 100);
  });
}

function getComments(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([{ id: 1, text: 'Comment 1' }]);
    }, 100);
  });
}

// Implement: fetchUserPostComments(userId) using Promise chaining
```

---

### Q24. Predict the Output (finally)
```javascript
Promise.resolve('Success')
  .then(res => {
    console.log(res);
    return 'From then';
  })
  .finally(() => {
    console.log('Finally');
    return 'From finally';
  })
  .then(res => console.log(res));
```

---

## Section C: async/await - Error Handling & Sequencing (10 Questions)

### Q25. Predict the Output
```javascript
async function foo() {
  return 'Hello';
}

console.log(foo());
foo().then(console.log);
```

---

### Q26. Predict the Output
```javascript
async function foo() {
  const result = await Promise.resolve('Resolved');
  console.log(result);
  return result + '!';
}

const promise = foo();
console.log(promise);

promise.then(console.log);
```

---

### Q27. Predict the Output (Error Handling)
```javascript
async function foo() {
  try {
    const result = await Promise.reject('Error!');
    console.log(result);
  } catch (e) {
    console.log('Caught:', e);
  }
  return 'Done';
}

foo().then(console.log);
```

---

### Q28. Predict the Output (Sequential vs Parallel)
```javascript
// How long will this take? Why?
async function sequential() {
  console.time('seq');
  const a = await delay(1000);
  const b = await delay(1000);
  console.timeEnd('seq');
}

// How long will this take? Why?
async function parallel() {
  console.time('par');
  const aPromise = delay(1000);
  const bPromise = delay(1000);
  const a = await aPromise;
  const b = await bPromise;
  console.timeEnd('par');
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
```

---

### Q29. Predict the Output
```javascript
async function foo() {
  console.log('foo start');
  const result = await 'not a promise';
  console.log('result:', result);
  return 'foo done';
}

console.log('start');
const p = foo();
console.log('after foo');
p.then(console.log);
console.log('end');
```

---

### Q30. Implementation: Retry with async/await
```javascript
// Implement retry(fn, retries, delay)
// Retries fn up to 'retries' times with 'delay' ms between attempts

async function retry(fn, retries = 3, delay = 1000) {
  // Your implementation
}

// Test
let attempts = 0;
const unreliableFn = async () => {
  attempts++;
  if (attempts < 3) throw new Error('Failed');
  return 'Success!';
};

retry(unreliableFn, 5, 100).then(console.log); // 'Success!' after 2 retries
```

---

### Q31. Predict the Output (Top-level await behavior)
```javascript
// In a module context:
async function foo() {
  console.log('1');
  await Promise.resolve();
  console.log('2');
}

async function bar() {
  console.log('3');
  await foo();
  console.log('4');
}

bar();
console.log('5');
```

---

### Q32. Implementation: Sequential execution of async array
```javascript
// Execute array of async functions sequentially
// Each function should wait for previous to complete

async function sequential(asyncFunctions) {
  // Your implementation
}

// Test
const funcs = [
  async () => { await delay(100); console.log('1'); return 1; },
  async () => { await delay(100); console.log('2'); return 2; },
  async () => { await delay(100); console.log('3'); return 3; },
];

sequential(funcs); // Should log 1, 2, 3 (not all at once)
```

---

### Q33. Predict the Output (await in loop)
```javascript
async function foo() {
  const items = [1, 2, 3];
  
  items.forEach(async (item) => {
    const result = await Promise.resolve(item * 2);
    console.log(result);
  });
  
  console.log('Done');
}

foo();
```

---

### Q34. Implementation: Fix Q33 to run sequentially
```javascript
// Rewrite so items are processed one by one, then 'Done' logs at the end
async function foo() {
  const items = [1, 2, 3];
  // Your implementation
  console.log('Done');
}
```

---

## Section D: Race Conditions & Stale Closures (6 Questions)

### Q35. Identify the Race Condition
```javascript
// What's wrong with this code? How to fix it?
async function fetchData(userId) {
  const response = await fetch(`/api/users/${userId}`);
  const data = await response.json();
  document.getElementById('result').innerHTML = data.name;
}

// User clicks rapidly, changing userId
button.addEventListener('click', () => {
  fetchData(currentUserId++);
});
```

---

### Q36. Implementation: Fix race condition with AbortController
```javascript
// Implement a fetcher that cancels previous requests when new one starts

function createCancellableFetcher() {
  // Your implementation
  // Should return a function that:
  // - Cancels any in-flight request
  // - Starts a new request
  // - Returns the response
}

// Test
const fetchUser = createCancellableFetcher();
fetchUser('/api/user/1'); // gets cancelled
fetchUser('/api/user/2'); // gets cancelled  
fetchUser('/api/user/3'); // completes
```

---

### Q37. Predict the Output (Stale Closure)
```javascript
function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // What will count show after 5 seconds?
  // How to fix it?
}
```

---

### Q38. Predict the Output
```javascript
// Classic stale closure problem
for (var i = 0; i < 3; i++) {
  setTimeout(async () => {
    const result = await Promise.resolve(i);
    console.log(result);
  }, 100);
}
```

---

### Q39. Implementation: Debounce with async/await
```javascript
// Implement async debounce that:
// - Only executes after delay ms of no calls
// - Returns a Promise with the result
// - Handles race conditions properly

function asyncDebounce(fn, delay) {
  // Your implementation
}

// Test
const searchAPI = asyncDebounce(async (query) => {
  const response = await fetch(`/search?q=${query}`);
  return response.json();
}, 300);

// Only the last call should execute
searchAPI('a');
searchAPI('ab');
searchAPI('abc').then(console.log); // Only this executes
```

---

### Q40. Identify and Fix: Race condition in state update
```javascript
// What's wrong? How to fix?
async function updateCounter() {
  let currentCount = await getCount(); // fetches from server
  currentCount++;
  await saveCount(currentCount); // saves to server
}

// Multiple users call this simultaneously
// Expected: count goes 0 -> 1 -> 2 -> 3
// Actual: count might go 0 -> 1 -> 1 -> 1
```

---

## Section E: Timers vs Microtasks (6 Questions)

### Q41. Predict the Output
```javascript
setTimeout(() => console.log('timeout 1'), 0);
setTimeout(() => console.log('timeout 2'), 0);

Promise.resolve()
  .then(() => {
    console.log('promise 1');
    setTimeout(() => console.log('timeout 3'), 0);
  })
  .then(() => console.log('promise 2'));

requestAnimationFrame(() => console.log('raf'));

console.log('sync');
```

---

### Q42. Predict the Output
```javascript
let i = 0;

const timer = setInterval(() => {
  console.log('interval', i);
  i++;
  if (i >= 3) clearInterval(timer);
  
  Promise.resolve().then(() => console.log('promise', i));
}, 0);

console.log('start');
```

---

### Q43. Predict the Output
```javascript
console.log('1');

setTimeout(() => console.log('2'), 0);

setImmediate?.(() => console.log('3')); // Node.js only

Promise.resolve().then(() => console.log('4'));

process?.nextTick?.(() => console.log('5')); // Node.js only

console.log('6');
```

---

### Q44. Implementation: Implement a simple scheduler
```javascript
// Implement a scheduler that:
// - Executes high priority tasks before low priority
// - Uses microtasks for high priority
// - Uses setTimeout for low priority

class Scheduler {
  scheduleHigh(task) {
    // Your implementation
  }
  
  scheduleLow(task) {
    // Your implementation
  }
}

// Test
const scheduler = new Scheduler();
scheduler.scheduleLow(() => console.log('low 1'));
scheduler.scheduleHigh(() => console.log('high 1'));
scheduler.scheduleLow(() => console.log('low 2'));
scheduler.scheduleHigh(() => console.log('high 2'));
console.log('sync');

// Expected: sync, high 1, high 2, low 1, low 2
```

---

### Q45. Predict the Output (setTimeout accuracy)
```javascript
const start = Date.now();

setTimeout(() => {
  console.log('A:', Date.now() - start);
}, 100);

setTimeout(() => {
  console.log('B:', Date.now() - start);
}, 100);

// Heavy sync work
let x = 0;
for (let i = 0; i < 1e9; i++) x++;

console.log('sync done:', Date.now() - start);
```

---

### Q46. Implementation: Create precise timer using requestAnimationFrame
```javascript
// setTimeout is not precise, create a more accurate timer
// using requestAnimationFrame

function preciseTimeout(callback, delay) {
  // Your implementation
}

// Should be more accurate than setTimeout for animations
```

---

## Section F: Promise Utilities (8 Questions)

### Q47. Predict the Output (Promise.all)
```javascript
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.reject('Error');
const p4 = Promise.resolve(4);

Promise.all([p1, p2, p3, p4])
  .then(results => console.log('Results:', results))
  .catch(err => console.log('Error:', err));
```

---

### Q48. Predict the Output (Promise.allSettled)
```javascript
const p1 = Promise.resolve(1);
const p2 = Promise.reject('Error');
const p3 = Promise.resolve(3);

Promise.allSettled([p1, p2, p3])
  .then(results => console.log(results));
```

---

### Q49. Predict the Output (Promise.race)
```javascript
const slow = new Promise(resolve => setTimeout(() => resolve('slow'), 200));
const fast = new Promise(resolve => setTimeout(() => resolve('fast'), 100));
const instant = Promise.resolve('instant');

Promise.race([slow, fast, instant])
  .then(result => console.log(result));
```

---

### Q50. Predict the Output (Promise.any)
```javascript
const p1 = Promise.reject('Error 1');
const p2 = Promise.reject('Error 2');
const p3 = new Promise(resolve => setTimeout(() => resolve('Success'), 100));

Promise.any([p1, p2, p3])
  .then(result => console.log('Result:', result))
  .catch(err => console.log('All failed:', err.errors));
```

---

### Q51. Implementation: Implement Promise.all
```javascript
function promiseAll(promises) {
  // Your implementation
}

// Test
const p1 = Promise.resolve(1);
const p2 = new Promise(r => setTimeout(() => r(2), 100));
const p3 = Promise.resolve(3);

promiseAll([p1, p2, p3]).then(console.log); // [1, 2, 3]
```

---

### Q52. Implementation: Implement Promise.race
```javascript
function promiseRace(promises) {
  // Your implementation
}

// Test
const p1 = new Promise(r => setTimeout(() => r('slow'), 200));
const p2 = new Promise(r => setTimeout(() => r('fast'), 100));

promiseRace([p1, p2]).then(console.log); // 'fast'
```

---

### Q53. Implementation: Implement Promise.allSettled
```javascript
function promiseAllSettled(promises) {
  // Your implementation
}

// Test
const p1 = Promise.resolve(1);
const p2 = Promise.reject('err');

promiseAllSettled([p1, p2]).then(console.log);
// [{status: 'fulfilled', value: 1}, {status: 'rejected', reason: 'err'}]
```

---

### Q54. Implementation: Promise pool with concurrency limit
```javascript
// Implement a function that executes promises with a max concurrency
// Only 'limit' promises should be in-flight at once

async function promisePool(tasks, limit) {
  // tasks is an array of functions that return promises
  // Your implementation
}

// Test
const tasks = [
  () => delay(100).then(() => 1),
  () => delay(200).then(() => 2),
  () => delay(100).then(() => 3),
  () => delay(200).then(() => 4),
  () => delay(100).then(() => 5),
];

promisePool(tasks, 2).then(console.log); // [1, 2, 3, 4, 5]
// But only 2 running at any time
```

---

## Bonus Challenge: Ultimate Async Question

### Q55. Predict the Exact Output Order
```javascript
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
  return 'async1 return';
}

async function async2() {
  console.log('async2 start');
  await Promise.resolve();
  console.log('async2 end');
}

console.log('script start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

async1().then(v => console.log(v));

new Promise(resolve => {
  console.log('promise1');
  resolve();
}).then(() => {
  console.log('promise2');
}).then(() => {
  console.log('promise3');
});

console.log('script end');
```

---

## How to Verify Your Answers

1. **For event loop questions**: Draw out the call stack, microtask queue, and macrotask queue for each step
2. **Run in browser console**: Chrome DevTools is your friend
3. **Use debugger**: Add breakpoints to trace execution
4. **Remember the rules**:
   - Sync code first
   - Microtask queue drains completely before any macrotask
   - Each await creates a new microtask
   - Promise executor runs synchronously
   - then/catch/finally callbacks are microtasks

---

**Interview Pro Tip:** When explaining async code:
1. First identify all sync code (runs immediately)
2. Identify Promise executors (sync!)
3. List all microtasks in order of scheduling
4. List all macrotasks in order of scheduling
5. Drain microtasks completely between each macrotask

