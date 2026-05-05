import PageWrapper from '@/components/UI/PageWrapper'
import PageHeader  from '@/components/UI/PageHeader'
import { strukturOrg } from '@/data/pegawai'
import { User } from 'lucide-react'

function KartuPejabat({ nama, jabatan, nip }) {
  return (
    <div className="card text-center hover:-translate-y-1 transition-transform">
      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
        <User className="w-8 h-8 text-primary-500" />
      </div>
      <h4 className="font-heading font-bold text-primary-900 text-sm">{nama}</h4>
      <p className="text-xs text-slate-500 mt-1">{jabatan}</p>
      <p className="text-xs text-primary-400 mt-1">{nip}</p>
    </div>
  )
}

export default function StrukturOrg() {
  return (
    <PageWrapper title="Struktur Organisasi">
      <PageHeader
        title="Struktur Organisasi"
        subtitle="Susunan pejabat dan pegawai Balai Pemasyarakatan Kelas II Sintang"
        breadcrumbs={[{ label: 'Struktur Organisasi', to: '/struktur' }]}
      />
      <section className="section">
        <div className="container-bapas">
          {/* Kepala */}
          <div className="flex justify-center mb-8">
            <div className="w-64">
              <KartuPejabat {...strukturOrg.kepala} />
            </div>
          </div>

          {/* Garis penghubung */}
          <div className="flex justify-center">
            <div className="w-px h-8 bg-primary-300" />
          </div>

          {/* Sub bagian & seksi */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[...strukturOrg.subBagian, ...strukturOrg.seksi].map((p, i) => (
              <KartuPejabat key={i} {...p} />
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
