import PageWrapper from '@/components/UI/PageWrapper'
import PageHeader  from '@/components/UI/PageHeader'
import { strukturOrg } from '@/data/pegawai'
import { User, Users } from 'lucide-react'

function KartuPejabat({ nama, jabatan, nip }) {
  return (
    <div className="card text-center hover:-translate-y-1 transition-transform h-full flex flex-col justify-center py-5">
      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
        {nama ? (
          <User className="w-8 h-8 text-primary-500" />
        ) : (
          <Users className="w-8 h-8 text-primary-500" />
        )}
      </div>
      
      {/* Hanya tampilkan nama jika properti nama tersedia */}
      {nama && <h4 className="font-heading font-bold text-primary-900 text-sm">{nama}</h4>}
      
      {/* Tampilan jabatan */}
      <p className={`font-heading font-semibold text-primary-900 ${nama ? 'text-xs text-slate-500 mt-1 font-normal' : 'text-sm'}`}>
        {jabatan}
      </p>
      
      {/* Hanya tampilkan NIP jika properti nip tersedia */}
      {nip && <p className="text-xs text-primary-400 mt-1">{nip}</p>}
    </div>
  )
}

export default function StrukturOrg() {
  // 1. Definisikan satu objek gabungan untuk JFT PK & APK tanpa nama dan NIP
  const gabunganFungsional = {
    jabatan: 'Pembimbing Kemasyarakatan & Asisten Pembimbing Kemasyarakatan'
  }

  // 2. Gabungkan Kasubsi TU, Kasi Dewasa, Kasi Anak, dan Card Gabungan Fungsional ke dalam satu baris
  const barisBawah = [
    ...strukturOrg.subBagian,
    ...strukturOrg.seksi,
    gabunganFungsional
  ]

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

          {/* Garis penghubung vertikal */}
          <div className="flex justify-center mb-6">
            <div className="w-px h-8 bg-primary-300" />
          </div>

          {/* 3. Grid diatur menjadi 4 kolom di layar besar (lg:grid-cols-4) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {barisBawah.map((p, i) => (
              <KartuPejabat key={i} {...p} />
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}