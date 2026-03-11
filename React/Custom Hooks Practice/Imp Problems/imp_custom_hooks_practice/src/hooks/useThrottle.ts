import { useState, useRef } from "react";

// Steps:
// 1. Accept a value and a time limit (in ms)
// 2. Create a state variable to hold the throttled value
// 3. Create a ref to track whether we are currently in the throttle cooldown period
// 4. Whenever the incoming value changes, check if we are in the cooldown period
// 5. If we are NOT in cooldown, update the throttled state with the new value
//    and mark that we are now in the cooldown period
// 6. After the time limit passes, mark the cooldown as over
// 7. Return the throttled value

function useThrottle<T>(value: T, limit: number): T {
  // TODO: implement throttle logic
  return value;
}

export default useThrottle;
