import { useState } from 'react'
import { Search } from 'lucide-react'
import PageWrapper from '@/components/UI/PageWrapper'
import PageHeader  from '@/components/UI/PageHeader'
import BeritaCard  from '@/components/UI/BeritaCard'
import { LoadingSpinner, ErrorBox, KosongBox } from '@/components/UI/StateBox'
import { useGAS }      from '@/hooks/useGAS'
import { fetchBerita } from '@/services/api'

const SEMUA = 'Semua'

export default function Berita() {
  const { data: beritaList, loading, error, refetch } = useGAS(fetchBerita)
  const [query,  setQuery]  = useState('')
  const [filter, setFilter] = useState(SEMUA)

  const kategori = beritaList
    ? [SEMUA, ...new Set(beritaList.map(b => b.kategori))]
    : [SEMUA]

  const filtered = (beritaList || []).filter(b => {
    const matchKat = filter === SEMUA || b.kategori === filter
    const matchQ   = !query  || b.judul.toLowerCase().includes(query.toLowerCase())
    return matchKat && matchQ
  })

  return (
    <PageWrapper title="Berita & Pengumuman">
      <PageHeader
        title="Berita & Pengumuman"
        subtitle="Informasi terkini seputar kegiatan dan pengumuman Bapas Kelas II Sintang"
        breadcrumbs={[{ label: 'Berita', to: '/berita' }]}
      />
      <section className="section">
        <div className="container-bapas">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Cari berita..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm font-heading focus:outline-none focus:ring-2 focus:ring-primary-300"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
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
          </div>

          {loading && <LoadingSpinner teks="Memuat berita..." />}
          {!loading && error && <ErrorBox pesan={error} onRetry={refetch} />}
          {!loading && !error && filtered.length === 0 && <KosongBox teks="Tidak ada berita yang sesuai." />}
          {!loading && !error && filtered.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(b => <BeritaCard key={b.id} berita={b} />)}
            </div>
          )}
        </div>
      </section>
    </PageWrapper>
  )
}
