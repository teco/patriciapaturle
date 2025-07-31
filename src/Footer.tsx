import { Heart, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="flex flex-col items-center text-center">
          {/* Brand Section */}
          <div className="mb-4">
            <div className="flex items-center justify-center space-x-3 md:space-x-4 mb-3">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-accent-foreground font-bold text-base md:text-lg">PP</span>
              </div>
              <div className="min-w-0">
                <div className="font-bold text-lg md:text-xl hyphens-auto break-words">PATRICIA PATURLE</div>
                <div className="text-sm md:text-base text-primary-foreground/80">Dermatologista CRM 34274</div>
              </div>
            </div>
            
            <p className="text-base md:text-lg lg:text-xl text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto break-words">
            Clínica de estética avançada, referência em dermatologia, tratamentos faciais e preenchimento labial. 
            Mais de 25 anos de experiência entregando resultados naturais, sofisticados e seguros.
            </p>
          </div>

          {/* Social Media */}
          <div className="mb-4">
            <a 
              href="https://instagram.com/patriciapaturle"
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[48px] min-h-[48px] w-12 h-12 md:w-14 md:h-14 bg-primary-foreground/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors duration-200"
              aria-label="Seguir no Instagram"
            >
              <Instagram className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>

          {/* Copyright & Made with Love */}
          <div className="border-t border-primary-foreground/20 pt-4 w-full">
            <div className="text-xs md:text-sm text-primary-foreground/80 mb-3">
              {currentYear} Dra. Patricia Paturle. Todos os direitos reservados.
            </div>
            
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