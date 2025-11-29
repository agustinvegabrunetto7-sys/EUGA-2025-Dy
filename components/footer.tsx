"use client"

import { ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative py-8 px-4 border-t border-white/20 glass-panel mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-slate-600 text-sm font-medium">
          © {new Date().getFullYear()} Estudiantes Unidos — Todos los derechos reservados.
        </div>

        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-celeste-100 text-celeste-600 hover:bg-celeste-200 transition-colors"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  )
}
