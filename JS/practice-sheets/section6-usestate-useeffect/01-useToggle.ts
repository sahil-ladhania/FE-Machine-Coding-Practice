/**
 * CUSTOM HOOK: useToggle(initialValue?)
 * Returns [value, toggle] where toggle flips the boolean.
 * toggle can also accept explicit boolean: toggle(true) sets to true.
 *
 * STEPS:
 * Step 1: useState(initialValue ?? false)
 * Step 2: Create toggle function with useCallback:
 *         - If called with boolean arg → set that value directly
 *         - If called with no arg → use functional update: prev => !prev
 * Step 3: Return [value, toggle]
 */

import { useState, useCallback } from 'react';

export function useToggle(initialValue: boolean = false): [boolean, (value?: boolean) => void] {
  // your code here
  throw new Error("Not implemented");
}
