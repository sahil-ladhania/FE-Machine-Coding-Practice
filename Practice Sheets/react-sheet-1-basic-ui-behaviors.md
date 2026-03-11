# React Practice Sheet 1: Basic UI Behaviors

**Difficulty:** Medium | **Time:** 45-60 mins per component | **Stack:** React + TypeScript + Tailwind CSS

---

## Component 1: Accordion

### Requirements

**Core Functionality:**
- Expand/collapse sections by clicking on header
- Only one section open at a time (single mode)
- Smooth height animation on open/close
- Show expand/collapse icon that rotates

**Props Interface:**
```typescript
interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  disabled?: boolean;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
  allowMultiple?: boolean;
  onChange?: (openIds: string[]) => void;
}
```

**State Management:**
- Track which panel(s) are open
- Handle disabled state

**Edge Cases to Handle:**
- Empty items array
- All items disabled
- Very long content
- Nested accordions
- Rapid clicking

**Bonus Features:**
- [ ] Multiple panels open mode (`allowMultiple` prop)
- [ ] Keyboard navigation (Arrow keys, Enter, Space)
- [ ] Custom icons
- [ ] Controlled mode (external state)

### Followup Questions:
1. How would you animate the height from 0 to auto?
2. How would you make it accessible (ARIA attributes)?
3. How would you persist open state across page reloads?
4. How would you handle SSR with default open state?

---

## Component 2: Modal

### Requirements

**Core Functionality:**
- Centered overlay modal
- Close on backdrop click
- Close on Escape key
- Focus trap inside modal
- Prevent body scroll when open

**Props Interface:**
```typescript
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'full';
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
}
```

**State Management:**
- Controlled by parent (`isOpen` prop)
- Internal focus management

**Edge Cases to Handle:**
- Multiple modals (stacking)
- Modal inside modal
- Very long content (scrollable body)
- Form inside modal (unsaved changes warning)
- Mobile responsiveness

**Bonus Features:**
- [ ] Entry/exit animations (fade, scale, slide)
- [ ] Portal rendering
- [ ] Custom close confirmation
- [ ] Different positions (center, top, bottom, right drawer)

### Followup Questions:
1. Why use Portal for modals?
2. How do you implement focus trap?
3. How would you handle z-index for multiple modals?
4. How would you test this component?
5. How would you handle modal state in URL (shareable modal)?

---

## Component 3: Tabs

### Requirements

**Core Functionality:**
- Click tab to switch content
- Active tab indicator
- Keyboard navigation
- Preserve state of inactive tabs (optional)

**Props Interface:**
```typescript
interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultActiveId?: string;
  activeId?: string;  // controlled mode
  onChange?: (tabId: string) => void;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'default' | 'pills' | 'underlined';
  destroyInactiveContent?: boolean;
}
```

**State Management:**
- Track active tab
- Support both controlled and uncontrolled modes

**Edge Cases to Handle:**
- Single tab
- No tabs
- All tabs disabled
- Active tab becomes disabled
- Dynamic tabs (add/remove)

**Bonus Features:**
- [ ] Animated indicator that slides
- [ ] Lazy loading tab content
- [ ] URL sync (tab in URL hash)
- [ ] Closable tabs
- [ ] Drag to reorder tabs

### Followup Questions:
1. How would you implement the sliding indicator animation?
2. How do you decide between destroying vs hiding inactive content?
3. How would you handle async content in tabs?
4. How would you make it SEO friendly?

---

## Component 4: Image Carousel

### Requirements

**Core Functionality:**
- Previous/Next navigation buttons
- Dot indicators
- Smooth slide transition
- Infinite loop option

**Props Interface:**
```typescript
interface CarouselImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

interface CarouselProps {
  images: CarouselImage[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  infinite?: boolean;
  onChange?: (index: number) => void;
}
```

**State Management:**
- Current slide index
- Animation direction
- Auto-play timer

