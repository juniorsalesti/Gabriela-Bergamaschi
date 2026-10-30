import React, { useState } from "react";
import { Settings, X, Check, PhoneCall, Info } from "lucide-react";
import { DEFAULT_WHATSAPP_NUMBER } from "../config/site";

interface WhatsAppConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentNumber: string;
  onSaveNumber: (num: string) => void;
}

export const WhatsAppConfigModal: React.FC<WhatsAppConfigModalProps> = ({
  isOpen,
  onClose,
  currentNumber,
  onSaveNumber,
}) => {
  const [inputValue, setInputValue] = useState(currentNumber);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanDigits = inputValue.replace(/\D/g, "");
    if (cleanDigits.length >= 10) {
      onSaveNumber(cleanDigits);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 1200);
    }
  };

  const handleReset = () => {
    setInputValue(DEFAULT_WHATSAPP_NUMBER);
    onSaveNumber(DEFAULT_WHATSAPP_NUMBER);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FAF9F6] border border-[#315B65]/20 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative text-left">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#777A78] hover:text-[#315B65] rounded-full transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#B9DCE5]/40 text-[#315B65] flex items-center justify-center">
            <Settings className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-xl text-[#315B65]">
              Configuração do WhatsApp
            </h3>
            <p className="text-xs text-[#777A78]">
              Central de direcionamento de mensagens
            </p>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-4 mb-5 text-xs text-amber-900 flex items-start gap-3">
          <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Contato pendente de configuração:</p>
            <p className="mt-1 text-amber-800 leading-relaxed">
              O número oficial de Gabriela Bergamaschi pode ser definido permanentemente em{" "}
              <code className="bg-amber-100 px-1 py-0.5 rounded font-mono text-[11px]">
                src/config/site.ts
              </code>{" "}
              ou testado no formulário abaixo.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="wa-input"
              className="block text-xs font-semibold uppercase tracking-wider text-[#315B65] mb-1.5"
            >
              Número do WhatsApp (com DDI 55 e DDD)
            </label>
            <div className="relative">
              <PhoneCall className="w-4 h-4 text-[#777A78] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="wa-input"
                type="tel"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ex: 5519999999999"
                className="w-full bg-white border border-[#315B65]/20 rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#315B65] focus:outline-none focus:border-[#315B65]"
              />
            </div>
            <p className="text-[11px] text-[#777A78] mt-1.5">
              Exemplo para Campinas: <span className="font-mono">55 19 99999-9999</span> (apenas números: 5519999999999)
            </p>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#315B65] hover:bg-[#23424a] transition-all"
            >
              {success ? (
                <>
                  <Check className="w-4 h-4 text-[#B9DCE5]" />
                  <span>Atualizado!</span>
                </>
              ) : (
                <span>Salvar para testes</span>
              )}
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="py-3 px-4 rounded-full text-xs text-[#777A78] hover:text-[#315B65] border border-[#315B65]/20 hover:bg-white transition-all"
            >
              Restaurar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
