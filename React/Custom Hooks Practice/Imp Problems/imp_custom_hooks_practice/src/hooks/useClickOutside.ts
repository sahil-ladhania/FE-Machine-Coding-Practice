import { useEffect, RefObject } from "react";

// Steps:
// 1. Accept a ref pointing to a DOM element and a callback to run on outside click
// 2. Inside a useEffect, attach a mousedown event listener to the entire document
// 3. When a click happens, check if the clicked target is outside the ref element
// 4. If it is outside, call the callback
// 5. Remove the event listener when the component unmounts or dependencies change

function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  callback: () => void
): void {
  // TODO: implement click outside logic
}

export default useClickOutside;
