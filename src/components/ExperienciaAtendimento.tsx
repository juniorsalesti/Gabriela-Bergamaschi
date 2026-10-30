import React from "react";
import { MessageSquareText, ClipboardCheck, Compass } from "lucide-react";

export const ExperienciaAtendimento: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Primeiro contato",
      description: "Conte um pouco sobre suas necessidades e seus objetivos.",
      icon: MessageSquareText,
    },
    {
      number: "02",
      title: "Avaliação individualizada",
      description:
        "Entenda quais aspectos do seu movimento e bem-estar merecem atenção.",
      icon: ClipboardCheck,
    },
    {
      number: "03",
      title: "Orientação profissional",
      description:
        "Conheça as possibilidades de cuidado adequadas à sua avaliação e aos seus objetivos.",
      icon: Compass,
    },
  ];

  return (
    <section className="py-14 sm:py-24 md:py-32 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-20">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-[#A9B9AE] mb-2 sm:mb-3 block">
            Jornada do paciente
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#315B65] font-normal leading-snug sm:leading-tight">
            Um cuidado pensado para você.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-[#777A78] leading-relaxed">
            Cada etapa é conduzida com atenção exclusiva para acolher sua história e seu ritmo.
          </p>
        </div>

        {/* Steps Grid with connector lines */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div
            className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-[1.5px] bg-gradient-to-r from-transparent via-[#315B65]/20 to-transparent -translate-y-8 pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="relative flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#315B65]/10 shadow-xs hover:shadow-md transition-all duration-300 group"
                >
                  {/* Step Large Number Badge */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-[#FAF9F6] border border-[#315B65]/15 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-105 group-hover:bg-[#B9DCE5]/30 transition-all duration-300">
                    <span className="font-serif text-xl sm:text-2xl text-[#315B65] font-bold">
                      {step.number}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <Icon className="w-4 h-4 text-[#315B65]/70" />
                    <h3 className="font-serif text-xl sm:text-2xl text-[#315B65] font-normal">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-base text-[#777A78] leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
