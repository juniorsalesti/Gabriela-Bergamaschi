import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { IMAGES } from "../config/site";

export const GaleriaVisual: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const galleryItems = [
    {
      src: IMAGES.studioReformer,
      alt: "Equipamentos profissionais de Pilates e ambiente sereno com iluminação natural",
      title: "Ambiente & Equipamentos",
      subtitle: "Aparelhos pensados para suporte, alinhamento biomecânico e precisão.",
      tag: "Estúdio Swiss Park",
    },
    {
      src: IMAGES.bodyAwareness,
      alt: "Supervisão atenta e condução cuidadosa dos movimentos",
      title: "Orientação Próxima & Postural",
      subtitle: "Atenção a cada detalhe do movimento com acompanhamento individualizado.",
      tag: "Consciência Corporal",
    },
    {
      src: IMAGES.hero,
      alt: "Movimento consciente em estúdio banhado por luz natural",
      title: "Fluidez, Equilíbrio & Controle",
      subtitle: "Exercícios que integram mente e corpo no seu próprio ritmo.",
      tag: "Prática Consciente",
    },
    {
      src: IMAGES.physiotherapy,
      alt: "Avaliação física com foco em funcionalidade e saúde corporal",
      title: "Cuidado Individualizado",
      subtitle: "Avaliação atenta da funcionalidade para uma rotina com mais conforto.",
      tag: "Fisioterapia Integrada",
    },
  ];

  const total = galleryItems.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay timer
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  // Touch handlers for mobile swipe
  const minSwipeDistance = 40;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section className="py-14 sm:py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8 sm:mb-14">
          <div className="max-w-2xl text-left">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-[#A9B9AE] mb-2 sm:mb-3 block">
              Ambiência e Movimento
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#315B65] font-normal leading-snug sm:leading-tight">
              Harmonia entre técnica e bem-estar.
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-[#777A78] leading-relaxed">
              Uma atmosfera acolhedora, com iluminação natural e equipamentos selecionados para que cada sessão seja um momento de reconexão com o seu corpo.
            </p>
          </div>

          {/* Carousel Controls (Desktop & Tablet) */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2.5 rounded-full border border-[#315B65]/15 text-[#315B65] hover:bg-[#FAF9F6] transition-colors"
              aria-label={isPlaying ? "Pausar carrossel" : "Iniciar carrossel automático"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={prevSlide}
              className="p-2.5 rounded-full border border-[#315B65]/15 text-[#315B65] hover:bg-[#315B65] hover:text-white transition-all shadow-2xs"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="p-2.5 rounded-full border border-[#315B65]/15 text-[#315B65] hover:bg-[#315B65] hover:text-white transition-all shadow-2xs"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport Container */}
        <div
          className="relative rounded-2xl sm:rounded-[2.5rem] overflow-hidden bg-[#FAF9F6] border border-[#315B65]/10 shadow-lg group select-none touch-pan-y"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          role="region"
          aria-roledescription="carousel"
          aria-label="Galeria visual de Pilates e Fisioterapia"
        >
          {/* Slides Track */}
          <div className="relative h-[320px] sm:h-[460px] lg:h-[520px] w-full overflow-hidden">
            {galleryItems.map((item, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
                  }`}
                  aria-hidden={!isActive}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${
                      isActive ? "scale-100" : "scale-105"
                    }`}
                    loading={idx === 0 ? "eager" : "lazy"}
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Scrim & Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#23424a]/90 via-[#23424a]/35 to-transparent flex flex-col justify-end p-5 sm:p-10 lg:p-14 text-white">
                    <div className="max-w-xl text-left">
                      <span className="inline-block text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-semibold text-[#B9DCE5] mb-1.5 sm:mb-2.5 bg-white/10 backdrop-blur-md px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full">
                        {item.tag}
                      </span>

                      <h3 className="font-serif text-xl sm:text-3xl md:text-4xl text-white font-normal tracking-wide">
                        {item.title}
                      </h3>

                      <p className="mt-1 sm:mt-2 text-xs sm:text-base text-white/85 font-light leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Floating Mobile Touch Prev/Next Arrows */}
          <div className="absolute inset-y-0 left-2 right-2 z-20 flex items-center justify-between pointer-events-none sm:hidden">
            <button
              type="button"
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white/85 backdrop-blur-md text-[#315B65] shadow-md pointer-events-auto flex items-center justify-center active:scale-95 transition-all"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white/85 backdrop-blur-md text-[#315B65] shadow-md pointer-events-auto flex items-center justify-center active:scale-95 transition-all"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Pagination Dots */}
          <div className="absolute bottom-3 right-4 sm:bottom-6 sm:right-8 z-20 flex items-center gap-1.5 sm:gap-2 bg-black/35 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
            {galleryItems.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex
                    ? "w-5 sm:w-6 h-1.5 sm:h-2 bg-[#B9DCE5]"
                    : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/50"
                }`}
                aria-label={`Ir para o slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Horizontal Scrollable Thumbnail Strip on Mobile */}
        <div className="flex sm:grid sm:grid-cols-4 gap-2 sm:gap-4 mt-3 sm:mt-6 overflow-x-auto no-scrollbar snap-x py-1">
          {galleryItems.map((item, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`snap-start shrink-0 w-44 sm:w-auto relative flex items-center gap-2.5 p-2 sm:p-3 rounded-xl sm:rounded-2xl text-left transition-all duration-300 border ${
                  isSelected
                    ? "bg-[#FAF9F6] border-[#315B65] shadow-xs"
                    : "bg-white border-[#315B65]/10 opacity-70 hover:opacity-100"
                }`}
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl overflow-hidden shrink-0 bg-[#B9DCE5]/20">
                  <img
                    src={item.src}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] sm:text-xs font-semibold text-[#315B65] truncate">
                    {item.title}
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-[#777A78] truncate">
                    {item.tag}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
