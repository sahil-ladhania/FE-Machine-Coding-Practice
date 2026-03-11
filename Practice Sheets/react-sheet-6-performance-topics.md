# React Practice Sheet 6: Performance Topics

**Difficulty:** Hard | **Type:** Output + Implementation + Discussion | **Stack:** React + TypeScript

---

## Section A: Re-renders - Understand & Prevent (12 Questions)

### Q1. Predict: Will Child re-render?
```typescript
function Parent() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>
      <Child />
    </div>
  );
}

function Child() {
  console.log('Child rendered');
  return <div>I am child</div>;
}
```

---

### Q2. Predict: Will Child re-render?
```typescript
function Parent() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>
      <Child name="Sahil" />
    </div>
  );
}

function Child({ name }: { name: string }) {
  console.log('Child rendered');
  return <div>Hello {name}</div>;
}
```

---

### Q3. Predict: Will Child re-render?
```typescript
function Parent() {
  const [count, setCount] = useState(0);
  const user = { name: 'Sahil' };
  
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>
      <Child user={user} />
    </div>
  );
}

const Child = React.memo(({ user }: { user: { name: string } }) => {
  console.log('Child rendered');
  return <div>Hello {user.name}</div>;
});
```

---

### Q4. Fix the unnecessary re-renders
```typescript
function Parent() {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    console.log('clicked');
  };
  
  const config = { theme: 'dark', size: 'large' };
  
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>
      <ExpensiveChild onClick={handleClick} config={config} />
    </div>
  );
}

const ExpensiveChild = React.memo(({ onClick, config }) => {
  console.log('ExpensiveChild rendered');
  return <button onClick={onClick}>Click me</button>;
});

// How to fix? Provide solution
```

---

### Q5. Predict: Does memo help here?
```typescript
function Parent() {
  const [items, setItems] = useState([1, 2, 3]);
  
  return (
    <div>
      <button onClick={() => setItems([...items, items.length + 1])}>
        Add
      </button>
      {items.map(item => (
        <MemoizedItem key={item} value={item} />
      ))}
    </div>
  );
}

const MemoizedItem = React.memo(({ value }: { value: number }) => {
  console.log(`Item ${value} rendered`);
  return <div>{value}</div>;
});

// When "Add" is clicked, which items re-render?
```

---

### Q6. Predict: Context re-render behavior
```typescript
const ThemeContext = createContext({ theme: 'light' });

function App() {
  const [theme, setTheme] = useState('light');
  const [count, setCount] = useState(0);
  
  return (
    <ThemeContext.Provider value={{ theme }}>
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>
      <Header />
      <Content />
    </ThemeContext.Provider>
  );
}

function Header() {
  console.log('Header rendered');
  return <div>Header</div>;
}

function Content() {
  const { theme } = useContext(ThemeContext);
  console.log('Content rendered');
  return <div>Theme: {theme}</div>;
}

// When count button is clicked, what renders?
```

---

### Q7. Fix Context re-render issue
```typescript
// Current: Every consumer re-renders when ANY context value changes

const AppContext = createContext({
  user: null,
  theme: 'light',
  notifications: [],
  setUser: () => {},
  setTheme: () => {},
  addNotification: () => {},
});

// How to split this to prevent unnecessary re-renders?
// Provide solution with multiple contexts or selectors
```

---

### Q8. Predict: children prop re-render
```typescript
function Parent() {
  const [count, setCount] = useState(0);
  
  return (
    <Wrapper>
      <Child />
    </Wrapper>
  );
  
  function Wrapper({ children }) {
    console.log('Wrapper rendered');
    return (
      <div>
        <button onClick={() => setCount(c => c + 1)}>
          Count: {count}
        </button>
        {children}
      </div>
    );
  }
}

function Child() {
  console.log('Child rendered');
  return <div>Child</div>;
}

// What happens when button is clicked?
```

---

### Q9. Implementation: Custom comparison for memo
```typescript
// Create a MemoizedList that only re-renders when items content changes
// Not when the array reference changes

interface Item {
  id: string;
  name: string;
}

interface ListProps {
  items: Item[];
  onItemClick: (id: string) => void;
}

// Implement with custom arePropsEqual
const MemoizedList = React.memo(
  function List({ items, onItemClick }: ListProps) {
    console.log('List rendered');
    return (
      <ul>
        {items.map(item => (
          <li key={item.id} onClick={() => onItemClick(item.id)}>
            {item.name}
          </li>
        ))}
      </ul>
    );
  },
  // Implement arePropsEqual
);
```

---

### Q10. Predict: useCallback dependency issue
```typescript
function SearchComponent() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  
  const handleSearch = useCallback(async () => {
    const data = await fetch(`/api/search?q=${query}`);
    setResults(await data.json());
  }, []); // Empty deps
  
  useEffect(() => {
    handleSearch();
  }, [query, handleSearch]);
  
  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <Results data={results} />
    </div>
  );
}

// What's the bug? How to fix?
```

---

### Q11. Predict: State batching behavior
```typescript
function Counter() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);
  
  console.log('Render');
  
  const handleClick = () => {
    setCount(c => c + 1);
    setFlag(f => !f);
    setCount(c => c + 1);
  };
  
  const handleAsyncClick = () => {
    setTimeout(() => {
      setCount(c => c + 1);
      setFlag(f => !f);
    }, 0);
  };
  
  return (
    <div>
      <p>{count} - {flag.toString()}</p>
      <button onClick={handleClick}>Sync</button>
      <button onClick={handleAsyncClick}>Async</button>
    </div>
  );
}

// How many renders for each button click? (React 18)
```

---

### Q12. Implementation: Prevent re-render on parent state change
```typescript
// Make this component structure efficient
// Parent updates frequently, but most children shouldn't re-render

function Dashboard() {
  const [time, setTime] = useState(new Date());
  const [user, setUser] = useState({ name: 'Sahil' });
  const [stats, setStats] = useState({ views: 100 });
  
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div>
      <Clock time={time} />
      <UserProfile user={user} />
      <Stats data={stats} />
      <ExpensiveChart data={stats} />
    </div>
  );
}

// Optimize this - Clock updates every second
// but UserProfile, Stats, ExpensiveChart shouldn't re-render
```

---

## Section B: useMemo & useCallback (8 Questions)

### Q13. When to useMemo? Evaluate each case
```typescript
// Case 1: Simple calculation
const doubled = useMemo(() => count * 2, [count]);

// Case 2: Filtering array
const filtered = useMemo(
  () => items.filter(item => item.active),
  [items]
);

// Case 3: Object creation
const style = useMemo(
  () => ({ color: theme === 'dark' ? 'white' : 'black' }),
  [theme]
);

// Case 4: Expensive calculation
const sortedItems = useMemo(
  () => [...items].sort((a, b) => a.price - b.price),
  [items]
);

// Which are worth memoizing? Which are premature optimization?
```

---

### Q14. Predict: useMemo reference equality
```typescript
function Parent() {
  const [count, setCount] = useState(0);
  
  const items = useMemo(() => [1, 2, 3], []);
  
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>
      <Child items={items} />
    </div>
  );
}

const Child = React.memo(({ items }) => {
  console.log('Child rendered');
  return <div>{items.join(',')}</div>;
});

// Does Child re-render when count changes?
```

---

### Q15. Implementation: Expensive computation with useMemo
```typescript
// Implement a component that:
// 1. Has a list of 10,000 items
// 2. Has a search filter
// 3. Has a sort option
// 4. Only recomputes when filter/sort changes, not on other state changes

interface Item {
  id: string;
  name: string;
  price: number;
}

function ProductList() {
  const [items] = useState<Item[]>(/* 10000 items */);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price'>('name');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  
  // Implement filtered and sorted items
  // selectedId changes shouldn't trigger recomputation
}
```

---

### Q16. useCallback: When is it necessary?
```typescript
// Evaluate each useCallback usage

// Case 1: Passed to memoized child
const handleClick = useCallback(() => {
  console.log('clicked');
}, []);
<MemoizedButton onClick={handleClick} />

// Case 2: Used in useEffect dependency
const fetchData = useCallback(async () => {
  const data = await api.get('/data');
  setData(data);
}, []);
useEffect(() => { fetchData(); }, [fetchData]);

// Case 3: Passed to non-memoized child
const handleChange = useCallback((e) => {
  setValue(e.target.value);
}, []);
<input onChange={handleChange} />

// Case 4: Used in another useCallback
const processItem = useCallback((item) => {
  return item.value * multiplier;
}, [multiplier]);

const processAll = useCallback(() => {
  return items.map(processItem);
}, [items, processItem]);

// Which are necessary? Which are useless?
```

---

