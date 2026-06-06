import Image from "next/image";
import { LogoMark } from "./Logo";
import { CalendarIcon, WhatsAppIcon } from "./icons";
import { asset, whatsappLink } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-ink pt-28 text-white"
    >
      {/* decorative gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-600/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(83,125,216,0.15),transparent_55%)]" />
      </div>

      <div className="container-page relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div className="reveal is-visible">
          <span className="eyebrow text-brand-300">
            Personal Trainer
          </span>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
            Sua melhor versão{" "}
            <span className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">
              começa aqui.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-300">
            Acompanhamento especializado em emagrecimento, hipertrofia e
            qualidade de vida — com treinos práticos, eficientes e feitos sob
            medida para você.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#contato" className="btn-primary">
              <CalendarIcon className="h-4 w-4" />
              Agendar Avaliação
            </a>
            <a
              href={whatsappLink(
                "Olá Carla! Vim pelo site e quero saber mais sobre os treinos."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-white"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {[
              { n: "4+", l: "anos de experiência" },
              { n: "100%", l: "personalizado" },
              { n: "+50", l: "alunos atendidos" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-display text-3xl font-bold text-white">
                  {s.n}
                </dt>
                <dd className="mt-1 text-xs text-slate-400">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal is-visible relative mx-auto w-full max-w-md">
          <div className="absolute inset-0 -rotate-6 rounded-[2rem] bg-gradient-to-tr from-brand-500 to-brand-300 opacity-30 blur-sm" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-glow">
            <Image
              src={asset("/img/FotoCarla.jpeg")}
              alt="Carla Matos, Personal Trainer"
              width={640}
              height={800}
              priority
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-5 -left-5 flex animate-float items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl">
            <LogoMark size={36} />
            <div>
              <p className="font-display text-sm font-semibold">Carla Matos</p>
              <p className="text-xs text-slate-300">
                Formada em Educação Física
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* curve bottom */}
      <div className="relative h-16 bg-white dark:bg-ink">
        <div className="absolute inset-x-0 -top-px h-16 rounded-t-[3rem] bg-white dark:bg-ink" />
      </div>
    </section>
  );
}
