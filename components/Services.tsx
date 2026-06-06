import Reveal from "./Reveal";
import { ChecklistIcon, DumbbellIcon, PhoneIcon } from "./icons";

const SERVICES = [
  {
    Icon: DumbbellIcon,
    title: "Treino Personalizado",
    text: "Planos de treino exclusivos para seu objetivo: emagrecer, ganhar massa muscular ou melhorar desempenho.",
  },
  {
    Icon: PhoneIcon,
    title: "Acompanhamento Online",
    text: "Receba treinos, ajustes semanais e suporte direto com a Carla pelo WhatsApp.",
  },
  {
    Icon: ChecklistIcon,
    title: "Consultoria Completa",
    text: "Treino + hábitos + rotina + acompanhamento. Ideal para quem quer uma mudança completa.",
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="bg-brand-50/50 py-24 dark:bg-ink-soft/40"
    >
      <div className="container-page text-center">
        <Reveal>
          <span className="eyebrow">O que ofereço</span>
          <h2 className="section-title mx-auto mt-3 max-w-2xl">
            Serviços feitos sob medida para o seu objetivo
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div className="group h-full rounded-3xl border border-black/5 bg-white p-8 text-left shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-glow dark:border-white/10 dark:bg-white/5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-500 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                  <s.Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-current/70">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
