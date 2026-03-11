/**
 * CUSTOM HOOK: useFetch(url)
 * Returns { data, loading, error }
 *
 * STEPS:
 * Step 1: Three useState hooks: data (null), loading (false), error (null)
 * Step 2: useEffect with [url] deps:
 *         a. Set loading = true, error = null
 *         b. Declare: let cancelled = false
 *         c. fetch(url)
 *            .then(res => res.json())
 *            .then(json => { if (!cancelled) setData(json) })
 *            .catch(err => { if (!cancelled) setError(err) })
 *            .finally(() => { if (!cancelled) setLoading(false) })
 *         d. Return cleanup: () => { cancelled = true }
 *
 * CRITICAL: The `cancelled` flag prevents setState on unmounted component.
 *           This is specifically what interviewers check for.
 */

import { useState, useEffect } from 'react';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export function useFetch<T>(url: string): FetchState<T> {
  // your code here
  throw new Error("Not implemented");
}
