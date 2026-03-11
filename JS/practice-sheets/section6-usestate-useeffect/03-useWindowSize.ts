/**
 * CUSTOM HOOK: useWindowSize()
 * Returns { width, height } — updates on window resize.
 *
 * STEPS:
 * Step 1: useState initialized to { width: window.innerWidth, height: window.innerHeight }
 * Step 2: useEffect with [] deps (runs once on mount):
 *         a. Define handler = () => setState({ width: window.innerWidth, height: window.innerHeight })
 *         b. window.addEventListener('resize', handler)
 *         c. Return cleanup: () => window.removeEventListener('resize', handler)
 */

import { useState, useEffect } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

export function useWindowSize(): WindowSize {
  // your code here
  throw new Error("Not implemented");
}
