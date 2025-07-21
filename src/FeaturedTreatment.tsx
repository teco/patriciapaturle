import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Layers, CheckCircle2, AlertTriangle } from "lucide-react";

const FeaturedTreatment = () => {
  return (
    <section id="treatments" className="py-10">
      <div className="container mx-auto px-4 max-w-full overflow-x-hidden">
        <Card className="rounded-xl border-0 bg-gradient-to-br from-gray-200 via-gray-400 to-green-900 text-card-foreground shadow max-w-5xl mx-auto relative overflow-hidden p-0">
          <CardHeader className="text-center relative z-10 slide-up pb-2">
            <Badge className="bg-accent text-accent-foreground mx-auto mb-2 px-4 py-2 flex items-center gap-2">
              <span role="img" aria-label="microscope">🔬</span> Tratamento em Evidência
            </Badge>
            <CardTitle className="text-2xl md:text-3xl font-bold mb-2 text-green-900">
              Protocolo Face Balance
            </CardTitle>
            <CardDescription className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed mb-4">
              Harmonia facial em três pilares: estímulo, densidade e sustentação.
            </CardDescription>
          </CardHeader>

          <CardContent className="relative z-10">

            {/* Intro Text */}
            <div className="bg-green-900/10 backdrop-blur-sm rounded-xl p-6 mb-6 text-center">
              <p className="text-sm text-green-900 max-w-2xl mx-auto">
  <span className="font-bold">A perda de peso pode impactar negativamente o contorno facial, sobretudo após os 40 anos.</span><br/>
  <span className="whitespace-nowrap">
    Este protocolo foi desenvolvido para preservar a estrutura da face com atuação médica criteriosa e resultados naturais.
  </span>
</p>
            </div>

            {/* Pilares */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5" /> Os Três Pilares do Protocolo
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-lg p-4 flex flex-col items-center">
                  <div className="font-bold mb-1 whitespace-nowrap">Pilar 1: Estímulo de Colágeno</div>
                  <img src="/pilar1.png" alt="Estímulo de Colágeno" className="w-12 h-12 mb-2 object-contain" />
                  <p className="text-center text-sm text-primary-foreground/90">
                    Prepara a pele para a perda de volume, promovendo elasticidade e vitalidade.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 flex flex-col items-center">
                  <div className="font-bold mb-1 whitespace-nowrap">Pilar 2: Redensificação Dérmica</div>
                  <img src="/pilar2.png" alt="Redensificação Dérmica" className="w-12 h-12 mb-2 object-contain" />
                  <p className="text-center text-sm text-primary-foreground/90">
                    Fortalece as camadas profundas da pele, melhorando firmeza e sustentação.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 flex flex-col items-center">
                  <div className="font-bold mb-1 whitespace-nowrap">Pilar 3: Preenchimento Estratégico</div>
                  <img src="/pilar3.png" alt="Preenchimento Estratégico" className="w-12 h-12 mb-2 object-contain" />
                  <p className="text-center text-sm text-primary-foreground/90">
                    Reposição precisa e controlada de volume, respeitando a anatomia facial.
                  </p>
                </div>
              </div>
            </div>

            {/* Impacto na Pele & Melhor Momento (Side by Side) */}
            <div className="grid md:grid-cols-2 gap-6 mb-6 w-full">
              {/* Impacto na Pele */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center">
  <h3 className="text-xl font-semibold mb-4">O que acontece com a pele ao emagrecer?</h3>
  <img src="/impacto.png" alt="Impacto do emagrecimento na pele" className="h-64 md:h-80 w-auto object-contain rounded-lg shadow mb-2" />
  <div className="flex items-center gap-2 text-sm mt-2 text-yellow-900 text-primary-foreground/70 justify-center">
    <AlertTriangle className="w-4 h-4 text-yellow-500" />
    <span>Especialmente após os 40 anos, o risco é ainda maior.</span>
  </div>
</div>
              {/* Melhor Momento */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center">
  <h3 className="text-xl font-semibold mb-4">Qual o melhor momento para começar</h3>
  <img src="/momento.png" alt="Melhor momento para começar o tratamento" className="h-64 md:h-80 w-auto object-contain rounded-lg shadow" />
</div>
            </div>

            {/* Tratamento sob medida (Side by Side) */}
            <div className="grid md:grid-cols-2 gap-6 mb-6 w-full">
              {/* Block 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex flex-col items-center text-center h-56 md:h-72">
  <img src="/detalhe.png" alt="Impacto do emagrecimento na pele" className="h-full w-auto object-contain rounded-lg shadow" />
</div>
              {/* Block 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex flex-col items-center text-center">
  <h3 className="text-xl font-semibold mb-4">Tratamento sob medida</h3>
  <img src="/pmg.png" alt="Tratamento Sob Medida P–M–G visual 1" className="h-40 md:h-56 w-auto object-contain rounded-lg shadow" />
</div>
            </div>

            {/* Avaliação Médica */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-4 text-center">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 justify-center">
                <CheckCircle2 className="w-5 h-5" /> Avaliação Médica
              </h3>
              <div className="text-primary-foreground/90 mb-2">
                Cada protocolo é conduzido pessoalmente pela Dra. Patrícia Paturle, com acompanhamento individualizado e foco na preservação estética da face.
              </div>
              <a href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20personalizada" target="_blank" rel="noopener noreferrer">
                <Button className="mt-2 font-semibold text-base">Agende sua avaliação personalizada</Button>
              </a>
            </div>

          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FeaturedTreatment;
