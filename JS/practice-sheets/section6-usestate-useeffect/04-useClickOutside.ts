/**
 * CUSTOM HOOK: useClickOutside(ref, callback)
 * Fires callback when user clicks outside the element pointed to by ref.
 *
 * STEPS:
 * Step 1: useEffect with [ref, callback] deps
 * Step 2: Define handler = (event: MouseEvent) => {
 *           if ref.current exists AND !ref.current.contains(event.target as Node)
 *           → call callback()
 *         }
 * Step 3: document.addEventListener('mousedown', handler)
 * Step 4: Return cleanup: document.removeEventListener('mousedown', handler)
 */

import { useEffect, RefObject } from 'react';

export function useClickOutside(ref: RefObject<HTMLElement>, callback: () => void): void {
  // your code here
  throw new Error("Not implemented");
}
