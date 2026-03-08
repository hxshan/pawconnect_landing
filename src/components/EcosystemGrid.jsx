import { motion } from 'motion/react';
import { Icon } from '@iconify/react';

const FEATURES = [
  { icon: 'solar:paw-bold-duotone',               color: '#FB6F92', bg: '#FFE4EF', label: 'Pet Adoption' },
  { icon: 'solar:cpu-bold-duotone',               color: '#7c3aed', bg: '#EDE9FE', label: 'AI Pet Matching' },
  { icon: 'solar:stethoscope-bold-duotone',       color: '#0284c7', bg: '#E0F2FE', label: 'Vet Appointments' },
  { icon: 'solar:document-medicine-bold-duotone', color: '#0891b2', bg: '#CFFAFE', label: 'Medical Records' },
  { icon: 'solar:bowl-spoon-bold-duotone',        color: '#16a34a', bg: '#DCFCE7', label: 'Diet & Nutrition AI' },
  { icon: 'solar:shop-bold-duotone',              color: '#d97706', bg: '#FEF3C7', label: 'Pet Shop' },
  { icon: 'solar:bell-bold-duotone',              color: '#db2777', bg: '#FCE7F3', label: 'Smart Notifications' },
  { icon: 'solar:chart-bold-duotone',             color: '#7c3aed', bg: '#F3E8FF', label: 'Analytics' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const pillVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: 'easeOut' } },
};

export default function EcosystemGrid() {
  return (
    <section className="py-20 bg-pink-soft">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-1.5 bg-white text-pink-dark font-bold text-xs px-4 py-1.5 rounded-full mb-4 shadow-sm">
            <Icon icon="solar:infinity-bold-duotone" width={13} />
            UNIFIED ECOSYSTEM
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-4">
            Everything Your Pet Needs,{' '}
            <span className="text-gradient-pink">All in One Place</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-12">
            The Unified Pet Care Ecosystem — from adoption to end-of-life care.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-wrap justify-center gap-4"
        >
          {FEATURES.map((f) => (
            <motion.div
              key={f.label}
              variants={pillVariants}
              whileHover={{ scale: 1.07, y: -4 }}
              className="flex items-center gap-3 rounded-2xl px-6 py-4 shadow-md hover:shadow-lg transition-all duration-200 cursor-default"
              style={{ backgroundColor: f.bg }}
            >
              <Icon icon={f.icon} style={{ color: f.color }} width={26} />
              <span className="font-bold text-sm text-charcoal">{f.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
