import { Link } from 'react-router-dom'
import { Calendar, ArrowRight, Tag } from 'lucide-react'

/**
 * Kartu berita / pengumuman.
 *
 * Props dari data/berita.js:
 *  - slug, judul, ringkasan, tanggal, kategori, gambar
 */
export default function BeritaCard({ berita }) {
  const { slug, judul, ringkasan, tanggal, kategori, gambar } = berita

  return (
    <article className="card group hover:-translate-y-1 transition-all duration-300">
      {/* Thumbnail */}
      {gambar && (
        <div className="relative -mx-6 -mt-6 mb-5 overflow-hidden rounded-t-xl h-48">
          <img
            src={gambar}
            alt={judul}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
        </div>
      )}

      {/* Metadata */}
      <div className="flex items-center gap-3 mb-3">
        <span className="badge-primary flex items-center gap-1">
          <Tag className="w-3 h-3" />
          {kategori}
        </span>
        <span className="flex items-center gap-1 text-xs text-slate-400 font-heading">
          <Calendar className="w-3 h-3" />
          {tanggal}
        </span>
      </div>

      {/* Judul */}
      <h3 className="text-base font-heading font-bold text-primary-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
        {judul}
      </h3>

      {/* Ringkasan */}
      <p className="text-sm text-slate-500 line-clamp-3 mb-4 leading-relaxed">
        {ringkasan}
      </p>

      {/* Link */}
      <Link
        to={`/berita/${slug}`}
        className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-primary-600 hover:text-primary-800 transition-colors"
      >
        Baca Selengkapnya
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </article>
  )
}
