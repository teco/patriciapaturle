import { Badge } from "@/components/ui/badge";
import { Award, Heart, Palette, Microscope, HeartHandshake } from "lucide-react";

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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              Sobre Mim
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-foreground">
              Conheça a Dra. Patrícia
              <span className="block font-bold text-primary">Paturle</span>
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
  <p>Sou médica dermatologista com 25 anos de atuação exclusiva em estética. Formada pela UFMG, com residência médica em Dermatologia pela Santa Casa de BH.</p>
  <p>Atuo com foco em preenchimentos, estímulo de colágeno e tecnologias avançadas, buscando resultados harmônicos, individualizados e sustentáveis.</p>
  <p>Além da prática clínica, mantenho constante atualização científica e já participei de diversos estudos, congressos e publicações na área médica.</p>
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
                    {achievement.highlight}
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
                <li>• Residência em Dermatologia - Hospital das Santa Casa de Belo Horizonte</li>
                <li>• Especialização em Dermatologia Estética</li>
                <li>• Membro Titular da Sociedade Brasileira de Dermatologia</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;