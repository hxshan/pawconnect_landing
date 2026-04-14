import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const PORTALS = [
  { label: 'Vet Portal',      icon: 'solar:stethoscope-bold-duotone', color: '#FB6F92', url: 'https://petvetfrontend-production.up.railway.app/' },
  { label: 'Adoption Center', icon: 'solar:home-2-bold-duotone',      color: '#a78bfa', url: 'https://adopt-center-ui-production.up.railway.app/' },
  { label: 'Pet Store',       icon: 'solar:shop-bold-duotone',        color: '#f97316', url: 'https://petstoresellerfrontend-production.up.railway.app/' },
  { label: 'Admin Portal',    icon: 'solar:settings-bold-duotone',    color: '#34d399', url: 'https://petadminportal-production.up.railway.app/' },
];

const FEATURES = [
  { icon: 'solar:paw-bold-duotone',              label: 'AI Pet Matching' },
  { icon: 'solar:stethoscope-bold-duotone',      label: 'Vet Appointments' },
  { icon: 'solar:bowl-spoon-bold-duotone',       label: 'Pet Nutrition AI' },
  { icon: 'solar:document-medicine-bold-duotone', label: 'Medical Records' },
  { icon: 'solar:shop-bold-duotone',             label: 'Pet Shop' },
  { icon: 'solar:bell-bold-duotone',             label: 'Notifications' },
];

const SOCIALS = [
  { icon: 'mdi:instagram', label: 'Instagram' },
  { icon: 'mdi:facebook',  label: 'Facebook' },
  { icon: 'mdi:twitter',   label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/assets/logo.png" alt="PawConnect" className="w-10 h-10 object-contain" />
              <img src="/assets/text_logo.png" alt="PawConnect" className="h-7 object-contain brightness-0 invert" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Connecting pets with loving families through the power of technology and compassion.
            </p>
            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <div key={s.label} className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center hover:bg-pink-dark transition-colors cursor-pointer">
                  <Icon icon={s.icon} className="text-white" width={18} />
                </div>
              ))}
            </div>
          </div>

          {/* Portals */}
          <div>
            <h4 className="font-black text-white mb-4 text-xs uppercase tracking-wider flex items-center gap-2">
              <Icon icon="solar:apps-bold-duotone" className="text-pink-main" width={14} />
              Portals
            </h4>
            <ul className="space-y-3">
              {PORTALS.map((p) => (
                <li key={p.label}>
                  <a href={p.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 text-sm font-medium hover:text-pink-main transition-colors">
                    <Icon icon={p.icon} style={{ color: p.color }} width={15} />
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-black text-white mb-4 text-xs uppercase tracking-wider flex items-center gap-2">
              <Icon icon="solar:star-bold-duotone" className="text-pink-main" width={14} />
              Features
            </h4>
            <ul className="space-y-3">
              {FEATURES.map((f) => (
                <li key={f.label} className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                  <Icon icon={f.icon} className="text-pink-main/60" width={14} />
                  {f.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-black text-white mb-4 text-xs uppercase tracking-wider flex items-center gap-2">
              <Icon icon="lucide:building-2" className="text-pink-main" width={14} />
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-400 text-sm font-medium cursor-pointer hover:text-pink-main transition-colors">
                  About PawConnect
                </span>
              </li>
              <li>
                <span className="text-gray-400 text-sm font-medium cursor-pointer hover:text-pink-main transition-colors">
                  Contact Us
                </span>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 text-sm font-medium hover:text-pink-main transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/delete-account" className="text-gray-400 text-sm font-medium hover:text-pink-main transition-colors">
                  Delete Account
                </Link>
              </li>
              <li>
                <span className="text-gray-400 text-sm font-medium cursor-pointer hover:text-pink-main transition-colors">
                  Terms of Service
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1.5">
            © 2025 PawConnect. All rights reserved. Made with
            <Icon icon="solar:heart-bold-duotone" className="text-pink-dark" width={14} />
            for pets everywhere.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-gray-500 text-xs font-semibold">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
