import { motion } from 'motion/react';
import { Icon } from '@iconify/react';

const PORTALS = [
  {
    icon: 'solar:paw-bold-duotone',
    iconColor: '#FB6F92',
    iconBg: '#FFE4EF',
    title: 'Pet Owners',
    subtitle: 'Adopt, care & nurture your pets',
    cardBg: '#FFF0F5',
    badge: { bg: '#FB6F92', text: '#fff' },
    checkColor: '#FB6F92',
    features: ['AI-powered pet matching', 'Vet appointment booking', 'AI diet & nutrition plans', 'Vaccination & medical records', 'Pet products shop'],
    cta: 'Download the App',
    ctaColor: '#FB6F92',
    href: '#mobile-app',
    external: false,
  },
  {
    icon: 'solar:home-2-bold-duotone',
    iconColor: '#7c3aed',
    iconBg: '#EDE9FE',
    title: 'Adoption Centers',
    subtitle: 'Find loving homes for pets',
    cardBg: '#F5F3FF',
    badge: { bg: '#7c3aed', text: '#fff' },
    checkColor: '#7c3aed',
    features: ['List pets for adoption', 'Review & manage applications', 'Track adoption lifecycle', 'Center analytics dashboard'],
    cta: 'Adoption Portal',
    ctaColor: '#7c3aed',
    href: 'https://adopt-center-ui-production.up.railway.app/',
    external: true,
  },
  {
    icon: 'solar:stethoscope-bold-duotone',
    iconColor: '#0284c7',
    iconBg: '#E0F2FE',
    title: 'Veterinarians',
    subtitle: 'Connect with pet owners',
    cardBg: '#F0F9FF',
    badge: { bg: '#0284c7', text: '#fff' },
    checkColor: '#0284c7',
    features: ['Appointment management', 'View pet medical records', 'Set availability & schedule', 'Clinic profile management'],
    cta: 'Vet Portal',
    ctaColor: '#0284c7',
    href: 'https://petvetfrontend-production.up.railway.app/',
    external: true,
  },
  {
    icon: 'solar:shop-bold-duotone',
    iconColor: '#d97706',
    iconBg: '#FEF3C7',
    title: 'Store Owners',
    subtitle: 'Sell premium pet products',
    cardBg: '#FFFBEB',
    badge: { bg: '#d97706', text: '#fff' },
    checkColor: '#d97706',
    features: ['List & manage pet products', 'Order management & tracking', 'Customer reviews & ratings', 'Sales analytics dashboard'],
    cta: 'Store Portal',
    ctaColor: '#d97706',
    href: 'https://petstoresellerfrontend-production.up.railway.app/',
    external: true,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function PortalCards() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-1.5 bg-pink-soft text-pink-dark font-bold text-xs px-4 py-1.5 rounded-full mb-4">
            <Icon icon="solar:star-bold-duotone" width={13} />
            WHO IS PAWCONNECT FOR?
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-charcoal">
            One Platform, <span className="text-gradient-pink">Four Experiences</span>
          </h2>
          <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
            Whether you are a pet lover, care provider, or business — PawConnect has a portal for you.
          </p>
        </motion.div>

        {/* Equal-height grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
        >
          {PORTALS.map((portal) => (
            <motion.div
              key={portal.title}
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
              className="rounded-3xl p-6 flex flex-col shadow-md transition-all duration-300"
              style={{ backgroundColor: portal.cardBg }}
            >
              {/* Icon + badge */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm"
                  style={{ backgroundColor: portal.iconBg }}>
                  <Icon icon={portal.icon} style={{ color: portal.iconColor }} width={32} />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ backgroundColor: portal.badge.bg, color: portal.badge.text }}>
                  Portal
                </span>
              </div>

              <h3 className="text-xl font-black text-charcoal mb-1">{portal.title}</h3>
              <p className="text-sm text-gray-500 mb-5">{portal.subtitle}</p>

              <ul className="space-y-2.5 flex-1 mb-6">
                {portal.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <Icon icon="solar:check-circle-bold-duotone"
                      style={{ color: portal.checkColor }}
                      className="flex-shrink-0 mt-0.5" width={16} />
                    <span className="font-medium">{f}</span>
                  </li>
                ))}
              </ul>

              {portal.external ? (
                <a href={portal.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 font-bold text-sm py-3 px-5 rounded-2xl text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: portal.ctaColor }}>
                  {portal.cta}
                  <Icon icon="solar:arrow-right-bold-duotone" width={16} />
                </a>
              ) : (
                <a href={portal.href}
                  className="flex items-center justify-center gap-2 font-bold text-sm py-3 px-5 rounded-2xl text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: portal.ctaColor }}>
                  {portal.cta}
                  <Icon icon="solar:arrow-right-bold-duotone" width={16} />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
