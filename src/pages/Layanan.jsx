import PageWrapper  from '@/components/UI/PageWrapper'
import PageHeader   from '@/components/UI/PageHeader'
import LayananCard  from '@/components/UI/LayananCard'
import { layananList } from '@/data/layanan'

export default function Layanan() {
  return (
    <PageWrapper title="Layanan">
      <PageHeader
        title="Layanan Kami"
        subtitle="Berbagai layanan bimbingan kemasyarakatan yang tersedia di Bapas Kelas II Sintang"
        breadcrumbs={[{ label: 'Layanan', to: '/layanan' }]}
      />
      <section className="section">
        <div className="container-bapas">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {layananList.map((layanan) => (
              <div key={layanan.id} id={layanan.slug}>
                <LayananCard layanan={layanan} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}