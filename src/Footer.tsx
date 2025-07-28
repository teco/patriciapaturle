import { Heart, Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-accent-foreground font-bold text-base md:text-lg">PP</span>
              </div>
              <div className="min-w-0">
                <div className="font-bold text-lg md:text-xl hyphens-auto break-words">PATRICIA PATURLE</div>
                <div className="text-sm md:text-base text-primary-foreground/80">dermatologista</div>
              </div>
            </div>
            
            <p className="text-sm md:text-base text-primary-foreground/80 leading-relaxed mb-6 max-w-md hyphens-auto break-words">
              Clínica de estética avançada especializada em dermatologia, tratamentos faciais e 
              preenchimento labial. Mais de 15 anos oferecendo resultados excepcionais com 
              segurança e naturalidade.
            </p>

            {/* Social Media */}
            <div className="flex gap-3 md:gap-4">
              <a 
                href="https://instagram.com/SEUINSTAGRAM"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[48px] min-h-[48px] w-12 h-12 md:w-14 md:h-14 bg-primary-foreground/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Seguir no Instagram"
              >
                <Instagram className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a 
                href="https://wa.me/55SEUNUMERO"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[48px] min-h-[48px] w-12 h-12 md:w-14 md:h-14 bg-primary-foreground/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Entrar em contato via WhatsApp"
              >
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base md:text-lg mb-4 md:mb-6 hyphens-auto break-words">Links Rápidos</h3>
            <ul className="space-y-2 md:space-y-3">
              {[
                { label: "Home", href: "home" },
                { label: "Tratamentos", href: "treatments" },
                { label: "Sobre", href: "about" },
                { label: "Serviços", href: "services" },
                { label: "FAQ", href: "faq" },
                { label: "Blog", href: "blog" },
                { label: "Contato", href: "contact" }
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm md:text-base text-primary-foreground/80 hover:text-accent transition-colors duration-200 underline-animation min-h-[48px] flex items-center hyphens-auto break-words"
                    aria-label={`Navegar para seção ${link.label}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-base md:text-lg mb-4 md:mb-6 hyphens-auto break-words">Contato</h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 text-accent flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <a 
                    href="tel:+5531999999999"
                    className="text-sm md:text-base text-primary-foreground/80 hover:text-accent transition-colors duration-200 min-h-[48px] flex items-center hyphens-auto break-words"
                    aria-label="Ligar para (31) 99999-9999"
                  >
                    (31) 99999-9999
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 text-accent flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <a 
                    href="mailto:contato@patriciapaturle.com"
                    className="text-sm md:text-base text-primary-foreground/80 hover:text-accent transition-colors duration-200 min-h-[48px] flex items-center hyphens-auto break-words"
                    aria-label="Enviar email para contato@patriciapaturle.com"
                  >
                    contato@patriciapaturle.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-accent flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <address className="text-sm md:text-base text-primary-foreground/80 not-italic hyphens-auto break-words leading-relaxed">
                    Rua Exemplo, 123<br />
                    Belo Horizonte – MG<br />
                    CEP: 30000-000
                  </address>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-4 md:mt-6 p-3 md:p-4 bg-primary-foreground/5 rounded-lg">
              <h4 className="font-medium mb-2 text-sm md:text-base hyphens-auto break-words">Horário de Funcionamento</h4>
              <div className="text-xs md:text-sm text-primary-foreground/80 space-y-1 leading-relaxed">
                <div className="hyphens-auto break-words">Segunda - Sexta: 8h às 18h</div>
                <div className="hyphens-auto break-words">Sábado: 8h às 12h</div>
                <div className="hyphens-auto break-words">Domingo: Fechado</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 md:mt-12 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            <div className="text-xs md:text-sm text-primary-foreground/80 text-center md:text-left hyphens-auto break-words">
              © {currentYear} Dra. Patricia Paturle. Todos os direitos reservados.
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 text-xs md:text-sm">
              <a 
                href="/politica-de-privacidade" 
                className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 min-h-[48px] flex items-center justify-center hyphens-auto break-words"
                aria-label="Ler Política de Privacidade"
              >
                Política de Privacidade
              </a>
              <a 
                href="/termos-de-uso" 
                className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 min-h-[48px] flex items-center justify-center hyphens-auto break-words"
                aria-label="Ler Termos de Uso"
              >
                Termos de Uso
              </a>
            </div>
          </div>

          {/* Made with Love */}
          <div className="text-center mt-4 md:mt-6 pt-4 md:pt-6 border-t border-primary-foreground/10">
            <p className="text-primary-foreground/60 text-xs md:text-sm flex items-center justify-center gap-2 hyphens-auto break-words">
              Feito com <Heart className="w-3 h-3 md:w-4 md:h-4 text-accent flex-shrink-0" /> para sua beleza natural
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;