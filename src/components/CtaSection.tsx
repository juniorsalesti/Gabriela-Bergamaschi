import React from "react";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { getWhatsAppUrl } from "../config/site";

interface CtaSectionProps {
  whatsAppNumber: string;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ whatsAppNumber }) => {
  const whatsappUrl = getWhatsAppUrl(whatsAppNumber);

  return (
    <section className="py-14 sm:py-24 md:py-32 bg-[#FAF9F6] relative overflow-hidden text-center">
      {/* Decorative subtle concentric rings */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] sm:w-[700px] h-[480px] sm:h-[700px] rounded-full border border-[#B9DCE5]/40 pointer-events-none -z-0"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[950px] h-[650px] sm:h-[950px] rounded-full border border-[#A9B9AE]/20 pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10">
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-[#A9B9AE] mb-2 sm:mb-4 block">
          Agende sua avaliação
        </span>

        <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#315B65] font-normal leading-snug sm:leading-[1.15] tracking-[-0.01em] text-balance">
          Que tal começar a cuidar mais de você?
        </h2>

        <p className="mt-4 sm:mt-6 text-sm sm:text-xl text-[#777A78] max-w-xl mx-auto leading-relaxed">
          Dê o primeiro passo para uma rotina com mais movimento, equilíbrio e qualidade de vida.
        </p>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-10 flex flex-col items-center w-full">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto min-h-[48px] px-8 py-3.5 sm:px-9 sm:py-4 rounded-full text-xs sm:text-base font-semibold uppercase tracking-wider text-white bg-[#315B65] hover:bg-[#23424a] active:scale-98 transition-all duration-300 shadow-xl group"
          >
            <MessageCircle className="w-5 h-5 text-[#B9DCE5] group-hover:scale-110 transition-transform" />
            <span>Agendar pelo WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 text-white/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-[#777A78]">
            Entre em contato para conhecer as opções de atendimento.
          </p>
        </div>
      </div>
    </section>
  );
};
