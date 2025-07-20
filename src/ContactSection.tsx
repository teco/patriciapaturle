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
      content: "(31) 99999-9999",
      link: "tel:+5531999999999"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "contato@patriciapaturle.com",
      link: "mailto:contato@patriciapaturle.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localização",
      content: "Rua Exemplo, 123 – Belo Horizonte – MG",
      link: "https://maps.google.com"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horário",
      content: "Seg - Sex: 8h às 18h | Sáb: 8h às 12h",
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
        <div className="text-center mb-6 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-foreground">
            Agende Sua
            <span className="block font-bold text-primary">Consulta</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Entre em contato conosco para esclarecer dúvidas ou marcar seu horário. 
            Estamos aqui para ajudar você a alcançar seus objetivos estéticos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="clinic-card slide-up">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Envie uma mensagem</CardTitle>
              <CardDescription>
                Preencha o formulário abaixo e entraremos em contato em breve
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="form-label">Nome completo *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="form-label">Telefone</Label>
                    <Input
  id="phone"
  type="tel"
  placeholder="(31) 99999-9999"
  value={formData.phone}
  onChange={(e) => handleInputChange('phone', e.target.value)}
  className="form-input"
/>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="form-label">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="form-input"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="treatment" className="form-label">Tratamento de interesse</Label>
                  <select
                    id="treatment"
                    value={formData.treatment}
                    onChange={(e) => handleInputChange('treatment', e.target.value)}
                    className="form-input"
                  >
                    <option value="">Selecione um tratamento</option>
                    <option value="preenchimento-labial">Preenchimento Labial</option>
                    <option value="harmonizacao-facial">Harmonização Facial</option>
                    <option value="skinbooster">Skinbooster</option>
                    <option value="peeling">Peeling Químico</option>
                    <option value="botox">Botox</option>
                    <option value="fios-pdo">Fios de PDO</option>
                    <option value="laser">Laser Facial</option>
                    <option value="consulta">Apenas Consulta</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="form-label">Mensagem *</Label>
                  <Textarea
                    id="message"
                    placeholder="Conte-nos mais sobre seus objetivos e dúvidas..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                    className="form-input resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full btn-clinic bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * Campos obrigatórios. Respondemos em até 24 horas.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 fade-in delay-300">
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="clinic-card group hover:shadow-lg transition-all duration-300 scale-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <Card className="clinic-card">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Redes Sociais</CardTitle>
                <CardDescription>
                  Siga-nos para dicas e novidades
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <a 
                    href="https://instagram.com/SEUINSTAGRAM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full hover:bg-primary/20 hover:scale-110 transition-transform duration-200"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://wa.me/55SEUNUMERO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full hover:bg-primary/20 hover:scale-110 transition-transform duration-200"
                  >
                    <MessageCircle className="w-6 h-6" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="clinic-card bg-gradient-primary text-primary-foreground">
              <CardContent className="p-6 bg-primary">
                <h3 className="text-xl font-semibold mb-4">Atendimento Rápido</h3>
                <p className="mb-6 opacity-90">
                  Para agilizar seu atendimento, entre em contato diretamente:
                </p>
                <div className="space-y-3">
                  <a 
                    href="tel:+5531999999999"
                    className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Ligar agora: (31) 99942-8937</span>
                  </a>
                  <a 
                    href="https://wa.me/5531999428937"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
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