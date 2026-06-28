import { motion } from 'framer-motion'
import { FaArrowRight, FaPhone } from 'react-icons/fa'
import { HiShieldCheck, HiHeart, HiSparkles } from 'react-icons/hi'
import BrandLogo from './BrandLogo'
import { PHARMACY_CONTACT } from '../data/contact'

function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-[#065a58]"
      aria-label="Hero section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full" />

        {/* Floating medical icons */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-32 right-[15%] text-white/10"
        >
          <HiShieldCheck className="w-24 h-24" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-32 left-[10%] text-white/10"
        >
          <HiHeart className="w-20 h-20" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 right-[8%] text-white/10"
        >
          <HiSparkles className="w-16 h-16" />
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                UAE Licensed Pharmacy · Dubai
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Your Trusted{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-accent">
                Healthcare Partner
              </span>
            </h1>

            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
              At Dir Al Tabeeb Pharmacy in {PHARMACY_CONTACT.location}, we are
              committed to providing quality medicines and healthcare products with
              professional care. Your health and well-being are our highest priority.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-accent/30 transition-colors"
              >
                <FaPhone className="w-4 h-4" />
                Contact Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('products')}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
              >
                Explore Products
                <FaArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>

          {/* Hero illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Glassmorphism card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
                <motion.div
                  className="flex flex-col items-center"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <BrandLogo
                    variant="uae"
                    logoClassName="w-40 h-40 md:w-52 md:h-52"
                  />
                </motion.div>
                <div className="text-center mt-6">
                  <h2 className="text-2xl font-bold text-white">Dir Al Tabeeb</h2>
                  <p className="text-white/70 text-sm mt-1">Pharmacy · Dubai, UAE</p>
                  <p className="text-accent text-xs font-semibold mt-2 uppercase tracking-wider">
                    UAE Licensed Pharmacy
                  </p>
                </div>
              </div>

              {/* Floating stat cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-4 -left-4 md:-left-8 bg-white rounded-2xl p-4 shadow-xl"
              >
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-xs text-gray-500">Genuine Products</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-4 -right-4 md:-right-8 bg-white rounded-2xl p-4 shadow-xl"
              >
                <p className="text-2xl font-bold text-accent">24/7</p>
                <p className="text-xs text-gray-500">Customer Support</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path
            d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero
