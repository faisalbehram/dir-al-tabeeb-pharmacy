import { motion } from 'framer-motion'
import {
  FaPrescriptionBottleAlt,
  FaCapsules,
  FaStethoscope,
  FaWheelchair,
  FaBaby,
  FaSpa,
  FaLeaf,
  FaTruck,
} from 'react-icons/fa'

const services = [
  {
    icon: FaPrescriptionBottleAlt,
    title: 'Prescription Medicines',
    description:
      'Full range of prescription medications dispensed with accuracy and care by licensed pharmacists.',
  },
  {
    icon: FaCapsules,
    title: 'Over-the-Counter Medicines',
    description:
      'Wide selection of OTC products for common ailments, pain relief, and everyday health needs.',
  },
  {
    icon: FaStethoscope,
    title: 'Health Consultation',
    description:
      'Professional health consultations and medication counseling from our experienced pharmacy team.',
  },
  {
    icon: FaWheelchair,
    title: 'Medical Equipment',
    description:
      'Quality medical devices and equipment including monitors, supports, and mobility aids.',
  },
  {
    icon: FaBaby,
    title: 'Baby Care Products',
    description:
      'Gentle and safe baby care products from trusted brands for your little ones.',
  },
  {
    icon: FaSpa,
    title: 'Personal Care Products',
    description:
      'Skincare, hygiene, and personal care essentials to keep you looking and feeling your best.',
  },
  {
    icon: FaLeaf,
    title: 'Vitamins & Supplements',
    description:
      'Premium vitamins, minerals, and dietary supplements to support your overall wellness.',
  },
  {
    icon: FaTruck,
    title: 'Home Delivery',
    description:
      'Convenient doorstep delivery service so you can get your medicines without leaving home.',
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function Services() {
  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-gray-light"
      aria-label="Our services"
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
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From prescription medicines to wellness products, we offer a complete
            range of healthcare services tailored to meet your needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(11, 143, 140, 0.15)',
              }}
              className="group bg-white rounded-2xl p-6 shadow-md border border-gray-100 cursor-default transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
