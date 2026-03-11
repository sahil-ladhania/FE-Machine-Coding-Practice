# FE Machine Coding Practice

A structured repository for frontend machine coding interview preparation, covering JavaScript fundamentals, React hooks, UI component implementations, and full-stack mini projects.

---

## Repository Structure

```
FE Machine Coding/
├── JS/
│   ├── Arrays Method Practice/
│   ├── async-js/
│   ├── sync-js/
│   └── practice-sheets/
├── React/
│   ├── useState & useEffect Practice/
│   ├── useRef , useMemo & useCallback Practice/
│   ├── useContext & useReducer/
│   ├── Custom Hooks Practice/
│   ├── machine-coding/
│   ├── practice-app/
│   └── Hireflow Form/
└── Practice Sheets/
```

---

## JavaScript

### Arrays Method Practice
Hands-on practice files for core array methods:
`filter`, `map`, `reduce`, `forEach`, `find`, `findIndex`, `flat`, `flatMap`, `some`, `every`, `sort`

### Async JavaScript
Covers asynchronous patterns:
- Callbacks and callback hell
- Promises and promise chaining
- Async/await
- Promise APIs: `Promise.all`, `Promise.race`, `Promise.allSettled`, `Promise.any`
- Fetch API

### Sync JS — Functions, Closures, Prototypes
Core JS concepts:
- Function declarations and expressions
- `this` keyword and binding rules
- `call`, `apply`, `bind`
- Closures
- Prototypal inheritance

### Practice Sheets (TypeScript Implementations)

| Section | Topics |
|---------|--------|
| 1 — Closures | `once`, `limit`, `setInterval` via `setTimeout`, `debounce`, `throttle`, `memoize` |
| 2 — This & Prototype | `call`, `apply`, `bind`, `Object.create`, `instanceof`, `new` operator |
| 3 — Array & HOFs | `forEach`, `map`, `filter`, `find`, `findIndex`, `reduce`, `compose`, `pipe` |
| 4 — Promises | `sleep`, `Promise.race`, `Promise.allSettled`, `Promise.any`, `Promise.all` |
| 5 — Map & EventEmitter | LRU Cache, custom `EventEmitter` |
| 6 — useState & useEffect | `useToggle`, controlled form, `useWindowSize`, `useClickOutside`, `useDebounce`, `useFetch` |
| 7 — Rendering & Memo | Fix unnecessary re-renders, `useMemo` on lists |
| 8 — Context & Reducer | `useContext` + `useReducer`, compound tabs, compound accordion |

---

## React

### useState & useEffect Practice
**Stack:** React 18, TypeScript, Vite

- 7 `useState` problems: basic state, object/array state, lazy init, batching, derived state, form hooks
- 6 `useEffect` problems: side effects, dependency arrays, cleanup, multiple effects, race conditions
- 1 combined `useState` + `useEffect` real-world form example

### useRef, useMemo & useCallback Practice
**Stack:** React 18, TypeScript, Vite

- 6 `useRef` problems: DOM access, ref as instance variable, multiple refs, combining with state
- 3 `useMemo` problems: expensive computations, memoizing objects, memoizing callbacks
- 3 `useCallback` problems: stabilizing references, callbacks with dependencies, memo components
- 3 combined `useMemo` + `useCallback` optimization patterns

### useContext & useReducer — HireFlow Form
**Stack:** React 18, TypeScript, Vite

A 4-step multi-step job application form demonstrating context + reducer state management.

**Features:**
- Step indicator and per-step validation
- File uploads (photo, resume)
- Dynamic skill rows (add/remove)
- Checkbox arrays for work modes and locations
- Review step before final submission

**Key Files:**
```
src/context/HireFlowContext.tsx
src/reducers/hireFlowReducer.ts
src/helpers/validators.ts
src/types/hireFlowTypes.ts
```

### Custom Hooks Practice
**Stack:** React 18, TypeScript, Vite

**Hooks implemented:**

