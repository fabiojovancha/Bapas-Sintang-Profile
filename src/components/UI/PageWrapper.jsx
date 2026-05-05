import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.2 } },
}

/**
 * Wrapper untuk setiap halaman.
 * Menyediakan: animasi masuk/keluar, meta title, dan struktur dasar.
 *
 * Props:
 *  - title: string  (untuk <title> di tab browser)
 *  - children: ReactNode
 */
export default function PageWrapper({ title, children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Helmet>
        <title>{title ? `${title} — Bapas Kelas II Sintang` : 'Bapas Kelas II Sintang'}</title>
      </Helmet>
      {children}
    </motion.div>
  )
}
