/**
 * ============================================================
 * Google Apps Script — Backend API Bapas Kelas II Sintang
 * ============================================================
 *
 * CARA DEPLOY:
 * 1. Buka script.google.com → New Project → beri nama "Bapas API"
 * 2. Copy-paste seluruh kode ini
 * 3. Ganti SPREADSHEET_ID di bawah dengan ID Google Sheets Anda
 *    (ambil dari URL Sheets: docs.google.com/spreadsheets/d/[ID INI]/edit)
 * 4. Klik Deploy → New Deployment → Web App
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy URL deployment → paste ke file .env React Anda
 * ============================================================
 */

const SPREADSHEET_ID = '1uQa8-HrHZxgv7miFuv22CwZWWxNTRme8TCozQmXlMj8'

const SHEET = {
  BERITA:  'Berita',
  GALERI:  'Galeri',
  LAYANAN: 'Layanan',
  PESAN:   'PesanMasuk',
  STATISTIK: 'Statistik',
  FAQ: 'FAQ',
}

// ============================================================
// ROUTER UTAMA
// ============================================================

function doGet(e) {
  const action = e.parameter.action || ''
  let result

  try {
    switch (action) {
      case 'getBerita':  result = getBerita();  break
      case 'getGaleri':  result = getGaleri();  break
      case 'getLayanan': result = getLayanan(); break
      case 'getStatistik': result = getStatistik(); 
      break
      case 'getFAQ': result = getFAQ(); 
      break

      default:
        result = { status: 'ok', message: 'Bapas API aktif' }
    }
  } catch (err) {
    result = { status: 'error', message: err.message }
  }

  return jsonResponse(result)
}

function doPost(e) {
  let body, result

  try {
    body = JSON.parse(e.postData.contents)
    const action = body.action || ''

    switch (action) {
      case 'kirimPesan': result = kirimPesan(body); break
      default:
        result = { status: 'error', message: 'Action tidak dikenal' }
    }
  } catch (err) {
    result = { status: 'error', message: err.message }
  }

  return jsonResponse(result)
}

// ============================================================
// GET: BERITA
// ============================================================

function getBerita() {
  const sheet = getSheet(SHEET.BERITA)
  const rows  = sheet.getDataRange().getValues()

  // Baris 1 = header, skip
  const berita = rows.slice(1)
    .filter(r => r[0]) // skip baris kosong
    .map(r => ({
      id:        r[0],
      slug:      r[1],
      judul:     r[2],
      ringkasan: r[3],
      konten:    r[4],
      tanggal:   formatTanggal(r[5]),
      kategori:  r[6],
      gambar:    r[7],   // link Google Drive (sudah public)
      status:    r[8],   // 'Publish' atau 'Draft'
    }))
    .filter(b => b.status === 'Publish')
    .reverse() // terbaru di atas

  return { status: 'ok', data: berita }
}

// ============================================================
// GET: Statistik
// ============================================================

function getStatistik() {
  const sheet = getSheet(SHEET.STATISTIK)
  const rows  = sheet.getDataRange().getValues()

  const data = rows.slice(1)
    .filter(r => r[0])
    .map(r => ({
      id:     r[0],
      label:  r[1],
      value:  r[2],
      ikon:   r[3],
      status: r[4],
    }))
    .filter(s => s.status === 'Aktif')

  return { status: 'ok', data }
}

// ============================================================
// GET: GALERI
// ============================================================

function getGaleri() {
  const sheet = getSheet(SHEET.GALERI)
  const rows  = sheet.getDataRange().getValues()

  const galeri = rows.slice(1)
    .filter(r => r[0])
    .map(r => ({
      id:       r[0],
      judul:    r[1],
      kategori: r[2],
      gambar:   r[3],  // link Google Drive (sudah public)
      tanggal:  formatTanggal(r[4]),
      status:   r[5],
    }))
    .filter(g => g.status === 'Publish')
    .reverse()

  return { status: 'ok', data: galeri }
}

// ============================================================
// GET: FAQ
// ============================================================

function getFAQ() {
  const sheet = getSheet(SHEET.FAQ)
  const rows  = sheet.getDataRange().getValues()

  const data = rows.slice(1)
    .filter(r => r[0])
    .map(r => ({
      id:         r[0],
      pertanyaan: r[1],
      jawaban:    r[2],
      kategori:   r[3],
      urutan:     r[4],
      status:     r[5],
    }))
    .filter(f => f.status === 'Aktif')
    .sort((a, b) => a.urutan - b.urutan)

  return { status: 'ok', data }
}

// ============================================================
// GET: LAYANAN
// ============================================================

function getLayanan() {
  const sheet = getSheet(SHEET.LAYANAN)
  const rows  = sheet.getDataRange().getValues()

  const layanan = rows.slice(1)
    .filter(r => r[0])
    .map(r => ({
      id:        r[0],
      slug:      r[1],
      nama:      r[2],
      deskripsi: r[3],
      detail:    r[4],
      ikon:      r[5],  // nama ikon Lucide (string), misal: "ClipboardList"
      status:    r[6],
    }))
    .filter(l => l.status === 'Aktif')

  return { status: 'ok', data: layanan }
}

