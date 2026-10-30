import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { getWhatsAppUrl } from "../config/site";

interface FloatingWhatsAppProps {
  whatsAppNumber: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  whatsAppNumber,
}) => {
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsappUrl = getWhatsAppUrl(whatsAppNumber);

  return (
    <aside
      aria-label="Atendimento rápido via WhatsApp"
      className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] right-4 sm:bottom-6 sm:right-6 z-40 flex items-end gap-3 select-none"
    >
      {/* Gentle Floating Tooltip Banner (Desktop/Tablet only to avoid mobile clutter) */}
      {showTooltip && (
        <div className="hidden md:flex items-center gap-2 bg-[#FAF9F6] text-[#315B65] border border-[#315B65]/15 py-2 px-3.5 rounded-2xl shadow-lg animate-in fade-in slide-in-from-right duration-300">
          <div className="flex flex-col text-left">
            <span className="text-xs font-semibold leading-tight">
              Agende pelo WhatsApp
            </span>
            <span className="text-[11px] text-[#777A78] leading-tight">
              Fale diretamente com Gabriela
            </span>
          </div>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="p-1 text-[#777A78] hover:text-[#315B65] rounded-md transition-colors ml-1"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button with iOS safe area and touch size */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp com Gabriela Bergamaschi"
        className="relative group w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#315B65] text-white flex items-center justify-center shadow-lg hover:shadow-2xl hover:bg-[#23424a] active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#B9DCE5]"
      >
        {/* Soft pulse ring */}
        <span
          className="absolute -inset-1 rounded-full bg-[#315B65]/20 animate-ping opacity-60 pointer-events-none"
          style={{ animationDuration: "3s" }}
          aria-hidden="true"
        />

        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-[#B9DCE5] group-hover:scale-110 transition-transform" />
      </a>
    </aside>
  );
};
