import { Link } from 'react-router-dom'
import { ArrowRight, Users, FileText, Phone, Award, ChevronRight, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import PageWrapper from '@/components/UI/PageWrapper'
import BeritaCard  from '@/components/UI/BeritaCard'
import LayananCard from '@/components/UI/LayananCard'
import { beritaList } from '@/data/berita'
import { layananList } from '@/data/layanan'

const statsData = [
  { label: 'Klien Aktif',       value: '120+', ikon: Users },
  { label: 'Litmas Diselesaikan', value: '450+', ikon: FileText },
  { label: 'Tahun Beroperasi',  value: '30+',  ikon: Award },
  { label: 'Staf Profesional',  value: '25',   ikon: Shield },
]

export default function Home() {
  return (
    <PageWrapper title="Beranda">

      {/* ========== HERO ========== */}
      <section className="bg-hero-pattern relative overflow-hidden min-h-[560px] flex items-center">
        {/* Dekorasi */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full border-2 border-white -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-white translate-y-1/2 -translate-x-1/3" />
        </div>

        <div className="container-bapas relative z-10 py-20 lg:py-28">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white/10 text-gold-400 text-sm font-heading font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/20"
            >
              <Shield className="w-4 h-4" />
              Kementerian Hukum dan HAM RI
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
              className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white mb-6 leading-tight"
            >
              Balai Pemasyarakatan<br />
              <span className="text-gold-400">Kelas II Sintang</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
              className="text-primary-200 text-lg leading-relaxed mb-8 max-w-xl"
            >
              Melayani masyarakat dalam bimbingan kemasyarakatan, penelitian kemasyarakatan,
              dan pengawasan klien pemasyarakatan di wilayah Kabupaten Sintang.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/layanan" className="btn-primary bg-gold-500 hover:bg-gold-600 text-primary-900">
                Lihat Layanan Kami
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/kontak" className="btn-outline border-white/40 text-white hover:bg-white hover:text-primary-800">
                Hubungi Kami
                <Phone className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== STATISTIK ========== */}
      <section className="bg-white border-b border-slate-100">
        <div className="container-bapas py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {statsData.map(({ label, value, ikon: Ikon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Ikon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold text-primary-800">{value}</p>
                  <p className="text-sm text-slate-500">{label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== LAYANAN UNGGULAN ========== */}
      <section className="section bg-section-pattern">
        <div className="container-bapas">
          <div className="text-center mb-12">
            <p className="text-primary-600 font-heading font-semibold text-sm uppercase tracking-widest mb-2">Pelayanan Publik</p>
            <h2 className="section-title">Layanan Kami</h2>
            <div className="title-underline mx-auto" />
            <p className="section-subtitle mx-auto text-center">
              Bapas Kelas II Sintang menyediakan berbagai layanan bimbingan kemasyarakatan
              yang profesional dan berpihak kepada masyarakat.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {layananList.slice(0, 4).map((layanan, i) => (
              <motion.div
                key={layanan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <LayananCard layanan={layanan} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/layanan" className="btn-outline">
              Lihat Semua Layanan
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== BERITA TERBARU ========== */}
      <section className="section bg-white">
        <div className="container-bapas">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-primary-600 font-heading font-semibold text-sm uppercase tracking-widest mb-2">Info Terkini</p>
              <h2 className="section-title mb-0">Berita & Pengumuman</h2>
              <div className="title-underline" />
            </div>
            <Link to="/berita" className="hidden md:flex items-center gap-2 text-sm font-heading font-semibold text-primary-600 hover:text-primary-800 transition-colors">
              Semua Berita <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beritaList.slice(0, 3).map((berita, i) => (
              <motion.div
                key={berita.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <BeritaCard berita={berita} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link to="/berita" className="btn-outline">
              Semua Berita <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== CTA KONTAK ========== */}
      <section className="section bg-primary-800">
        <div className="container-bapas text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Butuh Informasi atau Bantuan?
          </h2>
          <p className="text-primary-300 mb-8 max-w-xl mx-auto">
            Tim kami siap membantu Anda. Hubungi kami melalui telepon, email,
            atau kunjungi kantor kami langsung di Sintang.
          </p>
          <Link to="/kontak" className="btn-primary bg-gold-500 hover:bg-gold-400 text-primary-900">
            Hubungi Kami Sekarang
            <Phone className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </PageWrapper>
  )
}
