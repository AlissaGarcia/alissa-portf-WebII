
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Início | Portfólio de Alissa",
  description: "Portfólio pessoal e acadêmico de Alissa Garcia Moreira.",
};

export default function Home() {
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
          <Link href="/" className="text-[#ff70b7] hover:text-white">
            ./inicio
          </Link>
          <Link href="/sobre" className="text-zinc-400 hover:text-[#ff70b7]">
            ./sobre
          </Link>
          <Link href="/projetos" className="text-zinc-400 hover:text-[#ff70b7]">
            ./projetos
          </Link>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6">
        <section className="grid min-h-[70vh] items-center gap-12 py-16 md:grid-cols-2">
          <div>
            <p className="mb-6 font-mono text-sm text-[#ff70b7]">
              &gt; iniciando_portfolio.exe
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Olá, eu sou
              <span className="mt-2 block text-[#ff70b7]">
                Alissa Garcia
                <br />
                Moreira<span className="animate-pulse">_</span>
              </span>
            </h1>

            <p className="mt-7 max-w-xl leading-8 text-zinc-400">
              Estudante de Análise e Desenvolvimento de Sistemas,
              psicopedagoga e entusiasta da tecnologia, educação,
              inclusão e inovação.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/sobre"
                className="rounded-md border border-[#ff70b7] bg-[#ff70b7] px-5 py-3 font-mono text-sm font-bold text-[#08080d] transition hover:bg-[#ffacd4]"
              >
                &gt; ./sobre-mim
              </Link>

              <Link
                href="/projetos"
                className="rounded-md border border-[#ff70b7] px-5 py-3 font-mono text-sm text-[#ff70b7] transition hover:bg-[#ff70b7] hover:text-[#08080d]"
              >
                ./ver-projetos
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-[#6b304e] bg-[#101018] shadow-[0_0_35px_rgba(255,112,183,0.06)]">
            <div className="flex items-center gap-2 border-b border-[#6b304e] bg-[#171721] px-5 py-4">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#ff70b7]" />
              <span className="ml-3 font-mono text-xs text-zinc-400">
                perfil.ts
              </span>
            </div>

            <div className="overflow-x-auto p-6 font-mono text-sm leading-7">
              <p className="text-[#ff70b7]">
                const desenvolvedora = {"{"}
              </p>

              <div className="pl-4">
                <p>
                  <span className="text-[#ffacd4]">nome:</span>{" "}
                  <span className="text-emerald-300">
                    "Alissa Garcia Moreira",
                  </span>
                </p>

                <p>
                  <span className="text-[#ffacd4]">formacao:</span>{" "}
                  <span className="text-emerald-300">"ADS",</span>
                </p>

                <p className="text-[#ffacd4]">interesses: [</p>

                <div className="pl-4 text-emerald-300">
                  <p>"Tecnologia",</p>
                  <p>"Educação",</p>
                  <p>"Inclusão",</p>
                  <p>"Inovação"</p>
                </div>

                <p className="text-[#ffacd4]">],</p>

                <p>
                  <span className="text-[#ffacd4]">status:</span>{" "}
                  <span className="text-emerald-300">"aprendendo"</span>
                </p>
              </div>

              <p className="text-[#ff70b7]">{"};"}</p>

              <p className="mt-5 text-xs italic text-zinc-500">
                // transformando ideias em projetos
              </p>
            </div>

            <div className="flex justify-between border-t border-[#6b304e] px-5 py-3 font-mono text-xs">
              <span className="text-[#ff70b7]">
                ● SYSTEM ONLINE
              </span>
              <span className="text-zinc-500">UTF-8</span>
            </div>
          </div>
        </section>

        <section className="border-t border-[#30202c] py-12">
          <p className="mb-7 font-mono text-sm text-[#ff70b7]">
            &gt; explorar_diretorios
          </p>

          <div className="grid gap-5 md:grid-cols-3">
            <Link
              href="/sobre"
              className="group rounded-xl border border-[#30202c] bg-[#101018] p-6 transition hover:-translate-y-1 hover:border-[#ff70b7]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-[#ff70b7] font-mono text-xl text-[#ff70b7]">
                {"</>"}
              </div>

              <h2 className="mb-3 font-mono text-lg font-bold">
                sobre_mim/
              </h2>

              <p className="text-sm leading-6 text-zinc-400">
                Minha trajetória acadêmica, profissional e meus interesses.
              </p>

              <p className="mt-6 border-t border-[#30202c] pt-4 text-right text-xl text-[#ff70b7] transition group-hover:translate-x-1">
                →
              </p>
            </Link>

            <Link
              href="/projetos"
              className="group rounded-xl border border-[#30202c] bg-[#101018] p-6 transition hover:-translate-y-1 hover:border-[#ff70b7]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-[#ff70b7] font-mono text-xl text-[#ff70b7]">
                {"{ }"}
              </div>

              <h2 className="mb-3 font-mono text-lg font-bold">
                projetos/
              </h2>

              <p className="text-sm leading-6 text-zinc-400">
                Projetos acadêmicos, desenvolvimento de software e tecnologia.
              </p>

              <p className="mt-6 border-t border-[#30202c] pt-4 text-right text-xl text-[#ff70b7] transition group-hover:translate-x-1">
                →
              </p>
            </Link>

            <div className="rounded-xl border border-[#30202c] bg-[#101018] p-6 transition hover:border-[#ff70b7]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-[#ff70b7] font-mono text-xl text-[#ff70b7]">
                01
              </div>

              <h2 className="mb-3 font-mono text-lg font-bold">
                aprendizado/
              </h2>

              <p className="text-sm leading-6 text-zinc-400">
                Conhecimento, experimentação e evolução contínua na tecnologia.
              </p>

              <p className="mt-6 border-t border-[#30202c] pt-4 text-right font-mono text-xs text-[#ff70b7]">
                EM DESENVOLVIMENTO
              </p>
            </div>
          </div>
        </section>
      </div>

      <footer className="mt-4 border-t border-[#30202c] px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 font-mono text-xs text-zinc-500">
          <p>
            <span className="text-[#ff70b7]">●</span>{" "}
            alissa@portfolio: ~
          </p>

          <p>
            © 2026 Alissa Garcia Moreira | Desenvolvido com Next.js
          </p>
        </div>
      </footer>
    </main>
  );
}
