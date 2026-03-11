# React Practice Sheet 4: Architecture Topics

**Difficulty:** Hard | **Type:** Design + Discussion | **Focus:** System Design for Frontend

---

## Topic 1: Large Scale React App Structure

### Discussion Points

**Folder Structure Approaches:**

```
// 1. Feature-based (Recommended for large apps)
src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── store/
│   │   ├── types/
│   │   └── index.ts
│   ├── dashboard/
│   ├── settings/
│   └── users/
├── shared/
│   ├── components/
│   ├── hooks/
│   ├── utils/
│   └── types/
├── core/
│   ├── api/
│   ├── store/
│   └── config/
└── App.tsx

// 2. Layer-based (Common but has scaling issues)
src/
├── components/
├── hooks/
├── services/
├── store/
├── utils/
├── types/
└── pages/
```

### Questions to Answer:

**Q1: How would you structure a large e-commerce app?**
```
Think about:
- Product catalog (listing, search, filters)
- Shopping cart
- User authentication
- Checkout flow
- Order history
- Admin panel

Provide a folder structure and explain reasoning.
```

**Q2: Module Boundaries**
```typescript
// How do features communicate?
// What's exported from each feature?

// features/auth/index.ts
export { AuthProvider } from './components/AuthProvider';
export { useAuth } from './hooks/useAuth';
export { authActions } from './store/authSlice';
export type { User, AuthState } from './types';

// What should NOT be exported?
// How do you enforce module boundaries?
```

**Q3: Shared Code Strategy**
```
When does code go in /shared vs stay in feature?

Criteria to consider:
- Used by 2+ features?
- Domain-agnostic?
- Stable API?

Examples:
- Button component → shared/components
- useDebounce hook → shared/hooks
- formatPrice util → shared/utils or features/products/utils?
```

### Implementation Exercise:

**Design the structure for a SaaS Dashboard:**
```
Requirements:
- Multi-tenant (each company sees their data)
- Role-based access (admin, manager, viewer)
- Features: Analytics, Team Management, Settings, Billing
- Real-time updates (WebSocket)
- Offline support

Deliverables:
1. Folder structure
2. State management strategy
3. API layer design
4. Auth flow
```

### Followup Questions:
1. How do you handle circular dependencies between features?
2. How do you lazy load features?
3. How do you test features in isolation?
4. How do you share types between features?

---

## Topic 2: Routing Strategy

### Core Concepts

**Route Types:**
```typescript
// 1. Public routes (no auth required)
// 2. Protected routes (auth required)
// 3. Role-based routes (specific roles)
// 4. Nested routes
// 5. Dynamic routes
// 6. Modal routes (URL-based modals)
```

### Implementation Requirements:

**Route Configuration:**
```typescript
interface RouteConfig {
  path: string;
  element: React.LazyExoticComponent<React.ComponentType>;
  auth?: boolean;
  roles?: string[];
  children?: RouteConfig[];
  meta?: {
    title: string;
    description?: string;
  };
}

const routes: RouteConfig[] = [
  {
    path: '/',
    element: lazy(() => import('./pages/Home')),
    auth: false,
  },
  {
    path: '/dashboard',
    element: lazy(() => import('./pages/Dashboard')),
    auth: true,
    children: [
      {
        path: 'analytics',
        element: lazy(() => import('./pages/Analytics')),
        roles: ['admin', 'analyst'],
      },
    ],
  },
];
```

### Questions to Answer:

**Q1: Implement Protected Route Component**
```typescript
interface ProtectedRouteProps {
  children: React.ReactNode;
  roles?: string[];
  redirectTo?: string;
}

// Implement:
function ProtectedRoute({ children, roles, redirectTo }: ProtectedRouteProps) {
  // Check authentication
  // Check authorization (roles)
  // Handle loading state
  // Redirect if unauthorized
}
```

**Q2: Implement Route Guards**
```typescript
// Guard types:
// - Auth guard (is logged in?)
// - Role guard (has permission?)
// - Feature flag guard (is feature enabled?)
// - Data guard (preload data before render)

function useRouteGuard(guards: Guard[]): GuardResult {
  // Implement
}
```

