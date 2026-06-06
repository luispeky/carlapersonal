import { WhatsAppIcon } from "./icons";
import { whatsappLink } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Olá Carla! Vim pelo site e quero saber mais.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-glow transition-transform hover:scale-110"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
