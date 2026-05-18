import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import PageWrapper from '@/components/UI/PageWrapper'
import PageHeader  from '@/components/UI/PageHeader'
import { LoadingSpinner, ErrorBox } from '@/components/UI/StateBox'
import { fetchBerita } from '@/services/api'
import { Calendar, Tag, ArrowLeft } from 'lucide-react'

export default function BeritaDetail() {
  const { slug } = useParams()
  const [berita,  setBerita]  = useState(null)
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState(null)

  useEffect(() => {
    fetchBerita()
      .then(list => {
        const found = list.find(b => b.slug === slug)
        if (!found) throw new Error('Berita tidak ditemukan.')
        setBerita(found)
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) return <PageWrapper title="Memuat..."><LoadingSpinner teks="Memuat berita..." /></PageWrapper>
  if (error)   return (
    <PageWrapper title="Error">
      <div className="section"><div className="container-bapas"><ErrorBox pesan={error} /></div></div>
    </PageWrapper>
  )

  return (
    <PageWrapper title={berita.judul}>
      <PageHeader
        title={berita.judul}
        breadcrumbs={[{ label: 'Berita', to: '/berita' }, { label: berita.judul }]}
      />
      <section className="section">
        <div className="container-bapas">
          <div className="max-w-3xl mx-auto">
            <div className="flex gap-3 mb-6">
              <span className="badge-primary flex items-center gap-1"><Tag className="w-3 h-3" />{berita.kategori}</span>
              <span className="flex items-center gap-1 text-sm text-slate-400"><Calendar className="w-3.5 h-3.5" />{berita.tanggal}</span>
            </div>
            {berita.gambar && (
              <img src={berita.gambar} alt={berita.judul} className="w-full h-65 object-cover rounded-xl mb-8" />
            )}
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed whitespace-pre-line">
              {berita.konten}
            </div>
            <div className="divider" />
            <Link to="/berita" className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-primary-600 hover:text-primary-800 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Kembali ke Berita
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