**Edge Cases to Handle:**
- Single image
- No images
- Image loading errors
- Variable image sizes
- Touch swipe on mobile

**Bonus Features:**
- [ ] Touch/swipe support
- [ ] Keyboard navigation
- [ ] Thumbnails navigation
- [ ] Zoom on click
- [ ] Pause auto-play on hover
- [ ] Lazy load images

### Followup Questions:
1. How would you implement swipe gesture?
2. How do you handle infinite scroll mathematically?
3. How would you optimize for many images (100+)?
4. How would you preload next/prev images?

---

## Component 5: Star Rating

### Requirements

**Core Functionality:**
- Display rating (read-only mode)
- Select rating (interactive mode)
- Hover preview
- Half-star support

**Props Interface:**
```typescript
interface StarRatingProps {
  value: number;
  onChange?: (value: number) => void;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  allowHalf?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  emptyIcon?: React.ReactNode;
  filledIcon?: React.ReactNode;
  halfIcon?: React.ReactNode;
}
```

**State Management:**
- Current rating value
- Hover preview value
- Distinguish between hover and actual value

**Edge Cases to Handle:**
- Value out of range
- Decimal values without half-star enabled
- Click vs hover state
- Touch devices (no hover)

**Bonus Features:**
- [ ] Custom icons (hearts, thumbs, etc.)
- [ ] Clear rating (click same star)
- [ ] Color gradient based on rating
- [ ] Animated fill effect
- [ ] Keyboard support (arrow keys)

### Followup Questions:
1. How would you implement half-star selection?
2. How do you handle the value on mobile without hover?
3. How would you make this accessible?
4. How would you implement clearable rating?

---

## Component 6: Progress Bar

### Requirements

**Core Functionality:**
- Display progress percentage
- Animated fill
- Label showing percentage

**Props Interface:**
```typescript
interface ProgressBarProps {
  value: number;  // 0-100
  max?: number;
  showLabel?: boolean;
  labelPosition?: 'inside' | 'outside' | 'top';
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  striped?: boolean;
  animated?: boolean;
  indeterminate?: boolean;
}
```

**State Management:**
- Mostly presentational, controlled by parent
- Animation state if animating

**Edge Cases to Handle:**
- Value > max (cap at 100%)
- Value < 0 (cap at 0%)
- Very small percentages (min visible width)
- Rapid value changes

**Bonus Features:**
- [ ] Striped pattern
- [ ] Animation (stripes moving)
- [ ] Indeterminate mode (loading)
- [ ] Multi-segment progress
- [ ] Circular progress variant

### Followup Questions:
1. How would you implement indeterminate animation?
2. How would you smooth animate between value changes?
3. How would you implement circular progress?
4. How would you show multiple steps in one bar?

---

## General Implementation Guidelines

### TypeScript Best Practices:
```typescript
// Use proper event typing
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => { };

// Use generic components when needed
interface Props<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

// Export component types
export type { AccordionProps, AccordionItem };
```

### Accessibility Checklist:
- [ ] Proper ARIA roles
- [ ] ARIA expanded/selected states
- [ ] Keyboard navigation
- [ ] Focus visible states
- [ ] Screen reader announcements

### Testing Scenarios:
1. Renders correctly with default props
2. Handles empty/null data
3. Responds to user interactions
4. Calls callbacks with correct arguments
5. Handles edge cases gracefully

---

## Practice Strategy

**Day 1 Target:** Complete 2-3 components
**Time per component:** 45-60 minutes

**Build Order (recommended):**
1. Star Rating (simpler state)
2. Progress Bar (mostly presentational)
3. Accordion (state + animation)
4. Tabs (state + controlled/uncontrolled)
5. Modal (complex - portals, focus trap)
6. Carousel (complex - animations, touch)

**After Building Each:**
1. Test all edge cases
2. Add keyboard navigation
3. Add ARIA attributes
4. Review code for improvements

