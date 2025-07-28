import { Button } from "@/components/ui/button";
import { Sparkles, Droplets, RefreshCw, Zap, Star, ShieldCheck } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Harmonização Facial",
      description: "Procedimentos que equilibram e valorizam os traços naturais do rosto, criando simetria e proporção perfeitas.",
      features: ["Preenchimento labial", "Bigode chinês", "Harmonização do queixo"],
      duration: "60-90 min",
      price: "A partir de R$ 800"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Skinbooster",
      description: "Hidratação profunda para uma pele mais viçosa, firme e luminosa através de microinjeções de ácido hialurônico.",
      features: ["Hidratação intensa", "Melhora da textura", "Aumento da luminosidade"],
      duration: "30-45 min",
      price: "A partir de R$ 600"
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Peeling Químico",
      description: "Renovação celular para melhora de manchas, textura e brilho da pele através de ácidos específicos.",
      features: ["Renovação celular", "Melhora de manchas", "Textura uniforme"],
      duration: "45-60 min",
      price: "A partir de R$ 400"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Botox",
      description: "Suavização de rugas de expressão e prevenção do envelhecimento com aplicação precisa de toxina botulínica.",
      features: ["Rugas de expressão", "Prevenção anti-aging", "Resultado natural"],
      duration: "20-30 min",
      price: "A partir de R$ 500"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Fios de PDO",
      description: "Lifting não cirúrgico que promove sustentação e estimula a produção natural de colágeno.",
      features: ["Lifting natural", "Sustentação facial", "Estímulo de colágeno"],
      duration: "90-120 min",
      price: "A partir de R$ 1200"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Laser Facial",
      description: "Tratamentos a laser para rejuvenescimento, manchas e cicatrizes com tecnologia de última geração.",
      features: ["Rejuvenescimento", "Manchas e melasma", "Cicatrizes de acne"],
      duration: "30-60 min",
      price: "A partir de R$ 350"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="py-10 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 fade-in px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-foreground">
            Nossos
            <span className="block font-bold text-primary">Serviços</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma ampla gama de tratamentos estéticos avançados, 
            sempre com foco na sua segurança e satisfação
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 sm:px-6 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <div key={index} className="p-4 md:p-6 bg-white rounded-lg shadow-md text-center break-words hyphens-auto min-h-[280px] flex flex-col justify-between">
              <div className="flex-grow">
                <div className="text-primary mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-foreground hyphens-auto break-words">{service.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 hyphens-auto break-words leading-relaxed">{service.description}</p>
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="text-xs md:text-sm text-muted-foreground hyphens-auto break-words">
                      • {feature}
                    </div>
                  ))}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mb-2">
                  <span className="font-medium">Duração:</span> {service.duration}
                </div>
                <div className="text-sm md:text-base font-semibold text-primary mb-4">
                  {service.price}
                </div>
              </div>
              <Button 
                className="mt-auto bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-4 rounded min-h-[48px] w-full"
                aria-label={`Saiba mais sobre ${service.title}`}
              >
                Saiba Mais
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-primary rounded-2xl p-6 md:p-8 lg:p-12 text-primary fade-in">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-light mb-4 hyphens-auto break-words">
            Não encontrou o tratamento que procura?
          </h3>
          <p className="text-base md:text-lg opacity-90 mb-6 md:mb-8 max-w-2xl mx-auto hyphens-auto break-words leading-relaxed">
            Oferecemos consultas personalizadas para criar o plano de tratamento ideal para você
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="btn-clinic bg-accent text-accent-foreground hover:bg-accent/90 min-h-[48px] px-6 py-3"
            aria-label="Agendar consulta personalizada via WhatsApp"
          >
            Agende uma Consulta
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;