**Q3: Handle Route-based Code Splitting**
```typescript
// Implement lazy loading with:
// - Loading fallback
// - Error boundary
// - Prefetching on hover

const Dashboard = lazy(() => import('./pages/Dashboard'));

function AppRoutes() {
  return (
    <Routes>
      <Route 
        path="/dashboard" 
        element={
          <Suspense fallback={<Loading />}>
            <Dashboard />
          </Suspense>
        } 
      />
    </Routes>
  );
}

// Bonus: Implement link prefetching
function PrefetchLink({ to, children }: { to: string; children: React.ReactNode }) {
  // Prefetch on hover/focus
}
```

**Q4: URL State Management**
```typescript
// Sync component state with URL
// Use cases: filters, pagination, sort, search

function useURLState<T>(
  key: string,
  defaultValue: T
): [T, (value: T) => void] {
  // Implement using useSearchParams
}

// Usage:
const [page, setPage] = useURLState('page', 1);
const [filters, setFilters] = useURLState('filters', {});
```

### Implementation Exercise:

**Build a Route System for Admin Dashboard:**
```
Requirements:
- Nested layouts (sidebar, header persistent)
- Protected routes with role checks
- 404 handling with fallback
- Route transitions/animations
- Breadcrumbs from route config
- Document title from route meta

Deliverables:
1. Route configuration
2. Layout components
3. Guard implementations
4. Breadcrumb component
```

### Followup Questions:
1. How do you handle deep linking in SPAs?
2. How do you implement route-level error boundaries?
3. How do you handle route changes in forms (unsaved changes)?
4. How do you test routing logic?

---

## Topic 3: State Management Layers

### State Categories

```typescript
// 1. UI State (local)
// - Modal open/close
// - Form inputs
// - Hover/focus states

// 2. Server State (cached data)
// - API responses
// - Needs: caching, invalidation, refetching

// 3. Global Client State
// - User preferences
// - Theme
// - Auth state

// 4. URL State
// - Filters, pagination, search
// - Shareable state
```

### Questions to Answer:

**Q1: When to use what?**
```
Categorize each use case:

1. User authentication status → ?
2. Shopping cart items → ?
3. Form input values → ?
4. Modal open/close → ?
5. Product list from API → ?
6. Search filters → ?
7. Dark mode preference → ?
8. Notifications list → ?
9. Sidebar collapsed state → ?
10. Current page number → ?
```

**Q2: Design State Architecture**
```typescript
// For an e-commerce app, design the state layer:

// 1. What goes in Redux/Zustand (global client state)?
interface GlobalState {
  // ?
}

// 2. What's managed by TanStack Query (server state)?
// Which queries? Mutations?

// 3. What stays in component state?

// 4. What goes in URL?
```

**Q3: Implement a State Management Strategy**
```typescript
// Design pattern: Separate server and client state

// Server State Layer (TanStack Query)
const useProducts = () => useQuery({
  queryKey: ['products'],
  queryFn: fetchProducts,
});

// Client State Layer (Zustand/Redux)
const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (product) => set((state) => ({
    items: [...state.items, product],
  })),
}));

// Combined Hook
function useProductWithCart(productId: string) {
  const { data: product } = useProduct(productId);
  const { items, addItem } = useCartStore();
  const inCart = items.some(item => item.id === productId);
  
  return { product, inCart, addItem };
}
```

**Q4: State Synchronization**
```typescript
// How do you sync state across:
// 1. Multiple browser tabs
// 2. Server updates (WebSocket)
// 3. Offline/Online transitions

// Implement cross-tab state sync:
function useCrossTabState<T>(key: string, initialValue: T) {
  // Use BroadcastChannel or storage events
}
```

### Implementation Exercise:

**Design State Management for Real-time Chat App:**
```
Requirements:
- Message list (cached, paginated)
- Online users presence
- Typing indicators
- Unread counts
- Draft messages
- Optimistic message sending

Deliverables:
1. State architecture diagram
2. Type definitions
3. Hook implementations
4. Real-time sync strategy
```

### Followup Questions:
1. Redux vs Context vs Zustand - when to use which?
2. How do you handle state during SSR/hydration?
3. How do you implement optimistic updates?
4. How do you persist state across sessions?

---

## Topic 4: Code Splitting

