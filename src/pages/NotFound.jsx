import { Link } from 'react-router-dom'
import PageWrapper from '@/components/UI/PageWrapper'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <PageWrapper title="404 - Halaman Tidak Ditemukan">
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center px-4">
          <p className="text-8xl font-heading font-bold text-primary-100 mb-2">404</p>
          <h1 className="text-2xl font-heading font-bold text-primary-900 mb-3">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-slate-500 mb-8 max-w-sm mx-auto">
            Halaman yang Anda cari tidak ada atau telah dipindahkan.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/" className="btn-primary">
              <Home className="w-4 h-4" />
              Ke Beranda
            </Link>
            <button onClick={() => window.history.back()} className="btn-outline">
              <ArrowLeft className="w-4 h-4" />
              Kembali
            </button>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
