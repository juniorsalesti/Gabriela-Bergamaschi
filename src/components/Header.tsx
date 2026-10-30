import React, { useState, useEffect } from "react";
import { MessageCircle, Menu, X, ArrowUpRight, MapPin } from "lucide-react";
import { LOCATION_LABEL, getWhatsAppUrl } from "../config/site";

interface HeaderProps {
  whatsAppNumber: string;
  onOpenSettings?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ whatsAppNumber }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Pilates", href: "#pilates" },
    { label: "Fisioterapia", href: "#fisioterapia" },
    { label: "Contato", href: "#contato" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsappLink = getWhatsAppUrl(whatsAppNumber);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? "bg-[#FAF9F6]/95 backdrop-blur-md shadow-xs border-b border-[#315B65]/10 py-3 sm:py-3.5"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
          {/* Brand Zone */}
          <a
            href="#inicio"
            onClick={() => setMobileMenuOpen(false)}
            className="group flex flex-col tracking-tight text-left select-none max-w-[240px] sm:max-w-none"
          >
            <span className="font-serif text-lg sm:text-2xl text-[#315B65] font-semibold leading-tight group-hover:text-[#23424a] transition-colors truncate">
              Gabriela Bergamaschi
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#777A78] font-medium">
              Pilates &amp; Fisioterapia
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-medium text-[#777A78]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="relative py-1 text-[#315B65]/80 hover:text-[#315B65] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#315B65] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Primary Action Button (Desktop) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#315B65] hover:bg-[#23424a] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Agendar avaliação</span>
            </a>
          </div>

          {/* Mobile Right Controls: Quick WhatsApp icon + Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar via WhatsApp"
              className="w-10 h-10 rounded-full bg-[#315B65] text-white flex items-center justify-center shadow-xs active:scale-95 transition-transform"
            >
              <MessageCircle className="w-4 h-4 text-[#B9DCE5]" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 flex items-center justify-center text-[#315B65] hover:text-[#23424a] rounded-xl active:bg-[#315B65]/10 focus:outline-none focus:ring-2 focus:ring-[#315B65]/20"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#315B65]/10 bg-[#FAF9F6] px-5 py-6 shadow-2xl animate-in slide-in-from-top duration-300 max-h-[calc(100vh-68px)] overflow-y-auto">
            <nav className="flex flex-col gap-1 text-base font-medium text-[#315B65]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="py-3 px-3 rounded-xl hover:bg-[#315B65]/5 active:bg-[#315B65]/10 flex items-center justify-between text-[#315B65] transition-colors"
                >
                  <span className="font-serif text-lg">{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-40" />
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-[#315B65]/10 flex flex-col gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2.5 w-full min-h-[48px] py-3.5 px-6 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#315B65] hover:bg-[#23424a] active:scale-98 transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-[#B9DCE5]" />
                  <span>Agendar avaliação</span>
                  <ArrowUpRight className="w-4 h-4 opacity-70" />
                </a>

                <div className="flex items-center justify-center gap-2 text-xs text-[#777A78] py-1">
                  <MapPin className="w-3.5 h-3.5 text-[#315B65]" />
                  <span>{LOCATION_LABEL}</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Backdrop overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-xs md:hidden"
          aria-hidden="true"
        />
      )}
    </>
  );
};
