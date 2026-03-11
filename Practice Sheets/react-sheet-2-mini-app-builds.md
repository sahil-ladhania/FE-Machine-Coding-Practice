# React Practice Sheet 2: Mini App Builds

**Difficulty:** Medium to Hard | **Time:** 60-90 mins per app | **Stack:** React + TypeScript + Tailwind CSS

---

## App 1: To-Do App (CRUD + Filters)

### Requirements

**Core Functionality:**
- Add new todo
- Edit existing todo (inline editing)
- Delete todo
- Mark as complete/incomplete
- Filter by: All, Active, Completed
- Clear all completed
- Persist to localStorage

**Props/Types Interface:**
```typescript
interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

type FilterType = 'all' | 'active' | 'completed';

interface TodoState {
  todos: Todo[];
  filter: FilterType;
}
```

**State Management:**
- Array of todos
- Current filter
- Edit mode state (which todo is being edited)
- Loading state (if using API)

**Features to Implement:**
- [ ] Add todo (Enter key + button)
- [ ] Inline edit (double-click to edit)
- [ ] Delete with confirmation
- [ ] Toggle single / toggle all
- [ ] Filter buttons with active state
- [ ] Items left counter
- [ ] Clear completed button

**Edge Cases to Handle:**
- Empty todo text (prevent adding)
- Whitespace-only text
- Very long todo text
- Empty list states for each filter
- Rapid add/delete operations

**Bonus Features:**
- [ ] Drag and drop reordering
- [ ] Due dates
- [ ] Priority levels
- [ ] Categories/tags
- [ ] Search todos
- [ ] Undo delete

### Followup Questions:
1. How would you implement optimistic updates with API?
2. How would you sync across multiple tabs?
3. How would you handle 1000+ todos (virtualization)?
4. How would you implement undo/redo?

---

## App 2: Stopwatch / Timer

### Requirements

**Core Functionality:**
- Start/Stop/Reset controls
- Display time in HH:MM:SS:MS format
- Lap times recording
- Countdown timer mode

**Types Interface:**
```typescript
interface StopwatchState {
  time: number;  // milliseconds
  isRunning: boolean;
  laps: number[];
}

interface TimerState {
  targetTime: number;
  remainingTime: number;
  isRunning: boolean;
  isComplete: boolean;
}
```

**State Management:**
- Current time value
- Running state
- Interval reference (useRef)
- Laps array

**Features to Implement:**
- [ ] Accurate time tracking (handle tab inactive)
- [ ] Start/Pause toggle
- [ ] Reset to zero
- [ ] Record lap time
- [ ] Display lap times list
- [ ] Best/Worst lap indicators

**Timer Mode:**
- [ ] Input hours/minutes/seconds
- [ ] Start countdown
- [ ] Alert/sound on completion
- [ ] Pause/resume countdown

**Edge Cases to Handle:**
- Browser tab going inactive
- Very long running times
- Rapid start/stop clicking
- Reset while running
- Timer input validation

**Bonus Features:**
- [ ] Multiple parallel timers
- [ ] Preset times (5min, 10min, etc.)
- [ ] Background notification on complete
- [ ] Sound effects
- [ ] Keyboard shortcuts

### Followup Questions:
1. Why use useRef for interval instead of state?
2. How do you handle time drift over long periods?
3. How would you implement background notifications?
4. How do you test time-based components?

---

## App 3: Shopping Cart UI

### Requirements

**Core Functionality:**
- Product listing with Add to Cart
- Cart drawer/modal with items
- Update quantity in cart
- Remove from cart
- Calculate totals

**Types Interface:**
```typescript
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  stock: number;
  category: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}
```

**State Management:**
- Use Context + useReducer for cart
- Product list (can be static or from API)
- Cart open/close state

**Features to Implement:**
- [ ] Product grid display
- [ ] Add to cart button
- [ ] Cart icon with badge (item count)
- [ ] Cart drawer/sidebar
- [ ] Quantity +/- controls
- [ ] Remove item
- [ ] Subtotal per item
- [ ] Total calculation
- [ ] Empty cart state

**Edge Cases to Handle:**
- Out of stock products
- Quantity exceeds stock
- Price changes while in cart
- Empty cart
- Very large quantities

**Bonus Features:**
- [ ] Apply coupon code
- [ ] Quantity input (not just +/-)
- [ ] Save for later
- [ ] Recently viewed
- [ ] Persist cart to localStorage
- [ ] Stock validation on checkout

### Followup Questions:
1. Why Context + useReducer vs Redux?
2. How would you handle stock sync with backend?
3. How would you implement optimistic cart updates?
4. How would you handle cart merge on login?

---

## App 4: Search with Debounce + API

### Requirements

**Core Functionality:**
- Search input field
- Debounced API calls
- Display search results
- Loading and error states
- Recent searches

**Types Interface:**
```typescript
interface SearchResult {
  id: string;
  title: string;
  description: string;
  image?: string;
}

interface SearchState {
  query: string;
  results: SearchResult[];
  isLoading: boolean;
  error: string | null;
  recentSearches: string[];
}
```

**State Management:**
- Search query
- Results array
- Loading state
- Error state
- Debounced query value

**Features to Implement:**
- [ ] Input with debounce (300ms)
- [ ] Cancel previous request on new search
- [ ] Loading indicator
- [ ] Results dropdown
- [ ] Highlight matching text
- [ ] Keyboard navigation (up/down/enter)
- [ ] Recent searches (stored locally)
- [ ] Clear search button

