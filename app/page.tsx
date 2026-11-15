import Faq from '@/components/Faq';
import Features from '@/components/Features';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import MeltFilters from '@/components/MeltFilters';
import MobileBar from '@/components/MobileBar';
import Nav from '@/components/Nav';
import Preloader from '@/components/Preloader';
import Pricing from '@/components/Pricing';
import Reviews from '@/components/Reviews';
import ScrollReveal from '@/components/ScrollReveal';
import Socials from '@/components/Socials';
import Ticker from '@/components/Ticker';
import YouTube from '@/components/YouTube';

export default function Home() {
  return (
    <>
      <MeltFilters />
      <Preloader />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Features />
        <HowItWorks />
        <Reviews />
        <Pricing />
        <YouTube />
        <Socials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileBar />
      <ScrollReveal />
    </>
  );
}
