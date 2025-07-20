import { useState } from "react";
// Assuming these are imported from your shadcn/ui setup
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
// If using shadcn Accordion:
// import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); //

  const faqs = [
    {
      question: "Os tratamentos causam dor?",
      answer: "A maioria dos tratamentos utiliza anestésicos tópicos e são bem tolerados pelos pacientes. Utilizamos técnicas minimamente invasivas e produtos de alta qualidade para garantir o máximo conforto durante o procedimento. Sempre discutimos o nível de desconforto esperado antes de iniciar qualquer tratamento."
    },
    {
      question: "Quanto tempo dura o resultado dos preenchimentos?",
      answer: "O tempo de duração varia conforme o tipo de procedimento e as características individuais. Os preenchimentos labiais geralmente duram de 6 a 12 meses, enquanto a harmonização facial pode durar de 12 a 18 meses. Durante a consulta, explicamos detalhadamente a durabilidade esperada para cada caso específico."
    },
    {
      question: "Qual é o tempo de recuperação?",
      answer: "A maioria dos nossos tratamentos permite retorno às atividades normais no mesmo dia. Pode haver inchaço leve e vermelhidão nas primeiras 24-48 horas, mas isso é completamente normal. Fornecemos instruções detalhadas de cuidados pós-procedimento para otimizar a recuperação."
    },
    {
      question: "Como devo me preparar para o procedimento?",
      answer: "Recomendamos evitar medicamentos anticoagulantes, álcool e exercícios intensos 24-48 horas antes do procedimento. É importante chegar sem maquiagem na área a ser tratada. Durante a consulta inicial, fornecemos uma lista completa de preparativos específicos para seu tratamento."
    },
    {
      question: "Os resultados ficam naturais?",
      answer: "Sim! Nossa filosofia é sempre priorizar resultados naturais que realcem sua beleza única. Utilizamos técnicas avançadas e uma abordagem artística para criar resultados harmoniosos que respeitam suas características faciais naturais. O objetivo é que você se sinta mais bonita e confiante, não artificialmente modificada."
    },
    {
      question: "Quando posso ver os resultados finais?",
      answer: "Os resultados iniciais são visíveis imediatamente, mas o resultado final pode ser avaliado após 2-4 semanas, quando o inchaço inicial diminui completamente. Alguns tratamentos, como skinbooster, mostram melhora progressiva ao longo de 2-3 meses devido ao estímulo natural de colágeno."
    },
    {
      question: "Preciso fazer retoque?",
      answer: "Isso varia de pessoa para pessoa e do tipo de tratamento. Alguns pacientes ficam completamente satisfeitos com o resultado inicial, enquanto outros preferem um retoque para ajustes finos. Oferecemos acompanhamento pós-procedimento e, quando necessário, retoques são realizados sem custo adicional dentro de 30 dias."
    },
    {
      question: "Qual a diferença entre os produtos utilizados?",
      answer: "Utilizamos apenas produtos de marcas renomadas e aprovados pela ANVISA. Cada produto tem características específicas: densidade, durabilidade e indicações diferentes. Durante a consulta, explicamos qual produto é mais indicado para seu caso específico, sempre priorizando segurança e resultados superiores."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-10 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-foreground">
            Perguntas
            <span className="block font-bold text-primary">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Esclarecemos as principais dúvidas sobre nossos tratamentos. 
            Não encontrou sua pergunta? Entre em contato conosco!
          </p>
        </div>

        {/* FAQ Cards (Custom Accordion Example - replace with Shadcn Accordion for best practice) */}
        {/* To use Shadcn Accordion, uncomment the import above and replace this div with:
            <Accordion type="single" collapsible value={faqs[openIndex]?.question || faqs[0].question}>
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={faq.question}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>
                            <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index}
              className="clinic-card slide-up cursor-pointer hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => toggleFAQ(index)}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between text-lg text-foreground">
                  <span className="pr-4">{faq.question}</span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary" />
                    )}
                  </div>
                </CardTitle>
              </CardHeader>

              {openIndex === index && (
                <CardContent className="pt-0">
                  <div className="border-t border-border pt-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Additional Help */}
        <div className="text-center mt-16 fade-in">
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Ainda tem dúvidas?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe está sempre disponível para esclarecer todas as suas questões 
              e ajudar você a escolher o melhor tratamento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+5531999999999"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
              >
                📞 (31) 99999-9999
              </a>
              <a 
                href="https://wa.me/5531999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;