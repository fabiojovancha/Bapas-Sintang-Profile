# Panduan Setup Google Sheets + Apps Script
## Website Bapas Kelas II Sintang

---

## LANGKAH 1 — Buat Google Spreadsheet

1. Buka **sheets.google.com** → klik **+ Blank**
2. Beri nama file: `Database Bapas Sintang`
3. Salin **ID spreadsheet** dari URL:
   ```
   https://docs.google.com/spreadsheets/d/[SALIN-ID-INI]/edit
   ```

---

## LANGKAH 2 — Setup Google Apps Script

1. Di Spreadsheet, klik menu **Extensions → Apps Script**
2. Hapus semua kode yang ada
3. **Copy-paste** seluruh isi file `google-apps-script/Code.gs`
4. Ganti baris ini dengan ID spreadsheet Anda:
   ```js
   const SPREADSHEET_ID = 'GANTI_DENGAN_ID_SPREADSHEET_ANDA'
   ```
5. Klik **Save** (ikon disket atau Ctrl+S)
6. Klik tombol **Run** → pilih fungsi `setupSheets` → klik **Run**
   - Jika muncul popup izin → klik **Review permissions** → pilih akun Google → klik **Allow**
   - Ini akan membuat otomatis sheet: Berita, Galeri, Layanan, PesanMasuk

---

## LANGKAH 3 — Deploy sebagai Web App

1. Di Apps Script, klik **Deploy → New deployment**
2. Klik ikon ⚙️ di samping "Select type" → pilih **Web app**
3. Isi pengaturan:
   - **Description**: `Bapas API v1`
   - **Execute as**: `Me`
   - **Who has access**: `Anyone`
4. Klik **Deploy**
5. **Salin URL** yang muncul (bentuknya seperti):
   ```
   https://script.google.com/macros/s/AKfy.../exec
   ```

---

## LANGKAH 4 — Setup di Project React

1. Di folder project React, buat file `.env`:
   ```
   VITE_GAS_URL=https://script.google.com/macros/s/URL_ANDA/exec
   ```
2. Paste URL Apps Script yang tadi disalin
3. Jalankan ulang dev server:
   ```bash
   npm run dev
   ```

---

## LANGKAH 5 — Cara Upload Gambar ke Google Drive

Agar gambar bisa ditampilkan di website:

1. Buka **drive.google.com**
2. Upload foto (JPG/PNG) ke folder mana saja
3. Klik kanan foto → **Share** → ubah akses menjadi **"Anyone with the link"**
4. Salin link berbagi, contoh:
   ```
   https://drive.google.com/file/d/FILE_ID_INI/view
   ```
5. Ubah format link agar bisa ditampilkan sebagai gambar:
   ```
   https://drive.google.com/uc?id=FILE_ID_INI
   ```
   *(ganti `FILE_ID_INI` dengan ID file dari URL aslinya)*

6. Paste URL tersebut ke kolom **Gambar (URL)** di Google Sheets

---

## LANGKAH 6 — Cara Input Data di Google Sheets

### Sheet "Berita"
| Kolom | Isi |
|-------|-----|
| ID | BRT-001, BRT-002, dst |
| Slug | judul-berita-tanpa-spasi (pakai tanda -) |
| Judul | Judul berita lengkap |
| Ringkasan | 1-2 kalimat ringkas |
| Konten | Isi lengkap berita |
| Tanggal | 01/01/2025 |
| Kategori | Kegiatan / Rapat / Kunjungan / dll |
| Gambar (URL) | https://drive.google.com/uc?id=... |
| Status | **Publish** atau Draft |

### Sheet "Galeri"
| Kolom | Isi |
|-------|-----|
| ID | GLR-001, GLR-002, dst |
| Judul | Judul foto |
| Kategori | Kegiatan / Upacara / Pelatihan / dll |
| Gambar (URL) | https://drive.google.com/uc?id=... |
| Tanggal | 01/01/2025 |
| Status | **Publish** atau Draft |

### Sheet "Layanan"
| Kolom | Isi |
|-------|-----|
| ID | LAY-001, LAY-002, dst |
| Slug | nama-layanan |
| Nama Layanan | Nama lengkap layanan |
| Deskripsi | 1-2 kalimat deskripsi |
| Detail | Penjelasan lengkap (opsional) |
| Ikon | ClipboardList / Users / Baby / Gavel / Eye / FileText / Shield / Phone |
| Status | **Aktif** atau Nonaktif |

### Sheet "PesanMasuk"
> Sheet ini **otomatis terisi** setiap ada yang kirim pesan dari halaman Kontak.
> Kolom Status bisa diubah manual dari `Belum Dibaca` → `Sudah Dibaca`.

---

## Update Deployment (jika kode Apps Script diubah)

Setiap kali mengubah kode Apps Script:
1. Klik **Deploy → Manage deployments**
2. Klik ikon ✏️ (edit) di deployment yang ada
3. Ubah version: pilih **New version**
4. Klik **Deploy**
> URL tidak berubah, tidak perlu update file `.env`

---

## Troubleshooting

**Data tidak muncul di website:**
- Pastikan kolom Status diisi dengan tepat: `Publish` atau `Aktif`
- Pastikan URL Apps Script di `.env` sudah benar
- Coba buka URL Apps Script langsung di browser, harus muncul JSON

**Gambar tidak tampil:**
- Pastikan file di Google Drive sudah di-share "Anyone with the link"
- Pastikan format URL: `https://drive.google.com/uc?id=FILE_ID`

**Form pesan tidak terkirim:**
- Pastikan Apps Script sudah di-deploy ulang jika ada perubahan
- Cek sheet "PesanMasuk" — jika kosong berarti ada error di script
