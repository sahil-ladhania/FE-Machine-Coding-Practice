import { useState, useEffect } from "react";

// Steps:
// 1. Accept a URL string as input
// 2. Create three state variables — one for the fetched data, one for loading status, one for any error
// 3. Inside a useEffect, set loading to true and clear any previous error
// 4. Make a fetch request to the given URL
// 5. Parse the response as JSON
// 6. Store the parsed data in the data state
// 7. If anything goes wrong, store the error in the error state
// 8. Set loading to false after the request finishes either way
// 9. Re-run the effect whenever the URL changes
// 10. Return data, loading, and error

function useFetch<T>(url: string) {
  // TODO: implement fetch logic
  // return { data, loading, error }
}

export default useFetch;
