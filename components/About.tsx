import Reveal from "./Reveal";

const HIGHLIGHTS = [
  { title: "Formação", text: "Graduada em Educação Física." },
  { title: "Experiência", text: "4 anos atuando em academia com diferentes perfis." },
  { title: "Atendimento", text: "100% personalizado, com dedicação total a cada aluno." },
  { title: "Propósito", text: "Saúde, autoestima e qualidade de vida." },
];

export default function About() {
  return (
    <section id="sobre" className="container-page py-24">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">Sobre a Carla</span>
          <h2 className="section-title mt-3">
            Transformando vidas através do exercício físico
          </h2>
          <p className="mt-6 text-base leading-relaxed text-current/70">
            Sempre gostei de cuidar das pessoas e encontrei no exercício físico
            uma forma de transformar vidas. Sou formada em Educação Física e
            atuei por 4 anos em academia, adquirindo ampla experiência no
            acompanhamento de alunos com diferentes perfis e objetivos.
          </p>
          <p className="mt-4 text-base leading-relaxed text-current/70">
            Com o tempo, percebi que poderia oferecer um atendimento mais
            completo e personalizado, o que me levou a atuar exclusivamente como
            personal trainer. Hoje, meu propósito é ajudar pessoas a
            conquistarem saúde, autoestima e qualidade de vida por meio de
            treinos práticos, eficientes e feitos sob medida.
          </p>
          <a href="#contato" className="btn-primary mt-8">
            Quero Treinar com a Carla
          </a>
        </Reveal>

        <Reveal delay={150} className="grid grid-cols-2 gap-5">
          {HIGHLIGHTS.map((h) => (
            <div
              key={h.title}
              className="rounded-2xl border border-black/5 bg-brand-50/60 p-6 transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="font-display text-lg font-semibold text-brand-500">
                {h.title}
              </h3>
              <p className="mt-2 text-sm text-current/70">{h.text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
