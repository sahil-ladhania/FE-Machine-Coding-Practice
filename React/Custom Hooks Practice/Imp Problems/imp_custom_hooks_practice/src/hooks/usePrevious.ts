import { useRef, useEffect } from "react";

// Steps:
// 1. Accept any value as input
// 2. Create a ref to hold the previous value
// 3. After every render, update the ref to store the current value
// 4. Return the ref's value — this will be the value from the previous render
//    (because the ref update happens after the return, inside useEffect)

function usePrevious<T>(value: T): T | undefined {
  // TODO: implement usePrevious logic
  return undefined;
}

export default usePrevious;
