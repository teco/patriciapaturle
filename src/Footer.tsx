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
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">PP</span>
              </div>
              <div>
                <div className="font-bold text-xl">PATRICIA PATURLE</div>
                <div className="text-sm text-primary-foreground/80">dermatologista</div>
              </div>
            </div>
            
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              Clínica de estética avançada especializada em dermatologia, tratamentos faciais e 
              preenchimento labial. Mais de 15 anos oferecendo resultados excepcionais com 
              segurança e naturalidade.
            </p>

            {/* Social Media */}
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/SEUINSTAGRAM"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/55SEUNUMERO"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
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
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 underline-animation"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 text-accent" />
                <div>
                  <a 
                    href="tel:+5531999999999"
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    (31) 99999-9999
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 text-accent" />
                <div>
                  <a 
                    href="mailto:contato@patriciapaturle.com"
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    contato@patriciapaturle.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-accent" />
                <div>
                  <address className="text-primary-foreground/80 not-italic">
                    Rua Exemplo, 123<br />
                    Belo Horizonte – MG<br />
                    CEP: 30000-000
                  </address>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6 p-4 bg-primary-foreground/5 rounded-lg">
              <h4 className="font-medium mb-2">Horário de Funcionamento</h4>
              <div className="text-sm text-primary-foreground/80 space-y-1">
                <div>Segunda - Sexta: 8h às 18h</div>
                <div>Sábado: 8h às 12h</div>
                <div>Domingo: Fechado</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-primary-foreground/80 text-sm">
              © {currentYear} Dra. Patricia Paturle. Todos os direitos reservados.
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="/politica-de-privacidade" className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                Política de Privacidade
              </a>
              <a href="/termos-de-uso" className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                Termos de Uso
              </a>
            </div>
          </div>

          {/* Made with Love */}
          <div className="text-center mt-6 pt-6 border-t border-primary-foreground/10">
            <p className="text-primary-foreground/60 text-sm flex items-center justify-center gap-2">
              Feito com <Heart className="w-4 h-4 text-accent" /> para sua beleza natural
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;