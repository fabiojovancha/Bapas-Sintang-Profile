import PageWrapper from '@/components/UI/PageWrapper'
import PageHeader  from '@/components/UI/PageHeader'
import { Target, Eye, Star } from 'lucide-react'

export default function VisiMisi() {
  return (
    <PageWrapper title="Visi & Misi">
      <PageHeader
        title="Visi & Misi"
        subtitle="Arah dan tujuan Balai Pemasyarakatan Kelas II Sintang"
        breadcrumbs={[{ label: 'Visi & Misi', to: '/visi-misi' }]}
      />
      <section className="section">
        <div className="container-bapas">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Visi */}
            <div className="card border-l-4 border-primary-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Eye className="w-5 h-5 text-primary-600" />
                </div>
                <h2 className="text-xl font-heading font-bold text-primary-900">Visi</h2>
              </div>
              <p className="text-slate-600 leading-relaxed italic">
                "Terwujudnya Penegakan Hukum dan Pelayanan Keimigrasian serta Pemasyarakatan yang Modern, Berintegritas, dan Berkeadilan guna Mendukung Keamanan Nasional yang Tangguh Menuju Indonesia Emas 2045."
              </p>
            </div>

            {/* Misi */}
            <div className="card border-l-4 border-gold-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Target className="w-5 h-5 text-amber-600" />
                </div>
                <h2 className="text-xl font-heading font-bold text-primary-900">Misi</h2>
              </div>
              <ol className="space-y-3">
                {[
                  'Mewujudkan penegakan hukum dan pelayanan yang berintegritas, transparan, dan berkeadilan bagi Tahanan, Anak, dan Warga Binaan.',
                  'Menyelenggarakan pembinaan, pembimbingan, dan reintegrasi sosial secara optimal dengan menjunjung tinggi prinsip kesamaan kedudukan di dalam hukum..',
                  'Membangun tata kelola kelembagaan yang modern, profesional, terintegrasi, serta dapat dipertanggungjawabkan (akuntabel).',
                  'Melaksanakan pengamanan, pengawasan, dan perawatan yang mengedepankan asas kemanusiaan, kemandirian, serta bebas dari tindakan diskriminatif.',
                ].map((m, i) => (
                  <li key={i} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                    <span className="w-6 h-6 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {m}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Nilai-nilai */}
          <div className="mt-12 max-w-5xl mx-auto">
            <h3 className="text-xl font-heading font-bold text-primary-900 mb-6 text-center">
              Nilai-Nilai Organisasi
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Profesional', 'Akuntabel', 'Sinergi', 'Inovatif'].map((nilai) => (
                <div key={nilai} className="card text-center hover:-translate-y-1 transition-transform">
                  <Star className="w-6 h-6 text-gold-500 mx-auto mb-2" />
                  <p className="font-heading font-bold text-primary-800">{nilai}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
