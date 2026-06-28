import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import BrandLogo from './BrandLogo'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'products', label: 'Products' },
  { id: 'contact', label: 'Contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  // Track scroll position for sticky navbar styling and active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navLinks.map((link) => ({
        id: link.id,
        el: document.getElementById(link.id),
      }))

      const scrollPos = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.el && section.el.offsetTop <= scrollPos) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-lg shadow-primary/5'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo & brand */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 group"
            aria-label="Dir Al Tabeeb Pharmacy - Go to home"
          >
            <BrandLogo showUaeBadge logoClassName="w-10 h-10 md:w-12 md:h-12" />
            <div className="text-left">
              <span
                className={`block font-bold text-sm md:text-base leading-tight transition-colors ${
                  scrolled ? 'text-primary' : 'text-white'
                }`}
              >
                Dir Al Tabeeb
              </span>
              <span
                className={`block text-xs transition-colors ${
                  scrolled ? 'text-gray-500' : 'text-white/80'
                }`}
              >
                Pharmacy · Dubai, UAE
              </span>
            </div>
          </button>

          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeSection === link.id
                      ? scrolled
                        ? 'text-primary'
                        : 'text-white'
                      : scrolled
                        ? 'text-gray-600 hover:text-primary'
                        : 'text-white/80 hover:text-white'
                  }`}
                  aria-current={activeSection === link.id ? 'page' : undefined}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="activeNav"
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full ${
                        scrolled ? 'bg-primary' : 'bg-white'
                      }`}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? 'text-primary hover:bg-primary/10'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 shadow-lg overflow-hidden"
          >
            <ul className="px-4 py-4 space-y-1" role="list">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === link.id
                        ? 'bg-primary/10 text-primary'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
