
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos | Portfólio de Alissa",
  description:
    "Conheça os projetos acadêmicos, educacionais e tecnológicos de Alissa Garcia Moreira.",
};

export default function Projetos() {
  return (
    <main className="min-h-screen bg-[#08080d] text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5">
        <Link
          href="/"
          className="text-xl font-bold tracking-wide text-[#ff70b7]"
        >
          alissa.dev_
        </Link>

        <div className="flex flex-wrap gap-5 font-mono text-sm">
          <Link href="/" className="text-zinc-400 hover:text-[#ff70b7]">
            ./inicio
          </Link>
          <Link href="/sobre" className="text-zinc-400 hover:text-[#ff70b7]">
            ./sobre
          </Link>
          <Link href="/projetos" className="text-[#ff70b7]">
            ./projetos
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <p className="mb-5 font-mono text-sm text-[#ff70b7]">
          &gt; executando projetos.exe
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Meus <span className="text-[#ff70b7]">projetos.</span>
        </h1>

        <p className="mt-6 max-w-2xl leading-8 text-zinc-400">
          Um pouco do que venho desenvolvendo e aprendendo na conexão
          entre tecnologia, educação e inovação.
        </p>

        <div className="mt-10 flex flex-wrap gap-3 font-mono text-xs">
          <span className="rounded-md border border-[#6b304e] bg-[#171721] px-4 py-2 text-[#ff70b7]">
            [ TODOS ]
          </span>
          <span className="rounded-md border border-[#30202c] px-4 py-2 text-zinc-400">
            EDUCAÇÃO
          </span>
          <span className="rounded-md border border-[#30202c] px-4 py-2 text-zinc-400">
            DESENVOLVIMENTO
          </span>
          <span className="rounded-md border border-[#30202c] px-4 py-2 text-zinc-400">
            EXTENSÃO
          </span>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article className="overflow-hidden rounded-xl border border-[#6b304e] bg-[#101018] transition hover:-translate-y-1 hover:border-[#ff70b7]">
            <div className="flex items-center gap-2 border-b border-[#30202c] bg-[#171721] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff70b7]" />
              <span className="ml-2 font-mono text-xs text-zinc-500">
                lunetras.project
              </span>
            </div>

            <div className="p-6">
              <p className="mb-4 font-mono text-xs text-[#ff70b7]">
                01 // SOFTWARE EDUCACIONAL
              </p>

              <h2 className="mb-3 text-2xl font-bold">LUNETRAS</h2>

              <p className="min-h-24 text-sm leading-7 text-zinc-400">
                Software educacional voltado ao apoio à avaliação da
                aprendizagem da leitura e da escrita nos anos iniciais
                do Ensino Fundamental.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 font-mono text-xs">
                <span className="rounded border border-[#6b304e] px-2 py-1 text-[#ffacd4]">
                  Educação
                </span>
                <span className="rounded border border-[#6b304e] px-2 py-1 text-[#ffacd4]">
                  Tecnologia
                </span>
              </div>

              <div className="mt-6 border-t border-[#30202c] pt-4">
                <p className="font-mono text-xs text-zinc-500">
                  status: em desenvolvimento
                </p>
              </div>
            </div>
          </article>

          <article className="overflow-hidden rounded-xl border border-[#30202c] bg-[#101018] transition hover:-translate-y-1 hover:border-[#ff70b7]">
            <div className="flex items-center gap-2 border-b border-[#30202c] bg-[#171721] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff70b7]" />
              <span className="ml-2 font-mono text-xs text-zinc-500">
                estudos.code
              </span>
            </div>

            <div className="p-6">
              <p className="mb-4 font-mono text-xs text-[#ff70b7]">
                02 // ENSINO
              </p>

              <h2 className="mb-3 text-2xl font-bold">
                Grupo de Estudos de Programação
              </h2>

              <p className="min-h-24 text-sm leading-7 text-zinc-400">
                Iniciativa de ensino de lógica de programação, algoritmos,
                fluxogramas e introdução às linguagens de programação,
                com atividades e desafios práticos.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 font-mono text-xs">
                <span className="rounded border border-[#6b304e] px-2 py-1 text-[#ffacd4]">
                  Lógica
                </span>
                <span className="rounded border border-[#6b304e] px-2 py-1 text-[#ffacd4]">
                  Linguagem C
                </span>
              </div>

              <div className="mt-6 border-t border-[#30202c] pt-4">
                <p className="font-mono text-xs text-zinc-500">
                  status: atividade acadêmica
                </p>
              </div>
            </div>
          </article>

          <article className="overflow-hidden rounded-xl border border-[#30202c] bg-[#101018] transition hover:-translate-y-1 hover:border-[#ff70b7]">
            <div className="flex items-center gap-2 border-b border-[#30202c] bg-[#171721] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff70b7]" />
              <span className="ml-2 font-mono text-xs text-zinc-500">
                mundo-ads.event
              </span>
            </div>

            <div className="p-6">
              <p className="mb-4 font-mono text-xs text-[#ff70b7]">
                03 // EXTENSÃO
              </p>

              <h2 className="mb-3 text-2xl font-bold">
                Mundo ADS
              </h2>

              <p className="min-h-24 text-sm leading-7 text-zinc-400">
                Participação na organização e realização de iniciativas
                acadêmicas voltadas à tecnologia, à inclusão, à inovação
                e ao compartilhamento de conhecimentos.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 font-mono text-xs">
                <span className="rounded border border-[#6b304e] px-2 py-1 text-[#ffacd4]">
                  Extensão
                </span>
                <span className="rounded border border-[#6b304e] px-2 py-1 text-[#ffacd4]">
                  Tecnologia
                </span>
              </div>

              <div className="mt-6 border-t border-[#30202c] pt-4">
                <p className="font-mono text-xs text-zinc-500">
                  status: iniciativas acadêmicas
                </p>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-12 rounded-xl border border-[#30202c] bg-[#101018] p-6 sm:p-8">
          <p className="mb-4 font-mono text-sm text-[#ff70b7]">
            &gt; próximo_passo
          </p>

          <h2 className="text-xl font-bold sm:text-2xl">
            Sempre aprendendo. Sempre desenvolvendo.
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
            Cada projeto representa uma oportunidade de aprender novas
            tecnologias, colaborar com outras pessoas e transformar
            ideias em experiências práticas.
          </p>

          <Link
            href="/sobre"
            className="mt-6 inline-block rounded-md border border-[#ff70b7] px-5 py-3 font-mono text-sm text-[#ff70b7] transition hover:bg-[#ff70b7] hover:text-[#08080d]"
          >
            &gt; ./minha-trajetoria
          </Link>
        </div>
      </section>

      <footer className="border-t border-[#30202c] px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 font-mono text-xs text-zinc-500">
          <p>
            <span className="text-[#ff70b7]">●</span>{" "}
            alissa@portfolio: ~/projetos
          </p>

          <p>© 2026 Alissa Garcia Moreira</p>
        </div>
      </footer>
    </main>
  );
}
