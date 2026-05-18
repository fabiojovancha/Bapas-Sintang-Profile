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
                Balai Pemasyarakatan (Bapas) Kelas II Sintang adalah Unit Pelaksana Teknis (UPT) Pemasyarakatan
                 yang mengemban tugas pokok dan fungsi dalam memberikan bimbingan kemasyarakatan, pendampingan,
                 serta pengawasan terhadap Klien Pemasyarakatan. Wilayah kerja Bapas Kelas II Sintang mencakup
                 lima kabupaten di Kalimantan Barat, yaitu Kabupaten Sintang, Kabupaten Melawi, 
                 Kabupaten Kapuas Hulu, Kabupaten Sekadau, dan Kabupaten Sanggau.
              </p>
              <p>
                Bapas Kelas II Sintang berkomitmen penuh untuk mengawal seluruh tahapan proses peradilan
                mulai dari tahap pra-adjudikasi, adjudikasi, hingga pasca-adjudikasi termasuk masa integrasi
                 seperti Pembebasan Bersyarat (PB), Cuti Bersyarat (CB), dan Asimilasi. 
                 Hal ini dilakukan demi memastikan penegakan hukum yang humanis, adil, transparan, serta berjalan selaras dengan regulasi yang berlaku.
              </p>
              <p>
                <strong>Alamat:</strong><br />
                Jl. Dr. Wahidin No. 1, Sintang, Kalimantan Barat 78611
              </p>
              <p>
                <strong>Telepon:</strong> (0565) 23622<br />
                <strong>Email:</strong> bapas.sintang@kemenkumham.go.id
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
