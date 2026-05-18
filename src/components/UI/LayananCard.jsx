import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function LayananCard({ layanan }) {
  const { Ikon, nama, deskripsi, slug } = layanan

  return (
    <div className="card group hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      {/* Ikon */}
      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors duration-300">
        {Ikon && (
          <Ikon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
        )}
      </div>

      {/* Konten */}
      <h3 className="font-heading font-bold text-primary-900 mb-2 group-hover:text-primary-700 transition-colors">
        {nama}
      </h3>
      <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-4">
        {deskripsi}
      </p>

      {/* Link - UPDATE DISINI (Dari /layanan#${slug} menjadi /layanan/${slug}) */}
      <Link
        to={`/layanan/${slug}`}
        className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-primary-600 hover:text-primary-800 transition-colors mt-auto"
      >
        Lihat Detail
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  )
}