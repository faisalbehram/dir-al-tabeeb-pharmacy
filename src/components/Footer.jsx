import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa'
import BrandLogo from './BrandLogo'
import { PHARMACY_CONTACT } from '../data/contact'

const quickLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Products', id: 'products' },
  { label: 'Contact', id: 'contact' },
]

const socialLinks = [
  { icon: FaFacebookF, label: 'Facebook', href: '#' },
  { icon: FaTwitter, label: 'Twitter', href: '#' },
  { icon: FaInstagram, label: 'Instagram', href: '#' },
  { icon: FaWhatsapp, label: 'WhatsApp', href: `https://wa.me/${PHARMACY_CONTACT.phoneTel.replace('+', '')}` },
]

function Footer() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-[#065a58] via-primary-dark to-primary text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <BrandLogo showUaeBadge logoClassName="w-12 h-12" />
              <div>
                <span className="block font-bold text-lg leading-tight">
                  Dir Al Tabeeb
                </span>
                <span className="block text-sm text-white/70">Pharmacy · Dubai, UAE</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Your trusted healthcare partner in Dubai, providing quality medicines
              and professional pharmaceutical care for you and your family.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2.5" role="list">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3" role="list">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <FaMapMarkerAlt className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <span>{PHARMACY_CONTACT.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${PHARMACY_CONTACT.phoneTel}`}
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <FaPhone className="w-4 h-4 shrink-0 text-accent" />
                  {PHARMACY_CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PHARMACY_CONTACT.email}`}
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <FaEnvelope className="w-4 h-4 shrink-0 text-accent" />
                  {PHARMACY_CONTACT.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Working hours */}
          <div>
            <h3 className="font-bold text-lg mb-4">Working Hours</h3>
            <ul className="space-y-2 text-sm text-white/70" role="list">
              <li className="flex justify-between">
                <span>Monday – Saturday</span>
                <span className="text-white">8 AM – 12 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white">9 AM – 12 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/50 text-sm">
            &copy; {currentYear} Dir Al Tabeeb Pharmacy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