### Strategies

```typescript
// 1. Route-based splitting (most common)
const Dashboard = lazy(() => import('./pages/Dashboard'));

// 2. Component-based splitting
const HeavyChart = lazy(() => import('./components/HeavyChart'));

// 3. Library splitting
const PdfViewer = lazy(() => 
  import('react-pdf').then(mod => ({ default: mod.Document }))
);

// 4. Feature-based splitting
const AdminFeature = lazy(() => import('./features/admin'));
```

### Questions to Answer:

**Q1: Implement Smart Lazy Loading**
```typescript
// Implement a lazy component that:
// 1. Shows skeleton while loading
// 2. Has error boundary
// 3. Retries on failure
// 4. Prefetches on hover

function SmartLazy<T extends React.ComponentType<any>>({
  importFn,
  fallback,
  prefetch,
  ...props
}: SmartLazyProps<T>) {
  // Implement
}

// Usage:
<SmartLazy
  importFn={() => import('./HeavyComponent')}
  fallback={<Skeleton />}
  prefetch="hover"
/>
```

**Q2: Bundle Analysis**
```
Questions:
1. How do you analyze bundle size?
2. What tools do you use? (webpack-bundle-analyzer, source-map-explorer)
3. What's a good target bundle size?
4. How do you identify what to split?
```

**Q3: Dynamic Imports Based on Conditions**
```typescript
// Load different components based on:
// - User role
// - Feature flags
// - Device type

async function loadComponent(context: Context) {
  if (context.isAdmin) {
    return import('./AdminDashboard');
  }
  if (context.isMobile) {
    return import('./MobileDashboard');
  }
  return import('./Dashboard');
}
```

**Q4: Prefetching Strategy**
```typescript
// Implement intelligent prefetching:
// 1. Prefetch on route hover
// 2. Prefetch next likely routes
// 3. Prefetch based on viewport (IntersectionObserver)

function usePrefetch(routes: string[]) {
  // Implement
}

// Usage in navigation:
<Link 
  to="/dashboard"
  onMouseEnter={() => prefetch('/dashboard')}
>
  Dashboard
</Link>
```

### Implementation Exercise:

**Optimize Bundle for Large App:**
```
Given metrics:
- Initial bundle: 2MB
- Time to Interactive: 8 seconds
- Target: <500KB initial, <4s TTI

Tasks:
1. Identify splitting opportunities
2. Implement lazy loading
3. Set up prefetching
4. Measure improvements
```

### Followup Questions:
1. How do you handle loading states across split boundaries?
2. How do you coordinate loading of related chunks?
3. How do you version and cache split chunks?
4. How do you test code splitting?

---

## Architecture Patterns Summary

### Pattern 1: Feature Slices
```
Each feature is self-contained with its own:
- Components
- State
- API calls
- Types
- Tests
```

### Pattern 2: Clean Architecture
```
Layers:
1. Presentation (React components)
2. Application (hooks, context)
3. Domain (business logic, types)
4. Infrastructure (API, storage)
```

### Pattern 3: Atomic Design
```
Hierarchy:
1. Atoms (Button, Input)
2. Molecules (SearchInput, Card)
3. Organisms (Header, ProductList)
4. Templates (PageLayout)
5. Pages (Home, Dashboard)
```

---

## Interview Discussion Template

**When asked about architecture:**

1. **Clarify requirements**
   - App size and complexity
   - Team size
   - Performance requirements
   - Scalability needs

2. **Explain tradeoffs**
   - "I would use X because..."
   - "The tradeoff is..."
   - "Alternative approach would be..."

3. **Provide concrete examples**
   - "In my previous project..."
   - "For example, if we have..."

4. **Consider edge cases**
   - "We also need to handle..."
   - "What happens when..."

---

## Practice Strategy

**For each topic:**
1. Be able to explain the concept (2 minutes)
2. Draw a diagram (whiteboard friendly)
3. Write pseudo-code for implementation
4. Discuss tradeoffs and alternatives
5. Relate to real-world experience

**Mock Interview Questions:**
1. "How would you structure a large React application?"
2. "Walk me through your routing strategy"
3. "How do you manage state in complex apps?"
4. "How would you optimize a slow React app?"

