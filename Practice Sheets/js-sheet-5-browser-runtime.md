# JS Practice Sheet 5: Browser & Runtime Fundamentals (Frontend Differentiators)

**Difficulty:** Medium to Hard | **Time:** 2-3 hours | **Focus:** Output-based + Implementation

---

## Section A: Event Bubbling, Capturing & Target Phase (8 Questions)

### Q1. Predict the Output
```html
<div id="outer">
  <div id="inner">
    <button id="btn">Click</button>
  </div>
</div>

<script>
document.getElementById('outer').addEventListener('click', () => {
  console.log('outer');
});

document.getElementById('inner').addEventListener('click', () => {
  console.log('inner');
});

document.getElementById('btn').addEventListener('click', () => {
  console.log('button');
});

// User clicks the button
</script>
```

---

### Q2. Predict the Output (Capturing Phase)
```html
<div id="outer">
  <div id="inner">
    <button id="btn">Click</button>
  </div>
</div>

<script>
document.getElementById('outer').addEventListener('click', () => {
  console.log('outer bubble');
});

document.getElementById('outer').addEventListener('click', () => {
  console.log('outer capture');
}, true);

document.getElementById('btn').addEventListener('click', () => {
  console.log('button');
});

// User clicks the button
</script>
```

---

### Q3. Predict the Output (All Three Phases)
```html
<div id="parent">
  <button id="child">Click</button>
</div>

<script>
const parent = document.getElementById('parent');
const child = document.getElementById('child');

parent.addEventListener('click', () => console.log('parent capture'), true);
parent.addEventListener('click', () => console.log('parent bubble'));
child.addEventListener('click', () => console.log('child capture'), true);
child.addEventListener('click', () => console.log('child bubble'));

// User clicks the button
</script>
```

---

### Q4. Predict the Output (event.target vs event.currentTarget)
```html
<div id="outer">
  <button id="btn">Click</button>
</div>

<script>
document.getElementById('outer').addEventListener('click', function(e) {
  console.log('target:', e.target.id);
  console.log('currentTarget:', e.currentTarget.id);
  console.log('this:', this.id);
});

// User clicks the button
</script>
```

---

### Q5. Implementation: Log full event path
```javascript
// Implement a function that logs the complete event path for any click
// from capture phase through target to bubble phase

function logEventPath(rootElement) {
  // Your implementation
  // Should log each element the event passes through
  // Mark which phase (capture/target/bubble)
}

// Usage:
// logEventPath(document.body);
// Click on any nested element to see the path
```

---

### Q6. Predict the Output (Multiple listeners same element)
```html
<button id="btn">Click</button>

<script>
const btn = document.getElementById('btn');

btn.addEventListener('click', () => console.log('1'));
btn.addEventListener('click', () => console.log('2'), true);
btn.addEventListener('click', () => console.log('3'));
btn.addEventListener('click', () => console.log('4'), true);

// User clicks the button
</script>
```

---

### Q7. Predict the Output (Once option)
```html
<button id="btn">Click</button>

<script>
const btn = document.getElementById('btn');

btn.addEventListener('click', () => console.log('once'), { once: true });
btn.addEventListener('click', () => console.log('always'));

// User clicks button 3 times
</script>
```

---

### Q8. Implementation: Create custom event system with phases
```javascript
// Implement a simple event system that supports capture and bubble phases

class EventEmitter {
  constructor() {
    this.listeners = {};
  }
  
  on(event, callback, useCapture = false) {
    // Your implementation
  }
  
  emit(event, data) {
    // Should trigger capture listeners first, then bubble
    // Your implementation
  }
  
  off(event, callback, useCapture = false) {
    // Your implementation
  }
}
```

---

## Section B: Event Delegation (6 Questions)

### Q9. Predict the Output
```html
<ul id="list">
  <li data-id="1">Item 1</li>
  <li data-id="2">Item 2</li>
  <li data-id="3">Item 3</li>
</ul>

<script>
document.getElementById('list').addEventListener('click', (e) => {
  console.log('clicked:', e.target.dataset.id);
});

// User clicks "Item 2"
// Then clicks on empty space in the ul
</script>
```

