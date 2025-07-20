import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-[40vh] flex items-center justify-center bg-gradient-primary text-primary-foreground overflow-hidden">
  {/* Background Image */}
  <img
    src="/hero-bg.jpg"
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none select-none"
    style={{ zIndex: 0 }}
  />
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-white/20 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 rounded-full bg-white/15 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-white/25 animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium text-primary">Clínica Premium em Belo Horizonte</span>
          </div>

          {/* Main Heading */}
          <div className="max-w-4xl mx-auto mb-3 fade-in delay-200">
            <div className="w-full bg-white rounded-2xl shadow-lg flex justify-center items-center py-12 px-4">
              <img
                src="/clinica-logo.png"
                alt="Clinic Logo"
                className="h-32 md:h-48 lg:h-64 object-contain max-w-full"
              />
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl mb-4 max-w-3xl mx-auto opacity-90 leading-relaxed fade-in delay-400 text-primary">
            Experimente tratamentos estéticos premium com nossa dermatologista especializada. 
            Com mais de 15 anos de experiência, oferecemos resultados excepcionais com uma abordagem artística.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in delay-600">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="btn-clinic bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Agende Sua Consulta
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            
            <Button
              onClick={() => document.getElementById('treatments')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              size="lg"
              className="btn-clinic-outline border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground"
            >
              Conheça os Tratamentos
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 fade-in delay-800 text-primary">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
              <div className="text-sm opacity-80">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">1000+</div>
              <div className="text-sm opacity-80">Pacientes Satisfeitas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-80">Taxa de Satisfação</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;