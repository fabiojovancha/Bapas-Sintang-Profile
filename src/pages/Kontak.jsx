import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, HelpCircle } from 'lucide-react'
import PageWrapper     from '@/components/UI/PageWrapper'
import PageHeader      from '@/components/UI/PageHeader'
import FAQAccordion    from '@/components/UI/FAQAccordion'
import { useGAS }      from '@/hooks/useGAS'
import { kirimPesan, fetchFAQ } from '@/services/api'

const INIT = { nama: '', email: '', telp: '', pesan: '' }

export default function Kontak() {
  const [form,    setForm]    = useState(INIT)
  const [loading, setLoading] = useState(false)
  const [sukses,  setSukses]  = useState(false)
  const [error,   setError]   = useState(null)

    const { data: faqList } = useGAS(fetchFAQ)
  const faqKontak = (faqList || []).filter(f => f.kategori === 'Umum').slice(0, 5)

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.id]: e.target.value }))
  }

  async function handleKirim() {
    setError(null)

    // Validasi sederhana
    if (!form.nama.trim() || !form.email.trim() || !form.pesan.trim()) {
      setError('Nama, email, dan pesan wajib diisi.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Format email tidak valid.')
      return
    }

    setLoading(true)
    try {
      await kirimPesan(form)
      setSukses(true)
      setForm(INIT)
    } catch (err) {
      setError(err.message || 'Gagal mengirim pesan. Coba beberapa saat lagi.')
    } finally {
      setLoading(false)
    }
  }

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

            {/* ── Info Kontak ── */}
            <div>
              <h2 className="section-title">Informasi Kontak</h2>
              <div className="title-underline" />
              <div className="space-y-6">
                {[
                  { Ikon: MapPin, label: 'Alamat',     value: 'Jl. Dr. Wahidin Sudirohusodo No. 73, Sintang, Kalimantan Barat 78611' },
                  { Ikon: Phone,  label: 'Telepon',    value: '(+62) 82353572234' },
                  { Ikon: Mail,   label: 'Email',      value: 'bapas.sintang@kemenimipas.go.id' },
                  { Ikon: Clock,  label: 'Jam Kerja',  value: 'Senin – Kamis: 07.30 – 16.00 WIB, Jumat: 07.30 – 16.30 WIB' },
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

              {/* Google Maps Embed */}
              <div className="mt-8 rounded-xl overflow-hidden border border-primary-100 shadow-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8159828381845!2d111.49494887581596!3d0.062020799775887446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31fe218d37338c07%3A0xdd455cd2d0d0c6d4!2sBalai%20Pemasyarakatan%20Kelas%20II%20Sintang!5e0!3m2!1sid!2sid!4v1778229061459!5m2!1sid!2sid"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Bapas Kelas II Sintang"
                />
              </div>
            </div>

            {/* ── Form Kirim Pesan ── */}
            <div>
              <h2 className="section-title">Kirim Pesan</h2>
              <div className="title-underline" />

              {/* Sukses */}
              {sukses ? (
                <div className="card flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-slate-800 text-lg mb-1">Pesan Terkirim!</h3>
                    <p className="text-slate-500 text-sm">Terima kasih, pesan Anda sudah kami terima.<br />Kami akan merespons dalam 1–2 hari kerja.</p>
                  </div>
                  <button
                    onClick={() => setSukses(false)}
                    className="btn-outline mt-2"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <div className="card space-y-5">
                  {/* Error banner */}
                  {error && (
                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-600">{error}</p>
                    </div>
                  )}

                  {/* Field Nama */}
                  {[
                    { id: 'nama',  label: 'Nama Lengkap',  type: 'text',  placeholder: 'Masukkan nama Anda', required: true },
                    { id: 'email', label: 'Alamat Email',   type: 'email', placeholder: 'email@contoh.com',   required: true },
                    { id: 'telp',  label: 'No. Telepon',    type: 'tel',   placeholder: '08xx-xxxx-xxxx',     required: false },
                  ].map(({ id, label, type, placeholder, required }) => (
                    <div key={id}>
                      <label htmlFor={id} className="block text-sm font-heading font-semibold text-slate-700 mb-1.5">
                        {label} {required && <span className="text-red-500">*</span>}
                      </label>
                      <input
                        id={id}
                        type={type}
                        value={form[id]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition-all"
                      />
                    </div>
                  ))}

                  {/* Textarea Pesan */}
                  <div>
                    <label htmlFor="pesan" className="block text-sm font-heading font-semibold text-slate-700 mb-1.5">
                      Pesan <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="pesan"
                      rows={5}
                      value={form.pesan}
                      onChange={handleChange}
                      placeholder="Tulis pesan atau pertanyaan Anda di sini..."
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition-all resize-none"
                    />
                  </div>

                  {/* Tombol */}
                  <button
                    onClick={handleKirim}
                    disabled={loading}
                    className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading
                      ? <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />Mengirim...</>
                      : <><Send className="w-4 h-4" />Kirim Pesan</>
                    }
                  </button>
                  <p className="text-xs text-slate-400 text-center">
                    Pesan Anda akan disimpan dan dibalas dalam 1–2 hari kerja.
                  </p>
                </div>
              )}
            </div>

          </div>
          {/* FAQ Singkat */}
          {faqKontak.length > 0 && (
            <div className="mt-16">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-1.5 rounded-full text-sm font-heading font-semibold mb-3">
                  <HelpCircle className="w-4 h-4" />
                  Pertanyaan Umum
                </div>
                <h2 className="section-title">Yang Sering Ditanyakan</h2>
                <div className="title-underline mx-auto" />
              </div>
              <div className="max-w-2xl mx-auto">
                <FAQAccordion items={faqKontak} />
              </div>
            </div>
          )}
        </div>
      
      </section>
    </PageWrapper>
  )
}
