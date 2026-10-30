/**
 * Site configuration & WhatsApp contact settings
 * Centralized for easy customization by the professional.
 */

// Replace with Gabriela's verified Brazilian number (format: 55 + DDD + number, digits only)
// Example: "5519987654321" (Campinas area code 19)
export const DEFAULT_WHATSAPP_NUMBER = "5519999999999";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá, Gabriela! Conheci seu site e gostaria de saber mais sobre os atendimentos de Pilates e fisioterapia.";

export const INSTAGRAM_HANDLE = "gabrielabergamaschi.pilates";
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

export const LOCATION_LABEL = "Swiss Park • Campinas, SP";
export const LOCATION_FULL = "Swiss Park, Campinas — SP";

import heroImg from "../assets/images/hero_pilates_studio_1793306760532.jpg";
import portraitImg from "../assets/images/gabriela_portrait.png";
import bodyAwarenessImg from "../assets/images/pilates_body_awareness_1793306761745.jpg";
import studioReformerImg from "../assets/images/pilates_reformer_studio_1793306763198.jpg";
import physiotherapyImg from "../assets/images/physiotherapy_movement_1793306763602.jpg";

export const IMAGES = {
  hero: heroImg,
  portrait: portraitImg,
  portraitUrl: "https://i.ibb.co/Y7vD9FVv/imagem-2026-10-29-185513406.png",
  bodyAwareness: bodyAwarenessImg,
  studioReformer: studioReformerImg,
  physiotherapy: physiotherapyImg,
};

export function getWhatsAppUrl(
  number: string = DEFAULT_WHATSAPP_NUMBER,
  message: string = DEFAULT_WHATSAPP_MESSAGE
): string {
  const cleanNumber = number.replace(/\D/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
