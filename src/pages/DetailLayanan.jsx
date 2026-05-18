import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import PageWrapper from '@/components/UI/PageWrapper'
import PageHeader from '@/components/UI/PageHeader'
import { layananList } from '@/data/layanan'

export default function DetailLayanan() {
  const { slug } = useParams()

  // Mencari data spesifik berdasarkan slug di URL
  const layanan = layananList.find((item) => item.slug === slug)

  // Pencegahan jika slug tidak valid atau tidak ditemukan
  if (!layanan) {
    return (
      <PageWrapper title="Tidak Ditemukan">
        <div className="container-bapas py-20 text-center">
          <h2 className="text-2xl font-heading font-bold text-slate-800 mb-4">Layanan Tidak Ditemukan</h2>
          <Link to="/layanan" className="text-primary-600 hover:underline">Kembali ke Daftar Layanan</Link>
        </div>
      </PageWrapper>
    )
  }

  const { Ikon, nama, deskripsiLengkap, persyaratan, alur } = layanan

  return (
    <PageWrapper title={nama}>
      <PageHeader
        title={nama}
        subtitle="Informasi lengkap mengenai persyaratan dan alur layanan bimbingan"
        breadcrumbs={[
          { label: 'Layanan', to: '/layanan' },
          { label: nama, to: `/layanan/${slug}` }
        ]}
      />

      <section className="section py-12 bg-slate-50/50">
        <div className="container-bapas max-w-4xl mx-auto">
          {/* Tombol Kembali */}
          <Link 
            to="/layanan" 
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-800 font-semibold mb-6 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Kembali ke Semua Layanan
          </Link>

          {/* Kotak Konten Utama */}
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-slate-100">
            {/* Header Konten */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center shrink-0">
                {Ikon && <Ikon className="w-7 h-7" />}
              </div>
              <h2 className="text-2xl font-heading font-bold text-slate-900">{nama}</h2>
            </div>

            {/* Deskripsi Panjang */}
            <div className="mb-8">
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {deskripsiLengkap}
              </p>
            </div>

            {/* Grid Informasi Detail */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-100 pt-8">
              
              {/* Box Kolom Persyaratan */}
              <div>
                <h3 className="font-heading font-bold text-slate-900 mb-4 flex items-center gap-2 text-base md:text-lg">
                  📋 Persyaratan Dokumen
                </h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  {persyaratan.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-primary-500 font-bold shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Box Kolom Alur Pelayanan */}
              <div>
                <h3 className="font-heading font-bold text-slate-900 mb-4 flex items-center gap-2 text-base md:text-lg">
                  🔄 Alur & Prosedur Proses
                </h3>
                <ol className="space-y-4 text-sm text-slate-600">
                  {alur.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-primary-50 text-primary-600 font-bold text-xs rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>

            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}