/**
 * PROBLEM: Fix unnecessary child re-renders
 *
 * CURRENT ISSUE: Parent has state. Child receives a callback prop.
 * Every time Parent re-renders → new function reference → Child re-renders
 * even when nothing relevant to Child changed.
 *
 * THE FIX (apply in order):
 * Step 1: Wrap Child component in React.memo()
 *         → Now Child only re-renders if props change shallowly
 * Step 2: Wrap the callback in useCallback([deps])
 *         → Now function reference stays stable across renders
 * Step 3: Both steps are needed together — memo alone is useless if callback keeps changing
 *
 * VERIFY: Add console.log("Child rendered") inside Child.
 * Before fix → logs every Parent state change.
 * After fix  → logs only when callback deps change.
 */

import React, { useState, useCallback, memo } from 'react';

// ❌ BEFORE FIX — Child re-renders unnecessarily
const ChildBefore = ({ onClick }: { onClick: () => void }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click me</button>;
};

const ParentBefore = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => console.log("clicked"); // new ref every render
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      <ChildBefore onClick={handleClick} />
    </div>
  );
};

// ✅ AFTER FIX — apply React.memo + useCallback below
const ChildAfter = memo(({ onClick }: { onClick: () => void }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click me</button>;
});

export const ParentAfter = () => {
  const [count, setCount] = useState(0);
  // your code here — wrap handleClick in useCallback
  throw new Error("Not implemented");
};
