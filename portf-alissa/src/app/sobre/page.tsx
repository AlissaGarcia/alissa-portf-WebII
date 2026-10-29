
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre mim | Portfólio de Alissa",
  description:
    "Conheça a trajetória acadêmica, profissional e os interesses de Alissa Garcia Moreira.",
};

export default function Sobre() {
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
          <Link href="/sobre" className="text-[#ff70b7]">
            ./sobre
          </Link>
          <Link href="/projetos" className="text-zinc-400 hover:text-[#ff70b7]">
            ./projetos
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-20">
        <p className="mb-5 font-mono text-sm text-[#ff70b7]">
          &gt; carregando_perfil.exe
        </p>

        <h1 className="mb-10 text-4xl font-bold tracking-tight sm:text-5xl">
          Sobre <span className="text-[#ff70b7]">mim.</span>
        </h1>

        <div className="overflow-hidden rounded-xl border border-[#6b304e] bg-[#101018] shadow-[0_0_35px_rgba(255,112,183,0.05)]">
          <div className="flex items-center gap-2 border-b border-[#6b304e] bg-[#171721] px-5 py-4">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#ff70b7]" />
            <span className="ml-3 font-mono text-xs text-zinc-400">
              sobre_mim.md
            </span>
          </div>

          <div className="p-6 sm:p-10">
            <p className="mb-6 font-mono text-sm text-[#ff70b7]">
              # Quem sou eu?
            </p>

            <p className="mb-6 text-sm leading-8 text-zinc-300 sm:text-base">
              Sou psicopedagoga e estudante de Análise e Desenvolvimento
              de Sistemas no Instituto Federal do Ceará. Minha trajetória
              reúne experiências na educação e o interesse pelo desenvolvimento
              de soluções tecnológicas.
            </p>

            <p className="mb-10 text-sm leading-8 text-zinc-300 sm:text-base">
              Tenho interesse em tecnologia educacional, inclusão,
              acessibilidade e inovação. Busco ampliar meus conhecimentos
              e desenvolver projetos que contribuam para a aprendizagem,
              a resolução de problemas e a construção de soluções úteis
              para a sociedade.
            </p>

            <div className="mb-8 border-l-2 border-[#ff70b7] bg-[#171721] p-5">
              <p className="mb-3 font-mono text-sm text-[#ff70b7]">
                &gt; minhas_áreas
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="rounded border border-[#6b304e] px-3 py-2 font-mono text-xs text-[#ffacd4]">
                  Educação
                </span>
                <span className="rounded border border-[#6b304e] px-3 py-2 font-mono text-xs text-[#ffacd4]">
                  Tecnologia
                </span>
                <span className="rounded border border-[#6b304e] px-3 py-2 font-mono text-xs text-[#ffacd4]">
                  Inclusão
                </span>
                <span className="rounded border border-[#6b304e] px-3 py-2 font-mono text-xs text-[#ffacd4]">
                  Desenvolvimento Web
                </span>
                <span className="rounded border border-[#6b304e] px-3 py-2 font-mono text-xs text-[#ffacd4]">
                  Inovação
                </span>
              </div>
            </div>

            <div className="rounded-lg border border-[#30202c] p-5 font-mono text-sm leading-7">
              <p className="text-[#ff70b7]">const objetivo = {"{"}</p>
              <div className="pl-4">
                <p>
                  <span className="text-[#ffacd4]">aprender:</span>{" "}
                  <span className="text-emerald-300">true,</span>
                </p>
                <p>
                  <span className="text-[#ffacd4]">criar:</span>{" "}
                  <span className="text-emerald-300">true,</span>
                </p>
                <p>
                  <span className="text-[#ffacd4]">compartilhar:</span>{" "}
                  <span className="text-emerald-300">true</span>
                </p>
              </div>
              <p className="text-[#ff70b7]">{"};"}</p>
            </div>

            <Link
              href="/projetos"
              className="mt-8 inline-block rounded-md border border-[#ff70b7] bg-[#ff70b7] px-5 py-3 font-mono text-sm font-bold text-[#08080d] transition hover:bg-[#ffacd4]"
            >
              &gt; ./conhecer-projetos
            </Link>
          </div>

          <div className="border-t border-[#6b304e] px-5 py-3 font-mono text-xs text-zinc-500">
            <span className="text-[#ff70b7]">●</span> PERFIL CARREGADO
          </div>
        </div>
      </section>

      <footer className="mt-8 border-t border-[#30202c] px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 font-mono text-xs text-zinc-500">
          <p>
            <span className="text-[#ff70b7]">●</span>{" "}
            alissa@portfolio: ~/sobre
          </p>

          <p>© 2026 Alissa Garcia Moreira</p>
        </div>
      </footer>
    </main>
  );
}
