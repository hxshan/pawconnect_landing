import { motion } from 'motion/react';
import { Icon } from '@iconify/react';

const PawBg = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[
      { top: '8%',  left: '4%',  size: 120, rotate: 12,  opacity: 0.06 },
      { top: '28%', right: '6%', size: 180, rotate: -20, opacity: 0.05 },
      { top: '60%', left: '12%', size: 150, rotate: 45,  opacity: 0.05 },
      { top: '50%', right: '18%',size: 90,  rotate: -10, opacity: 0.06 },
      { top: '14%', left: '42%', size: 70,  rotate: 30,  opacity: 0.05 },
    ].map((p, i) => (
      <svg
        key={i}
        viewBox="0 0 100 100"
        fill="#FB6F92"
        style={{
          position: 'absolute',
          top: p.top, left: p.left, right: p.right,
          width: p.size, height: p.size,
          transform: `rotate(${p.rotate}deg)`,
          opacity: p.opacity,
        }}
      >
        <ellipse cx="30" cy="22" rx="10" ry="13" />
        <ellipse cx="14" cy="42" rx="8" ry="10" />
        <ellipse cx="46" cy="42" rx="8" ry="10" />
        <ellipse cx="30" cy="63" rx="16" ry="20" />
      </svg>
    ))}
  </div>
);

const TAGS = [
  { icon: 'solar:paw-bold-duotone',         label: 'Pet Adoption' },
  { icon: 'solar:stethoscope-bold-duotone', label: 'Vet Care' },
  { icon: 'solar:bowl-spoon-bold-duotone',  label: 'AI Nutrition' },
  { icon: 'solar:shop-bold-duotone',        label: 'Pet Shop' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #FFF0F5 0%, #FFE4EF 60%, #FFBEDA 100%)' }}
    >
      <PawBg />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Left column ─────────────────────────────── */}
          <div className="space-y-6">

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap gap-2"
            >
              {TAGS.map((t) => (
                <span key={t.label}
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold border border-pink-dark text-pink-dark bg-white/70 backdrop-blur-sm">
                  <Icon icon={t.icon} width={13} />
                  {t.label}
                </span>
              ))}
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-charcoal"
            >
              Where Every Pet<br />
              Finds Their{' '}
              <span className="text-gradient-pink">Forever Home</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-lg text-gray-600 leading-relaxed max-w-lg"
            >
              PawConnect is the unified pet care ecosystem — connecting pet owners, adoption
              centers, veterinarians, and stores in one loving platform.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap gap-3"
            >
              <a href="#portal-access"
                className="inline-flex items-center gap-2 bg-pink-dark text-white font-bold px-7 py-3.5 rounded-full shadow-lg hover:bg-pink-deep hover:shadow-xl transition-all duration-200">
                <Icon icon="solar:rocket-bold-duotone" width={18} />
                Explore Platform
              </a>
              <a href="https://adopt-center-ui-production.up.railway.app/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-pink-dark text-pink-dark font-bold px-7 py-3.5 rounded-full hover:bg-pink-soft transition-all duration-200 bg-white/50">
                <Icon icon="solar:paw-bold-duotone" width={18} />
                Browse Adoptable Pets
              </a>
            </motion.div>

            {/* Mini stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="inline-flex items-center gap-6 glass-card rounded-2xl px-6 py-4 shadow-lg border border-white/60"
            >
              {[
                { icon: 'solar:paw-bold-duotone',         num: '500+', label: 'Pets Adopted' },
                { icon: 'solar:stethoscope-bold-duotone', num: '200+', label: 'Vets' },
                { icon: 'solar:home-smile-angle-bold-duotone', num: '50+', label: 'Centers' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-0.5">
                    <Icon icon={s.icon} className="text-pink-dark" width={14} />
                    <p className="text-xl font-black text-pink-dark">{s.num}</p>
                  </div>
                  <p className="text-xs text-gray-500 font-semibold">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right column ─────────────────────────────── */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, type: 'spring', stiffness: 100 }}
              className="relative"
            >
              {/* Main image */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl w-full max-w-md lg:max-w-lg border-4 border-white">
                <img src="/assets/slide1.jpg" alt="Happy pets" className="w-full h-auto object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-pink-main/40 to-transparent" />
              </div>

              {/* Starburst badge */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-5 -left-5 w-20 h-20 flex items-center justify-center"
              >
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-yellow-400" fill="currentColor">
                  <polygon points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35" />
                </svg>
                <div className="relative z-10 text-center">
                  <Icon icon="solar:cpu-bolt-bold-duotone" className="text-yellow-900 mx-auto" width={18} />
                  <span className="text-[9px] font-black text-yellow-900 leading-tight block">AI</span>
                </div>
              </motion.div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -right-4 glass-card rounded-2xl p-4 shadow-xl border border-white/80 flex items-center gap-3 max-w-[210px]"
              >
                <div className="w-10 h-10 bg-pink-soft rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon icon="solar:heart-bold-duotone" className="text-pink-dark" width={22} />
                </div>
                <div>
                  <p className="text-xs font-bold text-charcoal">Find your perfect</p>
                  <p className="text-xs font-black text-pink-dark">companion today 🐾</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none">
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