### Q17. Predict: Stale closure in useCallback
```typescript
function Counter() {
  const [count, setCount] = useState(0);
  
  const logCount = useCallback(() => {
    console.log('Count:', count);
  }, []); // Missing dependency
  
  const increment = () => {
    setCount(c => c + 1);
    logCount();
  };
  
  return (
    <button onClick={increment}>
      Count: {count}
    </button>
  );
}

// What gets logged after 3 clicks?
```

---

### Q18. Implementation: useCallback with event handlers
```typescript
// Create a list where each item has a delete button
// Optimize to prevent unnecessary re-renders

interface Item {
  id: string;
  name: string;
}

function ItemList({ items, onDelete }: {
  items: Item[];
  onDelete: (id: string) => void;
}) {
  // How to implement without creating new function for each item?
  // Two approaches: 1. data-id attribute, 2. curried function with useMemo
}
```

---

### Q19. Predict: useMemo in context provider
```typescript
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const value = {
    theme,
    setTheme,
    isDark: theme === 'dark',
  };
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// What's wrong? How many re-renders when theme changes?
// How to fix with useMemo?
```

---

### Q20. Implementation: Memoized selector pattern
```typescript
// Implement a useSelector hook that only triggers re-render
// when the selected value changes (like Redux useSelector)

const StoreContext = createContext(null);

function useSelector<T>(selector: (state: State) => T): T {
  // Implement: should memoize and compare selected values
}

// Usage:
function UserName() {
  // Only re-renders when user.name changes
  const name = useSelector(state => state.user.name);
  return <div>{name}</div>;
}
```

---

## Section C: Virtualization (4 Questions)

### Q21. Explain: Why virtualization?
```typescript
// Given: List of 10,000 items
// Each item renders a complex card component

// Without virtualization:
function BadList({ items }) {
  return (
    <div>
      {items.map(item => (
        <ComplexCard key={item.id} data={item} />
      ))}
    </div>
  );
}

// Questions:
// 1. What's the performance problem?
// 2. How many DOM nodes are created?
// 3. What's the memory impact?
// 4. How does virtualization solve this?
```

---

### Q22. Implementation: Basic virtualization
```typescript
// Implement a simple virtualized list (fixed height items)

interface VirtualListProps<T> {
  items: T[];
  itemHeight: number;
  containerHeight: number;
  renderItem: (item: T, index: number) => React.ReactNode;
}

function VirtualList<T>({
  items,
  itemHeight,
  containerHeight,
  renderItem,
}: VirtualListProps<T>) {
  // Implement:
  // 1. Calculate visible range based on scroll position
  // 2. Only render items in visible range (+ overscan)
  // 3. Use absolute positioning or padding for scroll illusion
}
```

---

### Q23. Discussion: Variable height virtualization
```typescript
// How would you handle items with different heights?

interface VariableHeightListProps<T> {
  items: T[];
  estimatedItemHeight: number;
  getItemHeight?: (index: number) => number;
  renderItem: (item: T, index: number) => React.ReactNode;
}

// Questions:
// 1. How do you calculate scroll position without knowing heights?
// 2. How do you handle height changes after render?
// 3. What's the "measured" vs "estimated" height approach?
// 4. How does react-window handle this?
```

---

### Q24. Implementation: Windowed table
```typescript
// Create a virtualized data table with:
// - Fixed header
// - Horizontal scrolling
// - Column resizing
// - Sorting (without losing scroll position)

interface Column<T> {
  key: keyof T;
  header: string;
  width: number;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

interface VirtualTableProps<T> {
  data: T[];
  columns: Column<T>[];
  rowHeight: number;
  height: number;
}

function VirtualTable<T>({ data, columns, rowHeight, height }: VirtualTableProps<T>) {
  // Implement with virtualization
}
```

---

## Section D: Code Splitting & Lazy Loading (4 Questions)

### Q25. Implementation: Route-based code splitting
```typescript
// Implement lazy loading with:
// 1. Loading fallback
// 2. Error boundary
// 3. Retry on failure
// 4. Prefetch on hover

const Dashboard = lazy(() => import('./pages/Dashboard'));

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={/* ? */} />
    </Routes>
  );
}

// Implement a LazyRoute component that handles all above
```

---

### Q26. Implementation: Component-level splitting
```typescript
// Split heavy components that are conditionally rendered

function ProductPage() {
  const [showReviews, setShowReviews] = useState(false);
  
  return (
    <div>
      <ProductInfo />
      <button onClick={() => setShowReviews(true)}>
        Show Reviews
      </button>
      {showReviews && <HeavyReviewSection />} // 500KB component
    </div>
  );
}

// How to lazy load HeavyReviewSection?
// How to show loading state?
// How to prefetch when button is hovered?
```

