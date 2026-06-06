import { LogoMark } from "./Logo";
import { InstagramIcon, WhatsAppIcon } from "./icons";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  NAV_LINKS,
  whatsappLink,
} from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-slate-300">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <LogoMark size={36} />
            <p className="font-display text-xl font-extrabold text-white">
              Carla<span className="text-brand-500">.</span>Matos
            </p>
          </div>
          <p className="mt-3 max-w-xs text-sm text-slate-400">
            Personal Trainer especializada em emagrecimento, hipertrofia e
            qualidade de vida.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Carla Matos"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-brand-400 hover:text-brand-400"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={whatsappLink("Olá Carla! Vim pelo site.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da Carla Matos"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-brand-400 hover:text-brand-400"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <nav className="flex flex-col gap-2 text-sm">
          <p className="mb-1 font-semibold text-white">Navegação</p>
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-slate-400 transition-colors hover:text-brand-400"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-2 text-sm">
          <p className="mb-1 font-semibold text-white">Contato</p>
          <a
            href={whatsappLink("Olá Carla! Vim pelo site.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-brand-400"
          >
            <WhatsAppIcon className="h-4 w-4" />
            +55 91 98604-7531
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-brand-400"
          >
            <InstagramIcon className="h-4 w-4" />
            {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Carla Matos • Todos os direitos reservados
      </div>
    </footer>
  );
}
