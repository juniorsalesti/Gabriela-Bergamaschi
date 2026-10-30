import React, { useState } from "react";
import { MessageCircle, Instagram, MapPin, Send, Check, ExternalLink } from "lucide-react";
import {
  LOCATION_FULL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  getWhatsAppUrl,
} from "../config/site";

interface ContatoLocalizacaoProps {
  whatsAppNumber: string;
}

export const ContatoLocalizacao: React.FC<ContatoLocalizacaoProps> = ({
  whatsAppNumber,
}) => {
  const [customMsg, setCustomMsg] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const defaultMsg =
    "Olá, Gabriela! Conheci seu site e gostaria de saber mais sobre os atendimentos de Pilates e fisioterapia.";

  const finalMessage = customMsg.trim() || defaultMsg;
  const whatsappUrl = getWhatsAppUrl(whatsAppNumber, finalMessage);

  const handleShareClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const googleMapsExternalUrl = "https://maps.google.com/?q=Swiss+Park,+Campinas+-+SP";

  return (
    <section id="contato" className="py-14 sm:py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Info & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-[#A9B9AE] mb-2 sm:mb-3 block">
              Atendimento Exclusivo
            </span>

            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#315B65] font-normal leading-snug sm:leading-tight">
              Vamos conversar?
            </h2>

            <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-[#777A78] leading-relaxed">
              Entre em contato para tirar dúvidas e conhecer as possibilidades de atendimento.
            </p>

            {/* Professional Identity Card */}
            <div className="mt-6 sm:mt-8 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#FAF9F6] border border-[#315B65]/10 flex flex-col gap-5 sm:gap-6">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#315B65] font-normal">
                  Gabriela Bergamaschi
                </h3>
                <p className="text-xs sm:text-sm uppercase tracking-wider text-[#777A78] font-medium mt-1">
                  Pilates e Fisioterapia
                </p>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#315B65] mt-2.5 sm:mt-3">
                  <MapPin className="w-4 h-4 text-[#315B65] shrink-0" />
                  <span className="font-medium">{LOCATION_FULL}</span>
                </div>
              </div>

              {/* Direct Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-3 sm:pt-4 border-t border-[#315B65]/10">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 min-h-[48px] px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#315B65] hover:bg-[#23424a] active:scale-98 transition-all duration-300 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-[#B9DCE5]" />
                  <span>Chamar no WhatsApp</span>
                </a>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#315B65] bg-white border border-[#315B65]/20 hover:border-[#315B65] active:bg-[#FAF9F6] transition-all duration-300"
                >
                  <Instagram className="w-4 h-4 text-[#315B65]" />
                  <span>@{INSTAGRAM_HANDLE.split(".")[0]}</span>
                </a>
              </div>

              {/* Interactive Quick Note helper */}
              <div className="pt-2">
                <label
                  htmlFor="msg-preview"
                  className="block text-[11px] sm:text-xs font-medium text-[#777A78] mb-1.5"
                >
                  Mensagem que será enviada pelo WhatsApp:
                </label>
                <div className="relative">
                  <input
                    id="msg-preview"
                    type="text"
                    value={customMsg}
                    onChange={(e) => setCustomMsg(e.target.value)}
                    placeholder={defaultMsg}
                    className="w-full text-sm text-[#315B65] bg-white border border-[#315B65]/20 rounded-xl px-3.5 py-2.5 pr-9 focus:outline-none focus:border-[#315B65] transition-colors"
                  />
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-[#315B65] hover:text-[#23424a]"
                    title="Enviar agora"
                    aria-label="Enviar mensagem no WhatsApp"
                  >
                    <Send className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Swiss Park, Campinas Map & Location Card */}
          <div className="lg:col-span-6 flex flex-col w-full">
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-md sm:shadow-lg border border-[#315B65]/10 bg-[#FAF9F6]">
              {/* Map container with touch scroll safety */}
              <div className="relative h-[240px] sm:h-[380px] w-full bg-[#B9DCE5]/20">
                <iframe
                  title="Mapa de localização no Swiss Park, Campinas - SP"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14695.54884210134!2d-47.07548773955078!3d-22.954366600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c886a1df0b89%3A0xc3c5f928e1dc4a93!2sSwiss%20Park%2C%20Campinas%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
                  className="w-full h-full border-0 filter contrast-95 opacity-90"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Floating Map Pin Overlay */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-md border border-[#315B65]/10 flex items-center gap-2 text-[11px] sm:text-xs">
                  <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#315B65]" />
                  <span className="font-semibold text-[#315B65]">Swiss Park • Campinas, SP</span>
                </div>

                {/* Direct Google Maps open button on mobile */}
                <a
                  href={googleMapsExternalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 sm:hidden bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-[#315B65]/10 flex items-center gap-1.5 text-[11px] font-semibold text-[#315B65]"
                >
                  <span>Abrir no Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Footer Information */}
              <div className="p-4 sm:p-6 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                <div>
                  <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#777A78] font-semibold">
                    Região de Atendimento
                  </p>
                  <p className="text-xs sm:text-sm font-serif text-[#315B65] mt-0.5">
                    Swiss Park e proximidades em Campinas — SP
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleShareClick}
                  className="text-xs font-semibold text-[#315B65] hover:text-[#23424a] flex items-center gap-1.5 transition-colors py-1"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Link copiado!</span>
                    </>
                  ) : (
                    <span>Compartilhar página</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
