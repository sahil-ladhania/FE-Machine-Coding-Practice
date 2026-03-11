/**
 * PROBLEM: EventEmitter class
 * on(event, cb)     → register listener
 * off(event, cb)    → remove specific listener
 * emit(event, args) → call all listeners for event
 * once(event, cb)   → fires only once, then auto-removes
 *
 * STEPS:
 * Step 1: In constructor, create listeners = new Map<string, Set<Function>>()
 *
 * on STEPS:
 * Step 1: If event not in map → create new Set for it
 * Step 2: Add cb to the Set
 *
 * off STEPS:
 * Step 1: Get the Set for event
 * Step 2: Delete cb from Set
 *
 * emit STEPS:
 * Step 1: Get the Set for event
 * Step 2: If no listeners → return
 * Step 3: Call each listener with ...args
 *
 * once STEPS:
 * Step 1: Create a wrapper function that:
 *         a. Calls cb(...args)
 *         b. Calls this.off(event, wrapper) to remove itself
 * Step 2: Call this.on(event, wrapper)
 */

export class EventEmitter {
  private listeners: Map<string, Set<Function>>;

  constructor() {
    this.listeners = new Map();
  }

  on(event: string, cb: Function): this {
    // your code here
    throw new Error("Not implemented");
  }

  off(event: string, cb: Function): this {
    // your code here
    throw new Error("Not implemented");
  }

  emit(event: string, ...args: any[]): this {
    // your code here
    throw new Error("Not implemented");
  }

  once(event: string, cb: Function): this {
    // your code here — wrapper that auto-removes itself
    throw new Error("Not implemented");
  }
}
