import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Shield, ExternalLink } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary-900 text-white">
      {/* Main footer */}
      <div className="container-bapas py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Kolom 1 - Identitas */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <img
                  src="/bapas_logo.png"
                  alt="Logo Bapas Sintang"
                  className="w-12 h-14 object-contain"
                />
              </div>
              <div>
                <p className="font-heading font-bold text-sm">Bapas Kelas II</p>
                <p className="font-heading font-bold text-base text-gold-400">Sintang</p>
              </div>
            </div>
            <p className="text-primary-300 text-sm leading-relaxed mb-4">
              Balai Pemasyarakatan Kelas II Sintang melayani masyarakat dalam bidang
              bimbingan kemasyarakatan dan pengawasan klien pemasyarakatan.
            </p>
            <p className="text-xs text-primary-400">
              Di bawah Kementerian Imigrasi dan Pemasyarakatan<br />
              Kanwil Kalimantan Barat
            </p>
          </div>

          {/* Kolom 2 - Navigasi */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-gold-400 mb-5">
              Navigasi
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Beranda',           to: '/' },
                { label: 'Profil Instansi',   to: '/profil' },
                { label: 'Visi & Misi',       to: '/visi-misi' },
                { label: 'Struktur Org.',     to: '/struktur' },
                { label: 'Layanan',           to: '/layanan' },
                { label: 'Berita & Info',     to: '/berita' },
                { label: 'Galeri',            to: '/galeri' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-primary-300 hover:text-white text-sm font-heading transition-colors"
                  >
                    → {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

{/* Kolom 3 - Layanan (SUDAH AKTIF ROUTINGNYA) */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-gold-400 mb-5">
              Layanan Kami
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Penelitian Kemasyarakatan (Litmas)', slug: 'penelitian-kemasyarakatan' },
                { label: 'Bimbingan Klien Dewasa',            slug: 'bimbingan-klien-dewasa' },
                { label: 'Bimbingan Klien Anak',              slug: 'bimbingan-klien-anak' },
                { label: 'Sidang Tim Pengamat Pemasyarakatan',slug: 'sidang-tpp' },
                { label: 'Pengawasan & Pembimbingan',          slug: 'pengawasan-dan-pengamatan' },
                { label: 'Layanan Integrasi',                 slug: 'integrasi' },
                { label: 'Konsultasi & Informasi',            slug: 'konsultasi-dan-informasi' },
              ].map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/layanan/${item.slug}`}
                    className="text-primary-300 hover:text-white text-sm font-body transition-colors block hover:translate-x-0.5 transform duration-200"
                  >
                    • {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 4 - Kontak */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-gold-400 mb-5">
              Hubungi Kami
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-1" />
                <p className="text-primary-300 text-sm">
                  Jl. Dr. Wahidin Sudirohusodo No. 73, Sintang,<br />
                  Kalimantan Barat 78611
                </p>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0 mt-1" />
                <a href="tel:+62565XXXXXX" className="text-primary-300 hover:text-white text-sm transition-colors">
                  (+62) 82353572234
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0 mt-1" />
                <a href="mailto:bapas.sintang@kemenkumham.go.id" className="text-primary-300 hover:text-white text-sm transition-colors break-all">
                  bapas.sintang@kemenimipas.go.id
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-4 h-4 text-gold-400 flex-shrink-0 mt-1" />
                <p className="text-primary-300 text-sm">
                  Senin – Kamis<br />
                  07.30 – 16.00 WIB<br />
                  Jumat<br />
                  07.30 – 16.30 WIB
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Link pemerintah */}
      <div className="border-t border-white/10">
        <div className="container-bapas py-4">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <p className="text-primary-400 text-xs">
              Tautan Pemerintah:
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { label: 'Kemenimipas RI', url: 'https://kemenimipas.go.id/' },
                { label: 'Ditjen PAS',     url: 'https://www.ditjenpas.go.id' },
                { label: 'PPID Kemenimipas', url: 'https://ppid.kemenimipas.go.id/' },
                { label: 'Pemasyarakatan Kalbar',  url: 'https://pemasyarakatankalbar.id/' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary-400 hover:text-white text-xs transition-colors"
                >
                  {link.label}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container-bapas py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-primary-400 text-xs text-center">
            © {year} Balai Pemasyarakatan Kelas II Sintang. Hak Cipta Dilindungi.
          </p>
          <p className="text-primary-500 text-xs">
            Kementerian Imigrasi dan Pemasyarakatan
          </p>
        </div>
      </div>
    </footer>
  )
}
