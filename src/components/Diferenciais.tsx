import React from "react";
import { Clock, HeartHandshake, MapPin } from "lucide-react";

export const Diferenciais: React.FC = () => {
  const items = [
    {
      icon: Clock,
      highlight: "+6 anos",
      description: "Experiência em Pilates",
    },
    {
      icon: HeartHandshake,
      highlight: "Cuidado individualizado",
      description: "Atenção às necessidades de cada pessoa",
    },
    {
      icon: MapPin,
      highlight: "Swiss Park",
      description: "Atendimento em Campinas, SP",
    },
  ];

  return (
    <section className="border-y border-[#315B65]/10 bg-[#B9DCE5]/15 py-8 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 md:divide-x md:divide-[#315B65]/15">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 sm:gap-5 md:px-8 first:pl-0 last:pr-0 justify-start md:justify-center p-3 rounded-2xl bg-white/40 md:bg-transparent border border-[#315B65]/5 md:border-0"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white border border-[#315B65]/10 flex items-center justify-center shrink-0 shadow-2xs">
                  <Icon className="w-5 h-5 text-[#315B65]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-serif text-lg sm:text-2xl text-[#315B65] font-normal leading-tight">
                    {item.highlight}
                  </span>
                  <span className="text-xs sm:text-sm text-[#777A78] mt-0.5 sm:mt-1 font-medium">
                    {item.description}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
