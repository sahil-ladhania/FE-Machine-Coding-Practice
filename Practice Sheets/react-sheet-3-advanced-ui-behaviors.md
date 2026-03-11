# React Practice Sheet 3: Advanced UI Behaviors

**Difficulty:** Hard | **Time:** 90-120 mins per component | **Stack:** React + TypeScript + Tailwind CSS

---

## Component 1: Drag & Drop

### Requirements

**Core Functionality:**
- Drag items within a list
- Drop to reorder
- Visual feedback during drag
- Drag between multiple lists

**Types Interface:**
```typescript
interface DragItem {
  id: string;
  content: React.ReactNode;
  data?: Record<string, unknown>;
}

interface DraggableListProps {
  items: DragItem[];
  onReorder: (items: DragItem[]) => void;
  droppableId: string;
}

interface DragDropContextProps {
  children: React.ReactNode;
  onDragEnd: (result: DragResult) => void;
}

interface DragResult {
  source: { droppableId: string; index: number };
  destination: { droppableId: string; index: number } | null;
  draggableId: string;
}
```

**State Management:**
- Currently dragging item
- Drag source/destination
- Placeholder position
- Items order

**Features to Implement:**
- [ ] Drag handle
- [ ] Drag preview/ghost
- [ ] Drop placeholder indicator
- [ ] Smooth reorder animation
- [ ] Cancel drag (Escape key)
- [ ] Touch support

**Edge Cases to Handle:**
- Drop on same position
- Drop outside valid area
- Rapid drag operations
- Nested draggable items
- Disabled items

**Bonus Features:**
- [ ] Multi-select drag
- [ ] Drag between lists (Kanban style)
- [ ] Drag constraints (horizontal/vertical only)
- [ ] Auto-scroll when dragging near edges
- [ ] Keyboard-only drag (accessibility)

### Followup Questions:
1. How would you implement drag and drop without a library?
2. HTML5 Drag API vs pointer events - tradeoffs?
3. How would you optimize for 100+ draggable items?
4. How do you handle drag and drop on touch devices?

---

## Component 2: Virtualized List

### Requirements

**Core Functionality:**
- Render only visible items
- Smooth scrolling
- Support variable item heights
- Handle 10,000+ items efficiently

**Types Interface:**
```typescript
interface VirtualizedListProps<T> {
  items: T[];
  itemHeight: number | ((index: number) => number);
  windowHeight: number;
  overscan?: number;  // extra items to render above/below
  renderItem: (item: T, index: number) => React.ReactNode;
  onScroll?: (scrollTop: number) => void;
}

interface VirtualizedState {
  scrollTop: number;
  startIndex: number;
  endIndex: number;
}
```

**State Management:**
- Scroll position
- Visible range (start/end index)
- Item positions (for variable heights)

**Features to Implement:**
- [ ] Fixed height items virtualization
- [ ] Variable height support
- [ ] Overscan (render buffer)
- [ ] Scroll to index
- [ ] Sticky headers within list

**Performance Requirements:**
- DOM nodes should stay constant (not grow with data)
- Scroll should be 60fps
- Initial render under 100ms

**Edge Cases to Handle:**
- Empty list
- Single item
- Rapid scrolling
- Dynamic item height changes
- List resize

**Bonus Features:**
- [ ] Bi-directional virtualization (chat)
- [ ] Grid virtualization
- [ ] Scroll restoration
- [ ] Loading indicators at edges
- [ ] Pull to refresh integration

### Followup Questions:
1. How does virtualization work conceptually?
2. How do you handle variable heights without measuring first?
3. How would you implement horizontal virtualization?
4. react-window vs react-virtualized - differences?

---

## Component 3: Form Builder

### Requirements

**Core Functionality:**
- Drag and drop form fields
- Configure field properties
- Preview form
- Generate form schema

