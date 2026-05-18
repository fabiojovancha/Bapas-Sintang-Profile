import { useState, useEffect, useCallback } from 'react'

/**
 * useGAS — hook generik untuk fetch data dari Google Apps Script
 *
 * @param {Function} fetchFn  - fungsi dari services/api.js
 * @param {Array}    deps     - dependency array (opsional)
 *
 * @returns {{ data, loading, error, refetch }}
 */
export function useGAS(fetchFn, deps = []) {
  const [data,    setData]    = useState(null)
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState(null)

  const run = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const result = await fetchFn()
      setData(result)
    } catch (err) {
      setError(err.message || 'Gagal memuat data.')
    } finally {
      setLoading(false)
    }
  }, deps) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => { run() }, [run])

  return { data, loading, error, refetch: run }
}
