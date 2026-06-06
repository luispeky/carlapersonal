export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefixa um caminho de asset estático com o basePath (necessario no GitHub Pages). */
export function asset(path: string) {
  return `${BASE_PATH}${path}`;
}

export const WHATSAPP_NUMBER = "5591986047531";

export const INSTAGRAM_URL = "https://www.instagram.com/c.matos_";
export const INSTAGRAM_HANDLE = "@c.matos_";

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#resultados", label: "Resultados" },
  { href: "#contato", label: "Contato" },
];