**API Handling:**
- [ ] Use AbortController for cancellation
- [ ] Handle network errors
- [ ] Handle empty results
- [ ] Minimum query length (e.g., 2 chars)

**Edge Cases to Handle:**
- Empty query
- Query too short
- No results found
- API error
- Rapid typing
- Special characters

**Bonus Features:**
- [ ] Search suggestions/autocomplete
- [ ] Category filters
- [ ] Search history persistence
- [ ] Voice search
- [ ] Infinite scroll results

### Followup Questions:
1. How do you implement debounce? Write the hook.
2. Why use AbortController?
3. How would you cache search results?
4. How would you handle offline search?

---

## App 5: Infinite Scroll List

### Requirements

**Core Functionality:**
- Load initial set of items
- Load more on scroll to bottom
- Loading indicator
- End of list indicator

**Types Interface:**
```typescript
interface ListItem {
  id: string;
  title: string;
  description: string;
  image?: string;
}

interface InfiniteListState {
  items: ListItem[];
  page: number;
  hasMore: boolean;
  isLoading: boolean;
  error: string | null;
}

interface UseInfiniteScrollOptions {
  threshold?: number;  // px from bottom to trigger
  rootMargin?: string;
}
```

**State Management:**
- Items array (append on load)
- Current page/cursor
- Has more flag
- Loading state

**Features to Implement:**
- [ ] Intersection Observer trigger
- [ ] Loading spinner at bottom
- [ ] "No more items" message
- [ ] Error retry button
- [ ] Scroll to top button
- [ ] Item count display

**Implementation Options:**
1. Scroll event listener
2. Intersection Observer (preferred)

**Edge Cases to Handle:**
- Initial empty state
- Fast scrolling
- Network errors mid-scroll
- Duplicate items (pagination quirks)
- Page refresh (preserve scroll position?)

**Bonus Features:**
- [ ] Pull to refresh
- [ ] Virtualization (for 1000+ items)
- [ ] Skeleton loading states
- [ ] Reverse infinite scroll (chat-like)
- [ ] Preserve scroll position on back

### Followup Questions:
1. Why Intersection Observer over scroll event?
2. How would you implement virtualization?
3. How do you handle cursor-based pagination?
4. How would you implement bi-directional infinite scroll?

---

## App 6: File Explorer UI

### Requirements

**Core Functionality:**
- Display folder/file tree structure
- Expand/collapse folders
- Select files/folders
- Breadcrumb navigation

**Types Interface:**
```typescript
interface FileNode {
  id: string;
  name: string;
  type: 'file' | 'folder';
  children?: FileNode[];
  size?: number;  // for files
  extension?: string;
  createdAt: Date;
  modifiedAt: Date;
}

interface FileExplorerState {
  tree: FileNode[];
  expandedIds: Set<string>;
  selectedIds: Set<string>;
  currentPath: string[];
  viewMode: 'list' | 'grid';
}
```

**State Management:**
- Tree data structure
- Expanded folder IDs
- Selected file/folder IDs
- Current path for breadcrumbs
- View mode

**Features to Implement:**
- [ ] Recursive tree rendering
- [ ] Folder expand/collapse
- [ ] File/folder icons based on type
- [ ] Single/multi select
- [ ] Breadcrumb navigation
- [ ] List/Grid view toggle
- [ ] Sort by name/date/size
- [ ] Search/filter files

**Edge Cases to Handle:**
- Empty folders
- Deeply nested structures (10+ levels)
- Very long file names
- Large number of files (1000+)
- Special characters in names

**Bonus Features:**
- [ ] Drag and drop to move files
- [ ] Context menu (right-click)
- [ ] Rename inline
- [ ] Create new folder
- [ ] Delete confirmation
- [ ] File preview on select
- [ ] Keyboard navigation

### Followup Questions:
1. How would you optimize rendering for large trees?
2. How would you implement drag and drop reordering?
3. How would you handle async loading of folder contents?
4. How would you implement undo for file operations?

---

## Implementation Patterns

### Custom Hooks to Build:

```typescript
// useDebounce
function useDebounce<T>(value: T, delay: number): T {
  // Your implementation
}

// useInfiniteScroll
function useInfiniteScroll(callback: () => void, options?: Options) {
  // Your implementation
}

// useLocalStorage
function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  // Your implementation
}

// useInterval
function useInterval(callback: () => void, delay: number | null) {
  // Your implementation
}
```

### Common State Patterns:

```typescript
// Reducer for complex state
type TodoAction =
  | { type: 'ADD'; payload: string }
  | { type: 'DELETE'; payload: string }
  | { type: 'TOGGLE'; payload: string }
  | { type: 'EDIT'; payload: { id: string; text: string } };

function todoReducer(state: Todo[], action: TodoAction): Todo[] {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: generateId(), text: action.payload, completed: false }];
    // ... other cases
  }
}
```

---

## Practice Strategy

**Day 1-2 Target:** Complete 3 apps

**Build Order (recommended):**
1. To-Do App (fundamental CRUD)
2. Stopwatch (intervals, refs)
3. Search with Debounce (async, hooks)
4. Shopping Cart (context, reducers)
5. Infinite Scroll (Intersection Observer)
6. File Explorer (recursive, complex state)

**After Building Each:**
1. Test all user flows
2. Handle all edge cases
3. Add keyboard support
4. Optimize re-renders
5. Add TypeScript types strictly

