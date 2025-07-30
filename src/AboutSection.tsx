import { Badge } from "@/components/ui/badge";
import { Heart, Palette, Microscope, HeartHandshake } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    {
      icon: <Heart className="w-8 h-8" />,
      highlight: "Atendimento Exclusivo",
      text: "Cada procedimento é realizado pessoalmente pela Dra. Patrícia Paturle."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      highlight: "Foco em Resultados Naturais",
      text: "Técnicas com precisão para preservar a identidade facial do paciente."
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      highlight: "Abordagem Científica e Personalizada",
      text: "Tratamentos baseados em avaliação criteriosa e protocolos exclusivos."
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      highlight: "Relações de Confiança",
      text: "Relações construídas com confiança, escuta e acompanhamento contínuo"
    }
  ];

  return (
    <section id="about" className="py-10 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Image Side */}
          <div className="relative fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for doctor's photo */}
              <div className="aspect-[4/5] w-full relative">
                <img
                  src="/aboutphoto.jpg"
                  alt="Foto da Dra. Patricia Paturle"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-black/20 rounded-2xl pointer-events-none"></div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -bottom-4 -left-2 bg-white text-foreground rounded-xl p-4 shadow-lg">
                <div className="text-sm font-medium">CRM: 34274</div>
                <div className="text-xs text-muted-foreground">Dermatologista</div>
              </div>
            </div>
            
            {/* Certifications - Hidden on mobile, shown under image on desktop */}
            <div className="hidden lg:block mt-6 md:mt-8 p-4 md:p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-foreground hyphens-auto break-words">Formação & Certificações</h3>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                <li className="hyphens-auto break-words">• Medicina - Universidade Federal de Minas Gerais (UFMG)</li>
                <li className="hyphens-auto break-words">• Residência em Dermatologia - Hospital das Santa Casa de Belo Horizonte</li>
                <li className="hyphens-auto break-words">• Especialização em Dermatologia Estética</li>
                <li className="hyphens-auto break-words">• Membro Titular da Sociedade Brasileira de Dermatologia</li>
              </ul>
            </div>
          </div>

          {/* Content Side */}
          <div className="slide-up">
            <Badge className="mb-6 bg-primary text-primary-foreground text-base md:text-lg lg:text-xl font-semibold px-6 py-3 min-h-[48px] flex items-center justify-center">
              Sobre Mim
            </Badge>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-6 text-foreground hyphens-auto break-words">
              Conheça a Dra. Patrícia
              <span className="block font-bold text-primary">Paturle</span>
            </h2>

            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p className="hyphens-auto break-words">Sou médica dermatologista com 25 anos de atuação exclusiva em estética. Formada pela UFMG, com residência médica em Dermatologia pela Santa Casa de BH.</p>
              <p className="hyphens-auto break-words">Atuo com foco em preenchimentos, estímulo de colágeno e tecnologias avançadas, buscando resultados harmônicos, individualizados e sustentáveis.</p>
              <p className="hyphens-auto break-words">Além da prática clínica, mantenho constante atualização científica e já participei de diversos estudos, congressos e publicações na área médica.</p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-12">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="text-center p-4 md:p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 scale-in min-h-[120px] flex flex-col justify-center items-center"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-primary mb-3 flex justify-center">
                    {achievement.icon}
                  </div>
                  <div className="text-lg md:text-xl font-bold text-foreground mb-2 hyphens-auto break-words">
                    {achievement.highlight}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground hyphens-auto break-words leading-relaxed">
                    {achievement.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications - Shown on mobile/tablet, hidden on desktop */}
            <div className="lg:hidden mt-6 md:mt-8 p-4 md:p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-foreground hyphens-auto break-words">Formação & Certificações</h3>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                <li className="hyphens-auto break-words">• Medicina - Universidade Federal de Minas Gerais (UFMG)</li>
                <li className="hyphens-auto break-words">• Residência em Dermatologia - Hospital das Santa Casa de Belo Horizonte</li>
                <li className="hyphens-auto break-words">• Especialização em Dermatologia Estética</li>
                <li className="hyphens-auto break-words">• Membro Titular da Sociedade Brasileira de Dermatologia</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;