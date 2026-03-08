import { motion } from 'motion/react';
import { Icon } from '@iconify/react';

const PORTALS = [
  {
    icon: 'solar:stethoscope-bold-duotone',
    title: 'Vet Portal',
    description: 'Manage appointments, access pet records, and grow your veterinary practice.',
    accent: '#FB6F92',
    cardBg: 'rgba(251,111,146,0.12)',
    url: 'https://petvetfrontend-production.up.railway.app/',
  },
  {
    icon: 'solar:home-2-bold-duotone',
    title: 'Adoption Center',
    description: 'List pets, review applications, and connect animals with loving families.',
    accent: '#a78bfa',
    cardBg: 'rgba(167,139,250,0.12)',
    url: 'https://adopt-center-ui-production.up.railway.app/',
  },
  {
    icon: 'solar:shop-bold-duotone',
    title: 'Pet Store',
    description: 'List your products, manage orders, and reach thousands of pet owners.',
    accent: '#fb923c',
    cardBg: 'rgba(251,146,60,0.12)',
    url: 'https://petstoresellerfrontend-production.up.railway.app/',
  },
  {
    icon: 'solar:settings-bold-duotone',
    title: 'Admin Portal',
    description: 'Platform-wide management, analytics, and system administration.',
    accent: '#34d399',
    cardBg: 'rgba(52,211,153,0.12)',
    url: 'https://petadminportal-production.up.railway.app/',
  },
];

export default function PortalAccess() {
  return (
    <section id="portal-access" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 font-bold text-xs px-4 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: 'rgba(251,111,146,0.15)', color: '#FFBEDA' }}>
            <Icon icon="solar:rocket-bold-duotone" width={13} />
            ACCESS PORTALS
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Ready to Get <span className="text-gradient-pink">Started?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose your role and access your dedicated portal to start your PawConnect journey.
          </p>
        </motion.div>

        {/* Equal-height cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {PORTALS.map((portal, i) => (
            <motion.div
              key={portal.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03, y: -6 }}
              className="rounded-3xl p-7 flex flex-col transition-all duration-300"
              style={{
                backgroundColor: portal.cardBg,
                borderTop: `3px solid ${portal.accent}`,
              }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-sm"
                style={{ backgroundColor: portal.accent + '33' }}>
                <Icon icon={portal.icon} style={{ color: portal.accent }} width={32} />
              </div>
              <h3 className="text-xl font-black text-white mb-2">{portal.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-6">{portal.description}</p>
              <a
                href={portal.url} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 font-bold text-sm py-3 px-5 rounded-2xl text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: portal.accent }}
              >
                Access Portal
                <Icon icon="solar:arrow-right-bold-duotone" width={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