| Hook | Description |
|------|-------------|
| `useToggle` | Boolean state toggler |
| `usePrevious` | Track previous render value |
| `useLocalStorage` | Persistent state via localStorage |
| `useInterval` | `setInterval` wrapper with cleanup |
| `useEventListener` | Declarative event listener management |
| `useDebounce` | Debounced value |
| `useFetch` | Data fetching with loading/error states |
| `useJobStatus` | Async job status polling |
| `useThrottle` | Throttled value |
| `useClickOutside` | Detect clicks outside an element |
| `useWindowSize` | Responsive window dimensions |
| `useTimeout` | `setTimeout` wrapper |
| `useAsync` | Generic async operation handler |

Each hook has a corresponding demo page.

### Machine Coding — UI Components
**Stack:** React 18, TypeScript, Vite, Lucide React

| Component | Description |
|-----------|-------------|
| Accordion (Single) | Only one panel open at a time |
| Accordion (Multiple) | Multiple panels open simultaneously |
| Tabs | Tab navigation and content switching |
| Todo | Add, complete, delete todos |
| Star Rating | Interactive 1–5 star rating |
| Progress Bar | Visual 0–100% progress indicator |

### Todo App (Full Stack)
**Stack:** React 18 + Redux Toolkit (frontend) · Node.js + Express + Prisma ORM (backend)

**Frontend:**
- Redux slice for todo state
- localStorage persistence layer
- Components: Container, TodoList, TodoItem

**Backend API:**
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/todo` | Create todo |
| `PATCH` | `/todo` | Update todo |
| `DELETE` | `/todo` | Delete todo |
| `GET` | `/todos/:id` | Get single todo |
| `GET` | `/todos` | Get all todos |

### Practice App — Hooks Edge Cases
**Stack:** React 18, JavaScript (JSX), Vite

Focused on gotchas and edge cases across hooks:

| Category | Demos |
|----------|-------|
| `useState` | Batching, lazy init, state in loops, object state, stale closure |
| `useEffect` | Cleanup order, dependency traps, effect timing, race conditions, StrictMode |
| `useRef` | Callback refs, DOM ref timing, previous value, ref vs state, stale closure |
| `useMemo` | Expensive compute, memo as dependency, overhead, parent memo, context memo |
| `useCallback` | Reference stability, vs useMemo, in effects, with memo, stale callback |
| Lazy & Suspense | Code splitting, fallback UI, nested Suspense, error boundaries, preloading |
| Custom Hooks | 5 real-world custom hook patterns |

---

## Practice Sheets (Study Guides)

Markdown theory guides with questions and answers:

### JavaScript
| File | Topics |
|------|--------|
| `js-sheet-1-execution-scope-memory.md` | Execution context, hoisting, scope chain, TDZ, garbage collection |
| `js-sheet-2-functions-this.md` | Function types, `this` binding, call/apply/bind, arrow functions |
| `js-sheet-3-async-javascript.md` | Callbacks, promises, async/await, event loop, microtask queue |
| `js-sheet-4-data-references-es6.md` | Primitives vs references, destructuring, spread/rest, ES6 classes |
| `js-sheet-5-browser-runtime.md` | DOM, event delegation, browser APIs, web workers, storage |

### React
| File | Topics |
|------|--------|
| `react-sheet-1-basic-ui-behaviors.md` | JSX, components, props, basic hooks, event handling |
| `react-sheet-2-mini-app-builds.md` | Forms, conditional rendering, lists, keys, mini projects |
| `react-sheet-3-advanced-ui-behaviors.md` | useRef, useMemo, useCallback, performance patterns |
| `react-sheet-4-architecture-topics.md` | State management, useContext, useReducer, custom hooks, HOCs |
| `react-sheet-5-realworld-design.md` | Form validation, error boundaries, code splitting, real-world patterns |
| `react-sheet-6-performance-topics.md` | Rendering optimization, bundle size, memory leaks, profiling |
