import { useState } from "react";

// Steps:
// 1. Accept a localStorage key and an initial value
// 2. When setting up state, first check if a value already exists in localStorage for that key
// 3. If something exists, parse it from JSON and use it as the starting state
// 4. If nothing exists, use the provided initial value as the starting state
// 5. Create a setter function that updates both the state and localStorage at the same time
// 6. When saving to localStorage, convert the value to a JSON string
// 7. Return the stored value and the setter function as an array

function useLocalStorage<T>(key: string, initialValue: T) {
  // TODO: implement localStorage sync logic
  // return [storedValue, setValue]
}

export default useLocalStorage;
