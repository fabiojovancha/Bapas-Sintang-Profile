import PageWrapper from '@/components/UI/PageWrapper'
import PageHeader  from '@/components/UI/PageHeader'

export default function Profil() {
  return (
    <PageWrapper title="Profil Instansi">
      <PageHeader
        title="Profil Instansi"
        subtitle="Mengenal Balai Pemasyarakatan Kelas II Sintang lebih dekat"
        breadcrumbs={[{ label: 'Profil Instansi', to: '/profil' }]}
      />
      <section className="section">
        <div className="container-bapas">
          <div className="max-w-3xl">
            <h2 className="section-title">Tentang Bapas Kelas II Sintang</h2>
            <div className="title-underline" />
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
              <p>
                Balai Pemasyarakatan (Bapas) Kelas II Sintang adalah Unit Pelaksana Teknis
                Pemasyarakatan yang berada di bawah dan bertanggung jawab kepada Kepala Kantor
                Wilayah Kementerian Hukum dan Hak Asasi Manusia Kalimantan Barat.
              </p>
              <p>
                Bapas Kelas II Sintang memiliki tugas melaksanakan pembimbingan Klien
                Pemasyarakatan di wilayah Kabupaten Sintang dan sekitarnya.
              </p>
              <p>
                <strong>Alamat:</strong><br />
                Jl. Dr. Wahidin No. 1, Sintang, Kalimantan Barat 78611
              </p>
              <p>
                <strong>Telepon:</strong> (0565) XXX-XXXX<br />
                <strong>Email:</strong> bapas.sintang@kemenkumham.go.id
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
