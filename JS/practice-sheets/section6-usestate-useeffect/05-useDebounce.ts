/**
 * CUSTOM HOOK: useDebounce(value, delay)
 * Returns a debounced value that only updates after delay ms of inactivity.
 *
 * STEPS:
 * Step 1: useState initialized to value
 * Step 2: useEffect with [value, delay] deps:
 *         a. const timer = setTimeout(() => setDebouncedValue(value), delay)
 *         b. Return cleanup: () => clearTimeout(timer)
 * Step 3: Return debouncedValue
 *
 * NOTE: Cleanup runs BEFORE next effect → clears previous timer → debounce behavior
 */

import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  // your code here
  throw new Error("Not implemented");
}