---

### Q10. Implementation: Event delegation with filtering
```javascript
// Implement delegate function that only triggers for specific selectors

function delegate(parent, selector, event, callback) {
  // Your implementation
}

// Usage:
delegate(document.getElementById('list'), 'li', 'click', (e) => {
  console.log('Clicked:', e.target.textContent);
});

// Should only fire for <li> elements, not the parent <ul>
```

---

### Q11. When does event delegation fail?
```html
<ul id="list">
  <li><span>Item 1</span></li>
  <li><span>Item 2</span></li>
</ul>

<script>
document.getElementById('list').addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    console.log('clicked li');
  }
});

// User clicks on the span text "Item 1"
// What happens? How to fix?
</script>
```

---

### Q12. Implementation: Robust event delegation with closest()
```javascript
// Fix Q11 using closest()

document.getElementById('list').addEventListener('click', (e) => {
  // Your implementation using closest()
  // Should work even when clicking on nested elements
});
```

---

### Q13. Implementation: Delegated todo list
```javascript
// Implement a todo list using event delegation
// Features: Add, Delete, Toggle complete
// All event handlers should be on the parent container

/*
<div id="todo-app">
  <input id="new-todo" type="text">
  <button id="add-btn">Add</button>
  <ul id="todo-list">
    <!-- <li data-id="1"><span>Task 1</span><button class="delete">X</button></li> -->
  </ul>
</div>
*/

class TodoApp {
  constructor(container) {
    this.container = document.getElementById(container);
    this.todos = [];
    this.setupEventDelegation();
  }
  
  setupEventDelegation() {
    // Your implementation
    // Single event listener on container
    // Handle: add, delete, toggle
  }
}
```

---

### Q14. Predict behavior with stopPropagation in delegation
```html
<ul id="list">
  <li>
    <span>Text</span>
    <button class="btn">Click</button>
  </li>
</ul>

<script>
document.getElementById('list').addEventListener('click', (e) => {
  console.log('list clicked');
  if (e.target.classList.contains('btn')) {
    console.log('button clicked');
  }
});

document.querySelector('.btn').addEventListener('click', (e) => {
  console.log('direct button handler');
  e.stopPropagation();
});

// User clicks the button
</script>
```

---

## Section C: preventDefault() vs stopPropagation() (6 Questions)

### Q15. Predict the Behavior
```html
<a href="https://google.com" id="link">Go to Google</a>

<script>
document.getElementById('link').addEventListener('click', (e) => {
  console.log('clicked');
  e.preventDefault();
});

// User clicks the link
// What happens?
</script>
```

---

### Q16. Predict the Behavior
```html
<form id="form">
  <input type="text" id="input">
  <button type="submit">Submit</button>
</form>

<script>
document.getElementById('form').addEventListener('submit', (e) => {
  console.log('form submit');
  e.preventDefault();
});

document.getElementById('input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    console.log('enter pressed');
    e.stopPropagation();
  }
});

// User presses Enter in input
// What happens?
</script>
```

---

### Q17. Predict the Behavior (Both together)
```html
<div id="outer">
  <a href="https://google.com" id="link">Click</a>
</div>

<script>
document.getElementById('outer').addEventListener('click', () => {
  console.log('outer');
});

document.getElementById('link').addEventListener('click', (e) => {
  console.log('link');
  e.preventDefault();
  e.stopPropagation();
});

// User clicks the link
</script>
```

---

### Q18. Predict the Behavior (stopImmediatePropagation)
```html
<button id="btn">Click</button>

<script>
document.getElementById('btn').addEventListener('click', (e) => {
  console.log('handler 1');
  e.stopImmediatePropagation();
});

document.getElementById('btn').addEventListener('click', () => {
  console.log('handler 2');
});

document.body.addEventListener('click', () => {
  console.log('body');
});

// User clicks button
</script>
```

---

