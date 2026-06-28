import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa'
import { HiPaperAirplane } from 'react-icons/hi'
import { PHARMACY_CONTACT } from '../data/contact'

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    title: 'Address',
    content: PHARMACY_CONTACT.address,
  },
  {
    icon: FaPhone,
    title: 'Phone',
    content: PHARMACY_CONTACT.phone,
    href: `tel:${PHARMACY_CONTACT.phoneTel}`,
  },
  {
    icon: FaEnvelope,
    title: 'Email',
    content: PHARMACY_CONTACT.email,
    href: `mailto:${PHARMACY_CONTACT.email}`,
  },
  {
    icon: FaClock,
    title: 'Working Hours',
    content: `${PHARMACY_CONTACT.workingHours.weekdays}\n${PHARMACY_CONTACT.workingHours.sunday}`,
  },
]

const socialLinks = [
  { icon: FaFacebookF, label: 'Facebook', href: '#' },
  { icon: FaTwitter, label: 'Twitter', href: '#' },
  { icon: FaInstagram, label: 'Instagram', href: '#' },
  { icon: FaWhatsapp, label: 'WhatsApp', href: `https://wa.me/${PHARMACY_CONTACT.phoneTel.replace('+', '')}` },
]

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Demo submission — integrate with backend or email service in production
    setSubmitted(true)
    setFormData({ fullName: '', email: '', phone: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-gray-light"
      aria-label="Contact us"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have a question or need assistance? We&apos;re here to help. Reach out
            to us and our team will respond promptly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              aria-label="Contact form"
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="055 414 5505"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-primary/20 transition-colors"
                >
                  <HiPaperAirplane className="w-5 h-5" />
                  Send Message
                </motion.button>

                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-accent text-sm text-center font-medium"
                    role="status"
                  >
                    Thank you! Your message has been sent successfully.
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>

          {/* Contact info & map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Info cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 flex gap-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">
                      {info.title}
                    </h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-500 text-sm hover:text-primary transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-500 text-sm whitespace-pre-line">
                        {info.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
              <iframe
                title="Dir Al Tabeeb Pharmacy location on Google Maps"
                src={PHARMACY_CONTACT.mapsEmbedUrl}
                className="w-full h-64 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            {/* Social media */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-11 h-11 bg-primary/10 hover:bg-primary rounded-xl flex items-center justify-center text-primary hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
