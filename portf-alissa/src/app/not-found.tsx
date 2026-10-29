
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#08080d] px-6 text-white">
      <section className="w-full max-w-xl overflow-hidden rounded-xl border border-[#6b304e] bg-[#101018] shadow-[0_0_35px_rgba(255,112,183,0.08)]">
        <div className="flex items-center gap-2 border-b border-[#6b304e] bg-[#171721] px-5 py-4">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#ff70b7]" />
          <span className="ml-3 font-mono text-xs text-zinc-400">
            erro_404.terminal
          </span>
        </div>

        <div className="p-8 text-center sm:p-12">
          <p className="font-mono text-sm text-[#ff70b7]">
            &gt; erro: rota_nao_encontrada
          </p>

          <h1 className="my-6 text-7xl font-bold text-[#ff70b7] sm:text-8xl">
            404<span className="animate-pulse">_</span>
          </h1>

          <h2 className="text-xl font-bold sm:text-2xl">
            Ops! Página não encontrada.
          </h2>

          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-zinc-400">
            O endereço que você tentou acessar não existe ou foi
            digitado incorretamente. Que tal voltar ao início?
          </p>

          <div className="mt-8 rounded-md border border-[#30202c] bg-[#08080d] p-4 text-left font-mono text-sm">
            <p className="text-zinc-500">
              $ locate page
            </p>
            <p className="mt-2 text-red-400">
              Error: 404 - File not found
            </p>
            <p className="mt-1 text-emerald-300">
              $ system.waiting_for_input_
            </p>
          </div>

          <Link
            href="/"
            className="mt-8 inline-block rounded-md border border-[#ff70b7] bg-[#ff70b7] px-6 py-3 font-mono text-sm font-bold text-[#08080d] transition hover:bg-[#ffacd4]"
          >
            &gt; voltar_para_home
          </Link>
        </div>

        <div className="border-t border-[#6b304e] px-5 py-3 font-mono text-xs text-zinc-500">
          <span className="text-[#ff70b7]">●</span> SYSTEM ONLINE
        </div>
      </section>
    </main>
  );
}