**Types Interface:**
```typescript
type FieldType = 'text' | 'email' | 'number' | 'select' | 'checkbox' | 'radio' | 'textarea' | 'date';

interface FormField {
  id: string;
  type: FieldType;
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  validation?: ValidationRule[];
  options?: { label: string; value: string }[];  // for select, radio
  defaultValue?: string | number | boolean;
}

interface ValidationRule {
  type: 'required' | 'minLength' | 'maxLength' | 'pattern' | 'custom';
  value?: string | number;
  message: string;
}

interface FormSchema {
  id: string;
  title: string;
  fields: FormField[];
}
```

**State Management:**
- Form schema/fields array
- Selected field for editing
- Preview mode state
- Drag state

**Features to Implement:**
- [ ] Field palette (available field types)
- [ ] Drag field to form canvas
- [ ] Click field to edit properties
- [ ] Property panel (label, placeholder, validation)
- [ ] Reorder fields
- [ ] Delete field
- [ ] Preview mode
- [ ] Export schema (JSON)

**Edge Cases to Handle:**
- Duplicate field names
- Empty form
- Complex validation rules
- Field dependencies

**Bonus Features:**
- [ ] Import existing schema
- [ ] Multi-column layouts
- [ ] Conditional fields (show if...)
- [ ] Field groups/sections
- [ ] Custom validation functions
- [ ] Undo/redo

### Followup Questions:
1. How would you implement conditional field visibility?
2. How would you validate the form schema itself?
3. How would you handle form submission in preview?
4. How would you store and load form templates?

---

## Component 4: Multi-Step Form with Validation

### Requirements

**Core Functionality:**
- Multiple form steps/pages
- Validation per step
- Progress indicator
- Navigation (next/prev/jump)
- Save progress

**Types Interface:**
```typescript
interface StepConfig {
  id: string;
  title: string;
  description?: string;
  fields: FieldConfig[];
  validation?: (data: Record<string, unknown>) => Record<string, string>;
}

interface MultiStepFormProps {
  steps: StepConfig[];
  onSubmit: (data: Record<string, unknown>) => Promise<void>;
  onStepChange?: (stepIndex: number) => void;
  initialData?: Record<string, unknown>;
  allowSkip?: boolean;
}

interface MultiStepFormState {
  currentStep: number;
  formData: Record<string, unknown>;
  errors: Record<string, string>;
  completedSteps: Set<number>;
  isSubmitting: boolean;
}
```

**State Management:**
- Current step index
- Form data (accumulated across steps)
- Validation errors per step
- Completed steps tracking

**Features to Implement:**
- [ ] Step indicator/progress bar
- [ ] Previous/Next navigation
- [ ] Validate before proceeding
- [ ] Show errors inline
- [ ] Jump to step (if completed)
- [ ] Review step before submit
- [ ] Submit with loading state

**Validation:**
- [ ] Required fields
- [ ] Field format validation
- [ ] Cross-field validation
- [ ] Async validation (check email exists)

**Edge Cases to Handle:**
- Browser back button
- Page refresh (save progress)
- Validation errors on previous steps
- API errors on submit
- Form timeout

**Bonus Features:**
- [ ] Save draft to localStorage
- [ ] URL-based step (shareable links)
- [ ] Animated transitions
- [ ] Skip optional steps
- [ ] File uploads with preview

### Followup Questions:
1. How would you handle browser back button?
2. How would you implement auto-save draft?
3. How would you handle step dependencies?
4. How would you test multi-step forms?

---

## Component 5: Dark Mode + Theming

### Requirements

**Core Functionality:**
- Toggle between light/dark mode
- System preference detection
- Persist preference
- Dynamic theme colors

**Types Interface:**
```typescript
type ThemeMode = 'light' | 'dark' | 'system';

interface Theme {
  mode: ThemeMode;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    error: string;
    success: string;
  };
  spacing: Record<string, string>;
  borderRadius: Record<string, string>;
}

interface ThemeContextType {
  theme: Theme;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
}
```

**State Management:**
- Current theme mode
- Computed theme values
- System preference listener

**Features to Implement:**
- [ ] ThemeProvider context
- [ ] Light/Dark/System toggle
- [ ] CSS variables integration
- [ ] Tailwind dark mode class
- [ ] Persist to localStorage
- [ ] Listen to system preference changes
- [ ] Smooth transition on change

