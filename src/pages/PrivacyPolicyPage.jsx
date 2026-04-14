import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const SECTIONS = [
  {
    icon: 'solar:info-circle-bold-duotone',
    title: '1. Introduction',
    content: (
      <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
        <p>
          Welcome to <span className="font-semibold text-gray-800">PawConnect</span> — a pet adoption and care ecosystem that connects pet owners, adoption centers, veterinarians, and pet stores through the power of technology and compassion.
        </p>
        <p>
          This Privacy Policy explains how PawConnect collects, uses, shares, and protects your personal information when you use our services, including:
        </p>
        <ul className="space-y-1.5 pl-4">
          {[
            'The PawConnect mobile app (iOS & Android)',
            'This website (pawconnect.app)',
            'Adoption Center Portal',
            'Vet Portal',
            'Pet Store Portal',
            'Admin Portal',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FB6F92] shrink-0 mt-1.5" />
              {item}
            </li>
          ))}
        </ul>
        <p>
          By creating an account or using any PawConnect service, you agree to the practices described in this policy. If you do not agree, please discontinue use and contact us to delete your account.
        </p>
      </div>
    ),
  },
  {
    icon: 'solar:database-bold-duotone',
    title: '2. Information We Collect',
    content: (
      <div className="space-y-5 text-sm text-gray-600 leading-relaxed">
        <div>
          <p className="font-semibold text-gray-800 mb-2">2.1 Information You Provide Directly</p>
          <ul className="space-y-1.5 pl-4">
            {[
              'Account registration: name, email address, password, phone number',
              'Profile data: profile photo, bio, city/region',
              'Pet profiles: pet name, species, breed, age, photos, medical history, vaccination records',
              'Adoption preferences: preferred species, breed, age range, size, activity level',
              'Communications: messages sent to adoption centers or vets through the platform',
              'Payment information: billing address and payment details (processed via secure third-party processors — we never store raw card data)',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FB6F92] shrink-0 mt-1.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-gray-800 mb-2">2.2 Information Collected Automatically</p>
          <ul className="space-y-1.5 pl-4">
            {[
              'Device data: device type, operating system, app version, unique device identifiers',
              'Usage data: features used, pages viewed, time spent, interaction patterns',
              'Location data: approximate location (city/region) to show nearby centers, vets, and stores; precise GPS only with your explicit permission',
              'Log data: IP address, timestamps, crash reports, and error logs',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FB6F92] shrink-0 mt-1.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-gray-800 mb-2">2.3 Information from Third Parties</p>
          <ul className="space-y-1.5 pl-4">
            {[
              'Adoption centers: pet listings, availability status, and adoption history',
              'Veterinarians: appointment records and health notes shared via the Vet Portal',
              'Payment processors: transaction confirmation and status (not raw card data)',
              'AI/ML services: inferred pet compatibility scores and recommendations generated from your preferences and behavior',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FB6F92] shrink-0 mt-1.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    icon: 'solar:settings-bold-duotone',
    title: '3. How We Use Your Information',
    content: (
      <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
        <div className="grid gap-3">
          {[
            {
              heading: 'AI Matching & Recommendations',
              text: 'We use AI algorithms to match pets to adopters based on your preferences, lifestyle, location, and behavioral patterns. We also generate personalized pet care recommendations such as nutrition plans and vet suggestions.',
            },
            {
              heading: 'Platform Operations',
              text: 'Create and manage your account, process adoption applications, facilitate vet appointment bookings, and enable purchases in the Pet Store.',
            },
            {
              heading: 'Communications',
              text: 'Send transaction confirmations, appointment reminders, adoption status updates, and important service notices via email or push notification.',
            },
            {
              heading: 'Safety & Security',
              text: 'Detect and prevent fraud, abuse, and unauthorized access. Verify the credentials of adoption centers and veterinarians.',
            },
            {
              heading: 'Improvement & Analytics',
              text: 'Understand how users interact with the platform to improve features, fix bugs, and develop new services. Analytics data is aggregated or anonymized where possible.',
            },
            {
              heading: 'Legal Compliance',
              text: 'Comply with applicable laws, regulations, and legal processes.',
            },
          ].map(({ heading, text }) => (
            <div key={heading} className="bg-[#FFF5F9] rounded-xl p-3.5">
              <p className="font-semibold text-gray-800 mb-1">{heading}</p>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-sm text-green-800 font-medium">
          We do <span className="underline">not</span> sell your personal information to third parties for their own marketing purposes.
        </div>
      </div>
    ),
  },
  {
    icon: 'solar:share-bold-duotone',
    title: '4. Information Sharing',
    content: (
      <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
        <p>We share your information only in the following circumstances:</p>
        <div className="space-y-2.5">
          {[
            {
              who: 'Adoption Centers',
              what: 'When you submit an adoption application, your name, contact details, and application responses are shared with the relevant center.',
            },
            {
              who: 'Veterinarians',
              what: 'When you book an appointment, your name, pet profile, and relevant medical history are shared with the selected vet clinic.',
            },
            {
              who: 'Payment Processors',
              what: 'We use industry-standard, PCI-DSS compliant payment processors. Your payment information is transmitted directly under their privacy policy.',
            },
            {
              who: 'AI / ML Service Providers',
              what: 'Anonymized or pseudonymized behavioral data may be processed by third-party AI providers to generate recommendations. We contractually require data protection.',
            },
            {
              who: 'Cloud Infrastructure',
              what: 'Our platform is hosted on cloud services (e.g., Railway). Data is stored under appropriate data processing agreements.',
            },
            {
              who: 'Legal Requirements',
              what: 'We may disclose information if required by law, court order, or to protect the rights, safety, and property of PawConnect, our users, or the public.',
            },
            {
              who: 'Business Transfers',
              what: 'If PawConnect is acquired or merges with another entity, your data may be transferred as part of that transaction. We will notify you in advance.',
            },
          ].map(({ who, what }) => (
            <div key={who} className="flex gap-3 items-start border-b border-[#FFF0F3] pb-2.5 last:border-0 last:pb-0">
              <span className="text-xs font-bold text-[#FB6F92] bg-[#FFF0F3] px-2 py-1 rounded-lg shrink-0 mt-0.5 whitespace-nowrap">{who}</span>
              <p>{what}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: 'solar:shield-check-bold-duotone',
    title: '5. Data Security',
    content: (
      <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
        <p>We implement industry-standard security measures to protect your data:</p>
        <ul className="space-y-1.5 pl-4">
          {[
            'HTTPS/TLS encryption for all data in transit',
            'Encrypted storage for data at rest',
            'Passwords hashed using modern algorithms (bcrypt or equivalent) — we never store plain-text passwords',
            'Payment card data handled exclusively by PCI-DSS compliant processors',
            'Access controls limiting data access to authorized employees and contractors only',
            'Regular security reviews and vulnerability assessments',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FB6F92] shrink-0 mt-1.5" />
              {item}
            </li>
          ))}
        </ul>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3 text-sm text-yellow-800 leading-relaxed">
          Despite our best efforts, no system is completely secure. We encourage you to use a strong, unique password. If you suspect unauthorized access to your account, contact us immediately at{' '}
          <a href="mailto:chamod914@gmail.com" className="font-semibold underline">chamod914@gmail.com</a>.
        </div>
      </div>
    ),
  },
  {
    icon: 'solar:user-check-bold-duotone',
    title: '6. Your Rights & Account Deletion',
    content: (
      <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
        <p>Depending on your location, you may have the following rights under applicable laws (GDPR, CCPA, and similar):</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {[
            { right: 'Access', desc: 'Request a copy of the personal data we hold about you.' },
            { right: 'Correction', desc: 'Ask us to correct inaccurate or incomplete data.' },
            { right: 'Deletion', desc: 'Request erasure of your account and personal data.' },
            { right: 'Portability', desc: 'Request your data in a machine-readable format.' },
            { right: 'Opt-Out', desc: 'Opt out of marketing communications at any time.' },
          ].map(({ right, desc }) => (
            <div key={right} className="bg-[#FFF5F9] rounded-xl p-3">
              <p className="font-semibold text-gray-800 mb-0.5">{right}</p>
              <p className="text-xs">{desc}</p>
            </div>
          ))}
        </div>
        <div>
          <p className="font-semibold text-gray-800 mb-2">Account Deletion Process</p>
          <div className="space-y-2">
            {[
              'Email chamod914@gmail.com with subject line "Account Deletion Request"',
              'Include your registered email address and optionally your full name for faster verification',
              'We will verify your identity and process your request within 30 days',
              'Upon deletion: profile, pet profiles, photos, messages, adoption history, and preferences are permanently removed',
            ].map((step, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="w-6 h-6 bg-[#FFBEDA] rounded-full flex items-center justify-center text-xs font-bold text-[#72243E] shrink-0">{i + 1}</div>
                <p className="pt-0.5">{step}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl px-4 py-3">
          <p className="font-semibold text-gray-700 mb-1 text-xs uppercase tracking-wider">Retained after deletion</p>
          <ul className="space-y-1 text-xs">
            {[
              'Transaction/financial records — up to 7 years (legal/tax obligation)',
              'Anonymized aggregated analytics — indefinitely (not linked to you)',
              'Communications required for ongoing legal disputes — until resolved',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-500">
                <div className="w-1 h-1 rounded-full bg-gray-400 shrink-0 mt-1.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <Link
          to="/delete-account"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#FB6F92] hover:text-[#e8547a] transition-colors"
        >
          <Icon icon="solar:trash-bin-trash-bold-duotone" width={16} />
          Go to Account Deletion page →
        </Link>
      </div>
    ),
  },
  {
    icon: 'solar:baby-bold-duotone',
    title: "7. Children's Privacy",
    content: (
      <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
        <p>
          PawConnect is not directed at children under the age of <span className="font-semibold text-gray-800">13</span> (or 16 in certain jurisdictions under GDPR). We do not knowingly collect personal information from children under 13.
        </p>
        <p>
          If you believe a child under 13 has created an account, please contact us at{' '}
          <a href="mailto:chamod914@gmail.com" className="font-semibold text-[#FB6F92] hover:underline">chamod914@gmail.com</a>{' '}
          and we will promptly delete the account and all associated data.
        </p>
        <p>
          Users between the ages of 13 and 18 should use PawConnect only with the consent and supervision of a parent or legal guardian.
        </p>
      </div>
    ),
  },
  {
    icon: 'solar:cookie-bold-duotone',
    title: '8. Cookies & Tracking',
    content: (
      <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
        <p>The PawConnect web portals use cookies and similar technologies for:</p>
        <div className="space-y-2">
          {[
            { type: 'Essential', desc: 'Session management required for login and security. Cannot be disabled without breaking core functionality.' },
            { type: 'Preferences', desc: 'Storing your language, portal settings, and display preferences across sessions.' },
            { type: 'Analytics', desc: 'Aggregated usage patterns to help us understand how the platform is used and improve it. Data is anonymized.' },
          ].map(({ type, desc }) => (
            <div key={type} className="flex gap-3 items-start">
              <span className="text-xs font-bold bg-[#FFF0F3] text-[#FB6F92] px-2 py-0.5 rounded-md shrink-0 mt-0.5">{type}</span>
              <p>{desc}</p>
            </div>
          ))}
        </div>
        <p>
          You can manage cookie preferences through your browser settings. Disabling essential cookies may affect platform functionality. The mobile app uses equivalent local storage mechanisms and device identifiers for session management.
        </p>
      </div>
    ),
  },
  {
    icon: 'solar:clock-circle-bold-duotone',
    title: '9. Data Retention',
    content: (
      <div className="space-y-2 text-sm text-gray-600 leading-relaxed">
        {[
          { period: 'Life of account + 30 days', what: 'All active account data, profiles, photos, messages, and preferences' },
          { period: '24 months inactivity', what: 'Inactive accounts receive a re-engagement notice; if unresponsive, scheduled for deletion with advance notification' },
          { period: '7 years', what: 'Transaction and financial records (legal and tax obligations)' },
          { period: 'Indefinitely', what: 'Anonymized, aggregated analytics data that cannot be linked to any individual' },
        ].map(({ period, what }) => (
          <div key={period} className="flex gap-3 items-start border-b border-[#FFF0F3] pb-2.5 last:border-0 last:pb-0">
            <span className="text-xs font-bold text-[#72243E] bg-[#FFBEDA]/40 px-2 py-1 rounded-lg shrink-0 whitespace-nowrap">{period}</span>
            <p className="pt-0.5">{what}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: 'solar:link-bold-duotone',
    title: '10. Third-Party Links',
    content: (
      <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
        <p>
          PawConnect links to adoption center websites, veterinary clinic pages, and external stores. This Privacy Policy applies only to PawConnect services and does <span className="font-semibold text-gray-800">not</span> apply to those third-party sites.
        </p>
        <p>
          We encourage you to review the privacy policies of any third-party services before sharing personal information with them. PawConnect is not responsible for the privacy practices of external websites.
        </p>
      </div>
    ),
  },
  {
    icon: 'solar:bell-bold-duotone',
    title: '11. Changes to This Policy',
    content: (
      <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
        <p>
          We may update this Privacy Policy periodically to reflect changes in our practices or applicable law. When we do, we will:
        </p>
        <ul className="space-y-1.5 pl-4">
          {[
            'Update the "Last Updated" date at the top of this page',
            'Send an email to your registered address for significant changes',
            'Show an in-app notification banner',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FB6F92] shrink-0 mt-1.5" />
              {item}
            </li>
          ))}
        </ul>
        <p>
          Continued use of PawConnect after the effective date of changes constitutes your acceptance of the updated policy.
        </p>
      </div>
    ),
  },
  {
    icon: 'solar:letter-bold-duotone',
    title: '12. Contact Us',
    content: (
      <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
        <p>
          If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please reach out to us:
        </p>
        <div className="bg-[#FFF0F3] border border-[#F4C0D1] rounded-xl px-4 py-4 space-y-3">
          <div className="flex items-center gap-3">
            <Icon icon="solar:letter-bold-duotone" className="text-[#FB6F92]" width={20} />
            <div>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Email</p>
              <a href="mailto:chamod914@gmail.com" className="font-semibold text-[#72243E] hover:underline">chamod914@gmail.com</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Icon icon="solar:tag-bold-duotone" className="text-[#FB6F92]" width={20} />
            <div>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Subject line</p>
              <p className="font-semibold text-[#72243E]">Privacy Inquiry - PawConnect</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Icon icon="solar:clock-circle-bold-duotone" className="text-[#FB6F92]" width={20} />
            <div>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Response time</p>
              <p className="font-semibold text-[#72243E]">Within 5–7 business days</p>
            </div>
          </div>
        </div>
        <p>
          For account deletion specifically, please see{' '}
          <Link to="/delete-account" className="font-semibold text-[#FB6F92] hover:underline">Section 6</Link>{' '}
          or visit our{' '}
          <Link to="/delete-account" className="font-semibold text-[#FB6F92] hover:underline">Account Deletion page</Link>.
        </p>
      </div>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#FFF5F9] font-nunito">

      {/* Minimal sticky header */}
      <header className="bg-white border-b border-[#FFE4EF] sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/assets/logo.png" alt="PawConnect" className="w-9 h-9 object-contain" />
            <img src="/assets/text_logo.png" alt="PawConnect" className="h-6 object-contain" />
          </Link>
          <Link
            to="/"
            className="flex items-center gap-1.5 text-sm font-bold text-[#FB6F92] hover:text-[#e8547a] transition-colors"
          >
            <Icon icon="lucide:arrow-left" width={15} />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero band */}
      <div className="bg-gradient-to-br from-[#FFE4EF] to-[#FFF5F9] border-b border-[#FFE4EF] py-10 text-center px-4">
        <div className="inline-flex items-center gap-2 bg-white/80 text-[#FB6F92] font-bold text-xs px-4 py-1.5 rounded-full mb-4 border border-[#FFE4EF] shadow-sm">
          <Icon icon="solar:shield-check-bold-duotone" width={14} />
          LEGAL
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-[#1a1a2e] mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm">
          Effective Date: April 14, 2026 &nbsp;·&nbsp; Last Updated: April 14, 2026
        </p>
      </div>

      {/* Sections */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-4">
        {SECTIONS.map((section) => (
          <section
            key={section.title}
            className="bg-white rounded-2xl border border-[#FFE4EF] shadow-sm p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#FFF0F3] rounded-xl flex items-center justify-center shrink-0">
                <Icon icon={section.icon} className="text-[#FB6F92]" width={22} />
              </div>
              <h2 className="text-base sm:text-lg font-black text-[#1a1a2e]">{section.title}</h2>
            </div>
            {section.content}
          </section>
        ))}
      </main>

      {/* Footer strip */}
      <footer className="bg-[#1a1a2e] text-gray-400 text-center text-xs py-5 font-semibold mt-6">
        © {new Date().getFullYear()} PawConnect. All rights reserved.&nbsp;&nbsp;·&nbsp;&nbsp;
        <Link to="/" className="hover:text-[#FFBEDA] transition-colors">Back to Home</Link>
        &nbsp;&nbsp;·&nbsp;&nbsp;
        <a href="mailto:chamod914@gmail.com" className="hover:text-[#FFBEDA] transition-colors">
          chamod914@gmail.com
        </a>
      </footer>
    </div>
  );
}
