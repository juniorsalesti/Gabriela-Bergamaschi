import React from "react";
import { MessageCircle, Instagram, ArrowUp } from "lucide-react";
import {
  LOCATION_FULL,
  INSTAGRAM_URL,
  getWhatsAppUrl,
} from "../config/site";

interface FooterProps {
  whatsAppNumber: string;
}

export const Footer: React.FC<FooterProps> = ({ whatsAppNumber }) => {
  const whatsappUrl = getWhatsAppUrl(whatsAppNumber);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Pilates", href: "#pilates" },
    { label: "Fisioterapia", href: "#fisioterapia" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <footer className="bg-[#23424a] text-white pt-12 sm:pt-16 pb-24 sm:pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-white/10 items-start">
          {/* Brand & Location */}
          <div className="md:col-span-5 text-left">
            <span className="font-serif text-xl sm:text-2xl text-white font-normal tracking-wide">
              Gabriela Bergamaschi
            </span>
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#B9DCE5] mt-1 font-medium">
              Pilates &amp; Fisioterapia
            </p>
            <p className="text-xs sm:text-sm text-white/70 mt-2 sm:mt-3 font-light">
              {LOCATION_FULL}
            </p>
            <p className="text-xs text-white/50 mt-1 max-w-sm leading-relaxed">
              Atendimento individualizado com foco em consciência corporal, mobilidade, equilíbrio e bem-estar.
            </p>
          </div>

          {/* Navigation Links Mirror */}
          <div className="md:col-span-4 flex flex-col items-start md:items-center">
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm text-white/80">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-white transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end gap-3 sm:gap-4">
            <div className="flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar pelo WhatsApp"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#B9DCE5] hover:text-[#23424a] text-white flex items-center justify-center transition-all duration-300 active:scale-95"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Acessar Instagram"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#B9DCE5] hover:text-[#23424a] text-white flex items-center justify-center transition-all duration-300 active:scale-95"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Voltar ao topo"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#23424a] flex items-center justify-center transition-all duration-300 active:scale-95"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>

            <span className="text-xs text-white/50">Swiss Park, Campinas — SP</span>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Privacy */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-white/60 text-center sm:text-left">
          <p>© 2026 Gabriela Bergamaschi. Todos os direitos reservados.</p>
          <p className="text-white/40 text-center sm:text-right text-[11px] sm:text-xs">
            As informações disponibilizadas possuem caráter educativo e de bem-estar.
          </p>
        </div>
      </div>
    </footer>
  );
};
