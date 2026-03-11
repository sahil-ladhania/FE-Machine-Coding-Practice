import { useEffect, RefObject } from "react";

function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  callback: () => void
): void {
  // TODO: implement click outside logic
}

export default useClickOutside;
