import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="home" 
      className="pt-10 pb-5 bg-background relative overflow-hidden flex items-center justify-center bg-gradient-primary text-primary-foreground"
    >
      {/* Background Image - Added bg-no-repeat bg-cover via class; ensure /hero-bg.jpg is in public/ */}
      <img
        src="/hero-bg.png"
        alt="Background da Clínica Patricia Paturle"
        className="absolute inset-0 w-full h-full object-cover opacity-35 pointer-events-none select-none bg-no-repeat bg-cover"
        style={{ zIndex: 0 }}
      />

      {/* Background Decoration - Kept, but added responsive scaling if needed */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-white/10 animate-pulse hidden sm:block" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 rounded-full bg-white/8 animate-pulse delay-1000 hidden sm:block" style={{ animationDuration: '5s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-white/12 animate-pulse delay-500 hidden sm:block" style={{ animationDuration: '6s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 hyphens-auto"> {/* Added hyphens-auto for word breaks */}
        <div className="max-w-4xl mx-auto">
          
          {/* Main Heading (Logo) - Ensured responsive height */}
          <div className="max-w-4xl mx-auto mb-3 fade-in delay-200">
            <div className="w-full bg-white rounded-2xl shadow-lg flex justify-center items-center py-12 px-4">
              <img
                src="/clinica-logo.svg"
                alt="Logo da Clínica Patricia Paturle"
                className="h-32 xs:h-40 sm:h-48 md:h-56 lg:h-64 object-contain max-w-full"
              />
            </div>
          </div>

          {/* Subtitle - Responsive fonts, hyphens-auto inherited */}
          <div className="mb-4 max-w-3xl mx-auto text-center fade-in delay-400">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-2" style={{ wordBreak: 'keep-all', hyphens: 'none', overflowWrap: 'normal' }}>
              <strong>Técnica refinada. Olhar apurado. Resultados naturais.</strong>
            </h2>
            <p className="text-base sm:text-lg md:text-xl opacity-90 leading-relaxed text-primary">
              Mais de 25 anos de experiência em dermatologia estética, unindo precisão técnica e sensibilidade estética.
            </p>
          </div>

          {/* CTA Buttons - Added min-w/min-h-[48px], ARIA labels, responsive flex */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in delay-600">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="btn-clinic bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group min-w-[48px] min-h-[48px]"
              aria-label="Agende Sua Consulta e role para a seção de contato"
            >
              Agende Sua Consulta
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            
            <Button
              onClick={scrollToServices}
              variant="outline"
              size="lg"
              className="btn-clinic-outline border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground min-w-[48px] min-h-[48px]"
              aria-label="Conheça os Tratamentos e role para a seção de serviços"
            >
              Conheça os Tratamentos
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Kept, but hidden on mobile if distracting */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/20 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;