// ============================================================
// POST: KIRIM PESAN (Form Kontak)
// ============================================================

function kirimPesan(body) {
  const { nama, email, telp, pesan } = body

  if (!nama || !email || !pesan) {
    return { status: 'error', message: 'Nama, email, dan pesan wajib diisi.' }
  }

  const sheet     = getSheet(SHEET.PESAN)
  const timestamp = new Date()
  const id        = 'MSG-' + timestamp.getTime()

  sheet.appendRow([
    id,
    nama,
    email,
    telp || '-',
    pesan,
    Utilities.formatDate(timestamp, 'Asia/Makassar', 'dd/MM/yyyy HH:mm'),
    'Belum Dibaca',
  ])

  // Opsional: kirim notifikasi email ke admin
  // MailApp.sendEmail({
  //   to: 'admin@bapas-sintang.go.id',
  //   subject: `[Bapas] Pesan baru dari ${nama}`,
  //   body: `Dari: ${nama} (${email})\nTelepon: ${telp}\n\nPesan:\n${pesan}`,
  // })

  return { status: 'ok', message: 'Pesan berhasil dikirim. Terima kasih!' }
}

// ============================================================
// HELPERS
// ============================================================

function getSheet(name) {
  const ss    = SpreadsheetApp.openById(SPREADSHEET_ID)
  const sheet = ss.getSheetByName(name)
  if (!sheet) throw new Error(`Sheet "${name}" tidak ditemukan.`)
  return sheet
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON)
}

function formatTanggal(val) {
  if (!val) return '-'
  try {
    const d = new Date(val)
    return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
  } catch { return String(val) }
}

// ============================================================
// SETUP OTOMATIS — jalankan sekali untuk buat sheet + header
// ============================================================

function setupSheets() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID)

  const configs = [
    {
      name: SHEET.BERITA,
      headers: ['ID','Slug','Judul','Ringkasan','Konten','Tanggal','Kategori','Gambar (URL)','Status'],
      sample: ['BRT-001','sambutan-kepala','Sambutan Kepala Bapas Sintang',
               'Kepala Bapas Kelas II Sintang menyampaikan sambutan pada acara...',
               'Isi lengkap berita di sini...',
               new Date(),'Kegiatan',
               'https://drive.google.com/uc?id=GANTI_DENGAN_FILE_ID',
               'Publish'],
    },
    {
      name: SHEET.GALERI,
      headers: ['ID','Judul','Kategori','Gambar (URL)','Tanggal','Status'],
      sample: ['GLR-001','Rapat Koordinasi TPP','Rapat',
               'https://drive.google.com/uc?id=GANTI_DENGAN_FILE_ID',
               new Date(),'Publish'],
    },
    {
      name: SHEET.LAYANAN,
      headers: ['ID','Slug','Nama Layanan','Deskripsi','Detail','Ikon','Status'],
      sample: ['LAY-001','litmas','Penelitian Kemasyarakatan (Litmas)',
               'Pengumpulan data sosial klien untuk bahan pertimbangan hakim.',
               'Detail lengkap layanan litmas...','ClipboardList','Aktif'],
    },
    {
      name: SHEET.PESAN,
      headers: ['ID','Nama','Email','Telepon','Pesan','Waktu','Status'],
    },
    {
      name: SHEET.STATISTIK,
      headers: ['ID', 'Label', 'Value', 'Ikon', 'Status'],
      sample: ['STAT-001', 'Klien Aktif', '120+', 'Users', 'Aktif'],
    },
    {
      name: SHEET.FAQ,
      headers: ['ID', 'Pertanyaan', 'Jawaban', 'Kategori', 'Urutan', 'Status'],
      sample: ['FAQ-001', 'Apa itu Bapas?', 'Bapas adalah Unit Pelaksana Teknis yang bertugas melakukan pembimbingan kemasyarakatan kepada klien pemasyarakatan.', 'Umum', 1, 'Aktif'],
    },
  ]

  configs.forEach(({ name, headers, sample }) => {
    let sheet = ss.getSheetByName(name)
    if (!sheet) {
      sheet = ss.insertSheet(name)
    }
    // Set header (baris 1)
    const headerRange = sheet.getRange(1, 1, 1, headers.length)
    headerRange.setValues([headers])
    headerRange.setFontWeight('bold')
    headerRange.setBackground('#1d4ed8')
    headerRange.setFontColor('#ffffff')

    // Tambah sample data jika ada
    if (sample && sheet.getLastRow() < 2) {
      sheet.appendRow(sample)
    }
  })

  Logger.log('Setup selesai! Semua sheet sudah dibuat.')
}
