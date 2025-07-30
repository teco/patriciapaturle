import { lazy, Suspense, useEffect } from 'react';
import './index.css';

// Preload critical components immediately
const Navigation = lazy(() => import('./Navigation'));
const HeroSection = lazy(() => import('./HeroSection'));

// Progressive loading for below-the-fold components
const FeaturedTreatment = lazy(() => 
  import('./FeaturedTreatment').then(module => {
    // Preload next component while current is loading
    import('./AboutSection');
    return module;
  })
);

const AboutSection = lazy(() => 
  import('./AboutSection').then(module => {
    import('./ServicesSection');
    return module;
  })
);

const ServicesSection = lazy(() => 
  import('./ServicesSection').then(module => {
    import('./FAQSection');
    return module;
  })
);

const FAQSection = lazy(() => 
  import('./FAQSection').then(module => {
    import('./BlogSection');
    return module;
  })
);

const BlogSection = lazy(() => 
  import('./BlogSection').then(module => {
    import('./ContactSection');
    return module;
  })
);

const ContactSection = lazy(() => 
  import('./ContactSection').then(module => {
    import('./Footer');
    return module;
  })
);

const Footer = lazy(() => import('./Footer'));

// Optimized loading component with better UX
const LoadingFallback = ({ section }: { section?: string }) => (
  <div className="flex justify-center items-center min-h-[200px] text-primary" role="status" aria-live="polite">
    <div className="flex flex-col items-center gap-3">
      <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent"></div>
      <span className="text-sm text-muted-foreground">
        {section ? `Carregando ${section}...` : 'Carregando conteúdo...'}
      </span>
    </div>
  </div>
);

function App() {
  // Preload critical resources
  useEffect(() => {
    // Preload critical images
    const criticalImages = [
      '/hero-bg.jpg',
      '/clinica-logo.svg'
    ];
    
    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    // Preload Google Fonts with font-display: swap
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.as = 'font';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    fontLink.crossOrigin = 'anonymous';
    document.head.appendChild(fontLink);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Critical above-the-fold content */}
      <Suspense fallback={<LoadingFallback section="navegação" />}>
        <Navigation />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback section="página inicial" />}>
        <HeroSection />
      </Suspense>

      {/* Progressive loading for below-the-fold content */}
      <Suspense fallback={<LoadingFallback section="tratamentos" />}>
        <FeaturedTreatment />
      </Suspense>

      <Suspense fallback={<LoadingFallback section="sobre nós" />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback section="serviços" />}>
        <ServicesSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback section="perguntas frequentes" />}>
        <FAQSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback section="blog" />}>
        <BlogSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback section="contato" />}>
        <ContactSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback section="rodapé" />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;