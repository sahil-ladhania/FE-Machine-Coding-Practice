import { useEffect, useRef } from "react";

// Steps:
// 1. Accept a callback function and a delay in ms, delay can be null to disable it
// 2. Store the latest version of the callback in a ref so it stays up to date
// 3. Keep the ref updated whenever the callback changes
// 4. Set up a timeout inside a useEffect using the delay value
// 5. Inside the timeout, call the function stored in the ref
// 6. If delay is null, do not set up the timeout at all
// 7. Clear the timeout when the component unmounts or when delay changes

function useTimeout(callback: () => void, delay: number | null): void {
  // TODO: implement useTimeout logic
}

export default useTimeout;
