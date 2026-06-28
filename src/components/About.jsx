import { motion } from 'framer-motion'
import {
  FaPills,
  FaUserMd,
  FaTags,
  FaHeadset,
} from 'react-icons/fa'
import { HiCheckCircle } from 'react-icons/hi'

const features = [
  {
    icon: FaPills,
    title: 'Genuine Medicines',
    description:
      'We source only authentic, certified medicines from trusted manufacturers and distributors.',
  },
  {
    icon: FaUserMd,
    title: 'Professional Pharmacists',
    description:
      'Our licensed pharmacists provide expert guidance and personalized healthcare advice.',
  },
  {
    icon: FaTags,
    title: 'Affordable Prices',
    description:
      'Competitive pricing on all products without compromising on quality or safety.',
  },
  {
    icon: FaHeadset,
    title: 'Fast Customer Service',
    description:
      'Quick responses, efficient service, and a team dedicated to your satisfaction.',
  },
]

const whyChooseUs = [
  'UAE licensed and regulated pharmacy',
  'Located in Warsan First, Morocco Cluster, Dubai',
  'Wide range of prescription and OTC medicines',
  'Convenient home delivery across Dubai',
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white" aria-label="About us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Caring for Your Health, Every Day
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Dir Al Tabeeb Pharmacy is a trusted healthcare destination in Dubai, UAE,
            dedicated to improving the well-being of our community through quality
            medicines, expert advice, and compassionate service.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/10"
          >
            <h3 className="text-xl font-bold text-primary mb-3">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide accessible, affordable, and high-quality pharmaceutical
              care to every member of our community, ensuring that health and
              wellness are within everyone&apos;s reach.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-8 border border-accent/10"
          >
            <h3 className="text-xl font-bold text-accent-dark mb-3">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the most trusted and preferred pharmacy in our region, recognized
              for excellence in healthcare services, innovation, and unwavering
              commitment to patient well-being.
            </p>
          </motion.div>
        </div>

        {/* Feature cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-100 transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Why choose us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-light rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Choose Us?
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {whyChooseUs.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <HiCheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <span className="text-gray-600">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