### Q19. Implementation: Keyboard navigation with proper event handling
```javascript
// Implement a dropdown menu with keyboard navigation
// Arrow keys to navigate, Enter to select, Escape to close
// Properly prevent default behaviors

class Dropdown {
  constructor(element) {
    this.element = element;
    this.items = element.querySelectorAll('.dropdown-item');
    this.activeIndex = -1;
    this.setupKeyboardNav();
  }
  
  setupKeyboardNav() {
    // Your implementation
    // Handle: ArrowUp, ArrowDown, Enter, Escape
    // Prevent scroll on arrow keys
    // Prevent form submit on Enter
  }
}
```

---

### Q20. When to use which?
```javascript
// Explain when to use each and implement examples:

// 1. e.preventDefault()
// Use case: ?
// Example: ?

// 2. e.stopPropagation()
// Use case: ?
// Example: ?

// 3. e.stopImmediatePropagation()
// Use case: ?
// Example: ?

// 4. return false (in jQuery vs vanilla)
// What does it do?
```

---

## Section D: DOM vs Virtual DOM (4 Questions)

### Q21. Explain the difference
```javascript
// Real DOM manipulation
document.getElementById('app').innerHTML = '<div>Hello</div>';

// Virtual DOM concept (pseudo-code)
const vdom = { type: 'div', children: 'Hello' };
render(vdom, document.getElementById('app'));

// Questions:
// 1. What makes Virtual DOM "virtual"?
// 2. Why is batch updating more efficient?
// 3. What is reconciliation/diffing?
// 4. When is real DOM actually faster?
```

---

### Q22. Implementation: Simple Virtual DOM
```javascript
// Implement a basic virtual DOM system

// 1. createElement - creates vdom node
function createElement(type, props, ...children) {
  // Your implementation
}

// 2. render - converts vdom to real DOM
function render(vnode) {
  // Your implementation
}

// 3. diff - compares two vdom trees (basic)
function diff(oldVNode, newVNode) {
  // Your implementation
}

// 4. patch - applies diff to real DOM
function patch(parent, patches) {
  // Your implementation
}

// Test
const vdom1 = createElement('div', { id: 'app' },
  createElement('h1', null, 'Hello'),
  createElement('p', null, 'World')
);

document.body.appendChild(render(vdom1));
```

---

### Q23. Predict the performance impact
```javascript
// Which is more performant and why?

// Approach 1: Multiple DOM updates
function updateMultiple() {
  const list = document.getElementById('list');
  for (let i = 0; i < 1000; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${i}`;
    list.appendChild(li);
  }
}

// Approach 2: Document Fragment
function updateWithFragment() {
  const list = document.getElementById('list');
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 1000; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${i}`;
    fragment.appendChild(li);
  }
  list.appendChild(fragment);
}

// Approach 3: innerHTML
function updateWithInnerHTML() {
  const list = document.getElementById('list');
  let html = '';
  for (let i = 0; i < 1000; i++) {
    html += `<li>Item ${i}</li>`;
  }
  list.innerHTML = html;
}
```

---

### Q24. React's Virtual DOM specifics
```javascript
// Answer these React-specific questions:

// 1. What triggers a Virtual DOM diff?
// 2. What is the key prop for?
// 3. Why does React batch state updates?
// 4. What is React Fiber and how does it improve rendering?
```

---

## Section E: Reflow vs Repaint (6 Questions)

### Q25. Which operations trigger reflow?
```javascript
// Classify each as: Reflow, Repaint, or Neither

const el = document.getElementById('box');

// 1
el.style.color = 'red';

// 2
el.style.width = '100px';

// 3
el.style.transform = 'translateX(100px)';

// 4
el.style.top = '100px'; // position: absolute

// 5
el.offsetHeight; // Reading layout property

// 6
el.classList.add('active'); // .active { font-size: 20px; }

// 7
el.style.visibility = 'hidden';

// 8
el.style.display = 'none';

// 9
el.style.opacity = 0.5;

// 10
el.textContent = 'New text';
```

---

### Q26. Predict the performance issue
```javascript
// What's wrong with this code?

function animateBad() {
  const boxes = document.querySelectorAll('.box');
  
  boxes.forEach(box => {
    const height = box.offsetHeight; // Read
    box.style.height = (height + 10) + 'px'; // Write
  });
}

// How to fix it?
function animateGood() {
  // Your implementation
}
```

---

### Q27. Implementation: Batch DOM reads and writes
```javascript
// Implement a batched DOM operation system

class DOMBatcher {
  constructor() {
    this.reads = [];
    this.writes = [];
  }
  
  read(fn) {
    // Queue a read operation
  }
  
  write(fn) {
    // Queue a write operation
  }
  
  flush() {
    // Execute all reads first, then all writes
  }
}

// Usage
const batcher = new DOMBatcher();
elements.forEach(el => {
  batcher.read(() => {
    const height = el.offsetHeight;
    batcher.write(() => {
      el.style.height = (height * 2) + 'px';
    });
  });
});
batcher.flush();
```

---

### Q28. Predict reflow count
```javascript
// How many reflows does this cause?

const el = document.getElementById('box');

el.style.width = '100px';
el.style.height = '100px';
el.style.margin = '10px';
el.style.padding = '5px';
el.style.border = '1px solid black';

// Answer and explain browser optimization
```

---

### Q29. Implementation: Measure element without reflow
```javascript
// Implement a way to measure an element's dimensions
// without causing reflow (for animations)

function measureElement(element) {
  // Use getBoundingClientRect or other methods
  // Explain the tradeoffs
}
```

---

### Q30. CSS properties and rendering
```javascript
// Which CSS properties are "cheap" to animate?
// Explain the concept of composite layers

// Expensive (causes reflow):
// ?

// Medium (causes repaint):
// ?

// Cheap (compositor only):
// ?

// How to promote element to its own layer?
```

---

## Section F: Web Storage (6 Questions)

### Q31. Predict the behavior
```javascript
// localStorage
localStorage.setItem('user', { name: 'John' });
console.log(localStorage.getItem('user'));

localStorage.setItem('user', JSON.stringify({ name: 'John' }));
console.log(JSON.parse(localStorage.getItem('user')));

// What's the difference?
```

---

### Q32. localStorage vs sessionStorage vs cookies
```javascript
// Fill in the comparison:

// localStorage:
// - Capacity: ?
// - Expiration: ?
// - Sent with requests: ?
// - Accessible from: ?

// sessionStorage:
// - Capacity: ?
// - Expiration: ?
// - Sent with requests: ?
// - Accessible from: ?

// cookies:
// - Capacity: ?
// - Expiration: ?
// - Sent with requests: ?
// - Accessible from: ?
```

---

### Q33. Predict the behavior (Cross-tab communication)
```javascript
// Tab 1:
localStorage.setItem('data', 'hello');

// Tab 2:
window.addEventListener('storage', (e) => {
  console.log('Key:', e.key);
  console.log('Old:', e.oldValue);
  console.log('New:', e.newValue);
});

// What triggers the storage event?
// Does it fire in the same tab?
```

---

### Q34. Implementation: Storage wrapper with expiration
```javascript
// Implement a localStorage wrapper that supports expiration

class StorageWithExpiry {
  set(key, value, ttlMs) {
    // Your implementation
  }
  
  get(key) {
    // Your implementation
    // Return null if expired
  }
  
  remove(key) {
    // Your implementation
  }
}

// Test
const storage = new StorageWithExpiry();
storage.set('token', 'abc123', 3600000); // 1 hour
console.log(storage.get('token')); // 'abc123'
// After 1 hour: null
```

---

### Q35. Predict security implications
```javascript
// What are the security concerns with each?

// 1. Storing JWT in localStorage
const token = 'eyJhbGc...';
localStorage.setItem('jwt', token);

// 2. Storing JWT in cookie (HttpOnly)
document.cookie = `jwt=${token}; HttpOnly; Secure; SameSite=Strict`;

// 3. Storing sensitive data in sessionStorage

// Questions:
// - Which is vulnerable to XSS?
// - Which is vulnerable to CSRF?
// - Best practice for auth tokens?
```

---

### Q36. Implementation: Sync state across tabs
```javascript
// Implement a cross-tab state synchronization system

class CrossTabState {
  constructor(key, initialValue) {
    this.key = key;
    this.value = initialValue;
    this.listeners = [];
    this.init();
  }
  
  init() {
    // Setup storage event listener
  }
  
  subscribe(callback) {
    // Register callback for changes
  }
  
  setState(newValue) {
    // Update value and notify other tabs
  }
  
  getState() {
    return this.value;
  }
}

// Usage
const sharedState = new CrossTabState('user', null);
sharedState.subscribe((newValue) => {
  console.log('State changed in another tab:', newValue);
});
sharedState.setState({ name: 'John' });
```

---

## Section G: Polyfills (4 Questions)

### Q37. What can and cannot be polyfilled?
```javascript
// Classify each as: Can polyfill, Cannot polyfill, Partial polyfill

// 1. Array.prototype.map
// 2. Promise
// 3. Symbol
// 4. Proxy
// 5. const/let
// 6. Arrow functions
// 7. async/await
// 8. Object.assign
// 9. WeakMap
// 10. Array.prototype.flat

// Explain why some cannot be polyfilled
```

---

### Q38. Implementation: Polyfill Array.prototype.flat
```javascript
// Implement flat polyfill with depth support

if (!Array.prototype.flat) {
  Array.prototype.flat = function(depth = 1) {
    // Your implementation
  };
}

// Test
console.log([1, [2, [3, [4]]]].flat()); // [1, 2, [3, [4]]]
console.log([1, [2, [3, [4]]]].flat(2)); // [1, 2, 3, [4]]
console.log([1, [2, [3, [4]]]].flat(Infinity)); // [1, 2, 3, 4]
```

---

### Q39. Implementation: Polyfill Array.prototype.includes
```javascript
// Implement includes polyfill

if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement, fromIndex) {
    // Your implementation
    // Handle: NaN, negative fromIndex, sparse arrays
  };
}

// Test
console.log([1, 2, 3].includes(2)); // true
console.log([1, 2, NaN].includes(NaN)); // true
console.log([1, 2, 3].includes(3, 3)); // false
console.log([1, 2, 3].includes(3, -1)); // true
```

---

### Q40. Implementation: Polyfill Object.entries
```javascript
// Implement Object.entries polyfill

if (!Object.entries) {
  Object.entries = function(obj) {
    // Your implementation
    // Handle: non-enumerable properties, symbols, prototype chain
  };
}

// Test
console.log(Object.entries({ a: 1, b: 2 })); // [['a', 1], ['b', 2]]
```

---

## Bonus: Browser APIs

### Q41. Predict the behavior
```javascript
// requestAnimationFrame timing

console.log('1');

requestAnimationFrame(() => {
  console.log('2');
});

Promise.resolve().then(() => {
  console.log('3');
});

setTimeout(() => {
  console.log('4');
}, 0);

console.log('5');
```

---

### Q42. Implementation: Intersection Observer use case
```javascript
// Implement lazy loading images using Intersection Observer

function lazyLoadImages() {
  // Your implementation
  // Replace data-src with src when image enters viewport
}

/*
<img data-src="image1.jpg" class="lazy">
<img data-src="image2.jpg" class="lazy">
*/
```

---

### Q43. Implementation: MutationObserver
```javascript
// Watch for DOM changes and log them

function watchDOMChanges(target) {
  // Your implementation
  // Log: added nodes, removed nodes, attribute changes
}

// Usage
watchDOMChanges(document.getElementById('app'));
```

---

## Answer Verification Guide

1. **Event questions**: Test in browser with console.log
2. **Performance questions**: Use Chrome DevTools Performance tab
3. **Storage questions**: Check Application tab in DevTools
4. **Polyfills**: Test on MDN polyfill examples

---

**Interview Pro Tip:**
- Know event propagation cold - it's asked frequently
- Understand performance implications of DOM operations
- Be able to explain Virtual DOM conceptually
- Know the tradeoffs between storage mechanisms
- For polyfills, know what's impossible vs impractical

