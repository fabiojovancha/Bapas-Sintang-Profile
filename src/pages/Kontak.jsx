import PageWrapper from '@/components/UI/PageWrapper'
import PageHeader  from '@/components/UI/PageHeader'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

export default function Kontak() {
  return (
    <PageWrapper title="Kontak">
      <PageHeader
        title="Hubungi Kami"
        subtitle="Kami siap membantu Anda. Jangan ragu untuk menghubungi kami."
        breadcrumbs={[{ label: 'Kontak', to: '/kontak' }]}
      />
      <section className="section">
        <div className="container-bapas">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Info kontak */}
            <div>
              <h2 className="section-title">Informasi Kontak</h2>
              <div className="title-underline" />
              <div className="space-y-6">
                {[
                  {
                    Ikon: MapPin,
                    label: 'Alamat',
                    value: 'Jl. Dr. Wahidin No. 1, Sintang, Kalimantan Barat 78611',
                  },
                  { Ikon: Phone, label: 'Telepon', value: '(0565) XXX-XXXX' },
                  { Ikon: Mail,  label: 'Email',   value: 'bapas.sintang@kemenkumham.go.id' },
                  { Ikon: Clock, label: 'Jam Kerja', value: 'Senin – Jumat, 08.00 – 16.00 WIB' },
                ].map(({ Ikon, label, value }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Ikon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-primary-800 text-sm">{label}</p>
                      <p className="text-slate-600 text-sm mt-0.5">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Peta placeholder */}
              <div className="mt-8 h-56 bg-primary-50 rounded-xl flex items-center justify-center border border-primary-100">
                <div className="text-center text-slate-400">
                  <MapPin className="w-8 h-8 mx-auto mb-2 text-primary-300" />
                  <p className="text-sm font-heading">Peta Lokasi</p>
                  <p className="text-xs mt-1">Integrasikan dengan Leaflet atau Google Maps</p>
                </div>
              </div>
            </div>

            {/* Formulir kontak */}
            <div>
              <h2 className="section-title">Kirim Pesan</h2>
              <div className="title-underline" />
              <div className="card space-y-5">
                {[
                  { id: 'nama',  label: 'Nama Lengkap',  type: 'text',  placeholder: 'Masukkan nama Anda' },
                  { id: 'email', label: 'Alamat Email',   type: 'email', placeholder: 'email@contoh.com' },
                  { id: 'telp',  label: 'No. Telepon',    type: 'tel',   placeholder: '08xx-xxxx-xxxx' },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block text-sm font-heading font-semibold text-slate-700 mb-1.5">
                      {label}
                    </label>
                    <input
                      id={id}
                      type={type}
                      placeholder={placeholder}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition-all"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="pesan" className="block text-sm font-heading font-semibold text-slate-700 mb-1.5">
                    Pesan
                  </label>
                  <textarea
                    id="pesan"
                    rows={5}
                    placeholder="Tulis pesan atau pertanyaan Anda di sini..."
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition-all resize-none"
                  />
                </div>
                <button
                  type="button"
                  className="btn-primary w-full justify-center"
                >
                  <Send className="w-4 h-4" />
                  Kirim Pesan
                </button>
                <p className="text-xs text-slate-400 text-center">
                  Pesan Anda akan kami balas dalam 1–2 hari kerja.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
