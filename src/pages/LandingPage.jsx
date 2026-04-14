import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import PortalCards from '../components/PortalCards';
import FeatureHighlights from '../components/FeatureHighlights';
import EcosystemGrid from '../components/EcosystemGrid';
import HowItWorks from '../components/HowItWorks';
import MobileAppSection from '../components/MobileAppSection';
import PortalAccess from '../components/PortalAccess';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="font-nunito">
      <Navbar />
      <Hero />
      <StatsBar />
      <PortalCards />
      <FeatureHighlights />
      <EcosystemGrid />
      <HowItWorks />
      <MobileAppSection />
      <PortalAccess />
      <Testimonials />
      <Footer />
    </div>
  );
}
