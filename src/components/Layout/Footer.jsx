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
                <Shield className="w-6 h-6 text-gold-400" />
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
              Di bawah Kementerian Hukum dan HAM RI<br />
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
                { label: 'Unduhan',           to: '/unduhan' },
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

          {/* Kolom 3 - Layanan */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-gold-400 mb-5">
              Layanan Kami
            </h4>
            <ul className="space-y-2.5">
              {[
                'Penelitian Kemasyarakatan',
                'Bimbingan Klien Dewasa',
                'Bimbingan Klien Anak',
                'Sidang TPP',
                'Pengawasan & Pengamatan',
                'LPAS (Lembaga Penempatan)',
                'Pembebasan Bersyarat',
                'Layanan Informasi',
              ].map((s) => (
                <li key={s} className="text-primary-300 text-sm font-body">
                  • {s}
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
                  Jl. Dr. Wahidin No. 1, Sintang,<br />
                  Kalimantan Barat 78611
                </p>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0 mt-1" />
                <a href="tel:+62565XXXXXX" className="text-primary-300 hover:text-white text-sm transition-colors">
                  (0565) XXX-XXXX
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0 mt-1" />
                <a href="mailto:bapas.sintang@kemenkumham.go.id" className="text-primary-300 hover:text-white text-sm transition-colors break-all">
                  bapas.sintang@kemenkumham.go.id
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-4 h-4 text-gold-400 flex-shrink-0 mt-1" />
                <p className="text-primary-300 text-sm">
                  Senin – Jumat<br />
                  08.00 – 16.00 WIB
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
                { label: 'Kemenkumham RI', url: 'https://www.kemenkumham.go.id' },
                { label: 'Ditjen PAS',     url: 'https://www.ditjenpas.go.id' },
                { label: 'PPID Kemenkumham', url: 'https://ppid.kemenkumham.go.id' },
                { label: 'Kanwil Kalbar',  url: '#' },
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
            Kementerian Hukum dan HAM RI
          </p>
        </div>
      </div>
    </footer>
  )
}
