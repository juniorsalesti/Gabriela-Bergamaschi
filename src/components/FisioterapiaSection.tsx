import React from "react";
import { MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { IMAGES, getWhatsAppUrl } from "../config/site";

interface FisioterapiaProps {
  whatsAppNumber: string;
}

export const FisioterapiaSection: React.FC<FisioterapiaProps> = ({ whatsAppNumber }) => {
  const whatsappUrl = getWhatsAppUrl(
    whatsAppNumber,
    "Olá, Gabriela! Gostaria de saber mais sobre o atendimento de Fisioterapia e avaliação do movimento."
  );

  return (
    <section
      id="fisioterapia"
      className="py-14 sm:py-24 md:py-32 bg-[#315B65] text-white relative overflow-hidden"
    >
      {/* Decorative ambient curves */}
      <div
        className="absolute -top-32 -right-32 w-[380px] sm:w-[600px] h-[380px] sm:h-[600px] rounded-full bg-[#B9DCE5]/10 blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-[#A9B9AE]/10 blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Text and CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-[#B9DCE5] mb-2 sm:mb-3 block">
              Fisioterapia &amp; Funcionalidade
            </span>

            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-white font-normal leading-snug sm:leading-tight tracking-[-0.01em]">
              Cuidado que começa com você.
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-xl text-[#FAF9F6]/90 font-light leading-relaxed max-w-xl">
              A fisioterapia pode ajudar você a compreender melhor suas limitações, trabalhar a funcionalidade e buscar uma rotina com mais conforto e autonomia.
            </p>

            <p className="mt-3 sm:mt-4 text-xs sm:text-base text-[#FAF9F6]/75 leading-relaxed max-w-xl">
              Cada pessoa tem uma história, necessidades e objetivos diferentes. Por isso, o cuidado deve considerar sua individualidade e avaliação profissional.
            </p>

            {/* Quality marker */}
            <div className="mt-6 sm:mt-8 flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-[#B9DCE5]">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#B9DCE5] shrink-0" />
              <span>Avaliação cuidadosa para direcionar seu plano de cuidado</span>
            </div>

            {/* CTA Button */}
            <div className="mt-6 sm:mt-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto min-h-[48px] px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#315B65] bg-[#FAF9F6] hover:bg-[#B9DCE5] active:scale-98 transition-all duration-300 shadow-lg group"
              >
                <MessageCircle className="w-4 h-4 text-[#315B65]" />
                <span>Quero saber mais</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Photography with contrasting frame */}
          <div className="lg:col-span-5 flex justify-center mt-4 lg:mt-0">
            <div className="relative w-full max-w-xs sm:max-w-md">
              {/* Delicate accent ring */}
              <div
                className="absolute -inset-2.5 sm:-inset-3 rounded-[2.2rem] sm:rounded-[3rem] border border-[#B9DCE5]/20 -z-0 pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20 bg-[#23424a]">
                <img
                  src={IMAGES.physiotherapy}
                  alt="Atendimento e avaliação de fisioterapia com foco em postura e funcionalidade"
                  className="w-full h-[280px] sm:h-[440px] object-cover hover:scale-103 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-[#1b3238]/90 via-[#1b3238]/40 to-transparent">
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#B9DCE5] font-semibold">
                    Avaliação Individual
                  </p>
                  <p className="text-xs sm:text-sm text-white font-medium mt-0.5">
                    Movimento funcional e respeito aos seus limites
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
