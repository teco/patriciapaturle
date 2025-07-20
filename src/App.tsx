import { lazy, Suspense } from 'react';
import './index.css';

// Lazy load components
//
const Navigation = lazy(() => import('./Navigation')); //
const HeroSection = lazy(() => import('./HeroSection')); //
const FeaturedTreatment = lazy(() => import('./FeaturedTreatment')); //
const AboutSection = lazy(() => import('./AboutSection')); //
const ServicesSection = lazy(() => import('./ServicesSection')); //
const FAQSection = lazy(() => import('./FAQSection')); //
const BlogSection = lazy(() => import('./BlogSection')); //
const ContactSection = lazy(() => import('./ContactSection')); //
const Footer = lazy(() => import('./Footer')); //

function App() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-screen text-xl text-primary">Carregando conteúdo...</div>}>
      <Navigation />
      <HeroSection />
      <FeaturedTreatment />
      <AboutSection />
      <ServicesSection />
      <FAQSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </Suspense>
  );
}

export default App;