**Implementation Options:**
1. CSS Variables approach
2. Tailwind `dark:` classes
3. CSS-in-JS theming
4. Data attribute switching

**Edge Cases to Handle:**
- Flash of wrong theme on load (FOUC)
- System preference changes while app open
- Invalid stored preference
- SSR hydration mismatch

**Bonus Features:**
- [ ] Multiple theme options (not just light/dark)
- [ ] Custom theme builder
- [ ] Per-component theme overrides
- [ ] Animated theme transitions
- [ ] Contrast mode / High contrast

### Followup Questions:
1. How do you prevent flash of unstyled content?
2. CSS variables vs Tailwind dark mode - tradeoffs?
3. How would you handle SSR with dark mode?
4. How would you implement theme customization UI?

---

## Implementation Patterns

### Drag and Drop Core Logic:
```typescript
// Simplified drag state management
interface DragState {
  isDragging: boolean;
  draggedId: string | null;
  sourceIndex: number | null;
  currentIndex: number | null;
}

function useDragAndDrop<T extends { id: string }>(
  items: T[],
  onReorder: (items: T[]) => void
) {
  const [dragState, setDragState] = useState<DragState>({
    isDragging: false,
    draggedId: null,
    sourceIndex: null,
    currentIndex: null,
  });

  const handleDragStart = (id: string, index: number) => {
    setDragState({
      isDragging: true,
      draggedId: id,
      sourceIndex: index,
      currentIndex: index,
    });
  };

  const handleDragOver = (index: number) => {
    if (dragState.currentIndex !== index) {
      setDragState(prev => ({ ...prev, currentIndex: index }));
    }
  };

  const handleDragEnd = () => {
    if (dragState.sourceIndex !== null && dragState.currentIndex !== null) {
      const newItems = [...items];
      const [removed] = newItems.splice(dragState.sourceIndex, 1);
      newItems.splice(dragState.currentIndex, 0, removed);
      onReorder(newItems);
    }
    setDragState({
      isDragging: false,
      draggedId: null,
      sourceIndex: null,
      currentIndex: null,
    });
  };

  return { dragState, handleDragStart, handleDragOver, handleDragEnd };
}
```

### Virtualization Core Logic:
```typescript
function useVirtualization(
  totalItems: number,
  itemHeight: number,
  windowHeight: number,
  overscan: number = 3
) {
  const [scrollTop, setScrollTop] = useState(0);

  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
  const endIndex = Math.min(
    totalItems - 1,
    Math.ceil((scrollTop + windowHeight) / itemHeight) + overscan
  );

  const visibleItems = endIndex - startIndex + 1;
  const totalHeight = totalItems * itemHeight;
  const offsetY = startIndex * itemHeight;

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  return {
    startIndex,
    endIndex,
    visibleItems,
    totalHeight,
    offsetY,
    handleScroll,
  };
}
```

### Theme Context Setup:
```typescript
const ThemeContext = createContext<ThemeContextType | null>(null);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const stored = localStorage.getItem('theme-mode');
    return (stored as ThemeMode) || 'system';
  });

  const systemDark = useMediaQuery('(prefers-color-scheme: dark)');

  const resolvedMode = mode === 'system' 
    ? (systemDark ? 'dark' : 'light') 
    : mode;

  useEffect(() => {
    document.documentElement.classList.toggle('dark', resolvedMode === 'dark');
    localStorage.setItem('theme-mode', mode);
  }, [mode, resolvedMode]);

  const value = {
    theme: themes[resolvedMode],
    mode,
    setMode,
    toggleMode: () => setMode(prev => prev === 'dark' ? 'light' : 'dark'),
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
```

---

## Practice Strategy

**Build Order (recommended):**
1. Dark Mode + Theming (context, CSS)
2. Multi-Step Form (state management)
3. Drag & Drop (event handling)
4. Virtualized List (performance)
5. Form Builder (complex state + drag)

**After Building Each:**
1. Performance test with large data
2. Mobile/touch testing
3. Accessibility audit
4. Code review for optimization

