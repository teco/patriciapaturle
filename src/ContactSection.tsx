import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle, Send, } from "lucide-react";
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    treatment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone",
      content: "(31) 99947-4866",
      link: "tel:+5531999474866"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "contato@patriciapaturle.com.br",
      link: "mailto:contato@patriciapaturle.com.br"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localização",
      content: "Avenida Getúlio Vargas, 1671/3º andar – Belo Horizonte – MG",
      link: "https://maps.app.goo.gl/sMk2ZBmbRhfQkWCf9?g_st=ipc"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horário",
      content: "Seg - Sex: 8h às 18h",
      link: null
    }
  ];

  const validateForm = () => {
    const { name, email, message } = formData;
    
    if (name.length < 2) {
      return { valid: false, message: 'Nome deve ter pelo menos 2 caracteres' };
    }
    
    if (!email.includes('@') || !email.includes('.')) {
      return { valid: false, message: 'Email inválido' };
    }
    
    if (message.length < 10) {
      return { valid: false, message: 'Mensagem deve ter pelo menos 10 caracteres' };
    }
    
    return { valid: true };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = validateForm();
    if (!validation.valid) {
      toast({
        title: "Erro no formulário",
        description: validation.message,
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve. Obrigado!",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        treatment: ''
      });
      
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato por telefone.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-10 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 fade-in px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-foreground">
            Agende Sua
            <span className="block font-bold text-primary">Consulta</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Entre em contato conosco para esclarecer dúvidas ou marcar seu horário. 
            Estamos aqui para ajudar você a alcançar seus objetivos estéticos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card className="clinic-card slide-up">
            <CardHeader className="p-4 md:p-6">
              <CardTitle className="text-xl md:text-2xl text-foreground hyphens-auto break-words">Envie uma mensagem</CardTitle>
              <CardDescription className="text-sm md:text-base hyphens-auto break-words leading-relaxed">
                Preencha o formulário abaixo e entraremos em contato em breve
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="form-label text-sm md:text-base font-medium">Nome completo *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="form-input min-h-[48px] p-3 text-sm md:text-base hyphens-auto break-words"
                      aria-describedby="name-help"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="form-label text-sm md:text-base font-medium">Telefone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(31) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="form-input min-h-[48px] p-3 text-sm md:text-base"
                      aria-describedby="phone-help"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="form-label text-sm md:text-base font-medium">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="form-input min-h-[48px] p-3 text-sm md:text-base hyphens-auto break-words"
                    aria-describedby="email-help"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="treatment" className="form-label text-sm md:text-base font-medium">Tratamento de interesse</Label>
                  <select
                    id="treatment"
                    value={formData.treatment}
                    onChange={(e) => handleInputChange('treatment', e.target.value)}
                    className="form-input min-h-[48px] p-3 text-sm md:text-base w-full rounded-md border border-input bg-background ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    aria-describedby="treatment-help"
                  >
                    <option value="">Selecione um tratamento</option>
                    <option value="toxina-botulinica">Toxina Botulínica (Botox)</option>
                    <option value="preenchimento-acido-hialuronico">Preenchimento com Ácido Hialurônico</option>
                    <option value="fios-sustentacao">Fios de Sustentação</option>
                    <option value="ultraformer">Ultraformer (Ultrassom Micro e Macrofocado)</option>
                    <option value="volnewmer">Volnewmer (Laser Fracionado)</option>
                    <option value="campo-eletromagnetico">Campo Eletromagnético</option>
                    <option value="scizer">Scizer (Ultrassom para Gordura Localizada)</option>
                    <option value="luz-intensa-pulsada">Luz Intensa Pulsada (LIP)</option>
                    <option value="lipo-enzimatica">Lipo Enzimática</option>
                    <option value="terapia-capilar">Terapia Capilar</option>
                    <option value="peeling-coreano">Peeling Coreano Lhala Peel</option>
                    <option value="clareamento-pele">Clareamento de Pele</option>
                    <option value="tratamento-estrias">Tratamento para Estrias</option>
                    <option value="sculptra">Bioestimulador de Colágeno (Sculptra)</option>
                    <option value="apenas-avaliacao">Apenas Avaliação</option>
                    <option value="apenas-consulta">Apenas Consulta</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="form-label text-sm md:text-base font-medium">Mensagem *</Label>
                  <Textarea
                    id="message"
                    placeholder="Conte-nos mais sobre seus objetivos e dúvidas..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                    className="form-input resize-none min-h-[120px] p-3 text-sm md:text-base hyphens-auto break-words leading-relaxed"
                    aria-describedby="message-help"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full btn-clinic bg-primary text-primary-foreground hover:bg-primary/90 min-h-[48px] text-sm md:text-base font-medium"
                  aria-label={isSubmitting ? "Enviando mensagem..." : "Enviar mensagem de contato"}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>

                <p className="text-xs md:text-sm text-muted-foreground text-center hyphens-auto break-words leading-relaxed">
                  * Campos obrigatórios. Respondemos em até 24 horas.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-4 md:space-y-6 slide-up delay-200">
            <div className="grid gap-3 md:gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="clinic-card hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="text-primary flex-shrink-0 mt-1">
                        {info.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base hyphens-auto break-words">{info.title}</h3>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm md:text-base hyphens-auto break-words leading-relaxed min-h-[48px] flex items-center"
                            target={info.link.startsWith('http') ? '_blank' : '_self'}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            aria-label={`${info.title}: ${info.content}`}
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground text-sm md:text-base hyphens-auto break-words leading-relaxed">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <Card className="clinic-card">
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-base md:text-lg text-foreground hyphens-auto break-words">Redes Sociais</CardTitle>
                <CardDescription className="text-sm md:text-base hyphens-auto break-words leading-relaxed">
                  Siga-nos para dicas e novidades
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <div className="flex gap-3 md:gap-4">
                  <a 
                    href="https://instagram.com/patriciapaturle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center min-w-[48px] min-h-[48px] w-12 h-12 md:w-14 md:h-14 bg-primary/10 text-primary rounded-full hover:bg-primary/20 hover:scale-110 transition-transform duration-200"
                    aria-label="Seguir no Instagram"
                  >
                    <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                  <a 
                    href="https://wa.me/5531999474866"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center min-w-[48px] min-h-[48px] w-12 h-12 md:w-14 md:h-14 bg-primary/10 text-primary rounded-full hover:bg-primary/20 hover:scale-110 transition-transform duration-200"
                    aria-label="Entrar em contato via WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="clinic-card bg-gradient-primary text-primary-foreground">
              <CardContent className="p-4 md:p-6 bg-primary">
                <h3 className="text-lg md:text-xl font-semibold mb-4 hyphens-auto break-words">Atendimento Rápido</h3>
                <p className="mb-4 md:mb-6 opacity-90 text-sm md:text-base hyphens-auto break-words leading-relaxed">
                  Para agilizar seu atendimento, entre em contato diretamente:
                </p>
                <div className="space-y-3">
                  <a 
                    href="tel:+5531999474866"
                    className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200 min-h-[48px] text-sm md:text-base"
                    aria-label="Ligar agora para (31) 99947-4866"
                  >
                    <Phone className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                    <span className="hyphens-auto break-words">Ligar agora: (31) 99947-4866</span>
                  </a>
                  <a 
                    href="https://wa.me/5531999474866"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200 min-h-[48px] text-sm md:text-base"
                    aria-label="Entrar em contato via WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                    <span className="hyphens-auto break-words">WhatsApp</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;