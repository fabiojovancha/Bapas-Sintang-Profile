import { Loader2, AlertCircle, RefreshCw } from 'lucide-react'

export function LoadingSpinner({ teks = 'Memuat data...' }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-3">
      <Loader2 className="w-8 h-8 text-primary-400 animate-spin" />
      <p className="text-sm text-slate-400 font-heading">{teks}</p>
    </div>
  )
}

export function ErrorBox({ pesan, onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-4">
      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
        <AlertCircle className="w-6 h-6 text-red-500" />
      </div>
      <div className="text-center">
        <p className="font-heading font-semibold text-slate-700 mb-1">Gagal memuat data</p>
        <p className="text-sm text-slate-400">{pesan}</p>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-primary-600 hover:text-primary-800 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          Coba lagi
        </button>
      )}
    </div>
  )
}

export function KosongBox({ teks = 'Tidak ada data.' }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-2">
      <p className="text-slate-400 font-heading">{teks}</p>
    </div>
  )
}
