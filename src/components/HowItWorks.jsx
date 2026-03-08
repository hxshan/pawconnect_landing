import { motion } from 'motion/react';
import { Icon } from '@iconify/react';

const STEPS = [
  {
    number: '01',
    icon: 'solar:clipboard-list-bold-duotone',
    iconColor: '#FB6F92',
    cardBg: '#FFF0F5',
    iconBg: '#FFE4EF',
    title: 'Create Your Profile',
    description: 'Tell us about your lifestyle, living situation, family, and pet preferences through our simple questionnaire.',
  },
  {
    number: '02',
    icon: 'solar:cpu-bold-duotone',
    iconColor: '#7c3aed',
    cardBg: '#F5F3FF',
    iconBg: '#EDE9FE',
    title: 'Get AI-Matched',
    description: 'Our algorithm scores hundreds of available pets against your lifestyle across 6 key compatibility factors.',
  },
  {
    number: '03',
    icon: 'solar:home-2-bold-duotone',
    iconColor: '#16a34a',
    cardBg: '#F0FDF4',
    iconBg: '#DCFCE7',
    title: 'Meet & Adopt',
    description: 'Connect directly with the adoption center, submit your application, and welcome your new companion home.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 bg-pink-soft text-pink-dark font-bold text-xs px-4 py-1.5 rounded-full mb-4">
            <Icon icon="solar:map-arrow-right-bold-duotone" width={13} />
            HOW IT WORKS
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-charcoal">
            Adopt in 3 Simple <span className="text-gradient-pink">Steps</span>
          </h2>
        </motion.div>

        {/* Steps — equal height via items-stretch */}
        <div className="relative">
          {/* Dashed connector line */}
          <div className="hidden lg:block absolute top-[52px] left-[22%] right-[22%] h-0.5 border-t-2 border-dashed border-pink-main/40 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.18 }}
                className="flex flex-col items-center text-center"
              >
                {/* Number bubble */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-pink-dark text-white flex items-center justify-center font-black text-lg shadow-lg mb-5">
                  {step.number}
                  <div className="absolute inset-0 rounded-full bg-pink-dark/20 scale-[1.4] -z-10" />
                </div>

                {/* Card — same height across row */}
                <div
                  className="rounded-3xl p-7 shadow-md w-full flex-1 flex flex-col items-center"
                  style={{ backgroundColor: step.cardBg }}
                >
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-sm"
                    style={{ backgroundColor: step.iconBg }}>
                    <Icon icon={step.icon} style={{ color: step.iconColor }} width={36} />
                  </div>
                  <h3 className="text-xl font-black text-charcoal mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-14"
        >
          <a href="https://adopt-center-ui-production.up.railway.app/"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-pink-dark text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-pink-deep hover:shadow-xl transition-all duration-200">
            Start Your Adoption Journey
            <Icon icon="solar:arrow-right-bold-duotone" width={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
