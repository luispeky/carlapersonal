"use client";

import { FormEvent, useState } from "react";
import Reveal from "./Reveal";
import { InstagramIcon, MapPinIcon, WhatsAppIcon } from "./icons";
import { INSTAGRAM_URL, whatsappLink } from "@/lib/site";

export default function Contact() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const texto =
      `Olá, meu nome é ${form.nome}.\n` +
      `Email: ${form.email}\n` +
      `Mensagem: ${form.mensagem}`;
    window.open(whatsappLink(texto), "_blank", "noopener,noreferrer");
  }

  const field =
    "w-full rounded-2xl border border-black/10 bg-white px-5 py-4 text-sm outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-400/15 dark:border-white/10 dark:bg-white/5";

  return (
    <section id="contato" className="bg-brand-50/50 py-24 dark:bg-ink-soft/40">
      <div className="container-page grid gap-14 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">Contato</span>
          <h2 className="section-title mt-3">
            Pronta para começar a sua transformação?
          </h2>
          <p className="mt-5 max-w-md text-current/70">
            Preencha o formulário e fale diretamente comigo pelo WhatsApp. Vamos
            montar juntos o plano ideal para o seu objetivo.
          </p>

          <div className="mt-8 space-y-5 text-sm">
            <div className="flex gap-3">
              <a
                href={whatsappLink("Olá Carla! Quero agendar minha avaliação.")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar no WhatsApp"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500/10 text-brand-500 transition-all hover:-translate-y-0.5 hover:bg-brand-500 hover:text-white"
              >
                <WhatsAppIcon className="h-6 w-6" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500/10 text-brand-500 transition-all hover:-translate-y-0.5 hover:bg-brand-500 hover:text-white"
              >
                <InstagramIcon className="h-6 w-6" />
              </a>
            </div>
            <p className="flex items-center gap-3 text-current/70">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/10 text-brand-500">
                <MapPinIcon className="h-5 w-5" />
              </span>
              Atendimento presencial e online
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-black/5 bg-white p-7 shadow-soft dark:border-white/10 dark:bg-white/5"
          >
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Seu nome"
                required
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className={field}
              />
              <input
                type="email"
                placeholder="Seu e-mail"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={field}
              />
              <textarea
                placeholder="Sua mensagem"
                rows={4}
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                className={`${field} resize-none`}
              />
              <button type="submit" className="btn-primary w-full">
                <WhatsAppIcon className="h-4 w-4" />
                Enviar pelo WhatsApp
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
