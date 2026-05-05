import { useState } from 'react'
import PageWrapper from '@/components/UI/PageWrapper'
import PageHeader  from '@/components/UI/PageHeader'
import { unduhanList, kategoriUnduhan } from '@/data/unduhan'
import { Download, FileText, Calendar } from 'lucide-react'

export default function Unduhan() {
  const [filter, setFilter] = useState('Semua')

  const filtered = filter === 'Semua'
    ? unduhanList
    : unduhanList.filter((u) => u.kategori === filter)

  return (
    <PageWrapper title="Unduhan">
      <PageHeader
        title="Unduhan"
        subtitle="Formulir, panduan, dan dokumen resmi yang dapat diunduh"
        breadcrumbs={[{ label: 'Unduhan', to: '/unduhan' }]}
      />
      <section className="section">
        <div className="container-bapas">
          {/* Filter */}
          <div className="flex gap-2 flex-wrap mb-8">
            {kategoriUnduhan.map((kat) => (
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

          {/* Tabel unduhan */}
          <div className="bg-white rounded-xl shadow-card overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-primary-50 border-b border-primary-100">
                <tr>
                  <th className="text-left px-6 py-4 font-heading font-semibold text-primary-800">Nama Dokumen</th>
                  <th className="text-left px-4 py-4 font-heading font-semibold text-primary-800 hidden md:table-cell">Kategori</th>
                  <th className="text-left px-4 py-4 font-heading font-semibold text-primary-800 hidden lg:table-cell">Tanggal</th>
                  <th className="text-left px-4 py-4 font-heading font-semibold text-primary-800 hidden sm:table-cell">Format</th>
                  <th className="text-right px-6 py-4 font-heading font-semibold text-primary-800">Unduh</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-primary-400 flex-shrink-0" />
                        <span className="font-body text-slate-700">{item.nama}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 hidden md:table-cell">
                      <span className="badge-primary">{item.kategori}</span>
                    </td>
                    <td className="px-4 py-4 hidden lg:table-cell">
                      <span className="flex items-center gap-1 text-slate-400 text-xs">
                        <Calendar className="w-3.5 h-3.5" />{item.tanggal}
                      </span>
                    </td>
                    <td className="px-4 py-4 hidden sm:table-cell">
                      <span className="text-xs font-heading font-bold text-red-600">{item.format}</span>
                      <span className="text-xs text-slate-400 ml-1">· {item.ukuran}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <a
                        href={item.url}
                        download
                        className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-primary-600 hover:text-primary-800 transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        Unduh
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
