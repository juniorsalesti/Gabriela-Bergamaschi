import React from "react";
import { MessageCircle, ArrowDown, MapPin, Sparkles } from "lucide-react";
import { IMAGES, LOCATION_LABEL, getWhatsAppUrl } from "../config/site";

interface HeroProps {
  whatsAppNumber: string;
}

export const Hero: React.FC<HeroProps> = ({ whatsAppNumber }) => {
  const whatsappUrl = getWhatsAppUrl(whatsAppNumber);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative pt-24 pb-14 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-[#FAF9F6]"
    >
      {/* Background organic light shape */}
      <div
        className="absolute -top-24 right-[-10%] w-[380px] sm:w-[550px] h-[380px] sm:h-[550px] rounded-full bg-[#B9DCE5]/25 blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-[#A9B9AE]/15 blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Kicker badge / metadata */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3 sm:mb-5 text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-[#315B65]/90">
              <span>Pilates</span>
              <span className="text-[#A9B9AE]" aria-hidden="true">•</span>
              <span>Fisioterapia</span>
              <span className="text-[#A9B9AE]" aria-hidden="true">•</span>
              <span>Bem-estar</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-[2.1rem] sm:text-5xl md:text-6xl lg:text-[4rem] text-[#315B65] font-normal leading-[1.15] sm:leading-[1.12] tracking-[-0.02em] max-w-2xl text-balance">
              Seu corpo merece se mover com{" "}
              <span className="italic font-normal text-[#23424a] underline decoration-[#B9DCE5] decoration-wavy decoration-2 underline-offset-4 sm:underline-offset-6">
                mais leveza.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-6 text-base sm:text-xl text-[#315B65]/90 font-medium leading-relaxed max-w-xl">
              Há mais de 6 anos ajudando pessoas a desenvolver movimento, equilíbrio e qualidade de vida por meio do Pilates.
            </p>

            {/* Complementary Text */}
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-[#777A78] leading-relaxed max-w-xl">
              Um cuidado individualizado para você se movimentar com mais confiança e construir uma rotina com mais bem-estar.
            </p>

            {/* Action Buttons: Stacked on mobile with 48px touch targets */}
            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto min-h-[48px] px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#315B65] hover:bg-[#23424a] active:scale-98 transition-all duration-300 shadow-md hover:shadow-lg group"
              >
                <MessageCircle className="w-4 h-4 text-[#B9DCE5] group-hover:scale-110 transition-transform" />
                <span>Agendar uma avaliação</span>
              </a>

              <button
                type="button"
                onClick={() => scrollToSection("#sobre")}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[48px] px-6 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-medium text-[#315B65] border border-[#315B65]/20 hover:border-[#315B65] hover:bg-white/70 active:bg-white transition-all duration-300"
              >
                <span>Conhecer meu trabalho</span>
                <ArrowDown className="w-3.5 h-3.5 opacity-60" />
              </button>
            </div>

            {/* Location Trust Indicator */}
            <div className="mt-6 sm:mt-8 flex items-center gap-2 text-xs font-medium text-[#777A78]">
              <MapPin className="w-3.5 h-3.5 text-[#315B65]" />
              <span className="tracking-wide">{LOCATION_LABEL}</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Studio Composition */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-4 lg:mt-0">
            {/* Organic backdrop shape */}
            <div
              className="absolute -inset-3 sm:-inset-6 bg-gradient-to-tr from-[#B9DCE5]/40 to-[#A9B9AE]/30 rounded-[2.5rem] sm:rounded-[3.5rem] -rotate-2 transform-gpu"
              aria-hidden="true"
            />

            {/* Image Container with Editorial Arch / Radius */}
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-xl bg-white border border-white/60">
              <img
                src={IMAGES.hero}
                alt="Mulher praticando Pilates com movimentos conscientes e fluidos em estúdio iluminado"
                className="w-full h-[290px] sm:h-[420px] lg:h-[500px] object-cover object-center transform hover:scale-102 transition-transform duration-700 ease-out"
                loading="eager"
                referrerPolicy="no-referrer"
              />

              {/* Floating Editorial Badge (Mobile Optimized) */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-auto bg-[#FAF9F6]/95 backdrop-blur-md border border-white/80 py-2.5 px-3.5 sm:py-3 sm:px-4 rounded-xl sm:rounded-2xl shadow-lg flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#315B65] text-[#FAF9F6] flex items-center justify-center shrink-0">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B9DCE5]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-semibold text-[#315B65] leading-tight">
                    Mais de 6 anos de experiência
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-[#777A78] leading-tight mt-0.5">
                    em Pilates &amp; Movimento
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
