import {
  ClipboardList,
  Users,
  Baby,
  Gavel,
  Eye,
  FileText,
  Shield,
  Phone,
} from 'lucide-react'

/**
 * Data layanan Bapas Kelas II Sintang.
 */
export const layananList = [
  {
    id: 1,
    slug: 'litmas',
    nama: 'Penelitian Kemasyarakatan (Litmas)',
    deskripsi: 'Pengumpulan data sosial klien untuk bahan pertimbangan hakim, lembaga pemasyarakatan, dan instansi terkait.',
    Ikon: ClipboardList,
    detail: 'Litmas merupakan kegiatan penelitian untuk mengetahui latar belakang kehidupan warga binaan pemasyarakatan...',
  },
  {
    id: 2,
    slug: 'bimbingan-dewasa',
    nama: 'Bimbingan Klien Dewasa',
    deskripsi: 'Pembimbingan bagi klien dewasa dalam program pembebasan bersyarat, cuti bersyarat, dan cuti menjelang bebas.',
    Ikon: Users,
    detail: 'Bimbingan klien dewasa dilakukan oleh Pembimbing Kemasyarakatan (PK) melalui kunjungan dan konseling rutin...',
  },
  {
    id: 3,
    slug: 'bimbingan-anak',
    nama: 'Bimbingan Klien Anak',
    deskripsi: 'Pelayanan khusus anak berhadapan dengan hukum (ABH) melalui diversi dan program rehabilitasi sosial.',
    Ikon: Baby,
    detail: 'Program bimbingan anak mengutamakan kepentingan terbaik bagi anak dan mengacu pada UU SPPA...',
  },
  {
    id: 4,
    slug: 'sidang-tpp',
    nama: 'Sidang Tim Pengamat Pemasyarakatan',
    deskripsi: 'Penyelenggaraan sidang TPP untuk membahas dan merekomendasikan usulan asimilasi, PB, CB, dan CMB.',
    Ikon: Gavel,
    detail: 'Sidang TPP dilaksanakan secara berkala dengan melibatkan unsur-unsur dari lembaga pemasyarakatan dan Bapas...',
  },
  {
    id: 5,
    slug: 'pengawasan',
    nama: 'Pengawasan & Pengamatan',
    deskripsi: 'Monitoring dan pengawasan terhadap klien pemasyarakatan selama menjalani program bimbingan di luar lembaga.',
    Ikon: Eye,
    detail: 'Pengawasan dilakukan secara rutin untuk memastikan klien mematuhi syarat-syarat yang ditetapkan...',
  },
  {
    id: 6,
    slug: 'pembebasan-bersyarat',
    nama: 'Pembebasan Bersyarat (PB)',
    deskripsi: 'Proses pengusulan dan pelaksanaan program pembebasan bersyarat bagi narapidana yang memenuhi syarat.',
    Ikon: Shield,
    detail: 'Pembebasan bersyarat diberikan setelah narapidana menjalani 2/3 masa pidana dan memenuhi persyaratan...',
  },
  {
    id: 7,
    slug: 'unduhan-formulir',
    nama: 'Formulir & Dokumen',
    deskripsi: 'Unduh berbagai formulir permohonan layanan, blangko, dan dokumen resmi yang diperlukan.',
    Ikon: FileText,
    detail: 'Tersedia berbagai formulir yang dapat diunduh untuk kemudahan masyarakat dalam mengakses layanan Bapas...',
  },
  {
    id: 8,
    slug: 'konsultasi',
    nama: 'Konsultasi & Informasi',
    deskripsi: 'Layanan konsultasi dan informasi bagi masyarakat, keluarga klien, dan pihak-pihak yang memerlukan.',
    Ikon: Phone,
    detail: 'Layanan konsultasi tersedia pada jam kerja dengan menghubungi kantor atau datang langsung...',
  },
]
