import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Icon } from '@iconify/react';

function SlideSection({ reverse, children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: reverse ? 80 : -80 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

const MATCH_FACTORS = [
  { icon: 'solar:home-2-bold-duotone',                     label: 'Living Compatibility' },
  { icon: 'solar:users-group-two-rounded-bold-duotone',    label: 'Family Suitability' },
  { icon: 'solar:running-bold-duotone',                    label: 'Lifestyle Match' },
  { icon: 'solar:star-bold-duotone',                       label: 'Experience Level' },
  { icon: 'solar:heart-bold-duotone',                      label: 'Preferences' },
  { icon: 'solar:wallet-bold-duotone',                     label: 'Budget & Location' },
];

const NUTRITION_PILLS = ['Species-Specific','Weight-Based','Health Conditions','Auto-Updated','Meal Planning','Calorie Tracking'];

export default function FeatureHighlights() {
  return (
    <section className="py-20 overflow-hidden space-y-8">

      {/* AI Pet Matching */}
      <SlideSection reverse={false}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">

            {/* Left – pink */}
            <div className="bg-pink-dark p-10 md:p-14 flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-6 w-fit">
                <Icon icon="solar:cpu-bold-duotone" width={14} />
                AI FEATURE
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
                Find Your Perfect<br />Pet Match
              </h2>
              <p className="text-white/80 text-base mb-8 leading-relaxed">
                Our intelligent matching engine scores pets across 6 weighted factors to connect
                you with the companion that truly fits your lifestyle.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {MATCH_FACTORS.map((f) => (
                  <div key={f.label} className="flex items-center gap-2 bg-white/15 rounded-xl px-3 py-2.5">
                    <Icon icon={f.icon} className="text-white/90 flex-shrink-0" width={16} />
                    <span className="text-white/90 text-xs font-semibold">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right – match card */}
            <div className="bg-white p-10 md:p-14 flex flex-col justify-center items-center">
              <div className="w-full max-w-xs">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <div className="relative">
                    <img src="/assets/slide2.jpg" alt="Pet match" className="w-full h-56 object-cover object-top" />
                    <button className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md">
                      <Icon icon="solar:heart-bold-duotone" className="text-pink-dark" width={18} />
                    </button>
                    <div className="absolute top-3 left-3 bg-pink-dark text-white text-xs font-black px-3 py-1.5 rounded-full shadow flex items-center gap-1">
                      <Icon icon="solar:star-bold-duotone" width={12} />
                      94% Match
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-black text-charcoal text-lg">Biscuit</h3>
                      <span className="text-gray-400 text-sm">2.5 y.o</span>
                    </div>
                    <p className="text-gray-500 text-xs mb-3">Pug · Male · Playful & Loving</p>
                    <div className="flex gap-2 mb-4">
                      <span className="bg-green-50 text-green-600 text-xs font-bold px-2 py-1 rounded-lg">Good with kids</span>
                      <span className="bg-violet-50 text-violet-600 text-xs font-bold px-2 py-1 rounded-lg">House trained</span>
                    </div>
                    <a href="https://adopt-center-ui-production.up.railway.app/" target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-pink-dark text-white font-bold py-2.5 rounded-xl text-sm hover:bg-pink-deep transition-colors">
                      Apply to Adopt
                      <Icon icon="solar:arrow-right-bold-duotone" width={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SlideSection>

      {/* AI Diet & Nutrition */}
      <SlideSection reverse={true}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">

            {/* Left – nutrition mockup */}
            <div className="bg-white p-10 md:p-14 flex flex-col justify-center items-center order-2 lg:order-1">
              <div className="w-full max-w-xs bg-emerald-50 rounded-2xl p-5 shadow-lg">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                    <Icon icon="solar:bowl-spoon-bold-duotone" className="text-white" width={22} />
                  </div>
                  <div>
                    <p className="font-black text-charcoal text-sm">Daily Nutrition Plan</p>
                    <p className="text-xs text-gray-400">Max · Golden Retriever · 3 yrs</p>
                  </div>
                </div>
                <div className="space-y-2.5">
                  {[
                    { label: 'Daily Calories', value: '1,450 kcal', dot: 'bg-pink-dark',  bar: 'w-4/5' },
                    { label: 'Protein',        value: '28%',        dot: 'bg-violet-400', bar: 'w-3/5' },
                    { label: 'Fat',            value: '15%',        dot: 'bg-amber-400',  bar: 'w-2/5' },
                    { label: 'Carbohydrates',  value: '40%',        dot: 'bg-sky-400',    bar: 'w-3/4' },
                  ].map((item) => (
                    <div key={item.label} className="bg-white rounded-xl p-3 shadow-sm">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className={`w-2.5 h-2.5 rounded-full ${item.dot}`} />
                          <span className="text-xs font-semibold text-gray-600">{item.label}</span>
                        </div>
                        <span className="text-xs font-black text-charcoal">{item.value}</span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className={`h-full ${item.dot} rounded-full ${item.bar}`} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-emerald-100 rounded-xl p-3 flex items-center gap-2">
                  <Icon icon="solar:sun-bold-duotone" className="text-emerald-600 flex-shrink-0" width={24} />
                  <div>
                    <p className="text-xs font-bold text-emerald-700">Meal 1 · Morning</p>
                    <p className="text-xs text-gray-500">Chicken & Rice — 480 kcal</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right – emerald */}
            <div className="bg-emerald-50 p-10 md:p-14 flex flex-col justify-center order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full mb-6 w-fit">
                <Icon icon="solar:bowl-spoon-bold-duotone" width={14} />
                AI NUTRITION
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-charcoal leading-tight mb-4">
                Personalized Nutrition<br />Plans for Every Pet
              </h2>
              <p className="text-gray-600 text-base mb-8 leading-relaxed">
                Our AI analyzes your pet's species, breed, age, weight, activity level, and health
                conditions to generate tailored daily nutritional requirements and meal plans —
                updated as your pet grows.
              </p>
              <div className="flex flex-wrap gap-2">
                {NUTRITION_PILLS.map((pill) => (
                  <span key={pill} className="bg-white text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SlideSection>
    </section>
  );
}
