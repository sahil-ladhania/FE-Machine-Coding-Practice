# React Practice Sheet 5: Real-World Design Problems

**Difficulty:** Hard | **Time:** 2-3 hours per problem | **Stack:** React + TypeScript + Tailwind CSS

---

## Problem 1: E-commerce Product Listing Page (PLP)

### Requirements

**Core Features:**
- Product grid/list view toggle
- Filters (category, price range, rating, brand)
- Sort (price, rating, newest, popularity)
- Pagination / Infinite scroll
- Search with autocomplete
- Add to cart / wishlist

**Types Interface:**
```typescript
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  brand: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  variants?: ProductVariant[];
}

interface ProductVariant {
  id: string;
  name: string;
  options: string[];
  priceModifier?: number;
}

interface FilterState {
  categories: string[];
  priceRange: [number, number];
  minRating: number;
  brands: string[];
  inStockOnly: boolean;
}

interface SortOption {
  field: 'price' | 'rating' | 'createdAt' | 'popularity';
  direction: 'asc' | 'desc';
}

interface PLPState {
  products: Product[];
  filters: FilterState;
  sort: SortOption;
  view: 'grid' | 'list';
  page: number;
  totalPages: number;
  isLoading: boolean;
}
```

**State Management:**
- URL state for filters/sort (shareable links)
- Local state for view mode
- Server state for products (TanStack Query)
- Global state for cart/wishlist

**Components to Build:**
```
ProductListingPage/
├── FilterSidebar/
│   ├── CategoryFilter
│   ├── PriceRangeSlider
│   ├── RatingFilter
│   ├── BrandFilter
│   └── ActiveFilters (chips)
├── ProductGrid/
│   ├── ProductCard
│   ├── QuickViewModal
│   └── AddToCartButton
├── SearchBar/
│   ├── SearchInput
│   └── SearchSuggestions
├── SortDropdown
├── ViewToggle
└── Pagination
```

**Edge Cases:**
- No products match filters
- Filter combinations that return 0 results
- Price range with no products
- Loading states for each section
- Error handling for failed API calls
- Mobile responsive filter drawer

**Bonus Features:**
- [ ] Compare products (select up to 3)
- [ ] Recently viewed products
- [ ] "Similar products" recommendations
- [ ] Price drop alerts
- [ ] Save filter presets

### Followup Questions:
1. How would you handle 10,000+ products efficiently?
2. How would you implement faceted search (show counts per filter)?
3. How would you sync filter state with URL?
4. How would you implement A/B testing for different layouts?

---

## Problem 2: Product Detail Page (PDP)

### Requirements

**Core Features:**
- Image gallery with zoom
- Variant selection (size, color)
- Quantity selector
- Add to cart with feedback
- Product reviews section
- Related products

**Types Interface:**
```typescript
interface ProductDetail extends Product {
  specifications: Record<string, string>;
  features: string[];
  reviews: Review[];
  relatedProducts: Product[];
  breadcrumbs: BreadcrumbItem[];
}

interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  title: string;
  content: string;
  images?: string[];
  helpful: number;
  verified: boolean;
  createdAt: Date;
}

interface SelectedVariant {
  size?: string;
  color?: string;
  [key: string]: string | undefined;
}

interface PDPState {
  product: ProductDetail | null;
  selectedVariant: SelectedVariant;
  quantity: number;
  activeImageIndex: number;
  isZoomed: boolean;
  reviewsPage: number;
}
```

**Components to Build:**
```
ProductDetailPage/
├── ImageGallery/
│   ├── MainImage (with zoom)
│   ├── ThumbnailStrip
│   └── ImageModal (fullscreen)
├── ProductInfo/
│   ├── Title & Price
│   ├── VariantSelector
│   ├── QuantitySelector
│   ├── AddToCartButton
│   └── WishlistButton
├── ProductTabs/
│   ├── Description
│   ├── Specifications
│   └── Reviews
├── ReviewSection/
│   ├── RatingSummary
│   ├── ReviewFilters
│   ├── ReviewList
│   └── WriteReviewModal
└── RelatedProducts (carousel)
```

**Edge Cases:**
- Out of stock variants
- Invalid variant combinations
- Image loading failures
- Max quantity limits
- Reviews pagination
- Empty reviews state

