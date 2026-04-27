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
import AOSWrapper from '@/components/AOSWrapper';
import AnimatedWrapper from '@/components/AOSWrapper';



export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Hero />
      <QuoteSection />
      <AboutSection />
      <Page/>
      
       <Projects />
    
    <AOSWrapper animation='fade-up' delay={200} duration={1000}>
     <StackedScroll />
     <div className="border-b border-white/10">
        <StatsSection />
      </div>
    </AOSWrapper>
      
      <div className="border-b border-white/10">
        <LogosSlider/>
      </div>
      <AOSWrapper animation='fade-up' delay={200} duration={1000}>
      <OurServices />
       </AOSWrapper>
       <AOSWrapper animation='fade-right' delay={200} duration={1000}>
      <ClientReviews/>
       </AOSWrapper>
      <AOSWrapper animation='fade-up' delay={200} duration={1000}>
      <NewsUpdates/>
       </AOSWrapper>
      <AOSWrapper animation='fade-left' delay={200} duration={1000}>
      <ContactSection/>
       </AOSWrapper>
      
      
      <div className="border-b border-white/10">
        <LogosSlider/>
      </div>
      <Footer/>
    </main>
  );
}