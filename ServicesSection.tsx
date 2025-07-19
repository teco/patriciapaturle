import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-foreground">
            Nossos
            <span className="block font-bold text-primary">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma ampla gama de tratamentos estéticos avançados, 
            sempre com foco na sua segurança e satisfação
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="clinic-card group hover:shadow-elegant transition-all duration-500 slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground text-sm">Inclui:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Details */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div>
                    <div className="text-xs text-muted-foreground">Duração</div>
                    <div className="text-sm font-medium text-foreground">{service.duration}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Preço</div>
                    <div className="text-sm font-medium text-primary">{service.price}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-primary rounded-2xl p-12 text-primary-foreground fade-in">
          <h3 className="text-2xl md:text-3xl font-light mb-4">
            Não encontrou o tratamento que procura?
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Oferecemos consultas personalizadas para criar o plano de tratamento ideal para você
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="btn-clinic bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Agende uma Consulta
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;