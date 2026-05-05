import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Layout
import RootLayout from '@/components/Layout/RootLayout'

// Pages
import Home          from '@/pages/Home'
import Profil        from '@/pages/Profil'
import VisiMisi      from '@/pages/VisiMisi'
import StrukturOrg   from '@/pages/StrukturOrg'
import Layanan       from '@/pages/Layanan'
import Berita        from '@/pages/Berita'
import BeritaDetail  from '@/pages/BeritaDetail'
import Galeri        from '@/pages/Galeri'
import Unduhan       from '@/pages/Unduhan'
import Kontak        from '@/pages/Kontak'
import NotFound      from '@/pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index                element={<Home />} />
            <Route path="profil"        element={<Profil />} />
            <Route path="visi-misi"     element={<VisiMisi />} />
            <Route path="struktur"      element={<StrukturOrg />} />
            <Route path="layanan"       element={<Layanan />} />
            <Route path="berita"        element={<Berita />} />
            <Route path="berita/:slug"  element={<BeritaDetail />} />
            <Route path="galeri"        element={<Galeri />} />
            <Route path="unduhan"       element={<Unduhan />} />
            <Route path="kontak"        element={<Kontak />} />
            <Route path="*"             element={<NotFound />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  )
}
