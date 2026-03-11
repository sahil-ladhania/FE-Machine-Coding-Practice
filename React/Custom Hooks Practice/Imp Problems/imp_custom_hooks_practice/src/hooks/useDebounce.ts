import { useState, useEffect } from "react";

// Steps:
// 1. Accept a value and a delay in ms
// 2. Create a state variable to hold the debounced value
// 3. Inside a useEffect, set a timer to update the debounced state after the delay
// 4. If the value changes before the timer fires, clear the old timer and start a new one
// 5. Clean up the timer when the component unmounts
// 6. Return the debounced value

function useDebounce<T>(value: T, delay: number): T {
  // TODO: implement debounce logic
  return value;
}

export default useDebounce;
