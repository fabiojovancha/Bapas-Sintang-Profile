import { 
  ClipboardList, Users, Baby, Gavel, Eye, Shield, FileText, PhoneCall 
} from 'lucide-react'

import { litmasDetail } from './layanan/litmas'
import { bimbinganDewasaDetail } from './layanan/bimbinganDewasa'
import { bimbinganAnakDetail } from './layanan/bimbinganAnak'
import { tppDetail } from './layanan/tpp'
import { pengawasanDetail } from './layanan/pengawasan'
import { integrasiDetail } from './layanan/integrasi'
import { konsultasiDetail } from './layanan/konsultasi'

export const layananList = [
  {
    id: 1,
    slug: 'penelitian-kemasyarakatan',
    Ikon: ClipboardList,
    nama: 'Penelitian Kemasyarakatan (Litmas)',
    deskripsi: 'Pengumpulan data sosial klien untuk bahan pertimbangan hakim, lembaga pemasyarakatan, dan instansi terkait.',
    ...litmasDetail
  },
  {
    id: 2,
    slug: 'bimbingan-klien-dewasa',
    Ikon: Users,
    nama: 'Bimbingan Klien Dewasa',
    deskripsi: 'Pembimbingan bagi klien dewasa dalam program pembebasan bersyarat, cuti bersyarat, dan cuti menjelang bebas.',
    ...bimbinganDewasaDetail
  },
  {
    id: 3,
    slug: 'bimbingan-klien-anak',
    Ikon: Baby,
    nama: 'Bimbingan Klien Anak',
    deskripsi: 'Pelayanan khusus anak berhadapan dengan hukum (ABH) melalui diversi dan program rehabilitasi sosial.',
    ...bimbinganAnakDetail
  },
  {
    id: 4,
    slug: 'sidang-tpp',
    Ikon: Gavel,
    nama: 'Sidang Tim Pengamat Pemasyarakatan',
    deskripsi: 'Penyelenggaraan sidang TPP untuk membahas dan merekomendasikan usulan asimilasi, PB, CB, dan CMB.',
    ...tppDetail
  },
  {
    id: 5,
    slug: 'pengawasan-dan-pembimbingan',
    Ikon: Eye,
    nama: 'Pengawasan & Pembimbingan',
    deskripsi: 'Monitoring dan pengawasan terhadap klien pemasyarakatan selama menjalani program bimbingan di luar lembaga.',
    ...pengawasanDetail
  },
  {
    id: 6,
    slug: 'integrasi',
    Ikon: Shield,
    nama: 'Layanan Integrasi (PB/CB/CMB/Asimilasi)',
    deskripsi: 'Proses pengusulan dan pelaksanaan program pembebasan bersyarat bagi narapidana yang memenuhi syarat.',
    ...integrasiDetail
  },
  {
    id: 8,
    slug: 'konsultasi-dan-informasi',
    Ikon: PhoneCall,
    nama: 'Konsultasi & Informasi',
    deskripsi: 'Layanan konsultasi dan informasi bagi masyarakat, keluarga klien, dan pihak-pihak yang memerlukan.',
    ...konsultasiDetail
  }
]