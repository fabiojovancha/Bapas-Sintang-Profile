import { useState } from 'react'
import { X } from 'lucide-react'
import PageWrapper from '@/components/UI/PageWrapper'
import PageHeader  from '@/components/UI/PageHeader'
import { LoadingSpinner, ErrorBox, KosongBox } from '@/components/UI/StateBox'
import { useGAS }      from '@/hooks/useGAS'
import { fetchGaleri } from '@/services/api'

const SEMUA = 'Semua'

export default function Galeri() {
  const { data: galeriList, loading, error, refetch } = useGAS(fetchGaleri)
  const [filter,   setFilter]   = useState(SEMUA)
  const [lightbox, setLightbox] = useState(null)

  const kategori = galeriList
    ? [SEMUA, ...new Set(galeriList.map(g => g.kategori))]
    : [SEMUA]

  const filtered = (galeriList || []).filter(g =>
    filter === SEMUA || g.kategori === filter
  )

  return (
    <PageWrapper title="Galeri">
      <PageHeader
        title="Galeri Foto"
        subtitle="Dokumentasi kegiatan Balai Pemasyarakatan Kelas II Sintang"
        breadcrumbs={[{ label: 'Galeri', to: '/galeri' }]}
      />
      <section className="section">
        <div className="container-bapas">
          {/* Filter */}
          <div className="flex gap-2 flex-wrap mb-8">
            {kategori.map(kat => (
              <button
                key={kat}
                onClick={() => setFilter(kat)}
                className={`px-4 py-2 rounded-lg text-sm font-heading font-semibold transition-all ${
                  filter === kat
                    ? 'bg-primary-600 text-white'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-primary-300'
                }`}
              >
                {kat}
              </button>
            ))}
          </div>

          {loading && <LoadingSpinner teks="Memuat galeri..." />}
          {!loading && error && <ErrorBox pesan={error} onRetry={refetch} />}
          {!loading && !error && filtered.length === 0 && <KosongBox teks="Belum ada foto." />}
          {!loading && !error && filtered.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filtered.map(item => (
                <div
                  key={item.id}
                  onClick={() => setLightbox(item)}
                  className="group relative overflow-hidden rounded-xl cursor-pointer aspect-square bg-slate-100"
                >
                  <img
                    src={item.gambar}
                    alt={item.judul}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={e => { e.target.src = 'https://placehold.co/400x400/1d4ed8/ffffff?text=Foto' }}
                  />
                  <div className="absolute inset-0 bg-primary-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <div>
                      <p className="text-white text-xs font-heading font-bold line-clamp-2">{item.judul}</p>
                      <p className="text-primary-300 text-xs">{item.tanggal}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="w-5 h-5" />
          </button>
          <div className="max-w-3xl w-full" onClick={e => e.stopPropagation()}>
            <img
              src={lightbox.gambar}
              alt={lightbox.judul}
              className="w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
            />
            <p className="text-white text-center mt-4 font-heading font-semibold text-lg">{lightbox.judul}</p>
            <p className="text-slate-400 text-center text-sm mt-1">{lightbox.kategori} · {lightbox.tanggal}</p>
          </div>
        </div>
      )}
    </PageWrapper>
  )
}
