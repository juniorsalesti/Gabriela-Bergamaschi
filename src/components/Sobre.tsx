import React from "react";
import { IMAGES, LOCATION_FULL } from "../config/site";
import { Quote } from "lucide-react";

export const Sobre: React.FC = () => {
  return (
    <section id="sobre" className="py-14 sm:py-24 md:py-32 bg-[#FAF9F6] relative overflow-hidden">
      {/* Subtle background decoration */}
      <div
        className="absolute top-1/2 left-[-12%] w-[320px] sm:w-[450px] h-[320px] sm:h-[450px] rounded-full bg-[#B9DCE5]/20 blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait of Gabriela */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-md">
              {/* Organic decorative border accent */}
              <div
                className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-full h-full rounded-[2rem] sm:rounded-[2.5rem] border-2 border-[#A9B9AE]/40 -z-0"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-3/4 h-3/4 rounded-[2rem] sm:rounded-[2.5rem] bg-[#B9DCE5]/20 -z-0"
                aria-hidden="true"
              />

              <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-xl bg-white border border-white/80">
                <img
                  src={IMAGES.portrait}
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (target.src !== IMAGES.portraitUrl) {
                      target.src = IMAGES.portraitUrl;
                    }
                  }}
                  alt="Gabriela Bergamaschi, instrutora de Pilates e fisioterapeuta"
                  className="w-full h-[360px] sm:h-[480px] object-cover object-[center_30%] hover:scale-102 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-[#23424a]/85 via-[#23424a]/45 to-transparent text-white">
                  <p className="font-serif text-base sm:text-lg tracking-wide">Gabriela Bergamaschi</p>
                  <p className="text-[10px] sm:text-xs text-white/80 tracking-widest uppercase mt-0.5">
                    {LOCATION_FULL}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center text-left">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-[#A9B9AE] mb-2 sm:mb-3">
              Sobre a profissional
            </span>

            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#315B65] font-normal leading-snug sm:leading-tight tracking-[-0.01em]">
              Prazer, sou Gabriela Bergamaschi.
            </h2>

            <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-sm sm:text-lg text-[#777A78] leading-relaxed">
              <p>
                Meu trabalho é ajudar você a encontrar mais equilíbrio, consciência corporal e qualidade de vida por meio do movimento.
              </p>
              <p>
                Com mais de 6 anos de experiência em Pilates, acredito que cada pessoa merece um olhar individualizado, respeitando suas necessidades, seus objetivos e seu próprio ritmo.
              </p>
              <p>
                Quero ajudar você a construir uma relação mais positiva com o movimento, com cuidado, atenção e profissionalismo.
              </p>
            </div>

            {/* Featured Quote */}
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#315B65]/15 flex items-start gap-3 sm:gap-4">
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#B9DCE5] shrink-0 rotate-180" />
              <blockquote className="font-serif text-lg sm:text-2xl text-[#315B65] italic leading-snug">
                “Movimentar-se melhor é também cuidar de você.”
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
