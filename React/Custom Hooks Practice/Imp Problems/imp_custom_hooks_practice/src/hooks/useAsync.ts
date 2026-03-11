import { useState, useCallback } from "react";

// Steps:
// 1. Accept an async function as input
// 2. Create three state variables — one for the result data, one for loading status, one for any error
// 3. Create an execute function that will run the async function
// 4. Inside execute, set loading to true and clear any previous error and data
// 5. Run the async function, store the result in data state on success
// 6. If it throws an error, store the error in the error state
// 7. Set loading to false after it finishes either way
// 8. Wrap execute in useCallback so it doesn't get recreated on every render
// 9. Return data, loading, error, and the execute function

function useAsync<T>(asyncFn: () => Promise<T>) {
  // TODO: implement async state management logic
  // return { data, loading, error, execute }
}

export default useAsync;