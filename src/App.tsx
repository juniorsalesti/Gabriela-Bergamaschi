/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Diferenciais } from "./components/Diferenciais";
import { Sobre } from "./components/Sobre";
import { PilatesSection } from "./components/PilatesSection";
import { FisioterapiaSection } from "./components/FisioterapiaSection";
import { ExperienciaAtendimento } from "./components/ExperienciaAtendimento";
import { GaleriaVisual } from "./components/GaleriaVisual";
import { CtaSection } from "./components/CtaSection";
import { ContatoLocalizacao } from "./components/ContatoLocalizacao";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { WhatsAppConfigModal } from "./components/WhatsAppConfigModal";
import { DEFAULT_WHATSAPP_NUMBER } from "./config/site";
export default function App() {
  const [whatsAppNumber, setWhatsAppNumber] = useState<string>(() => {
    return localStorage.getItem("GB_WHATSAPP_NUMBER") || DEFAULT_WHATSAPP_NUMBER;
  });

  const [isConfigOpen, setIsConfigOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("GB_WHATSAPP_NUMBER", whatsAppNumber);
  }, [whatsAppNumber]);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#315B65] selection:bg-[#B9DCE5]/40 selection:text-[#315B65] flex flex-col font-sans">

      {/* Main Header */}
      <Header
        whatsAppNumber={whatsAppNumber}
        onOpenSettings={() => setIsConfigOpen(true)}
      />

      <main className="flex-1">
        {/* Seção 2: Hero de Impacto */}
        <Hero whatsAppNumber={whatsAppNumber} />

        {/* Seção 3: Faixa de Diferenciais */}
        <Diferenciais />

        {/* Seção 4: Sobre Gabriela */}
        <Sobre />

        {/* Seção 5: Pilates */}
        <PilatesSection />

        {/* Seção 6: Fisioterapia */}
        <FisioterapiaSection whatsAppNumber={whatsAppNumber} />

        {/* Seção 7: Experiência do Atendimento */}
        <ExperienciaAtendimento />

        {/* Seção 8: Galeria Visual */}
        <GaleriaVisual />

        {/* Seção 9: Chamada para Ação */}
        <CtaSection whatsAppNumber={whatsAppNumber} />

        {/* Seção 10: Localização e Contato */}
        <ContatoLocalizacao whatsAppNumber={whatsAppNumber} />
      </main>

      {/* Seção 11: Footer */}
      <Footer whatsAppNumber={whatsAppNumber} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp whatsAppNumber={whatsAppNumber} />

      {/* Settings Modal */}
      <WhatsAppConfigModal
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
        currentNumber={whatsAppNumber}
        onSaveNumber={(num) => setWhatsAppNumber(num)}
      />
    </div>
  );
}
