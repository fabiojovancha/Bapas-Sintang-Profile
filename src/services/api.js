/**
 * api.js — Service layer untuk Google Apps Script
 *
 * Semua fetch ke GAS dilakukan di sini.
 * Komponen React tinggal import fungsi dari file ini.
 */

const GAS_URL = import.meta.env.VITE_GAS_URL

if (!GAS_URL) {
  console.warn('[Bapas API] VITE_GAS_URL belum diset di file .env')
}

// ─── Helper ──────────────────────────────────────────────────

async function gasGet(action) {
  const res = await fetch(`${GAS_URL}?action=${action}`)
  if (!res.ok) throw new Error(`HTTP error ${res.status}`)
  const json = await res.json()
  if (json.status === 'error') throw new Error(json.message)
  return json.data
}

async function gasPost(body) {
  const res = await fetch(GAS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' }, // GAS butuh text/plain, bukan application/json
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new Error(`HTTP error ${res.status}`)
  const json = await res.json()
  if (json.status === 'error') throw new Error(json.message)
  return json
}

// ─── Berita ───────────────────────────────────────────────────

export async function fetchBerita() {
  return gasGet('getBerita')
}

// ─── Galeri ───────────────────────────────────────────────────

export async function fetchGaleri() {
  return gasGet('getGaleri')
}

// ─── Layanan ──────────────────────────────────────────────────

export async function fetchLayanan() {
  return gasGet('getLayanan')
}

// ─── Kirim Pesan (Form Kontak) ────────────────────────────────

export async function kirimPesan({ nama, email, telp, pesan }) {
  return gasPost({ action: 'kirimPesan', nama, email, telp, pesan })
}

// ─── Statistik ────────────────────────────────
export async function fetchStatistik() {
  return gasGet('getStatistik')
}

// ─── FAQ ────────────────────────────────
export async function fetchFAQ() {
  return gasGet('getFAQ')
}
