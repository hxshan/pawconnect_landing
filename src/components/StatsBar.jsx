import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Icon } from '@iconify/react';

function CountUp({ target, suffix = '+', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(target);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const STATS = [
  { icon: 'solar:users-group-two-rounded-bold-duotone', color: '#FB6F92', bg: '#FFF0F5', value: 1000, suffix: '+', label: 'Pet Owners'          },
  { icon: 'solar:home-2-bold-duotone',                  color: '#a78bfa', bg: '#F5F3FF', value: 500,  suffix: '+', label: 'Adoptions Completed' },
  { icon: 'solar:stethoscope-bold-duotone',             color: '#f43f5e', bg: '#FFF1F2', value: 200,  suffix: '+', label: 'Registered Vets'     },
  { icon: 'solar:shop-bold-duotone',                    color: '#f97316', bg: '#FFF7ED', value: 50,   suffix: '+', label: 'Pet Stores'          },
];

export default function StatsBar() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
              style={{ backgroundColor: stat.bg }}
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-3 shadow-sm">
                <Icon icon={stat.icon} style={{ color: stat.color }} width={28} />
              </div>
              <p className="text-4xl font-black" style={{ color: stat.color }}>
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm font-semibold text-gray-500 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
