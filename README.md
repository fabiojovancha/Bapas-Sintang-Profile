# Website Balai Pemasyarakatan Kelas II Sintang

Website profil resmi Balai Pemasyarakatan Kelas II Sintang, Kementerian Hukum dan HAM RI.

## Tech Stack

- **React 18** — Library UI utama
- **Vite 5** — Build tool & dev server
- **React Router v6** — Routing SPA
- **Tailwind CSS v3** — Utility-first styling
- **Framer Motion** — Animasi halaman
- **Lucide React** — Icon set
- **React Helmet Async** — SEO meta tags

## Struktur Project

```
src/
├── pages/          # Setiap halaman (10 halaman)
├── components/
│   ├── Layout/     # Navbar, Footer, RootLayout
│   └── UI/         # Komponen reusable (cards, header, dll)
├── data/           # Data statis (berita, layanan, galeri, dll)
├── hooks/          # Custom React hooks
└── styles/         # Global CSS & Tailwind
```

## Cara Menjalankan

### 1. Install dependencies
```bash
npm install
```

### 2. Jalankan development server
```bash
npm run dev
```
Buka http://localhost:5173

### 3. Build untuk production
```bash
npm run build
```

### 4. Preview build
```bash
npm run preview
```

## Halaman yang Tersedia

| Path             | Halaman                  |
|------------------|--------------------------|
| `/`              | Beranda                  |
| `/profil`        | Profil Instansi          |
| `/visi-misi`     | Visi & Misi              |
| `/struktur`      | Struktur Organisasi      |
| `/layanan`       | Layanan                  |
| `/berita`        | Berita & Pengumuman      |
| `/berita/:slug`  | Detail Berita            |
| `/galeri`        | Galeri Foto              |
| `/unduhan`       | Unduhan Dokumen          |
| `/kontak`        | Kontak                   |

## Cara Update Konten

Semua konten dikelola di folder `src/data/`:

- **`berita.js`** — Tambah/edit berita & pengumuman
- **`layanan.js`** — Edit informasi layanan
- **`galeri.js`** — Tambah foto kegiatan
- **`unduhan.js`** — Tambah file yang bisa diunduh
- **`pegawai.js`** — Update data struktur organisasi

## Deploy

### Vercel (Rekomendasi — Gratis)
1. Push ke GitHub
2. Import repo di vercel.com
3. Otomatis deploy setiap push

### Netlify
1. Push ke GitHub
2. Import di netlify.com
3. Build command: `npm run build`
4. Publish directory: `dist`

## Kustomisasi Warna

Edit `tailwind.config.js` → bagian `colors.primary` untuk mengubah palet warna utama.

---

Dikembangkan untuk Balai Pemasyarakatan Kelas II Sintang — Kemenkumham RI
