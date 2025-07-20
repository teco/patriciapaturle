import { Badge } from "@/components/ui/badge";
import { Award, Users, Clock, Heart } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      number: "15+",
      text: "Anos de Experiência"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "1000+",
      text: "Pacientes Atendidas"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "5000+",
      text: "Procedimentos Realizados"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      number: "98%",
      text: "Satisfação dos Pacientes"
    }
  ];

  return (
    <section id="about" className="py-10 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for doctor's photo */}
              <div className="aspect-[4/5] w-full">
  <img
    src="/about-photo.jpg"
    alt="Foto da Dra. Patricia Paturle"
    className="w-full h-full object-cover rounded-2xl"
  />
</div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full p-4 shadow-lg">
                <Award className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-foreground rounded-xl p-4 shadow-lg">
                <div className="text-sm font-medium">CRM: 123456</div>
                <div className="text-xs text-muted-foreground">Dermatologista</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="slide-up">
            <Badge className="mb-6 bg-primary text-primary-foreground text-lg md:text-xl lg:text-2xl font-semibold px-6 py-2">
              Sobre a Especialista
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-foreground">
              Dra. Patricia
              <span className="block font-bold text-primary">Paturle</span>
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Dermatologista com mais de 15 anos de experiência em cuidados estéticos avançados, 
                com foco em beleza natural e bem-estar. Formada pela prestigiosa Faculdade de Medicina 
                da UFMG, com especialização em Dermatologia Estética.
              </p>
              
              <p>
                Especialista em técnicas minimamente invasivas, sempre priorizando a segurança e 
                o conforto das pacientes. Acredita que cada rosto é único e merece um tratamento 
                personalizado que realce a beleza natural.
              </p>

              <p>
                Atendimento personalizado com excelência em procedimentos como preenchimento labial, 
                harmonização facial, skinbooster e tratamentos anti-aging de última geração.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="text-center p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 scale-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-primary mb-2 flex justify-center">
                    {achievement.icon}
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-8 p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Formação & Certificações</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Medicina - Universidade Federal de Minas Gerais (UFMG)</li>
                <li>• Residência em Dermatologia - Hospital das Clínicas UFMG</li>
                <li>• Especialização em Dermatologia Estética - SBED</li>
                <li>• Certificação em Preenchimentos Faciais</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;