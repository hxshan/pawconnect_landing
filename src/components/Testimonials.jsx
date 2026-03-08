import { motion } from 'motion/react';
import { Icon } from '@iconify/react';

const TESTIMONIALS = [
  {
    name: 'Amara S.',
    role: 'Pet Owner',
    initials: 'AS',
    avatarBg: '#FB6F92',
    cardBg: '#FFF0F5',
    stars: 5,
    quote: 'I found my rescue dog Luna through PawConnect\'s AI matching in under 10 minutes. The match score was spot on — she\'s perfectly suited to my apartment lifestyle. Couldn\'t be happier!',
  },
  {
    name: 'Dr. James K.',
    role: 'Veterinarian',
    initials: 'JK',
    avatarBg: '#0284c7',
    cardBg: '#F0F9FF',
    stars: 5,
    quote: 'The vet portal transformed how I manage my practice. Appointment scheduling, pet records, and owner communication — all seamlessly integrated. My clients love the experience.',
  },
  {
    name: 'Sasha R.',
    role: 'Adoption Center Manager',
    initials: 'SR',
    avatarBg: '#7c3aed',
    cardBg: '#F5F3FF',
    stars: 5,
    quote: 'Since joining PawConnect, our adoption rate increased by 40%. The application tools and AI matching ensure pets find the right homes much faster. This platform is a game changer.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-1.5 bg-pink-soft text-pink-dark font-bold text-xs px-4 py-1.5 rounded-full mb-4">
            <Icon icon="solar:heart-bold-duotone" width={13} />
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-charcoal">
            Loved by Pet Lovers{' '}
            <span className="text-gradient-pink">Everywhere</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {TESTIMONIALS.map((t, i) => {
            const xDir = i === 0 ? -60 : i === 2 ? 60 : 0;
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, x: xDir, y: xDir === 0 ? 30 : 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl p-7 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
                style={{ backgroundColor: t.cardBg }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Icon key={s} icon="solar:star-bold-duotone" className="text-amber-400" width={18} />
                  ))}
                </div>

                {/* Quote */}
                <div className="mb-6 flex-1">
                  <Icon icon="lucide:quote" className="text-pink-dark/30 mb-2" width={28} />
                  <p className="text-gray-600 text-sm leading-relaxed italic">{t.quote}</p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ backgroundColor: t.avatarBg }}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-black text-charcoal text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400 font-semibold">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
