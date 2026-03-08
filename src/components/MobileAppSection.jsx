import { motion } from 'motion/react';
import { Icon } from '@iconify/react';

// These are the 3 actual app screenshots shared by the user.
// Drop them in public/assets/ with these names:
//   app-home.png, app-shop.png, app-profile.png
const PHONE_SLIDES = [
  { src: '/assets/app-shop.png',    rotate: '-10deg', delay: 0.1, zIndex: 1 },
  { src: '/assets/app-home.png',    rotate: '0deg',   delay: 0.2, zIndex: 3 },
  { src: '/assets/app-profile.png', rotate: '10deg',  delay: 0.3, zIndex: 2 },
];

const FEATURES = [
  { icon: 'solar:syringe-bold-duotone',     color: '#f43f5e', text: 'Track Vaccination Records' },
  { icon: 'solar:stethoscope-bold-duotone', color: '#FB6F92', text: 'Book Vet Appointments' },
  { icon: 'solar:paw-bold-duotone',         color: '#a78bfa', text: 'Browse Adoptable Pets' },
  { icon: 'solar:bowl-spoon-bold-duotone',  color: '#22c55e', text: 'AI Personalized Diet Plans' },
  { icon: 'solar:shop-bold-duotone',        color: '#f97316', text: 'Shop Pet Products' },
];

export default function MobileAppSection() {
  return (
    <section id="mobile-app" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Phone mockups ───────────────────────────── */}
          <div className="flex justify-center items-end relative h-[420px] md:h-[500px]">
            {PHONE_SLIDES.map((phone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: phone.delay, type: 'spring', stiffness: 75 }}
                className="absolute"
                style={{
                  transform: `rotate(${phone.rotate})`,
                  zIndex: phone.zIndex,
                  left: `${i * 27}%`,
                  bottom: 0,
                }}
              >
                {/* Phone shell */}
                <div className="w-40 md:w-48 bg-charcoal rounded-[2.2rem] shadow-2xl"
                  style={{ padding: '8px', border: '4px solid #1a1a2e' }}>
                  {/* Notch bar */}
                  <div className="bg-charcoal h-6 flex justify-center items-center rounded-t-[1.8rem]">
                    <div className="w-14 h-3.5 bg-black rounded-full" />
                  </div>
                  {/* Screen */}
                  <div className="rounded-[1.4rem] overflow-hidden">
                    <img
                      src={phone.src}
                      alt="PawConnect mobile app screen"
                      className="w-full object-cover"
                      style={{ height: '320px' }}
                      onError={(e) => {
                        const fallbacks = ['/assets/slide2.jpg', '/assets/slide1.jpg', '/assets/slide3.jpg'];
                        e.target.src = fallbacks[i];
                      }}
                    />
                  </div>
                  {/* Home indicator */}
                  <div className="h-5 flex justify-center items-center">
                    <div className="w-16 h-1 bg-gray-600 rounded-full" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Right content ───────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <img src="/assets/logo.png" alt="PawConnect" className="w-12 h-12 object-contain" />
              <span className="inline-flex items-center gap-1.5 bg-pink-soft text-pink-dark text-xs font-bold px-3 py-1.5 rounded-full">
                <Icon icon="solar:smartphone-bold-duotone" width={13} />
                MOBILE APP
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-charcoal leading-tight">
              Take PawConnect{' '}
              <span className="text-gradient-pink">Everywhere</span>
            </h2>

            <p className="text-gray-500 text-lg leading-relaxed">
              Manage every aspect of your pet's life from the palm of your hand —
              whether you're at the vet, the park, or the pet store.
            </p>

            <ul className="space-y-3">
              {FEATURES.map((f) => (
                <li key={f.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-pink-soft rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon icon={f.icon} style={{ color: f.color }} width={22} />
                  </div>
                  <span className="font-semibold text-gray-700">{f.text}</span>
                </li>
              ))}
            </ul>

            {/* Store buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-3 bg-charcoal text-white px-5 py-3.5 rounded-2xl cursor-pointer hover:bg-gray-800 transition-colors shadow-md">
                <Icon icon="mdi:apple" width={26} className="text-white" />
                <div>
                  <p className="text-xs text-gray-400 leading-none">Download on the</p>
                  <p className="text-sm font-bold leading-tight">App Store</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-charcoal text-white px-5 py-3.5 rounded-2xl cursor-pointer hover:bg-gray-800 transition-colors shadow-md">
                <Icon icon="mdi:google-play" width={26} className="text-white" />
                <div>
                  <p className="text-xs text-gray-400 leading-none">Get it on</p>
                  <p className="text-sm font-bold leading-tight">Google Play</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
