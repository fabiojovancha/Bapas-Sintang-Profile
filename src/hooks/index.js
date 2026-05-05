import { useState, useEffect, useMemo } from 'react'

/**
 * useSearch — filter array berdasarkan query string di field tertentu.
 *
 * @param {Array}    items      - Data array yang akan difilter
 * @param {string[]} fields     - Nama field yang dicari (e.g. ['judul', 'ringkasan'])
 * @returns {{ query, setQuery, filtered }}
 */
export function useSearch(items = [], fields = []) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    if (!query.trim()) return items
    const q = query.toLowerCase()
    return items.filter((item) =>
      fields.some((f) => String(item[f] ?? '').toLowerCase().includes(q))
    )
  }, [items, query, fields])

  return { query, setQuery, filtered }
}

/**
 * useFilter — filter array berdasarkan nilai satu field (e.g. kategori).
 *
 * @param {Array}  items      - Data array
 * @param {string} field      - Nama field yang difilter (e.g. 'kategori')
 * @param {string} allLabel   - Label untuk "tampilkan semua" (default: 'Semua')
 * @returns {{ aktif, setAktif, filtered }}
 */
export function useFilter(items = [], field = '', allLabel = 'Semua') {
  const [aktif, setAktif] = useState(allLabel)

  const filtered = useMemo(() => {
    if (aktif === allLabel) return items
    return items.filter((item) => item[field] === aktif)
  }, [items, aktif, field, allLabel])

  return { aktif, setAktif, filtered }
}

/**
 * useScrolled — true jika halaman sudah discroll melewati threshold.
 *
 * @param {number} threshold - Pixel scroll (default: 60)
 */
export function useScrolled(threshold = 60) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [threshold])

  return scrolled
}

/**
 * useDebounce — menunda update value selama delay ms.
 */
export function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debounced
}
