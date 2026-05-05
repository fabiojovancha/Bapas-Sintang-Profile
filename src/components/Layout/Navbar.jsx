import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Shield } from 'lucide-react'

const navItems = [
  { label: 'Beranda',    to: '/' },
  {
    label: 'Tentang Kami',
    children: [
      { label: 'Profil Instansi', to: '/profil' },
      { label: 'Visi & Misi',     to: '/visi-misi' },
      { label: 'Struktur Org.',   to: '/struktur' },
    ],
  },
  { label: 'Layanan',    to: '/layanan' },
  { label: 'Berita',     to: '/berita' },
  { label: 'Galeri',     to: '/galeri' },
  { label: 'Unduhan',    to: '/unduhan' },
  { label: 'Kontak',     to: '/kontak' },
]

export default function Navbar() {
  const [isOpen,     setIsOpen]     = useState(false)
  const [scrolled,   setScrolled]   = useState(false)
  const [dropdown,   setDropdown]   = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Top bar pemerintahan */}
      <div className="bg-primary-900 text-primary-200 text-xs py-1.5 px-4 hidden md:block">
        <div className="container-bapas flex items-center justify-between">
          <span>Kementerian Hukum dan HAM RI — Kantor Wilayah Kalimantan Barat</span>
          <span>Hari Kerja: Senin – Jumat, 08.00 – 16.00 WIB</span>
        </div>
      </div>

      {/* Navbar utama */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-nav'
            : 'bg-primary-800'
        }`}
      >
        <nav className="container-bapas">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                scrolled ? 'bg-primary-600' : 'bg-white/20'
              }`}>
                <Shield className={`w-6 h-6 ${scrolled ? 'text-white' : 'text-white'}`} />
              </div>
              <div>
                <p className={`font-heading font-bold text-sm leading-tight ${scrolled ? 'text-primary-900' : 'text-white'}`}>
                  Bapas Kelas II
                </p>
                <p className={`font-heading font-semibold text-base leading-tight ${scrolled ? 'text-primary-700' : 'text-gold-400'}`}>
                  Sintang
                </p>
              </div>
            </Link>

            {/* Desktop nav */}
            <ul className="hidden lg:flex items-center gap-1">
              {navItems.map((item) =>
                item.children ? (
                  <li key={item.label} className="relative">
                    <button
                      onMouseEnter={() => setDropdown(item.label)}
                      onMouseLeave={() => setDropdown(null)}
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold font-heading transition-all ${
                        scrolled
                          ? 'text-slate-700 hover:text-primary-700 hover:bg-primary-50'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${dropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown */}
                    {dropdown === item.label && (
                      <div
                        onMouseEnter={() => setDropdown(item.label)}
                        onMouseLeave={() => setDropdown(null)}
                        className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50"
                      >
                        {item.children.map((child) => (
                          <NavLink
                            key={child.to}
                            to={child.to}
                            className={({ isActive }) =>
                              `block px-4 py-2.5 text-sm font-heading font-medium transition-colors ${
                                isActive
                                  ? 'text-primary-700 bg-primary-50'
                                  : 'text-slate-700 hover:text-primary-700 hover:bg-slate-50'
                              }`
                            }
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </li>
                ) : (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        `block px-4 py-2 rounded-lg text-sm font-semibold font-heading transition-all ${
                          isActive
                            ? scrolled
                              ? 'text-primary-700 bg-primary-50'
                              : 'text-white bg-white/20'
                            : scrolled
                              ? 'text-slate-700 hover:text-primary-700 hover:bg-primary-50'
                              : 'text-white/90 hover:text-white hover:bg-white/10'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                )
              )}
            </ul>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled
                  ? 'text-slate-700 hover:bg-slate-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
            <div className="container-bapas py-4 space-y-1">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <p className="px-3 py-1.5 text-xs font-heading font-bold text-slate-400 uppercase tracking-wider mt-3">
                      {item.label}
                    </p>
                    {item.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `block px-4 py-2.5 rounded-lg text-sm font-heading font-medium transition-colors ${
                            isActive
                              ? 'text-primary-700 bg-primary-50'
                              : 'text-slate-700 hover:text-primary-700 hover:bg-slate-50'
                          }`
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                ) : (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-2.5 rounded-lg text-sm font-heading font-semibold transition-colors ${
                        isActive
                          ? 'text-primary-700 bg-primary-50'
                          : 'text-slate-700 hover:text-primary-700 hover:bg-slate-50'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )
              )}
            </div>
          </div>
        )}
      </header>
    </>
  )
}
