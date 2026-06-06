"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { CalendarIcon, CloseIcon, MenuIcon } from "./icons";
import { NAV_LINKS } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-black/5 bg-white/80 py-3 backdrop-blur-xl shadow-soft dark:border-white/10 dark:bg-ink/80"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-page flex items-center justify-between">
        <a href="#inicio" aria-label="Carla Matos — início">
          <Logo size={36} />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-current/70 transition-colors hover:text-brand-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contato" className="btn-primary hidden text-xs sm:inline-flex">
            <CalendarIcon className="h-4 w-4" />
            Agendar
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-current/15 lg:hidden"
          >
            {open ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="container-page flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium transition-colors hover:bg-brand-500/10 hover:text-brand-500"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2"
          >
            Agendar Avaliação
          </a>
        </nav>
      </div>
    </header>
  );
}