---

### Q27. Predict: Suspense behavior
```typescript
const SlowComponent = lazy(() => 
  new Promise(resolve => 
    setTimeout(() => 
      resolve(import('./SlowComponent')), 2000
    )
  )
);

function App() {
  const [show, setShow] = useState(false);
  
  return (
    <div>
      <button onClick={() => setShow(true)}>Load</button>
      <Suspense fallback={<div>Loading...</div>}>
        {show && <SlowComponent />}
        <div>Always visible</div>
      </Suspense>
    </div>
  );
}

// Questions:
// 1. What shows initially?
// 2. What shows when button clicked?
// 3. Is "Always visible" hidden during loading?
```

---

### Q28. Implementation: Preloading strategy
```typescript
// Implement a preloading system for routes

// 1. Preload on hover
function NavLink({ to, children }) {
  const preload = () => {
    // Implement: trigger import() for route component
  };
  
  return (
    <Link to={to} onMouseEnter={preload}>
      {children}
    </Link>
  );
}

// 2. Preload next likely routes
function usePreloadNextRoutes(currentRoute: string) {
  // Based on analytics/heuristics, preload likely next routes
}

// 3. Preload when idle
function useIdlePreload(routes: string[]) {
  // Use requestIdleCallback to preload during idle time
}
```

---

## Section E: Bundle Optimization (4 Questions)

### Q29. Discussion: Bundle analysis
```
Questions to answer:

1. How do you analyze bundle size?
   - What tools do you use?
   - What metrics matter?

2. What's a good target for:
   - Initial bundle size?
   - First Contentful Paint?
   - Time to Interactive?

3. How do you identify what to split?

4. How do you handle:
   - Large dependencies (moment, lodash)?
   - Tree shaking?
   - Dead code elimination?
```

---

### Q30. Implementation: Import optimization
```typescript
// Optimize these imports

// Bad: Imports entire library
import { format, parseISO, addDays } from 'date-fns';
import _ from 'lodash';
import * as icons from 'lucide-react';

// Optimize each:
// 1. date-fns
// 2. lodash
// 3. icons

// Also: When would you use dynamic imports for these?
```

---

### Q31. Discussion: Caching strategy
```
Questions:

1. How do you set up caching for JS bundles?
   - Cache headers
   - Filename hashing
   - Service workers

2. How do you handle cache invalidation?

3. What's the difference between:
   - vendor bundle
   - runtime chunk
   - main bundle

4. How do you handle bundle versioning?
```

---

### Q32. Implementation: Performance monitoring
```typescript
// Implement a performance monitoring system

function usePerformanceMonitor() {
  // Track:
  // 1. Component render time
  // 2. API call duration
  // 3. User interactions
  // 4. Web Vitals (LCP, FID, CLS)
  
  // Report to analytics
}

// Usage:
function ExpensiveComponent() {
  usePerformanceMonitor();
  // ... component code
}
```

---

## Performance Checklist

### Before Optimization:
- [ ] Measure first (React DevTools Profiler)
- [ ] Identify actual bottlenecks
- [ ] Set performance budgets

### Re-render Prevention:
- [ ] Use React.memo for expensive pure components
- [ ] Use useMemo for expensive calculations
- [ ] Use useCallback for callbacks passed to memoized children
- [ ] Split context to prevent unnecessary updates
- [ ] Use children prop pattern when possible

### Bundle Optimization:
- [ ] Route-based code splitting
- [ ] Lazy load heavy components
- [ ] Tree shake unused code
- [ ] Optimize large dependencies
- [ ] Analyze bundle regularly

### Runtime Optimization:
- [ ] Virtualize long lists
- [ ] Debounce/throttle expensive operations
- [ ] Use Web Workers for heavy computation
- [ ] Optimize images and assets

---

## Interview Tips

**When asked "How would you optimize X?":**

1. **Ask about metrics**: "What's the current performance? What's the target?"

2. **Measure first**: "I would start by profiling to identify bottlenecks"

3. **Low-hanging fruit**: "Quick wins like memo, code splitting..."

4. **Trade-offs**: "This optimization has X benefit but Y cost..."

5. **Real examples**: "In my previous project, I improved X by doing Y..."

