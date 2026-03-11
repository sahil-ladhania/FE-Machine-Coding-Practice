/**
 * PROBLEM: Expensive list computation runs on EVERY render
 *
 * CURRENT ISSUE: Filter/sort runs even on unrelated state changes (e.g., counter increment)
 *
 * FIX STEPS:
 * Step 1: Identify the expensive computation (filter + sort on items)
 * Step 2: Wrap it in useMemo(() => computation, [items, filterTerm])
 * Step 3: Now it only recomputes when items or filterTerm changes
 * Step 4: Counter increments will NOT trigger recomputation
 *
 * VERIFY: Add console.log("Computing...") inside useMemo callback.
 * Should only log when items or filterTerm changes, not on counter change.
 */

import React, { useState, useMemo } from 'react';

const items = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);

export const ExpensiveList = () => {
  const [filterTerm, setFilterTerm] = useState('');
  const [counter, setCounter] = useState(0);

  // ❌ BEFORE: runs on every render including counter changes
  // const filtered = items.filter(item => item.includes(filterTerm)).sort();

  // ✅ AFTER: wrap in useMemo below
  // your code here
  throw new Error("Not implemented");

  return (
    <div>
      <input value={filterTerm} onChange={e => setFilterTerm(e.target.value)} placeholder="Filter..." />
      <button onClick={() => setCounter(c => c + 1)}>Counter: {counter}</button>
      {/* render filtered list */}
    </div>
  );
};
