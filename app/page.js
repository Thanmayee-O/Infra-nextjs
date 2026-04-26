import Hero from '@/components/Hero';
import QuoteSection from '@/components/QuoteSection';
import StatsSection from '@/components/StatsSection';
import AboutSection from '@/components/AboutSection';
import OurServices from '@/components/OurServices';
import Projects from '@/components/Projects';
import StackedScroll from '@/components/StackedScroll';
import LogosSlider from '@/components/LogoSlider';
import ClientReviews from '@/components/ClientReviews';
import NewsUpdates from '@/components/NewsUpdates';
import ContactSection from '@/components/Contact';
import Footer from '@/components/Footer';
import Page from '@/components/Page';


export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Hero />
      <QuoteSection />
      <AboutSection />
      <Page/>
      <Projects />
      <StackedScroll />
      <div className="border-b border-white/10">
        <StatsSection />
      </div>
      <div className="border-b border-white/10">
        <LogosSlider/>
      </div>
      <OurServices />
      <ClientReviews/>
      <NewsUpdates/>
      <ContactSection/>
      <div className="border-b border-white/10">
        <LogosSlider/>
      </div>
      <Footer/>
    </main>
  );
}