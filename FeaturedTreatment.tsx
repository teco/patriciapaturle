import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Sparkles, Star, CheckCircle } from "lucide-react";

const FeaturedTreatment = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const features = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Técnica Avançada",
      description: "Métodos de ponta e produtos premium com mínimo tempo de recuperação."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Abordagem Personalizada",
      description: "Tratamento adaptado à sua estrutura facial e objetivos estéticos."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Cuidado Especializado",
      description: "Procedimento realizado por dermatologista experiente com foco em segurança e conforto."
    }
  ];

  return (
    <section id="treatments" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <Card className="clinic-card-featured max-w-6xl mx-auto relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 right-10 w-32 h-32 rounded-full border-2 border-white"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full border-2 border-white"></div>
          </div>

          <CardHeader className="text-center relative z-10 slide-up">
            <Badge className="bg-accent text-accent-foreground mx-auto mb-4 px-4 py-2">
              Tratamento Exclusivo
            </Badge>
            <CardTitle className="text-3xl md:text-4xl lg:text-5xl font-light mb-4">
              PREENCHIMENTO LABIAL
              <span className="block font-bold">PREMIUM</span>
            </CardTitle>
            <CardDescription className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Técnica exclusiva que combina arte com métodos avançados para criar resultados naturais. 
              Realçamos o formato natural dos seus lábios mantendo uma aparência sofisticada.
            </CardDescription>
          </CardHeader>

          <CardContent className="relative z-10">
            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="text-center fade-in"
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-primary-foreground/80 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Benefits List */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8 scale-in">
              <h3 className="text-2xl font-semibold mb-6 text-center text-primary-foreground">
                Por que escolher nosso tratamento?
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Resultados naturais e duradouros",
                  "Produtos certificados e seguros", 
                  "Técnica minimamente invasiva",
                  "Acompanhamento pós-procedimento",
                  "Ambiente luxuoso e confortável",
                  "Profissional altamente qualificada"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-primary-foreground/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center fade-in delay-800">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="btn-clinic bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Agende Seu Tratamento
              </Button>
              <p className="text-sm text-primary-foreground/70 mt-4">
                Consulta de avaliação sem compromisso
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FeaturedTreatment;