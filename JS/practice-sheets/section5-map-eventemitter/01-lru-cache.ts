/**
 * PROBLEM: LRUCache(capacity)
 * get(key) → returns value or -1 if not found
 * put(key, value) → inserts/updates. Evicts LRU when over capacity.
 * Both operations must be O(1).
 *
 * KEY INSIGHT: JavaScript Map maintains INSERTION ORDER.
 * "Most recently used" = last inserted. "Least recently used" = first inserted.
 *
 * get STEPS:
 * Step 1: If key not in map → return -1
 * Step 2: Delete key from map (removes it from its position)
 * Step 3: Re-insert key with same value (moves it to "end" = most recent)
 * Step 4: Return value
 *
 * put STEPS:
 * Step 1: If key exists → delete it first (we'll re-insert to update position)
 * Step 2: If map.size === capacity (and key was not already in map):
 *         → delete map.keys().next().value (oldest = first key)
 * Step 3: Set map[key] = value (inserts at end = most recent)
 */

export class LRUCache {
  private capacity: number;
  private map: Map<number, number>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key: number): number {
    // your code here
    throw new Error("Not implemented");
  }

  put(key: number, value: number): void {
    // your code here
    throw new Error("Not implemented");
  }
}

// Test
// const cache = new LRUCache(2)
// cache.put(1, 1)  → map: {1:1}
// cache.put(2, 2)  → map: {1:1, 2:2}
// cache.get(1)     → 1, map: {2:2, 1:1} (1 moved to end)
// cache.put(3, 3)  → evicts 2 (oldest), map: {1:1, 3:3}
// cache.get(2)     → -1 (evicted)
