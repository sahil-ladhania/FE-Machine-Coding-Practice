import { useEffect, useRef } from "react";

// Steps:
// 1. Accept a callback function and a delay (in ms), delay can be null to pause
// 2. Store the latest version of the callback in a ref so it never goes stale
// 3. Keep the ref updated every time the callback changes
// 4. Set up an interval inside a useEffect using the delay value
// 5. Inside the interval, call the function stored in the ref
// 6. If delay is null, do not set up the interval at all
// 7. Clear the interval when the component unmounts or when delay changes

function useInterval(callback: () => void, delay: number | null): void {
  // TODO: implement useInterval logic
}

export default useInterval;
