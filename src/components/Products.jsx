import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const products = [
  {
    title: 'Prescription Medicines',
    description:
      'Doctor-prescribed medications for chronic conditions, infections, and specialized treatments.',
    gradient: 'from-primary/80 to-primary-dark',
    icon: '💊',
  },
  {
    title: 'OTC Medicines',
    description:
      'Over-the-counter remedies for headaches, colds, allergies, and everyday health concerns.',
    gradient: 'from-accent/80 to-accent-dark',
    icon: '💉',
  },
  {
    title: 'Vitamins',
    description:
      'Essential vitamins and minerals to boost immunity and support overall health.',
    gradient: 'from-amber-500/80 to-orange-600',
    icon: '🌿',
  },
  {
    title: 'Baby Care',
    description:
      'Gentle formulas, diapers, and baby health products from trusted international brands.',
    gradient: 'from-pink-400/80 to-rose-500',
    icon: '👶',
  },
  {
    title: 'Personal Care',
    description:
      'Skincare, haircare, oral hygiene, and personal grooming essentials.',
    gradient: 'from-purple-400/80 to-indigo-500',
    icon: '🧴',
  },
  {
    title: 'Medical Devices',
    description:
      'Blood pressure monitors, thermometers, glucose meters, and other health devices.',
    gradient: 'from-blue-400/80 to-blue-600',
    icon: '🩺',
  },
  {
    title: 'First Aid',
    description:
      'Bandages, antiseptics, wound care kits, and emergency medical supplies.',
    gradient: 'from-red-400/80 to-red-600',
    icon: '🩹',
  },
  {
    title: 'Wellness Products',
    description:
      'Herbal remedies, fitness supplements, and holistic wellness solutions.',
    gradient: 'from-teal-400/80 to-emerald-600',
    icon: '✨',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

function Products() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="products" className="py-20 md:py-28 bg-white" aria-label="Products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Our Product Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Browse our extensive range of healthcare products, carefully selected
            to meet the diverse needs of you and your family.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.article
              key={product.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300"
            >
              {/* Image placeholder with gradient */}
              <div
                className={`relative h-40 bg-gradient-to-br ${product.gradient} flex items-center justify-center overflow-hidden`}
              >
                <span
                  className="text-6xl opacity-90 group-hover:scale-125 transition-transform duration-500"
                  role="img"
                  aria-label={product.title}
                >
                  {product.icon}
                </span>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {product.description}
                </p>
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-dark transition-colors group/btn"
                >
                  Learn More
                  <FaArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Products