**Bonus Features:**
- [ ] 360° product view
- [ ] AR try-on (for fashion)
- [ ] Size guide modal
- [ ] Price history chart
- [ ] "Notify when in stock"
- [ ] Share product (social/copy link)

### Followup Questions:
1. How would you implement image zoom on hover?
2. How would you handle variant-specific pricing?
3. How would you implement "sticky" add to cart on scroll?
4. How would you track product views for analytics?

---

## Problem 3: Real-time Dashboard

### Requirements

**Core Features:**
- Live data updates (WebSocket)
- Multiple chart types (line, bar, pie)
- Date range selector
- Auto-refresh toggle
- Export data (CSV, PDF)
- Responsive grid layout

**Types Interface:**
```typescript
interface DashboardConfig {
  id: string;
  name: string;
  widgets: Widget[];
  refreshInterval: number;
  dateRange: DateRange;
}

interface Widget {
  id: string;
  type: 'chart' | 'metric' | 'table' | 'list';
  title: string;
  dataSource: string;
  config: WidgetConfig;
  position: { x: number; y: number; w: number; h: number };
}

interface ChartConfig {
  chartType: 'line' | 'bar' | 'pie' | 'area' | 'donut';
  xAxis?: AxisConfig;
  yAxis?: AxisConfig;
  series: SeriesConfig[];
}

interface MetricConfig {
  format: 'number' | 'currency' | 'percentage';
  comparison?: 'previous_period' | 'target';
  trend?: boolean;
}

interface DashboardState {
  config: DashboardConfig;
  data: Record<string, unknown>;
  isConnected: boolean;
  lastUpdated: Date;
  isLoading: boolean;
  error: string | null;
}
```

**Components to Build:**
```
Dashboard/
├── DashboardHeader/
│   ├── DateRangePicker
│   ├── RefreshToggle
│   └── ExportMenu
├── WidgetGrid/
│   ├── ChartWidget
│   ├── MetricWidget
│   ├── TableWidget
│   └── ListWidget
├── ConnectionStatus
└── ErrorBoundary
```

**WebSocket Integration:**
```typescript
interface WebSocketMessage {
  type: 'data_update' | 'connection_status' | 'error';
  widgetId?: string;
  payload: unknown;
  timestamp: Date;
}

// Hook to implement:
function useWebSocketData(config: DashboardConfig) {
  // Connect to WebSocket
  // Handle reconnection
  // Parse and distribute updates
  // Return connection status
}
```

**Edge Cases:**
- WebSocket disconnection
- Data update conflicts
- Chart with no data
- Very large datasets
- Timezone handling
- Concurrent updates

**Bonus Features:**
- [ ] Drag-and-drop widget arrangement
- [ ] Custom widget creation
- [ ] Dashboard sharing/embedding
- [ ] Alerts and thresholds
- [ ] Fullscreen mode per widget
- [ ] Data drill-down

### Followup Questions:
1. How would you handle WebSocket reconnection?
2. How would you optimize for 50+ widgets?
3. How would you implement real-time collaboration?
4. How would you handle different timezones?

---

## Problem 4: Chat Application

### Requirements

**Core Features:**
- Real-time messaging
- Typing indicators
- Read receipts
- Message reactions
- File/image sharing
- User presence (online/offline)

**Types Interface:**
```typescript
interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  content: string;
  type: 'text' | 'image' | 'file' | 'system';
  attachments?: Attachment[];
  reactions: Reaction[];
  readBy: string[];
  replyTo?: string;
  createdAt: Date;
  editedAt?: Date;
  deletedAt?: Date;
}

interface Conversation {
  id: string;
  type: 'direct' | 'group';
  participants: User[];
  name?: string;
  avatar?: string;
  lastMessage?: Message;
  unreadCount: number;
  typing: string[];
  pinnedAt?: Date;
}

interface User {
  id: string;
  name: string;
  avatar: string;
  status: 'online' | 'offline' | 'away';
  lastSeen?: Date;
}

interface ChatState {
  conversations: Conversation[];
  activeConversationId: string | null;
  messages: Record<string, Message[]>;
  currentUser: User;
  isConnected: boolean;
}
```

**Components to Build:**
```
ChatApp/
├── ConversationList/
│   ├── SearchConversations
│   ├── ConversationItem
│   └── NewConversationButton
├── ChatWindow/
│   ├── ChatHeader
│   ├── MessageList (virtualized)
│   ├── MessageItem
│   ├── TypingIndicator
│   └── MessageInput
├── MessageInput/
│   ├── TextArea (with mentions)
│   ├── EmojiPicker
│   ├── FileUpload
│   └── SendButton
└── UserPresence
```

**Edge Cases:**
- Message delivery failures
- Offline message queuing
- Very long messages
- Large file uploads
- Concurrent typing
- Message ordering issues

**Bonus Features:**
- [ ] Message search
- [ ] Voice messages
- [ ] Message threading
- [ ] Pinned messages
- [ ] Message forwarding
- [ ] End-to-end encryption indicator

### Followup Questions:
1. How would you handle offline message queue?
2. How would you implement infinite scroll for messages?
3. How would you optimize for 1000+ conversations?
4. How would you handle message encryption?

---

## Problem 5: Form-Heavy Admin Panel

### Requirements

**Core Features:**
- CRUD operations for multiple entities
- Complex forms with validation
- Bulk actions (select multiple, delete all)
- Data tables with sorting/filtering
- Role-based access control

**Types Interface:**
```typescript
interface Entity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
}

interface User extends Entity {
  email: string;
  name: string;
  role: 'admin' | 'manager' | 'user';
  status: 'active' | 'inactive' | 'pending';
  permissions: string[];
}

interface FormConfig {
  fields: FieldConfig[];
  validation: ValidationSchema;
  onSubmit: (data: Record<string, unknown>) => Promise<void>;
}

interface FieldConfig {
  name: string;
  type: 'text' | 'email' | 'select' | 'multiselect' | 'date' | 'file' | 'richtext';
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: SelectOption[];
  dependsOn?: DependencyConfig;
}

interface TableConfig {
  columns: ColumnConfig[];
  actions: ActionConfig[];
  bulkActions: BulkActionConfig[];
  pagination: PaginationConfig;
}
```

**Components to Build:**
```
AdminPanel/
├── Layout/
│   ├── Sidebar (navigation)
│   ├── Header (user menu)
│   └── Breadcrumbs
├── DataTable/
│   ├── TableHeader (sort, filter)
│   ├── TableBody
│   ├── TableRow (with actions)
│   ├── BulkActionBar
│   └── Pagination
├── Forms/
│   ├── DynamicForm
│   ├── FormField
│   ├── FileUpload
│   └── RichTextEditor
└── Modals/
    ├── CreateModal
    ├── EditModal
    ├── DeleteConfirmation
    └── BulkDeleteConfirmation
```

**Edge Cases:**
- Form validation errors
- Concurrent edits
- Unsaved changes warning
- Large file uploads
- Permission denied handling
- Optimistic updates rollback

**Bonus Features:**
- [ ] Audit log viewer
- [ ] Import/Export (CSV, Excel)
- [ ] Custom field types
- [ ] Workflow approvals
- [ ] Activity timeline
- [ ] Dashboard widgets

### Followup Questions:
1. How would you implement optimistic updates?
2. How would you handle concurrent edits?
3. How would you build a dynamic form renderer?
4. How would you implement field-level permissions?

---

## Design Problem Interview Template

**When solving design problems:**

### 1. Clarify Requirements (2-3 mins)
- What are the core features?
- Who are the users?
- Any performance requirements?
- Mobile support needed?

### 2. Component Architecture (5 mins)
- Draw component tree
- Identify reusable components
- Plan component communication

### 3. State Management (5 mins)
- What state exists?
- Where does it live?
- How does it flow?

### 4. Data Flow (3 mins)
- API structure
- Caching strategy
- Real-time updates?

### 5. Edge Cases (3 mins)
- Error states
- Loading states
- Empty states
- Offline handling

### 6. Implementation Priority
- MVP features first
- Nice-to-haves later
- Performance optimizations

---

## Practice Strategy

**For each problem:**
1. Time yourself (90 mins max)
2. Draw architecture first
3. Define types/interfaces
4. Build incrementally
5. Handle edge cases last

**Mock Interview:**
1. Explain your approach (5 mins)
2. Code core components (60 mins)
3. Discuss tradeoffs (10 mins)
4. Answer followups (15 mins)

