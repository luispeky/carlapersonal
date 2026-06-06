import Image from "next/image";
import Reveal from "./Reveal";

const RESULTS = [
  "/img/resultado1.png",
  "/img/resultado2.png",
  "/img/resultado3.png",
];

export default function Results() {
  return (
    <section id="resultados" className="container-page py-24 text-center">
      <Reveal>
        <span className="eyebrow">Resultados</span>
        <h2 className="section-title mx-auto mt-3 max-w-2xl">
          Resultados reais de quem confiou no processo
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-current/70">
          Dedicação, constância e acompanhamento profissional. Veja algumas das
          transformações dos alunos.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {RESULTS.map((src, i) => (
          <Reveal key={src} delay={i * 120}>
            <div className="group relative overflow-hidden rounded-3xl shadow-soft">
              <Image
                src={src}
                alt={`Resultado de aluno ${i + 1}`}
                width={600}
                height={800}
                className="h-[420px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 translate-y-3 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                Transformação real
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
