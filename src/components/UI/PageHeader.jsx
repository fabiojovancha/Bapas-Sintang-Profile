import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

/**
 * Header hero untuk halaman dalam (bukan Home).
 *
 * Props:
 *  - title: string
 *  - subtitle: string (opsional)
 *  - breadcrumbs: [{ label, to }] (opsional)
 */
export default function PageHeader({ title, subtitle, breadcrumbs = [] }) {
  return (
    <section className="page-header relative overflow-hidden">
      {/* Dekorasi latar */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border-2 border-white" />
        <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full border border-white" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full border border-white" />
      </div>

      <div className="container-bapas relative z-10">
        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <nav className="breadcrumb mb-4">
            <Link to="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
              Beranda
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5" />
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-white font-medium">{crumb.label}</span>
                ) : (
                  <Link to={crumb.to} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        )}

        <h1 className="text-3xl lg:text-4xl font-bold font-heading text-white mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="text-primary-200 text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Garis emas dekoratif */}
        <div className="w-16 h-1 bg-gold-400 rounded-full mt-6" />
      </div>
    </section>
  )
}
