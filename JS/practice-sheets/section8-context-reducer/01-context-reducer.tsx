/**
 * PROBLEM: Context + useReducer (Mini Redux Pattern)
 * Global state without prop drilling, without Redux.
 *
 * STEPS:
 * Step 1: Define State type and Action union type
 *         Actions: INCREMENT | DECREMENT | RESET | SET_USER
 *
 * Step 2: Write reducer(state, action) → newState
 *         Pure function. Switch on action.type. Always return new object.
 *
 * Step 3: Create StoreContext with createContext (include state + dispatch)
 *
 * Step 4: Create StoreProvider component:
 *         - useReducer(reducer, initialState)
 *         - Provide { state, dispatch } via StoreContext.Provider
 *         - PERFORMANCE: wrap value in useMemo to avoid new object every render
 *
 * Step 5: Create useStore() custom hook:
 *         - useContext(StoreContext)
 *         - Throw error if used outside Provider
 *
 * Step 6: Consumer components use useStore() to read state and dispatch actions
 */

import React, { createContext, useContext, useReducer, useMemo } from 'react';

interface State {
  count: number;
  user: string | null;
}

type Action =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' }
  | { type: 'SET_USER'; payload: string };

const initialState: State = { count: 0, user: null };

function reducer(state: State, action: Action): State {
  // your code here
  throw new Error("Not implemented");
}

const StoreContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | null>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  // your code here
  throw new Error("Not implemented");
}

export function useStore() {
  // your code here — throw if outside provider
  throw new Error("Not implemented");
}
