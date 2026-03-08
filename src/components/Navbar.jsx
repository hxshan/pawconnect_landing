import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Icon } from '@iconify/react';

const PORTALS = [
  { label: 'Adoption Center', icon: 'solar:home-2-bold-duotone',         color: '#a78bfa', url: 'https://adopt-center-ui-production.up.railway.app/' },
  { label: 'Vet Portal',      icon: 'solar:stethoscope-bold-duotone',    color: '#FB6F92', url: 'https://petvetfrontend-production.up.railway.app/' },
  { label: 'Pet Store',       icon: 'solar:shop-bold-duotone',           color: '#f97316', url: 'https://petstoresellerfrontend-production.up.railway.app/' },
  { label: 'Admin Portal',    icon: 'solar:settings-bold-duotone',       color: '#34d399', url: 'https://petadminportal-production.up.railway.app/' },
];

const NAV_LINKS = [
  { label: 'Home',          href: '#home' },
  { label: 'Features',      href: '#features' },
  { label: 'How It Works',  href: '#how-it-works' },
  { label: 'Mobile App',    href: '#mobile-app' },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [portalOpen, setPortalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-pink-light' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <img src="/assets/logo.png" alt="PawConnect Logo" className="h-10 w-10 object-contain" />
            <img src="/assets/text_logo.png" alt="PawConnect" className="h-7 object-contain" />
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href}
                className="text-sm font-semibold text-gray-600 hover:text-pink-dark transition-colors duration-200">
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3 relative">
            {/* Portals dropdown */}
            <div className="relative">
              <button
                onClick={() => setPortalOpen(!portalOpen)}
                className="flex items-center gap-1.5 text-sm font-semibold text-pink-dark border border-pink-dark rounded-full px-4 py-2 hover:bg-pink-soft transition-colors duration-200"
              >
                <Icon icon="solar:apps-bold-duotone" width={16} />
                Portals
                <Icon icon="lucide:chevron-down" width={14} className={`transition-transform duration-200 ${portalOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {portalOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-pink-light overflow-hidden"
                  >
                    {PORTALS.map((p) => (
                      <a key={p.label} href={p.url} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-pink-soft hover:text-pink-dark transition-colors"
                        onClick={() => setPortalOpen(false)}
                      >
                        <Icon icon={p.icon} style={{ color: p.color }} width={18} />
                        {p.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#portal-access"
              className="flex items-center gap-2 text-sm font-bold bg-pink-dark text-white rounded-full px-5 py-2 hover:bg-pink-deep transition-colors duration-200 shadow-md">
              <Icon icon="solar:rocket-bold-duotone" width={16} />
              Access Platform
            </a>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden p-2 text-gray-600 hover:text-pink-dark" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon icon={menuOpen ? 'lucide:x' : 'lucide:menu'} width={26} className="text-pink-dark" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-pink-light px-4 py-4 overflow-hidden"
          >
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href}
                className="flex items-center gap-2 py-2.5 text-sm font-semibold text-gray-600 hover:text-pink-dark"
                onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <div className="mt-3 border-t border-pink-light pt-3 space-y-2">
              {PORTALS.map((p) => (
                <a key={p.label} href={p.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 py-2 text-sm font-semibold text-gray-600 hover:text-pink-dark">
                  <Icon icon={p.icon} style={{ color: p.color }} width={18} />
                  {p.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
