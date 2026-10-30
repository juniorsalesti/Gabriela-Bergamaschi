import React from "react";
import { IMAGES } from "../config/site";
import { Compass, Move, Activity } from "lucide-react";

export const PilatesSection: React.FC = () => {
  const cards = [
    {
      title: "Consciência corporal",
      description:
        "Desenvolva uma percepção maior dos seus movimentos e da maneira como utiliza o corpo no dia a dia.",
      image: IMAGES.bodyAwareness,
      alt: "Exercício de Pilates focado em alinhamento postural e consciência do movimento",
      icon: Compass,
      step: "01",
    },
    {
      title: "Mobilidade e equilíbrio",
      description:
        "Trabalhe mobilidade, controle corporal e equilíbrio respeitando suas necessidades e possibilidades.",
      image: IMAGES.hero,
      alt: "Prática de mobilidade no aparelho reformer",
      icon: Move,
      step: "02",
    },
    {
      title: "Força e bem-estar",
      description:
        "Construa uma rotina de movimento que favoreça a funcionalidade e o cuidado contínuo com o corpo.",
      image: IMAGES.studioReformer,
      alt: "Estúdio de Pilates com aparelhos reformer e ambiente de bem-estar",
      icon: Activity,
      step: "03",
    },
  ];

  return (
    <section id="pilates" className="py-14 sm:py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-16 text-left">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-[#A9B9AE] mb-2 sm:mb-3 block">
            A prática do Pilates
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#315B65] font-normal leading-snug sm:leading-tight">
            Movimento com propósito.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-[#777A78] font-normal leading-relaxed">
            Descubra uma forma mais consciente de cuidar do seu corpo.
          </p>
        </div>

        {/* Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col bg-[#FAF9F6] border border-[#315B65]/10 rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Card Image Container */}
                <div className="relative h-48 sm:h-64 w-full overflow-hidden bg-[#B9DCE5]/20">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Step index */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold text-[#315B65] tracking-wider shadow-2xs">
                    {card.step}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#B9DCE5]/30 text-[#315B65] flex items-center justify-center mb-3 sm:mb-4">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#315B65] font-normal mb-2 sm:mb-3">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-base text-[#777A78] leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#315B65]/10 flex items-center text-[11px] sm:text-xs font-semibold text-[#315B65] tracking-wide">
                    <span>Individualizado ao seu ritmo</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
